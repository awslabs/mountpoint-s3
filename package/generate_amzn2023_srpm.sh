#!/bin/bash
set -euo pipefail

# Setup RPM build environment
# This script uses the standard RPM build directory structure at ~/rpmbuild which is created by rpmdev-setuptree and is the RPM packaging convention.
# The paths are hardcoded because this is the standard location expected by RPM build tools and cannot be easily configured.
rpmdev-setuptree

SPECS_DIR=~/rpmbuild/SPECS
SOURCES_DIR=~/rpmbuild/SOURCES

PACKAGE_DIR="$(dirname "$0")"
MOUNTPOINT_DIR="$(realpath "${PACKAGE_DIR}/..")"

# Generate spec file
uv run --directory "${MOUNTPOINT_DIR}/package/spec" python generate_spec.py amzn2023 --output "${SPECS_DIR}/amzn2023.spec"

# Extract version from spec file
VERSION=$(awk '/^Version:/ {print $2}' "${SPECS_DIR}/amzn2023.spec")

echo Source tarball
tar -czf "${SOURCES_DIR}/mountpoint-s3-${VERSION}.tar.gz" -C "${MOUNTPOINT_DIR}" .

echo Vendor tarball
cd "${MOUNTPOINT_DIR}"
cargo vendor
tar -czf "${SOURCES_DIR}/mountpoint-s3-${VERSION}-vendor.tar.gz" vendor
rm -rf vendor

cp LICENSE NOTICE "${SOURCES_DIR}/"

# Build SRPM
rpmbuild -bs "${SPECS_DIR}/amzn2023.spec"

# For GitHub Actions (if running in CI)
if [[ -n "${GITHUB_OUTPUT:-}" ]]; then
    # Required by current workflow - TODO: remove later
    echo "version=${VERSION}" >> "$GITHUB_OUTPUT"

    # TODO: replace "amzn2023" with the release field from the spec file
    echo "version-tag=${VERSION}-amzn2023" >> "$GITHUB_OUTPUT"
fi