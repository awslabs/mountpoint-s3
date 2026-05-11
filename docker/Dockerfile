FROM public.ecr.aws/amazonlinux/amazonlinux:2023

RUN dnf upgrade -y && \
    dnf install -y mount-s3 && \
    dnf clean all

RUN echo "user_allow_other" >> /etc/fuse.conf

# Run in foreground mode so that the container can be detached without exiting Mountpoint
ENTRYPOINT [ "mount-s3", "-f" ]
