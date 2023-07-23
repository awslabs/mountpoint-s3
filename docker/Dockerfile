FROM amazonlinux:2023 as builder

# Install build tools
RUN dnf upgrade -y && \
    dnf install -y \
        fuse \
        fuse-devel \
        cmake3 \
        clang \
        git \
        pkg-config && \
    dnf clean all

# Install rust
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y && \
    source "$HOME/.cargo/env"

# Build mountpoint-s3
RUN git clone --recurse-submodules https://github.com/awslabs/mountpoint-s3.git && \
    source "$HOME/.cargo/env" && \
    cd mountpoint-s3 && \
    cargo build --release



FROM amazonlinux:2023 as release
COPY --from=builder /mountpoint-s3/target/release/mount-s3 /mount-s3

RUN dnf upgrade -y && \
    dnf install -y \
    fuse-devel && \
    dnf clean all

CMD [ "/mount-s3" ]
