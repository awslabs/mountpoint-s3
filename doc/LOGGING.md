# Logging

By default, Mountpoint for Amazon S3 emits INFO level and higher severity log information to [syslog](https://datatracker.ietf.org/doc/html/rfc5424) if available on your system (Note that for versions up to 1.20, only WARN level and higher severity events are logged by default). To view these logs on systems using `journald` (most modern Linux distributions, including Amazon Linux), run:

    journalctl -e SYSLOG_IDENTIFIER=mount-s3

On other systems, syslog entries are likely written to a file such as `/var/log/syslog`.

When running `mount-s3` in foreground mode (the `-f, --foreground` command-line argument), Mountpoint will emit logs to stdout in addition to syslog or any configured log directory (see below).

> [!NOTE]
> If you are using [Mountpoint for Amazon S3 CSI Driver](https://github.com/awslabs/mountpoint-s3-csi-driver/), Mountpoint logs are available in the Mountpoint Pod logs as standard Kubernetes logs.
> Follow [Mountpoint CSI Driver's LOGGING.md guide](https://github.com/awslabs/mountpoint-s3-csi-driver/blob/main/docs/LOGGING.md) to learn about how to get logs for both Mountpoint and the driver itself.

## Logging to a file

You can direct logs to a file instead of syslog by providing a destination directory using the `-l, --log-directory` command-line argument with `mount-s3`.

    mount-s3 <BUCKET> <MOUNT_PATH> --log-directory <LOG_DIRECTORY>

The directory will be created if it doesn't exist.
A new log file will be created for each execution of `mount-s3`.

Log file names are not considered stable and may change in the future.

Both the directory and log files are created with read/write access for the process owner and read access for the process owner's group.
Log files are not automatically rotated or cleaned up.

## Disabling logging

If you do not want to record any logs, use the `--no-log` command-line argument. This argument cannot be combined with other logging-related command-line arguments. The `--no-log` argument has
no effect on messages sent to the standard output. If no output is desired, consider redirecting it.

## Verbose logging

By default, Mountpoint logs INFO level and higher severity events (WARN level and higher up to version 1.20). For reporting issues or debugging application problems, it can be helpful to increase this verbosity.
You can enable more verbose logging with the `--debug` command-line argument. We recommend logging to a file (the `-l, --log-directory` argument above) when using this option.

### Advanced logging verbosity options

To enable more verbose logging for the AWS Common Runtime that Mountpoint uses to communicate with S3, use the `--debug-crt` command-line argument. These logs are very verbose, and should be combined with the `-l, --log-directory` and `--debug` arguments described above.

For finer-grained control over log verbosity, Mountpoint uses the `MOUNTPOINT_LOG` environment variable, which overrides the verbosity options above. The `MOUNTPOINT_LOG` environment variable uses the [`tracing-subscriber` directive syntax](https://docs.rs/tracing-subscriber/0.3.17/tracing_subscriber/filter/struct.EnvFilter.html), and can be used to control log verbosity on a per-subject basis. For example, setting `MOUNTPOINT_LOG` to `trace` enables all trace-level logs, while `trace,awscrt=warn` enables trace-level logs for all log subjects except `awscrt`, which has only warning-level logging enabled.

#### Changing logging verbosity at runtime

> [!WARNING]
> This is an unstable interface and might be subject to change in the future.
>
> The default action of `SIGUSR2` POSIX signal is to terminate the process.
> Ensure Mountpoint version supports `SIGUSR2` signal before sending it, as otherwise it might terminate the process. Mountpoint v1.17.0 onward supports `SIGUSR2` signal as long as `--no-log` options is not passed.

Mountpoint allows changing logging verbosity dynamically at runtime using `SIGUSR2` POSIX signal, e.g., `kill -USR2 <mount-s3-pid>`.

Mountpoint toggles between the following verbosity levels each time it receives a `SIGUSR2` signal:
  1. Default logging verbosity (i.e., the one configured using `--debug`, `--debug-crt`, or `MOUNTPOINT_LOG` environment variable)
  2. Debug logging for all except CRT (i.e., `debug,awscrt=off`)
  3. Debug logging for all (i.e., `debug,awscrt=debug`)
  4. Trace logging for all except CRT (i.e., `trace,awscrt=off`)
  5. Trace logging for all (i.e., `trace,awscrt=trace`)

Note that increasing logging verbosity might affect runtime performance and cause more more log entries to be generated. Caution must be taken before using this feature in a production workload.

## Metrics

Mountpoint optionally collects metrics measuring various values across different components.
For example, Mountpoint records the durations of FUSE operations and the number of S3 responses grouped by HTTP status code.

Metrics logging is controlled by the '--log-metrics' flag. When neither '--log-metrics' nor '--debug' is set, metrics logging will be turned off. In debug mode or when '--log-metrics' is set, metrics will be logged at the INFO level.

Metrics will be collected by Mountpoint and flushed to the logs every five seconds.
See below an example of what the emitted metrics may look like in the logs.

    [INFO] mountpoint_s3_fs::metrics: fuse.io_size[type=read]: n=4: min=3184 p10=3199 p50=16511 avg=26494.00 p90=70143 p99=70143 p99.9=70143 max=70143
    [INFO] mountpoint_s3_fs::metrics: fuse.op_latency_us[op=lookup]: n=8: min=22912 p10=23039 p50=65023 avg=62632.00 p90=95231 p99=95231 p99.9=95231 max=95231
    [INFO] mountpoint_s3_fs::metrics: fuse.op_latency_us[op=open]: n=3: min=24448 p10=24575 p50=64255 avg=54037.33 p90=73727 p99=73727 p99.9=73727 max=73727
    [INFO] mountpoint_s3_fs::metrics: fuse.total_bytes[type=read]: 105584 (n=4)

We recommend using the metrics only for debugging at this time.
Metrics are currently output in an unstructured format and are subject to change in future releases.
