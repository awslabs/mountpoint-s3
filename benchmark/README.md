# Benchmark experiment runner

This project allows to perform sequential read benchmarks with different variables,
such that a number of experiments can be run with ease and the logs and results be collected in single directories.

We use the Python script `benchmark.py` to handle the setup and teardown after each experiment.
We manage the experiment configuration space using [Hydra](https://hydra.cc/).
It is configured in `conf/` to run experiments over a set of parameters such as maximum number of Mountpoint FUSE workers, number of application workers reading from unique file handles, etc..

## Before you start

We recommend [Poetry](https://python-poetry.org/) to manage the Python environments for this project.
Poetry will ensure that a Python virtual environment is setup with the correct dependencies.

You'll first need to ensure that Python dependencies are installed:

```sh
poetry install
```

After, you can run the benchmark script using Poetry. Below will execute the script, showing the help page.

```sh
poetry run python benchmark.py --help
```

If not using Poetry, you will need to ensure the dependencies in `pyproject.toml` are installed.

## Running the experiment

There are a few variables that are required, such as the S3 bucket used for testing.
You must set this in order to be able to use the benchmark script.

Additionally, you should configure the AWS credentials for Mountpoint.
You might use AWS profiles or set credentials in the environment.

To run the experiment, you can execute a command like this:

```
poetry run python benchmark.py s3_bucket=amzn-s3-demo-bucket
```

This will run the default experiment, including many different configuration combinations.
Output is written to `multirun/` within directories for the date, time, and job run.
