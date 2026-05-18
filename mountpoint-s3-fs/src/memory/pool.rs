use std::time::Duration;

use mountpoint_s3_client::config::{MemoryPool, MetaRequest};

use crate::prefetch::CursorId;
use crate::sync::{Arc, RwLock};

use super::buffers::{PoolBuffer, PoolBufferMut};
use super::limiter::{CursorHandle, MemoryLimiter};
use super::pages::{Page, PagedBufferPtr};
use super::stats::{BufferKind, PoolStats, SizePoolStats};

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
    /// Maximum size for a primary buffer.
    ///
    /// Buffers larger than this size will be allocated from secondary memory.
    pub const MAX_BUFFER_SIZE: usize = 64 * 1024 * 1024;

    /// Default size for a primary buffer.
    ///
    /// Used when no other valid buffer size is provided when creating the pool.
    pub const DEFAULT_BUFFER_SIZE: usize = 8 * 1024 * 1024;

    /// Create a new pool, configuring primary memory with the given set of
    /// buffer sizes, if valid.
    ///
    /// Ignores invalid (0 or greater than [MAX_BUFFER_SIZE](Self::MAX_BUFFER_SIZE))
    /// or duplicate values for buffer sizes. If no valid value is provided,
    /// uses [DEFAULT_BUFFER_SIZE](Self::DEFAULT_BUFFER_SIZE).
    ///
    /// An internal [MemoryLimiter] is created with the given `mem_limit`.
    /// Buffer allocations automatically decrement the limiter's reservation counters.
    pub fn new_with_candidate_sizes(buffer_sizes: impl Into<Vec<usize>>, mem_limit: u64) -> Self {
        let mut ordered_sizes: Vec<_> = buffer_sizes.into();
        ordered_sizes.retain(|&size| size > 0 && size <= Self::MAX_BUFFER_SIZE);
        ordered_sizes.dedup();
        ordered_sizes.sort();
        if ordered_sizes.is_empty() {
            ordered_sizes.push(Self::DEFAULT_BUFFER_SIZE);
        }

        let stats = Arc::new(PoolStats::default());
        let ordered_size_pools = ordered_sizes
            .into_iter()
            .map(|buffer_size| SizePool {
                pages: Default::default(),
                stats: Arc::new(SizePoolStats::new(buffer_size, stats.clone())),
            })
            .collect();

        let limiter = MemoryLimiter::new(mem_limit);

        let inner = PagedPoolInner {
            ordered_size_pools,
            stats,
            limiter,
        };
        Self { inner: Arc::new(inner) }
    }

    /// Create a pool without effective memory limiting.
    ///
    /// This is a convenience for tests and examples that don't need memory budgeting.
    /// The internal limiter uses `u64::MAX` as its limit, so it never rejects reservations.
    pub fn new_with_candidate_sizes_unlimited(buffer_sizes: impl Into<Vec<usize>>) -> Self {
        Self::new_with_candidate_sizes(buffer_sizes, u64::MAX)
    }

    /// Create a pool with [MINIMUM_MEM_LIMIT] as the memory limit.
    pub fn new_with_candidate_sizes_minimally_limited(buffer_sizes: impl Into<Vec<usize>>) -> Self {
        use super::limiter::MINIMUM_MEM_LIMIT;
        Self::new_with_candidate_sizes(buffer_sizes, MINIMUM_MEM_LIMIT)
    }

    /// Trim empty pages in the pool.
    pub fn trim(&self) -> bool {
        self.inner.trim()
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
                let buffer_ptr = pool.reserve(kind);
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
                PoolBuffer::new_secondary(size, kind, self.inner.stats.clone())
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

    /// Internal access for the maintenance module (sibling), used by maintenance tests
    /// (which are gated `not(feature = "shuttle")`).
    #[cfg(test)]
    #[cfg_attr(feature = "shuttle", allow(dead_code))]
    pub(super) fn inner(&self) -> &Arc<PagedPoolInner> {
        &self.inner
    }

    /// Create a new cursor and return the shared state handle.
    pub fn create_cursor(&self) -> CursorHandle {
        self.inner.limiter.create_cursor(self)
    }

    /// Query available memory.
    pub fn available_mem(&self) -> u64 {
        self.inner.limiter.available_mem(&self.inner.stats)
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

    fn trim(&self) -> bool {
        self.trim()
    }
}

#[derive(Debug)]
pub(super) struct PagedPoolInner {
    ordered_size_pools: Vec<SizePool>,
    stats: Arc<PoolStats>,
    limiter: MemoryLimiter,
}

impl PagedPoolInner {
    /// Reference to the inner [`MemoryLimiter`] for sibling modules (e.g. the maintenance thread).
    pub(super) fn limiter(&self) -> &MemoryLimiter {
        &self.limiter
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
}

#[derive(Debug)]
struct SizePool {
    pages: RwLock<Vec<Page>>,
    stats: Arc<SizePoolStats>,
}

impl SizePool {
    fn reserve(&self, kind: BufferKind) -> PagedBufferPtr {
        {
            // Fast path: reserve a buffer from the existing pages (under a read lock).
            let read_pages = self.pages.read().unwrap();
            if let Some(buffer_ptr) = self.try_get_buffer_ptr(read_pages.iter(), kind) {
                return buffer_ptr;
            }
        }

        // Slow path: we could not find an available buffer on the first round, so we need
        // a write lock to be able to add a page. But first, we check the existing pages again
        // in case a buffer became available while we waited for the lock or another concurrent
        // reserve already added a new page.
        let mut write_pages = self.pages.write().unwrap();
        if let Some(buffer_ptr) = self.try_get_buffer_ptr(write_pages.iter(), kind) {
            return buffer_ptr;
        }

        tracing::trace!(size = self.stats.buffer_size, "allocate new memory pool page");
        let page = Page::new(self.stats.clone());
        let buffer_ptr = page.try_reserve(kind).unwrap();
        write_pages.push(page);
        buffer_ptr
    }

    fn try_get_buffer_ptr<'a>(
        &self,
        mut pages: impl Iterator<Item = &'a Page>,
        kind: BufferKind,
    ) -> Option<PagedBufferPtr> {
        pages.find_map(|page| page.try_reserve(kind))
    }

    fn buffer_size(&self) -> usize {
        self.stats.buffer_size
    }
}

#[cfg(test)]
mod tests {
    use std::collections::HashMap;
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
        let pool = PagedPool::new_with_candidate_sizes_unlimited(buffer_sizes);
        let bytes = copy_from_slice(&pool, original);
        assert_eq!(original, bytes.as_ref());
    }

    #[test_case(&[5, 10, 1024])]
    fn test_pages(buffer_sizes: &[usize]) {
        let pool = PagedPool::new_with_candidate_sizes_unlimited(buffer_sizes);

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
        let pool = PagedPool::new_with_candidate_sizes_unlimited(buffer_sizes);
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
    fn test_reserved_bytes() {
        let buffer_size = 1024;
        let reservations = HashMap::from([(BufferKind::GetObject, 10), (BufferKind::Other, 20)]);
        let pool = PagedPool::new_with_candidate_sizes_unlimited([buffer_size]);
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
}
