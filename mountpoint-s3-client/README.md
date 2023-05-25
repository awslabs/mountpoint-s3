# mountpoint-s3-client

This crate provides a high-performance Amazon S3 client for use by
[Mountpoint for Amazon S3](https://github.com/awslabs/mountpoint-s3).
The client binds to the [AWS Common Runtime](https://docs.aws.amazon.com/sdkref/latest/guide/common-runtime.html),
which provides features such as AWS authentication, a HTTP client, and low-level IO primitives.

**This crate is not intended for general-purpose use and we consider its interface to be unstable.**
Customers looking for a general-purpose Amazon S3 client in Rust should use the official [AWS SDK for Rust](https://aws.amazon.com/sdk-for-rust/).