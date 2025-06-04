## Unreleased

## v0.5.0

* `PrefetchGetObject` now has an updated backpressure algorithm advancing the read window with each call to `PrefetchGetObject::read`, with the aim of higher sequential-read throughput. ([#1453](https://github.com/awslabs/mountpoint-s3/pull/1453))

## v0.4.0 (May 30, 2025)

* `S3Path::new` now takes a `BucketName` instead of a `String`. ([#1434](https://github.com/awslabs/mountpoint-s3/pull/1434))
* Adds `BucketNameOrS3Uri`, built using `try_from(String)` and can then be converted into either a `BucketName` or an `S3Uri` to be used with `S3Path`. ([#1434](https://github.com/awslabs/mountpoint-s3/pull/1434))

## v0.3.0 (May 27, 2025)

* Added ability to configure an error logger which can be used to report errors returned by fuse operations. Use method `MountpointConfig::error_logger` to configure the callback. ([#1416](https://github.com/awslabs/mountpoint-s3/pull/1416))
* `PrefetchReadError::GetRequestFailed` error variant has changed. It now contains an additional field `metadata`. ([#1411](https://github.com/awslabs/mountpoint-s3/pull/1411))
* Improve safety checks when reading disk cache blocks. ([#1427](https://github.com/awslabs/mountpoint-s3/pull/1427))

## v0.2.0 (May 9, 2025)

* Updated `network_performance.sh` to set maximum throughput correctly for newer instances (i.e. `trn2.48xlarge`, `i7ie.6xlarge`).
  ([#1369](https://github.com/awslabs/mountpoint-s3/pull/1369))
* Allow changing log level dynamically with `USR2` signal. See [Changing logging verbosity at runtime](https://github.com/awslabs/mountpoint-s3/blob/main/doc/LOGGING.md#changing-logging-verbosity-at-runtime) for more details. ([#1367](https://github.com/awslabs/mountpoint-s3/pull/1367))
* Use the Runtime type in the prefetcher. ([#1382](https://github.com/awslabs/mountpoint-s3/pull/1382))
* Move CliArgs and related functions to the mountpoint-s3 crate. ([#1401](https://github.com/awslabs/mountpoint-s3/pull/1401))
* Update underlying S3 client version. ([#1405](https://github.com/awslabs/mountpoint-s3/pull/1405/))

## v0.1.3 (April 9, 2025)

* Address an issue introduced in v0.1.1 that could affect throughput and memory usage in
  workloads with many concurrent random read operations.
  ([#1355](https://github.com/awslabs/mountpoint-s3/pull/1355))

## v0.1.2 (April 3, 2025)

* Reduce memory usage for strings in inode metadata.
  ([#1346](https://github.com/awslabs/mountpoint-s3/pull/1346))

## v0.1.1 (April 1, 2025)

* Address an issue in GetObject requests that could result in read operations to fail.
  ([#1334](https://github.com/awslabs/mountpoint-s3/pull/1334))

## v0.1.0 (March 14, 2025)

* Extract all of the `mountpoint-s3` binary code into this library crate
  ([#1304](https://github.com/awslabs/mountpoint-s3/pull/1304))
