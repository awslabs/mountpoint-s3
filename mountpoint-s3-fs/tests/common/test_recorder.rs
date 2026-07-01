//! Test utilities for metrics validation

use dashmap::DashMap;
use metrics::{
    Counter, CounterFn, Gauge, GaugeFn, Histogram, HistogramFn, Key, KeyName, Metadata, Recorder, SharedString, Unit,
};
use std::sync::{Arc, Mutex};

/// Return `Some(Arc<M>)` for the unique entry in `map` whose name is `name` and whose label
/// set exactly matches `labels`. Shared by `TestRecorder` and `HdrRecorder`.
fn lookup<M>(map: &DashMap<Key, Arc<M>>, name: &str, labels: &[(&str, &str)]) -> Option<Arc<M>> {
    map.iter()
        .find(|entry| {
            let key = entry.key();
            if key.name() != name {
                return false;
            }
            let actual: Vec<_> = key.labels().map(|l| (l.key(), l.value())).collect();
            if actual.len() != labels.len() {
                return false;
            }
            labels.iter().all(|(k, v)| actual.contains(&(*k, *v)))
        })
        .map(|entry| Arc::clone(entry.value()))
}

/// Simple `Mutex`-backed metrics storage; intended for low-contention functional tests where
/// code clarity beats throughput. For high-contention stress runs use [`stress::HdrRecorder`].
#[derive(Debug, Default, Clone)]
pub struct TestRecorder {
    metrics: Arc<DashMap<Key, Arc<Metric>>>,
}

impl TestRecorder {
    pub fn clear(&self) {
        self.metrics.clear();
    }

    pub fn print_metrics(&self) {
        for entry in self.metrics.iter() {
            let (key, metric) = (entry.key(), entry.value());
            match metric.as_ref() {
                Metric::Histogram(h) => {
                    let h = h.lock().unwrap();
                    println!("{key}: {h:?}");
                }
                Metric::Counter(c) => {
                    let c = c.lock().unwrap();
                    println!("{key}: {c}");
                }
                Metric::Gauge(g) => {
                    let g = g.lock().unwrap();
                    println!("{key}: {g}");
                }
            }
        }
    }

    pub fn get(&self, name: &str, labels: &[(&str, &str)]) -> Option<Arc<Metric>> {
        lookup(&self.metrics, name, labels)
    }

    /// Get-or-insert the metric for `key`, building it with `make` on first registration.
    fn register_metric(&self, key: &Key, make: impl FnOnce() -> Metric) -> Arc<Metric> {
        self.metrics
            .entry(key.clone())
            .or_insert_with(|| Arc::new(make()))
            .clone()
    }
}

#[derive(Debug)]
pub enum Metric {
    Histogram(Mutex<Vec<f64>>),
    Counter(Mutex<u64>),
    Gauge(Mutex<f64>),
}

impl Metric {
    pub fn gauge(&self) -> f64 {
        match self {
            Metric::Gauge(g) => *g.lock().unwrap(),
            _ => panic!("expected gauge"),
        }
    }

    pub fn counter(&self) -> u64 {
        match self {
            Metric::Counter(c) => *c.lock().unwrap(),
            _ => panic!("expected counter"),
        }
    }

    pub fn histogram(&self) -> Vec<f64> {
        match self {
            Metric::Histogram(h) => h.lock().unwrap().clone(),
            _ => panic!("expected histogram"),
        }
    }
}

impl Recorder for TestRecorder {
    fn describe_counter(&self, _key: KeyName, _unit: Option<Unit>, _description: SharedString) {}
    fn describe_gauge(&self, _key: KeyName, _unit: Option<Unit>, _description: SharedString) {}
    fn describe_histogram(&self, _key: KeyName, _unit: Option<Unit>, _description: SharedString) {}

    fn register_counter(&self, key: &Key, _metadata: &Metadata<'_>) -> Counter {
        Counter::from_arc(self.register_metric(key, || Metric::Counter(Default::default())))
    }

    fn register_gauge(&self, key: &Key, _metadata: &Metadata<'_>) -> Gauge {
        Gauge::from_arc(self.register_metric(key, || Metric::Gauge(Default::default())))
    }

    fn register_histogram(&self, key: &Key, _metadata: &Metadata<'_>) -> Histogram {
        Histogram::from_arc(self.register_metric(key, || Metric::Histogram(Default::default())))
    }
}

// Implement the metric traits
impl CounterFn for Metric {
    fn increment(&self, value: u64) {
        let Metric::Counter(counter) = self else {
            panic!("expected counter");
        };
        *counter.lock().unwrap() += value;
    }

    fn absolute(&self, value: u64) {
        let Metric::Counter(counter) = self else {
            panic!("expected counter");
        };
        *counter.lock().unwrap() = value;
    }
}

impl GaugeFn for Metric {
    fn increment(&self, value: f64) {
        let Metric::Gauge(gauge) = self else {
            panic!("expected gauge");
        };
        *gauge.lock().unwrap() += value;
    }

    fn decrement(&self, value: f64) {
        let Metric::Gauge(gauge) = self else {
            panic!("expected gauge");
        };
        *gauge.lock().unwrap() -= value;
    }

    fn set(&self, value: f64) {
        let Metric::Gauge(gauge) = self else {
            panic!("expected gauge");
        };

        *gauge.lock().unwrap() = value;
    }
}

impl HistogramFn for Metric {
    fn record(&self, value: f64) {
        let Metric::Histogram(histogram) = self else {
            panic!("expected histogram");
        };
        histogram.lock().unwrap().push(value);
    }
}

/// HDR-backed recorder used by stress tests. Histograms use `hdrhistogram` for bounded-memory
/// percentile storage; counters are lock-free `AtomicU64` (matching prod); gauges keep both a
/// current value and a full HDR history so assertions can read the true peak without sampling
/// races.
#[cfg(feature = "stress_tests")]
pub mod stress {
    use super::*;
    use hdrhistogram::Histogram as HdrHistogram;
    use std::sync::atomic::{AtomicU64, Ordering};

    /// Latency upper bound: 10 minutes in microseconds.
    pub const LATENCY_HDR_HIGH: u64 = 600_000_000;

    /// Byte upper bound: 256 TiB, above any memory or disk-cache size a stress test reaches.
    pub const BYTES_HDR_HIGH: u64 = 1 << 48;

    /// Count upper bound (count-valued HDR histograms), e.g. for thread counts.
    pub const COUNT_HDR_HIGH: u64 = 1 << 32;

    /// HDR upper bound for a metric, determined by its unit to avoid clamping and
    /// over-allocating histogram buckets.
    fn hdr_high_for(metric_name: &str) -> u64 {
        use mountpoint_s3_fs::metrics::defs::lookup_config;
        match lookup_config(metric_name).unit {
            Unit::Microseconds => LATENCY_HDR_HIGH,
            Unit::Bytes => BYTES_HDR_HIGH,
            _ => COUNT_HDR_HIGH,
        }
    }

    fn new_hdr(metric_name: &str) -> HdrHistogram<u64> {
        HdrHistogram::<u64>::new_with_bounds(1, hdr_high_for(metric_name), 3).expect("HDR bounds valid")
    }

    /// Clamp an `f64` into `[0, hist.high()]` as `u64`. NaN and negatives become 0; values
    /// above the histogram's upper bound are clamped down so recording can never fail.
    fn clamp(value: f64, hist: &HdrHistogram<u64>) -> u64 {
        let high = hist.high();
        if value.is_nan() || value < 0.0 {
            0
        } else if value > high as f64 {
            high
        } else {
            value as u64
        }
    }

    /// Lock-free counters + HDR-backed histograms and gauge history; intended for long,
    /// high-contention stress runs where recorder overhead must be bounded. For low-contention
    /// functional tests use [`super::TestRecorder`].
    #[derive(Debug, Default, Clone)]
    pub struct HdrRecorder {
        metrics: Arc<DashMap<Key, Arc<HdrMetric>>>,
    }

    impl HdrRecorder {
        pub fn get(&self, name: &str, labels: &[(&str, &str)]) -> Option<Arc<HdrMetric>> {
            lookup(&self.metrics, name, labels)
        }

        /// Call `f` for every registered metric. Holds a read-side `DashMap` reference per
        /// entry — callers must not re-enter the recorder from `f`.
        pub fn for_each(&self, mut f: impl FnMut(&Key, &Arc<HdrMetric>)) {
            for entry in self.metrics.iter() {
                f(entry.key(), entry.value());
            }
        }
    }

    /// State behind a [`HdrMetric::Gauge`]. Holds both the latest point-in-time value and
    /// a history of every value the gauge has taken on since installation. The history lets
    /// tests assert true peak/percentiles of the gauge; the current
    /// value is still needed for teardown invariants assertions.
    #[derive(Debug)]
    pub struct GaugeState {
        pub current: f64,
        pub history: HdrHistogram<u64>,
    }

    impl GaugeState {
        fn new(metric_name: &str) -> Self {
            Self {
                current: 0.0,
                history: new_hdr(metric_name),
            }
        }
    }

    #[derive(Debug)]
    pub enum HdrMetric {
        Histogram(Mutex<HdrHistogram<u64>>),
        Counter(AtomicU64),
        Gauge(Mutex<GaugeState>),
    }

    impl HdrMetric {
        pub fn gauge(&self) -> f64 {
            match self {
                HdrMetric::Gauge(g) => g.lock().unwrap().current,
                _ => panic!("expected gauge"),
            }
        }

        /// Clone of the full history of values this gauge has been set to since installation.
        /// Use `.max()` on the returned histogram to get the true peak without sampling races.
        pub fn gauge_history(&self) -> HdrHistogram<u64> {
            match self {
                HdrMetric::Gauge(g) => g.lock().unwrap().history.clone(),
                _ => panic!("expected gauge"),
            }
        }

        pub fn counter(&self) -> u64 {
            match self {
                HdrMetric::Counter(c) => c.load(Ordering::Relaxed),
                _ => panic!("expected counter"),
            }
        }

        pub fn histogram_clone(&self) -> HdrHistogram<u64> {
            match self {
                HdrMetric::Histogram(h) => h.lock().unwrap().clone(),
                _ => panic!("expected histogram"),
            }
        }
    }

    impl Recorder for HdrRecorder {
        fn describe_counter(&self, _k: KeyName, _u: Option<Unit>, _d: SharedString) {}
        fn describe_gauge(&self, _k: KeyName, _u: Option<Unit>, _d: SharedString) {}
        fn describe_histogram(&self, _k: KeyName, _u: Option<Unit>, _d: SharedString) {}

        fn register_counter(&self, key: &Key, _m: &Metadata<'_>) -> Counter {
            let metric = self
                .metrics
                .entry(key.clone())
                .or_insert_with(|| Arc::new(HdrMetric::Counter(AtomicU64::new(0))))
                .clone();
            Counter::from_arc(metric)
        }

        fn register_gauge(&self, key: &Key, _m: &Metadata<'_>) -> Gauge {
            let metric = self
                .metrics
                .entry(key.clone())
                .or_insert_with(|| Arc::new(HdrMetric::Gauge(Mutex::new(GaugeState::new(key.name())))))
                .clone();
            Gauge::from_arc(metric)
        }

        fn register_histogram(&self, key: &Key, _m: &Metadata<'_>) -> Histogram {
            let metric = self
                .metrics
                .entry(key.clone())
                .or_insert_with(|| Arc::new(HdrMetric::Histogram(Mutex::new(new_hdr(key.name())))))
                .clone();
            Histogram::from_arc(metric)
        }
    }

    impl CounterFn for HdrMetric {
        fn increment(&self, value: u64) {
            let HdrMetric::Counter(c) = self else {
                panic!("expected counter");
            };
            c.fetch_add(value, Ordering::Relaxed);
        }
        fn absolute(&self, value: u64) {
            let HdrMetric::Counter(c) = self else {
                panic!("expected counter");
            };
            c.store(value, Ordering::Relaxed);
        }
    }

    impl GaugeFn for HdrMetric {
        fn increment(&self, value: f64) {
            let HdrMetric::Gauge(g) = self else {
                panic!("expected gauge");
            };
            let mut g = g.lock().unwrap();
            g.current += value;
            let current = g.current;
            record_gauge_sample(&mut g.history, current);
        }
        fn decrement(&self, value: f64) {
            let HdrMetric::Gauge(g) = self else {
                panic!("expected gauge");
            };
            let mut g = g.lock().unwrap();
            g.current -= value;
            let current = g.current;
            record_gauge_sample(&mut g.history, current);
        }
        fn set(&self, value: f64) {
            let HdrMetric::Gauge(g) = self else {
                panic!("expected gauge");
            };
            let mut g = g.lock().unwrap();
            g.current = value;
            let current = g.current;
            record_gauge_sample(&mut g.history, current);
        }
    }

    /// Record a gauge's post-mutation value into its history histogram.
    fn record_gauge_sample(history: &mut HdrHistogram<u64>, value: f64) {
        let clamped = clamp(value, history);
        history.record(clamped).ok();
    }

    impl HistogramFn for HdrMetric {
        fn record(&self, value: f64) {
            let HdrMetric::Histogram(h) = self else {
                panic!("expected histogram");
            };
            let mut h = h.lock().unwrap();
            let clamped = clamp(value, &h);
            // Cannot fail: `clamped` is within [0, high()].
            h.record(clamped).ok();
        }
    }

    #[cfg(test)]
    mod tests {
        use super::*;
        use metrics::GaugeFn;
        use mountpoint_s3_fs::metrics::defs::PROCESS_MEMORY_USAGE;

        /// Byte values above the latency bound must not be clamped, which would
        /// under-report the true memory peak.
        #[test]
        fn byte_gauge_history_records_large_values_without_clamping() {
            let metric = HdrMetric::Gauge(Mutex::new(GaugeState::new(PROCESS_MEMORY_USAGE)));
            // Above the latency bound LATENCY_HDR_HIGH (≈572 MiB).
            let rss: u64 = 756_809_728;
            metric.set(rss as f64);

            let peak = metric.gauge_history().max();
            // HDR histograms quantise to 3 significant figures; allow one bucket of tolerance.
            let tolerance = rss / 100;
            assert!(
                peak.abs_diff(rss) <= tolerance,
                "gauge peak {peak} should be within {tolerance} of {rss}",
            );
        }
    }
}
