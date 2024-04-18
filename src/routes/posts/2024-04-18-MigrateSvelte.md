---
title: Migrating blog to Svelte
description: Documenting some of the reason and rebooting the blog constructions using a fresh framework.
tags: [computing, notes, thoughts]
banner: code_head_1.png
---

If you are reading this via an external link, and if you have seen my other
posts, you might think that this looks different. This is because I have now
moved the blog both to a new framework ([Svelte][svelte]), and a new GitHub
[repository][repo]. Here we will go over some of the reasons of why I decided
to do this.

[svelte]: https://svelte.dev/
[repo]: https://github.com/yimuchen/yimuchen.pages

## The technical reasons

If you did not know, [GitHub pages][ghpages] are usually generated using
[Jekyll][jekyll] to convert your collection of markdown files to the static
HTML pages that you see in the browser. The problem I had with Jekyll is that
the conversion of the markdown file to HTML components, as well as the handling
of the layout that is outside the main mark down documents (think how the
headers, navigation, and other items) are handled in a rather opaque ruby
package, meaning that to add additional items, you will likely need to handled
markdown with injected HTML tags and additional modifications with hacked
together JavaScript. One of the motivations looking for a JavaScript framework
to make the static sight is that (I hope) will be easier to handle the HTML
elements in a more streamline fashion, as well as having easier access to
directly the HTML layout.

Additionally, I'm also not a fan of how "variables" are handled in Jekyll using
YAML, meaning that aside from HTML/CSS/JavaScript files, and the content
markdown files, I also need to keep track of additional file, that has yet
another format. The flexibility of JavaScript frameworks, is that the parsing
of markdown files can technically be handled anywhere if I want to specify,
meaning that the handling of "data" can be done easily with markdown files with
injected metadata.

[ghpages]: https://pages.github.com/
[jekyll]: https://jekyllrb.com/

### Why svelte?

Now comes the problem: out of the every-growing list of JavaScript framework,
why choose Svelte? While I had some [experience][guireact] with [React][react],
I felt that working with the "virtual DOMs" is definitely not something I want
to work with when the website is largely static, as it looses the benefit of
directly mangling the DOM if I want to make some small changes. Being a fan of
[ThePrimeagen][theprime], I was thinking if [HTMX][htmx] is possible. However,
since HTMX relies typically on the server side to make rendering adjustment, I
wasn't confident that I can make this work with the purely static site hosting
of GitHub pages. So I went with the other "new" framework that I heard of,
which just happened to be [Svelte][svelte].

A [quick google search][svelte-ghpages] showed that it is rather simple to
generate static sites locally on my machine then push the static sites to
GitHub, so I decided to dive in. And gave me the push that I need. Some of the
new niceties of using Svelte compared with what I can do with Jekyll, will be
showcased later!

[guireact]: https://github.com/UMDCMS/SiPMCalibControl
[react]: https://react.dev/
[theprime]: https://www.youtube.com/@ThePrimeagen
[htmx]: https://htmx.org/
[svelte-ghpages]: https://www.okupter.com/blog/deploy-sveltekit-website-to-github-pages

### The logistics reason

Having the old blog repository accumulated for over 8 years, some of the posts
have [aged like fine milk][agemilk]. While for some posts, it is interesting to
look at what sort of mindset changed over time, there are posts really do not
event provide any reflective values. That combined with my original setup with
Jekyll making it incredibly frustrating to update the CV page, made me decide
to start over from scratch.

The idea is that I will only migrate over posts that are of STEM topics, as
even if what I wrote did turn out to be wrong, it would be interesting to see
what goes wrong, while pure opinion pieces doesn't really add much if it ends
up being a poor writing.

[agemilk]: https://en.wiktionary.org/wiki/age_like_milk

Some pure technical posts might take a while to transfer, I am still figuring
out some of the new technologies with svelte (and seeing if there is a better
way to handle multimedia files), so there will likely be some time before
everything is shown.

---

But enough waffling, let's show off some of the new tech that I can do with the
new framework!

## Some nice updates

### Updated code highlighting

For this framework, I am using [`shiki`][shiki] to handle the code block
highlighting. This allows for additional items that I did not in the old blog, including:

- Number lining for long code blocks
- Per-line highlighting to indicate important information
- Additional header information (like an additional title and the code language)
- A handy copy button to copy the internal code

Using the python autocomplete code block as an example:

```python title="Notice magic comment in the highlight!" hl={2,17}
#!/usr/bin/env python3
# PYTHON_ARGCOMPLETE_OK

import argparse
import argcomplete

parser = argparse.ArgumentParser(
    prog="pdftopng.py",
    description="Convert PDF files to high quality PNG files",
)

parser.add_argument("files", type=str, nargs="+").completer = (
    argcomplete.FilesCompleter(allowednames="*.pdf")
)
# ...

argcomplete.autocomplete(parser)
args = parser.parse_args()
```

Of course, all of these are toggle-able, just in case I want a snippet that is
incomplete or should not be automatically added to clipboards for safety
reasons:


```bash title="PLEASE DO NOT COPY THIS" nocopy
rm -rf . /
```

### Site theming toggles

There is now a site color theme toggle that one can use in the hamburger menu!
I'm still working on having the site use cookies to remember which setting to
use, but at least we now have a toggle! 



[shiki]: https://github.com/shikijs/shiki
