use std::{
    fs,
    sync::{
        atomic::{AtomicU64, Ordering},
        Arc,
    },
    thread::sleep,
    time::Duration,
};

use async_trait::async_trait;
use mountpoint_s3::{
    data_cache::{BlockIndex, ChecksummedBytes, DataCache, DataCacheResult, ExpressDataCache},
    object::ObjectId,
    prefetch::caching_prefetch,
    ServerSideEncryption,
};
use rand::{Rng, RngCore, SeedableRng};
use rand_chacha::ChaChaRng;
use test_case::test_case;

use crate::common::{
    fuse::{create_fuse_session, s3_session::create_crt_client},
    s3::{get_express_bucket, get_standard_bucket, get_test_prefix},
};

const CLIENT_PART_SIZE: usize = 8 * 1024 * 1024;

#[test_case("aws:sse", true; "value does not match the default for the bucket")]
#[test_case("AES256", false; "value match the default for the bucket")]
fn express_cache_sse_put(sse: &str, should_fail: bool) {
    // let region = get_test_region();
    let bucket_name = get_standard_bucket();
    let prefix = get_test_prefix("express_cache_bad_sse");
    let express_bucket_name = get_express_bucket();
    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE);
    let express_cache = ExpressDataCache::new(
        client.clone(),
        Default::default(),
        &bucket_name,
        &express_bucket_name,
        ServerSideEncryption::new(Some(sse.to_owned()), None),
    );
    let express_cache = CacheTestWrapper::new(Arc::new(express_cache));

    // Mount a bucket
    let mount_point = tempfile::tempdir().unwrap();
    let runtime = client.event_loop_group();
    let prefetcher = caching_prefetch(express_cache.clone(), runtime, Default::default());
    let _session = create_fuse_session(
        client,
        prefetcher,
        &bucket_name,
        &prefix,
        mount_point.path(),
        Default::default(),
    );

    // Write an object, no caching happens yet
    let key = get_object_key(&prefix, "key", 100);
    let path = mount_point.path().join(&key);
    let written = random_binary_data(1024 * 1024);
    fs::write(&path, &written).expect("write should succeed");

    // First read should be from the source bucket and not be cache as the SSE can not be enforced
    let read = fs::read(&path).expect("read should succeed");
    assert_eq!(read, written);

    // Cache writes are async, wait for that to happen
    const MAX_WAIT_DURATION: std::time::Duration = std::time::Duration::from_secs(10);
    let st = std::time::Instant::now();
    loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("timeout on waiting for data being stored to the cache")
        }
        if should_fail && express_cache.put_block_failed_count.load(Ordering::SeqCst) > 1 {
            break;
        }
        if !should_fail && express_cache.put_block_count.load(Ordering::SeqCst) > 1 {
            break;
        }
        sleep(Duration::from_millis(100));
    }

    // Depending on the test case check that either or writes failed or all were successful
    let put_block_count = express_cache.put_block_count.load(Ordering::SeqCst);
    let put_block_failed_count = express_cache.put_block_failed_count.load(Ordering::SeqCst);
    if should_fail {
        assert!(put_block_count == put_block_failed_count)
    } else {
        assert!(put_block_failed_count == 0);
    }
}

// #[test]
// fn express_cache_good_sse() {
//     // put
//     // get
// }

// #[test]
// fn express_cache_expected_bucket_owner() {
//     // put
//     // get
// }

// #[test]
// fn express_cache_wrong_etag() {}

struct CacheTestWrapper<Cache> {
    cache: Arc<Cache>,
    cache_hit_count: Arc<AtomicU64>,
    put_block_count: Arc<AtomicU64>,
    put_block_failed_count: Arc<AtomicU64>,
}

impl<Cache> Clone for CacheTestWrapper<Cache> {
    fn clone(&self) -> Self {
        Self {
            cache: self.cache.clone(),
            cache_hit_count: self.cache_hit_count.clone(),
            put_block_count: self.put_block_count.clone(),
            put_block_failed_count: self.put_block_failed_count.clone(),
        }
    }
}

impl<Cache> CacheTestWrapper<Cache> {
    fn new(cache: Arc<Cache>) -> Self {
        CacheTestWrapper {
            cache,
            cache_hit_count: Arc::new(AtomicU64::new(0)),
            put_block_count: Arc::new(AtomicU64::new(0)),
            put_block_failed_count: Arc::new(AtomicU64::new(0)),
        }
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
            .await?
            .inspect(|_| {
                self.cache_hit_count.fetch_add(1, Ordering::SeqCst);
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
        self.put_block_count.fetch_add(1, Ordering::SeqCst);
        self.cache
            .put_block(cache_key, block_idx, block_offset, bytes, object_size)
            .await
            .inspect_err(|_| {
                self.put_block_failed_count.fetch_add(1, Ordering::SeqCst);
            })
    }

    fn block_size(&self) -> u64 {
        self.cache.block_size()
    }
}

fn random_binary_data(size_in_bytes: usize) -> Vec<u8> {
    let seed = rand::thread_rng().gen();
    let mut rng = ChaChaRng::seed_from_u64(seed);
    let mut data = vec![0; size_in_bytes];
    rng.fill_bytes(&mut data);
    data
}

// Creates a random key which has a size of at least `min_size_in_bytes`
fn get_object_key(key_prefix: &str, key_suffix: &str, min_size_in_bytes: usize) -> String {
    let random_suffix: u64 = rand::thread_rng().gen();
    let last_key_part = format!("{key_suffix}{random_suffix}"); // part of the key after all the "/"
    let full_key = format!("{key_prefix}{last_key_part}");
    let full_key_size = full_key.as_bytes().len();
    let padding_size = min_size_in_bytes.saturating_sub(full_key_size);
    let padding = "0".repeat(padding_size);
    format!("{last_key_part}{padding}")
}
