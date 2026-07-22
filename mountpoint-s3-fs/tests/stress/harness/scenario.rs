//! Scenario — description of one stress run.

use std::sync::Arc;
use std::time::Duration;

use crate::common::fuse::TestSessionConfig;

use super::latency::FileOp;
use super::setup::SetupFn;
use super::worker::Worker;

/// A stress-test scenario: the complete description of one run.
pub struct Scenario {
    /// Short name — used for logging and as the S3 test prefix component.
    pub name: &'static str,

    /// FUSE/Mountpoint session configuration (memory limit, part size, etc.).
    pub session_config: TestSessionConfig,

    /// When `true`, the harness mounts with a caching prefetcher backed by a temporary on-disk data
    /// cache.
    pub cache: bool,

    /// Optional setup step run to completion after mount and before workers start. Its returned
    /// [`SetupGuard`] is held for the entire run, so anything it establishes (pinned memory, a warmed
    /// cache, …) stays in effect while the workers execute. `None` for scenarios that need no setup.
    pub setup: Option<SetupFn>,

    /// The workers to spawn, one thread per entry.
    pub workers: Vec<Arc<dyn Worker>>,

    /// Maximum allowed p100 latency for each file op, aggregated across all workers.
    pub max_latency: fn(FileOp) -> Duration,
}

/// Default per-op latency ceiling: 20s for every op. Scenarios may provide their own
/// function if they have a different natural profile.
pub fn default_max_latency(_op: FileOp) -> Duration {
    Duration::from_secs(20)
}
