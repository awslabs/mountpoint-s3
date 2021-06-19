#!/usr/bin/env bash

set -ex

exit_handler() {
    exit "$PJDFS_EXIT_STATUS"
}
trap exit_handler TERM
trap "kill 0" INT EXIT

export RUST_BACKTRACE=1

DATA_DIR=$(mktemp --directory)
DIR=$(mktemp --directory)

fuser -vvv --suid --data-dir $DATA_DIR --mount-point $DIR > /code/logs/mount.log 2>&1 &
FUSE_PID=$!
sleep 0.5

echo "mounting at $DIR"
# Make sure FUSE was successfully mounted
mount | grep fuser

set +e
cd ${DIR}
prove -rf /code/pjdfstest/tests | tee /code/logs/pjdfs.log
export PJDFS_EXIT_STATUS=${PIPESTATUS[0]}
echo "Total failed:"
cat /code/logs/pjdfs.log | egrep -o 'Failed: [0-9]+' | egrep -o '[0-9]+' | paste -s -d+ | bc

rm -rf ${DATA_DIR}

kill $FUSE_PID
wait $FUSE_PID
