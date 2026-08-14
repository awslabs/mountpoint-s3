//! `many_readers_budget_part`: 4 readers competing under a read part size that equals the entire
//! data-buffer budget (384 MiB at the 512 MiB memory limit).

use std::iter::repeat_n;
use std::path::Path;
use std::sync::Arc;
use std::sync::atomic::{AtomicBool, AtomicU64};
use std::time::Duration;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, FileOpLatencies, Scenario, Worker};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader};

/// The read part size under test: the memory limiter's entire data-buffer budget. At
/// `MINIMUM_MEM_LIMIT` (512 MiB) the limiter reserves `max(mem_limit / 8, 128 MiB)` = 128 MiB for
/// non-buffer overhead (see `MemoryLimiter::data_buffer_budget`), leaving 512 - 128 = 384 MiB for
/// data buffers. One part therefore fills the whole budget.
const READ_PART_SIZE: usize = MINIMUM_MEM_LIMIT - 128 * 1024 * 1024; // 384 MiB
const READ_CHUNK: usize = 8 * 1024 * 1024; // 8 MiB
const NUM_WORKERS: usize = 4;

/// Wrapper around SequentialReader that overrides max_idle to 60 seconds for this scenario.
struct ReaderWith60sTimeout {
    inner: SequentialReader,
}

impl Worker for ReaderWith60sTimeout {
    fn kind(&self) -> &'static str {
        self.inner.kind()
    }

    fn max_idle(&self) -> Duration {
        Duration::from_secs(60)
    }

    fn shared_objects(&self) -> Vec<(String, usize)> {
        self.inner.shared_objects()
    }

    fn io_buffer_bytes(&self) -> usize {
        self.inner.io_buffer_bytes()
    }

    fn run(
        &self,
        instance: usize,
        mount_path: &Path,
        progress: &AtomicU64,
        latencies: &mut FileOpLatencies,
        stop: &AtomicBool,
    ) {
        self.inner.run(instance, mount_path, progress, latencies, stop)
    }
}

#[test]
fn many_readers_budget_part() {
    let reader: Arc<dyn Worker> = Arc::new(ReaderWith60sTimeout {
        inner: SequentialReader {
            target: LARGE_READ_OBJECT,
            chunk: READ_CHUNK,
            direct_io: false,
        },
    });
    let workers = repeat_n(reader, NUM_WORKERS).collect();
    harness::run(Scenario {
        name: "many_readers_budget_part",
        session_config: TestSessionConfig::default()
            .with_mem_limit(MINIMUM_MEM_LIMIT)
            .with_part_size(READ_PART_SIZE),
        cache: false,
        setup: None,
        workers,
        max_latency: |_op| Duration::from_secs(60),
    });
}
