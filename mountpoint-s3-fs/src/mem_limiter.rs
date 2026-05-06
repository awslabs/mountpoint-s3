use std::time::Instant;

use dashmap::DashMap;
use humansize::make_format;
use sysinfo::System;
use tracing::{debug, trace};

use crate::memory::PagedPool;
use crate::prefetch::{CursorId, HandleId};
use crate::sync::Arc;
use crate::sync::atomic::{AtomicU64, Ordering};

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
/// 1) the memory directly reserved on the limiter by prefetcher instances (read path).
/// 2) the memory allocated in the memory pool for downloads, uploads, and disk cache.
///
/// Single instance of this struct is shared among all of the prefetchers (file handles) and uploaders.
///
/// Each file handle makes an initial reservation request with a minimal read window size of `1MiB + 128KiB` on the first
/// `read()` call. This is accepted unconditionally since we want to allow any file handle to make
/// progress even if that means going over the memory limit. Additional reservations for a file handle arise when the
/// backpressure read window is incremented to fetch more data from underlying part streams. Those reservations may be
/// rejected if there is no available memory.
///
/// Release of the reserved memory happens on one of the following events:
/// 1) the memory pool allocates a buffer: the `on_reserve` callback decrements `mem_reserved` by the
///    allocated size, converting the reservation from "intent" to "actual allocation" tracked by the pool.
/// 2) the prefetcher is destroyed (`BackpressureController` will be dropped and `release_cursor` will
///    release any remaining unallocated reservation for that cursor).
///
/// Incremental uploader instances check available memory before allocating buffers to queue append
/// requests. Under memory pressure, each instance will limit to a single buffer.
#[derive(Debug)]
pub struct MemoryLimiter {
    mem_limit: u64,
    /// Global total of reserved memory (lock-free). Used in budget checks (try_reserve, available_mem).
    mem_reserved: Arc<AtomicU64>,
    /// Per-cursor reservation tracking. Keyed by CursorId (unique per BackpressureController
    /// lifetime) so that late on_reserve callbacks from cancelled CRT meta-requests cannot
    /// incorrectly decrement a re-created entry for the same handle.
    mem_reserved_per_cursor: Arc<DashMap<CursorId, Arc<AtomicU64>>>,
    /// Counter for generating unique [CursorId]s.
    next_cursor_id: AtomicU64,
    /// Additional reserved memory for other non-buffer usage like storing metadata
    additional_mem_reserved: u64,
    /// Memory pool used by the S3 client and disk cache.
    /// We rely on the pool's stats to account for all buffer allocations (e.g. GetObject, DiskCache, PutObject buffers).
    pool: PagedPool,
    /// Per-handle active read tracking. When a FUSE read is in progress for a handle,
    /// the requested range is stored here. Absence means the handle is speculative.
    active_reads: DashMap<HandleId, ActiveRead>,
}

impl MemoryLimiter {
    pub fn new(pool: PagedPool, mem_limit: u64) -> Self {
        let min_reserved = 128 * 1024 * 1024;
        let additional_mem_reserved = (mem_limit / 8).max(min_reserved);
        let formatter = make_format(humansize::BINARY);
        debug!(
            "target memory usage is {} with {} reserved memory",
            formatter(mem_limit),
            formatter(additional_mem_reserved)
        );
        let mem_reserved = Arc::new(AtomicU64::new(0));
        let mem_reserved_cb: Arc<AtomicU64> = mem_reserved.clone();
        let mem_reserved_per_cursor: Arc<DashMap<CursorId, Arc<AtomicU64>>> = Arc::new(DashMap::new());
        let mem_reserved_per_cursor_cb = mem_reserved_per_cursor.clone();
        pool.set_on_reserve(Arc::new(move |bytes, cursor_id| {
            Self::on_pool_reserve(bytes, cursor_id, &mem_reserved_cb, &mem_reserved_per_cursor_cb);
        }));
        Self {
            pool,
            mem_limit,
            mem_reserved,
            mem_reserved_per_cursor,
            next_cursor_id: AtomicU64::new(1),
            additional_mem_reserved,
            active_reads: DashMap::new(),
        }
    }

    /// Reserve the memory for future uses. Always succeeds, even if it means going beyond
    /// the configured memory limit.
    pub fn reserve(&self, cursor_id: CursorId, area: BufferArea, size: u64) {
        self.add_reservation(cursor_id, size);
        metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).increment(size as f64);
    }

    /// Reserve the memory for future uses. If there is not enough memory returns `false`.
    pub fn try_reserve(&self, cursor_id: CursorId, area: BufferArea, size: u64) -> bool {
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
                    self.mem_reserved_per_cursor
                        .entry(cursor_id)
                        .or_default()
                        .fetch_add(size, Ordering::SeqCst);
                    metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).increment(size as f64);
                    metrics::histogram!("mem.reserve_latency_us", "area" => area.as_str())
                        .record(start.elapsed().as_micros() as f64);
                    return true;
                }
                Err(current) => mem_reserved = current, // another thread updated the atomic before us, trying again
            }
        }
    }

    /// Release all remaining reservation for a cursor and remove it from tracking.
    pub fn release_cursor(&self, cursor_id: CursorId, area: BufferArea) {
        if let Some((_, reservation)) = self.mem_reserved_per_cursor.remove(&cursor_id) {
            let remaining = reservation.swap(0, Ordering::SeqCst);
            self.mem_reserved.fetch_sub(remaining, Ordering::SeqCst);
            metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).decrement(remaining as f64);
        }
    }

    /// Generate a new unique [CursorId] for per-cursor memory tracking.
    pub fn next_cursor_id(&self) -> CursorId {
        CursorId::new_from_raw(self.next_cursor_id.fetch_add(1, Ordering::Relaxed))
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

    /// Increment both the global total and the per-cursor reservation.
    fn add_reservation(&self, cursor_id: CursorId, size: u64) {
        self.mem_reserved.fetch_add(size, Ordering::SeqCst);
        self.mem_reserved_per_cursor
            .entry(cursor_id)
            .or_default()
            .fetch_add(size, Ordering::SeqCst);
    }

    /// Called by the pool on every buffer allocation. For download buffers with a known cursor,
    /// this converts reservation from "intent" (`mem_reserved`) to "actual allocation" (pool stats)
    /// by decrementing both the global and per-cursor counters.
    ///
    /// No-op when `cursor_id` is `None` (e.g. uploads) or the cursor has already been removed
    /// by `release_cursor`.
    fn on_pool_reserve(
        bytes: usize,
        cursor_id: Option<CursorId>,
        mem_reserved: &AtomicU64,
        per_cursor: &DashMap<CursorId, Arc<AtomicU64>>,
    ) {
        let Some(cursor_id) = cursor_id else {
            return;
        };
        // Clone the Arc to release the DashMap shard lock before doing atomic operations.
        let Some(cursor_reservation) = per_cursor.get(&cursor_id).map(|r| r.value().clone()) else {
            return;
        };
        let mut current = cursor_reservation.load(Ordering::SeqCst);
        let decremented = loop {
            let new_val = current.saturating_sub(bytes as u64);
            match cursor_reservation.compare_exchange_weak(current, new_val, Ordering::SeqCst, Ordering::SeqCst) {
                Ok(_) => break current - new_val,
                Err(actual) => current = actual,
            }
        };
        mem_reserved.fetch_sub(decremented, Ordering::SeqCst);
    }

    /// Get reserved memory from the memory pool for buffers not tracked via [Self::mem_reserved].
    fn pool_mem_reserved(&self) -> u64 {
        // All pool buffer kinds are accounted for here.
        self.pool.total_reserved_bytes() as u64
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
    use crate::memory::{BufferKind, PagedPool};

    fn new_limiter() -> Arc<MemoryLimiter> {
        let pool = PagedPool::new_with_candidate_sizes([1024]);
        Arc::new(MemoryLimiter::new(pool, MINIMUM_MEM_LIMIT))
    }

    fn new_limiter_with_pool(buffer_size: usize, mem_limit: u64) -> (Arc<MemoryLimiter>, PagedPool) {
        let pool = PagedPool::new_with_candidate_sizes([buffer_size]);
        let limiter = Arc::new(MemoryLimiter::new(pool.clone(), mem_limit));
        (limiter, pool)
    }

    #[test]
    fn test_reserve_and_release_cursor() {
        let limiter = new_limiter();
        let cursor = limiter.next_cursor_id();

        limiter.reserve(cursor, BufferArea::Prefetch, 100);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 100);

        limiter.release_cursor(cursor, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(!limiter.mem_reserved_per_cursor.contains_key(&cursor));
    }

    #[test]
    fn test_pool_allocation_decrements_mem_reserved() {
        let (limiter, pool) = new_limiter_with_pool(1024, MINIMUM_MEM_LIMIT);
        let cursor = limiter.next_cursor_id();

        // Reserve 1024 bytes of intent
        limiter.reserve(cursor, BufferArea::Prefetch, 1024);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 1024);

        // Pool allocation triggers on_reserve callback, decrementing mem_reserved
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
    }

    #[test]
    fn test_reserve_pool_allocate_release_cursor() {
        let (limiter, pool) = new_limiter_with_pool(1024, MINIMUM_MEM_LIMIT);
        let cursor = limiter.next_cursor_id();

        // Reserve 2048 bytes of intent
        limiter.reserve(cursor, BufferArea::Prefetch, 2048);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 2048);

        // Pool allocates 1024 — callback decrements both global and per-cursor
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 1024);

        // release_cursor releases the remaining per-cursor balance (2048 - 1024 = 1024)
        limiter.release_cursor(cursor, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(!limiter.mem_reserved_per_cursor.contains_key(&cursor));
    }

    #[test]
    fn test_try_reserve_respects_limit() {
        let limiter = new_limiter();
        let cursor = limiter.next_cursor_id();

        // Fill up to the limit (minus additional_mem_reserved)
        let available = limiter.available_mem();
        limiter.reserve(cursor, BufferArea::Prefetch, available);

        // Should fail — no room left
        assert!(!limiter.try_reserve(cursor, BufferArea::Prefetch, 1));
    }

    #[test]
    fn test_multiple_cursors_independent() {
        let limiter = new_limiter();
        let cursor1 = limiter.next_cursor_id();
        let cursor2 = limiter.next_cursor_id();

        limiter.reserve(cursor1, BufferArea::Prefetch, 100);
        limiter.reserve(cursor2, BufferArea::Prefetch, 200);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 300);

        // Release cursor1 — only its 100 bytes
        limiter.release_cursor(cursor1, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 200);
        assert!(!limiter.mem_reserved_per_cursor.contains_key(&cursor1));

        // Cursor2 still tracked
        assert!(limiter.mem_reserved_per_cursor.contains_key(&cursor2));

        limiter.release_cursor(cursor2, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(limiter.mem_reserved_per_cursor.is_empty());
    }

    #[test]
    fn test_release_cursor_idempotent() {
        let limiter = new_limiter();
        let cursor = limiter.next_cursor_id();

        limiter.reserve(cursor, BufferArea::Prefetch, 100);
        limiter.release_cursor(cursor, BufferArea::Prefetch);

        // Second call is a no-op
        limiter.release_cursor(cursor, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
    }

    #[test]
    fn test_callback_noop_after_release_cursor() {
        // Simulates the cancellation race: on_reserve fires after release_cursor
        // removed the entry. The callback should be a no-op.
        let (limiter, pool) = new_limiter_with_pool(1024, MINIMUM_MEM_LIMIT);
        let cursor = limiter.next_cursor_id();

        limiter.reserve(cursor, BufferArea::Prefetch, 1024);
        limiter.release_cursor(cursor, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        // Late allocation for the cancelled request — cursor is gone
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor));

        // mem_reserved should stay at 0, not go negative or wrap
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
    }

    #[test]
    fn test_callback_saturates_on_over_decrement() {
        // Simulates a late callback trying to decrement more than what remains
        // in the per-cursor counter (e.g. due to a race with a new cursor reusing
        // the same entry after release).
        let (limiter, pool) = new_limiter_with_pool(1024, MINIMUM_MEM_LIMIT);
        let cursor = limiter.next_cursor_id();

        // Reserve only 512 bytes
        limiter.reserve(cursor, BufferArea::Prefetch, 512);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 512);

        // Pool allocates 1024 — callback should saturate at 512 (not underflow)
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        // release_cursor should subtract 0 (the per-cursor counter is already 0)
        limiter.release_cursor(cursor, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
    }

    #[test]
    fn test_available_mem_accounts_for_pool_allocations() {
        let (limiter, pool) = new_limiter_with_pool(1024, MINIMUM_MEM_LIMIT);
        let cursor = limiter.next_cursor_id();

        let initial_available = limiter.available_mem();

        // Reserve intent — available decreases
        limiter.reserve(cursor, BufferArea::Prefetch, 1024);
        assert_eq!(limiter.available_mem(), initial_available - 1024);

        // Pool allocates (on_reserve converts intent to pool stats) — available stays the same
        // because mem_reserved decreases by 1024 while pool stats increase by 1024.
        let buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert_eq!(limiter.available_mem(), initial_available - 1024);

        // Drop the buffer — pool stats decrease, available goes back up
        drop(buffer);
        assert_eq!(limiter.available_mem(), initial_available);
    }

    #[test]
    fn test_upload_allocation_does_not_affect_mem_reserved() {
        let (limiter, pool) = new_limiter_with_pool(1024, MINIMUM_MEM_LIMIT);

        let initial_available = limiter.available_mem();
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        // Upload allocates without cursor_id — should not touch mem_reserved
        let buffer = pool.get_buffer_mut(1024, BufferKind::Append, None);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        // But available_mem should decrease (pool stats increased)
        assert_eq!(limiter.available_mem(), initial_available - 1024);

        // Drop the buffer — available goes back up
        drop(buffer);
        assert_eq!(limiter.available_mem(), initial_available);
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
