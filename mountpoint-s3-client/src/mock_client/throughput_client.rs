use std::pin::Pin;
use std::task::{Context, Poll};
use std::time::Duration;

use async_io::block_on;
use async_trait::async_trait;
use futures::Stream;
use mountpoint_s3_crt::s3::client::BufferPoolUsageStats;
use pin_project::pin_project;

use crate::mock_client::leaky_bucket::LeakyBucket;
use crate::mock_client::{
    MockClient, MockClientConfig, MockClientError, MockGetObjectResponse, MockObject, MockPutObjectRequest,
};
use crate::object_client::{
    Checksum, CopyObjectError, CopyObjectParams, CopyObjectResult, DeleteObjectError, DeleteObjectResult, GetBodyPart,
    GetObjectAttributesError, GetObjectAttributesResult, GetObjectError, GetObjectParams, GetObjectResponse,
    HeadObjectError, HeadObjectParams, HeadObjectResult, ListObjectsError, ListObjectsResult, ObjectAttribute,
    ObjectChecksumError, ObjectClient, ObjectClientResult, ObjectMetadata, PutObjectError, PutObjectParams,
    PutObjectResult, PutObjectSingleParams, RenameObjectError, RenameObjectParams, RenameObjectResult,
};

use super::MockBackpressureHandle;

/// A [MockClient] that rate limits overall download throughput to simulate a target network
/// performance without the jitter or service latency of targeting a real service. Note that while
/// the rate limit is shared by all downloading streams, there is no fairness, so some streams can
/// be starved.
///
/// TODO: make it bi-directional, so that upload throughput can be simulated as well.
pub struct ThroughputMockClient {
    inner: MockClient,
    /// A throughput rate limiter with one token per byte.
    ///
    /// If [None], there will be no limit on throughput.
    rate_limiter: Option<LeakyBucket>,
}

impl ThroughputMockClient {
    /// Create a new [ThroughputMockClient] with the given configuration and download rate limit
    /// in gigabits per second.
    pub fn new(config: MockClientConfig, rate_limit_gbps: f64) -> Self {
        let bytes_per_sec = rate_limit_gbps * 1000000000.0 / 8.0;
        let interval = Duration::from_micros(1);
        let bytes_per_interval = bytes_per_sec * interval.as_secs_f64();
        let rate_limiter = LeakyBucket::builder()
            .refill_interval(interval)
            .refill_amount(bytes_per_interval as u32)
            .max(config.part_size as u32)
            .tokens(0)
            .build()
            .into();
        tracing::info!(?rate_limiter, "new client");

        Self {
            inner: MockClient::new(config),
            rate_limiter,
        }
    }

    /// Create a new [ThroughputMockClient] with the given configuration and no throughput limits.
    ///
    /// This is effectively the same as a [MockClient], but allows you to use the [ThroughputMockClient] type.
    pub fn new_unlimited_throughput(config: MockClientConfig) -> Self {
        Self {
            inner: MockClient::new(config),
            rate_limiter: None,
        }
    }

    /// Add an object to this mock client's bucket
    pub fn add_object(&self, key: &str, value: MockObject) {
        self.inner.add_object(key, value);
    }
}

#[pin_project]
pub struct ThroughputGetObjectResponse {
    #[pin]
    request: MockGetObjectResponse,
    rate_limiter: Option<LeakyBucket>,
}

#[cfg_attr(not(docsrs), async_trait)]
impl GetObjectResponse for ThroughputGetObjectResponse {
    type BackpressureHandle = MockBackpressureHandle;
    type ClientError = MockClientError;

    fn backpressure_handle(&mut self) -> Option<&mut Self::BackpressureHandle> {
        self.request.backpressure_handle()
    }

    fn get_object_metadata(&self) -> ObjectMetadata {
        self.request.object.object_metadata.clone()
    }

    fn get_object_checksum(&self) -> Result<Checksum, ObjectChecksumError> {
        Ok(self.request.object.checksum.clone())
    }
}

impl Stream for ThroughputGetObjectResponse {
    type Item = ObjectClientResult<GetBodyPart, GetObjectError, MockClientError>;

    fn poll_next(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Option<Self::Item>> {
        let this = self.project();
        this.request.poll_next(cx).map(|next| {
            next.map(|item| {
                item.inspect(|body_part| {
                    if let Some(rate_limiter) = this.rate_limiter {
                        // Acquire enough tokens for the number of bytes we want to deliver
                        block_on(rate_limiter.acquire(body_part.data.len() as u32));
                    }
                })
            })
        })
    }
}

#[async_trait]
impl ObjectClient for ThroughputMockClient {
    type GetObjectResponse = ThroughputGetObjectResponse;
    type PutObjectRequest = MockPutObjectRequest;
    type ClientError = MockClientError;

    fn read_part_size(&self) -> usize {
        self.inner.read_part_size()
    }

    fn write_part_size(&self) -> usize {
        self.inner.write_part_size()
    }

    fn initial_read_window_size(&self) -> Option<usize> {
        self.inner.initial_read_window_size()
    }

    fn mem_usage_stats(&self) -> Option<BufferPoolUsageStats> {
        self.inner.mem_usage_stats()
    }

    async fn delete_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<DeleteObjectResult, DeleteObjectError, Self::ClientError> {
        self.inner.delete_object(bucket, key).await
    }

    async fn copy_object(
        &self,
        source_bucket: &str,
        source_key: &str,
        destination_bucket: &str,
        destination_key: &str,
        params: &CopyObjectParams,
    ) -> ObjectClientResult<CopyObjectResult, CopyObjectError, Self::ClientError> {
        self.inner
            .copy_object(source_bucket, source_key, destination_bucket, destination_key, params)
            .await
    }

    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        params: &GetObjectParams,
    ) -> ObjectClientResult<Self::GetObjectResponse, GetObjectError, Self::ClientError> {
        let request = self.inner.get_object(bucket, key, params).await?;
        let rate_limiter = self.rate_limiter.clone();
        Ok(ThroughputGetObjectResponse { request, rate_limiter })
    }

    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> ObjectClientResult<ListObjectsResult, ListObjectsError, Self::ClientError> {
        self.inner
            .list_objects(bucket, continuation_token, delimiter, max_keys, prefix)
            .await
    }

    async fn head_object(
        &self,
        bucket: &str,
        key: &str,
        params: &HeadObjectParams,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, Self::ClientError> {
        self.inner.head_object(bucket, key, params).await
    }

    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<Self::PutObjectRequest, PutObjectError, Self::ClientError> {
        self.inner.put_object(bucket, key, params).await
    }

    async fn put_object_single<'a>(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectSingleParams,
        contents: impl AsRef<[u8]> + Send + 'a,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        self.inner.put_object_single(bucket, key, params, contents).await
    }

    async fn get_object_attributes(
        &self,
        bucket: &str,
        key: &str,
        max_parts: Option<usize>,
        part_number_marker: Option<usize>,
        object_attributes: &[ObjectAttribute],
    ) -> ObjectClientResult<GetObjectAttributesResult, GetObjectAttributesError, Self::ClientError> {
        self.inner
            .get_object_attributes(bucket, key, max_parts, part_number_marker, object_attributes)
            .await
    }

    async fn rename_object(
        &self,
        bucket: &str,
        src_key: &str,
        dst_key: &str,
        params: &RenameObjectParams,
    ) -> ObjectClientResult<RenameObjectResult, RenameObjectError, Self::ClientError> {
        self.inner.rename_object(bucket, src_key, dst_key, params).await
    }
}

#[cfg(test)]
mod tests {
    use std::time::Instant;

    use futures::StreamExt;
    use futures::executor::block_on;

    use crate::mock_client::MockObject;
    use crate::types::ETag;

    use super::*;

    #[test]
    fn ramp_throughput() {
        const OBJECT_SIZE: usize = 128 * 1024 * 1024;
        const ITERATIONS: usize = 1;

        for rate_gbps in [0.5, 1.0, 2.0] {
            for _ in 0..ITERATIONS {
                let config = MockClient::config().part_size(8 * 1024 * 1024).bucket("test_bucket");
                let client = ThroughputMockClient::new(config, rate_gbps);

                client
                    .inner
                    .add_object("testfile", MockObject::ramp(0xaa, OBJECT_SIZE, ETag::for_tests()));

                // Stream the entire object and drop it on the floor
                let start = Instant::now();
                let num_bytes = block_on(async move {
                    let mut num_bytes = 0;
                    let mut get = client
                        .get_object("test_bucket", "testfile", &GetObjectParams::new())
                        .await
                        .unwrap();
                    while let Some(part) = get.next().await {
                        let part = part.unwrap().data;
                        num_bytes += part.len();
                    }
                    num_bytes
                });
                let actual = start.elapsed().as_secs_f64();

                assert_eq!(num_bytes, OBJECT_SIZE, "didn't stream entire object");

                let expected = OBJECT_SIZE as f64 / (rate_gbps / 8.0 * 1.0e9);
                assert!(
                    actual > expected * 0.9,
                    "too fast: rate_gbps={rate_gbps} actual={actual}s expected={expected}s"
                );
                // This one will be too flaky on slow machines to check by default
                // assert!(
                //     actual < expected * 1.1,
                //     "too slow: rate_gbps={rate_gbps} actual={actual}s expected={expected}s"
                // );
            }
        }
    }
}
