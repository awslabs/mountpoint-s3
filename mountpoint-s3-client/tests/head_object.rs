#![cfg(feature = "s3_tests")]

pub mod common;

use std::time::{Duration, Instant};

use aws_sdk_s3::primitives::ByteStream;
use aws_sdk_s3::types::{GlacierJobParameters, RestoreRequest, Tier};
use bytes::Bytes;
use common::*;
use mountpoint_s3_client::error::{HeadObjectError, ObjectClientError};
use mountpoint_s3_client::types::RestoreStatus;
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};
use test_case::test_case;

#[tokio::test]
async fn test_head_object() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object");

    let key = format!("{prefix}/hello");
    let body = b"hello world!";
    let mut request = sdk_client.put_object();
    if cfg!(not(feature = "s3express_tests")) {
        request = request.bucket(&bucket);
    }
    request
        .key(&key)
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();
    let result = client.head_object(&bucket, &key).await.expect("head_object failed");

    assert_eq!(result.bucket, bucket);
    assert_eq!(result.object.key, key);
    assert_eq!(result.object.size as usize, body.len());
}

#[test_case("INTELLIGENT_TIERING")]
#[test_case("GLACIER")]
#[tokio::test]
// S3 Express One Zone is a distinct storage class and can't be overridden
#[cfg(not(feature = "s3express_tests"))]
async fn test_head_object_storage_class(storage_class: &str) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object");

    let key = format!("{prefix}/hello");
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .storage_class(storage_class.into())
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();
    let result = client.head_object(&bucket, &key).await.expect("head_object failed");

    assert_eq!(result.bucket, bucket);
    assert_eq!(result.object.key, key);
    assert_eq!(result.object.size as usize, body.len());
    assert_eq!(result.object.storage_class.as_deref(), Some(storage_class));
    assert!(result.object.restore_status.is_none());
}

#[tokio::test]
async fn test_head_object_404_key() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object_404_key");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let result = client.head_object(&bucket, &key).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(HeadObjectError::NotFound))
    ));
}

#[tokio::test]
async fn test_head_object_404_bucket() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_head_object_404_bucket");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let result = client.head_object("DOC-EXAMPLE-BUCKET", &key).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(HeadObjectError::NotFound))
    ));
}

#[tokio::test]
async fn test_head_object_no_perm() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_head_object_no_perm");
    let bucket = get_test_bucket_without_permissions();

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let result = client.head_object(&bucket, &key).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ClientError(S3RequestError::Forbidden(_)))
    ));
}

// This test relies on s3's expedited object restoration, it takes 1-5 minutes to complete
#[tokio::test]
#[cfg(not(feature = "s3express_tests"))]
async fn test_head_object_restored() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object_restored");

    let key = format!("{prefix}/hello");
    let body = b"hello world!";
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .storage_class("GLACIER".into())
        .body(ByteStream::from(Bytes::from_static(body)))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();
    let result = client.head_object(&bucket, &key).await.expect("head_object failed");

    assert_eq!(result.bucket, bucket);
    assert_eq!(result.object.key, key);
    assert!(
        result.object.restore_status.is_none(),
        "object should become restored only after restoration"
    );

    sdk_client
        .restore_object()
        .bucket(&bucket)
        .key(&key)
        .restore_request(
            RestoreRequest::builder()
                .set_days(Some(1))
                .set_glacier_job_parameters(Some(
                    GlacierJobParameters::builder().set_tier(Some(Tier::Expedited)).build(),
                ))
                .build(),
        )
        .send()
        .await
        .unwrap();

    let timeout = Duration::from_secs(300);
    let start = Instant::now();
    let mut timeouted = true;
    while start.elapsed() < timeout {
        let object = client
            .head_object(&bucket, &key)
            .await
            .expect("head_object failed")
            .object;
        if let Some(RestoreStatus::Restored { expiry: _ }) = object.restore_status {
            timeouted = false;
            break;
        }
        std::thread::sleep(Duration::from_secs(1));
    }
    assert!(!timeouted, "timeouted while waiting for object become restored");
}
