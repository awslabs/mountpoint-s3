# Logging

By default, Mountpoint for Amazon S3 emits high-severity log information to [syslog](https://datatracker.ietf.org/doc/html/rfc5424) if available on your system. To view these logs on systems using `journald` (most modern Linux distributions, including Amazon Linux), run:

    journalctl -e SYSLOG_IDENTIFIER=mount-s3

On other systems, syslog entries are likely written to a file such as `/var/log/syslog`.

When running `mount-s3` in foreground mode (the `-f, --foreground` command-line argument), Mountpoint will emit logs to stdout in addition to syslog or any configured log directory (see below).

> [!NOTE]
> If you are using [Mountpoint for Amazon S3 CSI Driver](https://github.com/awslabs/mountpoint-s3-csi-driver/), logs will be written to the syslog on the underlying node.
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

By default, Mountpoint only logs high-severity events. For reporting issues or debugging application problems, it can be helpful to increase this verbosity.
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

To opt-in, use the `--log-metrics` command-line argument.
Metrics will be collected by Mountpoint and flushed to the logs every five seconds.
See below an example of what the emitted metrics may look like in the logs.

    [INFO] mountpoint_s3_fs::metrics: fuse.io_size[type=read]: n=4: min=3184 p10=3199 p50=16511 avg=26494.00 p90=70143 p99=70143 p99.9=70143 max=70143
    [INFO] mountpoint_s3_fs::metrics: fuse.op_latency_us[op=lookup]: n=8: min=22912 p10=23039 p50=65023 avg=62632.00 p90=95231 p99=95231 p99.9=95231 max=95231
    [INFO] mountpoint_s3_fs::metrics: fuse.op_latency_us[op=open]: n=3: min=24448 p10=24575 p50=64255 avg=54037.33 p90=73727 p99=73727 p99.9=73727 max=73727
    [INFO] mountpoint_s3_fs::metrics: fuse.total_bytes[type=read]: 105584 (n=4)

We recommend using the metrics only for debugging at this time.
Metrics are currently output in an unstructured format and are subject to change in future releases.

### Publishing Metrics

Additionally, metrics can be published in OpenTelemetry format to a specified endpoint. This allows for integration with OpenTelemetry collectors and agents. For example, the [CloudWatch Agent](#cloudwatch-agent-installation) can listen at port 4318 for metrics in OpenTelemetry format and forward them to CloudWatch and Prometheus.

Note that publishing metrics to CloudWatch may incur additional AWS costs depending on the volume of metrics and your AWS account's billing tier. Publishing metrics is entirely optional, and you can still use Mountpoint without enabling this feature.

To opt-in, use the `--log-metrics-otlp <ENDPOINT>` command-line argument and provide an endpoint as a parameter. To optionally specify a time interval for Mountpoint to collect and export metrics, use the `--log-metrics-otlp-interval <SECONDS>` command-line argument. Metrics will be collected by Mountpoint and exported to the endpoint every 5 seconds by default, or every specified seconds.

#### Example Command

```bash
# Mount an S3 bucket and publish metrics to a local CloudWatch agent
mount-s3 amzn-s3-demo-bucket /mnt/s3 --log-metrics-otlp http://localhost:4318 --log-metrics-otlp-interval 10
```

#### CloudWatch Agent Installation 

Follow [CloudWatch Agent installation guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/install-CloudWatch-Agent-commandline-fleet.html). For more information about the CloudWatch agent, see the [CloudWatch Agent Installation Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Install-CloudWatch-Agent.html) and [Using the CloudWatch agent to collect OpenTelemetry metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-OpenTelemetry-metrics.html). If installing on EC2 instance, ensure that you attach the CloudWatchAgentServerPolicy to the IAM role that is attached to your instance.

#### CloudWatch Agent Configuration

The recommended path for the CloudWatch Agent configuration file is `/opt/aws/amazon-cloudwatch-agent/etc/cloudwatch-agent.json` on Linux and `$Env:ProgramData\Amazon\AmazonCloudWatchAgent\amazon-cloudwatch-agent.json` on Windows.

Basic configuration for forwarding metrics to CloudWatch:

```json
{
    "agent": {
        "metrics_collection_interval": 60,
        "run_as_user": "cwagent"
    },
    "metrics": {
        "namespace": "Mountpoint",
        "metrics_collected": {
            "otlp": {
                "grpc_endpoint": "127.0.0.1:4317",
                "http_endpoint": "127.0.0.1:4318"
            }
        }
    }
}
```

This configuration will forward metrics that are received at the otlp endpoint/s to CloudWatch. (If no destination is provided, the default of CloudWatch is used.) 

Configuration to publish to both CloudWatch and Prometheus:

```json
{
    "agent": {
        "metrics_collection_interval": 60,
        "run_as_user": "cwagent"
    },
    "metrics": {
        "namespace": "Mountpoint",
        "metrics_destinations": {
           "cloudwatch": {},
           "amp": {
             "workspace_id": "ws-abcd1234-ef56-7890-ab12-example"
            }
        },
        "metrics_collected": {
            "otlp": {
                "grpc_endpoint": "127.0.0.1:4317",
                "http_endpoint": "127.0.0.1:4318"
            }
        }
    }
}
```

For more detailed configurations, follow [CloudWatch Agent Configuration File Details](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html).

#### Viewing Metrics in CloudWatch

Starting CloudWatch Agent with the configured json file: 

```
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c file:/opt/aws/amazon-cloudwatch-agent/etc/cloudwatch-agent.json
```

Then run mountpoint with the cli flag and metrics will be visible in your CloudWatch console.

Stop the CloudWatch Agent:

```
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a stop
```

#### Troubleshooting

Check if CloudWatch Agent is running:

```
systemctl status amazon-cloudwatch-agent
```

Verify listening on ports:

```
sudo lsof -i :4317,4318
```

Check CloudWatch Agent logs:

```
sudo tail -n 50 /opt/aws/amazon-cloudwatch-agent/logs/amazon-cloudwatch-agent.log
```

Set Debug logs:

```
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a set-log-level -l DEBUG
```
