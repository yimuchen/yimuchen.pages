---
title: Remote clipboard interactions
description: Finding a way to get information into a local clipboard in a remote ssh session
tags: [computing, tips]
banner: thoughts.jpg
---

One common task I run that does not have an obvious "good" solution when
working with remote machines over ssh is: how one can copy information from a
remote ssh session to your local? I'm not talking about copying files down from
the remote machine via `scp` command, I'm talking like getting the path
string from the remote session via commands like `ls`/`pwd` so that you can
properly form the `scp` command; or cases such as getting outputs form command
line dumps to be used in a local configurations file. While there is an
"obvious" solution of using your mouse to highlight the string of interest, and
copying into you buffer through your terminal emulator, this solution is rather
unsatisfactory for following reasons:

- Inaccuracies of the mouse operations: while there are common interactions
  such as "double-click to highlight words", "triple-click to highlight lines",
  the definition of "words" and "lines" depends on quite of bit of your
  settings, and is not immutable. Things like are you working with in tmux or
  other embedded terminal session will change this what the definition of
  "lines" are as determined by the most front facing software that he
  determined what is to be copied. The issue is currently further exacerbated
  by if you have tmux split panes with one pane having a rolling output, where
  the highlight may or may not shift with the activity of the other pane.
- Lossy history. Because what one does with the mouse is not being recorded,
  getting into the habit of using the mouse means that the certain actions are
  lost in the total even history, especially if you get into the habit of the
  copying "partial" outputs rather than the entire command output.

While neither of these things are really "game breaking" in terms of terminal
workflow, I wanted to check if there is something nicer that encourages me to
take full use of the command line tools. So, the general question that needs to
be answered would be: is there a way to stream data to a separate non-output
processes over the ssh session? And the answer is a resounding: _yes_!

## SSH reverse proxy

The first ingredient to solving the problem is [`ssh` reverse
proxy][reverse-proxy] (or more formally "remote forwarding"), this can be
invoked either interactively with the command:

```bash no-copy
ssh -R 9123:localhost:9123 user@host
```

Or it can be set permanently in your [`~/.ssh/config`][sshconf] file with
something like:

```text
Host host
    User user
    RemoteForward 9123 localhost:9123
```

Users of running [`jupyter`][jupyter] on clusters are likely more familiar with
the counterpart of `ssh` [port forwarding][sshforward] (with the `-L
9122:localhost:9122` flag), and the functionalities basically mirror each
other. In the case port forwarding, all network traffic to the address/port
pair of `localhost:9122` on the local machine will be passed to the remote
machine's `localhost:9122`, where it can be processed by arbitrary programs
listening in on port `9122` on the remote machine, this is how this mechanism
can be used to have you interact with the remote machines jupyter server by
using the browser pointing to a `localhost` address. The _reverse_ proxy
basically reverses this traffic flow logic: for any traffic that attempts to
pass to the `localhost:9123` on the _remote_ machine, this traffic is now
re-routed to `localhost:9123` on the _local_ machine to be processed.

This, of course, requires you to set up some program on your local machine to
handle this traffic, here we can write a very dumb program to handle to
basically spit out what is being handled on passed to the traffic via a python
program:

```python title="basic_handler.py"
import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('localhost', 9123))
s.listen(1)
while True:
     connection, address = s.accept()
     print(connection.recv(65536))
```

If you run this simple snippet on your local machine, start an ssh connection
with the `-R` flag listed previously, then run the following command on the remote machine:

```bash
echo "MYTEST" | nc localhost 9123
```

You can see the information from the command being passed to the python session
running on the local machine! This immediately opens up the possibility any
information parsing! In general, because our target the system clipboard on our
local machine, we should try to have some form protection to ensure that only
valid traffic and end up in the clipboard. So instead of the slightly unwieldy
[`nc`][netcat], we will be righting a companion script to emit traffic from the
remote machine:

```python title="emitter.py"
import socket
import sys
import json
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.connect(("localhost", int(os.getenv("RCB_PORT", "9543"))))
    s.send(json.dumps({"token": "super_secret_token", "msg": sys.stdin.read().rstrip()}).encode("utf8"))
```

This makes it so that this script interacts with the basic `nc` command shown
above (so you should use this script using the syntax like: `my_command |
python emitter.py`), except we wrap the command output into a simple JSON
string with the addition of a secret token. On the listener side, we can also
add in a quick validation script to only process request with a valid token:

```python title="listener_parital.py" nocopy
import socket
import json

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('localhost', 9123))
s.listen(1)
while True:
     connection, address = s.accept()
     request = json.loads(connection.recv(65536).decode("utf8"))
     if request["token"] in valid_tokens: # Only process valid tokens
         print(request["msg"])
```

Now we have one additional ingredient left, that that is how to have this
`listner.py` script work with the system clipboard!

## Command-line clipboard interaction

The reason why I used the command line [pipe][pipe] is that this actually
mirrors what you want to do for clipboard interaction in a local command line
session! The common methods for this would be something like:

```bash nocopy
mycommand | xclipboard # For Linux X11 session
mycommand | wl-copy    # For Linux wayland sessions
mycommand | pbcopy     # For macOS session
```

We basically need to emulate this behavior in our listener script! This can be
done very simply with the python [`subprocess`][subprocess] module:

```python title="listener.py" nocopy
import socket
import json
import subprocess

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.bind(('localhost', 9123))
s.listen(1)
while True:
     connection, address = s.accept()
     request = json.loads(connection.recv(65536).decode("utf8"))
     if request["token"] in valid_tokens: # Only process valid tokens
         cb_process = subprocess.Popen("wl-copy", shell=True, stdin=subprocess.PIPE)
         cb_process.stdin.write(request["msg"].encode("utf8"))
         cb_process.stdin.close()
         cb_process.wait()
```

And we are done! The only remaining things would be:

- Make sure the `emitter.py` scripts is located on a remote that is accessible
  via the `$PATH` variable.
- Make a way to have the `listener.py` script automatically start up (ex:
  setting it up as a [user-level daemon][systemd])
- Setting up your SSH configurations to use the correct port for reverse proxy.
  (Notice that multiple remote hosts can use a common port!)

This has potentially security implementation, I will not be discussion how this
is done here (also if you are implementing this yourself, you should also
implement a nicer method for handling the secret validation token), then you
should be free to simply to use `my_command | emitter.py` where ever you go and
get the result into your local clipboard to be either included in presentation
or paper!

[reverse-proxy]: https://man.openbsd.org/ssh#R
[sshconf]: https://man.openbsd.org/ssh_config
[jupyter]: https://jupyter.org/
[sshforward]: https://man.openbsd.org/ssh#L
[netcat]: https://netcat.sourceforge.net/
[pipe]: https://www.gnu.org/software/bash/manual/html_node/Pipelines.html
[subprocess]: https://docs.python.org/3/library/subprocess.html
[systemd]: https://wiki.archlinux.org/title/Systemd/User#Basic_setup
