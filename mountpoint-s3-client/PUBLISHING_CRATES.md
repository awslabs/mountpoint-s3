# Publishing new releases of the client crates

This document guides maintainers in releasing new versions of [`mountpoint-s3-client` on crates.io](https://crates.io/crates/mountpoint-s3-client).

## Preparing the release

First, a commit should be prepared and merged which updates the versions of each of the crates that are changing
as well as a change log for each detailing what has been updated.
You can refer to the following pull request as an example of this commit: https://github.com/awslabs/mountpoint-s3/pull/657.

The change log should have been updated when the changes were made, but please verify this.

The `Cargo.toml` manifest for each crate that will have a new version should be updated with the new version number.
Additionally, crates which depend on the updated crates should have their dependencies updated.

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
