# CRT Submodules

Mountpoint for Amazon S3 imports the required [AWS Common Runtime (CRT)](https://docs.aws.amazon.com/sdkref/latest/guide/common-runtime.html) libraries through git submodules, located under the `mountpoint-s3-crt-sys/crt` directory.

## Update Submodules

The CRT submodules can be updated by following these steps:

1. Update every submodule to the latest tagged release. E.g. by running:

   ```sh
   git submodule foreach 'git fetch -q --tags && git checkout --recurse-submodules `git tag -l --sort=-v:refname | head -1`'
   ```

1. Review the commit history, in particular for `aws-c-s3`, looking for changes that may affect `mountpoint-s3` (bug fixes, API changes, etc.). E.g.:

   ```sh
   git diff --submodule
   ```

1. Check the whole project builds successfully: `cargo build`.
   This will build both Mountpoint filesystem as well as the client components.

1. Optionally run the integration tests for both `mountpoint-s3` and `mountpoint-s3-client`.
   You will need a number of AWS resources created in your account to run the integration tests.


1. Stage and commit the changes:

   ```sh
   git add mountpoint-s3-crt-sys/crt
   git commit --signoff -m "Update CRT submodules to latest releases"
   ```

## Check Current Version

In order to check which released versions are checked out for each submodules, the following command can be used:

```sh
git submodule foreach -q 'echo $name `git describe --tags`'
```

## Crate size

As the AWS CRT project evolves, the size of the `mountpoint-s3-crt-sys` crate can grow or shrink.
We manage its C-based dependencies with Git submodules, which can include all sorts of files we don't control.

Inside the cargo manifest for that package,
you can find an `excludes` entry which lists a number of patterns for excluding files
from the compressed archive uploaded to [crates.io](https://crates.io/).
We exclude files that we know won't be used, like files within `.github/` paths or PDFs.

If the crate grows too large, we can add new patterns to this list.
You can view the files included in the archive using `cargo package -p mountpoint-s3-crt-sys --list`.
