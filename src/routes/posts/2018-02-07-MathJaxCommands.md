---
title: Custom symbols in MathJax
description: Defining custom commands in MathJax
tags: [latex, javascript, computing]
---

I had previously written about defining [custom symbols in
latex](http://yimuchen.github.io/TEXTip_custompackage/), but the markup of the
article itself is exactly the opposite of what I was preaching in the article,
with the mathematics symbols written using horrific code. While I was using
those techniques in my own latex code, I did not know at the time that there
was a method of defining custom commands for the webpage math-typesetting
engine -- [MathJax](https://www.mathjax.org/) as well!

Essentially, you just need to add the following somewhere in your webpage
markup:

```html
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
MathJax.Hub.Config({
  TeX: {
    Macros: {
      pd:['\\frac{\\partial #1}{\\partial #2}',2]
      ttbar : '\\mathrm{t}\\bar{\\mathrm{t}}'
   }
}
</script>
```

Notice MathJax parses the JavaScript notation into regular latex! There are two
different notations used here for commands with and without arguments, but
understanding what is going on should be pretty simple.

Now my problem turn into, how do I translate symbol that I am using
automatically into this new format? For someone asking why this is necessary, I
am currently using 600+ symbols, including those used in CMS documents. The CMS
symbols add lots of little typesetting eyecandy, such as:

$$
\text{TeV/c}^2 \text{(regular latex)}\;\;v.s.\;\; \TeVcc \text{(CMS symbol)}
$$

that I would like to add into my blog if I could. Currently, I am using a very
hacky [python--regex](https://docs.python.org/3/library/re.html) program to
parse my latex symbols files and place them into my MathJax configuration file.
It's very buggy and prone to spitting out unusable JavaScript when dealing with
niche latex inputs, so I wouldn't share the code here. But I will share some of
my findings here:

* If you want to use upright text in a command, use something like `\mathrm`
  instead of `\text`: MathJax doesn't support `\textup`, and renders **all**
  inputs of the `\text` command literally, so all commands will appear in plain
  text (including the backslash) if placed inside the `\text` braces.
* Be careful of how backslashes are handled in your LaTeX--JavaScript
  translator. [Backslashes are always a pain to deal
  with](https://xkcd.com/1638/), as the string stored in the JavaScript
  settings will need additional parsing. The rule of thumb is that all
  backslashes in the JavaScript file should come in pairs.

So far I haven't come across a latex math command that is not supported by
MathJax (other than the odd behavior of the `\text` command), this includes
the typesetting macro-managing commands like `\hspace` (which is what is used
by CMS for the little improvement in units). If you are looking into keeping
mathematical notes on your webpage, hopefully this could be useful!
