use std::time::Instant;

use dashmap::DashMap;
use humansize::make_format;
use sysinfo::System;
use tracing::{debug, trace};

use crate::prefetch::CursorId;
use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::{Arc, Mutex, Weak};

use super::PagedPool;
use super::stats::PoolStats;

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

/// `MemoryLimiter` tracks memory used by Mountpoint and makes decisions if a new memory reservation request can be accepted.
/// Currently, there are two metrics we take into account:
/// 1) the memory directly reserved on the limiter by prefetcher instances (read path).
/// 2) the memory allocated in the memory pool for downloads, uploads, and disk cache.
///
/// Single instance of this struct is shared among all of the prefetchers (file handles) and uploaders.
///
/// Each cursor makes an initial reservation request with a minimal read window size of `1MiB + 128KiB` when
/// it is created. This is accepted unconditionally since we want to allow any cursor to make
/// progress even if that means going over the memory limit. Additional reservations for a cursor arise when the
/// backpressure read window is incremented to fetch more data from underlying part streams. Those reservations may be
/// rejected if there is no available memory.
///
/// Release of the reserved memory happens on one of the following events:
/// 1) the memory pool allocates a buffer: `on_pool_reserve` decrements `mem_reserved` by the
///    allocated size, converting the reservation from "intent" to "actual allocation" tracked by the pool.
/// 2) the cursor is destroyed (`BackpressureController` will be dropped and `release_cursor` will
///    release any remaining unallocated reservation for that cursor).
///
/// Incremental uploader instances check available memory before allocating buffers to queue append
/// requests. Under memory pressure, each instance will limit to a single buffer.
#[derive(Debug)]
pub struct MemoryLimiter {
    mem_limit: u64,
    /// Global total of reserved memory (lock-free). Used in budget checks.
    mem_reserved: Arc<AtomicU64>,
    /// Unified per-cursor state. Cursors own a strong reference to their state.
    cursors: Arc<DashMap<CursorId, Weak<CursorState>>>,
    /// Counter for generating unique [CursorId]s.
    next_cursor_id: AtomicU64,
    /// Additional reserved memory for other non-buffer usage like storing metadata
    additional_mem_reserved: u64,
}

impl MemoryLimiter {
    pub fn new(mem_limit: u64) -> Self {
        let min_reserved = 128 * 1024 * 1024;
        let additional_mem_reserved = (mem_limit / 8).max(min_reserved);
        let formatter = make_format(humansize::BINARY);
        debug!(
            "target memory usage is {} with {} reserved memory",
            formatter(mem_limit),
            formatter(additional_mem_reserved)
        );
        Self {
            mem_limit,
            mem_reserved: Default::default(),
            cursors: Default::default(),
            next_cursor_id: AtomicU64::new(1),
            additional_mem_reserved,
        }
    }

    /// Reserve the memory for future uses. Always succeeds, even if it means going beyond
    /// the configured memory limit.
    fn reserve(&self, area: BufferArea, size: u64) {
        self.mem_reserved.fetch_add(size, Ordering::SeqCst);
        metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).increment(size as f64);
    }

    /// Reserve the memory for future uses. If there is not enough memory returns `false`.
    fn try_reserve(&self, area: BufferArea, size: u64, stats: &PoolStats) -> bool {
        let start = Instant::now();
        let mut mem_reserved = self.mem_reserved.load(Ordering::SeqCst);
        loop {
            let new_mem_reserved = mem_reserved.saturating_add(size);
            let pool_mem_reserved = self.pool_mem_reserved(stats);
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

    /// Release all remaining reservation for a cursor and remove it from tracking.
    fn release_cursor(&self, cursor_id: CursorId, cursor_reserved: &AtomicU64) {
        if self.cursors.remove(&cursor_id).is_some() {
            let remaining = cursor_reserved.swap(0, Ordering::SeqCst);
            self.mem_reserved.fetch_sub(remaining, Ordering::SeqCst);
            metrics::gauge!("mem.bytes_reserved", "area" => BufferArea::Prefetch.as_str()).decrement(remaining as f64);
        }
    }

    /// Create a new cursor, insert its state into the map, and return the shared state handle.
    pub fn create_cursor(&self, pool: &PagedPool) -> CursorHandle {
        let id = CursorId::new_from_raw(self.next_cursor_id.fetch_add(1, Ordering::Relaxed));
        let state = Arc::new(CursorState::new(pool.clone(), id));
        self.cursors.insert(id, Arc::downgrade(&state));
        CursorHandle { state }
    }

    /// Query available memory tracked by the memory limiter.
    pub fn available_mem(&self, stats: &PoolStats) -> u64 {
        let mem_reserved = self.mem_reserved.load(Ordering::SeqCst);
        let pool_mem_reserved = self.pool_mem_reserved(stats);
        self.mem_limit
            .saturating_sub(mem_reserved)
            .saturating_sub(pool_mem_reserved)
            .saturating_sub(self.additional_mem_reserved)
    }

    /// Check if the given cursor has an active read overlapping the specified range.
    pub fn has_active_read_in_range(&self, cursor_id: CursorId, offset: u64, size: usize) -> bool {
        // The weak reference fails to upgrade iff the cursor has already been dropped, which means
        // it has no active read.
        self.cursors
            .get(&cursor_id)
            .and_then(|r| r.upgrade())
            .and_then(|s| s.active_read.lock().unwrap().map(|r| r.overlaps(offset, size)))
            .unwrap_or(false)
    }

    /// Called by the pool on every buffer allocation. For download buffers with a known cursor,
    /// this converts reservation from "intent" (`mem_reserved`) to "actual allocation" (pool stats)
    /// by decrementing both the global and per-cursor counters.
    ///
    /// No-op when `cursor_id` is `None` (e.g. uploads) or the cursor has already been removed
    /// by `release_cursor`.
    pub fn on_pool_reserve(&self, bytes: usize, cursor_id: Option<CursorId>) {
        let Some(state) = cursor_id
            .and_then(|id| self.cursors.get(&id))
            .and_then(|r| r.value().upgrade())
        else {
            return;
        };
        let mut current = state.mem_reserved.load(Ordering::SeqCst);
        let decremented = loop {
            let new_val = current.saturating_sub(bytes as u64);
            match state
                .mem_reserved
                .compare_exchange_weak(current, new_val, Ordering::SeqCst, Ordering::SeqCst)
            {
                Ok(_) => break current - new_val,
                Err(actual) => current = actual,
            }
        };
        self.mem_reserved.fetch_sub(decremented, Ordering::SeqCst);
    }

    /// Get reserved memory from the memory pool for buffers not tracked via [Self::mem_reserved].
    fn pool_mem_reserved(&self, stats: &PoolStats) -> u64 {
        // All pool buffer kinds are accounted for here.
        stats.total_reserved_bytes() as u64
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

/// Describes an active FUSE read request for a specific cursor.
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

/// Per-cursor state shared between the memory pool's limiter,
/// the BackpressureController, and the Cursor.
#[derive(Debug)]
pub struct CursorState {
    /// The memory pool tracking this cursor.
    pool: PagedPool,
    /// The unique identifier for this cursor.
    cursor_id: CursorId,
    /// Reservation balance (bytes of intent not yet converted to pool allocations).
    mem_reserved: AtomicU64,
    /// Active FUSE read range. None when no read is in progress.
    active_read: Mutex<Option<ActiveRead>>,
}

impl CursorState {
    fn new(pool: PagedPool, cursor_id: CursorId) -> Self {
        Self {
            pool,
            cursor_id,
            mem_reserved: AtomicU64::new(0),
            active_read: Mutex::new(None),
        }
    }

    /// The unique identifier for this cursor.
    pub fn id(&self) -> CursorId {
        self.cursor_id
    }

    /// Reserve memory unconditionally. Increments both the per-cursor and global counters.
    pub fn reserve(&self, size: u64) {
        self.pool.limiter().reserve(BufferArea::Prefetch, size);
        self.mem_reserved.fetch_add(size, Ordering::SeqCst);
    }

    /// Try to reserve memory. Returns false if the budget would be exceeded.
    pub fn try_reserve(&self, size: u64) -> bool {
        if !self
            .pool
            .limiter()
            .try_reserve(BufferArea::Prefetch, size, self.pool.stats())
        {
            return false;
        }
        self.mem_reserved.fetch_add(size, Ordering::SeqCst);
        true
    }

    /// Query available memory tracked by the associated memory limiter.
    pub fn available_mem(&self) -> u64 {
        self.pool.available_mem()
    }
}

impl Drop for CursorState {
    fn drop(&mut self) {
        // The limiter holds a weak reference to `CursorState`, so this `Drop` runs when all strong
        // references are gone. `release_cursor` removes the reference and decrements the global reservation counter.
        self.pool.limiter().release_cursor(self.cursor_id, &self.mem_reserved);
    }
}

/// Handle to a CursorState. Allows to set active reads.
#[derive(Debug)]
pub struct CursorHandle {
    state: Arc<CursorState>,
}

impl CursorHandle {
    /// Id of this cursor.
    pub fn id(&self) -> CursorId {
        self.state.id()
    }

    /// The state of the cursor.
    pub fn state(&self) -> Arc<CursorState> {
        self.state.clone()
    }

    /// Record an active FUSE read. Returns a guard that clears it on drop.
    pub fn set_active_read(&self, offset: u64, size: usize) -> ActiveReadGuard {
        *self.state.active_read.lock().unwrap() = Some(ActiveRead { offset, size });
        ActiveReadGuard { state: self.state() }
    }
}

/// RAII guard that clears the active read for a cursor when dropped.
pub struct ActiveReadGuard {
    state: Arc<CursorState>,
}

impl Drop for ActiveReadGuard {
    fn drop(&mut self) {
        *self.state.active_read.lock().unwrap() = None;
    }
}

#[cfg(test)]
mod tests {
    // TODO: Consider which tests are specific to the MemoryLimiter and which are testing the whole PagedPool.

    use super::*;
    use crate::memory::{BufferKind, PagedPool};
    use crate::sync::atomic::Ordering;

    fn new_pool() -> PagedPool {
        PagedPool::config()
            .with_candidate_sizes([1024])
            .with_minimum_memory_limit()
            .build()
    }

    #[test]
    fn test_reserve_and_release_cursor() {
        let pool = new_pool();
        let limiter = pool.limiter();
        let cursor = pool.create_cursor().state();

        cursor.reserve(100);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 100);

        let cursor_id = cursor.id();
        drop(cursor);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(!limiter.cursors.contains_key(&cursor_id));
    }

    #[test]
    fn test_pool_allocation_decrements_mem_reserved() {
        let pool = new_pool();
        let limiter = pool.limiter();
        let cursor = pool.create_cursor().state();

        // Reserve 1024 bytes of intent
        cursor.reserve(1024);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 1024);

        // Pool allocation triggers on_reserve callback, decrementing mem_reserved
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor.id()));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
    }

    #[test]
    fn test_reserve_pool_allocate_drop() {
        let pool = new_pool();
        let limiter = pool.limiter();
        let cursor = pool.create_cursor().state();

        // Reserve 2048 bytes of intent
        cursor.reserve(2048);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 2048);

        // Pool allocates 1024 — callback decrements both global and per-cursor
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor.id()));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 1024);

        // dropping the cursor releases the remaining per-cursor balance (2048 - 1024 = 1024)
        let cursor_id = cursor.id();
        drop(cursor);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(!limiter.cursors.contains_key(&cursor_id));
    }

    #[test]
    fn test_try_reserve_respects_limit() {
        let pool = new_pool();
        let cursor = pool.create_cursor().state();

        // Fill up to the limit (minus additional_mem_reserved)
        let available = pool.available_mem();
        cursor.reserve(available);

        // Should fail — no room left
        assert!(!cursor.try_reserve(1));
    }

    #[test]
    fn test_multiple_cursors_independent() {
        let pool = new_pool();
        let limiter = pool.limiter();
        let cursor1 = pool.create_cursor().state();
        let cursor2 = pool.create_cursor().state();

        cursor1.reserve(100);
        cursor2.reserve(200);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 300);

        // Release cursor1 — only its 100 bytes
        let cursor1_id = cursor1.id();
        drop(cursor1);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 200);
        assert!(!limiter.cursors.contains_key(&cursor1_id));

        // Cursor2 still tracked
        assert!(limiter.cursors.contains_key(&cursor2.id()));

        drop(cursor2);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(limiter.cursors.is_empty());
    }

    #[test]
    fn test_on_pool_reserve_noop_after_release_cursor() {
        // Simulates the cancellation race: on_reserve fires after release_cursor
        // removed the entry. The callback should be a no-op.
        let pool = PagedPool::config()
            .with_candidate_sizes([1024])
            .with_minimum_memory_limit()
            .build();
        let limiter = pool.limiter();
        let cursor = pool.create_cursor().state();

        cursor.reserve(1024);
        let cursor_id = cursor.id();
        drop(cursor);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        assert!(!limiter.cursors.contains_key(&cursor_id));

        // Late allocation for the cancelled request — cursor is gone
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor_id));

        // mem_reserved should stay at 0, not go negative or wrap
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
    }

    #[test]
    fn test_on_pool_reserve_saturates_on_over_decrement() {
        let pool = PagedPool::config()
            .with_candidate_sizes([1024])
            .with_minimum_memory_limit()
            .build();
        let limiter = pool.limiter();
        let cursor = pool.create_cursor().state();

        // Reserve only 512 bytes
        cursor.reserve(512);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 512);

        // Pool allocates 1024 — on_pool_reserve should saturate at 512 (not underflow)
        let cursor_id = cursor.id();
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor_id));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        // dropping the cursor should subtract 0 (the per-cursor counter is already 0)
        drop(cursor);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(!limiter.cursors.contains_key(&cursor_id));
    }

    #[test]
    fn test_available_mem_accounts_for_pool_allocations() {
        let pool = PagedPool::config()
            .with_candidate_sizes([1024])
            .with_minimum_memory_limit()
            .build();
        let limiter = pool.limiter();
        let cursor = pool.create_cursor().state();
        let stats = pool.stats();

        let initial_available = limiter.available_mem(stats);

        // Reserve intent — available decreases
        cursor.reserve(1024);
        assert_eq!(limiter.available_mem(stats), initial_available - 1024);

        // Pool allocates (on_pool_reserve converts intent to pool stats) — available stays the same
        // because mem_reserved decreases by 1024 while pool stats increase by 1024.
        let buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor.id()));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert_eq!(limiter.available_mem(stats), initial_available - 1024);

        // Drop the buffer — pool stats decrease, available goes back up
        drop(buffer);
        assert_eq!(limiter.available_mem(stats), initial_available);
    }

    #[test]
    fn test_upload_allocation_does_not_affect_mem_reserved() {
        let pool = PagedPool::config()
            .with_candidate_sizes([1024])
            .with_minimum_memory_limit()
            .build();
        let limiter = pool.limiter();
        let stats = pool.stats();

        let initial_available = limiter.available_mem(stats);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        // Upload allocates without cursor_id — should not touch mem_reserved
        let buffer = pool.get_buffer_mut(1024, BufferKind::Append, None);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        // But available_mem should decrease (pool stats increased)
        assert_eq!(limiter.available_mem(stats), initial_available - 1024);

        // Drop the buffer — available goes back up
        drop(buffer);
        assert_eq!(limiter.available_mem(stats), initial_available);
    }

    #[test]
    fn test_active_read_overlap_detection() {
        let pool = new_pool();
        let limiter = pool.limiter();
        let cursor = pool.create_cursor();
        let cursor_id = cursor.id();

        // Active read at [1000, 5096)
        let _guard = cursor.set_active_read(1000, 4096);

        // Overlapping ranges → true
        assert!(limiter.has_active_read_in_range(cursor_id, 1000, 4096)); // exact match
        assert!(limiter.has_active_read_in_range(cursor_id, 500, 1000)); // overlap from left
        assert!(limiter.has_active_read_in_range(cursor_id, 5000, 1000)); // overlap from right
        assert!(limiter.has_active_read_in_range(cursor_id, 2000, 100)); // contained

        // Non-overlapping ranges → false
        assert!(!limiter.has_active_read_in_range(cursor_id, 0, 500)); // before
        assert!(!limiter.has_active_read_in_range(cursor_id, 5096, 1000)); // after

        // Different cursor → false
        let other_cursor = pool.create_cursor();
        assert!(!limiter.has_active_read_in_range(other_cursor.id(), 1000, 4096));
    }

    /// Simulates the allocation queue's perspective: one thread holds an active read
    /// while another thread queries whether a given range is active.
    #[test]
    fn test_query_active_read_from_another_thread() {
        let pool = new_pool();
        let limiter = pool.limiter();
        let cursor = pool.create_cursor();

        let guard = cursor.set_active_read(1000, 4096);

        {
            let pool = pool.clone();
            let cursor_id = cursor.id();
            let query_thread = std::thread::spawn(move || {
                let limiter = pool.limiter();
                // Allocation for the active range → high priority
                assert!(limiter.has_active_read_in_range(cursor_id, 1000, 4096));
                // Allocation for a prefetch-ahead range → low priority
                assert!(!limiter.has_active_read_in_range(cursor_id, 50000, 4096));
            });
            query_thread.join().unwrap();
        }

        drop(guard);
        assert!(!limiter.has_active_read_in_range(cursor.id(), 1000, 4096));
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
