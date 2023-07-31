FROM public.ecr.aws/amazonlinux/amazonlinux:2

RUN amazon-linux-extras install -y epel
RUN yum install -y \
        fuse \
        fuse-devel \
        make \
        cmake3 \
        clang \
        git \
        pkgconfig \
        dpkg \
        fakeroot \
        rpmdevtools \
        tar \
        python3 \
        wget && \
    yum clean all

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
ENV PATH="/root/.cargo/bin:$PATH"

RUN wget -q "https://github.com/EmbarkStudios/cargo-about/releases/download/0.5.6/cargo-about-0.5.6-$(uname -p)-unknown-linux-musl.tar.gz" && \
    wget -q "https://github.com/EmbarkStudios/cargo-about/releases/download/0.5.6/cargo-about-0.5.6-$(uname -p)-unknown-linux-musl.tar.gz.sha256" && \
    echo -n "$(sha256sum cargo-about-*.tar.gz | cut -d' ' -f1)" > checksum.sha256 && \
    diff cargo-about-*.tar.gz.sha256 checksum.sha256 && \
    tar xzf cargo-about-*.tar.gz && \
    cp cargo-about-*/cargo-about /usr/bin && \
    rm -rf cargo-about-* checksum.sha256

WORKDIR /mountpoint
ENTRYPOINT ["/mountpoint/package/package.py"]