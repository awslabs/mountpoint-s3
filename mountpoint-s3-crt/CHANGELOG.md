## Unreleased

* Update to latest CRT dependencies.
* Checksum hashers no longer implement `std::hash::Hasher`. ([#1082](https://github.com/awslabs/mountpoint-s3/pull/1082))
* Add bindings to remaining checksum types CRC64, SHA1, and SHA256. ([#1082](https://github.com/awslabs/mountpoint-s3/pull/1082))
* Add wrapping type `ByteBuf` for `aws_byte_buf`. ([#1082](https://github.com/awslabs/mountpoint-s3/pull/1082))
* `HeadersError::HeaderNotFound` and `HeadersError::Invalid` variants now include the name of the header.
  Despite the new field being private, this may impact any code that was pattern matching on these variants.
  ([#1205](https://github.com/awslabs/mountpoint-s3/pull/1205))

## v0.10.0 (October 17, 2024)

* Add `RequestType::CopyObject` for copy object operation. ([#1052](https://github.com/awslabs/mountpoint-s3/pull/1052))
* Add `RequestType::PutObject` for put object operation. ([#1046](https://github.com/awslabs/mountpoint-s3/pull/1046))
* Add `InputStream` as an option for the `Message` body. ([#1046](https://github.com/awslabs/mountpoint-s3/pull/1046))
* Update to latest CRT dependencies

## v0.9.0 (September 12, 2024)

* Allow specifying a list of network interfaces to be used by an S3 client. ([#943](https://github.com/awslabs/mountpoint-s3/pull/943))
* Update to latest CRT dependencies

## v0.8.0 (June 26, 2024)

* Update to latest CRT dependencies
* Allow omitting additional checksums from PutObject requests while still computing them for upload reviews ([#849](https://github.com/awslabs/mountpoint-s3/pull/849))
* Adopt polling API for uploading data in PutObject requests ([#874](https://github.com/awslabs/mountpoint-s3/pull/874))
* Expose underlying functions to support backpressure GetObject ([#889](https://github.com/awslabs/mountpoint-s3/pull/889))

## v0.7.0 (April 10, 2024)

* Update to latest CRT dependencies
* Adopt new async write API for PutObject requests ([#832](https://github.com/awslabs/mountpoint-s3/pull/832))

## v0.6.2 (March 7, 2024)

* Update to latest CRT dependencies

## v0.6.1 (January 24, 2024)

* Update to latest CRT dependencies

## v0.6.0 (January 18, 2024)

* Update to latest CRT dependencies
* Return type of `common::Uri::host_port` changed from `u16` to `u32`

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
