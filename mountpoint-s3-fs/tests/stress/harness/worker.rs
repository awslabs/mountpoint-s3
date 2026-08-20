//! Worker trait — the unit of composition for stress scenarios.

use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64};

use super::latency::FileOpLatencies;

/// A stress-test worker.
pub trait Worker: Send + Sync {
    /// Short human-readable label for this kind of worker.
    fn kind(&self) -> &'static str;

    /// Shared S3 input objects this worker needs.
    fn shared_objects(&self) -> Vec<(String, usize)> {
        Vec::new()
    }

    /// Bytes of I/O buffer this worker allocates for its reads or writes. Default 0.
    fn io_buffer_bytes(&self) -> usize {
        0
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
