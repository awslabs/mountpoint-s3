#! /bin/sh
set -e

echo
echo "Show installed version:"
mount-s3 --version

echo
echo "Mount and list top-level content of bucket: $BUCKET"
mkdir ~/mnt
mount-s3 "$BUCKET" ~/mnt --no-sign-request
ls ~/mnt