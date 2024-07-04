import{s as ss,n as nt}from"./scheduler.D0k7T8uo.js";import{S as ns,i as as,e as a,s as i,c as o,g as l,a as r,b as c,d as s,f as n}from"./index.B7LT_aZO.js";function os(ts){let p,at='<ol class="toc-level toc-level-1"><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#what-is-the-problem">What is the problem?</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#some-attempted-solutions">Some attempted solutions</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#nix-as-a-portable-package-manager">nix as a portable package manager</a><ol class="toc-level toc-level-2"><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#nix-running-without-root">nix running without root</a></li><li class="toc-item toc-item-h3"><a class="toc-link toc-link-h3" href="#setting-up-home-manager">Setting up home-manager</a></li></ol></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#some-limitations">Some limitations</a></li><li class="toc-item toc-item-h2"><a class="toc-link toc-link-h2" href="#some-closing-thoughts">Some closing thoughts</a></li></ol>',ie,h,ot='<a aria-hidden="true" tabindex="-1" href="#what-is-the-problem"><span class="icon icon-link"></span></a>What is the problem?',re,C,lt=`In our field where there are many specialized tool and <a href="https://home.cern/science/computing/storage" rel="nofollow">very-very
large</a> data sets, we typically need to log into a centrally managed
cluster perform our data analysis requirements. The tools provided there for
working with text files is typically rather dated: while standard tools like
<a href="https://www.vim.org/" rel="nofollow"><code>vim</code></a>, <a href="https://www.gnu.org/software/emacs/" rel="nofollow"><code>emacs</code></a> and <a href="https://www.gnu.org/software/bash/" rel="nofollow"><code>bash</code></a> are commonly available, they
are typically older versions of the tool with none of the bells-and-whistles
that you might want for a prolonged coding experience.`,ce,_,it=`While there is merit in understanding how to use vanilla tool-kits of the
standard tools (I’m rather shocked at how many people do not know how to do
command line <a href="https://en.wikipedia.org/wiki/Pipeline_(Unix)" rel="nofollow">piping</a> in our field), when your main goal is to quickly
and extensively write code, the tools in their vanilla form usually a little
lack-luster on their own. My definition of the problem is: can we bring the
modern tools with you to the older machines in a way such that:`,pe,D,rt=`<li>You can have access to newer tools not installed by default on the older
machines, while also be free to update them if your workflow requires.</li> <li>You still have access to <strong>all</strong> the tools of the default machines
environment: either access to proprietary/sensitive code bases or tools that
must be kept to just the remote machines, or tools that only make sense for
the specific machines (like job submissions/dataset look up)</li>`,he,d,ct='<a aria-hidden="true" tabindex="-1" href="#some-attempted-solutions"><span class="icon icon-link"></span></a>Some attempted solutions',de,q,pt=`I’ve been trying to solve this problem for the past 8 years, and never quite
got a satisfactory solution:`,ue,I,ht=`<li><strong>dotfile management</strong>: the obvious answer of needing tools to be up-to-date:
can you not simply include your customized configurations files to the remote
machine? While this partially solves the issue, some tools simply require a
new version. For example: <a href="https://microsoft.github.io/language-server-protocol/" rel="nofollow">LSP</a> support for <code>vim</code> is only available for
<a href="https://github.com/prabirshrestha/vim-lsp" rel="nofollow"><code>vim&gt;=8</code></a> (some older machines still use vim 7), and image displays
in terminal requires separate programs that are not common in remote
machines. I really want a way to not have to compromise on the tools that I
want to use when developing.</li>`,me,A,dt=`<li><strong>Compiling on remote server</strong>: since tools are all open-source, can we
simply <a href="https://gcc.gnu.org/" rel="nofollow">compile</a> our required tool on the server? While technically this
is achievable, practically executing this is a nightmare. By the package
splitting scheme of the <code>gcc</code> compiler itself has 63 dependencies, while some
of these maybe available on older machines, making sure that all 63
dependencies play nicely with each other is a highly non-trivial task. This
also does not take into consideration what would happen if you loaded some
development environment on the remote machine, where the involved libraries
change again, making this solution very fragile.</li>`,ye,P,ut=`<li><p><strong>All local development</strong>: this was the solution that I used for the longest
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
compatible).</p></li>`,fe,B,mt=`Ultimately, the solution that I am looking for is a distribution agnostic
<a href="https://en.wikipedia.org/wiki/Package_manager" rel="nofollow">package manager</a>: something that will allow me to install arbitrary
packages of interest while also respecting what is already installed in the
distribution that my machine is running on. As it turns out, this solution was
actually being developed on, while also including powerful features that far
exceeds what I was hoping for.`,ve,u,yt='<a aria-hidden="true" tabindex="-1" href="#nix-as-a-portable-package-manager"><span class="icon icon-link"></span></a><code>nix</code> as a portable package manager',ge,j,ft=`The <a href="https://nixos.org/" rel="nofollow"><code>Nix</code> package manager</a> (and its accompanying Linux distribution
NixOS) is described as a fully declarative package management system to ensure
reliability and reproducibility. The outcome of this set up solves the age-long
issue of how can a machine reliably host multiple version of the same package
ensuring that the full dependency stacks do not interfere with each other. The
user can then pick and choose exactly which version of a package to use, and
the package manager will handle the environment setup to ensure only the
required libraries are exposed to the package of interest.`,be,S,vt=`This is the ultimate goal of nix, but for me, the key part of this setup is
that <code>nix</code> can be deployed as a standalone package manager to someone without
root access, meaning that I supposedly deploy nix to machine that allows me to
access the <code>nix.org</code> domains! So below are the instructions for setting up
<code>nix</code> in your own environment.`,we,m,gt='<a aria-hidden="true" tabindex="-1" href="#nix-running-without-root"><span class="icon icon-link"></span></a>nix running without root',xe,O,bt=`First we need to get a “static” version of the <code>nix</code> package manager
(self-contained executable without linking to any other library). You can
obtain the “nix-portable” file <a href="https://github.com/DavHau/nix-portable?tab=readme-ov-file#get-nix-portable" rel="nofollow">here</a>. You can get a static binary that
does not need any external dependencies:`,ke,y,wt=`<div class="code-block-header"><span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#A6E22E">curl</span><span style="color:#AE81FF"> -L</span><span style="color:#E6DB74"> https://github.com/DavHau/nix-portable/releases/latest/download/nix-portable-$(</span><span style="color:#A6E22E">uname</span><span style="color:#AE81FF"> -m</span><span style="color:#E6DB74">)</span><span style="color:#F92672"> &gt;</span><span style="color:#E6DB74"> ./nix-portable</span></span>
<span class="line"><span style="color:#A6E22E">chmod</span><span style="color:#E6DB74"> +x</span><span style="color:#E6DB74"> ./nix-portable</span></span></code></pre></div>`,Fe,N,xt=`The nix-portable package contains mechanisms to automatically handling the path
re-routing required to make subseqent nix environments “think” that a writable
<code>/nix</code> directory exists, even without root access. The 2 environment variable
that you can use to change the behavior of nix portable:`,Te,f,kt=`<div class="code-block-header"><span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#F92672">export</span><span style="color:#F8F8F2"> NP_LOCATION</span><span style="color:#F92672">=</span><span style="color:#F8F8F2">/path/to/large/store </span><span style="color:#88846F"># This is where you will actually place the file that go into /nix</span></span>
<span class="line"><span style="color:#F92672">export</span><span style="color:#F8F8F2"> NP_RUNTIME</span><span style="color:#F92672">=</span><span style="color:#F8F8F2">bwrap </span><span style="color:#88846F"># How path re-rounting works (nix by default)</span></span></code></pre></div>`,He,V,Ft=`Notice that <code>NP_LOCATION</code> will overwrite the <code>store</code> that you have listed in
your user <code>~/.config/nix/nix.conf</code>. Before we formally start a nix session, let
us add a couple of niceties to nix (As of 2024 May, the experimental features
are required, or you will be typing <code>--extra-experimental-features</code> a lot).`,Le,v,Tt=`<div class="code-block-header">In File [~/.config/nix/nix.conf] <span class="code-block-lang">[plaintext]</span></div> <div class="code-block "><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span>extra-experimental-features = flakes nix-command</span></span>
<span class="line"><span>ssl-cert-file = /etc/pki/tls/cert.pem</span></span></code></pre></div>`,Me,W,Ht=`With this you can now spin up a new environment that actually contains a
nominal nix command like:`,Ee,g,Lt='<div class="code-block-header"><span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#A6E22E">./nix-portable</span><span style="color:#E6DB74"> nix</span><span style="color:#E6DB74"> shell</span><span style="color:#E6DB74"> &quot;nixpkgs#nix&quot;</span><span style="color:#E6DB74"> &quot;nixpkgs#bashInteractive&quot;</span><span style="color:#AE81FF"> -c</span><span style="color:#E6DB74"> bash</span><span style="color:#AE81FF"> -l</span></span></code></pre></div>',Ce,U,Mt=`You will notice that the first time you do this is very slow, because nix
automatically detects all the required libraries required download the file
required into the defined <code>store</code> directory to run the nix shell. In this shell
you should see that the tool kits specified are now updated to the latest
stable version found in the <a href="https://search.nixos.org/packages" rel="nofollow">NixOS package repository</a>. In future
runs, you can run <code>nix shell --offline</code> to avoid re-downloading/updating
packages if you don’t explicitly want to, as this is checked every time.`,_e,z,Et=`You will also notice that subsequent calls to the spinning up this shell is now
fast, because nix stores the requested packages in the <code>&lt;store&gt;</code> directory
specified earlier, so new shells that need new packages does not need to
download an instance of the package every time.`,De,Y,Ct=`While it is tempting to stop here, and simply declare an alias that spins up
all your favorite tool with some alias:`,qe,b,_t='<div class="code-block-header">Do not do this <span class="code-block-lang">[bash]</span></div> <div class="code-block "><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#F92672">&lt;</span><span style="color:#F8F8F2">path</span><span style="color:#F92672">&gt;</span><span style="color:#F8F8F2">/to/nixstatic shell nixpkgs#tool1 nixpkgs#tool2 ... --command bash</span></span></code></pre></div>',Ie,$,Dt=`This is missing out the full power of <code>nix</code>. The design of <code>nix</code> is to define
environment in a declarative manner, similar virtual environment setups for
various languages (such as JavaScript’s <a href="https://docs.npmjs.com/cli/v10/configuring-npm/package-json" rel="nofollow"><code>package.json</code></a> paradigm, or
Python/Conda’s <a href="https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html" rel="nofollow"><code>environment.yaml</code></a> paradigm), except <code>nix</code> is
designed to do this for the entire system! The ideal is, effectively, that your
tool kit should be defined as just another dot file.`,Ae,G,qt=`This declaration of the required tool kit can be done either globally for the
user (to be used as the default), or on-demand in special “nix shells”. While
what I am focusing on here is mainly the global setup for a nice set of tools
to work with, the power of on-demand nix shell cannot be understated, as this
ensures that all development environment can be performed in a consistent and
reproducible manner. For the next section of setting up <code>home-manager</code>, this
will be a global environment that your user will always have access to, while
also being compatible with individual development shells that you want to work
with.`,Pe,w,It='<a aria-hidden="true" tabindex="-1" href="#setting-up-home-manager"><span class="icon icon-link"></span></a>Setting up home-manager',Be,R,At=`The nix-specific <a href="https://nix-community.github.io/home-manager/" rel="nofollow"><code>home-manager</code> package</a> is originally designed
to handle user-level packages (as opposed to system-level package) and their
configurations following the nix declarative paradigm. What this means for us
where we don’t have a system-level package to manage, is that home manager can
effectively all the packages we are interested in.`,je,J,Pt=`Because channel support is still incomplete with nix-portable, you need to
install the home-manager channel from source (shout out to <a href="https://github.com/nix-community/home-manager/issues/3752#issuecomment-1566179742" rel="nofollow">this
comment</a>) following the commands:`,Se,x,Bt=`<div class="code-block-header">run within nix shell <span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#A6E22E">git</span><span style="color:#E6DB74"> clone</span><span style="color:#E6DB74"> https://github.com/nix-community/home-manager.git</span></span>
<span class="line"><span style="color:#66D9EF">cd</span><span style="color:#E6DB74"> home-manager</span></span>
<span class="line"><span style="color:#A6E22E">nix</span><span style="color:#E6DB74"> build</span><span style="color:#E6DB74"> .</span></span>
<span class="line"><span style="color:#A6E22E">./results/bin/home-manager</span><span style="color:#E6DB74"> init</span></span>
<span class="line"><span style="color:#88846F">## Should show a message like:</span></span>
<span class="line"><span style="color:#88846F">## create ~/.config/home-manager/home.nix</span></span>
<span class="line"><span style="color:#88846F">## create ~/.config/home-manager/flake.nix</span></span></code></pre></div>`,Oe,K,jt=`Following this, you should have access to the <code>home-manager</code> command, where you
can then call the <code>home-manager init</code> to create the base file you need to
declare your default home environment. For a simple configuration we will only
need to edit the <code>home.nix</code> file for now. For detailed instruction of what the
configuration means, you should consult the official <a href="https://nix-community.github.io/home-manager/" rel="nofollow">documentation</a>.
Let’s keep in simple in this example, and say we just need some extra packages:
<a href="https://neovim.io/" rel="nofollow"><code>neovim</code></a>, <a href="https://www.zsh.org/" rel="nofollow"><code>zsh</code></a> and an updated version of <a href="https://git-scm.com/" rel="nofollow"><code>git</code></a>. The
edits we need to make in this case is then just some additional updates to the
<code>home.packages</code> list entry:`,Ne,k,St=`<div class="code-block-header">In File [~/.config/home-manager/home.nix] <span class="code-block-lang">[nix]</span></div> <div class="code-block "><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#F8F8F2">{ </span><span style="color:#FD971F;font-style:italic">config</span><span style="color:#F92672">,</span><span style="color:#FD971F;font-style:italic"> pkgs</span><span style="color:#F92672">,</span><span style="color:#F92672"> ... </span><span style="color:#F8F8F2">}:</span></span>
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
<span class="line"><span style="color:#F8F8F2">}</span><span style="color:#F44747">;</span></span></code></pre></div>`,Ve,Q,Ot=`Once you are happy with the list of packages, you can run the following items
within a nix shells`,We,F,Nt='<div class="code-block-header">run within nix shell <span class="code-block-lang">[bash]</span></div> <div class="code-block "><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#F92672">&lt;</span><span style="color:#F8F8F2">path</span><span style="color:#F92672">&gt;</span><span style="color:#F8F8F2">/to/store/results/bin/home-manager switch</span></span></code></pre></div>',Ue,X,Vt=`This will install all the programs that you are using to <code>$HOME/.nix-profile</code>
which in turn is actually linked to the where you have set up the full store
paths (defined in your <code>~/.config/nix/nix.conf</code> file). You only need to run
<code>home-manager</code> from the compile path only for the first time, all other times
the <code>home-manager</code> binary will be appropriately linked into your environment
path. As we are not using standard nix install, some path automation is not
properly handled, so what you also need is to prepare a minimum <code>bashrc</code> file
that looks something like:`,ze,T,Wt=`<div class="code-block-header">In file [~/.bashrc-nix.sh] <span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#88846F"># Required for home manager</span></span>
<span class="line"><span style="color:#66D9EF">source</span><span style="color:#F8F8F2"> $HOME</span><span style="color:#E6DB74">/.nix-profile/etc/profile.d/hm-session-vars.sh</span></span>
<span class="line"><span style="color:#88846F"># Automatically setting up the path variable is not handled by HM in this configurations</span></span>
<span class="line"><span style="color:#F92672">export</span><span style="color:#F8F8F2"> PATH</span><span style="color:#F92672">=</span><span style="color:#F8F8F2">$HOME/.nix-profile/bin/:$PATH</span></span></code></pre></div>`,Ye,Z,Ut=`Then you can jump all the way from the default login shell to your home-manager
defined environment using the following one-liner:`,$e,H,zt='<div class="code-block-header">run in default environment <span class="code-block-lang">[bash]</span></div> <div class="code-block code-copyable"><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span style="color:#A6E22E">./nix-protable</span><span style="color:#E6DB74"> nix</span><span style="color:#E6DB74"> shell</span><span style="color:#E6DB74"> nixpkgs#nix</span><span style="color:#AE81FF"> --command</span><span style="color:#E6DB74"> bash</span><span style="color:#AE81FF"> -l</span><span style="color:#AE81FF"> --rcfile=</span><span style="color:#F8F8F2">$HOME</span><span style="color:#AE81FF">/.bashrc-nix.sh</span></span></code></pre></div>',Ge,ee,Yt=`In this environment, you should be able to use all the packages that you have
listed in the <code>home.nix</code> file! I wouldn’t go over all the perks of using
declarative system (like configuration-wide upgrading, generational roll-back
and such), for more details of this, consider reading about <code>nix</code> in general.
If you want to update your environment (a.k.a. modify the <code>home.nix</code> file), run
the <code>home-manager switch</code> command after you have finished updating your update.
Notice that if anything fail, this will not affect you current environment (the
reliability mantra of nix in full effect!)`,Re,te,$t=`To automate the process of spinning up a nix shell with home-manager packages
when you log into the remote machine with a special tag, we can add an entry to
your local <code>ssh</code> configuration as something like:`,Je,L,Gt=`<div class="code-block-header">~/.ssh/config <span class="code-block-lang">[plaintext]</span></div> <div class="code-block "><pre class="shiki monokai" style="background-color:#272822;color:#F8F8F2" tabindex="0"><code><span class="line"><span>Host remotehost*</span></span>
<span class="line"><span>    Host remotehost.com</span></span>
<span class="line"><span>    * Additional ssh settings you might want</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Host remotehost-nixshell</span></span>
<span class="line"><span>    RequestTTY yes</span></span>
<span class="line"><span>    RemoteCommand /path/to/nix-portable shell nixpkgs#nix --command bash -l --rcfile=$HOME/.bashrc-nix.sh</span></span></code></pre></div>`,Ke,se,Rt="Notice that the <code>RequestTTY</code> is required for the shell prompt.",Qe,ne,Jt=`<p>While I did try and see of spin up this interactive shell using the
interactive paradigm, this doesn’t work as <code>nixstatic shell</code> does not work
with flake files with a non-standard install. Unfortunately, this does mean
that the nix may attempt to pull the most up-to-date package from the defined
nix-channel whenever you log in (which may take a long time)</p>`,Xe,M,Kt='<a aria-hidden="true" tabindex="-1" href="#some-limitations"><span class="icon icon-link"></span></a>Some limitations',Ze,ae,Qt=`While this solution works wonderfully for my cases (I mainly just wanted to be
able to have an up-to-date version of <code>neovim</code> with the required packages be
available anywhere I go), there are certain caveats you need to be careful of
if you want to try this solution for yourself:`,et,oe,Xt=`<li><p>Given how <code>nix</code> aims to ensure package compatibility, the path you use to
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
environments with common tools, but that is beyond the scope of this article.</p></li>`,tt,E,Zt='<a aria-hidden="true" tabindex="-1" href="#some-closing-thoughts"><span class="icon icon-link"></span></a>Some closing thoughts',st,le,es=`The declarative nix package manager has been on my radar for nearly 6 months
now. The steep learning curve had always kinda put me off from fully committing
to learning nix, but now that nix is potentially the most optimal solution to
one of the most long-standing problems I had with writing code on remote
machines, it might be time to actually bite the bullet and start learning nix
for real.`;return{c(){p=a("nav"),p.innerHTML=at,ie=i(),h=a("h2"),h.innerHTML=ot,re=i(),C=a("p"),C.innerHTML=lt,ce=i(),_=a("p"),_.innerHTML=it,pe=i(),D=a("ul"),D.innerHTML=rt,he=i(),d=a("h2"),d.innerHTML=ct,de=i(),q=a("p"),q.textContent=pt,ue=i(),I=a("ul"),I.innerHTML=ht,me=i(),A=a("ul"),A.innerHTML=dt,ye=i(),P=a("ul"),P.innerHTML=ut,fe=i(),B=a("p"),B.innerHTML=mt,ve=i(),u=a("h2"),u.innerHTML=yt,ge=i(),j=a("p"),j.innerHTML=ft,be=i(),S=a("p"),S.innerHTML=vt,we=i(),m=a("h3"),m.innerHTML=gt,xe=i(),O=a("p"),O.innerHTML=bt,ke=i(),y=a("div"),y.innerHTML=wt,Fe=i(),N=a("p"),N.innerHTML=xt,Te=i(),f=a("div"),f.innerHTML=kt,He=i(),V=a("p"),V.innerHTML=Ft,Le=i(),v=a("div"),v.innerHTML=Tt,Me=i(),W=a("p"),W.textContent=Ht,Ee=i(),g=a("div"),g.innerHTML=Lt,Ce=i(),U=a("p"),U.innerHTML=Mt,_e=i(),z=a("p"),z.innerHTML=Et,De=i(),Y=a("p"),Y.textContent=Ct,qe=i(),b=a("div"),b.innerHTML=_t,Ie=i(),$=a("p"),$.innerHTML=Dt,Ae=i(),G=a("p"),G.innerHTML=qt,Pe=i(),w=a("h3"),w.innerHTML=It,Be=i(),R=a("p"),R.innerHTML=At,je=i(),J=a("p"),J.innerHTML=Pt,Se=i(),x=a("div"),x.innerHTML=Bt,Oe=i(),K=a("p"),K.innerHTML=jt,Ne=i(),k=a("div"),k.innerHTML=St,Ve=i(),Q=a("p"),Q.textContent=Ot,We=i(),F=a("div"),F.innerHTML=Nt,Ue=i(),X=a("p"),X.innerHTML=Vt,ze=i(),T=a("div"),T.innerHTML=Wt,Ye=i(),Z=a("p"),Z.textContent=Ut,$e=i(),H=a("div"),H.innerHTML=zt,Ge=i(),ee=a("p"),ee.innerHTML=Yt,Re=i(),te=a("p"),te.innerHTML=$t,Je=i(),L=a("div"),L.innerHTML=Gt,Ke=i(),se=a("p"),se.innerHTML=Rt,Qe=i(),ne=a("blockquote"),ne.innerHTML=Jt,Xe=i(),M=a("h2"),M.innerHTML=Kt,Ze=i(),ae=a("p"),ae.innerHTML=Qt,et=i(),oe=a("ul"),oe.innerHTML=Xt,tt=i(),E=a("h2"),E.innerHTML=Zt,st=i(),le=a("p"),le.textContent=es,this.h()},l(e){p=o(e,"NAV",{class:!0,"data-svelte-h":!0}),l(p)!=="svelte-x6c5t2"&&(p.innerHTML=at),ie=r(e),h=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(h)!=="svelte-gst0r3"&&(h.innerHTML=ot),re=r(e),C=o(e,"P",{"data-svelte-h":!0}),l(C)!=="svelte-r6ptsw"&&(C.innerHTML=lt),ce=r(e),_=o(e,"P",{"data-svelte-h":!0}),l(_)!=="svelte-xhl2lc"&&(_.innerHTML=it),pe=r(e),D=o(e,"UL",{"data-svelte-h":!0}),l(D)!=="svelte-12ov4f5"&&(D.innerHTML=rt),he=r(e),d=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(d)!=="svelte-l6p5gg"&&(d.innerHTML=ct),de=r(e),q=o(e,"P",{"data-svelte-h":!0}),l(q)!=="svelte-1v1cfgo"&&(q.textContent=pt),ue=r(e),I=o(e,"UL",{"data-svelte-h":!0}),l(I)!=="svelte-qx67gh"&&(I.innerHTML=ht),me=r(e),A=o(e,"UL",{"data-svelte-h":!0}),l(A)!=="svelte-l7pzx7"&&(A.innerHTML=dt),ye=r(e),P=o(e,"UL",{"data-svelte-h":!0}),l(P)!=="svelte-hvuyr9"&&(P.innerHTML=ut),fe=r(e),B=o(e,"P",{"data-svelte-h":!0}),l(B)!=="svelte-1y9kogl"&&(B.innerHTML=mt),ve=r(e),u=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(u)!=="svelte-10fhw2r"&&(u.innerHTML=yt),ge=r(e),j=o(e,"P",{"data-svelte-h":!0}),l(j)!=="svelte-zl8mbj"&&(j.innerHTML=ft),be=r(e),S=o(e,"P",{"data-svelte-h":!0}),l(S)!=="svelte-1c2ke7c"&&(S.innerHTML=vt),we=r(e),m=o(e,"H3",{id:!0,"data-svelte-h":!0}),l(m)!=="svelte-iss7kq"&&(m.innerHTML=gt),xe=r(e),O=o(e,"P",{"data-svelte-h":!0}),l(O)!=="svelte-17gbkwd"&&(O.innerHTML=bt),ke=r(e),y=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(y)!=="svelte-1egydlt"&&(y.innerHTML=wt),Fe=r(e),N=o(e,"P",{"data-svelte-h":!0}),l(N)!=="svelte-6i8r24"&&(N.innerHTML=xt),Te=r(e),f=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(f)!=="svelte-1fjh7ht"&&(f.innerHTML=kt),He=r(e),V=o(e,"P",{"data-svelte-h":!0}),l(V)!=="svelte-19bwd7j"&&(V.innerHTML=Ft),Le=r(e),v=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(v)!=="svelte-klulzq"&&(v.innerHTML=Tt),Me=r(e),W=o(e,"P",{"data-svelte-h":!0}),l(W)!=="svelte-1jgx2lp"&&(W.textContent=Ht),Ee=r(e),g=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(g)!=="svelte-jcyqrj"&&(g.innerHTML=Lt),Ce=r(e),U=o(e,"P",{"data-svelte-h":!0}),l(U)!=="svelte-3wfcr7"&&(U.innerHTML=Mt),_e=r(e),z=o(e,"P",{"data-svelte-h":!0}),l(z)!=="svelte-1mpz4sd"&&(z.innerHTML=Et),De=r(e),Y=o(e,"P",{"data-svelte-h":!0}),l(Y)!=="svelte-18yhdxy"&&(Y.textContent=Ct),qe=r(e),b=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(b)!=="svelte-1ugtrwm"&&(b.innerHTML=_t),Ie=r(e),$=o(e,"P",{"data-svelte-h":!0}),l($)!=="svelte-1xauitj"&&($.innerHTML=Dt),Ae=r(e),G=o(e,"P",{"data-svelte-h":!0}),l(G)!=="svelte-lvfopj"&&(G.innerHTML=qt),Pe=r(e),w=o(e,"H3",{id:!0,"data-svelte-h":!0}),l(w)!=="svelte-9fyiyi"&&(w.innerHTML=It),Be=r(e),R=o(e,"P",{"data-svelte-h":!0}),l(R)!=="svelte-1wost0m"&&(R.innerHTML=At),je=r(e),J=o(e,"P",{"data-svelte-h":!0}),l(J)!=="svelte-kcjjed"&&(J.innerHTML=Pt),Se=r(e),x=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(x)!=="svelte-13dlxj1"&&(x.innerHTML=Bt),Oe=r(e),K=o(e,"P",{"data-svelte-h":!0}),l(K)!=="svelte-kqpmxl"&&(K.innerHTML=jt),Ne=r(e),k=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(k)!=="svelte-1wpwb6y"&&(k.innerHTML=St),Ve=r(e),Q=o(e,"P",{"data-svelte-h":!0}),l(Q)!=="svelte-fjke4n"&&(Q.textContent=Ot),We=r(e),F=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(F)!=="svelte-aqef2x"&&(F.innerHTML=Nt),Ue=r(e),X=o(e,"P",{"data-svelte-h":!0}),l(X)!=="svelte-1qgx94a"&&(X.innerHTML=Vt),ze=r(e),T=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(T)!=="svelte-5gwj1e"&&(T.innerHTML=Wt),Ye=r(e),Z=o(e,"P",{"data-svelte-h":!0}),l(Z)!=="svelte-rg2wha"&&(Z.textContent=Ut),$e=r(e),H=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(H)!=="svelte-1mk2b1v"&&(H.innerHTML=zt),Ge=r(e),ee=o(e,"P",{"data-svelte-h":!0}),l(ee)!=="svelte-1348wse"&&(ee.innerHTML=Yt),Re=r(e),te=o(e,"P",{"data-svelte-h":!0}),l(te)!=="svelte-1qk3yj5"&&(te.innerHTML=$t),Je=r(e),L=o(e,"DIV",{class:!0,"data-svelte-h":!0}),l(L)!=="svelte-bv3ilp"&&(L.innerHTML=Gt),Ke=r(e),se=o(e,"P",{"data-svelte-h":!0}),l(se)!=="svelte-1p5n920"&&(se.innerHTML=Rt),Qe=r(e),ne=o(e,"BLOCKQUOTE",{"data-svelte-h":!0}),l(ne)!=="svelte-1jkbclw"&&(ne.innerHTML=Jt),Xe=r(e),M=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(M)!=="svelte-19w07d7"&&(M.innerHTML=Kt),Ze=r(e),ae=o(e,"P",{"data-svelte-h":!0}),l(ae)!=="svelte-1sqmc6l"&&(ae.innerHTML=Qt),et=r(e),oe=o(e,"UL",{"data-svelte-h":!0}),l(oe)!=="svelte-133e0tp"&&(oe.innerHTML=Xt),tt=r(e),E=o(e,"H2",{id:!0,"data-svelte-h":!0}),l(E)!=="svelte-h4m1ux"&&(E.innerHTML=Zt),st=r(e),le=o(e,"P",{"data-svelte-h":!0}),l(le)!=="svelte-1118fk0"&&(le.textContent=es),this.h()},h(){c(p,"class","toc"),c(h,"id","what-is-the-problem"),c(d,"id","some-attempted-solutions"),c(u,"id","nix-as-a-portable-package-manager"),c(m,"id","nix-running-without-root"),c(y,"class","code-block-container"),c(f,"class","code-block-container"),c(v,"class","code-block-container"),c(g,"class","code-block-container"),c(b,"class","code-block-container"),c(w,"id","setting-up-home-manager"),c(x,"class","code-block-container"),c(k,"class","code-block-container"),c(F,"class","code-block-container"),c(T,"class","code-block-container"),c(H,"class","code-block-container"),c(L,"class","code-block-container"),c(M,"id","some-limitations"),c(E,"id","some-closing-thoughts")},m(e,t){s(e,p,t),s(e,ie,t),s(e,h,t),s(e,re,t),s(e,C,t),s(e,ce,t),s(e,_,t),s(e,pe,t),s(e,D,t),s(e,he,t),s(e,d,t),s(e,de,t),s(e,q,t),s(e,ue,t),s(e,I,t),s(e,me,t),s(e,A,t),s(e,ye,t),s(e,P,t),s(e,fe,t),s(e,B,t),s(e,ve,t),s(e,u,t),s(e,ge,t),s(e,j,t),s(e,be,t),s(e,S,t),s(e,we,t),s(e,m,t),s(e,xe,t),s(e,O,t),s(e,ke,t),s(e,y,t),s(e,Fe,t),s(e,N,t),s(e,Te,t),s(e,f,t),s(e,He,t),s(e,V,t),s(e,Le,t),s(e,v,t),s(e,Me,t),s(e,W,t),s(e,Ee,t),s(e,g,t),s(e,Ce,t),s(e,U,t),s(e,_e,t),s(e,z,t),s(e,De,t),s(e,Y,t),s(e,qe,t),s(e,b,t),s(e,Ie,t),s(e,$,t),s(e,Ae,t),s(e,G,t),s(e,Pe,t),s(e,w,t),s(e,Be,t),s(e,R,t),s(e,je,t),s(e,J,t),s(e,Se,t),s(e,x,t),s(e,Oe,t),s(e,K,t),s(e,Ne,t),s(e,k,t),s(e,Ve,t),s(e,Q,t),s(e,We,t),s(e,F,t),s(e,Ue,t),s(e,X,t),s(e,ze,t),s(e,T,t),s(e,Ye,t),s(e,Z,t),s(e,$e,t),s(e,H,t),s(e,Ge,t),s(e,ee,t),s(e,Re,t),s(e,te,t),s(e,Je,t),s(e,L,t),s(e,Ke,t),s(e,se,t),s(e,Qe,t),s(e,ne,t),s(e,Xe,t),s(e,M,t),s(e,Ze,t),s(e,ae,t),s(e,et,t),s(e,oe,t),s(e,tt,t),s(e,E,t),s(e,st,t),s(e,le,t)},p:nt,i:nt,o:nt,d(e){e&&(n(p),n(ie),n(h),n(re),n(C),n(ce),n(_),n(pe),n(D),n(he),n(d),n(de),n(q),n(ue),n(I),n(me),n(A),n(ye),n(P),n(fe),n(B),n(ve),n(u),n(ge),n(j),n(be),n(S),n(we),n(m),n(xe),n(O),n(ke),n(y),n(Fe),n(N),n(Te),n(f),n(He),n(V),n(Le),n(v),n(Me),n(W),n(Ee),n(g),n(Ce),n(U),n(_e),n(z),n(De),n(Y),n(qe),n(b),n(Ie),n($),n(Ae),n(G),n(Pe),n(w),n(Be),n(R),n(je),n(J),n(Se),n(x),n(Oe),n(K),n(Ne),n(k),n(Ve),n(Q),n(We),n(F),n(Ue),n(X),n(ze),n(T),n(Ye),n(Z),n($e),n(H),n(Ge),n(ee),n(Re),n(te),n(Je),n(L),n(Ke),n(se),n(Qe),n(ne),n(Xe),n(M),n(Ze),n(ae),n(et),n(oe),n(tt),n(E),n(st),n(le))}}}const rs={title:"Nix as a local package manager",description:"A first exploration for carrying your personal development tool everywhere",tags:["vim","computing","tips"],banner:"thoughts.jpg"};class cs extends ns{constructor(p){super(),as(this,p,null,os,ss,{})}}export{cs as default,rs as metadata};
