//! Module for the on-disk data cache implementation.

use std::fs;
use std::io::{ErrorKind, Read, Write};
use std::os::unix::fs::{DirBuilderExt, PermissionsExt};
use std::path::{Path, PathBuf};
use std::time::Instant;

use async_trait::async_trait;
use bincode::config::{Configuration, Fixint, Limit, LittleEndian};
use bincode::error::{DecodeError, EncodeError};
use bincode::{Decode, Encode};
use bytes::Bytes;
use linked_hash_map::LinkedHashMap;
use mountpoint_s3_client::checksums::crc32c::{self, Crc32c};
use sha2::{Digest, Sha256};
use tempfile::NamedTempFile;
use thiserror::Error;
use tracing::{trace, warn};

use crate::checksums::IntegrityError;
use crate::data_cache::DataCacheError;
use crate::memory::PagedPool;
use crate::object::ObjectId;
use crate::sync::Mutex;

use super::{BlockIndex, ChecksummedBytes, DataCache, DataCacheResult};

/// Disk and file-layout versioning.
const CACHE_VERSION: &str = "V2";

/// Index where hashed directory names for the cache are split to avoid FS-specific limits.
const HASHED_DIR_SPLIT_INDEX: usize = 2;

/// On-disk implementation of [DataCache].
pub struct DiskDataCache {
    config: DiskDataCacheConfig,
    /// Tracks blocks usage. `None` when no cache limit was set.
    usage: Option<Mutex<UsageInfo<DiskBlockKey>>>,
    pool: Option<PagedPool>,
}

/// Configuration for a [DiskDataCache].
#[derive(Debug)]
pub struct DiskDataCacheConfig {
    pub cache_directory: PathBuf,
    /// Size of data blocks.
    pub block_size: u64,
    /// How to limit the cache size.
    pub limit: CacheLimit,
}

/// Limit the cache size.
#[derive(Debug)]
pub enum CacheLimit {
    Unbounded,
    TotalSize { max_size: usize },
    AvailableSpace { min_ratio: f64 },
}

impl Default for CacheLimit {
    fn default() -> Self {
        CacheLimit::AvailableSpace { min_ratio: 0.05 } // Preserve 5% available space
    }
}

/// Describes additional information about the data stored in the block.
///
/// It should be written alongside the block's data
/// and used to verify it contains the correct contents to avoid blocks being mixed up.
#[derive(Encode, Decode, Debug)]
struct DiskBlockHeader {
    block_idx: BlockIndex,
    block_offset: u64,
    block_len: u64,
    etag: String,
    s3_key: String,
    data_checksum: u32,
    header_checksum: u32,
}

/// Max size of header after encoding.
/// 10000 should easily accommodate any block header:
/// - S3 key should always be less than or equal to 1024
/// - Allow 1024 for ETag, even though its always much smaller
/// - Integers should be up to 8 bytes each
const BINCODE_HEADER_MAX_SIZE: usize = 10000;

/// Binary encoding configuration for the block header.
const BINCODE_CONFIG: Configuration<LittleEndian, Fixint, Limit<BINCODE_HEADER_MAX_SIZE>> = bincode::config::standard()
    .with_fixed_int_encoding()
    .with_limit::<BINCODE_HEADER_MAX_SIZE>();

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

/// Error when reading or writing a [DiskBlock]
#[derive(Debug, Error)]
enum DiskBlockReadWriteError {
    #[error("Invalid block length: {0}")]
    InvalidBlockLength(u64),
    #[error("Error decoding the block: {0}")]
    DecodeError(DecodeError),
    #[error("Error encoding the block: {0}")]
    EncodeError(EncodeError),
    #[error("IO error: {0}")]
    IOError(#[from] std::io::Error),
}

impl DiskBlockHeader {
    /// Creates a new [DiskBlockHeader]
    pub fn new(
        block_idx: BlockIndex,
        block_offset: u64,
        block_len: usize,
        etag: String,
        s3_key: String,
        data_checksum: Crc32c,
    ) -> Self {
        let data_checksum = data_checksum.value();
        let header_checksum =
            Self::compute_checksum(block_idx, block_offset, block_len, &etag, &s3_key, data_checksum).value();
        DiskBlockHeader {
            block_idx,
            block_offset,
            block_len: block_len as u64,
            etag,
            s3_key,
            data_checksum,
            header_checksum,
        }
    }

    fn compute_checksum(
        block_idx: BlockIndex,
        block_offset: u64,
        block_len: usize,
        etag: &str,
        s3_key: &str,
        data_checksum: u32,
    ) -> Crc32c {
        let mut hasher = crc32c::Hasher::new();
        hasher.update(&block_idx.to_be_bytes());
        hasher.update(&block_offset.to_be_bytes());
        hasher.update(&block_len.to_be_bytes());
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
        block_len: usize,
    ) -> Result<Crc32c, DiskBlockAccessError> {
        let s3_key_match = s3_key == self.s3_key;
        let etag_match = etag == self.etag;
        let block_idx_match = block_idx == self.block_idx;
        let block_offset_match = block_offset == self.block_offset;
        let block_size_match = block_len == self.block_len as usize;

        let data_checksum = self.data_checksum;
        if s3_key_match && etag_match && block_idx_match && block_offset_match && block_size_match {
            if Self::compute_checksum(block_idx, block_offset, block_len, etag, s3_key, data_checksum).value()
                != self.header_checksum
            {
                Err(DiskBlockAccessError::ChecksumError)
            } else {
                Ok(Crc32c::new(data_checksum))
            }
        } else {
            warn!(
                s3_key_match,
                etag_match, block_idx_match, block_size_match, "block data did not match expected values",
            );
            Err(DiskBlockAccessError::FieldMismatchError)
        }
    }
}

/// Represents a fixed-size chunk of data that can be serialized.
#[derive(Debug)]
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
        let header = DiskBlockHeader::new(block_idx, block_offset, data.len(), etag, s3_key, data_checksum);

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
        let data_checksum = self.header.validate(
            cache_key.key(),
            cache_key.etag().as_str(),
            block_idx,
            block_offset,
            self.data.len(),
        )?;
        let bytes = ChecksummedBytes::new_from_inner_data(self.data.clone(), data_checksum);
        Ok(bytes)
    }

    /// Deserialize an instance from `reader`.
    fn read(
        reader: &mut impl Read,
        block_size: u64,
        pool: Option<&PagedPool>,
    ) -> Result<Self, DiskBlockReadWriteError> {
        let header: DiskBlockHeader = bincode::decode_from_std_read(reader, BINCODE_CONFIG)?;

        if header.block_len > block_size {
            return Err(DiskBlockReadWriteError::InvalidBlockLength(header.block_len));
        }

        let size = header.block_len as usize;
        let data = if let Some(pool) = pool {
            pool.read_exact(reader, size)?
        } else {
            let mut buffer = vec![0u8; size];
            reader.read_exact(&mut buffer)?;
            buffer.into()
        };

        Ok(Self { header, data })
    }

    /// Serialize this instance to `writer` and return the number of bytes written on success.
    fn write(&self, writer: &mut impl Write) -> Result<usize, DiskBlockReadWriteError> {
        let header_length = bincode::encode_into_std_write(&self.header, writer, BINCODE_CONFIG)?;
        writer.write_all(&self.data)?;
        Ok(header_length + self.data.len())
    }
}

impl From<DecodeError> for DiskBlockReadWriteError {
    fn from(value: DecodeError) -> Self {
        match value {
            DecodeError::Io { inner, .. } => DiskBlockReadWriteError::IOError(inner),
            value => DiskBlockReadWriteError::DecodeError(value),
        }
    }
}

impl From<EncodeError> for DiskBlockReadWriteError {
    fn from(value: EncodeError) -> Self {
        match value {
            EncodeError::Io { inner, .. } => DiskBlockReadWriteError::IOError(inner),
            value => DiskBlockReadWriteError::EncodeError(value),
        }
    }
}

impl From<std::io::Error> for DataCacheError {
    fn from(e: std::io::Error) -> Self {
        DataCacheError::IoFailure(e.into())
    }
}

impl From<DiskBlockReadWriteError> for DataCacheError {
    fn from(value: DiskBlockReadWriteError) -> Self {
        match value {
            DiskBlockReadWriteError::IOError(e) => DataCacheError::IoFailure(e.into()),
            _ => DataCacheError::InvalidBlockContent,
        }
    }
}

fn usage_info(limit: &CacheLimit) -> Option<Mutex<UsageInfo<DiskBlockKey>>> {
    match limit {
        CacheLimit::Unbounded => None,
        CacheLimit::TotalSize { .. } | CacheLimit::AvailableSpace { .. } => Some(Mutex::new(UsageInfo::new())),
    }
}

impl DiskDataCache {
    /// Create a new instance of an [DiskDataCache] with the specified configuration.
    pub fn new(config: DiskDataCacheConfig) -> Self {
        let usage = usage_info(&config.limit);
        DiskDataCache {
            config,
            usage,
            pool: None,
        }
    }

    /// Create a new instance of an [DiskDataCache] with the specified configuration.
    pub fn new_with_pool(config: DiskDataCacheConfig, pool: Option<PagedPool>) -> Self {
        let usage = usage_info(&config.limit);
        DiskDataCache { config, usage, pool }
    }

    /// Get the relative path for the given block.
    fn get_path_for_block_key(&self, block_key: &DiskBlockKey) -> PathBuf {
        let mut path = self.config.cache_directory.join(CACHE_VERSION);
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
        trace!(
            key = ?cache_key.key(),
            offset = block_offset,
            path = ?path.as_ref(),
            "reading cache block",
        );
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

        let block = DiskBlock::read(&mut file, self.block_size(), self.pool.as_ref())
            .inspect_err(|e| warn!(path = ?path.as_ref(), "block could not be deserialized: {:?}", e))?;
        let bytes = block
            .data(cache_key, block_idx, block_offset)
            .map_err(|err| match err {
                DiskBlockAccessError::ChecksumError | DiskBlockAccessError::FieldMismatchError => {
                    DataCacheError::InvalidBlockContent
                }
            })?;

        Ok(Some(bytes))
    }

    fn write_block(&self, path: impl AsRef<Path>, block: DiskBlock) -> DataCacheResult<(NamedTempFile, usize)> {
        let path = path.as_ref();
        let cache_path_for_key = path.parent().expect("path should include cache key in directory name");
        fs::DirBuilder::new()
            .mode(0o700)
            .recursive(true)
            .create(cache_path_for_key)?;

        let mut temp_file = tempfile::Builder::new()
            .permissions(fs::Permissions::from_mode(0o600))
            .tempfile_in(cache_path_for_key)?;
        trace!(
            key = block.header.s3_key,
            offset = block.header.block_offset,
            block_path = ?path,
            temp_path = ?temp_file.path(),
            "writing cache block",
        );
        temp_file.write_all(CACHE_VERSION.as_bytes())?;
        let bytes_written = block.write(&mut temp_file)?;
        Ok((temp_file, bytes_written))
    }

    fn is_limit_exceeded(&self, size: usize) -> bool {
        metrics::gauge!("disk_data_cache.disk_usage_mib").set((size / 1024 / 1024) as f64);
        match self.config.limit {
            CacheLimit::Unbounded => false,
            CacheLimit::TotalSize { max_size } => size > max_size,
            CacheLimit::AvailableSpace { min_ratio } => {
                let stats = match nix::sys::statvfs::statvfs(&self.config.cache_directory) {
                    Ok(stats) if stats.blocks() == 0 => {
                        warn!("unable to determine available space (0 blocks reported)");
                        return false;
                    }
                    Ok(stats) => stats,
                    Err(error) => {
                        warn!(?error, "unable to determine available space");
                        return false;
                    }
                };
                (stats.blocks_free() as f64) < min_ratio * (stats.blocks() as f64)
            }
        }
    }

    fn evict_if_needed(&self) -> DataCacheResult<()> {
        let Some(usage) = &self.usage else {
            return Ok(());
        };

        loop {
            let mut usage = usage.lock().unwrap();
            if !self.is_limit_exceeded(usage.size) {
                break;
            }
            let Some(to_remove) = usage.evict_lru() else {
                warn!("cache limit exceeded but nothing to evict");
                return Err(DataCacheError::EvictionFailure);
            };
            let path_to_remove = self.get_path_for_block_key(&to_remove);
            trace!("evicting block at {}", path_to_remove.display());
            if let Err(remove_err) = fs::remove_file(&path_to_remove) {
                if remove_err.kind() != ErrorKind::NotFound {
                    warn!("unable to evict block: {:?}", remove_err);
                }
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
    hasher.update(CACHE_VERSION);
    hasher.update(s3_key);
    hasher.update(etag.as_str());
    hasher.finalize().into()
}

#[async_trait]
impl DataCache for DiskDataCache {
    async fn get_block(
        &self,
        cache_key: &ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        _object_size: usize,
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
                metrics::counter!("disk_data_cache.block_hit").increment(0);
                Ok(None)
            }
            Ok(Some(bytes)) => {
                // Cache hit.
                metrics::counter!("disk_data_cache.block_hit").increment(1);
                metrics::counter!("disk_data_cache.total_bytes", "type" => "read").increment(bytes.len() as u64);
                metrics::histogram!("disk_data_cache.read_duration_us").record(start.elapsed().as_micros() as f64);
                if let Some(usage) = &self.usage {
                    usage.lock().unwrap().refresh(&block_key);
                }
                Ok(Some(bytes))
            }
            Err(err) => {
                // Invalid block. Count as cache miss.
                metrics::counter!("disk_data_cache.block_hit").increment(0);
                metrics::counter!("disk_data_cache.block_err").increment(1);
                Err(err)
            }
        }
    }

    async fn put_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
        _object_size: usize,
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
            metrics::histogram!("disk_data_cache.eviction_duration_us")
                .record(eviction_start.elapsed().as_micros() as f64);
            result
        }?;

        let write_start = Instant::now();
        let (temp_file, size) = self.write_block(&path, block)?;
        metrics::histogram!("disk_data_cache.write_duration_us").record(write_start.elapsed().as_micros() as f64);
        metrics::counter!("disk_data_cache.total_bytes", "type" => "write").increment(bytes_len as u64);
        if let Some(usage) = &self.usage {
            let mut usage = usage.lock().unwrap();
            _ = temp_file.persist(path).map_err(|e| e.error)?;
            usage.add(block_key, size);
        } else {
            _ = temp_file.persist(path).map_err(|e| e.error)?;
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

    /// Remove the least recently used key and update the total size.
    /// Return `None` if empty.
    fn evict_lru(&mut self) -> Option<K> {
        let (key, size) = self.entries.pop_front()?;
        self.size = self.size.saturating_sub(size);
        Some(key)
    }
}

#[cfg(test)]
mod tests {
    use std::str::FromStr;
    use std::{ffi::OsString, io::Cursor};

    use super::*;

    use futures::StreamExt as _;
    use futures::executor::{ThreadPool, block_on};
    use futures::task::SpawnExt;
    use mountpoint_s3_client::types::ETag;
    use rand::{Rng, SeedableRng};
    use rand_chacha::ChaCha20Rng;
    use test_case::test_case;

    use crate::sync::Arc;

    #[test]
    fn test_block_format_version_requires_update() {
        let cache_key = ObjectId::new("hello-world".to_string(), ETag::for_tests());
        let data = ChecksummedBytes::new("Foo".into());
        let block = DiskBlock::new(cache_key, 100, 100 * 10, data).expect("should succeed as data checksum is valid");
        let expected_bytes: Vec<u8> = vec![
            100, 0, 0, 0, 0, 0, 0, 0, 232, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0, 116,
            101, 115, 116, 95, 101, 116, 97, 103, 11, 0, 0, 0, 0, 0, 0, 0, 104, 101, 108, 108, 111, 45, 119, 111, 114,
            108, 100, 9, 85, 128, 46, 13, 202, 106, 46, 70, 111, 111,
        ];
        let mut serialized_bytes = Vec::new();
        block.write(&mut serialized_bytes).unwrap();
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
        let expected_hash = "1cfd611a26062b33e98d48a84e967ddcc2a42957479a8abd541e29cfa3258639";
        let actual_hash = hex::encode(hash_cache_key_raw(&key));
        assert_eq!(expected_hash, actual_hash);
    }

    #[test]
    fn get_path_for_block_key() {
        let cache_dir = PathBuf::from("mountpoint-cache/");
        let data_cache = DiskDataCache::new(DiskDataCacheConfig {
            cache_directory: cache_dir,
            block_size: 1024,
            limit: CacheLimit::Unbounded,
        });

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
        let data_cache = DiskDataCache::new(DiskDataCacheConfig {
            cache_directory: cache_dir,
            block_size: 1024,
            limit: CacheLimit::Unbounded,
        });

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

    #[tokio::test]
    async fn test_put_get() {
        let data_1 = ChecksummedBytes::new("Foo".into());
        let data_2 = ChecksummedBytes::new("Bar".into());
        let data_3 = ChecksummedBytes::new("Baz".into());

        let object_1_size = data_1.len() + data_3.len();
        let object_2_size = data_2.len();

        let block_size = 8 * 1024 * 1024;
        let cache_directory = tempfile::tempdir().unwrap();
        let cache = DiskDataCache::new(DiskDataCacheConfig {
            cache_directory: cache_directory.path().to_path_buf(),
            block_size,
            limit: CacheLimit::Unbounded,
        });
        let cache_key_1 = ObjectId::new("a".into(), ETag::for_tests());
        let cache_key_2 = ObjectId::new(
            "long-key_".repeat(100), // at least 900 chars, exceeding easily 255 chars (UNIX filename limit)
            ETag::for_tests(),
        );

        let block = cache
            .get_block(&cache_key_1, 0, 0, object_1_size)
            .await
            .expect("cache should be accessible");
        assert!(
            block.is_none(),
            "no entry should be available to return but got {block:?}",
        );

        // PUT and GET, OK?
        cache
            .put_block(cache_key_1.clone(), 0, 0, data_1.clone(), object_1_size)
            .await
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_1, 0, 0, object_1_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second file, OK?
        cache
            .put_block(cache_key_2.clone(), 0, 0, data_2.clone(), object_2_size)
            .await
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_2, 0, 0, object_2_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_2, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second block in a cache entry, OK?
        cache
            .put_block(cache_key_1.clone(), 1, block_size, data_3.clone(), object_1_size)
            .await
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_1, 1, block_size, object_1_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_3, entry,
            "cache entry returned should match original bytes after put"
        );

        // Entry 1's first block still intact
        let entry = cache
            .get_block(&cache_key_1, 0, 0, object_1_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );
    }

    #[tokio::test]
    async fn test_checksummed_bytes_slice() {
        let data = ChecksummedBytes::new("0123456789".into());
        let slice = data.slice(1..5);

        let cache_directory = tempfile::tempdir().unwrap();
        let cache = DiskDataCache::new(DiskDataCacheConfig {
            cache_directory: cache_directory.path().to_path_buf(),
            block_size: 8 * 1024 * 1024,
            limit: CacheLimit::Unbounded,
        });
        let cache_key = ObjectId::new("a".into(), ETag::for_tests());

        cache
            .put_block(cache_key.clone(), 0, 0, slice.clone(), slice.len())
            .await
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key, 0, 0, slice.len())
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            slice.into_bytes().expect("original slice should be valid"),
            entry.into_bytes().expect("returned entry should be valid"),
            "cache entry returned should match original slice after put"
        );
    }

    #[tokio::test]
    async fn test_eviction() {
        const BLOCK_SIZE: usize = 100 * 1024;
        const LARGE_OBJECT_SIZE: usize = 1024 * 1024;
        const SMALL_OBJECT_SIZE: usize = LARGE_OBJECT_SIZE / 2;
        const CACHE_LIMIT: usize = LARGE_OBJECT_SIZE;

        fn create_random(seed: u64, size: usize) -> ChecksummedBytes {
            let mut rng = ChaCha20Rng::seed_from_u64(seed);
            let mut body = vec![0u8; size];
            rng.fill(&mut body[..]);

            ChecksummedBytes::new(body.into())
        }

        async fn is_block_in_cache(
            cache: &DiskDataCache,
            cache_key: &ObjectId,
            block_idx: u64,
            expected_bytes: &ChecksummedBytes,
            object_size: usize,
        ) -> bool {
            if let Some(retrieved) = cache
                .get_block(cache_key, block_idx, block_idx * (BLOCK_SIZE) as u64, object_size)
                .await
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
        let cache = DiskDataCache::new(DiskDataCacheConfig {
            cache_directory: cache_directory.path().to_path_buf(),
            block_size: BLOCK_SIZE as u64,
            limit: CacheLimit::TotalSize { max_size: CACHE_LIMIT },
        });

        // Put all of large_object
        for (block_idx, bytes) in large_object_blocks.iter().enumerate() {
            cache
                .put_block(
                    large_object_key.clone(),
                    block_idx as u64,
                    (block_idx * BLOCK_SIZE) as u64,
                    bytes.clone(),
                    LARGE_OBJECT_SIZE,
                )
                .await
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
                    SMALL_OBJECT_SIZE,
                )
                .await
                .unwrap();
        }

        let count_small_object_blocks_in_cache = futures::stream::iter(small_object_blocks.iter().enumerate())
            .filter(|&(block_idx, bytes)| {
                is_block_in_cache(&cache, &small_object_key, block_idx as u64, bytes, SMALL_OBJECT_SIZE)
            })
            .count()
            .await;
        assert_eq!(
            count_small_object_blocks_in_cache,
            small_object_blocks.len(),
            "All blocks for small object should still be in the cache"
        );

        let count_large_object_blocks_in_cache = futures::stream::iter(large_object_blocks.iter().enumerate())
            .filter(|&(block_idx, bytes)| {
                is_block_in_cache(&cache, &large_object_key, block_idx as u64, bytes, LARGE_OBJECT_SIZE)
            })
            .count()
            .await;
        assert!(
            count_large_object_blocks_in_cache < large_object_blocks.len(),
            "Some blocks for the large object should have been evicted"
        );
    }

    #[test]
    fn data_block_extract_checks() {
        let data_1 = ChecksummedBytes::new("Foo".into());

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
        let block_size = 4;
        let etag = ETag::for_tests();
        let s3_key = String::from("s3/key");
        let data_checksum = Crc32c::new(42);
        let mut header = DiskBlockHeader::new(
            block_idx,
            block_offset,
            block_size,
            etag.as_str().to_owned(),
            s3_key.clone(),
            data_checksum,
        );

        let checksum = header
            .validate(&s3_key, etag.as_str(), block_idx, block_offset, block_size)
            .expect("should be OK with valid fields and checksum");
        assert_eq!(data_checksum, checksum);

        // Bad fields
        let err = header
            .validate("hello", etag.as_str(), block_idx, block_offset, block_size)
            .expect_err("should fail with invalid s3_key");
        assert!(matches!(err, DiskBlockAccessError::FieldMismatchError));
        let err = header
            .validate(&s3_key, "bad etag", block_idx, block_offset, block_size)
            .expect_err("should fail with invalid etag");
        assert!(matches!(err, DiskBlockAccessError::FieldMismatchError));
        let err = header
            .validate(&s3_key, etag.as_str(), 5, block_offset, block_size)
            .expect_err("should fail with invalid block idx");
        assert!(matches!(err, DiskBlockAccessError::FieldMismatchError));
        let err = header
            .validate(&s3_key, etag.as_str(), block_idx, 1024, block_size)
            .expect_err("should fail with invalid block offset");
        assert!(matches!(err, DiskBlockAccessError::FieldMismatchError));
        let err = header
            .validate(&s3_key, etag.as_str(), block_idx, block_offset, 42)
            .expect_err("should fail with invalid block length");
        assert!(matches!(err, DiskBlockAccessError::FieldMismatchError));

        // Bad checksum
        header.header_checksum = 23;
        let err = header
            .validate(&s3_key, etag.as_str(), block_idx, block_offset, block_size)
            .expect_err("should fail with invalid checksum");
        assert!(matches!(err, DiskBlockAccessError::ChecksumError));
    }

    #[test_case("key")]
    #[test_case("etag")]
    #[test_case("data")]
    fn read_corrupted_block_should_fail(length_to_corrupt: &str) {
        const MAX_LENGTH: u64 = 1024;

        /// Read the `u64` value at the given offset.
        fn get_u64_at(slice: &[u8], offset: usize) -> u64 {
            u64::from_le_bytes(slice[offset..(offset + 8)].try_into().unwrap())
        }

        /// Replace the `u64` value at `offset` with `new_value`.
        fn replace_u64_at(slice: &mut [u8], offset: usize, new_value: u64) {
            slice[offset..(offset + 8)].copy_from_slice(&new_value.to_le_bytes());
        }

        let original_length = 42;
        let data = ChecksummedBytes::new(vec![0u8; original_length].into());
        let cache_key = ObjectId::new("k".into(), ETag::from_str("e").unwrap());
        let block = DiskBlock::new(cache_key.clone(), 0, 0, data).expect("should have no checksum err");

        let mut buf = Vec::new();
        block.write(&mut buf).unwrap();

        // Determine the offset and expected value for the length field under test.
        // These values depends on the serialization format for `DiskBlock` and `DiskBlockHeader`.
        let (offset, expected) = match length_to_corrupt {
            "key" => (24, cache_key.key().len()),
            "etag" => (32 + cache_key.key().len(), cache_key.etag().as_str().len()),
            "data" => (16, original_length),
            _ => panic!("invalid length: {length_to_corrupt}"),
        };

        assert_eq!(
            get_u64_at(&buf, offset) as usize,
            expected,
            "serialized length should match the expected value (have we changed the serialization format?)"
        );

        // "Corrupt" the serialized value with an invalid length.
        replace_u64_at(&mut buf, offset, u64::MAX);

        let err = DiskBlock::read(&mut Cursor::new(buf), MAX_LENGTH, None).expect_err("deserialization should fail");
        match length_to_corrupt {
            "key" | "etag" => assert!(matches!(
                err,
                DiskBlockReadWriteError::DecodeError(DecodeError::LimitExceeded)
            )),
            "data" => assert!(matches!(err, DiskBlockReadWriteError::InvalidBlockLength(_))),
            _ => panic!("invalid length: {length_to_corrupt}"),
        }
    }

    #[test]
    fn test_concurrent_access() {
        let block_size = 1024 * 1024;
        let cache_directory = tempfile::tempdir().unwrap();
        let data_cache = DiskDataCache::new(DiskDataCacheConfig {
            cache_directory: cache_directory.path().to_path_buf(),
            block_size: block_size as u64,
            limit: CacheLimit::Unbounded,
        });
        let data_cache = Arc::new(data_cache);

        let cache_key = ObjectId::new("foo".to_owned(), ETag::for_tests());
        let block_idx = 0;
        let block_offset = 0;
        let object_size = 10 * block_size;

        let pool = ThreadPool::builder().pool_size(32).create().unwrap();

        // Run concurrent tasks getting the same block (and writing on cache miss)
        let mut handles = Vec::new();
        for _ in 0..100 {
            let data_cache = data_cache.clone();
            let cache_key = cache_key.clone();
            let handle = pool
                .spawn_with_handle(async move {
                    let block = data_cache
                        .get_block(&cache_key, block_idx, block_offset, object_size)
                        .await
                        .expect("get_block should not return error");
                    if block.is_none() {
                        let bytes: Bytes = vec![0u8; block_size].into();
                        data_cache
                            .put_block(cache_key, block_idx, block_offset, bytes.into(), object_size)
                            .await
                            .expect("put_block should succeed");
                    }
                })
                .unwrap();
            handles.push(handle);
        }

        block_on(async move {
            for handle in handles {
                handle.await
            }
        });
    }
}
