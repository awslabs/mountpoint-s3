#![cfg(feature = "s3_tests")]

mod common;

use common::*;

use s3_client::S3Client;

#[tokio::test]
async fn test_list_objects() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_list_objects");
    create_objects_for_test(&sdk_client, &bucket, &prefix, &["hello", "dir/foo"]).await;

    let client: S3Client = get_test_client();

    let result = client
        .list_objects(&bucket, None, "/", 1000, &format!("{}/", &prefix))
        .await
        .expect("list_objects_v2 failed");

    println!("{:?}", result);
    assert_eq!(result.objects.len(), 1);
}

#[tokio::test]
async fn test_max_keys_continuation_token() {
    // Max keys to get per request
    const MAX_KEYS_PER_REQUEST: usize = 4;
    // Total number of keys in directory
    const TOTAL_KEYS: usize = 13;

    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_max_keys_continuation_token");

    // Create a bunch of test objects with names "object_0, object_1, ..."
    let keys: Vec<String> = (0..TOTAL_KEYS).map(|i| format!("object_{i}")).collect();
    create_objects_for_test(&sdk_client, &bucket, &prefix, &keys[..]).await;

    let client: S3Client = get_test_client();

    let mut continuation_token: Option<String> = None;
    let mut keys_left = TOTAL_KEYS;

    while keys_left > 0 {
        // Get the next batch of objects
        let result = client
            .list_objects(
                &bucket,
                continuation_token.as_deref(),
                "/",
                MAX_KEYS_PER_REQUEST,
                &format!("{}/", &prefix),
            )
            .await
            .expect("ListObjects failed");

        assert_eq!(
            result.objects.len(),
            std::cmp::min(MAX_KEYS_PER_REQUEST, keys_left),
            "got a different number of keys than expected"
        );

        keys_left -= result.objects.len();

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
}

#[tokio::test]
async fn test_invalid_list_objects() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_invalid_list_objects");

    let client: S3Client = get_test_client();

    // Make a ListObjects request using some made-up continuation token.
    let continuation_token = Some("Made-up invalid token here");
    let result = client
        .list_objects(&bucket, continuation_token, "/", 1000, &format!("{}/", &prefix))
        .await;

    let err = result.expect_err("this request should have failed: we made up an invalid continuation token");
    println!("{}", err);
}
