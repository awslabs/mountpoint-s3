use aws_sdk_s3::primitives::ByteStream;
use aws_sdk_sts::config::Region;
use futures::Future;
use rand::RngCore;
use rand_chacha::rand_core::OsRng;

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

pub fn get_subsession_iam_role() -> String {
    std::env::var("S3_SUBSESSION_IAM_ROLE").expect("Set S3_SUBSESSION_IAM_ROLE to run integration tests")
}

pub fn get_s3express_endpoint() -> String {
    std::env::var("S3_EXPRESS_ONE_ZONE_ENDPOINT").expect("Set S3_EXPRESS_ONE_ZONE_ENDPOINT to run integration tests")
}

pub fn get_test_kms_key_id() -> String {
    std::env::var("KMS_TEST_KEY_ID").expect("Set KMS_TEST_KEY_ID to run integration tests")
}

pub fn create_objects(bucket: &str, prefix: &str, region: &str, key: &str, value: &[u8]) {
    let mut config = aws_config::from_env().region(Region::new(region.to_string()));
    if cfg!(feature = "s3express_tests") {
        config = config.endpoint_url(get_s3express_endpoint());
    }
    let config = tokio_block_on(config.load());
    let sdk_client = aws_sdk_s3::Client::new(&config);
    let full_key = format!("{prefix}{key}");
    tokio_block_on(async move {
        let mut request = sdk_client.put_object();
        if cfg!(not(feature = "s3express_tests")) {
            request = request.bucket(bucket);
        }
        request
            .key(full_key)
            .body(ByteStream::from(value.to_vec()))
            .send()
            .await
            .unwrap()
    });
}

pub fn tokio_block_on<F: Future>(future: F) -> F::Output {
    let runtime = tokio::runtime::Builder::new_current_thread()
        .enable_io()
        .enable_time()
        .build()
        .unwrap();
    runtime.block_on(future)
}
