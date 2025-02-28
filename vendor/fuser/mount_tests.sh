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

function run_allow_root_test {
  useradd fusertest1
  useradd fusertest2
  DIR=$(su fusertest1 -c "mktemp --directory")
  cargo build --example hello --features libfuse,abi-7-30 > /dev/null 2>&1
  su fusertest1 -c "target/debug/examples/hello $DIR --allow-root" &
  FUSE_PID=$!
  sleep 2

  echo "mounting at $DIR"
  # Make sure FUSE was successfully mounted
  mount | grep hello || exit 1

  if [[ $(su root -c "cat ${DIR}/hello.txt") = "Hello World!" ]]; then
      echo -e "$GREEN OK root can read $NC"
  else
      echo -e "$RED FAILED root can't read $NC"
      export TEST_EXIT_STATUS=1
      exit 1
  fi

  if [[ $(su fusertest1 -c "cat ${DIR}/hello.txt") = "Hello World!" ]]; then
      echo -e "$GREEN OK owner can read $NC"
  else
      echo -e "$RED FAILED owner can't read $NC"
      export TEST_EXIT_STATUS=1
      exit 1
  fi

  if [[ $(su fusertest2 -c "cat ${DIR}/hello.txt") = "Hello World!" ]]; then
      echo -e "$RED FAILED other user can read $NC"
      export TEST_EXIT_STATUS=1
      exit 1
  else
      echo -e "$GREEN OK other user can't read $NC"
  fi

  kill $FUSE_PID
  wait $FUSE_PID
}

function test_no_user_allow_other {
  sed -i '/user_allow_other/d' /etc/fuse.conf

  useradd fusertestnoallow
  DIR=$(su fusertestnoallow -c "mktemp --directory")
  DATA_DIR=$(su fusertestnoallow -c "mktemp --directory")
  cargo build --example simple $1 > /dev/null 2>&1
  su fusertestnoallow -c "target/debug/examples/simple -vvv --data-dir $DATA_DIR --mount-point $DIR"
  exitCode=$?
  if [[ $exitCode -eq 2 ]]; then
      echo -e "$GREEN OK Detected lack of user_allow_other: $2 $NC"
    else
      echo -e "$RED FAILED Did not detect lack of user_allow_other: $2 $NC"
      export TEST_EXIT_STATUS=1
      exit 1
  fi

  # Make sure the FUSE mount did not mount
  if [[ $(mount | grep hello) ]]; then
      umount $DIR
      echo -e "$RED FAILED Mount exists: $2 $NC"
      export TEST_EXIT_STATUS=1
      exit 1
  else
      echo -e "$GREEN OK Mount does not exist: $2 $NC"
  fi

  # Restore fuse.conf
  echo 'user_allow_other' >> /etc/fuse.conf
}

function run_test {
  DIR=$(mktemp --directory)
  cargo build --example hello $1 > /dev/null 2>&1
  cargo run --example hello $1 -- $DIR $3 &
  FUSE_PID=$!
  sleep 2

  echo "mounting at $DIR"
  # Make sure FUSE was successfully mounted
  mount | grep hello || exit 1

  if [[ $(cat ${DIR}/hello.txt) = "Hello World!" ]]; then
      echo -e "$GREEN OK $2 $3 $NC"
  else
      echo -e "$RED FAILED $2 $3 $NC"
      export TEST_EXIT_STATUS=1
      exit 1
  fi

  kill $FUSE_PID
  wait $FUSE_PID

  if [[ "$3" == "--auto_unmount" ]]; then
      # Make sure the FUSE mount automatically unmounted
      if [[ $(mount | grep hello) ]]; then
          echo -e "$RED FAILED Mount not cleaned up: $2 $3 $NC"
          export TEST_EXIT_STATUS=1
          exit 1
      else
          echo -e "$GREEN OK Mount cleaned up: $2 $3 $NC"
      fi
  else
      umount $DIR
  fi
}

apt update
apt install -y fuse
echo 'user_allow_other' >> /etc/fuse.conf

run_test --no-default-features 'without libfuse, with fusermount'
run_test --no-default-features 'without libfuse, with fusermount' --auto_unmount
test_no_user_allow_other --no-default-features 'without libfuse, with fusermount'

apt remove --purge -y fuse
apt autoremove -y
apt install -y fuse3
echo 'user_allow_other' >> /etc/fuse.conf

run_test --no-default-features 'without libfuse, with fusermount3'
run_test --no-default-features 'without libfuse, with fusermount3' --auto_unmount
test_no_user_allow_other --no-default-features 'without libfuse, with fusermount3'

apt remove --purge -y fuse3
apt autoremove -y
apt install -y libfuse-dev pkg-config fuse
echo 'user_allow_other' >> /etc/fuse.conf

run_test --features=libfuse 'with libfuse'
run_test --features=libfuse 'with libfuse' --auto_unmount

apt remove --purge -y libfuse-dev fuse
apt autoremove -y
apt install -y libfuse3-dev fuse3
echo 'user_allow_other' >> /etc/fuse.conf

run_test --features=libfuse,abi-7-30 'with libfuse3'
run_test --features=libfuse,abi-7-30 'with libfuse3' --auto_unmount

run_allow_root_test

export TEST_EXIT_STATUS=0
