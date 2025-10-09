use crate::sync::atomic::{AtomicBool, AtomicU64, AtomicUsize, Ordering};
use crate::sync::{Arc, Mutex};

#[cfg(feature = "otlp_integration")]
use crate::metrics::defs::MetricConfig;
#[cfg(feature = "otlp_integration")]
use crate::metrics_otel::OtlpMetricsExporter;
#[cfg(feature = "otlp_integration")]
use opentelemetry::KeyValue;

#[cfg(feature = "otlp_integration")]
fn filter_attributes(key: &metrics::Key, allowed: &[&str]) -> Vec<KeyValue> {
    key.labels()
        .filter(|label| allowed.contains(&label.key()))
        .map(|label| KeyValue::new(label.key().to_string(), label.value().to_string()))
        .collect()
}

#[cfg(feature = "otlp_integration")]
#[derive(Debug)]
pub(crate) struct OtlpData<T> {
    // TODO: Currently, each unique key+labels creates separate OTel
    // instrument. We could optimise this further to use a single instrument
    // for all attributes/labels
    pub instrument: T,
    pub attributes: Vec<KeyValue>,
}

/// Represents the value of a metric
#[derive(Debug, Clone)]
pub enum MetricValue {
    Counter(u64),
    Gauge(f64),
    Histogram(f64),
}

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

    #[cfg(feature = "otlp_integration")]
    pub fn counter_otlp(exporter: &OtlpMetricsExporter, key: &metrics::Key, config: &MetricConfig) -> Self {
        let filtered_attributes = filter_attributes(key, config.otlp_attributes);
        let instrument = exporter.create_counter_instrument(key.name(), config.unit, config.stability);
        Self::Counter(Arc::new(ValueAndCount::with_otlp(instrument, filtered_attributes)))
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

    #[cfg(feature = "otlp_integration")]
    pub fn gauge_otlp(exporter: &OtlpMetricsExporter, key: &metrics::Key, config: &MetricConfig) -> Self {
        let filtered_attributes = filter_attributes(key, config.otlp_attributes);
        let instrument = exporter.create_gauge_instrument(key.name(), config.unit, config.stability);
        Self::Gauge(Arc::new(AtomicGauge::with_otlp(instrument, filtered_attributes)))
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

    #[cfg(feature = "otlp_integration")]
    pub fn histogram_otlp(exporter: &OtlpMetricsExporter, key: &metrics::Key, config: &MetricConfig) -> Self {
        let filtered_attributes = filter_attributes(key, config.otlp_attributes);
        let instrument = exporter.create_histogram_instrument(key.name(), config.unit, config.stability);
        Self::Histogram(Arc::new(Histogram::with_otlp(instrument, filtered_attributes)))
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
                    Some(format!("{sum}"))
                } else {
                    Some(format!("{sum} (n={n})"))
                }
            }
            // Gauges can't reset because they can be incremented/decremented
            Metric::Gauge(inner) => inner.load_if_changed().map(|value| format!("{value}")),
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
    #[cfg(feature = "otlp_integration")]
    otlp_data: Option<OtlpData<opentelemetry::metrics::Counter<u64>>>,
}

impl metrics::CounterFn for ValueAndCount {
    fn increment(&self, value: u64) {
        self.sum.fetch_add(value, Ordering::SeqCst);
        self.n.fetch_add(1, Ordering::SeqCst);

        #[cfg(feature = "otlp_integration")]
        if let Some(otlp_data) = &self.otlp_data {
            otlp_data.instrument.add(value, &otlp_data.attributes);
        }
    }

    fn absolute(&self, _value: u64) {
        // OpenTelemetry doesn't support absolute values for counters, so use gauges or histograms when absolute values are needed
        debug_assert!(false, "absolute() is not supported for counters");
    }
}

impl ValueAndCount {
    #[cfg(feature = "otlp_integration")]
    pub fn with_otlp(otlp_counter: opentelemetry::metrics::Counter<u64>, attributes: Vec<KeyValue>) -> Self {
        Self {
            sum: AtomicU64::new(0),
            n: AtomicUsize::new(0),
            otlp_data: Some(OtlpData {
                instrument: otlp_counter,
                attributes,
            }),
        }
    }

    #[cfg(all(feature = "otlp_integration", test))]
    pub fn otlp_data(&self) -> Option<&OtlpData<opentelemetry::metrics::Counter<u64>>> {
        self.otlp_data.as_ref()
    }

    pub fn load_and_reset(&self) -> Option<(u64, usize)> {
        let sum = self.sum.swap(0, Ordering::SeqCst);
        let n = self.n.swap(0, Ordering::SeqCst);
        if n == 0 { None } else { Some((sum, n)) }
    }
}

/// An atomic gauge.
///
/// Gauges are floats but there's no atomic floats in std, so we stuff the float into an AtomicU64
/// by converting to/from the bit representation.
#[derive(Debug, Default)]
pub struct AtomicGauge {
    bits: AtomicU64,
    changed: AtomicBool,
    #[cfg(feature = "otlp_integration")]
    otlp_data: Option<OtlpData<opentelemetry::metrics::Gauge<f64>>>,
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
        let mut new_value = 0.0;
        self.bits
            .fetch_update(Ordering::SeqCst, Ordering::SeqCst, |old_bits| {
                let old_val = f64::from_bits(old_bits);
                new_value = f(old_val);
                Some(new_value.to_bits())
            })
            .expect("closure always returns Some");
        self.changed.store(true, Ordering::SeqCst);

        #[cfg(feature = "otlp_integration")]
        if let Some(otlp_data) = &self.otlp_data {
            otlp_data.instrument.record(new_value, &otlp_data.attributes);
        }
    }

    /// Return the current value of this gauge if it has changed since the last call to this method.
    /// Note that "changed" just means another `gauge!()` call has occurred; the actual value may
    /// still be the same.
    pub fn load_if_changed(&self) -> Option<f64> {
        if self.changed.swap(false, Ordering::SeqCst) {
            Some(f64::from_bits(self.bits.load(Ordering::SeqCst)))
        } else {
            None
        }
    }

    #[cfg(feature = "otlp_integration")]
    pub fn with_otlp(otlp_gauge: opentelemetry::metrics::Gauge<f64>, attributes: Vec<KeyValue>) -> Self {
        Self {
            bits: AtomicU64::new(0.0_f64.to_bits()),
            changed: AtomicBool::new(false),
            otlp_data: Some(OtlpData {
                instrument: otlp_gauge,
                attributes,
            }),
        }
    }

    #[cfg(all(feature = "otlp_integration", test))]
    pub fn otlp_data(&self) -> Option<&OtlpData<opentelemetry::metrics::Gauge<f64>>> {
        self.otlp_data.as_ref()
    }
}

/// An auto-resizing histogram with a precision of two significant figures.
#[derive(Debug)]
pub struct Histogram {
    histogram: Mutex<hdrhistogram::Histogram<u64>>,
    #[cfg(feature = "otlp_integration")]
    otlp_data: Option<OtlpData<opentelemetry::metrics::Histogram<f64>>>,
}

impl metrics::HistogramFn for Histogram {
    fn record(&self, value: f64) {
        self.histogram
            .lock()
            .unwrap()
            .record(value as u64)
            .expect("histogram should always resize when value is too large");

        #[cfg(feature = "otlp_integration")]
        if let Some(otlp_data) = &self.otlp_data {
            otlp_data.instrument.record(value, &otlp_data.attributes);
        }
    }
}

impl Histogram {
    fn new() -> Self {
        let histogram = hdrhistogram::Histogram::new(2).unwrap();
        Self {
            histogram: Mutex::new(histogram),
            #[cfg(feature = "otlp_integration")]
            otlp_data: None,
        }
    }

    #[cfg(feature = "otlp_integration")]
    pub fn with_otlp(otlp_histogram: opentelemetry::metrics::Histogram<f64>, attributes: Vec<KeyValue>) -> Self {
        let histogram = hdrhistogram::Histogram::new(2).unwrap();
        Self {
            histogram: Mutex::new(histogram),
            otlp_data: Some(OtlpData {
                instrument: otlp_histogram,
                attributes,
            }),
        }
    }

    #[cfg(all(feature = "otlp_integration", test))]
    pub fn otlp_data(&self) -> Option<&OtlpData<opentelemetry::metrics::Histogram<f64>>> {
        self.otlp_data.as_ref()
    }

    /// If this histogram has any data, run the closure, reset the histogram, and return the closure
    /// result. Otherwise return None.
    pub fn run_and_reset<T>(&self, f: impl FnOnce(&hdrhistogram::Histogram<u64>) -> T) -> Option<T> {
        let mut histogram = self.histogram.lock().unwrap();
        if histogram.is_empty() {
            return None;
        }

        let result = f(&histogram);
        histogram.reset();
        Some(result)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    #[cfg(feature = "otlp_integration")]
    fn test_labels_to_attributes() {
        use metrics::{Key, Label};

        let key = Key::from_parts(
            "test_metric",
            vec![Label::new("op", "read"), Label::new("status", "success")],
        );

        let attributes = filter_attributes(&key, &["op", "status"]);

        assert_eq!(attributes.len(), 2);
        assert_eq!(attributes[0].key.as_str(), "op");
        assert_eq!(attributes[0].value.as_str(), "read");
        assert_eq!(attributes[1].key.as_str(), "status");
        assert_eq!(attributes[1].value.as_str(), "success");
    }

    #[test]
    #[cfg(feature = "otlp_integration")]
    fn test_counter_otlp_recording() {
        use opentelemetry::metrics::MeterProvider as _;
        use opentelemetry_sdk::metrics::in_memory_exporter::InMemoryMetricExporter;
        use opentelemetry_sdk::metrics::{PeriodicReader, SdkMeterProvider};
        use std::sync::Arc;

        let exporter = InMemoryMetricExporter::default();
        let reader = PeriodicReader::builder(exporter.clone()).build();

        let provider = SdkMeterProvider::builder().with_reader(reader).build();
        let meter = provider.meter("test-meter");

        let otlp_counter = meter.u64_counter("test-counter").with_unit("some-unit").build();
        let attributes = vec![opentelemetry::KeyValue::new("some-label", "some-value")];

        let counter = ValueAndCount::with_otlp(otlp_counter, attributes);
        let counter_arc = Arc::new(counter);
        let counter_handle = metrics::Counter::from_arc(counter_arc.clone());

        counter_handle.increment(10);
        counter_handle.increment(20);

        // Flush and validate log-based recording
        let local_metric = Metric::Counter(counter_arc);
        assert_eq!(local_metric.fmt_and_reset(), Some("30 (n=2)".to_string()));

        // Flush and validate OTLP metric data
        provider.force_flush().unwrap();

        let metrics = exporter.get_finished_metrics().unwrap();
        assert!(!metrics.is_empty());

        let found_counter = metrics
            .iter()
            .flat_map(|rm| rm.scope_metrics())
            .flat_map(|sm| sm.metrics())
            .find(|m| m.name() == "test-counter");

        assert!(found_counter.is_some());
        let metric = found_counter.unwrap();

        assert_eq!(metric.name(), "test-counter");
        assert_eq!(metric.unit(), "some-unit");

        let data = metric.data();
        match data {
            opentelemetry_sdk::metrics::data::AggregatedMetrics::U64(metric_data) => match metric_data {
                opentelemetry_sdk::metrics::data::MetricData::Sum(sum_data) => {
                    let data_points: Vec<_> = sum_data.data_points().collect();
                    assert_eq!(data_points.len(), 1);

                    let data_point = &data_points[0];
                    assert_eq!(data_point.value(), 30);

                    let attributes: Vec<_> = data_point.attributes().collect();
                    assert_eq!(attributes.len(), 1);
                    assert_eq!(attributes[0].key.as_str(), "some-label");
                    assert_eq!(attributes[0].value.as_str(), "some-value");
                }
                _ => panic!("Expected Sum data"),
            },
            _ => panic!("Expected U64 data"),
        }
    }

    #[test]
    #[cfg(feature = "otlp_integration")]
    fn test_gauge_otlp_recording() {
        use opentelemetry::metrics::MeterProvider as _;
        use opentelemetry_sdk::metrics::in_memory_exporter::InMemoryMetricExporter;
        use opentelemetry_sdk::metrics::{PeriodicReader, SdkMeterProvider};
        use std::sync::Arc;

        let exporter = InMemoryMetricExporter::default();
        let reader = PeriodicReader::builder(exporter.clone()).build();

        let provider = SdkMeterProvider::builder().with_reader(reader).build();
        let meter = provider.meter("test-meter");

        let otlp_gauge = meter.f64_gauge("test_gauge").with_unit("some-unit").build();
        let attributes = vec![opentelemetry::KeyValue::new("some-label", "some-value")];

        let gauge = AtomicGauge::with_otlp(otlp_gauge, attributes);
        let gauge_arc = Arc::new(gauge);
        let gauge_handle = metrics::Gauge::from_arc(gauge_arc.clone());

        gauge_handle.set(10.0);
        gauge_handle.set(20.0);
        gauge_handle.set(30.0);

        // Flush and validate log-based metrics
        let local_metric = Metric::Gauge(gauge_arc);
        assert_eq!(local_metric.fmt_and_reset(), Some("30".to_string()));

        // Flush and validate OTLP metric data
        provider.force_flush().unwrap();
        let metrics = exporter.get_finished_metrics().unwrap();
        assert!(!metrics.is_empty());

        let found_gauge = metrics
            .iter()
            .flat_map(|rm| rm.scope_metrics())
            .flat_map(|sm| sm.metrics())
            .find(|m| m.name() == "test_gauge");

        assert!(found_gauge.is_some());
        let metric = found_gauge.unwrap();

        assert_eq!(metric.name(), "test_gauge");
        assert_eq!(metric.unit(), "some-unit");

        let data = metric.data();

        match data {
            opentelemetry_sdk::metrics::data::AggregatedMetrics::F64(metric_data) => match metric_data {
                opentelemetry_sdk::metrics::data::MetricData::Gauge(gauge_data) => {
                    let data_points: Vec<_> = gauge_data.data_points().collect();
                    assert_eq!(data_points.len(), 1);

                    let data_point = &data_points[0];
                    assert_eq!(data_point.value(), 30.0);

                    let attributes: Vec<_> = data_point.attributes().collect();
                    assert_eq!(attributes.len(), 1);
                    assert_eq!(attributes[0].key.as_str(), "some-label");
                    assert_eq!(attributes[0].value.as_str(), "some-value");
                }
                _ => panic!("Expected Gauge data"),
            },
            _ => panic!("Expected F64 data"),
        }
    }

    #[test]
    #[cfg(feature = "otlp_integration")]
    fn test_histogram_otlp_recording() {
        use opentelemetry::metrics::MeterProvider as _;
        use opentelemetry_sdk::metrics::in_memory_exporter::InMemoryMetricExporter;
        use opentelemetry_sdk::metrics::{PeriodicReader, SdkMeterProvider};
        use std::sync::Arc;

        let exporter = InMemoryMetricExporter::default();
        let reader = PeriodicReader::builder(exporter.clone()).build();

        let provider = SdkMeterProvider::builder().with_reader(reader).build();
        let meter = provider.meter("test-meter");

        let otlp_histogram = meter.f64_histogram("test_histogram").with_unit("some-unit").build();
        let attributes = vec![opentelemetry::KeyValue::new("some-label", "some-value")];

        let histogram = Histogram::with_otlp(otlp_histogram, attributes);
        let histogram_arc = Arc::new(histogram);
        let histogram_handle = metrics::Histogram::from_arc(histogram_arc.clone());

        histogram_handle.record(10.0);
        histogram_handle.record(20.0);
        histogram_handle.record(30.0);

        // Flush and sanity check log-based metrics
        let local_metric = Metric::Histogram(histogram_arc);
        let log_output = local_metric.fmt_and_reset().unwrap();
        assert!(log_output.contains("n=3"));
        assert!(log_output.contains("min=10"));
        assert!(log_output.contains("max=30"));

        // Flush and sanity check OTLP metric data
        provider.force_flush().unwrap();

        let metrics = exporter.get_finished_metrics().unwrap();
        assert!(!metrics.is_empty());

        let found_histogram = metrics
            .iter()
            .flat_map(|rm| rm.scope_metrics())
            .flat_map(|sm| sm.metrics())
            .find(|m| m.name() == "test_histogram");

        assert!(found_histogram.is_some());
        let metric = found_histogram.unwrap();

        assert_eq!(metric.name(), "test_histogram");
        assert_eq!(metric.unit(), "some-unit");

        let data = metric.data();

        match data {
            opentelemetry_sdk::metrics::data::AggregatedMetrics::F64(metric_data) => match metric_data {
                opentelemetry_sdk::metrics::data::MetricData::Histogram(histogram_data) => {
                    let data_points: Vec<_> = histogram_data.data_points().collect();
                    assert_eq!(data_points.len(), 1);

                    let data_point = &data_points[0];
                    assert_eq!(data_point.count(), 3);
                    assert_eq!(data_point.sum(), 60.0);
                    assert_eq!(data_point.min(), Some(10.0));
                    assert_eq!(data_point.max(), Some(30.0));

                    let attributes: Vec<_> = data_point.attributes().collect();
                    assert_eq!(attributes.len(), 1);
                    assert_eq!(attributes[0].key.as_str(), "some-label");
                    assert_eq!(attributes[0].value.as_str(), "some-value");
                }
                _ => panic!("Expected Histogram data"),
            },
            _ => panic!("Expected F64 data"),
        }
    }

    #[test]
    fn test_counter_log_recording() {
        let metric = Metric::counter();
        let counter = metric.as_counter();

        counter.increment(10);
        counter.increment(20);

        match metric.fmt_and_reset() {
            Some(fmt) => assert_eq!(fmt, "30 (n=2)"),
            None => panic!("Expected counter value"),
        }

        assert!(metric.fmt_and_reset().is_none());
    }

    #[test]
    fn test_gauge_log_recording() {
        let metric = Metric::gauge();
        let gauge = metric.as_gauge();

        gauge.set(10.0);
        gauge.set(20.0);

        match metric.fmt_and_reset() {
            Some(fmt) => assert_eq!(fmt, "20"),
            None => panic!("Expected gauge value"),
        }

        assert!(metric.fmt_and_reset().is_none());
    }

    #[test]
    fn test_histogram_log_recording() {
        let metric = Metric::histogram();
        let histogram = metric.as_histogram();

        for i in 1..=100 {
            histogram.record(i as f64);
        }

        let result = metric.fmt_and_reset().unwrap();
        assert_eq!(
            result,
            "n=100: min=1 p10=10 p50=50 avg=50.50 p90=90 p99=99 p99.9=100 max=100"
        );

        assert!(metric.fmt_and_reset().is_none());
    }
}
