# Developer Guide

This guide introduces developers to the Mountpoint for Amazon S3 project and covers common development tasks.
You should be reading this document if you are new to the project
and would like to be familar with its purpose and development.

## What is Mountpoint for Amazon S3?

Mountpoint for Amazon S3 (aka. Mountpoint, mountpoint-s3) is a high-throughput file client
that mounts Amazon S3 buckets as local file systems.
You can mount the filesystem and see the objects in your bucket as files,
with a directory structure created by interpreting the `/` delimiter.

Take a look at the root `README.md` for an overview of the project.

More specifically for developers, Mountpoint is a Linux FUSE file system.
Using FUSE, Mountpoint can run a file system in userspace rather than directly in the Linux kernel.
The kernel dispatches file system requests it receives to Mountpoint,
which translates file operations like `open` and `read` into S3 object API calls.
This provides applications access to S3 through a familiar file interface.

As a concrete example, customers are able to write the following Python code to interact with an S3 object:

```python
with open('/mnt/bucket/example/file.txt', 'r') as f:
    file_content = f.read()
    print(file_content)
```

### Limitations

Mountpoint isn't always the right fit for every solution involving files and S3.

Mountpoint avoids implementing support for operations that do not have a good equivalent in the S3 API.
For instance, it does not support random writing to files since there's no good way to do that
without needing to download significant amounts of data and reupload it.

When onboarding to the project, reading [Mountpoint's semantics doc](./SEMANTICS.md)
will help highlight the challenges faced in building this translation layer.

### Additional resources

* Jeff Barr's blog post about Mountpoint: https://aws.amazon.com/blogs/aws/mountpoint-for-amazon-s3-generally-available-and-ready-for-production-workloads/
* Section 2 of the paper "To FUSE or Not to FUSE: Performance of User-Space File Systems" has
  a nice introduction to FUSE with diagrams: https://www.usenix.org/system/files/conference/fast17/fast17-vangoor.pdf
* Linux FUSE documentation: https://github.com/torvalds/linux/blob/master/Documentation/filesystems/fuse.rst
* Definition of the FileSystem trait implemented by Mountpoint: https://docs.rs/fuser/latest/fuser/trait.Filesystem.html
* Equivalent definition of the FileSystem trait in [libfuse],
  the reference implementation for the userspace FUSE daemon: https://libfuse.github.io/doxygen/structfuse__lowlevel__ops.html
* FUSE protocol defined in the Linux kernel. Git blame can help provide additional context. https://github.com/torvalds/linux/blame/master/include/uapi/linux/fuse.h
* Mountpoint's semantic documentation: https://github.com/awslabs/mountpoint-s3/blob/main/doc/SEMANTICS.md

## Architecture & Code Organization

Mountpoint for Amazon S3 is organized as a Rust workspace with six crates,
each handling a specific layer of functionality.

### Crate Structure

```
mountpoint-s3/           # Main binary crate (CLI, mount logic)
mountpoint-s3-fs/        # Core filesystem implementation
mountpoint-s3-client/    # S3 API client
mountpoint-s3-fuser/     # FUSE bindings (fork of fuser)
mountpoint-s3-crt/       # AWS Common Runtime bindings
mountpoint-s3-crt-sys/   # Low-level CRT system bindings
```

**Dependency Hierarchy:**
```
mountpoint-s3                           # Main binary crate (CLI, mount logic)
└── mountpoint-s3-fs                    # Filesystem implementation
    ├── mountpoint-s3-client            # SDK-like S3 client
    │   └── mountpoint-s3-crt           # High-level AWS Common Runtime (CRT) bindings
    │       └── mountpoint-s3-crt-sys   # Low-level CRT system bindings
    └── mountpoint-s3-fuser             # FUSE bindings (fork of fuser)
```

### Layers

**Customer-facing Layer (`mountpoint-s3`)**
- CLI argument parsing and configuration
- Main entry point (`mount-s3` binary)

**Filesystem Layer (`mountpoint-s3-fs`)**
- FUSE filesystem implementation
- File/directory abstraction over S3 objects
- Caching and prefetching logic
- Inode management and metadata handling

**S3 Client Layer (`mountpoint-s3-client`)**
- Presents an SDK-like interface for talking to S3
- Implements construction of S3 requests like HeadObject, DeleteObject
- Provides streaming abstractions for reading and writing to S3

**FUSE Bindings (`mountpoint-s3-fuser`)**
- Fork of the `fuser` crate with Mountpoint-specific optimizations
- Low-level FUSE protocol handling
- Kernel interface for filesystem operations

**AWS Common Runtime (`mountpoint-s3-crt`, `mountpoint-s3-crt-sys`)**
- Rust bindings for AWS Common Runtime (CRT)
- `mountpoint-s3-crt` aims to provide a 'safe', idiomatic interface to the bindings in `mountpoint-s3-crt-sys`.

## Development Environment Setup

### Prerequisites

You will need the Rust and C toolchains installed.
The `docs/INSTALL.md` has a section on building from source which can get you started.
For running tests, you should [install cargo-nextest](https://nexte.st/docs/installation/pre-built-binaries/).

You will need a Linux environment that has FUSE support.

You should also have AWS credentials available for testing.
Short-term AWS credentials are recommended.
As an internal contributor, there are options recommended by the team owning Mountpoint.

## Working with the repository

Mountpoint for Amazon S3 is primarily developed on GitHub,
via its public open-source repository: https://github.com/awslabs/mountpoint-s3.
For new feature launches that depend on AWS service features that are not yet public,
the Mountpoint team works with an internal fork of the repository.

Many team members are using [Visual Studio Code](https://code.visualstudio.com/) to work with the project.

### Running Unit Tests

Unit tests are defined either in the modules themselves inside a `test` mod block,
or in the `tests/` directory of the crate.

Tests can be run with something as simple as the following commands.

```bash
# Run all unit tests
cargo nextest run

# Run only the S3 client unit tests
cargo nextest run -p mountpoint-s3-client
```

### Running Integration Tests

Mountpoint has a suite of integration tests, covering different components
such as the S3 client and end-to-end as a mounted FUSE file system.

The integration tests require an AWS Account with resources provisioned, such as S3 buckets and IAM roles.
For internal contributors, there are setup instructions available internally.

> TODO: Add details on what resources need to be created.

Integration tests are gated behind Rust compile-time feature flags.
The list of these may change over time.

The command below shows how to run the integration tests including FUSE-based tests and tests that require S3.

```bash
cargo nextest run --features fuse_tests,s3_tests
```

## Contributing Guidelines

For detailed contribution information, review [CONTRIBUTING.md](doc/CONTRIBUTING.md).
