---
title: Python data analysis with neovim and containers
description: Ensuring my neovim workflow also works with the most common tool used at HPC machines
tags: [vim, computing, tips, containers]
banner: thoughts.jpg
---

Despite my previous article discussing python development with nix shell, the
truth is that nix-based tools are not commonly available at high-performance
computing (HPC) center. The most common way of ensuring the desired software
stack is available for HPC is typically the use of containers (either
[docker][docker], or more commonly [apptainer/singularity][apptainer]). The
problem then comes in how can one ensure the apparent program environment of
your editor matches that in the container, especially as editors are large
pieces of binary with many dependencies.

One solution would be to extend the container image to contain ones favorite
editor, this can be extremely disk-space intensive, especially when the
container images are continuously updated, as you will effectively be creating
a new editor binary every time your image changes. Another solution would be to
create some virtual environment that perfectly mirrors the image. This again is
potentially disk-space intensive, especially if your container image contains
large library blobs like for machine learning. Is there a way to have the best
of both worlds, where your editor uses your custom-defined, most-up-to-date
package version, while having the editor understand the programming environment
specific to the container?

For the following discussion, I'm going to assume that we are working with
containers for Python-based development. Meaning that you will have the
flexibility to install custom python packages with the use of python's
[venv][venv] module, but the solutions will not require installing any
non-python packages or modify the python version.

### LSP as servers (which may not always work)

Since the editor understands your programming environment through the language
_server_ protocol, there is actually no rule saying that the LSP needs to be
running in the same environment as the editor. While most LSP works by having
information being passed into and out of the [standard streams][stdstream],
some LSP does support network based streaming.

For example, you can fire up your container, and start the [python language
server][pylsp] like:

```bash title="Starting pylsp using TCP"
pylsp --tcp --port=8600 # Or change to whichever port is free
```

Then, in the editor configuration, you only need to change how the LSP is
initialized by your editor. In neovim with the `lspconfig`, this is as simple
as setting up `pylsp` with a custom `cmd`:

```lua title="Configuration for pylsp over TCP"
require("lspconfig").pylsp.setup({
	cmd = vim.lsp.rpc.connect("localhost", 8600),
})
```

This [post][tcplsp] actually details more information, in case your LSP of
interest does not support TCP streams out of the box, common unix tools allows
to seamless route standard streams to a target network port.

```bash title="Starting pylsp using socat routing"
socat TCP-LISTEN:8600,reuseaddr,fork EXEC:"pyslp"
```

---

The problem with this solution is two-fold. First, is that now the
initialization of the LSP is now separate from the editor; whereas previously
the LSP is automatically started when editing a certain file type, now we need
to explicitly run an external command. Second is that while stream routing
tools are common, they are not necessarily included in your container image of
interest. Is there a way to better solve this problem?

### Complex LSP startup command

The solution actually lies in the configuration of the editor previously, it
turns out that you can start LSPs with arbitrarily complicated commands,
including starting up a docker/singularity instance! If you are already using
docker, you can check out [this plugin][lspcontainer] here; but for the sake of
completeness, you can actually define these commands yourself! Using
singularity as an example, you can add to your configuration file something
like:

```lua title="configuration for starting pylsp in a docker container image"
local project_dir = "your/project/path"
local image_dir = "your/image/dir"

require("lspconfig").pylsp.setup({
	cmd = {
		"singularity",
		"exec",
		"-p",
		-- Binding your project directory
		"-B",
		project_dir .. ":/srv",
		"--pwd",
		"/srv",
		-- Specifying your image
		image_dir,
		-- Executing the LSP in question.
		"/bin/bash",
		"-c",
		"pylsp",
	},
})
```

If your LSP not directly accessible in your container image, you can also have
arbitrarily complicated startup sequences, provided that nothing is printed
into the standard streams by providing the executing script used to start the LSP:

```bash title="start_py.sh"
#!/bin/bash

# This will execute within the singularty session
source /srv/myenv/bin/activate # Activate some virtual environment
export MY_ENV="MY_VALUE" # Additional settings you want to have visible to the LSP
/srv/myenv/bin/pylsp --option # Activating the LSP with some additional options.
```

Then in your configuration lua file, you can swap out the final `"/bin/bash",
"-c", "pylsp"` entries with the new `"/bin/bash/", "-c", "./start_lsp.sh"`. If
you are using formatters handlers such as [`conform`][conform], you can also do
something similar, except that all commands other than singularity needs to be
passed as the `args` method:

```lua title="configuration for conform"
requires("conform").formatters.sing_ruff_format = {
	command = "singularity",
	args = {
		"exec",
		"-p",
		-- Directory binding information
		"-B",
		project_dir .. ":/srv",
		"--pwd",
		"/srv",
		-- Executing
		"/bin/bash",
		"-c",
		"/srv/myenv/bin/ruff format --force-exclude --stdin-filename $FILENAME -",
	},
	stdin = true,
}
```

Notice that in this case the full formatting command with various arguments
needs to be passed as a single string to singularity/bash.

If you are using molten to have in-editor interactions with the python kernels,
a similar trick can by installing a custom kernel launching process defined in
you user kernel definitions (solution adapted from [this
answer][container-kernel])

```json title="~/.local/share/jupyter/kernels/jetenv/kernel.json"
{
  "argv": [
    "/usr/bin/singularity",
    "exec",
    "-B",
    "/your/project/dir:/srv",
    "-B",
    "{connection_file}:/srv/.jupyter/connection-spec",
    "--pwd",
    "/srv",
    "/your/image/path",
    "/bin/bash",
    "-c",
    "/srv/myenv/bin/python -Xfrozen_modules=off -m ipykernel_launcher -f /srv/.jupyter/connection-spec"
  ],
  "display_name": "jetenv",
  "language": "python"
}
```

This will allow you to use molten to see this new kernel that is created
through a singularity command.

> Note: one danger with this method is that it must be executed without the
> `-p` flag (compare with the other methods in this article). This may start
> the host system of available process namespace, and may be against the
> terms-and-services of your HPC machine.

> Note 2: If you are using this in combination with a nix-shell this may not
> work. Still not work entirely sure why this is the case just yet.

## Project specific configurations

Now, since containers are likely to be project specific, you would likely not
want to have these LSP/formatter settings be your global editor settings. But
rather only be used if you are opening a file in the project directory. If you
don't want to have a full project manager style plugin, you can make a very
simple file in the `~/.config/nvim/after/plugin` directory that contains
something like:

```lua title="project.lua"
vim.api.nvim_create_autocmd("VimEnter", {
	pattern = { "*" },
	callback = function()
		local config_name = "init.lua"
		local project_config = vim.fs.root(0, vim.fs.joinpath(".nvim", config_name))
		if project_config ~= nil then
			project_config = vim.fs.joinpath(project_config, config_name)
			vim.cmd("source " .. project_config)
		end
	end,
})
```

With this very simply snippet, it will attempt to check if the parent directory
structures contain a `.nvim` directory, and if it does, load the file
`.nvim/init.lua` file into the neovim configuration. Since this is loaded after
all configuration listed in the global neovim configuration, any configurations
listed here will overwrite the global settings!

[docker]: https://www.docker.com/
[apptainer]: https://apptainer.org/
[lspserver]: https://www.reddit.com/r/neovim/comments/1d2gw1c/remote_lsp/
[stdstream]: https://en.wikipedia.org/wiki/Standard_streams
[pylsp]: https://github.com/python-lsp/python-lsp-server
[venv]: https://docs.python.org/3/library/venv.html
[tcplsp]: https://www.reddit.com/r/neovim/comments/1d2gw1c/remote_lsp/
[lspcontainer]: https://github.com/lspcontainers/lspcontainers.nvim
[conform]: https://github.com/stevearc/conform.nvim
[container-kernel]: https://stackoverflow.com/a/63715102
