#!/usr/bin/env bash

# Exit on errors
set -e

# Edit the Github Actions fstab file to not mount some azure disk which times out and fails the CI.
if [[ "${GITHUB_ACTIONS}" ]]; then
  sudo sed -i -E 's/^(\/dev\/disk\/cloud\/azure_resource-part1)/#\1/g' /etc/fstab
fi

source "$(dirname "$(which "$0")")/spawn_mounts.sh"

build_out=$(cargo build --bin mount-s3 --release --message-format=json-render-diagnostics)
MOUNTPOINT_PATH=$(printf "%s" "$build_out" | jq -js '[.[] | select(.reason == "compiler-artifact") | select(.executable != null)] | last | .executable')
echo "Mountpoint path: $MOUNTPOINT_PATH"

FSTAB_CONTENT="
${MOUNTPOINT_PATH}#${S3_BUCKET_NAME} /mnt/mountpoint_ro fuse allow-other,_netdev,nosuid,nodev,prefix=${S3_BUCKET_TEST_PREFIX},ro 0 0
${MOUNTPOINT_PATH}#s3://${S3_BUCKET_NAME}/${S3_BUCKET_TEST_PREFIX} /mnt/mountpoint_rw fuse allow-other,_netdev,nosuid,nodev,rw 0 0
"

spawn_mounts "$FSTAB_CONTENT"

S3_PREFIX="s3://${S3_BUCKET_NAME}/${S3_BUCKET_TEST_PREFIX}"

# Upload test data to S3 outside of Mountpoint
test_data=$(uuidgen)
echo "$test_data" | aws s3 cp - "${S3_PREFIX}${test_data}"

# Read test
if ! grep -q "$test_data" "/mnt/mountpoint_ro/${test_data}"
then
  echo "(/mnt/mountpoint_ro) Data file does not contain correct test_data ($test_data)"
  exit 1
fi

if ! grep -q "$test_data" "/mnt/mountpoint_rw/${test_data}"
then
  echo "(/mnt/mountpoint_rw) Data file does not contain correct test_data ($test_data)"
  exit 1
fi

# Write test

# Verify our write test data isn't in S3
aws s3 rm "${S3_PREFIX}/${test_data}_write"

if ! echo "$test_data" | sudo tee "/mnt/mountpoint_rw/${test_data}_write"
then
  echo "Should be able to write to read-write filesystem"
  exit 1
fi

if echo "$test_data" | sudo tee /mnt/mountpoint_ro/cannot_write_with_ro_filesystem
then
  echo "Shouldn't be able to write to read-only filesystem"
  exit 1
fi

# Cleanup
aws s3 rm "${S3_PREFIX}${test_data}"
aws s3 rm "${S3_PREFIX}${test_data}_write"
