#![cfg(feature = "s3_tests")]

pub mod common;

use common::*;
#[cfg(not(feature = "s3express_tests"))]
use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
use mountpoint_s3_client::error::{HeadBucketError, ObjectClientError};
#[cfg(not(feature = "s3express_tests"))]
use mountpoint_s3_client::S3CrtClient;
use mountpoint_s3_client::S3RequestError;

#[tokio::test]
async fn test_head_bucket_correct_region() {
    let client = get_test_client();
    let (bucket, _) = get_test_bucket_and_prefix("test_head_bucket_correct_region");

    client.head_bucket(&bucket).await.expect("HeadBucket failed");
}

#[tokio::test]
#[cfg(not(feature = "s3express_tests"))]
async fn test_head_bucket_wrong_region() {
    let (bucket, _) = get_test_bucket_and_prefix("test_head_bucket_wrong_region");
    let endpoint_config = EndpointConfig::new(&get_secondary_test_region());
    let client =
        S3CrtClient::new(S3ClientConfig::new().endpoint_config(endpoint_config)).expect("could not create test client");
    let expected_region = get_test_region();

    let result = client.head_bucket(&bucket).await;

    match result {
        Err(ObjectClientError::ClientError(S3RequestError::IncorrectRegion(actual_region))) => {
            assert_eq!(actual_region, expected_region, "wrong region returned")
        }
        _ => panic!("incorrect result {result:?}"),
    }
}

#[tokio::test]
async fn test_head_bucket_forbidden() {
    let client = get_test_client();
    let bucket = get_test_bucket_without_permissions();

    let result = client.head_bucket(&bucket).await;

    assert!(matches!(
        result,
        Err(ObjectClientError::ClientError(S3RequestError::Forbidden(_, _)))
    ));
}

#[tokio::test]
async fn test_head_bucket_not_found() {
    let client = get_test_client();
    // Buckets are case sensitive. This bucket will use path-style access and 404.
    let bucket = "DOC-EXAMPLE-BUCKET";

    let result = client.head_bucket(bucket).await;

    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(HeadBucketError::NoSuchBucket))
    ));
}
