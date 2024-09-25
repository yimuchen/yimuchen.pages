---
title: REPL development experience in neovim and tmux
description: Setting environments to enable a REPL development experience with neovim
tags: [vim, computing, tips]
banner: thoughts.jpg
---

When developing and writing code for data analysis, I most of the time I cannot
get what I need exactly on the first try, and writing code via a [REPL][repl]
cycle commonly used. The most common method of running REPL development is
arguably the use of [Jupyter][jupyter] servers and writing code in [Jupyter
notebooks][jupyter]. While there are many advantages to writing code then
immediately executing it to see a graphical result immediately, I personally
feel that the Jupyter workflow comes with its own set of constrains that
sometime feel infuriating.

- Code editing in a browser: to use Jupyter you will need to interact with your
  code either through the Jupyter browser interface or [something
  similar][vscode]. This means you are giving up, or you need great efforts to
  duplicate the settings that you already have on existing browser. Depending
  on the amount of tools you expect out of your editor (other than converting
  keystrokes into character), this may or may not be a deal-breaker for you.
  For me, the fully integrated LSP support (for some reason, vs-code LSP
  support was always a bit patchy for me), as well as the binding for code
  formatting tools. A secondary issue for this is browsers are surprisingly
  compute intensive, and it always felt rather annoying to hear my laptops fans
  ramp up when waiting from a graphical result to return.
- The Jupyter notebook file is effectively a JSON file with a bunch of
  meta-data tracking information, as well as string representations of the
  graphical elements. This makes proper version management of notebooks
  excessively verbose to manage.

Having moved my workflow to neovim, the question then becomes with what we
require out of jupyter notebook workflows, and see if one can replicate an
equivalent and potentially better experience using just command line tool:

1. Graphical results: with the better maturity of [sixel][sixel]
   [support][sixel-support], we can technically create a simple alias dump plot
   files to the terminal. Ideally this alias should result in a zero keystroke
   overhead for displaying plots as with the standard Jupyter workflow (plots
   are shown immediately after code execution).
2. Executing code chunks: when developing a new function for a toolkit, we will
   need the ability to redefine and execute a chunk of code over and over again
   with:

   - Precision on where the chunk starts and ends
   - Minimum keystrokes to define where the chunk starts and end.

   With the help of LSPs, and other in-editor syntax parsing tools, this can
   actually be done without the need for code cells! For example, the
   [mini-surround][mini-surround] plugin adds syntax aware scoping to vim
   operations, so you can very simply define operations such as "yaF" (yank
   around function) and "vaC" (visual select around class). So at this point,
   remaining issue is how this can be passed to something that actually
   executes the code.

3. Persistent session: spawning and processing data is usually the step that
   takes the most time, so if possible, we will need a persistent session that
   keeps what we want in memory events after swapping files to edit (or even
   exiting the editor). While there is the option of using the [in-built
   terminal][nvim-term] in neovim, I feel like there is a better solution.

## Programming tmux

The multiplexer tool [tmux][tmux] allows for the creating terminal session that
can persist even after the terminal program used to spawn the session is
closed. An even more interesting aspect of `tmux` is that all controls of
`tmux` session can be handled by **any** program that can interact with the
user shell. For example, while we can create a new `tmux` window in a tmux
session with the keystrokes `<Ctl-B>5`, we can also call a shell command
outside the main tmux session:

```bash
tmux new-window -t ${name}:5 -n "My window name"
```

Here the `-t` flag is followed by the "target" (window 5 of the "name" tmux
session), and `-n` is one of the eye candies of immediately adding a name to
the window instance.

Even more interesting, we can send directly send keystrokes to **any** pane!

```bash
tmux send-keys -t 3:0.0 "echo \"Hello world\"" Enter
```

So this means that any execution can technically execute anything string, if
needed!

The combination of this programmable interface with the maturity of sixel
support within [tmux session][tmux-sixel], means that all of our goals above
can potentially be solved! So what would a combined solution look and feel
like?

## The combined result -- the tmux + neovim REPL experience

My full set of results can mainly be found in my [`dotfiles`][dotfiles]
repository, with the key files being:

- [`nvim/after/plugin/tmux-repl.lua`][tmux-repl]: for defining how neovim
  keystrokes interact with tmux session.
- [`tmux/_tmux_custom.sh`]: A set of custom shell scripts for handling tmux
  interactions.

But basically the new workflow looks something like this:

1. Start a fresh tmux session (the script automatically creates the session
   name to match the directory)
2. Within tmux, hit `<prefix>1` (in my case: `<Ctl-B>1`) to create an "editor"
   window, this opens a neovim instance and this window will immediately close
   when neovim is closed.
3. Within `neovim`, hit `<prefix>tr` (in my case: `<space>tr`) to "t"oggle a
   "r"epl terminal. Notice that this terminal is:

   1. Handled by tmux, and is send to a background window when "closed" by
      neovim (persistent session).
   2. Immediately spawn a `ipython` session, for me this behavior is defined by
      placing a `.repl.sh` file in the working directory to let tmux know what
      to execute when requesting a REPL terminal.

4. To execute code in neovim, highlight the required session in visual mode
   (`ggVG` can be used to select the entire file, `vaF` can be used to select a
   single function), then hit `<prefix>pr` when still in visual mode to 'p'ass
   selection to the 'r'epl terminal!

Below is a simple demonstration for what can be done!

<video controls>
    <source src="../../image/posts/20240925/nvim-repl.mp4" type="video/mp4">
</video>

The solution is still one step from being complete, as `matplotlib` does not
have a well-developed sixel backend that we directly display plots within the
repl session itself. While there are attempts to add such
[backends][matplotlib-sixel], my initial testings indicate that these
sometimes have problems either with tmux or singularity containers. But this I
hope is a demonstration that at least the dreams of fully leaving the jupyter
ecosystem to once again write pure text file when developing is now close to
fruition!

[repl]: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop
[jupyter]: https://jupyter.org/
[vscode]: https://code.visualstudio.com/
[sixel]: https://en.wikipedia.org/wiki/Sixel
[sixel-support]: https://www.arewesixelyet.com/
[mini-surround]: https://github.com/echasnovski/mini.surround
[nvim-term]: http://neovim.io/doc/user/terminal.html#terminal
[tmux]: https://github.com/tmux/tmux/wiki
[tmux-sixel]: https://github.com/tmux/tmux/commit/dfbc6b1888c110cf0ade66f20188c57757ee1298
[dotfiles]: https://github.com/yimuchen/dotfile
[tmux-repl]: https://github.com/yimuchen/dotfiles/blob/master/nvim/after/plugin/tmux-repl.lua
[_tmux_custom]: https://github.com/yimuchen/dotfiles/blob/master/tmux/_tmux_custom.sh
[matplotlib-sixel]: https://pypi.org/project/matplotlib-backend-sixel/
