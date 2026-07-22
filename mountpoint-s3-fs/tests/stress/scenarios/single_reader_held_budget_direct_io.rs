use std::iter::repeat_n;
use std::path::Path;
use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{
    self, Scenario, SetupGuard, Worker, budget_parts, default_max_latency, hold_budget_parts,
};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader};

const SCOPE: &str = "single_reader_held_budget_direct_io";
const NUM_READERS: usize = 1;
const PART_SIZE: usize = 8 * 1024 * 1024; // 8 MiB — the default, realistic part size
/// Size of each `O_DIRECT` read. 1 MiB is the largest single FUSE read the Linux kernel delivers
/// (`FUSE_MAX_MAX_PAGES` = 256 pages × 4 KiB) — a larger buffer is just split into 1 MiB FUSE ops —
/// and it is comfortably larger than the 128 KiB request tail it must span to cross into the next
/// prefetch request, which is what forces the multi-buffer `do_read`.
const READ_CHUNK: usize = 1024 * 1024;

/// Setup phase: pin the entire write budget before the reader starts, leaving only the read
/// reserve (one 8 MiB part) free.
fn hold(mount_path: &Path) -> Box<dyn SetupGuard> {
    let held_parts = budget_parts(MINIMUM_MEM_LIMIT, PART_SIZE);
    Box::new(hold_budget_parts(SCOPE, held_parts, mount_path))
}

#[test]
fn single_reader_held_budget_direct_io() {
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
        direct_io: true,
    });
    let workers = repeat_n(reader, NUM_READERS).collect();
    harness::run(Scenario {
        name: SCOPE,
        session_config: TestSessionConfig::default()
            .with_mem_limit(MINIMUM_MEM_LIMIT)
            .with_part_size(PART_SIZE),
        cache: false,
        setup: Some(hold),
        workers,
        max_latency: default_max_latency,
    });
}
