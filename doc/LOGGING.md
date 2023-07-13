# Logging

Mountpoint for Amazon S3 uses the [tracing](https://docs.rs/tracing/latest/tracing/) ecosystem for logging. This makes it easy to configure the verbosity and target of log output.
The logging level is minimal by default, but for reporting issues or debugging application problems, you may want to customize this logging behavior.

## Log outputs

By default, Mountpoint for Amazon S3 will not emit any logs to disk.

You can enable logging to disk by providing a destination directory using the `-l, --log-directory` command-line argument.
The directory will be created if it doesn't exist.
A new log file will be created for each execution of `mount-s3`.
Both the directory and log files are created with permissions such that the process owner has read/write access and the group has read access.
Log files are not rotated or cleaned up.

When running in foreground mode (`-f, --foreground`), `mount-s3` will emit logs to stdout irrespective of the `--log-directory` configuration.

## Log details

By default, the logging level is minimal. For reporting issues or debugging application problems, it can be helpful to increase this verbosity. We use the common `RUST_LOG` environment variable for controlling log verbosity and subjects.

To control the log verbosity, set the `RUST_LOG` environment variable. If unset, it defaults to `error` to enable only error-level log messages. Verbosity can be increased by instead setting `RUST_LOG` to `warn`, `info`, `debug`, or `trace`.

`RUST_LOG` can also control the subjects that are included in the log output. By default, all subjects are included, but verbosity can be configured on a per-subject basis. For example, setting `RUST_LOG` to `trace,awscrt=off` turns on trace-level logging for all subjects except `awscrt`. See the [tracing documentation](https://docs.rs/tracing-subscriber/0.3.16/tracing_subscriber/struct.EnvFilter.html) for more details on how to configure `RUST_LOG`.

### Logging suggestions

For interactive debugging, we often set `RUST_LOG=debug,awscrt=off` to enable debug-level errors for everything except the AWS Common Runtime (the `awscrt` subject). The Common Runtime logging is more verbose, so it's helpful to filter those messages out interactively.

For reporting issues, we suggest `RUST_LOG=trace,awscrt=debug` as a good default choice.
