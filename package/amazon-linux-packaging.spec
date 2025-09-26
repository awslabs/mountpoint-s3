%bcond_without check

Name:           mount-s3
Version:        1.20.0
Release:        1.amzn2023
Summary:        High-performance file system for Amazon S3

# Main project is Apache-2.0, but bundled components have various licenses
License:        Apache-2.0
URL:            https://github.com/awslabs/mountpoint-s3
Source0:        https://github.com/awslabs/mountpoint-s3/archive/v%{version}/mountpoint-s3-%{version}.tar.gz
# Vendor tarball containing all Rust crate dependencies
Source1:        mountpoint-s3-%{version}-vendor.tar.gz
Source2:        LICENSE
Source3:        NOTICE
Source4:        THIRD_PARTY_LICENSES

# BuildRequires lists dependencies that must be installed on the build system before the package can be compiled.
BuildRequires:  clang
BuildRequires:  clang-devel
BuildRequires:  llvm
BuildRequires:  rust
BuildRequires:  cargo
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

Requires:       fuse

# BUNDLED C/C++ LIBRARIES - Required virtual provides for security tracking
Provides: bundled(aws-c-auth)
Provides: bundled(aws-c-cal)
Provides: bundled(aws-c-common)
Provides: bundled(aws-c-compression)
Provides: bundled(aws-checksums)
Provides: bundled(aws-c-http)
Provides: bundled(aws-c-io)
Provides: bundled(aws-c-s3)
Provides: bundled(aws-c-sdkutils)
Provides: bundled(aws-lc)

%global _description %{expand:
Mountpoint for Amazon S3 is a high-performance file system for Amazon S3.
It allows you to mount an S3 bucket as a local file system, providing
high-throughput access to S3 objects through standard file system operations.

This package includes bundled AWS Common Runtime (CRT) libraries and
all Rust crate dependencies for reproducible builds.}

%description %{_description}

# This line extracts the main source tarball (Source0) into a directory named 
# mountpoint-s3-%%{version} and applies any patches with -p1 strip level. The -a1 
# flag additionally extracts the vendor tarball (Source1) into the same directory,
# creating the vendor/ subdirectory containing all Rust dependencies alongside 
# the main source code.
%prep
%autosetup -n mountpoint-s3 -p1 -a1

# This creates a Cargo configuration file that redirects all crate dependencies 
# from crates.io to the local vendor/ directory. When Cargo tries to fetch any 
# dependency, it will look in the vendor/ folder instead of accessing the 
# internet, enabling a completely offline build using the pre-vendored 
# dependencies.
mkdir -p .cargo
cat > .cargo/config.toml <<'EOF'
[source.crates-io]
replace-with = "vendored-sources"

[source.vendored-sources]
directory = "vendor"
EOF

%build
# FORTIFY_SOURCE throws warnings when optimization is missing, -Werror makes them fatal
# This suppresses those warnings and ensures CMake can detect pthread properly
export CFLAGS="${CFLAGS:-%{optflags}} -O2 -Wno-error=cpp"
export CMAKE_C_FLAGS="$CFLAGS"

# This compiles the Rust project in optimized release mode (--release) while 
# preventing any network access (--offline) and forbidding changes to the 
# dependency lock file (--frozen), ensuring a reproducible build using only the 
# pre-vendored dependencies.
cargo build --release --frozen --offline

# Fedora packaging guidlines require a manifest that lists the names and versions of all
# crates in the vendor tarball.  They also note that this file must be added as a %license file. Macros which do this automatically are not available on all platforms.
grep -E '^(name|version) = ' Cargo.lock \
  | sed -E 's/^(name = |version = )"//;s/"$//' \
  | paste - - | tr '\t' '-' > cargo-vendor.txt

%install

install -d "%{buildroot}/opt/aws/mountpoint-s3/bin"
install -d "%{buildroot}/usr/bin"
install -d "%{buildroot}/usr/sbin"

install -D -m0755 target/release/mount-s3 \
    "%{buildroot}/opt/aws/mountpoint-s3/bin/mount-s3"

ln -sf /opt/aws/mountpoint-s3/bin/mount-s3 "%{buildroot}/usr/bin/mount-s3"
ln -sf /opt/aws/mountpoint-s3/bin/mount-s3 "%{buildroot}/usr/sbin/mount.mount-s3"

install -D -m0644 %{SOURCE2} "%{buildroot}/opt/aws/mountpoint-s3/LICENSE"
install -D -m0644 %{SOURCE3} "%{buildroot}/opt/aws/mountpoint-s3/NOTICE"
install -D -m0644 %{SOURCE4} "%{buildroot}/opt/aws/mountpoint-s3/THIRD_PARTY_LICENSES"
echo "%{version}" > "%{buildroot}/opt/aws/mountpoint-s3/VERSION"
install -D -m0644 cargo-vendor.txt "%{buildroot}/opt/aws/mountpoint-s3/cargo-vendor.txt"

%if %{with check}
%check
# We reuse the same optimized flags as in the  %build section
export CFLAGS="%{optflags} -O2 -Wno-error=cpp"
export CMAKE_C_FLAGS="$CFLAGS"

# ulimit -n 4096 increases the maximum number of open file descriptors to 4096 
# because Mountpoint-S3's tests open many files simultaneously and would fail with
# the default lower limit.
ulimit -n 4096
cargo test --release --frozen --offline -- \
    --skip mnt::test::mount_unmount \
    --skip unmount_no_send
%endif

%files
/opt/aws/mountpoint-s3
/opt/aws/mountpoint-s3/LICENSE
/opt/aws/mountpoint-s3/NOTICE
/opt/aws/mountpoint-s3/THIRD_PARTY_LICENSES
/opt/aws/mountpoint-s3/VERSION
/opt/aws/mountpoint-s3/bin
/opt/aws/mountpoint-s3/bin/mount-s3
/opt/aws/mountpoint-s3/cargo-vendor.txt
/usr/bin/mount-s3
/usr/sbin/mount.mount-s3

%changelog
* Wed Sep 24 2025 Tadiwa Magwenzi <tadiwaom@amazon.com> - 1.20.0
- Initial packaging for AL submission