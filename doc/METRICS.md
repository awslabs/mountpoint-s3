# Metrics

Mountpoint for Amazon S3 can export metrics using OpenTelemetry Protocol (OTLP) to provide visibility into FUSE requests, S3 API calls, Mountpoint throughput, etc. These metrics can be collected by CloudWatch Agent or other OTLP-compatible collectors to publish to observability backends for monitoring.

Metrics can also be logged to files using the existing `--log-metrics` option (see [LOGGING.md](LOGGING.md#metrics)).

## Enabling metrics

To export Mountpoint metrics using OTLP, configure Mountpoint with an OTLP endpoint:

    mount-s3 --otlp-endpoint http://localhost:4318 --otlp-export-interval 60 <BUCKET> <MOUNT_PATH>

Replace `http://localhost:4318` with the actual endpoint of your OTLP collector. The `--otlp-export-interval` option is optional (default is 60 seconds).

## Publishing metrics to observability backends

Mountpoint exports metrics using OTLP protocol in HTTP binary format. It uses [exponential histograms](https://opentelemetry.io/docs/specs/otel/metrics/data-model/#exponentialhistogram) and [delta temporality](https://opentelemetry.io/docs/specs/otel/metrics/data-model/#temporality).

Not all observability backends natively support this format. Here are a few ways to publish Mountpoint metrics.

### CloudWatch

We recommend using the CloudWatch Agent to export Mountpoint metrics to CloudWatch. This requires CloudWatch Agent [v1.300060.0](https://github.com/aws/amazon-cloudwatch-agent/releases/tag/v1.300060.0) or later for exponential histogram support.

Here is the minimal CloudWatch Agent configuration to receive OTLP metrics from Mountpoint. The `http_endpoint` should match the `--otlp-endpoint` used with Mountpoint:

```json
{
  "metrics": {
    "metrics_collected": {
      "otlp": {
        "http_endpoint": "0.0.0.0:4318"
      }
    }
  }
}
```

If using an OpenTelemetry Collector to export to CloudWatch via the EMF exporter, note that exponential histogram data is reduced to min/max/sum/count, reducing the accuracy of percentile metrics.

For more details on CloudWatch Agent setup, refer to [CloudWatch OTLP metrics documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-OpenTelemetry-metrics.html).

### Prometheus

We recommend using Prometheus v3.0 or later to publish Mountpoint metrics directly via its OTLP receiver. Prometheus must be started with the following feature flags to support OTLP exponential histograms and delta temporality used by Mountpoint:

```bash
prometheus \
  --config.file=prometheus.yml \
  --web.listen-address=:9090 \
  --web.enable-otlp-receiver \
  --enable-feature=native-histograms,otlp-deltatocumulative
```

Without these feature flags, histogram data may be dropped or misinterpreted. For more details on feature flags and configuration, see the [Prometheus documentation](https://prometheus.io/docs/prometheus/latest/feature_flags).

Prometheus converts metric names to underscore separated format and may append units. For example, `fuse.request_latency` becomes `fuse_request_latency_microseconds`.

### OpenTelemetry Collector

If you want to enrich, filter, or route metrics to multiple destinations, you can place an OpenTelemetry Collector between Mountpoint and the observability backend. See the [OpenTelemetry Collector documentation](https://opentelemetry.io/docs/collector/).

Here is an example OpenTelemetry Collector configuration for routing to Prometheus:

```yaml
receivers:
  otlp:
    protocols:
      http:
        endpoint: 0.0.0.0:4318

exporters:
  otlphttp:
    endpoint: http://prometheus:9090/api/v1/otlp

service:
  pipelines:
    metrics:
      receivers: [otlp]
      exporters: [otlphttp]
```

## Available metrics

Mountpoint emits the following metrics:

| Metric | Type | Dimensions | Description |
|--------|------|------------|-------------|
| `fuse.io_size` | Histogram | `fuse_request` (read, write) | Bytes transferred per FUSE request |
| `fuse.request_errors` | Counter | `fuse_request` (read, write, etc.) | Number of FUSE request errors |
| `fuse.request_latency` | Histogram | `fuse_request` (read, write, etc.) | Time to process a FUSE request |
| `process.memory_usage` | Gauge | | Memory usage (RSS) of the Mountpoint process |
| `s3.request_count` | Counter | `s3_request` (GetObject, PutObject, etc.) | Number of S3 requests |
| `s3.request_errors` | Counter | `s3_request` (GetObject, PutObject, etc.)<br>`http_status` (403, 404, etc.) | Number of S3 request errors |
| `s3.request_first_byte_latency` | Histogram | `s3_request` (GetObject, PutObject, etc.) | Time from initiation of an S3 request until the first byte is received |
| `s3.request_total_latency` | Histogram | `s3_request` (GetObject, PutObject, etc.) | Time from initiation of an S3 request until the response is received |
| `experimental.fuse.idle_threads` | Gauge | | FUSE worker threads waiting for new requests |
| `experimental.fuse.total_threads` | Gauge | | Total number of FUSE worker threads spawned |
| `experimental.prefetch.reset_state` | Counter | | Times Mountpoint discarded prefetched data due to access patterns |

> [!NOTE]
> Metrics prefixed with `experimental.` may change or be removed in future versions.

### Sample dashboard

To visualize these metrics, here is a sample CloudWatch dashboard template: [cloudwatch.json](../examples/dashboards/cloudwatch.json). Update the region and import the template using the AWS CLI or the CloudWatch console to create a dashboard.

For comprehensive monitoring, the dashboard can be extended to include S3 server-side metrics, EC2 instance metrics, and CloudWatch procstat metrics.

Additional attributes like EC2 instance ID can be added using the CloudWatch Agent or OTel collector to troubleshoot instance-specific issues.


