use std::{sync::atomic::Ordering, time::Instant};

use dashmap::DashMap;
use humansize::make_format;
use metrics::atomics::AtomicU64;
use sysinfo::System;
use tracing::{debug, trace};

use crate::memory::{BufferKind, PagedPool};
use crate::prefetch::HandleId;
use crate::sync::Arc;

pub const MINIMUM_MEM_LIMIT: u64 = 512 * 1024 * 1024;

/// Buffer areas that can be managed by the memory limiter. This is used for updating metrics.
#[derive(Debug)]
pub enum BufferArea {
    Upload,
    Prefetch,
}

impl BufferArea {
    pub fn as_str(&self) -> &'static str {
        match self {
            BufferArea::Upload => "upload",
            BufferArea::Prefetch => "prefetch",
        }
    }
}

/// Describes an active FUSE read request for a specific file handle.
/// Used by the pruning logic to determine which buffers are high priority
/// (actively being waited on by a user) vs. speculative (prefetched ahead).
#[derive(Debug, Clone, Copy)]
pub struct ActiveRead {
    /// Start offset of the read in the file.
    pub offset: u64,
    /// Size of the read in bytes.
    pub size: usize,
}

impl ActiveRead {
    /// Check if this active read overlaps with the given range.
    pub fn overlaps(&self, offset: u64, size: usize) -> bool {
        let self_end = self.offset + self.size as u64;
        let other_end = offset + size as u64;
        self.offset < other_end && offset < self_end
    }
}

/// RAII guard that clears the active read for a handle when dropped.
/// Ensures the active read is always cleared, even on early returns or panics.
pub struct ActiveReadGuard {
    mem_limiter: Arc<MemoryLimiter>,
    handle_id: HandleId,
}

impl Drop for ActiveReadGuard {
    fn drop(&mut self) {
        self.mem_limiter.clear_active_read(self.handle_id);
    }
}

/// `MemoryLimiter` tracks memory used by Mountpoint and makes decisions if a new memory reservation request can be accepted.
/// Currently, there are two metrics we take into account:
/// 1) the memory directly reserved on the limiter by prefetcher and (incremental) uploader instances.
/// 2) the memory reserved on the memory pool by the CRT client for any other request (currently, for multi-part uploads,
///    triggered by atomic uploader instances).
///
/// Single instance of this struct is shared among all of the prefetchers (file handles) and (incremental) uploaders.
///
/// Each file handle upon creation makes an initial reservation request with a minimal read window size of `1MiB + 128KiB`. This
/// is accepted unconditionally since we want to allow any file handle to make progress even if that means going over the memory
/// limit. Additional reservations for a file handle arise when the backpressure read window is incremented to fetch more data
/// from underlying part streams. Those reservations may be rejected if there is no available memory.
///
/// Release of the reserved memory happens on one of the following events:
/// 1) prefetcher is destroyed (`RequestTask` will be dropped and remaining data in the backpressure read window will be released).
/// 2) data is moved out of the part queue.
///
/// Following is the visualisation of a single prefetcher instance's data stream:
///
/// backwards_seek_start        part_queue_start         in_part_queue                 window_end_offset      preferred_window_end_offset
///  │                              │                           │                               │                            │
/// ─┼──────────────────────────────┼───────────────────────────┼───────────────────────────────┼────────────────────────────┼───────────-►
///  │                              │                                                           │
///  └──────────────────────────────┤                                                           │
///  mem reserved by the part queue │                                                           │
///                                 └───────────────────────────────────────────────────────────┤
///                                     mem reserved by the backpressure controller
///                                     (on `BackpressureFeedbackEvent`)
///
/// Incremental uploder instances may try to reserve multiple buffers to queue append requests. Under memory pressure,
/// each instance will limit to a single buffer.
#[derive(Debug)]
pub struct MemoryLimiter {
    mem_limit: u64,
    /// Reserved memory for allocations we are tracking, such as buffers we allocate for prefetching.
    /// The memory may not be used yet but has been reserved.
    mem_reserved: AtomicU64,
    /// Additional reserved memory for other non-buffer usage like storing metadata
    additional_mem_reserved: u64,
    /// Memory pool used by the S3 client.
    /// Since we don't directly control memory usage of multi-part uploads (atomic uploader), we will
    /// rely on the pool's stats for PutObject buffers and adjust the prefetcher read window accordingly.
    pool: PagedPool,
    /// Per-handle active read tracking. When a FUSE read is in progress for a handle,
    /// the requested range is stored here. Absence means the handle is speculative.
    active_reads: DashMap<HandleId, ActiveRead>,
}

impl MemoryLimiter {
    pub fn new(pool: PagedPool, mem_limit: u64) -> Self {
        let min_reserved = 128 * 1024 * 1024;
        let reserved_mem = (mem_limit / 8).max(min_reserved);
        let formatter = make_format(humansize::BINARY);
        debug!(
            "target memory usage is {} with {} reserved memory",
            formatter(mem_limit),
            formatter(reserved_mem)
        );
        Self {
            pool,
            mem_limit,
            mem_reserved: AtomicU64::new(0),
            additional_mem_reserved: reserved_mem,
            active_reads: DashMap::new(),
        }
    }

    /// Reserve the memory for future uses. Always succeeds, even if it means going beyond
    /// the configured memory limit.
    pub fn reserve(&self, area: BufferArea, size: u64) {
        self.mem_reserved.fetch_add(size, Ordering::SeqCst);
        metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).increment(size as f64);
    }

    /// Reserve the memory for future uses. If there is not enough memory returns `false`.
    pub fn try_reserve(&self, area: BufferArea, size: u64) -> bool {
        let start = Instant::now();
        let mut mem_reserved = self.mem_reserved.load(Ordering::SeqCst);
        loop {
            let new_mem_reserved = mem_reserved.saturating_add(size);
            let pool_mem_reserved = self.pool_mem_reserved();
            let new_total_mem_usage = new_mem_reserved
                .saturating_add(pool_mem_reserved)
                .saturating_add(self.additional_mem_reserved);
            if new_total_mem_usage > self.mem_limit {
                trace!(new_total_mem_usage, "not enough memory to reserve");
                metrics::histogram!("mem.reserve_latency_us", "area" => area.as_str())
                    .record(start.elapsed().as_micros() as f64);
                return false;
            }
            // Check that the value we have read is still the same before updating it
            match self.mem_reserved.compare_exchange_weak(
                mem_reserved,
                new_mem_reserved,
                Ordering::SeqCst,
                Ordering::SeqCst,
            ) {
                Ok(_) => {
                    metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).increment(size as f64);
                    metrics::histogram!("mem.reserve_latency_us", "area" => area.as_str())
                        .record(start.elapsed().as_micros() as f64);
                    return true;
                }
                Err(current) => mem_reserved = current, // another thread updated the atomic before us, trying again
            }
        }
    }

    /// Release the reserved memory.
    pub fn release(&self, area: BufferArea, size: u64) {
        self.mem_reserved.fetch_sub(size, Ordering::SeqCst);
        metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).decrement(size as f64);
    }

    /// Query available memory tracked by the memory limiter.
    pub fn available_mem(&self) -> u64 {
        let mem_reserved = self.mem_reserved.load(Ordering::SeqCst);
        let pool_mem_reserved = self.pool_mem_reserved();
        self.mem_limit
            .saturating_sub(mem_reserved)
            .saturating_sub(pool_mem_reserved)
            .saturating_sub(self.additional_mem_reserved)
    }

    /// Record that a FUSE read is active for the given handle at the specified range.
    /// Returns a guard that will clear the active read when dropped.
    pub fn set_active_read(self: &Arc<Self>, handle_id: HandleId, offset: u64, size: usize) -> ActiveReadGuard {
        self.active_reads.insert(handle_id, ActiveRead { offset, size });
        ActiveReadGuard {
            mem_limiter: Arc::clone(self),
            handle_id,
        }
    }

    /// Clear the active read for the given handle (read completed or errored).
    fn clear_active_read(&self, handle_id: HandleId) {
        self.active_reads.remove(&handle_id);
    }

    /// Check if the given handle has an active read overlapping the specified range.
    pub fn has_active_read_in_range(&self, handle_id: HandleId, offset: u64, size: usize) -> bool {
        self.active_reads
            .get(&handle_id)
            .map(|r| r.overlaps(offset, size))
            .unwrap_or(false)
    }

    /// Get reserved memory from the memory pool for buffers not tracked by this limiter.
    fn pool_mem_reserved(&self) -> u64 {
        // The limiter already tracks buffers from
        // * the prefetcher (GetObject and DiskCache),
        // * the incremental uploader (Append).
        //
        // Here we fetch the pool's stats for the remaining kinds:
        // * PutObject (multi-part uploads),
        // * Other (currently not used).
        (self.pool.reserved_bytes(BufferKind::PutObject) + self.pool.reserved_bytes(BufferKind::Other)) as u64
    }
}

/// Returns the effective total memory available to this process in bytes.
///
/// On Linux, this respects cgroup memory limits when set.
/// On other platforms, returns the total physical memory.
pub fn effective_total_memory() -> u64 {
    let mut sys = System::new();
    sys.refresh_memory();
    sys.cgroup_limits()
        .map(|cg| cg.total_memory)
        .unwrap_or_else(|| sys.total_memory())
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::memory::PagedPool;

    fn new_limiter() -> Arc<MemoryLimiter> {
        let pool = PagedPool::new_with_candidate_sizes([1024]);
        Arc::new(MemoryLimiter::new(pool, MINIMUM_MEM_LIMIT))
    }

    #[test]
    fn test_active_read_overlap_detection() {
        let limiter = new_limiter();
        let handle = HandleId::new(1);

        // Active read at [1000, 5096)
        let _guard = limiter.set_active_read(handle, 1000, 4096);

        // Overlapping ranges → true
        assert!(limiter.has_active_read_in_range(handle, 1000, 4096)); // exact match
        assert!(limiter.has_active_read_in_range(handle, 500, 1000)); // overlap from left
        assert!(limiter.has_active_read_in_range(handle, 5000, 1000)); // overlap from right
        assert!(limiter.has_active_read_in_range(handle, 2000, 100)); // contained

        // Non-overlapping ranges → false
        assert!(!limiter.has_active_read_in_range(handle, 0, 500)); // before
        assert!(!limiter.has_active_read_in_range(handle, 5096, 1000)); // after

        // Different handle → false
        assert!(!limiter.has_active_read_in_range(HandleId::new(2), 1000, 4096));
    }

    /// Simulates the allocation queue's perspective: one thread holds an active read
    /// while another thread queries whether a given range is active.
    #[test]
    fn test_query_active_read_from_another_thread() {
        let limiter = new_limiter();
        let handle = HandleId::new(1);

        let guard = limiter.set_active_read(handle, 1000, 4096);

        let limiter_clone = Arc::clone(&limiter);
        let query_thread = std::thread::spawn(move || {
            // Allocation for the active range → high priority
            assert!(limiter_clone.has_active_read_in_range(handle, 1000, 4096));
            // Allocation for a prefetch-ahead range → low priority
            assert!(!limiter_clone.has_active_read_in_range(handle, 50000, 4096));
        });
        query_thread.join().unwrap();

        drop(guard);
        assert!(!limiter.has_active_read_in_range(handle, 1000, 4096));
    }

    /// When the `TEST_CGROUP_MEM_LIMIT_MB` environment variable is set (e.g. in a
    /// container started with `--memory=4g`), verify that [effective_total_memory]
    /// returns a value equal to the cgroup limit rather than the host's total RAM.
    ///
    /// This test is run by the `cgroup-mem-limit` CI job (see `.github/workflows/tests.yml`)
    /// inside a memory-limited container. Outside that job the env var is unset and the
    /// test is skipped.
    #[test]
    fn test_effective_total_memory_respects_cgroup() {
        let Ok(expected_str) = std::env::var("TEST_CGROUP_MEM_LIMIT_MB") else {
            // Nothing to check outside the dedicated CI container job.
            return;
        };
        let expected_bytes: u64 = expected_str.parse::<u64>().expect("invalid TEST_CGROUP_MEM_LIMIT_MB") * 1024 * 1024;
        let mem = effective_total_memory();
        assert_eq!(
            mem, expected_bytes,
            "effective_total_memory() returned {mem} bytes, expected exactly {expected_bytes} bytes (cgroup limit). \
             The function may not be reading the cgroup memory constraint.",
        );
    }

    /// When no cgroup memory limit is active, [effective_total_memory] should
    /// fall back to the total physical memory reported by the system.
    #[test]
    fn test_effective_total_memory_falls_back_to_system_memory() {
        let mut sys = System::new();
        sys.refresh_memory();
        if sys.cgroup_limits().is_some() {
            // A cgroup limit is active on this machine — the fallback path
            // won't be exercised, so there's nothing to assert here.
            return;
        }
        assert_eq!(
            effective_total_memory(),
            sys.total_memory(),
            "without a cgroup limit, effective_total_memory() should equal total physical memory",
        );
    }
}
