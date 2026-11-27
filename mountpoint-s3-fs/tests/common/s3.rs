use std::sync::OnceLock;

use aws_config::{BehaviorVersion, Region};
use mountpoint_s3_client::config::{Allocator, EndpointConfig, S3ClientAuthConfig, Uri};
use mountpoint_s3_fs::s3::credentials::{SdkCredentialsChain, SdkCredentialsConfig, SharedCredentials};
use mountpoint_s3_fs::s3::{Bucket, Prefix, S3Path};
use rand::TryRng;
use rand::rngs::SysRng;
use tokio::runtime::{Builder, Handle, Runtime};

pub fn get_test_s3_path(test_name: &str) -> S3Path {
    let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
    S3Path::new(Bucket::new(bucket).unwrap(), Prefix::new(&prefix).unwrap())
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
    return get_express_bucket();
}

pub fn get_second_standard_test_bucket() -> String {
    std::env::var("S3_SECOND_BUCKET_NAME").expect("Set S3_SECOND_BUCKET_NAME to run integration tests")
}

#[cfg(feature = "s3express_tests")]
pub fn get_express_bucket() -> String {
    std::env::var("S3_EXPRESS_ONE_ZONE_BUCKET_NAME")
        .expect("Set S3_EXPRESS_ONE_ZONE_BUCKET_NAME to run integration tests")
}

pub fn get_standard_bucket() -> String {
    std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests")
}

/// An S3 Express bucket with SSE-KMS set as a default encryption with a key matching the `KMS_TEST_KEY_ID`
#[cfg(feature = "s3express_tests")]
pub fn get_express_sse_kms_bucket() -> String {
    std::env::var("S3_EXPRESS_ONE_ZONE_BUCKET_NAME_SSE_KMS")
        .expect("Set S3_EXPRESS_ONE_ZONE_BUCKET_NAME_SSE_KMS to run integration tests")
}

pub fn get_test_region() -> String {
    std::env::var("S3_REGION").expect("Set S3_REGION to run integration tests")
}

/// A handle to a Tokio runtime shared by the tests in this process, which lives until it exits.
pub fn tokio_handle() -> Handle {
    static RUNTIME: OnceLock<Runtime> = OnceLock::new();
    RUNTIME
        .get_or_init(|| {
            Builder::new_multi_thread()
                .enable_all()
                .build()
                .expect("Tokio runtime should build")
        })
        .handle()
        .clone()
}

/// The authentication configuration for a test's CRT client, as Mountpoint's client factory
/// chooses it. For `Default` and `Profile`, the client signs with shared credentials over the SDK
/// chain. Other configurations, such as a test's own provider, are used as given.
pub fn get_crt_client_auth_config_for(auth_config: S3ClientAuthConfig) -> S3ClientAuthConfig {
    let chain = match auth_config {
        S3ClientAuthConfig::Default => SdkCredentialsChain::Default,
        S3ClientAuthConfig::Profile(name) => SdkCredentialsChain::Profile(name),
        auth_config => return auth_config,
    };
    let config = SdkCredentialsConfig::new(chain);
    // Block on the shared runtime from a thread of its own: some callers are async tests, which
    // already run on a runtime and can't block on another one.
    let handle = tokio_handle();
    std::thread::scope(|scope| {
        scope
            .spawn(|| handle.block_on(SharedCredentials::from_sdk(config, handle.clone())))
            .join()
            .expect("SDK credentials creation should not panic")
    })
    .expect("SDK credentials should be created")
    .auth_config()
}

/// Account ID owning buckets specified in `S3_BUCKET_NAME` and `S3_EXPRESS_ONE_ZONE_BUCKET_NAME`
pub fn get_bucket_owner() -> String {
    std::env::var("S3_BUCKET_OWNER").expect("Set S3_BUCKET_OWNER to run integration tests")
}

/// A name of an S3 Express bucket which is owned by a different account (different to `S3_BUCKET_OWNER`)
pub fn get_external_express_bucket() -> String {
    std::env::var("S3_EXPRESS_ONE_ZONE_BUCKET_NAME_EXTERNAL")
        .expect("Set S3_EXPRESS_ONE_ZONE_BUCKET_NAME_EXTERNAL to run integration tests")
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

pub fn get_test_endpoint_config() -> EndpointConfig {
    let mut endpoint_config = EndpointConfig::new(&get_test_region());
    if let Some(endpoint_url) = get_test_endpoint_url() {
        let endpoint = Uri::new_from_str(&Allocator::default(), endpoint_url.clone()).expect("invalid endpoint url");
        endpoint_config = endpoint_config.endpoint(endpoint);
    }
    endpoint_config
}

// Get a region other than what configured in S3_REGION
pub fn get_non_test_region() -> String {
    match get_test_region().as_str() {
        "us-east-1" => String::from("us-west-2"),
        _ => String::from("us-east-1"),
    }
}

pub async fn get_test_sdk_client(region: &str) -> aws_sdk_s3::Client {
    let mut sdk_config = aws_config::defaults(BehaviorVersion::latest()).region(Region::new(region.to_owned()));
    if let Some(endpoint_url) = get_test_endpoint_url() {
        sdk_config = sdk_config.endpoint_url(endpoint_url);
    }
    aws_sdk_s3::Client::new(&sdk_config.load().await)
}

pub fn get_test_kms_key_id() -> String {
    std::env::var("KMS_TEST_KEY_ID").expect("Set KMS_TEST_KEY_ID to run integration tests")
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
