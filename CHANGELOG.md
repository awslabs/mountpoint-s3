# FUSE for Rust - Changelog

## 0.4.0 - UNRELEASED

* Forked as `fuser` crate, at https://github.com/cberner/fuser
* Split into `fuse`, `fuse-abi` and `fuse-sys` crate

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
