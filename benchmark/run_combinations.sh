#!/bin/bash

(
    cd ..
    cargo build --release -F multiple-nw-iface;
)

HYDRA_FULL_ERROR=1 poetry run python benchmark.py -r \
    s3_bucket=adpeace-mountpoint-perf-test \
    fuse_threads=16 \
    application_workers="1,16,32" \
    stub_crc32c="false" stub_reading_mode=off \
    network=1_nic,2_nic,4_nic iterations=5 \
    available_network_interfaces="[{interface_name: 'ens32'}, {interface_name: 'ens64'}, {interface_name: 'ens96'}, {interface_name: 'ens128'}]" \
    fio_benchmark=sequential_read with_perf=true with_bwm=true direct_io="true,false" \
    crt_mem_limit_mib="8192,65535"

