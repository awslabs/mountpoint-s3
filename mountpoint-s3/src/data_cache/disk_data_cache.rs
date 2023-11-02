//! Module for the on-disk data cache implementation.

use std::fs;
use std::io::{ErrorKind, Write};
use std::ops::RangeBounds;
use std::path::PathBuf;

use bytes::{BufMut, Bytes, BytesMut};
use mountpoint_s3_crt::checksums::crc32c::Crc32c;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use tracing::{error, trace};

use crate::data_cache::DataCacheError;

use super::{BlockIndex, CacheKey, ChecksummedBytes, DataCache, DataCacheResult};

/// Disk and file-layout versioning.
const CACHE_VERSION: &str = "V1";

/// On-disk implementation of [DataCache].
pub struct DiskDataCache {
    block_size: u64,
    cache_directory: PathBuf,
}

/// Represents a fixed-size chunk of data that can be serialized.
///
/// TODO: Add checksum over struct (excl. `data`) to verify block metadata later.
#[derive(Serialize, Deserialize, Debug)]
pub struct DataBlock {
    block_idx: BlockIndex,
    checksum: u32,
    data: Bytes,
    etag: String,
    s3_key: String,
}

impl DataBlock {
    fn new(cache_key: CacheKey, block_idx: BlockIndex, bytes: ChecksummedBytes) -> DataCacheResult<Self> {
        let (s3_key, etag) = (cache_key.s3_key, cache_key.etag.into_inner());
        let (data, checksum) = bytes.into_inner().map_err(|_e| DataCacheError::InvalidBlockContent)?;
        let checksum = checksum.value();
        Ok(DataBlock {
            block_idx,
            checksum,
            data,
            etag,
            s3_key,
        })
    }

    /// Extra the block data, checking that fields such as S3 key, etc. match what we expect.
    ///
    /// Comparing these fields helps ensure we have not corrupted or swapped block data on disk.
    fn data(&self, cache_key: &CacheKey, block_idx: BlockIndex) -> DataCacheResult<ChecksummedBytes> {
        let (s3_key, etag) = (cache_key.s3_key.as_str(), &cache_key.etag);

        let s3_key_match = s3_key == self.s3_key;
        let etag_match = etag.as_str() == self.etag;
        let block_idx_match = block_idx == self.block_idx;
        if s3_key_match && etag_match && block_idx_match {
            let bytes = ChecksummedBytes::new(self.data.clone(), Crc32c::new(self.checksum));
            Ok(bytes)
        } else {
            error!(
                s3_key_match,
                etag_match, block_idx_match, "block data did not match expected values",
            );
            Err(DataCacheError::InvalidBlockContent)
        }
    }
}

impl DiskDataCache {
    /// Create a new instance of an [DiskDataCache] with the specified `block_size`.
    pub fn new(cache_directory: PathBuf, block_size: u64) -> Self {
        DiskDataCache {
            block_size,
            cache_directory,
        }
    }

    /// Get the relative path for the given block.
    fn get_path_for_key(&self, cache_key: &CacheKey) -> PathBuf {
        let mut path = self.cache_directory.join(CACHE_VERSION);

        // An S3 key may be up to 1024 UTF-8 bytes long, which exceeds the maximum UNIX file name length.
        // Instead, we hash the key.
        // The risk of collisions is mitigated as we will ignore blocks read that contain the wrong S3 key, etc..
        let encoded_s3_key = hex::encode(Sha256::digest(cache_key.s3_key.as_bytes()));
        // TODO: Split directory into subdirectories.
        //       Take the first few chars of hash to avoid hitting any FS-specific maximum number of directory entries.
        path.push(encoded_s3_key);
        path.push(cache_key.etag.as_str());
        path
    }

    /// Get path for the given block.
    fn get_path_for_block(&self, cache_key: &CacheKey, block_idx: BlockIndex) -> PathBuf {
        let mut path = self.get_path_for_key(cache_key);
        path.push(format!("{}.block", block_idx));
        path
    }
}

impl DataCache for DiskDataCache {
    fn get_block(&self, cache_key: &CacheKey, block_idx: BlockIndex) -> DataCacheResult<Option<ChecksummedBytes>> {
        let path = self.get_path_for_block(cache_key, block_idx);
        let mut file = match fs::File::open(path) {
            Ok(file) => file,
            Err(err) if err.kind() == ErrorKind::NotFound => return Ok(None),
            Err(err) => return Err(err.into()),
        };

        let bytes = BytesMut::with_capacity(self.block_size as usize); // TODO: fix capacity?
        let mut writer = bytes.writer();
        std::io::copy(&mut file, &mut writer)?;
        let encoded = writer.into_inner().freeze();

        let block: DataBlock = match bincode::deserialize(&encoded[..]) {
            Ok(block) => block,
            Err(e) => {
                error!("block could not be deserialized: {:?}", e);
                return Err(DataCacheError::InvalidBlockContent);
            }
        };
        let bytes = block.data(cache_key, block_idx)?;
        Ok(Some(bytes))
    }

    fn put_block(&self, cache_key: CacheKey, block_idx: BlockIndex, bytes: ChecksummedBytes) -> DataCacheResult<()> {
        let path = self.get_path_for_block(&cache_key, block_idx);
        trace!(?cache_key, ?path, "new block will be created in data cache");
        let cache_path_for_key = path.parent().expect("path should include cache key in directory name");
        fs::create_dir_all(cache_path_for_key)?;

        let block = DataBlock::new(cache_key, block_idx, bytes)?;

        let mut file = fs::File::create(path)?;
        let encoded: Vec<u8> = bincode::serialize(&block).expect("todo: why do i expect this to work?");
        file.write_all(&encoded)?;
        file.sync_data()?;
        Ok(())
    }

    fn block_size(&self) -> u64 {
        self.block_size
    }

    fn cached_block_indices<R: RangeBounds<BlockIndex>>(
        &self,
        _cache_key: &CacheKey,
        _range: R,
    ) -> DataCacheResult<Vec<BlockIndex>> {
        todo!("implement or deprecate");
    }
}

#[cfg(test)]
mod tests {
    use std::ffi::OsString;
    use std::str::FromStr;

    use super::*;

    use mountpoint_s3_client::types::ETag;
    use test_case::test_case;

    #[test_case("hello"; "simple string")]
    #[test_case("foo/bar/baz"; "with forward slashes")]
    #[test_case("hello+world"; "with plus char")]
    #[test_case("hello\\ world"; "backslash")]
    #[test_case("hello=world"; "equals")]
    #[test_case("look🎡emoji"; "emoji")]
    fn test_get_path_for_key(s3_key: &str) {
        let cache_dir = PathBuf::from("mountpoint-cache/");
        let data_cache = DiskDataCache::new(cache_dir, 1024);

        let encoded_s3_key = hex::encode(Sha256::digest(s3_key.as_bytes()));
        let etag = ETag::for_tests();
        let key = CacheKey {
            etag,
            s3_key: s3_key.to_owned(),
        };
        let expected = vec!["mountpoint-cache", CACHE_VERSION, &encoded_s3_key, key.etag.as_str()];
        let path = data_cache.get_path_for_key(&key);
        let results: Vec<OsString> = path.iter().map(ToOwned::to_owned).collect();
        assert_eq!(expected, results);
    }

    #[test]
    fn test_get_path_for_key_very_long_key() {
        let cache_dir = PathBuf::from("mountpoint-cache/");
        let data_cache = DiskDataCache::new(cache_dir, 1024);

        let s3_key = "a".repeat(266);

        let etag = ETag::for_tests();
        let key = CacheKey {
            etag,
            s3_key: s3_key.to_owned(),
        };
        let expected = vec![
            "mountpoint-cache",
            CACHE_VERSION,
            "a7bf334bec6f17021671033b243b8689757212496cd525ba9873addde87b0c56",
            key.etag.as_str(),
        ];
        let path = data_cache.get_path_for_key(&key);
        let results: Vec<OsString> = path.iter().map(ToOwned::to_owned).collect();
        assert_eq!(expected, results);
    }

    #[test]
    fn test_put_get() {
        let data_1 = ChecksummedBytes::from_bytes("Foo".into());
        let data_2 = ChecksummedBytes::from_bytes("Bar".into());
        let data_3 = ChecksummedBytes::from_bytes("Baz".into());

        let cache_directory = tempfile::tempdir().unwrap();
        let cache = DiskDataCache::new(cache_directory.into_path(), 8 * 1024 * 1024);
        let cache_key_1 = CacheKey {
            s3_key: "a".into(),
            etag: ETag::for_tests(),
        };
        let cache_key_2 = CacheKey {
            s3_key: "long-key_".repeat(100), // at least 900 chars, exceeding easily 255 chars (UNIX filename limit)
            etag: ETag::for_tests(),
        };

        let block = cache.get_block(&cache_key_1, 0).expect("cache should be accessible");
        assert!(
            block.is_none(),
            "no entry should be available to return but got {:?}",
            block,
        );

        // PUT and GET, OK?
        cache
            .put_block(cache_key_1.clone(), 0, data_1.clone())
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_1, 0)
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second file, OK?
        cache
            .put_block(cache_key_2.clone(), 0, data_2.clone())
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_2, 0)
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_2, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second block in a cache entry, OK?
        cache
            .put_block(cache_key_1.clone(), 1, data_3.clone())
            .expect("cache should be accessible");
        let entry = cache
            .get_block(&cache_key_1, 1)
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_3, entry,
            "cache entry returned should match original bytes after put"
        );

        // Entry 1's first block still intact
        let entry = cache
            .get_block(&cache_key_1, 0)
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );
    }

    #[test]
    fn data_block_extract_checks() {
        let data_1 = ChecksummedBytes::from_bytes("Foo".into());

        let cache_key_1 = CacheKey {
            s3_key: "a".into(),
            etag: ETag::for_tests(),
        };
        let cache_key_2 = CacheKey {
            s3_key: "b".into(),
            etag: ETag::for_tests(),
        };
        let cache_key_3 = CacheKey {
            s3_key: "a".into(),
            etag: ETag::from_str("badetag").unwrap(),
        };

        let block = DataBlock::new(cache_key_1.clone(), 0, data_1.clone()).expect("should have no checksum err");
        block
            .data(&cache_key_1, 1)
            .expect_err("should fail due to incorrect block index");
        block
            .data(&cache_key_2, 0)
            .expect_err("should fail due to incorrect s3 key in cache key");
        block
            .data(&cache_key_3, 0)
            .expect_err("should fail due to incorrect etag in cache key");
        let unpacked_bytes = block.data(&cache_key_1, 0).expect("should be OK as all fields match");
        assert_eq!(data_1, unpacked_bytes, "data block should return original bytes");
    }
}
