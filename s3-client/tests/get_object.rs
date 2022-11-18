#![cfg(feature = "s3_tests")]

pub mod common;

use aws_sdk_s3::types::ByteStream;
use bytes::Bytes;
use common::*;
use futures::stream::StreamExt;
use futures::{pin_mut, Stream};
use s3_client::{GetObjectError, ObjectClient, S3Client, S3RequestError};
use std::ops::Range;

async fn check_get_result(
    result: impl Stream<Item = Result<(u64, Box<[u8]>), S3RequestError<GetObjectError>>>,
    range: Option<Range<u64>>,
    expected: &[u8],
) {
    let mut accum = vec![];
    let mut next_offset = range.map(|r| r.start).unwrap_or(0);
    pin_mut!(result);
    while let Some(r) = result.next().await {
        let (offset, body) = r.expect("get_object body part failed");
        assert_eq!(offset, next_offset, "wrong body part offset");
        next_offset += body.len() as u64;
        accum.extend_from_slice(&body[..]);
    }
    assert_eq!(&accum[..], expected, "body does not match");
}

#[tokio::test]
async fn test_get_object() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object");

    // Create one object named "hello"
    let key = format!("{}/hello", prefix);
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3Client = get_test_client();

    let result = client.get_object(&bucket, &key, None).await.expect("get_object failed");
    check_get_result(result, None, &body[..]).await;
}

#[tokio::test]
async fn test_get_object_large() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_large");

    let key = format!("{}/large", prefix);
    let body = vec![0x42; 30000000];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(body.clone()))
        .send()
        .await
        .unwrap();

    let client: S3Client = get_test_client();

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
async fn test_get_object_404() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_404");

    let key = format!("{}/nonexistent_key", prefix);

    let client: S3Client = get_test_client();

    let mut result = client.get_object(&bucket, &key, None).await.expect("get_object failed");
    let next = StreamExt::next(&mut result).await.expect("stream needs to return Err");
    assert!(next.is_err());

    // TODO: what happens if the object is deleted mid-GET? the CRT does lots of ranged GETs, so they
    // will start failing. need a way to test that.
}
