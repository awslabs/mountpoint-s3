#![cfg(feature = "s3_tests")]

pub mod common;

use std::collections::HashMap;

use common::*;
use mountpoint_s3_client::checksums::{crc32c, crc32c_to_base64};
use mountpoint_s3_client::config::S3ClientConfig;
use mountpoint_s3_client::types::{ChecksumAlgorithm, PutObjectResult, PutObjectSingleParams, UploadChecksum};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
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
        .get_object(bucket, key, None, Some(put_object_result.etag.clone()))
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
        .get_object(bucket, key, None, Some(put_object_result.etag.clone()))
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &[]).await;

    put_object_result
}

object_client_test!(test_put_object_single_empty);

#[test_case(None; "no checksum")]
#[test_case(Some(ChecksumAlgorithm::Crc32c); "crc32c")]
#[tokio::test]
async fn test_put_checksums(checksum_algorithm: Option<ChecksumAlgorithm>) {
    const PART_SIZE: usize = 5 * 1024 * 1024;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_checksums");
    let client_config = S3ClientConfig::new()
        .part_size(PART_SIZE)
        .endpoint_config(get_test_endpoint_config());
    let client = S3CrtClient::new(client_config).expect("could not create test client");
    let key = format!("{prefix}hello");

    let mut rng = rand::thread_rng();
    let mut contents = vec![0u8; PART_SIZE * 2];
    rng.fill(&mut contents[..]);

    let checksum = match checksum_algorithm {
        Some(ChecksumAlgorithm::Crc32c) => Some(UploadChecksum::Crc32c(crc32c::checksum(&contents))),
        Some(_) => unimplemented!("checksum algorithm not supported"),
        None => None,
    };

    let params = PutObjectSingleParams::new().checksum(checksum.clone());
    client
        .put_object_single(&bucket, &key, &params, &contents)
        .await
        .expect("put_object should succeed");

    let sdk_client = get_test_sdk_client().await;
    let output = sdk_client
        .head_object()
        .bucket(&bucket)
        .key(key)
        .checksum_mode(aws_sdk_s3::types::ChecksumMode::Enabled)
        .send()
        .await
        .unwrap();

    match checksum {
        Some(UploadChecksum::Crc32c(upload_checksum)) => {
            let checksum = output.checksum_crc32_c().unwrap();
            let encoded = crc32c_to_base64(&upload_checksum);
            assert_eq!(checksum, encoded);
        }
        Some(_) => unreachable!("unexpected checksum type"),
        None => {
            assert!(
                output.checksum_crc32_c().is_none(),
                "crc32c should not be present when upload checksums are disabled"
            );
        }
    }
}

#[test_case(HashMap::new(); "Empty")]
#[test_case(HashMap::from([("foo".to_string(), "bar".to_string()), ("a".to_string(), "b".to_string())]); "ASCII")]
#[tokio::test]
async fn test_put_user_object_metadata_happy(object_metadata: HashMap<String, String>) {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_user_object_metadata_happy");
    let client_config = S3ClientConfig::new().endpoint_config(get_test_endpoint_config());
    let client = S3CrtClient::new(client_config).expect("could not create test client");
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
    let client_config = S3ClientConfig::new().endpoint_config(get_test_endpoint_config());
    let client = S3CrtClient::new(client_config).expect("could not create test client");
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
    let client_config = S3ClientConfig::new().endpoint_config(get_test_endpoint_config());
    let client = S3CrtClient::new(client_config).expect("could not create test client");
    let request_params = PutObjectSingleParams::new()
        .server_side_encryption(sse_type.map(|value| value.to_owned()))
        .ssekms_key_id(kms_key_id.to_owned());

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    let put_object_result = test_put_object_single(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, sse_type, &kms_key_id, put_object_result).await;

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    let put_object_result = test_put_object_single(&client, &bucket, &key, request_params.clone()).await;
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
