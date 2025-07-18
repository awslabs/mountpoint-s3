#![cfg(feature = "s3_tests")]

pub mod common;

use std::collections::HashMap;

use aws_sdk_s3::primitives::ByteStream;
use common::*;
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::checksums::{crc32, crc32c, crc64nvme, sha1, sha256};
use mountpoint_s3_client::config::S3ClientConfig;
use mountpoint_s3_client::error::{ObjectClientError, PutObjectError};
use mountpoint_s3_client::types::{
    Checksum, ChecksumAlgorithm, GetObjectParams, PutObjectResult, PutObjectSingleParams, UploadChecksum,
};
use rand::Rng;
use test_case::test_case;

// Simple test for PUT object. Puts a single, small object as a single part and checks that the
// contents are correct with a GET.
async fn test_put_object_single(
    client: &(impl ObjectClient + Sync),
    bucket: &str,
    key: &str,
    request_params: PutObjectSingleParams,
) -> PutObjectResult {
    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let put_object_result = client
        .put_object_single(bucket, key, &request_params, &contents)
        .await
        .expect("put_object should succeed");

    let result = client
        .get_object(
            bucket,
            key,
            &GetObjectParams::new().if_match(Some(put_object_result.etag.clone())),
        )
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &contents[..]).await;

    put_object_result
}

object_client_test!(test_put_object_single);

// Simple test for PUT object. Puts a single, empty object and checks that the (empty)
// contents are correct with a GET.
async fn test_put_object_single_empty(
    client: &(impl ObjectClient + Sync),
    bucket: &str,
    key: &str,
    request_params: PutObjectSingleParams,
) -> PutObjectResult {
    let put_object_result = client
        .put_object_single(bucket, key, &request_params, [])
        .await
        .expect("put_object should succeed");

    let result = client
        .get_object(
            bucket,
            key,
            &GetObjectParams::new().if_match(Some(put_object_result.etag.clone())),
        )
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &[]).await;

    put_object_result
}

object_client_test!(test_put_object_single_empty);

#[test_case(None; "no checksum")]
#[test_case(Some(ChecksumAlgorithm::Crc64nvme))]
#[test_case(Some(ChecksumAlgorithm::Crc32c))]
#[test_case(Some(ChecksumAlgorithm::Crc32))]
#[test_case(Some(ChecksumAlgorithm::Sha1))]
#[test_case(Some(ChecksumAlgorithm::Sha256))]
#[tokio::test]
async fn test_put_checksums(checksum_algorithm: Option<ChecksumAlgorithm>) {
    const PART_SIZE: usize = 5 * 1024 * 1024;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_checksums");
    let client_config = S3ClientConfig::new()
        .part_size(PART_SIZE)
        .endpoint_config(get_test_endpoint_config());
    let client = get_test_client_with_config(client_config);
    let key = format!("{prefix}hello");

    let mut rng = rand::thread_rng();
    let mut contents = vec![0u8; PART_SIZE * 2];
    rng.fill(&mut contents[..]);

    let upload_checksum = match checksum_algorithm {
        Some(ChecksumAlgorithm::Crc64nvme) => Some(UploadChecksum::Crc64nvme(crc64nvme::checksum(&contents))),
        Some(ChecksumAlgorithm::Crc32c) => Some(UploadChecksum::Crc32c(crc32c::checksum(&contents))),
        Some(ChecksumAlgorithm::Crc32) => Some(UploadChecksum::Crc32(crc32::checksum(&contents))),
        Some(ChecksumAlgorithm::Sha1) => Some(UploadChecksum::Sha1(
            sha1::checksum(&contents).expect("sha1 checksum should succeed"),
        )),
        Some(ChecksumAlgorithm::Sha256) => Some(UploadChecksum::Sha256(
            sha256::checksum(&contents).expect("sha256 checksum should succeed"),
        )),
        Some(_) => unimplemented!("checksum algorithm not supported"),
        None => None,
    };

    let params = PutObjectSingleParams::new().checksum(upload_checksum.clone());
    client
        .put_object_single(&bucket, &key, &params, &contents)
        .await
        .expect("put_object should succeed");

    let sdk_client = get_test_sdk_client().await;
    let head_output = sdk_client
        .head_object()
        .bucket(&bucket)
        .key(key)
        .checksum_mode(aws_sdk_s3::types::ChecksumMode::Enabled)
        .send()
        .await
        .unwrap();

    let head_checksum = Checksum {
        checksum_crc64nvme: if upload_checksum.is_none() {
            // If no checksum was sent with the PutObject request, S3 automatically uses CRC-64NVME.
            // We'll ignore it for the test below.
            // See https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html.
            None
        } else {
            head_output.checksum_crc64_nvme
        },
        checksum_crc32: head_output.checksum_crc32,
        checksum_crc32c: head_output.checksum_crc32_c,
        checksum_sha1: head_output.checksum_sha1,
        checksum_sha256: head_output.checksum_sha256,
    };

    let checksum: Checksum = upload_checksum.into();
    assert_eq!(head_checksum, checksum);
}

#[tokio::test]
async fn test_put_bad_checksums() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_bad_checksums");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let contents = vec![0u8; 128];

    let checksum = Some(UploadChecksum::Crc32c(crc32c::Crc32c::new(99)));

    let params = PutObjectSingleParams::new().checksum(checksum.clone());
    let error = client
        .put_object_single(&bucket, &key, &params, &contents)
        .await
        .expect_err("put_object should fail");

    assert!(matches!(
        error,
        ObjectClientError::ServiceError(PutObjectError::BadChecksum)
    ));
}

#[test_case(HashMap::new(); "Empty")]
#[test_case(HashMap::from([("foo".to_string(), "bar".to_string()), ("a".to_string(), "b".to_string())]); "ASCII")]
#[tokio::test]
async fn test_put_user_object_metadata_happy(object_metadata: HashMap<String, String>) {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_user_object_metadata_happy");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let params = PutObjectSingleParams::new().object_metadata(object_metadata.clone());
    client
        .put_object_single(&bucket, &key, &params, b"data")
        .await
        .expect("put_object should succeed");

    let sdk_client = get_test_sdk_client().await;
    let output = sdk_client.head_object().bucket(&bucket).key(key).send().await.unwrap();

    match output.metadata() {
        Some(returned_object_metadata) => {
            assert_eq!(&object_metadata, returned_object_metadata);
        }
        None => {
            assert!(object_metadata.is_empty());
        }
    }
}

#[test_case(HashMap::from([("£".to_string(), "£".to_string())]); "UTF-8")]
#[tokio::test]
async fn test_put_user_object_metadata_bad_header(object_metadata: HashMap<String, String>) {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_user_object_metadata_bad_header");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let params = PutObjectSingleParams::new().object_metadata(object_metadata.clone());
    client
        .put_object_single(&bucket, &key, &params, b"data")
        .await
        .expect_err("header parsing should fail");
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

    let params = PutObjectSingleParams::new().storage_class(storage_class.to_owned());
    client
        .put_object_single(&bucket, &key, &params, &contents)
        .await
        .expect("put_object should succeed");

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
    let client = get_test_client();
    let request_params = PutObjectSingleParams::new()
        .server_side_encryption(sse_type.map(|value| value.to_owned()))
        .ssekms_key_id(kms_key_id.to_owned());

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    let put_object_result = test_put_object_single(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, sse_type, &kms_key_id, put_object_result).await;

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    let put_object_result = test_put_object_single_empty(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, sse_type, &kms_key_id, put_object_result).await;
}

#[tokio::test]
async fn test_put_object_header() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_object_header");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let content_type = "application/json";
    let params = PutObjectSingleParams::new().add_custom_header("Content-Type".to_owned(), content_type.to_owned());
    client
        .put_object_single(&bucket, &key, &params, b"{ \"key\": \"value\" }")
        .await
        .expect("put_object should succeed");

    let sdk_client = get_test_sdk_client().await;
    let output = sdk_client.head_object().bucket(bucket).key(key).send().await.unwrap();

    assert_eq!(Some(content_type), output.content_type());
}

#[tokio::test]
#[cfg(not(feature = "s3express_tests"))]
async fn test_append_fails_if_not_supported() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_fails_if_not_supported");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let sdk_client = get_test_sdk_client().await;

    // Create a new object for the test
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(aws_sdk_s3::types::ChecksumAlgorithm::Crc64Nvme)
        .body(ByteStream::from_static(b"data"))
        .send()
        .await
        .expect("sdk put_object should succeed");

    let params = PutObjectSingleParams::new_for_append(4);
    let put_object_error = client
        .put_object_single(&bucket, &key, &params, b"more data")
        .await
        .expect_err("put_object_single should fail");

    assert!(matches!(
        put_object_error,
        ObjectClientError::ServiceError(PutObjectError::NotImplemented)
    ));
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_new_object() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_new_object");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let params = PutObjectSingleParams::new_for_append(0);
    let put_object_result = client
        .put_object_single(&bucket, &key, &params, &contents)
        .await
        .expect("put_object_single should succeed");

    // Verify object contents
    let result = client
        .get_object(
            &bucket,
            &key,
            &GetObjectParams::new().if_match(Some(put_object_result.etag.clone())),
        )
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &contents[..]).await;
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_new_object_with_empty() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_new_object_with_empty");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let contents = vec![0u8; 0];
    let params = PutObjectSingleParams::new_for_append(0);
    let put_object_result = client
        .put_object_single(&bucket, &key, &params, &contents)
        .await
        .expect("put_object_single should succeed");

    // Verify object contents
    let result = client
        .get_object(
            &bucket,
            &key,
            &GetObjectParams::new().if_match(Some(put_object_result.etag.clone())),
        )
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &contents[..]).await;
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_existing_object() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_existing_object");
    let client = get_test_client();
    let key = format!("{prefix}hello");
    let mut expected_contents = Vec::new();

    let sdk_client = get_test_sdk_client().await;

    // Create a new object for the test
    let contents = b"data";
    expected_contents.extend_from_slice(contents);
    let object_size = contents.len();
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(aws_sdk_s3::types::ChecksumAlgorithm::Crc64Nvme)
        .body(ByteStream::from_static(contents))
        .send()
        .await
        .expect("sdk put_object should succeed");

    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);
    expected_contents.extend_from_slice(&contents);

    let params = PutObjectSingleParams::new_for_append(object_size as u64)
        .checksum(Some(UploadChecksum::Crc64nvme(crc64nvme::checksum(&contents))));
    let put_object_result = client
        .put_object_single(&bucket, &key, &params, &contents)
        .await
        .expect("put_object_single should succeed");

    // Verify object contents
    let result = client
        .get_object(
            &bucket,
            &key,
            &GetObjectParams::new().if_match(Some(put_object_result.etag.clone())),
        )
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &expected_contents[..]).await;
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_existing_object_if_match() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_existing_object_if_match");
    let client = get_test_client();
    let key = format!("{prefix}hello");
    let mut expected_contents = Vec::new();

    let sdk_client = get_test_sdk_client().await;

    // Create a new object for the test
    let contents = b"data";
    expected_contents.extend_from_slice(contents);
    let object_size = contents.len();
    let result = sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(aws_sdk_s3::types::ChecksumAlgorithm::Crc64Nvme)
        .body(ByteStream::from_static(contents))
        .send()
        .await
        .expect("sdk put_object should succeed");
    let etag = result.e_tag().expect("sdk put_object should return etag");

    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);
    expected_contents.extend_from_slice(&contents);

    let params = PutObjectSingleParams::new_for_append(object_size as u64)
        .checksum(Some(UploadChecksum::Crc64nvme(crc64nvme::checksum(&contents))))
        .if_match(Some(etag.to_owned().into()));
    let put_object_result = client
        .put_object_single(&bucket, &key, &params, &contents)
        .await
        .expect("put_object_single should succeed");

    // Verify object contents
    let result = client
        .get_object(
            &bucket,
            &key,
            &GetObjectParams::new().if_match(Some(put_object_result.etag.clone())),
        )
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &expected_contents[..]).await;
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_existing_object_if_match_fails() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_existing_object_if_match_fails");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let sdk_client = get_test_sdk_client().await;

    // Create a new object for the test
    const INITIAL_CONTENT: &[u8] = b"original";
    let original_result = sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(aws_sdk_s3::types::ChecksumAlgorithm::Crc64Nvme)
        .body(ByteStream::from_static(INITIAL_CONTENT))
        .send()
        .await
        .expect("sdk put_object should succeed");
    let etag = original_result.e_tag().expect("sdk put_object should return etag");
    let object_size = INITIAL_CONTENT.len();

    let replace_result = sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(aws_sdk_s3::types::ChecksumAlgorithm::Crc64Nvme)
        .body(ByteStream::from_static(b"replace"))
        .send()
        .await
        .expect("sdk put_object should succeed");
    assert_ne!(etag, replace_result.e_tag().expect("sdk put_object should return etag"));

    let contents = b"append";
    let params = PutObjectSingleParams::new_for_append(object_size as u64)
        .checksum(Some(UploadChecksum::Crc64nvme(crc64nvme::checksum(contents))))
        .if_match(Some(etag.to_owned().into()));
    let put_object_result = client.put_object_single(&bucket, &key, &params, contents).await;

    let error = put_object_result.expect_err("put_object_single with the old etag should fail");
    assert!(matches!(
        error,
        ObjectClientError::ServiceError(PutObjectError::PreconditionFailed)
    ));
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_existing_object_with_empty() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_existing_object_with_empty");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let sdk_client = get_test_sdk_client().await;

    // Create a new object for the test
    let contents = b"data";
    let object_size = contents.len();
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(aws_sdk_s3::types::ChecksumAlgorithm::Crc64Nvme)
        .body(ByteStream::from_static(contents))
        .send()
        .await
        .expect("sdk put_object should succeed");

    let contents = vec![0u8; 0];
    let params = PutObjectSingleParams::new_for_append(object_size as u64)
        .checksum(Some(UploadChecksum::Crc64nvme(crc64nvme::checksum(&contents))));
    let result = client.put_object_single(&bucket, &key, &params, &contents).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(PutObjectError::EmptyBody))
    ));
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_empty_object_with_empty() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_existing_object_with_empty");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let sdk_client = get_test_sdk_client().await;

    // Create a new object for the test
    let contents = b"";
    let object_size = contents.len();
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(aws_sdk_s3::types::ChecksumAlgorithm::Crc64Nvme)
        .body(ByteStream::from_static(contents))
        .send()
        .await
        .expect("sdk put_object should succeed");

    let contents = vec![0u8; 0];
    let params = PutObjectSingleParams::new_for_append(object_size as u64)
        .checksum(Some(UploadChecksum::Crc64nvme(crc64nvme::checksum(&contents))));
    let result = client.put_object_single(&bucket, &key, &params, &contents).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(PutObjectError::EmptyBody))
    ));
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_non_existing_object() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_non_existing_object");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let params = PutObjectSingleParams::new_for_append(1024);
    let result = client.put_object_single(&bucket, &key, &params, &contents).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(PutObjectError::NoSuchKey))
    ));
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_invalid_offset() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_invalid_offset");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let sdk_client = get_test_sdk_client().await;

    // Create a new object for the test
    let contents = b"data";
    let object_size = contents.len();
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(aws_sdk_s3::types::ChecksumAlgorithm::Crc64Nvme)
        .body(ByteStream::from_static(contents))
        .send()
        .await
        .expect("sdk put_object should succeed");

    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let params = PutObjectSingleParams::new_for_append(object_size as u64 + 1)
        .checksum(Some(UploadChecksum::Crc64nvme(crc64nvme::checksum(&contents))));
    let result = client.put_object_single(&bucket, &key, &params, &contents).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(PutObjectError::InvalidWriteOffset))
    ));
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_with_bad_checksum() {
    use mountpoint_s3_crt::checksums::crc32c;

    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_with_bad_checksum");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let sdk_client = get_test_sdk_client().await;

    // Create a new object for the test
    let contents = b"data";
    let object_size = contents.len();
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(aws_sdk_s3::types::ChecksumAlgorithm::Crc32C)
        .body(ByteStream::from_static(contents))
        .send()
        .await
        .expect("sdk put_object should succeed");

    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);
    // Generate bad checksum
    let checksum = UploadChecksum::Crc32c(crc32c::checksum(b"bad data"));

    let mut params = PutObjectSingleParams::new_for_append(object_size as u64);
    params = params.checksum(Some(checksum));
    let result = client.put_object_single(&bucket, &key, &params, &contents).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(PutObjectError::BadChecksum))
    ));
}

#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_with_invalid_checksum() {
    use mountpoint_s3_client::checksums::crc32c;

    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_with_invalid_checksum");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let sdk_client = get_test_sdk_client().await;

    // Create a new object for the test
    let contents = b"data";
    let object_size = contents.len();
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(aws_sdk_s3::types::ChecksumAlgorithm::Sha256)
        .body(ByteStream::from_static(contents))
        .send()
        .await
        .expect("sdk put_object should succeed");

    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);
    let checksum = UploadChecksum::Crc32c(crc32c::checksum(&contents));

    let mut params = PutObjectSingleParams::new_for_append(object_size as u64);
    params = params.checksum(Some(checksum));
    let result = client.put_object_single(&bucket, &key, &params, &contents).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(PutObjectError::InvalidChecksumType))
    ));
}

#[test_case(aws_sdk_s3::types::ChecksumAlgorithm::Crc64Nvme)]
#[test_case(aws_sdk_s3::types::ChecksumAlgorithm::Crc32C)]
#[test_case(aws_sdk_s3::types::ChecksumAlgorithm::Crc32)]
#[test_case(aws_sdk_s3::types::ChecksumAlgorithm::Sha1)]
#[test_case(aws_sdk_s3::types::ChecksumAlgorithm::Sha256)]
#[tokio::test]
#[cfg(feature = "s3express_tests")]
async fn test_append_with_matching_checksum(checksum_algorithm: aws_sdk_s3::types::ChecksumAlgorithm) {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_with_matching_checksum");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let sdk_client = get_test_sdk_client().await;

    // Create a new object for the test
    let contents = b"data";
    let object_size = contents.len();
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .checksum_algorithm(checksum_algorithm.clone())
        .body(ByteStream::from_static(contents))
        .send()
        .await
        .expect("sdk put_object should succeed");

    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);
    let checksum = match checksum_algorithm {
        aws_sdk_s3::types::ChecksumAlgorithm::Crc64Nvme => UploadChecksum::Crc64nvme(crc64nvme::checksum(&contents)),
        aws_sdk_s3::types::ChecksumAlgorithm::Crc32C => UploadChecksum::Crc32c(crc32c::checksum(&contents)),
        aws_sdk_s3::types::ChecksumAlgorithm::Crc32 => UploadChecksum::Crc32(crc32::checksum(&contents)),
        aws_sdk_s3::types::ChecksumAlgorithm::Sha1 => UploadChecksum::Sha1(sha1::checksum(&contents).unwrap()),
        aws_sdk_s3::types::ChecksumAlgorithm::Sha256 => UploadChecksum::Sha256(sha256::checksum(&contents).unwrap()),
        other => unimplemented!("checksum algorithm {}", other),
    };

    let mut params = PutObjectSingleParams::new_for_append(object_size as u64);
    params = params.checksum(Some(checksum));
    _ = client
        .put_object_single(&bucket, &key, &params, &contents)
        .await
        .expect("append should succeed");
}

#[cfg(feature = "s3express_tests")]
#[tokio::test]
async fn test_append_to_service_side_crc64nvme() {
    use mountpoint_s3_client::types::{ChecksumMode, HeadObjectParams};

    const PART_SIZE: usize = 5 * 1024 * 1024;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_append_to_service_side_crc64nvme");
    let client_config = S3ClientConfig::new()
        .part_size(PART_SIZE)
        .endpoint_config(get_test_endpoint_config());
    let client = get_test_client_with_config(client_config);
    let key = format!("{prefix}hello");

    let initial_contents = vec![0u8; 1024];
    client
        .put_object_single(
            &bucket,
            &key,
            &PutObjectSingleParams::new().checksum(None),
            &initial_contents,
        )
        .await
        .expect("initial put_object with no checksum should succeed");

    let head_object = client
        .head_object(
            &bucket,
            &key,
            &HeadObjectParams::new().checksum_mode(Some(ChecksumMode::Enabled)),
        )
        .await
        .unwrap();

    assert!(
        head_object.checksum.checksum_crc64nvme.is_some(),
        "service should have computed crc64nvme checksum"
    );

    let contents = vec![1u8; 1024];
    let append_checksum = UploadChecksum::Crc64nvme(crc64nvme::checksum(&contents));
    client
        .put_object_single(
            &bucket,
            &key,
            &PutObjectSingleParams::new_for_append(initial_contents.len() as u64).checksum(Some(append_checksum)),
            &contents,
        )
        .await
        .expect("append put_object with crc64nvme checksum should succeed");
}
