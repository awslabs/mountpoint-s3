use std::sync::atomic::Ordering;

use humansize::make_format;
use metrics::atomics::AtomicU64;
use tracing::debug;

/// `MemoryLimiter` tracks memory used by Mountpoint and makes decisions if a new memory reservation request can be accepted.
/// Currently the only metric which we take into account is the memory reserved by prefetcher instances for the data requested or
/// fetched from CRT client. Single instance of this struct is shared among all of the prefetchers (file handles).
///
/// Each file handle upon creation makes an initial reservation request with a minimal read window size of `1MiB + 128KiB`. This
/// is accepted unconditionally since we want to allow any file handle to make progress even if that means going over the memory
/// limit. Additional reservations for a file handle arise when data is being read from fuse **faster** than it arrives from the
/// client (PartQueueStall). Those reservations may be rejected if there is no available memory.
///
/// Release of the reserved memory happens on one of the following events:
/// 1) prefetcher is destroyed (`PartQueue` holding the data should be dropped and the CRT request cancelled before this release)
/// 2) prefetcher's read window is scaled down (we wait for the previously requested data to be consumed)
/// 3) prefetcher is approaching the end of the request, in which case we can be sure that reservation in full won't be needed.
///
/// Following is the visualisation of a single prefetcher instance's data stream:
///
/// backwards_seek_start  next_read_offset       in_part_queue                 window_end_offset      preferred_window_end_offset
///  │                    │                           │                               │                            │
/// ─┼────────────────────┼───────────────────────────┼───────────────────────────────┼────────────────────────────┼───────────-►
///  │                    ├───────────────────────────┤                               │                            │
///  └────────────────────┤   certainly used memory   └───────────────────────────────┤                            │
///  memory not accounted │                         in CRT buffer, or callback queue  └────────────────────────────┤
///                       │                         (usage may be less than reserved)  will be used after the      │
///                       │                                                            window increase             │
///                       └────────────────────────────────────────────────────────────────────────────────────────┘
///                                          preferred_read_window_size (reserved in MemoryLimiter)
///
#[derive(Debug)]
pub struct MemoryLimiter {
    mem_limit: u64,
    /// Reserved memory for data we had requested via the request task but may not
    /// arrived yet.
    prefetcher_mem_reserved: AtomicU64,
    /// Additional reserved memory for other non-buffer usage like storing metadata
    additional_mem_reserved: u64,
}

impl MemoryLimiter {
    pub fn new(mem_limit: u64) -> Self {
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
            prefetcher_mem_reserved: AtomicU64::new(0),
            additional_mem_reserved: reserved_mem,
        }
    }

    /// Reserve the memory for future uses. Always succeeds, even if it means going beyond
    /// the configured memory limit.
    pub fn reserve(&self, size: u64) {
        self.prefetcher_mem_reserved.fetch_add(size, Ordering::SeqCst);
        metrics::gauge!("prefetch.bytes_reserved").increment(size as f64);
    }

    /// Reserve the memory for future uses. If there is not enough memory returns `false`.
    pub fn try_reserve(&self, size: u64, min_available: u64) -> bool {
        loop {
            let prefetcher_mem_reserved = self.prefetcher_mem_reserved.load(Ordering::SeqCst);
            let new_prefetcher_mem_reserved = prefetcher_mem_reserved.saturating_add(size);
            let total_mem_usage = prefetcher_mem_reserved.saturating_add(self.additional_mem_reserved);
            let new_total_mem_usage = new_prefetcher_mem_reserved.saturating_add(self.additional_mem_reserved);
            if new_total_mem_usage > self.mem_limit - min_available {
                debug!(
                    "not enough memory to reserve, current usage: {}, new (if scaled up): {}, allowed diff: {}",
                    total_mem_usage, new_total_mem_usage, min_available,
                );
                return false;
            }
            match self.prefetcher_mem_reserved.compare_exchange_weak(
                prefetcher_mem_reserved,
                new_prefetcher_mem_reserved,
                Ordering::SeqCst,
                Ordering::SeqCst,
            ) {
                Ok(_) => {
                    metrics::gauge!("prefetch.bytes_reserved").increment(size as f64);
                    return true;
                }
                Err(_) => continue, // another thread updated the atomic before us, trying again
            }
        }
    }

    /// Release the reserved memory.
    pub fn release(&self, size: u64) {
        self.prefetcher_mem_reserved.fetch_sub(size, Ordering::SeqCst);
        metrics::gauge!("prefetch.bytes_reserved").decrement(size as f64);
    }

    pub fn available_mem(&self) -> u64 {
        let fs_mem_usage = self.prefetcher_mem_reserved.load(Ordering::SeqCst);
        self.mem_limit
            .saturating_sub(fs_mem_usage)
            .saturating_sub(self.additional_mem_reserved)
    }
}
