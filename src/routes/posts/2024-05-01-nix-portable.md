---
title: Nix as a local package manager
description: A first exploration for carrying your personal development tool everywhere
tags: [vim, computing, tips]
banner: thoughts.jpg
---

## What is the problem?

In our field where there are many specialized tool and [very-very
large][cernvolume] data sets, we typically need to log into a centrally managed
cluster perform our data analysis requirements. The tools provided there for
working with text files is typically rather dated: while standard tools like
[`vim`][vim], [`emacs`][emacs] and [`bash`][bash] are commonly available, they
are typically older versions of the tool with none of the bells-and-whistles
that you might want for a prolonged coding experience.

While there is merit in understanding how to use vanilla tool-kits of the
standard tools (I'm rather shocked at how many people do not know how to do
command line [piping][piping] in our field), when your main goal is to quickly
and extensively write code, the tools in their vanilla form usually a little
lack-luster on their own. My definition of the problem is: can we bring the
modern tools with you to the older machines in a way such that:

- You can have access to newer tools not installed by default on the older
  machines, while also be free to update them if your workflow requires.
- You still have access to **all** the tools of the default machines
  environment: either access to proprietary/sensitive code bases or tools that
  must be kept to just the remote machines, or tools that only make sense for
  the specific machines (like job submissions/dataset look up)

[cernvolume]: https://home.cern/science/computing/storage
[vim]: https://www.vim.org/
[emacs]: https://www.gnu.org/software/emacs/
[bash]: https://www.gnu.org/software/bash/
[piping]: https://en.wikipedia.org/wiki/Pipeline_(Unix)

## Some attempted solutions

I've been trying to solve this problem for the past 8 years, and never quite
got a satisfactory solution:

- **dotfile management**: the obvious answer of needing tools to be up-to-date:
  can you not simply include your customized configurations files to the remote
  machine? While this partially solves the issue, some tools simply require a
  new version. For example: [LSP][lsp] support for `vim` is only available for
  [`vim>=8`][vimlsp] (some older machines still use vim 7), and image displays
  in terminal requires separate programs that are not common in remote
  machines. I really want a way to not have to compromise on the tools that I
  want to use when developing.

[lsp]: https://microsoft.github.io/language-server-protocol/
[vimlsp]: https://github.com/prabirshrestha/vim-lsp

- **Compiling on remote server**: since tools are all open-source, can we
  simply [compile][gcc] our required tool on the server? While technically this
  is achievable, practically executing this is a nightmare. By the package
  splitting scheme of the `gcc` compiler itself has 63 dependencies, while some
  of these maybe available on older machines, making sure that all 63
  dependencies play nicely with each other is a highly non-trivial task. This
  also does not take into consideration what would happen if you loaded some
  development environment on the remote machine, where the involved libraries
  change again, making this solution very fragile.

[gcc]: https://gcc.gnu.org/

- **All local development**: this was the solution that I used for the longest
  time: develop everything locally on my machine, where I have full control
  over the development environment, then mirror all my changes to the remote
  machine. While this worked for me, not everyone may have this luxury if you
  are working with sensitive codebases that cannot be pulled to your local
  machine; this also means that I will also to have a mirrored environment on
  my personal machine if I want all the required, which may not always be
  possible (such as if the packages involved are excessively large) or does not
  make sense for my particular machine (like a GPU-ML library on my laptop
  without a GPU). In these cases, I will just have to live with certain
  functionalities with my development environment not fully functioning.

- **Docker/container images**: another solution would be can we just spin up
  [docker][docker] image that contains a newer version of the OS in question?
  The problem with containers is that once you spin it up, it is effectively
  isolated from the host machine, for better or for worse. This means that we
  are expected to lose access to all tools of the underlying host machine,
  unless we perform additional DockerFile hackery. The inclusion of pure tools
  (like text editors) also bloats the docker image fast, adding more problems
  when sharing environments (such as making sure multiple DockerFiles remain
  compatible).

[docker]: https://www.docker.com/

Ultimately, the solution that I am looking for is a distribution agnostic
[package manager][pacman]: something that will allow me to install arbitrary
packages of interest while also respecting what is already installed in the
distribution that my machine is running on. As it turns out, this solution was
actually being developed on, while also including powerful features that far
exceeds what I was hoping for.

[pacman]: https://en.wikipedia.org/wiki/Package_manager

## `nix` as a portable package manager

The [`Nix` package manager][nix] (and its accompanying Linux distribution
NixOS) is described as a fully declarative package management system to ensure
reliability and reproducibility. The outcome of this set up solves the age-long
issue of how can a machine reliably host multiple version of the same package
ensuring that the full dependency stacks do not interfere with each other. The
user can then pick and choose exactly which version of a package to use, and
the package manager will handle the environment setup to ensure only the
required libraries are exposed to the package of interest.

[nix]: https://nixos.org/

This is the ultimate goal of nix, but for me, the key part of this setup is
that `nix` can be deployed as a standalone package manager to someone without
root access, meaning that I supposedly deploy nix to machine that allows me to
access the `nix.org` domains! So below are the instructions for setting up
`nix` in your own environment.

### nix running without root

First we need to get a "static" version of the `nix` package manager
(self-contained executable without linking to any other library). You can
obtain the "nix-portable" file [here][nport]. You can get a static binary that
does not need any external dependencies:

[nport]: https://github.com/DavHau/nix-portable?tab=readme-ov-file#get-nix-portable

```bash
curl -L https://github.com/DavHau/nix-portable/releases/latest/download/nix-portable-$(uname -m) > ./nix-portable
chmod +x ./nix-portable
```

The nix-portable package contains mechanisms to automatically handling the path
re-routing required to make subseqent nix environments "think" that a writable
`/nix` directory exists, even without root access. The 2 environment variable
that you can use to change the behavior of nix portable:

```bash
export NP_LOCATION=/path/to/large/store # This is where you will actually place the file that go into /nix
export NP_RUNTIME=bwrap # How path re-rounting works (nix by default)
```

Notice that `NP_LOCATION` will overwrite the `store` that you have listed in
your user `~/.config/nix/nix.conf`. Before we formally start a nix session, let
us add a couple of niceties to nix (As of 2024 May, the experimental features
are required, or you will be typing `--extra-experimental-features` a lot).

```plaintext title="In File [~/.config/nix/nix.conf]" nocopy
extra-experimental-features = flakes nix-command
ssl-cert-file = /etc/pki/tls/cert.pem
```

With this you can now spin up a new environment that actually contains a
nominal nix command like:

```bash
./nix-portable nix shell "nixpkgs#nix" "nixpkgs#bashInteractive" -c bash -l
```

You will notice that the first time you do this is very slow, because nix
automatically detects all the required libraries required download the file
required into the defined `store` directory to run the nix shell. In this shell
you should see that the tool kits specified are now updated to the latest
stable version found in the [NixOS package repository][nix-repo]. In future
runs, you can run `nix shell --offline` to avoid re-downloading/updating
packages if you don't explicitly want to, as this is checked every time.

[nix-repo]: https://search.nixos.org/packages

You will also notice that subsequent calls to the spinning up this shell is now
fast, because nix stores the requested packages in the `<store>` directory
specified earlier, so new shells that need new packages does not need to
download an instance of the package every time.

While it is tempting to stop here, and simply declare an alias that spins up
all your favorite tool with some alias:

```bash title="Do not do this" nocopy
<path>/to/nixstatic shell nixpkgs#tool1 nixpkgs#tool2 ... --command bash
```

This is missing out the full power of `nix`. The design of `nix` is to define
environment in a declarative manner, similar virtual environment setups for
various languages (such as JavaScript's [`package.json`][pkg.json] paradigm, or
Python/Conda's [`environment.yaml`][condaenv] paradigm), except `nix` is
designed to do this for the entire system! The ideal is, effectively, that your
tool kit should be defined as just another dot file.

[pkg.json]: https://docs.npmjs.com/cli/v10/configuring-npm/package-json
[condaenv]: https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html

This declaration of the required tool kit can be done either globally for the
user (to be used as the default), or on-demand in special "nix shells". While
what I am focusing on here is mainly the global setup for a nice set of tools
to work with, the power of on-demand nix shell cannot be understated, as this
ensures that all development environment can be performed in a consistent and
reproducible manner. For the next section of setting up `home-manager`, this
will be a global environment that your user will always have access to, while
also being compatible with individual development shells that you want to work
with.

### Setting up home-manager

The nix-specific [`home-manager` package][homemanager] is originally designed
to handle user-level packages (as opposed to system-level package) and their
configurations following the nix declarative paradigm. What this means for us
where we don't have a system-level package to manage, is that home manager can
effectively all the packages we are interested in.

[homemanager]: https://nix-community.github.io/home-manager/


Because channel support is still incomplete with nix-portable, you need to
install the home-manager channel from source (shout out to [this
comment][comment]) following the commands:

[comment]: https://github.com/nix-community/home-manager/issues/3752#issuecomment-1566179742

```bash title="run within nix shell"
git clone https://github.com/nix-community/home-manager.git
cd home-manager
nix build .
./results/bin/home-manager init
## Should show a message like:
## create ~/.config/home-manager/home.nix
## create ~/.config/home-manager/flake.nix
```

Following this, you should have access to the `home-manager` command, where you
can then call the `home-manager init` to create the base file you need to
declare your default home environment. For a simple configuration we will only
need to edit the `home.nix` file for now. For detailed instruction of what the
configuration means, you should consult the official [documentation][hmdoc].
Let's keep in simple in this example, and say we just need some extra packages:
[`neovim`][neovim], [`zsh`][zsh] and an updated version of [`git`][git]. The
edits we need to make in this case is then just some additional updates to the
`home.packages` list entry:

[hmdoc]: https://nix-community.github.io/home-manager/
[neovim]: https://neovim.io/
[zsh]: https://www.zsh.org/
[git]: https://git-scm.com/

```nix title="In File [~/.config/home-manager/home.nix]" nocopy
{ config, pkgs, ... }:
{
  # Home Manager needs a bit of information about you and the paths
  home.username = "<username>";
  home.homeDirectory = "<home directory>";
  home.stateVersion = "23.11"; # DO NOT EDIT!!!

  # List of packages that you want to include in your extra session.
  # See the nix package repository to see what you
  home.packages = [
    pkgs.git
    pkgs.cacert # Otherwise SSL operations may misbehave
    pkgs.zsh
    pkgs.neovim
  ];

  # Let Home Manager install and manage itself.
  programs.home-manager.enable = true;
};
```

Once you are happy with the list of packages, you can run the following items
within a nix shells

```bash title="run within nix shell" nocopy
<path>/to/store/results/bin/home-manager switch
```

This will install all the programs that you are using to `$HOME/.nix-profile`
which in turn is actually linked to the where you have set up the full store
paths (defined in your `~/.config/nix/nix.conf` file). You only need to run
`home-manager` from the compile path only for the first time, all other times
the `home-manager` binary will be appropriately linked into your environment
path. As we are not using standard nix install, some path automation is not
properly handled, so what you also need is to prepare a minimum `bashrc` file
that looks something like:

```bash title="In file [~/.bashrc-nix.sh]"
# Required for home manager
source $HOME/.nix-profile/etc/profile.d/hm-session-vars.sh
# Automatically setting up the path variable is not handled by HM in this configurations
export PATH=$HOME/.nix-profile/bin/:$PATH
```

Then you can jump all the way from the default login shell to your home-manager
defined environment using the following one-liner:

```bash title="run in default environment"
./nix-protable nix shell nixpkgs#nix --command bash -l --rcfile=$HOME/.bashrc-nix.sh
```

In this environment, you should be able to use all the packages that you have
listed in the `home.nix` file! I wouldn't go over all the perks of using
declarative system (like configuration-wide upgrading, generational roll-back
and such), for more details of this, consider reading about `nix` in general.
If you want to update your environment (a.k.a. modify the `home.nix` file), run
the `home-manager switch` command after you have finished updating your update.
Notice that if anything fail, this will not affect you current environment (the
reliability mantra of nix in full effect!)

To automate the process of spinning up a nix shell with home-manager packages
when you log into the remote machine with a special tag, we can add an entry to
your local `ssh` configuration as something like:

```plaintext title="~/.ssh/config" nocopy
Host remotehost*
    Host remotehost.com
    * Additional ssh settings you might want

Host remotehost-nixshell
    RequestTTY yes
    RemoteCommand /path/to/nix-portable shell nixpkgs#nix --command bash -l --rcfile=$HOME/.bashrc-nix.sh
```

Notice that the `RequestTTY` is required for the shell prompt.

> While I did try and see of spin up this interactive shell using the
> interactive paradigm, this doesn't work as `nixstatic shell` does not work
> with flake files with a non-standard install. Unfortunately, this does mean
> that the nix may attempt to pull the most up-to-date package from the defined
> nix-channel whenever you log in (which may take a long time)

## Some limitations

While this solution works wonderfully for my cases (I mainly just wanted to be
able to have an up-to-date version of `neovim` with the required packages be
available anywhere I go), there are certain caveats you need to be careful of
if you want to try this solution for yourself:

- Given how `nix` aims to ensure package compatibility, the path you use to
  store nix needs a rather significant space. The example above racks up a
  total size of 2.0 GB already, so be sure of how much space is available on
  your system (many clusters have a very small home directory space to ensure
  performance for multiple users). If you ever need to free up space, run
  `nix-collect-garbage` in your nix shell. Notice that after garbage collect
  command is executed, a new spin up will be slower, as nix will double-check
  the validity of the defined shells for safety.

- You will need access to the `nix.org` domain as well as GitHub. The clusters
  I was working with is rather open, but you may need to contact your
  administrators if you need additional access to these domains.

- While NIX solves the problem of requiring a consistent tool stack to be
  present, it does not, unfortunately solve the issue that some tool stacks are
  simply too old to take advantage of the latest tools (moment of silence for
  those who still have to deal with Python2...)

- Because we are currently in a non-standard nix configuration, spinning up
  nested nix shells is currently not possible. This means if you want to fully
  immerse yourself in the nix-ethos with custom nix-shells for development
  environment, you will need to start the nix-shell up from the default
  (non-nix) shell. Once you get the hang of nix configuration files, it is not
  that difficult to chain together configuration to incrementally build up
  environments with common tools, but that is beyond the scope of this article.

## Some closing thoughts

The declarative nix package manager has been on my radar for nearly 6 months
now. The steep learning curve had always kinda put me off from fully committing
to learning nix, but now that nix is potentially the most optimal solution to
one of the most long-standing problems I had with writing code on remote
machines, it might be time to actually bite the bullet and start learning nix
for real.
