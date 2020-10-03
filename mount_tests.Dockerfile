FROM ubuntu:20.04

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && apt install -y build-essential curl fuse3

RUN echo 'user_allow_other' >> /etc/fuse.conf

RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y --default-toolchain=1.42.0

ENV PATH=/root/.cargo/bin:$PATH

ADD . /code/fuser/
