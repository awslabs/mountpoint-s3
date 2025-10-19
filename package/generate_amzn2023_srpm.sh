#!/bin/bash
set -euo pipefail

# Setup RPM build environment
rpmdev-setuptree

# Generate spec file
uv run --directory package/spec python generate_spec.py amzn2023 --output ~/rpmbuild/SPECS/amzn2023.spec

# Extract version from spec file
VERSION=$(awk '/^Version:/ {print $2}' ~/rpmbuild/SPECS/amzn2023.spec)

cargo vendor
cargo about generate --config package/attribution.toml --output-file ~/rpmbuild/SOURCES/THIRD_PARTY_LICENSES package/attribution.hbs
cp LICENSE NOTICE ~/rpmbuild/SOURCES/

# Create source tarball
cd ..
tar -czf "mountpoint-s3-${VERSION}.tar.gz" mountpoint-s3
cp "mountpoint-s3-${VERSION}.tar.gz" ~/rpmbuild/SOURCES/

# Build SRPM
rpmbuild -bs ~/rpmbuild/SPECS/amzn2023.spec

# For GitHub Actions (if running in CI)
if [[ -n "${GITHUB_OUTPUT:-}" ]]; then
    echo "version=${VERSION}" >> "$GITHUB_OUTPUT"
fi
