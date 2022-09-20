#![cfg(feature = "s3_tests")]

use aws_sdk_s3 as s3;
use bytes::Bytes;
use s3::Region;
use s3_client::S3Client;

/// Enable tracing when running unit tests.
#[ctor::ctor]
fn init_tracing_subscriber() {
    tracing_subscriber::fmt::init();
}

pub fn get_test_client() -> S3Client {
    S3Client::new(&get_test_region(), Default::default()).expect("could not create test client")
}

pub fn get_test_bucket_and_prefix(test_name: &str) -> (String, String) {
    let bucket = std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests");

    let prefix = std::env::var("S3_BUCKET_TEST_PREFIX").expect("Set S3_BUCKET_TEST_PREFIX to run integration tests");
    let prefix = format!("{}/{}", prefix, test_name);

    (bucket, prefix)
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

/// Create some objects in a prefix for testing.
pub async fn create_objects_for_test(client: &s3::Client, bucket: &str, prefix: &str, names: &[impl AsRef<str>]) {
    for name in names {
        client
            .put_object()
            .bucket(bucket)
            .key(format!("{}/{}", prefix, name.as_ref()))
            .body(s3::types::ByteStream::from(Bytes::from_static(b"Hello")))
            .send()
            .await
            .unwrap();
    }
}

#[tokio::test]
async fn test_sdk_create_object() {
    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_sdk_create_object");

    let response = sdk_client
        .put_object()
        .bucket(bucket)
        .key(format!("{}/hello", prefix))
        .body(s3::types::ByteStream::from(Bytes::from_static(b".")))
        .send()
        .await
        .unwrap();

    println!("{:?}", response);
}
