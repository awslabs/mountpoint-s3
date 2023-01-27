#![cfg(feature = "s3_tests")]

pub mod common;

use aws_sdk_s3::types::ByteStream;
use bytes::Bytes;
use common::*;
use s3_client::S3CrtClient;

#[tokio::test]
async fn test_head_object() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object");

    let key = format!("{prefix}/hello");
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();
    let result = client.head_object(&bucket, &key).await.expect("get_object failed");

    assert_eq!(result.bucket, bucket);
    assert_eq!(result.object.key, key);
    assert_eq!(result.object.size as usize, body.len());
}

#[tokio::test]
async fn test_head_object_404() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_404");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let result = client.head_object(&bucket, &key).await;
    assert!(result.is_err());
}
