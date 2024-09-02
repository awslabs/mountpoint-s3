## Unreleased

### Other changes

* Fix an issue where `credential_process` field would not be picked up correctly when using `source_profile`. ([awslabs/aws-c-auth#245](https://github.com/awslabs/aws-c-auth/pull/245))
  <!-- TODO: Write automated test for this. https://github.com/awslabs/mountpoint-s3/issues/927 -->
* Fix an issue where `credential_process` field would not be picked up correctly when using `--profile <AWS_PROFILE>`. ([awslabs/aws-c-auth#245](https://github.com/awslabs/aws-c-auth/pull/245))
  <!-- TODO: Manually test this. https://github.com/awslabs/mountpoint-s3/issues/389 -->

## v1.8.0

### New features

* Mountpoint now offers two new command-line arguments `--read-part-size <SIZE>` and `--write-part-size <SIZE>` which allow to specify different part sizes to be used when reading and writing respectively. ([#949](https://github.com/awslabs/mountpoint-s3/pull/949))

### Other changes

* Support added for providing `external_id` when defining AWS profiles in a config file. ([#962](https://github.com/awslabs/mountpoint-s3/pull/962))
* Fix issue where empty environment variables for STS web identity credentials could cause segmentation fault. ([#963](https://github.com/awslabs/mountpoint-s3/pull/963))

## v1.7.2 (June 17, 2024)

### Other changes

* Fix an issue where reading a file through Mountpoint could fail, even if the corresponding S3 GetObject request had succeeded. ([#917](https://github.com/awslabs/mountpoint-s3/pull/917))

## v1.7.1 (June 14, 2024)

### Breaking changes
* Mountpoint supports specifying KMS server-side encryption for new object uploads using the key ARN only. Mountpoint now validates the value provided with `--sse-kms-key-id` at mount time. This prevents an issue where Mountpoint could crash when uploading a file with KMS key identifiers other than the key ARN. ([#908](https://github.com/awslabs/mountpoint-s3/pull/908))

## v1.7.0 (June 6, 2024)

### New features
* Metadata caching can now be configured independently of data caching. When passing the `--metadata-ttl <seconds>` argument without also specifying `--cache <directory>`, Mountpoint will cache file metadata in memory for up to the given TTL, but will not cache object data. The `--metadata-ttl` argument also accepts two special values: `minimal` to enable only the minimal necessary caching, and `indefinite` to cache indefinitely. These modes can help accelerate workloads that touch many files but do not need to cache object data for re-use (for example, listing a directory and then reading each file within it once). ([#855](https://github.com/awslabs/mountpoint-s3/pull/855))

### Breaking changes
* The `--metadata-ttl 0` setting is no longer supported and will be removed in a future release. The new `--metadata-ttl minimal` has a similar effect, but behaves better when latency for S3 requests is high. ([#855](https://github.com/awslabs/mountpoint-s3/pull/855))
* When using the `--cache` flag, the default metadata TTL is now set to 60 seconds (`--metadata-ttl 60`) instead of 1 second. ([#855](https://github.com/awslabs/mountpoint-s3/pull/855))
* Mountpoint now uses [STS regionalized endpoints](https://docs.aws.amazon.com/sdkref/latest/guide/feature-sts-regionalized-endpoints.html) when assuming IAM roles configured in a CLI profile. If you specify a region in your CLI profile and want Mountpoint to use a role from that profile you have to make sure Mountpoint can access STS regionalized endpoints. This allows Mountpoint to assume an IAM role in regions outside of the `aws` partition. ([#877](https://github.com/awslabs/mountpoint-s3/pull/877))

### Other changes
* The checksum algorithm to use for uploads to S3 can now be chosen with the `--upload-checksums <ALGORITHM>` command-line argument. The only supported values in this release are `crc32c` (the default, and the existing behavior) and `off`, which disables including checksums in uploads. The `off` value allows uploads to S3 implementations that do not support [additional checksums](https://aws.amazon.com/blogs/aws/new-additional-checksum-algorithms-for-amazon-s3/). This option defaults to `off` when the bucket name is an S3 on Outposts bucket access point (either an ARN or a bucket alias). ([#849](https://github.com/awslabs/mountpoint-s3/pull/849))
* Fixed an issue where Mountpoint did not send the `Content-Length` header when creating multi-part uploads. ([#875](https://github.com/awslabs/mountpoint-s3/pull/875))
* Fixed an issue where Mountpoint could not assume an IAM role specified in a CLI profile with `EcsContainer` as a credential source. ([#875](https://github.com/awslabs/mountpoint-s3/pull/875))
* Added support for `AWS_ENDPOINT_URL` environment variable. ([#895](https://github.com/awslabs/mountpoint-s3/pull/895))

## v1.6.0 (April 11, 2024)

### New features
* Mountpoint for Amazon S3 now supports specifying an AWS Key Management Service (AWS KMS) key for server-side encryption with KMS (SSE-KMS) when mounting an S3 bucket or prefix. ([#839](https://github.com/awslabs/mountpoint-s3/pull/839))

### Breaking changes
* No breaking changes.

### Other changes
* Mountpoint now retries S3 requests up to a total of 10 attempts (up from 4), which should make file operations more robust to transient failures or throttling. The maximum number of attempts can be overridden by setting the `AWS_MAX_ATTEMPTS` environment variable. ([#830](https://github.com/awslabs/mountpoint-s3/pull/830))
* Fix an issue where Mountpoint could become unresponsive after opening too many files in write mode. ([#832](https://github.com/awslabs/mountpoint-s3/pull/832))
* Add support for `rewinddir` by restarting `readdir` if offset is zero. ([#825](https://github.com/awslabs/mountpoint-s3/pull/825))

## v1.5.0 (March 7, 2024)

### New features
* When caching is enabled, Mountpoint also remembers when objects do **not** exist, in order to reduce repeated lookups. ([#696](https://github.com/awslabs/mountpoint-s3/pull/696))

### Other changes
* Cancel S3 requests when dropped. Addresses an issue where the prefetcher could keep streaming up to 2GB of data that would never be used. ([#794](https://github.com/awslabs/mountpoint-s3/pull/794))
* Improve read throughput in more non-sequential access patterns by better accounting for the progress of in-flight prefetch requests. ([#797](https://github.com/awslabs/mountpoint-s3/pull/797))
* Stop limiting the number of connections based on the number of known IPs when connecting to S3. Improves maximum throughput on S3 Express. ([#796](https://github.com/awslabs/mountpoint-s3/pull/796))

## v1.4.1 (February 16, 2024)

### Other changes
* Fix an issue where read file handles could be closed too early, leading to bad file descriptor errors on subsequent reads. As a consequence of this fix, opening an existing file to overwrite it **immediately** after closing a read file handle may occasionally fail with an "Operation not permitted" error. In such cases, Mountpoint logs will also report that the file is "not writable while being read". ([#751](https://github.com/awslabs/mountpoint-s3/pull/751))
* File handles are no longer initialized lazily. Lazy initialization was introduced in version 1.4.0 but is reverted in this change. If upgrading from 1.4.0, you may see errors that were previously deferred until read/write now raised at open time. ([#751](https://github.com/awslabs/mountpoint-s3/pull/751))

## v1.4.0 (January 26, 2024)

### New features
* Allow file overwrites when mounting with `--allow-overwrite` option. The upload will start as soon as Mountpoint receives `write` request and cannot be aborted. Once it is started the file is guaranteed to be overwritten. ([#487](https://github.com/awslabs/mountpoint-s3/pull/487))

### Breaking changes
* No breaking changes.

### Other changes
* Update default network throughput values for newer EC2 instance types. ([#702](https://github.com/awslabs/mountpoint-s3/pull/702))
* Improve error logging for various unsupported operations. ([#699](https://github.com/awslabs/mountpoint-s3/pull/699))
* Fix a race condition where calling `mknod` and `forget` under the same directory could cause Mountpoint to hang indefinitely. ([#711](https://github.com/awslabs/mountpoint-s3/pull/711))

## v1.3.2 (January 11, 2024)

### Breaking changes
* No breaking changes.

### Other changes
* Log messages now include file names and S3 keys more consistently.
  ([#665](https://github.com/awslabs/mountpoint-s3/pull/665))
* Successful mount message is now output to stdout for both foreground and background mode.
  ([#668](https://github.com/awslabs/mountpoint-s3/pull/668))
* Added new metric tracking contiguous reads.
  This new metric may be used to help understand how much data is being read successfully using prefetching
  before needing to discard prefetched progress when seeking around the file.
  ([#629](https://github.com/awslabs/mountpoint-s3/pull/629))
* Fix a race condition where FUSE `read` operations may have completed and subsequently sent back to the Kernel
  while locks were still being held on a file handle.
  If a FUSE `release` operation was executed while the file handle was still held by `read`,
  this would result in the file handle never being deallocated.
  ([#691](https://github.com/awslabs/mountpoint-s3/pull/691))

## v1.3.1 (November 30, 2023)

### Breaking changes
* No breaking changes.

### Other changes
* Fix an issue where Mountpoint could crash on launch when overriding the default part size with values that are not multiples of 1024. ([#649](https://github.com/awslabs/mountpoint-s3/pull/649))

## v1.3.0 (November 28, 2023)

### New features
* Mountpoint now supports resolving S3 Express One Zone endpoints and the new SigV4-Express signing algorithm will be used for S3 Express One Zone buckets. Note that `readdir` results on these buckets will not be ordered because ListObjectsV2 is unordered on S3 Express. ([#642](https://github.com/awslabs/mountpoint-s3/pull/642))

### Breaking changes
* No breaking changes.

### Other changes
* New Mountpoint cache directories will be created with owner access only permission. Additionally, the cache directory will be removed entirely at mount time rather than just the contents. ([#637](https://github.com/awslabs/mountpoint-s3/pull/637))

## v1.2.0 (November 22, 2023)

### New features
* Introduced optional caching of object metadata and content, in order to allow reduced cost and improved performance for repeated reads to the same files. To get started, see the [caching section of the configuration documentation](https://github.com/awslabs/mountpoint-s3/blob/main/doc/CONFIGURATION.md#caching-configuration). ([#622](https://github.com/awslabs/mountpoint-s3/pull/622))

### Breaking changes
* No breaking changes.

## v1.1.1 (November 14, 2023)

### Breaking changes
* No breaking changes.

### Other changes
* Some applications that read directory entries out of order (for example, [PHP](https://github.com/awslabs/mountpoint-s3/issues/477)) will now work correctly. ([#581](https://github.com/awslabs/mountpoint-s3/pull/581))
* Fixed a bug that caused file creation to fail if a file with the same name had previously been created with Mountpoint and then deleted remotely. ([#584](https://github.com/awslabs/mountpoint-s3/pull/584))
* Fixed an issue where Mountpoint could time out or hang on launch if IMDS was not available. ([#601](https://github.com/awslabs/mountpoint-s3/pull/601))

## v1.1.0 (October 23, 2023)

### Breaking changes
* Mountpoint will now complete file uploads at `close` time, and `close` will return an error if the upload was not successful. Before this change, `close` did not wait for the upload to complete, which could cause confusing results for applications that try to read a file they just wrote. ([#526](https://github.com/awslabs/mountpoint-s3/pull/526))

### Other changes
* Fixed a bug that caused poor performance for sequential reads in some cases ([#488](https://github.com/awslabs/mountpoint-s3/pull/488)). A workaround we have previously shared for this issue (setting the `--max-threads` argument to `1`) is no longer necessary with this fix. ([#556](https://github.com/awslabs/mountpoint-s3/pull/556))
* Introduced the `--user-agent-prefix <PREFIX>` CLI argument to optionally allow specifying an additional prefix for the HTTP User-Agent header sent with all S3 requests. ([#548](https://github.com/awslabs/mountpoint-s3/pull/548))

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
