#!/usr/bin/env python3
import subprocess
import os

script_dir = os.path.dirname(__file__)
project_root = os.path.dirname(script_dir)


def get_version():
    cargo_path = os.path.join(project_root, "mountpoint-s3", "Cargo.toml")
    with open(cargo_path, "r") as f:
        for line in f:
            if "version" in line and "=" in line:
                return line.split('"')[1]


def get_rust_version():
    rust_path = os.path.join(project_root, "rust-toolchain.toml")
    with open(rust_path, "r") as f:
        for line in f:
            if "channel" in line and "=" in line:
                return line.split('"')[1]


def get_submodule_versions():
    result = subprocess.run(
        'git submodule foreach -q \'echo $name `git describe --tags`\'', capture_output=True, text=True, shell=True
    )
    versions = {}
    for line in result.stdout.strip().split('\n'):
        if line.strip():
            parts = line.strip().split(' ', 1)
            if len(parts) == 2:
                name, version = parts
                versions[name] = version.lstrip('v')
    return versions


def main():
    version = get_version()
    rust_version = get_rust_version()
    submodule_versions = get_submodule_versions()

    spec_content = f"""%bcond_without check

Name:           mount-s3
Version:        {version}
Release:        1.amzn2023
Summary:        Mountpoint for Amazon S3

License:        Apache-2.0
URL:            https://github.com/awslabs/mountpoint-s3 
Source0:        mountpoint-s3-%{{version}}.tar.gz
Source1:        LICENSE
Source2:        NOTICE
Source3:        THIRD_PARTY_LICENSES

BuildRequires:  clang
BuildRequires:  clang-devel
BuildRequires:  rust >= {rust_version}
BuildRequires:  cargo >= {rust_version}
BuildRequires:  cmake
BuildRequires:  gcc
BuildRequires:  gcc-c++
BuildRequires:  git
BuildRequires:  pkgconfig
BuildRequires:  fuse-devel
BuildRequires:  glibc-devel
BuildRequires:  glibc-headers
BuildRequires:  glibc-static
BuildRequires:  libstdc++-devel
BuildRequires:  nasm
BuildRequires:  make
BuildRequires:  which
BuildRequires:  rust-packaging
BuildRequires:  rust-toolset

ExclusiveArch: x86_64 aarch64

# BUNDLED C/C++ LIBRARIES - Required virtual provides for security tracking"""

    for lib_name, lib_version in submodule_versions.items():
        spec_content += f"\nProvides: bundled({lib_name}) = {lib_version}"

    spec_content += """

Requires:       ca-certificates
Requires:       fuse >= 2.9.0
Requires:       fuse-libs >= 2.9.0

%description
Mountpoint for Amazon S3 is a simple, high-throughput file client for
mounting an Amazon S3 bucket as a local file system. With Mountpoint for Amazon
S3, your applications can access objects stored in Amazon S3 through file
operations like open and read. Mountpoint for Amazon S3 automatically
translates these operations into S3 object API calls, giving your applications
access to the elastic storage and throughput of Amazon S3 through a file
interface.

%prep
%autosetup -n mountpoint-s3
%cargo_prep -v vendor

%build
export CFLAGS="${CFLAGS:-%{optflags}} -O2 -Wno-error=cpp"
export CMAKE_C_FLAGS="$CFLAGS"
export MOUNTPOINT_S3_AWS_RELEASE="true"
export MOUNTPOINT_S3_AL2023_BUILD="true"


cargo build --release
%cargo_vendor_manifest

%install
mkdir -p %{buildroot}/opt/aws/mountpoint-s3/bin
mkdir -p %{buildroot}/%{_prefix}/sbin
mkdir -p %{buildroot}/%{_bindir}
mkdir -p %{buildroot}/%{_bindir}
cp target/release/mount-s3 %{buildroot}/opt/aws/mountpoint-s3/bin/mount-s3
cp NOTICE %{buildroot}/opt/aws/mountpoint-s3/
cp LICENSE %{buildroot}/opt/aws/mountpoint-s3/
cp THIRD_PARTY_LICENSES %{buildroot}/opt/aws/mountpoint-s3/
cp cargo-vendor.txt %{buildroot}/opt/aws/mountpoint-s3/
echo "%{version}" > %{buildroot}/opt/aws/mountpoint-s3/VERSION
ln -sf /opt/aws/mountpoint-s3/bin/mount-s3 %{buildroot}/%{_bindir}/mount-s3
ln -sf /opt/aws/mountpoint-s3/bin/mount-s3 %{buildroot}/%{_prefix}/sbin/mount.mount-s3

%files
%dir /opt/aws/mountpoint-s3
%dir /opt/aws/mountpoint-s3/bin
/opt/aws/mountpoint-s3/bin/mount-s3
%doc /opt/aws/mountpoint-s3/NOTICE
%license /opt/aws/mountpoint-s3/LICENSE
%license /opt/aws/mountpoint-s3/cargo-vendor.txt
/opt/aws/mountpoint-s3/THIRD_PARTY_LICENSES
/opt/aws/mountpoint-s3/VERSION
%{_bindir}/mount-s3
%{_prefix}/sbin/mount.mount-s3

%changelog
* Wed Sep 24 2025 Tadiwa Magwenzi <tadiwaom@amazon.com> - 1.20.0
- Initial packaging for AL submission
"""

    with open("amazon-linux-2023-packaging.spec", "w") as f:
        f.write(spec_content)

    print("Generated amazon-linux-2023-packaging.spec")


if __name__ == "__main__":
    main()
