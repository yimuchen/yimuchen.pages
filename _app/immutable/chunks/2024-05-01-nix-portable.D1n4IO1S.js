import{s as Kt,n as Ze}from"./scheduler.D0k7T8uo.js";import{S as Qt,i as Xt,e as a,s as i,c as o,g as l,a as r,b as c,d as s,f as n}from"./index.BWiPcvWN.js";function Zt(Jt){let p,et='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#what-is-the-problem">What is the problem?</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#some-attempted-solutions">Some attempted solutions</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#nix-as-a-portable-package-manager">nix as a portable package manager</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#nix-running-without-root">nix running without root</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#setting-up-home-manager">Setting up home-manager</a></li></ol></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#some-limitations">Some limitations</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#some-closing-thoughts">Some closing thoughts</a></li></ol>',oe,h,tt='<a aria-hidden="true" tabindex="-1" href="#what-is-the-problem"><span class="icon icon-link"></span></a>What is the problem?',le,E,st=`In our field where there are many specialized tool and <a href="https://home.cern/science/computing/storage" rel="nofollow">very-very
large</a> data sets, we typically need to log into a centrally managed
cluster perform our data analysis requirements. The tools provided there for
working with text files is typically rather dated: while standard tools like
<a href="https://www.vim.org/" rel="nofollow"><code>vim</code></a>, <a href="https://www.gnu.org/software/emacs/" rel="nofollow"><code>emacs</code></a> and <a href="https://www.gnu.org/software/bash/" rel="nofollow"><code>bash</code></a> are commonly available, they
are typically older versions of the tool with none of the bells-and-whistles
that you might want for a prolonged coding experience.`,ie,C,nt=`While there is merit in understanding how to use vanilla tool-kits of the
standard tools (I’m rather shocked at how many people do not know how to do
command line <a href="https://en.wikipedia.org/wiki/Pipeline_(Unix)" rel="nofollow">piping</a> in our field), when your main goal is to quickly
and extensively write code, the tools in their vanilla form usually a little
lack-luster on their own. My definition of the problem is: can we bring the
modern tools with you to the older machines in a way such that:`,re,_,at=`<li>You can have access to newer tools not installed by default on the older
machines, while also be free to update them if your workflow requires.</li> <li>You still have access to <strong>all</strong> the tools of the default machines
environment: either access to proprietary/sensitive code bases or tools that
must be kept to just the remote machines, or tools that only make sense for
the specific machines (like job submissions/dataset look up)</li>`,ce,d,ot='<a aria-hidden="true" tabindex="-1" href="#some-attempted-solutions"><span class="icon icon-link"></span></a>Some attempted solutions',pe,D,lt=`I’ve been trying to solve this problem for the past 8 years, and never quite
got a satisfactory solution:`,he,I,it=`<li><strong>dotfile management</strong>: the obvious answer of needing tools to be up-to-date:
can you not simply include your customized configurations files to the remote
machine? While this partially solves the issue, some tools simply require a
new version. For example: <a href="https://microsoft.github.io/language-server-protocol/" rel="nofollow">LSP</a> support for <code>vim</code> is only available for
<a href="https://github.com/prabirshrestha/vim-lsp" rel="nofollow"><code>vim&gt;=8</code></a> (some older machines still use vim 7), and image displays
in terminal requires separate programs that are not common in remote
machines. I really want a way to not have to compromise on the tools that I
want to use when developing.</li>`,de,q,rt=`<li><strong>Compiling on remote server</strong>: since tools are all open-source, can we
simply <a href="https://gcc.gnu.org/" rel="nofollow">compile</a> our required tool on the server? While technically this
is achievable, practically executing this is a nightmare. By the package
splitting scheme of the <code>gcc</code> compiler itself has 63 dependencies, while some
of these maybe available on older machines, making sure that all 63
dependencies play nicely with each other is a highly non-trivial task. This
also does not take into consideration what would happen if you loaded some
development environment on the remote machine, where the involved libraries
change again, making this solution very fragile.</li>`,ue,A,ct=`<li><p><strong>All local development</strong>: this was the solution that I used for the longest
time: develop everything locally on my machine, where I have full control
over the development environment, then mirror all my changes to the remote
machine. While this worked for me, not everyone may have this luxury if you
are working with sensitive codebases that cannot be pulled to your local
machine; this also means that I will also to have a mirrored environment on
my personal machine if I want all the required, which may not always be
possible (such as if the packages involved are excessively large) or does not
make sense for my particular machine (like a GPU-ML library on my laptop
without a GPU). In these cases, I will just have to live with certain
functionalities with my development environment not fully functioning.</p></li> <li><p><strong>Docker/container images</strong>: another solution would be can we just spin up
<a href="https://www.docker.com/" rel="nofollow">docker</a> image that contains a newer version of the OS in question?
The problem with containers is that once you spin it up, it is effectively
isolated from the host machine, for better or for worse. This means that we
are expected to lose access to all tools of the underlying host machine,
unless we perform additional DockerFile hackery. The inclusion of pure tools
(like text editors) also bloats the docker image fast, adding more problems
when sharing environments (such as making sure multiple DockerFiles remain
compatible).</p></li>`,me,P,pt=`Ultimately, the solution that I am looking for is a distribution agnostic
<a href="https://en.wikipedia.org/wiki/Package_manager" rel="nofollow">package manager</a>: something that will allow me to install arbitrary
packages of interest while also respecting what is already installed in the
distribution that my machine is running on. As it turns out, this solution was
actually being developed on, while also including powerful features that far
exceeds what I was hoping for.`,ye,u,ht='<a aria-hidden="true" tabindex="-1" href="#nix-as-a-portable-package-manager"><span class="icon icon-link"></span></a><code>nix</code> as a portable package manager',fe,B,dt=`The <a href="https://nixos.org/" rel="nofollow"><code>Nix</code> package manager</a> (and its accompanying Linux distribution
NixOS) is described as a fully declarative package management system to ensure
reliability and reproducibility. The outcome of this set up solves the age-long
issue of how can a machine reliably host multiple version of the same package
ensuring that the full dependency stacks do not interfere with each other. The
user can then pick and choose exactly which version of a package to use, and
the package manager will handle the environment setup to ensure only the
required libraries are exposed to the package of interest.`,ve,j,ut=`This is the ultimate goal of nix, but for me, the key part of this setup is
that <code>nix</code> can be deployed as a standalone package manager to someone without
root access, meaning that I supposedly deploy nix to machine that allows me to
access the <code>nix.org</code> domains! So below are the instructions for setting up
<code>nix</code> in your own environment.`,ge,m,mt='<a aria-hidden="true" tabindex="-1" href="#nix-running-without-root"><span class="icon icon-link"></span></a>nix running without root',we,S,yt=`First we need to get a “static” version of the <code>nix</code> package manager
(self-contained executable without linking to any other library). This was
actually the hardest step, as this URL is not marketed anywhere on the official
nix documentation (shout out to <a href="https://bnikolic.co.uk/blog/nix/2024/01/16/nix-without-root.html" rel="nofollow">these</a> <a href="https://zameermanji.com/blog/2023/3/26/using-nix-without-root/" rel="nofollow">two</a> blog posts that I found
during my hunt). You might want to change the version number depending on major
nix updates as well as the machine that you are using:`,xe,y,ft=`<div class="code-block-header"><span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#A6E22E">curl</span><span style="color:#AE81FF"> -L</span><span style="color:#E6DB74"> https://hydra.nixos.org/job/nix/maintenance-2.20/buildStatic.x86_64-linux/latest/download-by-type/file/binary-dist</span><span style="color:#F92672"> &gt;</span><span style="color:#E6DB74"> nixstatic</span></span>
<span class="line"><span style="color:#A6E22E">chmod</span><span style="color:#E6DB74"> +x</span><span style="color:#E6DB74"> nixstatic</span></span></code></pre></div>`,be,O,vt=`By default, <code>nix</code> expects everything managed by <code>nix</code> related to be placed
under <code>/nix/store</code> directory. Setting up in the root directory is not something
that we have access to, in this case, so we will need to modify this behavior
by editing the <code>~/.config/nix/nix.conf</code> file:`,ke,f,gt=`<div class="code-block-header">In File [~/.config/nix/nix.conf] <span class="code-block-lang">[plaintext]</span></div> <div class="code-block "><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span>store = &lt;your/store/path&gt;</span></span>
<span class="line"><span>extra-experimental-features = flakes nix-command</span></span>
<span class="line"><span>ssl-cert-file = /etc/pki/tls/cert.pem</span></span></code></pre></div>`,Fe,W,wt=`(As of 2024 May, the experimental features are required, or you will be typing
<code>--extra-experimental-features</code> a lot). With this you can now spin up an
interactive shell that contain the actual nix commands:`,Te,v,xt='<div class="code-block-header">command for activating shell with nix commands <span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#A6E22E">./nixstatic</span><span style="color:#E6DB74"> shell</span><span style="color:#E6DB74"> nixpkgs#nix</span><span style="color:#E6DB74"> nixpkgs#git</span><span style="color:#E6DB74"> nixpkgs#bashInteractive</span><span style="color:#AE81FF"> --command</span><span style="color:#E6DB74"> bash</span></span></code></pre></div>',He,U,bt=`You will notice that the first time you do this is very slow, because nix
automatically detects all the required libraries required download the file
required into the defined <code>store</code> directory to run the nix shell. In this shell
you should see that the tool kits specified are now updated to the latest
stable version found in the <a href="https://search.nixos.org/packages" rel="nofollow">NixOS package repository</a>.`,Le,V,kt=`You will also notice that subsequent calls to the spinning up this shell is now
fast, because nix stores the requested packages in the <code>&lt;store&gt;</code> directory
specified earlier, so new shells that need new packages does not need to
download an instance of the package every time.`,Me,z,Ft=`While it is tempting to stop here, and simply declare an alias that spins up
all your favorite tool with some alias:`,Ee,g,Tt='<div class="code-block-header">Do not do this <span class="code-block-lang">[bash]</span></div> <div class="code-block "><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#F92672">&lt;</span><span style="color:#F8F8F2">path</span><span style="color:#F92672">&gt;</span><span style="color:#F8F8F2">/to/nixstatic shell nixpkgs#tool1 nixpkgs#tool2 ... --command bash</span></span></code></pre></div>',Ce,N,Ht=`This is missing out the full power of <code>nix</code>. The design of <code>nix</code> is to define
environment in a declarative manner, similar virtual environment setups for
various languages (such as JavaScript’s <a href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json" rel="nofollow"><code>package.json</code></a> paradigm, or
Python/Conda’s <a href="https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html" rel="nofollow"><code>environment.yaml</code></a> paradigm), except <code>nix</code> is
designed to do this for the entire system! The ideal is, effectively, that your
tool kit should be defined as just another dot file.`,_e,Y,Lt=`This declaration of the required tool kit can be done either globally for the
user (to be used as the default), or on-demand in special “nix shells”. While
what I am focusing on here is mainly the global setup for a nice set of tools
to work with, the power of on-demand nix shell cannot be understated, as this
ensures that all development environment can be performed in a consistent and
reproducible manner. For the next section of setting up <code>home-manager</code>, this
will be a global environment that your user will always have access to, while
also being compatible with individual development shells that you want to work
with.`,De,w,Mt='<a aria-hidden="true" tabindex="-1" href="#setting-up-home-manager"><span class="icon icon-link"></span></a>Setting up home-manager',Ie,G,Et=`The nix-specific <a href="https://nix-community.github.io/home-manager/" rel="nofollow"><code>home-manager</code> package</a> is originally designed
to handle user-level packages (as opposed to system-level package) and their
configurations following the nix declarative paradigm. What this means for us
where we don’t have a system-level package to manage, is that home manager can
effectively all the packages we are interested in.`,qe,$,Ct=`The default distribution of home manager expects a standard nix set up where
everything is placed under <code>/nix/store</code>. This is not our case, so we will need
to build home manager directly (shout out to <a href="https://github.com/nix-community/home-manager/issues/3752#issuecomment-1566179742" rel="nofollow">this GitHub comment</a>
that first showed this solution). Within your nix shell, where you should
minimally have nix, bash and an updated version of git installed:`,Ae,x,_t=`<div class="code-block-header">run within nix shell <span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#88846F">## Set up a nix shell with nix static, must include at least nix and an updated git</span></span>
<span class="line"><span style="color:#88846F"># ./nixstatic shell nixpkgs#nix nixpkgs#git nixpkgs#bashInteractive --command bash</span></span>
<span class="line"><span style="color:#A6E22E">git</span><span style="color:#E6DB74"> clone</span><span style="color:#E6DB74"> https://github.com/nix-community/home-manager.git</span></span>
<span class="line"><span style="color:#66D9EF">cd</span><span style="color:#E6DB74"> home-manager</span></span>
<span class="line"><span style="color:#A6E22E">nix</span><span style="color:#E6DB74"> build</span><span style="color:#E6DB74"> .</span></span>
<span class="line"><span style="color:#A6E22E">./results/bin/home-manager</span><span style="color:#E6DB74"> init</span></span>
<span class="line"><span style="color:#88846F">## Should show a message like:</span></span>
<span class="line"><span style="color:#88846F">## create ~/.config/home-manager/home.nix</span></span>
<span class="line"><span style="color:#88846F">## create ~/.config/home-manager/flake.nix</span></span></code></pre></div>`,Pe,R,Dt=`This will create the files required to declaring your default home environment.
For a simple configuration we will only need to edit the <code>home.nix</code> file for
now. For detailed instruction of what the configuration means, you should
consult the official <a href="https://nix-community.github.io/home-manager/" rel="nofollow">documentation</a>. Let’s keep in simple in this
example, and say we just need some extra packages: <a href="https://neovim.io/" rel="nofollow"><code>neovim</code></a>,
<a href="https://www.zsh.org/" rel="nofollow"><code>zsh</code></a> and an updated version of <a href="https://git-scm.com/" rel="nofollow"><code>git</code></a>. The edits we need to make
in this case is then just some additional updates to the <code>home.packages</code> list
entry:`,Be,b,It=`<div class="code-block-header">In File [~/.config/home-manager/home.nix] <span class="code-block-lang">[nix]</span></div> <div class="code-block "><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#F8F8F2">{ </span><span style="color:#FD971F;font-style:italic">config</span><span style="color:#F92672">,</span><span style="color:#FD971F;font-style:italic"> pkgs</span><span style="color:#F92672">,</span><span style="color:#F92672"> ... </span><span style="color:#F8F8F2">}:</span></span>
<span class="line"><span style="color:#F8F8F2">{</span></span>
<span class="line"><span style="color:#88846F">  # Home Manager needs a bit of information about you and the paths</span></span>
<span class="line"><span style="color:#A6E22E">  home</span><span style="color:#F8F8F2">.</span><span style="color:#A6E22E">username</span><span style="color:#F92672"> =</span><span style="color:#E6DB74"> &quot;&lt;username&gt;&quot;</span><span style="color:#F8F8F2">;</span></span>
<span class="line"><span style="color:#A6E22E">  home</span><span style="color:#F8F8F2">.</span><span style="color:#A6E22E">homeDirectory</span><span style="color:#F92672"> =</span><span style="color:#E6DB74"> &quot;&lt;home directory&gt;&quot;</span><span style="color:#F8F8F2">;</span></span>
<span class="line"><span style="color:#A6E22E">  home</span><span style="color:#F8F8F2">.</span><span style="color:#A6E22E">stateVersion</span><span style="color:#F92672"> =</span><span style="color:#E6DB74"> &quot;23.11&quot;</span><span style="color:#F8F8F2">; </span><span style="color:#88846F"># DO NOT EDIT</span><span style="color:#66D9EF">!!!</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F">  # List of packages that you want to include in your extra session.</span></span>
<span class="line"><span style="color:#88846F">  # See the nix package repository to see what you</span></span>
<span class="line"><span style="color:#A6E22E">  home</span><span style="color:#F8F8F2">.</span><span style="color:#A6E22E">packages</span><span style="color:#F92672"> =</span><span style="color:#F8F8F2"> [</span></span>
<span class="line"><span style="color:#FD971F;font-style:italic">    pkgs</span><span style="color:#F92672">.</span><span style="color:#FD971F;font-style:italic">git</span></span>
<span class="line"><span style="color:#FD971F;font-style:italic">    pkgs</span><span style="color:#F92672">.</span><span style="color:#FD971F;font-style:italic">cacert</span><span style="color:#88846F"> # Otherwise SSL operations may misbehave</span></span>
<span class="line"><span style="color:#FD971F;font-style:italic">    pkgs</span><span style="color:#F92672">.</span><span style="color:#FD971F;font-style:italic">zsh</span></span>
<span class="line"><span style="color:#FD971F;font-style:italic">    pkgs</span><span style="color:#F92672">.</span><span style="color:#FD971F;font-style:italic">neovim</span></span>
<span class="line"><span style="color:#F8F8F2">  ];</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F">  # Let Home Manager install and manage itself.</span></span>
<span class="line"><span style="color:#A6E22E">  programs</span><span style="color:#F8F8F2">.</span><span style="color:#A6E22E">home-manager</span><span style="color:#F8F8F2">.</span><span style="color:#A6E22E">enable</span><span style="color:#F92672"> =</span><span style="color:#AE81FF"> true</span><span style="color:#F8F8F2">;</span></span>
<span class="line"><span style="color:#F8F8F2">}</span><span style="color:#F44747">;</span></span></code></pre></div>`,je,J,qt=`Once you are happy with the list of packages, you can run the following items
within a nix shells`,Se,k,At=`<div class="code-block-header">run within nix shell <span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#66D9EF">cd</span><span style="color:#E6DB74"> home-manager</span></span>
<span class="line"><span style="color:#A6E22E">./results/bin/home-manager</span><span style="color:#E6DB74"> switch</span></span></code></pre></div>`,Oe,K,Pt=`This will install all the programs that you are using to <code>$HOME/.nix-profile</code>
which in turn is actually linked to the where you have set up the full store
paths (defined in your <code>~/.config/nix/nix.conf</code> file). As we are not using
standard nix install, some path automation is not properly handled, so what you
also need is to prepare a minimum <code>bashrc</code> file that looks something like:`,We,F,Bt=`<div class="code-block-header">In file [~/.bashrc-nix.sh] <span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#88846F"># Required for home manager</span></span>
<span class="line"><span style="color:#66D9EF">source</span><span style="color:#F8F8F2"> $HOME</span><span style="color:#E6DB74">/.nix-profile/etc/profile.d/hm-session-vars.sh</span></span>
<span class="line"><span style="color:#88846F"># Automatically setting up the path variable is not handled by HM in this configurations</span></span>
<span class="line"><span style="color:#F92672">export</span><span style="color:#F8F8F2"> PATH</span><span style="color:#F92672">=</span><span style="color:#F8F8F2">$HOME/.nix-profile/bin/:$PATH</span></span></code></pre></div>`,Ue,Q,jt=`Then you can jump all the way from the default login shell to your home-manager
defined environment using the following one-liner:`,Ve,T,St='<div class="code-block-header">run in default environment <span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#A6E22E">./nixstatic</span><span style="color:#E6DB74"> shell</span><span style="color:#E6DB74"> nixpkgs#nix</span><span style="color:#AE81FF"> --command</span><span style="color:#E6DB74"> bash</span><span style="color:#AE81FF"> -l</span><span style="color:#AE81FF"> --rcfile=</span><span style="color:#F8F8F2">$HOME</span><span style="color:#AE81FF">/.bashrc-nix.sh</span></span></code></pre></div>',ze,X,Ot=`In this environment, you should be able to use all the packages that you have
listed in the <code>home.nix</code> file! I wouldn’t go over all the perks of using
declarative system (like configuration-wide upgrading, generational roll-back
and such), for more details of this, consider reading about <code>nix</code> in general.
If you want to update your environment (a.k.a. modify the <code>home.nix</code> file), run
the <code>home-manager switch</code> command after you have finished updating your update.
Notice that if anything fail, this will not affect you current environment (the
reliability mantra of nix in full effect!)`,Ne,Z,Wt=`To automate the process of spinning up a nix shell with home-manager packages
when you log into the remote machine with a special tag, we can add an entry to
your local <code>ssh</code> configuration as something like:`,Ye,H,Ut=`<div class="code-block-header">~/.ssh/config <span class="code-block-lang">[plaintext]</span></div> <div class="code-block "><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span>Host remotehost*</span></span>
<span class="line"><span>    Host remotehost.com</span></span>
<span class="line"><span>    * Additional ssh settings you might want</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Host remotehost-nixshell</span></span>
<span class="line"><span>    RequestTTY yes</span></span>
<span class="line"><span>    RemoteCommand &lt;path&gt;/to/nixstatic shell nixpkgs#nix --command bash -l --rcfile=$HOME/.bashrc-nix.sh</span></span></code></pre></div>`,Ge,ee,Vt="Notice that the <code>RequestTTY</code> is required for the shell prompt.",$e,te,zt=`<p>While I did try and see of spin up this interactive shell using the
interactive paradigm, this doesn’t work as <code>nixstatic shell</code> does not work
with flake files with a non-standard install. Unfortunately, this does mean
that the nix may attempt to pull the most up-to-date package from the defined
nix-channel whenever you log in (which may take a long time)</p>`,Re,L,Nt='<a aria-hidden="true" tabindex="-1" href="#some-limitations"><span class="icon icon-link"></span></a>Some limitations',Je,se,Yt=`While this solution works wonderfully for my cases (I mainly just wanted to be
able to have an up-to-date version of <code>neovim</code> with the required packages be
available anywhere I go), there are certain caveats you need to be careful of
if you want to try this solution for yourself:`,Ke,ne,Gt=`<li><p>Given how <code>nix</code> aims to ensure package compatibility, the path you use to
store nix needs a rather significant space. The example above racks up a
total size of 2.0 GB already, so be sure of how much space is available on
your system (many clusters have a very small home directory space to ensure
performance for multiple users). If you ever need to free up space, run
<code>nix-collect-garbage</code> in your nix shell. Notice that after garbage collect
command is executed, a new spin up will be slower, as nix will double-check
the validity of the defined shells for safety.</p></li> <li><p>You will need access to the <code>nix.org</code> domain as well as GitHub. The clusters
I was working with is rather open, but you may need to contact your
administrators if you need additional access to these domains.</p></li> <li><p>While NIX solves the problem of requiring a consistent tool stack to be
present, it does not, unfortunately solve the issue that some tool stacks are
simply too old to take advantage of the latest tools (moment of silence for
those who still have to deal with Python2…)</p></li> <li><p>Because we are currently in a non-standard nix configuration, spinning up
nested nix shells is currently not possible. This means if you want to fully
immerse yourself in the nix-ethos with custom nix-shells for development
environment, you will need to start the nix-shell up from the default
(non-nix) shell. Once you get the hang of nix configuration files, it is not
that difficult to chain together configuration to incrementally build up
environments with common tools, but that is beyond the scope of this article.</p></li>`,Qe,M,$t='<a aria-hidden="true" tabindex="-1" href="#some-closing-thoughts"><span class="icon icon-link"></span></a>Some closing thoughts',Xe,ae,Rt=`The declarative nix package manager has been on my radar for nearly 6 months
now. The steep learning curve had always kinda put me off from fully committing
to learning nix, but now that nix is potentially the most optimal solution to
one of the most long-standing problems I had with writing code on remote
machines, it might be time to actually bite the bullet and start learning nix
for real.`;return{c(){p=a("nav"),p.innerHTML=et,oe=i(),h=a("h2"),h.innerHTML=tt,le=i(),E=a("p"),E.innerHTML=st,ie=i(),C=a("p"),C.innerHTML=nt,re=i(),_=a("ul"),_.innerHTML=at,ce=i(),d=a("h2"),d.innerHTML=ot,pe=i(),D=a("p"),D.textContent=lt,he=i(),I=a("ul"),I.innerHTML=it,de=i(),q=a("ul"),q.innerHTML=rt,ue=i(),A=a("ul"),A.innerHTML=ct,me=i(),P=a("p"),P.innerHTML=pt,ye=i(),u=a("h2"),u.innerHTML=ht,fe=i(),B=a("p"),B.innerHTML=dt,ve=i(),j=a("p"),j.innerHTML=ut,ge=i(),m=a("h3"),m.innerHTML=mt,we=i(),S=a("p"),S.innerHTML=yt,xe=i(),y=a("div"),y.innerHTML=ft,be=i(),O=a("p"),O.innerHTML=vt,ke=i(),f=a("div"),f.innerHTML=gt,Fe=i(),W=a("p"),W.innerHTML=wt,Te=i(),v=a("div"),v.innerHTML=xt,He=i(),U=a("p"),U.innerHTML=bt,Le=i(),V=a("p"),V.innerHTML=kt,Me=i(),z=a("p"),z.textContent=Ft,Ee=i(),g=a("div"),g.innerHTML=Tt,Ce=i(),N=a("p"),N.innerHTML=Ht,_e=i(),Y=a("p"),Y.innerHTML=Lt,De=i(),w=a("h3"),w.innerHTML=Mt,Ie=i(),G=a("p"),G.innerHTML=Et,qe=i(),$=a("p"),$.innerHTML=Ct,Ae=i(),x=a("div"),x.innerHTML=_t,Pe=i(),R=a("p"),R.innerHTML=Dt,Be=i(),b=a("div"),b.innerHTML=It,je=i(),J=a("p"),J.textContent=qt,Se=i(),k=a("div"),k.innerHTML=At,Oe=i(),K=a("p"),K.innerHTML=Pt,We=i(),F=a("div"),F.innerHTML=Bt,Ue=i(),Q=a("p"),Q.textContent=jt,Ve=i(),T=a("div"),T.innerHTML=St,ze=i(),X=a("p"),X.innerHTML=Ot,Ne=i(),Z=a("p"),Z.innerHTML=Wt,Ye=i(),H=a("div"),H.innerHTML=Ut,Ge=i(),ee=a("p"),ee.innerHTML=Vt,$e=i(),te=a("blockquote"),te.innerHTML=zt,Re=i(),L=a("h2"),L.innerHTML=Nt,Je=i(),se=a("p"),se.innerHTML=Yt,Ke=i(),ne=a("ul"),ne.innerHTML=Gt,Qe=i(),M=a("h2"),M.innerHTML=$t,Xe=i(),ae=a("p"),ae.textContent=Rt,this.h()},l(e){p=o(e,"NAV",{class:!0,"data-svelte-h":!0}),l(p)!=="svelte-x6c5t2"&&(p.innerHTML=et),oe=r(e),h=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(h)!=="svelte-gst0r3"&&(h.innerHTML=tt),le=r(e),E=o(e,"P",{"data-svelte-h":!0}),l(E)!=="svelte-r6ptsw"&&(E.innerHTML=st),ie=r(e),C=o(e,"P",{"data-svelte-h":!0}),l(C)!=="svelte-xhl2lc"&&(C.innerHTML=nt),re=r(e),_=o(e,"UL",{"data-svelte-h":!0}),l(_)!=="svelte-12ov4f5"&&(_.innerHTML=at),ce=r(e),d=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(d)!=="svelte-l6p5gg"&&(d.innerHTML=ot),pe=r(e),D=o(e,"P",{"data-svelte-h":!0}),l(D)!=="svelte-1v1cfgo"&&(D.textContent=lt),he=r(e),I=o(e,"UL",{"data-svelte-h":!0}),l(I)!=="svelte-qx67gh"&&(I.innerHTML=it),de=r(e),q=o(e,"UL",{"data-svelte-h":!0}),l(q)!=="svelte-l7pzx7"&&(q.innerHTML=rt),ue=r(e),A=o(e,"UL",{"data-svelte-h":!0}),l(A)!=="svelte-hvuyr9"&&(A.innerHTML=ct),me=r(e),P=o(e,"P",{"data-svelte-h":!0}),l(P)!=="svelte-1y9kogl"&&(P.innerHTML=pt),ye=r(e),u=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(u)!=="svelte-10fhw2r"&&(u.innerHTML=ht),fe=r(e),B=o(e,"P",{"data-svelte-h":!0}),l(B)!=="svelte-zl8mbj"&&(B.innerHTML=dt),ve=r(e),j=o(e,"P",{"data-svelte-h":!0}),l(j)!=="svelte-1c2ke7c"&&(j.innerHTML=ut),ge=r(e),m=o(e,"H3",{id:!0,"data-svelte-h":!0}),l(m)!=="svelte-iss7kq"&&(m.innerHTML=mt),we=r(e),S=o(e,"P",{"data-svelte-h":!0}),l(S)!=="svelte-d58n00"&&(S.innerHTML=yt),xe=r(e),y=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(y)!=="svelte-2yhkcd"&&(y.innerHTML=ft),be=r(e),O=o(e,"P",{"data-svelte-h":!0}),l(O)!=="svelte-1kg0ekw"&&(O.innerHTML=vt),ke=r(e),f=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(f)!=="svelte-enh41a"&&(f.innerHTML=gt),Fe=r(e),W=o(e,"P",{"data-svelte-h":!0}),l(W)!=="svelte-rjgsxi"&&(W.innerHTML=wt),Te=r(e),v=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(v)!=="svelte-16uew0i"&&(v.innerHTML=xt),He=r(e),U=o(e,"P",{"data-svelte-h":!0}),l(U)!=="svelte-c60zvr"&&(U.innerHTML=bt),Le=r(e),V=o(e,"P",{"data-svelte-h":!0}),l(V)!=="svelte-1mpz4sd"&&(V.innerHTML=kt),Me=r(e),z=o(e,"P",{"data-svelte-h":!0}),l(z)!=="svelte-18yhdxy"&&(z.textContent=Ft),Ee=r(e),g=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(g)!=="svelte-1ugtrwm"&&(g.innerHTML=Tt),Ce=r(e),N=o(e,"P",{"data-svelte-h":!0}),l(N)!=="svelte-1xauitj"&&(N.innerHTML=Ht),_e=r(e),Y=o(e,"P",{"data-svelte-h":!0}),l(Y)!=="svelte-lvfopj"&&(Y.innerHTML=Lt),De=r(e),w=o(e,"H3",{id:!0,"data-svelte-h":!0}),l(w)!=="svelte-9fyiyi"&&(w.innerHTML=Mt),Ie=r(e),G=o(e,"P",{"data-svelte-h":!0}),l(G)!=="svelte-1wost0m"&&(G.innerHTML=Et),qe=r(e),$=o(e,"P",{"data-svelte-h":!0}),l($)!=="svelte-1qvui6s"&&($.innerHTML=Ct),Ae=r(e),x=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(x)!=="svelte-3cheqo"&&(x.innerHTML=_t),Pe=r(e),R=o(e,"P",{"data-svelte-h":!0}),l(R)!=="svelte-1o7i5vj"&&(R.innerHTML=Dt),Be=r(e),b=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(b)!=="svelte-1wpwb6y"&&(b.innerHTML=It),je=r(e),J=o(e,"P",{"data-svelte-h":!0}),l(J)!=="svelte-fjke4n"&&(J.textContent=qt),Se=r(e),k=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(k)!=="svelte-1b9r55m"&&(k.innerHTML=At),Oe=r(e),K=o(e,"P",{"data-svelte-h":!0}),l(K)!=="svelte-7pphin"&&(K.innerHTML=Pt),We=r(e),F=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(F)!=="svelte-5gwj1e"&&(F.innerHTML=Bt),Ue=r(e),Q=o(e,"P",{"data-svelte-h":!0}),l(Q)!=="svelte-rg2wha"&&(Q.textContent=jt),Ve=r(e),T=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(T)!=="svelte-e07385"&&(T.innerHTML=St),ze=r(e),X=o(e,"P",{"data-svelte-h":!0}),l(X)!=="svelte-1348wse"&&(X.innerHTML=Ot),Ne=r(e),Z=o(e,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-1qk3yj5"&&(Z.innerHTML=Wt),Ye=r(e),H=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(H)!=="svelte-y39jpa"&&(H.innerHTML=Ut),Ge=r(e),ee=o(e,"P",{"data-svelte-h":!0}),l(ee)!=="svelte-1p5n920"&&(ee.innerHTML=Vt),$e=r(e),te=o(e,"BLOCKQUOTE",{"data-svelte-h":!0}),l(te)!=="svelte-1jkbclw"&&(te.innerHTML=zt),Re=r(e),L=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(L)!=="svelte-19w07d7"&&(L.innerHTML=Nt),Je=r(e),se=o(e,"P",{"data-svelte-h":!0}),l(se)!=="svelte-1sqmc6l"&&(se.innerHTML=Yt),Ke=r(e),ne=o(e,"UL",{"data-svelte-h":!0}),l(ne)!=="svelte-133e0tp"&&(ne.innerHTML=Gt),Qe=r(e),M=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(M)!=="svelte-h4m1ux"&&(M.innerHTML=$t),Xe=r(e),ae=o(e,"P",{"data-svelte-h":!0}),l(ae)!=="svelte-1118fk0"&&(ae.textContent=Rt),this.h()},h(){c(p,"class","toc"),c(h,"id","what-is-the-problem"),c(d,"id","some-attempted-solutions"),c(u,"id","nix-as-a-portable-package-manager"),c(m,"id","nix-running-without-root"),c(y,"class","code-block-container"),c(f,"class","code-block-container"),c(v,"class","code-block-container"),c(g,"class","code-block-container"),c(w,"id","setting-up-home-manager"),c(x,"class","code-block-container"),c(b,"class","code-block-container"),c(k,"class","code-block-container"),c(F,"class","code-block-container"),c(T,"class","code-block-container"),c(H,"class","code-block-container"),c(L,"id","some-limitations"),c(M,"id","some-closing-thoughts")},m(e,t){s(e,p,t),s(e,oe,t),s(e,h,t),s(e,le,t),s(e,E,t),s(e,ie,t),s(e,C,t),s(e,re,t),s(e,_,t),s(e,ce,t),s(e,d,t),s(e,pe,t),s(e,D,t),s(e,he,t),s(e,I,t),s(e,de,t),s(e,q,t),s(e,ue,t),s(e,A,t),s(e,me,t),s(e,P,t),s(e,ye,t),s(e,u,t),s(e,fe,t),s(e,B,t),s(e,ve,t),s(e,j,t),s(e,ge,t),s(e,m,t),s(e,we,t),s(e,S,t),s(e,xe,t),s(e,y,t),s(e,be,t),s(e,O,t),s(e,ke,t),s(e,f,t),s(e,Fe,t),s(e,W,t),s(e,Te,t),s(e,v,t),s(e,He,t),s(e,U,t),s(e,Le,t),s(e,V,t),s(e,Me,t),s(e,z,t),s(e,Ee,t),s(e,g,t),s(e,Ce,t),s(e,N,t),s(e,_e,t),s(e,Y,t),s(e,De,t),s(e,w,t),s(e,Ie,t),s(e,G,t),s(e,qe,t),s(e,$,t),s(e,Ae,t),s(e,x,t),s(e,Pe,t),s(e,R,t),s(e,Be,t),s(e,b,t),s(e,je,t),s(e,J,t),s(e,Se,t),s(e,k,t),s(e,Oe,t),s(e,K,t),s(e,We,t),s(e,F,t),s(e,Ue,t),s(e,Q,t),s(e,Ve,t),s(e,T,t),s(e,ze,t),s(e,X,t),s(e,Ne,t),s(e,Z,t),s(e,Ye,t),s(e,H,t),s(e,Ge,t),s(e,ee,t),s(e,$e,t),s(e,te,t),s(e,Re,t),s(e,L,t),s(e,Je,t),s(e,se,t),s(e,Ke,t),s(e,ne,t),s(e,Qe,t),s(e,M,t),s(e,Xe,t),s(e,ae,t)},p:Ze,i:Ze,o:Ze,d(e){e&&(n(p),n(oe),n(h),n(le),n(E),n(ie),n(C),n(re),n(_),n(ce),n(d),n(pe),n(D),n(he),n(I),n(de),n(q),n(ue),n(A),n(me),n(P),n(ye),n(u),n(fe),n(B),n(ve),n(j),n(ge),n(m),n(we),n(S),n(xe),n(y),n(be),n(O),n(ke),n(f),n(Fe),n(W),n(Te),n(v),n(He),n(U),n(Le),n(V),n(Me),n(z),n(Ee),n(g),n(Ce),n(N),n(_e),n(Y),n(De),n(w),n(Ie),n(G),n(qe),n($),n(Ae),n(x),n(Pe),n(R),n(Be),n(b),n(je),n(J),n(Se),n(k),n(Oe),n(K),n(We),n(F),n(Ue),n(Q),n(Ve),n(T),n(ze),n(X),n(Ne),n(Z),n(Ye),n(H),n(Ge),n(ee),n($e),n(te),n(Re),n(L),n(Je),n(se),n(Ke),n(ne),n(Qe),n(M),n(Xe),n(ae))}}}const ss={title:"Nix as a local package manager",description:"A first exploration for carrying your personal development tool everywhere",tags:["vim","computing","tips"],banner:"thoughts.jpg"};class ns extends Qt{constructor(p){super(),Xt(this,p,null,Zt,Kt,{})}}export{ns as default,ss as metadata};
