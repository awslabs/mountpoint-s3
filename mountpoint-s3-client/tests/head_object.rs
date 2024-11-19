#![cfg(feature = "s3_tests")]

pub mod common;

#[cfg(not(feature = "s3express_tests"))]
use std::time::{Duration, Instant};

use aws_sdk_s3::primitives::ByteStream;
use aws_sdk_s3::types::ChecksumAlgorithm;
#[cfg(not(feature = "s3express_tests"))]
use aws_sdk_s3::types::{GlacierJobParameters, RestoreRequest, Tier};
use bytes::Bytes;
use common::*;
use mountpoint_s3_client::error::{HeadObjectError, ObjectClientError};
#[cfg(not(feature = "s3express_tests"))]
use mountpoint_s3_client::types::RestoreStatus;
use mountpoint_s3_client::types::{ChecksumMode, HeadObjectParams};
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};
use test_case::test_case;

#[tokio::test]
async fn test_head_object() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object");

    let key = format!("{prefix}hello");
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
        .head_object(&bucket, &key, &HeadObjectParams::new())
        .await
        .expect("head_object failed");

    assert_eq!(
        result.size as usize,
        body.len(),
        "HeadObject reported size should match uploaded body length",
    );
}

#[test_case(ChecksumAlgorithm::Crc32)]
#[test_case(ChecksumAlgorithm::Crc32C)]
#[test_case(ChecksumAlgorithm::Sha1)]
#[test_case(ChecksumAlgorithm::Sha256)]
#[tokio::test]
async fn test_head_object_checksum(checksum_algorithm: ChecksumAlgorithm) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object");

    let key = format!("{prefix}hello");
    let body = b"hello world!";
    let put_object_output = sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(Bytes::from_static(body)))
        .checksum_algorithm(checksum_algorithm.clone())
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    for retrieve_checksum in [true, false] {
        let mut params = HeadObjectParams::new();
        if retrieve_checksum {
            params = params.checksum_mode(Some(ChecksumMode::Enabled));
        }
        let result = client
            .head_object(&bucket, &key, &params)
            .await
            .expect("head_object failed");

        let checksum = result.checksum;
        if retrieve_checksum {
            match &checksum_algorithm {
                ChecksumAlgorithm::Crc32 => assert_eq!(
                    checksum.checksum_crc32,
                    put_object_output.checksum_crc32().map(|s| s.to_string())
                ),
                ChecksumAlgorithm::Crc32C => assert_eq!(
                    checksum.checksum_crc32c,
                    put_object_output.checksum_crc32_c().map(|s| s.to_string())
                ),
                ChecksumAlgorithm::Sha1 => assert_eq!(
                    checksum.checksum_sha1,
                    put_object_output.checksum_sha1().map(|s| s.to_string())
                ),
                ChecksumAlgorithm::Sha256 => assert_eq!(
                    checksum.checksum_sha256,
                    put_object_output.checksum_sha256().map(|s| s.to_string())
                ),
                _ => unimplemented!("This algorithm is not supported"),
            }
        } else {
            assert!(checksum.checksum_crc32.is_none());
            assert!(checksum.checksum_crc32c.is_none());
            assert!(checksum.checksum_sha1.is_none());
            assert!(checksum.checksum_sha256.is_none());
        }
    }
}

#[test_case("INTELLIGENT_TIERING")]
#[test_case("GLACIER")]
#[tokio::test]
// S3 Express One Zone is a distinct storage class and can't be overridden
#[cfg(not(feature = "s3express_tests"))]
async fn test_head_object_storage_class(storage_class: &str) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object");

    let key = format!("{prefix}hello");
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
    let result = client
        .head_object(&bucket, &key, &HeadObjectParams::new())
        .await
        .expect("head_object failed");

    assert_eq!(result.size as usize, body.len());
    assert_eq!(result.storage_class.as_deref(), Some(storage_class));
    assert!(result.restore_status.is_none());
}

#[tokio::test]
async fn test_head_object_404_key() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_head_object_404_key");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let result = client.head_object(&bucket, &key, &HeadObjectParams::new()).await;
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

    let result = client
        .head_object("amzn-s3-demo-bucket", &key, &HeadObjectParams::new())
        .await;
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

    let result = client.head_object(&bucket, &key, &HeadObjectParams::new()).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ClientError(S3RequestError::Forbidden(_, _)))
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
    let result = client
        .head_object(&bucket, &key, &HeadObjectParams::new())
        .await
        .expect("head_object failed");

    assert!(
        result.restore_status.is_none(),
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
                    GlacierJobParameters::builder()
                        .set_tier(Some(Tier::Expedited))
                        .build()
                        .unwrap(),
                ))
                .build(),
        )
        .send()
        .await
        .unwrap();

    let timeout = Duration::from_secs(300);
    let start = Instant::now();
    let mut timeout_exceeded = true;
    while start.elapsed() < timeout {
        let response = client
            .head_object(&bucket, &key, &HeadObjectParams::new())
            .await
            .expect("head_object failed");
        if let Some(RestoreStatus::Restored { expiry: _ }) = response.restore_status {
            timeout_exceeded = false;
            break;
        }
        std::thread::sleep(Duration::from_secs(1));
    }
    assert!(!timeout_exceeded, "timeouted while waiting for object become restored");
}

async fn test_head_object_sse(
    client: S3CrtClient,
    bucket: &str,
    prefix: &str,
    sse_type: Option<&str>,
    kms_key_id: Option<String>,
) {
    let key = format!("{prefix}hello");
    let expected_sdk_sse = sse_type.map(|sse| sse.parse().expect("unexpected sse type was used in a test"));
    let sdk_client = get_test_sdk_client().await;
    let put_output = sdk_client
        .put_object()
        .bucket(bucket)
        .key(&key)
        .body(ByteStream::from_static(b"test"))
        .set_server_side_encryption(expected_sdk_sse)
        .set_ssekms_key_id(kms_key_id)
        .send()
        .await
        .expect("put object should succeed");

    let result = client
        .head_object(bucket, &key, &HeadObjectParams::new())
        .await
        .expect("head_object failed");

    assert_eq!(
        result.sse_type.as_deref(),
        put_output.server_side_encryption().map(|sse| sse.as_str()),
        "sse_type should match"
    );
    assert_eq!(
        result.sse_kms_key_id, put_output.ssekms_key_id,
        "kms_key_id should match"
    );
}

#[test_case(Some("aws:kms"), Some(get_test_kms_key_id()))]
#[test_case(Some("aws:kms"), None)]
#[test_case(Some("aws:kms:dsse"), Some(get_test_kms_key_id()))]
#[test_case(Some("aws:kms:dsse"), None)]
#[test_case(None, None)]
#[test_case(Some("AES256"), None)]
#[tokio::test]
#[cfg(not(feature = "s3express_tests"))]
async fn test_head_object_sse_s3(sse_type: Option<&str>, kms_key_id: Option<String>) {
    let prefix = get_unique_test_prefix("test_head_object_sse_s3");
    let bucket = get_test_bucket();
    let client: S3CrtClient = get_test_client();

    test_head_object_sse(client, &bucket, &prefix, sse_type, kms_key_id).await;
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_head_object_sse_s3express() {
    // Directory buckets only allow to set sse on the whole bucket. See
    // [Server-side encryption](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-express-data-protection.html#s3-express-ecnryption) for directory buckets.
    // We will only test the default here.

    let prefix = get_unique_test_prefix("test_head_object_sse_s3express");
    let bucket = get_test_bucket();
    let client: S3CrtClient = get_test_client();

    test_head_object_sse(client, &bucket, &prefix, None, None).await;
}
