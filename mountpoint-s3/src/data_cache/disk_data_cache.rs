//! Module for the on-disk data cache implementation.

use std::fs;
use std::io::{ErrorKind, Read, Seek, Write};
use std::os::unix::fs::{DirBuilderExt, OpenOptionsExt};
use std::path::{Path, PathBuf};
use std::time::Instant;

use bytes::Bytes;
use linked_hash_map::LinkedHashMap;
use mountpoint_s3_crt::checksums::crc32c::{self, Crc32c};
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use thiserror::Error;
use tracing::{trace, warn};

use crate::checksums::IntegrityError;
use crate::data_cache::DataCacheError;
use crate::object::ObjectId;
use crate::sync::Mutex;

use super::{BlockIndex, ChecksummedBytes, DataCache, DataCacheResult};

/// Disk and file-layout versioning.
const CACHE_VERSION: &str = "V1";

/// Index where hashed directory names for the cache are split to avoid FS-specific limits.
const HASHED_DIR_SPLIT_INDEX: usize = 2;

/// On-disk implementation of [DataCache].
pub struct DiskDataCache {
    cache_directory: PathBuf,
    config: DiskDataCacheConfig,
    /// Tracks blocks usage. `None` when no cache limit was set.
    usage: Option<Mutex<UsageInfo<DiskBlockKey>>>,
}

/// Configuration for a [DiskDataCache].
#[derive(Debug)]
pub struct DiskDataCacheConfig {
    /// Size of data blocks.
    pub block_size: u64,
    /// How to limit the cache size.
    pub limit: CacheLimit,
}

impl Default for DiskDataCacheConfig {
    fn default() -> Self {
        Self {
            block_size: 1024 * 1024,                               // 1 MiB block size
            limit: CacheLimit::AvailableSpace { min_ratio: 0.05 }, // Preserve 5% available space
        }
    }
}

/// Limit the cache size.
#[derive(Debug)]
pub enum CacheLimit {
    Unbounded,
    TotalSize { max_size: usize },
    AvailableSpace { min_ratio: f64 },
}

/// Describes additional information about the data stored in the block.
///
/// It should be written alongside the block's data
/// and used to verify it contains the correct contents to avoid blocks being mixed up.
#[derive(Serialize, Deserialize, Debug)]
struct DiskBlockHeader {
    block_idx: BlockIndex,
    block_offset: u64,
    etag: String,
    s3_key: String,
    data_checksum: u32,
    header_checksum: u32,
}

/// Error during creation of a [DiskBlock]
#[derive(Debug, Error)]
enum DiskBlockCreationError {
    /// Data corruption detected when unpacking bytes and checksum
    #[error(transparent)]
    IntegrityError(#[from] IntegrityError),
}

/// Error during access to a [DiskBlock]
#[derive(Debug, Error)]
enum DiskBlockAccessError {
    #[error("checksum over the block's fields did not match the field content")]
    ChecksumError,
    #[error("one or more of the fields in this block were incorrect")]
    FieldMismatchError,
}

impl DiskBlockHeader {
    /// Creates a new [DiskBlockHeader]
    pub fn new(block_idx: BlockIndex, block_offset: u64, etag: String, s3_key: String, data_checksum: Crc32c) -> Self {
        let data_checksum = data_checksum.value();
        let header_checksum = Self::compute_checksum(block_idx, block_offset, &etag, &s3_key, data_checksum).value();
        DiskBlockHeader {
            block_idx,
            block_offset,
            etag,
            s3_key,
            data_checksum,
            header_checksum,
        }
    }

    fn compute_checksum(
        block_idx: BlockIndex,
        block_offset: u64,
        etag: &str,
        s3_key: &str,
        data_checksum: u32,
    ) -> Crc32c {
        let mut hasher = crc32c::Hasher::new();
        hasher.update(&block_idx.to_be_bytes());
        hasher.update(&block_offset.to_be_bytes());
        hasher.update(etag.as_bytes());
        hasher.update(s3_key.as_bytes());
        hasher.update(&data_checksum.to_be_bytes());
        hasher.finalize()
    }

    /// Validate the integrity of the contained data and return the stored data checksum.
    ///
    /// Execute this method before acting on the data contained within.
    pub fn validate(
        &self,
        s3_key: &str,
        etag: &str,
        block_idx: BlockIndex,
        block_offset: u64,
    ) -> Result<Crc32c, DiskBlockAccessError> {
        let s3_key_match = s3_key == self.s3_key;
        let etag_match = etag == self.etag;
        let block_idx_match = block_idx == self.block_idx;
        let block_offset_match = block_offset == self.block_offset;

        let data_checksum = self.data_checksum;
        if s3_key_match && etag_match && block_idx_match && block_offset_match {
            if Self::compute_checksum(block_idx, block_offset, etag, s3_key, data_checksum).value()
                != self.header_checksum
            {
                Err(DiskBlockAccessError::ChecksumError)
            } else {
                Ok(Crc32c::new(data_checksum))
            }
        } else {
            warn!(
                s3_key_match,
                etag_match, block_idx_match, "block data did not match expected values",
            );
            Err(DiskBlockAccessError::FieldMismatchError)
        }
    }
}

/// Represents a fixed-size chunk of data that can be serialized.
#[derive(Serialize, Deserialize, Debug)]
struct DiskBlock {
    /// Information describing the content of `data`, to be used to verify correctness
    header: DiskBlockHeader,
    /// Cached bytes
    data: Bytes,
}

impl DiskBlock {
    /// Create a new [DiskBlock].
    ///
    /// This may return an integrity error if the checksummed byte buffer is found to be corrupt.
    /// However, this check is not guaranteed and it shouldn't be assumed that the data within the block is not corrupt.
    fn new(
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
    ) -> Result<Self, DiskBlockCreationError> {
        let s3_key = cache_key.key().to_owned();
        let etag = cache_key.etag().as_str().to_owned();
        let (data, data_checksum) = bytes.into_inner()?;
        let header = DiskBlockHeader::new(block_idx, block_offset, etag, s3_key, data_checksum);

        Ok(DiskBlock { data, header })
    }

    /// Extract the block data, checking that fields such as S3 key, etc. match what we expect.
    ///
    /// Comparing these fields helps ensure we have not corrupted or swapped block data on disk.
    fn data(
        &self,
        cache_key: &ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
    ) -> Result<ChecksummedBytes, DiskBlockAccessError> {
        let data_checksum =
            self.header
                .validate(cache_key.key(), cache_key.etag().as_str(), block_idx, block_offset)?;
        let bytes = ChecksummedBytes::new(self.data.clone(), data_checksum);
        Ok(bytes)
    }
}

impl DiskDataCache {
    /// Create a new instance of an [DiskDataCache] with the specified configuration.
    pub fn new(cache_directory: PathBuf, config: DiskDataCacheConfig) -> Self {
        let usage = match config.limit {
            CacheLimit::Unbounded => None,
            CacheLimit::TotalSize { .. } | CacheLimit::AvailableSpace { .. } => Some(Mutex::new(UsageInfo::new())),
        };
        DiskDataCache {
            cache_directory,
            config,
            usage,
        }
    }

    /// Get the relative path for the given block.
    fn get_path_for_block_key(&self, block_key: &DiskBlockKey) -> PathBuf {
        let mut path = self.cache_directory.join(CACHE_VERSION);
        block_key.append_to_path(&mut path);
        path
    }

    fn read_block(
        &self,
        path: impl AsRef<Path>,
        cache_key: &ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
    ) -> DataCacheResult<Option<ChecksummedBytes>> {
        let mut file = match fs::File::open(path.as_ref()) {
            Ok(file) => file,
            Err(err) if err.kind() == ErrorKind::NotFound => return Ok(None),
            Err(err) => return Err(err.into()),
        };

        let mut block_version = [0; CACHE_VERSION.len()];
        file.read_exact(&mut block_version)?;
        if block_version != CACHE_VERSION.as_bytes() {
            warn!(
                found_version = ?block_version, expected_version = ?CACHE_VERSION, path = ?path.as_ref(),
                "stale block format found during reading"
            );
            return Err(DataCacheError::InvalidBlockContent);
        }

        let block: DiskBlock = match bincode::deserialize_from(&file) {
            Ok(block) => block,
            Err(e) => {
                warn!("block could not be deserialized: {:?}", e);
                return Err(DataCacheError::InvalidBlockContent);
            }
        };
        let bytes = block
            .data(cache_key, block_idx, block_offset)
            .map_err(|err| match err {
                DiskBlockAccessError::ChecksumError | DiskBlockAccessError::FieldMismatchError => {
                    DataCacheError::InvalidBlockContent
                }
            })?;

        Ok(Some(bytes))
    }

    fn write_block(&self, path: impl AsRef<Path>, block: DiskBlock) -> DataCacheResult<usize> {
        let cache_path_for_key = path
            .as_ref()
            .parent()
            .expect("path should include cache key in directory name");
        fs::DirBuilder::new()
            .mode(0o700)
            .recursive(true)
            .create(cache_path_for_key)?;

        trace!(
            key = block.header.s3_key,
            offset = block.header.block_offset,
            "writing block at {}",
            path.as_ref().display()
        );
        let mut file = fs::OpenOptions::new()
            .write(true)
            .create(true)
            .truncate(true)
            .mode(0o600)
            .open(path.as_ref())?;
        file.write_all(CACHE_VERSION.as_bytes())?;
        let serialize_result = bincode::serialize_into(&mut file, &block);
        if let Err(err) = serialize_result {
            return match *err {
                bincode::ErrorKind::Io(io_err) => return Err(DataCacheError::from(io_err)),
                _ => Err(DataCacheError::InvalidBlockContent),
            };
        };
        Ok(file.stream_position()? as usize)
    }

    fn is_limit_exceeded(&self, size: usize) -> bool {
        match self.config.limit {
            CacheLimit::Unbounded => false,
            CacheLimit::TotalSize { max_size } => size > max_size,
            CacheLimit::AvailableSpace { min_ratio } => {
                let stats = match fs2::statvfs(&self.cache_directory) {
                    Ok(stats) if stats.total_space() == 0 => {
                        warn!("unable to determine available space");
                        return false;
                    }
                    Ok(stats) => stats,
                    Err(error) => {
                        warn!(?error, "unable to determine available space");
                        return false;
                    }
                };
                (stats.available_space() as f64) < min_ratio * (stats.total_space() as f64)
            }
        }
    }

    fn evict_if_needed(&self) -> DataCacheResult<()> {
        let Some(usage) = &self.usage else {
            return Ok(());
        };

        while self.is_limit_exceeded(usage.lock().unwrap().size) {
            let Some(to_remove) = usage.lock().unwrap().evict_lru() else {
                warn!("cache limit exceeded but nothing to evict");
                return Err(DataCacheError::EvictionFailure);
            };
            let path_to_remove = self.get_path_for_block_key(&to_remove);
            trace!("evicting block at {}", path_to_remove.display());
            if let Err(remove_err) = fs::remove_file(&path_to_remove) {
                warn!("unable to remove invalid block: {:?}", remove_err);
            }
        }
        Ok(())
    }
}

/// Hash the cache key using its fields as well as the [CACHE_VERSION].
fn hash_cache_key_raw(cache_key: &ObjectId) -> [u8; 32] {
    let s3_key = cache_key.key();
    let etag = cache_key.etag();

    let mut hasher = Sha256::new();
    hasher.update(CACHE_VERSION.as_bytes());
    hasher.update(s3_key);
    hasher.update(etag.as_str());
    hasher.finalize().into()
}

impl DataCache for DiskDataCache {
    fn get_block(
        &self,
        cache_key: &ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
    ) -> DataCacheResult<Option<ChecksummedBytes>> {
        if block_offset != block_idx * self.config.block_size {
            return Err(DataCacheError::InvalidBlockOffset);
        }
        let start = Instant::now();
        let block_key = DiskBlockKey::new(cache_key, block_idx);
        let path = self.get_path_for_block_key(&block_key);
        match self.read_block(&path, cache_key, block_idx, block_offset) {
            Ok(None) => {
                // Cache miss.
                metrics::counter!("disk_data_cache.block_hit", 0);
                Ok(None)
            }
            Ok(Some(bytes)) => {
                // Cache hit.
                metrics::counter!("disk_data_cache.block_hit", 1);
                metrics::counter!("disk_data_cache.total_bytes", bytes.len() as u64, "type" => "read");
                metrics::histogram!("disk_data_cache.read_duration_us", start.elapsed().as_micros() as f64);
                if let Some(usage) = &self.usage {
                    usage.lock().unwrap().refresh(&block_key);
                }
                Ok(Some(bytes))
            }
            Err(err) => {
                // Invalid block. Count as cache miss.
                metrics::counter!("disk_data_cache.block_hit", 0);
                metrics::counter!("disk_data_cache.block_err", 1);
                match fs::remove_file(&path) {
                    Ok(()) => {
                        if let Some(usage) = &self.usage {
                            usage.lock().unwrap().remove(&block_key);
                        }
                    }
                    Err(remove_err) => warn!("unable to remove invalid block: {:?}", remove_err),
                }
                Err(err)
            }
        }
    }

    fn put_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
    ) -> DataCacheResult<()> {
        if block_offset != block_idx * self.config.block_size {
            return Err(DataCacheError::InvalidBlockOffset);
        }

        let bytes_len = bytes.len();
        let block_key = DiskBlockKey::new(&cache_key, block_idx);
        let path = self.get_path_for_block_key(&block_key);
        trace!(?cache_key, ?path, "new block will be created in disk cache");

        let block = DiskBlock::new(cache_key, block_idx, block_offset, bytes).map_err(|err| match err {
            DiskBlockCreationError::IntegrityError(_e) => DataCacheError::InvalidBlockContent,
        })?;

        {
            let eviction_start = Instant::now();
            let result = self.evict_if_needed();
            metrics::histogram!(
                "disk_data_cache.eviction_duration_us",
                eviction_start.elapsed().as_micros() as f64
            );
            result
        }?;

        let write_start = Instant::now();
        let size = self.write_block(path, block)?;
        metrics::histogram!(
            "disk_data_cache.write_duration_us",
            write_start.elapsed().as_micros() as f64
        );
        metrics::counter!("disk_data_cache.total_bytes", bytes_len as u64, "type" => "write");
        if let Some(usage) = &self.usage {
            usage.lock().unwrap().add(block_key, size);
        }

        Ok(())
    }

    fn block_size(&self) -> u64 {
        self.config.block_size
    }
}

/// Key to identify a block in the disk cache, composed of a hash of the S3 key and Etag, and the block index.
/// An S3 key may be up to 1024 UTF-8 bytes long, which exceeds the maximum UNIX file name length.
/// Instead, this key contains a hash of the S3 key and ETag to avoid the limit when used in paths.
/// The risk of collisions is mitigated as we ignore blocks read that contain the wrong S3 key, etc..
#[derive(Debug, Hash, PartialEq, Eq, Clone, Copy)]
struct DiskBlockKey {
    hashed_key: [u8; 32],
    block_index: BlockIndex,
}

impl DiskBlockKey {
    fn new(cache_key: &ObjectId, block_index: BlockIndex) -> Self {
        let hashed_key = hash_cache_key_raw(cache_key);
        Self {
            hashed_key,
            block_index,
        }
    }

    fn hex_key(&self) -> String {
        hex::encode(self.hashed_key)
    }

    fn append_to_path(&self, path: &mut PathBuf) {
        let hashed_cache_key = self.hex_key();

        // Split directories by taking the first few chars of hash to avoid hitting any FS-specific maximum number of directory entries.
        let (first, second) = hashed_cache_key.split_at(HASHED_DIR_SPLIT_INDEX);
        path.push(first);
        path.push(second);

        // Append the block index.
        path.push(format!("{:010}", self.block_index));
    }
}

/// Keeps track of entries usage and total size.
struct UsageInfo<K> {
    entries: LinkedHashMap<K, usize>,
    size: usize,
}

impl<K> UsageInfo<K>
where
    K: std::hash::Hash + Eq + std::fmt::Debug,
{
    fn new() -> Self {
        Self {
            entries: LinkedHashMap::new(),
            size: 0,
        }
    }

    /// Refresh the given key if present, marking it as the most recently used.
    /// Returns `false` if the key is not in the cache.
    fn refresh(&mut self, key: &K) -> bool {
        self.entries.get_refresh(key).is_some()
    }

    /// Add or replace a key and update the total size.
    fn add(&mut self, key: K, size: usize) {
        if let Some(previous_size) = self.entries.insert(key, size) {
            self.size = self.size.saturating_sub(previous_size);
        }

        self.size = self.size.saturating_add(size);
    }

    /// Remove a key if present and update the total size.
    fn remove(&mut self, key: &K) {
        if let Some(size) = self.entries.remove(key) {
            self.size = self.size.saturating_sub(size);
        }
    }

    /// Remove the least recently used key and update the total size.
    /// Return `None` if empty.
    fn evict_lru(&mut self) -> Option<K> {
        let Some((key, size)) = self.entries.pop_front() else {
            return None;
        };
        self.size = self.size.saturating_sub(size);
        Some(key)
    }
}

#[cfg(test)]
mod tests {
    use std::ffi::OsString;
    use std::str::FromStr;

    use super::*;

    use mountpoint_s3_client::types::ETag;
    use rand::{Rng, SeedableRng};
    use rand_chacha::ChaCha20Rng;

    #[test]
    fn test_block_format_version_requires_update() {
        let cache_key = ObjectId::new("hello-world".to_string(), ETag::for_tests());
        let data = ChecksummedBytes::from_bytes("Foo".into());
        let block = DiskBlock::new(cache_key, 100, 100 * 10, data).expect("should succeed as data checksum is valid");
        let expected_bytes: Vec<u8> = vec![
            100, 0, 0, 0, 0, 0, 0, 0, 232, 3, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 116, 101, 115, 116, 95, 101,
            116, 97, 103, 11, 0, 0, 0, 0, 0, 0, 0, 104, 101, 108, 108, 111, 45, 119, 111, 114, 108, 100, 9, 85, 128,
            46, 29, 32, 6, 192, 3, 0, 0, 0, 0, 0, 0, 0, 70, 111, 111,
        ];
        let serialized_bytes = bincode::serialize(&block).unwrap();
        assert_eq!(
            expected_bytes, serialized_bytes,
            "serialized disk format appears to have changed, version bump required"
        );
    }

    #[test]
    fn test_hash_cache_key_raw() {
        let s3_key = "a".repeat(266);
        let etag = ETag::for_tests();
        let key = ObjectId::new(s3_key, etag);
        let expected_hash = "b717d5a78ed63238b0778e7295d83e963758aa54db6e969a822f2b13ce9a3067";
        let actual_hash = hex::encode(hash_cache_key_raw(&key));
        assert_eq!(expected_hash, actual_hash);
    }

    #[test]
    fn get_path_for_block_key() {
        let cache_dir = PathBuf::from("mountpoint-cache/");
        let data_cache = DiskDataCache::new(
            cache_dir,
            DiskDataCacheConfig {
                block_size: 1024,
                limit: CacheLimit::Unbounded,
            },
        );

        let s3_key = "a".repeat(266);
        let etag = ETag::for_tests();
        let key = ObjectId::new(s3_key.to_owned(), etag);

        let block_key = DiskBlockKey::new(&key, 5);
        let hashed_cache_key = hex::encode(hash_cache_key_raw(&key));
        let split_hashed_key = hashed_cache_key.split_at(HASHED_DIR_SPLIT_INDEX);
        let expected = vec![
            "mountpoint-cache",
            CACHE_VERSION,
            split_hashed_key.0,
            split_hashed_key.1,
            "0000000005",
        ];
        let path = data_cache.get_path_for_block_key(&block_key);
        let results: Vec<OsString> = path.iter().map(ToOwned::to_owned).collect();
        assert_eq!(expected, results);
    }

    #[test]
    fn get_path_for_block_key_huge_block_index() {
        let cache_dir = PathBuf::from("mountpoint-cache/");
        let data_cache = DiskDataCache::new(
            cache_dir,
            DiskDataCacheConfig {
                block_size: 1024,
                limit: CacheLimit::Unbounded,
            },
        );

        let s3_key = "a".repeat(266);
        let etag = ETag::for_tests();
        let key = ObjectId::new(s3_key.to_owned(), etag);

        let block_key = DiskBlockKey::new(&key, 1000000000000000);
        let hashed_cache_key = hex::encode(hash_cache_key_raw(&key));
        let split_hashed_key = hashed_cache_key.split_at(HASHED_DIR_SPLIT_INDEX);
        let expected = vec![
            "mountpoint-cache",
            CACHE_VERSION,
            split_hashed_key.0,
            split_hashed_key.1,
            "1000000000000000",
        ];
        let path = data_cache.get_path_for_block_key(&block_key);
        let results: Vec<OsString> = path.iter().map(ToOwned::to_owned).collect();
        assert_eq!(expected, results);
    }

    #[test]
    fn test_put_get() {
        let data_1 = ChecksummedBytes::from_bytes("Foo".into());
        let data_2 = ChecksummedBytes::from_bytes("Bar".into());
        let data_3 = ChecksummedBytes::from_bytes("Baz".into());

        let block_size = 8 * 1024 * 1024;
        let cache_directory = tempfile::tempdir().unwrap();
        let cache = DiskDataCache::new(
            cache_directory.into_path(),
            DiskDataCacheConfig {
                block_size,
                limit: CacheLimit::Unbounded,
            },
        );
        let cache_key_1 = ObjectId::new("a".into(), ETag::for_tests());
        let cache_key_2 = ObjectId::new(
            "long-key_".repeat(100), // at least 900 chars, exceeding easily 255 chars (UNIX filename limit)
            ETag::for_tests(),
        );

        let block = cache.get_block(&cache_key_1, 0, 0).expect("cache should be accessible");
        assert!(
            block.is_none(),
            "no entry should be available to return but got {:?}",
            block,
        );

        // PUT and GET, OK?
        cache
            .put_block(cache_key_1.clone(), 0, 0, data_1.clone())
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_1, 0, 0)
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second file, OK?
        cache
            .put_block(cache_key_2.clone(), 0, 0, data_2.clone())
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_2, 0, 0)
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_2, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second block in a cache entry, OK?
        cache
            .put_block(cache_key_1.clone(), 1, block_size, data_3.clone())
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_1, 1, block_size)
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_3, entry,
            "cache entry returned should match original bytes after put"
        );

        // Entry 1's first block still intact
        let entry = cache
            .get_block(&cache_key_1, 0, 0)
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );
    }

    #[test]
    fn test_checksummed_bytes_slice() {
        let data = ChecksummedBytes::from_bytes("0123456789".into());
        let slice = data.slice(1..5);

        let cache_directory = tempfile::tempdir().unwrap();
        let cache = DiskDataCache::new(
            cache_directory.into_path(),
            DiskDataCacheConfig {
                block_size: 8 * 1024 * 1024,
                limit: CacheLimit::Unbounded,
            },
        );
        let cache_key = ObjectId::new("a".into(), ETag::for_tests());

        cache
            .put_block(cache_key.clone(), 0, 0, slice.clone())
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key, 0, 0)
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            slice.into_bytes().expect("original slice should be valid"),
            entry.into_bytes().expect("returned entry should be valid"),
            "cache entry returned should match original slice after put"
        );
    }

    #[test]
    fn test_eviction() {
        const BLOCK_SIZE: usize = 100 * 1024;
        const LARGE_OBJECT_SIZE: usize = 1024 * 1024;
        const SMALL_OBJECT_SIZE: usize = LARGE_OBJECT_SIZE / 2;
        const CACHE_LIMIT: usize = LARGE_OBJECT_SIZE;

        fn create_random(seed: u64, size: usize) -> ChecksummedBytes {
            let mut rng = ChaCha20Rng::seed_from_u64(seed);
            let mut body = vec![0u8; size];
            rng.fill(&mut body[..]);

            ChecksummedBytes::from_bytes(body.into())
        }

        fn is_block_in_cache(
            cache: &DiskDataCache,
            cache_key: &ObjectId,
            block_idx: u64,
            expected_bytes: &ChecksummedBytes,
        ) -> bool {
            if let Some(retrieved) = cache
                .get_block(cache_key, block_idx, block_idx * (BLOCK_SIZE) as u64)
                .expect("cache should be accessible")
            {
                assert_eq!(
                    retrieved.clone().into_bytes().expect("retrieved bytes should be valid"),
                    expected_bytes
                        .clone()
                        .into_bytes()
                        .expect("original bytes should be valid")
                );
                true
            } else {
                false
            }
        }

        let large_object = create_random(0x12345678, LARGE_OBJECT_SIZE);
        let large_object_blocks: Vec<_> = (0..large_object.len())
            .step_by(BLOCK_SIZE)
            .map(|offset| large_object.slice(offset..(large_object.len().min(offset + BLOCK_SIZE))))
            .collect();
        let large_object_key = ObjectId::new("large".into(), ETag::for_tests());

        let small_object = create_random(0x23456789, SMALL_OBJECT_SIZE);
        let small_object_blocks: Vec<_> = (0..small_object.len())
            .step_by(BLOCK_SIZE)
            .map(|offset| small_object.slice(offset..(small_object.len().min(offset + BLOCK_SIZE))))
            .collect();
        let small_object_key = ObjectId::new("small".into(), ETag::for_tests());

        let cache_directory = tempfile::tempdir().unwrap();
        let cache = DiskDataCache::new(
            cache_directory.into_path(),
            DiskDataCacheConfig {
                block_size: BLOCK_SIZE as u64,
                limit: CacheLimit::TotalSize { max_size: CACHE_LIMIT },
            },
        );

        // Put all of large_object
        for (block_idx, bytes) in large_object_blocks.iter().enumerate() {
            cache
                .put_block(
                    large_object_key.clone(),
                    block_idx as u64,
                    (block_idx * BLOCK_SIZE) as u64,
                    bytes.clone(),
                )
                .unwrap();
        }

        // Put all of small_object
        for (block_idx, bytes) in small_object_blocks.iter().enumerate() {
            cache
                .put_block(
                    small_object_key.clone(),
                    block_idx as u64,
                    (block_idx * BLOCK_SIZE) as u64,
                    bytes.clone(),
                )
                .unwrap();
        }

        let count_small_object_blocks_in_cache = small_object_blocks
            .iter()
            .enumerate()
            .filter(|&(block_idx, bytes)| is_block_in_cache(&cache, &small_object_key, block_idx as u64, bytes))
            .count();
        assert_eq!(
            count_small_object_blocks_in_cache,
            small_object_blocks.len(),
            "All blocks for small object should still be in the cache"
        );

        let count_large_object_blocks_in_cache = large_object_blocks
            .iter()
            .enumerate()
            .filter(|&(block_idx, bytes)| is_block_in_cache(&cache, &large_object_key, block_idx as u64, bytes))
            .count();
        assert!(
            count_large_object_blocks_in_cache < large_object_blocks.len(),
            "Some blocks for the large object should have been evicted"
        );
    }

    #[test]
    fn data_block_extract_checks() {
        let data_1 = ChecksummedBytes::from_bytes("Foo".into());

        let cache_key_1 = ObjectId::new("a".into(), ETag::for_tests());
        let cache_key_2 = ObjectId::new("b".into(), ETag::for_tests());
        let cache_key_3 = ObjectId::new("a".into(), ETag::from_str("badetag").unwrap());

        let block = DiskBlock::new(cache_key_1.clone(), 0, 0, data_1.clone()).expect("should have no checksum err");
        block
            .data(&cache_key_1, 1, 0)
            .expect_err("should fail due to incorrect block index");
        block
            .data(&cache_key_1, 0, 1024)
            .expect_err("should fail due to incorrect block offset");
        block
            .data(&cache_key_2, 0, 0)
            .expect_err("should fail due to incorrect s3 key in cache key");
        block
            .data(&cache_key_3, 0, 0)
            .expect_err("should fail due to incorrect etag in cache key");
        let unpacked_bytes = block
            .data(&cache_key_1, 0, 0)
            .expect("should be OK as all fields match");
        assert_eq!(data_1, unpacked_bytes, "data block should return original bytes");
    }

    #[test]
    fn validate_block_header() {
        let block_idx = 0;
        let block_offset = 0;
        let etag = ETag::for_tests();
        let s3_key = String::from("s3/key");
        let data_checksum = Crc32c::new(42);
        let mut header = DiskBlockHeader::new(
            block_idx,
            block_offset,
            etag.as_str().to_owned(),
            s3_key.clone(),
            data_checksum,
        );

        let checksum = header
            .validate(&s3_key, etag.as_str(), block_idx, block_offset)
            .expect("should be OK with valid fields and checksum");
        assert_eq!(data_checksum, checksum);

        // Bad fields
        let err = header
            .validate("hello", etag.as_str(), block_idx, block_offset)
            .expect_err("should fail with invalid s3_key");
        assert!(matches!(err, DiskBlockAccessError::FieldMismatchError));
        let err = header
            .validate(&s3_key, "bad etag", block_idx, block_offset)
            .expect_err("should fail with invalid etag");
        assert!(matches!(err, DiskBlockAccessError::FieldMismatchError));
        let err = header
            .validate(&s3_key, etag.as_str(), 5, block_offset)
            .expect_err("should fail with invalid block idx");
        assert!(matches!(err, DiskBlockAccessError::FieldMismatchError));
        let err = header
            .validate(&s3_key, etag.as_str(), block_idx, 1024)
            .expect_err("should fail with invalid block offset");
        assert!(matches!(err, DiskBlockAccessError::FieldMismatchError));

        // Bad checksum
        header.header_checksum = 23;
        let err = header
            .validate(&s3_key, etag.as_str(), block_idx, block_offset)
            .expect_err("should fail with invalid checksum");
        assert!(matches!(err, DiskBlockAccessError::ChecksumError));
    }
}
