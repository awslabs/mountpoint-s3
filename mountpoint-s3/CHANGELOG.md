## v1.0.2 (September 22, 2023)

### Breaking changes
* No breaking changes.

### Other changes
* Building the Mountpoint release on CentOS 7. This gets us compatibilty back to glibc 2.17. This should let mountpoint run on OS which by default packages GCC and Clang that were too old to build CRT and run bindgen respectively in previous release. ([#517](https://github.com/awslabs/mountpoint-s3/pull/517))

* Updated the CRT submodules to the latest release which is one of the mountpoint-s3 dependencies. This majorly resolves the issue of mountpoint-s3 freeze when trying to upload files to s3 without knowing their full size at the time of upload and there are multiple such file to take time. ([#529](https://github.com/awslabs/mountpoint-s3/pull/529))

* Updated the HistogramFn in metrics to log failure rather than panic when size of file is too large for histogram value. With this change mountpoint-s3 continues to operate after recieving histogram value too large. For example, earlier when writing 50GiB of data to a file, mountpoint-s3 panicked due to an unexpected "ValueOutOfRangeResizeDisabled" error. ([#513](https://github.com/awslabs/mountpoint-s3/pull/513))

* Updated the prefetcher to cancel discarded tasks. With this change, prefetcher cancel unused GET requests, freeing up bandwidth for GETs that will be used to fulfill other mountpoint-s3 reads. ([#505](https://github.com/awslabs/mountpoint-s3/pull/505))

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
