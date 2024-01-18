#![cfg(feature = "s3_tests")]

pub mod common;

use common::*;
use futures::{pin_mut, StreamExt};
use mountpoint_s3_client::checksums::crc32c_to_base64;
#[cfg(not(feature = "s3express_tests"))]
use mountpoint_s3_client::config::ServerSideEncryption;
use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::types::{ObjectClientResult, PutObjectParams};
use mountpoint_s3_client::{ObjectClient, PutObjectRequest, S3CrtClient, S3RequestError};
use mountpoint_s3_crt::checksums::crc32c;
use rand::Rng;
use test_case::test_case;

// Simple test for PUT object. Puts a single, small object as a single part and checks that the
// contents are correct with a GET.
async fn test_put_object(client: &impl ObjectClient, bucket: &str, key: &str, request_params: PutObjectParams) {
    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let mut request = client
        .put_object(bucket, key, &request_params)
        .await
        .expect("put_object should succeed");

    request.write(&contents).await.unwrap();
    request.complete().await.unwrap();

    let result = client
        .get_object(bucket, key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &contents[..]).await;
}

object_client_test!(test_put_object);

// Simple test for PUT object. Puts a single, empty object and checks that the (empty)
// contents are correct with a GET.
async fn test_put_object_empty(client: &impl ObjectClient, bucket: &str, key: &str, request_params: PutObjectParams) {
    let request = client
        .put_object(bucket, key, &request_params)
        .await
        .expect("put_object should succeed");

    request.complete().await.unwrap();

    let result = client
        .get_object(bucket, key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &[]).await;
}

object_client_test!(test_put_object_empty);

// Test for multi-part PUT interface. Splits up a small object into a number of pieces, and streams
// the pieces to the object client. Checks contents are correct using a GET.
async fn test_put_object_multi_part(
    client: &impl ObjectClient,
    bucket: &str,
    key: &str,
    request_params: PutObjectParams,
) {
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
    request.complete().await.unwrap();

    let result = client
        .get_object(bucket, key, None, None)
        .await
        .expect("get_object failed");
    check_get_result(result, None, &contents[..]).await;
}

object_client_test!(test_put_object_multi_part);

// Test for multi-part PUT interface. Splits up a large object into a number of pieces, and streams
// the pieces to the object client. Checks contents are correct using a GET.
async fn test_put_object_large(client: &impl ObjectClient, bucket: &str, key: &str, request_params: PutObjectParams) {
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
    request.complete().await.unwrap();

    let result = client
        .get_object(bucket, key, None, None)
        .await
        .expect("get_object failed");
    check_get_result(result, None, &contents[..]).await;
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
#[tokio::test]
async fn test_put_object_abort() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_put_object_abort");
    let client = get_test_client();
    let key = format!("{prefix}hello");

    let mut rng = rand::thread_rng();
    let mut contents = vec![0u8; 32];
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
async fn test_put_checksums() {
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

    let params = PutObjectParams::new().trailing_checksums(true);
    let mut request = client
        .put_object(&bucket, &key, &params)
        .await
        .expect("put_object should succeed");

    request.write(&contents).await.unwrap();
    request.complete().await.unwrap();

    let sdk_client = get_test_sdk_client().await;
    let mut request = sdk_client.get_object_attributes();
    if cfg!(not(feature = "s3express_tests")) {
        request = request.bucket(&bucket);
    }
    let attributes: aws_sdk_s3::operation::get_object_attributes::GetObjectAttributesOutput = request
        .key(key)
        .object_attributes(aws_sdk_s3::types::ObjectAttributes::ObjectParts)
        .send()
        .await
        .unwrap();
    let parts = attributes.object_parts().unwrap().parts().unwrap();
    let checksums: Vec<_> = parts.iter().map(|p| p.checksum_crc32_c().unwrap()).collect();
    let expected_checksums: Vec<_> = contents.chunks(PART_SIZE).map(crc32c::checksum).collect();

    assert_eq!(checksums.len(), expected_checksums.len());
    for (checksum, expected_checksum) in checksums.into_iter().zip(expected_checksums.into_iter()) {
        let encoded = crc32c_to_base64(&expected_checksum);
        assert_eq!(checksum, encoded);
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

    let params = PutObjectParams::new().trailing_checksums(true);
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
async fn check_sse(bucket: &String, key: &String, input_sse: &ServerSideEncryption) {
    let sdk_client = get_test_sdk_client().await;
    let mut request = sdk_client.head_object();
    if cfg!(not(feature = "s3express_tests")) {
        request = request.bucket(bucket);
    }
    let head_object_resp: aws_sdk_s3::operation::head_object::HeadObjectOutput =
        request.key(key).send().await.expect("head object should succeed");
    let expected_sse = match input_sse {
        ServerSideEncryption::BucketDefault => aws_sdk_s3::types::ServerSideEncryption::Aes256,
        ServerSideEncryption::Kms { .. } => aws_sdk_s3::types::ServerSideEncryption::AwsKms,
        ServerSideEncryption::DualLayerKms { .. } => aws_sdk_s3::types::ServerSideEncryption::AwsKmsDsse,
    };
    let actual_sse = head_object_resp
        .server_side_encryption
        .expect("SSE field should always have a value for this test");
    assert_eq!(actual_sse, expected_sse, "unexpected sse type");
    if !matches!(input_sse, ServerSideEncryption::BucketDefault) {
        assert!(
            head_object_resp.ssekms_key_id.is_some(),
            "must have a key for non-default encryption methods",
        );
    }
    let expected_key = input_sse.key_id();
    if expected_key.is_some() {
        // do not check the value of AWS managed key
        assert_eq!(
            head_object_resp.ssekms_key_id,
            Some(expected_key.unwrap().to_owned()),
            "unexpected sse key"
        )
    }
}

#[test_case(ServerSideEncryption::DualLayerKms{ key_id: Some(get_test_kms_key_id()) })]
#[test_case(ServerSideEncryption::DualLayerKms{ key_id: None })]
#[test_case(ServerSideEncryption::Kms{ key_id: Some(get_test_kms_key_id()) })]
#[test_case(ServerSideEncryption::Kms{ key_id: None })]
#[test_case(ServerSideEncryption::BucketDefault)]
#[tokio::test]
#[cfg(not(feature = "s3express_tests"))]
async fn test_put_object_sse(input_sse: ServerSideEncryption) {
    let bucket = get_test_bucket();
    let client_config = S3ClientConfig::new().endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(client_config).expect("could not create test client");
    let request_params = PutObjectParams::new()
        .server_side_encryption(input_sse.sse_type().map(|value| value.to_owned()))
        .ssekms_key_id(input_sse.key_id().map(|value| value.to_owned()));

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    test_put_object(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, &input_sse).await;

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    test_put_object_empty(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, &input_sse).await;

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    test_put_object_multi_part(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, &input_sse).await;

    let prefix = get_unique_test_prefix("test_put_object_sse");
    let key = format!("{prefix}hello");
    test_put_object_large(&client, &bucket, &key, request_params.clone()).await;
    check_sse(&bucket, &key, &input_sse).await;
}

// The test sets `S3PutObjectRequest::expected_headers` to a knowingly unexpected values and checks that request
// completion panics in case when actual SSE settings returned by S3 are different from what is expected.
#[cfg(not(feature = "s3express_tests"))]
async fn put_object_sse_unexpected_headers(input_sse: ServerSideEncryption, unexpected_sse: ServerSideEncryption) {
    let bucket = get_test_bucket();
    let client_config = S3ClientConfig::new().endpoint_config(EndpointConfig::new(&get_test_region()));
    let client = S3CrtClient::new(client_config).expect("could not create test client");
    let request_params = PutObjectParams::new()
        .server_side_encryption(input_sse.sse_type().map(|value| value.to_owned()))
        .ssekms_key_id(input_sse.key_id().map(|value| value.to_owned()));

    let prefix = get_unique_test_prefix("test_put_object_sse_unexpected_headers");
    let key = format!("{prefix}hello");
    let mut rng = rand::thread_rng();

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let mut request = client
        .put_object(&bucket, &key, &request_params)
        .await
        .expect("CRT should be able to start put_object meta request");

    request.write(&contents).await.unwrap();
    request.server_side_encryption = unexpected_sse.sse_type().map(|value| value.to_owned());
    request.ssekms_key_id = unexpected_sse.key_id().map(|value| value.to_owned());
    let _ = request.complete().await;
}

#[tokio::test]
#[should_panic(
    expected = "SSE KMS key ID provided in CompleteMultipartUpload response does not match the requested value"
)]
#[cfg(not(feature = "s3express_tests"))]
async fn test_put_object_sse_unexpected_key_id() {
    put_object_sse_unexpected_headers(
        ServerSideEncryption::Kms {
            key_id: Some(get_test_kms_key_id()),
        },
        ServerSideEncryption::Kms {
            key_id: Some("some_other_key_id".to_owned()),
        },
    )
    .await;
}

#[tokio::test]
#[should_panic(expected = "SSE type provided in CompleteMultipartUpload response does not match the requested value")]
#[cfg(not(feature = "s3express_tests"))]
async fn test_put_object_sse_unexpected_sse_type() {
    put_object_sse_unexpected_headers(
        ServerSideEncryption::Kms {
            key_id: Some(get_test_kms_key_id()),
        },
        ServerSideEncryption::DualLayerKms {
            key_id: Some(get_test_kms_key_id()),
        },
    )
    .await;
}
