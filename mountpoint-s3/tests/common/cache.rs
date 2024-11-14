use std::{
    sync::{
        atomic::{AtomicU64, Ordering},
        Arc,
    },
    time::Duration,
};

use async_trait::async_trait;
use mountpoint_s3::{
    data_cache::{BlockIndex, ChecksummedBytes, DataCache, DataCacheResult},
    object::ObjectId,
};

/// A wrapper around any type implementing [DataCache], which counts operations
pub struct CacheTestWrapper<Cache> {
    cache: Arc<Cache>,
    get_block_ok_count: Arc<AtomicU64>,
    get_block_hit_count: Arc<AtomicU64>,
    get_block_failed_count: Arc<AtomicU64>,
    put_block_ok_count: Arc<AtomicU64>,
    put_block_failed_count: Arc<AtomicU64>,
}

impl<Cache> Clone for CacheTestWrapper<Cache> {
    fn clone(&self) -> Self {
        Self {
            cache: self.cache.clone(),
            get_block_ok_count: self.get_block_ok_count.clone(),
            get_block_hit_count: self.get_block_hit_count.clone(),
            get_block_failed_count: self.get_block_failed_count.clone(),
            put_block_ok_count: self.put_block_ok_count.clone(),
            put_block_failed_count: self.put_block_failed_count.clone(),
        }
    }
}

impl<Cache> CacheTestWrapper<Cache> {
    pub fn new(cache: Arc<Cache>) -> Self {
        CacheTestWrapper {
            cache,
            get_block_ok_count: Arc::new(AtomicU64::new(0)),
            get_block_hit_count: Arc::new(AtomicU64::new(0)),
            get_block_failed_count: Arc::new(AtomicU64::new(0)),
            put_block_ok_count: Arc::new(AtomicU64::new(0)),
            put_block_failed_count: Arc::new(AtomicU64::new(0)),
        }
    }

    pub fn wait_for_put(&self, max_wait_duration: Duration) {
        let st = std::time::Instant::now();
        loop {
            if st.elapsed() > max_wait_duration {
                panic!("timeout on waiting for a write to the cache to happen")
            }
            if self.put_block_failed_count.load(Ordering::SeqCst) > 0
                || self.put_block_ok_count.load(Ordering::SeqCst) > 0
            {
                break;
            }
            std::thread::sleep(Duration::from_millis(100));
        }
    }

    pub fn get_block_hit_count(&self) -> u64 {
        self.get_block_hit_count.load(Ordering::SeqCst)
    }

    pub fn put_block_ok_count(&self) -> u64 {
        self.put_block_ok_count.load(Ordering::SeqCst)
    }

    pub fn put_block_failed_count(&self) -> u64 {
        self.put_block_failed_count.load(Ordering::SeqCst)
    }
}

#[async_trait]
impl<Cache: DataCache + Send + Sync + 'static> DataCache for CacheTestWrapper<Cache> {
    async fn get_block(
        &self,
        cache_key: &ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        object_size: usize,
    ) -> DataCacheResult<Option<ChecksummedBytes>> {
        let result = self
            .cache
            .get_block(cache_key, block_idx, block_offset, object_size)
            .await
            .inspect(|_| {
                self.get_block_ok_count.fetch_add(1, Ordering::SeqCst);
            })
            .inspect_err(|_| {
                self.get_block_failed_count.fetch_add(1, Ordering::SeqCst);
            })?
            .inspect(|_| {
                self.get_block_hit_count.fetch_add(1, Ordering::SeqCst);
            });

        Ok(result)
    }

    async fn put_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
        object_size: usize,
    ) -> DataCacheResult<()> {
        self.cache
            .put_block(cache_key, block_idx, block_offset, bytes, object_size)
            .await
            .inspect(|_| {
                self.put_block_ok_count.fetch_add(1, Ordering::SeqCst);
            })
            .inspect_err(|_| {
                self.put_block_failed_count.fetch_add(1, Ordering::SeqCst);
            })
    }

    fn block_size(&self) -> u64 {
        self.cache.block_size()
    }
}
