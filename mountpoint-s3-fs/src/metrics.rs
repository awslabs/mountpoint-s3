//! Metrics infrastructure
//!
//! This module hooks up the [metrics](https://docs.rs/metrics) facade to a metrics sink that
//! currently just emits them to a tracing log entry.

pub use crate::metrics_otel::OtlpConfig;
use crate::metrics_otel::OtlpMetricsExporter;
use defs::MetricStability;

use std::thread::{self, JoinHandle};
use std::time::Duration;

use dashmap::DashMap;
use defs::PROCESS_MEMORY_USAGE;
use metrics::{Key, Metadata, Recorder};
use sysinfo::{MemoryRefreshKind, ProcessRefreshKind, ProcessesToUpdate, System, get_current_pid};

#[cfg(test)]
use crate::sync::Mutex;
use crate::sync::mpsc::{RecvTimeoutError, Sender, channel};
use crate::sync::{Arc, RwLock};

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

/// A callback invoked on each metrics publication cycle, immediately before publishing.
type MetricPoller = Arc<dyn Fn() + Send + Sync + 'static>;

/// Thread-safe list of metric pollers sampled by the publisher thread.
///
/// Registration writes this list directly and does **not** go through the publisher's
/// shutdown/`recv_timeout` channel, so it does not reset or delay the aggregation period.
#[derive(Default)]
struct MetricPollers {
    inner: RwLock<Vec<MetricPoller>>,
}

impl std::fmt::Debug for MetricPollers {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let count = self.inner.read().map(|p| p.len()).unwrap_or(0);
        f.debug_struct("MetricPollers").field("count", &count).finish()
    }
}

impl MetricPollers {
    fn register(&self, poller: MetricPoller) {
        self.inner.write().unwrap().push(poller);
    }

    fn run(&self) {
        let snapshot = self.inner.read().unwrap().clone();
        for poller in snapshot {
            poller();
        }
    }
}

/// Configuration for metrics collection
pub enum MetricsConfig {
    /// OpenTelemetry configuration
    Otlp(OtlpConfig),
}

/// Initialize and install the global metrics sink, and return a handle that can be used to shut
/// the sink down. The sink should only be shut down after any threads that generate metrics are
/// done with their work; metrics generated after shutting down the sink will be lost.
///
/// Panics if a sink has already been installed.
pub fn install(config: Option<MetricsConfig>) -> anyhow::Result<MetricsSinkHandle> {
    install_with_period(config, AGGREGATION_PERIOD)
}

fn install_with_period(
    config: Option<MetricsConfig>,
    aggregation_period: Duration,
) -> anyhow::Result<MetricsSinkHandle> {
    let sink = Arc::new(MetricsSink::new(config)?);
    let handle = spawn_publisher(Arc::clone(&sink), aggregation_period);

    let recorder = MetricsRecorder { sink };
    metrics::set_global_recorder(recorder)
        .map_err(|e| anyhow::anyhow!("Failed to set global metrics recorder: {}", e))?;

    Ok(handle)
}

/// Spawn the periodic publisher thread. The aggregation period is the only wait; poller
/// registration does not use this channel and therefore cannot restart the wait.
fn spawn_publisher(sink: Arc<MetricsSink>, aggregation_period: Duration) -> MetricsSinkHandle {
    let mut sys = System::new();
    let (tx, rx) = channel();
    let pollers = Arc::new(MetricPollers::default());

    let publisher_thread = {
        let inner = Arc::clone(&sink);
        let pollers = Arc::clone(&pollers);
        thread::spawn(move || {
            loop {
                match rx.recv_timeout(aggregation_period) {
                    Ok(()) | Err(RecvTimeoutError::Disconnected) => break,
                    Err(RecvTimeoutError::Timeout) => collect_and_publish(&inner, &pollers, &mut sys),
                }
            }
            // Drain metrics one more time before shutting down. This has a chance of missing
            // any new metrics data after the sink shuts down, but we assume a clean shutdown
            // stops generating new metrics before shutting down the sink.
            collect_and_publish(&inner, &pollers, &mut sys);
        })
    };

    MetricsSinkHandle {
        shutdown: tx,
        handle: Some(publisher_thread),
        pollers,
    }
}

/// Sample process metrics and any registered client pollers, then publish.
fn collect_and_publish(sink: &MetricsSink, pollers: &MetricPollers, sys: &mut System) {
    poll_process_metrics(sys);
    pollers.run();
    sink.publish();
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
                metrics::gauge!(PROCESS_MEMORY_USAGE).set(process.memory() as f64);
                metrics::gauge!("system.available_memory").set(sys.available_memory() as f64);
            }
        }
    }
}

#[derive(Debug)]
struct MetricsSink {
    metrics: DashMap<Key, Metric>,
    otlp_exporter: Option<OtlpMetricsExporter>,
    /// Test-only log of `publish()` calls, used to assert poll-before-publish ordering.
    #[cfg(test)]
    test_events: Arc<Mutex<Vec<&'static str>>>,
}

impl MetricsSink {
    fn new(config: Option<MetricsConfig>) -> anyhow::Result<Self> {
        // Match on the config to determine what kind of metrics sink to create
        match config {
            None => Ok(Self::with_exporter(None)),

            // OTLP configuration
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
                        Ok(Self::with_exporter(Some(exporter)))
                    }
                    Err(e) => {
                        tracing::error!("Failed to initialize OTLP exporter: {}", e);
                        Err(anyhow::anyhow!(
                            "Failed to initialize OTLP metrics exporter: {}. If metrics export is not required, omit the OTLP configuration.",
                            e
                        ))
                    }
                }
            }
        }
    }

    fn with_exporter(otlp_exporter: Option<OtlpMetricsExporter>) -> Self {
        Self {
            metrics: DashMap::with_capacity(64),
            otlp_exporter,
            #[cfg(test)]
            test_events: Arc::new(Mutex::new(Vec::new())),
        }
    }

    fn counter(&self, key: &Key) -> metrics::Counter {
        let metric = self.metrics.entry(key.clone()).or_insert_with(move || {
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
        #[cfg(test)]
        self.test_events.lock().unwrap().push("publish");

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

            match defs::lookup_config(key.name()).unit.as_canonical_label() {
                "" => metrics.push(format!("{}{}: {}", key.name(), labels, metric_str)),
                unit => metrics.push(format!("{}({}){}: {}", key.name(), unit, labels, metric_str)),
            }
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
    pollers: Arc<MetricPollers>,
}

impl MetricsSinkHandle {
    /// Register a callback invoked on every metrics publication cycle, immediately before
    /// publishing, alongside process metrics.
    ///
    /// Registration does not reset or delay the publisher's aggregation period: pollers are stored
    /// in a shared list the publisher reads after each timeout, not sent on the shutdown channel.
    ///
    /// The callback must be cheap, thread-safe, and safe to run after the FUSE session has ended so
    /// the final drain can still sample client metrics.
    pub fn register_poller(&self, poller: impl Fn() + Send + Sync + 'static) {
        self.pollers.register(Arc::new(poller));
    }
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
    use std::sync::atomic::{AtomicBool, Ordering};
    use std::time::{Duration, Instant};

    const TEST_COUNTER: &str = "test_counter";
    const TEST_GAUGE: &str = "test_gauge";
    const TEST_HISTOGRAM: &str = "test_histogram";

    fn start_test_publisher(aggregation_period: Duration) -> (Arc<MetricsSink>, MetricsSinkHandle) {
        let sink = Arc::new(MetricsSink::new(None).unwrap());
        let handle = spawn_publisher(Arc::clone(&sink), aggregation_period);
        (sink, handle)
    }

    fn wait_for_event_count(
        events: &Mutex<Vec<&'static str>>,
        event: &'static str,
        n: usize,
        timeout: Duration,
    ) -> Vec<&'static str> {
        let start = Instant::now();
        loop {
            let snapshot = events.lock().unwrap().clone();
            let count = snapshot.iter().filter(|e| **e == event).count();
            if count >= n {
                return snapshot;
            }
            if start.elapsed() > timeout {
                panic!(
                    "timed out waiting for {n} {event} events; have {count}: {snapshot:?} after {:?}",
                    start.elapsed()
                );
            }
            std::thread::sleep(Duration::from_millis(5));
        }
    }

    fn assert_poll_before_each_publish(events: &[&'static str]) {
        assert!(
            !events.is_empty() && events.len().is_multiple_of(2),
            "expected poll/publish pairs, got {events:?}"
        );
        for pair in events.chunks(2) {
            assert_eq!(
                pair,
                &["poll", "publish"],
                "poll must run immediately before publish: {events:?}"
            );
        }
    }

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

    #[test]
    fn production_aggregation_period_is_five_seconds() {
        assert_eq!(AGGREGATION_PERIOD, Duration::from_secs(5));
    }

    #[test]
    fn registered_poller_runs_on_repeated_ticks_before_publish_and_on_shutdown() {
        let interval = Duration::from_millis(50);
        let (sink, handle) = start_test_publisher(interval);
        let events = Arc::clone(&sink.test_events);

        handle.register_poller({
            let events = Arc::clone(&events);
            move || events.lock().unwrap().push("poll")
        });

        // Two publisher timeouts, with no meta requests at all.
        wait_for_event_count(&events, "publish", 2, Duration::from_secs(2));

        // Shutdown must join the publisher after one final poll then publish.
        drop(handle);
        let events = events.lock().unwrap().clone();
        assert!(
            events.len() >= 6,
            "expected at least two periodic cycles plus shutdown, got {events:?}"
        );
        assert_poll_before_each_publish(&events);
    }

    #[test]
    fn registering_a_poller_does_not_reset_or_stop_the_publisher() {
        let interval = Duration::from_millis(80);
        let (sink, handle) = start_test_publisher(interval);
        let events = Arc::clone(&sink.test_events);

        handle.register_poller({
            let events = Arc::clone(&events);
            move || events.lock().unwrap().push("poll")
        });

        // If registration rode the shutdown/`recv_timeout` channel, each register would either
        // shut the publisher down or restart the wait. Repeated registration during the wait
        // must not prevent periodic ticks.
        let start = Instant::now();
        while start.elapsed() < Duration::from_millis(350) {
            handle.register_poller(|| {});
            std::thread::sleep(Duration::from_millis(25));
        }

        // Check *during* the registration storm. Waiting after it stops would hide a reset, because
        // the cadence could recover once we stop restarting the wait.
        let during = events.lock().unwrap().clone();
        let publishes_during = during.iter().filter(|e| **e == "publish").count();
        assert!(
            publishes_during >= 2,
            "repeated registration during the wait must not reset the {interval:?} cadence or shut the publisher down; after {:?} got {during:?}",
            start.elapsed()
        );

        drop(handle);

        let events = events.lock().unwrap().clone();
        let publishes = events.iter().filter(|e| **e == "publish").count();
        assert!(
            publishes >= 3,
            "repeated registration must not delay ticks indefinitely or shut the publisher down; got {events:?}"
        );
        assert_poll_before_each_publish(&events);
    }

    #[test]
    fn register_poller_does_not_trigger_immediate_publish() {
        // A long interval means a correctly implemented register cannot produce a tick of its own.
        let (sink, handle) = start_test_publisher(Duration::from_secs(30));
        let events = Arc::clone(&sink.test_events);

        handle.register_poller({
            let events = Arc::clone(&events);
            move || events.lock().unwrap().push("poll")
        });
        std::thread::sleep(Duration::from_millis(80));
        assert!(
            events.lock().unwrap().is_empty(),
            "registration must not wake the publisher channel: {:?}",
            events.lock().unwrap()
        );

        drop(handle);
        let events = events.lock().unwrap().clone();
        assert_eq!(events, ["poll", "publish"]);
    }

    #[test]
    fn dropping_handle_drops_registered_pollers() {
        #[derive(Debug)]
        struct DropMarker(Arc<AtomicBool>);

        impl Drop for DropMarker {
            fn drop(&mut self) {
                self.0.store(true, Ordering::SeqCst);
            }
        }

        // Keep the sink alive after the handle is dropped, as the process-global recorder does.
        // Pollers belong to the publisher lifecycle and must not be retained by that sink.
        let (_sink, handle) = start_test_publisher(Duration::from_secs(30));
        let dropped = Arc::new(AtomicBool::new(false));
        let marker = DropMarker(Arc::clone(&dropped));
        handle.register_poller(move || {
            let _ = &marker;
        });

        drop(handle);

        assert!(
            dropped.load(Ordering::SeqCst),
            "dropping the publisher handle must release registered pollers"
        );
    }
}

#[cfg(test)]
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
            S3_REQUEST_ERRORS,
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
            .find(|m| m.name() == S3_REQUEST_ERRORS)
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
