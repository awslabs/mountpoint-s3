use opentelemetry::global;
use opentelemetry::KeyValue;
use opentelemetry_otlp::{Protocol, WithExportConfig};
use std::time::Duration;

use metrics::Key;

#[derive(Debug)]
pub struct OtlpMetricsExporter {
    meter_provider: opentelemetry_sdk::metrics::SdkMeterProvider,
    meter: opentelemetry::metrics::Meter,
}

impl OtlpMetricsExporter {
    /// Create a new OtlpMetricsExporter that will send metrics to the specified endpoint
    /// Returns a Result containing the new exporter or an error if initialisation failed
    pub fn new(endpoint: &str) -> Result<Self, Box<dyn std::error::Error>> {
        // Initialise OTLP exporter using HTTP binary protocol with the specified endpoint
        let exporter = opentelemetry_otlp::MetricExporter::builder()
            .with_http()
            .with_protocol(Protocol::HttpBinary)
            .with_endpoint(endpoint)
            .build()?;

        // Create a meter provider with the OTLP Metric Exporter that will collect and export metrics at regular intervals
        let meter_provider = opentelemetry_sdk::metrics::SdkMeterProvider::builder()
            // The default interval is 60 seconds so we use a PeriodicReader to allow us to specify a custom interval duration
            .with_reader(
                opentelemetry_sdk::metrics::PeriodicReader::builder(exporter)
                    .with_interval(Duration::from_secs(5)) // This sets a 5-second export interval
                    .build(),
            )
            .build();
        global::set_meter_provider(meter_provider.clone());

        // Get a meter
        let meter = global::meter("mountpoint-s3");

        Ok(Self { meter_provider, meter })
    }

    /// Record a counter metric in OTel format
    pub fn record_counter(&self, key: &Key, value: u64, attributes: &[KeyValue]) {
        let counter = self.meter
            .u64_counter(key.name().to_string())
            .with_description("Mountpoint counter metric")
            .build();

        counter.add(value, attributes);
    }

    /// Record a gauge metric in OTel format
    pub fn record_gauge(&self, key: &Key, value: f64, attributes: &[KeyValue]) {
        let gauge = self.meter
            .f64_gauge(key.name().to_string())
            .with_description("Mountpoint gauge metric")
            .build();

        gauge.record(value, attributes);
    }

    /// Record a histogram metric in OTel format
    pub fn record_histogram(&self, key: &Key, value: f64, attributes: &[KeyValue]) {
        let histogram = self.meter
            .f64_histogram(key.name().to_string())
            .with_description("Mountpoint histogram metric")
            .build();

        histogram.record(value, attributes);
    }
}
