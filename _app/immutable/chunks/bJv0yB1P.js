import{s as Hi,n as kt}from"./CywiF0zC.js";import{S as Li,i as Mi,e as a,s as l,c as o,g as r,a as s,b as h,d as i,f as n}from"./Csr7VRhO.js";function Ii(Ti){let c,xt='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#what-nixos-does-well">What NixOS does well</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#closeness-of-package-installation-and-configuration--system-replicability">Closeness of package installation and configuration — system replicability</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#exotic-package-dependencies-and-explicitly-adding-dependencies">Exotic package dependencies and explicitly adding dependencies</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#temporary-development-installs">Temporary development installs</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#explicitly-defining-what-is-exposed-to-the-user--functionality-hiding">Explicitly defining what is exposed to the user — functionality hiding</a></li></ol></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#what-makes-nix-infuriatingfrustrating">What makes Nix infuriating/frustrating</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#doing-everything-the-nix-way">Doing everything “the Nix way”</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#no-proper-method-of-temporarily-pinning-a-package">No proper method of temporarily pinning a package</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#the-fragility-of-the-monolithic-nixpkgs-repository">The fragility of the monolithic nixpkgs repository</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#the-lack-of-documentation">The lack of documentation</a></li></ol></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#what-do-i-actually-want-in-from-nix-like-systems">What do I actually want in from Nix-like systems</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#the-alternate-solution--decman">The alternate solution — decman</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#what-about-remote-package-installation">What about remote package installation?</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#will-you-never-be-using-nix">Will you never be using nix?</a></li></ol></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#conclusion">Conclusion</a></li></ol>',pe,M,vt=`About <a href="../2024-05-01-nix-portable">one year ago</a>, I started running
<a href="https://nixos.org/" rel="nofollow">NixOS</a> as my daily operating system, and after this one year and much
reflection, I’ve concluded that it is time to switch away form NixOS as my
primary system again. This blog post will serve as a snapshot of what it was
like for myself to be using NixOS, both a reflection of what I found appealing
about NixOS and my own learning along the way, as well as the frustrations that
ultimately pushed me away.`,ue,d,bt='<a aria-hidden="true" tabindex="-1" href="#what-nixos-does-well"><span class="icon icon-link"></span></a>What NixOS does well',me,f,Tt='<a aria-hidden="true" tabindex="-1" href="#closeness-of-package-installation-and-configuration--system-replicability"><span class="icon icon-link"></span></a>Closeness of package installation and configuration — system replicability',ge,I,Ht=`I have two primary machines that I daily drive, and I want the experience
between these two machines to be as identical as possible, meaning that I want
the same set of programs installed with as-close-to-identical theming and
configurations as reasonably possible. This means keeping both the master
package list synced, along with a handful configurations files that is relevant
to the usage experience. The problem, however, comes when there are
configurations that are intrinsically different the 2 machines: slightly
different hardware capabilities requiring different driver packages; different
screen real estate requiring slightly different configuration fields; different
storage sizes means that backup handling is different and such. When you want
something to be “nearly the same”, it gets stuck in the awkward middle ground
of not being able to stuff everything in a git repository and call it a day,
but at the same time much too cumbersome to maintain two separate instances of
the configurations files because too many entries needs to be kept in sync.`,ye,C,Lt=`The Nix way of configuration systems is glorious: the requirement of a package
is almost immediately followed by the configuration snippet, and the
configuration being part of a programming logic means that logic can be built
into that extract configuration: the same package can be installed with
slightly different configuration flag based on the differences between the
multiple systems that you are maintaining, all the while retaining identical
configurations everywhere.`,we,_,Mt=`The fact that nix generates the actual configuration files that are placed in
the <code>/etc</code> or other directory during build time also means that it solves one
of my biggest grips managing configuration files on Linux: configuration files
can grow into monstrous multi-thousand line entities, while only three lines
are relevant to the configuration that I want to do. The nix configuration
system means that the “configuration” that I interact with (i.e. the <code>.nix</code>
file in question) needs only to keep those relevant lines massively reducing
the amount of stuff I need to keep in my configuration repository.`,ke,P,It=`Another problem that the nix method of configuration solves is that
cross-package configurations can now be done in whatever method makes the most
sense for system maintainer: for example, instead of all “network
configurations” sitting in a gigantic file, with comment snippets that point to
the configuration of other programs that may or may not be out of date, nix
then allows the network configurations to sit directly behind each package
install, so that it is much easier to keep track of why configurations are
enabled, and also cleanly disables them when a package becomes obsolete.`,xe,S,Ct=`The tools provided in nix is the closest thing I got to system replicability
(<em>not</em> reproducibility, that is a distinction that I will discuss in a little
later). The fact that I can run <code>nix</code> as a local package manager also means I
can replicate all my terminal experience to the many computing clusters that I
need to interact with was the biggest push for me to start investigating how to
use nix in the first place.`,ve,p,_t='<a aria-hidden="true" tabindex="-1" href="#exotic-package-dependencies-and-explicitly-adding-dependencies"><span class="icon icon-link"></span></a>Exotic package dependencies and explicitly adding dependencies',be,N,Pt=`Despite the best efforts of distribution maintainers, there will be odd cases
where the official package manager does not properly list “all” dependencies.
Maybe there is some odd format conversion routine of package “A” that requires
extra python package “B” and is not listed because it is not considered a
“core” feature of the primary package (One example that I ran into was the
conversion o <a href="https://en.wikipedia.org/wiki/AutoCAD_DXF" rel="nofollow">DXF</a> files to regular <a href="https://en.wikipedia.org/wiki/SVG" rel="nofollow">SVG</a> files using
<a href="https://inkscape.org/" rel="nofollow">inkscape</a>). So you go ahead and explicitly install this package in
the command line package “B”. Great, now there is this dangling package “B”
that is labeled as being explicitly requested user, but to the package
manager, this package is completely unrelated to package “A”; the problem here
goes both ways: if you no longer use package “A” and uninstall it, you now have
this unnecessary package “B” floating around in your system; or after sometime
when performing system maintenance, you see that package “B” is not required by
anything else, so you uninstalled it because you think you don’t need it,
thereby unwittingly breaking that fix for package “A”.`,Te,j,St=`The nix way of adding packages to the system means that there such dependencies
can actually be properly tracked: for example, when you install a packaged with
python as a dependency, you can <a href="https://wiki.nixos.org/wiki/Python" rel="nofollow">also specify</a> exactly which
addition python packages you want to go along with the python environment in
question.`,He,u,Nt='<a aria-hidden="true" tabindex="-1" href="#temporary-development-installs"><span class="icon icon-link"></span></a>Temporary development installs',Le,A,jt=`<a href="https://github.com/cpm-cmake/CPM.cmake" rel="nofollow">C and C++ does not have package managers</a>. So when you need to build a
C/C++ project, you might be tempted to install the build dependencies with your
system package manager. Great! Now you have a whole host of low-level packages
that you don’t know if you can or cannot install after you are done with the
project, or after you moved the project else where. This environment isolation
problem for C/C++ project is probably why all newer languages try to have this
function built in.`,Me,O,At=`The <a href="https://wiki.nixos.org/wiki/Development_environment_with_nix-shell" rel="nofollow"><code>shell</code></a> function of <code>nix</code> essentially the functionality of
project-level package management to anything you might be using, regardless
what language you might be using (even <code>Fortran</code> if you still need to work with
that for whatever reason).`,Ie,q,Ot=`This also extends to the use of temporary packages for interactive sessions. If
there is a transient issue that you need to solve just this once, you can
quickly jump into a shell with the temporary diagnostic tools, and cleanly jump
out, where it would look like the package never existed in the first place (the
actual files are, of course, cleaned up after the next <code>nix-garbage-collect</code>
call).`,Ce,m,qt='<a aria-hidden="true" tabindex="-1" href="#explicitly-defining-what-is-exposed-to-the-user--functionality-hiding"><span class="icon icon-link"></span></a>Explicitly defining what is exposed to the user — functionality hiding',_e,W,Wt=`For certain packages, you might just want some of the functionality to be
exposed to the user: An example is that you might want to have the <code>icat</code>
module around from the <a href="https://sw.kovidgoyal.net/kitty/" rel="nofollow"><code>kitty</code> terminal</a> for the fullest implementation
of the <a href="https://sw.kovidgoyal.net/kitty/graphics-protocol/" rel="nofollow">image display protocol</a>, but still want to use your favorite
terminal emulator instead of <code>kitty</code>, and/or you don’t want an extra
application entry taking up space in your application manager. In <code>nix</code>, there
are ways to make sure packages are installed, but only exposed to the user
through other functionalities.`,Pe,E,Et=`I add this mainly as a nicety, not strictly as a “must have” for system
management. I like having my environment clean, but not to the extent that all
unused entries should be purged at all times.`,Se,Ne,je,F,Ft=`In this one year experiment of daily driving NixOS, it made me think more
carefully about what package-manager systems should try and do, what makes for
a “good” system maintenance experience, and where other package managers
(system or otherwise) are failing to provide tools that is useful. And just for
gaining this experience, I would always be happy that I took this route of
trying to daily drive NixOS.`,Ae,z,zt=`And now for the parts of NixOS that ultimately pushed me away from NixOS in
search of another solution.`,Oe,g,Gt='<a aria-hidden="true" tabindex="-1" href="#what-makes-nix-infuriatingfrustrating"><span class="icon icon-link"></span></a>What makes Nix infuriating/frustrating',qe,y,Dt='<a aria-hidden="true" tabindex="-1" href="#doing-everything-the-nix-way"><span class="icon icon-link"></span></a>Doing everything “the Nix way”',We,G,Bt=`While I do think nix configurations is amazing, at the end of the day it is
just another layer of abstraction on top of the existing abstractions found in
Linux configuration system.`,Ee,D,Rt=`At some points, it felt redundant: Is having a line <code>vim.opt.relativenumber = true</code> in a lua file really that much different than adding,
<code>neovim={enable=True; relativenumber=True}</code> in a nix file? Especially when
neovim’s <code>lua</code> file will eventually contain additional items anyway?`,Fe,B,Ut=`At other points, it’s frustrating when the abstractions are leaky. If the
option flag that you are looking for is not implemented in nix, you either have
to implement the functionality in nix yourself (after a year I still don’t
properly understand how the think in terms of functional programming languages,
more on that later), or resort of having the “file contents” be injected into
configuration files, at which point the question becomes why don’t I just
managed configurations directly with the configuration files instead of having
nix as an “extra layer”?`,ze,R,Xt=`The worst problem is when nix abstraction bleeds into everything in a way that
is incompatible with any other systems. One of the more egregious examples I
ended up having was the configuration files I had for <code>zsh</code>, where I realized
that the generation of the <code>zsh</code> is so fragmented that I would be impossible to
move away from nix without major refactoring of how machine-specific
configurations are handled. Packages not being able to be ported between <code>Nix</code>
systems and other <a href="https://fr.wikipedia.org/wiki/Filesystem_Hierarchy_Standard" rel="nofollow"><code>FHS</code></a>-based systems was already becoming problematic,
and it hit me that if my <em>configurations</em> were going this route as well, how
much am I really giving up for the promise of reproducibility?`,Ge,w,Kt='<a aria-hidden="true" tabindex="-1" href="#no-proper-method-of-temporarily-pinning-a-package"><span class="icon icon-link"></span></a>No proper method of temporarily pinning a package',De,U,Vt=`While there is a promise of reproducibility and rollback on the system level,
what I found in practice is that getting the nix to actually install packages
that was not on the <code>HEAD</code> of the <code>nixpkgs</code> channels was incredibly involved.
Here is an example that actually happened to myself: there was a regression in
a GUI application (<a href="https://www.kicad.org/" rel="nofollow">KiCad</a> in this case), where I need to roll back to version
<code>8.0.X</code> while the leading branch is at <code>8.0.Y</code>. To do so in nix, I need to
either:`,Be,X,Yt=`<li>Split my repository reference <a href="https://github.com/NixOS/nixpkgs" rel="nofollow"><code>nixpkgs</code></a> into <code>nixpkgs-unstable</code>
(rolling release) and <code>nixpkgs-24.11</code> (latest stable), and point just one
specific package to user <code>nixpkgs-24.11</code>, this is, of course, working on the
assumption that version that I wanted was still being used in the stable
branch, if not, I would need to point to an even older <code>nixpkgs</code> version,
where there isn’t an easy way to look up which version of in which <code>nixpkgs</code>
branch, and pray that that branch is still kept in the official nix cache
system. If it is not in the cache system, I’m looking at building the
“entire” package compile chain (yes, including the all the compilers of
low-level languages and all the high-level language interpreter of that
specific branch) on my personal machine.</li> <li>Maintain a temporary branch of the <code>&lt;package&gt;.nix</code> file to always use a
custom version. (Which is something that I don’t want to do)</li>`,Re,K,Qt=`When I was using <a href="https://archlinux.org/" rel="nofollow">ArchLinux</a>, rolling back to a version is
effectively: going to the Arch time machine to find the snapshot of the package
at a certain date, download the package and install it with <code>pacman -U</code>. Sure,
now there is no guarantee that there is package will 100% function as with the
NixOS forcing you to replicate the entire environment at some snapshot, but in
most cases, I’m not trying to roll back a package to a completely different
version, this is just a sub-sub version change, where I can most likely track
the total number of changes that are done, do I really want to have a complete
separate compile environment in my machine just to roll back?`,Ue,V,$t=`At least for my use cases, the promise of “NixOS being declarative” feel just a
bit broken. In language-specific package manager (think <a href="https://packaging.python.org/en/latest/tutorials/installing-packages/" rel="nofollow"><code>pip</code></a> and
<a href="https://www.npmjs.com/" rel="nofollow"><code>npm</code></a> related tool chains), pinning a package version is as
straightforwards as changing a few lines in the configuration to something like
<code>package1==x.y.z</code>. There are no such equivalences in <code>nix</code>, which, at least to
myself, defeats quite a bit of the purpose of wanting to claim your entire
system is declarative: You can only declare what is allowed by <code>nixpkgs</code>. I
would much rather <code>nix</code> have some equivalent of <code>pip</code>/<code>npm</code>’s system, where you
can explicitly pin package version, and then complain loudly if something is
obviously in conflict.`,Xe,k,Jt='<a aria-hidden="true" tabindex="-1" href="#the-fragility-of-the-monolithic-nixpkgs-repository"><span class="icon icon-link"></span></a>The fragility of the monolithic <code>nixpkgs</code> repository',Ke,Y,Zt=`Despite the mantra of NixOS being of package reproducibility and dependency
isolation, I have found that, in practice, the rolling release of the NixOS
package repository to be surprisingly fragile and prone to breaking, especially
when compared to other rolling release versions like Archlinux. During my
one-year span of using NixOS, multiple times the “stable” version of the Linux
kernel and “stable” version of the nvidia drivers where simply not compatible,
large GUI packages having esoteric build fails after a repository update
(<a href="https://www.freecad.org/" rel="nofollow">FreeCad</a> and <a href="https://www.kicad.org/" rel="nofollow">KiCad</a> are particularly prone to this for some
reason); and to top this all off, the update to the rolling release branch
simply is not as immediate as other distributions. While I found this odd that
there are so many hiccups in the package distribution process for a Linux
distribution that has been around <a href="https://en.wikipedia.org/wiki/NixOS#History" rel="nofollow">nearly as long</a> as
<a href="https://en.wikipedia.org/wiki/Arch_Linux#History" rel="nofollow">Arch</a>, I still understand that <code>nix</code> expects users to be more
hands on with package management. All of this would have been tolerable if it
was not for the final issue that I don’t see an easy way of fixing.`,Ve,x,ei='<a aria-hidden="true" tabindex="-1" href="#the-lack-of-documentation"><span class="icon icon-link"></span></a>The lack of documentation',Ye,Q,ti=`This was probably the final straw that pushed to start looking for nix
alternatives after the whole fiasco with package pinning and breaking
repositories. Nix, being a <a href="https://en.wikipedia.org/wiki/Functional_programming" rel="nofollow">functional language</a>, is already hard enough
to generalize as is, and when trying to look up how to do something, there
isn’t centralized wiki that I can reference (I mean, <a href="https://wiki.nixos.org/wiki/NixOS_Wiki" rel="nofollow">there</a> <a href="https://nixos.wiki/wiki/Main_Page" rel="nofollow">is</a>, but that hardly contains enough information, and the fact
there are two wiki’s also highlights the problem), and I have to resort to
scouring <a href="https://www.reddit.com/r/NixOS/" rel="nofollow">Reddit</a> or <a href="https://discourse.nixos.org/" rel="nofollow">Discourse</a> for solution
patches that I don’t fully understand, have difficultly generalizing to a more
complete solution, and am not certain will still be a good solution 6 months
down the line. Maybe the documentation is fine, and I just too
procedural-oriented to actually understand now to navigate nix documentations,
but having to learn all the oddities of a functional language, the oddities of
interacting with <code>nixpkgs</code>, and having no solid ground to work off in terms of
references is just too much, especially in a pinch when I need to change
something “right now”.`,Qe,v,ii='<a aria-hidden="true" tabindex="-1" href="#what-do-i-actually-want-in-from-nix-like-systems"><span class="icon icon-link"></span></a>What do I actually want in from Nix-like systems',$e,$,ni=`After some long reflections just after the frustrating experience with <code>nix</code>, I
wanted to rethink why it was that I was attracted to <code>nix</code> in the first place.
Is it actual reproducibility and declarative-ness? To be honest, not really. I
don’t actually care what my system looks like 100 day ago, and I certainly am
not going to dedicate hard drive space for a snapshot of my machine state to
trace these steps. If this is not the actual target that I want out of my
system management experience, I don’t think NixOS is actually the distribution
for me.`,Je,J,ai=`What I really want out of <code>nix</code>, when tracing the line-of-thought in my initial
praise of <code>nix</code>, can effectively be boiled down to just 2 points:`,Ze,Z,oi="<li>Closeness of installation and configurations.</li> <li>Ease of temporary installs and cleanup</li>",et,ee,li=`What I actually want is <em>replicability</em>: the ability to ensure the same
experience across multiple machines; while reproducibility should always
guarantee replicability, just wanting replicability should not require the
amounts of stringent-ness and tie-in as NixOS demands.`,tt,te,si=`Is there a way to achieve what I want without having to completely dive tied to
the <code>nix</code> ecosystem, outside of hand-rolling everything myself?`,it,b,ri='<a aria-hidden="true" tabindex="-1" href="#the-alternate-solution--decman"><span class="icon icon-link"></span></a>The alternate solution — <a href="https://github.com/kiviktnm/decman/" rel="nofollow"><code>decman</code></a>',nt,ie,hi=`Turns out, I’m not the only one what has the same frustrations with NixOS, and
a solution for <a href="https://archlinux.org/" rel="nofollow">Archlinux</a> has already been developed:
<a href="https://github.com/kiviktnm/decman/" rel="nofollow"><code>decman</code></a>!`,at,ne,ci=`Breaking it down, <code>decman</code> takes the listed packages (both standard and AUR)
and uses this to generate a list of install/remove commands after comparing
this with the current system state. It has very base-line modules to also
handle the generation of files to fixed paths, as well as listing commands to
run after installation/upgrades (such as enabling services), this effectively
covers all the basis on my requirements! But what is my operations is not
covered by existing <code>decman</code> functionalities? Because <code>decman</code> is written in
<a href="https://www.python.org/" rel="nofollow">Python</a>, it is very easy to <a href="https://en.wikipedia.org/wiki/Monkey_patch" rel="nofollow">patch</a> in functions. And
being python, this is not just limited to the simple stuff like adding
machine/user-specific configurations using <code>if</code> statements on environment. Need
something in incrementally update a <code>cfg</code> file? Python has a
<a href="https://docs.python.org/3/library/configparser.html" rel="nofollow">module</a> for that! Want to use symbolic links instead of explicitly
writing file contents for certain configuration files? Python has a
<a href="https://docs.python.org/3/library/os.html#os.symlink" rel="nofollow">module</a> for that! Want to download something from a fixed URL to
use for your configuration? Python has a <a href="https://requests.readthedocs.io/en/latest/" rel="nofollow">module</a> for that! Want to
perform the same operation over a list of files/modules? You can write looping
in whatever method you have in mind!`,ot,ae,di=`It felt very freeing to be able to patch whatever function one has in mind
directly on-the-fly with whatever modules Python has to offer instead of having
to wade through the fragmented information of how <code>nix</code>/<code>nixpkgs</code> functions on
the internet. The <code>decman</code> package serves as a nice base to start off “80% of
the way there”, and you the then free to build up extra extensions that best
suit what you want to do with your system. This ethos I feel is much more
fitting of how I want to manage my personal systems. Nix in comparison feels
much more robust (less likely to generate something that can catastrophically
break your system), but at the same time much more rigid (not being allowed to
do something outside predefined limits) to the point of feeling suffocating. A
similar statement seems to be from the developer of decman.`,lt,T,fi='<a aria-hidden="true" tabindex="-1" href="#what-about-remote-package-installation"><span class="icon icon-link"></span></a>What about remote package installation?',st,oe,pi=`One of the big benefits that pushed me to working with nix was the ability to
install arbitrary packages on any machine, regardless of if I have root access
or not. If I am no longer using <code>nix</code>, what am I going to do about that?
Another Linux distributions nicely slides into the picture: <a href="https://www.gentoo.org/" rel="nofollow">Gentoo</a>!
Their <a href="https://wiki.gentoo.org/wiki/Project:Prefix" rel="nofollow">“prefix” project</a> for allowing the Gentoo build system
<a href="https://wiki.gentoo.org/wiki/Portage" rel="nofollow"><code>portage</code></a> to be portable on any <a href="https://en.wikipedia.org/wiki/POSIX" rel="nofollow">POSIX</a>-like machine
is very simple to set up! You can find the instructions here, and it is
basically [3 lines of commands][prefix-boostrap] (minus the many, many hours
you will need to wait for the package compilation)`,rt,le,ui=`<p>Actually, that was a lie, because the CERN <a href="https://www.openafs.org/" rel="nofollow">AFS file system</a> is an
incredibly annoying file system to work with. In this particular case, AFS
not allowing pipe files to be created, breaking many of the installation
scripts handled by the Gentoo package manager. Luckily, Gentoo has the
foresight of isolated all building actions into a dedicated <code>$EPREFIX/tmp</code>
directory, so as long as you bind that path to a directory that is not under
the AFS directory (like the system <code>/tmp</code> directory), most install scripts
would work. Another outlier is during the installation of the <code>sgml</code> package
used for documentation generation, as when it invokes the <a href="https://man7.org/linux/man-pages/man1/flock.1.html" rel="nofollow"><code>flock</code></a>
command, AFS will effectively freeze up. To get around this, you actually
need to install <code>sgml</code> on another machine, then copy the contents in the
<code>$EPREFIX/usr/share</code> directory under AFS. To reiterate, this is not a problem
with Gentoo, but a rant of how AFS is a terrible file system to work with
from the user side.</p>`,ht,se,mi=`Having everything compile from source also has other benefits compared with
running <code>nix</code>. Even though <a href="https://github.com/DavHau/nix-portable" rel="nofollow"><code>nix-portable</code></a> tries to be as
“native” as possible, <code>nix-portable</code> having to go through <a href="https://proot-me.github.io/" rel="nofollow"><code>proot</code></a>
still introduces oddities that is unavoidable: users ID needs to be masked, so
all other users showing up as <code>nobody</code> when inspecting system resource usages
in <code>htop</code> is one example. With everything being compiled from source, packages
installed with <code>portage</code> is about as native as one can get, with basically
mirrored functionality from what I have on my local installations. This is not
to say <code>portage</code> was all smooth sailing: <code>btop</code> simply refuses to compile is
oddity that I have not solved yet, and getting GUI programs such as <code>kitty</code> to
compile required additional flags to be toggled in the prefix system (something
that was not immediately obvious to me when I first ran the command). The
replicability aspect right now doesn’t expand beyond keeping a list of packages
in plain text, but with proper <a href="https://github.com/yimuchen/dotfiles/blob/master/bin/common/symlinkmgr" rel="nofollow">configuration file management</a>, it
is already providing 95% functionality of what I want out of nix running on
remote machines.`,ct,H,gi='<a aria-hidden="true" tabindex="-1" href="#will-you-never-be-using-nix"><span class="icon icon-link"></span></a>Will you never be using <code>nix</code>?',dt,re,yi=`I think nix still has its place. <code>decman</code> is effectively a wrapper for vanilla
<code>pacman</code>, and is not designed to work on per-directory or per-project bases,
only for system level package management. So when I am working on a project
that uses a tool chain that does not have a good in-built package management
system (think C/C++), then <code>nix</code> is the perfect solution for this.`,ft,pt,ut,L,wi='<a aria-hidden="true" tabindex="-1" href="#conclusion"><span class="icon icon-link"></span></a>Conclusion',mt,he,ki=`So TL;DR: Got <a href="https://en.wiktionary.org/wiki/skill_issue" rel="nofollow">skill-issued</a> by a <a href="https://en.wikipedia.org/wiki/Functional_programming" rel="nofollow">functional language</a>, so I’m giving up on NixOS
for now. The tools that I will now be using be using from now one is:`,gt,ce,xi=`<li><a href="https://archlinux.org/" rel="nofollow">Archlinux</a> with <a href="https://github.com/kiviktnm/decman/" rel="nofollow"><code>decman</code></a> for all my personal machines.</li> <li><a href="https://www.gentoo.org/" rel="nofollow">Gentoo</a> <a href="https://wiki.gentoo.org/wiki/Portage" rel="nofollow"><code>portage</code></a> for machines where I don’t have
root access.</li> <li><a href="https://nixos.org/" rel="nofollow">Nix</a> as the package manager for individual project.</li>`,yt,de,vi=`Are these tools perfect? Far from it, and there is much configuration to be
done (THE <a href="https://www.reddit.com/r/unixporn/comments/3iy3wd/stupid_question_what_is_ricing/" rel="nofollow">RICING</a> NEVER STOPS). But the biggest upside for using this
is I can now say that:`,wt,fe,bi='<p>I use <a href="https://archlinux.org/" rel="nofollow">Arch</a>, <a href="https://www.gentoo.org/" rel="nofollow">Gentoo</a>, <strong>and</strong> <a href="https://nixos.org/" rel="nofollow">Nix</a>, <a href="https://github.com/overmighty/i-use-arch-btw?tab=readme-ov-file" rel="nofollow">BTW</a>. X)</p>';return{c(){c=a("nav"),c.innerHTML=xt,pe=l(),M=a("p"),M.innerHTML=vt,ue=l(),d=a("h2"),d.innerHTML=bt,me=l(),f=a("h3"),f.innerHTML=Tt,ge=l(),I=a("p"),I.textContent=Ht,ye=l(),C=a("p"),C.textContent=Lt,we=l(),_=a("p"),_.innerHTML=Mt,ke=l(),P=a("p"),P.textContent=It,xe=l(),S=a("p"),S.innerHTML=Ct,ve=l(),p=a("h3"),p.innerHTML=_t,be=l(),N=a("p"),N.innerHTML=Pt,Te=l(),j=a("p"),j.innerHTML=St,He=l(),u=a("h3"),u.innerHTML=Nt,Le=l(),A=a("p"),A.innerHTML=jt,Me=l(),O=a("p"),O.innerHTML=At,Ie=l(),q=a("p"),q.innerHTML=Ot,Ce=l(),m=a("h3"),m.innerHTML=qt,_e=l(),W=a("p"),W.innerHTML=Wt,Pe=l(),E=a("p"),E.textContent=Et,Se=l(),Ne=a("hr"),je=l(),F=a("p"),F.textContent=Ft,Ae=l(),z=a("p"),z.textContent=zt,Oe=l(),g=a("h2"),g.innerHTML=Gt,qe=l(),y=a("h3"),y.innerHTML=Dt,We=l(),G=a("p"),G.textContent=Bt,Ee=l(),D=a("p"),D.innerHTML=Rt,Fe=l(),B=a("p"),B.textContent=Ut,ze=l(),R=a("p"),R.innerHTML=Xt,Ge=l(),w=a("h3"),w.innerHTML=Kt,De=l(),U=a("p"),U.innerHTML=Vt,Be=l(),X=a("ul"),X.innerHTML=Yt,Re=l(),K=a("p"),K.innerHTML=Qt,Ue=l(),V=a("p"),V.innerHTML=$t,Xe=l(),k=a("h3"),k.innerHTML=Jt,Ke=l(),Y=a("p"),Y.innerHTML=Zt,Ve=l(),x=a("h3"),x.innerHTML=ei,Ye=l(),Q=a("p"),Q.innerHTML=ti,Qe=l(),v=a("h2"),v.innerHTML=ii,$e=l(),$=a("p"),$.innerHTML=ni,Je=l(),J=a("p"),J.innerHTML=ai,Ze=l(),Z=a("ul"),Z.innerHTML=oi,et=l(),ee=a("p"),ee.innerHTML=li,tt=l(),te=a("p"),te.innerHTML=si,it=l(),b=a("h3"),b.innerHTML=ri,nt=l(),ie=a("p"),ie.innerHTML=hi,at=l(),ne=a("p"),ne.innerHTML=ci,ot=l(),ae=a("p"),ae.innerHTML=di,lt=l(),T=a("h3"),T.innerHTML=fi,st=l(),oe=a("p"),oe.innerHTML=pi,rt=l(),le=a("blockquote"),le.innerHTML=ui,ht=l(),se=a("p"),se.innerHTML=mi,ct=l(),H=a("h3"),H.innerHTML=gi,dt=l(),re=a("p"),re.innerHTML=yi,ft=l(),pt=a("hr"),ut=l(),L=a("h2"),L.innerHTML=wi,mt=l(),he=a("p"),he.innerHTML=ki,gt=l(),ce=a("ul"),ce.innerHTML=xi,yt=l(),de=a("p"),de.innerHTML=vi,wt=l(),fe=a("blockquote"),fe.innerHTML=bi,this.h()},l(e){c=o(e,"NAV",{class:!0,"data-svelte-h":!0}),r(c)!=="svelte-9wot20"&&(c.innerHTML=xt),pe=s(e),M=o(e,"P",{"data-svelte-h":!0}),r(M)!=="svelte-yhguey"&&(M.innerHTML=vt),ue=s(e),d=o(e,"H2",{id:!0,"data-svelte-h":!0}),r(d)!=="svelte-dj9b1e"&&(d.innerHTML=bt),me=s(e),f=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(f)!=="svelte-1vaf9ht"&&(f.innerHTML=Tt),ge=s(e),I=o(e,"P",{"data-svelte-h":!0}),r(I)!=="svelte-12oyfdy"&&(I.textContent=Ht),ye=s(e),C=o(e,"P",{"data-svelte-h":!0}),r(C)!=="svelte-5v6z22"&&(C.textContent=Lt),we=s(e),_=o(e,"P",{"data-svelte-h":!0}),r(_)!=="svelte-ce4sh8"&&(_.innerHTML=Mt),ke=s(e),P=o(e,"P",{"data-svelte-h":!0}),r(P)!=="svelte-1sf76gi"&&(P.textContent=It),xe=s(e),S=o(e,"P",{"data-svelte-h":!0}),r(S)!=="svelte-16njhh"&&(S.innerHTML=Ct),ve=s(e),p=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(p)!=="svelte-1iezklx"&&(p.innerHTML=_t),be=s(e),N=o(e,"P",{"data-svelte-h":!0}),r(N)!=="svelte-jnzjnu"&&(N.innerHTML=Pt),Te=s(e),j=o(e,"P",{"data-svelte-h":!0}),r(j)!=="svelte-1hsiuuh"&&(j.innerHTML=St),He=s(e),u=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(u)!=="svelte-1ldp9yy"&&(u.innerHTML=Nt),Le=s(e),A=o(e,"P",{"data-svelte-h":!0}),r(A)!=="svelte-1xx2q6w"&&(A.innerHTML=jt),Me=s(e),O=o(e,"P",{"data-svelte-h":!0}),r(O)!=="svelte-2er4an"&&(O.innerHTML=At),Ie=s(e),q=o(e,"P",{"data-svelte-h":!0}),r(q)!=="svelte-r7edfd"&&(q.innerHTML=Ot),Ce=s(e),m=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(m)!=="svelte-1ipr9su"&&(m.innerHTML=qt),_e=s(e),W=o(e,"P",{"data-svelte-h":!0}),r(W)!=="svelte-162kegg"&&(W.innerHTML=Wt),Pe=s(e),E=o(e,"P",{"data-svelte-h":!0}),r(E)!=="svelte-1s128tq"&&(E.textContent=Et),Se=s(e),Ne=o(e,"HR",{}),je=s(e),F=o(e,"P",{"data-svelte-h":!0}),r(F)!=="svelte-t3neqe"&&(F.textContent=Ft),Ae=s(e),z=o(e,"P",{"data-svelte-h":!0}),r(z)!=="svelte-zrevl4"&&(z.textContent=zt),Oe=s(e),g=o(e,"H2",{id:!0,"data-svelte-h":!0}),r(g)!=="svelte-frdpp2"&&(g.innerHTML=Gt),qe=s(e),y=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(y)!=="svelte-bpn330"&&(y.innerHTML=Dt),We=s(e),G=o(e,"P",{"data-svelte-h":!0}),r(G)!=="svelte-fak07d"&&(G.textContent=Bt),Ee=s(e),D=o(e,"P",{"data-svelte-h":!0}),r(D)!=="svelte-1i4rc0s"&&(D.innerHTML=Rt),Fe=s(e),B=o(e,"P",{"data-svelte-h":!0}),r(B)!=="svelte-fwjfbd"&&(B.textContent=Ut),ze=s(e),R=o(e,"P",{"data-svelte-h":!0}),r(R)!=="svelte-s9dmf5"&&(R.innerHTML=Xt),Ge=s(e),w=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(w)!=="svelte-1wjuteh"&&(w.innerHTML=Kt),De=s(e),U=o(e,"P",{"data-svelte-h":!0}),r(U)!=="svelte-11303bo"&&(U.innerHTML=Vt),Be=s(e),X=o(e,"UL",{"data-svelte-h":!0}),r(X)!=="svelte-1ff31h7"&&(X.innerHTML=Yt),Re=s(e),K=o(e,"P",{"data-svelte-h":!0}),r(K)!=="svelte-rwtpnx"&&(K.innerHTML=Qt),Ue=s(e),V=o(e,"P",{"data-svelte-h":!0}),r(V)!=="svelte-1dxg4x5"&&(V.innerHTML=$t),Xe=s(e),k=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(k)!=="svelte-c8bmdr"&&(k.innerHTML=Jt),Ke=s(e),Y=o(e,"P",{"data-svelte-h":!0}),r(Y)!=="svelte-1t268l3"&&(Y.innerHTML=Zt),Ve=s(e),x=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(x)!=="svelte-1659yvv"&&(x.innerHTML=ei),Ye=s(e),Q=o(e,"P",{"data-svelte-h":!0}),r(Q)!=="svelte-g8p13d"&&(Q.innerHTML=ti),Qe=s(e),v=o(e,"H2",{id:!0,"data-svelte-h":!0}),r(v)!=="svelte-1isbhnb"&&(v.innerHTML=ii),$e=s(e),$=o(e,"P",{"data-svelte-h":!0}),r($)!=="svelte-1h37l46"&&($.innerHTML=ni),Je=s(e),J=o(e,"P",{"data-svelte-h":!0}),r(J)!=="svelte-1aqpm9c"&&(J.innerHTML=ai),Ze=s(e),Z=o(e,"UL",{"data-svelte-h":!0}),r(Z)!=="svelte-fvjm9f"&&(Z.innerHTML=oi),et=s(e),ee=o(e,"P",{"data-svelte-h":!0}),r(ee)!=="svelte-1fkj5v6"&&(ee.innerHTML=li),tt=s(e),te=o(e,"P",{"data-svelte-h":!0}),r(te)!=="svelte-16zsre0"&&(te.innerHTML=si),it=s(e),b=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(b)!=="svelte-1198kc7"&&(b.innerHTML=ri),nt=s(e),ie=o(e,"P",{"data-svelte-h":!0}),r(ie)!=="svelte-lijmdg"&&(ie.innerHTML=hi),at=s(e),ne=o(e,"P",{"data-svelte-h":!0}),r(ne)!=="svelte-1djjc24"&&(ne.innerHTML=ci),ot=s(e),ae=o(e,"P",{"data-svelte-h":!0}),r(ae)!=="svelte-s5dap0"&&(ae.innerHTML=di),lt=s(e),T=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(T)!=="svelte-1m6xst2"&&(T.innerHTML=fi),st=s(e),oe=o(e,"P",{"data-svelte-h":!0}),r(oe)!=="svelte-1onmdvq"&&(oe.innerHTML=pi),rt=s(e),le=o(e,"BLOCKQUOTE",{"data-svelte-h":!0}),r(le)!=="svelte-sy2afq"&&(le.innerHTML=ui),ht=s(e),se=o(e,"P",{"data-svelte-h":!0}),r(se)!=="svelte-d1pyvm"&&(se.innerHTML=mi),ct=s(e),H=o(e,"H3",{id:!0,"data-svelte-h":!0}),r(H)!=="svelte-1s4j6f5"&&(H.innerHTML=gi),dt=s(e),re=o(e,"P",{"data-svelte-h":!0}),r(re)!=="svelte-826tkz"&&(re.innerHTML=yi),ft=s(e),pt=o(e,"HR",{}),ut=s(e),L=o(e,"H2",{id:!0,"data-svelte-h":!0}),r(L)!=="svelte-1ae49rv"&&(L.innerHTML=wi),mt=s(e),he=o(e,"P",{"data-svelte-h":!0}),r(he)!=="svelte-1stk74c"&&(he.innerHTML=ki),gt=s(e),ce=o(e,"UL",{"data-svelte-h":!0}),r(ce)!=="svelte-1xjq2tz"&&(ce.innerHTML=xi),yt=s(e),de=o(e,"P",{"data-svelte-h":!0}),r(de)!=="svelte-4l76fh"&&(de.innerHTML=vi),wt=s(e),fe=o(e,"BLOCKQUOTE",{"data-svelte-h":!0}),r(fe)!=="svelte-y3r0br"&&(fe.innerHTML=bi),this.h()},h(){h(c,"class","toc"),h(d,"id","what-nixos-does-well"),h(f,"id","closeness-of-package-installation-and-configuration--system-replicability"),h(p,"id","exotic-package-dependencies-and-explicitly-adding-dependencies"),h(u,"id","temporary-development-installs"),h(m,"id","explicitly-defining-what-is-exposed-to-the-user--functionality-hiding"),h(g,"id","what-makes-nix-infuriatingfrustrating"),h(y,"id","doing-everything-the-nix-way"),h(w,"id","no-proper-method-of-temporarily-pinning-a-package"),h(k,"id","the-fragility-of-the-monolithic-nixpkgs-repository"),h(x,"id","the-lack-of-documentation"),h(v,"id","what-do-i-actually-want-in-from-nix-like-systems"),h(b,"id","the-alternate-solution--decman"),h(T,"id","what-about-remote-package-installation"),h(H,"id","will-you-never-be-using-nix"),h(L,"id","conclusion")},m(e,t){i(e,c,t),i(e,pe,t),i(e,M,t),i(e,ue,t),i(e,d,t),i(e,me,t),i(e,f,t),i(e,ge,t),i(e,I,t),i(e,ye,t),i(e,C,t),i(e,we,t),i(e,_,t),i(e,ke,t),i(e,P,t),i(e,xe,t),i(e,S,t),i(e,ve,t),i(e,p,t),i(e,be,t),i(e,N,t),i(e,Te,t),i(e,j,t),i(e,He,t),i(e,u,t),i(e,Le,t),i(e,A,t),i(e,Me,t),i(e,O,t),i(e,Ie,t),i(e,q,t),i(e,Ce,t),i(e,m,t),i(e,_e,t),i(e,W,t),i(e,Pe,t),i(e,E,t),i(e,Se,t),i(e,Ne,t),i(e,je,t),i(e,F,t),i(e,Ae,t),i(e,z,t),i(e,Oe,t),i(e,g,t),i(e,qe,t),i(e,y,t),i(e,We,t),i(e,G,t),i(e,Ee,t),i(e,D,t),i(e,Fe,t),i(e,B,t),i(e,ze,t),i(e,R,t),i(e,Ge,t),i(e,w,t),i(e,De,t),i(e,U,t),i(e,Be,t),i(e,X,t),i(e,Re,t),i(e,K,t),i(e,Ue,t),i(e,V,t),i(e,Xe,t),i(e,k,t),i(e,Ke,t),i(e,Y,t),i(e,Ve,t),i(e,x,t),i(e,Ye,t),i(e,Q,t),i(e,Qe,t),i(e,v,t),i(e,$e,t),i(e,$,t),i(e,Je,t),i(e,J,t),i(e,Ze,t),i(e,Z,t),i(e,et,t),i(e,ee,t),i(e,tt,t),i(e,te,t),i(e,it,t),i(e,b,t),i(e,nt,t),i(e,ie,t),i(e,at,t),i(e,ne,t),i(e,ot,t),i(e,ae,t),i(e,lt,t),i(e,T,t),i(e,st,t),i(e,oe,t),i(e,rt,t),i(e,le,t),i(e,ht,t),i(e,se,t),i(e,ct,t),i(e,H,t),i(e,dt,t),i(e,re,t),i(e,ft,t),i(e,pt,t),i(e,ut,t),i(e,L,t),i(e,mt,t),i(e,he,t),i(e,gt,t),i(e,ce,t),i(e,yt,t),i(e,de,t),i(e,wt,t),i(e,fe,t)},p:kt,i:kt,o:kt,d(e){e&&(n(c),n(pe),n(M),n(ue),n(d),n(me),n(f),n(ge),n(I),n(ye),n(C),n(we),n(_),n(ke),n(P),n(xe),n(S),n(ve),n(p),n(be),n(N),n(Te),n(j),n(He),n(u),n(Le),n(A),n(Me),n(O),n(Ie),n(q),n(Ce),n(m),n(_e),n(W),n(Pe),n(E),n(Se),n(Ne),n(je),n(F),n(Ae),n(z),n(Oe),n(g),n(qe),n(y),n(We),n(G),n(Ee),n(D),n(Fe),n(B),n(ze),n(R),n(Ge),n(w),n(De),n(U),n(Be),n(X),n(Re),n(K),n(Ue),n(V),n(Xe),n(k),n(Ke),n(Y),n(Ve),n(x),n(Ye),n(Q),n(Qe),n(v),n($e),n($),n(Je),n(J),n(Ze),n(Z),n(et),n(ee),n(tt),n(te),n(it),n(b),n(nt),n(ie),n(at),n(ne),n(ot),n(ae),n(lt),n(T),n(st),n(oe),n(rt),n(le),n(ht),n(se),n(ct),n(H),n(dt),n(re),n(ft),n(pt),n(ut),n(L),n(mt),n(he),n(gt),n(ce),n(yt),n(de),n(wt),n(fe))}}}const Pi={title:"NixOS - a year-long reflection",description:"My take aways from my year running NixOS, what was great, what is bad, and why I ultimately choose something else",tags:["computing","tips"],banner:"thoughts.jpg"};class Si extends Li{constructor(c){super(),Mi(this,c,null,Ii,Hi,{})}}export{Si as default,Pi as metadata};
