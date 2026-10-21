FROM ubuntu:22.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y build-essential curl fuse libfuse-dev pkg-config

RUN useradd fusertestnoallow && \
    useradd fusertest1 && \
    useradd fusertest2

ADD rust-toolchain /code/fuser/rust-toolchain

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain=$(cat /code/fuser/rust-toolchain)

ENV PATH=/root/.cargo/bin:$PATH
ENV FUSER_TESTS_IN_DOCKER=true

ADD . /code/fuser/
