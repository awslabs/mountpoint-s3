#![cfg(feature = "s3_tests")]

use aws_sdk_s3 as s3;
use bytes::Bytes;
use s3::Region;
use s3_client::S3Client;

pub fn get_test_client() -> S3Client {
    S3Client::new(&get_test_region(), Default::default()).expect("could not create test client")
}

pub fn get_test_bucket_name() -> String {
    std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests")
}

pub fn get_bucket_test_prefix() -> String {
    std::env::var("S3_BUCKET_TEST_PREFIX").expect("Set S3_BUCKET_TEST_PREFIX to run integration tests")
}

pub fn get_test_region() -> String {
    std::env::var("S3_REGION").expect("Set S3_REGION to run integration tests")
}

pub async fn get_test_sdk_client() -> s3::Client {
    let config = aws_config::from_env()
        .region(Region::new(get_test_region()))
        .load()
        .await;
    s3::Client::new(&config)
}

#[tokio::test]
async fn test_sdk_create_object() {
    let sdk_client = get_test_sdk_client().await;
    let bucket = get_test_bucket_name();
    let prefix = get_bucket_test_prefix();

    let response = sdk_client
        .put_object()
        .bucket(bucket)
        .key(format!("{}/hello", prefix))
        .body(s3::types::ByteStream::from(Bytes::from_static(b"Hello")))
        .send()
        .await
        .unwrap();

    println!("{:?}", response);
}
