# Rust FUSE - Filesystem in Userspace

## About
[Rust](http://rust-lang.org/) library for easy implementation of [FUSE](http://osxfuse.github.io) filesystems in userspace.

This library does not just provide bindings, it is actually an improved rewrite of the original FUSE C library to fully take advantage of Rust's architecture.

## Details

A working FUSE filesystem consists of three parts:

1. The kernel driver that registers as a filesystem and forwards operations into a communication channel to a userspace process that handles them.
1. The userspace library (libfuse) that helps the userspace process to establish and run communication with the kernel driver.
1. The userspace implementation that actually processes the filesystem operations.

The kernel driver is provided by the FUSE project, the userspace implementation needs to be provided by the developer. This Rust library provides a replacement for the libfuse userspace library between these two. This way, a developer can fully take advantage of the Rust type interface and runtime features when building a FUSE filesystem in Rust.

Except for a single setup (mount) function call and a final teardown (umount) function call to libfuse, everything runs in Rust.

## How to

To create a new filesystem, implement the trait `Filesystem`. All methods have default implementations that do nothing, so if you implement no method at all, you still get a mountable filesystem that does nothing.

To actually mount the filesystem, pass an object that implements `Filesystem` and the path of the mountpoint to the `mount` function.

See the examples directory for some basic examples.

## To Do

There's still a lot of stuff to be done. Feel free to contribute.

- Currently the mount function blocks until the filesystem is unmounted externally. Actually it should run in a background task and return some handle that provides a way to unmount. It should also unmount if the process terminates.
- The session run loop calls readv which can block the scheduler. It either needs to be run on it own single thread scheduler or should be ported to event based I/O of the new Rust rtio. Hopefully it'll support reading from a fd. It Probably won't support indirect writes (via iovecs), so it's open how data can be composed to a single write without copying.
- Interrupting an operation isn't handled yet.
- Posix lock operations aren't properly dispatched yet. However this is rarely needed, since the kernel provides local locks automatically and there operations are only used if you want to synchronize with something else.
- Using `fuse_*_out` in the results of `Filesystem` methods doesn't look right. These native structs should be hidden from the public interface.

In general, search for "TODO" or "FIXME" in the source files to see what's still missing.

## Compatibility

Developed and tested on a Mac with [OSXFUSE](http://osxfuse.github.io), but it should (maybe with minor adjustments) also work with [FUSE on Linux](http://fuse.sourceforge.net) and [FUSE on FreeBSD](https://wiki.freebsd.org/FuseFilesystem).
