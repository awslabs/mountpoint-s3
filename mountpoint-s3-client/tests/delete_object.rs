#![cfg(feature = "s3_tests")]

pub mod common;

use aws_sdk_s3::primitives::ByteStream;
use bytes::Bytes;
use common::creds::{as_crt_cred_provider, get_scoped_down_credentials};
use common::*;
use mountpoint_s3_client::config::{S3ClientAuthConfig, S3ClientConfig};
use mountpoint_s3_client::error::{DeleteObjectError, ObjectClientError};
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};
use mountpoint_s3_crt::common::allocator::Allocator;

#[tokio::test]
async fn test_delete_object() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_delete_object");

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
    let _result = client
        .delete_object(&bucket, &key)
        .await
        .expect("delete_object should succeed");

    let head_obj_err = sdk_client
        .head_object()
        .bucket(&bucket)
        .key(&key)
        .send()
        .await
        .expect_err("object should not exist");

    assert!(head_obj_err.into_service_error().is_not_found());
}

#[tokio::test]
async fn test_delete_object_no_obj() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_delete_object_no_obj");

    let key = format!("{prefix}/nonexistent_key");

    let head_obj_err = sdk_client
        .head_object()
        .bucket(&bucket)
        .bucket(&bucket)
        .key(&key)
        .send()
        .await
        .expect_err("object should not exist");
    assert!(head_obj_err.into_service_error().is_not_found());

    let client: S3CrtClient = get_test_client();
    let _result = client
        .delete_object(&bucket, &key)
        .await
        .expect("delete_object should not fail for non-existent object");
}

#[tokio::test]
async fn test_delete_object_404_bucket() {
    let (_bucket, prefix) = get_test_bucket_and_prefix("test_delete_object_404_bucket");

    let key = format!("{prefix}/nonexistent_key");

    let client: S3CrtClient = get_test_client();

    let result = client.delete_object("amzn-s3-demo-bucket", &key).await;
    assert!(matches!(
        result,
        Err(ObjectClientError::ServiceError(DeleteObjectError::NoSuchBucket))
    ));
}

#[tokio::test]
async fn test_delete_object_no_perm() {
    let (bucket, prefix) = get_test_bucket_and_prefix("test_delete_object_no_perm");

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

    let key = format!("{prefix}/some_key");

    let result = client.delete_object(&bucket, &key).await;

    assert!(matches!(
        result,
        Err(ObjectClientError::ClientError(S3RequestError::Forbidden(_, _)))
    ));
}
