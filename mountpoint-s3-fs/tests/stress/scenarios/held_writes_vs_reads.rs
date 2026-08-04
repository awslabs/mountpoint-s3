use std::iter::{chain, repeat_n};
use std::sync::Arc;
use std::time::Duration;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{HoldingWriter, LARGE_READ_OBJECT, SequentialReader};

const NUM_WRITERS: usize = 47; // Matches WriteHandleLimit for MINIMUM_MEM_LIMIT memory target
const NUM_READERS: usize = 16;
const PART_SIZE: usize = 8 * 1024 * 1024; // 8 MiB
const WRITE_BEFORE_HOLD: usize = PART_SIZE + 4 * 1024;
/// How long each writer holds its handle open. Longer than the 20s per-worker watchdog so that, if
/// holding writers do starve reads, a reader will visibly stall rather than just run slow.
const HOLD: Duration = Duration::from_secs(60);
const READ_CHUNK: usize = PART_SIZE;

#[test]
fn held_writes_vs_reads() {
    let writer: Arc<dyn Worker> = Arc::new(HoldingWriter {
        scope: "held_writes_vs_reads",
        write_before_hold: WRITE_BEFORE_HOLD,
        hold: HOLD,
    });
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
        direct_io: false,
    });
    let workers = chain(repeat_n(writer, NUM_WRITERS), repeat_n(reader, NUM_READERS)).collect();
    harness::run(Scenario {
        name: "held_writes_vs_reads",
        session_config: TestSessionConfig::default()
            .with_mem_limit(MINIMUM_MEM_LIMIT)
            .with_part_size(PART_SIZE),
        cache: false,
        setup: None,
        workers,
        max_latency: default_max_latency,
    });
}
