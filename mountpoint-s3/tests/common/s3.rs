use crate::tokio_block_on;
use aws_config::{BehaviorVersion, Region};
use aws_sdk_s3::primitives::ByteStream;
use rand::TryRng;
use rand::rngs::SysRng;

pub fn get_test_region() -> String {
    std::env::var("S3_REGION").expect("Set S3_REGION to run integration tests")
}

#[cfg(not(feature = "s3express_tests"))]
pub fn get_standard_bucket() -> String {
    std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests")
}

#[cfg(feature = "s3express_tests")]
pub fn get_express_bucket() -> String {
    std::env::var("S3_EXPRESS_ONE_ZONE_BUCKET_NAME")
        .expect("Set S3_EXPRESS_ONE_ZONE_BUCKET_NAME to run integration tests")
}

pub fn get_test_bucket_forbidden() -> String {
    std::env::var("S3_FORBIDDEN_BUCKET_NAME").expect("Set S3_FORBIDDEN_BUCKET_NAME to run integration tests")
}

#[cfg(not(feature = "s3express_tests"))]
pub fn get_test_kms_key_id() -> String {
    std::env::var("KMS_TEST_KEY_ID").expect("Set KMS_TEST_KEY_ID to run integration tests")
}

// Get a region other than what configured in S3_REGION
#[cfg(not(feature = "s3express_tests"))]
pub fn get_non_test_region() -> String {
    match get_test_region().as_str() {
        "us-east-1" => String::from("us-west-2"),
        _ => String::from("us-east-1"),
    }
}

/// Optional config for testing against a custom endpoint url
pub fn get_test_endpoint_url() -> Option<String> {
    if cfg!(feature = "s3express_tests") {
        std::env::var("S3_EXPRESS_ONE_ZONE_ENDPOINT_URL")
            .ok()
            .filter(|str| !str.is_empty())
    } else {
        std::env::var("S3_ENDPOINT_URL").ok().filter(|str| !str.is_empty())
    }
}

pub async fn get_test_sdk_client(region: &str) -> aws_sdk_s3::Client {
    let mut sdk_config = aws_config::defaults(BehaviorVersion::latest()).region(Region::new(region.to_owned()));
    if let Some(endpoint_url) = get_test_endpoint_url() {
        sdk_config = sdk_config.endpoint_url(endpoint_url);
    }
    aws_sdk_s3::Client::new(&sdk_config.load().await)
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

pub fn get_test_bucket_and_prefix(test_name: &str) -> (String, String) {
    let bucket = get_test_bucket();
    let prefix = get_test_prefix(test_name);

    (bucket, prefix)
}

pub fn get_test_prefix(test_name: &str) -> String {
    // Generate a random nonce to make sure this prefix is truly unique
    let nonce = SysRng.try_next_u64().unwrap();

    // Prefix always has a trailing "/" to keep meaning in sync with the S3 API.
    let prefix = std::env::var("S3_BUCKET_TEST_PREFIX").unwrap_or(String::from("mountpoint-test/"));
    assert!(prefix.ends_with('/'), "S3_BUCKET_TEST_PREFIX should end in '/'");

    format!("{prefix}{test_name}/{nonce}/")
}

pub fn get_test_bucket() -> String {
    #[cfg(not(feature = "s3express_tests"))]
    return get_standard_bucket();
    #[cfg(feature = "s3express_tests")]
    return self::get_express_bucket();
}
