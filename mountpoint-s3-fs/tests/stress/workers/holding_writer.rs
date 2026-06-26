use std::fs::File;
use std::io::Write;
use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};
use std::time::{Duration, Instant};

use crate::stress::harness::{FileOp, FileOpLatencies, Worker};
use crate::stress::test_objects;

const WRITE_CHUNK: usize = 8 * 1024 * 1024; // 8 MiB — matches default part size

/// A worker that creates a fresh object, writes `write_before_hold` bytes, then holds the handle
/// open for `hold` before closing and starting over.
pub struct HoldingWriter {
    /// Scenario label used as the ephemeral-key scenario segment.
    pub scope: &'static str,
    /// Total bytes to write before holding.
    pub write_before_hold: usize,
    /// How long to hold the handle open before closing.
    pub hold: Duration,
}

impl Worker for HoldingWriter {
    fn kind(&self) -> &'static str {
        "holding_writer"
    }

    fn run(
        &self,
        instance: usize,
        mount_path: &Path,
        progress: &AtomicU64,
        latencies: &mut FileOpLatencies,
        stop: &AtomicBool,
    ) {
        let chunk = vec![0xC3u8; WRITE_CHUNK];
        let mut iter: u64 = 0;
        while !stop.load(Ordering::Relaxed) {
            iter += 1;
            let key = test_objects::ephemeral_key(self.scope, &format!("h{instance:03}_i{iter:06}.bin"));
            let path = mount_path.join(&key);

            let mut file = latencies
                .time(FileOp::Open, || File::create(&path))
                .unwrap_or_else(|e| panic!("{}: holding_writer {instance}: create failed: {e:?}", self.scope));
            progress.fetch_add(1, Ordering::Relaxed);

            let mut written = 0usize;
            while written < self.write_before_hold && !stop.load(Ordering::Relaxed) {
                let n = (self.write_before_hold - written).min(chunk.len());
                latencies
                    .time(FileOp::Write, || file.write_all(&chunk[..n]))
                    .unwrap_or_else(|e| panic!("{}: holding_writer {instance}: write failed: {e:?}", self.scope));
                written += n;
                progress.fetch_add(n as u64, Ordering::Relaxed);
            }

            // Hold the handle (and its pinned trailing part buffer) open, ticking progress so the
            // watchdog does not flag us. Only a starved reader should stall.
            let deadline = Instant::now() + self.hold;
            while Instant::now() < deadline && !stop.load(Ordering::Relaxed) {
                std::thread::sleep(Duration::from_millis(500));
                progress.fetch_add(1, Ordering::Relaxed);
            }

            latencies
                .time(FileOp::CloseWrite, || file.sync_all())
                .unwrap_or_else(|e| panic!("{}: holding_writer {instance}: sync_all failed: {e:?}", self.scope));
            drop(file);
            progress.fetch_add(1, Ordering::Relaxed);
            let _ = std::fs::remove_file(&path);
        }
    }
}
