//! `many_readers_held_budget`: 32 readers against a default 8 MiB part, with the setup phase
//! hard-pinning all but one part of the budget so all 32 contend for a single free 8 MiB read part.

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
/// Hold every part of the budget except one, leaving exactly one read part free. At the 512 MiB
/// limit this is 48 - 1 = 47 parts (376 MiB) pinned.
const HELD_PARTS: usize = budget_parts(MINIMUM_MEM_LIMIT, PART_SIZE) - 1;
const READ_CHUNK: usize = PART_SIZE;

/// Setup phase: pin all but one part of the budget before the readers start.
fn hold(mount_path: &Path) -> Box<dyn SetupGuard> {
    Box::new(hold_budget_parts(SCOPE, HELD_PARTS, mount_path))
}

#[test]
fn many_readers_held_budget() {
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
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
