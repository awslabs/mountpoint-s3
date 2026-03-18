#![cfg(feature = "s3_tests")]

pub mod common;

use common::creds::{as_crt_cred_provider, get_scoped_down_credentials};
use common::*;
use mountpoint_s3_client::S3RequestError;
use mountpoint_s3_client::config::{Allocator, S3ClientAuthConfig, S3ClientConfig};
use mountpoint_s3_client::error::{HeadBucketError, ObjectClientError};

#[tokio::test]
async fn test_head_bucket_correct_region() {
    let client = get_test_client();
    let (bucket, _) = get_test_bucket_and_prefix("test_head_bucket_correct_region");

    client.head_bucket(&bucket).await.expect("HeadBucket failed");
}

#[tokio::test]
#[cfg(not(feature = "s3express_tests"))]
async fn test_head_bucket_wrong_region() {
    use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};

    let (bucket, _) = get_test_bucket_and_prefix("test_head_bucket_wrong_region");
    let endpoint_config = EndpointConfig::new(&get_secondary_test_region());
    let client = get_test_client_with_config(S3ClientConfig::new().endpoint_config(endpoint_config));
    let expected_region = get_test_region();

    let result = client.head_bucket(&bucket).await;

    match result {
        Err(ObjectClientError::ClientError(S3RequestError::IncorrectRegion(actual_region, _))) => {
            assert_eq!(actual_region, expected_region, "wrong region returned")
        }
        _ => panic!("incorrect result {result:?}"),
    }
}

#[tokio::test]
async fn test_head_bucket_forbidden() {
    let (bucket, _prefix) = get_test_bucket_and_prefix("test_head_bucket_forbidden");

    // Get credentials with no permissions to trigger 403 on HeadBucket.
    let policy = r#"{"Statement": [
        { "Effect": "Deny", "Action": ["*"], "Resource": "*" }
    ]}"#;
    let credentials = get_scoped_down_credentials(policy).await;

    let provider = as_crt_cred_provider(credentials, &Allocator::default());
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Provider(provider))
        .endpoint_config(get_test_endpoint_config());
    let client = get_test_client_with_config(config);

    let err = client
        .head_bucket(&bucket)
        .await
        .expect_err("should fail if no permission to access S3");

    if cfg!(feature = "s3express_tests") {
        assert!(matches!(
            err,
            ObjectClientError::ClientError(S3RequestError::CreateSessionError),
        ));
    } else {
        assert!(matches!(
            err,
            ObjectClientError::ClientError(S3RequestError::Forbidden(_, _)),
        ));
    }
}

#[tokio::test]
async fn test_head_bucket_not_found() {
    let client = get_test_client();
    // Buckets are case sensitive. This bucket will use path-style access and 404.
    let bucket = "amzn-s3-demo-bucket";

    let result = client.head_bucket(bucket).await;

    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(HeadBucketError::NoSuchBucket))
    ));
}
