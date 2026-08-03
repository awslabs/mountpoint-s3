//! `sustained_reads`: 32 readers concurrently reading a ~100 GiB shared test object
//! front-to-back under the 512 MiB memory limit.

use std::iter::repeat_n;
use std::sync::Arc;

use mountpoint_s3_fs::mem_limiter::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader};

const READ_CHUNK: usize = 8 * 1024 * 1024; // 8 MiB — matches default part size
const NUM_WORKERS: usize = 32;

#[test]
fn sustained_reads() {
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
    });
    let workers = repeat_n(reader, NUM_WORKERS).collect();
    harness::run(Scenario {
        name: "sustained_reads",
        session_config: TestSessionConfig::default().with_mem_limit(MINIMUM_MEM_LIMIT),
        workers,
        max_latency: default_max_latency,
    });
}
