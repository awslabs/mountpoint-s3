# FUSE (Filesystem in Userspace) for Rust

[![Build Status](https://travis-ci.com/cberner/fuser.svg?branch=master)](https://travis-ci.com/cberner/fuser)
[![Crates.io](https://img.shields.io/crates/v/fuser.svg)](https://crates.io/crates/fuser)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cberner/fuser/blob/master/LICENSE.md)

## About

[Rust](http://rust-lang.org/) library for easy implementation of [FUSE](http://osxfuse.github.io) filesystems in userspace.

This library does not just provide bindings, it is actually an improved rewrite of the original FUSE C library to fully take advantage of Rust's architecture.

This library was originally forked from the [`fuse` crate](https://github.com/zargony/fuse-rs)

## Documentation

[FUSE-Rust reference](https://docs.rs/fuser)

## Details

A working FUSE filesystem consists of three parts:

1. The kernel driver that registers as a filesystem and forwards operations into a communication channel to a userspace process that handles them.
1. The userspace library (libfuse) that helps the userspace process to establish and run communication with the kernel driver.
1. The userspace implementation that actually processes the filesystem operations.

The kernel driver is provided by the FUSE project, the userspace implementation needs to be provided by the developer. This Rust library provides a replacement for the libfuse userspace library between these two. This way, a developer can fully take advantage of the Rust type interface and runtime features when building a FUSE filesystem in Rust.

Except for a single setup (mount) function call and a final teardown (umount) function call to libfuse, everything runs in Rust.

## Dependencies

To run a program that mounts a FUSE filesystem, the target system needs FUSE (OSXFUSE on macOS) to be properly installed (i.e. kernel driver and libraries. Some platforms may also require userland utils like `fusermount`). A default installation of package `fuse` on Linux, `fusefs-libs` on FreeBSD, or `OSXFUSE` on macOS is usually sufficient.

To build, the host system needs FUSE libraries and headers installed. On Linux, the header package is usually called `libfuse-dev`. On FreeBSD and macOS, `fusefs-libs`/`OSXFUSE` installs everything that's needed. The build process also requires `pkg-config` to locate headers and libraries.

## Usage

Put this in your `Cargo.toml`:

```toml
[dependencies]
fuser = "0.4"
```

To create a new filesystem, implement the trait `Filesystem`. Filesystem operations from the kernel are dispatched to the methods of the `Filesystem` trait. Most methods get a `reply` parameter that must be used to eventually answer the request. All methods have default implementations that reply with neutral answers, so if you implement no method at all, you still get a mountable filesystem that does nothing.

To actually mount the filesystem, pass an object that implements `Filesystem` and the path of an (existing) mountpoint to the `mount` function. `mount` will not return until the filesystem is unmounted.

To mount a filesystem and keep running other code, use `spawn_mount` instead of `mount`. `spawn_mount` spawns a background thread to handle filesystem operations while the filesystem is mounted. It returns a handle that should be stored to reference the mounted filesystem. If the handle is dropped, the filesystem is unmounted.

To unmount a filesystem, use any arbitrary unmount/eject method of your OS.

See the examples directory for some basic examples.

## To Do

There's still a lot of stuff to be done. Feel free to contribute.

- Interrupting a filesystem operation isn't handled yet.
- An additional more high level API would be nice. It should provide pathnames instead inode numbers and automatically handle concurrency and interruption (like the FUSE C library's high level API).

In general, see the [list of issues](https://github.com/cberner/fuser/issues) on GitHub and search the source files for comments containing "TODO" or "FIXME" to see what's still missing.

## Compatibility

Developed and tested on macOS with [OSXFUSE](http://osxfuse.github.io) and on Linux with [FUSE](http://fuse.sourceforge.net), using stable, beta and nightly [Rust versions](http://www.rust-lang.org/install.html) (see [Travis CI](https://travis-ci.org/cberner/fuser) for details).

[FreeBSD](https://wiki.freebsd.org/FuseFilesystem) also works, but is not tested in CI.

## Contribution

Fork, hack, submit pull request. Make sure to make it useful for the target audience, keep the project's philosophy and Rust coding standards in mind. For larger or essential changes, you may want to open an issue for discussion first. Also remember to update the [Changelog](https://keepachangelog.com/en/1.0.0/) if your changes are relevant to the users.
