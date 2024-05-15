---
title: Python data analysis with Nix and neovim
description: An exploration of a reproducible workflow in neovim
tags: [vim, computing, tips, nix]
banner: thoughts.jpg
---

Python was one of the first programming languages to first encounter the
[yet-another-package-manager woe][pythonxkcd], with [a][pyenv] [huge][pip]
[myriad][conda] of package/environmental managers that may or may not work
nicely together. As I work to slowly [nix][nix]-ify my workflow, this introduces
another package manager into the workflow, so this post servers as a nicer jump
off point for setting up an environment.

## Setting up the editor

Here I am setting up the [neovim][neovim] in nix [home-manager][home-manager].
To enable plugins that require python, you will need to enable python. This can
be done in home manager configuration like:

```nix title="Snippet in home manager configuration"
{ pkgs, config, ... }: {
  programs.neovim = {
    enable = true;
    extraPython3Packages = ps:
      [
        ps.pynvim # Minimal python package required for python plugins
      ];
  };
}
```

You can always which python is used for `neovim` plugins by running
`:checkhealth provider`:

```plaintext nocopy
...
Python 3 provider (optional) ~
- Using: g:python3_host_prog = "/nix/store/bbqkcbw8d6lfcjwg1zibb61q10zdg3ww-neovim-0.9.5/bin/nvim-python3"
- Executable: /nix/store/bbqkcbw8d6lfcjwg1zibb61q10zdg3ww-neovim-0.9.5/bin/nvim-python3
- Python version: 3.11.9
- pynvim version: 0.5.0
- OK Latest pynvim is installed.
...
```

Notice that this is difference from the python that used to execute the python
environment; if you check `!which python` in neovim, that is the program that
will be used for initialize the language server protocols for context-aware
editing. So what you would want to do for python editing is then:

- Setup and activate the python virtual environment
- Ensure that the python LSPs installed in the python virtual environment
- Start neovim within that environment

This should give you the full benefits of the editing python files with the
full context of all packages installed in your python environment.

## Setting up a python environment (hybrid style)

Python has something that is very close to a declarative environment with the
use of [conda environments][condaenv]. This, however does not quite fit with
the nix paradigm, as both nix and conda expects certain libraries to be set up
in a certain path that are incompatible. If the point is to fully nix-ify the
development process, we would of-course try to all-in on using nix to set up
the python environment. However, as nix is not so widely available, being able
to keep the conda setup files to share with other collaborators is still the
preferable path to go.

The way I set up the conda-like environment in a nix environment is largely
based off the solution found [here][nix-mamba] would be to use
[mircomamba][micromamba]: another python package manager that is largely
compatible with conda, while playing slightly nicer with nix.

Imperatively, the commands used to can create the environment very similar to
how one would set up a vanilla conda environment, with the only exceptional
difference being the "magic" integration shell hook command.

```bash title="micromamba" nocopy
# Integration magic
eval "$(micromamba shell hook -s zsh)"

# Place this somewhere in the shell configuration
export MAMBA_ROOT_PREFIX=$HOME/.mamba

# Creating the environment based on the given yaml file
micromamba create -f environment.yaml

# Activating the environment (env_name defined in environment.yaml)
micromamba activate env_name
```

The only annoying part now is that you need to set up the run an extra
integration magic every time before activating the environment, (so two
commands instead of the simple activate command). With the power of nix though,
you can define the set-up process to be declarative using the `flake.nix` file!

```nix title="flack.nix for setting up python environment" showLineNumber hl={26-29}
{
  description = "Develop environment for python with microconda";
  inputs = { nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable"; };

  outputs = { self, nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in {
      devShells.${system}.default = pkgs.mkShell {
        packages = [
          pkgs.micromamba # For setting up the development environments
          pkgs.yq-go # For getting the information from the environment yaml
        ];

        shellHook = ''
          set -e
          eval "$(micromamba shell hook -s zsh)" # Setting the various items off
          # Create the environment if the directory doesn't already exist
          ENV_NAME=$(yq ".name" environment.yaml)
          if [[ ! -d $MAMBA_ROOT_PREFIX/envs/$ENV_NAME ]]; then
            micromamba create -f environment.yaml -y > /dev/null
          fi
          # Always attempt to update the environment
          micromamba activate $ENV_NAME
          micromamba install --name $ENV_NAME -f environment.yaml -y > /dev/null
          if [[ -f $PWD/dev_environment.yaml ]] ; then
            micromamba install --name $ENV_NAME -f dev_environment.yaml -y > /dev/null
          fi
        '';
      };
      # We need to treat this as a package,
      defaultPackage.x86_64-linux = pkgs.micromamba;
    };
}
```

With this flake file, you can simply run the command `nix develop .` to enter
the session with the python environment setup! Other niceties of this includes
that:

- The conda packages are automatically checked each time you enter the
  environment. (line 26)
- A separate developer related packages that might not make sense for people
  other than those using you set up (like you LSP of choice), can be listed in
  a separate `dev_environment.yaml`
- Eventually you can have alternate set up routines with a different
  `devShells.${system}.[shell-name]` entry. Such as `devShells.${system}.nix`
  when you eventually want to try a full nix-based setup. (Which you can
  initiate with the command `nix develop '.#nix'` or similar)

## Interactive development with `molten.nvim`

For data analysis, code writtng is often incremental, with you needing to swap
between plotting, checking the results and updating the algorithm employed very
frequently. The [molten.nvim][molten] plugin is very useful to allow for
ipython REPL interaction within the editor itself. The instructions on the
molten [documentations][molten-docs], is a little overblown, in the sense that
as long as just have nix handle the python/lua external dependencies, and you
can still use your favorite native package manager to handle the neovim plugins.

The only problem that I found was problematic was that the plugin was not
finding any kernels to use on initialization. While in the virtual environment,
you can check that virtual environment are available using the command:

```bash nocopy
> jupyter-kernelspec list
Available kernels:
  python3        /home/user/.mamba/envs/env_name/share/jupyter/kernels/python3
```

Molten does not yet know where to look for these kernels. What you can do to
remedy this is to add an extra line in your nix-flakes shell hook instruction
to manually generate an entry in a more standard path:

```bash title="Append as final line in the shell hook in flake.nix"
python -m ipykernel install --user --name $ENV_NAME
```

Then your desired kernel should show up nominally!

To further improve the experience, you can also have neovim to automatically
detect if a `micromamba` (or `conda`) is present, then initialize molten accordingly:

```lua
vim.keymap.set('n', '<leader>mi', function()
  local conda_env = os.getenv 'CONDA_DEFAULT_ENV'
  if conda_env == nil then
    vim.cmd 'MoltenInit'
    return
  else
    vim.cmd('MoltenInit ' .. conda_env)
  end
end, { silent = true, desc = '[M]olten [I]nitialize' })
```

---

With all of the above, hopefully this can improve you experience with python
development!

[pythonxkcd]: https://xkcd.com/1987/
[pyenv]: https://github.com/pyenv/pyenv
[pip]: https://pypi.org/project/pip/
[conda]: https://conda.io/projects/conda/en/latest/index.html
[nix]: https://nixos.org/
[neovim]: https://neovim.io/
[home-manager]: https://nix-community.github.io/home-manager/
[condaenv]: https://conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html#activating-an-environment
[nix-mamba]: https://wiki.nixos.org/wiki/Python#Using_micromamba
[micromamba]: https://mamba.readthedocs.io/en/latest/index.html
[molten]: https://github.com/benlubas/molten-nvim
[molten-docs]: https://github.com/benlubas/molten-nvim/blob/main/docs/NixOS.md
