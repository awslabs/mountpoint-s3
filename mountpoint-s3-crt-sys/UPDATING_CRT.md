# CRT Submodules

Mountpoint for Amazon S3 imports the required [AWS Common Runtime (CRT)](https://docs.aws.amazon.com/sdkref/latest/guide/common-runtime.html) libraries through git submodules, located under the `mountpoint-s3-crt-sys/crt` directory.

## Update Submodules

The CRT submodules can be updated by following these steps:

1. Update every submodule to the latest tagged release. E.g. by running:

   ```sh
   git submodule foreach 'git fetch -q --tags && git checkout --recurse-submodules `git tag -l --sort=-v:refname | head -1`'
   ```

2. Review the commit history, in particular for `aws-c-s3`, looking for changes that may affect `mountpoint-s3` (bug fixes, API changes, etc.). E.g.:

   ```sh
   git diff --submodule mountpoint-s3-crt-sys/crt/aws-c-s3 
   ```

3. Build and test `mountpoint-s3`.

4. Stage and commit the changes:

   ```sh
   git commit -a -s -m "Update CRT submodules to latest releases"
   ```

## Check Current Version

In order to check which released versions are checked out for each submodules, the following command can be used:

```sh
git submodule foreach -q 'echo $name `git describe --tags`'
```
