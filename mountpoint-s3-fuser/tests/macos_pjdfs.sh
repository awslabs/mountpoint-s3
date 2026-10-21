#!/usr/bin/env bash

set -ex

# PJDFS setup
# /etc/fuse.conf isn't used on FreeBSD, but simple.rs uses it
PROJ_DIR=$(pwd)
PJDFS_TMP_DIR=$(mktemp --directory)
cd $PJDFS_TMP_DIR
git clone https://github.com/fleetfs/pjdfstest
cd pjdfstest
git checkout d3beed6f5f15c204a8af3df2f518241931a42e94
autoreconf -ifs
./configure
make pjdfstest
cd $PROJ_DIR

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
find $PJDFS_TMP_DIR/pjdfstest/tests -name '*.t' \
| grep -v 'symlink/05.t' \
| grep -v 'symlink/06.t' \
| grep -v 'truncate/00.t' \
| grep -v 'truncate/05.t' \
| grep -v 'truncate/06.t' \
| grep -v 'unlink/00.t' \
| grep -v 'unlink/05.t' \
| grep -v 'unlink/06.t' \
| grep -v 'unlink/11.t' \
| grep -v 'ftruncate/00.t' \
| grep -v 'ftruncate/05.t' \
| grep -v 'ftruncate/06.t' \
| grep -v 'link/00.t' \
| grep -v 'link/06.t' \
| grep -v 'link/07.t' \
| grep -v 'link/11.t' \
| grep -v 'mkdir/00.t' \
| grep -v 'mkdir/05.t' \
| grep -v 'mkdir/06.t' \
| grep -v 'rmdir/07.t' \
| grep -v 'rmdir/08.t' \
| grep -v 'rmdir/11.t' \
| grep -v 'utimensat/08.t' \
| grep -v 'utimensat/03.t' \
| grep -v 'rename/00.t' \
| grep -v 'rename/01.t' \
| grep -v 'rename/02.t' \
| grep -v 'rename/04.t' \
| grep -v 'rename/05.t' \
| grep -v 'rename/09.t' \
| grep -v 'rename/10.t' \
| grep -v 'rename/15.t' \
| grep -v 'rename/18.t' \
| grep -v 'rename/20.t' \
| grep -v 'rename/21.t' \
| grep -v 'posix_fallocate/00.t' \
| grep -v 'chown/00.t' \
| grep -v 'chown/02.t' \
| grep -v 'chown/03.t' \
| grep -v 'chown/05.t' \
| grep -v 'chown/07.t' \
| grep -v 'chmod/00.t' \
| grep -v 'chmod/05.t' \
| grep -v 'chmod/07.t' \
| grep -v 'chmod/11.t' \
| grep -v 'chmod/12.t' \
| grep -v 'open/00.t' \
| grep -v 'open/05.t' \
| grep -v 'open/06.t' \
| grep -v 'open/07.t' \
| grep -v 'open/08.t' \
| xargs prove -f  | tee /tmp/pjdfs.log
export PJDFS_EXIT_STATUS=${PIPESTATUS[0]}
echo "Total failed:"
cat /tmp/pjdfs.log | egrep -o 'Failed: [0-9]+' | egrep -o '[0-9]+' | paste -s -d+ - | bc

rm -rf ${DATA_DIR}

kill $FUSE_PID
wait $FUSE_PID
