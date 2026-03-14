#![cfg(feature = "s3_tests")]

pub mod common;
use aws_sdk_s3::primitives::ByteStream;
use bytes::Bytes;
use common::creds::{as_crt_cred_provider, get_scoped_down_credentials};
use common::*;
use mountpoint_s3_client::S3RequestError;
use mountpoint_s3_client::config::{S3ClientAuthConfig, S3ClientConfig};
use mountpoint_s3_client::error::{CopyObjectError, ObjectClientError};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use mountpoint_s3_crt::common::allocator::Allocator;

#[tokio::test]
async fn test_copy_objects() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_copy_objects");

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
    let copy_key = format!("{prefix}/hello2");

    let _result = client
        .copy_object(&bucket, &key, &bucket, &copy_key, &Default::default())
        .await
        .expect("copy_object operation should succeed");

    sdk_client
        .head_object()
        .bucket(&bucket)
        .key(&copy_key)
        .send()
        .await
        .expect("copied object should exist");
}

#[tokio::test]
async fn test_copy_object_no_permission() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_copy_object_no_permission");

    // Get credentials with no S3 permissions to trigger 403.
    // An empty policy denies all actions including s3express:CreateSession for S3 Express.
    let policy = r#"{"Statement": [
        { "Effect": "Deny", "Action": ["*"], "Resource": "*" }
    ]}"#;
    let credentials = get_scoped_down_credentials(policy).await;

    let provider = as_crt_cred_provider(credentials, &Allocator::default());
    let config = S3ClientConfig::new()
        .auth_config(S3ClientAuthConfig::Provider(provider))
        .endpoint_config(get_test_endpoint_config());
    let client: S3CrtClient = get_test_client_with_config(config);

    let key = format!("{prefix}/hello");
    let copy_key = format!("{prefix}/hello2");

    let err = client
        .copy_object(&bucket, &key, &bucket, &copy_key, &Default::default())
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
async fn test_copy_object_non_existing_key() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_copy_objects");
    let key = format!("{prefix}/hello");
    let copy_key = format!("{prefix}/hello2");

    let client: S3CrtClient = get_test_client();
    let result = client
        .copy_object(&bucket, &key, &bucket, &copy_key, &Default::default())
        .await;

    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(CopyObjectError::NotFound))
    ));
}

// TODO: Add integration test for cross bucket copy but before that need to set up a new environment variable for a new bucket.
