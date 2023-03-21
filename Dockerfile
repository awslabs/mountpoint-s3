#Copyright 2021 Amazon Web Services, Inc. or its affiliates (“AWS”).

#AWS grants you a limited, revocable, non-exclusive, sub-licensable, non
#transferrable license to copy, use, and create derivative works of this
#content solely in connection with a permitted use of services offered by
#AWS or by an authorized AWS reseller.

#SUBJECT TO ANY APPLICABLE AGREEMENT BETWEEN YOU AND AWS,
#THIS CONTENT IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY
#KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
#WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
#PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL AWS BE
#LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN
#AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT
#OF, OR IN CONNECTION WITH THE CONTENT OR THE USE OF THE
#CONTENT

FROM amazonlinux:latest
RUN yum -y update
RUN yum -y install fuse fuse-devel cmake3 clang-devel
RUN yum -y install git cargo
RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
RUN git clone --recurse-submodules https://github.com/awslabs/mountpoint-s3.git && \
    cd mountpoint-s3 && \
    cargo build --release
WORKDIR /mountpoint-s3/target/release
