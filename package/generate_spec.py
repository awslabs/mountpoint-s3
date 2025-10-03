#!/usr/bin/env python3
import subprocess
import os
import sys
from datetime import datetime

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
    if len(sys.argv) != 2:
        print("Usage: generate_spec.py <build_target>")
        print("Example: generate_spec.py amzn2023")
        sys.exit(1)

    build_target = sys.argv[1]
    version = get_version()
    rust_version = get_rust_version()
    submodule_versions = get_submodule_versions()
    current_date = datetime.now().strftime("%a %b %d %Y")

    spec_content = f"""%bcond_without check

Name:           mount-s3
Version:        {version}
Release:        {build_target}
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
"""
    spec_content += f"""
export MOUNTPOINT_S3_AWS_RELEASE="{build_target}"
"""
    spec_content += """
cargo build --release
%cargo_vendor_manifest

%install
mkdir -p %{buildroot}/opt/aws/mountpoint-s3/bin
mkdir -p %{buildroot}/%{_prefix}/sbin
mkdir -p %{buildroot}/%{_bindir}
install -m 755 target/release/mount-s3 %{buildroot}/opt/aws/mountpoint-s3/bin/mount-s3
install -m 644 NOTICE %{buildroot}/opt/aws/mountpoint-s3/
install -m 644 LICENSE %{buildroot}/opt/aws/mountpoint-s3/
install -m 644 THIRD_PARTY_LICENSES %{buildroot}/opt/aws/mountpoint-s3/
install -m 644 cargo-vendor.txt %{buildroot}/opt/aws/mountpoint-s3/
echo "%{version}" > %{buildroot}/opt/aws/mountpoint-s3/VERSION
ln -sf /opt/aws/mountpoint-s3/bin/mount-s3 %{buildroot}/%{_bindir}/mount-s3
ln -sf /opt/aws/mountpoint-s3/bin/mount-s3 %{buildroot}/%{_prefix}/sbin/mount.mount-s3

%files
%defattr(-,root,root,-)
%dir %attr(755,root,root) /opt/aws/mountpoint-s3
%dir %attr(755,root,root) /opt/aws/mountpoint-s3/bin
%attr(755,root,root) /opt/aws/mountpoint-s3/bin/mount-s3
%doc %attr(644,root,root) /opt/aws/mountpoint-s3/NOTICE
%license %attr(644,root,root) /opt/aws/mountpoint-s3/LICENSE
%license %attr(644,root,root) /opt/aws/mountpoint-s3/cargo-vendor.txt
%attr(644,root,root) /opt/aws/mountpoint-s3/THIRD_PARTY_LICENSES
%attr(644,root,root) /opt/aws/mountpoint-s3/VERSION
%attr(755,root,root) %{_bindir}/mount-s3
%attr(755,root,root) %{_prefix}/sbin/mount.mount-s3
"""
    spec_content += f"""
%changelog
* {current_date} Mountpoint-S3 Team <s3-opensource@amazon.com> - {version}.{build_target}
- {version} {build_target} Release
- Refer to https://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md
"""

    with open(f"{build_target}-packaging.spec", "w") as f:
        f.write(spec_content)

    print(f"Generated {build_target}-packaging.spec")


if __name__ == "__main__":
    main()
