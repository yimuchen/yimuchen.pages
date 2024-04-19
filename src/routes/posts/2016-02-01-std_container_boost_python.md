---
title: STL containers in boost python
description: A simple recipe for getting std containers in boost python
tags: [recipes, c++, python, boost]
modified: 2016-02-01
banner: code_head_1.png
---

[Boost/python][boostpython], a small quirk is that there is that the mapping
from the C++ standard template library container classes to the python in-built
data types are not done for you! Here is q quick recipe on how this could be
done:

[boostpython]: http://www.boost.org/doc/libs/1_60_0/libs/python/doc/html/index.html

## Criteria

Suppose that you have some method in your C++ class `AClass` that returns or
receives a vector, you will need to expose the template class
`std::vector<MyClass>` to python for class `AClass` to fully function in your
python code. In short, we have the data types:

```cpp
class AClass;
class MyClass
std::vector<MyClass>;
```

That we wish to expose to python. `AClass` and `MyClass` is straight forward:
you expose it with the [usual methods][expose]. But the standard template
classes are a bit more tedious. For it to function like a python list, we need
to map the C++ operators with the python functions:

- `__len__`
- `__getitem__`
- `__setitem__`
- `__delitem__`
- `__iter__`
- `append`
- `clear`

[expose]: http://www.boost.org/doc/libs/1_60_0/libs/python/doc/html/tutorial/tutorial/exposing.html

## Setting up helper functions

Exposing functions that have C++ methods directly corresponding to is simple,
but for those that use the C++ operator, it would be a bit harder. To achieve
this, we set up the help class:

```cpp showLineNumber title="Helper class to assist with setting up the methods"
template<class T>
struct vector_item {
   typedef typename T::value_type V;

   static V& get( T& x, int i )
   {
      if( i < 0 ) { i += x.size(); }
      if( i >= 0 && (unsigned)i < x.size() ) { return x[i]; }
      else { IndexError(); return x[0]; }
   }
   static void set( T& x, int i, V& v )
   {
      if( i < 0 ) { i += x.size(); }
      if( i >= 0 && (unsigned)i < x.size() ) { x[i] = v; }
      else { IndexError(); }
   }
   static void del( T& x, int i )
   {
      if( i < 0 ) { i += x.size(); }
      if( i >= 0 && (unsigned)i < x.size() ) { x.erase( x.begin() + i ); }
      else { IndexError(); }
   }
   static void add( T& x, V& v )
   {
      x.push_back( v );
   }

   static bool in( T& x, V& v ) {
      return find_eq( x.begin, x.end, v ) != x.end();
   }
   static int index( T& x, V& v ) {
      int i = 0;
      for( typename T::const_iterator it = x.begin; it != x.end(); ++it, ++i )
         if( *it == v ) { return i; }
      return -1;
   }
};
```

this way we have a direct map to the python container access function to C++
template container functions, we could then proceed to expose the class the
usual way:

```cpp showLineNumber title="Calling the boost::python methods"
BOOST_PYTHON_MODULE( myModule ){
   boost::python::class_< std::vector<MyClass> >( "std_vector_MyClass" )
      .def("__len__"     , & std::vector<MyClass>::size)
      .def("clear"       , & std::vector<MyClass>::clear)
      .def("append"      , & vector_item< std::vector<MyClass> >::add
            , boost::python::with_custodian_and_ward<1, 2>())
      .def("__setitem__" , & vector_item< std::vector<MyClass> >::set
            , boost::python::with_custodian_and_ward<1, 2>())
      .def("__getitem__" , & vector_item< std::vector<MyClass> >::get
            , boost::python::return_value_policy<boost::python::copy_non_const_reference>())
      .def("__delitem__" , & vector_item< std::vector<MyClass> >::del)
      .def("__iter__"    , boost::python::iterator< std::vector<MyClass> >() )
      ;
}
```

## Shorthand macros

Furthermore, if there are multiple C++ vector type we want to expose, we could
define the C++ macros for a quick shorthand:

```cpp showLineNumber title="Macro for boost call shorthand"
#define MAKE_VECTOR_WRAPPER( CPP_NAME , PYTHON_NAME )                                        \
   boost::python::class_< CPP_NAME >( #PYTHON_NAME )                                         \
      .def("__len__"     , & CPP_NAME::size)                                                 \
      .def("clear"       , & CPP_NAME::clear)                                                \
      .def("append"      , & vector_item< CPP_NAME >::add                                    \
            , boost::python::with_custodian_and_ward<1, 2>())                                \
      .def("__setitem__" , & vector_item< CPP_NAME >::set                                    \
            , boost::python::with_custodian_and_ward<1, 2>())                                \
      .def("__getitem__" , & vector_item< CPP_NAME >::get                                    \
            , boost::python::return_value_policy<boost::python::copy_non_const_reference>()) \
      .def("__delitem__" , & vector_item< CPP_NAME >::del)                                   \
      .def("__iter__"    , boost::python::iterator< CPP_NAME >() )                           \
;
```

So that the addition for multiple vectors is made simply as:

```cpp showLineNumber title="All together with macros"
#include <boost/python.hpp>
#include <vector>
#include <string>

BOOST_PYTHON_MODULE( MyStdVector )
{
   MAKE_VECTOR_WRAPPER( std::vector< std::string > , std_vector_string );
   MAKE_VECTOR_WRAPPER( std::vector< double >      , std_vector_double );
}
```

Happy coding!

# End notes:

My recipe is essentially a modified version from
[here](https://wiki.python.org/moin/boost.python/StlContainers), what I have
added is:

- Remove all `const` keywords to assure that they will compile under any
  compile flag setting
- Added all namespace specification for user to expand.
- Written everything I could into the same code segment for copy-and-paste ease
  :)
