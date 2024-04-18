---
position: Research assistant in the NTU CMS group
duration: Jan. 2015 - Jun. 2016
logo: https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/National_Taiwan_University_seal.svg/150px-National_Taiwan_University_seal.svg.png
---

### Search for excited top quark (CMS B2G-16-025)

The large mass of the [top quark][topquark] compared with all other standard
model particles [suggests][excitedtop] that what we know as the top quark may
not be a fundamental particle. This is a small team search effort to look for
potential excited states of the top quark. My own contributions to the effort
has been in the execution of the analysis code, as well as update all physics
variables used for the search from the data collected in "LHC Run 1" (8TeV) to
the LHC Run 2 (13TeV) standards. The final analysis result has been
[published][pub], and the analysis source code can be found [here][tstargit].

[topquark]: https://pdg.lbl.gov/2019/reviews/rpp2019-rev-top-quark.pdf
[excitedtop]: https://journals.aps.org/prd/abstract/10.1103/PhysRevD.42.815
[pub]: https://arxiv.org/abs/1711.10949
[tstargit]: https://github.com/NTUHEP-Tstar/TstarAnalysis

### bprime analysis kit development

The [bprime analysis kit][bprimekit] is a custom n-tuplizer for formatting CMS
data into "easy-to-use" format. Aside from updating the physics variable
calculation from Run 1 to Run 2 standards, as this work worked in parallel with
the excited top quark analysis, I helped initialized the efforts to modularize
of the code base for easier inclusion of alternate physic algorithms deployed
in the LHC Run 2. Compare the [commit][bpkstart] before my first commit and my final
[commit][bpkend].

[bprimekit]: https://github.com/ntuhep/bprimeKit/
[bpkstart]: https://github.com/ntuhep/bprimeKit/tree/32cb5a4acc50fffdf686e2ee3c3e6883f622243d
[bpkend]: https://github.com/ntuhep/bprimeKit/tree/73911d1f77ffdee4eebbb1b33ba24304865ae6a8
