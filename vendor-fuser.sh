#!/usr/bin/env bash
set -euo pipefail

FUSER_VENDOR_PATH="vendor/fuser"
BASE_PATH=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
FUSER_FULL_PATH="$BASE_PATH/$FUSER_VENDOR_PATH"

STATUS=$(git status --porcelain $FUSER_FULL_PATH)
if [ -n "$STATUS"  ]; then
    echo >&2 "Refusing to re-vendor because the fuser directory is dirty"
    exit 1
fi

rm -rf $FUSER_FULL_PATH

git clone --branch fuser/fork ssh://git@github.com/awslabs/mountpoint-s3.git $FUSER_FULL_PATH
COMMIT=$(git -C $FUSER_FULL_PATH rev-parse --short HEAD)

rm -rf $FUSER_FULL_PATH/.git

git add $FUSER_FULL_PATH

git commit -m "Update vendored fuser to $COMMIT" -s
