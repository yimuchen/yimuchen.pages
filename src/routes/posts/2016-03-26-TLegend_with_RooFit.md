---
layout: post
title: Using TLegend in with RooPlot
description: Mixing the different plotting machanics of pure Root and RooFit
tags: [root, roofit, plotting]
banner: code_head_1.png
---

If you have used [Root](https://root.cern.ch/) and
[RooFit](https://root.cern.ch/roofit), you will notice that the two system uses
apparently different plotting interfaces. This poses some problems when you are
attempting to plot RooFit objects together with Root objects. In particular,
using [`TLegend`](https://root.cern.ch/doc/master/classTLegend.html) objects
alongside RooFit objects.

# Storing the plotted objects of Roofit

When plotting with RooFit, we typically use something below:

```cpp showLineNumber title="Example RooFit plotting routing"
#include "RooFit.h"
#include "RooRealVar.h"
#include "RooDataSet.h"
#include "RooGaussian.h"
#include "TCanvas.h"
#include "RooPlot.h"
#include "TAxis.h"
using namespace RooFit ;

void rf101_basics()
{
  RooRealVar x("x","x",-10,10) ;
  RooRealVar mean("mean","mean of gaussian",1,-10,10) ;
  RooRealVar sigma("sigma","width of gaussian",1,0.1,10) ;
  RooGaussian gauss("gauss","gaussian PDF",x,mean,sigma) ;

  RooPlot* xframe = x.frame(Title("Gaussian p.d.f.")) ;
  gauss.plotOn(xframe) ;
  sigma.setVal(3) ;
  gauss.plotOn(xframe,LineColor(kRed)) ;
}
```

Now we suppose we want to generate a
[`TLegend`](https://root.cern.ch/doc/master/classTLegend.html) object to legend
the objects that are being plotted. If you are familiar with `TLegend`, this is
done through the function:

```cpp nocopy
tlegend_instance.AddEntry( <tobject_pointer> , "<Description_in_legend>" , "<plot_settings>")
```

The problem now is what are the `TObject` pointer that we need to pass over to
the `TLegend` method? It cannot be the `gauss` instance in the code above,
since it is used twice in the plotting function, so what is it?

## Getting the plotted objects

It turns out when you call the
[`plotOn()`](https://root.cern.ch/doc/master/classRooAbsData.html#a41ef49f1f48f06ae9e5fd197c820aeb1)
method, it generates a
[`TGraph`](https://root.cern.ch/doc/master/classTGraph.html) object stored in
the [`RooPlot`](https://root.cern.ch/doc/master/classRooPlot.html) instance.
You could actually get a list of all these objects by the simple snippet:

```cpp
for( int i = 0 ; i < xframe->numItems() ; ++i ){
    cout << xframe->getObject( i )->GetName();
}
```

But there is a much better way of getting this thing, without having to guess
which name corresponds to which object you have just plotted on the `RooPlot`
object. By directly getting storing the object after you have called the
`plotOn()` method:

```cpp
gauss.plotOn(xframe);
TGraph* gauss_graph = (TGraph*)xframe->getObject( xframe->numItems() - 1 );
```

There is another merit of using this method. You could manually define the plot
style using ROOT flavored methods rather than using stuffing it all in the
`plotOn()` methods call!

```cpp
gauss_graph->SetFillStyle(3004);
gauss->SetLineColor( kGreen );
```

This gives you much more flexibility on the plots you are getting! Since not
all [TGraphPainter](https://root.cern.ch/doc/master/classTGraphPainter.html)
are not accessible with the RooFit `plotOn`
[methods](https://root.cern.ch/doc/master/classRooAbsPdf.html#ae19cd5285edf475b744819b72d3ca517).

So now we could use the `TLegend` object as expected with this method!

```cpp
TLegend l( 0.6, 0.6, 0.9, 0.9);
l.AddEntry( gauss_graph , "My Description" , "fl" );
l.Draw();
```

---

Hopefully this quick snippet has been useful!
