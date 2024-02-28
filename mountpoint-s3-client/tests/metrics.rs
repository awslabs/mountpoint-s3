#![cfg(feature = "s3_tests")]

//! Tests for metrics emitted by the client.
//!
//! Metrics tests are a bit annoying because metrics are emitted by different threads, and so the
//! [metrics] crate's thread-local recorders can't be used for testing. So our tests instead need to
//! fork (with [rusty_fork] so they can install a global recorder without interfering with each
//! other.

pub mod common;

use std::collections::HashMap;
use std::option::Option::None;
use std::sync::{Arc, Mutex};

use aws_sdk_s3::primitives::ByteStream;
use common::*;
use futures::TryStreamExt;
use metrics::{
    Counter, CounterFn, Gauge, GaugeFn, Histogram, HistogramFn, Key, KeyName, Metadata, Recorder, SharedString, Unit,
};
use mountpoint_s3_client::error::ObjectClientError;
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};
use regex::Regex;
use rusty_fork::rusty_fork_test;
use tracing::Level;

use crate::tracing_test::TracingTestLayer;

/// A test metrics recorder that just remembers the current values of gauges and counters, and all
/// inserted values for histograms.
#[derive(Debug, Default, Clone)]
struct TestRecorder {
    metrics: Arc<Mutex<Metrics>>,
}

#[derive(Debug, Default, Clone)]
struct Metrics {
    metrics: HashMap<Key, Arc<Metric>>,
}

impl Metrics {
    /// Retrieve a metric with the given name, and optionally matching the given label key and value
    fn get(&self, name: &str, label_key: Option<&str>, label_value: Option<&str>) -> Option<(&Key, &Metric)> {
        assert!(
            label_key.is_none() || label_value.is_some(),
            "can only filter values with keys"
        );
        self.metrics
            .iter()
            .find(move |(key, _)| {
                let label_matches = key.labels().any(|label| {
                    let key_matches = label_key.map(|k| label.key() == k).unwrap_or(true);
                    let value_matches = label_value.map(|v| label.value() == v).unwrap_or(true);
                    key_matches && value_matches
                }) || label_key.is_none();
                key.name() == name && label_matches
            })
            .map(|(key, metric)| (key, metric.as_ref()))
    }
}

impl Recorder for TestRecorder {
    fn describe_counter(&self, _key: KeyName, _unit: Option<Unit>, _description: SharedString) {}

    fn describe_gauge(&self, _key: KeyName, _unit: Option<Unit>, _description: SharedString) {}

    fn describe_histogram(&self, _key: KeyName, _unit: Option<Unit>, _description: SharedString) {}

    fn register_counter(&self, key: &Key, _metadata: &Metadata<'_>) -> Counter {
        let mut metrics = self.metrics.lock().unwrap();
        let metric = metrics
            .metrics
            .entry(key.clone())
            .or_insert(Arc::new(Metric::Counter(Default::default())));
        Counter::from_arc(metric.clone())
    }

    fn register_gauge(&self, key: &Key, _metadata: &Metadata<'_>) -> Gauge {
        let mut metrics = self.metrics.lock().unwrap();
        let metric = metrics
            .metrics
            .entry(key.clone())
            .or_insert(Arc::new(Metric::Gauge(Default::default())));
        Gauge::from_arc(metric.clone())
    }

    fn register_histogram(&self, key: &Key, _metadata: &Metadata<'_>) -> Histogram {
        let mut metrics = self.metrics.lock().unwrap();
        let metric = metrics
            .metrics
            .entry(key.clone())
            .or_insert(Arc::new(Metric::Histogram(Default::default())));
        Histogram::from_arc(metric.clone())
    }
}

#[derive(Debug)]
enum Metric {
    Histogram(Mutex<Vec<f64>>),
    Counter(Mutex<u64>),
    Gauge(Mutex<f64>),
}

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

/// Test basic metrics emitted by get_object
async fn test_get_object_metrics() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_metrics");

    let key = format!("{prefix}/test");
    let body = vec![0x42; 100];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(body.clone()))
        .send()
        .await
        .unwrap();

    let recorder = TestRecorder::default();
    metrics::set_global_recorder(recorder.clone()).unwrap();

    let client: S3CrtClient = get_test_client();
    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    let result = result
        .map_ok(|(_offset, bytes)| bytes.len())
        .try_fold(0, |a, b| async move { Ok(a + b) })
        .await
        .expect("get_object should succeed");
    assert_eq!(result, body.len());

    let metrics = recorder.metrics.lock().unwrap().clone();

    // Host count metric is emitted for a host that ends in amazonaws.com
    let (key, host_count) = metrics
        .get("s3.client.host_count", None, None)
        .expect("host count metric should exist");
    let host = key
        .labels()
        .find(|l| l.key() == "host")
        .expect("host label should exist");
    // TODO: this assertion won't work in other partitions
    assert!(host.value().ends_with(".amazonaws.com"));
    let Metric::Gauge(host_count) = host_count else {
        panic!("expected gauge for host count metric");
    };
    assert!(*host_count.lock().unwrap() > 0.0);

    // Latency metrics should exist for get_object
    let (_, ttfb) = metrics
        .get("s3.requests.first_byte_latency_us", Some("op"), Some("get_object"))
        .expect("first byte latency should exist");
    let Metric::Histogram(ttfb) = ttfb else {
        panic!("expected histogram for first byte latency");
    };
    assert!(ttfb.lock().unwrap().len() > 0);
    let (_, total) = metrics
        .get("s3.requests.total_latency_us", Some("op"), Some("get_object"))
        .expect("total latency should exist");
    let Metric::Histogram(total) = total else {
        panic!("expected histogram for total latency");
    };
    assert!(total.lock().unwrap().len() > 0);
}

rusty_fork_test! {
    #[test]
    fn get_object_metrics() {
        let runtime = tokio::runtime::Builder::new_current_thread().enable_all().build().unwrap();
        runtime.block_on(test_get_object_metrics());
    }
}

/// Test metrics and log messages for a head object that gets a 403 error
async fn test_head_object_403() {
    let bucket = get_test_bucket_without_permissions();

    let recorder = TestRecorder::default();
    metrics::set_global_recorder(recorder.clone()).unwrap();
    let _guard = TracingTestLayer::enable();

    let client: S3CrtClient = get_test_client();
    let err = client
        .head_object(&bucket, "some-key")
        .await
        .expect_err("head to no-permissions bucket should fail");
    assert!(matches!(
        err,
        ObjectClientError::ClientError(S3RequestError::Forbidden(_))
    ));

    drop(_guard);
    let metrics = recorder.metrics.lock().unwrap().clone();

    // WARN-level message with the failure and the request ID is emitted
    let events = TracingTestLayer::take_events();
    // Rather than hard-coding a request ID format, just look for anything that seems long enough
    // and doesn't contain `<` (which we use for "unknown")
    let request_id = Regex::new(r"request_id=[^\s<]{10}").unwrap();
    events
        .iter()
        .find(|(level, message)| {
            // Higher levels are higher verbosity, so ERROR is the lowest level
            *level <= Level::WARN && message.contains("meta request failed") && request_id.is_match(message)
        })
        .expect("request ID message not found");

    // Failures metric is incremented
    let (status_code_key, failures) = metrics
        .get("s3.meta_requests.failures", Some("op"), Some("head_object"))
        .expect("failures metric should exist");
    let status_code_label = status_code_key
        .labels()
        .find(|l| l.key() == "status")
        .expect("status code should exist");
    assert_eq!(status_code_label.value(), "403");
    let Metric::Counter(failures) = failures else {
        panic!("expected counter for failures metric");
    };
    assert!(*failures.lock().unwrap() > 0);
}

rusty_fork_test! {
    #[test]
    fn head_object_403() {
        let runtime = tokio::runtime::Builder::new_current_thread().enable_all().build().unwrap();
        runtime.block_on(test_head_object_403());
    }
}
