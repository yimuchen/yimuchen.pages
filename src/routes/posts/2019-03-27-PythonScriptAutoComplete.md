---
title: Python script Tab completion in CLI
description: A handy tool for a better user experience when using custom python scripts
tags: [computing, python, scripting, command line]
modified: 2018-05-19
banner: code_head_1.png
---

Every once in a while, I write a custom python script to simplify certain
command line tasks: such as mass conversion of PDF files into PNG files. If it
was just a single file with some set operation flags, the command is relatively
simple:

```bash title="bash solution to PDF conversion"
function convert_pdf(){
  input_pdf=$1
  convert -density 400 \
          -trim \
          $input_pdf
          -quality 100 \
          -sharpen 0x1.0 \
          ${input_pdf/.pdf/.png} # Renaming with extension PNG
}
```

When batch processing some/all PDF files in a directory however, this operation
isn't easily achieved by simple command aliases: there is the issue of running
the same command for multiple files, argument parsing, and also filename
conversion. While I can of course write a bash/zsh/sh script or a single line
bash for loop:

```bash nocopy
for mypdf in dir/*.pdf ; do convert_pdf $mypdf; done
```

But there is still no easy way of including additional option flags (ex. I want
PDF files in this directory to only run a coarse 72DPI conversion). Python has
so many nice parsing tools such as [`argparse`][argparse], that makes
everything so much more convenient. So in the end, writing brief python scripts
was the method of I ended up using for a while.

Then I notice a nice feature that common commands/applications have, say the KDE
document browser [`okular`][okular]. In the `zsh` shell, when I hit tab to
autocomplete the file that I want to open, it will _only_ list PDF files. If I
hit tab when the current cursor word was an option, the autocomplete is limited
to the options that `okular` gives. It was a very handy function, especially if the
directory I am working with is populated with both PDF and PNG files, so I was
wondering if this sort of behavior can also be implemented into my custom python
scripts. Turns out one can! With very minimal adjustments to the code if you are
already using `argparse`!

The package is called [`argcomplete`][argcomplete], and for the auto completion
to work, one only needs to add:

1. One magic comment line after the shebang.
2. One function call after options declaration.
3. One global completion function file for `~/.bashrc`
4. One register function in `~/.bashrc`

Let's see the modifications to the python script. First the magic comments and
the new import and package uses.

```python showLineNumber hl{2}
#!/usr/bin/env python
# PYTHON_ARGCOMPLETE_OK
import argcomplete, argparse

parser = argparse.ArgumentParser()
argcomplete.autocomplete(parser)
args = parser.parse_args()

# For completing files with specific patterns
parser.add_argument("files", nargs="+").completer = (
    argcomplete.completers.FileCompleter("*.pdf *.ps")
)
# No completers is also fine!
parser.add_argument("--myflag1")
parser.add_argument("--myflag2")
```

Now for the `bash`/`zsh` configurations. You will need to get a copy of the
bash completion function from the `argcomplete` repository,

```
wget https://raw.githubusercontent.com/kislyuk/argcomplete/master/argcomplete/bash_completion.d/python-argcomplete.sh
```

Then you will need to source this file in your global `~/.bashrc` file. For
python script you want to include auto complete, you will also need to register
the script using the provide function.

```bash
source python-argcomplete.sh
eval "$(register-python-argcomplete my-awesome-script.py)"
```

And then you are done! Now you can see the following when using tab completion:

```bash nocopy
> ls
Dir1/ Dir2/  pdffile1.pdf pdffile2.pdf  ignore.txt

> my-awesome-script.py <tab>
pdffile1.pdf pdffile2.pdf  Dir1/ Dir2/  --myflag1 --myflag2

> my-awesome-script.py --<tab>
--myflag1 --myflag2
```

Pretty neat right?

---

Unfortunately, if you are also used to the nice completion style of `zsh`, you
will find the autocompletion function rather lack-lustering. Double tapping
`<tab>` on the flag option will not give you a help string, the autocompletion
results are not colored and sorted. Such is the limitations of the package
being designed mainly for bash users. But it is a starter! It makes the
experience of your own written scripts just this little bit nicer, without
having to go into the depth of writing your own completion script for every
custom python script you write.

[argparse]: https://docs.python.org/3/library/argparse.html
[okular]: https://okular.kde.org/
[argcomplete]: https://argcomplete.readthedocs.io/en/latest/
