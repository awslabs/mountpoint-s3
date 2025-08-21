#![cfg(feature = "s3_tests")]

pub mod common;

use std::collections::HashMap;
use std::sync::{Arc, Mutex};

use aws_sdk_s3::primitives::ByteStream;
use common::*;
use futures::{StreamExt as _, pin_mut};
use mountpoint_s3_client::config::{MemoryPool, MetaRequestType, S3ClientConfig};
use mountpoint_s3_client::types::{GetBodyPart, GetObjectParams};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};

#[tokio::test]
async fn test_create_client_twice() {
    let config = set_up_client_config(S3ClientConfig::new().endpoint_config(get_test_endpoint_config()));

    // Attempt to create the client twice.
    for _i in 0..2 {
        let _client = S3CrtClient::new(config.clone()).expect("could not create test client");
    }
}

#[tokio::test]
async fn test_memory_pool_get_buffer_sizes() {
    const PART_SIZE: usize = 8 * 1024 * 1024;
    const OBJECT_SIZE: usize = 1024 * 1024;

    let sdk_client = get_test_sdk_client().await;
    let (bucket, prefix) = get_test_bucket_and_prefix("test_memory_pool_get_buffer_sizes");

    let size = 1024 * 1024;
    let key = format!("{prefix}/test");
    let body = vec![0x42u8; size];
    sdk_client
        .put_object()
        .bucket(&bucket)
        .key(&key)
        .body(ByteStream::from(body.clone()))
        .send()
        .await
        .unwrap();

    let pool = TrackingPool::new();
    let config = S3ClientConfig::new()
        .endpoint_config(get_test_endpoint_config())
        .part_size(PART_SIZE)
        .memory_pool(pool.clone());
    let client = S3CrtClient::new(config.clone()).expect("could not create test client");

    let result = client
        .get_object(
            &bucket,
            &key,
            &GetObjectParams::new().range(Some(0..(OBJECT_SIZE as u64))),
        )
        .await
        .expect("get_object should succeed");

    pin_mut!(result);
    while let Some(r) = result.next().await {
        let GetBodyPart { .. } = r.expect("get_object body part failed");
    }

    let buffers_count = pool.requests();
    assert_eq!(&buffers_count, &[(MetaRequestType::GetObject, OBJECT_SIZE, 1)]);
}

#[derive(Debug, Clone)]
struct TrackingPool {
    requests: Arc<Mutex<HashMap<(MetaRequestType, usize), usize>>>,
}

impl TrackingPool {
    fn new() -> Self {
        TrackingPool {
            requests: Default::default(),
        }
    }

    fn requests(&self) -> Vec<(MetaRequestType, usize, usize)> {
        self.requests
            .lock()
            .unwrap()
            .iter()
            .map(|(&(typ, size), &count)| (typ, size, count))
            .collect()
    }
}

impl MemoryPool for TrackingPool {
    type Buffer = Box<[u8]>;

    fn get_buffer(&self, size: usize, meta_request_type: MetaRequestType) -> Self::Buffer {
        *self
            .requests
            .lock()
            .unwrap()
            .entry((meta_request_type, size))
            .or_default() += 1;
        vec![0u8; size].into_boxed_slice()
    }

    fn trim(&self) -> bool {
        false
    }
}
