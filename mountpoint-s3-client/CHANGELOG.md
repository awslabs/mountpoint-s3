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