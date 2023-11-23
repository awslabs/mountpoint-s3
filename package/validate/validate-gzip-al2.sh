#! /bin/sh
set -e

yum update -y && yum install -y wget gpg tar gzip
cd /tmp

wget https://s3.amazonaws.com/mountpoint-s3-release/$VERSION/$ARCH/mount-s3-$VERSION-$ARCH.tar.gz
wget https://s3.amazonaws.com/mountpoint-s3-release/$VERSION/$ARCH/mount-s3-$VERSION-$ARCH.tar.gz.asc

wget https://s3.amazonaws.com/mountpoint-s3-release/public_keys/KEYS
gpg --import KEYS
gpg --verify mount-s3-$VERSION-$ARCH.tar.gz.asc mount-s3-$VERSION-$ARCH.tar.gz

tar -zxvf mount-s3-$VERSION-$ARCH.tar.gz
cp bin/mount-s3 /usr/bin/
# install Mountpoint dependencies manually
yum install -y fuse fuse-devel

. $(dirname "$0")/test-mount-s3.sh