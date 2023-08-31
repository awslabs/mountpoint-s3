# Mountpoint for Amazon S3

[![Tests](https://github.com/awslabs/mountpoint-s3/actions/workflows/tests.yml/badge.svg)](https://github.com/awslabs/mountpoint-s3/actions/workflows/tests.yml)
[![Integration tests](https://github.com/awslabs/mountpoint-s3/actions/workflows/integration_main.yml/badge.svg?branch=main)](https://github.com/awslabs/mountpoint-s3/actions/workflows/integration_main.yml)

Mountpoint for Amazon S3 is a simple, high-throughput file client for [mounting an Amazon S3 bucket as a local file system](https://aws.amazon.com/blogs/storage/the-inside-story-on-mountpoint-for-amazon-s3-a-high-performance-open-source-file-client/). With Mountpoint for Amazon S3, your applications can access objects stored in Amazon S3 through file operations like `open` and `read`. Mountpoint for Amazon S3 automatically translates these operations into S3 object API calls, giving your applications access to the elastic storage and throughput of Amazon S3 through a file interface.

Mountpoint for Amazon S3 is optimized for applications that need high read throughput to large objects, potentially from many clients at once, and to write new objects sequentially from a single client at a time. This means it's a great fit for applications that use a file interface to:
* read large objects from S3, potentially from many instances concurrently, without downloading them to local storage first
* access only some S3 objects out of a larger data set, but can't predict which objects in advance
* upload their output to S3 directly, or upload files from local storage with tools like `cp`

but probably not the right fit for applications that:
* use file operations that S3 doesn't natively support, like directory renaming or symlinks
* make edits or appends to existing files in-place (don't work on your Git repository or SQLite database in Mountpoint 😄)
* live editing files with text editors like vi

Mountpoint for Amazon S3 does not implement all the features of a POSIX file system, and there are some differences that may affect compatibility with your application. See [Mountpoint file system behavior](doc/SEMANTICS.md) for a detailed description of Mountpoint for Amazon S3's behavior and POSIX support and how they could affect your application.

## Current status

Mountpoint for Amazon S3 is generally available! We're tracking future feature development on the [Mountpoint for Amazon S3 public roadmap](https://github.com/orgs/awslabs/projects/84). We're always interested in feedback on features, performance, and compatibility. Please send feedback by [opening a new GitHub issue](https://github.com/awslabs/mountpoint-s3/issues/new/choose) or adding your input to an existing roadmap issue.

## Getting started

Run these two commands to install Mountpoint for Amazon S3 on your Amazon Linux EC2 instance (for Graviton instances, replace `x86_64` with `arm64` in the URL):

    wget https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.rpm
    sudo yum install -y ./mount-s3.rpm

On Ubuntu, use these commands instead (for Graviton instances, replace `x86_64` with `arm64` in the URL):

    wget https://s3.amazonaws.com/mountpoint-s3-release/latest/x86_64/mount-s3.deb
    sudo apt-get install -y ./mount-s3.deb

See [Installing Mountpoint for Amazon S3](doc/INSTALL.md) for detailed instructions and other installation options (including Docker or building from source).

Once you've got Mountpoint for Amazon S3 installed, you can mount your Amazon S3 bucket.
You'll need valid AWS credentials to access your bucket;
for example, Mountpoint will automatically use credentials from [an IAM role associated with your EC2 instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html),
or you can use the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables.

To mount your bucket, run this command,
replacing `DOC-EXAMPLE-BUCKET` with the name of your bucket
and `/path/to/mount` with the directory you want to mount the bucket to:

    mount-s3 DOC-EXAMPLE-BUCKET /path/to/mount

Now you can work with your bucket contents as if they were a local file system:

    ls /path/to/mount
    echo "Hello World!" > /path/to/mount/Data.txt
    cat /path/to/mount/Data.txt

When you're finished accessing your bucket, you can unmount it (you might need `sudo`):

    umount /path/to/mount

See [Configuring Mountpoint for Amazon S3](doc/CONFIGURATION.md) for more details on how to configure and use Mountpoint, including options for providing AWS credentials.

### Compatibility with other storage services

Mountpoint for Amazon S3 is designed for high-performance access to the Amazon S3 service. While it may be functional against other storage services that use S3-like APIs, we aren't able to provide support for those use cases, and they may inadvertently break when we make changes to better support Amazon S3. We welcome contributions of minor compatibility fixes or performance improvements for these services if the changes can be tested against Amazon S3.

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
* The [AWS Common Runtime](https://docs.aws.amazon.com/sdkref/latest/guide/common-runtime.html) for interacting with S3 (Apache 2.0 license)

See [deny.toml](deny.toml) for a list of licenses used by our dependencies.
