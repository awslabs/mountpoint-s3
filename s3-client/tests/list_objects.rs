#![allow(unreachable_code)]

use s3_client::S3Client;

fn get_test_client() -> S3Client {
    S3Client::new(Default::default()).expect("could not create test client")
}

fn get_test_bucket_name() -> String {
    std::env::var("S3_BUCKET_NAME").unwrap_or("s3-file-connector-github-test-bucket".to_owned())
}

// fn get_test_prefix() -> String {
//     if let Ok(prefix) = std::env::var("S3_BUCKET_TEST_PREFIX") {
//         prefix
//     } else {
//         "/".to_owned()
//     }
// }

#[tokio::test]
async fn test_list_objects() {
    tracing_subscriber::fmt::init();

    let client = get_test_client();

    let bucket = get_test_bucket_name();

    let result = client.list_objects_v2(&bucket, "", "/", None).await;

    println!("{:?}", result);
}
