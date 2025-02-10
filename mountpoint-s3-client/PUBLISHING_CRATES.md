# Publishing new releases of the client crates

This document guides maintainers in releasing new versions of [`mountpoint-s3-client` on crates.io](https://crates.io/crates/mountpoint-s3-client).

## Preparing the release

First, confirm that for each crate:

* `CHANGELOG.md` lists the relevant changes since the latest released version,
* `Cargo.toml` sets the version that you intend to publish.

Second, prepare a new commit to update each `CHANGELOG.md` file by adding a header for the new release with
the current date under the `## Unreleased` header. E.g.:

```
## v0.10.0 (October 17, 2024)
```

Once ready, check everything still compiles and publish a pull request.
After that is merged, the next step is to publish the new crates.

## Publishing

First, ensure you have the latest commit on main which was just merged.

    git switch main && git pull upstream main

If you haven't already, you should login to crates.io.
Maintainers' GitHub accounts are authorized to publish new crate versions.

    cargo login

The next steps should be completed for each crate that is being updated in the following order:

- mountpoint-s3-crt-sys
- mountpoint-s3-crt
- mountpoint-s3-client

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

Once these steps have been completed for all crates that need to be updated, you're done.

## Update to next versions

After all the crates have been published, a commit should be prepared which increments the patch version number of each crate,
in its `Cargo.toml`, as well as in the crates depending on it.

E.g. if `mountpoint-s3-crt-sys-0.99.0` was just published, `mountpoint-s3-crt-sys/Cargo.toml` should be updated to `version = "0.99.1"`
and the corresponding entry in `mountpoint-s3-crt/Cargo.toml` should be updated to
`mountpoint-s3-crt-sys = { path = "../mountpoint-s3-crt-sys", version = "0.99.1" }`.

Once ready, check everything still compiles and publish a pull request.
