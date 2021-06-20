# FUSE for Rust - Changelog

## 0.9.0 - UNRELEASED
* Ensure that `Filesystem::destroy` is always called
* Remove request parameter to `Filesystem::destroy`
* Fix `MountOption::AllowRoot`. Previously using it resulted in a crash.

## 0.8.0 - 2021-06-11
* Deprecate `mount()`
* Remove `FileAttr.padding`. This field was added by mistake, and does nothing
* Fix crash when receiving an unknown FUSE operation type
* Minor performance optimizations

## 0.7.0 - 2021-01-10
* Support building with MacFuse 4.x on OSX
* Support configuring max_write & max_readahead via `KernelConfig` during `init`
* Support configuring filesystem timestamp granularity via `KernelConfig.set_time_granularity` during `init`
* Support requesting additional capability flags via `KernelConfig.add_capabilities` during `init`

## 0.6.0 - 2020-11-22
* Make `spawn_mount()` safe
* Change `flags` parameter of `create()`, `open()`, `opendir()`, `release()`, `releasedir()` to be signed, so that it matches
  libfuse and the associated constants in libc
* Change `flags` parameter of `setxattr()` to be signed, so that it matches libfuse
* Change `mask` parameter of `access()` to be signed, so that it matches libfuse and the associated constants in libc
* Change lock type parameter of `getlk()` and `setlk()` to be signed, so that it matches libfuse and the associated constants in libc
* Change atime & atime_now and mtime & mtime_now parameters of `setattr()` to make their relationship more obvious
* Add `lock_owner` and file `flags` parameters to `read()` and `write()`
* Add `umask` parameter to `mknod()`, `mkdir()` and `create()`
* Add `KernelConfig` parameter to `init()` to allow `Filesystem` to configure the kernel connection attributes
* Add support for `fallocate()`, `ioctl()`, `copy_file_range()`, and `lseek()`
* Add support for FUSE_BATCH_FORGET
* Add support for FUSE_READDIRPLUS
* Add support for FUSE_RENAME2
* Add FUSE_WRITE_KILL_PRIV flag for `write()`
* Add FUSE_WRITEBACK_CACHE flag
* Add FUSE_NO_OPEN_SUPPORT flag
* Add FUSE_PARALLEL_DIROPS flag
* Add FUSE_HANDLE_KILLPRIV flag
* Add FUSE_POSIX_ACL flag
* Add FUSE_ABORT_ERROR flag
* Add FUSE_NO_OPENDIR_SUPPORT flag
* Add FUSE_CACHE_SYMLINKS flag
* Add FUSE_EXPLICIT_INVAL_DATA flag
* Add FUSE_IOCTL_COMPAT_X32 flag
* Add FOPEN_CACHE_DIR flag
* Add FOPEN_STREAM flag
* Add FUSE_MAX_PAGES flag
* Add max_pages, and time_gran support to init code path (these are not currently configurable)
* Add support for ctime in `setattr()`
* Add support for timestamps before the unix epoch in `getattr()` and `setattr()`

## 0.5.0 - 2020-10-17

* Enable FUSE_BIG_WRITES for ABI >= 7.10
* Add FUSE_AUTO_INVAL_DATA constant
* Add ABI 7.20 to 7.31 feature flags. Support for these are incomplete.
* Add support for building with libfuse3
* Add support for building without libfuse/libfuse3 on Linux (i.e. there's now a pure Rust implementation of all features)
* Add `mount2()` with improved option API

## 0.4.1 - 2020-10-12

* Added new feature `serializable` that will enable serde serialization/deserialization for `FileType`, `FileAttr`

## 0.4.0 - 2020-06-18

* Forked as `fuser` crate, at https://github.com/cberner/fuser
* Add ATIME_NOW and MTIME_NOW support
* Add stubs for ioctl, fallocate, and poll for ABI 7.11

## 0.3.1 - 2017-11-08

* Offsets to `read`, `write` and `readdir` methods are signed integers now (breaking change, sorry)
* Link `libosxfuse` on macOS, `libfuse` on all other systems

## 0.3.0 - 2017-01-06

* Fix extended attribute handling (`getxattr` and `listxattr` methods changed and `ReplyXattr` was added)
* `mount` now also returns a `Result` since it may fail if the session fails to run
* Filenames are now passed as `&OsStr` in the filesystem interface
* Removed publishing of documentation on GitHub pages. Docs are now available on https://docs.rs/fuse
* Add `FileType::Socket`

## 0.2.8 - 2016-07-31

* Documentation of releases is build by CI now and made available at https://zargony.github.io/rust-fuse
* Fix `unmount` on BSD systems
* Simplified `libfuse` detection with `pkg-config`
* `ReplyDirectory::sized` was removed since it was impossible to use it safely

## 0.2.7 - 2015-09-08

* Update to latest Rust stable - no longer needs nightly Rust
* A filesystem implementation doesn't need to be `Send` anymore to be mounted synchronously
* A filesystem implementation doesn't need to be 'static anymore to be mounted asynchronously
* CI tests are covering nightly, beta and stable Rust under OSX and Linux now

## 0.2.6 - 2015-04-23

* Update to latest Rust nightly
* Fix mounting of filesystems as non-root on Linux systems

## 0.2.5 - 2015-03-21

* Update to latest Rust nightly
* `unmount` returns a `Result` now since unmounting may fail internally
* Fix `unmount` on Linux systems
* Remove deprecated file types from interface (got rid of `std::old_io`)
* Introducing `FileType`

## 0.2.4 - 2015-02-22

* Update to latest Rust nightly
* `spawn_mount` returns a `Result` now since starting a new thread may fail
* Paths are now passed using `std::path::Path` (got rid of `std::old_path`)
* FUSE options are now passed as a slice of `OsStr` rather than a slice of bytes

## 0.2.3 - 2015-01-17

* Update to latest Rust nightly

## 0.2.2 - 2015-01-14

* Update to latest Rust nightly
* Ensure that `Reply` is `Send` to support asynchronous processing
* Add CI testing under Linux

## 0.2.1 - 2015-01-07

* Update to latest Rust nightly
* Use `build.rs` and `pkg-config` to discover `libfuse` / `libosxfuse`

## 0.2.0 - 2014-12-25

Initial release

## pre-0.2.0 - 2013-10-03

No versioning (based on make, cargo and crates.io didn't exist yet)
