//! `ManyHandles` worker: opens many read handles from a shared object pool and holds them all open,
//! round-robin reading a small chunk from each to keep the cursors active and their `read_state`
//! mutexes contended against the background pruning thread.
//!
//! Purpose: stress the `O(N-open-read-handles)` DashMap scan in `has_active_reads()` and
//! `reset_one_idle_cursor()` (called every `PRUNING_TICK` under memory pressure).

use std::fs::File;
use std::io::{Read, Seek, SeekFrom};
use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};
use std::time::Duration;

use crate::stress::harness::{FileOp, FileOpLatencies, Worker};
use crate::stress::test_objects::SHARED_OBJECTS_PREFIX;

use super::common::SharedObjectPool;

/// How many file handles a single worker thread keeps open simultaneously.
/// 8 workers × 256 handles = 2048 total cursors in the DashMap, sufficient to stress the
/// linear scan at 1 ms tick.
pub const HANDLES_PER_WORKER: usize = 256;

/// A single round-robin read touches this many bytes per handle. Small enough to be fast
/// but large enough to exercise the read path (set_active_read → ActiveReadGuard::drop).
const TOUCH_SIZE: usize = 4096;

/// How long each handle-hold cycle lasts before we close all and reopen.
/// Long enough that the pruning loop gets to scan the full map many times.
const HOLD_DURATION: Duration = Duration::from_secs(15);

/// A worker that opens `HANDLES_PER_WORKER` handles from `pool` and continuously round-robin
/// reads a small chunk from each while holding all of them open. After `HOLD_DURATION`,
/// closes all handles and reopens them (cycling the cursor set).
pub struct ManyHandles {
    pub pool: SharedObjectPool,
}

impl Worker for ManyHandles {
    fn kind(&self) -> &'static str {
        "many_handles"
    }

    fn shared_objects(&self) -> Vec<(String, usize)> {
        self.pool.manifest()
    }

    /// Allow a longer idle window since opening many handles can be slow under pressure.
    fn max_idle(&self) -> Duration {
        Duration::from_secs(60)
    }

    fn run(
        &self,
        instance: usize,
        mount_path: &Path,
        progress: &AtomicU64,
        latencies: &mut FileOpLatencies,
        stop: &AtomicBool,
    ) {
        let mut buf = vec![0u8; TOUCH_SIZE];
        let mut iter: u64 = 0;

        while !stop.load(Ordering::Relaxed) {
            iter += 1;

            // Open HANDLES_PER_WORKER handles to (pseudo-random) pool objects.
            let mut handles: Vec<File> = Vec::with_capacity(HANDLES_PER_WORKER);
            for i in 0..HANDLES_PER_WORKER {
                if stop.load(Ordering::Relaxed) {
                    return;
                }
                let key = self.pool.pick_key(iter.wrapping_add(i as u64), instance);
                let path = mount_path.join(SHARED_OBJECTS_PREFIX).join(key);
                let file = latencies.time(FileOp::Open, || File::open(&path)).unwrap_or_else(|e| {
                    panic!("many_handles #{instance}: open failed: {e:?}");
                });
                handles.push(file);
                progress.fetch_add(1, Ordering::Relaxed);
            }

            // Round-robin small reads across all handles for HOLD_DURATION.
            let hold_deadline = std::time::Instant::now() + HOLD_DURATION;
            let mut round: usize = 0;
            while std::time::Instant::now() < hold_deadline && !stop.load(Ordering::Relaxed) {
                let idx = round % handles.len();
                round += 1;

                // Seek to a position that exercises a different part of the cursor's read window
                // each iteration to avoid cached-read fast-path trivially returning.
                let offset = ((round / handles.len()) as u64) * TOUCH_SIZE as u64;
                let file = &mut handles[idx];
                if file.seek(SeekFrom::Start(offset)).is_err() {
                    // Object smaller than offset — wrap around.
                    let _ = file.seek(SeekFrom::Start(0));
                }
                let n = latencies
                    .time(FileOp::Read, || file.read(&mut buf))
                    .unwrap_or_else(|e| {
                        panic!("many_handles #{instance}: read failed: {e:?}");
                    });
                progress.fetch_add(n as u64, Ordering::Relaxed);
            }

            // Close all handles.
            for file in handles {
                latencies.time(FileOp::CloseRead, || drop(file));
                progress.fetch_add(1, Ordering::Relaxed);
            }
        }
    }
}
