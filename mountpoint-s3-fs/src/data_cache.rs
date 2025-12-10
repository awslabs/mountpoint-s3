//! Traits and types for data caching.
//!
//! The data cache aims to reduce repeated fetches of S3 object content,
//! reducing both the number of requests as well as the latency for the reads.
//! Ultimately, this means reduced cost in terms of S3 billing as well as compute time.

mod cache_directory;
mod disk_data_cache;
mod express_data_cache;
mod in_memory_data_cache;
mod multilevel_cache;

use async_trait::async_trait;
use thiserror::Error;

pub use crate::checksums::ChecksummedBytes;
pub use crate::data_cache::cache_directory::ManagedCacheDir;
pub use crate::data_cache::disk_data_cache::{CacheLimit, DiskDataCache, DiskDataCacheConfig};
pub use crate::data_cache::express_data_cache::{ExpressDataCache, ExpressDataCacheConfig, build_prefix, get_s3_key};
pub use crate::data_cache::in_memory_data_cache::InMemoryDataCache;
pub use crate::data_cache::multilevel_cache::MultilevelDataCache;

use crate::object::ObjectId;

/// Indexes blocks within a given object.
pub type BlockIndex = u64;

/// Errors returned by operations on a [DataCache]
#[derive(Debug, Error)]
pub enum DataCacheError {
    #[error("IO error when reading or writing from cache: {0}")]
    IoFailure(#[source] anyhow::Error),
    #[error("Block header was not valid: {0}")]
    InvalidBlockHeader(String),
    #[error("Block checksum was not valid")]
    InvalidBlockChecksum,
    #[error("Block content was not valid/readable")]
    InvalidBlockContent,
    #[error("Block offset does not match block index")]
    InvalidBlockOffset,
    #[error("Error while trying to evict cache content")]
    EvictionFailure,
}

pub type DataCacheResult<Value> = Result<Value, DataCacheError>;

/// Data cache for fixed-size checksummed buffers.
///
/// TODO: Deletion and eviction of cache entries.
/// TODO: Some version information (ETag) independent from [ObjectId] to allow smarter eviction?
#[async_trait]
pub trait DataCache {
    /// Get block of data from the cache for the given [ObjectId] and [BlockIndex], if available.
    ///
    /// Operation may fail due to errors, or return [None] if the block was not available in the cache.
    async fn get_block(
        &self,
        cache_key: &ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        object_size: usize,
    ) -> DataCacheResult<Option<ChecksummedBytes>>;

    /// Put block of data to the cache for the given [ObjectId] and [BlockIndex].
    async fn put_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
        object_size: usize,
    ) -> DataCacheResult<()>;

    /// Returns the block size for the data cache.
    fn block_size(&self) -> u64;
}

/// Configuration for the data cache.
///
/// Can be configured to enable a local disk cache, a shared cache
/// in S3 Express One Zone, or both.
#[derive(Debug, Default)]
pub struct DataCacheConfig {
    pub disk_cache_config: Option<DiskDataCacheConfig>,
    pub express_cache_config: Option<ExpressDataCacheConfig>,
}
