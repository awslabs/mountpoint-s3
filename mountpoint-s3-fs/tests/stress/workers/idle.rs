//! Idle worker.

use std::fs::File;
use std::io::Read;
use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};
use std::time::{Duration, Instant};

use crate::stress::harness::{FileOp, FileOpLatencies, Worker};
use crate::stress::test_objects::SHARED_OBJECTS_PREFIX;

use super::common::SharedObjectPool;

/// How much of each object the idle worker reads before going idle.
const PREFETCH_PROBE_READ_SIZE: usize = 1024 * 1024;

/// How long each idle-worker iteration holds the handle open without issuing any
/// further file operations.
const IDLE_HOLD: Duration = Duration::from_secs(60);

/// A worker that opens a key from `pool`, reads enough of a prefix to force the
/// prefetcher to issue a second metarequest, then holds the handle idle before
/// closing and re-opening.
pub struct Idle {
    pub pool: SharedObjectPool,
}

impl Worker for Idle {
    fn kind(&self) -> &'static str {
        "idle"
    }

    fn shared_objects(&self) -> Vec<(String, usize)> {
        self.pool.manifest()
    }

    fn run(
        &self,
        instance: usize,
        mount_path: &Path,
        progress: &AtomicU64,
        latencies: &mut FileOpLatencies,
        stop: &AtomicBool,
    ) {
        let mut buf = vec![0u8; PREFETCH_PROBE_READ_SIZE];
        let mut iter: u64 = 0;
        while !stop.load(Ordering::Relaxed) {
            iter += 1;
            let path = mount_path
                .join(SHARED_OBJECTS_PREFIX)
                .join(self.pool.pick_key(iter, instance));
            idle_cycle(&path, &mut buf, progress, latencies, stop);
        }
    }
}

/// One idle-worker iteration: open, read `buf.len()` bytes, hold idle
/// for [`IDLE_HOLD`], then close.
fn idle_cycle(path: &Path, buf: &mut [u8], progress: &AtomicU64, latencies: &mut FileOpLatencies, stop: &AtomicBool) {
    let mut file = latencies
        .time(FileOp::Open, || File::open(path))
        .unwrap_or_else(|e| panic!("idle: open of {path:?} failed: {e:?}"));
    progress.fetch_add(1, Ordering::Relaxed);
    let n = latencies
        .time(FileOp::Read, || file.read(buf))
        .unwrap_or_else(|e| panic!("idle: read of {path:?} failed: {e:?}"));
    progress.fetch_add(n as u64, Ordering::Relaxed);

    let deadline = Instant::now() + IDLE_HOLD;
    while Instant::now() < deadline && !stop.load(Ordering::Relaxed) {
        std::thread::sleep(Duration::from_millis(500));
        progress.fetch_add(1, Ordering::Relaxed);
    }

    latencies.time(FileOp::CloseRead, || drop(file));
    progress.fetch_add(1, Ordering::Relaxed);
}
