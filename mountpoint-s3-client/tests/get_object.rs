#![cfg(feature = "s3_tests")]

pub mod common;

use std::ops::Range;
use std::option::Option::None;
use std::str::FromStr;
use std::sync::mpsc::{self, RecvTimeoutError};
use std::thread;
use std::time::Duration;

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

#[test_case(1, None; "1-byte object")]
#[test_case(10, None; "small object")]
#[test_case(30000000, None; "large object")]
#[test_case(1, Some(0..1); "1-byte object with range")]
#[test_case(10, Some(0..4); "small object with range")]
#[test_case(30000000, Some(10000000..10000100); "large object with small range")]
#[test_case(30000000, Some(10000000..30000000); "large object with large range")]
#[tokio::test]
async fn test_get_object_backpressure(size: usize, range: Option<Range<u64>>) {
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

    let initial_window_size = 8 * 1024 * 1024;
    let client: S3CrtClient = get_test_backpressure_client(initial_window_size);

    let request = client
        .get_object(&bucket, &key, range.clone(), None)
        .await
        .expect("get_object should succeed");
    let expected = match range {
        Some(Range { start, end }) => &body[start as usize..end as usize],
        None => &body,
    };
    check_backpressure_get_result(initial_window_size, request, range, expected).await;
}

// Verify that the request is blocked when we don't increment read window size
#[tokio::test]
async fn verify_backpressure_get_object() {
    let size = 1000;
    let range = 50..1000;
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

    let initial_window_size = 256;
    let client: S3CrtClient = get_test_backpressure_client(initial_window_size);

    let mut get_request = client
        .get_object(&bucket, &key, Some(range.clone()), None)
        .await
        .expect("should not fail");

    let mut accum = vec![];
    let mut next_offset = range.start;

    let (sender, receiver) = mpsc::channel();
    thread::spawn(move || {
        futures::executor::block_on(async move {
            while let Some(r) = get_request.next().await {
                let (offset, body) = r.unwrap();
                assert_eq!(offset, next_offset, "wrong body part offset");
                next_offset += body.len() as u64;
                accum.extend_from_slice(&body[..]);
            }
            let expected_range = range;
            let expected_range = expected_range.start as usize..expected_range.end as usize;
            assert_eq!(&accum[..], &body[expected_range], "body does not match");
            sender.send(accum).unwrap();
        })
    });
    match receiver.recv_timeout(Duration::from_millis(100)) {
        Ok(_) => panic!("request should have been blocked"),
        Err(e) => assert_eq!(e, RecvTimeoutError::Timeout),
    }
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

#[test_case(false; "early")]
#[test_case(true; "after read")]
#[tokio::test]
async fn test_get_object_cancel(read: bool) {
    const OBJECT_SIZE: usize = 30_000_000;

    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_cancel");

    // Create one large object named "hello"
    let key = format!("{prefix}/hello");
    let body = vec![0x42; OBJECT_SIZE];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(body))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    let mut request = client
        .get_object(&bucket, &key, None, None)
        .await
        .expect("get_object should succeed");

    if read {
        let mut bytes = 0;
        while let Some(next) = request.next().await {
            let (_offset, body) = next.expect("part download should succeed");
            bytes += body.len();
        }
        assert_eq!(bytes, OBJECT_SIZE);
    } else {
        // Wait a bit for the request to make some progress. This is very racy, but should be short
        // enough that there are still requests outstanding.
        tokio::time::sleep(std::time::Duration::from_millis(500)).await;
    }

    // Explicitly cancel the request. We don't have a good way to test that any inflight requests
    // were actually cancelled, but we can at least check that the drop doesn't panic/deadlock.
    drop(request);
}
