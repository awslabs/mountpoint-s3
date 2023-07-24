# Mountpoint for Amazon S3

[![CI Status](https://github.com/awslabs/mountpoint-s3/actions/workflows/integration_main.yml/badge.svg?branch=main)](https://github.com/awslabs/mountpoint-s3/actions/workflows/integration_main.yml)

Mountpoint for Amazon S3 is a simple, high-throughput file client for [mounting an Amazon S3 bucket as a local file system](https://aws.amazon.com/blogs/storage/the-inside-story-on-mountpoint-for-amazon-s3-a-high-performance-open-source-file-client/). With Mountpoint for Amazon S3, your applications can access objects stored in Amazon S3 through file operations like `open` and `read`. Mountpoint for Amazon S3 automatically translates these operations into S3 object API calls, giving your applications access to the elastic storage and throughput of Amazon S3 through a file interface.

Mountpoint for Amazon S3 is optimized for read-heavy workloads that need high throughput, and does not implement the full POSIX specification for file systems. For example, Mountpoint for Amazon S3 only supports write operations to new files, and writes must be made to the file sequentially. See [SEMANTICS.md](doc/SEMANTICS.md) for a detailed description of Mountpoint for Amazon S3's behavior and POSIX support and how they could affect your application. For workloads that need full POSIX support, we recommend [Amazon FSx for Lustre](https://aws.amazon.com/fsx/lustre/) and its [support for linking S3 buckets](https://docs.aws.amazon.com/fsx/latest/LustreGuide/create-dra-linked-data-repo.html).

## Current status

Mountpoint for Amazon S3 is **currently an alpha release and should not be used in production**. We're tracking its production readiness and future features on the [Mountpoint for Amazon S3 public roadmap](https://github.com/orgs/awslabs/projects/84). We're especially interested in early feedback on features, performance, and compatibility. Please send feedback by [opening a GitHub issue](https://github.com/awslabs/mountpoint-s3/issues/new/choose).

This release has some notable restrictions:
* The only way to install the alpha release of Mountpoint for Amazon S3 is by compiling from source (see [Installation](#installation) below). This will change in a future release.
* Manual endpoint configuration might be required for some S3 customers (see [Configuration and usage](#configuration-and-usage) below).
* Objects written with Mountpoint for Amazon S3 are [always stored in the S3 Standard storage class](https://github.com/awslabs/mountpoint-s3/issues/34).

## Getting started

The alpha release of Mountpoint for Amazon S3 is only available by building from source, and only supports Linux.

### Installation

First, install the necessary dependencies. For RPM-based distributions (Amazon Linux 2 and 2023, Fedora, CentOS, etc):

    sudo yum install fuse fuse-devel cmake3 clang git pkg-config

or for apt-based distributions (Debian, Ubuntu, etc):

    sudo apt install fuse libfuse-dev cmake clang git pkg-config

Second, install the Rust compiler via [rustup](https://rustup.rs/):

    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    source "$HOME/.cargo/env"

Now clone this repository and its submodules:

    git clone --recurse-submodules https://github.com/awslabs/mountpoint-s3.git

Finally, compile the client:

    cd mountpoint-s3
    cargo build --release

The final binary will be at `target/release/mount-s3`.
The following instructions assume you have the binary on your path.
Add it to a location on your path now, or prefix `mount-s3` commands with the path to the binary.

### Configuration and usage

To use Mountpoint for Amazon S3, your host needs [access to valid AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html). For example, you could [create a new IAM user and add its credentials to the `~/.aws/credentials` file](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html), or [associate your EC2 instance with an IAM role](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html).

Launch Mountpoint for Amazon S3 by running the `mount-s3` command.
Replace `DOC-EXAMPLE-BUCKET` with the name of your bucket,
and specify the directory in which your S3 bucket should be mounted (here, `~/mnt`):

    mkdir ~/mnt
    mount-s3 DOC-EXAMPLE-BUCKET ~/mnt

The client will run in the background by default, and the `~/mnt` directory now gives access to the objects in your S3 bucket.

To unmount your S3 bucket and exit Mountpoint for Amazon S3, run the `umount` command:

    umount ~/mnt

### Additional configuration

Mountpoint for Amazon S3 supports the same [configuration options for AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html) as the AWS CLI. For example, to use a different profile from your `~/.aws/config` configuration file, set the `AWS_PROFILE` environment variable or pass the `--profile` argument to `mount-s3`.

To use Mountpoint for Amazon S3 with [S3 Access Points](https://aws.amazon.com/s3/features/access-points/), use the [bucket-style access point alias](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-alias.html) of the access point as the bucket name to mount.

For the alpha release, additional configuration is required to use Mountpoint for Amazon S3 in some circumstances:

* **AWS GovCloud, China (Beijing), and China (Ningxia) regions**: manually specify the S3 endpoint with the `--endpoint-url` command-line argument **and** the region name with the `--region` argument. For example, for the AWS GovCloud (US-West) region, specify `--endpoint-url https://s3.us-gov-west-1.amazonaws.com --region us-gov-west-1`. See [the S3 endpoints documentation](https://docs.aws.amazon.com/general/latest/gr/s3.html) for more details. These regions will be supported via only the `--region` command-line argument in the future (https://github.com/awslabs/mountpoint-s3/issues/4).
* **FIPS, dualstack, and transfer acceleration endpoints**: manually specify the S3 endpoint with the `--endpoint-url` command-line argument. See [the S3 endpoints documentation](https://docs.aws.amazon.com/general/latest/gr/s3.html) for more details. These endpoints will be configurable in the future (https://github.com/awslabs/mountpoint-s3/issues/4).

#### Compatibility with other storage services

Mountpoint for Amazon S3 is designed for high-performance access to the Amazon S3 service. While it may be functional against other storage services that use S3-like APIs, we aren't able to provide support for those use cases, and they may inadvertently break when we make changes to better support Amazon S3. We welcome contributions of minor compatibility fixes or performance improvements for these services if the changes can be tested against Amazon S3.

### Alternative installation options

#### Mountpoint for Amazon S3 using Docker

A sample [Dockerfile](docker/Dockerfile) is provided, using Amazon Linux 2023 as a base.

First, build the container image:

    cd mountpoint-s3/docker
    docker build -t mountpoint-s3 .

Before running the container, you'll need to provide AWS credentials as [described above](#additional-configuration).
We recommend using short-term credentials whenever possible.
For example, if you run your containers on an EC2 instance,
you can [associate an IAM role with the instance](https://docs.aws.amazon.com/sdkref/latest/guide/access-iam-roles-for-ec2.html)
and Mountpoint for Amazon S3 will automatically assume that role at startup.
[Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html) also supports short-term credentials
by [associating an IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) with your ECS task.
If you need to use long-term credentials, set the [`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html), and pass those variables to Docker with the `--env AWS_ACCESS_KEY_ID --env AWS_SECRET_ACCESS_KEY` arguments.

To launch the container, run the following command,
replacing `DOC-EXAMPLE-BUCKET` with the name of your S3 bucket:

     docker run -it --cap-add SYS_ADMIN --device /dev/fuse \
        mountpoint-s3 /bin/bash -c "./mount-s3 DOC-EXAMPLE-BUCKET /mnt"

Inside the container, your bucket will be mounted at the `/mnt` path.

#### Arch Linux AUR (unofficial)

If you're using Arch Linux, you can use the unofficial [AUR](https://aur.archlinux.org/packages/mountpoint-s3-git) package. Using [Yay](https://github.com/Jguer/yay):

    yay -S mountpoint-s3-git

## Contributing

We welcome contributions to Mountpoint for Amazon S3! Please see [CONTRIBUTING.md](doc/CONTRIBUTING.md) for more information on how to report bugs or submit pull requests. We especially welcome contributions to issues tagged as [good first issues to work on](https://github.com/awslabs/mountpoint-s3/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22).

For potential bug reports, see [LOGGING.md](doc/LOGGING.md) for details on how to capture logging data.
For performance issues, see [BENCHMARKING.md](doc/BENCHMARKING.md) for documentation about performance regression testing.

### Security

If you discover a potential security issue in this project we ask that you notify AWS Security via our [vulnerability reporting page](http://aws.amazon.com/security/vulnerability-reporting/). Please do **not** create a public GitHub issue.

### Code of conduct

This project has adopted the [Amazon Open Source Code of Conduct](https://aws.github.io/code-of-conduct). See [CODE_OF_CONDUCT.md](doc/CODE_OF_CONDUCT.md) for more details.

## License

This project is licensed under the Apache-2.0 License. It builds on a number of other awesome projects with open source licenses, primarily:
* The [fuser](https://github.com/cberner/fuser) bindings for FUSE (MIT license)
* The [AWS Common Runtime](https://docs.aws.amazon.com/sdkref/latest/guide/common-runtime.html) for interacting with S3 (Apache-2.0 license)

See [deny.toml](deny.toml) for a list of licenses used by our dependencies.
