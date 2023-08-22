# Unreleased

* Breaking change: `ListObjectsResult` no longer includes the `bucket` field.

# v0.3.0 (June 20, 2023)

Breaking changes:

* Use CRT's new asynchronous streaming APIs for `put_object` requests ([#282](https://github.com/awslabs/mountpoint-s3/pull/298), [#295](https://github.com/awslabs/mountpoint-s3/pull/295)). This change modifies the `put_object` API.

Other changes:

* Avoid using CRT auto-ranged-get infrastructure for small requests ([#285](https://github.com/awslabs/mountpoint-s3/pull/285))
* Add `NoSuchBucket` error for `head_object` requests ([#273](https://github.com/awslabs/mountpoint-s3/pull/273))
* Fix a bug in computing time-to-first-byte for per-request telemetry ([#275](https://github.com/awslabs/mountpoint-s3/pull/275))

# v0.2.2 (May 31, 2023)

* Fix a build failure when consuming this crate from outside a Git repository ([(#269](https://github.com/awslabs/mountpoint-s3/pull/269))
* Include `mountpoint-s3-client` version in `User-agent` strings ([#266](https://github.com/awslabs/mountpoint-s3/pull/266))
* Integrate per-request telemetry for S3 requests ([#261](https://github.com/awslabs/mountpoint-s3/pull/261))

# v0.2.1 (May 26, 2023)

Initial release.