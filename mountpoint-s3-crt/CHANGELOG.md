## Unreleased

* Update to latest CRT dependencies
* Return type of `common::Uri::host_port` changed from `u16` to `u32`
* Allow setting `skip_environment_credentials_provider` on the default credential chain provider

## v0.5.1 (December 1, 2023)

* Update to latest CRT dependencies

## v0.5.0 (November 28, 2023)

* Update to latest CRT dependencies
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