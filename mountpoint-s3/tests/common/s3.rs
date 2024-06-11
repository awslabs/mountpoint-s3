use aws_config::{BehaviorVersion, Region};
use aws_sdk_s3::primitives::ByteStream;
use aws_sdk_sts::config::Credentials;
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

pub fn get_subsession_iam_role() -> String {
    std::env::var("S3_SUBSESSION_IAM_ROLE").expect("Set S3_SUBSESSION_IAM_ROLE to run integration tests")
}

pub async fn get_test_sdk_client(region: &str) -> aws_sdk_s3::Client {
    let sdk_config = aws_config::defaults(BehaviorVersion::latest())
        .region(Region::new(region.to_owned()))
        .load()
        .await;
    aws_sdk_s3::Client::new(&sdk_config)
}

pub fn get_test_kms_key_arn() -> String {
    std::env::var("KMS_TEST_KEY_ARN").expect("Set KMS_TEST_KEY_ARN to run integration tests")
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

/// Detect if running on GitHub Actions (GHA) and if so,
/// emit masking string to avoid credentials accidentally being printed.
fn mask_aws_creds_if_on_gha(credentials: &Credentials) {
    if std::env::var_os("GITHUB_ACTIONS").is_some() {
        // GitHub Actions aren't aware of these credential strings since we're sourcing them inside the tests.
        // If we think we're in GitHub Actions environment, register each in stdout.
        // https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#masking-a-value-in-a-log
        println!("::add-mask::{}", credentials.access_key_id());
        println!("::add-mask::{}", credentials.secret_access_key());
        if let Some(token) = credentials.session_token() {
            println!("::add-mask::{}", token);
        }
    }
}

pub async fn get_test_sdk_sts_client() -> aws_sdk_sts::Client {
    let config = aws_config::defaults(BehaviorVersion::latest())
        .region(Region::new(get_test_region()))
        .load()
        .await;
    aws_sdk_sts::Client::new(&config)
}

pub async fn get_scoped_down_credentials(policy: &str) -> Credentials {
    let sts_client = get_test_sdk_sts_client().await;
    let nonce = OsRng.next_u64();
    let assume_role_response = sts_client
        .assume_role()
        .role_arn(get_subsession_iam_role())
        .role_session_name(format!("mountpoint-s3-tests-{nonce}"))
        .policy(policy)
        .send()
        .await
        .expect("assume_role with valid ARN and policy should succeed");
    let credentials = assume_role_response
        .credentials()
        .expect("credentials should be present if assume_role succeeded")
        .to_owned();
    let credentials = Credentials::new(
        credentials.access_key_id(),
        credentials.secret_access_key(),
        Some(credentials.session_token().to_owned()),
        None,
        "scoped_down_sts_creds",
    );
    mask_aws_creds_if_on_gha(&credentials);
    credentials
}
