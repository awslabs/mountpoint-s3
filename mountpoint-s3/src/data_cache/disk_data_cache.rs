//! Module for the on-disk data cache implementation.

use std::fs;
use std::io::{ErrorKind, Write};
use std::ops::RangeBounds;
use std::path::PathBuf;

use base64ct::{Base64Url, Encoding};
use bytes::{BufMut, BytesMut};
use mountpoint_s3_crt::checksums::crc32c;
use tracing::{error, trace, warn};

use crate::data_cache::DataCacheError;

use super::{BlockIndex, CacheKey, ChecksummedBytes, DataCache, DataCacheResult};

/// On-disk implementation of [DataCache].
///
/// TODO: Store checksums on disk, reconstruct as [ChecksummedBytes] using same checksum avoiding recomputation.
///
/// TODO: Store additional metadata with each block such as expected S3 key, ETag, etc..
pub struct DiskDataCache {
    block_size: u64,
    cache_directory: PathBuf,
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
        let mut path = self.cache_directory.join("v1");

        // An S3 key may be up to 1024 UTF-8 bytes long, which exceeds the maximum UNIX file name length.
        // Instead, we encode the key and split into 255 character long directory names.
        let encoded_s3_key = Base64Url::encode_string(cache_key.s3_key.as_bytes());
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

        let bytes = BytesMut::with_capacity(self.block_size as usize);
        let mut writer = bytes.writer();
        std::io::copy(&mut file, &mut writer)?;
        let bytes = writer.into_inner().freeze();

        // TODO: Read checksum from block file
        let checksum = crc32c::checksum(bytes.as_ref());
        let bytes = ChecksummedBytes::new(bytes, checksum);

        Ok(Some(bytes))
    }

    fn put_block(&self, cache_key: CacheKey, block_idx: BlockIndex, bytes: ChecksummedBytes) -> DataCacheResult<()> {
        let path = self.get_path_for_block(&cache_key, block_idx);
        fs::create_dir_all(path.parent().expect("path should include cache key in directory name"))?;
        let mut file = fs::File::create(path)?;
        let (bytes, _checksum) = bytes.into_inner().map_err(|_| DataCacheError::InvalidBlockContent)?;
        // TODO: Store checksum
        file.write_all(&bytes)?;
        file.sync_data()?;
        Ok(())
    }

    fn block_size(&self) -> u64 {
        self.block_size
    }

    fn cached_block_indices<R: RangeBounds<BlockIndex>>(
        &self,
        cache_key: &CacheKey,
        range: R,
    ) -> DataCacheResult<Vec<BlockIndex>> {
        let path_for_cache_key = self.get_path_for_key(cache_key);
        let read_dir = match fs::read_dir(&path_for_cache_key) {
            Ok(handle) => handle,
            Err(e) if e.kind() == ErrorKind::NotFound => {
                trace!(
                    ?path_for_cache_key,
                    "no directory for cache key, assuming no block cached yet"
                );
                return Ok(Vec::new());
            }
            Err(e) => return Err(e.into()),
        };

        let mut indicies = Vec::new();
        for entry in read_dir.into_iter() {
            if let Err(e) = entry {
                return Err(DataCacheError::IoFailure(e));
            }

            let file_name = entry?.file_name();
            let file_name = file_name.to_string_lossy();
            let block_suffix = ".block";
            if file_name.ends_with(block_suffix) {
                let end = file_name.len() - block_suffix.len();
                let block_idx = &file_name[..end];
                if let Ok(block_idx) = block_idx.parse::<BlockIndex>() {
                    if range.contains(&block_idx) {
                        indicies.push(block_idx);
                    }
                } else {
                    error!(
                        path=?path_for_cache_key.join(file_name.as_ref()),
                        "unexpected file found in cache, name couldn't be parsed for block number"
                    );
                };
            } else {
                warn!(
                    path=?path_for_cache_key.join(file_name.as_ref()),
                    "unexpected file found in cache without \".block\" suffix"
                );
            }
        }

        Ok(indicies)
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

        let encoded_s3_key = Base64Url::encode_string(s3_key.as_bytes());
        let etag = ETag::for_tests();
        let key = CacheKey {
            etag,
            s3_key: s3_key.to_owned(),
        };
        let expected = vec!["mountpoint-cache", "v1", &encoded_s3_key, key.etag.as_str()];
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
            "v1",
            "YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFh\
            YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFh\
            YWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWF",
            "hYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWE=",
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
    fn test_cached_indices() {
        let temp_dir = tempfile::tempdir().unwrap();
        let block_size = 1024;
        let data_cache = DiskDataCache::new(temp_dir.into_path(), block_size);

        let cache_key = CacheKey {
            s3_key: "HelloWorld".into(),
            etag: ETag::for_tests(),
        };
        let bytes = ChecksummedBytes::from_bytes("Hello World".into());

        let cached_block_indices = data_cache.cached_block_indices(&cache_key, 0..).unwrap();
        assert!(cached_block_indices.is_empty());

        data_cache.put_block(cache_key.clone(), 5, bytes.clone()).unwrap();
        let cached_block_indices = data_cache.cached_block_indices(&cache_key, 0..).unwrap();
        assert_eq!(cached_block_indices, vec![5]);
        let cached_block_indices = data_cache.cached_block_indices(&cache_key, 12..).unwrap();
        assert!(cached_block_indices.is_empty());

        let another_cache_key = CacheKey {
            s3_key: "SomeOtherKey".into(),
            etag: ETag::for_tests(),
        };
        data_cache.put_block(another_cache_key, 5, bytes.clone()).unwrap();
        let cached_block_indices = data_cache.cached_block_indices(&cache_key, 0..).unwrap();
        assert_eq!(cached_block_indices, vec![5]);

        // TODO: Tests for `remove_block`
    }
}
