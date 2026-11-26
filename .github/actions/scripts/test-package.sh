#!/bin/bash
# Install a Mountpoint release package built by the `packaging` job and mount the test bucket read-only with it.
#
# Runs inside a container of the distribution under test (see the `test-packages` job in integration.yml), with
# the packages for this architecture bind-mounted read-only at /pkgs.
#
# Environment:
#   DISTRO_ID         which package to install and how: centos7, rhel8, rhel9, al2023, ubuntu or opensuse
#   MOUNT_BUCKET      bucket to mount
#   MOUNT_PREFIX      optional --prefix for the mount
#   MOUNT_REGION      optional --region for the mount
#   MOUNT_EXTRA_ARGS  optional extra mount-s3 arguments, split on whitespace

set -euo pipefail
pkg_rpm()  { local f; for f in /pkgs/mount-s3-*.rpm; do [ "$f" = "${f%.suse.rpm}" ] && { echo "$f"; return; }; done; }
pkg_suse() { local f; for f in /pkgs/mount-s3-*.suse.rpm; do echo "$f"; return; done; }
pkg_deb()  { local f; for f in /pkgs/mount-s3-*.deb; do echo "$f"; return; done; }
case "$DISTRO_ID" in
  centos7)
    # CentOS 7 is EOL; its mirrors moved to vault.centos.org (altarch on aarch64).
    sed -i 's/mirror.centos.org/vault.centos.org/g' /etc/yum.repos.d/*.repo
    sed -i 's/^#.*baseurl=http/baseurl=https/g' /etc/yum.repos.d/*.repo
    sed -i 's/^mirrorlist=http/#mirrorlist=https/g' /etc/yum.repos.d/*.repo
    if [ "$(uname -m)" = "aarch64" ]; then sed -i 's|vault.centos.org/centos|vault.centos.org/altarch|g' /etc/yum.repos.d/*.repo; fi
    yum install -y "$(pkg_rpm)" ;;
  rhel8|rhel9|al2023)
    dnf install -y "$(pkg_rpm)" ;;
  ubuntu)
    export DEBIAN_FRONTEND=noninteractive
    apt-get -qq update
    apt-get install -y "$(pkg_deb)" ;;
  opensuse)
    zypper --no-gpg-checks -n install -y "$(pkg_suse)" ;;
  *) echo "unknown distro id: $DISTRO_ID" >&2; exit 1 ;;
esac
mount-s3 --version
mkdir -p /mnt/mp
args=( "$MOUNT_BUCKET" /mnt/mp --read-only )
[ -n "${MOUNT_PREFIX:-}" ] && args+=( "--prefix=$MOUNT_PREFIX" )
[ -n "${MOUNT_REGION:-}" ] && args+=( "--region=$MOUNT_REGION" )
# MOUNT_EXTRA_ARGS may hold several arguments, so it is split on whitespace on purpose.
# shellcheck disable=SC2206
[ -n "${MOUNT_EXTRA_ARGS:-}" ] && args+=( $MOUNT_EXTRA_ARGS )
mount-s3 "${args[@]}"
ls /mnt/mp
fusermount -u /mnt/mp 2>/dev/null || umount /mnt/mp
echo "OK: ${DISTRO_ID} $(uname -m)"
