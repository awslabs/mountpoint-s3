use crate::common::cache::CacheTestWrapper;
use crate::common::fuse::create_fuse_session;
use crate::common::fuse::s3_session::create_crt_client;
use crate::common::s3::{get_test_bucket, get_test_prefix};

use mountpoint_s3::data_cache::{DataCache, DiskDataCache, DiskDataCacheConfig};
use mountpoint_s3::prefetch::caching_prefetch;
use mountpoint_s3_client::S3CrtClient;

use fuser::BackgroundSession;
use rand::{Rng, RngCore, SeedableRng};
use rand_chacha::ChaChaRng;
use std::fs;
use std::time::Duration;
use tempfile::TempDir;
use test_case::test_case;

#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
use crate::common::s3::{get_express_bucket, get_standard_bucket};
#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
use mountpoint_s3::data_cache::{build_prefix, get_s3_key, BlockIndex, ExpressDataCache};
#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
use mountpoint_s3::object::ObjectId;
#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
use mountpoint_s3_client::types::{PutObjectSingleParams, UploadChecksum};
#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
use mountpoint_s3_client::ObjectClient;
#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
use mountpoint_s3_crt::checksums::crc32c;

const CACHE_BLOCK_SIZE: u64 = 1024 * 1024;
const CLIENT_PART_SIZE: usize = 8 * 1024 * 1024;

/// A test that checks that an invalid block may not be served from the cache
#[tokio::test]
#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
async fn express_invalid_block_read() {
    let bucket = get_standard_bucket();
    let cache_bucket = get_express_bucket();
    let prefix = get_test_prefix("express_invalid_block_read");

    // Mount the bucket
    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE, Default::default());
    let cache = CacheTestWrapper::new(ExpressDataCache::new(
        client.clone(),
        Default::default(),
        &bucket,
        &cache_bucket,
    ));
    let (mount_point, _session) = mount_bucket(client.clone(), cache.clone(), &bucket, &prefix);

    // Put an object to the mounted bucket
    let object_key = generate_unprefixed_key(&prefix, "key", 100);
    let full_object_key = format!("{prefix}{object_key}");
    let object_data = "object_data";
    let result = client
        .put_object_single(&bucket, &full_object_key, &Default::default(), object_data)
        .await
        .expect("put object must succeed");
    let object_etag = result.etag.into_inner();

    // Read data twice, expect cache hits and no errors
    let path = mount_point.path().join(&object_key);

    let put_block_count = cache.put_block_count();
    let read = fs::read(&path).expect("read should succeed");
    assert_eq!(read, object_data.as_bytes());
    cache.wait_for_put(Duration::from_secs(10), put_block_count);

    let read = fs::read(&path).expect("read should succeed");
    assert_eq!(read, object_data.as_bytes());

    assert_eq!(cache.get_block_invalid_count(), 0, "no invalid blocks yet");
    assert!(cache.get_block_hit_count() > 0, "reads should result in a cache hit");

    // Corrupt the cache block by replacing it with an object holding no metadata
    let object_id = get_object_id(&prefix, &object_key, &object_etag);
    let block_key = get_express_cache_block_key(&bucket, &object_id, 0);
    let corrupted_block = "corrupted_block";
    let checksum = crc32c::checksum(corrupted_block.as_bytes());
    let put_object_params = PutObjectSingleParams::default().checksum(Some(UploadChecksum::Crc32c(checksum)));
    client
        .put_object_single(&cache_bucket, &block_key, &put_object_params, corrupted_block)
        .await
        .expect("put object must succeed");

    // Expect a successfull read from the source bucket. We expect cache errors being recorded because of the corrupted block.
    let path = mount_point.path().join(&object_key);
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
#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
fn express_cache_write_read(key_suffix: &str, key_size: usize, object_size: usize) {
    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE, Default::default());
    let bucket_name = get_standard_bucket();
    let express_bucket_name = get_express_bucket();
    let cache = ExpressDataCache::new(client.clone(), Default::default(), &bucket_name, &express_bucket_name);

    cache_write_read_base(
        client,
        &bucket_name,
        key_suffix,
        key_size,
        object_size,
        cache,
        "express_cache_write_read",
    )
}

#[test_case("key", 100, 1024; "simple")]
#[test_case("£", 100, 1024; "non-ascii key")]
#[test_case("key", 1024, 1024; "long key")]
#[test_case("key", 100, 1024 * 1024; "big file")]
#[cfg(feature = "s3_tests")]
fn disk_cache_write_read(key_suffix: &str, key_size: usize, object_size: usize) {
    let cache_dir = tempfile::tempdir().unwrap();
    let cache_config = DiskDataCacheConfig {
        block_size: CACHE_BLOCK_SIZE,
        limit: Default::default(),
    };
    let cache = DiskDataCache::new(cache_dir.path().to_path_buf(), cache_config);

    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE, Default::default());

    let bucket_name = get_test_bucket();
    cache_write_read_base(
        client,
        &bucket_name,
        key_suffix,
        key_size,
        object_size,
        cache,
        "disk_cache_write_read",
    );
}

#[tokio::test]
#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
async fn express_cache_verify_fail_non_express() {
    use mountpoint_s3_client::error::ObjectClientError;
    use mountpoint_s3_client::S3RequestError::ResponseError;

    let client = create_crt_client(CLIENT_PART_SIZE, CLIENT_PART_SIZE, Default::default());
    let bucket_name = get_standard_bucket();
    let cache_bucket_name = get_standard_bucket();
    let cache = ExpressDataCache::new(client.clone(), Default::default(), &bucket_name, &cache_bucket_name);
    let err = cache
        .verify_cache_valid()
        .await
        .expect_err("cannot use standard bucket as shared cache");

    if let ObjectClientError::ClientError(ResponseError(request_result)) = err {
        let body = request_result.error_response_body.as_ref().expect("should have body");
        let body = body.clone().into_string().unwrap();
        assert!(body.contains("<Code>InvalidStorageClass</Code>"));
    } else {
        panic!("wrong error type");
    }
}

#[tokio::test]
#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
async fn express_cache_verify_fail_forbidden() {
    use crate::common::creds::get_scoped_down_credentials;
    use mountpoint_s3_client::config::S3ClientAuthConfig;
    use mountpoint_s3_client::error::ObjectClientError;
    use mountpoint_s3_client::S3RequestError::CrtError;
    use mountpoint_s3_crt::auth::credentials::{CredentialsProvider, CredentialsProviderStaticOptions};
    use mountpoint_s3_crt::common::allocator::Allocator;

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

    let client = create_crt_client(
        CLIENT_PART_SIZE,
        CLIENT_PART_SIZE,
        S3ClientAuthConfig::Provider(provider),
    );

    let cache = ExpressDataCache::new(client.clone(), Default::default(), &bucket_name, &cache_bucket_name);
    let err = cache.verify_cache_valid().await.expect_err("cache must be write-able");

    if let ObjectClientError::ClientError(CrtError(err)) = err {
        assert!(err.to_string().contains("AWS_ERROR_S3EXPRESS_CREATE_SESSION_FAILED"))
    } else {
        panic!("wrong error type");
    }
}

fn cache_write_read_base<Cache>(
    client: S3CrtClient,
    bucket: &str,
    key_suffix: &str,
    key_size: usize,
    object_size: usize,
    cache: Cache,
    test_name: &str,
) where
    Cache: DataCache + Send + Sync + 'static,
{
    let prefix = get_test_prefix(test_name);

    // Mount a bucket
    let cache = CacheTestWrapper::new(cache);
    let (mount_point, _session) = mount_bucket(client, cache.clone(), bucket, &prefix);

    // Write an object, no caching happens yet
    let key = generate_unprefixed_key(&prefix, key_suffix, key_size);
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

/// Generates random data of the specified size
fn random_binary_data(size_in_bytes: usize) -> Vec<u8> {
    let seed = rand::thread_rng().gen();
    let mut rng = ChaChaRng::seed_from_u64(seed);
    let mut data = vec![0; size_in_bytes];
    rng.fill_bytes(&mut data);
    data
}

/// Creates a random key which has a size of at least `min_size_in_bytes`
/// The `key_prefix` is not included in the return value.
fn generate_unprefixed_key(key_prefix: &str, key_suffix: &str, min_size_in_bytes: usize) -> String {
    let random_suffix: u64 = rand::thread_rng().gen();
    let last_key_part = format!("{key_suffix}{random_suffix}"); // part of the key after all the "/"
    let full_key = format!("{key_prefix}{last_key_part}");
    let full_key_size = full_key.as_bytes().len();
    let padding_size = min_size_in_bytes.saturating_sub(full_key_size);
    let padding = "0".repeat(padding_size);
    format!("{last_key_part}{padding}")
}

fn mount_bucket<Cache>(client: S3CrtClient, cache: Cache, bucket: &str, prefix: &str) -> (TempDir, BackgroundSession)
where
    Cache: DataCache + Send + Sync + 'static,
{
    let mount_point = tempfile::tempdir().unwrap();
    let runtime = client.event_loop_group();
    let prefetcher = caching_prefetch(cache, runtime, Default::default());
    let session = create_fuse_session(
        client,
        prefetcher,
        bucket,
        prefix,
        mount_point.path(),
        Default::default(),
    );
    (mount_point, session)
}

#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
fn get_object_id(prefix: &str, key: &str, etag: &str) -> ObjectId {
    ObjectId::new(format!("{prefix}{key}"), etag.into())
}

#[cfg(all(feature = "s3_tests", feature = "s3express_tests"))]
fn get_express_cache_block_key(bucket: &str, cache_key: &ObjectId, block_idx: BlockIndex) -> String {
    let block_key_prefix = build_prefix(bucket, CACHE_BLOCK_SIZE);
    get_s3_key(&block_key_prefix, cache_key, block_idx)
}
