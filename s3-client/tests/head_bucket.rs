#![cfg(feature = "s3_tests")]

pub mod common;

use common::*;
use s3_client::{HeadBucketError, S3CrtClient, S3RequestError};

#[tokio::test]
async fn test_head_bucket_correct_region() {
    let client = get_test_client();
    let (bucket, _) = get_test_bucket_and_prefix("test_head_bucket_correct_region");

    client.head_bucket(&bucket).await.expect("HeadBucket failed");
}

#[tokio::test]
async fn test_head_bucket_wrong_region() {
    let client = S3CrtClient::new("ap-southeast-2", Default::default()).expect("could not create test client");
    let (bucket, _) = get_test_bucket_and_prefix("test_head_bucket_wrong_region");
    let expected_region = get_test_region();

    let result = client.head_bucket(&bucket).await;

    match result {
        Err(S3RequestError::ServiceError(HeadBucketError::IncorrectRegion(actual_region))) => {
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
        Err(S3RequestError::ServiceError(HeadBucketError::PermissionDenied(_)))
    ));
}
