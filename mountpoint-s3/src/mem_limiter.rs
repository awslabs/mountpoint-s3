use std::sync::{atomic::Ordering, Arc};

use humansize::make_format;
use metrics::atomics::AtomicU64;
use tracing::{debug, info};

use mountpoint_s3_client::ObjectClient;

#[derive(Debug)]
pub struct MemoryLimiter<Client: ObjectClient> {
    client: Arc<Client>,
    mem_limit: u64,
    /// Actual allocated memory for data in the part queue
    prefetcher_mem_used: AtomicU64,
    /// Reserved memory for data we have requested via the request task but may not
    /// arrives yet.
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
            prefetcher_mem_used: AtomicU64::new(0),
            prefetcher_mem_reserved: AtomicU64::new(0),
            additional_mem_reserved: reserved_mem,
        }
    }

    /// Commit the actual memory used. We only record data from the prefetcher for now.
    pub fn allocate(&self, size: u64) {
        self.prefetcher_mem_used.fetch_add(size, Ordering::SeqCst);
        metrics::gauge!("prefetch.bytes_in_queue").increment(size as f64);
    }

    /// Free the actual memory used.
    pub fn free(&self, size: u64) {
        self.prefetcher_mem_used.fetch_sub(size, Ordering::SeqCst);
        metrics::gauge!("prefetch.bytes_in_queue").decrement(size as f64);
    }

    /// Reserve the memory for future uses.
    pub fn reserve(&self, size: u64) {
        self.prefetcher_mem_reserved.fetch_add(size, Ordering::SeqCst);
        metrics::gauge!("prefetch.bytes_reserved").increment(size as f64);
    }

    /// Release the reserved memory.
    pub fn release(&self, size: u64) {
        self.prefetcher_mem_reserved.fetch_sub(size, Ordering::SeqCst);
        metrics::gauge!("prefetch.bytes_reserved").decrement(size as f64);
    }

    pub fn available_mem(&self) -> u64 {
        let fs_mem_usage = self
            .prefetcher_mem_used
            .load(Ordering::SeqCst)
            .max(self.prefetcher_mem_reserved.load(Ordering::SeqCst));
        let mut available_mem = self
            .mem_limit
            .saturating_sub(fs_mem_usage)
            .saturating_sub(self.additional_mem_reserved);
        if let Some(client_stats) = self.client.mem_usage_stats() {
            let client_mem_usage = client_stats.mem_used.max(client_stats.mem_reserved);
            available_mem = available_mem.saturating_sub(client_mem_usage);
        }
        available_mem
    }

    pub fn print_total_usage(&self) {
        let formatter = make_format(humansize::BINARY);
        let prefetcher_mem_used = self.prefetcher_mem_used.load(Ordering::SeqCst);
        let prefetcher_mem_reserved = self.prefetcher_mem_reserved.load(Ordering::SeqCst);

        let effective_mem_used = prefetcher_mem_used.max(prefetcher_mem_reserved);
        let mut total_usage = effective_mem_used.saturating_add(self.additional_mem_reserved);
        if let Some(client_stats) = self.client.mem_usage_stats() {
            let effective_client_mem_usage = client_stats.mem_used.max(client_stats.mem_reserved);
            total_usage = total_usage.saturating_add(effective_client_mem_usage);

            info!(
                total_usage = formatter(total_usage),
                client_mem_used = formatter(client_stats.mem_used),
                client_mem_reserved = formatter(client_stats.mem_reserved),
                prefetcher_mem_used = formatter(prefetcher_mem_used),
                prefetcher_mem_reserved = formatter(prefetcher_mem_reserved),
                additional_mem_reserved = formatter(self.additional_mem_reserved),
                "total memory usage"
            );
        }
    }
}
