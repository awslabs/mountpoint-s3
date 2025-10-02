%bcond_without check

Name:           mount-s3
Version:        1.21.0
Release:        amzn2023
Summary:        Mountpoint for Amazon S3

License:        Apache-2.0
URL:            https://github.com/awslabs/mountpoint-s3 
Source0:        mountpoint-s3-%{version}.tar.gz
Source1:        LICENSE
Source2:        NOTICE
Source3:        THIRD_PARTY_LICENSES

BuildRequires:  clang
BuildRequires:  clang-devel
BuildRequires:  rust >= 1.88
BuildRequires:  cargo >= 1.88
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

# BUNDLED C/C++ LIBRARIES - Required virtual provides for security tracking
Provides: bundled(aws-c-auth) = 0.9.0
Provides: bundled(aws-c-cal) = 0.9.2
Provides: bundled(aws-c-common) = 0.12.4
Provides: bundled(aws-c-compression) = 0.3.1
Provides: bundled(aws-c-http) = 0.10.3
Provides: bundled(aws-c-io) = 0.21.1
Provides: bundled(aws-c-s3) = 0.8.5
Provides: bundled(aws-c-sdkutils) = 0.2.4
Provides: bundled(aws-checksums) = 0.2.6
Provides: bundled(aws-lc) = 1.53.1
Provides: bundled(s2n-tls) = 1.5.18

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

export MOUNTPOINT_S3_AWS_RELEASE="amzn2023"

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

%changelog
* Thu Oct 02 2025 Mountpoint-S3 Team <s3-opensource@amazon.com> - 1.21.0.amzn2023
- 1.21.0 amzn2023 Release
- Refer to https://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md
