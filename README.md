# Mountpoint for Amazon S3

![CI Status](https://github.com/awslabs/mountpoint-s3/actions/workflows/rust.yml/badge.svg?branch=main)

Mountpoint for Amazon S3 is a simple, high-throughput file client for mounting an Amazon S3 bucket as a local file system. With Mountpoint for Amazon S3, your applications can access objects stored in Amazon S3 through file operations like `open` and `read`. Mountpoint for Amazon S3 automatically translates these operations into S3 object API calls, giving your applications access to the elastic storage and throughput of Amazon S3 through a file interface.

Mountpoint for Amazon S3 is optimized for read-heavy workloads that need high throughput. It intentionally does not implement the full POSIX specification for file systems. See [SEMANTICS.md](doc/SEMANTICS.md) for a detailed description of the client's behavior and POSIX support.

**This is an alpha release and not yet ready for production use.** We're especially interested in early feedback on features, performance, and compatibility. See [Current status](#current-status) for more limitations.

## Getting started

The alpha release of Mountpoint for Amazon S3 is only available by building from source, and only supports Linux. These instructions are for Amazon Linux 2, but other Linux distributions should be similar.

First, install dependencies, including the Rust compiler via [rustup](https://rustup.rs/):

    sudo yum install fuse fuse-devel cmake3 clang-devel
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

Now clone this repository and its submodules:

    git clone --recurse-submodules https://github.com/awslabs/mountpoint-s3.git

Finally, compile the client:

    cd mountpoint-s3
    cargo build --release

The final binary will be at `target/release/mount-s3`.

To use the client, first ensure you have [access to valid AWS credentials](https://docs.aws.amazon.com/sdkref/latest/guide/access.html). For example, you could [create a new IAM user and add it to the `~/.aws/credentials` file](https://docs.aws.amazon.com/sdkref/latest/guide/access-users.html), or [configure an EC2 instance with an IAM role](https://docs.aws.amazon.com/sdkref/latest/guide/access-iam-roles-for-ec2.html).

Then run the client, specifying the directory in which your S3 bucket should be mounted (here, `~/mnt`):

    mkdir ~/mnt
    mount-s3 my-s3-bucket-name ~/mnt

The client will run in the background by default, and the `~/mnt` directory now gives access to the objects in your S3 bucket.

### Configuration

For the alpha release, some additional configuration is required to use Mountpoint for Amazon S3 in some circumstances:

* **High-bandwidth EC2 instances**: manually specify the available network bandwidth in Gbps with the `--throughput-target-gbps` command-line argument. Defaults to 10 Gbps if not configured. This configuration will be automated in the future (https://github.com/awslabs/mountpoint-s3/issues/3).
* **AWS GovCloud, China (Beijing), and China (Ningxia) regions**: manually specify the S3 endpoint with the `--endpoint-url` command-line argument **and** the region name with the `--region` argument. For example, for the AWS GovCloud (US-West) region, specify `--endpoint-url https://s3.us-gov-west-1.amazonaws.com --region us-gov-west-1`. See [the S3 endpoints documentation](https://docs.aws.amazon.com/general/latest/gr/s3.html) for more details. These regions will be supported via only the `--region` command-line argument in the future (https://github.com/awslabs/mountpoint-s3/issues/4).
* **Access points**: use the [bucket-style access point alias](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-alias.html) for the access point as the bucket name to mount.
* **FIPS, dualstack, and transfer acceleration endpoints**: manually specify the S3 endpoint with the `--endpoint-url` command-line argument. See [the S3 endpoints documentation](https://docs.aws.amazon.com/general/latest/gr/s3.html) for more details. These endpoints will be configurable in the future (https://github.com/awslabs/mountpoint-s3/issues/4).

## Current status

Mountpoint for Amazon S3 is currently an alpha release and should not be used in production. We're tracking its production readiness and future features on the [Mountpoint for Amazon S3 public roadmap](https://github.com/orgs/awslabs/projects/84). We welcome suggestions for new features or use cases!

Our thinking around features is guided by our [tenets for Mountpoint for Amazon S3](doc/SEMANTICS.md#semantics-tenets). We don't intend to implement (and likely won't accept contributions of) features that cannot be efficiently executed against S3's object APIs. This rules out Mountpoint for Amazon S3 supporting some POSIX file system functionality like ACLs or file locking. For workloads that need these features, we recommend AWS fully managed file system services like [Amazon FSx for Lustre](https://aws.amazon.com/fsx/lustre/) and its [support for linking S3 buckets](https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html).

## Contributing

We welcome contributions to Mountpoint for Amazon S3! Please see [CONTRIBUTING.md](doc/CONTRIBUTING.md) for more information on how to report bugs or submit pull requests, and [LOGGING.md](doc/LOGGING.md) for details on how to capture logging data for bug reports.

Mountpoint for Amazon S3 is designed for high-performance access to the Amazon S3 service. While it may be functional against other storage services that use S3-like APIs, we aren't able to provide support for those use cases, and they may inadvertently break when we make changes to better support Amazon S3. We welcome contributions of minor compatibility fixes or performance improvements for these services if the changes can be tested against Amazon S3. 

### Security

If you discover a potential security issue in this project we ask that you notify AWS Security via our [vulnerability reporting page](http://aws.amazon.com/security/vulnerability-reporting/). Please do **not** create a public GitHub issue.

### Code of conduct

This project has adopted the [Amazon Open Source Code of Conduct](https://aws.github.io/code-of-conduct). See [CODE_OF_CONDUCT.md](doc/CODE_OF_CONDUCT.md) for more details.

## License

This project is licensed under the Apache-2.0 License. It builds on a number of other awesome projects with open source licenses, primarily:
* The [fuser](https://github.com/cberner/fuser) bindings for FUSE (MIT license)
* The [AWS Common Runtime](https://docs.aws.amazon.com/sdkref/latest/guide/common-runtime.html) for interacting with S3 (Apache-2.0 license)

See [deny.toml](deny.toml) for a list of licenses used by our dependencies.