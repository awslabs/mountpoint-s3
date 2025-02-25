## Fork of fuser for Mountpoint

This is a fork of the excellent [`fuser`](https://github.com/cberner/fuser) Rust crate for FUSE bindings, with some Mountpoint-specific changes to improve performance of concurrent operations. We'll be working to upstream these changes soon.

### Fork Maintenance

This fork should be maintained in the `fuser/fork` branch of the [awslabs/mountpoint-s3 repository on GitHub](https://github.com/awslabs/mountpoint-s3/tree/main/vendor/fuser).

#### Sync with the origin

To pull in new changes from upstream, you should fetch changes from the original upstream and rebase them locally.

1. Add a new remote if haven't done it already `git remote add fuser https://github.com/cberner/fuser.git`
2. Fetch from the remote `git fetch fuser`
3. List all the FUSER's tags `git tag -l | grep v`, it'll output all of the FUSER versions like `v0.15.1`. Select the version that you'd want to sync with (latest one by default)
4. **Important** Next step implies history change, so at this point we need to make sure that we have a snapshot of the current state of `fuser/fork` branch. It must be a tag, e.g. `fuser-fork-<version>` containing the head commit. We assume we have it since we supposed to be following this runbook during the previous sync.
    1. Create a new branch from `fuser/fork`, `git rebase v0.15.1 -i` there and pick our commits which we'd like to put on top of the target tag (all of the commits by default)
    2. Once rebase is finished and all the possible conflicts (at least in `Cargo.toml`) are solved bump the fork's version and commit the change. Original version is not equal to fork's version, but we have to bump either major or patch part of it depending on what's changed in the original
5. We might want to create a "read-only" PR from the rebased branch with `awslabs:fuser/fork` as the base branch. This PR should never get merged as it'll produce a new commit, but this is a good way for us to have a collaborative consensus on what we're pulling in. After the PR is reviewed it needs to be closed
> *Note* If we're sure what we're doing the PR step can be skipped and we can force push rebased branch into `fuser/fork`
6. After PR is approved or changes pushed directly to `awslabs:fuser/fork` we need to create a tag for persisting the branch history.
    1. Create a new tag with descriptive name containing the currently used fork version, e.g `git tag fuser-fork-0.2.0`.
    2. Push the created tag to remote `git push upstream fuser-fork-0.2.0`.
    3. Make sure it's there `git ls-remote --tags upstream "refs/tags/fuser-fork-0.2.0"`.
It should produce something like `bc31e4d2c2f4601d51b9f0ec37159ee515280253 refs/tags/fuser-fork-0.2.0`
7. Once `fuser/fork` is in the desired state and the tag is ready we can consume the change in the `main` branch
    1. `git checkout main`
    2. Pull in the changes from upstream including submodules `git pull upstream main --recurse-submodules` and update the submodule `git submodule update --remote mountpoint-s3-fuser`.
> We can avoid adding `--recurse-submodules` argument all the time by telling git to update submodules on every pull `git config set submodule.recurse true`

    1. Since we changed the `fuser/fork` branch and `mountpoint-s3-fuser` refers to it submodule update should produce changes in `mountpoint-s3-fuser` index as well as in `Cargo.lock` if fork's version was changed. We need to commit these changes
    2. Make sure that everything works by running tests and/or other checks and create a PR to `main` branch
    3. Get the PR merged


#### PR to `fuser/fork`

Create a new branch from `fuser/fork`, commit changes and create a PR with `awslabs:fuser/fork` as the base branch.

The checks for this PR will be broken as they run against the `main` branch which has different structure (this is a point for improvement), but we still can have a consensus on what we're pulling in.
After PR is reviewed it needs to be closed (as will don't want to further modify the history via GitHub Merge) and the commit needs to be cherry-picked on top of `fuser/fork` branch `git cherry-pick <commit-hash>` and branch is pushed to remote.

After that we can push the updated local `fuser/fork` branch to remote.

#### Publishing the fork
We want to treat the fork as a standard crate inside our project and follow the existing [manual](https://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/PUBLISHING_CRATES.md) for publishing.

---

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
sudo apt-get install fuse3 libfuse3-dev
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

### macOS (untested)

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

Developed and tested on Linux. Tested under [Linux][FUSE for Linux] and [FreeBSD][FUSE for FreeBSD] using stable [Rust] (see CI for details).

## License

Licensed under [MIT License](LICENSE.md), except for those files in `examples/` that explicitly contain a different license.

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
