//! This module implements a prefetcher for GetObject requests.
//!
//! It works by relying on the CRT's flow-control window feature. The prefetcher creates a single
//! GetObject request with entire length of the object (starting from the first read offset) and
//! makes increasingly larger read window. We want the chunks to be large enough that they can make
//! effective use of the CRT's fan-out parallelism across the S3 frontend, but small enough that we
//! don't accumulate a lot of unread object data in memory or wastefully download data we'll never
//! read. As the reader continues to make sequential reads, we increase the size of the read window
//! up to some maximum. If the reader ever makes a non-sequential read, we abandon the prefetching
//! and start again with a new GetObject request with minimum read window size.
//!
//! In more technical details, the prefetcher creates a RequestTask when receiving the first read
//! request from the file system or after it has just been reset. The RequestTask consists of two main
//! components.
//! 1.  An ObjectPartStream that has a role to continuously fetch data from the sources which can be
//!     either S3 or the cache on disk. The ObjectPartStream is spawned and run in a separate thread
//!     from the prefetcher.
//! 2.  A PartQueue, where we store data received from the ObjectPartStream, waiting to be read from
//!     the prefetcher via a RequestTask function.
//!
//! A backpressure mechanism is needed to control how much data we want to store in the part queue at
//! a time as we don't want to download the entire object into memory. For the client part stream, we
//! may be able to rely on the CRT flow-control flow window to block when we don't increase the read
//! window size, but for the caching part stream we don't have the machinery to do that yet. That's why
//! we introduce the BackpressureController and BackpressureLimiter to help solving this.
//!
//! Essentially, the BackpressureController and BackpressureLimiter is a pair of sender/receiver of a
//! channel, created at RequestTask initialization. The sender is handed to the RequestTask. Its role
//! is to communicate with its receiver to tell "when" it is ready to receive more data. The receiver
//! is handed to the ObjectPartStream where the stream should call a provided function "before" fetching
//! more data from the sources and put them into the part queue. The BackpressureLimiter should be used
//! as a mean to block ObjectPartStream thread to fetch more data.

use std::fmt::Debug;

use metrics::{counter, histogram};
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::{ObjectClient, error_metadata::ProvideErrorMetadata};
use thiserror::Error;
use tracing::trace;

use crate::checksums::{ChecksummedBytes, IntegrityError};
use crate::data_cache::DataCache;
use crate::fs::error_metadata::{ErrorMetadata, MOUNTPOINT_ERROR_CLIENT};
use crate::object::ObjectId;

mod backpressure_controller;
mod builder;
mod caching_stream;
mod part;
mod part_queue;
mod part_stream;
mod seek_window;
mod task;

pub use builder::PrefetcherBuilder;
use part::PartOperationError;
use part_stream::{PartStream, RequestRange, RequestTaskConfig};
use seek_window::SeekWindow;
use task::RequestTask;

#[derive(Debug, Error)]
pub enum PrefetchReadError<E> {
    #[error("get object request failed")]
    GetRequestFailed {
        source: ObjectClientError<GetObjectError, E>,
        metadata: Box<ErrorMetadata>,
    },

    #[error("get object request returned wrong offset")]
    GetRequestReturnedWrongOffset { offset: u64, expected_offset: u64 },

    #[error("get request terminated unexpectedly")]
    GetRequestTerminatedUnexpectedly,

    #[error("integrity check failed")]
    Integrity(#[from] IntegrityError),

    #[error("part read failed")]
    PartReadFailed(#[from] PartOperationError),

    #[error("backpressure must be enabled with non-zero initial read window")]
    BackpressurePreconditionFailed,

    #[error("read window increment failed")]
    ReadWindowIncrement,
}

impl<E: ProvideErrorMetadata + std::error::Error + Send + Sync + 'static> PrefetchReadError<E> {
    fn get_request_failed(err: ObjectClientError<GetObjectError, E>, bucket: &str, key: &str) -> Self {
        let metadata = ErrorMetadata {
            client_error_meta: err.meta(),
            error_code: Some(MOUNTPOINT_ERROR_CLIENT.to_string()),
            s3_bucket_name: Some(bucket.to_string()),
            s3_object_key: Some(key.to_string()),
        };
        let metadata = Box::new(metadata);
        Self::GetRequestFailed { source: err, metadata }
    }
}

#[derive(Debug, Clone, Copy)]
pub struct PrefetcherConfig {
    /// Maximum size of the read window
    pub max_read_window_size: usize,
    /// Factor to increase the request size by whenever the reader continues making sequential reads
    pub sequential_prefetch_multiplier: usize,
    /// The maximum amount of unavailable data the prefetcher will tolerate during a seek operation
    /// before resetting and starting a new S3 request.
    pub max_forward_seek_wait_distance: u64,
    /// The maximum distance the prefetcher will seek backwards before resetting and starting a new
    /// S3 request. We keep this much data in memory in addition to any inflight requests.
    pub max_backward_seek_distance: u64,
}

impl Default for PrefetcherConfig {
    #[allow(clippy::identity_op)]
    fn default() -> Self {
        Self {
            max_read_window_size: determine_max_read_size(),
            sequential_prefetch_multiplier: 2,
            // We want these large enough to tolerate a single out-of-order Linux readahead, which
            // is at most 256KiB backwards and then 512KiB forwards. For forwards seeks, we're also
            // making a guess about where the optimal cut-off point is before it would be faster to
            // just start a new request instead.
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 1 * 1024 * 1024,
        }
    }
}

/// Provide the maximum read size for the prefetcher, for which there is one prefetcher per file handle.
///
/// This allows a way to override the prefetch window rather than using the hardcoded default within Mountpoint.
/// We do not recommend using the override, and it may be removed at any time.
///
/// This parameter may not be accurately adopted when using small values.
/// When prefetching starts, it will fetch 1MiB + 128KiB at time of writing.
/// This parameter will only be used when scaling up the prefetch window.
///
/// This unstable override is expected to be removed once adaptive prefetching based on available memory is available:
/// https://github.com/awslabs/mountpoint-s3/issues/987
fn determine_max_read_size() -> usize {
    const ENV_VAR_KEY: &str = "UNSTABLE_MOUNTPOINT_MAX_PREFETCH_WINDOW_SIZE";
    const DEFAULT_READ_WINDOW_SIZE: usize = 2 * 1024 * 1024 * 1024;

    match std::env::var_os(ENV_VAR_KEY) {
        Some(val) => match val.to_string_lossy().parse() {
            Ok(val) => {
                tracing::warn!(
                    "successfully overridden prefetch read window size \
                        with new value {val} bytes from unstable environment config",
                );
                val
            }
            Err(_) => {
                tracing::warn!(
                    "{ENV_VAR_KEY} did not contain a valid positive integer \
                        for prefetch bytes, using {DEFAULT_READ_WINDOW_SIZE} bytes instead",
                );
                DEFAULT_READ_WINDOW_SIZE
            }
        },
        None => DEFAULT_READ_WINDOW_SIZE,
    }
}

/// A [Prefetcher] creates and manages prefetching GetObject requests to objects.
#[derive(Debug)]
pub struct Prefetcher<Client> {
    part_stream: PartStream<Client>,
    config: PrefetcherConfig,
}

impl<Client> Prefetcher<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    /// Creates an instance of the default [Prefetcher] builder.
    pub fn default_builder(client: Client) -> PrefetcherBuilder<Client> {
        PrefetcherBuilder::default_builder(client)
    }

    /// Creates an instance of a caching [Prefetcher] builder.
    pub fn caching_builder<Cache>(cache: Cache, client: Client) -> PrefetcherBuilder<Client>
    where
        Cache: DataCache + Send + Sync + 'static,
    {
        PrefetcherBuilder::caching_builder(cache, client)
    }

    /// Create a new [Prefetcher] from the given [ObjectPartStream] instance.
    pub fn new(part_stream: PartStream<Client>, config: PrefetcherConfig) -> Self {
        Self { part_stream, config }
    }

    /// Start a new prefetch request to the specified object.
    pub fn prefetch(&self, bucket: String, object_id: ObjectId, size: u64) -> PrefetchGetObject<Client>
    where
        Client: ObjectClient + Clone + Send + Sync + 'static,
    {
        PrefetchGetObject::new(self.part_stream.clone(), self.config, bucket, object_id, size)
    }
}

/// Result of a prefetch request. Allows callers to read object data.
#[derive(Debug)]
pub struct PrefetchGetObject<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    part_stream: PartStream<Client>,
    config: PrefetcherConfig,
    backpressure_task: Option<RequestTask<Client>>,
    // Invariant: the offset of the last byte in this window is always
    // self.next_sequential_read_offset - 1.
    backward_seek_window: SeekWindow,
    bucket: String,
    object_id: ObjectId,
    // preferred part size in the prefetcher's part queue, not the object part
    preferred_part_size: usize,
    /// Start offset for sequential read, used for calculating contiguous read metric
    sequential_read_start_offset: u64,
    next_sequential_read_offset: u64,
    next_request_offset: u64,
    size: u64,
}

impl<Client> PrefetchGetObject<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    /// Create and spawn a new prefetching request for an object
    fn new(
        part_stream: PartStream<Client>,
        config: PrefetcherConfig,
        bucket: String,
        object_id: ObjectId,
        size: u64,
    ) -> Self {
        PrefetchGetObject {
            part_stream,
            config,
            backpressure_task: None,
            backward_seek_window: SeekWindow::new(config.max_backward_seek_distance as usize),
            preferred_part_size: 128 * 1024,
            sequential_read_start_offset: 0,
            next_sequential_read_offset: 0,
            next_request_offset: 0,
            bucket,
            object_id,
            size,
        }
    }

    /// Read some bytes from the object. This function will always return exactly `size` bytes,
    /// except at the end of the object where it will return however many bytes are left (including
    /// possibly 0 bytes).
    pub async fn read(
        &mut self,
        offset: u64,
        length: usize,
    ) -> Result<ChecksummedBytes, PrefetchReadError<Client::ClientError>> {
        trace!(
            offset,
            length,
            next_seq_offset = self.next_sequential_read_offset,
            "read"
        );
        let result = self.try_read(offset, length).await;
        if result.is_err() {
            self.reset_prefetch_to_offset(offset);
        }
        result
    }

    async fn try_read(
        &mut self,
        offset: u64,
        length: usize,
    ) -> Result<ChecksummedBytes, PrefetchReadError<Client::ClientError>> {
        // Currently, we set preferred part size to the current read size.
        // Our assumption is that the read size will be the same for most sequential
        // read and it can be aligned to the size of prefetched chunks.
        //
        // We initialize this value to 128k as it is the Linux's readahead size
        // and it can also be used as a lower bound in case the read size is too small.
        // The upper bound is 1MiB since it should be a common IO size.
        let max_preferred_part_size = 1024 * 1024;
        self.preferred_part_size = self.preferred_part_size.max(length).min(max_preferred_part_size);

        let remaining = self.size.saturating_sub(offset);
        if remaining == 0 {
            return Ok(ChecksummedBytes::default());
        }
        let mut to_read = (length as u64).min(remaining);

        // Try to seek if this read is not sequential, and if seeking fails, cancel and reset the
        // prefetcher.
        if self.next_sequential_read_offset != offset {
            if self.try_seek(offset).await? {
                trace!("seek succeeded");
            } else {
                trace!(
                    expected = self.next_sequential_read_offset,
                    actual = offset,
                    "out-of-order read, resetting prefetch"
                );
                counter!("prefetch.out_of_order").increment(1);

                // This is an approximation, tolerating some seeking caused by concurrent readahead.
                self.record_contiguous_read_metric();

                self.reset_prefetch_to_offset(offset);
            }
        }
        assert_eq!(self.next_sequential_read_offset, offset);

        if self.backpressure_task.is_none() {
            self.backpressure_task = Some(self.spawn_read_backpressure_request()?);
        }

        let mut response = ChecksummedBytes::default();
        while to_read > 0 {
            let Some(current_task) = self.backpressure_task.as_mut() else {
                trace!(offset, length, "read beyond object size");
                break;
            };
            debug_assert!(current_task.remaining() > 0);

            let part = current_task.read(to_read as usize).await?;
            self.backward_seek_window.push(part.clone());
            let part_bytes = part.into_bytes(&self.object_id, self.next_sequential_read_offset)?;

            self.next_sequential_read_offset += part_bytes.len() as u64;
            // If we can complete the read with just a single buffer, early return to avoid copying
            // into a new buffer. This should be the common case as long as part size is larger than
            // read size, which it almost always is for real S3 clients and FUSE.
            if response.is_empty() && part_bytes.len() == to_read as usize {
                return Ok(part_bytes);
            }

            let part_len = part_bytes.len() as u64;
            response.extend(part_bytes)?;
            to_read -= part_len;
        }

        Ok(response)
    }

    /// Spawn a backpressure GetObject request which has a range from current offset to the end of the file.
    /// We will be using flow-control window to control how much data we want to download into the prefetcher.
    fn spawn_read_backpressure_request(
        &mut self,
    ) -> Result<RequestTask<Client>, PrefetchReadError<Client::ClientError>> {
        let start = self.next_sequential_read_offset;
        let object_size = self.size as usize;
        let read_part_size = self.part_stream.client().read_part_size().unwrap_or(8 * 1024 * 1024);
        let range = RequestRange::new(object_size, start, object_size);

        // The prefetcher now relies on backpressure mechanism so it must be enabled
        let initial_read_window_size = match self.part_stream.client().initial_read_window_size() {
            Some(value) => {
                // Also, make sure that we don't get blocked from the beginning
                if value == 0 {
                    return Err(PrefetchReadError::BackpressurePreconditionFailed);
                }
                value
            }
            None => return Err(PrefetchReadError::BackpressurePreconditionFailed),
        };

        let config = RequestTaskConfig {
            bucket: self.bucket.clone(),
            object_id: self.object_id.clone(),
            range,
            read_part_size,
            preferred_part_size: self.preferred_part_size,
            initial_read_window_size,
            max_read_window_size: self.config.max_read_window_size,
            read_window_size_multiplier: self.config.sequential_prefetch_multiplier,
        };
        Ok(self.part_stream.spawn_get_object_request(config))
    }

    /// Reset this prefetch request to a new offset, clearing any existing tasks queued.
    fn reset_prefetch_to_offset(&mut self, offset: u64) {
        self.backpressure_task = None;
        self.backward_seek_window.clear();
        self.sequential_read_start_offset = offset;
        self.next_sequential_read_offset = offset;
        self.next_request_offset = offset;
    }

    /// Try to seek within the current inflight requests without restarting them. Returns true if
    /// the seek succeeded, in which case self.next_sequential_read_offset will be updated to the
    /// new offset. If this returns false, the prefetcher is in an unknown state and must be reset.
    async fn try_seek(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert_ne!(offset, self.next_sequential_read_offset);
        trace!(from = self.next_sequential_read_offset, to = offset, "trying to seek");
        if offset > self.next_sequential_read_offset {
            self.try_seek_forward(offset).await
        } else {
            self.try_seek_backward(offset).await
        }
    }

    async fn try_seek_forward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset > self.next_sequential_read_offset);
        let total_seek_distance = offset - self.next_sequential_read_offset;
        histogram!("prefetch.seek_distance", "dir" => "forward").record(total_seek_distance as f64);

        let Some(task) = self.backpressure_task.as_mut() else {
            // Can't seek if there's no requests in flight at all
            return Ok(false);
        };

        // Not enough data in the read window to serve the forward seek
        if offset >= task.read_window_end_offset() {
            return Ok(false);
        }

        // If we have enough bytes already downloaded (`available`) to skip straight to this read, then do
        // it. Otherwise, we're willing to wait for the bytes to download only if they're coming "soon", where
        // soon is defined as up to `max_forward_seek_wait_distance` bytes ahead of the available offset.
        let available_offset = task.available_offset();
        let available_soon_offset = available_offset.saturating_add(self.config.max_forward_seek_wait_distance);
        if offset >= available_soon_offset {
            trace!(
                requested_offset = offset,
                available_offset = available_offset,
                "seek failed: not enough data available"
            );
            return Ok(false);
        }
        let mut seek_distance = offset - self.next_sequential_read_offset;
        while seek_distance > 0 {
            let part = task.read(seek_distance as usize).await?;
            seek_distance -= part.len() as u64;
            self.next_sequential_read_offset += part.len() as u64;
            self.backward_seek_window.push(part);
        }
        Ok(true)
    }

    async fn try_seek_backward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset < self.next_sequential_read_offset);

        // When the task is None it means either we have just started prefetching or recently reset it,
        // in both cases the backward seek window would be empty so we can bail out early.
        let Some(task) = self.backpressure_task.as_mut() else {
            return Ok(false);
        };
        let backwards_length_needed = self.next_sequential_read_offset - offset;
        histogram!("prefetch.seek_distance", "dir" => "backward").record(backwards_length_needed as f64);

        let Some(parts) = self.backward_seek_window.read_back(backwards_length_needed as usize) else {
            trace!("seek failed: not enough data in backwards seek window");
            return Ok(false);
        };
        // This also increase `prefetcher_mem_reserved` value in memory limiter.
        // At least one subsequent `RequestTask::read` is required for memory tracking to work correctly
        // because `BackpressureController::drop` needs to know the start offset of the part queue to
        // release the right amount of memory.
        task.push_front(parts).await?;
        self.next_sequential_read_offset = offset;
        Ok(true)
    }

    /// Record the end of a contiguous read.
    ///
    /// This should be invoked at the end of each set of contiguous reads, including if no further read occurs.
    fn record_contiguous_read_metric(&self) {
        histogram!("prefetch.contiguous_read_len")
            .record((self.next_sequential_read_offset - self.sequential_read_start_offset) as f64);
    }
}

impl<Client> Drop for PrefetchGetObject<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    fn drop(&mut self) {
        self.record_contiguous_read_metric();
    }
}

#[cfg(test)]
mod tests {
    // It's convenient to write test constants like "1 * 1024 * 1024" for symmetry
    #![allow(clippy::identity_op)]

    use crate::Runtime;
    use crate::data_cache::InMemoryDataCache;
    use crate::mem_limiter::{MINIMUM_MEM_LIMIT, MemoryLimiter};
    use crate::sync::Arc;

    use super::*;
    use futures::executor::{ThreadPool, block_on};
    use mountpoint_s3_client::failure_client::{
        CountdownFailureConfig, GetObjectFailureMode, countdown_failure_client,
    };
    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig, MockClientError, MockObject, ramp_bytes};
    use mountpoint_s3_client::types::ETag;
    use proptest::proptest;
    use proptest::strategy::{Just, Strategy};
    use proptest_derive::Arbitrary;
    use std::collections::HashMap;
    use test_case::test_case;

    const MB: usize = 1024 * 1024;

    #[derive(Debug, Arbitrary)]
    struct TestConfig {
        #[proptest(strategy = "16usize..1*1024*1024")]
        initial_read_window_size: usize,
        #[proptest(strategy = "16usize..1*1024*1024")]
        max_read_window_size: usize,
        #[proptest(strategy = "1usize..8usize")]
        sequential_prefetch_multiplier: usize,
        #[proptest(strategy = "16usize..2*1024*1024")]
        client_part_size: usize,
        #[proptest(strategy = "1u64..4*1024*1024")]
        max_forward_seek_wait_distance: u64,
        #[proptest(strategy = "1u64..4*1024*1024")]
        max_backward_seek_distance: u64,
        #[proptest(strategy = "16usize..1*1024*1024")]
        cache_block_size: usize,
    }

    enum PrefetcherType {
        Default,
        InMemoryCache(usize),
    }

    fn build_prefetcher<Client>(
        client: Client,
        prefetcher_type: PrefetcherType,
        prefetcher_config: PrefetcherConfig,
    ) -> Prefetcher<Client>
    where
        Client: ObjectClient + Clone + Send + Sync + 'static,
    {
        let mem_limiter = Arc::new(MemoryLimiter::new(client.clone(), MINIMUM_MEM_LIMIT));
        let runtime = Runtime::new(ThreadPool::builder().pool_size(1).create().unwrap());
        let builder = match prefetcher_type {
            PrefetcherType::Default => Prefetcher::default_builder(client),
            PrefetcherType::InMemoryCache(block_size) => {
                let cache = InMemoryDataCache::new(block_size as u64);
                Prefetcher::caching_builder(cache, client)
            }
        };
        builder.build(runtime, mem_limiter, prefetcher_config)
    }

    fn run_sequential_read_test(prefetcher_type: PrefetcherType, size: u64, read_size: usize, test_config: TestConfig) {
        let client = Arc::new(
            MockClient::config()
                .bucket("test-bucket")
                .part_size(test_config.client_part_size)
                .enable_backpressure(true)
                .initial_read_window_size(test_config.initial_read_window_size)
                .build(),
        );
        let object = MockObject::ramp(0xaa, size as usize, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher_config = PrefetcherConfig {
            max_read_window_size: test_config.max_read_window_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            max_forward_seek_wait_distance: test_config.max_forward_seek_wait_distance,
            max_backward_seek_distance: test_config.max_backward_seek_distance,
        };

        let prefetcher = build_prefetcher(client.clone(), prefetcher_type, prefetcher_config);
        let object_id = ObjectId::new("hello".to_owned(), etag);
        let mut request = prefetcher.prefetch("test-bucket".to_owned(), object_id, size);

        let mut next_offset = 0;
        loop {
            let buf = block_on(request.read(next_offset, read_size)).unwrap();
            if buf.is_empty() {
                break;
            }
            let buf = buf.into_bytes().unwrap();
            let expected = ramp_bytes((0xaa + next_offset) as usize, buf.len());
            assert_eq!(&buf[..], &expected[..buf.len()]);
            next_offset += buf.len() as u64;
        }
        assert_eq!(next_offset, size);
    }

    #[test_case(PrefetcherType::Default)]
    #[test_case(PrefetcherType::InMemoryCache(1 * MB))]
    fn sequential_read_small(prefetcher_type: PrefetcherType) {
        let config = TestConfig {
            initial_read_window_size: 256 * 1024,
            max_read_window_size: 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };
        run_sequential_read_test(prefetcher_type, 1024 * 1024 + 111, 1024 * 1024, config);
    }

    #[test_case(PrefetcherType::Default)]
    #[test_case(PrefetcherType::InMemoryCache(1 * MB))]
    fn sequential_read_medium(prefetcher_type: PrefetcherType) {
        let config = TestConfig {
            initial_read_window_size: 256 * 1024,
            max_read_window_size: 64 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };
        run_sequential_read_test(prefetcher_type, 16 * 1024 * 1024 + 111, 1024 * 1024, config);
    }

    #[test_case(PrefetcherType::Default)]
    #[test_case(PrefetcherType::InMemoryCache(1 * MB))]
    fn sequential_read_large(prefetcher_type: PrefetcherType) {
        let config = TestConfig {
            initial_read_window_size: 256 * 1024,
            max_read_window_size: 64 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };

        run_sequential_read_test(prefetcher_type, 256 * 1024 * 1024 + 111, 1024 * 1024, config);
    }

    fn fail_with_backpressure_precondition_test(
        prefetcher_type: PrefetcherType,
        test_config: TestConfig,
        client_config: MockClientConfig,
    ) {
        let client = Arc::new(MockClient::new(client_config));
        let read_size = 1 * MB;
        let object_size = 8 * MB;
        let object = MockObject::ramp(0xaa, object_size, ETag::for_tests());
        let etag = object.etag();

        let prefetcher_config = PrefetcherConfig {
            max_read_window_size: test_config.max_read_window_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            ..Default::default()
        };

        let prefetcher = build_prefetcher(client, prefetcher_type, prefetcher_config);
        let object_id = ObjectId::new("hello".to_owned(), etag);
        let mut request = prefetcher.prefetch("test-bucket".to_owned(), object_id, object_size as u64);
        let result = block_on(request.read(0, read_size));
        assert!(matches!(result, Err(PrefetchReadError::BackpressurePreconditionFailed)));
    }

    #[test_case(PrefetcherType::Default)]
    #[test_case(PrefetcherType::InMemoryCache(1 * MB))]
    fn fail_with_backpressure_not_enabled(prefetcher_type: PrefetcherType) {
        let test_config = TestConfig {
            initial_read_window_size: 256 * 1024,
            max_read_window_size: 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };

        // backpressure is not enabled for the client
        let config = MockClient::config()
            .bucket("test-bucket")
            .part_size(test_config.client_part_size)
            .enable_backpressure(false);

        fail_with_backpressure_precondition_test(prefetcher_type, test_config, config);
    }

    #[test_case(PrefetcherType::Default)]
    #[test_case(PrefetcherType::InMemoryCache(1 * MB))]
    fn fail_with_backpressure_zero_read_window(prefetcher_type: PrefetcherType) {
        let test_config = TestConfig {
            initial_read_window_size: 256 * 1024,
            max_read_window_size: 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };

        // backpressure is enabled but initial read window size is zero
        let config = MockClient::config()
            .bucket("test-bucket")
            .part_size(test_config.client_part_size)
            .enable_backpressure(true)
            .initial_read_window_size(0);

        fail_with_backpressure_precondition_test(prefetcher_type, test_config, config);
    }

    fn fail_sequential_read_test(
        prefetcher_type: PrefetcherType,
        size: u64,
        read_size: usize,
        test_config: TestConfig,
        get_failures: HashMap<usize, GetObjectFailureMode<MockClientError>>,
    ) {
        let client = MockClient::config()
            .bucket("test-bucket")
            .part_size(test_config.client_part_size)
            .enable_backpressure(true)
            .initial_read_window_size(test_config.initial_read_window_size)
            .build();
        let object = MockObject::ramp(0xaa, size as usize, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let client = Arc::new(countdown_failure_client(
            client,
            CountdownFailureConfig {
                get_failures,
                ..Default::default()
            },
        ));

        let prefetcher_config = PrefetcherConfig {
            max_read_window_size: test_config.max_read_window_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            ..Default::default()
        };

        let prefetcher = build_prefetcher(client, prefetcher_type, prefetcher_config);
        let object_id = ObjectId::new("hello".to_owned(), etag);
        let mut request = prefetcher.prefetch("test-bucket".to_owned(), object_id, size);

        let mut next_offset = 0;
        loop {
            let buf = match block_on(request.read(next_offset, read_size)) {
                Ok(buf) => buf,
                Err(_) => break,
            };
            let buf = buf.into_bytes().unwrap();

            if buf.is_empty() {
                break;
            }
            let expected = ramp_bytes((0xaa + next_offset) as usize, buf.len());
            assert_eq!(&buf[..], &expected[..buf.len()]);
            next_offset += buf.len() as u64;
        }
        assert!(next_offset < size); // Since we're injecting failures, shouldn't make it to the end
    }

    #[test_case("invalid range; length=42", PrefetcherType::Default)]
    #[test_case("invalid range; length=42", PrefetcherType::InMemoryCache(1 * MB))]
    // test case for the request failure due to etag not matching
    #[test_case(
        "At least one of the pre-conditions you specified did not hold",
        PrefetcherType::Default
    )]
    #[test_case("At least one of the pre-conditions you specified did not hold", PrefetcherType::InMemoryCache(1 * MB))]
    fn fail_request_sequential_small(err_value: &str, prefetcher_type: PrefetcherType) {
        let config = TestConfig {
            initial_read_window_size: 256 * 1024,
            max_read_window_size: 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };

        let mut get_failures = HashMap::new();
        get_failures.insert(
            2,
            GetObjectFailureMode::OperationError(ObjectClientError::ClientError(MockClientError(
                err_value.to_owned().into(),
            ))),
        );

        fail_sequential_read_test(prefetcher_type, 1024 * 1024 + 111, 1024 * 1024, config, get_failures);
    }

    proptest! {
        #[test]
        fn proptest_sequential_read(
            size in 1u64..1 * 1024 * 1024,
            read_size in 1usize..1 * 1024 * 1024,
            config: TestConfig,
        ) {
            run_sequential_read_test(PrefetcherType::Default, size, read_size, config);
        }

        #[test]
        fn proptest_sequential_read_small_read_size(size in 1u64..1 * 1024 * 1024, read_factor in 1usize..10, config: TestConfig) {
            // Pick read size smaller than the object size
            let read_size = (size as usize / read_factor).max(1);
            run_sequential_read_test(PrefetcherType::Default, size, read_size, config);
        }

        #[test]
        fn proptest_sequential_read_with_cache(
            size in 1u64..1 * 1024 * 1024,
            read_size in 1usize..1 * 1024 * 1024,
            config: TestConfig,
        ) {
            run_sequential_read_test(PrefetcherType::InMemoryCache(config.cache_block_size), size, read_size, config);
        }

        #[test]
        fn proptest_sequential_read_small_read_size_with_cache(size in 1u64..1 * 1024 * 1024, read_factor in 1usize..10,
            config: TestConfig) {
            // Pick read size smaller than the object size
            let read_size = (size as usize / read_factor).max(1);
            run_sequential_read_test(PrefetcherType::InMemoryCache(config.cache_block_size), size, read_size, config);
        }
    }

    #[test]
    fn test_sequential_read_regression() {
        let object_size = 854966;
        let read_size = 161647;
        let config = TestConfig {
            initial_read_window_size: 484941,
            max_read_window_size: 81509,
            sequential_prefetch_multiplier: 1,
            client_part_size: 181682,
            max_forward_seek_wait_distance: 1,
            max_backward_seek_distance: 18668,
            cache_block_size: 1 * MB,
        };
        run_sequential_read_test(PrefetcherType::Default, object_size, read_size, config);
    }

    fn run_random_read_test(
        prefetcher_type: PrefetcherType,
        object_size: u64,
        reads: Vec<(u64, usize)>,
        test_config: TestConfig,
    ) {
        let client = Arc::new(
            MockClient::config()
                .bucket("test-bucket")
                .part_size(test_config.client_part_size)
                .enable_backpressure(true)
                .initial_read_window_size(test_config.initial_read_window_size)
                .build(),
        );
        let object = MockObject::ramp(0xaa, object_size as usize, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher_config = PrefetcherConfig {
            max_read_window_size: test_config.max_read_window_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            max_forward_seek_wait_distance: test_config.max_forward_seek_wait_distance,
            max_backward_seek_distance: test_config.max_backward_seek_distance,
        };

        let prefetcher = build_prefetcher(client, prefetcher_type, prefetcher_config);
        let object_id = ObjectId::new("hello".to_owned(), etag);
        let mut request = prefetcher.prefetch("test-bucket".to_owned(), object_id, object_size);

        for (offset, length) in reads {
            assert!(offset < object_size);
            assert!(offset + length as u64 <= object_size);
            let expected = ramp_bytes((0xaa + offset) as usize, length);
            let buf = block_on(request.read(offset, length)).unwrap();
            let buf = buf.into_bytes().unwrap();
            assert_eq!(buf.len(), expected.len());
            // Don't spew the giant buffer if this test fails
            if buf[..] != expected[..] {
                for i in 0..buf.len() {
                    if buf[i] != expected[i] {
                        panic!(
                            "buffer mismatch at offset {}, saw {} expected {}",
                            i, buf[i], expected[i]
                        );
                    }
                }
            }
        }
    }

    fn random_read_strategy(max_object_size: u64) -> impl Strategy<Value = (u64, Vec<(u64, usize)>)> {
        (1..=max_object_size).prop_flat_map(|object_size| {
            (
                Just(object_size),
                proptest::collection::vec(
                    (0..object_size).prop_flat_map(move |offset| {
                        (1..=object_size - offset).prop_map(move |length| (offset, length as usize))
                    }),
                    0..10,
                ),
            )
        })
    }

    proptest! {
        #[test]
        fn proptest_random_read(
            reads in random_read_strategy(1 * 1024 * 1024),
            config: TestConfig,
        ) {
            let (object_size, reads) = reads;
            run_random_read_test(PrefetcherType::Default, object_size, reads, config);
        }

        #[test]
        fn proptest_random_read_with_cache(
            reads in random_read_strategy(1 * 1024 * 1024),
            config: TestConfig,
        ) {
            let (object_size, reads) = reads;
            run_random_read_test(PrefetcherType::InMemoryCache(config.cache_block_size), object_size, reads, config);
        }
    }

    #[test]
    fn test_random_read_regression() {
        let object_size = 724314;
        let reads = vec![(0, 516883)];
        let config = TestConfig {
            initial_read_window_size: 3684779,
            max_read_window_size: 2147621,
            sequential_prefetch_multiplier: 4,
            client_part_size: 516882,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };
        run_random_read_test(PrefetcherType::Default, object_size, reads, config);
    }

    #[test]
    fn test_random_read_regression2() {
        let object_size = 755678;
        let reads = vec![(0, 278499), (311250, 1)];
        let config = TestConfig {
            initial_read_window_size: 556997,
            max_read_window_size: 105938,
            sequential_prefetch_multiplier: 7,
            client_part_size: 1219731,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };
        run_random_read_test(PrefetcherType::Default, object_size, reads, config);
    }

    #[test]
    fn test_random_read_regression3() {
        let object_size = 755678;
        let reads = vec![(0, 236766), (291204, 1), (280930, 36002)];
        let config = TestConfig {
            initial_read_window_size: 556997,
            max_read_window_size: 105938,
            sequential_prefetch_multiplier: 7,
            client_part_size: 1219731,
            max_forward_seek_wait_distance: 2260662,
            max_backward_seek_distance: 2369799,
            cache_block_size: 1 * MB,
        };
        run_random_read_test(PrefetcherType::Default, object_size, reads, config);
    }

    #[test]
    fn test_random_read_regression4() {
        let object_size = 14201;
        let reads = vec![(3584, 1), (9424, 1460), (3582, 3340), (248, 9218)];
        let config = TestConfig {
            initial_read_window_size: 457999,
            max_read_window_size: 863511,
            sequential_prefetch_multiplier: 5,
            client_part_size: 1972409,
            max_forward_seek_wait_distance: 2810651,
            max_backward_seek_distance: 3531090,
            cache_block_size: 1 * MB,
        };
        run_random_read_test(PrefetcherType::Default, object_size, reads, config);
    }

    #[test]
    fn test_forward_seek_failure() {
        const PART_SIZE: usize = 8192;
        const OBJECT_SIZE: usize = 2 * PART_SIZE;

        let client = MockClient::config()
            .bucket("test-bucket")
            .part_size(PART_SIZE)
            .enable_backpressure(true)
            .initial_read_window_size(OBJECT_SIZE)
            .build();
        let object = MockObject::ramp(0xaa, OBJECT_SIZE, ETag::for_tests());
        let etag = object.etag();
        client.add_object("hello", object);

        let mut get_failures = HashMap::new();
        get_failures.insert(
            1,
            GetObjectFailureMode::StreamPositionError(
                2,
                ObjectClientError::ClientError(MockClientError(
                    "error in the second chunk of the first request".into(),
                )),
            ),
        );
        get_failures.insert(
            2,
            GetObjectFailureMode::OperationError(ObjectClientError::ClientError(MockClientError(
                "error in second request".into(),
            ))),
        );

        let client = Arc::new(countdown_failure_client(
            client,
            CountdownFailureConfig {
                get_failures,
                ..Default::default()
            },
        ));
        let prefetcher = build_prefetcher(client, PrefetcherType::Default, Default::default());
        block_on(async {
            let object_id = ObjectId::new("hello".to_owned(), etag.clone());
            let mut request = prefetcher.prefetch("test-bucket".to_owned(), object_id, OBJECT_SIZE as u64);

            // The first read should trigger the prefetcher to try and get the whole object (in 2 parts).
            _ = request.read(0, 1).await.expect("first read should succeed");

            // Seek to the second part (where we injected a failure).
            let offset = PART_SIZE + 1;
            _ = request.read(offset as u64, 1).await.expect_err("seek should fail");

            // A retry should trigger a new request (also failing).
            _ = request
                .read(offset as u64, 1)
                .await
                .expect_err("first retry after failure should fail");

            // New retry should succeed (no more failures injected).
            let byte = request
                .read(offset as u64, 1)
                .await
                .expect("second retry should succeed");
            let expected = ramp_bytes(0xaa + offset, 1);
            assert_eq!(byte.into_bytes().unwrap()[..], expected[..]);
        });
    }

    #[test_case(PrefetcherType::Default)]
    #[test_case(PrefetcherType::InMemoryCache(8192))]
    fn test_short_read_failure(prefetcher_type: PrefetcherType) {
        const PART_SIZE: usize = 8192;
        const OBJECT_SIZE: usize = 2 * PART_SIZE;

        let client = MockClient::config()
            .bucket("test-bucket")
            .part_size(PART_SIZE)
            .enable_backpressure(true)
            .initial_read_window_size(PART_SIZE)
            .build();
        let object = MockObject::ramp(0xaa, OBJECT_SIZE, ETag::for_tests());
        let etag = object.etag();
        client.add_object("hello", object);

        let mut get_failures = HashMap::new();
        // On first request, terminate the stream without producing any data
        get_failures.insert(1, GetObjectFailureMode::StreamShortCircuit(1));
        // On third request (second request of second prefetcher),
        // terminate the stream early without producing all the requested data
        get_failures.insert(3, GetObjectFailureMode::StreamShortCircuit(1));

        let client = Arc::new(countdown_failure_client(
            client,
            CountdownFailureConfig {
                get_failures,
                ..Default::default()
            },
        ));
        let prefetcher = build_prefetcher(client, prefetcher_type, Default::default());

        block_on(async {
            let object_id = ObjectId::new("hello".to_owned(), etag.clone());
            let mut request = prefetcher.prefetch("test-bucket".to_owned(), object_id, OBJECT_SIZE as u64);

            // First read will terminate early
            assert!(matches!(
                request.read(0, 10).await.expect_err("read should fail"),
                PrefetchReadError::GetRequestTerminatedUnexpectedly,
            ));

            // Second read will return first part, but then terminate early before returning the remaining parts
            let bytes = request.read(0, PART_SIZE).await.unwrap();
            let expected = ramp_bytes(0xaa, PART_SIZE);
            assert_eq!(bytes.into_bytes().unwrap()[..], expected[..]);
            _ = request
                .read(PART_SIZE as u64, PART_SIZE)
                .await
                .expect_err("read should fail");

            // There are no more failures injected, since the prefetcher will reset on failure, now we should be able to read the whole data.
            let bytes = request.read(0, OBJECT_SIZE).await.unwrap();
            let expected = ramp_bytes(0xaa, OBJECT_SIZE);
            assert_eq!(bytes.into_bytes().unwrap()[..], expected[..]);

            // Shouldn't fail if the short read is due to object size not due to the stream terminating early
            let bytes = request.read(PART_SIZE as u64, OBJECT_SIZE).await.unwrap();
            let expected = ramp_bytes(0xaa + PART_SIZE, PART_SIZE);
            assert_eq!(bytes.into_bytes().unwrap()[..], expected[..]);
        });
    }

    #[test_case(0, 25; "no first read")]
    #[test_case(60, 25; "read beyond first part")]
    #[test_case(20, 25; "read in first part")]
    #[test_case(125, 110; "read in second request")]
    fn test_forward_seek(first_read_size: usize, part_size: usize) {
        const OBJECT_SIZE: usize = 200;
        const FIRST_REQUEST_SIZE: usize = 100;

        let client = Arc::new(
            MockClient::config()
                .bucket("test-bucket")
                .part_size(part_size)
                .enable_backpressure(true)
                .initial_read_window_size(FIRST_REQUEST_SIZE)
                .build(),
        );
        let object = MockObject::ramp(0xaa, OBJECT_SIZE, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher = build_prefetcher(client, PrefetcherType::Default, Default::default());

        // Try every possible seek from first_read_size
        for offset in first_read_size + 1..OBJECT_SIZE {
            let object_id = ObjectId::new("hello".to_owned(), etag.clone());
            let mut request = prefetcher.prefetch("test-bucket".to_owned(), object_id, OBJECT_SIZE as u64);
            if first_read_size > 0 {
                let _first_read = block_on(request.read(0, first_read_size)).unwrap();
            }

            let byte = block_on(request.read(offset as u64, 1)).unwrap();
            let expected = ramp_bytes(0xaa + offset, 1);
            assert_eq!(byte.into_bytes().unwrap()[..], expected[..]);
        }
    }

    #[test_case(60, 25; "read beyond first part")]
    #[test_case(20, 25; "read in first part")]
    #[test_case(125, 110; "read in second request")]
    fn test_backward_seek(first_read_size: usize, part_size: usize) {
        const OBJECT_SIZE: usize = 200;

        let client = Arc::new(
            MockClient::config()
                .bucket("test-bucket")
                .part_size(part_size)
                .enable_backpressure(true)
                .initial_read_window_size(part_size)
                .build(),
        );
        let object = MockObject::ramp(0xaa, OBJECT_SIZE, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher = build_prefetcher(client, PrefetcherType::Default, Default::default());

        // Try every possible seek from first_read_size
        for offset in 0..first_read_size {
            let object_id = ObjectId::new("hello".to_owned(), etag.clone());
            let mut request = prefetcher.prefetch("test-bucket".to_owned(), object_id, OBJECT_SIZE as u64);
            if first_read_size > 0 {
                let _first_read = block_on(request.read(0, first_read_size)).unwrap();
            }

            let byte = block_on(request.read(offset as u64, 1)).unwrap();
            let expected = ramp_bytes(0xaa + offset, 1);
            assert_eq!(byte.into_bytes().unwrap()[..], expected[..]);
        }
    }

    #[cfg(feature = "shuttle")]
    mod shuttle_tests {
        use super::*;
        use futures::task::{FutureObj, Spawn, SpawnError};
        use shuttle::future::block_on;
        use shuttle::rand::Rng;
        use shuttle::{check_pct, check_random};

        struct ShuttleRuntime;
        impl Spawn for ShuttleRuntime {
            fn spawn_obj(&self, future: FutureObj<'static, ()>) -> Result<(), SpawnError> {
                shuttle::future::spawn(future);
                Ok(())
            }
        }

        fn sequential_read_stress_helper() {
            let mut rng = shuttle::rand::thread_rng();
            let object_size = rng.gen_range(1u64..1 * 1024 * 1024);
            let max_read_window_size = rng.gen_range(16usize..1 * 1024 * 1024);
            let sequential_prefetch_multiplier = rng.gen_range(2usize..16);
            let part_size = rng.gen_range(16usize..1 * 1024 * 1024 + 128 * 1024);
            let initial_read_window_size = rng.gen_range(16usize..1 * 1024 * 1024 + 128 * 1024);
            let max_forward_seek_wait_distance = rng.gen_range(16u64..1 * 1024 * 1024 + 256 * 1024);
            let max_backward_seek_distance = rng.gen_range(16u64..1 * 1024 * 1024 + 256 * 1024);

            let client = Arc::new(
                MockClient::config()
                    .bucket("test-bucket")
                    .part_size(part_size)
                    .enable_backpressure(true)
                    .initial_read_window_size(initial_read_window_size)
                    .build(),
            );
            let mem_limiter = Arc::new(MemoryLimiter::new(client.clone(), MINIMUM_MEM_LIMIT));
            let object = MockObject::ramp(0xaa, object_size as usize, ETag::for_tests());
            let file_etag = object.etag();

            client.add_object("hello", object);

            let prefetcher_config = PrefetcherConfig {
                max_read_window_size,
                sequential_prefetch_multiplier,
                max_forward_seek_wait_distance,
                max_backward_seek_distance,
            };

            let prefetcher =
                Prefetcher::default_builder(client).build(Runtime::new(ShuttleRuntime), mem_limiter, prefetcher_config);
            let object_id = ObjectId::new("hello".to_owned(), file_etag);
            let mut request = prefetcher.prefetch("test-bucket".to_owned(), object_id, object_size);

            let mut next_offset = 0;
            loop {
                let read_size = rng.gen_range(1usize..1 * 1024 * 1024);
                let buf = block_on(request.read(next_offset, read_size)).unwrap();
                if buf.is_empty() {
                    break;
                }
                let buf = buf.into_bytes().unwrap();
                let expected = ramp_bytes((0xaa + next_offset) as usize, buf.len());
                assert_eq!(&buf[..], &expected[..buf.len()]);
                next_offset += buf.len() as u64;
            }
            assert_eq!(next_offset, object_size);
        }

        #[test]
        fn sequential_read_stress() {
            check_random(sequential_read_stress_helper, 1000);
            check_pct(sequential_read_stress_helper, 1000, 3);
        }

        fn random_read_stress_helper() {
            let mut rng = shuttle::rand::thread_rng();
            let max_read_window_size = rng.gen_range(16usize..32 * 1024);
            let sequential_prefetch_multiplier = rng.gen_range(2usize..16);
            let part_size = rng.gen_range(16usize..128 * 1024);
            let initial_read_window_size = rng.gen_range(16usize..128 * 1024);
            let max_forward_seek_wait_distance = rng.gen_range(16u64..192 * 1024);
            let max_backward_seek_distance = rng.gen_range(16u64..192 * 1024);
            // Try to prevent testing very small reads of very large objects, which are easy to OOM
            // under Shuttle (lots of concurrent tasks)
            let max_object_size = initial_read_window_size.min(max_read_window_size) * 20;
            let object_size = rng.gen_range(1u64..(64 * 1024).min(max_object_size) as u64);

            let client = Arc::new(
                MockClient::config()
                    .bucket("test-bucket")
                    .part_size(part_size)
                    .enable_backpressure(true)
                    .initial_read_window_size(initial_read_window_size)
                    .build(),
            );
            let mem_limiter = Arc::new(MemoryLimiter::new(client.clone(), MINIMUM_MEM_LIMIT));
            let object = MockObject::ramp(0xaa, object_size as usize, ETag::for_tests());
            let file_etag = object.etag();

            client.add_object("hello", object);

            let prefetcher_config = PrefetcherConfig {
                max_read_window_size,
                sequential_prefetch_multiplier,
                max_forward_seek_wait_distance,
                max_backward_seek_distance,
            };

            let prefetcher =
                Prefetcher::default_builder(client).build(Runtime::new(ShuttleRuntime), mem_limiter, prefetcher_config);
            let object_id = ObjectId::new("hello".to_owned(), file_etag);
            let mut request = prefetcher.prefetch("test-bucket".to_owned(), object_id, object_size);

            let num_reads = rng.gen_range(10usize..50);
            for _ in 0..num_reads {
                let offset = rng.gen_range(0u64..object_size);
                let length = rng.gen_range(1usize..(object_size - offset + 1) as usize);
                let expected = ramp_bytes((0xaa + offset) as usize, length);
                let buf = block_on(request.read(offset, length)).unwrap();
                let buf = buf.into_bytes().unwrap();
                assert_eq!(buf.len(), expected.len());
                // Don't spew the giant buffer if this test fails
                if buf[..] != expected[..] {
                    for i in 0..buf.len() {
                        if buf[i] != expected[i] {
                            panic!(
                                "buffer mismatch at offset {}, saw {} expected {}",
                                i, buf[i], expected[i]
                            );
                        }
                    }
                }
            }
        }

        #[test]
        fn random_read_stress() {
            check_random(random_read_stress_helper, 1000);
            check_pct(random_read_stress_helper, 1000, 3);
        }
    }
}
