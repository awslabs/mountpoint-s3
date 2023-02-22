#![cfg(feature = "s3_tests")]

pub mod common;

use aws_sdk_s3::types::ByteStream;
use bytes::Bytes;
use common::*;
use s3_client::{DeleteObjectError, ObjectClientError, S3CrtClient};

#[tokio::test]
async fn test_delete_object() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_delete_object");

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

    sdk_client
        .head_object()
        .bucket(&bucket)
        .key(&key)
        .send()
        .await
        .expect("object should exist");

    let client: S3CrtClient = get_test_client();
    let _result = client
        .delete_object(&bucket, &key)
        .await
        .expect("delete_object should not fail for non-existent object");

    let head_obj_err = sdk_client
        .head_object()
        .bucket(&bucket)
        .key(&key)
        .send()
        .await
        .expect_err("object should not exist");

    assert!(head_obj_err.into_service_error().is_not_found());
}

#[tokio::test]
async fn test_delete_object_no_obj() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_delete_object_no_obj");

    let key = format!("{prefix}/nonexistent_key");

    let head_obj_err = sdk_client
        .head_object()
        .bucket(&bucket)
        .key(&key)
        .send()
        .await
        .expect_err("object should not exist");
    assert!(head_obj_err.into_service_error().is_not_found());

    let client: S3CrtClient = get_test_client();
    let _result = client
        .delete_object(&bucket, &key)
        .await
        .expect("delete_object should not fail for non-existent object");

    // All OK
}

#[tokio::test]
async fn test_delete_object_404_bucket() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_delete_object_404_bucket");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let result = client.delete_object("DOC-EXAMPLE-BUCKET", &key).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(DeleteObjectError::NoSuchBucket))
    ));
}
