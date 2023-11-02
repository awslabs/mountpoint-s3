//! Module for the on-disk data cache implementation.

use std::fs;
use std::io::{ErrorKind, Write};
use std::ops::RangeBounds;
use std::path::PathBuf;

use base64ct::{Base64UrlUnpadded, Encoding};
use bytes::{BufMut, Bytes, BytesMut};
use mountpoint_s3_crt::checksums::crc32c::Crc32c;
use serde::{Deserialize, Serialize};
use tracing::{error, trace};

use crate::data_cache::DataCacheError;

use super::{BlockIndex, CacheKey, ChecksummedBytes, DataCache, DataCacheResult};

/// Disk and file-layout versioning.
const CACHE_VERSION: &str = "V1";

/// On-disk implementation of [DataCache].
///
/// TODO: Store additional metadata with each block such as expected S3 key, ETag, etc..
pub struct DiskDataCache {
    block_size: u64,
    cache_directory: PathBuf,
}

/// Represents a fixed-size chunk of data that can be serialized.
#[derive(Serialize, Deserialize, Debug)]
pub struct DataBlock {
    checksum: u32,
    data: Bytes,
}

impl DataBlock {
    fn new(bytes: ChecksummedBytes) -> Self {
        let (data, checksum) = bytes
            .into_inner()
            .expect("TODO: what to do if there's an integrity issue");
        let checksum = checksum.value();
        DataBlock { checksum, data }
    }

    /// TODO: Replace with unpack method taking anything we need for validation?
    fn data(&self) -> ChecksummedBytes {
        ChecksummedBytes::new(self.data.clone(), Crc32c::new(self.checksum))
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
        // Instead, we encode the key and split into 255 character long directory names.
        let encoded_s3_key = Base64UrlUnpadded::encode_string(cache_key.s3_key.as_bytes());
        let mut slice = encoded_s3_key.as_str();
        while !slice.is_empty() {
            let (chunk, remaining) = slice.split_at(255.min(slice.len()));
            path.push(chunk);
            slice = remaining;
        }

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

        Ok(Some(block.data()))
    }

    fn put_block(&self, cache_key: CacheKey, block_idx: BlockIndex, bytes: ChecksummedBytes) -> DataCacheResult<()> {
        let path = self.get_path_for_block(&cache_key, block_idx);
        trace!(?cache_key, ?path, "new block will be created in data cache");
        fs::create_dir_all(path.parent().expect("path should include cache key in directory name"))?;
        let mut file = fs::File::create(path)?;
        let block = DataBlock::new(bytes);
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

        let encoded_s3_key = Base64UrlUnpadded::encode_string(s3_key.as_bytes());
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
            "YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFh\
            YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFh\
            YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWF",
            "hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWE",
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
}
