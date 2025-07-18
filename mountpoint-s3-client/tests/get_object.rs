#![cfg(feature = "s3_tests")]

pub mod common;

use std::collections::HashMap;
use std::ops::Range;
use std::option::Option::None;
use std::str::FromStr;

use aws_sdk_s3::primitives::ByteStream;
use aws_sdk_s3::types::ChecksumAlgorithm;
use bytes::Bytes;
use common::*;
use futures::pin_mut;
use futures::stream::StreamExt;
use mountpoint_s3_client::config::S3ClientConfig;
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::error_metadata::{ClientErrorMetadata, ProvideErrorMetadata};
use mountpoint_s3_client::types::{
    Checksum, ChecksumMode, ClientBackpressureHandle, ETag, GetBodyPart, GetObjectParams, GetObjectResponse,
};
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};

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
        .get_object(&bucket, &key, &GetObjectParams::new().range(range.clone()))
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
    let client: S3CrtClient = get_test_backpressure_client(initial_window_size, None);

    let request = client
        .get_object(&bucket, &key, &GetObjectParams::new().range(range.clone()))
        .await
        .expect("get_object should succeed");
    let expected = match range {
        Some(Range { start, end }) => &body[start as usize..end as usize],
        None => &body,
    };
    check_backpressure_get_result(initial_window_size, request, range, expected).await;
}

// Verify that an error is returned when we don't increment read window size
#[tokio::test]
async fn verify_backpressure_get_object() {
    let initial_window_size = 256;
    let client: S3CrtClient = get_test_backpressure_client(initial_window_size, None);
    let part_size = client.read_part_size().unwrap();

    let size = part_size * 2;
    let range = 0..(part_size + 1) as u64;
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("verify_backpressure_get_object");

    let key = format!("{prefix}/test");
    let expected_body = vec![0x42; size];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(expected_body.clone()))
        .send()
        .await
        .unwrap();

    let mut get_request = client
        .get_object(&bucket, &key, &GetObjectParams::new().range(Some(range.clone())))
        .await
        .expect("should not fail");

    // Verify that we can receive some data since the window size is more than 0
    let first_part = get_request.next().await.expect("result should not be empty");
    let GetBodyPart { offset, data: body } = first_part.unwrap();
    assert_eq!(offset, 0, "wrong body part offset");

    // The CRT always return at least a part even if the window is smaller than that
    let expected_range = range.start as usize..part_size;
    assert_eq!(&body[..], &expected_body[expected_range]);

    // This await should return an error because current window is not enough to get the next part
    let next = get_request.next().await.expect("result should not be empty");
    assert!(matches!(
        next,
        Err(ObjectClientError::ClientError(S3RequestError::EmptyReadWindow))
    ));
}

#[tokio::test]
async fn test_mutated_during_get_object_backpressure() {
    let part_size = 8 * 1024 * 1024;
    let initial_window_size = part_size;
    let client: S3CrtClient = get_test_backpressure_client(initial_window_size, Some(part_size));

    let size = part_size * 2;
    let range = 0..(part_size + 1) as u64;
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object");

    let key = format!("{prefix}/test");
    let expected_body = vec![0x42; size];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(expected_body.clone()))
        .send()
        .await
        .unwrap();

    let mut get_request = client
        .get_object(&bucket, &key, &GetObjectParams::new().range(Some(range.clone())))
        .await
        .expect("should not fail");

    // Verify that we can receive the first part successfully
    let first_part = get_request.next().await.expect("result should not be empty");
    let GetBodyPart { offset, data: body } = first_part.unwrap();
    assert_eq!(offset, 0, "wrong body part offset");

    let expected_range = range.start as usize..part_size;
    assert_eq!(&body[..], &expected_body[expected_range]);

    // Overwrite the object
    let new_content = vec![0xaa; size];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(new_content))
        .send()
        .await
        .unwrap();

    get_request
        .backpressure_handle()
        .unwrap()
        .increment_read_window(part_size);

    // Verify that the next part is error
    let next = get_request.next().await.expect("result should not be empty");
    assert!(matches!(
        next,
        Err(ObjectClientError::ServiceError(GetObjectError::PreconditionFailed(_)))
    ));
}

#[tokio::test]
async fn test_get_object_404_key() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_404_key");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let err = client
        .get_object(&bucket, &key, &GetObjectParams::new())
        .await
        .expect_err("get_object should fail");

    assert!(matches!(
        err,
        ObjectClientError::ServiceError(GetObjectError::NoSuchKey(_))
    ));
    assert_eq!(
        err.meta(),
        ClientErrorMetadata {
            http_code: Some(404),
            error_code: Some("NoSuchKey".to_string()),
            error_message: Some("The specified key does not exist.".to_string())
        }
    );

    // TODO: what happens if the object is deleted mid-GET? the CRT does lots of ranged GETs, so they
    // will start failing. need a way to test that.
}

#[tokio::test]
async fn test_get_object_404_bucket() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_get_object_404_bucket");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let err = client
        .get_object("amzn-s3-demo-bucket", &key, &GetObjectParams::new())
        .await
        .expect_err("get_object should fail");

    assert!(matches!(
        err,
        ObjectClientError::ServiceError(GetObjectError::NoSuchBucket(_))
    ));
    assert_eq!(
        err.meta(),
        ClientErrorMetadata {
            http_code: Some(404),
            error_code: Some("NoSuchBucket".to_string()),
            error_message: Some("The specified bucket does not exist".to_string())
        }
    );
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
        .get_object(&bucket, &key, &GetObjectParams::new().if_match(etag))
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

    let err = client
        .get_object(&bucket, &key, &GetObjectParams::new().if_match(etag))
        .await
        .expect_err("get_object should fail");

    assert!(matches!(
        err,
        ObjectClientError::ServiceError(GetObjectError::PreconditionFailed(_))
    ));
    assert_eq!(
        err.meta(),
        ClientErrorMetadata {
            http_code: Some(412),
            error_code: Some("PreconditionFailed".to_string()),
            error_message: Some("At least one of the pre-conditions you specified did not hold".to_string())
        }
    );
}

#[tokio::test]
async fn test_get_object_403() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_get_object_403");
    let bucket = get_test_bucket_without_permissions();

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let err = client
        .get_object(&bucket, &key, &GetObjectParams::new())
        .await
        .expect_err("get_object should fail");

    assert!(matches!(
        err,
        ObjectClientError::ClientError(S3RequestError::Forbidden(_, _))
    ));
    assert_eq!(err.meta().http_code, Some(403));
    assert_eq!(err.meta().error_code, Some("AccessDenied".to_string()));
    assert!(err.meta().error_message.is_some());
}

// Not sure how to trigger IncorrectRegion with directory buckets: failure occurs on dns resolution (CrtError / AWS_IO_DNS_INVALID_NAME).
// So only run with S3 Standard.
#[cfg(not(feature = "s3express_tests"))]
#[tokio::test]
async fn test_get_object_wrong_region() {
    use mountpoint_s3_client::config::EndpointConfig;

    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_wrong_region");

    let key = format!("{prefix}/nonexistent_key");

    let endpoint_config = EndpointConfig::new(&get_secondary_test_region());
    let client = get_test_client_with_config(S3ClientConfig::new().endpoint_config(endpoint_config));

    let err = client
        .get_object(&bucket, &key, &GetObjectParams::new())
        .await
        .expect_err("get_object should fail");

    assert!(matches!(
        err,
        ObjectClientError::ClientError(S3RequestError::IncorrectRegion(_, _))
    ));
    assert_eq!(err.meta().http_code, Some(301));
    assert_eq!(err.meta().error_code, Some("PermanentRedirect".to_string()));
    assert!(err.meta().error_message.is_some());
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
        .get_object(&bucket, &key, &GetObjectParams::new())
        .await
        .expect("get_object should succeed");

    if read {
        let mut bytes = 0;
        while let Some(next) = request.next().await {
            let part = next.expect("part download should succeed");
            bytes += part.data.len();
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

#[test_case(1, HashMap::from([("foo".to_string(), "bar".to_string())]); "1-byte object with metadata")]
#[test_case(10, HashMap::from([("foo".to_string(), "bar".to_string())]); "small object with metadata")]
#[test_case(30000000, HashMap::from([("foo".to_string(), "bar".to_string())]); "large object with metadata")]
#[tokio::test]
async fn test_get_object_user_metadata(size: usize, metadata: HashMap<String, String>) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_user_metadata");

    let key = format!("{prefix}/test");
    let body = vec![0x42; size];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .set_metadata(Some(metadata.clone()))
        .body(ByteStream::from(body.clone()))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    let result = client
        .get_object(&bucket, &key, &GetObjectParams::new())
        .await
        .expect("get_object should succeed");
    let actual_metadata = result.get_object_metadata();

    pin_mut!(result);
    let expected = &body;
    check_get_result(result, None, expected).await;
    assert_eq!(actual_metadata, metadata);
}

#[test_case(50, HashMap::from([("foo".to_string(), "bar".to_string())]); "50-byte object with metadata")]
#[tokio::test]
async fn test_get_object_user_metadata_with_zero_backpressure(size: usize, metadata: HashMap<String, String>) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_user_metadata_with_zero_backpressure");

    let key = format!("{prefix}/test");
    let body = vec![0x42; size];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .set_metadata(Some(metadata.clone()))
        .body(ByteStream::from(body.clone()))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_backpressure_client(0, None);

    let result = client
        .get_object(&bucket, &key, &GetObjectParams::new().range(Some(1..5)))
        .await
        .expect("get_object should succeed");
    let actual_metadata = result.get_object_metadata();
    assert_eq!(actual_metadata, metadata);
}

#[test_case(1, HashMap::from([("foo".to_string(), "bar".to_string())]); "1-byte object with metadata")]
#[test_case(10, HashMap::from([("foo".to_string(), "bar".to_string())]); "small object with metadata")]
#[test_case(30000000, HashMap::from([("foo".to_string(), "bar".to_string())]); "large object with metadata")]
#[tokio::test]
async fn test_get_object_user_metadata_after_stream(size: usize, metadata: HashMap<String, String>) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_user_metadata");

    let key = format!("{prefix}/test");
    let body = vec![0x42; size];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .set_metadata(Some(metadata.clone()))
        .body(ByteStream::from(body.clone()))
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    let result = client
        .get_object(&bucket, &key, &GetObjectParams::new())
        .await
        .expect("get_object should succeed");

    pin_mut!(result);
    while let Some(r) = result.next().await {
        let _ = r.expect("get_object body part failed");
    }
    let actual_metadata = result.as_ref().get_object_metadata();
    assert_eq!(actual_metadata, metadata);
}

#[test_case(ChecksumAlgorithm::Crc64Nvme)]
#[test_case(ChecksumAlgorithm::Crc32)]
#[test_case(ChecksumAlgorithm::Crc32C)]
#[test_case(ChecksumAlgorithm::Sha1)]
#[test_case(ChecksumAlgorithm::Sha256)]
#[tokio::test]
async fn test_get_object_checksum(checksum_algorithm: ChecksumAlgorithm) {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_checksum");

    let key = format!("{prefix}/test");
    let body = vec![0x42; 42];
    let put_object_output = sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(body.clone()))
        .checksum_algorithm(checksum_algorithm.clone())
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    let result = client
        .get_object(
            &bucket,
            &key,
            &GetObjectParams::new().checksum_mode(Some(ChecksumMode::Enabled)),
        )
        .await
        .expect("get_object should succeed");

    let checksum: Checksum = result.get_object_checksum().expect("should return checksum");

    match checksum_algorithm {
        ChecksumAlgorithm::Crc64Nvme => assert_eq!(
            checksum.checksum_crc64nvme,
            put_object_output.checksum_crc64_nvme().map(|s| s.to_string())
        ),
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
}

#[tokio::test]
async fn test_get_object_checksum_checksums_disabled() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_get_object_checksum");

    let key = format!("{prefix}/test");
    let body = vec![0x42; 42];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(body.clone()))
        .checksum_algorithm(ChecksumAlgorithm::Crc32)
        .send()
        .await
        .unwrap();

    let client: S3CrtClient = get_test_client();

    let result = client
        .get_object(&bucket, &key, &GetObjectParams::new())
        .await
        .expect("get_object should succeed");

    result
        .get_object_checksum()
        .expect_err("should not return a checksum object as not requested");
}

#[ignore = "Stress-test to run many concurrent GetObjects. To be run manually."]
#[tokio::test(flavor = "multi_thread", worker_threads = 100)]
async fn stress_test_get_object() {
    let size: usize = 10 * 1024;

    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("stress_test_get_object");

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

    let client = get_test_client_with_config(
        S3ClientConfig::new()
            .endpoint_config(get_test_endpoint_config())
            .event_loop_threads(100),
    );
    assert!(client.read_part_size().unwrap() > size);

    let mut tasks = tokio::task::JoinSet::new();
    for t in 0..10000 {
        let client = client.clone();
        let bucket = bucket.clone();
        let key = key.clone();
        tasks.spawn(async move {
            let result = client
                .get_object(&bucket, &key, &GetObjectParams::new())
                .await
                .expect("get_object should succeed");

            pin_mut!(result);
            let mut count = 0;
            while let Some(r) = result.next().await {
                let part = r.expect("get_object body part failed");
                assert_eq!(part.offset, 0);
                assert_eq!(part.data.len(), size);
                count += 1;
            }
            (t + 1, count)
        });
    }

    let mut count = 0;
    while let Some(task) = tasks.join_next().await {
        let (i, part_count) = task.unwrap();
        assert_eq!(part_count, 1, "1 part should have been returned for task {i}");
        tracing::info!("Completed {}", i);
        count += 1;
    }
    tracing::info!(count, "Done");
}
