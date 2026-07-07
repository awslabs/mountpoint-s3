//! `sustained_reads_large_window`: 64 readers concurrently reading the ~100 GiB shared test object
//! front-to-back, at a high 32 GiB memory target so the prefetch read windows can scale far past
//! the usual 512 MiB budget.
//!
//! **Purpose:** stress the prefetcher's read-window scaling under many concurrent readers sharing a
//! large budget. At a 32 GiB target the limiter reserves `max(32/8, 128 MiB) = 4 GiB`, leaving a
//! `data_buffer_budget` of 28 GiB. Split across 64 readers that is ~448 MiB per reader on average.
//! Each reader's window scales up (×2 on part-queue stall) toward the 2 GiB default maximum and
//! scales back down when a memory reservation fails, so the aggregate demand oscillates: windows
//! climb from the ~8 MiB floor toward 2 GiB, collectively exhaust the 28 GiB budget, then shrink —
//! a continuous scale-up/scale-down cycle. The `prefetch.window_after_increase_mib` and
//! `prefetch.window_after_decrease_mib` metrics record this oscillation.
//!
//! The 2 GiB maximum read window is the prefetcher default (`PrefetcherConfig::default()`), so no
//! extra configuration is needed beyond the memory target.

use std::iter::repeat_n;
use std::sync::Arc;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{LARGE_READ_OBJECT, SequentialReader};

/// High memory target (32 GiB) so read windows can grow well past the default 512 MiB budget.
/// Leaves a data_buffer_budget of 28 GiB (32 − max(32/8, 128 MiB) = 32 − 4), ~448 MiB per reader.
const MEM_LIMIT: usize = 32 * 1024 * 1024 * 1024;
const NUM_WORKERS: usize = 64;
const READ_CHUNK: usize = 8 * 1024 * 1024; // 8 MiB read syscall size (independent of the prefetch window).

#[test]
fn sustained_reads_large_window() {
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
    });
    let workers = repeat_n(reader, NUM_WORKERS).collect();
    harness::run(Scenario {
        name: "sustained_reads_large_window",
        session_config: TestSessionConfig::default().with_mem_limit(MEM_LIMIT),
        workers,
        max_latency: default_max_latency,
    });
}
