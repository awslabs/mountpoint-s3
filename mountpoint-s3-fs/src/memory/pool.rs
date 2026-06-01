use std::future::Future;
use std::time::Duration;

use mountpoint_s3_client::config::{MemoryPool, MetaRequest};

use crate::prefetch::CursorId;
use crate::sync::{Arc, RwLock, Weak};

use super::allocation_queue::AllocationQueue;
use super::buffers::{PoolBuffer, PoolBufferMut};
use super::limiter::{CursorHandle, MemoryLimiter};
use super::pages::{Page, PagedBufferPtr};
use super::stats::{BufferKind, PoolStats, SizePoolStats};

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
        let stats = Arc::new(PoolStats::default());
        let ordered_size_pools = config
            .ordered_sizes()
            .iter()
            .map(|&buffer_size| SizePool {
                pages: Default::default(),
                stats: Arc::new(SizePoolStats::new(buffer_size, stats.clone())),
            })
            .collect();

        let limiter = MemoryLimiter::new(config.memory_limit());

        let inner = PagedPoolInner {
            ordered_size_pools,
            stats,
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

    /// Schedule recurring calls to [trim](Self::trim).
    pub fn schedule_trim(&self, recurring_time: Duration) {
        let weak = Arc::downgrade(&self.inner);
        std::thread::spawn(move || {
            loop {
                std::thread::sleep(recurring_time);
                let Some(inner) = weak.upgrade() else {
                    return;
                };
                if inner.trim() {
                    PagedPool::from_inner(inner).try_wake_pending();
                }
            }
        });
    }

    /// Return the reserved memory in bytes for the given kind of buffer.
    pub fn reserved_bytes(&self, kind: BufferKind) -> usize {
        self.inner.stats.reserved_bytes(kind)
    }

    /// Return the total reserved memory in bytes across all buffer kinds.
    pub fn total_reserved_bytes(&self) -> usize {
        self.inner.stats.total_reserved_bytes()
    }

    /// Get a new empty mutable buffer from the pool with the requested capacity.
    /// If `cursor_id` is provided, `on_pool_reserve` will decrement the limiter's
    /// reservation counters for per-cursor memory tracking.
    pub fn get_buffer_mut(&self, capacity: usize, kind: BufferKind, cursor_id: Option<CursorId>) -> PoolBufferMut {
        let buffer = self.get_buffer(capacity, kind, cursor_id);
        PoolBufferMut::new(buffer)
    }

    fn get_buffer(&self, size: usize, kind: BufferKind, cursor_id: Option<CursorId>) -> PoolBuffer {
        match self.inner.get_pool_for_size(size) {
            Some(pool) => {
                let buffer_ptr = pool.reserve(kind, Arc::downgrade(&self.inner));
                metrics::histogram!("pool.reserved_bytes", "type" => "primary", "kind" => kind.as_str())
                    .record(size as f64);
                metrics::histogram!("pool.slack_bytes", "size" => format!("{}", pool.buffer_size()), "kind" => kind.as_str())
                    .record((pool.buffer_size() - size) as f64);
                self.inner.limiter.on_pool_reserve(pool.buffer_size(), cursor_id);
                PoolBuffer::new_primary(buffer_ptr, size)
            }
            None => {
                metrics::histogram!("pool.reserved_bytes", "type" => "secondary", "kind" => kind.as_str())
                    .record(size as f64);
                self.inner.limiter.on_pool_reserve(size, cursor_id);
                PoolBuffer::new_secondary(size, kind, self.inner.stats.clone(), Arc::downgrade(&self.inner))
            }
        }
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
    fn reserved_buffer_count(&self, kind: BufferKind) -> usize {
        self.inner
            .ordered_size_pools
            .iter()
            .map(|pool| pool.stats.reserved_buffers(kind))
            .sum()
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

    /// Query available memory.
    pub fn available_mem(&self) -> u64 {
        self.inner.limiter.available_mem(&self.inner.stats)
    }

    /// Returns `true` if the pool can accommodate an additional allocation of `size` bytes.
    fn can_allocate(&self, size: usize) -> bool {
        self.available_mem() >= size as u64
    }

    /// Attempt to fulfill pending allocation requests from the queue.
    ///
    /// Called whenever memory is freed — on buffer drop, cursor release, or pool trim.
    /// Loops until no more entries can be fulfilled or the queue is empty.
    pub(super) fn try_wake_pending(&self) {
        loop {
            let entry = self
                .inner
                .allocation_queue
                .pop_front_if(|size, _, _| self.can_allocate(size));
            let Some(entry) = entry else { break };
            let buffer = self.get_buffer(entry.size, entry.kind, entry.cursor_id);
            let _ = entry.fulfill(buffer);
        }
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
    ///
    /// If the receiver is cancelled (cursor dropped while waiting), falls back to a
    /// direct allocation — the CRT must always receive a buffer.
    async fn acquire_buffer_async(&self, size: usize, kind: BufferKind, cursor_id: Option<CursorId>) -> PoolBuffer {
        // Fast path: if the queue is empty and there is room, allocate immediately.
        if !self.inner.allocation_queue.has_pending() && self.can_allocate(size) {
            return self.get_buffer(size, kind, cursor_id);
        }

        // Determine priority: a cursor with an active FUSE read is High (urgent),
        // everything else is Low (speculative prefetch or upload without a cursor).
        let rx = match cursor_id {
            Some(id) if self.inner.limiter.has_active_read(id) => {
                self.inner.allocation_queue.push_high(cursor_id, size, kind)
            }
            Some(id) => self.inner.allocation_queue.push_low(id, size, kind),
            None => self.inner.allocation_queue.push_high(None, size, kind), // uploads are urgent
        };
        // The only error is Canceled (cursor dropped while waiting). The CRT must always
        // receive a buffer, so fall back to a direct allocation.
        rx.await.unwrap_or_else(|_| self.get_buffer(size, kind, cursor_id))
    }

    /// Check if the given cursor has an active read overlapping the specified range.
    pub fn has_active_read_in_range(&self, cursor_id: CursorId, offset: u64, size: usize) -> bool {
        self.inner.limiter.has_active_read_in_range(cursor_id, offset, size)
    }

    // ─── Internal components exposed to the rest of the `memory` module. ──────────

    pub(super) fn stats(&self) -> &PoolStats {
        &self.inner.stats
    }

    pub(super) fn limiter(&self) -> &MemoryLimiter {
        &self.inner.limiter
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

    fn get_buffer_async(&self, size: usize, meta_request: &MetaRequest) -> impl Future<Output = Self::Buffer> + Send {
        let kind = meta_request.meta_request_type().into();
        let cursor_id = meta_request.custom_id().map(CursorId::new_from_raw);
        let pool = self.clone();
        async move { pool.acquire_buffer_async(size, kind, cursor_id).await }
    }

    fn trim(&self) -> bool {
        self.trim()
    }
}

#[derive(Debug)]
pub(super) struct PagedPoolInner {
    ordered_size_pools: Vec<SizePool>,
    stats: Arc<PoolStats>,
    limiter: MemoryLimiter,
    allocation_queue: AllocationQueue,
}

impl PagedPoolInner {
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

    fn trim(&self) -> bool {
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
}

#[derive(Debug)]
struct SizePool {
    pages: RwLock<Vec<Page>>,
    stats: Arc<SizePoolStats>,
}

impl SizePool {
    fn reserve(&self, kind: BufferKind, pool: Weak<PagedPoolInner>) -> PagedBufferPtr {
        {
            // Fast path: reserve a buffer from the existing pages (under a read lock).
            let read_pages = self.pages.read().unwrap();
            if let Some(buffer_ptr) = self.try_get_buffer_ptr(read_pages.iter(), kind, pool.clone()) {
                return buffer_ptr;
            }
        }

        // Slow path: we could not find an available buffer on the first round, so we need
        // a write lock to be able to add a page. But first, we check the existing pages again
        // in case a buffer became available while we waited for the lock or another concurrent
        // reserve already added a new page.
        let mut write_pages = self.pages.write().unwrap();
        if let Some(buffer_ptr) = self.try_get_buffer_ptr(write_pages.iter(), kind, pool.clone()) {
            return buffer_ptr;
        }

        tracing::trace!(size = self.stats.buffer_size, "allocate new memory pool page");
        let page = Page::new(self.stats.clone());
        let buffer_ptr = page.try_reserve(kind, pool).unwrap();
        write_pages.push(page);
        buffer_ptr
    }

    fn try_get_buffer_ptr<'a>(
        &self,
        mut pages: impl Iterator<Item = &'a Page>,
        kind: BufferKind,
        pool: Weak<PagedPoolInner>,
    ) -> Option<PagedBufferPtr> {
        pages.find_map(|page| page.try_reserve(kind, pool.clone()))
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
            assert_eq!(pool.reserved_buffer_count(BufferKind::Other), 0);

            let mut buffers = Vec::new();
            for _ in 0..16 {
                buffers.push(copy_from_slice(&pool, &original));
            }
            assert_eq!(pool.page_count(), 1);
            assert_eq!(pool.reserved_buffer_count(BufferKind::Other), 16);

            buffers.push(copy_from_slice(&pool, &original));
            assert_eq!(pool.page_count(), 2);
            assert_eq!(pool.reserved_buffer_count(BufferKind::Other), 17);

            assert!(!pool.trim());

            drop(buffers);

            assert_eq!(pool.page_count(), 2);
            assert_eq!(pool.reserved_buffer_count(BufferKind::Other), 0);

            assert!(pool.trim());
            assert_eq!(pool.page_count(), 0);
            assert_eq!(pool.reserved_buffer_count(BufferKind::Other), 0);
        }
    }

    #[test_matrix(&[1, 2, 3, 4, 5, 6, 7], &[5, 10], [None, Some(Duration::from_millis(1))])]
    #[test_matrix(&vec![42u8; 1000], &[128, 1024], [None, Some(Duration::from_millis(10))])]
    #[test_matrix(&vec![42u8; 10000], &[128, 1024, 2024, 8192], [None, Some(Duration::from_millis(10))])]
    fn stress_test(original: &[u8], buffer_sizes: &[usize], schedule: Option<Duration>) {
        let pool = PagedPool::config()
            .with_candidate_sizes(buffer_sizes)
            .with_no_memory_limit()
            .build();
        if let Some(duration) = schedule {
            pool.schedule_trim(duration);
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
    fn test_reserved_bytes() {
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
            let reserved = pool.reserved_bytes(kind);
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
        use crate::memory::limiter::MINIMUM_MEM_LIMIT;

        fn tight_pool(buffer_size: usize) -> PagedPool {
            PagedPool::config()
                .with_candidate_sizes([buffer_size])
                .with_memory_limit(MINIMUM_MEM_LIMIT)
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
            while pool.can_allocate(BUF) {
                blockers.push(pool.get_buffer(BUF, BufferKind::Other, None));
            }

            // get_buffer_async should now queue and not resolve.
            let mut fut = Box::pin(pool.acquire_buffer_async(BUF, BufferKind::GetObject, None));
            let waker = futures::task::noop_waker();
            let mut cx = std::task::Context::from_waker(&waker);
            assert!(std::future::Future::poll(fut.as_mut(), &mut cx).is_pending());
            assert!(pool.inner.allocation_queue.has_pending());
        }

        #[test]
        fn test_wakes_when_buffer_dropped() {
            const BUF: usize = 1024;
            let pool = tight_pool(BUF);

            let mut blockers = Vec::new();
            while pool.can_allocate(BUF) {
                blockers.push(pool.get_buffer(BUF, BufferKind::Other, None));
            }

            let pool_clone = pool.clone();
            let handle =
                std::thread::spawn(move || block_on(pool_clone.acquire_buffer_async(BUF, BufferKind::GetObject, None)));

            std::thread::sleep(std::time::Duration::from_millis(20));
            blockers.pop(); // free one buffer — should wake the pending request

            let buffer = handle.join().unwrap();
            assert!(buffer.capacity() >= BUF);
        }

        #[test]
        fn test_high_priority_served_before_low() {
            const BUF: usize = 1024;
            let pool = tight_pool(BUF);

            // Fill all memory.
            let mut blockers = Vec::new();
            while pool.can_allocate(BUF) {
                blockers.push(pool.get_buffer(BUF, BufferKind::Other, None));
            }

            // Enqueue a low-priority request (speculative, cursor with no active read).
            let pool1 = pool.clone();
            let low_handle = std::thread::spawn(move || {
                block_on(pool1.acquire_buffer_async(BUF, BufferKind::GetObject, Some(CursorId::new_from_raw(1))))
            });
            std::thread::sleep(std::time::Duration::from_millis(10));

            // Enqueue a high-priority request (upload, no cursor).
            let pool2 = pool.clone();
            let high_handle =
                std::thread::spawn(move || block_on(pool2.acquire_buffer_async(BUF, BufferKind::PutObject, None)));
            std::thread::sleep(std::time::Duration::from_millis(10));

            // Free one buffer — high priority should be served first.
            blockers.pop();
            let high_buf = high_handle.join().unwrap();
            assert!(high_buf.capacity() >= BUF);

            // Free another — low priority now gets served.
            blockers.pop();
            let low_buf = low_handle.join().unwrap();
            assert!(low_buf.capacity() >= BUF);
        }
    }
}
