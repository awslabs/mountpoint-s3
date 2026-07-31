//! Core harness for stress scenarios.

use std::collections::HashMap;
use std::sync::Arc;
use std::sync::atomic::{AtomicBool, AtomicU64, AtomicUsize, Ordering};
use std::thread;
use std::time::{Duration, Instant};

use mountpoint_s3_fs::s3::{Bucket, Prefix, S3Path};

use crate::common::fuse;
use crate::common::stress_recorder;
use crate::stress::test_objects::ensure_shared_objects;

mod invariants;
mod latency;
mod memory_monitor;
mod report;
mod scenario;
mod watchdog;
mod worker;
use invariants::{
    assert_p100_latency, assert_peak_reserved_invariant, assert_peak_rss_invariant, assert_teardown_invariants,
};
pub use latency::{FileOp, FileOpLatencies};
use memory_monitor::spawn_memory_monitor;
use report::dump_summary;
pub use scenario::{Scenario, default_max_latency};
use watchdog::{NO_STALL, spawn_watchdog};
pub use worker::Worker;

/// Default scenario duration if `STRESS_DURATION_SECS` is unset.
const DEFAULT_DURATION_SECS: u64 = 30;

/// Return the `S3Path` every stress scenario mounts at: `<S3_BUCKET_NAME>/<S3_BUCKET_TEST_PREFIX>`
fn stress_mount_s3_path() -> S3Path {
    let bucket = crate::common::s3::get_test_bucket();
    let prefix = std::env::var("S3_BUCKET_TEST_PREFIX").unwrap_or_else(|_| String::from("mountpoint-test/"));
    assert!(prefix.ends_with('/'), "S3_BUCKET_TEST_PREFIX should end in '/'");
    S3Path::new(Bucket::new(bucket).unwrap(), Prefix::new(&prefix).unwrap())
}

/// Run the given scenario. Reads `STRESS_DURATION_SECS` from env; default 30s.
pub fn run(scenario: Scenario) {
    stress_recorder::install();

    let duration = read_duration_env();
    let Scenario {
        name: scenario_name,
        mut session_config,
        workers,
        max_latency,
    } = scenario;

    let mem_limit = session_config.filesystem_config.mem_limit as f64;
    let num_workers = workers.len();
    assert!(
        num_workers > 0,
        "scenario {scenario_name:?} must declare at least one worker"
    );

    // Per-kind instance index (0-based within each kind) and human-readable labels
    // (`kind#instance`) used in log lines and stall messages.
    let (instances, labels) = assign_instances_and_labels(&workers);

    tracing::info!(
        scenario = scenario_name,
        duration_secs = duration.as_secs(),
        workers = num_workers,
        "stress: starting"
    );

    let shared_objects = collect_shared_objects(&workers, scenario_name);
    let shared_refs: Vec<(&str, usize)> = shared_objects.iter().map(|(k, s)| (k.as_str(), *s)).collect();
    ensure_shared_objects(&shared_refs);

    let session = {
        session_config.filesystem_config.allow_delete = true;
        session_config.filesystem_config.allow_overwrite = true;
        let s3_path = stress_mount_s3_path();
        let region = crate::common::s3::get_test_region();
        let sdk_client = crate::common::tokio_block_on(async { crate::common::s3::get_test_sdk_client(&region).await });
        fuse::s3_session::new_with_test_client(session_config, sdk_client, s3_path)
    };

    let stop = Arc::new(AtomicBool::new(false));
    let progress: Vec<Arc<AtomicU64>> = (0..num_workers).map(|_| Arc::new(AtomicU64::new(0))).collect();
    let stalled_worker = Arc::new(AtomicUsize::new(NO_STALL));

    let max_idles: Vec<Duration> = workers.iter().map(|w| w.max_idle()).collect();
    let max_join_wait = max_idles
        .iter()
        .copied()
        .max()
        .expect("scenario must declare at least one worker");

    let mount_path: std::path::PathBuf = session.mount_path().to_path_buf();
    let mut handles: Vec<thread::JoinHandle<FileOpLatencies>> = Vec::with_capacity(num_workers);
    for (worker_id, worker) in workers.iter().enumerate() {
        let worker = Arc::clone(worker);
        let stop = stop.clone();
        let progress = progress[worker_id].clone();
        let mount_path = mount_path.clone();
        let instance = instances[worker_id];
        handles.push(thread::spawn(move || {
            let mut latencies = FileOpLatencies::new();
            worker.run(instance, &mount_path, &progress, &mut latencies, &stop);
            latencies
        }));
    }

    let watchdog = spawn_watchdog(
        scenario_name.to_string(),
        labels.clone(),
        max_idles.clone(),
        progress.clone(),
        stop.clone(),
        stalled_worker.clone(),
    );

    let memory_monitor = spawn_memory_monitor(stop.clone(), Duration::from_millis(100));

    let deadline = Instant::now() + duration;
    while Instant::now() < deadline {
        if stalled_worker.load(Ordering::SeqCst) != NO_STALL {
            break;
        }
        thread::sleep(Duration::from_millis(200).min(deadline.saturating_duration_since(Instant::now())));
    }
    stop.store(true, Ordering::SeqCst);
    let _ = watchdog.join();
    let _ = memory_monitor.join();

    // Bounded join: workers observe `stop` between ops and should finish quickly. If any
    // are wedged in a kernel FUSE syscall they cannot observe `stop` and `JoinHandle` has
    // no timeout API, so we poll `is_finished()` up to a deadline. On timeout we drop
    // (unmount) the session to force EIO/EINTR on stuck syscalls, then panic with the
    // stuck worker labels.
    let join_deadline = Instant::now() + max_join_wait;
    while !handles.iter().all(|h| h.is_finished()) {
        if Instant::now() >= join_deadline {
            let stuck: Vec<&str> = handles
                .iter()
                .enumerate()
                .filter_map(|(id, h)| (!h.is_finished()).then_some(labels[id].as_str()))
                .collect();
            drop(session);
            panic!("stress: workers {stuck:?} did not finish within {max_join_wait:?} after stop");
        }
        thread::sleep(Duration::from_millis(100));
    }

    let mut aggregate = FileOpLatencies::new();
    for (id, handle) in handles.into_iter().enumerate() {
        let rec = handle
            .join()
            .unwrap_or_else(|e| panic!("worker {} panicked: {e:?}", labels[id]));
        aggregate.merge(&rec);
    }

    drop(session);

    let stalled = stalled_worker.load(Ordering::SeqCst);
    if stalled != NO_STALL {
        panic!(
            "stress: scenario {scenario_name:?} failed: worker {} stalled for at least {:?}",
            labels[stalled], max_idles[stalled],
        );
    }

    dump_summary(scenario_name, &aggregate);

    tracing::info!("");
    tracing::info!("=== STRESS [{}] INVARIANT ASSERTIONS ===", scenario_name);
    assert_peak_reserved_invariant(scenario_name, mem_limit);
    assert_peak_rss_invariant(scenario_name, mem_limit);
    assert_teardown_invariants(scenario_name);
    assert_p100_latency(scenario_name, &aggregate, max_latency);
    tracing::info!("");

    tracing::info!(scenario = scenario_name, "stress: finished");
}

/// Compute, for each worker, its 0-based instance index within its kind, along with a
/// `kind#instance` label used in logs and stall messages.
fn assign_instances_and_labels(workers: &[Arc<dyn Worker>]) -> (Vec<usize>, Vec<String>) {
    let mut counts: HashMap<&'static str, usize> = HashMap::new();
    let mut instances = Vec::with_capacity(workers.len());
    let mut labels = Vec::with_capacity(workers.len());
    for w in workers {
        let kind = w.kind();
        let instance = *counts.entry(kind).and_modify(|c| *c += 1).or_insert(0);
        labels.push(format!("{kind}#{instance}"));
        instances.push(instance);
    }
    (instances, labels)
}

/// Union every worker's shared-objects manifest and de-dupe by key. If two workers
/// declare the same key with different sizes, panic with a clear message — that's a
/// scenario bug, not a runtime error we should paper over.
///
/// Returns the manifest.
fn collect_shared_objects(workers: &[Arc<dyn Worker>], scenario_name: &str) -> Vec<(String, usize)> {
    let mut out: Vec<(String, usize)> = Vec::new();
    let mut seen: HashMap<String, usize> = HashMap::new();
    for w in workers {
        for (key, size) in w.shared_objects() {
            match seen.get(&key) {
                Some(&existing_size) => {
                    assert_eq!(
                        existing_size, size,
                        "stress: scenario {scenario_name:?} has conflicting declarations for shared object {key:?}: \
                         {existing_size} vs {size}"
                    );
                }
                None => {
                    seen.insert(key.clone(), size);
                    out.push((key, size));
                }
            }
        }
    }
    out
}

fn read_duration_env() -> Duration {
    let secs = std::env::var("STRESS_DURATION_SECS")
        .ok()
        .and_then(|s| s.parse::<u64>().ok())
        .unwrap_or(DEFAULT_DURATION_SECS);
    Duration::from_secs(secs)
}
