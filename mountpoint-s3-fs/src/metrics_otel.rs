use opentelemetry::global;
use opentelemetry::KeyValue;
use opentelemetry_otlp::{Protocol, WithExportConfig};
use std::time::Duration;

use metrics::Key;

/// Configuration for OpenTelemetry metrics export
#[derive(Debug, Clone)]
pub struct OtlpConfig {
    /// The endpoint URL to send metrics to
    pub endpoint: String,
    /// The export interval in seconds
    pub interval_secs: u64,
}

impl OtlpConfig {
    /// Create a new OtlpConfig with the specified endpoint and default interval
    pub fn new(endpoint: &str) -> Self {
        Self {
            endpoint: endpoint.to_string(),
            interval_secs: 5, // Default to 5 seconds
        }
    }

    /// Set the export interval in seconds
    pub fn with_interval_secs(mut self, secs: u64) -> Self {
        self.interval_secs = secs;
        self
    }
}

#[derive(Debug)]
pub struct OtlpMetricsExporter {
    meter: opentelemetry::metrics::Meter,
}

impl OtlpMetricsExporter {
    /// Create a new OtlpMetricsExporter with the specified configuration
    /// Returns a Result containing the new exporter or an error if initialisation failed
    pub fn new(config: &OtlpConfig) -> Result<Self, Box<dyn std::error::Error>> {
        // Initialise OTLP exporter using HTTP binary protocol with the specified endpoint
        let exporter = opentelemetry_otlp::MetricExporter::builder()
            .with_http()
            .with_protocol(Protocol::HttpBinary)
            .with_endpoint(&config.endpoint)
            .build()?;

        // Create a meter provider with the OTLP Metric Exporter that will collect and export metrics at regular intervals
        let meter_provider = opentelemetry_sdk::metrics::SdkMeterProvider::builder()
            // The default interval is 60 seconds so we use a PeriodicReader to allow us to specify a custom interval duration
            .with_reader(
                opentelemetry_sdk::metrics::PeriodicReader::builder(exporter)
                    .with_interval(Duration::from_secs(config.interval_secs))
                    .build(),
            )
            .build();
        // Set the configured SdkMeterProvider as the global meter provider making it the default provider that will be used throughout for all OpenTelemetry metrics
        global::set_meter_provider(meter_provider);

        // Obtain meter instance from global meter provider
        // The meter will be used to create specific metric instruments (counters, gauges, histograms) and record values to them
        let meter = global::meter("mountpoint-s3");

        Ok(Self { meter })
    }

    /// Record a counter metric in OTel format
    pub fn record_counter(&self, key: &Key, value: u64, attributes: &[KeyValue]) {
        let counter = self.meter.u64_counter(key.name().to_string()).build();

        counter.add(value, attributes);
    }

    /// Record a gauge metric in OTel format
    pub fn record_gauge(&self, key: &Key, value: f64, attributes: &[KeyValue]) {
        let gauge = self.meter.f64_gauge(key.name().to_string()).build();

        gauge.record(value, attributes);
    }

    /// Record a histogram metric in OTel format
    pub fn record_histogram(&self, key: &Key, value: f64, attributes: &[KeyValue]) {
        let histogram = self.meter.f64_histogram(key.name().to_string()).build();

        histogram.record(value, attributes);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    /// This is a manual test for verifying OpenTelemetry metrics export functionality.
    /// It provides end-to-end verification of the metrics pipeline without needing to run the full mountpoint application.
    ///
    /// # Requirements
    /// - An OpenTelemetry collector running at the specified endpoint (default: http://localhost:4318/v1/metrics)
    ///
    /// # How to run
    /// ```bash
    /// # Start the OpenTelemetry collector (e.g., using Docker)
    /// docker run -p 4317:4317 -p 4318:4318 -v $(pwd)/collector-config.yaml:/etc/otel-collector-config.yaml \
    ///   otel/opentelemetry-collector:latest --config=/etc/otel-collector-config.yaml
    ///
    /// # Run the test with default endpoint (ignored by default)
    /// cargo test --package mountpoint-s3-fs --lib -- metrics_otel::tests::direct_otlp_test --exact --ignored
    ///
    /// # Or run with a custom endpoint by setting the MOUNTPOINT_TEST_OTLP_ENDPOINT environment variable
    /// MOUNTPOINT_TEST_OTLP_ENDPOINT="http://custom-server:4318/v1/metrics" cargo test --package mountpoint-s3-fs --lib -- metrics_otel::tests::direct_otlp_test --exact --ignored
    ///
    /// # Verify metrics in collector logs
    #[test]
    #[ignore]
    fn direct_otlp_test() {
        use opentelemetry::global;
        use opentelemetry_otlp::{Protocol, WithExportConfig};
        use std::time::Duration;
        use tracing::info;
        use tracing_subscriber::fmt::format::FmtSpan;
        use tracing_subscriber::util::SubscriberInitExt;

        // Create and set the subscriber
        tracing_subscriber::fmt()
            .with_span_events(FmtSpan::CLOSE)
            .with_target(false)
            .with_thread_ids(true)
            .with_level(true)
            .with_file(true)
            .with_line_number(true)
            .with_test_writer()
            .set_default();

        info!("Setting up direct OpenTelemetry test...");

        // Get OTLP endpoint from environment variable or use default
        let endpoint = std::env::var("MOUNTPOINT_TEST_OTLP_ENDPOINT")
            .unwrap_or_else(|_| "http://localhost:4318/v1/metrics".to_string());

        info!("Using OTLP endpoint: {}", endpoint);

        // Create a config with custom settings
        let config = OtlpConfig::new(&endpoint).with_interval_secs(1);

        // Initialize the OpenTelemetry SDK directly
        let exporter = opentelemetry_otlp::MetricExporter::builder()
            .with_http()
            .with_protocol(Protocol::HttpBinary)
            .with_endpoint(&config.endpoint)
            .with_timeout(Duration::from_secs(10))
            .build()
            .expect("Failed to create exporter");

        info!("Created exporter");

        let reader = opentelemetry_sdk::metrics::PeriodicReader::builder(exporter)
            .with_interval(Duration::from_secs(1))
            .build();

        info!("Created reader");

        let provider = opentelemetry_sdk::metrics::SdkMeterProvider::builder()
            .with_reader(reader)
            .build();

        info!("Created provider");

        global::set_meter_provider(provider.clone());

        info!("Set meter provider");

        let meter = global::meter("mountpoint-s3");

        // Create and record multiple metrics to ensure visibility
        let counter = meter
            .u64_counter("test_counter")
            .with_description("Test counter for direct OTLP export")
            .with_unit("1")
            .build();

        info!("Created counter metric");

        // Add multiple data points with different attributes
        counter.add(
            100,
            &[
                opentelemetry::KeyValue::new("test", "true"),
                opentelemetry::KeyValue::new("source", "direct_test"),
                opentelemetry::KeyValue::new("type", "counter"),
            ],
        );

        info!("Recorded counter with value 100 to endpoint {}", endpoint);

        // Add another data point to ensure we're seeing updates
        counter.add(
            150,
            &[
                opentelemetry::KeyValue::new("test", "true"),
                opentelemetry::KeyValue::new("source", "direct_test"),
                opentelemetry::KeyValue::new("type", "counter"),
            ],
        );

        info!("Recorded counter with value 150 to endpoint {}", endpoint);
        info!("Waiting for metrics to be exported...");

        // Wait longer to ensure metrics are exported
        std::thread::sleep(Duration::from_secs(10));

        info!("Test complete. Check docker logs otel-collector for metrics with prefix 'mountpoint.'");
    }
}
