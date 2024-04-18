---
title: Running a virtual OSX machine using docker
description: Quick notes for running an OSX virtual machine
tags: [computing, notes]
banner: code_head_1.png
modified: 2024-04-09
---

Keeping some notes for how to run a OSX virtual machine (with GUI) on a Linux
host to test dependencies on OSX systems. The solution is mainly based on the
instructions found in the [docker-osx][docker-osx] repository, which also
powers the main tool for this.

[docker-osx]: https://github.com/sickcodes/Docker-OSX

## TLDR; nearly copy and paste commands:

### Step 0 - Checking the dependencies

- [`docker`][docker]
- [`libvirt/virt-manager/qemu`][qemu]
- [Wayland][wayland] session (I'm using [Plasma6][plasma6] with wayland for this)

A copy and paste command from the [docker-osx][docker-osx] repository for all
dependencies other that KDE/wayland, and is listed below (~~I use Arch BTW~~)

```bash
sudo pacman -S qemu libvirt dnsmasq virt-manager bridge-utils flex bison iptables-nft edk2-ovmf
```

[docker]: https://docs.docker.com/desktop/install/linux-install/
[qemu]: https://wiki.archlinux.org/title/Virt-manager
[wayland]: https://wiki.archlinux.org/title/wayland
[plasma6]: https://wiki.archlinux.org/title/KDE

### Step 1 - Creating the base image

```bash title="create base image"
docker run -it
```

On running this command, you will be prompted with the OSX installer. Here, you
will need to use the disk erase utility for "erase" the largest disk detected.
Do not worry, the size is just and indication of the free space on the host
system, it will not actually wipe your disk, nor will it actually take up the
remaining free space.

Then follow the installation instructions, then you should arrive at an useable
GUI after following the instructions to completion.

### Step 2 - Extracting the generated image

Find the image file corresponding to the hard drive of the OSX.

```bash
sudo find /var/lib/docker -name "*.img"  -size +10G
```

You should look for a file path with something like:

```
/var/lib/docker/overlay2/<image_hash>/diff/home/arch/OSX-KVM/mac_hdd_ng.img
```

Copy this file to somewhere that you can manage more easily.

### Step 3 - All subsequent runs

```bash showLineNumber=10  title="First run" hl={2-4,6}
docker run -it \
    -p 50922:10022 \
    -e GENERATE_UNIQUE=true \
    -e DISPLAY=":1" -e QT_QPA_PLATFORM=wayland -e XDG_RUNTIME_DIR=/tmp -e GDK_BACKEND=wayland -e CLUTTER_BACKEND=wayland \
    -e MASTER_PLIST_URL='https://raw.githubusercontent.com/sickcodes/osx-serial-generator/master/config-custom-sonoma.plist' \
    sickcodes/docker-osx:naked
```

In particular, notice the additional mount of the image file, and the new
`naked` tag for the docker image. All subsequent runs will update the OSX image
file, allow for your session to be effectively persistent.

## Some additional information

The main reason for this write-up is the instructions on the [project
repository][docker-osx] assumes the host system uses X11. The instructions for
wayland can be found in the scattered issues page, but has yet to be updated on
the main page (wayland only became the "default" very recently on most desktop
environments). This write is for my own mentally offloading the record of the
instruction that worked for me on my system. As far as I know, the only
difference between the commands on wayland the command are the lines containing
display settings:

```bash
    -v $XDG_RUNTIME_DIR/$WAYLAND_DISPLAY:/tmp/$WAYLAND_DISPLAY \
    -e WAYLAND_DISPLAY="${WAYLAND_DISPLAY:-wayland-0}" \
    -e DISPLAY=":1" -e QT_QPA_PLATFORM=wayland -e XDG_RUNTIME_DIR=/tmp -e GDK_BACKEND=wayland -e CLUTTER_BACKEND=wayland \
```

Substitute the above to:

```bash
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    -e "DISPLAY=${DISPLAY:-:0.0}" \
```

When running on X11 systems.
