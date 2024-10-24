use std::sync::Arc;

use async_trait::async_trait;
use futures::task::{Spawn, SpawnExt};
use tracing::{debug, warn};

use crate::object::ObjectId;

use super::{BlockIndex, ChecksummedBytes, DataCache, DataCacheResult};

pub struct MultilevelDataCache<DiskCache, ExpressCache, Runtime> {
    disk_cache: Arc<DiskCache>,
    express_cache: ExpressCache,
    runtime: Runtime,
}

impl<DiskCache: DataCache, ExpressCache: DataCache, Runtime: Spawn>
    MultilevelDataCache<DiskCache, ExpressCache, Runtime>
{
    pub fn new(disk_cache: Arc<DiskCache>, express_cache: ExpressCache, runtime: Runtime) -> Self {
        assert_eq!(disk_cache.block_size(), express_cache.block_size());
        Self {
            disk_cache,
            express_cache,
            runtime,
        }
    }
}

#[async_trait]
impl<DiskCache: DataCache + Sync + Send + 'static, ExpressCache: DataCache + Sync, Runtime: Spawn + Sync> DataCache
    for MultilevelDataCache<DiskCache, ExpressCache, Runtime>
{
    async fn get_block(
        &self,
        cache_key: &ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        object_size: usize,
    ) -> DataCacheResult<Option<ChecksummedBytes>> {
        if let Some(data) = self
            .disk_cache
            .get_block(cache_key, block_idx, block_offset, object_size)
            .await?
        {
            debug!(cache_key=?cache_key, block_idx=block_idx, "block served from the disk cache");
            return DataCacheResult::Ok(Some(data));
        }
        if let Some(data) = self
            .express_cache
            .get_block(cache_key, block_idx, block_offset, object_size)
            .await?
        {
            debug!(cache_key=?cache_key, block_idx=block_idx, "block served from the express cache");
            let cache_key = cache_key.clone();
            let cache = self.disk_cache.clone();
            let data_cloned = data.clone();
            self.runtime
                .spawn(async move {
                    if let Err(error) = cache
                        .put_block(cache_key.clone(), block_idx, block_offset, data_cloned, object_size)
                        .await
                    {
                        warn!(cache_key=?cache_key, block_idx, ?error, "failed to update cache");
                    }
                })
                .unwrap();
            return DataCacheResult::Ok(Some(data));
        }
        DataCacheResult::Ok(None)
    }

    async fn put_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
        object_size: usize,
    ) -> DataCacheResult<()> {
        self.disk_cache
            .put_block(cache_key.clone(), block_idx, block_offset, bytes.clone(), object_size)
            .await?;
        self.express_cache
            .put_block(cache_key, block_idx, block_offset, bytes, object_size)
            .await
    }

    fn block_size(&self) -> u64 {
        self.disk_cache.block_size()
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::checksums::ChecksummedBytes;
    use crate::data_cache::{CacheLimit, DiskDataCache, DiskDataCacheConfig, ExpressDataCache};

    use futures::executor::ThreadPool;
    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig};
    use mountpoint_s3_client::types::ETag;

    const EXPRESS_CACHE_MAX_OBJECT_SIZE: usize = 1024 * 1024;
    const PART_SIZE: usize = 8 * 1024 * 1024;
    const BLOCK_SIZE: u64 = 1024 * 1024;

    fn default_disk_cache() -> Arc<DiskDataCache> {
        let cache_directory = tempfile::tempdir().unwrap();
        let cache = DiskDataCache::new(
            cache_directory.into_path(),
            DiskDataCacheConfig {
                block_size: BLOCK_SIZE,
                limit: CacheLimit::Unbounded,
            },
        );
        Arc::new(cache)
    }

    fn default_express_cache() -> (MockClient, ExpressDataCache<MockClient>) {
        let bucket = "test_bucket";
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: PART_SIZE,
            enable_backpressure: true,
            initial_read_window_size: PART_SIZE,
            ..Default::default()
        };
        let client = MockClient::new(config);
        (
            client.clone(),
            ExpressDataCache::new(
                bucket,
                client,
                "unique source description",
                BLOCK_SIZE,
                EXPRESS_CACHE_MAX_OBJECT_SIZE,
            ),
        )
    }

    #[tokio::test]
    async fn test_put_in_both_caches() {
        let disk_cache = default_disk_cache();
        let (client, express_cache) = default_express_cache();
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let cache = MultilevelDataCache::new(disk_cache, express_cache, runtime);

        let data = ChecksummedBytes::new("Foo".into());
        let object_size = data.len();
        let cache_key = ObjectId::new("a".into(), ETag::for_tests());

        // put in both caches
        cache
            .put_block(cache_key.clone(), 0, 0, data.clone(), object_size)
            .await
            .expect("put should succeed");

        // check it was put to express
        assert_eq!(client.objects_number(), 1);

        // check it was put to local
        client.remove_all_objects();
        let entry = cache
            .get_block(&cache_key, 0, 0, object_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data, entry,
            "cache entry returned should match original bytes after put"
        );
    }

    #[tokio::test]
    async fn test_put_from_express_to_local() {
        let disk_cache = default_disk_cache();
        let (client, express_cache) = default_express_cache();

        let data = ChecksummedBytes::new("Foo".into());
        let object_size = data.len();
        let cache_key = ObjectId::new("a".into(), ETag::for_tests());
        express_cache
            .put_block(cache_key.clone(), 0, 0, data.clone(), object_size)
            .await
            .expect("put should succeed");

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let cache = MultilevelDataCache::new(disk_cache, express_cache, runtime);

        // get from express, put entry in the local cache
        let entry = cache
            .get_block(&cache_key, 0, 0, object_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data, entry,
            "cache entry returned should match original bytes after put"
        );

        // delete entry from express
        client.remove_all_objects();

        // get entry from the local cache (with retries as it is async)
        let mut retries = 10;
        let entry = loop {
            let entry = cache
                .get_block(&cache_key, 0, 0, object_size)
                .await
                .expect("cache should be accessible");
            if let Some(entry_data) = entry {
                break entry_data;
            }
            retries -= 1;
            if retries <= 0 {
                panic!("entry was not found in the local cache");
            }
            tokio::time::sleep(std::time::Duration::from_secs(1)).await;
        };
        assert_eq!(
            data, entry,
            "cache entry returned should match original bytes after put"
        );
        assert_eq!(client.objects_number(), 0);
    }

    #[tokio::test]
    async fn test_get_from_local() {
        let disk_cache = default_disk_cache();
        let (_, express_cache) = default_express_cache();

        let local_data_1 = ChecksummedBytes::new("key in local only".into());
        let local_data_2 = ChecksummedBytes::new("key in both, right data".into());
        let express_data = ChecksummedBytes::new("key in both, wrong data".into());
        let cache_key_in_local = ObjectId::new("key_in_local".into(), ETag::for_tests());
        let cache_key_in_both = ObjectId::new("key_in_both".into(), ETag::for_tests());
        // put a key to local only
        disk_cache
            .put_block(
                cache_key_in_local.clone(),
                0,
                0,
                local_data_1.clone(),
                local_data_1.len(),
            )
            .await
            .expect("put should succeed");
        // put another key to both caches, but store different data in those
        disk_cache
            .put_block(
                cache_key_in_both.clone(),
                0,
                0,
                local_data_2.clone(),
                local_data_2.len(),
            )
            .await
            .expect("put should succeed");
        express_cache
            .put_block(
                cache_key_in_both.clone(),
                0,
                0,
                express_data.clone(),
                express_data.len(),
            )
            .await
            .expect("put should succeed");

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let cache = MultilevelDataCache::new(disk_cache, express_cache, runtime);

        // get data, which is stored in local only
        let entry = cache
            .get_block(&cache_key_in_local, 0, 0, local_data_1.len())
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            local_data_1, entry,
            "cache entry returned should match original bytes after put"
        );

        // get data, which is stored in both caches and check that local has a priority
        let entry = cache
            .get_block(&cache_key_in_both, 0, 0, local_data_2.len())
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            local_data_2, entry,
            "cache entry returned should match original bytes after put"
        );
    }

    #[tokio::test]
    async fn test_get_from_express() {
        let disk_cache = default_disk_cache();
        let (_, express_cache) = default_express_cache();

        let data = ChecksummedBytes::new("Foo".into());
        let object_size = data.len();
        let cache_key = ObjectId::new("a".into(), ETag::for_tests());
        express_cache
            .put_block(cache_key.clone(), 0, 0, data.clone(), object_size)
            .await
            .expect("put should succeed");

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let cache = MultilevelDataCache::new(disk_cache, express_cache, runtime);

        let entry = cache
            .get_block(&cache_key, 0, 0, object_size)
            .await
            .expect("cache should be accessible")
            .expect("cache entry should be returned");
        assert_eq!(
            data, entry,
            "cache entry returned should match original bytes after put"
        );
    }
}
