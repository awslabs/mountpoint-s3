# mountpoint-s3-crt

This crate provides a Rust interface to the [AWS Common Runtime](https://docs.aws.amazon.com/sdkref/latest/guide/common-runtime.html)
for use by [Mountpoint for Amazon S3](https://github.com/awslabs/mountpoint-s3).
The interface includes only the AWS Common Runtime features needed by Mountpoint for Amazon S3,
rather than the entire runtime.

**This crate is not intended for general-purpose use and we consider its interface to be unstable.**
Customers looking for general-purpose AWS client functionality in Rust should use the official [AWS SDK for Rust](https://aws.amazon.com/sdk-for-rust/).