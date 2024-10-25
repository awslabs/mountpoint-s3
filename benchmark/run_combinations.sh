#!/bin/bash

(
    cd ..
    cargo build --release -F multiple-nw-iface;
)

HYDRA_FULL_ERROR=1 poetry run python benchmark.py -r \
    s3_bucket=adpeace-mountpoint-perf-test \
    fuse_threads=16,32,64 \
    application_workers=16,32,64 \
    stub_crc32c="false" stub_reading_mode=off \
    network=1_nic,2_nic,4_nic iterations=5 \
    available_network_interfaces="[{interface_name: 'ens32'}, {interface_name: 'ens64'}, {interface_name: 'ens96'}, {interface_name: 'ens128'}]" \
    fio_benchmark=sequential_read with_perf=true with_bwm=true direct_io="true,false" \
    mp_max_background=16,128

# HYDRA_FULL_ERROR=1 poetry run python benchmark.py -r \
#     s3_bucket=adpeace-mountpoint-perf-test \
#     fuse_threads=16,32,64 \
#     application_workers=16,32,64 \
#     stub_crc32c="false" stub_reading_mode=off \
#     network=4_nic iterations=3 \
#     available_network_interfaces="[{interface_name: 'ens32'}, {interface_name: 'ens64'}, {interface_name: 'ens96'}, {interface_name: 'ens128'}]" \
#     fio_benchmark=sequential_read with_perf=true with_bwm=true direct_io="true,false" \
#     crt_mem_limit_mib="8192,65535" \
#     mp_prefetcher_window_size="$((2 * 1024 * 1024 * 1024)),$((8 * 1024 * 1024 * 1024))" \
#     mp_backpressure_fixed_threshold=1 \
#     mp_max_background=16,128

# HYDRA_FULL_ERROR=1 poetry run python benchmark.py -r \
#     s3_bucket=adpeace-mountpoint-perf-test \
#     fuse_threads=1 \
#     application_workers=1,16 \
#     stub_crc32c="false" stub_reading_mode=off \
#     network=4_nic iterations=3 \
#     available_network_interfaces="[{interface_name: 'ens32'}, {interface_name: 'ens64'}, {interface_name: 'ens96'}, {interface_name: 'ens128'}]" \
#     fio_benchmark=sequential_read with_perf=true with_bwm=true direct_io="true,false" \
#     crt_mem_limit_mib="8192,65535" \
#     mp_prefetcher_window_size="$((2 * 1024 * 1024 * 1024)),$((8 * 1024 * 1024 * 1024))" \
#     mp_backpressure_fixed_threshold=1 \
#     mp_max_background=16,128

# HYDRA_FULL_ERROR=1 poetry run python benchmark.py -r \
#     s3_bucket=adpeace-mountpoint-perf-test \
#     fuse_threads=16,32,64 \
#     application_workers=16,32,64 \
#     stub_crc32c="false" stub_reading_mode=s3_client \
#     network=4_nic iterations=3 \
#     available_network_interfaces="[{interface_name: 'ens32'}, {interface_name: 'ens64'}, {interface_name: 'ens96'}, {interface_name: 'ens128'}]" \
#     fio_benchmark=sequential_read with_perf=true with_bwm=true direct_io="true,false" \
#     mp_max_background=16,128

# HYDRA_FULL_ERROR=1 poetry run python benchmark.py -r \
#     s3_bucket=adpeace-mountpoint-perf-test \
#     fuse_threads=16,32,64 \
#     application_workers="16,32,64" \
#     stub_crc32c="false" stub_reading_mode=off \
#     network=1_nic,2_nic,4_nic iterations=3 \
#     available_network_interfaces="[{interface_name: 'ens32'}, {interface_name: 'ens64'}, {interface_name: 'ens96'}, {interface_name: 'ens128'}]" \
#     fio_benchmark=sequential_read with_perf=true with_bwm=true direct_io="true,false" \
#     crt_mem_limit_mib="8192,65535" \
#     mp_prefetcher_window_size="$((2 * 1024 * 1024 * 1024)),$((8 * 1024 * 1024 * 1024))" \
#     mp_backpressure_fixed_threshold=1,0