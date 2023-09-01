## v1.0.1 (August 31, 2023)

### Breaking changes
* Made `allow_other` and `allow_root` mutually exclusive CLI arguments.

### Other changes
* Added new metrics for object writes, IO sizes, file handles, and directory operations. The existing `fuse.bytes_read` metric has been renamed to `fuse.total_bytes` and is now keyed by operation (`read`/`write`).
* Closing the input/output handles when we run Mountpoint in background mode. This prevents us from seeing anything the process prints after they are closed.
* Mountpoint can now read objects in the S3 Glacier Flexible Retrieval and S3 Glacier Deep Archive storage classes if they have been restored. Mountpoint cannot issue restore requests, but if you issue a restore request separately, the restored objects will be readable.

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
