use metrics::{Counter, CounterFn, Gauge, GaugeFn, Histogram, HistogramFn, Key, KeyName, Recorder, SharedString, Unit};

use crate::metrics::data::MetricType;
use crate::metrics::ThreadMetricsSinkHandle;
use crate::sync::Arc;

/// An implementation of the [metrics::Recorder] trait that emits metrics to a thread-local metrics
/// sink.
pub struct MetricsRecorder;

impl Recorder for MetricsRecorder {
    fn describe_counter(&self, _key: KeyName, _unit: Option<Unit>, _description: SharedString) {}

    fn describe_gauge(&self, _key: KeyName, _unit: Option<Unit>, _description: SharedString) {}

    fn describe_histogram(&self, _key: KeyName, _unit: Option<Unit>, _description: SharedString) {}

    fn register_counter(&self, key: &Key) -> Counter {
        Counter::from_arc(Arc::new(CounterImpl(key.clone())))
    }

    fn register_gauge(&self, key: &Key) -> Gauge {
        Gauge::from_arc(Arc::new(GaugeImpl(key.clone())))
    }

    fn register_histogram(&self, key: &Key) -> Histogram {
        Histogram::from_arc(Arc::new(HistogramImpl(key.clone())))
    }
}

struct CounterImpl(Key);

impl CounterFn for CounterImpl {
    fn increment(&self, value: u64) {
        ThreadMetricsSinkHandle::with(|handle| handle.increment_counter(&self.0, value))
    }

    fn absolute(&self, _value: u64) {
        panic!("absolute counter values are not supported");
    }
}

struct GaugeImpl(Key);

impl GaugeFn for GaugeImpl {
    fn increment(&self, _value: f64) {
        panic!("increment gauge values are not support")
    }

    fn decrement(&self, _value: f64) {
        panic!("decrement gauge values are not support")
    }

    fn set(&self, value: f64) {
        ThreadMetricsSinkHandle::with(|handle| handle.set_gauge(&self.0, value))
    }
}

struct HistogramImpl(Key);

impl HistogramFn for HistogramImpl {
    fn record(&self, value: f64) {
        ThreadMetricsSinkHandle::with(|handle| handle.increment_histogram(&self.0, value as u64));
    }
}

impl ThreadMetricsSinkHandle {
    fn increment_counter(&self, key: &Key, value: u64) {
        self.inner
            .lock()
            .unwrap()
            .metrics
            .get_mut(MetricType::Counter, key)
            .increment(value);
    }

    fn increment_histogram(&self, key: &Key, value: u64) {
        self.inner
            .lock()
            .unwrap()
            .metrics
            .get_mut(MetricType::Histogram, key)
            .increment(value);
    }

    fn set_gauge(&self, key: &Key, value: f64) {
        self.inner
            .lock()
            .unwrap()
            .metrics
            .get_mut(MetricType::Gauge, key)
            .set(value);
    }
}
