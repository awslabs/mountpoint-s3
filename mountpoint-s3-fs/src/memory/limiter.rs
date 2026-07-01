use std::time::Instant;

use dashmap::DashMap;
use humansize::make_format;
use sysinfo::System;
use tracing::{debug, trace};

use crate::prefetch::CursorId;
use crate::sync::atomic::{AtomicU64, AtomicUsize, Ordering};
use crate::sync::{Arc, Mutex, Weak};
use crate::util::wake_signal::WakeSignal;

use super::PagedPool;
use super::buffers::{BufferPtr, ManagedBuffer};
use super::stats::{BUFFER_KIND_COUNT, BufferKind};

pub const MINIMUM_MEM_LIMIT: usize = 512 * 1024 * 1024;

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
/// 1) the memory pool allocates a buffer: `on_pool_acquire` decrements `mem_reserved` by the
///    allocated size, converting the reservation from "intent" to "actual allocation" tracked by the pool.
/// 2) the cursor is destroyed (`BackpressureController` will be dropped and `release_cursor` will
///    release any remaining unallocated reservation for that cursor).
///
/// Incremental uploader instances check available memory before allocating buffers to queue append
/// requests. Under memory pressure, each instance will limit to a single buffer.
#[derive(Debug)]
pub struct MemoryLimiter {
    /// Target memory limit.
    mem_limit: usize,
    /// Additional reserved memory for other non-buffer usage like storing metadata
    additional_mem_reserved: usize,
    /// Memory allocated by the pool.
    allocated_bytes: AtomicUsize,
    /// Memory in use by [`BufferKind`].
    acquired_bytes: [AtomicUsize; BUFFER_KIND_COUNT],
    /// Total reserved memory. Used in budget checks.
    mem_reserved: Arc<AtomicUsize>,
    /// Unified per-cursor state. Cursors own a strong reference to their state.
    cursors: Arc<DashMap<CursorId, Weak<CursorState>>>,
    /// Counter for generating unique [CursorId]s.
    next_cursor_id: AtomicU64,
    /// Monotonic counter stamped onto a cursor's [`ReadState::Last`] whenever
    /// an active read ends, so the pruner can pick the LRU idle cursor.
    /// Pure ordering — does not represent wall-clock time.
    next_read_tick: AtomicU64,
    /// Wakes the background pruning loop's outer wait when memory pressure starts.
    /// Once the inner tick is running it polls every [`PRUNING_TICK`](super::maintenance::PRUNING_TICK)
    /// regardless.
    pruning_signal: Arc<WakeSignal>,
    /// Signal to process pending allocations.
    pending_signal: Arc<WakeSignal>,
}

impl MemoryLimiter {
    pub fn new(mem_limit: usize) -> Self {
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
            additional_mem_reserved,
            allocated_bytes: Default::default(),
            acquired_bytes: Default::default(),
            mem_reserved: Default::default(),
            cursors: Default::default(),
            next_cursor_id: AtomicU64::new(1),
            next_read_tick: AtomicU64::new(1),
            pruning_signal: Arc::new(WakeSignal::new()),
            pending_signal: Arc::new(WakeSignal::new()),
        }
    }

    /// The configured memory limit in bytes. Note this is the total memory target including
    /// non-buffer overhead, not the budget available for data buffers — see [`Self::data_buffer_budget`].
    pub fn mem_limit(&self) -> usize {
        self.mem_limit
    }

    /// The static memory budget available for data buffers, i.e. `mem_limit - additional_mem_reserved`.
    /// This is the upper bound on buffer-backed allocations and is used by
    /// [`crate::memory::WriteHandleLimiter`] to derive its cap.
    pub fn data_buffer_budget(&self) -> usize {
        self.mem_limit.saturating_sub(self.additional_mem_reserved)
    }

    /// Reserve the memory for future uses. Always succeeds, even if it means going beyond
    /// the configured memory limit.
    fn reserve(&self, area: BufferArea, size: usize) {
        self.mem_reserved.fetch_add(size, Ordering::SeqCst);
        metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).increment(size as f64);
    }

    /// Reserve the memory for future uses. If there is not enough memory returns `false`.
    fn try_reserve(&self, area: BufferArea, size: usize) -> bool {
        let start = Instant::now();
        let mut mem_reserved = self.mem_reserved.load(Ordering::SeqCst);
        loop {
            let new_mem_reserved = mem_reserved.saturating_add(size);
            let mem_in_use = self.total_acquired_bytes();
            let new_total_mem_usage = new_mem_reserved
                .saturating_add(mem_in_use)
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
    fn release_cursor(&self, cursor_id: CursorId, cursor_reserved: &AtomicUsize) {
        if self.cursors.remove(&cursor_id).is_some() {
            let remaining = cursor_reserved.swap(0, Ordering::SeqCst);
            self.mem_reserved.fetch_sub(remaining, Ordering::SeqCst);
            metrics::gauge!("mem.bytes_reserved", "area" => BufferArea::Prefetch.as_str()).decrement(remaining as f64);
        }
        self.trigger_process_pending();
    }

    /// Create a new cursor, insert its state into the map, and return the shared state handle.
    pub fn create_cursor(&self, pool: &PagedPool) -> CursorHandle {
        let id = CursorId::new_from_raw(self.next_cursor_id.fetch_add(1, Ordering::SeqCst));
        let state = Arc::new(CursorState::new(pool.clone(), id));
        self.cursors.insert(id, Arc::downgrade(&state));
        CursorHandle { state }
    }

    /// Memory that can be reserved while respecting the memory limit.
    pub fn memory_available_for_reservation(&self) -> usize {
        let mem_in_use = self.total_acquired_bytes();
        let mem_reserved = self.mem_reserved.load(Ordering::SeqCst);
        self.mem_limit
            .saturating_sub(mem_reserved)
            .saturating_sub(mem_in_use)
            .saturating_sub(self.additional_mem_reserved)
    }

    /// Reset a cursor: invoke its registered reset callback.
    pub fn request_reset(&self, cursor_id: CursorId) -> bool {
        let Some(state) = self.cursors.get(&cursor_id).and_then(|r| r.upgrade()) else {
            return false;
        };
        let reset_fn = state.reset_fn.lock().unwrap();
        let Some(f) = reset_fn.as_ref() else {
            return false;
        };
        f()
    }

    /// Check if the given cursor has an active read overlapping the specified range.
    pub fn has_active_read_in_range(&self, cursor_id: CursorId, offset: u64, size: usize) -> bool {
        // The weak reference fails to upgrade iff the cursor has already been dropped, which means
        // it has no active read.
        let Some(state) = self.cursors.get(&cursor_id).and_then(|r| r.upgrade()) else {
            return false;
        };
        state.read_state.lock().unwrap().is_active(offset, size)
    }

    /// Check if the given cursor currently has an active FUSE read in progress.
    pub fn has_active_read(&self, cursor_id: CursorId) -> bool {
        self.cursors
            .get(&cursor_id)
            .and_then(|r| r.upgrade())
            .map(|s| matches!(*s.read_state.lock().unwrap(), ReadState::Active { .. }))
            .unwrap_or(false)
    }

    /// Called by the pool on every buffer acquisition. For download buffers with a known cursor,
    /// this converts reservation from "intent" (`mem_reserved`) to "actual acquisition" (pool stats)
    /// by decrementing both the global and per-cursor counters.
    ///
    /// No-op when `cursor_id` is `None` (e.g. uploads) or the cursor has already been removed
    /// by `release_cursor`.
    pub fn on_pool_acquire(&self, bytes: usize, cursor_id: Option<CursorId>) {
        let Some(state) = cursor_id
            .and_then(|id| self.cursors.get(&id))
            .and_then(|r| r.value().upgrade())
        else {
            return;
        };
        let mut current = state.mem_reserved.load(Ordering::SeqCst);
        let decremented = loop {
            let new_val = current.saturating_sub(bytes);
            match state
                .mem_reserved
                .compare_exchange_weak(current, new_val, Ordering::SeqCst, Ordering::SeqCst)
            {
                Ok(_) => break current - new_val,
                Err(actual) => current = actual,
            }
        };
        self.mem_reserved.fetch_sub(decremented, Ordering::SeqCst);
        metrics::gauge!("mem.bytes_reserved", "area" => BufferArea::Prefetch.as_str()).decrement(decremented as f64);
    }

    pub fn try_allocate(
        self: &Arc<Self>,
        size: usize,
        kind: Option<BufferKind>,
        forced: bool,
    ) -> Option<ManagedBuffer> {
        if forced {
            self.allocated_bytes.fetch_add(size, Ordering::SeqCst);
            metrics::gauge!("mem.allocated_bytes").increment(size as f64);
        } else {
            let start = Instant::now();
            let mut mem_allocated = self.allocated_bytes.load(Ordering::SeqCst);
            loop {
                let new_mem_allocated = mem_allocated.saturating_add(size);
                let new_total_mem_usage = new_mem_allocated.saturating_add(self.additional_mem_reserved);
                if new_total_mem_usage > self.mem_limit {
                    trace!(new_total_mem_usage, "not enough memory to allocate");
                    metrics::histogram!("mem.allocate_latency_us").record(start.elapsed().as_micros() as f64);
                    return None;
                }
                // Check that the value we have read is still the same before updating it
                match self.allocated_bytes.compare_exchange_weak(
                    mem_allocated,
                    new_mem_allocated,
                    Ordering::SeqCst,
                    Ordering::SeqCst,
                ) {
                    Ok(_) => {
                        metrics::gauge!("mem.allocated_bytes").increment(size as f64);
                        metrics::histogram!("mem.allocate_latency_us").record(start.elapsed().as_micros() as f64);
                        break;
                    }
                    Err(current) => mem_allocated = current, // another thread updated the atomic before us, trying again
                }
            }
        }

        if let Some(kind) = kind {
            self.acquire_bytes(size, kind);
        }

        Some(ManagedBuffer::new(size, kind, self.clone()))
    }

    pub fn deallocate(&self, ptr: BufferPtr, kind: Option<BufferKind>) {
        let size = ptr.size();
        drop(ptr);
        self.allocated_bytes.fetch_sub(size, Ordering::SeqCst);
        metrics::gauge!("mem.allocated_bytes").decrement(size as f64);
        if let Some(kind) = kind {
            self.release_bytes(size, kind);
        } else {
            self.trigger_process_pending();
        }
    }

    pub fn acquired_bytes(&self, kind: BufferKind) -> usize {
        self.acquired_bytes[kind].load(Ordering::SeqCst)
    }

    pub fn total_acquired_bytes(&self) -> usize {
        self.acquired_bytes.iter().map(|a| a.load(Ordering::SeqCst)).sum()
    }

    pub fn acquire_bytes(&self, bytes: usize, kind: BufferKind) {
        self.acquired_bytes[kind].fetch_add(bytes, Ordering::SeqCst);
        metrics::gauge!("pool.bytes_in_use", "kind" => kind.as_str()).increment(bytes as f64);
    }

    pub fn release_bytes(&self, bytes: usize, kind: BufferKind) {
        self.acquired_bytes[kind].fetch_sub(bytes, Ordering::SeqCst);
        metrics::gauge!("pool.bytes_in_use", "kind" => kind.as_str()).decrement(bytes as f64);
        self.trigger_process_pending();
    }

    pub fn trigger_process_pending(&self) {
        self.pending_signal.notify();
    }

    /// Signal to process pending allocations.
    pub(super) fn pending_signal(&self) -> &Arc<WakeSignal> {
        &self.pending_signal
    }

    // -----------------------------------------------------------------------
    // Pruning hooks — see `maintenance.rs` for the loop, signal, and round logic.
    // -----------------------------------------------------------------------

    /// Wake the maintenance loop if it's currently parked between idle intervals.
    /// Called when a new waiter joins the allocation queue so the pruner can
    /// react without sleeping up to its full idle interval.
    pub fn trigger_pruning(&self) {
        self.pruning_signal.notify();
    }

    /// Shared notify handle. The pruner needs its own clone to park on.
    pub(super) fn pruning_signal(&self) -> &Arc<WakeSignal> {
        &self.pruning_signal
    }

    /// Returns `true` if any cursor is currently servicing a FUSE read.
    pub(super) fn has_active_reads(&self) -> bool {
        self.cursors.iter().any(|entry| {
            entry
                .value()
                .upgrade()
                .is_some_and(|state| matches!(*state.read_state.lock().unwrap(), ReadState::Active { .. }))
        })
    }

    /// Reset the least-recently-read idle cursor.
    ///
    /// Returns `true` if a cursor was reset.
    pub(super) fn reset_one_idle_cursor(&self) -> bool {
        let lru = self
            .cursors
            .iter()
            .filter_map(|entry| {
                let state = entry.value().upgrade()?;
                let tick = match *state.read_state.lock().unwrap() {
                    ReadState::Active { .. } => return None,
                    ReadState::Last { tick } => tick,
                };
                Some((tick, state.cursor_id))
            })
            .min_by_key(|&(tick, _)| tick);

        let Some((tick, cursor_id)) = lru else {
            trace!("no idle cursor eligible for reset");
            return false;
        };

        if self.request_reset(cursor_id) {
            debug!(
                ?cursor_id,
                last_read_tick = tick,
                "reset idle cursor under memory pressure"
            );
            return true;
        }
        false
    }
}

impl Drop for MemoryLimiter {
    fn drop(&mut self) {
        // Wake the pruning thread so it observes its `Weak` failing to upgrade
        // and exits. Without this, a pruner parked in the outer wait at drop
        // time would never wake.
        self.trigger_pruning();
        self.trigger_process_pending();
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

/// State machine describing whether a cursor is currently inside an active
/// FUSE read or, if not, when its most recent read ended.
///
/// The pruner uses this to decide which buffers are high priority (`Active`,
/// being waited on by a user) vs. speculative (`Last`, prefetched ahead and
/// candidate for LRU eviction).
#[derive(Debug, Clone, Copy)]
enum ReadState {
    /// A FUSE read is in flight for this cursor.
    Active {
        /// Start offset of the read in the file.
        offset: u64,
        /// Size of the read in bytes.
        size: usize,
    },
    /// No read is in flight. `tick` is the monotonic counter stamped when
    /// the last read ended, or `0` if the cursor has never been read from.
    Last { tick: u64 },
}

impl ReadState {
    /// `true` iff there is an in-flight read whose range overlaps `[offset, offset + size)`.
    fn is_active(&self, offset: u64, size: usize) -> bool {
        let Self::Active {
            offset: active_offset,
            size: active_size,
        } = *self
        else {
            return false;
        };
        let active_end = active_offset + active_size as u64;
        let other_end = offset + size as u64;
        active_offset < other_end && offset < active_end
    }
}

type ResetFn = Box<dyn Fn() -> bool + Send + Sync>;

/// Per-cursor state shared between the memory pool's limiter,
/// the BackpressureController, and the Cursor.
pub struct CursorState {
    /// The memory pool tracking this cursor.
    pool: PagedPool,
    /// The unique identifier for this cursor.
    cursor_id: CursorId,
    /// Reservation balance (bytes of intent not yet converted to pool allocations).
    mem_reserved: AtomicUsize,
    /// Whether this cursor is currently servicing a FUSE read, plus the tick
    /// at which its last read ended (`0` before the first read).
    read_state: Mutex<ReadState>,
    /// Callback that drops the cursor's expensive inner resources.
    /// `None` before registration.
    reset_fn: Mutex<Option<ResetFn>>,
}

impl CursorState {
    fn new(pool: PagedPool, cursor_id: CursorId) -> Self {
        Self {
            pool,
            cursor_id,
            mem_reserved: Default::default(),
            read_state: Mutex::new(ReadState::Last { tick: 0 }),
            reset_fn: Mutex::new(None),
        }
    }

    /// The unique identifier for this cursor.
    pub fn id(&self) -> CursorId {
        self.cursor_id
    }

    /// Reserve memory unconditionally. Increments both the per-cursor and global counters.
    pub fn reserve(&self, size: usize) {
        self.pool.limiter().reserve(BufferArea::Prefetch, size);
        self.mem_reserved.fetch_add(size, Ordering::SeqCst);
    }

    /// Try to reserve memory. Returns false if the budget would be exceeded.
    pub fn try_reserve(&self, size: usize) -> bool {
        if !self.pool.limiter().try_reserve(BufferArea::Prefetch, size) {
            return false;
        }
        self.mem_reserved.fetch_add(size, Ordering::SeqCst);
        true
    }

    /// Memory that can be reserved while respecting the memory limit.
    pub fn memory_available_for_reservation(&self) -> usize {
        self.pool.limiter().memory_available_for_reservation()
    }
}

impl std::fmt::Debug for CursorState {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("CursorState")
            .field("cursor_id", &self.cursor_id)
            .field("mem_reserved", &self.mem_reserved)
            .field("read_state", &self.read_state)
            .field("has_reset_fn", &self.reset_fn.lock().unwrap().is_some())
            .finish()
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

    /// Record an active FUSE read. Returns a guard that clears it on drop and
    /// stamps the cursor's LRU tick at that point.
    ///
    /// Also upgrades any pending speculative allocation queue entries for this
    /// cursor to high priority, since a read is now actively waiting.
    pub fn set_active_read(&self, offset: u64, size: usize) -> ActiveReadGuard {
        *self.state.read_state.lock().unwrap() = ReadState::Active { offset, size };
        // Promote any speculative queue entries to high priority.
        self.state.pool.upgrade_pending(self.state.cursor_id);
        ActiveReadGuard { state: self.state() }
    }

    /// Register a callback that will be invoked to drop the cursor's expensive
    /// inner resources (RequestTask + SeekWindow) on a limiter-initiated reset.
    pub fn register_reset_fn(&self, f: ResetFn) {
        *self.state.reset_fn.lock().unwrap() = Some(f);
    }
}

/// RAII guard that clears the active read for a cursor when dropped and
/// records the LRU tick for the now-idle cursor.
pub struct ActiveReadGuard {
    state: Arc<CursorState>,
}

impl Drop for ActiveReadGuard {
    fn drop(&mut self) {
        let tick = self.state.pool.limiter().next_read_tick.fetch_add(1, Ordering::Relaxed);
        *self.state.read_state.lock().unwrap() = ReadState::Last { tick };
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
        let available = pool.limiter().memory_available_for_reservation();
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
    fn test_on_pool_acquire_noop_after_release_cursor() {
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
    fn test_on_pool_acquire_saturates_on_over_decrement() {
        let pool = PagedPool::config()
            .with_candidate_sizes([1024])
            .with_minimum_memory_limit()
            .build();
        let limiter = pool.limiter();
        let cursor = pool.create_cursor().state();

        // Reserve only 512 bytes
        cursor.reserve(512);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 512);

        // Pool allocates 1024 — on_pool_acquire should saturate at 512 (not underflow)
        let cursor_id = cursor.id();
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(cursor_id));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        // dropping the cursor should subtract 0 (the per-cursor counter is already 0)
        drop(cursor);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(!limiter.cursors.contains_key(&cursor_id));
    }

    #[test]
    fn test_memory_available_for_reservation() {
        let buffer_size = 1024;

        let pool = PagedPool::config()
            .with_candidate_sizes([buffer_size])
            .with_minimum_memory_limit()
            .build();
        let limiter = pool.limiter();
        let cursor = pool.create_cursor().state();

        let initial_available = limiter.memory_available_for_reservation();

        // Reserve intent — available decreases
        cursor.reserve(buffer_size);
        assert_eq!(
            limiter.memory_available_for_reservation(),
            initial_available - buffer_size
        );
        assert_eq!(limiter.acquired_bytes(BufferKind::GetObject), 0);

        // Acquire buffer from the pool (on_pool_acquire converts intent to pool stats)
        let buffer = pool.get_buffer_mut(buffer_size, BufferKind::GetObject, Some(cursor.id()));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert_eq!(limiter.acquired_bytes(BufferKind::GetObject), buffer_size);
        assert_eq!(
            limiter.memory_available_for_reservation(),
            initial_available - buffer_size
        );

        // Drop the buffer — pool stats decrease and available goes back up
        drop(buffer);
        assert_eq!(limiter.acquired_bytes(BufferKind::GetObject), 0);
        assert_eq!(limiter.memory_available_for_reservation(), initial_available);
    }

    #[test]
    fn test_upload_allocation_does_not_affect_mem_reserved() {
        let buffer_size = 1024;

        let pool = PagedPool::config()
            .with_candidate_sizes([buffer_size])
            .with_minimum_memory_limit()
            .build();
        let limiter = pool.limiter();

        let initial_available = limiter.memory_available_for_reservation();
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        // Upload allocates without cursor_id — should not touch mem_reserved
        let buffer = pool.get_buffer_mut(buffer_size, BufferKind::Append, None);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);

        // But available_mem should decrease (pool stats increased)
        assert_eq!(
            limiter.memory_available_for_reservation(),
            initial_available - buffer_size
        );

        // Drop the buffer — available goes back up
        drop(buffer);
        assert_eq!(limiter.memory_available_for_reservation(), initial_available);
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

    #[test]
    fn reset_cursor_returns_false_after_drop() {
        let pool = new_pool();
        let cursor = pool.create_cursor();
        let cursor_id = cursor.id();
        drop(cursor);

        // Cursor already dropped — weak upgrade fails
        assert!(!pool.reset_cursor(cursor_id));
    }

    /// Simple boolean-flag reset_fn for tests: flips the flag to true on first
    /// call and returns true; subsequent calls return false (mirroring how the
    /// real cursor reports "nothing left to reset").
    fn install_test_reset_fn(cursor: &CursorHandle) -> Arc<std::sync::atomic::AtomicBool> {
        let was_reset = Arc::new(std::sync::atomic::AtomicBool::new(false));
        let flag = was_reset.clone();
        cursor.register_reset_fn(Box::new(move || !flag.swap(true, std::sync::atomic::Ordering::SeqCst)));
        was_reset
    }

    #[test]
    fn reset_one_idle_picks_least_recently_read() {
        let pool = new_pool();
        let limiter = pool.limiter();

        let oldest = pool.create_cursor();
        let middle = pool.create_cursor();
        let newest = pool.create_cursor();

        // Bump each cursor's tick in order: oldest first, newest last.
        drop(oldest.set_active_read(0, 1));
        drop(middle.set_active_read(0, 1));
        drop(newest.set_active_read(0, 1));

        let oldest_reset = install_test_reset_fn(&oldest);
        let middle_reset = install_test_reset_fn(&middle);
        let newest_reset = install_test_reset_fn(&newest);

        assert!(limiter.reset_one_idle_cursor());
        assert!(oldest_reset.load(Ordering::SeqCst));
        assert!(!middle_reset.load(Ordering::SeqCst));
        assert!(!newest_reset.load(Ordering::SeqCst));
    }

    #[test]
    fn reset_one_idle_skips_active_cursors() {
        let pool = new_pool();
        let limiter = pool.limiter();

        let active = pool.create_cursor();
        let idle = pool.create_cursor();

        // Active cursor was read first — it's the LRU candidate by tick alone,
        // but its active_read guard makes it ineligible.
        let _active_guard = active.set_active_read(0, 1);
        drop(idle.set_active_read(0, 1));

        let active_reset = install_test_reset_fn(&active);
        let idle_reset = install_test_reset_fn(&idle);

        assert!(limiter.reset_one_idle_cursor());
        assert!(!active_reset.load(Ordering::SeqCst));
        assert!(idle_reset.load(Ordering::SeqCst));
    }

    #[test]
    fn reset_one_idle_returns_false_when_all_active() {
        let pool = new_pool();
        let limiter = pool.limiter();

        let a = pool.create_cursor();
        let b = pool.create_cursor();
        let _ga = a.set_active_read(0, 1);
        let _gb = b.set_active_read(0, 1);

        install_test_reset_fn(&a);
        install_test_reset_fn(&b);

        assert!(!limiter.reset_one_idle_cursor());
    }

    /// If the LRU candidate's `request_reset` fails (e.g. its inner mutex is
    /// momentarily held by a worker), `reset_one_idle_cursor` returns false
    /// without trying any other candidates — the maintenance loop's next
    /// round (after `PRUNING_TICK`) will see fresh state and try again.
    #[test]
    fn reset_one_idle_returns_false_when_lru_reset_fails() {
        let pool = new_pool();
        let limiter = pool.limiter();

        let stale = pool.create_cursor(); // LRU
        let live = pool.create_cursor();

        drop(stale.set_active_read(0, 1));
        drop(live.set_active_read(0, 1));

        // LRU candidate's reset_fn always returns false (e.g., already reset).
        stale.register_reset_fn(Box::new(|| false));
        let live_reset = install_test_reset_fn(&live);

        assert!(!limiter.reset_one_idle_cursor());
        assert!(!live_reset.load(Ordering::SeqCst));
    }
}
