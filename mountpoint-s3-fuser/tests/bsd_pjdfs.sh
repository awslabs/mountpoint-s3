#!/usr/bin/env bash

set -ex

exit_handler() {
    if [ "${PJDFS_EXIT_STATUS}" -ne 0 ]; then
        echo "fuser simple mount logs:"
        tail -n 100 /tmp/mount.log
    fi
    exit "$PJDFS_EXIT_STATUS"
}
trap exit_handler TERM INT EXIT

export PJDFS_EXIT_STATUS=1
export RUST_BACKTRACE=1

DATA_DIR=$(mktemp --directory)
DIR=$(mktemp --directory)

cargo build --release --example simple
cargo run --release --example simple -- -vvv --suid --data-dir $DATA_DIR --mount-point $DIR > /tmp/mount.log 2>&1 &
FUSE_PID=$!
sleep 0.5

echo "mounting at $DIR"
# Make sure FUSE was successfully mounted
mount
mount | grep fuser

set +e
cd ${DIR}
# TODO: fix the skipped tests
find /tmp/pjdfstest/tests -name '*.t' \
| grep -v 'utimensat/08.t' \
| grep -v 'utimensat/03.t' \
| grep -v 'rename/18.t' \
| grep -v 'posix_fallocate/00.t' \
| grep -v 'chown/00.t' \
| grep -v 'chmod/11.t' \
| grep -v 'chmod/00.t' \
| grep -v 'rename/15.t' \
| xargs prove -f  | tee /tmp/pjdfs.log
export PJDFS_EXIT_STATUS=${PIPESTATUS[0]}
echo "Total failed:"
cat /tmp/pjdfs.log | egrep -o 'Failed: [0-9]+' | egrep -o '[0-9]+' | paste -s -d+ - | bc

rm -rf ${DATA_DIR}

kill $FUSE_PID
wait $FUSE_PID
