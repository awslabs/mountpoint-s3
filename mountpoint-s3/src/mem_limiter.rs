use std::sync::{atomic::Ordering, Arc};

use humansize::make_format;
use metrics::atomics::AtomicU64;
use tracing::debug;

use mountpoint_s3_client::ObjectClient;

#[derive(Debug)]
pub struct MemoryLimiter<Client: ObjectClient> {
    client: Arc<Client>,
    mem_limit: u64,
    /// Reserved memory for data we had requested via the request task but may not
    /// arrived yet.
    prefetcher_mem_reserved: AtomicU64,
    /// Additional reserved memory for other non-buffer usage like storing metadata
    additional_mem_reserved: u64,
}

impl<Client: ObjectClient> MemoryLimiter<Client> {
    pub fn new(client: Arc<Client>, mem_limit: u64) -> Self {
        let min_reserved = 128 * 1024 * 1024;
        let reserved_mem = (mem_limit / 8).max(min_reserved);
        let formatter = make_format(humansize::BINARY);
        debug!(
            "target memory usage is {} with {} reserved memory",
            formatter(mem_limit),
            formatter(reserved_mem)
        );
        Self {
            client,
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

    pub fn log_total_usage(&self) {
        let formatter = make_format(humansize::BINARY);
        let prefetcher_mem_reserved = self.prefetcher_mem_reserved.load(Ordering::SeqCst);

        let mut total_usage = prefetcher_mem_reserved.saturating_add(self.additional_mem_reserved);
        if let Some(client_stats) = self.client.mem_usage_stats() {
            let effective_client_mem_usage = client_stats.mem_used.max(client_stats.mem_reserved);
            total_usage = total_usage.saturating_add(effective_client_mem_usage);

            debug!(
                total_usage = formatter(total_usage),
                client_mem_used = formatter(client_stats.mem_used),
                client_mem_reserved = formatter(client_stats.mem_reserved),
                prefetcher_mem_reserved = formatter(prefetcher_mem_reserved),
                additional_mem_reserved = formatter(self.additional_mem_reserved),
                "total memory usage"
            );
        }
    }
}
