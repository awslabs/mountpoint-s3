mod common;
use common::*;

use s3_client::S3Client;

#[tokio::test]
async fn test_list_objects() {
    tracing_subscriber::fmt::init();

    let client: S3Client = get_test_client();

    let bucket = get_test_bucket_name();

    let result = client
        .list_objects_v2(&bucket, "", "/", None)
        .await
        .expect("list_objects_v2 failed");

    println!("{:?}", result);
}
