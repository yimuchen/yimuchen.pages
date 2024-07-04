---
name: numerical
title: Numerical computations
proficiency: Advanced
logo: "numerical.svg"
---

I have worked with many flavors of numerical libraries to solve numerical
computation required for physics analysis. Most of my work resolves around
statistical methods, though I have worked with frequency analysis and time
integral methods as well.

Some public example of my works regarding numerical methods

- C function pointer based libraries (using [GSL][gsl]):
  - A [library][unc] used for quick-and-dirty methods of uncertainty
    propagation through numerical operations.
- C++/Python object-oriented libraries (such as [CERN-ROOT][root])
  - A custom [implementation][sipm-oop] of a PDF used to model [SiPM
    responses][sipm-paper]
  - A more mixed [repository][tstar-code] of a full [physics
    analysis][tstar-paper].
- Array based libraries (such as [`numpy`][numpy] and [awkward
  arrays][awkward]):
  - [Reimplementation][sipm-arr] of the SiPM response function using
    [zfit][zfit]+[tensorflow][tensorflow] for parallelized distribution
    fitting.
  - Mixed [repository][emj-code] a full [physics analysis][emj-paper] (this
    repository requires a CERN account to access).

[gsl]: https://www.gnu.org/software/gsl/
[unc]: https://github.com/yimuchen/UserUtils/tree/master/MathUtils
[sipm-paper]: http://arxiv.org/pdf/1609.01181
[sipm-oop]: https://github.com/UMDCMS/SiPMCalib
[sipm-arr]: https://github.com/UMDCMS/sipmpdf
[root]: https://root.cern/
[numpy]: https://numpy.org/
[awkward]: https://awkward-array.org/doc/main/
[tstar-code]: https://github.com/NTUHEP-Tstar
[tstar-paper]: https://cds.cern.ch/record/2273911
[zfit]: https://github.com/zfit/zfit
[tensorflow]: https://www.tensorflow.org/
[emj-code]: https://gitlab.cern.ch/cms-emj/EMJAnalysis
[emj-paper]: https://arxiv.org/abs/2403.01556
