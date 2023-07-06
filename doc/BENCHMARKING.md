## Benchmarking
Currently, Mountpoint for Amazon S3 is an alpha release and we are focusing on delivering high throughput read support. In order to make sure that new changes do not introduce performance regression, we have created some performance benchmark as a part of our CI using [fio](https://github.com/axboe/fio), an awesome open-source application for file system benchmarking.

### Workloads

***read workload*** - we measure two aspects of the read operation, throughput and latency. For the first part, we use fio to simulate IO workloads for sequential read or random read for a specific duration then measure their throughput. On the latency side, we are using time to first byte as data points by running workloads that read one byte off of existing files on Mountpoint and measure the time it takes to complete the operation. Each of the test is defined in a separate .fio file, and the file name indicates what is the test case for that file, for example `seq_read.fio` is the benchmark for sequential read. All of fio configuration files can be found at path [mountpoint-s3/scripts/fio/read/](../mountpoint-s3/scripts/fio/read) and [mountpoint-s3/scripts/fio/read_latency/](../mountpoint-s3/scripts/fio/read_latency).

In general, we run each IO operation for 30 seconds against a 100 GiB file. But there are some variants in configuration where we also want to test to see how Mountpoint would perform with these configurations. Here is the list of all the variants we have tested.

* **four_threads**: running the workload concurrently by spawning four fio threads to do the same job.
* **direct_io**: bypassing kernel page cache by opening the files with `O_DIRECT` option. This option is only available on Linux.
* **small_file**: run the IO operation against smaller files (5 MiB instead of 100 GiB).

***readdir workload*** - we measure how long it takes to run `ls` command against directories with different size. Each directory has no subdirectory and contains a specific number of files, range from 100 to 100000 files, which we have to create manually using fio then upload them to S3 bucket before running the benchmark. The fio configuration files for creating them can be found at path [mountpoint-s3/scripts/fio/create/](../mountpoint-s3/scripts/fio/create).

***write workload*** - we measure write throughput by using [dd](https://man7.org/linux/man-pages/man1/dd.1.html) command to simulate sequential write workloads. We plan to use fio in the future for consistency with other benchmarks but its current write pattern is not supported by Mountpoint. Firstly, fio creates a file with 0 byte and close it. Secondly, fio opens the file again with `O_RDWR` flag to do the IO workloads. To support fio, Mountpoint has to allow file overwrites and allow file opens with `O_RDWR` flag.

### Regression Testing
Our CI runs the benchmark automatically for any new commits to the main branch or specific pull requests that we have reviewed and tagged with **performance** label. Every benchmark from the CI workflow will be running on `m5n.24xlarge` EC2 instances (100 Gbps network speed) with Ubuntu 22.04 in us-east-1 against a bucket in us-east-1.

We keep the records of benchmarking results in `gh-pages` branch and the performance charts are available for viewing as [throughput chart](https://awslabs.github.io/mountpoint-s3/dev/bench/) and [latency chart](https://awslabs.github.io/mountpoint-s3/dev/latency_bench/).

### Running the benchmark
While our benchmark script is written for CI testing only, it is possible to run manually.
You can use the following steps.

1. Install dependencies and configure FUSE by running the following script in the repository:

        bash .github/actions/install-dependencies/install.sh \
                --fuse-version 2 \
                --with-fio --with-libunwind

2. Set environment variables related to the benchmark. There are four required environment variables you need to set in order to run the benchmark.

        export S3_BUCKET_NAME=bucket_name
        export S3_BUCKET_TEST_PREFIX=prefix_path/
        export S3_BUCKET_BENCH_FILE=bench_file_name
        export S3_BUCKET_SMALL_BENCH_FILE=small_bench_file_name

3. Create the bench files manually in your bucket. The size of the files must be exactly the same as the size defined in fio configuration files. The easiest way to do this is running fio against your local file system first to let fio create the files for you, and then upload them to your S3 bucket using the AWS CLI. For example:

        fio --directory=your_local_dir --filename=your_file_name mountpoint-s3/scripts/fio/read/seq_read_small.fio
        aws s3 cp your_local_dir/your_file_name s3://${S3_BUCKET_NAME}/${S3_BUCKET_TEST_PREFIX}

4. Run the benchmark script for [throughput](../mountpoint-s3/scripts/fs_bench.sh) or [latency](../mountpoint-s3/scripts/fs_latency_bench.sh).

        ./mountpoint-s3/scripts/fs_bench.sh

5. You should see the benchmark logs in `bench.out` file in the project root directory. The combined results will be saved into a JSON file at `results/output.json`.