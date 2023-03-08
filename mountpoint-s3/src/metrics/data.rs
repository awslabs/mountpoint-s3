use std::collections::HashMap;
use std::fmt::{self, Display, Formatter};

use metrics::Key;
use tracing::info;

/// A map of metrics data
#[derive(Debug, Default)]
pub struct Metrics(HashMap<Key, Metric>);

impl Metrics {
    /// Get a mutable reference to a metric, creating it if it doesn't already exist in the map
    pub fn get_mut(&mut self, typ: MetricType, key: &Key) -> &mut Metric {
        if !self.0.contains_key(key) {
            self.0.insert(key.clone(), Metric::new(typ));
        }
        self.0.get_mut(key).unwrap()
    }

    /// Aggregate another [Metrics] into this one
    pub fn aggregate(&mut self, other: Metrics) {
        for (key, data) in other.0 {
            match self.0.get_mut(&key) {
                Some(me) => {
                    me.aggregate(data);
                }
                None => {
                    self.0.insert(key, data);
                }
            }
        }
    }

    /// Emit this [Metrics] object
    pub fn emit(self) {
        let mut keys = self.0.keys().collect::<Vec<_>>();
        keys.sort();
        for key in keys {
            let metric = self.0.get(key).unwrap();
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
            info!(
                target: "mountpoint_s3::aggregate_metrics",
                "{}{}: {}",
                key.name(),
                labels,
                metric,
            );
        }
    }

    #[cfg(test)]
    pub fn iter(&self) -> impl Iterator<Item = (&Key, &Metric)> {
        self.0.iter()
    }
}

#[derive(Debug)]
pub enum MetricType {
    Counter,
    Gauge,
    Histogram,
}

#[derive(Debug)]
pub enum Metric {
    Counter(ValueAndCount<u64>),
    Gauge(ValueAndCount<f64>),
    // We currently have a fixed scaling configuration for histograms that is tuned for
    // microsecond-scale latency timers. It saturates at 60 seconds.
    Histogram(hdrhistogram::Histogram<u64>),
}

impl Metric {
    fn new(typ: MetricType) -> Self {
        match typ {
            MetricType::Counter => Metric::Counter(Default::default()),
            MetricType::Gauge => Metric::Gauge(Default::default()),
            MetricType::Histogram => {
                Metric::Histogram(hdrhistogram::Histogram::new_with_bounds(1, 60 * 1000 * 1000, 2).unwrap())
            }
        }
    }

    pub fn increment(&mut self, value: u64) {
        match self {
            Metric::Counter(inner) => {
                inner.sum += value;
                inner.n += 1;
            }
            Metric::Gauge(_inner) => {
                panic!("increment gauge values are not supported");
            }
            Metric::Histogram(inner) => {
                inner.saturating_record(value);
            }
        }
    }

    pub fn set(&mut self, value: f64) {
        match self {
            Metric::Counter(_inner) => panic!("set counter values are not supported"),
            Metric::Gauge(inner) => {
                inner.sum = value;
                inner.n = 1;
            }
            Metric::Histogram(_inner) => panic!("set histogram values are not supported"),
        }
    }

    fn aggregate(&mut self, other: Metric) {
        match (self, other) {
            (Metric::Counter(me), Metric::Counter(other)) => {
                me.sum += other.sum;
                me.n += other.n;
            }
            (Metric::Gauge(me), Metric::Gauge(other)) => {
                me.sum += other.sum;
                me.n += other.n;
            }
            (Metric::Histogram(me), Metric::Histogram(other)) => {
                me.add(other).unwrap();
            }
            _ => debug_assert!(false, "can't aggregate different types"),
        }
    }
}

impl Display for Metric {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        match self {
            Metric::Counter(inner) => {
                if inner.sum == inner.n {
                    f.write_fmt(format_args!("{}", inner.sum))
                } else {
                    f.write_fmt(format_args!("{} (n={})", inner.sum, inner.n))
                }
            }
            Metric::Gauge(inner) => f.write_fmt(format_args!("{} (n={})", inner.sum, inner.n)),
            Metric::Histogram(inner) => f.write_fmt(format_args!(
                "n={}: min={} p10={} p50={} avg={:.2} p90={} p99={} p99.9={} max={}",
                inner.len(),
                inner.min(),
                inner.value_at_quantile(0.1),
                inner.value_at_quantile(0.5),
                inner.mean(),
                inner.value_at_quantile(0.9),
                inner.value_at_quantile(0.99),
                inner.value_at_quantile(0.999),
                inner.max(),
            )),
        }
    }
}

#[derive(Debug, Default)]
pub struct ValueAndCount<T> {
    pub sum: T,
    pub n: u64,
}
