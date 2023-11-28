## v0.5.0 (November 28, 2023)

* Update to latest CRT dependencies
* Default exponential backoff value retries is now 500ms rather than 25ms ([awslabs/aws-c-io#612](https://github.com/awslabs/aws-c-io/pull/612))
* Renamed `s3::RequestType::Default` to `s3::RequestType::Unknown` to match CRT change ([#633](https://github.com/awslabs/mountpoint-s3/pull/633))

## v0.4.0 (November 21, 2023)

* Update to latest CRT dependencies
* Allow constructing custom signing configurations ([#545](https://github.com/awslabs/mountpoint-s3/pull/545))

## v0.3.0 (September 26, 2023)

* Update to latest CRT dependencies
* Add support for trailing checksums on S3 PUTs ([#320](https://github.com/awslabs/mountpoint-s3/pull/320))
* Add support for S3 endpoint resolution ([#317](https://github.com/awslabs/mountpoint-s3/pull/317))

## v0.2.2 (June 20, 2023)

* Update to latest CRT dependencies
* Implement `AsyncInputStream` bindings for S3 client ([#282](https://github.com/awslabs/mountpoint-s3/pull/282))
* Expose `aws-c-s3` telemetry callbacks ([#261](https://github.com/awslabs/mountpoint-s3/pull/261), [#275](https://github.com/awslabs/mountpoint-s3/pull/275))

## v0.2.1 (May 26, 2023)

Initial release.