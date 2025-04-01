#! /bin/sh
set -e

# Need this because of Centos 8 reached EOL and mirrorlist.centos.org does not exist anymore.
sed -i s/mirror.centos.org/vault.centos.org/g /etc/yum.repos.d/*.repo
sed -i s/^#.*baseurl=http/baseurl=https/g /etc/yum.repos.d/*.repo
sed -i s/^mirrorlist=http/#mirrorlist=https/g /etc/yum.repos.d/*.repo

yum update -y && yum install -y wget gpg
cd /tmp

wget https://s3.amazonaws.com/mountpoint-s3-release/$VERSION/$ARCH/mount-s3-$VERSION-$ARCH.$PKG_SUFFIX.rpm
wget https://s3.amazonaws.com/mountpoint-s3-release/$VERSION/$ARCH/mount-s3-$VERSION-$ARCH.$PKG_SUFFIX.rpm.asc

wget https://s3.amazonaws.com/mountpoint-s3-release/public_keys/KEYS
gpg --import KEYS
gpg --verify mount-s3-$VERSION-$ARCH.$PKG_SUFFIX.rpm.asc mount-s3-$VERSION-$ARCH.$PKG_SUFFIX.rpm

yum install -y mount-s3-$VERSION-$ARCH.$PKG_SUFFIX.rpm

. $(dirname "$0")/test-mount-s3.sh
