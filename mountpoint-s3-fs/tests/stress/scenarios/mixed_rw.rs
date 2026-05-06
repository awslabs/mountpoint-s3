//! `mixed_rw`: 16 readers + 24 writers sharing the same session under the 512 MiB memory
//! limit.

use std::iter::{chain, repeat_n};
use std::sync::Arc;

use mountpoint_s3_fs::mem_limiter::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader, Writer};

const NUM_READERS: usize = 16;
const NUM_WRITERS: usize = 24;
const READ_CHUNK: usize = 8 * 1024 * 1024; // 8 MiB — matches default part size
const WRITE_CHUNK: usize = 8 * 1024 * 1024; // 8 MiB — matches default part size
const WRITE_OBJECT_SIZE: usize = 100 * 1024 * 1024; // 100 MiB

#[test]
fn mixed_rw() {
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
    });
    let writer: Arc<dyn Worker> = Arc::new(Writer {
        scope: "mixed_rw",
        object_size: WRITE_OBJECT_SIZE,
        chunk: WRITE_CHUNK,
    });
    let workers = chain(repeat_n(reader, NUM_READERS), repeat_n(writer, NUM_WRITERS)).collect();
    harness::run(Scenario {
        name: "mixed_rw",
        session_config: TestSessionConfig::default().with_mem_limit(MINIMUM_MEM_LIMIT),
        workers,
        max_latency: default_max_latency,
    });
}
