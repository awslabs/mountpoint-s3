# FUSE (Filesystem in Userspace) for Rust

![CI](https://github.com/cberner/fuser/actions/workflows/ci.yml/badge.svg)
[![Crates.io](https://img.shields.io/crates/v/fuser.svg)](https://crates.io/crates/fuser)
[![Documentation](https://docs.rs/fuser/badge.svg)](https://docs.rs/fuser)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/cberner/fuser/blob/master/LICENSE.md)
[![dependency status](https://deps.rs/repo/github/cberner/fuser/status.svg)](https://deps.rs/repo/github/cberner/fuser)

## About

**FUSE-Rust** is a [Rust] library crate for easy implementation of [FUSE filesystems][FUSE for Linux] in userspace.

FUSE-Rust does not just provide bindings, it is a rewrite of the original FUSE C library to fully take advantage of Rust's architecture.

This library was originally forked from the [`fuse` crate](https://github.com/zargony/fuse-rs) with the intention
of continuing development. In particular adding features from ABIs after 7.19

## Documentation

[FUSE-Rust reference][Documentation]

## Details

A working FUSE filesystem consists of three parts:

1. The **kernel driver** that registers as a filesystem and forwards operations into a communication channel to a userspace process that handles them.
1. The **userspace library** (libfuse) that helps the userspace process to establish and run communication with the kernel driver.
1. The **userspace implementation** that actually processes the filesystem operations.

The kernel driver is provided by the FUSE project, the userspace implementation needs to be provided by the developer. FUSE-Rust provides a replacement for the libfuse userspace library between these two. This way, a developer can fully take advantage of the Rust type interface and runtime features when building a FUSE filesystem in Rust.

Except for a single setup (mount) function call and a final teardown (umount) function call to libfuse, everything runs in Rust, and on Linux these calls to libfuse are optional. They can be removed by building without the "libfuse" feature flag.

## Dependencies

FUSE must be installed to build or run programs that use FUSE-Rust (i.e. kernel driver and libraries. Some platforms may also require userland utils like `fusermount`). A default installation of FUSE is usually sufficient.

To build FUSE-Rust or any program that depends on it, `pkg-config` needs to be installed as well.

### Linux

[FUSE for Linux] is available in most Linux distributions and usually called `fuse` or `fuse3` (this crate is compatible with both). To install on a Debian based system:

```sh
sudo apt-get install fuse
```

Install on CentOS:

```sh
sudo yum install fuse
```

To build, FUSE libraries and headers are required. The package is usually called `libfuse-dev` or `fuse-devel`. Also `pkg-config` is required for locating libraries and headers.

```sh
sudo apt-get install libfuse-dev pkg-config
```

```sh
sudo yum install fuse-devel pkgconfig
```

### macOS

Installer packages can be downloaded from the [FUSE for macOS homepage][FUSE for macOS]. This is the *kernel* part that needs to be installed always.

#### To install using Homebrew

```sh
brew install macfuse
```

#### To install using Nix

``` sh
nix-env -iA nixos.osxfuse
```

And `pkg-config` (required for building):

``` sh
nix-env -iA nixos.pkg-config
```

When using `nix` it is required that you specify `PKG_CONFIG_PATH` environment variable to point at where `osxfuse` is installed:

``` sh
export PKG_CONFIG_PATH=${HOME}/.nix-profile/lib/pkgconfig
```

### FreeBSD

Install packages `fusefs-libs` and `pkgconf`.

```sh
pkg install fusefs-libs pkgconf
```

## Usage

Put this in your `Cargo.toml`:

```toml
[dependencies]
fuser = "0.7"
```

To create a new filesystem, implement the trait `fuser::Filesystem`. See the [documentation] for details or the `examples` directory for some basic examples.

## To Do

Most features of libfuse up to 3.10.3 are implemented. Feel free to contribute. See the [list of issues][issues] on GitHub and search the source files for comments containing "`TODO`" or "`FIXME`" to see what's still missing.

## Compatibility

Developed and tested on Linux. Tested under [Linux][FUSE for Linux], [macOS][FUSE for macOS] (up to ABI 7.19) and [FreeBSD][FUSE for FreeBSD] using stable [Rust] (see CI for details).

## Contribution

Fork, hack, submit pull request. Make sure to make it useful for the target audience, keep the project's philosophy and Rust coding standards in mind. For larger or essential changes, you may want to open an issue for discussion first. Also remember to update the [Changelog] if your changes are relevant to the users.

[Rust]: https://rust-lang.org
[Homebrew]: https://brew.sh
[Changelog]: https://keepachangelog.com/en/1.0.0/

[FUSE-Rust]: https://github.com/cberner/fuser
[issues]: https://github.com/cberner/fuser/issues
[Documentation]: https://docs.rs/fuser

[FUSE for Linux]: https://github.com/libfuse/libfuse/
[FUSE for macOS]: https://osxfuse.github.io
[FUSE for FreeBSD]: https://wiki.freebsd.org/FUSEFS
