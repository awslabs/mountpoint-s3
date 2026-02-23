## Unreleased (v0.9.1)

* Upgrade rand dependency.

## v0.9.0 (January 22, 2026)

* Update Mountpoint's semantics to enable opening a new file handle on an inode if all the existing open handles have been flushed. ([#1704](https://github.com/awslabs/mountpoint-s3/pull/1704))
* Upgrade cargo dependencies.

## v0.8.4 (December 22, 2025)

* Add metric to track cache hit rate in logs. ([#1716](https://github.com/awslabs/mountpoint-s3/pull/1716))
* Remove redundant cache metrics in logs. ([#1716](https://github.com/awslabs/mountpoint-s3/pull/1716), [#1721](https://github.com/awslabs/mountpoint-s3/pull/1721))
* Update cache metrics for consistency. ([#1721](https://github.com/awslabs/mountpoint-s3/pull/1721), [#1738](https://github.com/awslabs/mountpoint-s3/pull/1738))
* Add cache metrics for OTLP export. ([#1724](https://github.com/awslabs/mountpoint-s3/pull/1724))
* Improve memory limiter accuracy and make `initial_request_size` configurable. ([#1707](https://github.com/awslabs/mountpoint-s3/pull/1707))

## v0.8.3 (October 30, 2025)

* Update to latest S3 client. ([#1683](https://github.com/awslabs/mountpoint-s3/pull/1683))
* Change metric logging format to add metric units ([#1677](https://github.com/awslabs/mountpoint-s3/pull/1677))
* Remove `otlp_integration` feature flag. ([#1685](https://github.com/awslabs/mountpoint-s3/pull/1685))

## v0.8.2 (October 27, 2025)

* Change FUSE and S3 request metric names in logs. ([#1630](https://github.com/awslabs/mountpoint-s3/pull/1630), [#1653](https://github.com/awslabs/mountpoint-s3/pull/1653))
* Keep a constant memory reservation for backwards seek for each file handle. ([#1631](https://github.com/awslabs/mountpoint-s3/pull/1631))

## v0.8.1 (October 17, 2025)

* Upgrade toolchain to Rust 1.90. ([#1650](https://github.com/awslabs/mountpoint-s3/pull/1650))
* Emit a `event.ready` when error logging is enabled. ([#1647](https://github.com/awslabs/mountpoint-s3/pull/1647))

## v0.8.0 (September 30, 2025)

* Downgrade setattr logging level from INFO to DEBUG to reduce log noise. ([#1605](https://github.com/awslabs/mountpoint-s3/pull/1605))
* Add integrity checks for the  `ManifestMetablock` under the `manifest` feature flag. ([#1563](https://github.com/awslabs/mountpoint-s3/pull/1563))

## v0.7.1 (September 15, 2025)

* Fix race condition that could cause Mountpoint to panic on unlink. ([#1596](https://github.com/awslabs/mountpoint-s3/pull/1596))
* Downgrade ioctl operation logging level from WARN to DEBUG to reduce log noise. ([#1598](https://github.com/awslabs/mountpoint-s3/pull/1598))
* Introduce experimental support for publishing OTEL metrics to an endpoint, under the `otlp_integration` feature. ([1552](https://github.com/awslabs/mountpoint-s3/pull/1552) and [1550](https://github.com/awslabs/mountpoint-s3/pull/1550))
* Add experimental environment variable `UNSTABLE_CRT_EVENTLOOP_THREADS` to configure EventLoopGroup thread count. ([#1579](https://github.com/awslabs/mountpoint-s3/pull/1579))
* Replace `httpmock` dependency with `wiremock` which is more frequently updated. ([#1589](https://github.com/awslabs/mountpoint-s3/pull/1589))

## v0.7.0 (July 28, 2025)

* Adopt a unified memory pool to reduce overall memory usage. ([#1511](https://github.com/awslabs/mountpoint-s3/pull/1511))
* Replace `S3Uri` with `S3Path` and consolidate related types like `Bucket` and `Prefix` into the `s3` module.
  ([#1535](https://github.com/awslabs/mountpoint-s3/pull/1535))

## v0.6.0 (July 23, 2025)

* Introduce `Metablock` abstraction and adjust the interface between `S3Filesystem` and implementors of `Metablock`. ([#1500](https://github.com/awslabs/mountpoint-s3/pull/1500), [#1488](https://github.com/awslabs/mountpoint-s3/pull/1488))
* Upgrade to Rust 2024. ([#1498](https://github.com/awslabs/mountpoint-s3/pull/1498))
* Introduce `ManifestMetablock` under the `manifest` feature flag, which allows loading S3 metadata from disk. ([#1506](https://github.com/awslabs/mountpoint-s3/pull/1506))

## v0.5.0 (Jun 19, 2025)

* Add support for renaming files on buckets supporting the RenameObject API. ([#1468](https://github.com/awslabs/mountpoint-s3/pull/1468))

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
