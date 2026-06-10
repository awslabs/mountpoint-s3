use std::time::Duration;

use mountpoint_s3_client::config::{MemoryPool, MetaRequest};

use crate::prefetch::CursorId;
use crate::sync::{Arc, RwLock, Weak};

use super::allocation_queue::AllocationQueue;
use super::buffers::{PoolBuffer, PoolBufferMut};
use super::limiter::{CursorHandle, MemoryLimiter};
use super::pages::{Page, PagedBufferPtr};
use super::stats::{BufferKind, SizePoolStats};

pub use super::limiter::MINIMUM_MEM_LIMIT;

/// Maximum size for a primary buffer.
///
/// Buffers larger than this size will be allocated from secondary memory.
pub const MAX_BUFFER_SIZE: usize = 64 * 1024 * 1024;

/// Default size for a primary buffer.
///
/// Used when no other valid buffer size is provided when creating the pool.
pub const DEFAULT_BUFFER_SIZE: usize = 8 * 1024 * 1024;

/// A pool of reusable fixed-size buffers allocated in large pages.
///
/// This type implements [MemoryPool] and can be configured as a custom memory pool
/// for a [S3CrtClient](mountpoint_s3_client::S3CrtClient).
/// It can also return mutable buffers ([PoolBufferMut]) to use in other scenarios,
/// such as reading cache blocks from disk or buffering incremental uploads.
///
/// The pool is configured by providing a set of sizes for the buffers, e.g. read
/// and write part sizes, cache block size. For each of these sizes, the pool will
/// maintain a [SizePool] instance, which will allocate "pages" of
/// [BUFFERS_PER_PAGE](super::pages::Page::BUFFERS_PER_PAGE) (16) buffers on demand.
///
/// When a buffer of a given size is requested, the pool will return a buffer from one
/// of 2 logical areas: **primary** and **secondary**:
///
/// - **primary**: the [SizePool] with the smallest buffer size large enough to contain
///   the requested size is selected. If any of its existing pages has a free buffer,
///   it is marked as reserved and returned, otherwise a new page is allocated.
/// - **secondary**: if the requested size is larger than the maximum buffer size in
///   [SizePool]s, a buffer of the exact size is allocated and returned.
///
/// When a primary buffer is dropped, it will automatically be released back to the pool,
/// so it can be reused. Secondary buffers will also notify the pool on drop, but only
/// for tracking.
///
/// The [`trim`](Self::trim) method can be invoked to free all empty pages, i.e. with no
/// currently reserved buffers, across [SizePool]s.
///
/// When reserving a buffer, a [BufferKind] parameter is required to keep track of the
/// usage. Requests through the [MemoryPool] interface will map the originating
/// [MetaRequestType] to [BufferKind].
#[derive(Debug, Clone)]
pub struct PagedPool {
    inner: Arc<PagedPoolInner>,
}

impl PagedPool {
    /// Creates a [PagedPool] from an [Arc<PagedPoolInner>]. Used by buffer drop impls.
    pub(super) fn from_inner(inner: Arc<PagedPoolInner>) -> Self {
        Self { inner }
    }

    /// Configuration for a [PagedPool].
    pub fn config() -> PagedPoolConfig {
        Default::default()
    }

    /// Create a new [PagedPool] with the given configuration.
    pub fn new(config: &PagedPoolConfig) -> Self {
        let limiter = Arc::new(MemoryLimiter::new(config.memory_limit()));

        let ordered_size_pools = config
            .ordered_sizes()
            .iter()
            .map(|&buffer_size| SizePool {
                pages: Default::default(),
                stats: Arc::new(SizePoolStats::new(buffer_size, limiter.clone())),
            })
            .collect();

        let inner = PagedPoolInner {
            ordered_size_pools,
            limiter,
            allocation_queue: AllocationQueue::new(),
        };
        Self { inner: Arc::new(inner) }
    }

    /// Trim empty pages in the pool.
    pub fn trim(&self) -> bool {
        let trimmed = self.inner.trim();
        if trimmed {
            self.try_wake_pending();
        }
        trimmed
    }

    /// Spawn the background pool maintenance thread. Must be called once after
    /// construction, at filesystem init.
    ///
    /// The thread serves two responsibilities on a single OS thread:
    ///   - **Periodic trim**: every `idle_interval`, run [`Self::trim`] to release
    ///     empty pages back to the system allocator.
    ///   - **Pressure pruning**: on [`MemoryLimiter::trigger_pruning`], wake
    ///     immediately and run pruning rounds until the allocation queue drains.
    pub fn spawn_pool_maintenance_thread(&self, idle_interval: Duration) {
        super::maintenance::spawn_pool_maintenance_thread(&self.inner, idle_interval);
    }

    /// Return the memory in use in bytes for the given kind of buffer.
    pub fn acquired_bytes(&self, kind: BufferKind) -> usize {
        self.inner.limiter.acquired_bytes(kind)
    }

    /// Return the total memory in use in bytes across all buffer kinds.
    pub fn total_acquired_bytes(&self) -> usize {
        self.inner.limiter.total_acquired_bytes()
    }

    /// Get a new empty mutable buffer from the pool with the requested capacity.
    /// If `cursor_id` is provided, `on_pool_reserve` will decrement the limiter's
    /// reservation counters for per-cursor memory tracking.
    pub fn get_buffer_mut(&self, capacity: usize, kind: BufferKind, cursor_id: Option<CursorId>) -> PoolBufferMut {
        let buffer = self.get_buffer(capacity, kind, cursor_id);
        PoolBufferMut::new(buffer)
    }

    /// Async equivalent of [Self::get_buffer_mut]
    pub async fn get_buffer_mut_async(
        &self,
        capacity: usize,
        kind: BufferKind,
        cursor_id: Option<CursorId>,
    ) -> PoolBufferMut {
        let buffer = self.acquire_buffer_async(capacity, kind, cursor_id).await;
        PoolBufferMut::new(buffer)
    }

    fn get_buffer(&self, size: usize, kind: BufferKind, cursor_id: Option<CursorId>) -> PoolBuffer {
        self.try_get_buffer(size, kind, cursor_id, true).unwrap()
    }

    fn try_get_buffer(
        &self,
        size: usize,
        kind: BufferKind,
        cursor_id: Option<CursorId>,
        forced: bool,
    ) -> Option<PoolBuffer> {
        let buffer = match self.inner.get_pool_for_size(size) {
            Some(pool) => {
                let buffer_ptr = pool.try_acquire(kind, self, forced)?;
                metrics::histogram!("pool.acquired_bytes", "type" => "primary", "kind" => kind.as_str())
                    .record(size as f64);
                metrics::histogram!("pool.slack_bytes", "size" => format!("{}", pool.buffer_size()), "kind" => kind.as_str())
                    .record((pool.buffer_size() - size) as f64);

                PoolBuffer::new_primary(buffer_ptr, size)
            }
            None => {
                metrics::histogram!("pool.acquired_bytes", "type" => "secondary", "kind" => kind.as_str())
                    .record(size as f64);
                PoolBuffer::try_new_secondary(size, kind, self.inner.limiter.clone(), self.weak_ref(), forced)?
            }
        };
        self.inner.limiter.on_pool_acquire(size, cursor_id);
        Some(buffer)
    }

    #[cfg(test)]
    fn page_count(&self) -> usize {
        self.inner
            .ordered_size_pools
            .iter()
            .map(|pool| pool.pages.read().unwrap().len())
            .sum()
    }

    #[cfg(test)]
    fn acquired_buffer_count(&self, kind: BufferKind) -> usize {
        self.inner
            .ordered_size_pools
            .iter()
            .map(|pool| pool.stats.acquired_buffers(kind))
            .sum()
    }

    /// Internal access for the maintenance module (sibling), used by maintenance tests
    /// (which are gated `not(feature = "shuttle")`).
    #[cfg(test)]
    #[cfg_attr(feature = "shuttle", allow(dead_code))]
    pub(super) fn inner(&self) -> &Arc<PagedPoolInner> {
        &self.inner
    }

    /// The configured memory limit in bytes.
    pub fn mem_limit(&self) -> u64 {
        self.inner.limiter.mem_limit()
    }

    /// The static memory budget available for data buffers, i.e. `mem_limit - additional_mem_reserved`.
    pub fn data_buffer_budget(&self) -> u64 {
        self.inner.limiter.data_buffer_budget()
    }

    /// Create a new cursor and return the shared state handle.
    pub fn create_cursor(&self) -> CursorHandle {
        self.inner.limiter.create_cursor(self)
    }

    /// Reset a cursor: immediately drop its in-flight request and buffered data,
    /// reclaiming all reserved memory.
    ///
    /// Returns whether the cursor was actually reset.
    pub fn reset_cursor(&self, cursor_id: CursorId) -> bool {
        self.inner.limiter.request_reset(cursor_id)
    }

    /// Query available memory.
    pub fn available_mem(&self) -> u64 {
        self.inner.limiter.available_mem()
    }

    /// Attempt to fulfill pending allocation requests from the queue.
    ///
    /// Called whenever memory is freed — on buffer drop, cursor release, or pool trim.
    /// Loops until no more entries can be fulfilled or the queue is empty.
    pub(super) fn try_wake_pending(&self) {
        self.inner.try_wake_pending();
    }

    /// Async buffer allocation through the priority queue.
    ///
    /// **Fast path:** if the queue is empty and memory is available, allocates and returns immediately.
    ///
    /// **Slow path:** pushes the request into the allocation queue and awaits a buffer.
    /// Priority is determined from the cursor's active-read state:
    /// - cursor with an active FUSE read → high priority
    /// - cursor without an active read (speculative prefetch) → low priority
    /// - no cursor (upload) → high priority (write syscall is blocked)
    pub(super) async fn acquire_buffer_async(
        &self,
        size: usize,
        kind: BufferKind,
        cursor_id: Option<CursorId>,
    ) -> PoolBuffer {
        // Fast path: if the queue is empty, try to allocate immediately. The check-and-allocate in
        // `try_allocate` uses CAS on `pending_allocations`, so concurrent fast-path callers cannot both
        // observe room for the same bytes and overshoot the limit.
        if !self.inner.is_memory_pressure()
            && let Some(buffer) = self.try_get_buffer(size, kind, cursor_id, false)
        {
            return buffer;
        }

        // Determine priority: a cursor with an active FUSE read is High (urgent),
        // speculative prefetch (cursor with no active read) is Low.
        // Uploads (no cursor) are always High — a write syscall is blocked.
        // NOTE: We check if the cursor has an active read, not if this allocation serves it.
        let rx = match cursor_id {
            Some(id) if self.inner.limiter.has_active_read(id) => {
                self.inner.allocation_queue.push_high(cursor_id, size, kind)
            }
            Some(id) => self.inner.allocation_queue.push_low(id, size, kind),
            None => self.inner.allocation_queue.push_high(None, size, kind), // uploads are urgent
        };
        // After pushing, try to wake immediately in case memory freed between the fast-path
        // check above and the push (avoids the race where a buffer drop called try_wake_pending
        // before the entry was in the queue).
        self.try_wake_pending();
        // Nudge the maintenance thread: it may be parked on its long idle interval, in which
        // case it would otherwise sleep up to that interval before noticing the new waiter.
        self.inner.limiter.trigger_pruning();
        // Await the buffer from the queue. Err(Canceled) can only happen during pool shutdown.
        // TODO(memory-limiter): signal error to CRT via aws_future_s3_buffer_ticket_set_error.
        rx.await.unwrap_or_else(|_| self.get_buffer(size, kind, cursor_id))
    }

    /// Check if the given cursor has an active read overlapping the specified range.
    pub fn has_active_read_in_range(&self, cursor_id: CursorId, offset: u64, size: usize) -> bool {
        self.inner.limiter.has_active_read_in_range(cursor_id, offset, size)
    }

    /// Promote any pending speculative allocation queue entries for `cursor_id` to high priority.
    /// Called when a FUSE read arrives for the cursor.
    pub(super) fn upgrade_pending(&self, cursor_id: CursorId) {
        self.inner.allocation_queue.upgrade(cursor_id);
    }

    // ─── Internal components exposed to the rest of the `memory` module. ──────────

    pub(super) fn limiter(&self) -> &MemoryLimiter {
        &self.inner.limiter
    }

    pub(super) fn weak_ref(&self) -> Weak<PagedPoolInner> {
        Arc::downgrade(&self.inner)
    }
}

impl MemoryPool for PagedPool {
    type Buffer = PoolBuffer;

    fn get_buffer(&self, size: usize, meta_request: &MetaRequest) -> Self::Buffer {
        self.get_buffer(
            size,
            meta_request.meta_request_type().into(),
            meta_request.custom_id().map(CursorId::new_from_raw),
        )
    }

    async fn get_buffer_async(&self, size: usize, meta_request: &MetaRequest) -> Self::Buffer {
        let kind = meta_request.meta_request_type().into();
        let cursor_id = meta_request.custom_id().map(CursorId::new_from_raw);
        self.acquire_buffer_async(size, kind, cursor_id).await
    }

    fn trim(&self) -> bool {
        self.trim()
    }
}

#[derive(Debug)]
pub(super) struct PagedPoolInner {
    ordered_size_pools: Vec<SizePool>,
    limiter: Arc<MemoryLimiter>,
    allocation_queue: AllocationQueue,
}

impl PagedPoolInner {
    /// Reference to the inner [`MemoryLimiter`] for sibling modules (e.g. the maintenance thread).
    pub(super) fn limiter(&self) -> &MemoryLimiter {
        &self.limiter
    }

    /// Returns `true` while there is at least one queued allocation request.
    pub(super) fn is_memory_pressure(&self) -> bool {
        self.allocation_queue.has_pending()
    }

    /// How long the next-to-be-served waiter has been queued, or `None` if
    /// the queue is empty (or only contains cancelled entries).
    pub(super) fn head_waited(&self) -> Option<Duration> {
        self.allocation_queue.head_queued_at().map(|t| t.elapsed())
    }

    fn get_pool_for_size(&self, size: usize) -> Option<&SizePool> {
        if size == 0 {
            return None;
        }

        let index = self.ordered_size_pools.partition_point(|p| p.stats.buffer_size < size);
        if index == self.ordered_size_pools.len() {
            return None;
        }

        Some(&self.ordered_size_pools[index])
    }

    pub(super) fn trim(&self) -> bool {
        let mut removed = false;
        for pool in &self.ordered_size_pools {
            if pool.stats.empty_pages() == 0 {
                continue;
            }
            let mut write = pool.pages.write().unwrap();
            let len = write.len();
            write.retain(|p| !p.invalidate_if_empty());

            let pages_freed = len - write.len();
            if pages_freed > 0 {
                tracing::trace!(
                    size = pool.stats.buffer_size,
                    pages_freed,
                    "free empty memory pool pages"
                );
                removed = true;
                metrics::gauge!("pool.allocated_pages", "size" => format!("{}", pool.stats.buffer_size))
                    .decrement(pages_freed as f64);
            }
            metrics::histogram!("pool.trim_pages", "size" => format!("{}", pool.stats.buffer_size))
                .record(pages_freed as f64);
        }

        removed
    }

    pub(super) fn try_wake_pending(self: &Arc<Self>) {
        if !self.is_memory_pressure() {
            return;
        }
        let pool = PagedPool::from_inner(self.clone());
        let mut undelivered = Vec::new();

        loop {
            let mut buffer = None;
            let entry = self.allocation_queue.pop_front_if(|pending| {
                buffer = pool.try_get_buffer(pending.size, pending.kind, pending.cursor_id, false);
                buffer.is_some()
            });
            let Some(entry) = entry else { break };
            let Some(buffer) = buffer else { break };

            if let Err(buffer) = entry.fulfill(buffer) {
                undelivered.push(buffer);
            }
        }
        // TODO(memory-limiter): these buffers should be dropped immediately so the freed memory
        // can serve the next waiter, but dropping them here would recursively call try_wake_pending
        // (since buffer drop triggers the wake). Decouple by running try_wake_pending concurrently.
        drop(undelivered);
    }
}

#[derive(Debug)]
struct SizePool {
    pages: RwLock<Vec<Page>>,
    stats: Arc<SizePoolStats>,
}

impl SizePool {
    fn try_acquire(&self, kind: BufferKind, pool: &PagedPool, forced: bool) -> Option<PagedBufferPtr> {
        {
            // Fast path: reserve a buffer from the existing pages (under a read lock).
            let read_pages = self.pages.read().unwrap();
            if let Some(buffer_ptr) = self.try_get_buffer_ptr(read_pages.iter(), kind) {
                return Some(buffer_ptr);
            }
        }

        // Slow path: we could not find an available buffer on the first round, so we need
        // a write lock to be able to add a page. But first, we check the existing pages again
        // in case a buffer became available while we waited for the lock or another concurrent
        // reserve already added a new page.
        let mut write_pages = self.pages.write().unwrap();
        if let Some(buffer_ptr) = self.try_get_buffer_ptr(write_pages.iter(), kind) {
            return Some(buffer_ptr);
        }

        tracing::trace!(size = self.stats.buffer_size, "allocate new memory pool page");
        let page = Page::try_new(self.stats.clone(), pool.weak_ref(), forced)?;
        let buffer_ptr = page.try_acquire(kind).unwrap();
        write_pages.push(page);
        Some(buffer_ptr)
    }

    fn try_get_buffer_ptr<'a>(
        &self,
        mut pages: impl Iterator<Item = &'a Page>,
        kind: BufferKind,
    ) -> Option<PagedBufferPtr> {
        pages.find_map(|page| page.try_acquire(kind))
    }

    fn buffer_size(&self) -> usize {
        self.stats.buffer_size
    }
}

/// Configuration for a [PagedPool].
///
/// Defaults:
/// - memory limit: [MINIMUM_MEM_LIMIT],
/// - buffer size: [DEFAULT_BUFFER_SIZE].
#[derive(Debug, Clone)]
pub struct PagedPoolConfig {
    ordered_sizes: Vec<usize>,
    mem_limit: u64,
}

impl Default for PagedPoolConfig {
    fn default() -> Self {
        Self {
            ordered_sizes: Default::default(),
            mem_limit: MINIMUM_MEM_LIMIT,
        }
    }
}

impl PagedPoolConfig {
    /// Configure primary memory with the given set of buffer sizes, if valid.
    ///
    /// Ignores invalid (0 or greater than [MAX_BUFFER_SIZE])
    /// or duplicate values for buffer sizes. If no valid value is provided,
    /// uses [DEFAULT_BUFFER_SIZE].
    pub fn with_candidate_sizes(&mut self, buffer_sizes: impl Into<Vec<usize>>) -> &mut Self {
        self.ordered_sizes = buffer_sizes.into();
        self.ordered_sizes.retain(|&size| size > 0 && size <= MAX_BUFFER_SIZE);
        self.ordered_sizes.sort();
        self.ordered_sizes.dedup();
        self
    }

    /// Configure the pool with the specified memory limit.
    pub fn with_memory_limit(&mut self, mem_limit: u64) -> &mut Self {
        self.mem_limit = mem_limit;
        self
    }

    /// Configure the pool without effective memory limiting.
    ///
    /// This is a convenience for tests and examples that don't need memory budgeting.
    /// The internal limiter uses `u64::MAX` as its limit, so it never rejects reservations.
    pub fn with_no_memory_limit(&mut self) -> &mut Self {
        self.with_memory_limit(u64::MAX)
    }

    /// Configure the pool with [MINIMUM_MEM_LIMIT] as the memory limit.
    pub fn with_minimum_memory_limit(&mut self) -> &mut Self {
        self.with_memory_limit(MINIMUM_MEM_LIMIT)
    }

    /// Build a [PagedPool] with this configuration.
    pub fn build(&self) -> PagedPool {
        PagedPool::new(self)
    }

    fn ordered_sizes(&self) -> &[usize] {
        if self.ordered_sizes.is_empty() {
            &[DEFAULT_BUFFER_SIZE]
        } else {
            &self.ordered_sizes
        }
    }

    fn memory_limit(&self) -> u64 {
        self.mem_limit
    }
}

#[cfg(test)]
mod tests {
    use std::collections::{HashMap, HashSet};
    use std::ops::Deref;
    use std::thread::{self, sleep};
    use std::time::Duration;

    use super::*;

    use bytes::Bytes;
    use rand::RngExt;
    use test_case::{test_case, test_matrix};

    fn copy_from_slice(pool: &PagedPool, original: &[u8]) -> Bytes {
        let mut buffer = pool.get_buffer(original.len(), BufferKind::Other, None);
        buffer.as_mut().clone_from_slice(original);
        buffer.into_bytes()
    }

    #[test_case(&[1, 2, 3], &[5, 10])]
    #[test_case(&vec![42u8; 1000], &[128, 1024])]
    fn test_from_slice(original: &[u8], buffer_sizes: &[usize]) {
        let pool = PagedPool::config()
            .with_candidate_sizes(buffer_sizes)
            .with_no_memory_limit()
            .build();
        let bytes = copy_from_slice(&pool, original);
        assert_eq!(original, bytes.as_ref());
    }

    #[test_case(&[5, 10, 1024])]
    fn test_pages(buffer_sizes: &[usize]) {
        let pool = PagedPool::config()
            .with_candidate_sizes(buffer_sizes)
            .with_no_memory_limit()
            .build();

        for &size in buffer_sizes {
            let original = vec![1u8; size];

            assert_eq!(pool.page_count(), 0);
            assert_eq!(pool.acquired_buffer_count(BufferKind::Other), 0);

            let mut buffers = Vec::new();
            for _ in 0..16 {
                buffers.push(copy_from_slice(&pool, &original));
            }
            assert_eq!(pool.page_count(), 1);
            assert_eq!(pool.acquired_buffer_count(BufferKind::Other), 16);

            buffers.push(copy_from_slice(&pool, &original));
            assert_eq!(pool.page_count(), 2);
            assert_eq!(pool.acquired_buffer_count(BufferKind::Other), 17);

            assert!(!pool.trim());

            drop(buffers);

            assert_eq!(pool.page_count(), 2);
            assert_eq!(pool.acquired_buffer_count(BufferKind::Other), 0);

            assert!(pool.trim());
            assert_eq!(pool.page_count(), 0);
            assert_eq!(pool.acquired_buffer_count(BufferKind::Other), 0);
        }
    }

    #[test_matrix(&[1, 2, 3, 4, 5, 6, 7], &[5, 10], [None, Some(Duration::from_millis(10))])]
    #[test_matrix(&vec![42u8; 1000], &[128, 1024], [None, Some(Duration::from_millis(10))])]
    #[test_matrix(&vec![42u8; 10000], &[128, 1024, 2024, 8192], [None, Some(Duration::from_millis(10))])]
    fn stress_test(original: &[u8], buffer_sizes: &[usize], schedule: Option<Duration>) {
        let pool = PagedPool::config()
            .with_candidate_sizes(buffer_sizes)
            .with_no_memory_limit()
            .build();
        if let Some(duration) = schedule {
            pool.spawn_pool_maintenance_thread(duration);
        }

        let num_threads = 10000;
        thread::scope(|scope| {
            for i in 0..num_threads {
                let pool = pool.clone();
                scope.spawn(move || {
                    let len = rand::rng().random_range(1..original.len());
                    let original = &original[..len];
                    let bytes = copy_from_slice(&pool, &original[..len]);
                    assert_eq!(original, bytes.deref());

                    sleep(Duration::from_millis(i as u64 % 10));

                    let bytes = copy_from_slice(&pool, &bytes);
                    assert_eq!(original, bytes.deref());
                });
            }
        });

        let page_count = pool.page_count();
        if page_count > 0 {
            pool.trim();
            assert_eq!(pool.page_count(), 0);
        }
    }

    #[test]
    fn test_acquired_bytes() {
        let buffer_size = 1024;
        let reservations = HashMap::from([(BufferKind::GetObject, 10), (BufferKind::Other, 20)]);
        let pool = PagedPool::config()
            .with_candidate_sizes([buffer_size])
            .with_no_memory_limit()
            .build();
        let mut buffers = Vec::new();
        for (&kind, &count) in &reservations {
            for _ in 0..count {
                buffers.push(pool.get_buffer(buffer_size, kind, None).into_bytes());
            }
        }

        for (&kind, &count) in &reservations {
            let reserved = pool.acquired_bytes(kind);
            assert_eq!(reserved, count * buffer_size);
        }
    }

    #[test_case(&[1024 * 1028, 8 * 1024 * 1028, 8 * 1024 * 1028])]
    #[test_case(&[10, 8, 10])]
    #[test_case(&[8, 8, 10])]
    fn test_ordered_pool_sizes(buffer_sizes: &[usize]) {
        let mut config = PagedPool::config();
        config.with_candidate_sizes(buffer_sizes);

        let ordered_sizes = config.ordered_sizes();
        assert!(ordered_sizes.iter().is_sorted(), "Sizes should be sorted");
        let unique: HashSet<_> = ordered_sizes.iter().collect();
        assert_eq!(ordered_sizes.len(), unique.len(), "Sizes should be unique");
    }

    mod allocation_queue_tests {
        use futures::executor::block_on;

        use super::*;

        fn tight_pool(buffer_size: usize) -> PagedPool {
            // Use a small limit — just enough for one page (16 buffers) plus overhead.
            // This keeps the "fill all memory" loop fast in debug builds.
            let additional_reserved = (buffer_size as u64 * 16).max(128 * 1024 * 1024);
            let mem_limit = buffer_size as u64 * 16 + additional_reserved;
            PagedPool::config()
                .with_candidate_sizes([buffer_size])
                .with_memory_limit(mem_limit)
                .build()
        }

        #[test]
        fn test_fast_path_when_room_available() {
            let pool = tight_pool(1024);
            let buffer = block_on(pool.acquire_buffer_async(256, BufferKind::GetObject, None));
            assert!(buffer.capacity() >= 256);
        }

        #[test]
        fn test_queues_when_no_room() {
            const BUF: usize = 1024;
            let pool = tight_pool(BUF);

            // Fill all available memory.
            let mut blockers = Vec::new();
            while let Some(buffer) = pool.try_get_buffer(BUF, BufferKind::Other, None, false) {
                blockers.push(buffer);
            }

            // Spawn a request — it should enqueue since there's no room.
            let pool_clone = pool.clone();
            let _handle =
                std::thread::spawn(move || block_on(pool_clone.acquire_buffer_async(BUF, BufferKind::GetObject, None)));

            // Wait for the request to enter the queue (retry for up to 100ms).
            for _ in 0..100 {
                if pool.inner.is_memory_pressure() {
                    return; // Success
                }
                std::thread::sleep(std::time::Duration::from_millis(1));
            }
            panic!("request did not enter queue within 100ms");

            // TODO(memory-limiter): review test
        }

        /// `is_memory_pressure` reflects the queue's emptiness.
        /// This is the primitive the maintenance loop relies on.
        #[test]
        fn test_is_memory_pressure_tracks_queue() {
            const BUF: usize = 1024;
            let pool = tight_pool(BUF);
            assert!(!pool.inner.is_memory_pressure());

            // Fill memory and enqueue a waiter.
            let mut blockers = Vec::new();
            while let Some(buffer) = pool.try_get_buffer(BUF, BufferKind::Other, None, false) {
                blockers.push(buffer);
            }
            let pool_clone = pool.clone();
            let _handle =
                std::thread::spawn(move || block_on(pool_clone.acquire_buffer_async(BUF, BufferKind::GetObject, None)));
            for _ in 0..100 {
                if pool.inner.is_memory_pressure() {
                    break;
                }
                std::thread::sleep(std::time::Duration::from_millis(1));
            }
            assert!(pool.inner.is_memory_pressure(), "pressure should track queue");

            // Drop a buffer — `try_wake_pending` will fulfill the waiter and clear pressure.
            blockers.pop();
            for _ in 0..100 {
                if !pool.inner.is_memory_pressure() {
                    return;
                }
                std::thread::sleep(std::time::Duration::from_millis(1));
            }
            panic!("pressure did not clear after waiter was fulfilled");
        }

        #[test]
        fn test_wakes_when_buffer_dropped() {
            const BUF: usize = 1024;
            let pool = tight_pool(BUF);

            let mut blockers = Vec::new();
            while let Some(buffer) = pool.try_get_buffer(BUF, BufferKind::Other, None, false) {
                blockers.push(buffer);
            }

            let (tx, rx) = std::sync::mpsc::channel();
            let pool_clone = pool.clone();
            std::thread::spawn(move || {
                let buffer = block_on(pool_clone.acquire_buffer_async(BUF, BufferKind::GetObject, None));
                let _ = tx.send(buffer);
            });

            // Wait for the request to enter the queue before freeing memory.
            for _ in 0..1000 {
                if pool.inner.is_memory_pressure() {
                    break;
                }
                std::thread::sleep(std::time::Duration::from_millis(1));
            }
            blockers.pop(); // free one buffer — should wake the pending request

            let buffer = rx.recv_timeout(std::time::Duration::from_secs(5)).expect("timed out");
            assert!(buffer.capacity() >= BUF);
        }

        #[test]
        fn test_high_priority_served_before_low() {
            const BUF: usize = 1024;
            let pool = tight_pool(BUF);

            // Fill all memory.
            let mut blockers = Vec::new();
            while let Some(buffer) = pool.try_get_buffer(BUF, BufferKind::Other, None, false) {
                blockers.push(buffer);
            }

            // Push both requests directly to the queue so ordering is deterministic.
            // Low priority first (speculative read), then high priority (upload).
            let low_rx = pool
                .inner
                .allocation_queue
                .push_low(CursorId::new_from_raw(1), BUF, BufferKind::GetObject);
            let high_rx = pool.inner.allocation_queue.push_high(None, BUF, BufferKind::PutObject);

            // Receive via threads + mpsc channels so we can use recv_timeout.
            let (low_tx, low_mpsc) = std::sync::mpsc::channel();
            let (high_tx, high_mpsc) = std::sync::mpsc::channel();
            std::thread::spawn(move || {
                let _ = low_tx.send(block_on(low_rx).unwrap());
            });
            std::thread::spawn(move || {
                let _ = high_tx.send(block_on(high_rx).unwrap());
            });

            // Both are now in the queue. Free one buffer — high priority must be served first.
            blockers.pop();
            let high_buf = high_mpsc
                .recv_timeout(std::time::Duration::from_secs(5))
                .expect("timed out");
            assert!(high_buf.capacity() >= BUF);

            // Free another — low priority now gets served.
            blockers.pop();
            let low_buf = low_mpsc
                .recv_timeout(std::time::Duration::from_secs(5))
                .expect("timed out");
            assert!(low_buf.capacity() >= BUF);
        }

        #[test]
        fn test_set_active_read_upgrades_speculative_to_high() {
            const BUF: usize = 1024;
            let pool = tight_pool(BUF);

            // Fill all memory.
            let mut blockers = Vec::new();
            while let Some(buffer) = pool.try_get_buffer(BUF, BufferKind::Other, None, false) {
                blockers.push(buffer);
            }

            let cursor = pool.create_cursor();
            let cursor_id = cursor.id();

            // Push a speculative (low-priority) request for this cursor.
            let (tx, rx) = std::sync::mpsc::channel();
            let pool1 = pool.clone();
            std::thread::spawn(move || {
                let buf = block_on(pool1.acquire_buffer_async(BUF, BufferKind::GetObject, Some(cursor_id)));
                let _ = tx.send(buf);
            });
            // Wait for it to enter the queue as low priority.
            for _ in 0..1000 {
                if pool.inner.is_memory_pressure() {
                    break;
                }
                std::thread::sleep(std::time::Duration::from_millis(1));
            }

            // Simulate a FUSE read arriving — should upgrade the entry to high priority.
            let _guard = cursor.set_active_read(0, BUF);

            // Verify the entry is now in the high-priority queue by freeing one buffer
            // and checking it gets served (would time out if stuck in low queue behind nothing).
            blockers.pop();
            let buffer = rx
                .recv_timeout(std::time::Duration::from_secs(5))
                .expect("timed out after upgrade");
            assert!(buffer.capacity() >= BUF);
        }

        /// Reproduces the race where concurrent fast-path allocations could both observe room for
        /// the same bytes and overshoot the memory limit.
        ///
        /// We fill memory leaving exactly one free buffer slot, then release many threads
        /// simultaneously (via a [Barrier]) into the fast path and poll each once. The
        /// The CAS on `pending_allocations` ensures exactly one thread can claim the last slot;
        /// last slot; the rest must queue. Before the fix, several threads passed a plain
        /// `can_allocate` check concurrently and all allocated, reserving more buffers than the
        /// budget allows.
        #[test]
        fn test_fast_path_does_not_overshoot_limit_under_contention() {
            use std::sync::Barrier;

            const BUF: usize = 1024;
            // Run several rounds to make the timing-dependent race likely to surface.
            for _ in 0..50 {
                let pool = tight_pool(BUF);

                // Fill memory leaving exactly one free buffer slot.
                let mut blockers = Vec::new();
                while let Some(buffer) = pool.try_get_buffer(BUF, BufferKind::Other, None, false) {
                    blockers.push(buffer);
                }
                let budget_buffers = blockers.len();
                blockers.pop(); // free exactly one slot

                const RACERS: usize = 16;
                let barrier = Arc::new(Barrier::new(RACERS));
                let granted: Vec<PoolBuffer> = std::thread::scope(|scope| {
                    let handles: Vec<_> = (0..RACERS)
                        .map(|_| {
                            let pool = pool.clone();
                            let barrier = barrier.clone();
                            scope.spawn(move || {
                                let mut fut = Box::pin(pool.acquire_buffer_async(BUF, BufferKind::GetObject, None));
                                // Release all racers into the fast path at once for maximum contention.
                                barrier.wait();
                                let waker = futures::task::noop_waker();
                                let mut cx = std::task::Context::from_waker(&waker);
                                match std::future::Future::poll(fut.as_mut(), &mut cx) {
                                    std::task::Poll::Ready(buffer) => Some(buffer),
                                    std::task::Poll::Pending => None,
                                }
                            })
                        })
                        .collect();
                    // Collect the won buffers so they stay reserved while we assert below.
                    handles.into_iter().filter_map(|h| h.join().unwrap()).collect()
                });

                // Exactly one racer may take the single free slot; the rest must have queued.
                assert_eq!(
                    granted.len(),
                    1,
                    "exactly one fast-path allocation should win the last slot"
                );
                // And the pool must never have exceeded its buffer budget while the winner holds its buffer.
                assert_eq!(
                    pool.acquired_buffer_count(BufferKind::Other) + pool.acquired_buffer_count(BufferKind::GetObject),
                    budget_buffers,
                    "total reserved buffers must not exceed the budget",
                );
                drop(granted);
            }
        }
    }
}
