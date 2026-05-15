//! Admission control for concurrent open-for-write file handles.
//!
//! Each open write handle should have at least one part-sized buffer's worth of memory budget for
//! forward progress — S3 multipart uploads require non-final parts to be at least 5 MiB, so this
//! is a hard floor we cannot reduce by flushing more often. This module enforces a hard cap on
//! the number of concurrently open write handles, derived from the available data-buffer budget
//! and write part size:
//!
//! ```text
//! max_concurrent_writes = data_buffer_budget / write_part_size
//! ```
//!
//! `data_buffer_budget` is `mem_limit - additional_mem_reserved`, exposed by
//! `PagedPool::data_buffer_budget`.
//!
//! Acquisition is attempted at `open()` time via [`WriteHandleLimiter::try_acquire`]; on
//! rejection the operation returns `ENOMEM`. The slot is released when the returned
//! [`WriteHandleSlot`] is dropped (typically when the file handle is closed).
//!
//! # Why this is a hard cap, and why we reject at `open()`?
//!
//! Write buffers hold the only copy of unpersisted data. Without a cap, enough concurrent writers
//! will exhaust memory and trigger the OS out-of-memory killer, losing every in-flight write the
//! application was told had succeeded. Blocking `open()` or `write()` to wait for memory isn't a
//! workable alternative either: FUSE operations share a fixed worker thread pool, and write
//! buffers are non-evictable. Buffers already dispatched to CRT for `UploadPart`/`PutObject` drain
//! on their own as those requests complete, but the per-handle "filling" buffer — the part being
//! assembled from `write()` calls, which is what this limiter reserves indirectly via slot —
//! only frees when a FUSE thread can dispatch the handle's next `write()`, `flush()`, or
//! `release()`. With the pool exhausted on blocked operations, those calls can't run, so filling
//! buffers never drain — the mount deadlocks.
//!
//! Rejecting at `open()` fails fast at a natural retry boundary, before any data exists. The
//! remedy is to raise `--memory-target` or lower `--write-part-size`.

use thiserror::Error;
use tracing::warn;

use crate::sync::Arc;
use crate::sync::atomic::{AtomicUsize, Ordering};

/// Error returned by [`WriteHandleLimiter::try_acquire`] when the cap on concurrent write handles
/// has been reached.
#[derive(Debug, Clone, Copy, Error)]
#[error("write handle limit reached (max {max})")]
pub struct WriteHandleLimitError {
    pub max: usize,
    pub mem_limit_mib: u64,
    pub write_part_size_mib: u64,
}

/// Enforces a hard cap on the number of concurrently open-for-write file handles.
#[derive(Debug)]
pub struct WriteHandleLimiter {
    /// Maximum number of concurrent open-for-write file handles. Computed once at construction.
    max_concurrent_writes: usize,
    /// Currently open write handles. Acquired by [`Self::try_acquire`], released by
    /// [`WriteHandleSlot::drop`]. Shared with each issued [`WriteHandleSlot`] via [`Arc`] so the
    /// limiter itself can be owned by value (no outer `Arc` required).
    active: Arc<AtomicUsize>,
    /// Memory target in MiB. Cached for the rejection error message — reported using the
    /// `--memory-target` CLI flag's units so the diagnostic is directly actionable.
    mem_limit_mib: u64,
    /// Write part size in MiB. Cached for the rejection error message.
    write_part_size_mib: u64,
}

impl WriteHandleLimiter {
    /// Construct a limiter with the cap derived from the configured memory parameters.
    /// `data_buffer_budget` is the static memory budget available for data buffers, i.e.
    /// `mem_limit - additional_mem_reserved`. `mem_limit` is retained for diagnostics so that
    /// rejection errors quote the same value as the user-facing `--memory-target` flag.
    pub fn new(mem_limit: u64, data_buffer_budget: u64, write_part_size: usize) -> Self {
        let max_concurrent_writes = (data_buffer_budget / write_part_size as u64) as usize;
        let mem_limit_mib = mem_limit / (1024 * 1024);
        let write_part_size_mib = (write_part_size as u64) / (1024 * 1024);
        if max_concurrent_writes == 0 {
            warn!(
                mem_limit_mib,
                write_part_size_mib,
                "no concurrent open-for-write file handles allowed: memory target leaves no \
                 budget for write buffers. All write opens will fail with ENOMEM. Increase \
                 --memory-target or decrease --write-part-size. See CONFIGURATION.md \
                 (\"Maximum number of files open for write\") for details."
            );
        }
        Self {
            max_concurrent_writes,
            active: Arc::new(AtomicUsize::new(0)),
            mem_limit_mib,
            write_part_size_mib,
        }
    }

    /// Try to acquire a slot for a new open-for-write file handle. On success, returns a
    /// [`WriteHandleSlot`] whose `Drop` releases the slot. On failure, returns the data needed to
    /// construct a customer-facing `ENOMEM` error at the FUSE boundary.
    pub fn try_acquire(&self) -> Result<WriteHandleSlot, WriteHandleLimitError> {
        let outcome = self.active.fetch_update(Ordering::SeqCst, Ordering::SeqCst, |current| {
            if current >= self.max_concurrent_writes {
                None
            } else {
                Some(current + 1)
            }
        });
        match outcome {
            Ok(_) => Ok(WriteHandleSlot {
                active: Arc::clone(&self.active),
            }),
            Err(_) => {
                metrics::counter!("fs.write_handle_limit_exceeded").increment(1);
                Err(WriteHandleLimitError {
                    max: self.max_concurrent_writes,
                    mem_limit_mib: self.mem_limit_mib,
                    write_part_size_mib: self.write_part_size_mib,
                })
            }
        }
    }

    /// Maximum number of concurrent open-for-write handles allowed by this limiter.
    #[cfg(test)]
    pub(crate) fn max_concurrent_writes(&self) -> usize {
        self.max_concurrent_writes
    }
}

/// RAII guard for an open-for-write file handle slot acquired from a [`WriteHandleLimiter`].
/// Releases the slot when dropped.
#[derive(Debug)]
pub struct WriteHandleSlot {
    active: Arc<AtomicUsize>,
}

impl Drop for WriteHandleSlot {
    fn drop(&mut self) {
        let prev = self.active.fetch_sub(1, Ordering::SeqCst);
        debug_assert!(prev > 0, "WriteHandleSlot dropped more times than acquired");
    }
}

#[cfg(test)]
mod tests {
    use test_case::test_case;

    use super::*;

    const MIN_LIMIT: u64 = 512 * 1024 * 1024;
    const MIN_BUDGET: u64 = MIN_LIMIT - 128 * 1024 * 1024;
    const LARGE_LIMIT: u64 = 4 * 1024 * 1024 * 1024;
    const LARGE_BUDGET: u64 = LARGE_LIMIT - 512 * 1024 * 1024;
    const PART_SIZE_8MIB: usize = 8 * 1024 * 1024;
    const PART_SIZE_1GIB: usize = 1024 * 1024 * 1024;

    #[test_case(MIN_LIMIT, MIN_BUDGET, PART_SIZE_8MIB, 48; "512MiB_limit_8MiB_part")]
    #[test_case(LARGE_LIMIT, LARGE_BUDGET, PART_SIZE_8MIB, 448; "4GiB_limit_8MiB_part")]
    #[test_case(MIN_LIMIT, MIN_BUDGET, PART_SIZE_1GIB, 0; "part_larger_than_budget_saturates_to_zero")]
    fn test_max_concurrent_writes(mem_limit: u64, data_buffer_budget: u64, write_part_size: usize, expected: usize) {
        let limiter = WriteHandleLimiter::new(mem_limit, data_buffer_budget, write_part_size);
        assert_eq!(limiter.max_concurrent_writes(), expected);
        if expected == 0 {
            assert!(limiter.try_acquire().is_err());
        }
    }

    #[test]
    fn test_try_acquire_caps_at_max() {
        let limiter = WriteHandleLimiter::new(MIN_LIMIT, MIN_BUDGET, PART_SIZE_8MIB);
        let max = limiter.max_concurrent_writes();

        let mut slots = Vec::new();
        for _ in 0..max {
            slots.push(limiter.try_acquire().expect("acquire should succeed within cap"));
        }
        let err = limiter.try_acquire().expect_err("acquire beyond cap should fail");
        assert_eq!(err.max, max);
    }

    #[test]
    fn test_release_allows_reacquire() {
        let limiter = WriteHandleLimiter::new(MIN_LIMIT, MIN_BUDGET, PART_SIZE_8MIB);
        let max = limiter.max_concurrent_writes();

        let mut slots: Vec<WriteHandleSlot> = (0..max)
            .map(|_| limiter.try_acquire().expect("acquire should succeed"))
            .collect();
        assert!(limiter.try_acquire().is_err());

        slots.pop(); // drops one slot, releasing it
        slots.push(limiter.try_acquire().expect("acquire after release should succeed"));
        assert!(limiter.try_acquire().is_err());
    }

    #[test]
    fn test_try_acquire_concurrent_no_overshoot() {
        let limiter = Arc::new(WriteHandleLimiter::new(MIN_LIMIT, MIN_BUDGET, PART_SIZE_8MIB));
        let max = limiter.max_concurrent_writes();

        let threads: Vec<_> = (0..max * 4)
            .map(|_| {
                let limiter = limiter.clone();
                std::thread::spawn(move || limiter.try_acquire().ok())
            })
            .collect();
        let successes: Vec<_> = threads.into_iter().filter_map(|t| t.join().unwrap()).collect();
        assert_eq!(successes.len(), max, "exactly `max` threads should succeed");
        assert!(limiter.try_acquire().is_err());
    }
}
