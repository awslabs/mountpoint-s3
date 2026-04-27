use std::{sync::atomic::Ordering, time::Instant};

use dashmap::DashMap;
use humansize::make_format;
use metrics::atomics::AtomicU64;
use tracing::{debug, trace};

use crate::memory::PagedPool;
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
/// Incremental uploader instances check available memory before allocating buffers to queue append
/// requests. Under memory pressure, each instance will limit to a single buffer.
#[derive(Debug)]
pub struct MemoryLimiter {
    mem_limit: u64,
    /// Global total of reserved memory (lock-free). Used in budget checks (try_reserve, available_mem).
    mem_reserved: Arc<AtomicU64>,
    /// Per-handle reservation tracking. Used for accurate release on handle drop.
    mem_reserved_per_handle: Arc<DashMap<HandleId, AtomicU64>>,
    /// Additional reserved memory for other non-buffer usage like storing metadata
    additional_mem_reserved: u64,
    /// Memory pool used by the S3 client and disk cache.
    /// We rely on the pool's stats to account for all buffer allocations (e.g. GetObject, DiskCache, PutObject buffers).
    pool: PagedPool,
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
        let mem_reserved = Arc::new(AtomicU64::new(0));
        let mem_reserved_cb = mem_reserved.clone();
        let mem_reserved_per_handle: Arc<DashMap<HandleId, AtomicU64>> = Arc::new(DashMap::new());
        let per_handle_cb = mem_reserved_per_handle.clone();
        pool.set_on_reserve(Arc::new(move |bytes, custom_id| {
            // Saturating subtraction prevents underflow if this callback races with
            // release_handle during meta-request cancellation. In that case the global
            // clamps to 0 — a harmless under-count corrected when the pool buffer is dropped.
            let mut current = mem_reserved_cb.load(Ordering::SeqCst);
            loop {
                let new_val = current.saturating_sub(bytes as u64);
                match mem_reserved_cb.compare_exchange_weak(current, new_val, Ordering::SeqCst, Ordering::SeqCst) {
                    Ok(_) => break,
                    Err(actual) => current = actual,
                }
            }
            if let Some(handle_id) = custom_id
                && let Some(reservation) = per_handle_cb.get(&HandleId::new(handle_id))
            {
                reservation.fetch_sub(bytes as u64, Ordering::SeqCst);
            }
        }));
        Self {
            pool,
            mem_limit,
            mem_reserved,
            mem_reserved_per_handle,
            additional_mem_reserved: reserved_mem,
        }
    }

    /// Reserve the memory for future uses. Always succeeds, even if it means going beyond
    /// the configured memory limit.
    pub fn reserve(&self, handle_id: HandleId, area: BufferArea, size: u64) {
        self.add_reservation(handle_id, size);
        metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).increment(size as f64);
    }

    /// Reserve the memory for future uses. If there is not enough memory returns `false`.
    pub fn try_reserve(&self, handle_id: HandleId, area: BufferArea, size: u64) -> bool {
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
                    self.mem_reserved_per_handle
                        .entry(handle_id)
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

    /// Release the reserved memory.
    pub fn release(&self, handle_id: HandleId, area: BufferArea, size: u64) {
        self.sub_reservation(handle_id, size);
        metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).decrement(size as f64);
    }

    /// Release all remaining reservation for a handle and remove it from tracking.
    pub fn release_handle(&self, handle_id: HandleId, area: BufferArea) {
        if let Some((_, reservation)) = self.mem_reserved_per_handle.remove(&handle_id) {
            let remaining = reservation.load(Ordering::SeqCst);
            self.mem_reserved.fetch_sub(remaining, Ordering::SeqCst);
            metrics::gauge!("mem.bytes_reserved", "area" => area.as_str()).decrement(remaining as f64);
        }
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

    /// Increment both the global total and the per-handle reservation.
    fn add_reservation(&self, handle_id: HandleId, size: u64) {
        self.mem_reserved.fetch_add(size, Ordering::SeqCst);
        self.mem_reserved_per_handle
            .entry(handle_id)
            .or_default()
            .fetch_add(size, Ordering::SeqCst);
    }

    /// Decrement both the global total and the per-handle reservation.
    fn sub_reservation(&self, handle_id: HandleId, size: u64) {
        self.mem_reserved.fetch_sub(size, Ordering::SeqCst);
        if let Some(reservation) = self.mem_reserved_per_handle.get(&handle_id) {
            reservation.fetch_sub(size, Ordering::SeqCst);
        }
    }

    /// Get reserved memory from the memory pool for buffers not tracked via [Self::mem_reserved].
    fn pool_mem_reserved(&self) -> u64 {
        self.pool.total_reserved_bytes() as u64
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::memory::{BufferKind, PagedPool};

    fn new_limiter(buffer_size: usize, mem_limit: u64) -> (MemoryLimiter, PagedPool) {
        let pool = PagedPool::new_with_candidate_sizes([buffer_size]);
        let limiter = MemoryLimiter::new(pool.clone(), mem_limit);
        (limiter, pool)
    }

    #[test]
    fn test_reserve_and_release_handle() {
        let (limiter, _pool) = new_limiter(1024, MINIMUM_MEM_LIMIT);
        let handle = HandleId::new(1);

        limiter.reserve(handle, BufferArea::Prefetch, 100);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 100);

        limiter.release_handle(handle, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(limiter.mem_reserved_per_handle.is_empty());
    }

    #[test]
    fn test_pool_allocation_decrements_mem_reserved() {
        let (limiter, pool) = new_limiter(1024, MINIMUM_MEM_LIMIT);
        let handle = HandleId::new(1);

        // Reserve 1024 bytes of intent
        limiter.reserve(handle, BufferArea::Prefetch, 1024);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 1024);

        // Pool allocation triggers on_reserve callback, decrementing mem_reserved
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, None);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
    }

    #[test]
    fn test_reserve_pool_allocate_release_handle() {
        let (limiter, pool) = new_limiter(1024, MINIMUM_MEM_LIMIT);
        let handle = HandleId::new(1);

        // Reserve 2048 bytes of intent
        limiter.reserve(handle, BufferArea::Prefetch, 2048);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 2048);

        // Pool allocates 1024 — callback decrements both global and per-handle
        let _buffer = pool.get_buffer_mut(1024, BufferKind::GetObject, Some(handle.as_raw()));
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 1024);

        // release_handle releases the remaining per-handle balance (2048 - 1024 = 1024)
        limiter.release_handle(handle, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(limiter.mem_reserved_per_handle.is_empty());
    }

    #[test]
    fn test_try_reserve_respects_limit() {
        let (limiter, _pool) = new_limiter(1024, MINIMUM_MEM_LIMIT);
        let handle = HandleId::new(1);

        // Fill up to the limit (minus additional_mem_reserved)
        let available = limiter.available_mem();
        limiter.reserve(handle, BufferArea::Prefetch, available);

        // Should fail — no room left
        assert!(!limiter.try_reserve(handle, BufferArea::Prefetch, 1));
    }

    #[test]
    fn test_multiple_handles_independent() {
        let (limiter, _pool) = new_limiter(1024, MINIMUM_MEM_LIMIT);
        let handle1 = HandleId::new(1);
        let handle2 = HandleId::new(2);

        limiter.reserve(handle1, BufferArea::Prefetch, 100);
        limiter.reserve(handle2, BufferArea::Prefetch, 200);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 300);

        // Release handle1 — only its 100 bytes
        limiter.release_handle(handle1, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 200);
        assert!(!limiter.mem_reserved_per_handle.contains_key(&handle1));

        // Handle2 still tracked
        assert!(limiter.mem_reserved_per_handle.contains_key(&handle2));

        limiter.release_handle(handle2, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
        assert!(limiter.mem_reserved_per_handle.is_empty());
    }

    #[test]
    fn test_release_handle_idempotent() {
        let (limiter, _pool) = new_limiter(1024, MINIMUM_MEM_LIMIT);
        let handle = HandleId::new(1);

        limiter.reserve(handle, BufferArea::Prefetch, 100);
        limiter.release_handle(handle, BufferArea::Prefetch);

        // Second call is a no-op
        limiter.release_handle(handle, BufferArea::Prefetch);
        assert_eq!(limiter.mem_reserved.load(Ordering::SeqCst), 0);
    }
}
