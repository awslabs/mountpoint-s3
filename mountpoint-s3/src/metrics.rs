//! Metrics infrastructure
//!
//! This module hooks up the [metrics](https://docs.rs/metrics) facace to a thread-local metrics
//! sink, that in turn is drained by a global recorder on a fixed cadence. This is slightly annoying
//! because it needs to work with CRT threads, so we can't rely on, for example, knowing which
//! threads are "request processors" (the FUSE daemon threads).

use std::thread::{self, JoinHandle};
use std::time::Duration;

use once_cell::sync::OnceCell;

use crate::sync::mpsc::{channel, RecvTimeoutError, Sender};
use crate::sync::{Arc, Mutex};

mod data;
pub use data::METRICS_TARGET_NAME;
use data::*;

mod recorder;
use recorder::*;

mod tracing_span;
pub use tracing_span::metrics_tracing_span_layer;

/// How long between drains of each thread's local metrics into the global sink
const AGGREGATION_PERIOD: Duration = Duration::from_secs(5);

/// Global metric sink that polls thread-local sinks for aggregated metrics
static GLOBAL_SINK: OnceCell<MetricsSink> = OnceCell::new();

thread_local! {
    /// The thread's local sink for writing metrics to. [ThreadMetricsHandle] has a [Mutex] inside
    /// it, which looks a little funky, but it's completely uncontended except when the global sink
    /// grabs it very briefly to aggregate out the metrics the thread has collected. An uncontended
    /// [Mutex] should be fast enough that we don't really care about it, and the thread local
    /// allows us not to think about contention on a global metrics sink among threads.
    ///
    /// A global metrics sink must be installed before any thread-local sinks can be accessed.
    static LOCAL_SINK: OnceCell<ThreadMetricsSinkHandle> = OnceCell::new();
}

/// A global metrics sink that keeps a list of thread-local sinks to aggregate from
#[derive(Debug)]
pub struct MetricsSink {
    threads: Arc<Mutex<Vec<Arc<Mutex<ThreadMetricsSink>>>>>,
}

impl MetricsSink {
    /// Initialize and install the global metrics sink, and return a handle that can be used to shut
    /// the sink down. The sink should only be shut down after any threads that generate metrics are
    /// done with their work; metrics generated after shutting down the sink will be lost.
    ///
    /// This *must* be invoked before any metrics are generated. If metrics are generated before a
    /// global sink is installed, the thread generating the metrics will panic.
    ///
    /// Panics if a sink has already been installed.
    pub fn init() -> MetricsSinkHandle {
        let sink = Self::new();

        let (tx, rx) = channel();

        let publisher_thread = {
            let threads = Arc::clone(&sink.threads);
            thread::spawn(move || {
                loop {
                    match rx.recv_timeout(AGGREGATION_PERIOD) {
                        Ok(()) | Err(RecvTimeoutError::Disconnected) => break,
                        Err(RecvTimeoutError::Timeout) => Self::aggregate_and_publish(&threads),
                    }
                }
                // Drain metrics one more time before shutting down. This has a chance of missing
                // any new metrics data after the sink shuts down, but we assume a clean shutdown
                // stops generating new metrics before shutting down the sink.
                Self::aggregate_and_publish(&threads);
            })
        };

        let handle = MetricsSinkHandle {
            shutdown: tx,
            handle: Some(publisher_thread),
        };

        sink.install();
        metrics::set_recorder(&MetricsRecorder).unwrap();

        handle
    }

    fn new() -> MetricsSink {
        let threads = Arc::new(Mutex::new(Vec::new()));

        MetricsSink { threads }
    }

    fn install(self) {
        GLOBAL_SINK.set(self).unwrap();
    }

    fn aggregate_and_publish(threads: &Mutex<Vec<Arc<Mutex<ThreadMetricsSink>>>>) {
        let metrics = Self::aggregate(threads);
        Self::publish(metrics);
    }

    fn aggregate(threads: &Mutex<Vec<Arc<Mutex<ThreadMetricsSink>>>>) -> Metrics {
        let mut aggregate_metrics = Metrics::default();
        let threads = threads.lock().unwrap();
        for thread in threads.iter() {
            let metrics = std::mem::take(&mut *thread.lock().unwrap());
            aggregate_metrics.aggregate(metrics.metrics);
        }
        aggregate_metrics
    }

    fn publish(metrics: Metrics) {
        metrics.emit();
    }
}

#[derive(Debug)]
pub struct MetricsSinkHandle {
    shutdown: Sender<()>,
    handle: Option<JoinHandle<()>>,
}

impl MetricsSinkHandle {
    // Shut down the metrics sink. This does not uninstall the sink.
    pub fn shutdown(self) {
        // Drop handler does all the work
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

#[derive(Debug, Default)]
struct ThreadMetricsSink {
    metrics: Metrics,
}

#[derive(Debug, Default)]
struct ThreadMetricsSinkHandle {
    inner: Arc<Mutex<ThreadMetricsSink>>,
}

impl ThreadMetricsSinkHandle {
    /// Run a closure with access to the thread-local metrics sink
    pub fn with<F, T>(f: F) -> T
    where
        F: FnOnce(&ThreadMetricsSinkHandle) -> T,
    {
        LOCAL_SINK.with(|handle| {
            let handle = handle.get_or_init(Self::init);
            f(handle)
        })
    }

    /// Initialize the thread-local metrics sink by registering it with the global sink
    fn init() -> ThreadMetricsSinkHandle {
        if let Some(global_sink) = GLOBAL_SINK.get() {
            let me = Arc::new(Mutex::new(ThreadMetricsSink::default()));
            global_sink.threads.lock().unwrap().push(Arc::clone(&me));
            ThreadMetricsSinkHandle { inner: me }
        } else {
            panic!("global metrics sink must be installed first");
        }
    }
}

#[cfg(test)]
mod tests {
    use metrics::Label;

    use super::*;

    #[test]
    fn basic_metrics() {
        let sink = MetricsSink::new();
        let threads = Arc::clone(&sink.threads);

        sink.install();
        metrics::set_recorder(&MetricsRecorder).unwrap();

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

        let metrics = MetricsSink::aggregate(&threads);
        assert_eq!(metrics.iter().count(), 4);
        for (key, data) in metrics.iter() {
            assert_eq!(key.labels().count(), 1);
            match data {
                Metric::Counter(inner) => {
                    assert_eq!(key.name(), "test_counter");
                    assert_eq!(inner.n, 3);
                    let label = key.labels().next().unwrap();
                    if label == &Label::new("type", "get") {
                        assert_eq!(inner.sum, 6);
                    } else if label == &Label::new("type", "put") {
                        assert_eq!(inner.sum, 7);
                    } else {
                        panic!("wrong label");
                    }
                }
                Metric::Gauge(inner) => {
                    assert_eq!(key.name(), "test_gauge");
                    assert_eq!(inner.n, 1);
                    let label = key.labels().next().unwrap();
                    if label == &Label::new("type", "processing") {
                        assert_eq!(inner.sum, 2.0);
                    } else if label == &Label::new("type", "in_queue") {
                        assert_eq!(inner.sum, 3.0);
                    } else {
                        panic!("wrong label");
                    }
                }
                _ => panic!("wrong metric type"),
            }
        }
    }
}
