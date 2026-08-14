//! `single_reader_budget_part`: a single reader whose read part size equals the entire
//! data-buffer budget (384 MiB at the 512 MiB memory limit).

use std::iter::repeat_n;
use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader};

/// The read part size under test: the memory limiter's entire data-buffer budget. At
/// `MINIMUM_MEM_LIMIT` (512 MiB) the limiter reserves `max(mem_limit / 8, 128 MiB)` = 128 MiB for
/// non-buffer overhead (see `MemoryLimiter::data_buffer_budget`), leaving 512 - 128 = 384 MiB for
/// data buffers. One part therefore fills the whole budget.
const READ_PART_SIZE: usize = MINIMUM_MEM_LIMIT - 128 * 1024 * 1024; // 384 MiB
const READ_CHUNK: usize = 8 * 1024 * 1024; // 8 MiB
const NUM_WORKERS: usize = 1;

#[test]
fn single_reader_budget_part() {
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
        direct_io: false,
    });
    let workers = repeat_n(reader, NUM_WORKERS).collect();
    harness::run(Scenario {
        name: "single_reader_budget_part",
        session_config: TestSessionConfig::default()
            .with_mem_limit(MINIMUM_MEM_LIMIT)
            .with_part_size(READ_PART_SIZE),
        cache: false,
        setup: None,
        workers,
        max_latency: default_max_latency,
    });
}
