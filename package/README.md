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

## Building Amazon Linux 2023 SRPM

For Amazon Linux 2023 specifically, you can build an SRPM (Source RPM) package using the dedicated build script. **The script must be run from the repository root directory:**

    ./package/generate_amzn2023_srpm.sh

This script will:
1. Generate an RPM spec file using the spec generator in `spec/`
2. Create a source tarball with all necessary files
3. Build an SRPM package ready for `mock` or `rpmbuild`

The SRPM will be created in `~/rpmbuild/SRPMS/` and can be used to build binary RPMs on Amazon Linux 2023 systems.

You'll need the same dependencies as local building above, plus:
- `uv` - Python package manager for the spec generator
- `rpmdevtools` - For RPM build environment setup

### Integration

This SRPM build process is also used by GitHub Actions workflow for automated al2023 build testing
