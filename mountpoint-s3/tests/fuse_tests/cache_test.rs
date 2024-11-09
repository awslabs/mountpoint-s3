use crate::common::fuse::s3_session::{create_crt_client, create_test_client};
use crate::common::fuse::{create_fuse_session, TestClient};
use crate::common::s3::{get_express_cache_bucket, get_standard_bucket, get_test_prefix, get_test_region};
use fuser::BackgroundSession;
use mountpoint_s3::data_cache::{DataCache, DiskDataCache, DiskDataCacheConfig, ExpressDataCache};
use mountpoint_s3::fs::CacheConfig;
use mountpoint_s3::prefetch::caching_prefetch;
use mountpoint_s3::S3FilesystemConfig;
use mountpoint_s3_client::S3CrtClient;
use rand::{Rng, RngCore, SeedableRng};
use rand_chacha::ChaChaRng;
use std::fs;
use std::path::PathBuf;
use std::thread::sleep;
use std::time::Duration;
use tempfile::TempDir;
use test_case::test_case;

const CACHE_BLOCK_SIZE: u64 = 1024 * 1024;
const CLIENT_PART_SIZE: usize = 8 * 1024 * 1024;

#[test_case("key", 100, 1024; "simple")]
#[test_case("£", 100, 1024; "non-ascii key")]
#[test_case("key", 1024, 1024; "long key")]
#[test_case("key", 100, 1024 * 1024; "big file")]
fn express_cache_write_read(key_suffix: &str, key_size: usize, object_size: usize) {
    cache_write_read_base(
        key_suffix,
        key_size,
        object_size,
        express_cache_factory,
        "express_cache_write_read",
    )
}

#[test_case("key", 100, 1024; "simple")]
#[test_case("£", 100, 1024; "non-ascii key")]
#[test_case("key", 1024, 1024; "long key")]
#[test_case("key", 100, 1024 * 1024; "big file")]
fn disk_cache_write_read(key_suffix: &str, key_size: usize, object_size: usize) {
    let cache_dir = tempfile::tempdir().unwrap();
    cache_write_read_base(
        key_suffix,
        key_size,
        object_size,
        disk_cache_factory(cache_dir.path().to_owned()),
        "disk_cache_write_read",
    );
}

fn cache_write_read_base<Cache, CacheFactory>(
    key_suffix: &str,
    key_size: usize,
    object_size: usize,
    cache_factory: CacheFactory,
    test_name: &str,
) where
    Cache: DataCache + Send + Sync + 'static,
    CacheFactory: FnOnce(S3CrtClient) -> Cache,
{
    let region = get_test_region();
    let bucket = get_standard_bucket();
    let prefix = get_test_prefix(test_name);

    // Mount a bucket
    let filesystem_config = S3FilesystemConfig {
        cache_config: CacheConfig {
            serve_lookup_from_cache: true,
            file_ttl: Duration::from_secs(3600),
            dir_ttl: Duration::from_secs(3600),
            ..Default::default()
        },
        ..Default::default()
    };
    let (mount_point, _session) = new_fuse_session_with_cache(&bucket, &prefix, cache_factory, filesystem_config);

    // Write an object, no caching happens yet
    let key = get_object_key(&prefix, key_suffix, key_size);
    let path = mount_point.path().join(&key);
    let written = random_binary_data(object_size);
    fs::write(&path, &written).expect("write should succeed");

    // First read should be from the source bucket and be cached
    let read = fs::read(&path).expect("read should succeed");
    assert_eq!(read, written);

    // Cache population is async, 3 seconds should be enough for it to finish
    sleep(Duration::from_secs(3));

    // Ensure data may not be served from the source bucket.
    //
    // NOTE, that we assume that the metadata cache will hold an entry for the removed object
    // at the point of the next read. This assumption must be valid since there are no other
    // FS operations done before the read. Currently, an entry in the metadata cache may be
    // invalidated by TTL expiry or a READDIR(PLUS) call.
    let client = create_test_client(&region, &bucket, &prefix);
    client.remove_object(&key).expect("remove must succeed");
    assert!(
        !client.contains_key(&key).expect("head object must succeed"),
        "object should not exist in the source bucket"
    );

    // Second read should be from the cache
    let read = fs::read(&path).expect("read from the cache should succeed");
    assert_eq!(read, written);
}

fn express_cache_factory(client: S3CrtClient) -> ExpressDataCache<S3CrtClient> {
    let express_bucket_name = get_express_cache_bucket();
    ExpressDataCache::new(&express_bucket_name, client, &express_bucket_name, CACHE_BLOCK_SIZE)
}

fn disk_cache_factory(cache_dir: PathBuf) -> impl FnOnce(S3CrtClient) -> DiskDataCache {
    move |_| {
        let cache_config = DiskDataCacheConfig {
            block_size: CACHE_BLOCK_SIZE,
            limit: Default::default(),
        };
        DiskDataCache::new(cache_dir, cache_config)
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

/// Create a FUSE mount backed by a real S3 client with a cache.
/// Note, that the mount uses S3 Standard as a source bucket.
fn new_fuse_session_with_cache<Cache, CacheFactory>(
    bucket: &str,
    prefix: &str,
    cache_factory: CacheFactory,
    filesystem_config: S3FilesystemConfig,
) -> (TempDir, BackgroundSession)
where
    Cache: DataCache + Send + Sync + 'static,
    CacheFactory: FnOnce(S3CrtClient) -> Cache,
{
    let mount_dir = tempfile::tempdir().unwrap();
    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE);
    let cache = cache_factory(client.clone());
    let runtime = client.event_loop_group();
    let prefetcher = caching_prefetch(cache, runtime, Default::default());
    let session = create_fuse_session(client, prefetcher, bucket, prefix, mount_dir.path(), filesystem_config);

    (mount_dir, session)
}
