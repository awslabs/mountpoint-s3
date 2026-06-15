//! Worker trait — the unit of composition for stress scenarios.

use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64};
use std::time::Duration;

use super::latency::FileOpLatencies;

/// A stress-test worker.
pub trait Worker: Send + Sync {
    /// Short human-readable label for this kind of worker.
    fn kind(&self) -> &'static str;

    /// Shared S3 input objects this worker needs.
    fn shared_objects(&self) -> Vec<(String, usize)> {
        Vec::new()
    }

    /// Maximum time this worker may go without incrementing its progress counter before
    /// the watchdog declares it stalled. Default 20s.
    fn max_idle(&self) -> Duration {
        Duration::from_secs(20)
    }

    /// The worker body. Must loop until `stop` is set, incrementing `progress` to signal
    /// liveness. Time file-system operations via `latencies.time(op, || ...)` so the
    /// harness can aggregate per-op latency histograms and assert p100 ceilings at
    /// teardown.
    ///
    /// `instance` is the 0-based index of this worker *within its kind* (so the first
    /// `Writer` gets `instance = 0`, the second `Writer` gets `instance = 1`, etc.).
    /// Writers use it to generate unique per-worker object keys.
    fn run(
        &self,
        instance: usize,
        mount_path: &Path,
        progress: &AtomicU64,
        latencies: &mut FileOpLatencies,
        stop: &AtomicBool,
    );
}
