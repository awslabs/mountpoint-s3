//! Shared worker-loop helpers and dataset descriptors.

use std::fs::File;
use std::io::Read;
use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};

use crate::stress::harness::{FileOp, FileOpLatencies};

/// A single pre-uploaded shared object: the key (relative to `SHARED_OBJECTS_PREFIX`)
/// and its expected size in bytes.
#[derive(Clone, Copy, Debug)]
pub struct SharedObject {
    pub key: &'static str,
    pub size: usize,
}

/// A pool of identically-sized shared objects keyed
/// `<key_prefix>0000.bin`..`<key_prefix>{count-1:04}.bin`.
#[derive(Clone, Copy, Debug)]
pub struct SharedObjectPool {
    pub key_prefix: &'static str,
    pub count: usize,
    pub size: usize,
}

impl SharedObjectPool {
    /// Key for pool entry `index` (0-based). Panics if `index >= self.count`.
    fn key(&self, index: usize) -> String {
        assert!(
            index < self.count,
            "pool index {index} out of range (count={})",
            self.count
        );
        format!("{}{:04}.bin", self.key_prefix, index)
    }

    /// `(key, size)` entry for every key in the pool.
    pub fn manifest(&self) -> Vec<(String, usize)> {
        (0..self.count).map(|i| (self.key(i), self.size)).collect()
    }

    /// Pseudo-randomly pick a key from the pool, seeded by `iter` and `instance` so
    /// that concurrent workers pick different keys on the same iteration.
    pub fn pick_key(&self, iter: u64, instance: usize) -> String {
        let index = (iter.wrapping_mul(2_654_435_761).wrapping_add(instance as u64) as usize) % self.count;
        self.key(index)
    }
}

/// The canonical small-object pool.
pub const SMALL_OBJECT_POOL: SharedObjectPool = SharedObjectPool {
    key_prefix: "small_",
    count: 100,
    size: 4 * 1024 * 1024,
};

/// Open `path`, read it front-to-back into `buf`, close. Increments `progress` on every
/// successful open and every byte read. Returns on `stop`. Panics (with `scope` in the
/// message) on any I/O error.
pub(super) fn read_to_eof_once(
    scope: &str,
    path: &Path,
    buf: &mut [u8],
    progress: &AtomicU64,
    latencies: &mut FileOpLatencies,
    stop: &AtomicBool,
) {
    let mut file = latencies
        .time(FileOp::Open, || File::open(path))
        .unwrap_or_else(|e| panic!("{scope}: open of {path:?} failed: {e:?}"));
    progress.fetch_add(1, Ordering::Relaxed);
    loop {
        if stop.load(Ordering::Relaxed) {
            return;
        }
        let n = latencies
            .time(FileOp::Read, || file.read(buf))
            .unwrap_or_else(|e| panic!("{scope}: read of {path:?} failed: {e:?}"));
        if n == 0 {
            break;
        }
        progress.fetch_add(n as u64, Ordering::Relaxed);
    }
    latencies.time(FileOp::CloseRead, || drop(file));
}
