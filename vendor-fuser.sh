#!/usr/bin/env bash
set -euo pipefail

FUSER_PATH="mountpoint-s3-fuser"
BASE_PATH=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
FUSER_FULL_PATH="$BASE_PATH/$FUSER_PATH"

rm -rf $FUSER_FULL_PATH

git submodule update --remote $FUSER_FULL_PATH

git add $FUSER_FULL_PATH

git commit -m "Update vendored fuser to $COMMIT" -s
