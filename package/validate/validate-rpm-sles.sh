#! /bin/sh
set -e

cat /etc/os-release

zypper refresh && zypper install -y wget
cd /tmp

wget https://s3.amazonaws.com/mountpoint-s3-release/$VERSION/$ARCH/mount-s3-$VERSION-$ARCH-sles.rpm
wget https://s3.amazonaws.com/mountpoint-s3-release/$VERSION/$ARCH/mount-s3-$VERSION-$ARCH-sles.rpm.asc

wget https://s3.amazonaws.com/mountpoint-s3-release/public_keys/KEYS
gpg --import KEYS
gpg --verify mount-s3-$VERSION-$ARCH-sles.rpm.asc mount-s3-$VERSION-$ARCH-sles.rpm

zypper --no-gpg-checks install -y mount-s3-$VERSION-$ARCH-sles.rpm

. $(dirname "$0")/test-mount-s3.sh