//! `SequentialReader`: open a shared object and read it front-to-back in a loop.

use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};

use crate::stress::harness::{FileOpLatencies, Worker};
use crate::stress::test_objects::SHARED_OBJECTS_PREFIX;

use super::common::{SharedObject, read_to_eof_once};

/// The canonical 100 GiB shared object used by the `sustained_reads` and `mixed_rw`
/// scenarios.
pub const LARGE_READ_OBJECT: SharedObject = SharedObject {
    key: "read_100gib.bin",
    size: 100 * 1024 * 1024 * 1024,
};

/// A worker that repeatedly opens `target` and reads it front-to-back.
pub struct SequentialReader {
    pub target: SharedObject,
    pub chunk: usize,
}

impl Worker for SequentialReader {
    fn kind(&self) -> &'static str {
        "sequential_reader"
    }

    fn shared_objects(&self) -> Vec<(String, usize)> {
        vec![(self.target.key.to_string(), self.target.size)]
    }

    fn run(
        &self,
        _instance: usize,
        mount_path: &Path,
        progress: &AtomicU64,
        latencies: &mut FileOpLatencies,
        stop: &AtomicBool,
    ) {
        let path = mount_path.join(SHARED_OBJECTS_PREFIX).join(self.target.key);
        let mut buf = vec![0u8; self.chunk];
        while !stop.load(Ordering::Relaxed) {
            read_to_eof_once("sequential_reader", &path, &mut buf, progress, latencies, stop);
        }
    }
}
