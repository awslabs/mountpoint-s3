use std::{sync::atomic::Ordering, time::Instant};

use humansize::make_format;
use metrics::atomics::AtomicU64;
use mountpoint_s3_client::ObjectClient;
use tracing::{debug, trace};

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
/// 1) the memory reserved by prefetcher instances for the data requested or fetched from CRT client.
/// 2) the memory reserved by S3 client if it can report.
///
/// Single instance of this struct is shared among all of the prefetchers (file handles).
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
pub struct MemoryLimiter {
    mem_limit: u64,
    /// Reserved memory for allocations we are tracking, such as buffers we allocate for prefetching.
    /// The memory may not be used yet but has been reserved.
    mem_reserved: AtomicU64,
    /// Additional reserved memory for other non-buffer usage like storing metadata
    additional_mem_reserved: u64,
    // We will also take client's reserved memory into account because even if the
    // prefetch takes control over the entire read path but we don't record or control
    // memory usage on the write path today, so we will rely on the client's stats
    // for "other buffers" and adjust the prefetcher read window accordingly.
    get_client_mem: Box<dyn Fn() -> u64 + Send + Sync + 'static>,
}

impl std::fmt::Debug for MemoryLimiter {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("MemoryLimiter")
            .field("mem_limit", &self.mem_limit)
            .field("mem_reserved", &self.mem_reserved)
            .field("additional_mem_reserved", &self.additional_mem_reserved)
            .finish_non_exhaustive()
    }
}

impl MemoryLimiter {
    pub fn new<Client>(client: Client, mem_limit: u64) -> Self
    where
        Client: ObjectClient + Send + Sync + 'static,
    {
        let min_reserved = 128 * 1024 * 1024;
        let reserved_mem = (mem_limit / 8).max(min_reserved);
        let formatter = make_format(humansize::BINARY);
        debug!(
            "target memory usage is {} with {} reserved memory",
            formatter(mem_limit),
            formatter(reserved_mem)
        );
        Self {
            mem_limit,
            mem_reserved: AtomicU64::new(0),
            additional_mem_reserved: reserved_mem,
            get_client_mem: Box::new(move || {
                client
                    .mem_usage_stats()
                    .map_or(0, |stats| stats.primary_allocated.saturating_add(stats.secondary_used))
            }),
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
            let client_mem_allocated = self.client_mem_allocated();
            let new_total_mem_usage = new_mem_reserved
                .saturating_add(client_mem_allocated)
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
        let client_mem_allocated = self.client_mem_allocated();
        self.mem_limit
            .saturating_sub(mem_reserved)
            .saturating_sub(client_mem_allocated)
            .saturating_sub(self.additional_mem_reserved)
    }

    // Get allocated memory for the client. Currently, only the CRT client is able to report its buffer pool stats.
    // The CRT allocates memory in two areas. The first one is primary storage where memory is allocated in blocks
    // and we can get number of allocated bytes from `primary_allocated` stat. Another area is called secondary storage
    // where memory is allocated exactly equal to the used memory. So total allocated memory for the CRT client would
    // be `primary_allocated` + `secondary_used`.
    fn client_mem_allocated(&self) -> u64 {
        (self.get_client_mem)()
    }
}
