# Logging

By default, Mountpoint for Amazon S3 emits high-severity log information to [syslog](https://datatracker.ietf.org/doc/html/rfc5424) if available on your system. To view these logs on systems using `journald` (most modern Linux distributions, including Amazon Linux), run:

    journalctl -e SYSLOG_IDENTIFIER=mount-s3

On other systems, syslog entries are likely written to a file such as `/var/log/syslog`.

When running `mount-s3` in foreground mode (the `-f, --foreground` command-line argument), Mountpoint will emit logs to stdout in addition to syslog or any configured log directory (see below).

## Logging to a file

You can direct logs to a file instead of syslog by providing a destination directory using the `-l, --log-directory` command-line argument with `mount-s3`.

    mount-s3 <BUCKET> <MOUNT_PATH> --log-directory <LOG_DIRECTORY>

The directory will be created if it doesn't exist.
A new log file will be created for each execution of `mount-s3`.
Both the directory and log files are created with read/write access for the process owner and read access for the process owner's group.
Log files are not automatically rotated or cleaned up.

## Disabling logging

If you do not want to record any logs, use the `--no-log` command-line argument. This argument cannot be combined with other logging-related command-line arguments. The `--no-log` argument has
no effect on messages sent to the standard output. If no output is desired, consider redirecting it.

## Verbose logging

By default, Mountpoint only logs high-severity events. For reporting issues or debugging application problems, it can be helpful to increase this verbosity.
You can enable more verbose logging with the `--debug` command-line argument. We recommend logging to a file (the `-l, --log-directory` argument above) when using this option.

### Advanced logging verbosity options

To enable more verbose logging for the AWS Common Runtime that Mountpoint uses to communicate with S3, use the `--debug-crt` command-line argument. These logs are very verbose, and should be combined with the `-l, --log-directory` and `--debug` arguments described above.

For finer-grained control over log verbosity, Mountpoint uses the `MOUNTPOINT_LOG` environment variable, which overrides the verbosity options above. The `MOUNTPOINT_LOG` environment variable uses the [`tracing-subscriber` directive syntax](https://docs.rs/tracing-subscriber/0.3.17/tracing_subscriber/filter/struct.EnvFilter.html), and can be used to control log verbosity on a per-subject basis. For example, setting `MOUNTPOINT_LOG` to `trace` enables all trace-level logs, while `trace,awscrt=warn` enables trace-level logs for all log subjects except `awscrt`, which has only warning-level logging enabled.
