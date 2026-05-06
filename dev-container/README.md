# Development Container

Docker container for running Mountpoint S3 tests on Linux. Useful for macOS users to test against a Linux kernel/OS.

The container uses runtime builds with persistent caching:
- System dependencies are baked into the image at build time
- Rust toolchains (`~/.rustup/`), cargo dependencies, and build artifacts are cached in Docker volumes between runs
- On each container start, the entrypoint ensures the correct Rust toolchain (from `rust-toolchain.toml`) is installed
- Source code is mounted at runtime (not baked into image)

## Quick Start

Populate a `.env` file with environment variables required for the tests.
The script will automatically set the variables in the container.

For example (some entries omitted for brevity):

```env
# .env
S3_BUCKET_NAME=amzn-s3-demo-bucket
S3_REGION=us-east-1
S3_SUBSESSION_IAM_ROLE=arn:aws:iam::111122223333:role/Mountpoint-Dev-SubSessionIamRole
S3_BUCKET_TEST_PREFIX=github-actions-tmp/
AWS_PROFILE=dev-container
```

Then use the script to interact with the container as below.

```bash
# Build and run the container
./dev-container/dev.py build

# Interactive shell
./dev-container/dev.py run

# Run a command (use -- to separate script args from container args), environment is auto populated from .env file
./dev-container/dev.py run --use-credentials-from-aws-config -- cargo nextest run --features s3_tests,fuse_tests -p mountpoint-s3-fs

# Find help information for all the options available
./dev-container/dev.py --help
```

## Credential Options

You'll need to configure AWS credentials if you want to run things like the integration tests which access S3.

As an example, you might have credentials available in your `~/.aws/` folder.
You can use the `--use-credentials-from-aws-config` option to bind mount that directory into the container.

You may even want to configure an AWS profile which you use inside the container.
In this case, you may have credentials inside `~/.aws/credentials` and then add `AWS_PROFILE` to your dotenv file.

See `--help` for more available arguments.

## When to Rebuild

Rebuild the image when:
- System dependencies need updating

You do **not** need to rebuild when:
- Rust toolchain version changes in `rust-toolchain.toml` (the entrypoint installs the correct toolchain automatically)
- Code or cargo dependencies change (cached in Docker volumes)

## Cleanup

To remove resources like Docker volumes (e.g., when old toolchains accumulate):

```bash
./dev-container/dev.py clean
```
