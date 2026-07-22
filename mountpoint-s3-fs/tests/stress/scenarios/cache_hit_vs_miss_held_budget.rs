//! `cache_hit_vs_miss_held_budget`: Cache-hit sequential readers vs cache-miss sequential readers
//! under a 512 MiB memory target with the write budget fully pinned (leaving one 8 MiB read-reserve
//! part free).

use std::iter::{chain, repeat_n};
use std::path::Path;
use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{
    self, Scenario, SetupGuard, Worker, budget_parts, default_max_latency, hold_budget_parts, warm_cache,
};
use crate::stress::workers::{LARGE_READ_OBJECT, MEDIUM_READ_OBJECT, SequentialReader};

const SCOPE: &str = "cache_hit_vs_miss_held_budget";
const PART_SIZE: usize = 8 * 1024 * 1024;
const NUM_HIT_READERS: usize = 8;
const NUM_MISS_READERS: usize = 4;
const WARMUP_KEYS: &[&str] = &[MEDIUM_READ_OBJECT.key];

/// Setup phase: warm the cache-hit object and pin the entire write budget, leaving only the
/// read reserve (one 8 MiB part) free.
fn setup(mount_path: &Path) -> Box<dyn SetupGuard> {
    warm_cache(WARMUP_KEYS, mount_path);

    let held_parts = budget_parts(MINIMUM_MEM_LIMIT, PART_SIZE);
    Box::new(hold_budget_parts(SCOPE, held_parts, mount_path))
}

#[test]
fn cache_hit_vs_miss_held_budget() {
    let hit_reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: MEDIUM_READ_OBJECT,
        chunk: PART_SIZE,
        direct_io: false,
    });
    let miss_reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: PART_SIZE,
        direct_io: false,
    });
    let workers = chain(
        repeat_n(hit_reader, NUM_HIT_READERS),
        repeat_n(miss_reader, NUM_MISS_READERS),
    )
    .collect();
    harness::run(Scenario {
        name: SCOPE,
        session_config: TestSessionConfig::default()
            .with_mem_limit(MINIMUM_MEM_LIMIT)
            .with_part_size(PART_SIZE),
        cache: true,
        setup: Some(setup),
        workers,
        max_latency: default_max_latency,
    });
}
