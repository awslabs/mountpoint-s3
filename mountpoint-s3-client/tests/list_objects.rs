#![cfg(feature = "s3_tests")]

pub mod common;

use common::*;
use mountpoint_s3_client::error::{ListObjectsError, ObjectClientError};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};

#[tokio::test]
async fn test_list_objects() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_list_objects");
    create_objects_for_test(&sdk_client, &bucket, &prefix, &["hello", "dir/a", "dir/b"]).await;

    let client: S3CrtClient = get_test_client();

    let result = client
        .list_objects(&bucket, None, "/", 1000, &prefix)
        .await
        .expect("ListObjects failed");

    println!("{result:?}");
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

    let client: S3CrtClient = get_test_client();

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

    let client: S3CrtClient = get_test_client();

    // Make a ListObjects request using some made-up continuation token.
    let continuation_token = Some("Made-up invalid token here");
    let result = client
        .list_objects(&bucket, continuation_token, "/", 1000, &prefix)
        .await;

    let err = result.expect_err("this request should have failed: we made up an invalid continuation token");
    println!("{err}");
}

#[tokio::test]
async fn test_list_objects_404_bucket() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_list_objects_404_bucket");

    let client: S3CrtClient = get_test_client();

    let result = client
        .list_objects("DOC-EXAMPLE-BUCKET", None, "/", 1000, &prefix)
        .await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(ListObjectsError::NoSuchBucket))
    ));
}

// Test list with keys and arguments that poke at URL encoding
// For S3 Express One Zone, ListObjectsV2 API results are not lexicographically sorted and this test will be failing.
#[cfg(not(feature = "s3express_tests"))]
#[tokio::test]
async fn test_interesting_keys() {
    let keys = &[
        "the first one@@@",
        "the first one@@@/the 1st one!$%#@?_.-=&+^",
        "the first one@@@/the 2nd+one!",
        "the first one@@@/the 3rd one&",
    ];
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_list_objects");
    create_objects_for_test(&sdk_client, &bucket, &prefix, keys).await;

    let client: S3CrtClient = get_test_client();

    let result = client
        .list_objects(&bucket, None, "/", 2, &prefix)
        .await
        .expect("ListObjects failed");
    assert_eq!(result.common_prefixes[0], format!("{prefix}{}/", keys[0]));
    assert_eq!(result.objects[0].key, format!("{prefix}{}", keys[0]));

    let result = client
        .list_objects(&bucket, None, "/", 1, &format!("{prefix}{}/", keys[0]))
        .await
        .expect("ListObjects failed");
    assert_eq!(result.objects.len(), 1);
    assert_eq!(result.objects[0].key, format!("{prefix}{}", keys[1]));
    assert!(result.next_continuation_token.is_some());

    let result = client
        .list_objects(
            &bucket,
            result.next_continuation_token.as_deref(),
            "/",
            1000,
            &format!("{prefix}{}/", keys[0]),
        )
        .await
        .expect("ListObjects failed");
    assert_eq!(result.objects[0].key, format!("{prefix}{}", keys[2]));
    assert_eq!(result.objects[1].key, format!("{prefix}{}", keys[3]));
    assert_eq!(result.objects.len(), 2);
    assert!(result.next_continuation_token.is_none());
}
