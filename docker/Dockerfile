FROM amazonlinux:2023
RUN yum -y update
RUN yum -y install fuse fuse-devel cmake3 clang-devel
RUN yum -y install git cargo
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
RUN git clone --recurse-submodules https://github.com/awslabs/mountpoint-s3.git && \
    cd mountpoint-s3 && \
    cargo build --release
WORKDIR /mountpoint-s3/target/release
