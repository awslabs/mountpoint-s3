use std::{
    sync::{
        Arc,
        atomic::{AtomicU64, Ordering},
    },
    time::Duration,
};

use async_trait::async_trait;
use mountpoint_s3_fs::{
    data_cache::{BlockIndex, ChecksummedBytes, DataCache, DataCacheError, DataCacheResult},
    object::ObjectId,
};

/// A wrapper around any type implementing [DataCache], which counts operations
pub struct CacheTestWrapper<Cache> {
    inner: Arc<CacheTestWrapperInner<Cache>>,
}

struct CacheTestWrapperInner<Cache> {
    cache: Cache,
    /// Number of times the `get_block` succeded and returned data
    get_block_hit_count: AtomicU64,
    /// Number of times the `get_block` failed because of an invalid block
    get_block_invalid_count: AtomicU64,
    /// Number of times the `put_block` was completed
    put_block_count: AtomicU64,
    /// Number of times the `put_block` was completed with a failure
    put_block_fail_count: AtomicU64,
}

impl<Cache> Clone for CacheTestWrapper<Cache> {
    fn clone(&self) -> Self {
        Self {
            inner: self.inner.clone(),
        }
    }
}

impl<Cache> CacheTestWrapper<Cache> {
    pub fn new(cache: Cache) -> Self {
        CacheTestWrapper {
            inner: Arc::new(CacheTestWrapperInner {
                cache,
                get_block_hit_count: AtomicU64::new(0),
                get_block_invalid_count: AtomicU64::new(0),
                put_block_count: AtomicU64::new(0),
                put_block_fail_count: AtomicU64::new(0),
            }),
        }
    }

    pub fn wait_for_put(&self, max_wait_duration: Duration, previous_value: u64) {
        let st = std::time::Instant::now();
        loop {
            if st.elapsed() > max_wait_duration {
                panic!("timeout on waiting for a write to the cache to happen")
            }
            if self.put_block_count() > previous_value {
                break;
            }
            std::thread::sleep(Duration::from_millis(100));
        }
    }

    /// Number of times the `get_block` succeded and returned data
    pub fn get_block_hit_count(&self) -> u64 {
        self.inner.get_block_hit_count.load(Ordering::SeqCst)
    }

    /// Number of times the `get_block` finished because of an invalid block
    pub fn get_block_invalid_count(&self) -> u64 {
        self.inner.get_block_invalid_count.load(Ordering::SeqCst)
    }

    /// Number of times the `put_block` was completed
    pub fn put_block_count(&self) -> u64 {
        self.inner.put_block_count.load(Ordering::SeqCst)
    }

    /// Number of times the `put_block` was completed with failure
    pub fn put_block_fail_count(&self) -> u64 {
        self.inner.put_block_fail_count.load(Ordering::SeqCst)
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
            .inner
            .cache
            .get_block(cache_key, block_idx, block_offset, object_size)
            .await;

        match result.as_ref() {
            Ok(Some(_)) => {
                self.inner.get_block_hit_count.fetch_add(1, Ordering::SeqCst);
            }
            Err(DataCacheError::InvalidBlockHeader(_)) => {
                self.inner.get_block_invalid_count.fetch_add(1, Ordering::SeqCst);
            }
            _ => (),
        };

        result
    }

    async fn put_block(
        &self,
        cache_key: ObjectId,
        block_idx: BlockIndex,
        block_offset: u64,
        bytes: ChecksummedBytes,
        object_size: usize,
    ) -> DataCacheResult<()> {
        let result = self
            .inner
            .cache
            .put_block(cache_key, block_idx, block_offset, bytes, object_size)
            .await;
        self.inner.put_block_count.fetch_add(1, Ordering::SeqCst);
        if result.is_err() {
            self.inner.put_block_fail_count.fetch_add(1, Ordering::SeqCst);
        }
        result
    }

    fn block_size(&self) -> u64 {
        self.inner.cache.block_size()
    }
}
