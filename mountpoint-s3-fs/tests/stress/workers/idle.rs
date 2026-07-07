//! Idle worker.

use std::fs::File;
use std::io::Read;
use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};
use std::time::{Duration, Instant};

use crate::stress::harness::{FileOp, FileOpLatencies, Worker};
use crate::stress::test_objects::SHARED_OBJECTS_PREFIX;

use super::common::SharedObjectPool;

/// Chunk size for the warm-up read that precedes the idle hold.
const WARMUP_CHUNK: usize = 128 * 1024;

/// How long each idle-worker iteration holds the handle open without issuing any
/// further file operations.
const IDLE_HOLD: Duration = Duration::from_secs(60);

/// A worker that opens a key from `pool`, reads a `warmup` prefix to force the
/// prefetcher to scale its read window up (pinning a full window of buffers), then
/// holds the handle idle before closing and re-opening.
///
/// The warm-up read is sequential and continuous so the reader repeatedly drains the
/// part queue faster than the producer can refill it. Each drain raises a
/// `PartQueueStall`, which is what scales the read window up — a single small probe
/// read (as an earlier version did) never stalls the queue and so pins only the ~1 MiB
/// initial window. Reading `warmup` bytes across a large object leaves a scaled-up
/// window's worth of reserved buffers pinned for the whole [`IDLE_HOLD`].
pub struct Idle {
    pub pool: SharedObjectPool,
    /// How much of each object to read (continuously) before going idle. Sized to let
    /// the prefetch window scale up to a full window before the hold begins.
    pub warmup: usize,
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
        // Pin distinct objects across workers where possible so idle handles pin
        // independent windows rather than sharing one object's prefetch.
        assert!(self.warmup <= self.pool.size, "idle: warmup exceeds object size");
        let mut buf = vec![0u8; WARMUP_CHUNK];
        let mut iter: u64 = 0;
        while !stop.load(Ordering::Relaxed) {
            iter += 1;
            let path = mount_path
                .join(SHARED_OBJECTS_PREFIX)
                .join(self.pool.pick_key(iter, instance));
            idle_cycle(&path, self.warmup, &mut buf, progress, latencies, stop);
        }
    }
}

/// One idle-worker iteration: open, read `warmup` bytes continuously (to scale the
/// prefetch window up), hold idle for [`IDLE_HOLD`], then close.
fn idle_cycle(
    path: &Path,
    warmup: usize,
    buf: &mut [u8],
    progress: &AtomicU64,
    latencies: &mut FileOpLatencies,
    stop: &AtomicBool,
) {
    let mut file = latencies
        .time(FileOp::Open, || File::open(path))
        .unwrap_or_else(|e| panic!("idle: open of {path:?} failed: {e:?}"));
    progress.fetch_add(1, Ordering::Relaxed);

    // Warm-up: read a prefix front-to-back so repeated part-queue drains scale the
    // read window up before we go idle and pin it.
    let mut read_total = 0usize;
    while read_total < warmup && !stop.load(Ordering::Relaxed) {
        let want = WARMUP_CHUNK.min(warmup - read_total);
        let n = latencies
            .time(FileOp::Read, || file.read(&mut buf[..want]))
            .unwrap_or_else(|e| panic!("idle: read of {path:?} failed: {e:?}"));
        if n == 0 {
            break;
        }
        read_total += n;
        progress.fetch_add(n as u64, Ordering::Relaxed);
    }

    let deadline = Instant::now() + IDLE_HOLD;
    while Instant::now() < deadline && !stop.load(Ordering::Relaxed) {
        std::thread::sleep(Duration::from_millis(500));
        progress.fetch_add(1, Ordering::Relaxed);
    }

    latencies.time(FileOp::CloseRead, || drop(file));
    progress.fetch_add(1, Ordering::Relaxed);
}
