## Unreleased (v0.13.7)

* Upgrade rand dependency.

## v0.13.6 (January 22, 2026)

* Upgrade cargo dependencies.
* Update to latest CRT dependencies.

## v0.13.5 (December 22, 2025)

* Add new CRT request metrics to telemetry data. ([#1701](https://github.com/awslabs/mountpoint-s3/pull/1701))

## v0.13.4 (October 30, 2025)

* Update to latest `mountpoint-s3-crt-sys` dependency. ([#1683](https://github.com/awslabs/mountpoint-s3/pull/1683))

## v0.13.3 (October 27, 2025)

* Update on_telemetry to use operation_name rather than request_type for metrics. ([#1669](https://github.com/awslabs/mountpoint-s3/pull/1669))

## v0.13.2 (October 17, 2025)

* Upgrade cargo dependencies.
* Update to latest CRT dependencies.

## v0.13.1 (September 15, 2025)

* Update `tracing-subscriber` from `0.3.19` to `0.3.20`. ([#1590](https://github.com/awslabs/mountpoint-s3/pull/1590))

## v0.13.0 (July 23, 2025)

* Upgrade to Rust 2024. ([#1498](https://github.com/awslabs/mountpoint-s3/pull/1498))

## v0.12.5 (July 17, 2025)

* Update to latest CRT dependencies.

## v0.12.4 (Jun 27, 2025)

* Adopt the new `body_callback_ex` provided in the latest CRT update and expose the returned data slices as `Buffer`
  references, which allow callers to acquire ownership of the underlying memory pool buffers, avoiding a copy.
  ([#1481](https://github.com/awslabs/mountpoint-s3/pull/1481))

## v0.12.3 (May 9, 2025)

### Other changes

* Fix compatibility issue with S3-like services by removing `Content-Length: 0` header from GET, HEAD, and DELETE requests.
  ([#1381](https://github.com/awslabs/mountpoint-s3/issues/1381))
  ([awslabs/aws-c-s3#516](https://github.com/awslabs/aws-c-s3/pull/516))
* Update to latest CRT dependencies.

## v0.12.2 (April 1, 2025)

* Update to latest CRT dependencies.

## v0.12.1 (March 14, 2025)

* Update to latest CRT dependencies.

## v0.12.0 (February 3, 2025)

* Update to latest CRT dependencies.
* Rename `Crc64` to `Crc64nvme` and add case to `ChecksumAlgorithm`. ([#1235](https://github.com/awslabs/mountpoint-s3/pull/1235))

## v0.11.0 (January 20, 2025)

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
