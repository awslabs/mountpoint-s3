FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y build-essential curl

ADD rust-toolchain /code/fuser/rust-toolchain

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain=$(cat /code/fuser/rust-toolchain)

ENV PATH=/root/.cargo/bin:$PATH

ADD . /code/fuser/
