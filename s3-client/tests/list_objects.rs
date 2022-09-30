#![cfg(feature = "s3_tests")]

pub mod common;

use common::*;
use s3_client::S3Client;

#[tokio::test]
async fn test_list_objects() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_list_objects");
    create_objects_for_test(&sdk_client, &bucket, &prefix, &["hello", "dir/a", "dir/b"]).await;

    let client: S3Client = get_test_client();

    let result = client
        .list_objects(&bucket, None, "/", 1000, &prefix)
        .await
        .expect("ListObjects failed");

    println!("{:?}", result);
    assert_eq!(result.bucket, bucket);
    assert!(result.next_continuation_token.is_none());
    assert_eq!(result.objects.len(), 1);
    assert_eq!(result.objects[0].key, format!("{}{}", prefix, "hello"));
    assert_eq!(result.common_prefixes.len(), 1);
    assert_eq!(result.common_prefixes[0], format!("{}{}", prefix, "dir/"));
}

#[tokio::test]
async fn test_max_keys_continuation_token() {
    // Max keys to get per request
    const MAX_KEYS_PER_REQUEST: usize = 4;
    // Total number of keys in directory
    const TOTAL_KEYS: usize = 13;
    // Upper bound on how many tries it should take
    const MAX_ATTEMPTS: usize = (TOTAL_KEYS + MAX_KEYS_PER_REQUEST) / MAX_KEYS_PER_REQUEST;

    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_max_keys_continuation_token");

    // Create a bunch of test objects with names "object_0, object_1, ..."
    let keys: Vec<String> = (0..TOTAL_KEYS).map(|i| format!("object_{i}")).collect();
    create_objects_for_test(&sdk_client, &bucket, &prefix, &keys[..]).await;

    let client: S3Client = get_test_client();

    let mut continuation_token: Option<String> = None;
    let mut keys_left = TOTAL_KEYS;
    let mut remaining_attempts = MAX_ATTEMPTS;

    while keys_left > 0 && remaining_attempts > 0 {
        // Get the next batch of objects
        let result = client
            .list_objects(
                &bucket,
                continuation_token.as_deref(),
                "/",
                MAX_KEYS_PER_REQUEST,
                &prefix,
            )
            .await
            .expect("ListObjects failed");

        assert_eq!(
            result.objects.len(),
            std::cmp::min(MAX_KEYS_PER_REQUEST, keys_left),
            "got a different number of keys than expected"
        );

        keys_left -= result.objects.len();
        remaining_attempts -= 1;

        continuation_token = result.next_continuation_token;
        if keys_left > 0 {
            assert!(
                continuation_token.is_some(),
                "expect continuation token if more keys are remaining"
            );
        }
    }

    assert!(
        continuation_token.is_none(),
        "should be no more continuation tokens after listing all keys"
    );

    assert_eq!(keys_left, 0, "should be no more keys left after reaching max attempts");
}

#[tokio::test]
async fn test_invalid_list_objects() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_invalid_list_objects");

    let client: S3Client = get_test_client();

    // Make a ListObjects request using some made-up continuation token.
    let continuation_token = Some("Made-up invalid token here");
    let result = client
        .list_objects(&bucket, continuation_token, "/", 1000, &prefix)
        .await;

    let err = result.expect_err("this request should have failed: we made up an invalid continuation token");
    println!("{}", err);
}
