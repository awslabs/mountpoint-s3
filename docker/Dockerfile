FROM amazonlinux:2023 as builder
RUN yum -y update && \
    yum -y install fuse fuse-devel cmake3 \
    clang-devel git cargo
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
RUN git clone --recurse-submodules https://github.com/awslabs/mountpoint-s3.git && \
    cd mountpoint-s3 && \
    cargo build --release
WORKDIR /mountpoint-s3/target/release

FROM amazonlinux:2023
COPY --from=builder /mountpoint-s3/target/release/mount-s3 /mount-s3

RUN yum -y update && \
    yum -y install fuse fuse-devel

CMD [ "/mount-s3" ]
