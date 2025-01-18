---
title: ZLE - a glimpse of advanced command augmentation
description: A first glimpse into advance interative shell augmentation
tags: [computing, tips]
banner: thoughts.jpg
---

Have you ever ran into a case where the certain commands always require some
prefix/setup before it can be properly executed? One of the most outstanding is
to do anything with [CMSSW][cmssw], will need to load in the environment first,
event if it is a small task such as looking at the contents of a single file.
Other common annoyance include the python [virtual environments][venv], where
you forgot to switch into the environment before initiating the [`pip`][pip]
command, and now you have to redo all the install commands again, plus clean up
the dangling libraries that now live somewhere in your global python instance.
Is there a way of catching commands that you type into the prompt, check for
common "errors" again your use-case logics, and modify the commands accordingly
before executing?

The common solution for "modifying commands" is [aliases][alias], but this is
solution in basically simple string substitution of the command that you type
in. While you can technically include bash logic into these aliases, you
effectively need all logic to be contained in a fancy on-liner bash statement
which quickly becomes unreadable. Is there a more intuitive way doing this?

If you are using [`zsh`][zsh] instead of the more vanilla [`bash`][bash] shell,
there is actually a very simple solution!

```bash
function modify-accept-line() {
  BUFFER="echo $BUFFER ; $BUFFER"
  zle .accept-line
}
zle -N accept-line modify-accept-line
```

If you include this snippet in your `.zshrc` file, and source this file. Next time
you type a command you will see that after you hit enter, what you enter into
the prompt will be modified!

```text nocopy
> hello<Enter>
> echo hello ; hello
hello
hello: command not found
```

The understanding this snippet itself is pretty straightforwards: the `$BUFFER`
variable is whatever is in the prompt at the time you hit enter, and you can
modify this variable via this new function before the `zle .accept-line` is
called, which tell the `zsh` interactive shell to actually execute the command.
In general such operations are part of the "[zsh line editor][zle]
[widgets][zle-widget]", which allow for editing of the buffer string
programmatically. You probably have actually interacted with this system
before, as it is effectively how tab completion works in `zsh`! For our case,
we are only interested in the `.accept-line` widget, which trigger only when
the full buffer has been typed out.

---

So what can we use this for? Referring back to my example with `CMSSW`, we can
now say that if this is our input buffer looks like CMSSW command, and we
detect that the `CMSSW` environment is _not_ set, then attempt to load in the
`cmsenv` command directly, so we can supply the `modify-accept-line` with
something like:

```bash
function modify-accept-line() {
  # If the input buffer starts with the cms-sw like command prefix
  if [[ $BUFFER == cmsRun* ]] || [[ $BUFFER == edm* ]] || [[ $BUFFER == scram* ]]; then
    #If the $CMSSW_BASE variable is not set
    if [[ -z $CMSSW_BASE ]]; then
      # Prefix the command with `cmsenv` command
      BUFFER="cmsenv ; $BUFFER"
    fi
  fi
  zle .accept-line
}
zle -N accept-line modify-accept-line
```

Or for a more involved example, where the `modify-accept-line` can run any
function visible to the `zsh` session, you can have it so that if you run a
`python` command, it recursively searches the parent directory for a
`environment.yaml` file to see if you are expected to be running a `conda`
environment. If yes, and the `conda` environment defined in the `environment`
is not active, switch to it before executing the python command:

```bash
function _add_conda_prefix() {
  # Finding directory containing pattern https://unix.stackexchange.com/a/22215
  env_dir=$PWD
  while [[ "$env_dir" != "" && ! -e "$env_dir/environment.yaml" ]]; do
    env_dir=${env_dir%/*}
  done
  if [[ $env_dir == "" ]]; then
    return
  fi
  # Checking the name of environment. Ideally you should use yq for yaml
  # parsing, not this is no generically available on your system
  env_name=$(head -n 1 "${env_dir}/environment.yaml" | awk '{print $2}')
  # Check if prefix match, if not add a conda_command prefix
  if [[ $(basename CONDA_PREFIX) != ${env_name} ]]; then
    echo "conda activate ${env_name} ; "
  fi
}

function modify-accept-line() {
  # If the input buffer starts with the cms-sw like command prefix
  if [[ $BUFFER == python* ]] || [[ $BUFFER == pip* ]]; then
      # Prefix the command with `cmsenv` command
      BUFFER="$(_add_conda_prefix) $BUFFER"
    fi
  fi
  zle .accept-line
}
zle -N accept-line modify-accept-line
```

At this point, the program-ability of the shell environment, the sky is the
limit, and this can be used to engineer away the little annoyances in your
daily shell life. Always beware of the [pitfall of automation][xkcd] though.

---

Some things that you might want to note:

- The `.accept-line` widget will only be triggered for interactive prompts.
  This means that the same logic will not be reflected in scripts, so you still
  need to keep track of your execution logic.
- The modifications to the buffer line _will_ be reflected in the command
  history, so you can still use that to trace your execution logic with the
  modified command if you somehow forget if a command modification was
  performed or not.
- The `$BUFFER` variable is the _entire_ input buffer, meaning that the way we
  have set up commands in the examples above, it will only detect the `python`
  command if your entire buffer starts with the `"python"` string; in other
  that solution will *not* modify python commands that are nested in inline
  `if`/`for` statements. As this page aims to be a quick example to solve
  little annoyances, I will not go into details of how to perform shell script
  parsing in with shell script itself to have all instances of python be
  modified.

[cmssw]: https://cms-sw.github.io/
[venv]: https://docs.python.org/3/library/venv.html
[pip]: https://pip.pypa.io/en/stable/
[alias]: https://ss64.com/bash/alias.html
[zsh]: https://www.zsh.org/
[bash]: https://www.gnu.org/software/bash/
[zle]: https://zsh.sourceforge.io/Doc/Release/Zsh-Line-Editor.html
[zle-widget]: https://zsh.sourceforge.io/Doc/Release/Zsh-Line-Editor.html#Zle-Widgets
[xkcd]: https://xkcd.com/1319/
