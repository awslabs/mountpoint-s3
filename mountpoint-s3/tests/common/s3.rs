use aws_config::{BehaviorVersion, Region};
use aws_sdk_s3::primitives::ByteStream;
use rand::RngCore;
use rand_chacha::rand_core::OsRng;

use crate::common::tokio_block_on;

pub fn get_test_bucket_and_prefix(test_name: &str) -> (String, String) {
    let bucket = if cfg!(feature = "s3express_tests") {
        std::env::var("S3_EXPRESS_ONE_ZONE_BUCKET_NAME")
            .expect("Set S3_EXPRESS_ONE_ZONE_BUCKET_NAME to run integration tests")
    } else {
        std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests")
    };

    // Generate a random nonce to make sure this prefix is truly unique
    let nonce = OsRng.next_u64();

    // Prefix always has a trailing "/" to keep meaning in sync with the S3 API.
    let prefix = std::env::var("S3_BUCKET_TEST_PREFIX").unwrap_or(String::from("mountpoint-test/"));
    assert!(prefix.ends_with('/'), "S3_BUCKET_TEST_PREFIX should end in '/'");

    let prefix = format!("{prefix}{test_name}/{nonce}/");

    (bucket, prefix)
}

pub fn get_test_bucket_forbidden() -> String {
    std::env::var("S3_FORBIDDEN_BUCKET_NAME").expect("Set S3_FORBIDDEN_BUCKET_NAME to run integration tests")
}

pub fn get_test_region() -> String {
    std::env::var("S3_REGION").expect("Set S3_REGION to run integration tests")
}

// Get a region other than what configured in S3_REGION
pub fn get_non_test_region() -> String {
    match get_test_region().as_str() {
        "us-east-1" => String::from("us-west-2"),
        _ => String::from("us-east-1"),
    }
}

pub async fn get_test_sdk_client(region: &str) -> aws_sdk_s3::Client {
    let sdk_config = aws_config::defaults(BehaviorVersion::latest())
        .region(Region::new(region.to_owned()))
        .load()
        .await;
    aws_sdk_s3::Client::new(&sdk_config)
}

pub fn get_test_kms_key_id() -> String {
    std::env::var("KMS_TEST_KEY_ID").expect("Set KMS_TEST_KEY_ID to run integration tests")
}

pub fn create_objects(bucket: &str, prefix: &str, region: &str, key: &str, value: &[u8]) {
    let sdk_client = tokio_block_on(get_test_sdk_client(region));
    let full_key = format!("{prefix}{key}");
    tokio_block_on(
        sdk_client
            .put_object()
            .bucket(bucket)
            .key(full_key)
            .body(ByteStream::from(value.to_vec()))
            .send(),
    )
    .unwrap();
}

pub fn deny_single_object_access_policy(bucket: &str, key: &str) -> String {
    let template = r#"{
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "MountpointFullObjectAccess",
                "Effect": "Allow",
                "Action": [
                    "s3:ListBucket",
                    "s3:GetObject",
                    "s3:PutObject",
                    "s3:AbortMultipartUpload",
                    "s3:DeleteObject"
                ],
                "Resource": ["*"]
            },
            {
                "Sid": "DenyForSubpath",
                "Effect": "Deny",
                "Action": [
                    "s3:GetObject"
                ],
                "Resource": [
                    "arn:aws:s3:::__BUCKET__/__KEY__"
                ]
            }
        ]
    }"#;
    template.replace("__BUCKET__", bucket).replace("__KEY__", key)
}
