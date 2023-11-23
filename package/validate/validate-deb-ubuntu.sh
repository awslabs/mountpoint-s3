#! /bin/sh
set -e

apt-get -qq update -y && apt-get -qq install -y wget gpg
cd /tmp

wget https://s3.amazonaws.com/mountpoint-s3-release/$VERSION/$ARCH/mount-s3-$VERSION-$ARCH.deb
wget https://s3.amazonaws.com/mountpoint-s3-release/$VERSION/$ARCH/mount-s3-$VERSION-$ARCH.deb.asc

wget https://s3.amazonaws.com/mountpoint-s3-release/public_keys/KEYS
gpg --import KEYS
gpg --verify mount-s3-$VERSION-$ARCH.deb.asc mount-s3-$VERSION-$ARCH.deb

apt-get install -y ./mount-s3-$VERSION-$ARCH.deb

. $(dirname "$0")/test-mount-s3.sh