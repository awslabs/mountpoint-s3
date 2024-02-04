#![cfg(feature = "s3_tests")]

pub mod common;

use std::ops::Range;
use std::option::Option::None;
use std::str::FromStr;

use aws_sdk_s3::primitives::ByteStream;
use bytes::Bytes;
use common::*;
use futures::stream::StreamExt;
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_client::{ObjectClient, S3CrtClient};

use test_case::test_case;

#[test_case(1, None; "1-byte object")]
#[test_case(10, None; "small object")]
#[test_case(30000000, None; "large object")]
#[test_case(1, Some(0..1); "1-byte object with range")]
#[test_case(10, Some(0..4); "small object with range")]
#[test_case(30000000, Some(10000000..10000100); "large object with small range")]
#[test_case(30000000, Some(10000000..30000000); "large object with large range")]
#[tokio::test]
async fn test_get_object(size: usize, range: Option<Range<u64>>) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object");

    let key = format!("{prefix}/test");
    let body = vec![0x42; size];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(body.clone()))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    let result = client
        .get_object(&bucket, &key, range.clone(), None)
        .await
        .expect("get_object should succeed");
    let expected = match range {
        Some(Range { start, end }) => &body[start as usize..end as usize],
        None => &body,
    };
    check_get_result(result, range, expected).await;
}

#[tokio::test]
async fn test_get_object_404_key() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_404_key");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let mut result = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
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
        .get_object("DOC-EXAMPLE-BUCKET", &key, None, None)
        .await
        .expect("get_object failed");
    let next = StreamExt::next(&mut result).await.expect("stream needs to return Err");
    assert!(matches!(
        next,
        Err(ObjectClientError::ServiceError(GetObjectError::NoSuchBucket))
    ));
}

#[tokio::test]
async fn test_get_object_success_if_match() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_if_match");

    // Create one object named "hello"
    let key = format!("{prefix}/hello");
    let body = b"hello world!";

    let response = sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();
    let etag = Some(ETag::from_str(response.e_tag().expect("E-Tag should be set")).unwrap());

    let result = client
        .get_object(&bucket, &key, None, etag)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &body[..]).await;
}

#[tokio::test]
async fn test_get_object_412_if_match() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_412_if_match");

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
    let etag = Some(ETag::from_str("incorrect_etag").unwrap());

    let mut result = client
        .get_object(&bucket, &key, None, etag)
        .await
        .expect("get_object should succeed");

    let next = StreamExt::next(&mut result).await.expect("stream needs to return Err");

    assert!(matches!(
        next,
        Err(ObjectClientError::ServiceError(GetObjectError::PreconditionFailed))
    ));
}
