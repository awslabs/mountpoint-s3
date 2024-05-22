#![cfg(feature = "s3_tests")]

pub mod common;

use std::time::Duration;

use common::*;
use futures::{pin_mut, FutureExt, StreamExt};
use mountpoint_s3_client::checksums::crc32c_to_base64;
use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::types::{
    ChecksumAlgorithm, ObjectClientResult, PutObjectParams, PutObjectResult, PutObjectTrailingChecksums,
};
use mountpoint_s3_client::{ObjectClient, PutObjectRequest, S3CrtClient, S3RequestError};
use mountpoint_s3_crt::checksums::crc32c;
use rand::Rng;
use test_case::test_case;

// Simple test for PUT object. Puts a single, small object as a single part and checks that the
// contents are correct with a GET.
async fn test_put_object(
    client: &impl ObjectClient,
    bucket: &str,
    key: &str,
    request_params: PutObjectParams,
) -> PutObjectResult {
    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let mut request = client
        .put_object(bucket, key, &request_params)
        .await
        .expect("put_object should succeed");

    request.write(&contents).await.unwrap();
    let put_object_result = request.complete().await.unwrap();

    let result = client
        .get_object(bucket, key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &contents[..]).await;

    put_object_result
}

object_client_test!(test_put_object);

// Simple test for PUT object. Puts a single, empty object and checks that the (empty)
// contents are correct with a GET.
async fn test_put_object_empty(
    client: &impl ObjectClient,
    bucket: &str,
    key: &str,
    request_params: PutObjectParams,
) -> PutObjectResult {
    let request = client
        .put_object(bucket, key, &request_params)
        .await
        .expect("put_object should succeed");

    let put_object_result = request.complete().await.unwrap();

    let result = client
        .get_object(bucket, key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &[]).await;

    put_object_result
}

object_client_test!(test_put_object_empty);

// Test for multi-part PUT interface. Splits up a small object into a number of pieces, and streams
// the pieces to the object client. Checks contents are correct using a GET.
async fn test_put_object_multi_part(
    client: &impl ObjectClient,
    bucket: &str,
    key: &str,
    request_params: PutObjectParams,
) -> PutObjectResult {
    let mut rng = rand::thread_rng();

    let mut contents = [0u8; 32];
    rng.fill(&mut contents[..]);

    let mut request = client
        .put_object(bucket, key, &request_params)
        .await
        .expect("put_object failed");

    // Create a multi-part stream of contents by splitting up into four parts.
    for chunk in contents.chunks(contents.len() / 4) {
        request.write(chunk).await.unwrap();
    }
    let put_object_result = request.complete().await.unwrap();

    let result = client
        .get_object(bucket, key, None, None)
        .await
        .expect("get_object failed");
    check_get_result(result, None, &contents[..]).await;

    put_object_result
}

object_client_test!(test_put_object_multi_part);

// Test for multi-part PUT interface. Splits up a large object into a number of pieces, and streams
// the pieces to the object client. Checks contents are correct using a GET.
async fn test_put_object_large(
    client: &impl ObjectClient,
    bucket: &str,
    key: &str,
    request_params: PutObjectParams,
) -> PutObjectResult {
    let mut rng = rand::thread_rng();

    const OBJECT_SIZE: usize = 32 * 1024 * 1024;
    const CHUNK_SIZE: usize = 1024 * 1024 + 1;

    let mut contents = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut contents[..]);

    let mut request = client
        .put_object(bucket, key, &request_params)
        .await
        .expect("put_object failed");

    for chunk in contents.chunks(CHUNK_SIZE) {
        request.write(chunk).await.unwrap();
    }
    let put_object_result = request.complete().await.unwrap();

    let result = client
        .get_object(bucket, key, None, None)
        .await
        .expect("get_object failed");
    check_get_result(result, None, &contents[..]).await;

    put_object_result
}

object_client_test!(test_put_object_large);

// Test for dropped PUT object. Checks that the GET fails.
async fn test_put_object_dropped(client: &impl ObjectClient, bucket: &str, key: &str, request_params: PutObjectParams) {
    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let mut request = client
        .put_object(bucket, key, &request_params)
        .await
        .expect("put_object should succeed");

    request.write(&contents).await.unwrap();
    drop(request); // Drop without calling complete().

    let result = check_get_object(client, bucket, key).await;
    assert!(result.is_err(), "get_object should fail for dropped PUT");
}

object_client_test!(test_put_object_dropped);

// Test for abort PUT object.
#[test_case(30; "small")]
// #[test_case(30_000_000; "large")]  // The Abort and in-flight parts can race and cause some parts to be left behind, recreating the MPU
#[tokio::test]
async fn test_put_object_abort(size: usize) {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_object_abort");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let mut rng = rand::thread_rng();
    let mut contents = vec![0u8; size];
    rng.fill(&mut contents[..]);

    let mut request = client
        .put_object(&bucket, &key, &Default::default())
        .await
        .expect("put_object should succeed");

    request.write(&contents).await.unwrap();

    let sdk_client = get_test_sdk_client().await;
    let uploads_in_progress = get_mpu_count_for_key(&sdk_client, &bucket, &prefix, &key)
        .await
        .unwrap();
    assert_eq!(uploads_in_progress, 1);

    drop(request); // Drop without calling complete().

    // Allow for the AbortMultipartUpload to complete.
    tokio::time::sleep(tokio::time::Duration::from_secs(3)).await;

    let uploads_in_progress = get_mpu_count_for_key(&sdk_client, &bucket, &prefix, &key)
        .await
        .unwrap();
    assert_eq!(uploads_in_progress, 0);
}

#[tokio::test]
async fn test_put_object_write_cancelled() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_object_write_cancelled");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let mut request = client
        .put_object(&bucket, &key, &Default::default())
        .await
        .expect("put_object should succeed");

    // Write a multiple of `part_size` to ensure it will not complete immediately.
    let full_size = client.part_size().unwrap() * 10;
    let buffer = vec![0u8; full_size];

    // Complete one write to ensure the MPU was created and the buffer for the upload request is available.
    // Subsequent `write` calls will not have to wait for CreateMPU to complete and are guaranteed to start
    // writing on first poll.
    let first_write_size = 32;
    request
        .write(&buffer[0..first_write_size])
        .await
        .expect("write should succeed");
    assert_eq!(first_write_size, request.bytes_written() as usize);

    {
        let mut write = request.write(&buffer[first_write_size..]);

        // Poll the future only once to get into a state where the write has started but not completed yet.
        // Because we have previously awaited a write call for a small slice (see above), the first poll of
        // `S3PutObjectRequest::write` performs the first `poll_write` on the CRT meta request, which in turn
        // is guaranteed to copy part of the slice on the already available buffer and return.
        // However, since we are trying to write a slice much larger than `part_size`, `poll_write` will not
        // consume it on the first call (see loop in `write`). Subsequent `poll_write` calls will have to
        // acquire new buffers and will return `Pending`, which will be propagated here.
        let mut cx = std::task::Context::from_waker(futures::task::noop_waker_ref());
        let poll_result = write.poll_unpin(&mut cx);
        assert!(matches!(poll_result, std::task::Poll::Pending));

        // Cancel the future.
        drop(write);
    }

    // Confirm the test assumptions.
    assert!(
        (request.bytes_written() as usize) > first_write_size,
        "second write should have started and written some data"
    );
    assert!(
        (request.bytes_written() as usize) < full_size,
        "second write should have been cancelled before writing the whole slice"
    );

    let err = request
        .write(&[1, 2, 3, 4])
        .await
        .expect_err("further writes should fail");
    assert!(matches!(
        err,
        ObjectClientError::ClientError(S3RequestError::RequestCanceled)
    ));
}

#[tokio::test]
async fn test_put_object_initiate_failure() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_object_initiate_failure");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let params = PutObjectParams::new().storage_class("INVALID_STORAGE_CLASS".into());

    let mut request = client
        .put_object(&bucket, &key, &params)
        .await
        .expect("put_object should succeed");

    // The MPU initiation should fail, so we should get an error when we try to write.
    let _err = request.write(&[1, 2, 3, 4]).await.expect_err("write should fail");

    // Try again just to make sure the failure is fused correctly and doesn't block forever if
    // someone (incorrectly) tries to write again after a failure.
    let _err = request
        .write(&[1, 2, 3, 4])
        .await
        .expect_err("second write should fail");

    // Abort the request (which should already have been canceled)
    drop(request);

    // Wait a bit to let any requests settle.
    tokio::time::sleep(tokio::time::Duration::from_secs(3)).await;

    let sdk_client = get_test_sdk_client().await;
    let uploads_in_progress = get_mpu_count_for_key(&sdk_client, &bucket, &prefix, &key)
        .await
        .unwrap();
    assert_eq!(uploads_in_progress, 0);
}

#[test_case(PutObjectTrailingChecksums::Enabled; "enabled")]
#[test_case(PutObjectTrailingChecksums::ReviewOnly; "review only")]
#[test_case(PutObjectTrailingChecksums::Disabled; "disabled")]
#[tokio::test]
async fn test_put_checksums(trailing_checksums: PutObjectTrailingChecksums) {
    const PART_SIZE: usize = 5 * 1024 * 1024;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_checksums");
    let client_config = S3ClientConfig::new()
        .part_size(PART_SIZE)
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(client_config).expect("could not create test client");
    let key = format!("{prefix}hello");

    let mut rng = rand::thread_rng();
    let mut contents = vec![0u8; PART_SIZE * 2];
    rng.fill(&mut contents[..]);

    let params = PutObjectParams::new().trailing_checksums(trailing_checksums);
    let mut request = client
        .put_object(&bucket, &key, &params)
        .await
        .expect("put_object should succeed");

    request.write(&contents).await.unwrap();
    request
        .review_and_complete(move |review| {
            let parts = review.parts;
            if trailing_checksums == PutObjectTrailingChecksums::Disabled {
                assert!(review.checksum_algorithm.is_none());
                assert!(parts.iter().all(|p| p.checksum.is_none()));
            } else {
                assert_eq!(review.checksum_algorithm, Some(ChecksumAlgorithm::Crc32c));
            }
            true
        })
        .await
        .unwrap();

    let sdk_client = get_test_sdk_client().await;
    let attributes = sdk_client
        .get_object_attributes()
        .bucket(&bucket)
        .key(key)
        .object_attributes(aws_sdk_s3::types::ObjectAttributes::ObjectParts)
        .send()
        .await
        .unwrap();
    let parts = attributes.object_parts().unwrap().parts();

    if trailing_checksums == PutObjectTrailingChecksums::Enabled {
        let checksums: Vec<_> = parts.iter().map(|p| p.checksum_crc32_c().unwrap()).collect();
        let expected_checksums: Vec<_> = contents.chunks(PART_SIZE).map(crc32c::checksum).collect();

        assert_eq!(checksums.len(), expected_checksums.len());
        for (checksum, expected_checksum) in checksums.into_iter().zip(expected_checksums.into_iter()) {
            let encoded = crc32c_to_base64(&expected_checksum);
            assert_eq!(checksum, encoded);
        }
    } else {
        // For S3 Standard, the list of parts is only present if checksums were used, but for S3
        // Express One Zone the list of parts is always present. The important thing is just that
        // the *checksums* aren't present, because we disabled those.
        for part in parts {
            assert!(
                part.checksum_crc32_c().is_none(),
                "crc32c should not be present when upload checksums are disabled"
            );
        }
    }
}

#[test_case(true; "pass review")]
#[test_case(false; "fail review")]
#[tokio::test]
async fn test_put_review(pass_review: bool) {
    const PART_SIZE: usize = 5 * 1024 * 1024;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_review");
    let client_config = S3ClientConfig::new()
        .part_size(PART_SIZE)
        .endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(client_config).expect("could not create test client");
    let key = format!("{prefix}hello");

    let mut rng = rand::thread_rng();
    let mut contents = vec![0u8; PART_SIZE * 2];
    rng.fill(&mut contents[..]);

    let params = PutObjectParams::new().trailing_checksums(PutObjectTrailingChecksums::Enabled);
    let mut request = client
        .put_object(&bucket, &key, &params)
        .await
        .expect("put_object should succeed");

    request.write(&contents).await.unwrap();

    let contents_size = contents.len();
    let put_result = request
        .review_and_complete(move |review| {
            let total_size: u64 = review.parts.iter().map(|p| p.size).sum();
            assert_eq!(total_size, contents_size as u64);
            pass_review
        })
        .await;

    let get_result = check_get_object(&client, &bucket, &key).await;
    if pass_review {
        _ = put_result.expect("putobject should succeed when review passes");
        get_result.expect("getobject should succeed after successful put");
    } else {
        let err = put_result.expect_err("putobject should abort when review fails");
        assert!(matches!(
            err,
            ObjectClientError::ClientError(S3RequestError::CrtError(_))
        ));

        let err = get_result.expect_err("getobject should fail for aborted put");
        assert!(matches!(
            err,
            ObjectClientError::ServiceError(GetObjectError::NoSuchKey)
        ));

        let sdk_client = get_test_sdk_client().await;
        let uploads_in_progress = get_mpu_count_for_key(&sdk_client, &bucket, &prefix, &key)
            .await
            .unwrap();
        assert_eq!(uploads_in_progress, 0);
    }
}

async fn check_get_object<Client: ObjectClient>(
    client: &Client,
    bucket: &str,
    key: &str,
) -> ObjectClientResult<(), GetObjectError, Client::ClientError> {
    let result = client.get_object(bucket, key, None, None).await?;
    pin_mut!(result);
    result.next().await.unwrap()?;
    Ok(())
}

#[test_case("INTELLIGENT_TIERING")]
#[test_case("GLACIER")]
#[tokio::test]
// S3 Express One Zone is a distinct storage class and can't be overridden
#[cfg(not(feature = "s3express_tests"))]
async fn test_put_object_storage_class(storage_class: &str) {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_object_abort");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let mut rng = rand::thread_rng();
    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let params = PutObjectParams::new().storage_class(storage_class.to_owned());
    let mut request = client
        .put_object(&bucket, &key, &params)
        .await
        .expect("put_object should succeed");

    request.write(&contents).await.unwrap();
    request.complete().await.unwrap();

    let sdk_client = get_test_sdk_client().await;
    let attributes = sdk_client
        .get_object_attributes()
        .bucket(bucket)
        .key(key)
        .object_attributes(aws_sdk_s3::types::ObjectAttributes::StorageClass)
        .send()
        .await
        .unwrap();

    assert_eq!(storage_class, attributes.storage_class.unwrap().as_str());
}

#[cfg(not(feature = "s3express_tests"))]
async fn check_sse(
    bucket: &String,
    key: &String,
    expected_sse: Option<&str>,
    expected_key: &Option<String>,
    put_object_result: PutObjectResult,
) {
    let sdk_client = get_test_sdk_client().await;
    let head_object_resp = sdk_client
        .head_object()
        .bucket(bucket)
        .key(key)
        .send()
        .await
        .expect("head object should succeed");
    let (expected_sse, expected_sdk_sse) = match expected_sse {
        None => (Some("AES256"), aws_sdk_s3::types::ServerSideEncryption::Aes256),
        Some("AES256") => (Some("AES256"), aws_sdk_s3::types::ServerSideEncryption::Aes256),
        Some("aws:kms") => (Some("aws:kms"), aws_sdk_s3::types::ServerSideEncryption::AwsKms),
        Some("aws:kms:dsse") => (
            Some("aws:kms:dsse"),
            aws_sdk_s3::types::ServerSideEncryption::AwsKmsDsse,
        ),
        _ => panic!("unexpected sse type was used in a test"),
    };
    let actual_sse = head_object_resp
        .server_side_encryption
        .expect("SSE field should always have a value for this test");
    assert_eq!(
        actual_sse, expected_sdk_sse,
        "unexpected sse type in HEAD_OBJECT response"
    );
    assert_eq!(
        put_object_result.sse_type.as_deref(),
        expected_sse,
        "unexpected sse type in PutObjectResult"
    );
    if !matches!(expected_sdk_sse, aws_sdk_s3::types::ServerSideEncryption::Aes256) {
        assert!(
            head_object_resp.ssekms_key_id.is_some(),
            "must have a key for non-default encryption methods",
        );
    }
    if expected_key.is_some() {
        // do not check the value of AWS managed key
        assert_eq!(
            &head_object_resp.ssekms_key_id, expected_key,
            "unexpected sse key in HEAD_OBJECT response"
        );
        assert_eq!(
            &put_object_result.sse_kms_key_id, expected_key,
            "unexpected sse key in PutObjectResult"
        );
    }
}

// Test that SSE settings, which were used to create a new object, are reflected in:
// 1. HEAD_OBJECT response queried via AWS SDK;
// 2. returned `PutObjectResult`.
#[test_case(Some("aws:kms"), Some(get_test_kms_key_id()))]
#[test_case(Some("aws:kms"), None)]
#[test_case(Some("aws:kms:dsse"), Some(get_test_kms_key_id()))]
#[test_case(Some("aws:kms:dsse"), None)]
#[test_case(None, None)]
#[test_case(Some("AES256"), None)]
#[tokio::test]
#[cfg(not(feature = "s3express_tests"))]
async fn test_put_object_sse(sse_type: Option<&str>, kms_key_id: Option<String>) {
    let bucket = get_test_bucket();
    let client_config = S3ClientConfig::new().endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(client_config).expect("could not create test client");
    let request_params = PutObjectParams::new()
        .server_side_encryption(sse_type.map(|value| value.to_owned()))
        .ssekms_key_id(kms_key_id.to_owned());

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    let put_object_result = test_put_object(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, sse_type, &kms_key_id, put_object_result).await;

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    let put_object_result = test_put_object_empty(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, sse_type, &kms_key_id, put_object_result).await;

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    let put_object_result = test_put_object_multi_part(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, sse_type, &kms_key_id, put_object_result).await;

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    let put_object_result = test_put_object_large(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, sse_type, &kms_key_id, put_object_result).await;
}

#[test_case(10.0, 200)]
#[tokio::test]
async fn test_concurrent_put_objects(throughput_target_gbps: f64, max_concurrent_puts: usize) {
    const TIMEOUT: Duration = Duration::from_secs(60);

    let bucket = get_test_bucket();
    let prefix = get_unique_test_prefix("test_concurrent_put_objects");
    let client_config = S3ClientConfig::new()
        .endpoint_config(EndpointConfig::new(&get_test_region()))
        .throughput_target_gbps(throughput_target_gbps);
    let client = S3CrtClient::new(client_config).expect("could not create test client");
    let not_existing_key = format!("{}not-there", prefix);
    let request_params = PutObjectParams::new();

    // Initiate requests.
    let mut req_vec = Vec::new();
    for num_writes in 0..max_concurrent_puts {
        let key = format!("{}obj-{}", prefix, num_writes);
        let request = client
            .put_object(&bucket, &key, &request_params)
            .await
            .expect("put_object should succeed");
        req_vec.push(request);
    }

    for request in &mut req_vec {
        // Write a few bytes for each put_object.
        tokio::time::timeout(TIMEOUT, async {
            request.write(b"test").await.expect("write should succeed");
        })
        .await
        .expect("timed out while trying to write");

        // Also try to issue an unrelated request (head_object).
        tokio::time::timeout(TIMEOUT, async {
            client
                .head_object(&bucket, &not_existing_key)
                .await
                .expect_err("head object should fail")
        })
        .await
        .expect("timed out during head_object");
    }

    // Cancel all put_object requests.
    drop(req_vec);
}
