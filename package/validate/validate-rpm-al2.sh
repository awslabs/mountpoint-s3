#! /bin/sh
set -e

yum update -y && yum install -y wget gpg
cd /tmp

wget https://s3.amazonaws.com/mountpoint-s3-release/$VERSION/$ARCH/mount-s3-$VERSION-$ARCH.rpm
wget https://s3.amazonaws.com/mountpoint-s3-release/$VERSION/$ARCH/mount-s3-$VERSION-$ARCH.rpm.asc

wget https://s3.amazonaws.com/mountpoint-s3-release/public_keys/KEYS
gpg --import KEYS
gpg --verify mount-s3-$VERSION-$ARCH.rpm.asc mount-s3-$VERSION-$ARCH.rpm

yum install -y mount-s3-$VERSION-$ARCH.rpm

. $(dirname "$0")/test-mount-s3.sh