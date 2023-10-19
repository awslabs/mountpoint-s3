## Unreleased

### Breaking changes
* Mountpoint will now complete file uploads at `close` time, and `close` will return an error if the upload was not successful. Before this change, `close` did not wait for the upload to complete, which could cause confusing results for applications that try to read a file they just wrote. ([#526](https://github.com/awslabs/mountpoint-s3/pull/526))

### Other changes
* Fixed a bug that caused poor performance for sequential reads in some cases ([#488](https://github.com/awslabs/mountpoint-s3/pull/488)). A workaround we have previously shared for this issue (setting the `--max-threads` argument to `1`) is no longer necessary with this fix. ([#556](https://github.com/awslabs/mountpoint-s3/pull/556))

## v1.0.2 (September 22, 2023)

### Breaking changes
* No breaking changes.

### Other changes
* New Mountpoint releases are built on CentOS 7 instead of Amazon Linux 2. This lowers the minimum requirement to run Mountpoint to glibc 2.17 or newer. ([#517](https://github.com/awslabs/mountpoint-s3/pull/517))
* Fixed a bug where writing to a file for longer than five minutes will result in a panic. ([#513](https://github.com/awslabs/mountpoint-s3/pull/513))
* Updated the prefetcher to cancel discarded tasks and free up some unused resources on random read workloads. ([#505](https://github.com/awslabs/mountpoint-s3/pull/505))
* Fixed an issue with internal resource cleanup which could lead to Mountpoint hanging after a high number of file uploads. ([#529](https://github.com/awslabs/mountpoint-s3/pull/529))

## v1.0.1 (August 31, 2023)

### Breaking changes
* The permissions CLI flags `--allow-other` and `--allow-root` are now mutually exclusive. `--allow-other` implies `--allow-root`, and so should be used if you want the effect of both flags. ([#475](https://github.com/awslabs/mountpoint-s3/pull/475))

### Other changes
* Added new metrics for object writes, IO sizes, file handles, and directory operations. The existing `fuse.bytes_read` metric has been renamed to `fuse.total_bytes` and is now keyed by operation (`read`/`write`). ([#461](https://github.com/awslabs/mountpoint-s3/pull/461))
* When running in background mode (the default), Mountpoint now correctly closes standard input and output once mounting succeeds. This should fix issues with scripts that try to fork Mountpoint as a background process, which may previously have hung. ([#489](https://github.com/awslabs/mountpoint-s3/pull/489))
* Mountpoint can now read objects in the S3 Glacier Flexible Retrieval and S3 Glacier Deep Archive storage classes if they have been restored. Mountpoint cannot issue restore requests, but if you issue a restore request separately, the restored objects will be readable. ([#467](https://github.com/awslabs/mountpoint-s3/pull/467))

## v1.0.0 (August 8, 2023)

### Breaking changes

* Logging to disk is now disabled by default.
  Logs will no longer be written to `$HOME/.mountpoint-s3/` and should be configured using `--log-directory <DIRECTORY>`.
* Bucket options of `--virtual-addressing` is now removed and `--path-addressing` is changed to `--force-path-style`.
  If `--force-path-style` is not provided, addressing style of endpoint will be resolved automatically.
* The `--thread-count` option has been removed and replaced with `--max-threads` which sets the maximum
  number of threads the FUSE daemon will dynamically spawn to handle requests.

### Other changes

* New bucket options of `--transfer-acceleration` and `--dual-stack` have been added.
* ARN is now also supported as <BUCKET_NAME> to mount the corresponding resource using Mountpoint.

## v0.4.1 (August 4, 2023)

An interim release of the Mountpoint alpha.

## v0.4.0 (August 2, 2023)

An interim release of the Mountpoint alpha.

## v0.3.0 (June 30, 2023)

Initial change log entry.
