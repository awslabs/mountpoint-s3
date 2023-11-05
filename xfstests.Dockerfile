FROM ubuntu:20.04

ARG DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y git build-essential autoconf curl cmake libfuse-dev pkg-config fuse bc libtool \
  uuid-dev xfslibs-dev libattr1-dev libacl1-dev libaio-dev attr acl quota bsdmainutils dbench psmisc

RUN adduser --disabled-password --gecos '' fsgqa

RUN echo 'user_allow_other' >> /etc/fuse.conf

ADD rust-toolchain /code/fuser/rust-toolchain

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain=$(cat /code/fuser/rust-toolchain)

ENV PATH=/root/.cargo/bin:$PATH

RUN mkdir -p /code && cd /code && git clone https://github.com/fleetfs/fuse-xfstests && cd fuse-xfstests \
  && git checkout c123d014fcca48cf340be78d6712eff80ee4e8d6 && make

ADD . /code/fuser/

RUN cd /code/fuser && cargo build --release --examples --features=abi-7-31 && cp target/release/examples/simple /bin/fuser
