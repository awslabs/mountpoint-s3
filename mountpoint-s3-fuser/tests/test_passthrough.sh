#!/bin/sh

# Run like:
#
#   cargo build --example passthrough
#   sudo tests/test_passthrough.sh target/debug/examples/passthrough

set -eux

examples_passthrough="$1"

# Passthrough fds currently require capable(CAP_SYS_ADMIN).

# Make sure we're in the root namespace
if ! grep -q 4294967295 /proc/self/uid_map; then
    echo "*** This test cannot be run in a non-privileged container environment"
    exit 1
fi

# And of course, make sure we're root
if [ "$(id -u)" != 0 ]; then
    echo "*** This test needs to be run as root"
    exit 1
fi

mnt="$(mktemp -d)"
trap 'set +e; umount "${mnt}"; wait %1; rmdir "${mnt}"' TERM INT EXIT
sudo "${examples_passthrough}" --auto-unmount "${mnt}" &

for x in $(seq 10); do
    if test -f "${mnt}/passthrough"; then
        break
    fi
    sleep 1
done

expected="$(sha256sum - < /etc/profile)"

# Check that it's equal to the underlying file
test "$(sha256sum - < "${mnt}/passthrough")" = "${expected}"

# Check that sharing backing_id works
sleep 1 < "${mnt}/passthrough" &
test "$(sha256sum - < "${mnt}/passthrough")" = "${expected}"

# Check that the stat reports our fileattr data, not the truth
test "$(stat -c%s "${mnt}/passthrough")" = 123456

fuser -km "${mnt}"
