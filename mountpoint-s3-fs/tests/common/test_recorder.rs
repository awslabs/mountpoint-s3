//! Test utilities for metrics validation

use metrics::{
    Counter, CounterFn, Gauge, GaugeFn, Histogram, HistogramFn, Key, KeyName, Metadata, Recorder, SharedString, Unit,
};
use std::collections::HashMap;
use std::sync::{Arc, Mutex};

#[derive(Debug, Default, Clone)]
pub struct TestRecorder {
    metrics: Arc<Mutex<HashMap<Key, Arc<Metric>>>>,
}

impl TestRecorder {
    pub fn clear(&self) {
        let mut metrics = self.metrics.lock().unwrap();
        metrics.clear();
    }

    pub fn print_metrics(&self) {
        let metrics = self.metrics.lock().unwrap();
        for (key, metric) in metrics.iter() {
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
        let metrics = self.metrics.lock().unwrap();
        metrics
            .iter()
            .find(|(key, _)| {
                if key.name() != name {
                    return false;
                }

                let actual_labels: Vec<_> = key.labels().map(|l| (l.key(), l.value())).collect();

                // Must have exact same number of labels
                if actual_labels.len() != labels.len() {
                    return false;
                }

                // Every expected label must be in the actual labels
                labels.iter().all(|(k, v)| actual_labels.contains(&(*k, *v)))
            })
            .map(|(_, metric)| Arc::clone(metric))
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
        let mut metrics = self.metrics.lock().unwrap();
        let metric = metrics
            .entry(key.clone())
            .or_insert(Arc::new(Metric::Counter(Default::default())));
        Counter::from_arc(metric.clone())
    }

    fn register_gauge(&self, key: &Key, _metadata: &Metadata<'_>) -> Gauge {
        let mut metrics = self.metrics.lock().unwrap();
        let metric = metrics
            .entry(key.clone())
            .or_insert(Arc::new(Metric::Gauge(Default::default())));
        Gauge::from_arc(metric.clone())
    }

    fn register_histogram(&self, key: &Key, _metadata: &Metadata<'_>) -> Histogram {
        let mut metrics = self.metrics.lock().unwrap();
        let metric = metrics
            .entry(key.clone())
            .or_insert(Arc::new(Metric::Histogram(Default::default())));
        Histogram::from_arc(metric.clone())
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
