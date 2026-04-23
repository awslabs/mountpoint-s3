use std::{sync::atomic::Ordering, time::Instant};

use humansize::make_format;
use metrics::atomics::AtomicU64;
use tracing::{debug, trace};

use crate::memory::PagedPool;
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
/// 1) the memory directly reserved on the limiter by prefetcher and (incremental) uploader instances.
/// 2) the memory reserved on the memory pool by the CRT client for any request (downloads, atomic uploads, etc.)
///
/// Single instance of this struct is shared among all of the prefetchers (file handles) and (incremental) uploaders.
///
/// Each file handle makes an initial reservation request with a minimal read window size of `1MiB + 128KiB` on the first
/// `read()` call. This is accepted unconditionally since we want to allow any file handle to make
/// progress even if that means going over the memory limit. Additional reservations for a file handle arise when the
/// backpressure read window is incremented to fetch more data from underlying part streams. Those reservations may be
/// rejected if there is no available memory.
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
    mem_reserved: Arc<AtomicU64>,
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
        pool.set_on_reserve(Arc::new(move |bytes| {
            mem_reserved_cb.fetch_sub(bytes as u64, Ordering::SeqCst);
        }));
        Self {
            pool,
            mem_limit,
            mem_reserved,
            additional_mem_reserved: reserved_mem,
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

    /// Get reserved memory from the memory pool for buffers not tracked via [Self::mem_reserved].
    fn pool_mem_reserved(&self) -> u64 {
        // All pool buffer kinds are accounted for here. Note that after task 2 is complete,
        // mem_reserved will be decremented on pool allocation, so there will be no double-counting
        // for buffers (which currently go through both mem_reserved and the pool).
        self.pool.total_reserved_bytes() as u64
    }
}
