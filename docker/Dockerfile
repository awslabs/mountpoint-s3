# Download and verify the RPM in this container
FROM public.ecr.aws/amazonlinux/amazonlinux:2023 as builder

# We need the full version of GnuPG
RUN dnf install -y --allowerasing wget gnupg2

RUN MP_ARCH=`uname -p | sed s/aarch64/arm64/` && \
    wget -q "https://s3.amazonaws.com/mountpoint-s3-release/latest/$MP_ARCH/mount-s3.rpm" && \
    wget -q "https://s3.amazonaws.com/mountpoint-s3-release/latest/$MP_ARCH/mount-s3.rpm.asc" && \
    wget -q https://s3.amazonaws.com/mountpoint-s3-release/public_keys/KEYS

# Import the key and validate it has the fingerprint we expect
RUN gpg --import KEYS && \
    (gpg --fingerprint mountpoint-s3@amazon.com | grep "673F E406 1506 BB46 9A0E  F857 BE39 7A52 B086 DA5A")

# Verify the downloaded binary
RUN gpg --verify mount-s3.rpm.asc

# Install the RPM in a fresh container to minimize dependencies
FROM amazonlinux:2023
COPY --from=builder /mount-s3.rpm /mount-s3.rpm

RUN dnf upgrade -y && \
    dnf install -y ./mount-s3.rpm && \
    dnf clean all && \
    rm mount-s3.rpm

RUN echo "user_allow_other" >> /etc/fuse.conf

# Run in foreground mode so that the container can be detached without exiting Mountpoint
ENTRYPOINT [ "mount-s3", "-f" ]
