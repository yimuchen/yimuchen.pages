---
title: Returning to (Neo)Vim
description: Why I am return to using vim as a primary text editor
tags: [vim, computing, tips]
banner: thoughts.jpg
---

[Eight years ago][old-vim], I moved away from vim to using a graphical editor
[Atom][atom] (and later [VS Code][vs-code]); four months ago, I started
reconfiguring the many dot files to once again make the
([neo][neovim])[vim][vim] my main editor. After close to cleaning up my first
round of ricing (yes, it took 4 months), I've decided to revisit some of the
issues I had when with vim at the time, and see what has changed my influence
to change yet again.

[old-vim]: http://yimuchen.github.io/Migrating-to-Atom/
[atom]: https://en.wikipedia.org/wiki/Atom_(text_editor)
[vs-code]: https://code.visualstudio.com/
[neovim]: https://neovim.io/
[vim]: https://www.vim.org/

## The cases I made for an alternate editor

My old writing contained quite a bit of unrelated rambling, so to condense it
down the following points:

- **Graphical feedback**: from the smaller things like icons for indications of
  file type when navigating file systems; odd items like a mini map for
  indicating the overall file layout; preview to graphical output elements,
  like plots and latex formulas.

  While some of these items are partially solved with newer technologies (such
  as the first item with [nerd fonts][nerd-fonts]; [`sixel`][sixel] for graphical
  results display), the requirement for constant feed-back actually points to a
  different issue in editing that I did not properly identify: can my editor
  help me make less mistakes, and indicate when I might be doing something
  wrong? The tools that have been developed since then also means that new
  editing tools make a lot of the concerns that I have be a moot point.

- **Obtuse-ness**: At the time, I was complaining that keystrokes in vim was
  "too different" from other programs. What I realized over time is that
  problem with keystrokes is less to do with how obtuse the keystrokes are, but
  rather how easy it is to look up keystrokes that you might have forgotten,
  either because you are still learning the system, or it is a functionality
  that you did not use for some time. An alternate workflow for graphical
  editors for example:, while the keystrokes required to insert a "π" character
  in LibreOffice is also rather obtuse (`<Alt>i<Alt>ppi<Cr><Esc>`), because of
  the graphical feedback, on holding down `Alt`, you can immediately see what
  keystrokes are needed to navigate the toolbar to reach what you need. So
  effectively, when trying to learn a new function, the only keystroke that I
  need to keep track of is effectively just `Alt`. At the time, I did not know
  whether there is an easy way to discover the mapping of additional vim
  motions other than [RTFM][RTFM]. While reading the manual should be the best
  path to learn, having to constantly hop in-and-out of the editor just to
  learn the editor add rather heavily to the already steep learning curve.

  Another aspect of obtuseness that I did not explicitly say, was also that
  configuring vim via [`vimscript`][vimscript] did (at least at the time), feel
  a lot less intuitive than writing a JSON file that feels easier to organize
  and track for configuration. This is one of the reasons that I opted to use
  [neovim][neovim] rather than [vim][vim], with understanding how to do
  configurations with a general purpose language ([`lua`][lua]) makes
  everything simpler to learn.

How that I have re-discussed the pain points that pushed me away from vim eight
years ago, lets discussion the new points that pulled me back to vim after all
these years.

[nerd-fonts]: https://www.nerdfonts.com/
[sixel]: https://saitoha.github.io/libsixel/
[vimscript]: https://learnvimscriptthehardway.stevelosh.com/
[RTFM]: https://en.wikipedia.org/wiki/RTFM
[lua]: https://www.lua.org/

## The great features of neovim

The pain points that I discussed previously actually applies to many of the
general workflow: how can my editor assist in text editing, pointing out when I
make hard mistakes, and giving hints about items that I need refreshing in? The
maturity of the two following tools are basically the killer apps that got me
back into wanting to use neovim.

### Language server protocol

[Language server protocols (LSP)][lsp] is what is need for you editor to
understand the context of the code that you are editing. This includes the
ability to make give in-time syntax error warning, context aware autocomplete,
function signature lookup and hinting, and project-wide navigation and editing.
Here we have a look at some of the functionality that can be brought to the
editor if your editor has full integration with the language that you are
working with. Because LSPs are a program separate from the actual editor, this
means that it will not slow down you keystrokes on large files/project (one on
the reasons why I gave up on an autocomplete plugin when I was using vanilla vim
8 years ago), just that the suggestions might take a bit longer to show up.

- Syntax error indicator and warnings
- Context-aware autocomplete
- Function signature look up
- Code navigation - go to definition
- Code navigation - go to call instances
- Code navigation - go to next issue/list all issues in directory
- Project wide renaming

<figure>
  <img src="../../image/posts/20240412/lsp_opt.GIF"/>
   <figcaption>
   A quick demonstraction of the functionalities of LSP in code editing
   workflow
   </figcaption>
</figure>

Strangely enough, while LSP was originally developed for VS Code, it never
quite worked properly for me, with the functions look up function never quite
working unless I had the file containing the function in question opened in
another tab. While [configuring LSPs][lspzero] for neovim is not trivial, I did
find it cohesive, and there are already complete resources out there for
settings this. (Shout out to [this][primevim] ThePrimeagen video that convinced
me to jump back into the vim world).

[lsp]: https://microsoft.github.io/language-server-protocol/
[lspzero]: https://github.com/VonHeikemen/lsp-zero.nvim
[primevim]: https://www.youtube.com/watch?v=w7i4amO_zaE&t=47s

### Fuzzy finder

The secondary function is related to navigation: how do I look for a some code
snippet, a particular file, some editor functionality from within the editor?
What if I only remember some part of what I wanted to look up? Fuzzy finding is
by no means a "new" idea, but the maturity of a fuzzy finding plugin such as
[telescope][telescope], and its integration with neovim itself and its plugin
functionalities means that there is now just a few sets of keystrokes that you
need to set up to generically find items when code editing. You have actually
seen telescope in action in the demonstration of the LSP functionalities. But
here are some additional niceties that was not demonstrated:

- Find file by name (regardless of nested directory)
- Find file by grep pattern
- Find neovim lua API
- Find in current key maps

<figure>
  <img src="../../image/posts/20240412/fzf_opt.GIF"/> 
  <figcaption>
  Some common search navigations one can achieve with a good fuzzy finder.   
  </figcaption>
</figure>

The maturity of such plugins arguably changed my workflow just as much as LSPs,
as jumping between what needs to be edited was something that disrupted my
though process quite a bit. While fuzzy searches exist for the graphical
editors, each item typically needs to open up something additional start the
lookup process. Here the simplicity of a text-based interact actually works in
favor of such functionalities, with any search being able to fired up
immediately with a similar interface. Using this, my old requirements of
keeping a file tree open at all times, having a file layout minimap, and having
to have a separate "project manager" functionality in the editor now looks like
and strange solution to a problematic workflow.

[telescope]: https://github.com/nvim-telescope/telescope.nvim

---

Of course, being an open source project, there are of course many ways to add
plenty of custom workflow improvements (and plenty of eye candy :))

- [`statuslines`][lualine]/[`breadcrumbs`][bbq]. The addition of these 2 were
  actually utility inspired, when I had to stop talking during a screen share
  sessions, as to the collaborator having to constantly ask "which
  file/function are we on?" during the jumping around we can now do with LSP
  navigation. You can see these items in action in all the demonstration images
  above.

- [`oil`][oil]: Creating/renaming/removing text files as if it were a text
  buffer. Since telescope mainly works with existing files, oils was a nice
  addition for directory tree navigation and manipulation.

<figure>
  <img src="../../image/posts/20240412/oil_opt.GIF"/>
   <figcaption>
   Editing directory structure like a text buffer is kinda cool!
   </figcaption>
</figure>

- [`startup`][startup]: To tell people "I use vim BTW"

<figure>
  <img src="../../image/posts/20240412/IusevimBTW.png"/> 
  <figcaption> Did I remember to say "I use vim" BTW? </figcaption>
</figure>

[lualine]: https://github.com/nvim-lualine/lualine.nvim
[bbq]: https://github.com/utilyre/barbecue.nvim?tab=readme-ov-file
[oil]: https://github.com/stevearc/oil.nvim/
[startup]: https://github.com/startup-nvim/startup.nvim/tree/master

---

With neovim working with lua, adding custom functionality is rather fun to
learn once you get over the funny amalgamation of list and maps that is [lua
tables][tables] and the very funny [start-by-1 indexing][lua-start1] syntax. I
have already added 2 functionality (not quite to the quality of an actual plugin)

- [`rsync` on save][rsync]: when working with remote servers, I like making all
  my edits locally, then passing newly edited files to the remote machine. This
  ensures that I can have a consistent editing environment without having to
  worry about what tools are available on the server. It also doubles as a
  backup copy on my local machine in case there were network outages and
  version management.

- [`startup` with projects list][startup-git]: not really a function that I use
  a lot, but since I moved away from using project managers, it seems good to
  have the start-up page list the 10 recent git repository edits (I very rarely
  use `startup`, so as long as ensure directory crawling is only performed on a
  `startup`, this has very minimal impact on neovim startup page).

[tables]: https://www.lua.org/pil/2.5.html
[lua-start1]: https://www.lua.org/pil/11.1.html
[rsync]: https://github.com/yimuchen/dotfiles/blob/master/nvim/after/plugin/rsync.lua
[startup-git]: https://github.com/yimuchen/dotfiles/blob/master/nvim/after/plugin/startup.lua

## Some functionalities that I still haven't found the solutions for

As of writing there is just one (admitted rather large) chunk of the workflow
that I have not quite found solution to, and complicated enough that I cannot
write up a solution in the 4 months of ricing. That is **[REPL][repl]
integration**. Working with data analysis, a lot of the work flow requires me
to write some code, checkout the partially processed data, then continue
writing the next piece of code based on what I see. The requirement to see the
output to write the next piece of code is the reason why the
[notebook][notebook] workflow is so popular. While there are existing REPL
integration [plugins][molten] in neovim, there are still items that feel like
breaking the neovim flow, with it requiring external buffers to open the
window, and inline output displays not really looking very nice in a pure
text-based display. The plugin still looks very active, though, so such this
verdict may change soon in the future!

[repl]: https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop
[notebook]: https://jupyter.org/
[molten]: https://github.com/benlubas/molten-nvim

## Some new functionalities that I should continue learning

- **Vim motions**: despite all that I have said about vim, my ability to
  properly use vim motions is terrible (If you noticed the lack of `hjkl`
  strokes in the demos above). Luckily, vim being vim, there are
  [plugins][vim-be-good] for that.
- **Git integration**: I still mainly use git directly in the command line,
  though I'm also terrible with git. Learning more about how to use git and
  understanding how to use it in a vim [workflow][fugitive] would be nice.
- **Edit history**: we how to effectively use the [edit histories][undotree] to
  make partial editing less of a pain.

[vim-be-good]: https://github.com/ThePrimeagen/vim-be-good
[fugitive]: https://github.com/tpope/vim-fugitive
[undotree]: https://github.com/mbbill/undotree

## Links to resources

- A link to my neovim configuration:
  [https://github.com/yimuchen/dotfiles/tree/master/nvim](https://github.com/yimuchen/dotfiles/tree/master/nvim)
- An up-to-date tutorial on neovim configurations from one of the core
  maintainers of neovim. Serves well as a good introductory video for how to
  understand neovim configurations:
  [https://www.youtube.com/watch?v=m8C0Cq9Uv9o](https://www.youtube.com/watch?v=m8C0Cq9Uv9o)
- GitHub repository of the video above:
  [https://github.com/nvim-lua/kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim)
