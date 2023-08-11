//! Metrics infrastructure
//!
//! This module hooks up the [metrics](https://docs.rs/metrics) facace to a metrics sink that
//! currently just emits them to a tracing log entry.

use std::thread::{self, JoinHandle};
use std::time::Duration;

use dashmap::DashMap;
use metrics::{Key, Recorder};

use crate::sync::mpsc::{channel, RecvTimeoutError, Sender};
use crate::sync::Arc;

mod data;
use data::*;

mod tracing_span;
pub use tracing_span::metrics_tracing_span_layer;

/// How long between drains of each thread's local metrics into the global sink
const AGGREGATION_PERIOD: Duration = Duration::from_secs(5);

/// The log target to use for emitted metrics
pub const TARGET_NAME: &str = "mountpoint_s3::metrics";

/// Initialize and install the global metrics sink, and return a handle that can be used to shut
/// the sink down. The sink should only be shut down after any threads that generate metrics are
/// done with their work; metrics generated after shutting down the sink will be lost.
///
/// Panics if a sink has already been installed.
pub fn install() -> MetricsSinkHandle {
    let sink = Arc::new(MetricsSink::new());

    let (tx, rx) = channel();

    let publisher_thread = {
        let inner = Arc::clone(&sink);
        thread::spawn(move || {
            loop {
                match rx.recv_timeout(AGGREGATION_PERIOD) {
                    Ok(()) | Err(RecvTimeoutError::Disconnected) => break,
                    Err(RecvTimeoutError::Timeout) => inner.publish(),
                }
            }
            // Drain metrics one more time before shutting down. This has a chance of missing
            // any new metrics data after the sink shuts down, but we assume a clean shutdown
            // stops generating new metrics before shutting down the sink.
            inner.publish();
        })
    };

    let handle = MetricsSinkHandle {
        shutdown: tx,
        handle: Some(publisher_thread),
    };

    let recorder = MetricsRecorder { sink };
    metrics::set_boxed_recorder(Box::new(recorder)).unwrap();

    handle
}

#[derive(Debug)]
struct MetricsSink {
    metrics: DashMap<Key, Metric>,
}

impl MetricsSink {
    fn new() -> Self {
        Self {
            metrics: DashMap::with_capacity(64),
        }
    }

    fn counter(&self, key: &Key) -> metrics::Counter {
        let entry = self.metrics.entry(key.clone()).or_insert_with(Metric::counter);
        entry.as_counter()
    }

    fn gauge(&self, key: &Key) -> metrics::Gauge {
        let entry = self.metrics.entry(key.clone()).or_insert_with(Metric::gauge);
        entry.as_gauge()
    }

    fn histogram(&self, key: &Key) -> metrics::Histogram {
        let entry = self.metrics.entry(key.clone()).or_insert_with(Metric::histogram);
        entry.as_histogram()
    }

    /// Publish all this sink's metrics to `tracing` log messages
    fn publish(&self) {
        // Collect the output lines so we can sort them to make reading easier
        let mut metrics = vec![];

        for mut entry in self.metrics.iter_mut() {
            let (key, metric) = entry.pair_mut();
            let Some(metric) = metric.fmt_and_reset() else {
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
            metrics.push(format!("{}{}: {}", key.name(), labels, metric));
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

    fn register_counter(&self, key: &Key) -> metrics::Counter {
        self.sink.counter(key)
    }

    fn register_gauge(&self, key: &Key) -> metrics::Gauge {
        self.sink.gauge(key)
    }

    fn register_histogram(&self, key: &Key) -> metrics::Histogram {
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
    use metrics::Label;

    use super::*;

    #[test]
    fn basic_metrics() {
        let sink = Arc::new(MetricsSink::new());
        let recorder = MetricsRecorder { sink: sink.clone() };
        metrics::set_boxed_recorder(Box::new(recorder)).unwrap();

        // Run twice to check reset works
        for _ in 0..2 {
            metrics::counter!("test_counter", 1, "type" => "get");
            metrics::counter!("test_counter", 1, "type" => "put");
            metrics::counter!("test_counter", 2, "type" => "get");
            metrics::counter!("test_counter", 2, "type" => "put");
            metrics::counter!("test_counter", 3, "type" => "get");
            metrics::counter!("test_counter", 4, "type" => "put");

            metrics::gauge!("test_gauge", 5.0, "type" => "processing");
            metrics::gauge!("test_gauge", 5.0, "type" => "in_queue");
            metrics::gauge!("test_gauge", 2.0, "type" => "processing");
            metrics::gauge!("test_gauge", 3.0, "type" => "in_queue");

            metrics::histogram!("test_histogram", 3.0, "type" => "get");
            metrics::histogram!("test_histogram", 4.0, "type" => "put");
            metrics::histogram!("test_histogram", 4.0, "type" => "put");

            for mut entry in sink.metrics.iter_mut() {
                let (key, metric) = entry.pair_mut();
                assert_eq!(key.labels().count(), 1);
                match metric {
                    Metric::Counter(inner) => {
                        assert_eq!(key.name(), "test_counter");
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
                        assert_eq!(key.name(), "test_gauge");
                        let value = inner.load_and_reset().expect("should have a value");
                        let label = key.labels().next().unwrap();
                        if label == &Label::new("type", "processing") {
                            assert_eq!(value, 2.0);
                        } else if label == &Label::new("type", "in_queue") {
                            assert_eq!(value, 3.0);
                        } else {
                            panic!("wrong label");
                        }
                    }
                    Metric::Histogram(inner) => {
                        assert_eq!(key.name(), "test_histogram");
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
                Metric::Gauge(inner) => assert!(inner.load_and_reset().is_none()),
                Metric::Histogram(inner) => assert!(inner.run_and_reset(|_| panic!("unreachable")).is_none()),
            }
        }
    }
}
