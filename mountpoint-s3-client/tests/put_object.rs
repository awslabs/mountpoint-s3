#![cfg(feature = "s3_tests")]

pub mod common;

use common::*;
use futures::future;
use futures::stream;
use mountpoint_s3_client::ObjectClient;
use rand::Rng;

// Simple test for PUT object. Puts a single, small object as a single part and checks that the
// contents are correct with a GET.
async fn test_put_object(client: &impl ObjectClient, bucket: &str, prefix: &str) {
    let mut rng = rand::thread_rng();

    let key = format!("{prefix}/hello");

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    client
        .put_object(
            bucket,
            &key,
            &Default::default(),
            stream::once(future::ready(&contents[..])),
        )
        .await
        .expect("put_object failed");

    let result = client.get_object(bucket, &key, None).await.expect("get_object failed");
    check_get_result(result, None, &contents[..]).await;
}

object_client_test!(test_put_object);

// Test for multi-part PUT interface. Splits up a small object into a number of pieces, and streams
// the pieces to the object client. Checks contents are correct using a GET.
async fn test_put_object_multi_part(client: &impl ObjectClient, bucket: &str, prefix: &str) {
    let mut rng = rand::thread_rng();

    let key = format!("{prefix}/hello");

    let mut contents = vec![0u8; 32];
    rng.fill(&mut contents[..]);

    // Create a multi-part stream of contents by splitting up into four parts.
    let contents_stream = stream::iter(contents.chunks(contents.len() / 4));

    client
        .put_object(bucket, &key, &Default::default(), contents_stream)
        .await
        .expect("put_object failed");

    let result = client.get_object(bucket, &key, None).await.expect("get_object failed");
    check_get_result(result, None, &contents[..]).await;
}

object_client_test!(test_put_object_multi_part);
