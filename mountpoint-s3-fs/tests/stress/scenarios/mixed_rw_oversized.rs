//! `mixed_rw_oversized`: like `mixed_rw` (16 readers + 24 writers under the 512 MiB memory limit),
//! but reads and writes both use a 128 MiB part size — larger than the pool's 64 MiB
//! `MAX_BUFFER_SIZE`. The pool drops candidate sizes above the cap, so no size-pool matches and
//! every buffer is served from **secondary** (exact-size, off-page) allocation.
//!
//! This is where the branches diverge, which is the point of running it on both:
//! - On `main`, secondary buffers are plain allocations that are tracked but never blocked, so
//!   this mostly stresses raw RSS with many 128 MiB off-pool buffers.
//! - On `feature/memory-limit`, secondary allocation goes through the memory limiter and can be
//!   denied or queued when over budget, so the same workload exercises the limiter's handling of
//!   oversized off-pool requests.

use std::iter::{chain, repeat_n};
use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader, Writer};

const NUM_READERS: usize = 16;
const NUM_WRITERS: usize = 24;
/// 128 MiB — larger than the pool's 64 MiB MAX_BUFFER_SIZE, so all buffers are secondary.
const PART_SIZE: usize = 128 * 1024 * 1024;
const WRITE_OBJECT_SIZE: usize = 256 * 1024 * 1024; // 256 MiB — a couple of 128 MiB parts

#[test]
fn mixed_rw_oversized() {
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: PART_SIZE,
    });
    let writer: Arc<dyn Worker> = Arc::new(Writer {
        scope: "mixed_rw_oversized",
        object_size: WRITE_OBJECT_SIZE,
        chunk: PART_SIZE,
    });
    let workers = chain(repeat_n(reader, NUM_READERS), repeat_n(writer, NUM_WRITERS)).collect();
    harness::run(Scenario {
        name: "mixed_rw_oversized",
        session_config: TestSessionConfig::default()
            .with_mem_limit(MINIMUM_MEM_LIMIT)
            .with_part_size(PART_SIZE),
        workers,
        max_latency: default_max_latency,
    });
}
