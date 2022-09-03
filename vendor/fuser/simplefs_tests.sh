#!/usr/bin/env bash

set -x

exit_handler() {
    exit "${TEST_EXIT_STATUS:-1}"
}
trap exit_handler TERM
trap 'kill $(jobs -p); exit $TEST_EXIT_STATUS' INT EXIT

export RUST_BACKTRACE=1

NC="\e[39m"
GREEN="\e[32m"
RED="\e[31m"

apt update
apt install -y fuse3
echo 'user_allow_other' >> /etc/fuse.conf

DATA_DIR=$(mktemp --directory)
DIR=$(mktemp --directory)
cargo build --example simple --no-default-features > /dev/null 2>&1
cargo run --example simple --no-default-features -- -vvv --data-dir $DATA_DIR --mount-point $DIR 2>&1 &
FUSE_PID=$!
sleep 2

echo "mounting at $DIR"
# Make sure FUSE was successfully mounted
mount | grep fuser || exit 1

if touch $DIR/a && touch $DIR/b; then
    echo -e "$GREEN OK touch file $NC"
else
    echo -e "$RED FAILED touch file $NC"
    export TEST_EXIT_STATUS=1
    exit 1
fi

umount $DIR

kill $FUSE_PID
wait $FUSE_PID


export TEST_EXIT_STATUS=0
