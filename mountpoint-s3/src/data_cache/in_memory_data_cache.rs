//! Module for the in-memory data cache implementation used for testing.

use std::collections::HashMap;
use std::default::Default;

use super::{BlockIndex, DataCache, DataCacheError, DataCacheResult};
use crate::object::{ObjectId, ObjectPart};
use crate::sync::RwLock;

/// Simple in-memory (RAM) implementation of [DataCache]. Recommended for use in testing only.
pub struct InMemoryDataCache {
    data: RwLock<HashMap<ObjectId, HashMap<BlockIndex, ObjectPart>>>,
    block_size: u64,
}

impl InMemoryDataCache {
    /// Create a new instance of an [InMemoryDataCache] with the specified `block_size`.
    pub fn new(block_size: u64) -> Self {
        InMemoryDataCache {
            data: Default::default(),
            block_size,
        }
    }
}

impl DataCache for InMemoryDataCache {
    fn get_block(
        &self,
        cache_key: &ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
    ) -> DataCacheResult<Option<ObjectPart>> {
        if block_offset != block_idx * self.block_size {
            return Err(DataCacheError::InvalidBlockOffset);
        }
        let data = self.data.read().unwrap();
        let block_data = data.get(cache_key).and_then(|blocks| blocks.get(&block_idx)).cloned();
        Ok(block_data)
    }

    fn put_block(&self, bytes: ObjectPart, block_idx: BlockIndex) -> DataCacheResult<()> {
        if bytes.offset() != block_idx * self.block_size {
            return Err(DataCacheError::InvalidBlockOffset);
        }
        let mut data = self.data.write().unwrap();
        let blocks = data.entry(bytes.object_id().clone()).or_default();
        blocks.insert(block_idx, bytes);
        Ok(())
    }

    fn block_size(&self) -> u64 {
        self.block_size
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use bytes::Bytes;
    use mountpoint_s3_client::types::ETag;

    #[test]
    fn test_put_get() {
        let block_size = 8 * 1024 * 1024;
        let cache = InMemoryDataCache::new(block_size);

        let cache_key_1 = ObjectId::new("a".into(), ETag::for_tests());
        let cache_key_2 = ObjectId::new("b".into(), ETag::for_tests());
        let data_1 = Bytes::from_static(b"Hello world");
        let data_1 = ObjectPart::new(cache_key_1.clone(), 0, data_1);
        let data_2 = Bytes::from_static(b"Foo bar");
        let data_2 = ObjectPart::new(cache_key_2.clone(), 0, data_2);
        let data_3 = Bytes::from_static(b"Baz");
        let data_3 = ObjectPart::new(cache_key_1.clone(), block_size, data_3);

        let block = cache.get_block(&cache_key_1, 0, 0).expect("cache is accessible");
        assert!(
            block.is_none(),
            "no entry should be available to return but got {:?}",
            block,
        );

        // PUT and GET, OK?
        cache.put_block(data_1.clone(), 0).expect("cache is accessible");
        let entry = cache
            .get_block(&cache_key_1, 0, 0)
            .expect("cache is accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second file, OK?
        cache.put_block(data_2.clone(), 0).expect("cache is accessible");
        let entry = cache
            .get_block(&cache_key_2, 0, 0)
            .expect("cache is accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_2, entry,
            "cache entry returned should match original bytes after put"
        );

        // PUT AND GET a second block in a cache entry, OK?
        cache.put_block(data_3.clone(), 1).expect("cache is accessible");
        let entry = cache
            .get_block(&cache_key_1, 1, block_size)
            .expect("cache is accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_3, entry,
            "cache entry returned should match original bytes after put"
        );

        // Entry 1's first block still intact
        let entry = cache
            .get_block(&cache_key_1, 0, 0)
            .expect("cache is accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data_1, entry,
            "cache entry returned should match original bytes after put"
        );
    }
}
