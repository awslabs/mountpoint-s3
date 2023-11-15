//! Traits and types for data caching.
//!
//! The data cache aims to reduce repeated fetches of S3 object content,
//! reducing both the number of requests as well as the latency for the reads.
//! Ultimately, this means reduced cost in terms of S3 billing as well as compute time.

mod disk_data_cache;
mod in_memory_data_cache;

use mountpoint_s3_client::types::ETag;
use thiserror::Error;

pub use crate::checksums::ChecksummedBytes;
pub use crate::data_cache::disk_data_cache::DiskDataCache;
pub use crate::data_cache::in_memory_data_cache::InMemoryDataCache;

/// Struct representing a key for accessing an entry in a [DataCache].
#[derive(Clone, Debug, Hash, PartialEq, Eq)]
pub struct CacheKey {
    pub s3_key: String,
    pub etag: ETag,
}

/// Indexes blocks within a given object.
pub type BlockIndex = u64;

/// Errors returned by operations on a [DataCache]
#[derive(Debug, Error)]
pub enum DataCacheError {
    #[error("IO error when reading or writing from cache: {0}")]
    IoFailure(#[from] std::io::Error),
    #[error("Block content was not valid/readable")]
    InvalidBlockContent,
}

pub type DataCacheResult<Value> = Result<Value, DataCacheError>;

/// Data cache for fixed-size checksummed buffers.
///
/// TODO: Deletion and eviction of cache entries.
/// TODO: Some version information (ETag) independent from [CacheKey] to allow smarter eviction?
pub trait DataCache {
    /// Get block of data from the cache for the given [CacheKey] and [BlockIndex], if available.
    ///
    /// Operation may fail due to errors, or return [None] if the block was not available in the cache.
    fn get_block(&self, cache_key: &CacheKey, block_idx: BlockIndex) -> DataCacheResult<Option<ChecksummedBytes>>;

    /// Put block of data to the cache for the given [CacheKey] and [BlockIndex].
    fn put_block(&self, cache_key: CacheKey, block_idx: BlockIndex, bytes: ChecksummedBytes) -> DataCacheResult<()>;

    /// Returns the block size for the data cache.
    fn block_size(&self) -> u64;
}
