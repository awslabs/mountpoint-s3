# Publishing new releases of the `mountpoint-s3-*` crates

This document guides maintainers in releasing new versions of the
[`mountpoint-s3-*` crates on crates.io](https://crates.io/search?q=mountpoint-s3).

We currently publish 5 crates:

* A set of 3 crates for Mountpoint S3 Client (typically released together):

  * [`mountpoint-s3-client`](https://crates.io/crates/mountpoint-s3-client)
  * [`mountpoint-s3-crt`](https://crates.io/crates/mountpoint-s3-crt)
  * [`mountpoint-s3-crt-sys`](https://crates.io/crates/mountpoint-s3-crt-sys)

* Mountpoint fork of the [fuser](https://crates.io/crates/fuser) crate:
  * [`mountpoint-s3-fuser`](https://crates.io/crates/mountpoint-s3-fuser)

* Core Mountpoint file system crate:
  * [`mountpoint-s3-fs`](https://crates.io/crates/mountpoint-s3-fs)

The remaining package in the repository, `mountpoint-s3` is used for the binary release of Mountpoint
and is not currently published (except as a [placeholder](https://crates.io/crates/mountpoint-s3)).

## When to release

Releases of Mountpoint, or of the `mountpoint-s3-client` crates, are not on a fixed schedule, but rather
triggered by ad-hoc decisions based on the set of new features or bug fixes that have completed development.

However, when releasing a new version of Mountpoint, or any of its crates, we must also release all its
dependencies, **as long as they contain any changes**. Relevant crates must be published in reverse dependency
order. For reference, this is the dependency tree of the crates in the repository:

* `mountpoint-s3` (binary release)
  * `mountpoint-s3-fs`
    * `mountpoint-s3-client`
      * `mountpoint-s3-crt`
        * `mountpoint-s3-crt-sys`
    * `mountpoint-s3-fuser`
  * `mountpoint-s3-client`
    * [..]

Before releasing a new Mountpoint version, consider all dependencies in the following order:

* `mountpoint-s3-crt-sys`
* `mountpoint-s3-crt`
* `mountpoint-s3-client`
* `mountpoint-s3-fuser`
* `mountpoint-s3-fs`

If only releasing `mountpoint-s3-client`, for example, just consider its dependencies
(in the same order):

* `mountpoint-s3-crt-sys`
* `mountpoint-s3-crt`

In any case, follow the instructions below for each crate in order to determine if it needs
a new release and to publish it to [crates.io](https://crates.io).

## Preparing the release

First, confirm that for each crate:

* `CHANGELOG.md` lists the relevant changes since the latest released version,
* `Cargo.toml` sets the version that you intend to publish.

If `CHANGELOG.md` does not report any entries since the latest release, and the latter matches the version in
`Cargo.toml`, **the crate should not contain any changes and there should be no need to publish a new version**.

Second, prepare a new commit to update each `CHANGELOG.md` file by adding a header for the new release with
the current date under the `## Unreleased` header. E.g.:

```
## v0.10.0 (October 17, 2024)
```

Once ready, check everything still compiles and publish a pull request.
After that is merged, the next step is to publish the new crates.

## Publishing

First, ensure you have the latest commit on main which was just merged.

```
git switch main && git pull upstream main
```

Next, verify that publishing in `--dry-run` mode succeeds (there should be no warnings in logs and versions match expectations):

```
cargo publish --workspace --dry-run
```

If you haven't already, you should login to crates.io.
Maintainers' GitHub accounts are authorized to publish new crate versions.

```
cargo login
```

The next steps should be completed for each crate that is being updated in the following order (see discussion above):

* `mountpoint-s3-crt-sys`
* `mountpoint-s3-crt`
* `mountpoint-s3-client`
* `mountpoint-s3-fuser`
* `mountpoint-s3-fs`

For each crate replacing the crate and version number where applicable:

1. Create a new Git tag for this crate and version.

   ```
   git tag mountpoint-s3-crt-sys-9.9.9
   ```

2. Publish the new crate version.

   ```
   cargo publish -p mountpoint-s3-crt-sys
   ```

3. If successful, push the tag.

   ```
   git push upstream mountpoint-s3-crt-sys-9.9.9
   ```

Once these steps have been completed for all crates that need to be updated, you're done. You can check the new versions on crates.io:

* [mountpoint-s3-crt-sys](https://crates.io/crates/mountpoint-s3-crt-sys)
* [mountpoint-s3-crt](https://crates.io/crates/mountpoint-s3-crt)
* [mountpoint-s3-client](https://crates.io/crates/mountpoint-s3-client)
* [mountpoint-s3-fuser](https://crates.io/crates/mountpoint-s3-fuser)
* [mountpoint-s3-fs](https://crates.io/crates/mountpoint-s3-fs)
