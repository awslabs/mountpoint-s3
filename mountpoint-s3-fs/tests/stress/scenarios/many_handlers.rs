//! `many_handlers`: 8 handle-hoarder workers (each holding 256 open read handles = 2048 cursors
//! total) plus 16 sequential readers under the 512 MiB memory limit.
//!
//! **Purpose:** validate the `O(N-open-read-handles)` cursor scan in `has_active_reads()` and
//! `reset_one_idle_cursor()` (`limiter.rs:347/359`). The pruning maintenance thread invokes
//! these every `PRUNING_TICK` (1 ms) while the allocation queue is non-empty. With thousands of
//! cursors this means two full DashMap iterations + per-cursor `read_state` mutex lock every
//! millisecond, contending on the same mutexes the FUSE read path takes.
//!
//! The sequential readers sustain memory pressure (keeping the allocation queue non-empty) while
//! the handle hoarders keep the cursor count high and the read_state mutexes hot.
//!
//! Failure mode: if the pruning scans cause excessive mutex contention, the sequential readers
//! will stall or exceed the p100 latency ceiling.

use std::iter::{chain, repeat_n};
use std::sync::Arc;

use mountpoint_s3_fs::memory::MINIMUM_MEM_LIMIT;

use crate::common::fuse::TestSessionConfig;
use crate::stress::harness::{self, Scenario, Worker, default_max_latency};
use crate::stress::workers::{LARGE_READ_OBJECT, ManyHandles, SMALL_OBJECT_POOL, SequentialReader};

/// Number of handle-hoarder workers. Each holds `HANDLES_PER_WORKER` (256) open read handles.
const NUM_HOARDERS: usize = 8;
/// Number of sequential readers that sustain memory pressure and validate read latency.
const NUM_READERS: usize = 16;
const READ_CHUNK: usize = 8 * 1024 * 1024; // 8 MiB — matches default part size

/// Minimum NOFILE soft limit needed for this scenario: 2048 hoarder handles + headroom for
/// FUSE session FDs, pool threads, and kernel bookkeeping.
const MIN_NOFILE: u64 = 4096;

/// Raise the soft NOFILE limit if it is below `MIN_NOFILE`. Panics on failure.
fn raise_nofile_limit() {
    let mut rlim = libc::rlimit {
        rlim_cur: 0,
        rlim_max: 0,
    };
    // SAFETY: `rlim` is a valid mutable pointer to a stack-allocated `rlimit`.
    let rc = unsafe { libc::getrlimit(libc::RLIMIT_NOFILE, &mut rlim) };
    assert_eq!(rc, 0, "getrlimit(RLIMIT_NOFILE) failed");
    if rlim.rlim_cur >= MIN_NOFILE {
        return;
    }
    rlim.rlim_cur = MIN_NOFILE.min(rlim.rlim_max);
    // SAFETY: `rlim` is a valid pointer to a stack-allocated `rlimit` with sane values.
    let rc = unsafe { libc::setrlimit(libc::RLIMIT_NOFILE, &rlim) };
    assert_eq!(
        rc, 0,
        "setrlimit(RLIMIT_NOFILE, {}) failed — run with a higher hard limit",
        rlim.rlim_cur,
    );
}

#[test]
fn many_handlers() {
    raise_nofile_limit();

    let hoarder: Arc<dyn Worker> = Arc::new(ManyHandles {
        pool: SMALL_OBJECT_POOL,
    });
    let reader: Arc<dyn Worker> = Arc::new(SequentialReader {
        target: LARGE_READ_OBJECT,
        chunk: READ_CHUNK,
    });
    let workers = chain(repeat_n(hoarder, NUM_HOARDERS), repeat_n(reader, NUM_READERS)).collect();
    harness::run(Scenario {
        name: "many_handlers",
        session_config: TestSessionConfig::default().with_mem_limit(MINIMUM_MEM_LIMIT),
        workers,
        max_latency: default_max_latency,
    });
}
