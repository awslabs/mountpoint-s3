# Third-party submodules

Mountpoint for Amazon S3 imports the repositories in this directory as git submodules. The CRT submodules are in `mountpoint-s3-crt-sys/crt` instead. [UPDATING_CRT.md](../mountpoint-s3-crt-sys/UPDATING_CRT.md) describes how to update them.

## aws-s3-transfer-manager-rs

[aws-s3-transfer-manager-rs](https://github.com/awslabs/aws-s3-transfer-manager-rs) provides `s3-mock-server`, the local S3 server that the tests of `mountpoint-s3-fs` run against. Because the crate is not published on crates.io, `mountpoint-s3-fs/Cargo.toml` declares it as a path dev-dependency into this submodule. The submodule is pinned to a release tag of the repository.

The submodule can be updated by following these steps:

1. Check out the latest release tag. E.g. by running, from the root of the repository:

   ```sh
   (cd third_party/aws-s3-transfer-manager-rs && git fetch -q -f --tags && git checkout `git tag -l 'release-*' --sort=-v:refname | head -1`)
   ```

2. Update the tag in the comment on the `s3-mock-server` dependency in `mountpoint-s3-fs/Cargo.toml`.

3. Build the tests of `mountpoint-s3-fs`, which updates `Cargo.lock` with the dependencies of the new `s3-mock-server`: `cargo test -p mountpoint-s3-fs --no-run`.

4. Check the dependencies with `cargo deny --all-features check`. If `s3-mock-server` no longer depends on a crate that an advisory in `deny.toml` is ignored for, remove the ignore.

5. Run the tests of `mountpoint-s3-fs`, including the FUSE tests: `cargo nextest run -p mountpoint-s3-fs --features fuse_tests`.
