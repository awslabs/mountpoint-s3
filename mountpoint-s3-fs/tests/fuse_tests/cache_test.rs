use crate::common::cache::CacheTestWrapper;
use crate::common::fuse::create_fuse_session;
use crate::common::fuse::s3_session::create_crt_client;
use crate::common::s3::{get_test_prefix, get_test_s3_path};

use mountpoint_s3_client::S3CrtClient;
use mountpoint_s3_fs::Runtime;
use mountpoint_s3_fs::data_cache::{DataCache, DiskDataCache, DiskDataCacheConfig};
use mountpoint_s3_fs::fuse::session::FuseSession;
use mountpoint_s3_fs::memory::PagedPool;
use mountpoint_s3_fs::object::ObjectId;
use mountpoint_s3_fs::prefetch::Prefetcher;
use mountpoint_s3_fs::s3::S3Path;

use rand::rngs::SmallRng;
use rand::{Rng, RngExt, SeedableRng};
use std::fs;
use std::time::Duration;
use tempfile::TempDir;
use test_case::test_case;

#[cfg(all(feature = "s3express_tests", feature = "second_account_tests"))]
use crate::common::s3::{get_bucket_owner, get_external_express_bucket, get_test_endpoint_config};
#[cfg(feature = "s3express_tests")]
use crate::common::s3::{get_express_bucket, get_express_sse_kms_bucket, get_standard_bucket, get_test_kms_key_id};
#[cfg(feature = "s3express_tests")]
use mountpoint_s3_client::ObjectClient;
#[cfg(feature = "s3express_tests")]
use mountpoint_s3_fs::data_cache::{BlockIndex, ExpressDataCache, ExpressDataCacheConfig, build_prefix, get_s3_key};

const CACHE_BLOCK_SIZE: u64 = 1024 * 1024;
const CLIENT_PART_SIZE: usize = 8 * 1024 * 1024;

/// A test that checks that an invalid block may not be served from the cache
#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn express_invalid_block_read() {
    use mountpoint_s3_client::checksums::crc32c;
    use mountpoint_s3_client::types::{PutObjectSingleParams, UploadChecksum};
    use mountpoint_s3_fs::s3::{Bucket, Prefix};

    let bucket = get_standard_bucket();
    let cache_bucket = get_express_bucket();
    let prefix = get_test_prefix("express_invalid_block_read");

    // Mount the bucket
    let pool = PagedPool::new_with_candidate_sizes([CACHE_BLOCK_SIZE as usize, CLIENT_PART_SIZE]);
    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE, Default::default(), pool.clone());
    let cache = CacheTestWrapper::new(ExpressDataCache::new(
        client.clone(),
        ExpressDataCacheConfig::new(&cache_bucket, &bucket),
    ));
    let s3_path = S3Path::new(Bucket::new(bucket.clone()).unwrap(), Prefix::new(&prefix).unwrap());
    let (mount_point, _session) = mount_bucket(client.clone(), cache.clone(), pool, s3_path);

    // Put an object to the mounted bucket
    let object_key = "key";
    let full_object_key = format!("{prefix}{object_key}");
    let object_data = "object_data";
    let result = client
        .put_object_single(&bucket, &full_object_key, &Default::default(), object_data)
        .await
        .expect("put object must succeed");
    let object_etag = result.etag.into_inner();

    // Read data twice, expect cache hits and no errors
    let path = mount_point.path().join(object_key);

    let put_block_count = cache.put_block_count();
    let read = fs::read(&path).expect("read should succeed");
    assert_eq!(read, object_data.as_bytes());
    cache.wait_for_put(Duration::from_secs(10), put_block_count);

    let read = fs::read(&path).expect("read should succeed");
    assert_eq!(read, object_data.as_bytes());

    assert_eq!(cache.get_block_invalid_count(), 0, "no invalid blocks yet");
    assert!(cache.get_block_hit_count() > 0, "reads should result in a cache hit");

    // Corrupt the cache block by replacing it with an object holding no metadata
    let object_id = get_object_id(&prefix, object_key, &object_etag);
    let block_key = get_express_cache_block_key(&bucket, &object_id, 0);
    let corrupted_block = "corrupted_block";
    let checksum = crc32c::checksum(corrupted_block.as_bytes());
    let put_object_params = PutObjectSingleParams::default().checksum(Some(UploadChecksum::Crc32c(checksum)));
    client
        .put_object_single(&cache_bucket, &block_key, &put_object_params, corrupted_block)
        .await
        .expect("put object must succeed");

    // Expect a successful read from the source bucket. We expect cache errors being recorded because of the corrupted block.
    let path = mount_point.path().join(object_key);
    let read = fs::read(&path).expect("read should succeed");
    assert_eq!(read, object_data.as_bytes());
    assert!(
        cache.get_block_invalid_count() > 0,
        "read should result in cache errors"
    );
}

#[test_case("key", 100, 1024; "simple")]
#[test_case("£", 100, 1024; "non-ascii key")]
#[test_case("key", 1024, 1024; "long key")]
#[test_case("key", 100, 1024 * 1024; "big file")]
#[cfg(feature = "s3express_tests")]
fn express_cache_write_read(key_suffix: &str, key_size: usize, object_size: usize) {
    use mountpoint_s3_fs::s3::{Bucket, Prefix};

    let pool = PagedPool::new_with_candidate_sizes([CACHE_BLOCK_SIZE as usize, CLIENT_PART_SIZE]);
    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE, Default::default(), pool.clone());
    let bucket_name = get_standard_bucket();
    let express_bucket_name = get_express_bucket();
    let cache = ExpressDataCache::new(
        client.clone(),
        ExpressDataCacheConfig::new(&express_bucket_name, &bucket_name),
    );

    let prefix = get_test_prefix("express_cache_write_read");
    let s3_path = S3Path::new(Bucket::new(bucket_name).unwrap(), Prefix::new(&prefix).unwrap());
    cache_write_read_base(client, s3_path, key_suffix, key_size, object_size, cache, pool)
}

#[test_case("key", 100, 1024; "simple")]
#[test_case("£", 100, 1024; "non-ascii key")]
#[test_case("key", 1024, 1024; "long key")]
#[test_case("key", 100, 1024 * 1024; "big file")]
fn disk_cache_write_read(key_suffix: &str, key_size: usize, object_size: usize) {
    let cache_dir = tempfile::tempdir().unwrap();
    let cache_config = DiskDataCacheConfig {
        cache_directory: cache_dir.path().to_path_buf(),
        block_size: CACHE_BLOCK_SIZE,
        limit: Default::default(),
    };
    let pool = PagedPool::new_with_candidate_sizes([CACHE_BLOCK_SIZE as usize, CLIENT_PART_SIZE]);
    let cache = DiskDataCache::new(cache_config, pool.clone());

    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE, Default::default(), pool.clone());

    let s3_path = get_test_s3_path("disk_cache_write_read");
    cache_write_read_base(client, s3_path, key_suffix, key_size, object_size, cache, pool);
}

#[test_case(Some("AES256".to_string()), None, get_express_sse_kms_bucket(); "overriding to AES256")]
#[test_case(Some("aws:kms".to_string()), Some(get_test_kms_key_id()), get_express_sse_kms_bucket(); "enforcing aws:kms with a key")]
#[test_case(Some("aws:kms".to_string()), None, get_express_sse_kms_bucket(); "enforcing aws:kms without a key")]
#[test_case(Some("AES256".to_string()), None, get_express_bucket(); "enforcing AES256")]
#[test_case(None, None, get_express_bucket(); "using the default, AES256")]
#[test_case(None, None, get_express_sse_kms_bucket(); "using the default, aws:kms")]
#[cfg(feature = "s3express_tests")]
fn express_cache_write_read_sse(sse_type: Option<String>, kms_key_id: Option<String>, cache_bucket: String) {
    use mountpoint_s3_fs::ServerSideEncryption;
    use mountpoint_s3_fs::data_cache::ExpressDataCacheConfig;
    use mountpoint_s3_fs::s3::{Bucket, Prefix};

    let pool = PagedPool::new_with_candidate_sizes([CACHE_BLOCK_SIZE as usize, CLIENT_PART_SIZE]);
    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE, Default::default(), pool.clone());
    let bucket_name = get_standard_bucket();
    let config = ExpressDataCacheConfig::new(&cache_bucket, &bucket_name)
        .sse(ServerSideEncryption::new(sse_type.clone(), kms_key_id.clone()));
    let cache = ExpressDataCache::new(client.clone(), config);

    let prefix = get_test_prefix("express_cache_write_read");
    let s3_path = S3Path::new(Bucket::new(bucket_name).unwrap(), Prefix::new(&prefix).unwrap());
    cache_write_read_base(client, s3_path, "key", 100, 1024, cache, pool)
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn express_cache_read_empty() {
    let pool = PagedPool::new_with_candidate_sizes([CACHE_BLOCK_SIZE as usize, CLIENT_PART_SIZE]);
    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE, Default::default(), pool);
    let bucket_name = get_standard_bucket();
    let express_bucket_name = get_express_bucket();
    let cache = ExpressDataCache::new(client, ExpressDataCacheConfig::new(&express_bucket_name, &bucket_name));

    cache_read_empty(cache, "express_cache_read_empty").await;
}

#[tokio::test]
async fn disk_cache_read_empty() {
    let cache_dir = tempfile::tempdir().unwrap();
    let cache_config = DiskDataCacheConfig {
        cache_directory: cache_dir.path().to_path_buf(),
        block_size: CACHE_BLOCK_SIZE,
        limit: Default::default(),
    };
    let pool = PagedPool::new_with_candidate_sizes([CACHE_BLOCK_SIZE as usize]);
    let cache = DiskDataCache::new(cache_config, pool);

    cache_read_empty(cache, "disk_cache_read_empty").await;
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn express_cache_verify_fail_non_express() {
    use mountpoint_s3_fs::data_cache::DataCacheError;

    let pool = PagedPool::new_with_candidate_sizes([CACHE_BLOCK_SIZE as usize, CLIENT_PART_SIZE]);
    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE, Default::default(), pool);
    let bucket_name = get_standard_bucket();
    let cache_bucket_name = get_standard_bucket();
    let cache = ExpressDataCache::new(
        client.clone(),
        ExpressDataCacheConfig::new(&cache_bucket_name, &bucket_name),
    );
    let err = cache
        .verify_cache_valid()
        .await
        .expect_err("cannot use standard bucket as shared cache");

    if let DataCacheError::IoFailure(err) = err {
        let body = format!("{err:?}");
        assert!(body.contains("<Code>InvalidStorageClass</Code>"));
    } else {
        panic!("wrong error type");
    }
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn express_cache_verify_fail_forbidden() {
    use crate::common::creds::get_scoped_down_credentials;
    use mountpoint_s3_client::config::{
        Allocator, CredentialsProvider, CredentialsProviderStaticOptions, S3ClientAuthConfig,
    };
    use mountpoint_s3_fs::{data_cache::DataCacheError, memory::PagedPool};

    let bucket_name = get_standard_bucket();
    let cache_bucket_name = get_express_bucket();

    // No `s3express:CreateSession` in this policy, so we should get a forbidden error.
    let policy = r#"{"Statement": [
        {"Effect": "Allow", "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject", "s3:AbortMultipartUpload"], "Resource": "arn:aws:s3:::__BUCKET__/*"},
        {"Effect": "Allow", "Action": "s3:ListBucket", "Resource": "arn:aws:s3:::__BUCKET__"}
    ]}"#;
    let policy = policy.replace("__BUCKET__", &cache_bucket_name);
    let credentials = get_scoped_down_credentials(policy).await;

    // Build a S3CrtClient that uses a static credentials provider with the creds we just got
    let config = CredentialsProviderStaticOptions {
        access_key_id: credentials.access_key_id(),
        secret_access_key: credentials.secret_access_key(),
        session_token: credentials.session_token(),
    };
    let provider = CredentialsProvider::new_static(&Allocator::default(), config).unwrap();

    let pool = PagedPool::new_with_candidate_sizes([CACHE_BLOCK_SIZE as usize, CLIENT_PART_SIZE]);
    let client = create_crt_client(
        CLIENT_PART_SIZE,
        CLIENT_PART_SIZE,
        S3ClientAuthConfig::Provider(provider),
        pool,
    );

    let cache = ExpressDataCache::new(
        client.clone(),
        ExpressDataCacheConfig::new(&cache_bucket_name, &bucket_name),
    );
    let err = cache.verify_cache_valid().await.expect_err("cache must be write-able");

    if let DataCacheError::IoFailure(err) = err {
        let body = format!("{err:?}");
        assert!(body.contains("AWS_ERROR_S3EXPRESS_CREATE_SESSION_FAILED"))
    } else {
        panic!("wrong error type");
    }
}

#[allow(clippy::too_many_arguments)]
fn cache_write_read_base<Cache>(
    client: S3CrtClient,
    s3_path: S3Path,
    key_suffix: &str,
    key_size: usize,
    object_size: usize,
    cache: Cache,
    pool: PagedPool,
) where
    Cache: DataCache + Send + Sync + 'static,
{
    // Mount a bucket
    let cache = CacheTestWrapper::new(cache);
    let (mount_point, _session) = mount_bucket(client, cache.clone(), pool, s3_path.clone());

    // Write an object, no caching happens yet
    let key = get_random_key(s3_path.prefix.as_str(), key_suffix, key_size);
    let path = mount_point.path().join(&key);
    let written = random_binary_data(object_size);
    fs::write(&path, &written).expect("write should succeed");
    let put_block_count = cache.put_block_count();
    assert_eq!(put_block_count, 0, "no cache writes should happen yet");

    // First read should be from the source bucket and be cached
    let read = fs::read(&path).expect("read should succeed");
    assert_eq!(read, written);

    // Cache population is async, wait for it to happen
    cache.wait_for_put(Duration::from_secs(10), put_block_count);

    // Second read should be from the cache
    let cache_hits_before_read = cache.get_block_hit_count();
    let read = fs::read(&path).expect("read from the cache should succeed");
    assert_eq!(read, written);
    assert!(
        cache.get_block_hit_count() > cache_hits_before_read,
        "read should result in a cache hit"
    );
}

async fn cache_read_empty<Cache>(cache: Cache, test_name: &str)
where
    Cache: DataCache + Send + Sync + 'static,
{
    let prefix = get_test_prefix(test_name);

    // Try reading a block that hasn't had anything written to it
    let block = cache
        .get_block(&get_object_id(&prefix, "does-not-exist", "etag"), 0, 0, 1000)
        .await
        .expect("should not return an error");
    assert!(block.is_none());
}

/// A test that checks that data is not written to the bucket owned by an unexpected account
#[test_case(get_express_bucket(), true, true; "bucket owned by the expected account")]
#[test_case(get_external_express_bucket(), true, false; "bucket owned by another account")]
#[test_case(get_external_express_bucket(), false, false; "bucket owned by another account, not checked")]
#[cfg(all(feature = "s3express_tests", feature = "second_account_tests"))]
fn express_cache_expected_bucket_owner(cache_bucket: String, owner_checked: bool, owner_matches: bool) {
    use futures::executor::block_on;
    use mountpoint_s3_client::config::S3ClientConfig;
    use mountpoint_s3_fs::data_cache::DataCacheError;
    use mountpoint_s3_fs::s3::{Bucket, Prefix};

    let bucket_owner = get_bucket_owner();
    // Configure the client to enforce the bucket owner
    let mut client_config = S3ClientConfig::default()
        .part_size(CLIENT_PART_SIZE)
        .endpoint_config(get_test_endpoint_config())
        .read_backpressure(true)
        .initial_read_window(CLIENT_PART_SIZE);
    if owner_checked {
        client_config = client_config.bucket_owner(&bucket_owner);
    }
    let client = S3CrtClient::new(client_config).unwrap();

    // Create cache and mount a bucket
    let bucket = get_standard_bucket();
    let prefix = get_test_prefix("express_expected_bucket_owner");
    let cache_config = ExpressDataCacheConfig::new(&cache_bucket, &bucket);
    let pool = PagedPool::new_with_candidate_sizes([cache_config.block_size as usize, CLIENT_PART_SIZE]);
    let cache = ExpressDataCache::new(client.clone(), cache_config);
    let cache_valid = block_on(cache.verify_cache_valid());
    if owner_checked && !owner_matches {
        match cache_valid {
            Err(DataCacheError::IoFailure(err)) => {
                let body = format!("{err:?}");
                assert!(body.contains("Forbidden"));
            }
            _ => panic!("expected S3RequestError::Forbidden, got: {cache_valid:?}"),
        }
    } else {
        cache_valid.expect("should succeed if not enforcing bucket owner");
    }

    let cache = CacheTestWrapper::new(cache);
    let s3_path = S3Path::new(Bucket::new(bucket).unwrap(), Prefix::new(&prefix).unwrap());
    let (mount_point, _session) = mount_bucket(client, cache.clone(), pool, s3_path);

    // Write an object, no caching happens yet
    let key = get_random_key(&prefix, "key", 100);
    let path = mount_point.path().join(&key);
    let written = random_binary_data(CACHE_BLOCK_SIZE as usize);
    fs::write(&path, &written).expect("write should succeed");

    // First read should be from the source bucket and be cached
    let put_block_count = cache.put_block_count();
    let read = fs::read(&path).expect("read should succeed");
    assert_eq!(read, written);

    // Cache population is async, wait for it to happen
    cache.wait_for_put(Duration::from_secs(10), put_block_count);

    if owner_checked && !owner_matches {
        assert_eq!(cache.put_block_fail_count(), cache.put_block_count());
    } else {
        assert_eq!(cache.put_block_fail_count(), 0);
    }
}

/// Generates random data of the specified size
fn random_binary_data(size_in_bytes: usize) -> Vec<u8> {
    let seed = rand::rng().random();
    let mut rng = SmallRng::seed_from_u64(seed);
    let mut data = vec![0; size_in_bytes];
    rng.fill_bytes(&mut data);
    data
}

/// Creates a random key which has a size of at least `min_size_in_bytes`
/// The `key_prefix` is not included in the return value.
fn get_random_key(key_prefix: &str, key_suffix: &str, min_size_in_bytes: usize) -> String {
    let random_suffix: u64 = rand::rng().random();
    let last_key_part = format!("{key_suffix}{random_suffix}"); // part of the key after all the "/"
    let full_key = format!("{key_prefix}{last_key_part}");
    let full_key_size = full_key.len();
    let padding_size = min_size_in_bytes.saturating_sub(full_key_size);
    let padding = "0".repeat(padding_size);
    format!("{last_key_part}{padding}")
}

fn mount_bucket<Cache>(client: S3CrtClient, cache: Cache, pool: PagedPool, s3_path: S3Path) -> (TempDir, FuseSession)
where
    Cache: DataCache + Send + Sync + 'static,
{
    let mount_point = tempfile::tempdir().unwrap();
    let runtime = Runtime::new(client.event_loop_group());
    let prefetcher_builder = Prefetcher::caching_builder(cache, client.clone());
    let (session, _mount) = create_fuse_session(
        client,
        prefetcher_builder,
        pool,
        runtime,
        s3_path,
        mount_point.path(),
        Default::default(),
    );
    (mount_point, session)
}

fn get_object_id(prefix: &str, key: &str, etag: &str) -> ObjectId {
    ObjectId::new(format!("{prefix}{key}"), etag.into())
}

#[cfg(feature = "s3express_tests")]
fn get_express_cache_block_key(bucket: &str, cache_key: &ObjectId, block_idx: BlockIndex) -> String {
    let block_key_prefix = build_prefix(bucket, CACHE_BLOCK_SIZE);
    get_s3_key(&block_key_prefix, cache_key, block_idx)
}
