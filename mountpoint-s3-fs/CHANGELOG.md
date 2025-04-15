## Unreleased

* Updated `network_performance.sh` to set maximum throughput correctly for newer instances (i.e. `trn2.48xlarge`, `i7ie.6xlarge`).
  ([#1369](https://github.com/awslabs/mountpoint-s3/pull/1369))
* Allow changing log level dynamically with `USR2` signal. See [Changing logging verbosity on runtime](https://github.com/awslabs/mountpoint-s3/blob/main/doc/LOGGING.md#changing-logging-verbosity-on-runtime) for more details. ([#1367](https://github.com/awslabs/mountpoint-s3/pull/1367))

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
