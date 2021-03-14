FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y git build-essential autoconf curl cmake libfuse-dev pkg-config fuse3 bc libtool \
  uuid-dev xfslibs-dev libattr1-dev libacl1-dev libaio-dev attr acl quota bsdmainutils dbench psmisc libfuse3-dev

RUN adduser --disabled-password --gecos '' fsgqa

RUN echo 'user_allow_other' >> /etc/fuse.conf

RUN mkdir -p /code/pjdfstest && cd /code && git clone https://github.com/fleetfs/pjdfstest && cd pjdfstest \
  && git checkout d3beed6f5f15c204a8af3df2f518241931a42e94 && autoreconf -ifs && ./configure && make pjdfstest

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain=1.47.0

ENV PATH=/root/.cargo/bin:$PATH
ARG BUILD_FEATURES

ADD Cargo.toml Cargo.lock build.rs /code/fuser/
RUN cd /code/fuser && mkdir src && touch src/lib.rs && cargo build --locked --release --examples $BUILD_FEATURES

ADD . /code/fuser/

RUN cd /code/fuser && cargo build --release --examples $BUILD_FEATURES && cp target/release/examples/simple /bin/fuser
