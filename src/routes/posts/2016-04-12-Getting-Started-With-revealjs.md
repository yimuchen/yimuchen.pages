---
title: Getting started with reveal.js
description: Migrating to a new presentation platform
tags: [revealjs, presentation, computing]
modified: 2016-04-12
banner: thoughts.jpg
---

New presentation making platform! Nice but changeable aesthetics and easy
editing! Hopefully this would work out for me!

Here is a quick sample that I made!

<iframe src="http://yimuchen.github.io/slides/slides/GeneralPhysicsII_midterm/#/"></iframe>

## Moving away from Latex Beamer

Previously, I have been attempting to find a replacement for [Latex
Beamer](https://en.wikibooks.org/wiki/LaTeX/Presentations) for making
presentation slides. Latex is a very... unpleasant markup language to work with
when typing the small section of text used in slides, the over-head is just too
high, and default settings for various slide elements is either non-existent or
hard to find proper documentations. I thought it was maybe time to try and
find an alternative to use.

## What I was looking for 

There are still quite a lot of aspects of Latex beamer that I wish I could keep
in the new platform that I am looking for.

   * **Cut between template design in content design:** This is the part I find
     very annoying with most GUI based document makers, for most of the slides,
     I would like to keep a uniformed look, and for some reason I had always
     thought the way GUI based presentation makers handled templates is a bit
     hard to work with and difficult to pass between machines.

   * **Minimal Overhead in document:** The main problem with making slides in
     latex is that often the documents is cluttered up with the latex commands
     rather than the content.
     [Markdown](https://guides.github.com/features/mastering-markdown/) is one
     of the most lightweight yet comprehensive markup languages, and what it
     lacks in advanced formatting features, it makes up for by allowing embed
     HTML! Here apparently HTML/CSS web based tools would be a good idea to
     proceed. I have always shied away at the idea since I didn't like the
     aesthetics of HTML tags in documents too much. But is everything could be
     packed into CSS, this might be a good alternative to work with!

   * **Minimal use of external tools:** I would rather that I don't have to
     constantly switch between application to make a document. Right now,
     everything other document related tasks are performed using
     [atom](https://atom.io/) as my primary editor, so I would prefer
     text-based applications, but I would mind a whole new platform if it meant
     there is a good all-in-one package where I can complete all of my editing
     works.

   * **(Optional) WYSIWYG editing:** Many things in slide creation are
     case-by-case: adding description beside a diagram, tweaking template
     parameters. I must say that text based is precise, but very slow to make
     graphical changes.

   * **Local editing:** I'm not a bit fan of cloud editing.

## What I found

When searching for a solution that uses
[Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
for the primary text format, I was introduced to various web-based presentation
    solution, the one that stood out for me was
    [reveal.js](https://github.com/hakimel/reveal.js/#)

<iframe src="http://lab.hakim.se/reveal-js/#/"></iframe>

  * Off the shelf, it looks fresh and appealing, and being HTML+CSS, everything
    is essentially tweak-able. To that is the problem template problem sorted
    out (with a big plus of having a good starting point for making new
    templates).

  * I could mix and match markdown and HTML, meaning that I could have a very
    simple work flow if I'm going for a simple slide look, by at the same time,
    I won't be limited by Markdown if I want to make something fancier. It also
    means I could embed it into other websites if I so desire.

  * Text based. Talk about no other tools.

  * WYSIWYG Editing. This is where is fall flat. There is the [official
    graphical editor](https://slides.com/), but the HTML it generates is not
    designed to be human editable. But given the tools I could have, there
    might be alternatives.

[Exporting to PDF](https://github.com/hakimel/reveal.js/#pdf-export) (something
I consider essential for presentation in groups) is rather more troublesome
that I had thought. But I guess since atom is essentially a heavily modded
browser, I should be able to get the preview within atom, and only export to
DPF when everything is done. (If I cared to look hard enough, I guess there
will be JavaScript libraries to export with atom, but that is getting ahead of
myself)

---

Given all of its merits, there is one big thing I miss about beamer that I still
haven't found and alternative to:

### Alternative for [TIKZ](http://www.texample.net/tikz/)PICTURES

Easily the most powerful diagram making package I have encountered. It could
easily make your diagrams look precise and could do a surprisingly complex
diagrams easily. HTML Canvases just isn't as powerful (Unless I find a very
powerful JavaScript library).

Looking at if I could export single TeX files into a PNG/SVG file however, I
have found that I have been using the whole `\input`, `\include` work flow of
latex completely wrong! So I guess diagrams could be made using single `.tex`
files! Image files are supposed to be independent of the content after all :)

Now, if there is only a WYSIWYG editor for `tikz`...

### Conclusion

There is still a lot of work needed for making the slides: writing the CSS
themes, defining snippets that work with the themes in atom, writing scripts
that make deploying more simple. But I think this has quite a lot of potential
to be my platform of choice for a long time to come!
