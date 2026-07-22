//! `many_readers_held_budget`: 32 readers against a default 8 MiB part, with the setup phase
//! hard-pinning the entire write budget so all 32 contend for the single free read-reserve part.

use std::iter::repeat_n;
use std::path::Path;
use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{
    self, Scenario, SetupGuard, Worker, budget_parts, default_max_latency, hold_budget_parts,
};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader};

const SCOPE: &str = "many_readers_held_budget";
const NUM_READERS: usize = 32;
const PART_SIZE: usize = 8 * 1024 * 1024; // 8 MiB — the default, realistic part size
const READ_CHUNK: usize = PART_SIZE;

/// Setup phase: pin the entire write budget before the readers start, leaving only the read
/// reserve (one 8 MiB part) free — so all 32 readers contend for it.
fn hold(mount_path: &Path) -> Box<dyn SetupGuard> {
    let held_parts = budget_parts(MINIMUM_MEM_LIMIT, PART_SIZE);
    Box::new(hold_budget_parts(SCOPE, held_parts, mount_path))
}

#[test]
fn many_readers_held_budget() {
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
        cache: false,
        setup: Some(hold),
        workers,
        max_latency: default_max_latency,
    });
}
