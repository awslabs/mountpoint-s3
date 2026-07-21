use std::iter::repeat_n;
use std::path::Path;
use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{
    self, Scenario, SetupGuard, Worker, budget_parts, default_max_latency, hold_budget_parts,
};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader};

const SCOPE: &str = "single_reader_held_budget_misaligned_part";
const NUM_READERS: usize = 1;
/// A part size that is deliberately **not** a multiple of the 128 KiB readahead granularity, so
/// pool-buffer boundaries fall off the buffered-read grid and a 128 KiB read can straddle one.
const PART_SIZE: usize = 8 * 1024 * 1024 + 64 * 1024; // 8 MiB + 64 KiB
const READ_CHUNK: usize = 8 * 1024 * 1024;

/// Setup phase: pin the entire write budget before the reader starts, leaving only the read
/// reserve (one part) free.
fn hold(mount_path: &Path) -> Box<dyn SetupGuard> {
    let held_parts = budget_parts(MINIMUM_MEM_LIMIT, PART_SIZE);
    Box::new(hold_budget_parts(SCOPE, held_parts, mount_path))
}

#[test]
fn single_reader_held_budget_misaligned_part() {
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
        setup: Some(hold),
        workers,
        max_latency: default_max_latency,
    });
}
