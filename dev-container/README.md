# Development Container

Docker container for running Mountpoint S3 tests on Linux. Useful for macOS users to test against a Linux kernel/OS.

The container uses runtime builds with persistent caching:
- System dependencies are baked into the image at build time
- Rust toolchains (`~/.rustup/`), cargo dependencies, and build artifacts are cached in Docker volumes between runs
- On each container start, the entrypoint ensures the correct Rust toolchain (from `rust-toolchain.toml`) is installed
- Source code is mounted at runtime (not baked into image)

## Quick Start

```bash
# Build and run the container
./dev-container/run.py --build

# Interactive shell
./dev-container/run.py

# Run a command (use -- to separate script args from container args)
./dev-container/run.py --use-credentials-from-aws-config -- cargo nextest run --features s3_tests,fuse_tests -p mountpoint-s3-fs
```

## Credential Options

You'll need to configure AWS credentials if you want to run things like the integration tests which access S3.

As an example, you might have credentials available in your `~/.aws/` folder.
You can use the `--use-credentials-from-aws-config` option to bind mount that directory into the container.

See `--help` for more available arguments.

## When to Rebuild

Rebuild the image when:
- System dependencies need updating

You do **not** need to rebuild when:
- Rust toolchain version changes in `rust-toolchain.toml` (the entrypoint installs the correct toolchain automatically)
- Code or cargo dependencies change (cached in Docker volumes)

## Cleanup

To remove the cached rustup volume (e.g., when old toolchains accumulate):

```bash
./dev-container/run.py --drop-rustup-volume
```

Build artifacts and cargo dependencies are cached in Docker volumes between runs, so you don't need to rebuild for code or dependency changes.
