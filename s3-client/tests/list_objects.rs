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
        .list_objects_v2(&bucket, None, "/", 1000, &format!("{}/", &prefix))
        .await
        .expect("list_objects_v2 failed");

    println!("{:?}", result);
    assert_eq!(result.objects.len(), 1);
}

#[tokio::test]
async fn test_max_keys_continuation_token() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_max_keys_continuation_token");

    // Create four objects
    create_objects_for_test(&sdk_client, &bucket, &prefix, &["a", "b", "c", "d"]).await;

    let client: S3Client = get_test_client();

    // Ask for three objects
    let result = client
        .list_objects_v2(&bucket, None, "/", 3, &format!("{}/", &prefix))
        .await
        .expect("list_objects_v2 failed");

    println!("{:?}", result);
    assert_eq!(
        result.objects.len(),
        3,
        "there should be 3 objects in the first request"
    );

    let continuation_token = result
        .next_continuation_token
        .expect("continuation token should be present");

    // Ask for the remaining (one) object
    let result = client
        .list_objects_v2(&bucket, Some(&continuation_token), "/", 3, &format!("{}/", &prefix))
        .await
        .expect("list_objects_v2 failed");

    println!("{:?}", result);
    assert_eq!(
        result.objects.len(),
        1,
        "there should be 1 object in the second request"
    );
    assert!(result.next_continuation_token.is_none());
}
