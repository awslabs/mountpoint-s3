FROM public.ecr.aws/amazonlinux/amazonlinux:2023

RUN dnf -y install \
        fuse-devel \
        make \
        cmake \
        clang \
        git \
        pkgconf-pkg-config \
        rpm-build \
        binutils \
        tar \
        gzip \
        xz \
        python3 \
        python3-pip \
        wget \
        ca-certificates \
    && dnf clean all

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:$PATH"

RUN wget -q "https://github.com/EmbarkStudios/cargo-about/releases/download/0.8.2/cargo-about-0.8.2-$(uname -m)-unknown-linux-musl.tar.gz" && \
    wget -q "https://github.com/EmbarkStudios/cargo-about/releases/download/0.8.2/cargo-about-0.8.2-$(uname -m)-unknown-linux-musl.tar.gz.sha256" && \
    echo -n "$(sha256sum cargo-about-*.tar.gz | cut -d' ' -f1)" > checksum.sha256 && \
    diff cargo-about-*.tar.gz.sha256 checksum.sha256 && \
    tar xzf cargo-about-*.tar.gz && \
    cp cargo-about-*/cargo-about /usr/bin && \
    rm -rf cargo-about-* checksum.sha256

RUN set -eux; \
    pip3 install ziglang==0.17.1 && \
    cargo install --locked cargo-zigbuild

WORKDIR /mountpoint
ENTRYPOINT ["/mountpoint/package/package.py"]
