# Benchmark experiment runner

This project allows to perform some Mountpoint benchmarks with different variables,
such that a number of experiments can be run with ease and the logs
and results be collected in a directory for each experiment run.

The Python script `benchmark.py` handles the setup and teardown for each experiment.
The experiment configuration space is managed using [Hydra](https://hydra.cc/).
Configurations in `conf/` describe which values to configure to run experiments over a set of parameters
such as the maximum count of Mountpoint FUSE workers,
number of application workers reading from unique file handles, etc..

The benchmark script currently supports FIO jobs.
The list is defined in `conf/config.yaml` under the `fio_benchmarks` config entry.
The FIO jobs define what workload they run,
and also use environment variables in the job definition to allow this script to vary parameters.

## Before you start

You should have the environment setup where you want to run the benchmarking experiments.
For instance, this might be an EC2 instance. You also need an S3 bucket to run the workload against.

You should clone this repository to the environment. This tool will build Mountpoint for you.

This project uses [uv](https://github.com/astral-sh/uv) to manage Python environments and dependencies.

Think of `uv` as a close analog of Rust's _cargo_ but for Python.
It will automatically configure a Python virtual environment for you and install the project dependencies.

Assuming `uv` is installed, getting started is (almost) as easy as
running the `benchmark.py` script from this directory!

```sh
uv run benchmark.py --
```

It should tell you that you forgot some arguments for the Python script itself.

## Running the experiment

There are a few variables that are required, such as the S3 bucket used for testing.
You must set this in order to be able to use the benchmark script.

Additionally, you should configure the AWS credentials for Mountpoint.
You might use AWS profiles or set some credentials in the environment.

To run the experiment, you can execute a command like this:

```
uv run benchmark.py -- s3_bucket=amzn-s3-demo-bucket
```

This will run the default experiment, including many different configuration combinations. The default
benchmark type is fio. You can modify the benchmark type to run prefetch, client or crt benchmarks.

To run prefetch benchmarks, you can execute a command like this:

```
uv run benchmark.py benchmark_type=prefetch  --  s3_bucket=amzn-s3-demo-bucket
```

**Note:** Before running the prefetch benchmark for the first time, you must run the fio benchmark once to populate the S3 bucket with the necessary test objects.

Output is written to `multirun/` within directories for the date, time, and experiment number run.
The output directory includes a few different files from an individual experiment run,
including the individual benchmark output `benchmark.log` and benchmark specific log files. For fio benchmarks, this will include FIO output, and Mountpoint logs.

To run crt benchmarks, download [aws-crt-s3-benchmarks](https://github.com/awslabs/aws-crt-s3-benchmarks) and provide the path as input 

```
uv run benchmark.py benchmark_type=crt benchmarks.crt.crt_benchmarks_path=aws-crt-s3-benchmarks-path -- s3_bucket=amzn-s3-demo-bucket
```

## Advanced configuration

### Configuring multiple network interfaces

When investigating performance with multiple network cards,
we need to tell Mountpoint about what network interfaces are available
and even configure it with things like a 'target throughput'
such that it allocates enough resources to maximize its utilisation of the available network bandwidth.

Below shows how to configure two network cards:

```sh
uv run benchmark.py -- s3_bucket=amzn-s3-demo-bucket \
    "network.interface_names=['eth0', 'eth1']" network.maximum_throughput_gbps=200
```

If you want to run experiments varying the interfaces provided to Mountpoint, you can vary it like below:

```sh
uv run benchmark.py -- s3_bucket=amzn-s3-demo-bucket \
    "network.interface_names=['eth0'], ['eth0', 'eth1']" network.maximum_throughput_gbps=200
```

If you want to do specific combinations, you will need to create full dictionaries to vary values over.
Below is an example of varying both network interfaces alongside the target network throughput.

```sh
uv run benchmark.py -- s3_bucket=amzn-s3-demo-bucket \
    "network={interface_names:['eth0'],maximum_throughput_gbps:100},{interface_names:['eth0','eth1'],maximum_throughput_gbps:200}"
```
