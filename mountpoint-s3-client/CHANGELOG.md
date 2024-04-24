## Unreleased changes

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