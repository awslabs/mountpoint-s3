#![cfg(feature = "s3_tests")]

mod common;

use common::*;

use s3_client::S3Client;

#[tokio::test]
async fn test_list_objects() {
    let sdk_client = get_test_sdk_client().await;
    let bucket = get_test_bucket_name();
    let prefix = get_bucket_test_prefix();

    // Create one object named "hello"
    let key = format!("{}/test_list_objects/hello", prefix);
    sdk_client.put_object().bucket(&bucket).key(&key).send().await.unwrap();

    let key = format!("{}/test_list_objects/dir/foo", prefix);
    sdk_client.put_object().bucket(&bucket).key(&key).send().await.unwrap();

    let client: S3Client = get_test_client();

    let result = client
        .list_objects_v2(&bucket, &format!("{}/test_list_objects/", prefix), "/", None)
        .await
        .expect("list_objects_v2 failed");

    println!("{:?}", result);
    assert_eq!(result.objects.len(), 2);
}

#[tokio::test]
async fn new_test_list_objects() {
    let bucket = get_test_bucket_name();
    let prefix = get_bucket_test_prefix();

    let client: S3Client = get_test_client();

    let result = client.new_list_objects_v2(&bucket, &format!("{}/test_list_objects/", prefix), "/");

    println!("{:?}", result);
}
