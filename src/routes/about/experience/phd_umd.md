---
position: Research assistant in the UMD CMS group
duration: Sep. 2018 - Today
logo: https://umd-brand.transforms.svdcdn.com/production/uploads/images/informal-seal.png?w=512&h=512&auto=compress%2Cformat&fit=crop&dm=1656362660&s=f147c43be06ac2a530c41260819e63a1
---

### Search for emerging jets (CMS EXO-22-015)

The [emerging jet][emjtheory] signature search for jets where the constituents
"emerge" some finite distance away from the hard scattering process. The
efforts of searching for such signatures at CMS has been made public
[here][emjexp], with this being my main graduate [thesis][thesis]. My own
contributions to this work includes:

- Migration of the [analysis][emjana] code from the [C++ based][emjcpp] methods
  to the new array-based ["coffea"][coffea] framework.
- Re-evaluated the correctness of flavor inference and scale factor
  calculations required for background estimation. Because exotic signatures
  are prone to being sensitive to physics quantities that are not well modelled
  by simulation, the background estimation is nearly fully data driven.
- Handling the [generation][emjgen] and validation of the new signal model.
  (The actual edits to the physics generator [Pythia][pythia] was done by
  [Kevin][kevin]).

[emjtheory]: https://arxiv.org/abs/1502.05409
[emjexp]: https://arxiv.org/abs/2403.01556
[thesis]: http://hdl.handle.net/1903/31682
[emjgen]: https://gitlab.cern.ch/cms-emj/emj-production
[pythia]: https://pythia.org/
[kevin]: https://github.com/kpedro88/pythia8/tree/emg/230
[emjana]: https://gitlab.cern.ch/cms-emj/EMJAnalysis/
[emjcpp]: https://gitlab.cern.ch/yichen/emj-analyze
[coffea]: https://coffeateam.github.io/coffea/

### HGCAL SiPM-on-Tileboard calibration test stand

Developing a test stand to allow for full [SiPM] dynamic range measurements for
SiPMs mounted on large electronic tileboards. Results for this work in
currently a [paper][standpaper] in progress. My own contributions to this work
includes:

- [Design][pulser] and assembly of the fast LED light source (sub-nanoseconds
  with non-specialized LED). The design was adapted from [this
  paper][pulser-orig].
- [Design][pulser] of supporting electronics for power/signal delivery and
  monitoring.
- Analysis code for extracting [SiPM operation parameters][sipm-param] from
  response function. [First iteration][fit1] was done in C++/RooFit, [second
  iteration][fit2] was done in `zfit` with support for GPU computation.
- Providing template for production calibration GUI, allowing for arbitrary
  code to be implemented by physicists without them needing to know external
  GUI software. [First][gui1] iteration was done with Python/ReactJS,
  [second][gui2] iteration was done with Python/Qt5, both aiming to as
  cross-platform as possible.

[standpaper]: https://icms.cern.ch/tools/publications/notes/entries/DN/2023/015
[sipm]: https://en.wikipedia.org/wiki/Silicon_photomultiplier
[pulser]: https://github.com/UMDCMS/SiPMCalibHW
[pulser-orig]: https://arxiv.org/pdf/1805.00822.pdf
[sipm-param]: https://arxiv.org/pdf/1609.01181.pdf
[fit1]: https://github.com/UMDCMS/SiPMCalib
[fit2]: https://github.com/UMDCMS/sipmpdf
[gui1]: https://github.com/UMDCMS/SiPMCalibControl
[gui2]: https://github.com/yimuchen/gui_example

### HGCAL SiPM-on-Tileboard light-yield simulation

Simulating the light-yield of the different scintillation tile optical and
geometry parameters. The results of this study are documented as an internal
[CMS document][tiledn]. The source code for this project can be found
[here][tilesim].

[tiledn]: https://icms.cern.ch/tools/publications/notes/entries/DN/2020/008
[tilesim]: https://github.com/yimuchen/HGCalTileSim
