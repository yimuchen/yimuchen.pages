---
title: NixOS - a year-long reflection
description: My take aways from my year running NixOS, what was great, what is bad, and why I ultimately choose something else
tags: [computing, tips]
banner: thoughts.jpg
---

About [one year ago](../2024-05-01-nix-portable), I started running
[NixOS][nixos] as my daily operating system, and after this one year and much
reflection, I've concluded that it is time to switch away form NixOS as my
primary system again. This blog post will serve as a snapshot of what it was
like for myself to be using NixOS, both a reflection of what I found appealing
about NixOS and my own learning along the way, as well as the frustrations that
ultimately pushed me away.

## What NixOS does well

### Closeness of package installation and configuration -- system replicability

I have two primary machines that I daily drive, and I want the experience
between these two machines to be as identical as possible, meaning that I want
the same set of programs installed with as-close-to-identical theming and
configurations as reasonably possible. This means keeping both the master
package list synced, along with a handful configurations files that is relevant
to the usage experience. The problem, however, comes when there are
configurations that are intrinsically different the 2 machines: slightly
different hardware capabilities requiring different driver packages; different
screen real estate requiring slightly different configuration fields; different
storage sizes means that backup handling is different and such. When you want
something to be "nearly the same", it gets stuck in the awkward middle ground
of not being able to stuff everything in a git repository and call it a day,
but at the same time much too cumbersome to maintain two separate instances of
the configurations files because too many entries needs to be kept in sync.

The Nix way of configuration systems is glorious: the requirement of a package
is almost immediately followed by the configuration snippet, and the
configuration being part of a programming logic means that logic can be built
into that extract configuration: the same package can be installed with
slightly different configuration flag based on the differences between the
multiple systems that you are maintaining, all the while retaining identical
configurations everywhere.

The fact that nix generates the actual configuration files that are placed in
the `/etc` or other directory during build time also means that it solves one
of my biggest grips managing configuration files on Linux: configuration files
can grow into monstrous multi-thousand line entities, while only three lines
are relevant to the configuration that I want to do. The nix configuration
system means that the "configuration" that I interact with (i.e. the `.nix`
file in question) needs only to keep those relevant lines massively reducing
the amount of stuff I need to keep in my configuration repository.

Another problem that the nix method of configuration solves is that
cross-package configurations can now be done in whatever method makes the most
sense for system maintainer: for example, instead of all "network
configurations" sitting in a gigantic file, with comment snippets that point to
the configuration of other programs that may or may not be out of date, nix
then allows the network configurations to sit directly behind each package
install, so that it is much easier to keep track of why configurations are
enabled, and also cleanly disables them when a package becomes obsolete.

The tools provided in nix is the closest thing I got to system replicability
(_not_ reproducibility, that is a distinction that I will discuss in a little
later). The fact that I can run `nix` as a local package manager also means I
can replicate all my terminal experience to the many computing clusters that I
need to interact with was the biggest push for me to start investigating how to
use nix in the first place.

### Exotic package dependencies and explicitly adding dependencies

Despite the best efforts of distribution maintainers, there will be odd cases
where the official package manager does not properly list "all" dependencies.
Maybe there is some odd format conversion routine of package "A" that requires
extra python package "B" and is not listed because it is not considered a
"core" feature of the primary package (One example that I ran into was the
conversion o [DXF][dxf] files to regular [SVG][svg] files using
[inkscape][inkscape]). So you go ahead and explicitly install this package in
the command line package "B". Great, now there is this dangling package "B"
that is labeled as being explicitly requested user, but to the package
manager, this package is completely unrelated to package "A"; the problem here
goes both ways: if you no longer use package "A" and uninstall it, you now have
this unnecessary package "B" floating around in your system; or after sometime
when performing system maintenance, you see that package "B" is not required by
anything else, so you uninstalled it because you think you don't need it,
thereby unwittingly breaking that fix for package "A".

The nix way of adding packages to the system means that there such dependencies
can actually be properly tracked: for example, when you install a packaged with
python as a dependency, you can [also specify][nix-python-shell] exactly which
addition python packages you want to go along with the python environment in
question.

### Temporary development installs

[C and C++ does not have package managers][cpm]. So when you need to build a
C/C++ project, you might be tempted to install the build dependencies with your
system package manager. Great! Now you have a whole host of low-level packages
that you don't know if you can or cannot install after you are done with the
project, or after you moved the project else where. This environment isolation
problem for C/C++ project is probably why all newer languages try to have this
function built in.

The [`shell`][nix-shell] function of `nix` essentially the functionality of
project-level package management to anything you might be using, regardless
what language you might be using (even `Fortran` if you still need to work with
that for whatever reason).

This also extends to the use of temporary packages for interactive sessions. If
there is a transient issue that you need to solve just this once, you can
quickly jump into a shell with the temporary diagnostic tools, and cleanly jump
out, where it would look like the package never existed in the first place (the
actual files are, of course, cleaned up after the next `nix-garbage-collect`
call).

### Explicitly defining what is exposed to the user -- functionality hiding

For certain packages, you might just want some of the functionality to be
exposed to the user: An example is that you might want to have the `icat`
module around from the [`kitty` terminal][kitty] for the fullest implementation
of the [image display protocol][kip], but still want to use your favorite
terminal emulator instead of `kitty`, and/or you don't want an extra
application entry taking up space in your application manager. In `nix`, there
are ways to make sure packages are installed, but only exposed to the user
through other functionalities.

I add this mainly as a nicety, not strictly as a "must have" for system
management. I like having my environment clean, but not to the extent that all
unused entries should be purged at all times.

---

In this one year experiment of daily driving NixOS, it made me think more
carefully about what package-manager systems should try and do, what makes for
a "good" system maintenance experience, and where other package managers
(system or otherwise) are failing to provide tools that is useful. And just for
gaining this experience, I would always be happy that I took this route of
trying to daily drive NixOS.

And now for the parts of NixOS that ultimately pushed me away from NixOS in
search of another solution.

## What makes Nix infuriating/frustrating

### Doing everything "the Nix way"

While I do think nix configurations is amazing, at the end of the day it is
just another layer of abstraction on top of the existing abstractions found in
Linux configuration system.

At some points, it felt redundant: Is having a line `vim.opt.relativenumber =
true` in a lua file really that much different than adding,
`neovim={enable=True; relativenumber=True}` in a nix file? Especially when
neovim's `lua` file will eventually contain additional items anyway?

At other points, it's frustrating when the abstractions are leaky. If the
option flag that you are looking for is not implemented in nix, you either have
to implement the functionality in nix yourself (after a year I still don't
properly understand how the think in terms of functional programming languages,
more on that later), or resort of having the "file contents" be injected into
configuration files, at which point the question becomes why don't I just
managed configurations directly with the configuration files instead of having
nix as an "extra layer"?

The worst problem is when nix abstraction bleeds into everything in a way that
is incompatible with any other systems. One of the more egregious examples I
ended up having was the configuration files I had for `zsh`, where I realized
that the generation of the `zsh` is so fragmented that I would be impossible to
move away from nix without major refactoring of how machine-specific
configurations are handled. Packages not being able to be ported between `Nix`
systems and other [`FHS`][fhs]-based systems was already becoming problematic,
and it hit me that if my _configurations_ were going this route as well, how
much am I really giving up for the promise of reproducibility?

### No proper method of temporarily pinning a package

While there is a promise of reproducibility and rollback on the system level,
what I found in practice is that getting the nix to actually install packages
that was not on the `HEAD` of the `nixpkgs` channels was incredibly involved.
Here is an example that actually happened to myself: there was a regression in
a GUI application ([KiCad][kicad] in this case), where I need to roll back to version
`8.0.X` while the leading branch is at `8.0.Y`. To do so in nix, I need to
either:

- Split my repository reference [`nixpkgs`][nixpkgs] into `nixpkgs-unstable`
  (rolling release) and `nixpkgs-24.11` (latest stable), and point just one
  specific package to user `nixpkgs-24.11`, this is, of course, working on the
  assumption that version that I wanted was still being used in the stable
  branch, if not, I would need to point to an even older `nixpkgs` version,
  where there isn't an easy way to look up which version of in which `nixpkgs`
  branch, and pray that that branch is still kept in the official nix cache
  system. If it is not in the cache system, I'm looking at building the
  "entire" package compile chain (yes, including the all the compilers of
  low-level languages and all the high-level language interpreter of that
  specific branch) on my personal machine.
- Maintain a temporary branch of the `<package>.nix` file to always use a
  custom version. (Which is something that I don't want to do)

When I was using [ArchLinux][archlinux], rolling back to a version is
effectively: going to the Arch time machine to find the snapshot of the package
at a certain date, download the package and install it with `pacman -U`. Sure,
now there is no guarantee that there is package will 100% function as with the
NixOS forcing you to replicate the entire environment at some snapshot, but in
most cases, I'm not trying to roll back a package to a completely different
version, this is just a sub-sub version change, where I can most likely track
the total number of changes that are done, do I really want to have a complete
separate compile environment in my machine just to roll back?

At least for my use cases, the promise of "NixOS being declarative" feel just a
bit broken. In language-specific package manager (think [`pip`][python-pip] and
[`npm`][npm] related tool chains), pinning a package version is as
straightforwards as changing a few lines in the configuration to something like
`package1==x.y.z`. There are no such equivalences in `nix`, which, at least to
myself, defeats quite a bit of the purpose of wanting to claim your entire
system is declarative: You can only declare what is allowed by `nixpkgs`. I
would much rather `nix` have some equivalent of `pip`/`npm`'s system, where you
can explicitly pin package version, and then complain loudly if something is
obviously in conflict.

### The fragility of the monolithic `nixpkgs` repository

Despite the mantra of NixOS being of package reproducibility and dependency
isolation, I have found that, in practice, the rolling release of the NixOS
package repository to be surprisingly fragile and prone to breaking, especially
when compared to other rolling release versions like Archlinux. During my
one-year span of using NixOS, multiple times the "stable" version of the Linux
kernel and "stable" version of the nvidia drivers where simply not compatible,
large GUI packages having esoteric build fails after a repository update
([FreeCad][freecad] and [KiCad][kicad] are particularly prone to this for some
reason); and to top this all off, the update to the rolling release branch
simply is not as immediate as other distributions. While I found this odd that
there are so many hiccups in the package distribution process for a Linux
distribution that has been around [nearly as long][nix-release] as
[Arch][arch-release], I still understand that `nix` expects users to be more
hands on with package management. All of this would have been tolerable if it
was not for the final issue that I don't see an easy way of fixing.

### The lack of documentation

This was probably the final straw that pushed to start looking for nix
alternatives after the whole fiasco with package pinning and breaking
repositories. Nix, being a [functional language][fprog], is already hard enough
to generalize as is, and when trying to look up how to do something, there
isn't centralized wiki that I can reference (I mean, [there][nix-wiki-1]
[is][nix-wiki-2], but that hardly contains enough information, and the fact
there are two wiki's also highlights the problem), and I have to resort to
scouring [Reddit][nix-reddit] or [Discourse][nix-discourse] for solution
patches that I don't fully understand, have difficultly generalizing to a more
complete solution, and am not certain will still be a good solution 6 months
down the line. Maybe the documentation is fine, and I just too
procedural-oriented to actually understand now to navigate nix documentations,
but having to learn all the oddities of a functional language, the oddities of
interacting with `nixpkgs`, and having no solid ground to work off in terms of
references is just too much, especially in a pinch when I need to change
something "right now".

## What do I actually want in from Nix-like systems

After some long reflections just after the frustrating experience with `nix`, I
wanted to rethink why it was that I was attracted to `nix` in the first place.
Is it actual reproducibility and declarative-ness? To be honest, not really. I
don't actually care what my system looks like 100 day ago, and I certainly am
not going to dedicate hard drive space for a snapshot of my machine state to
trace these steps. If this is not the actual target that I want out of my
system management experience, I don't think NixOS is actually the distribution
for me.

What I really want out of `nix`, when tracing the line-of-thought in my initial
praise of `nix`, can effectively be boiled down to just 2 points:

- Closeness of installation and configurations.
- Ease of temporary installs and cleanup

What I actually want is _replicability_: the ability to ensure the same
experience across multiple machines; while reproducibility should always
guarantee replicability, just wanting replicability should not require the
amounts of stringent-ness and tie-in as NixOS demands.

Is there a way to achieve what I want without having to completely dive tied to
the `nix` ecosystem, outside of hand-rolling everything myself?

### The alternate solution -- [`decman`][decman]

Turns out, I'm not the only one what has the same frustrations with NixOS, and
a solution for [Archlinux][archlinux] has already been developed:
[`decman`][decman]!

Breaking it down, `decman` takes the listed packages (both standard and AUR)
and uses this to generate a list of install/remove commands after comparing
this with the current system state. It has very base-line modules to also
handle the generation of files to fixed paths, as well as listing commands to
run after installation/upgrades (such as enabling services), this effectively
covers all the basis on my requirements! But what is my operations is not
covered by existing `decman` functionalities? Because `decman` is written in
[Python][python], it is very easy to [patch][monkey-patch] in functions. And
being python, this is not just limited to the simple stuff like adding
machine/user-specific configurations using `if` statements on environment. Need
something in incrementally update a `cfg` file? Python has a
[module][confparse] for that! Want to use symbolic links instead of explicitly
writing file contents for certain configuration files? Python has a
[module][pysymlink] for that! Want to download something from a fixed URL to
use for your configuration? Python has a [module][pyrequests] for that! Want to
perform the same operation over a list of files/modules? You can write looping
in whatever method you have in mind!

It felt very freeing to be able to patch whatever function one has in mind
directly on-the-fly with whatever modules Python has to offer instead of having
to wade through the fragmented information of how `nix`/`nixpkgs` functions on
the internet. The `decman` package serves as a nice base to start off "80% of
the way there", and you the then free to build up extra extensions that best
suit what you want to do with your system. This ethos I feel is much more
fitting of how I want to manage my personal systems. Nix in comparison feels
much more robust (less likely to generate something that can catastrophically
break your system), but at the same time much more rigid (not being allowed to
do something outside predefined limits) to the point of feeling suffocating. A
similar statement seems to be from the developer of decman.

### What about remote package installation?

One of the big benefits that pushed me to working with nix was the ability to
install arbitrary packages on any machine, regardless of if I have root access
or not. If I am no longer using `nix`, what am I going to do about that?
Another Linux distributions nicely slides into the picture: [Gentoo][gentoo]!
Their ["prefix" project][gentoo-prefix] for allowing the Gentoo build system
[`portage`][gentoo-portage] to be portable on any [POSIX][posix]-like machine
is very simple to set up! You can find the instructions here, and it is
basically [3 lines of commands][prefix-boostrap] (minus the many, many hours
you will need to wait for the package compilation)

> Actually, that was a lie, because the CERN [AFS file system][afs] is an
> incredibly annoying file system to work with. In this particular case, AFS
> not allowing pipe files to be created, breaking many of the installation
> scripts handled by the Gentoo package manager. Luckily, Gentoo has the
> foresight of isolated all building actions into a dedicated `$EPREFIX/tmp`
> directory, so as long as you bind that path to a directory that is not under
> the AFS directory (like the system `/tmp` directory), most install scripts
> would work. Another outlier is during the installation of the `sgml` package
> used for documentation generation, as when it invokes the [`flock`][flock]
> command, AFS will effectively freeze up. To get around this, you actually
> need to install `sgml` on another machine, then copy the contents in the
> `$EPREFIX/usr/share` directory under AFS. To reiterate, this is not a problem
> with Gentoo, but a rant of how AFS is a terrible file system to work with
> from the user side.

Having everything compile from source also has other benefits compared with
running `nix`. Even though [`nix-portable`][nix-portable] tries to be as
"native" as possible, `nix-portable` having to go through [`proot`][proot]
still introduces oddities that is unavoidable: users ID needs to be masked, so
all other users showing up as `nobody` when inspecting system resource usages
in `htop` is one example. With everything being compiled from source, packages
installed with `portage` is about as native as one can get, with basically
mirrored functionality from what I have on my local installations. This is not
to say `portage` was all smooth sailing: `btop` simply refuses to compile is
oddity that I have not solved yet, and getting GUI programs such as `kitty` to
compile required additional flags to be toggled in the prefix system (something
that was not immediately obvious to me when I first ran the command). The
replicability aspect right now doesn't expand beyond keeping a list of packages
in plain text, but with proper [configuration file management][symlinkmgr], it
is already providing 95% functionality of what I want out of nix running on
remote machines.

### Will you never be using `nix`?

I think nix still has its place. `decman` is effectively a wrapper for vanilla
`pacman`, and is not designed to work on per-directory or per-project bases,
only for system level package management. So when I am working on a project
that uses a tool chain that does not have a good in-built package management
system (think C/C++), then `nix` is the perfect solution for this.

---

## Conclusion

So TL;DR: Got [skill-issued][skissue] by a [functional language][fprog], so I'm giving up on NixOS
for now. The tools that I will now be using be using from now one is:

- [Archlinux][archlinux] with [`decman`][decman] for all my personal machines.
- [Gentoo][gentoo] [`portage`][gentoo-portage] for machines where I don't have
  root access.
- [Nix][nixos] as the package manager for individual project.

Are these tools perfect? Far from it, and there is much configuration to be
done (THE [RICING][ricing] NEVER STOPS). But the biggest upside for using this
is I can now say that:

> I use [Arch][archlinux], [Gentoo][gentoo], **and** [Nix][nixos], [BTW][btw]. X)

[ricing]: https://www.reddit.com/r/unixporn/comments/3iy3wd/stupid_question_what_is_ricing/
[kitty]: https://sw.kovidgoyal.net/kitty/
[kip]: https://sw.kovidgoyal.net/kitty/graphics-protocol/
[monkey-patch]: https://en.wikipedia.org/wiki/Monkey_patch
[btw]: https://github.com/overmighty/i-use-arch-btw?tab=readme-ov-file
[dxf]: https://en.wikipedia.org/wiki/AutoCAD_DXF
[svg]: https://en.wikipedia.org/wiki/SVG
[inkscape]: https://inkscape.org/
[nixos]: https://nixos.org/
[nix-python-shell]: https://wiki.nixos.org/wiki/Python
[nix-shell]: https://wiki.nixos.org/wiki/Development_environment_with_nix-shell
[cpm]: https://github.com/cpm-cmake/CPM.cmake
[confparse]: https://docs.python.org/3/library/configparser.html
[pysymlink]: https://docs.python.org/3/library/os.html#os.symlink
[pyrequests]: https://requests.readthedocs.io/en/latest/
[archlinux]: https://archlinux.org/
[decman]: https://github.com/kiviktnm/decman/
[afs]: https://www.openafs.org/
[gentoo]: https://www.gentoo.org/
[gentoo-prefix]: https://wiki.gentoo.org/wiki/Project:Prefix
[gentoo-portage]: https://wiki.gentoo.org/wiki/Portage
[nix-portable]: https://github.com/DavHau/nix-portable
[proot]: https://proot-me.github.io/
[flock]: https://man7.org/linux/man-pages/man1/flock.1.html
[nix-wiki-1]: https://wiki.nixos.org/wiki/NixOS_Wiki
[nix-wiki-2]: https://nixos.wiki/wiki/Main_Page
[prefix-bootstrap]: https://wiki.gentoo.org/wiki/Project:Prefix/Bootstrap
[nix-reddit]: https://www.reddit.com/r/NixOS/
[nix-discourse]: https://discourse.nixos.org/
[fprog]: https://en.wikipedia.org/wiki/Functional_programming
[python]: https://www.python.org/
[kicad]: https://www.kicad.org/
[freecad]: https://www.freecad.org/
[nixpkgs]: https://github.com/NixOS/nixpkgs
[fhs]: https://fr.wikipedia.org/wiki/Filesystem_Hierarchy_Standard
[python-pip]: https://packaging.python.org/en/latest/tutorials/installing-packages/
[npm]: https://www.npmjs.com/
[nix-release]: https://en.wikipedia.org/wiki/NixOS#History
[arch-release]: https://en.wikipedia.org/wiki/Arch_Linux#History
[posix]: https://en.wikipedia.org/wiki/POSIX
[symlinkmgr]: https://github.com/yimuchen/dotfiles/blob/master/bin/common/symlinkmgr
[skissue]: https://en.wiktionary.org/wiki/skill_issue
