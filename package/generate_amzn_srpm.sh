#!/bin/bash
set -euo pipefail

DIST="${1:?usage: $0 <[amzn2023|amzn2027]>}"

# Setup RPM build environment
# This script uses the standard RPM build directory structure at ~/rpmbuild which is created by rpmdev-setuptree and is the RPM packaging convention.
# The paths are hardcoded because this is the standard location expected by RPM build tools and cannot be easily configured.
rpmdev-setuptree

SPECS_DIR=~/rpmbuild/SPECS
SOURCES_DIR=~/rpmbuild/SOURCES

PACKAGE_DIR="$(dirname "$0")"
MOUNTPOINT_DIR="$(realpath "${PACKAGE_DIR}/..")"

SPECS_FILE="${SPECS_DIR}/${DIST}.spec"

# Generate spec file
uv run --directory "${MOUNTPOINT_DIR}/package/spec" python generate_spec.py ${DIST} --template amzn.spec.template --output ${SPECS_FILE}

# Extract version and release from spec file
VERSION=$(rpmspec --query --srpm --queryformat="%{version}" ${SPECS_FILE})
RELEASE=$(rpmspec --query --srpm --queryformat="%{release}" ${SPECS_FILE})
echo "spec version=${VERSION}"
echo "spec release=${RELEASE}"

# Tarballs mirror the ones Amazon Linux generates from the v${VERSION} git tag: named after the tag,
# with the sources under mountpoint-s3-${VERSION}/ and the crates under vendor/
echo Source tarball
cd "${MOUNTPOINT_DIR}"/..
tar --transform "s|^mountpoint-s3|mountpoint-s3-${VERSION}|" -czf "${SOURCES_DIR}/mountpoint-s3-v${VERSION}.tar.gz" mountpoint-s3

echo Vendor tarball
cd mountpoint-s3
cargo vendor
tar -cJf "${SOURCES_DIR}/mountpoint-s3-v${VERSION}-vendor.tar.xz" vendor
rm -rf vendor

cp LICENSE NOTICE "${SOURCES_DIR}/"

# Build SRPM
rpmbuild -bs ${SPECS_FILE}

# For GitHub Actions (if running in CI)
if [[ -n "${GITHUB_OUTPUT:-}" ]]; then
    echo "version-tag=${VERSION}-${RELEASE}" >> "$GITHUB_OUTPUT"
fi