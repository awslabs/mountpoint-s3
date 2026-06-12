//! Churn worker: repeatedly open a random key from a shared object pool, read it fully,
//! close. Used to exercise high open/close churn under memory pressure.

use std::path::Path;
use std::sync::atomic::{AtomicBool, AtomicU64, Ordering};

use crate::stress::harness::{FileOpLatencies, Worker};
use crate::stress::test_objects::SHARED_OBJECTS_PREFIX;

use super::common::{SharedObjectPool, read_to_eof_once};

/// A worker that, on each iteration, picks a pseudo-random key from `pool` and reads
/// it to EOF.
pub struct Churn {
    pub pool: SharedObjectPool,
}

impl Worker for Churn {
    fn kind(&self) -> &'static str {
        "churn"
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
        let mut buf = vec![0u8; self.pool.size];
        let mut iter: u64 = 0;
        while !stop.load(Ordering::Relaxed) {
            iter += 1;
            let path = mount_path
                .join(SHARED_OBJECTS_PREFIX)
                .join(self.pool.pick_key(iter, instance));
            read_to_eof_once("churn", &path, &mut buf, progress, latencies, stop);
        }
    }
}
