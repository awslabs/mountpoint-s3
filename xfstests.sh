#!/usr/bin/env bash

set -ex

exit_handler() {
    exit "$XFSTESTS_EXIT_STATUS"
}
trap exit_handler TERM
trap "kill 0" INT EXIT

export RUST_BACKTRACE=1

TEST_DATA_DIR=$(mktemp --directory)
SCRATCH_DATA_DIR=$(mktemp --directory)
TEST_DIR=$(mktemp --directory)
SCRATCH_DIR=$(mktemp --directory)

set +e
# Clear mount log file, since the tests append to it
echo "" > /code/logs/xfstests_mount.log
DIR=/var/tmp/fuse-xfstests/check-fuser
mkdir -p $DIR
cd /code/fuse-xfstests

# TODO: requires flock
echo "generic/478" >> xfs_excludes.txt

# TODO: requires RENAME_EXCHANGE
echo "generic/025" >> xfs_excludes.txt

# TODO: requires supporting orphaned files, that have an open file handle, but no links
echo "generic/484" >> xfs_excludes.txt

# Writes directly to scratch block dev
echo "generic/062" >> xfs_excludes.txt

# TODO: looks like it requires character file support
echo "generic/078" >> xfs_excludes.txt

# TODO: takes > 10min
echo "generic/069" >> xfs_excludes.txt

# TODO: needs fallocate which is missing from Linux FUSE driver (https://github.com/libfuse/libfuse/issues/395)
echo "generic/263" >> xfs_excludes.txt

# TODO: Passes, but takes ~30min
echo "generic/127" >> xfs_excludes.txt

# TODO: requires more complete falloc support. Also fills up the entire hard disk...
echo "generic/103" >> xfs_excludes.txt

# TODO: requires support for mknod on character files
echo "generic/184" >> xfs_excludes.txt
echo "generic/401" >> xfs_excludes.txt

# TODO: requires fifo support
echo "generic/423" >> xfs_excludes.txt

# TODO: requires ulimit support for limiting file size
echo "generic/394" >> xfs_excludes.txt

# TODO: requires lock support
echo "generic/504" >> xfs_excludes.txt

# TODO: requires support for system.posix_acl_access xattr sync'ing to file permissions
# Some information about it linked from here: https://stackoverflow.com/questions/29569408/documentation-of-posix-acl-access-and-friends
echo "generic/099" >> xfs_excludes.txt
echo "generic/105" >> xfs_excludes.txt

# TODO: requires proper suid-bit support
echo "generic/193" >> xfs_excludes.txt
echo "generic/314" >> xfs_excludes.txt
echo "generic/355" >> xfs_excludes.txt
echo "generic/375" >> xfs_excludes.txt
echo "generic/444" >> xfs_excludes.txt

# TODO: requires support for mounting read-only
echo "generic/294" >> xfs_excludes.txt
echo "generic/306" >> xfs_excludes.txt
echo "generic/452" >> xfs_excludes.txt

# TODO: requires atime support
echo "generic/003" >> xfs_excludes.txt
echo "generic/192" >> xfs_excludes.txt

# TODO: Passes, but takes ~10min and writes > 20GB. Needs support for writing files with large holes,
# for this test to be fast
echo "generic/130" >> xfs_excludes.txt

# TODO: uses namespaces and inodes don't seem to get mapped properly
# this test ends up trying to chmod "/" (the root inode)
echo "generic/317" >> xfs_excludes.txt

# TODO: requires more complete ACL support
echo "generic/319" >> xfs_excludes.txt

# TODO: Seems to cause a host OOM (even from inside Docker), when run with 84, 87, 88, 100, and 109
echo "generic/089" >> xfs_excludes.txt

# TODO: very slow. Passes, but takes > 30min
echo "generic/074" >> xfs_excludes.txt

# TODO: very slow. Ran for > 3hrs without completing
echo "generic/339" >> xfs_excludes.txt

# TODO: Passes, but takes ~60min on CI
echo "generic/006" >> xfs_excludes.txt
echo "generic/011" >> xfs_excludes.txt
echo "generic/070" >> xfs_excludes.txt

# TODO: very slow. Passes, but takes 20min
echo "generic/438" >> xfs_excludes.txt

# TODO: requires newer (> 4.9.0) version of xfs_io. Otherwise these will infinite loop
echo "generic/430" >> xfs_excludes.txt
echo "generic/431" >> xfs_excludes.txt
echo "generic/432" >> xfs_excludes.txt
echo "generic/433" >> xfs_excludes.txt
echo "generic/434" >> xfs_excludes.txt

# TODO: seems to crash host
echo "generic/476" >> xfs_excludes.txt

# TODO: writing to /proc/sys/vm/drop_caches is not allowed inside Docker
echo "generic/086" >> xfs_excludes.txt
echo "generic/391" >> xfs_excludes.txt
echo "generic/426" >> xfs_excludes.txt
echo "generic/467" >> xfs_excludes.txt
echo "generic/477" >> xfs_excludes.txt

FUSER_EXTRA_MOUNT_OPTIONS="" TEST_DEV="$TEST_DATA_DIR" TEST_DIR="$TEST_DIR" SCRATCH_DEV="$SCRATCH_DATA_DIR" SCRATCH_MNT="$SCRATCH_DIR" \
./check-fuser -E xfs_excludes.txt "$@" \
| tee /code/logs/xfstests.log

export XFSTESTS_EXIT_STATUS=${PIPESTATUS[0]}

if [ $XFSTESTS_EXIT_STATUS ]
then
  cat /code/fuse-xfstests/results/generic/*.bad
  cp /code/fuse-xfstests/results/generic/*.bad /code/logs/
fi

rm -rf ${TEST_DATA_DIR}
rm -rf ${TEST_DIR}
rm -rf ${SCRATCH_DATA_DIR}
rm -rf ${SCRATCH_DIR}
