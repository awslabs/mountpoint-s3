Name:           mount-s3
Version:        %{MOUNTPOINT_VERSION}
Release:        1
Summary:        Mountpoint for Amazon S3

License:        Apache-2.0
URL:            https://github.com/awslabs/mountpoint-s3
Source0:        mount-s3.tar.gz

Requires:       fuse
Requires:       fuse-libs

%description
Mountpoint for Amazon S3 is a simple, high-throughput file client for
mounting an Amazon S3 bucket as a local file system. With Mountpoint for Amazon
S3, your applications can access objects stored in Amazon S3 through file
operations like open and read. Mountpoint for Amazon S3 automatically
translates these operations into S3 object API calls, giving your applications
access to the elastic storage and throughput of Amazon S3 through a file
interface.

%prep
%setup -c %{name}-%{version}

%install
rm -rf %{buildroot}/*
cp -r %{_builddir}/%{name}-%{version}/* %{buildroot}/
mkdir -p %{buildroot}/%{_bindir}
ln -f -s /opt/aws/mountpoint-s3/bin/mount-s3 %{buildroot}/%{_bindir}/mount-s3

%files
%dir /opt/aws/mountpoint-s3
%dir /opt/aws/mountpoint-s3/bin
/opt/aws/mountpoint-s3/bin/mount-s3
%doc /opt/aws/mountpoint-s3/NOTICE
%license /opt/aws/mountpoint-s3/LICENSE
/opt/aws/mountpoint-s3/THIRD_PARTY_LICENSES
/opt/aws/mountpoint-s3/VERSION
%{_bindir}/mount-s3
