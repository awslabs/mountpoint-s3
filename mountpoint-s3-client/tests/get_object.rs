#![cfg(feature = "s3_tests")]

pub mod common;

use std::option::Option::None;

use aws_sdk_s3::types::ByteStream;
use bytes::Bytes;
use common::*;
use futures::stream::StreamExt;
use mountpoint_s3_client::{GetObjectError, ObjectClient, ObjectClientError, S3CrtClient};

#[tokio::test]
async fn test_get_object() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object");

    // Create one object named "hello"
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

    let result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object failed");
    check_get_result(result, None, &body[..]).await;
}

#[tokio::test]
async fn test_get_object_large() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_large");

    let key = format!("{prefix}/large");
    let body = vec![0x42; 30000000];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(body.clone()))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    let result = client.get_object(&bucket, &key, None).await.expect("get_object failed");
    check_get_result(result, None, &body[..]).await;

    let range = (body.len() / 3) as u64..body.len() as u64;
    let result = client
        .get_object(&bucket, &key, Some(range.clone()))
        .await
        .expect("get_object failed");
    check_get_result(
        result,
        Some(range.clone()),
        &body[range.start as usize..range.end as usize],
    )
    .await;
}

#[tokio::test]
async fn test_get_object_404_key() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_404_key");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let mut result = client.get_object(&bucket, &key, None).await.expect("get_object failed");
    let next = StreamExt::next(&mut result).await.expect("stream needs to return Err");
    assert!(matches!(
        next,
        Err(ObjectClientError::ServiceError(GetObjectError::NoSuchKey))
    ));

    // TODO: what happens if the object is deleted mid-GET? the CRT does lots of ranged GETs, so they
    // will start failing. need a way to test that.
}
#[tokio::test]
async fn test_get_object_404_bucket() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_get_object_404_bucket");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let mut result = client
        .get_object("DOC-EXAMPLE-BUCKET", &key, None)
        .await
        .expect("get_object failed");
    let next = StreamExt::next(&mut result).await.expect("stream needs to return Err");
    assert!(matches!(
        next,
        Err(ObjectClientError::ServiceError(GetObjectError::NoSuchBucket))
    ));
}

#[tokio::test]
async fn test_get_object_412_if_match() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_get_object_412_if_match");
    let key = format!("{prefix}/nonexistent_key");
    let client: S3CrtClient = get_test_client();

    let mut result = client
        .get_object("DOC-EXAMPLE-BUCKET", &key, None)
        .await
        .expect("get_object failed");
    let next = StreamExt::next(&mut result).await.expect("stream needs to return Err");
    assert!(matches!(
        next,
        Err(ObjectClientError::ServiceError(GetObjectError::ETagNotMatch))
    ));
}
