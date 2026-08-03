//! `sustained_writes`: 48 writers concurrently writing 100 MiB objects under the 512 MiB
//! memory limit.

use std::iter::repeat_n;
use std::sync::Arc;

use mountpoint_s3_fs::mem_limiter::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::Writer;

const NUM_WORKERS: usize = 48;
const WRITE_CHUNK: usize = 8 * 1024 * 1024; // 8 MiB — matches default part size
const OBJECT_SIZE: usize = 100 * 1024 * 1024; // 100 MiB

#[test]
fn sustained_writes() {
    let writer: Arc<dyn Worker> = Arc::new(Writer {
        scope: "sustained_writes",
        object_size: OBJECT_SIZE,
        chunk: WRITE_CHUNK,
    });
    let workers = repeat_n(writer, NUM_WORKERS).collect();
    harness::run(Scenario {
        name: "sustained_writes",
        session_config: TestSessionConfig::default().with_mem_limit(MINIMUM_MEM_LIMIT),
        workers,
        max_latency: default_max_latency,
    });
}
