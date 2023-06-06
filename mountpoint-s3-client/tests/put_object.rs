#![cfg(feature = "s3_tests")]

pub mod common;

use common::*;
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::PutObjectRequest;
use rand::Rng;

// Simple test for PUT object. Puts a single, small object as a single part and checks that the
// contents are correct with a GET.
async fn test_put_object(client: &impl ObjectClient, bucket: &str, prefix: &str) {
    let mut rng = rand::thread_rng();

    let key = format!("{prefix}hello");

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let mut request = client
        .put_object(bucket, &key, &Default::default())
        .await
        .expect("put_object should succeed");

    request.write(&contents).await.unwrap();
    request.complete().await.unwrap();

    let result = client
        .get_object(bucket, &key, None, None)
        .await
        .expect("get_object should succeed");
    check_get_result(result, None, &contents[..]).await;
}

object_client_test!(test_put_object);

// Test for multi-part PUT interface. Splits up a small object into a number of pieces, and streams
// the pieces to the object client. Checks contents are correct using a GET.
async fn test_put_object_multi_part(client: &impl ObjectClient, bucket: &str, prefix: &str) {
    let mut rng = rand::thread_rng();

    let key = format!("{prefix}hello");

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    let mut request = client
        .put_object(bucket, &key, &Default::default())
        .await
        .expect("put_object failed");

    // Create a multi-part stream of contents by splitting up into four parts.
    for chunk in contents.chunks(contents.len() / 4) {
        request.write(chunk).await.unwrap();
    }
    request.complete().await.unwrap();

    let result = client
        .get_object(bucket, &key, None, None)
        .await
        .expect("get_object failed");
    check_get_result(result, None, &contents[..]).await;
}

object_client_test!(test_put_object_multi_part);

// Test for multi-part PUT interface. Splits up a large object into a number of pieces, and streams
// the pieces to the object client. Checks contents are correct using a GET.
async fn test_put_object_large(client: &impl ObjectClient, bucket: &str, prefix: &str) {
    let mut rng = rand::thread_rng();

    let key = format!("{prefix}hello");

    const OBJECT_SIZE: usize = 32 * 1024 * 1024;
    const CHUNK_SIZE: usize = 1024 * 1024 + 1;

    let mut contents = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut contents[..]);

    let mut request = client
        .put_object(bucket, &key, &Default::default())
        .await
        .expect("put_object failed");

    for chunk in contents.chunks(CHUNK_SIZE) {
        request.write(chunk).await.unwrap();
    }
    request.complete().await.unwrap();

    let result = client
        .get_object(bucket, &key, None, None)
        .await
        .expect("get_object failed");
    check_get_result(result, None, &contents[..]).await;
}

object_client_test!(test_put_object_large);
