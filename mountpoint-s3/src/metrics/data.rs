use crate::sync::atomic::{AtomicU64, AtomicUsize, Ordering};
use crate::sync::{Arc, Mutex};

/// A single metric
#[derive(Debug)]
pub enum Metric {
    Counter(Arc<ValueAndCount>),
    Gauge(Arc<AtomicGauge>),
    Histogram(Arc<Histogram>),
}

impl Metric {
    pub fn counter() -> Self {
        Self::Counter(Default::default())
    }

    pub fn as_counter(&self) -> metrics::Counter {
        let Metric::Counter(inner) = self else {
            panic!("not a counter");
        };
        metrics::Counter::from_arc(inner.clone())
    }

    pub fn gauge() -> Self {
        Self::Gauge(Default::default())
    }

    pub fn as_gauge(&self) -> metrics::Gauge {
        let Metric::Gauge(inner) = self else {
            panic!("not a gauge");
        };
        metrics::Gauge::from_arc(inner.clone())
    }

    pub fn histogram() -> Self {
        Self::Histogram(Arc::new(Histogram::new()))
    }

    pub fn as_histogram(&self) -> metrics::Histogram {
        let Metric::Histogram(inner) = self else {
            panic!("not a histogram");
        };
        metrics::Histogram::from_arc(inner.clone())
    }

    /// Generate a string representation of this metric, or None if the metric has had no values
    /// emitted since the last call to this function.
    pub fn fmt_and_reset(&self) -> Option<String> {
        match self {
            Metric::Counter(inner) => {
                let (sum, n) = inner.load_and_reset()?;
                if n == 1 {
                    Some(format!("{}", sum))
                } else {
                    Some(format!("{} (n={})", sum, n))
                }
            }
            Metric::Gauge(inner) => inner.load_and_reset().map(|value| format!("{}", value)),
            Metric::Histogram(histogram) => histogram.run_and_reset(|histogram| {
                format!(
                    "n={}: min={} p10={} p50={} avg={:.2} p90={} p99={} p99.9={} max={}",
                    histogram.len(),
                    histogram.min(),
                    histogram.value_at_quantile(0.1),
                    histogram.value_at_quantile(0.5),
                    histogram.mean(),
                    histogram.value_at_quantile(0.9),
                    histogram.value_at_quantile(0.99),
                    histogram.value_at_quantile(0.999),
                    histogram.max(),
                )
            }),
        }
    }
}

#[derive(Debug, Default)]
pub struct ValueAndCount {
    pub sum: AtomicU64,
    pub n: AtomicUsize,
}

impl metrics::CounterFn for ValueAndCount {
    fn increment(&self, value: u64) {
        self.sum.fetch_add(value, Ordering::SeqCst);
        self.n.fetch_add(1, Ordering::SeqCst);
    }

    fn absolute(&self, value: u64) {
        self.sum.store(value, Ordering::SeqCst);
        self.n.store(1, Ordering::SeqCst);
    }
}

impl ValueAndCount {
    pub fn load_and_reset(&self) -> Option<(u64, usize)> {
        let sum = self.sum.swap(0, Ordering::SeqCst);
        let n = self.n.swap(0, Ordering::SeqCst);
        if n == 0 {
            None
        } else {
            Some((sum, n))
        }
    }
}

/// An atomic gauge.
///
/// Gauges are floats but there's no atomic floats in std, so we stuff the float into an AtomicU64
/// by converting to/from the bit representation. We use NaN to represent "no value".
#[derive(Debug, Default)]
pub struct AtomicGauge {
    bits: AtomicU64,
}

impl metrics::GaugeFn for AtomicGauge {
    fn increment(&self, value: f64) {
        self.update(|old| old + value);
    }

    fn decrement(&self, value: f64) {
        self.update(|old| old - value);
    }

    fn set(&self, value: f64) {
        self.update(|_old| value);
    }
}

impl AtomicGauge {
    fn update(&self, f: impl Fn(f64) -> f64) {
        self.bits
            .fetch_update(Ordering::SeqCst, Ordering::SeqCst, move |old_bits| {
                let old_value = f64::from_bits(old_bits);
                let old_value = if old_value.is_nan() { 0.0 } else { old_value };
                Some(f(old_value).to_bits())
            })
            .expect("closure always returns Some");
    }

    pub fn load_and_reset(&self) -> Option<f64> {
        let old_bits = self.bits.swap(f64::NAN.to_bits(), Ordering::SeqCst);
        let old_value = f64::from_bits(old_bits);
        (!old_value.is_nan()).then_some(old_value)
    }
}

/// A histogram with a hard-coded resolution that saturates at 300 seconds.
#[derive(Debug)]
pub struct Histogram {
    histogram: Mutex<hdrhistogram::Histogram<u64>>,
}

impl metrics::HistogramFn for Histogram {
    fn record(&self, value: f64) {
        self.histogram.lock().unwrap().record(value as u64).unwrap();
    }
}

impl Histogram {
    fn new() -> Self {
        let histogram = hdrhistogram::Histogram::new_with_bounds(1, 300 * 1000 * 1000, 2).unwrap();
        Self {
            histogram: Mutex::new(histogram),
        }
    }

    /// If this histogram has any data, run the closure, reset the histogram, and return the closure
    /// result. Otherwise return None.
    pub fn run_and_reset<T>(&self, f: impl FnOnce(&hdrhistogram::Histogram<u64>) -> T) -> Option<T> {
        let mut histogram = self.histogram.lock().unwrap();
        if histogram.len() == 0 {
            return None;
        }

        let result = f(&histogram);
        histogram.reset();
        Some(result)
    }
}
