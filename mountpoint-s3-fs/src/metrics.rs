//! Metrics infrastructure
//!
//! This module hooks up the [metrics](https://docs.rs/metrics) facade to a metrics sink that
//! currently just emits them to a tracing log entry.

#[cfg(feature = "otlp_integration")]
pub use crate::metrics_otel::OtlpConfig;
#[cfg(feature = "otlp_integration")]
use crate::metrics_otel::OtlpMetricsExporter;
#[cfg(feature = "otlp_integration")]
use defs::MetricStability;

use std::thread::{self, JoinHandle};
use std::time::Duration;

use dashmap::DashMap;
use metrics::{Key, Metadata, Recorder};
use sysinfo::{MemoryRefreshKind, ProcessRefreshKind, ProcessesToUpdate, System, get_current_pid};

use crate::sync::Arc;
use crate::sync::mpsc::{RecvTimeoutError, Sender, channel};

mod data;
use data::Metric;
pub use data::MetricValue;

mod tracing_span;
pub use tracing_span::metrics_tracing_span_layer;

pub mod defs;

/// How long between drains of each thread's local metrics into the global sink
const AGGREGATION_PERIOD: Duration = Duration::from_secs(5);

/// The log target to use for emitted metrics
pub const TARGET_NAME: &str = "mountpoint_s3_fs::metrics";

/// Configuration for metrics collection
pub enum MetricsConfig {
    /// OpenTelemetry configuration (only available with "otlp_integration" feature)
    #[cfg(feature = "otlp_integration")]
    Otlp(OtlpConfig),
}

/// Initialize and install the global metrics sink, and return a handle that can be used to shut
/// the sink down. The sink should only be shut down after any threads that generate metrics are
/// done with their work; metrics generated after shutting down the sink will be lost.
///
/// Panics if a sink has already been installed.
pub fn install(config: Option<MetricsConfig>) -> anyhow::Result<MetricsSinkHandle> {
    let sink = Arc::new(MetricsSink::new(config)?);
    let mut sys = System::new();

    let (tx, rx) = channel();

    let publisher_thread = {
        let inner = Arc::clone(&sink);
        thread::spawn(move || {
            loop {
                match rx.recv_timeout(AGGREGATION_PERIOD) {
                    Ok(()) | Err(RecvTimeoutError::Disconnected) => break,
                    Err(RecvTimeoutError::Timeout) => {
                        poll_process_metrics(&mut sys);
                        inner.publish()
                    }
                }
            }
            // Drain metrics one more time before shutting down. This has a chance of missing
            // any new metrics data after the sink shuts down, but we assume a clean shutdown
            // stops generating new metrics before shutting down the sink.
            poll_process_metrics(&mut sys);
            inner.publish();
        })
    };

    let handle = MetricsSinkHandle {
        shutdown: tx,
        handle: Some(publisher_thread),
    };

    let recorder = MetricsRecorder { sink };
    metrics::set_global_recorder(recorder)
        .map_err(|e| anyhow::anyhow!("Failed to set global metrics recorder: {}", e))?;

    Ok(handle)
}

/// Report process level metrics
fn poll_process_metrics(sys: &mut System) {
    if let Ok(pid) = get_current_pid() {
        let last_mem = sys.process(pid).map_or(0, |process| process.memory());
        sys.refresh_memory_specifics(MemoryRefreshKind::nothing().with_ram());
        sys.refresh_processes_specifics(
            ProcessesToUpdate::Some(&[pid]),
            false,
            ProcessRefreshKind::nothing().with_memory(),
        );
        if let Some(process) = sys.process(pid) {
            // update the metrics only when there is some change, otherwise it will be too spammy.
            if last_mem != process.memory() {
                metrics::gauge!("process.memory_usage").set(process.memory() as f64);
                metrics::gauge!("system.available_memory").set(sys.available_memory() as f64);
            }
        }
    }
}

#[derive(Debug)]
struct MetricsSink {
    metrics: DashMap<Key, Metric>,
    #[cfg(feature = "otlp_integration")]
    otlp_exporter: Option<OtlpMetricsExporter>,
}

impl MetricsSink {
    fn new(config: Option<MetricsConfig>) -> anyhow::Result<Self> {
        // Match on the config to determine what kind of metrics sink to create
        match config {
            None => Ok(Self {
                metrics: DashMap::with_capacity(64),
                #[cfg(feature = "otlp_integration")]
                otlp_exporter: None,
            }),

            // OTLP configuration (only available with "otlp_integration" feature)
            #[cfg(feature = "otlp_integration")]
            Some(MetricsConfig::Otlp(config)) => {
                // Basic validation of the endpoint URL
                if !config.endpoint.starts_with("http://") && !config.endpoint.starts_with("https://") {
                    return Err(anyhow::anyhow!(
                        "Invalid OTLP endpoint configuration: endpoint must start with http:// or https://"
                    ));
                }

                match OtlpMetricsExporter::new(&config) {
                    Ok(exporter) => {
                        tracing::info!("OpenTelemetry metrics export enabled to {}", config.endpoint);
                        Ok(Self {
                            metrics: DashMap::with_capacity(64),
                            otlp_exporter: Some(exporter),
                        })
                    }
                    Err(e) => {
                        tracing::error!("Failed to initialise OTLP exporter: {}", e);
                        Err(anyhow::anyhow!(
                            "Failed to initialize OTLP metrics exporter: {}. If metrics export is not required, omit the OTLP configuration.",
                            e
                        ))
                    }
                }
            }
        }
    }

    fn counter(&self, key: &Key) -> metrics::Counter {
        let metric = self.metrics.entry(key.clone()).or_insert_with(move || {
            #[cfg(feature = "otlp_integration")]
            if let Some(exporter) = &self.otlp_exporter {
                let config = defs::lookup_config(key.name());
                if config.stability != MetricStability::Internal {
                    return Metric::counter_otlp(exporter, key, &config);
                }
            }
            Metric::counter()
        });
        metric.as_counter()
    }

    fn gauge(&self, key: &Key) -> metrics::Gauge {
        let metric = self.metrics.entry(key.clone()).or_insert_with(move || {
            #[cfg(feature = "otlp_integration")]
            if let Some(exporter) = &self.otlp_exporter {
                let config = defs::lookup_config(key.name());
                if config.stability != MetricStability::Internal {
                    return Metric::gauge_otlp(exporter, key, &config);
                }
            }
            Metric::gauge()
        });
        metric.as_gauge()
    }

    fn histogram(&self, key: &Key) -> metrics::Histogram {
        let metric = self.metrics.entry(key.clone()).or_insert_with(move || {
            #[cfg(feature = "otlp_integration")]
            if let Some(exporter) = &self.otlp_exporter {
                let config = defs::lookup_config(key.name());
                if config.stability != MetricStability::Internal {
                    return Metric::histogram_otlp(exporter, key, &config);
                }
            }
            Metric::histogram()
        });
        metric.as_histogram()
    }
}

impl MetricsSink {
    /// Publish all this sink's metrics to `tracing` log messages
    fn publish(&self) {
        // Collect the output lines so we can sort them to make reading easier
        let mut metrics = vec![];

        for mut entry in self.metrics.iter_mut() {
            let (key, metric) = entry.pair_mut();

            // Get the string representation of the metric (this also resets the metric)
            let Some(metric_str) = metric.fmt_and_reset() else {
                continue;
            };

            let labels = if key.labels().len() == 0 {
                String::new()
            } else {
                format!(
                    "[{}]",
                    key.labels()
                        .map(|label| format!("{}={}", label.key(), label.value()))
                        .collect::<Vec<_>>()
                        .join(",")
                )
            };

            let unit = {
                #[cfg(feature = "otlp_integration")]
                match defs::lookup_config(key.name()).unit.as_canonical_label() {
                    "" => String::new(),
                    label => format!(" ({label})"),
                }
                #[cfg(not(feature = "otlp_integration"))]
                String::new()
            };

            metrics.push(format!("{} {}{}: {}", key.name(), unit, labels, metric_str));
        }

        metrics.sort();

        for metric in metrics {
            tracing::info!(target: TARGET_NAME, "{}", metric);
        }
    }
}

/// The actual recorder that will be installed for the metrics facade. Just a wrapper around a
/// [MetricsSinkInner] that does all the real work.
struct MetricsRecorder {
    sink: Arc<MetricsSink>,
}

impl Recorder for MetricsRecorder {
    fn describe_counter(
        &self,
        _key: metrics::KeyName,
        _unit: Option<metrics::Unit>,
        _description: metrics::SharedString,
    ) {
        // No-op -- we don't implement descriptions
    }

    fn describe_gauge(
        &self,
        _key: metrics::KeyName,
        _unit: Option<metrics::Unit>,
        _description: metrics::SharedString,
    ) {
        // No-op -- we don't implement descriptions
    }

    fn describe_histogram(
        &self,
        _key: metrics::KeyName,
        _unit: Option<metrics::Unit>,
        _description: metrics::SharedString,
    ) {
        // No-op -- we don't implement descriptions
    }

    fn register_counter(&self, key: &Key, _metadata: &Metadata<'_>) -> metrics::Counter {
        self.sink.counter(key)
    }

    fn register_gauge(&self, key: &Key, _metadata: &Metadata<'_>) -> metrics::Gauge {
        self.sink.gauge(key)
    }

    fn register_histogram(&self, key: &Key, _metadata: &Metadata<'_>) -> metrics::Histogram {
        self.sink.histogram(key)
    }
}

#[derive(Debug)]
pub struct MetricsSinkHandle {
    shutdown: Sender<()>,
    handle: Option<JoinHandle<()>>,
}

impl Drop for MetricsSinkHandle {
    fn drop(&mut self) {
        let _ = self.shutdown.send(());
        if let Some(handle) = self.handle.take() {
            let _ = handle.join();
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use metrics::{Label, with_local_recorder};

    const TEST_COUNTER: &str = "test_counter";
    const TEST_GAUGE: &str = "test_gauge";
    const TEST_HISTOGRAM: &str = "test_histogram";

    #[test]
    fn basic_metrics() {
        let sink = Arc::new(MetricsSink::new(None).unwrap());
        let recorder = MetricsRecorder { sink: sink.clone() };
        with_local_recorder(&recorder, || {
            // Run twice to check reset works
            for _ in 0..2 {
                metrics::counter!(TEST_COUNTER, "type" => "get").increment(1);
                metrics::counter!(TEST_COUNTER, "type" => "put").increment(1);
                metrics::counter!(TEST_COUNTER, "type" => "get").increment(2);
                metrics::counter!(TEST_COUNTER, "type" => "put").increment(2);
                metrics::counter!(TEST_COUNTER, "type" => "get").increment(3);
                metrics::counter!(TEST_COUNTER, "type" => "put").increment(4);

                metrics::gauge!(TEST_GAUGE, "type" => "processing").set(5.0);
                metrics::gauge!(TEST_GAUGE, "type" => "in_queue").set(5.0);
                metrics::gauge!(TEST_GAUGE, "type" => "processing").set(2.0);
                metrics::gauge!(TEST_GAUGE, "type" => "in_queue").set(3.0);

                metrics::histogram!(TEST_HISTOGRAM, "type" => "get").record(3.0);
                metrics::histogram!(TEST_HISTOGRAM, "type" => "put").record(4.0);
                metrics::histogram!(TEST_HISTOGRAM, "type" => "put").record(4.0);

                for mut entry in sink.metrics.iter_mut() {
                    let (key, metric) = entry.pair_mut();
                    assert_eq!(key.labels().count(), 1, "{key} has no labels");
                    match metric {
                        Metric::Counter(inner) => {
                            assert_eq!(key.name(), TEST_COUNTER);
                            let (sum, n) = inner.load_and_reset().expect("should have a value");
                            assert_eq!(n, 3);
                            let label = key.labels().next().unwrap();
                            if label == &Label::new("type", "get") {
                                assert_eq!(sum, 6);
                            } else if label == &Label::new("type", "put") {
                                assert_eq!(sum, 7);
                            } else {
                                panic!("wrong label");
                            }
                        }
                        Metric::Gauge(inner) => {
                            assert_eq!(key.name(), TEST_GAUGE);
                            let value = inner.load_if_changed();
                            let label = key.labels().next().unwrap();
                            if label == &Label::new("type", "processing") {
                                assert_eq!(value, Some(2.0));
                            } else if label == &Label::new("type", "in_queue") {
                                assert_eq!(value, Some(3.0));
                            } else {
                                panic!("wrong label");
                            }
                        }
                        Metric::Histogram(inner) => {
                            assert_eq!(key.name(), TEST_HISTOGRAM);
                            let label = key.labels().next().unwrap();
                            inner.run_and_reset(|histogram| {
                                if label == &Label::new("type", "get") {
                                    assert_eq!(histogram.len(), 1);
                                    assert_eq!(histogram.count_at(3), 1);
                                } else if label == &Label::new("type", "put") {
                                    assert_eq!(histogram.len(), 2);
                                    assert_eq!(histogram.count_at(4), 2);
                                }
                            });
                        }
                    }
                }
            }

            // Check that each metric is zeroed (returns None) after the end of the loop reset it
            for mut entry in sink.metrics.iter_mut() {
                let metric = entry.value_mut();
                match metric {
                    Metric::Counter(inner) => assert!(inner.load_and_reset().is_none()),
                    Metric::Gauge(inner) => assert!(inner.load_if_changed().is_none()),
                    Metric::Histogram(inner) => assert!(inner.run_and_reset(|_| panic!("unreachable")).is_none()),
                }
            }

            // Set the gauges to zero and check they emit their change only once
            metrics::gauge!(TEST_GAUGE, "type" => "processing").set(0.0);
            metrics::gauge!(TEST_GAUGE, "type" => "in_queue").set(0.0);
            for mut entry in sink.metrics.iter_mut() {
                let metric = entry.value_mut();
                let Metric::Gauge(inner) = metric else {
                    continue;
                };
                // We want to emit once to reflect that it's changed to 0, and then not emit again
                assert!(inner.load_if_changed().is_some());
                assert!(inner.load_if_changed().is_none());
            }
        });
    }
}

#[cfg(all(test, feature = "otlp_integration"))]
mod test_otlp_metrics {
    use super::*;
    use crate::metrics::data::Metric;
    use crate::metrics::defs::{ATTR_HTTP_STATUS, ATTR_S3_REQUEST, S3_REQUEST_ERRORS};
    use crate::metrics_otel::{OtlpConfig, OtlpMetricsExporter};
    use metrics::{Key, Unit};
    use opentelemetry::metrics::MeterProvider as _;
    use opentelemetry_sdk::metrics::data::{AggregatedMetrics, MetricData, ResourceMetrics};
    use opentelemetry_sdk::metrics::in_memory_exporter::InMemoryMetricExporter;
    use opentelemetry_sdk::metrics::{PeriodicReader, SdkMeterProvider};
    struct TestContext {
        exporter: InMemoryMetricExporter,
        provider: SdkMeterProvider,
        otlp_exporter: OtlpMetricsExporter,
    }

    impl TestContext {
        fn new() -> Self {
            let exporter = InMemoryMetricExporter::default();
            let reader = PeriodicReader::builder(exporter.clone())
                .with_interval(std::time::Duration::from_millis(100))
                .build();
            let provider = SdkMeterProvider::builder().with_reader(reader).build();
            let meter = provider.meter("test-meter");
            let otlp_exporter = OtlpMetricsExporter::new_for_test(meter);

            TestContext {
                exporter,
                provider,
                otlp_exporter,
            }
        }

        fn get_metrics(&self) -> Vec<ResourceMetrics> {
            self.provider.force_flush().unwrap();
            self.exporter.get_finished_metrics().unwrap()
        }

        fn verify_metric_name(&self, expected_name: &str) {
            self.provider.force_flush().unwrap();
            let metrics = self.exporter.get_finished_metrics().unwrap();
            let resource_metrics = &metrics[0];
            let scope_metrics: Vec<_> = resource_metrics.scope_metrics().collect();
            let metrics_vec: Vec<_> = scope_metrics[0].metrics().collect();
            let metric = &metrics_vec[0];

            assert_eq!(metric.name(), expected_name);
        }

        fn create_counter(&self, stability: defs::MetricStability) {
            let config = defs::MetricConfig {
                unit: Unit::Count,
                stability,
                otlp_attributes: &[],
            };
            let counter = Metric::counter_otlp(&self.otlp_exporter, &Key::from_name("test_metric"), &config);
            counter.as_counter().increment(1);
        }
    }

    #[test]
    fn test_experimental_metric_prefixing() {
        let ctx = TestContext::new();
        ctx.create_counter(defs::MetricStability::Experimental);
        ctx.verify_metric_name("experimental.test_metric");
    }

    #[test]
    fn test_stable_metric_no_prefix() {
        let ctx = TestContext::new();
        ctx.create_counter(defs::MetricStability::Stable);
        ctx.verify_metric_name("test_metric");
    }

    #[test]
    fn test_internal_metric_is_not_exported_to_otlp() {
        let otlp_config = OtlpConfig::new("http://localhost:4317");
        let sink = Arc::new(MetricsSink::new(Some(MetricsConfig::Otlp(otlp_config))).unwrap());

        let counter = sink.counter(&Key::from_name("test-counter"));
        let gauge = sink.gauge(&Key::from_name("test-gauge"));
        let histogram = sink.histogram(&Key::from_name("test-histogram"));

        counter.increment(10);
        gauge.set(20.0);
        for i in 0..100 {
            histogram.record(i as f64);
        }

        // Verify OTLP methods are called as expected. We are relying on the presence of otlp_data.
        assert_eq!(sink.metrics.len(), 3);

        for entry in sink.metrics.iter() {
            let (_key, metric) = entry.pair();
            match metric {
                data::Metric::Counter(counter_data) => {
                    assert!(counter_data.otlp_data().is_none(), "counter_otlp() was called");
                }
                data::Metric::Gauge(gauge_data) => {
                    assert!(gauge_data.otlp_data().is_none(), "gauge_otlp() was called");
                }
                data::Metric::Histogram(histogram_data) => {
                    assert!(histogram_data.otlp_data().is_none(), "histogram_otlp() was called");
                }
            }
        }
    }

    #[test]
    fn test_attribute_filtering() {
        let ctx = TestContext::new();

        let key = Key::from_parts(
            "s3.request_failure",
            vec![
                metrics::Label::new(ATTR_S3_REQUEST, "GetObject"),
                metrics::Label::new(ATTR_HTTP_STATUS, "403"),
                metrics::Label::new("some-attribute", "some-value"),
            ],
        );

        let config = defs::lookup_config(S3_REQUEST_ERRORS);
        let counter = Metric::counter_otlp(&ctx.otlp_exporter, &key, &config);
        counter.as_counter().increment(1);

        let metrics = ctx.get_metrics();
        assert_eq!(metrics.len(), 1);

        // Verify only allowed attributes are present
        let resource_metrics = &metrics[0];
        let scope_metrics: Vec<_> = resource_metrics.scope_metrics().collect();
        let metric = scope_metrics[0]
            .metrics()
            .find(|m| m.name() == "s3.request_failure")
            .unwrap();

        match metric.data() {
            AggregatedMetrics::U64(metric_data) => match metric_data {
                MetricData::Sum(sum) => {
                    let data_points: Vec<_> = sum.data_points().collect();
                    let data_point = &data_points[0];
                    let attributes: Vec<_> = data_point.attributes().collect();

                    assert_eq!(attributes.len(), 2);
                    let attr_keys: Vec<&str> = attributes.iter().map(|kv| kv.key.as_str()).collect();

                    assert!(attr_keys.contains(&ATTR_S3_REQUEST));
                    assert!(attr_keys.contains(&ATTR_HTTP_STATUS));
                    assert!(!attr_keys.contains(&"random-attribute"));
                }
                _ => panic!("Expected Sum data"),
            },
            _ => panic!("Expected U64 AggregatedMetrics"),
        }
    }

    #[test]
    fn test_otlp_flow() {
        let otlp_config = OtlpConfig::new("http://localhost:4317");
        let sink = Arc::new(MetricsSink::new(Some(MetricsConfig::Otlp(otlp_config))).unwrap());

        // Use predefined stable metrics instead of test_ metrics
        let counter = sink.counter(&Key::from_name(defs::S3_REQUEST_COUNT));
        let gauge = sink.gauge(&Key::from_name(defs::FUSE_IDLE_THREADS));
        let histogram = sink.histogram(&Key::from_name(defs::S3_REQUEST_TOTAL_LATENCY));

        counter.increment(10);
        gauge.set(20.0);
        for i in 0..100 {
            histogram.record(i as f64);
        }

        // Verify OTLP methods are called as expected. We are relying on the presence of otlp_data.
        assert_eq!(sink.metrics.len(), 3);

        for entry in sink.metrics.iter() {
            let (_key, metric) = entry.pair();
            match metric {
                data::Metric::Counter(counter_data) => {
                    assert!(counter_data.otlp_data().is_some(), "counter_otlp() was not called");
                }
                data::Metric::Gauge(gauge_data) => {
                    assert!(gauge_data.otlp_data().is_some(), "gauge_otlp() was not called");
                }
                data::Metric::Histogram(histogram_data) => {
                    assert!(histogram_data.otlp_data().is_some(), "histogram_otlp() was not called");
                }
            }
        }
    }

    #[test]
    fn test_otlp_endpoint_validation() {
        // Test with an invalid URI - we need to directly test the MetricsSink::new function
        // since install() will try to set up a global recorder which can only be done once
        let otlp_config = OtlpConfig::new("not-a-valid-uri");
        let result = MetricsSink::new(Some(MetricsConfig::Otlp(otlp_config)));
        assert!(result.is_err());
        let error = result.unwrap_err().to_string();
        assert!(
            error.contains("Invalid OTLP endpoint configuration"),
            "Error message should indicate invalid configuration: {error}",
        );

        // Test with no OTLP config (should succeed)
        let result = MetricsSink::new(None);
        assert!(result.is_ok());

        // Test with a syntactically valid endpoint (should succeed)
        let otlp_config = OtlpConfig::new("http://example.com:4318/v1/metrics");
        let result = MetricsSink::new(Some(MetricsConfig::Otlp(otlp_config)));
        assert!(result.is_ok());
    }
}
