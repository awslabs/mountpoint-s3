use crate::common::fuse::{self, TestSessionConfig};
use crate::common::s3::{get_express_cache_bucket, get_test_bucket_and_prefix};
use mountpoint_s3::data_cache::{DataCache, DiskDataCache, DiskDataCacheConfig, ExpressDataCache};
use mountpoint_s3_client::S3CrtClient;
use rand::{Rng, RngCore, SeedableRng};
use rand_chacha::ChaChaRng;
use std::fs;
use std::path::PathBuf;
use std::thread::sleep;
use std::time::Duration;
use test_case::test_case;

#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
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

#[cfg(feature = "s3_tests")]
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
    CacheFactory: FnOnce(S3CrtClient, u64) -> Cache,
{
    // mount a bucket
    const BLOCK_SIZE: u64 = 512 * 1024;
    let mut test_config: TestSessionConfig = TestSessionConfig::default();
    test_config.filesystem_config.cache_config.serve_lookup_from_cache = true;
    test_config.filesystem_config.cache_config.dir_ttl = Duration::from_secs(3600);
    test_config.filesystem_config.cache_config.file_ttl = Duration::from_secs(3600);
    let (_, prefix) = get_test_bucket_and_prefix(test_name);
    let (mount_point, _session, mut client) =
        fuse::s3_session::new_with_cache_factory(prefix.clone(), cache_factory, test_config, BLOCK_SIZE);

    // write an object, no caching happens yet
    let key = get_object_key(&prefix, key_suffix, key_size);
    let path = mount_point.path().join(&key);
    let written = random_binary_data(object_size);
    fs::write(&path, &written).expect("write should succeed");

    // first read should be from the source bucket and be cached
    let read = fs::read(&path).expect("read should succeed");
    assert_eq!(read, written);

    // cache population is async, 1 second should be enough for it to finish
    sleep(Duration::from_secs(1));

    // ensure data may not be served from the source bucket
    client.remove_object(&key).expect("remove must succeed");
    assert!(
        !client.contains_key(&key).expect("head object must succeed"),
        "object should not exist in the source bucket"
    );

    // second read should be from the cache
    let read = fs::read(&path).expect("read from the cache should succeed");
    assert_eq!(read, written);
}

fn express_cache_factory(client: S3CrtClient, block_size: u64) -> ExpressDataCache<S3CrtClient> {
    let express_bucket_name = get_express_cache_bucket();
    ExpressDataCache::new(&express_bucket_name, client, &express_bucket_name, block_size)
}

fn disk_cache_factory(cache_dir: PathBuf) -> impl FnOnce(S3CrtClient, u64) -> DiskDataCache {
    move |_, block_size| {
        let cache_config = DiskDataCacheConfig {
            block_size,
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

fn get_object_key(key_prefix: &str, key_suffix: &str, size_in_bytes: usize) -> String {
    let random_suffix: u64 = rand::thread_rng().gen();
    let last_key_part = format!("{key_suffix}{random_suffix}"); // part of the key after all the "/"
    let full_key = format!("{key_prefix}{last_key_part}");
    let full_key_size = full_key.as_bytes().len();
    assert!(full_key_size <= size_in_bytes, "the requested key size is too small");
    let padding_size = size_in_bytes - full_key_size;
    let padding = "0".repeat(padding_size);
    format!("{last_key_part}{padding}")
}
