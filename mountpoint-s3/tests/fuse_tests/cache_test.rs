use std::{fs, sync::Arc, time::Duration};

use mountpoint_s3::{data_cache::ExpressDataCache, prefetch::caching_prefetch, ServerSideEncryption};
use rand::{Rng, RngCore, SeedableRng};
use rand_chacha::ChaChaRng;
use test_case::test_case;

use crate::common::{
    cache::CacheTestWrapper,
    fuse::{create_fuse_session, s3_session::create_crt_client},
    s3::{get_express_bucket, get_standard_bucket, get_test_prefix},
};

const CLIENT_PART_SIZE: usize = 8 * 1024 * 1024;

/// We want data to be stored in the cache with the provided SSE settings.
/// In some cases this is not possible, thus we expect a failure.
#[test_case("aws:sse", true; "Invalid SSE (does not match the default)")]
#[test_case("AES256", false; "Valid SSE (matches the default)")]
fn express_cache_enforced_sse_on_put(sse: &str, should_fail: bool) {
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
    express_cache.wait_for_put(Duration::from_secs(10));

    // Depending on the test case check that either or writes failed or all were successful
    if should_fail {
        assert_eq!(express_cache.put_block_ok_count(), 0)
    } else {
        assert_eq!(express_cache.put_block_failed_count(), 0);
    }

    // TODO: check with sdk client that data is stored with the right settings or not stored at all
}

// #[test]
// fn express_cache_enforced_sse_on_get();

// #[test]
// fn express_cache_expected_bucket_owner_on_get();

// #[test]
// fn express_cache_expected_bucket_owner_on_put();

// #[test]
// fn express_cache_wrong_etag();

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
