//! Traits and types for data caching.
//!
//! The data cache aims to reduce repeated fetches of S3 object content,
//! reducing both the number of requests as well as the latency for the reads.
//! Ultimately, this means reduced cost in terms of S3 billing as well as compute time.

mod in_memory_data_cache;

use std::ops::Range;

use thiserror::Error;

pub use crate::prefetch::checksummed_bytes::ChecksummedBytes;

/// Indexes blocks within a given object.
pub type BlockIndex = u64;

/// Errors returned by operations on a [DataCache]
#[derive(Debug, Error)]
pub enum DataCacheError {
    /// It was not possible to read from the cache
    #[error("Failed reading or writing from cache: {0}")]
    IoFailure(#[source] anyhow::Error),
}

pub type DataCacheResult<Value> = Result<Value, DataCacheError>;

/// Cache data with a checksum identified by some [Key].
///
/// The underlying cache is divided into blocks of equal size.
///
/// TODO: Deletion and eviction of cache entries.
/// TODO: Some version information (ETag) independent from [Key] to allow smarter eviction?
pub trait DataCache<Key> {
    /// Get block of data from the cache for the given [Key] and [BlockIndex], if available.
    ///
    /// Operation may fail due to errors, or return [None] if the block was not available in the cache.
    fn get_block(&self, cache_key: &Key, block_idx: BlockIndex) -> DataCacheResult<Option<ChecksummedBytes>>;

    /// Put block of data to the cache for the given [Key] and [BlockIndex].
    fn put_block(&self, cache_key: Key, block_idx: BlockIndex, bytes: ChecksummedBytes) -> DataCacheResult<()>;

    /// Returns the block size for the data cache.
    fn block_size(&self) -> u64;

    /// For the given range of blocks, which are present in the cache?
    /// Indices in the vector are already sorted.
    ///
    /// It is possible that the **blocks may be deleted before reading**, or may be corrupted or inaccessible.
    /// This method only indicates that a cache entry was present at the time of calling.
    /// There is no guarantee that the data will still be available at the time of reading.
    fn cached_block_indices(&self, cache_key: &Key, range: Range<BlockIndex>) -> DataCacheResult<Vec<BlockIndex>>;
}
