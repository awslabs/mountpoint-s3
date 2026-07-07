//! `mixed_rw_read16_write8`: like `mixed_rw` (16 readers + 24 writers under the 512 MiB memory
//! limit), but reads use a 16 MiB part size and writes use an 8 MiB part size. The two land in
//! *separate* `PagedPool` size-pools, so read and write buffers can never be reused for each other
//! and each size-pool fragments independently against the shared budget.

use std::iter::{chain, repeat_n};
use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader, Writer};

const NUM_READERS: usize = 16;
const NUM_WRITERS: usize = 24;
const READ_PART_SIZE: usize = 16 * 1024 * 1024; // 16 MiB reads
const WRITE_PART_SIZE: usize = 8 * 1024 * 1024; // 8 MiB writes
const WRITE_OBJECT_SIZE: usize = 100 * 1024 * 1024; // 100 MiB

#[test]
fn mixed_rw_read16_write8() {
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_PART_SIZE,
    });
    let writer: Arc<dyn Worker> = Arc::new(Writer {
        scope: "mixed_rw_read16_write8",
        object_size: WRITE_OBJECT_SIZE,
        chunk: WRITE_PART_SIZE,
    });
    let workers = chain(repeat_n(reader, NUM_READERS), repeat_n(writer, NUM_WRITERS)).collect();
    harness::run(Scenario {
        name: "mixed_rw_read16_write8",
        session_config: TestSessionConfig::default()
            .with_mem_limit(MINIMUM_MEM_LIMIT)
            .with_part_size(WRITE_PART_SIZE)
            .with_read_part_size(READ_PART_SIZE),
        workers,
        max_latency: default_max_latency,
    });
}
