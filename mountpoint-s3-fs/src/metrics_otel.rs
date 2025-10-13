use metrics::Unit;
use opentelemetry::{global, metrics as otel_metrics};
use opentelemetry_otlp::{MetricExporter, Protocol, WithExportConfig};
use opentelemetry_sdk::metrics::{
    Aggregation, Instrument, InstrumentKind, PeriodicReader, SdkMeterProvider, Stream, Temporality,
};
use std::time::Duration;

use crate::metrics::defs::{MetricStability, to_ucum};

/// Get temporality preference from environment variable
/// By default, we will use delta.
fn get_temporality_from_env() -> Temporality {
    let prefer_delta = std::env::var("EXPERIMENTAL_MOUNTPOINT_OTLP_METRICS_TEMPORALITY_PREFERENCE")
        .map(|v| v.to_lowercase() != "cumulative")
        .unwrap_or(true);

    if prefer_delta {
        Temporality::Delta
    } else {
        Temporality::Cumulative
    }
}

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
            interval_secs: 60,
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
    meter: otel_metrics::Meter,
}

impl OtlpMetricsExporter {
    #[cfg(test)]
    pub fn new_for_test(meter: otel_metrics::Meter) -> Self {
        Self { meter }
    }

    /// Create a new OtlpMetricsExporter with the specified configuration
    /// Returns a Result containing the new exporter or an error if initialisation failed
    pub fn new(config: &OtlpConfig) -> Result<Self, Box<dyn std::error::Error>> {
        // Ensure endpoint ends with /v1/metrics
        let endpoint_url = if !config.endpoint.ends_with("/v1/metrics") {
            if config.endpoint.ends_with('/') {
                format!("{}v1/metrics", config.endpoint)
            } else {
                format!("{}/v1/metrics", config.endpoint)
            }
        } else {
            config.endpoint.to_string()
        };

        // Limit to HTTP binary protocol for now
        let exporter = MetricExporter::builder()
            .with_http()
            .with_protocol(Protocol::HttpBinary)
            .with_endpoint(&endpoint_url)
            .with_temporality(get_temporality_from_env())
            .build()?;

        // Create a resource with no attributes to avoid default dimensions
        let resource = opentelemetry_sdk::resource::Resource::builder_empty().build();

        // Create a meter provider with the OTLP Metric Exporter that will collect and export metrics at regular intervals
        let meter_provider = SdkMeterProvider::builder()
            // The default interval is 60 seconds so we use a PeriodicReader to allow us to specify a custom interval duration
            .with_reader(
                PeriodicReader::builder(exporter)
                    .with_interval(Duration::from_secs(config.interval_secs))
                    .build(),
            )
            .with_resource(resource)
            .with_view(|instrument: &Instrument| {
                if matches!(instrument.kind(), InstrumentKind::Histogram) {
                    Some(
                        Stream::builder()
                            .with_aggregation(Aggregation::Base2ExponentialHistogram {
                                max_size: 160,
                                max_scale: 20,
                                record_min_max: true,
                            })
                            .build()
                            .unwrap(),
                    )
                } else {
                    None
                }
            })
            .build();
        // Set the configured SdkMeterProvider as the global meter provider making it the default provider that will be used throughout for all OpenTelemetry metrics
        global::set_meter_provider(meter_provider);

        // Obtain meter instance from global meter provider
        // The meter will be used to create specific metric instruments (counters, gauges, histograms) and record values to them
        let meter = global::meter("mountpoint-s3");

        Ok(Self { meter })
    }

    fn otlp_metric_name(&self, name: &str, stability: MetricStability) -> String {
        match stability {
            MetricStability::Experimental => format!("experimental.{name}"),
            _ => name.to_string(),
        }
    }

    pub fn create_counter_instrument(
        &self,
        name: &str,
        unit: Unit,
        stability: MetricStability,
    ) -> otel_metrics::Counter<u64> {
        let metric_name = self.otlp_metric_name(name, stability);
        self.meter.u64_counter(metric_name).with_unit(to_ucum(unit)).build()
    }

    pub fn create_gauge_instrument(
        &self,
        name: &str,
        unit: Unit,
        stability: MetricStability,
    ) -> otel_metrics::Gauge<f64> {
        let metric_name = self.otlp_metric_name(name, stability);
        self.meter.f64_gauge(metric_name).with_unit(to_ucum(unit)).build()
    }

    pub fn create_histogram_instrument(
        &self,
        name: &str,
        unit: Unit,
        stability: MetricStability,
    ) -> otel_metrics::Histogram<f64> {
        let metric_name = self.otlp_metric_name(name, stability);
        self.meter.f64_histogram(metric_name).with_unit(to_ucum(unit)).build()
    }
}

impl TryFrom<&OtlpConfig> for OtlpMetricsExporter {
    type Error = Box<dyn std::error::Error>;

    fn try_from(config: &OtlpConfig) -> Result<Self, Self::Error> {
        OtlpMetricsExporter::new(config)
    }
}
