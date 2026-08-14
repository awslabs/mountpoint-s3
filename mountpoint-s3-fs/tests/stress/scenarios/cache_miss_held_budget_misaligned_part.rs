//! `cache_miss_held_budget_misaligned_part`: a single cache-miss sequential reader under a 512 MiB
//! memory target with the write budget fully pinned (leaving one read-reserve part free), reading
//! through a data cache whose block size does not divide the read part size.

use std::iter::repeat_n;
use std::path::Path;
use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{
    self, Scenario, SetupGuard, Worker, budget_parts, default_max_idle, default_max_latency, hold_budget_parts,
};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader};

const SCOPE: &str = "cache_miss_held_budget_misaligned_part";
const NUM_READERS: usize = 1;
/// A part size that is deliberately not a multiple of the 1 MiB cache block size, so every
/// downloaded part ends in a partial block whose tail pins the part's pool buffer across the await
/// for the next part.
const PART_SIZE: usize = 8 * 1024 * 1024 + 1; // 8 MiB + 1 byte
const READ_CHUNK: usize = 8 * 1024 * 1024;

/// Setup phase: pin the entire write budget before the reader starts, leaving only the read
/// reserve (one part) free.
fn hold(mount_path: &Path) -> Box<dyn SetupGuard> {
    let held_parts = budget_parts(MINIMUM_MEM_LIMIT, PART_SIZE);
    Box::new(hold_budget_parts(SCOPE, held_parts, mount_path))
}

#[test]
fn cache_miss_held_budget_misaligned_part() {
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
        direct_io: false,
    });
    let workers = repeat_n(reader, NUM_READERS).collect();
    harness::run(Scenario {
        name: SCOPE,
        session_config: TestSessionConfig::default()
            .with_mem_limit(MINIMUM_MEM_LIMIT)
            .with_part_size(PART_SIZE),
        cache: true,
        setup: Some(hold),
        workers,
        max_latency: default_max_latency,
        max_idle: default_max_idle,
    });
}
