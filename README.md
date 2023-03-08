## Mountpoint for Amazon S3

![CI Status](https://github.com/awslabs/mountpoint-s3/actions/workflows/rust.yml/badge.svg?branch=main)

Mountpoint for Amazon S3 is a simple, high-throughput connector for mounting an Amazon S3 bucket as a local file system. With Mountpoint for Amazon S3, your applications can access objects stored in Amazon S3 through basic file operations like `open` and `read`. Mountpoint for Amazon S3 gives these applications access to the elastic storage and throughput of Amazon S3 without rewriting them to use AWS SDKs and object APIs.

**This is an alpha release and not yet ready for production use.** We're especially interested in early feedback on missing features, performance, and compatibility. See [Current Status](#current-status) for more limitations.

## Getting started

Mountpoint for Amazon S3 is currently only available by building from source, and only supports Linux. These instructions are for Amazon Linux 2, but other Linux distributions should be similar.

First, install dependencies, including the Rust compiler via [rustup](https://rustup.rs/):

    sudo yum install fuse fuse-devel cmake3 clang-devel
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

Now clone this repository and its submodules:

    git clone --recurse-submodules https://github.com/awslabs/mountpoint-s3.git

Finally, compile the connector:

    cd mountpoint-s3
    cargo build --release

The final binary will be at `target/release/mount-s3`.

To use the connector, first ensure you have [access to valid AWS credentials](https://docs.aws.amazon.com/sdkref/latest/guide/access.html). For example, you could [create a new IAM user and add it to the `~/.aws/credentials` file](https://docs.aws.amazon.com/sdkref/latest/guide/access-users.html), or [configure an EC2 instance with an IAM role](https://docs.aws.amazon.com/sdkref/latest/guide/access-iam-roles-for-ec2.html).

Then run the connector, specifying the directory in which your S3 bucket should be mounted (here, `~/mnt`):

    mkdir ~/mnt
    mount-s3 my-s3-bucket-name ~/mnt

The `~/mnt` directory now gives access to the objects in your S3 bucket.

## Current status

Mountpoint for Amazon S3 is optimized for read-heavy workloads that need high throughput. It intentionally does not implement the full POSIX specification for file systems. See [SEMANTICS.md](doc/SEMANTICS.md) for a detailed description of the connector's behavior and POSIX support.

The [Mountpoint for Amazon S3 public roadmap](https://github.com/orgs/awslabs/projects/84) gives an overview of features we're planning to support in the future.

## Contributing

We welcome contributions to Mountpoint for Amazon S3! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how to report bugs or submit pull requests.

### Security

If you discover a potential security issue in this project we ask that you notify AWS Security via our [vulnerability reporting page](http://aws.amazon.com/security/vulnerability-reporting/). Please do **not** create a public GitHub issue.

## License

This project is licensed under the Apache-2.0 License.
