//! Writer worker: repeatedly create a fresh ephemeral object, stream `object_size` bytes
//! to it, then remove it.

use std::fs::File;
use std::io::Write;
use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};

use crate::stress::harness::{FileOp, FileOpLatencies, Worker};
use crate::stress::test_objects;

/// A worker that streams `object_size` bytes into a fresh ephemeral key every iteration.
/// `scope` is the scenario label used as the ephemeral-key scenario segment (e.g.
/// `"sustained_writes"`, `"mixed_rw"`) — it ends up in the S3 key so concurrent scenarios
/// do not collide.
pub struct Writer {
    pub scope: &'static str,
    pub object_size: usize,
    pub chunk: usize,
}

impl Worker for Writer {
    fn kind(&self) -> &'static str {
        "writer"
    }

    fn run(
        &self,
        instance: usize,
        mount_path: &Path,
        progress: &AtomicU64,
        latencies: &mut FileOpLatencies,
        stop: &AtomicBool,
    ) {
        let chunk = vec![0xC3u8; self.chunk];
        let mut iter: u64 = 0;
        while !stop.load(Ordering::Relaxed) {
            iter += 1;
            let key = test_objects::ephemeral_key(self.scope, &format!("w{instance:03}_i{iter:06}.bin"));
            let path = mount_path.join(&key);

            let mut file = latencies
                .time(FileOp::Open, || File::create(&path))
                .unwrap_or_else(|e| {
                    panic!("{}: writer {instance}: create failed: {e:?}", self.scope);
                });
            progress.fetch_add(1, Ordering::Relaxed);

            let mut written = 0usize;
            while written < self.object_size && !stop.load(Ordering::Relaxed) {
                let n = (self.object_size - written).min(self.chunk);
                latencies
                    .time(FileOp::Write, || file.write_all(&chunk[..n]))
                    .unwrap_or_else(|e| {
                        panic!("{}: writer {instance}: write failed: {e:?}", self.scope);
                    });
                written += n;
                progress.fetch_add(n as u64, Ordering::Relaxed);
            }
            // `sync_all` (not implicit `drop`) so MPU-complete errors surface — `Drop for File`
            // swallows the `close(2)` return value.
            latencies
                .time(FileOp::CloseWrite, || file.sync_all())
                .unwrap_or_else(|e| {
                    panic!("{}: writer {instance}: sync_all failed: {e:?}", self.scope);
                });
            drop(file);
            progress.fetch_add(1, Ordering::Relaxed);
            let _ = std::fs::remove_file(&path);
        }
    }
}
