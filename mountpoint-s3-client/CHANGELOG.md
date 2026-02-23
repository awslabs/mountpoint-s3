## Unreleased (v0.19.7)

* Upgrade rand dependency.

## v0.19.6 (January 22, 2026)

* Upgrade cargo dependencies.
* Update to latest CRT dependencies.

## v0.19.5 (December 22, 2025)

* Add new CRT request metrics to telemetry data. ([#1701](https://github.com/awslabs/mountpoint-s3/pull/1701))

## v0.19.4 (October 30, 2025)

* Update to latest `mountpoint-s3-crt` dependency. ([#1683](https://github.com/awslabs/mountpoint-s3/pull/1683))

## v0.19.3 (October 27, 2025)

* Change FUSE and S3 request metric names in logs. ([#1630](https://github.com/awslabs/mountpoint-s3/pull/1630), [#1653](https://github.com/awslabs/mountpoint-s3/pull/1653))

## v0.19.2 (October 17, 2025)

* Upgrade toolchain to Rust 1.90. ([#1650](https://github.com/awslabs/mountpoint-s3/pull/1650))
* Update to latest CRT dependencies.

## v0.19.1 (September 15, 2025)

* Update `tracing-subscriber` from `0.3.19` to `0.3.20`. ([#1590](https://github.com/awslabs/mountpoint-s3/pull/1590))

## v0.19.0 (July 28, 2025)

### Breaking changes

* Make `ObjectClient` part sizes no longer optional. ([#1542](https://github.com/awslabs/mountpoint-s3/pull/1542))
* Remove `restore_buffer_copy` feature flag. ([#1511](https://github.com/awslabs/mountpoint-s3/pull/1511))

## v0.18.0 (July 23, 2025)

* Add support for custom memory pools. ([#1516](https://github.com/awslabs/mountpoint-s3/pull/1516))
* Upgrade to Rust 2024. ([#1498](https://github.com/awslabs/mountpoint-s3/pull/1498))

## v0.17.1 (July 17, 2025)

* Fix a race condition in the internal memory pool that in some cases could result in a deadlock.
  ([#1515](https://github.com/awslabs/mountpoint-s3/pull/1515))
  ([#1520](https://github.com/awslabs/mountpoint-s3/pull/1520))
  ([awslabs/aws-c-s3#533](https://github.com/awslabs/aws-c-s3/pull/533))
  ([awslabs/aws-c-s3#536](https://github.com/awslabs/aws-c-s3/pull/536))

## v0.17.0 (Jun 27, 2025)

### Breaking changes

* Reduce memory fragmentation and peak usage by avoiding copying data returned by GetObject into newly allocated buffers.
  Callers of the `get_object` method are now responsible for returning the buffers to the internal memory pool by dropping
  the received `Bytes` instances after use. Failure to do so may eventually lead to reduced or zero throughput when the
  memory pool reaches capacity.
  ([#1481](https://github.com/awslabs/mountpoint-s3/pull/1481))

## v0.16.0 (Jun 19, 2025)

* Add support for RenameObject API. ([#1468](https://github.com/awslabs/mountpoint-s3/pull/1468))

## v0.15.0 (May 27, 2025)

### Breaking changes

* Variants of the `GetObjectError` and `S3RequestError` enums now contain a `ClientErrorMetadata` field,
  which stores information from the S3 response. ([#1411](https://github.com/awslabs/mountpoint-s3/pull/1411))

## v0.14.1 (May 9, 2025)

### Other changes

* Fix compatibility issue with S3-like services by removing `Content-Length: 0` header from GET, HEAD, and DELETE requests.
  ([#1381](https://github.com/awslabs/mountpoint-s3/issues/1381))
  ([awslabs/aws-c-s3#516](https://github.com/awslabs/aws-c-s3/pull/516))
* The memory limit for CRT Client can now be configured with the `S3ClientConfig::memory_limit_in_bytes` method.
  ([#1363](https://github.com/awslabs/mountpoint-s3/pull/1363))
* Fix missing credential caching when using `S3ClientAuthConfig::Profile` credential configuration.
  ([#1398](https://github.com/awslabs/mountpoint-s3/pull/1398))

## v0.14.0 (April 9, 2025)

### Breaking changes

* `GetObjectResponse` returns part content as `Bytes` rather than `Box<[u8]>`.
  ([#1348](https://github.com/awslabs/mountpoint-s3/pull/1348))

## v0.13.3 (April 9, 2025)

* Fix an issue where GetObject requests may not be cancelled.
  ([#1355](https://github.com/awslabs/mountpoint-s3/pull/1355))

## v0.13.2 (April 1, 2025)

* Fix race condition in GetObject that could result in empty responses.
  ([#1334](https://github.com/awslabs/mountpoint-s3/pull/1334))
* Update endpoints.
  ([awslabs/aws-c-s3#502](https://github.com/awslabs/aws-c-s3/pull/502))
* Bump Default Memory Limit for Higher Target Throughput.
  ([awslabs/aws-c-s3#499](https://github.com/awslabs/aws-c-s3/pull/499))

## v0.13.1 (March 14, 2025)

* Update to latest CRT dependencies.

## v0.13.0 (February 3, 2025)

### Other changes

* Add support for CRC64-NVME checksum algorithm.
  ([#1235](https://github.com/awslabs/mountpoint-s3/pull/1235))
* Add support for overriding the number of threads used by the Event Loop.
  ([#1240](https://github.com/awslabs/mountpoint-s3/pull/1240))
* The ECS credentials provider now performs retries in the event of some failures.
  ([awslabs/aws-c-auth#259](https://github.com/awslabs/aws-c-auth/pull/259))
* Export missing types in public API which previously required a direct dependency on `mountpoint-s3-crt`.
  ([#1248](https://github.com/awslabs/mountpoint-s3/pull/1248))

## v0.12.0 (January 20, 2025)

### Breaking changes

* `get_object` method now waits for the response headers before returning and may report errors earlier.
  Moreover, its return type on success has been renamed to `GetObjectResponse` (was `GetObjectRequest`).
  ([#1171](https://github.com/awslabs/mountpoint-s3/pull/1171))
* `get_object` method now requires a `GetObjectParams` parameter.
  Two of the existing parameters, `range` and `if_match` have been moved to `GetObjectParams`.
  ([#1121](https://github.com/awslabs/mountpoint-s3/pull/1121))
* `increment_read_window` and `read_window_end_offset` methods have been removed from `GetObjectResponse`.
  `ClientBackpressureHandle` can be used to interact with flow-control window instead, it can be retrieved from `backpressure_handle` method.
  ([#1200](https://github.com/awslabs/mountpoint-s3/pull/1200))
* `head_object` method now requires a `HeadObjectParams` parameter.
  The structure itself is not required to specify anything to achieve the existing behavior.
  ([#1083](https://github.com/awslabs/mountpoint-s3/pull/1083))
* `HeadObjectResult` no longer contains an `ObjectInfo` struct.
  Instead, it returns the object attributes as individual fields on the `HeadObjectResult`.
  The entity tag field has also changed and is now of type `ETag` rather than `String`.
  ([#1058](https://github.com/awslabs/mountpoint-s3/pull/1058))
* `HeadObjectResult` no longer provides the bucket and key used in the original request.
  ([#1058](https://github.com/awslabs/mountpoint-s3/pull/1058))
* Both `ObjectInfo` and `ChecksumAlgorithm` structs are now marked `non_exhaustive`, to indicate that new fields may be added in the future.
  `ChecksumAlgorithm` no longer implements `Copy`.
  ([#1086](https://github.com/awslabs/mountpoint-s3/pull/1086))
* `put_object` method now waits for the `CreateMultipartUpload` request to complete before returning and may report errors earlier.
  ([#1192](https://github.com/awslabs/mountpoint-s3/pull/1192))

### Other changes

* Add support for custom telemetry handlers.
  ([#1080](https://github.com/awslabs/mountpoint-s3/pull/1080))
* Add support for source buckets with dots in the name in `copy_object`.
  ([#1228](https://github.com/awslabs/mountpoint-s3/pull/1228))
* Add support for object metadata in GET requests.
  ([#1065](https://github.com/awslabs/mountpoint-s3/pull/1065))
* `HeadObjectResult` now includes the server-side encryption settings used when storing the object.
  ([#1143](https://github.com/awslabs/mountpoint-s3/pull/1143))
* Add parameter to request checksum information as part of a `HeadObject` request.
  If specified, the result should contain the checksum for the object if available in the S3 response.
  ([#1083](https://github.com/awslabs/mountpoint-s3/pull/1083))
* Add parameter to request checksum information as part of a `GetObject` request.
  If specified, calling `get_object_checksum` on `GetObjectRequest` will return the checksum information.
  ([#1123](https://github.com/awslabs/mountpoint-s3/pull/1123))
* Expose checksum algorithm in `ListObjectsResult`'s `ObjectInfo` struct.
  ([#1086](https://github.com/awslabs/mountpoint-s3/pull/1086),
  [#1093](https://github.com/awslabs/mountpoint-s3/pull/1093))
* `ChecksumAlgorithm` has a new variant `Unknown(String)`,
  to accomodate algorithms not recognized by the client should they be added in future.
  ([#1086](https://github.com/awslabs/mountpoint-s3/pull/1086))
* Allow to specify any of the supported checksum algorithms when uploading objects with `put_object_single`.
  ([#1157](https://github.com/awslabs/mountpoint-s3/pull/1157))
* Amazon S3 introduces support for AWS Dedicated Local Zones.
  ([awslabs/aws-c-s3#465](https://github.com/awslabs/aws-c-s3/pull/465))


## v0.11.0 (October 17, 2024)

### Breaking changes

* No breaking changes.

### Other changes

* Add support for copy object operation. ([#1052](https://github.com/awslabs/mountpoint-s3/pull/1052))
* Introduce a new API (`put_object_single`) to perform single PutObject requests rather than multi-part uploads. ([#1046](https://github.com/awslabs/mountpoint-s3/pull/1046))
* Return the new object ETag after a successful PUT request. ([#1057](https://github.com/awslabs/mountpoint-s3/pull/1057))
* Add support for custom headers in PUT requests. ([#1059](https://github.com/awslabs/mountpoint-s3/pull/1059))
* Add support for writing object metadata in PUT requests. ([#1062](https://github.com/awslabs/mountpoint-s3/pull/1062))
* Address a threading issue in the s2n-tls library that could result in premature cleanup and `NULL pointer` errors. ([aws/s2n-tls#4584](https://github.com/aws/s2n-tls/pull/4584))
* Inaccurate reporting of `s3.client.buffer_pool.primary_allocated` CRT statistic is fixed. ([awslabs/aws-c-s3#453](https://github.com/awslabs/aws-c-s3/pull/453))
* Expose `s3.client.buffer_pool.forced_used` metric which account for buffer allocations that could exceed memory limit in the CRT buffer pool. ([#1025](https://github.com/awslabs/mountpoint-s3/pull/1025))
* The `400 RequestTimeout` error is now treated as retryable. ([awslabs/aws-c-s3#457](https://github.com/awslabs/aws-c-s3/pull/457))

## v0.10.0 (September 12, 2024)

### Breaking changes

* When using GetObject with backpressure enabled, an error will be returned when there is not enough read window instead of blocking. ([#971](https://github.com/awslabs/mountpoint-s3/pull/971))

### Other changes

* Allow querying initial read window size and read window end offset for backpressure GetObject. ([#971](https://github.com/awslabs/mountpoint-s3/pull/971))
* Fix an issue where `credential_process` field would not be picked up correctly when using `source_profile` or `--profile <AWS_PROFILE>`. ([awslabs/aws-c-auth#245](https://github.com/awslabs/aws-c-auth/pull/245))
* Update CacheCredentialsProvider Refresh Time to 5 Minutes before Expiry. ([awslabs/aws-c-auth#247](https://github.com/awslabs/aws-c-auth/pull/247))
* Allow specifying a list of network interfaces to be used by an S3 client. ([#943](https://github.com/awslabs/mountpoint-s3/pull/943))

## v0.9.0 (June 26, 2024)

* Adds support for `AWS_ENDPOINT_URL` environment variable. ([#895](https://github.com/awslabs/mountpoint-s3/pull/895))
* Support backpressure for GetObject request ([#889](https://github.com/awslabs/mountpoint-s3/pull/889))
* Fix an issue where mountpoint-s3-client could interpret a HTTP 206 Partial success response as an error ([#917](https://github.com/awslabs/mountpoint-s3/pull/917))
* Introduce a new trait `ProvideErrorMetadata` to provide additional information for error reporting ([#882](https://github.com/awslabs/mountpoint-s3/pull/882))
* Improve overall performance by not creating a new rule engine for every endpoint resolution ([#860](https://github.com/awslabs/mountpoint-s3/pull/860))
* Adopt polling API for uploading data in PutObject requests ([#874](https://github.com/awslabs/mountpoint-s3/pull/874))

### Breaking changes

* The `trailing_checksums` field of `PutObjectParams` is now an enum, with a new `ReviewOnly` option that allows disabling sending additional checksum headers to S3 while still computing them for use by `UploadReview` callbacks. ([#849](https://github.com/awslabs/mountpoint-s3/pull/849))

### Other changes

* No other changes.

## v0.8.1 (April 10, 2024)

### Breaking changes

* No breaking changes.

### Other changes

* The maximum number of attempts for S3 requests can now be configured with the `S3ClientConfig::max_attempts` method or the `AWS_MAX_ATTEMPTS` environment variable. ([#830](https://github.com/awslabs/mountpoint-s3/pull/830))
* Return server-side encryption headers in `PutObjectResult`. ([#745](https://github.com/awslabs/mountpoint-s3/pull/745))
* Add support for AES256 server-side encryption (SSE-S3). ([#827](https://github.com/awslabs/mountpoint-s3/pull/827))
* Expose memory consumption metrics for the CRT buffer pool (`s3.client.buffer_pool.*`). ([#820](https://github.com/awslabs/mountpoint-s3/pull/820))
* Adopt new async write API for PutObject requests ([#832](https://github.com/awslabs/mountpoint-s3/pull/832))

## v0.8.0 (March 8, 2024)

### Breaking changes

* S3 requests are now canceled when dropped. As part of this change, there is a new `S3RequestError::RequestCanceled` enum variant. ([#794](https://github.com/awslabs/mountpoint-s3/pull/794))

### Other changes

* Added new metrics to track number of known S3 endpoint IPs. ([#778](https://github.com/awslabs/mountpoint-s3/pull/778))
* Request IDs are now logged for meta request failures. ([#790](https://github.com/awslabs/mountpoint-s3/pull/790))

## v0.7.0 (February 12, 2023)

### Breaking changes

* The `mock_client` module is no longer enabled by default, and is now available by enabling the `mock` feature for this crate. ([#723](https://github.com/awslabs/mountpoint-s3/pull/723))

### Other changes

* Introduced a new `ThroughputMockClient` that simulates a target network throughput from an in-memory mock S3 client. This client requires the `mock` feature flag. ([#723](https://github.com/awslabs/mountpoint-s3/pull/723))
* Updated some of the dependencies that aim to clean up our dependency closure. It includes the update of built dependency which fixes a vulnerability in libgit2-sys. ([#731](https://github.com/awslabs/mountpoint-s3/pull/731))

## v0.6.2 (January 18, 2024)

### Breaking changes

* No breaking changes.

### Other changes

* Individual S3 requests made as part of meta requests are no longer logged at WARN, only DEBUG. For those log entries, the CRT error is now output to the logs. ([#669](https://github.com/awslabs/mountpoint-s3/pull/669))
* Client user-agent now includes `-dirty` suffix to indicate when the client was built with uncommitted changes. ([#678](https://github.com/awslabs/mountpoint-s3/pull/678))


## v0.6.1 (December 1, 2023)

### Breaking changes

* No breaking changes.

### Other changes

* Consume CRT bug fix for an issue where a large number of requests to S3 Express directory buckets could end up stuck waiting for initial S3 Express session to be created ([awslabs/aws-c-s3#384](https://github.com/awslabs/aws-c-s3/pull/384))

## v0.6.0 (November 28, 2023)

### Breaking changes

* No breaking changes.

### Other changes

* Endpoint resolver now supports resolving S3 Express One Zone endpoints and the new `SigV4Express` signing algorithm will be used for S3 Express One Zone buckets ([#642](https://github.com/awslabs/mountpoint-s3/pull/642))

## v0.5.0 (November 21, 2023)

### Breaking changes

* The `user_agent_prefix` string field of `S3ClientConfig` has been replaced with a new `user_agent` field of type `UserAgent` to allow more flexible construction of user agent headers that fit the pattern of AWS SDKs ([#608](https://github.com/awslabs/mountpoint-s3/pull/608))

### Other changes

* Request tracing spans are now created with a unique target to allow them to be filtered out ([#615](https://github.com/awslabs/mountpoint-s3/pull/615))
* Added `InstanceInfo`, a higher-level IMDS client that can retrieve metadata about an EC2 instance ([#608](https://github.com/awslabs/mountpoint-s3/pull/608))
* `ETag`s can now be unwrapped with `into_inner()`, and now implement `Hash` and `Eq` ([#589](https://github.com/awslabs/mountpoint-s3/pull/589), [#593](https://github.com/awslabs/mountpoint-s3/pull/593))
* The `MockClient` now supports counting the number of requests performed, for use in tests that need to make assertions about requests ([#567](https://github.com/awslabs/mountpoint-s3/pull/567))

## v0.4.0 (September 26, 2023)

### Breaking changes

* The crate has been reorganized to avoid exposing every type at the top level. See the [crate documentation](https://docs.rs/mountpoint-s3-client/) for more details. ([#511](https://github.com/awslabs/mountpoint-s3/pull/511))
* Some errors, notably `403 Forbidden`, that were previously handled by individual requests are now handled by shared logic, and may be returned differently ([#413](https://github.com/awslabs/mountpoint-s3/pull/413))
* `ListObjectsResult` no longer includes the `bucket` field ([#470](https://github.com/awslabs/mountpoint-s3/pull/470))

### Other changes

* `list_objects` and `head_object` results now include the storage class and restore status of an object if available ([#406](https://github.com/awslabs/mountpoint-s3/pull/406), [#467](https://github.com/awslabs/mountpoint-s3/pull/467))
* `put_object` now supports configuring trailing checksums ([#320](https://github.com/awslabs/mountpoint-s3/pull/320))
* A new `review_and_complete` method on `PutObjectRequest` can be used to inspect the parts of a multi-part upload before completing it ([#367](https://github.com/awslabs/mountpoint-s3/pull/367))

## v0.3.0 (June 20, 2023)

Breaking changes:

* Use CRT's new asynchronous streaming APIs for `put_object` requests ([#282](https://github.com/awslabs/mountpoint-s3/pull/298), [#295](https://github.com/awslabs/mountpoint-s3/pull/295)). This change modifies the `put_object` API.

Other changes:

* Avoid using CRT auto-ranged-get infrastructure for small requests ([#285](https://github.com/awslabs/mountpoint-s3/pull/285))
* Add `NoSuchBucket` error for `head_object` requests ([#273](https://github.com/awslabs/mountpoint-s3/pull/273))
* Fix a bug in computing time-to-first-byte for per-request telemetry ([#275](https://github.com/awslabs/mountpoint-s3/pull/275))

## v0.2.2 (May 31, 2023)

* Fix a build failure when consuming this crate from outside a Git repository ([(#269](https://github.com/awslabs/mountpoint-s3/pull/269))
* Include `mountpoint-s3-client` version in `User-agent` strings ([#266](https://github.com/awslabs/mountpoint-s3/pull/266))
* Integrate per-request telemetry for S3 requests ([#261](https://github.com/awslabs/mountpoint-s3/pull/261))

## v0.2.1 (May 26, 2023)

Initial release.
