# Building Mountpoint packages

This directory contains the infrastructure to compile new Mountpoint release packages. It compiles three artifacts:
* An RPM package for Amazon Linux, RHEL, CentOS, etc.
* A DEB package for Debian, Ubuntu, etc.
* A .tar.gz package for other Linux distributions

## Building in Docker

It's recommended to perform the build in a Docker container using the image provided in the `Dockerfile`,
to ensure the necessary dependency versions are in place.

First, build the image:

    docker build -t mountpoint-builder .

Now run the container. It expects the root of this Git repository to be mounted at `/mountpoint` in the container, so fill in the `source` of the bind mount appropriately.
You should pass the `--expected-version` to the build script to verify that the version of Mountpoint being compiled is what you expect.

    docker run --rm --mount type=bind,source=/path/to/mountpoint-git-repo,target=/mountpoint mountpoint-builder --expected-version 0.3.0

The container will create an `out` folder in the root of the Git repository containing the build artifacts.

## Building locally

If building outside Docker, your host needs the appropriate dependencies installed.
On Amazon Linux 2, some dependencies come from EPEL, so you'll need to set that up first if you want to install a DEB:

    sudo amazon-linux-extras install epel

Then install the depdencies:

    sudo yum install fuse fuse-devel make cmake3 clang git pkg-config dpkg fakeroot rpmdevtools tar python3

If you don't want to compile a DEB, you can skip `dpkg` and `fakeroot`, and pass the `--no-deb` flag to the build script.
If you don't want to compile an RPM, you can skip `rpmdevtools`, and pass the `--no-rpm` flag to the build script.

You'll also need Rust, and the [cargo-about] tool to generate third-party attribution documents:

    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
    source "$HOME/.cargo/env"
    cargo install --locked cargo-about

Now run the build script:

    python3 package.py --expected-version 0.3.0

By default, the script will discover the Cargo workspace by walking up the directory hierarchy starting from the current working directory. You can manually specify the workspace root with the `--root-dir` argument.

The script will create an `out` folder in the root of the Git repository containing the build artifacts.
