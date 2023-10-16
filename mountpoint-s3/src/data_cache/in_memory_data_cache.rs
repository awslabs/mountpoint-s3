//! Module for the in-memory data cache implementation used for testing.

use std::collections::HashMap;
use std::default::Default;
use std::hash::Hash;
use std::ops::Range;

use super::{BlockIndex, ChecksummedBytes, DataCache, DataCacheResult};

/// Simple in-memory (RAM) implementation of [DataCache]. Recommended for use in testing only.
struct InMemoryDataCache<CacheKey> {
    data: HashMap<CacheKey, HashMap<BlockIndex, ChecksummedBytes>>,
    block_size: u64,
}

impl<Key> InMemoryDataCache<Key> {
    /// Create a new instance of an [InMemoryDataCache] with the specified `block_size`.
    pub fn new(block_size: u64) -> Self {
        InMemoryDataCache {
            data: Default::default(),
            block_size,
        }
    }
}

impl<Key: Eq + Hash> DataCache<Key> for InMemoryDataCache<Key> {
    fn get_block(&self, cache_key: &Key, block_idx: BlockIndex) -> DataCacheResult<Option<&ChecksummedBytes>> {
        let block_data = self.data.get(cache_key).and_then(|blocks| blocks.get(&block_idx));
        Ok(block_data)
    }

    fn put_block(&mut self, cache_key: Key, block_idx: BlockIndex, bytes: ChecksummedBytes) -> DataCacheResult<()> {
        let blocks = self.data.entry(cache_key).or_default();
        blocks.insert(block_idx, bytes);
        Ok(())
    }

    fn indices_for_byte_range(&self, range: Range<u64>) -> Range<BlockIndex> {
        let start_block = range.start / self.block_size;
        let mut end_block = range.end / self.block_size;
        if !range.is_empty() && range.end % self.block_size != 0 {
            end_block += 1;
        }

        start_block..end_block
    }

    fn cached_block_indices(&self, cache_key: &Key, range: Range<BlockIndex>) -> DataCacheResult<Vec<BlockIndex>> {
        let result = match self.data.get(cache_key) {
            None => Vec::new(),
            Some(blocks) => range.into_iter().filter(|idx| blocks.contains_key(idx)).collect(),
        };

        Ok(result)
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use bytes::Bytes;
    use test_case::test_case;

    use crate::prefetch::checksummed_bytes::assert_eq_checksummed_bytes;
    use mountpoint_s3_crt::checksums::crc32c;

    type TestCacheKey = String;

    #[test]
    fn test_put_get() {
        let data_1 = Bytes::from_static(b"Hello world");
        let data_1 = ChecksummedBytes::new(data_1.clone(), crc32c::checksum(&data_1));
        let data_2 = Bytes::from_static(b"Foo bar");
        let data_2 = ChecksummedBytes::new(data_2.clone(), crc32c::checksum(&data_2));
        let data_3 = Bytes::from_static(b"Baz");
        let data_3 = ChecksummedBytes::new(data_3.clone(), crc32c::checksum(&data_3));

        let mut cache = InMemoryDataCache::new(8 * 1024 * 1024);
        let cache_key_1: TestCacheKey = String::from("a");
        let cache_key_2: TestCacheKey = String::from("b");

        let block = cache.get_block(&cache_key_1, 0).expect("cache is accessible");
        assert!(
            block.is_none(),
            "no entry should be available to return but got {:?}",
            block,
        );

        // PUT and GET, OK?
        cache
            .put_block(cache_key_1.clone(), 0, data_1.clone())
            .expect("cache is accessible");
        let entry = cache
            .get_block(&cache_key_1, 0)
            .expect("cache is accessible")
            .expect("cache entry should be returned");
        assert_eq_checksummed_bytes!(
            &data_1,
            entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second file, OK?
        cache
            .put_block(cache_key_2.clone(), 0, data_2.clone())
            .expect("cache is accessible");
        let entry = cache
            .get_block(&cache_key_2, 0)
            .expect("cache is accessible")
            .expect("cache entry should be returned");
        assert_eq_checksummed_bytes!(
            &data_2,
            entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second block in a cache entry, OK?
        cache
            .put_block(cache_key_1.clone(), 1, data_3.clone())
            .expect("cache is accessible");
        let entry = cache
            .get_block(&cache_key_1, 1)
            .expect("cache is accessible")
            .expect("cache entry should be returned");
        assert_eq_checksummed_bytes!(
            &data_3,
            entry,
            "cache entry returned should match original bytes after put"
        );

        // Entry 1's first block still intact
        let entry = cache
            .get_block(&cache_key_1, 0)
            .expect("cache is accessible")
            .expect("cache entry should be returned");
        assert_eq_checksummed_bytes!(
            &data_1,
            entry,
            "cache entry returned should match original bytes after put"
        );
    }

    #[test]
    fn test_cached_indices() {
        let data_1 = Bytes::from_static(b"Hello world");
        let data_1 = ChecksummedBytes::new(data_1.clone(), crc32c::checksum(&data_1));
        let data_2 = Bytes::from_static(b"Foo bar");
        let data_2 = ChecksummedBytes::new(data_2.clone(), crc32c::checksum(&data_2));

        let mut cache = InMemoryDataCache::new(8 * 1024 * 1024);
        let cache_key_1: TestCacheKey = String::from("a");
        let cache_key_2: TestCacheKey = String::from("b");

        let cached_indices = cache
            .cached_block_indices(&cache_key_1, 0..5)
            .expect("should not error");
        let expected: Vec<BlockIndex> = Vec::new();
        assert_eq!(cached_indices, expected);

        cache
            .put_block(cache_key_1.clone(), 2, data_1.clone())
            .expect("no reason to error, cache is accessible");
        cache
            .put_block(cache_key_1.clone(), 3, data_2.clone())
            .expect("no reason to error, cache is accessible");
        cache
            .put_block(cache_key_2.clone(), 5, data_2.clone())
            .expect("no reason to error, cache is accessible");

        let cached_indices = cache
            .cached_block_indices(&cache_key_1, 0..12)
            .expect("should not error");
        assert_eq!(cached_indices, vec![2, 3]);
    }

    #[test_case(8, 2..12, 0..2; "non-zero offset, multiple blocks")]
    #[test_case(16, 2..12, 0..1; "different block size")]
    #[test_case(8, 0..8, 0..1; "range size of block size")]
    #[test_case(8, 0..9, 0..2; "range size of block size + 1")]
    #[test_case(8, 80..160, 10..20; "large range")]
    #[test_case(8, 5..5, 0..0; "empty range")]
    fn test_blocks_for_byte_range(block_size: u64, input: Range<u64>, output: Range<BlockIndex>) {
        let cache: InMemoryDataCache<TestCacheKey> = InMemoryDataCache::new(block_size);
        assert_eq!(cache.indices_for_byte_range(input), output);
    }
}
