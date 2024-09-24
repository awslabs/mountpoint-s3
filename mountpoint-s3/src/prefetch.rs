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

mod backpressure_controller;
mod caching_stream;
mod part;
mod part_queue;
mod part_stream;
mod seek_window;
mod task;

use std::fmt::Debug;
use std::time::Duration;

use async_trait::async_trait;
use futures::task::Spawn;
use metrics::{counter, histogram};
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_client::ObjectClient;
use part::PartOperationError;
use part_stream::RequestTaskConfig;
use thiserror::Error;
use tracing::trace;

use crate::checksums::{ChecksummedBytes, IntegrityError};
use crate::data_cache::DataCache;
use crate::object::ObjectId;
use crate::prefetch::caching_stream::CachingPartStream;
use crate::prefetch::part_stream::{ClientPartStream, ObjectPartStream, RequestRange};
use crate::prefetch::seek_window::SeekWindow;
use crate::prefetch::task::RequestTask;
use crate::sync::Arc;

/// Generic interface to handle reading data from an object.
pub trait Prefetch {
    type PrefetchResult<Client: ObjectClient + Send + Sync + 'static>: PrefetchResult<Client>;

    /// Start a new prefetch request to the specified object.
    fn prefetch<Client>(
        &self,
        client: Arc<Client>,
        bucket: &str,
        key: &str,
        size: u64,
        etag: ETag,
    ) -> Self::PrefetchResult<Client>
    where
        Client: ObjectClient + Send + Sync + 'static;
}

/// Result of a prefetch request. Allows callers to read object data.
#[async_trait]
pub trait PrefetchResult<Client: ObjectClient>: Send + Sync {
    /// Read some bytes from the object. This function will always return exactly `size` bytes,
    /// except at the end of the object where it will return however many bytes are left (including
    /// possibly 0 bytes).
    async fn read(
        &mut self,
        offset: u64,
        length: usize,
    ) -> Result<ChecksummedBytes, PrefetchReadError<Client::ClientError>>;
}

#[derive(Debug, Error)]
pub enum PrefetchReadError<E> {
    #[error("get object request failed")]
    GetRequestFailed(#[source] ObjectClientError<GetObjectError, E>),

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

pub type DefaultPrefetcher<Runtime> = Prefetcher<ClientPartStream<Runtime>>;

/// Creates an instance of the default [Prefetch].
pub fn default_prefetch<Runtime>(runtime: Runtime, prefetcher_config: PrefetcherConfig) -> DefaultPrefetcher<Runtime>
where
    Runtime: Spawn + Send + Sync + 'static,
{
    let part_stream = ClientPartStream::new(runtime);
    Prefetcher::new(part_stream, prefetcher_config)
}

pub type CachingPrefetcher<Cache, Runtime> = Prefetcher<CachingPartStream<Cache, Runtime>>;

/// Creates an instance of a caching [Prefetch].
pub fn caching_prefetch<Cache, Runtime>(
    cache: Cache,
    runtime: Runtime,
    prefetcher_config: PrefetcherConfig,
) -> CachingPrefetcher<Cache, Runtime>
where
    Cache: DataCache + Send + Sync + 'static,
    Runtime: Spawn + Clone + Send + Sync + 'static,
{
    let part_stream = CachingPartStream::new(runtime, cache);
    Prefetcher::new(part_stream, prefetcher_config)
}

#[derive(Debug, Clone, Copy)]
pub struct PrefetcherConfig {
    /// Maximum size of the read window
    pub max_read_window_size: usize,
    /// Factor to increase the request size by whenever the reader continues making sequential reads
    pub sequential_prefetch_multiplier: usize,
    /// Timeout to wait for a part to become available
    pub read_timeout: Duration,
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
            sequential_prefetch_multiplier: 8,
            read_timeout: Duration::from_secs(60),
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
pub struct Prefetcher<Stream> {
    part_stream: Arc<Stream>,
    config: PrefetcherConfig,
}

impl<Stream> Prefetcher<Stream>
where
    Stream: ObjectPartStream,
{
    /// Create a new [Prefetcher] from the given [ObjectPartStream] instance.
    pub fn new(part_stream: Stream, config: PrefetcherConfig) -> Self {
        let part_stream = Arc::new(part_stream);
        Self { part_stream, config }
    }
}

impl<Stream> Prefetch for Prefetcher<Stream>
where
    Stream: ObjectPartStream + Send + Sync + 'static,
{
    type PrefetchResult<Client: ObjectClient + Send + Sync + 'static> = PrefetchGetObject<Stream, Client>;

    fn prefetch<Client>(
        &self,
        client: Arc<Client>,
        bucket: &str,
        key: &str,
        size: u64,
        etag: ETag,
    ) -> Self::PrefetchResult<Client>
    where
        Client: ObjectClient + Send + Sync + 'static,
    {
        PrefetchGetObject::new(
            client.clone(),
            self.part_stream.clone(),
            self.config,
            bucket,
            key,
            size,
            etag,
        )
    }
}

/// A GetObject request that divides the desired range of the object into chunks that it prefetches
/// in a way that maximizes throughput from S3.
#[derive(Debug)]
pub struct PrefetchGetObject<Stream: ObjectPartStream, Client: ObjectClient> {
    client: Arc<Client>,
    part_stream: Arc<Stream>,
    config: PrefetcherConfig,
    backpressure_task: Option<RequestTask<Client::ClientError>>,
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

#[async_trait]
impl<Stream, Client> PrefetchResult<Client> for PrefetchGetObject<Stream, Client>
where
    Stream: ObjectPartStream + Send + Sync + 'static,
    Client: ObjectClient + Send + Sync + 'static,
{
    /// Read some bytes from the object. This function will always return exactly `size` bytes,
    /// except at the end of the object where it will return however many bytes are left (including
    /// possibly 0 bytes).
    async fn read(
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
}

impl<Stream, Client> PrefetchGetObject<Stream, Client>
where
    Stream: ObjectPartStream,
    Client: ObjectClient + Send + Sync + 'static,
{
    /// Create and spawn a new prefetching request for an object
    fn new(
        client: Arc<Client>,
        part_stream: Arc<Stream>,
        config: PrefetcherConfig,
        bucket: &str,
        key: &str,
        size: u64,
        etag: ETag,
    ) -> Self {
        PrefetchGetObject {
            client,
            part_stream,
            config,
            backpressure_task: None,
            backward_seek_window: SeekWindow::new(config.max_backward_seek_distance as usize),
            preferred_part_size: 128 * 1024,
            sequential_read_start_offset: 0,
            next_sequential_read_offset: 0,
            next_request_offset: 0,
            bucket: bucket.to_owned(),
            object_id: ObjectId::new(key.to_owned(), etag),
            size,
        }
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
    ) -> Result<RequestTask<Client::ClientError>, PrefetchReadError<Client::ClientError>> {
        let start = self.next_sequential_read_offset;
        let object_size = self.size as usize;
        let range = RequestRange::new(object_size, start, object_size);

        // The prefetcher now relies on backpressure mechanism so it must be enabled
        let initial_read_window_size = match self.client.initial_read_window_size() {
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
            preferred_part_size: self.preferred_part_size,
            initial_read_window_size,
            max_read_window_size: self.config.max_read_window_size,
            read_window_size_multiplier: self.config.sequential_prefetch_multiplier,
        };
        Ok(self.part_stream.spawn_get_object_request(&self.client, config))
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
        task.push_front(parts).await?;
        self.next_sequential_read_offset = offset;
        Ok(true)
    }
}

impl<Stream: ObjectPartStream, Client: ObjectClient> PrefetchGetObject<Stream, Client> {
    /// Record the end of a contiguous read.
    ///
    /// This should be invoked at the end of each set of contiguous reads, including if no further read occurs.
    fn record_contiguous_read_metric(&self) {
        histogram!("prefetch.contiguous_read_len")
            .record((self.next_sequential_read_offset - self.sequential_read_start_offset) as f64);
    }
}

impl<Stream: ObjectPartStream, Client: ObjectClient> Drop for PrefetchGetObject<Stream, Client> {
    fn drop(&mut self) {
        self.record_contiguous_read_metric();
    }
}

#[cfg(test)]
mod tests {
    // It's convenient to write test constants like "1 * 1024 * 1024" for symmetry
    #![allow(clippy::identity_op)]

    use crate::data_cache::InMemoryDataCache;

    use super::caching_stream::CachingPartStream;
    use super::*;
    use futures::executor::{block_on, ThreadPool};
    use mountpoint_s3_client::error::GetObjectError;
    use mountpoint_s3_client::failure_client::{countdown_failure_client, RequestFailureMap};
    use mountpoint_s3_client::mock_client::{ramp_bytes, MockClient, MockClientConfig, MockClientError, MockObject};
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

    fn default_stream() -> ClientPartStream<ThreadPool> {
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        ClientPartStream::new(runtime)
    }

    fn caching_stream(block_size: usize) -> CachingPartStream<InMemoryDataCache, ThreadPool> {
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let cache = InMemoryDataCache::new(block_size as u64);
        CachingPartStream::new(runtime, cache)
    }

    fn run_sequential_read_test<Stream: ObjectPartStream + Send + Sync + 'static>(
        part_stream: Stream,
        size: u64,
        read_size: usize,
        test_config: TestConfig,
    ) {
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: test_config.client_part_size,
            enable_backpressure: true,
            initial_read_window_size: test_config.initial_read_window_size,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));
        let object = MockObject::ramp(0xaa, size as usize, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher_config = PrefetcherConfig {
            max_read_window_size: test_config.max_read_window_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            read_timeout: Duration::from_secs(5),
            max_forward_seek_wait_distance: test_config.max_forward_seek_wait_distance,
            max_backward_seek_distance: test_config.max_backward_seek_distance,
        };

        let prefetcher = Prefetcher::new(part_stream, prefetcher_config);
        let mut request = prefetcher.prefetch(client, "test-bucket", "hello", size, etag);

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

    #[test_case(default_stream())]
    #[test_case(caching_stream(1 * MB))]
    fn sequential_read_small<Stream>(part_stream: Stream)
    where
        Stream: ObjectPartStream + Send + Sync + 'static,
    {
        let config = TestConfig {
            initial_read_window_size: 256 * 1024,
            max_read_window_size: 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };
        run_sequential_read_test(part_stream, 1024 * 1024 + 111, 1024 * 1024, config);
    }

    #[test_case(default_stream())]
    #[test_case(caching_stream(1 * MB))]
    fn sequential_read_medium<Stream>(part_stream: Stream)
    where
        Stream: ObjectPartStream + Send + Sync + 'static,
    {
        let config = TestConfig {
            initial_read_window_size: 256 * 1024,
            max_read_window_size: 64 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };
        run_sequential_read_test(part_stream, 16 * 1024 * 1024 + 111, 1024 * 1024, config);
    }

    #[test_case(default_stream())]
    #[test_case(caching_stream(1 * MB))]
    fn sequential_read_large<Stream>(part_stream: Stream)
    where
        Stream: ObjectPartStream + Send + Sync + 'static,
    {
        let config = TestConfig {
            initial_read_window_size: 256 * 1024,
            max_read_window_size: 64 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_wait_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
            cache_block_size: 1 * MB,
        };

        run_sequential_read_test(part_stream, 256 * 1024 * 1024 + 111, 1024 * 1024, config);
    }

    fn fail_with_backpressure_precondition_test<Stream>(
        part_stream: Stream,
        test_config: TestConfig,
        client_config: MockClientConfig,
    ) where
        Stream: ObjectPartStream + Send + Sync + 'static,
    {
        let client = MockClient::new(client_config);
        let read_size = 1 * MB;
        let object_size = 8 * MB;
        let object = MockObject::ramp(0xaa, object_size, ETag::for_tests());
        let etag = object.etag();

        let prefetcher_config = PrefetcherConfig {
            max_read_window_size: test_config.max_read_window_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            ..Default::default()
        };

        let prefetcher = Prefetcher::new(part_stream, prefetcher_config);
        let mut request = prefetcher.prefetch(Arc::new(client), "test-bucket", "hello", object_size as u64, etag);
        let result = block_on(request.read(0, read_size));
        assert!(matches!(result, Err(PrefetchReadError::BackpressurePreconditionFailed)));
    }

    #[test_case(default_stream())]
    #[test_case(caching_stream(1 * MB))]
    fn fail_with_backpressure_not_enabled<Stream>(part_stream: Stream)
    where
        Stream: ObjectPartStream + Send + Sync + 'static,
    {
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
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: test_config.client_part_size,
            enable_backpressure: false,
            ..Default::default()
        };

        fail_with_backpressure_precondition_test(part_stream, test_config, config);
    }

    #[test_case(default_stream())]
    #[test_case(caching_stream(1 * MB))]
    fn fail_with_backpressure_zero_read_window<Stream>(part_stream: Stream)
    where
        Stream: ObjectPartStream + Send + Sync + 'static,
    {
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
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: test_config.client_part_size,
            enable_backpressure: true,
            initial_read_window_size: 0,
            ..Default::default()
        };

        fail_with_backpressure_precondition_test(part_stream, test_config, config);
    }

    fn fail_sequential_read_test<Stream: ObjectPartStream + Send + Sync + 'static>(
        part_stream: Stream,
        size: u64,
        read_size: usize,
        test_config: TestConfig,
        get_failures: RequestFailureMap<MockClient, GetObjectError>,
    ) {
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: test_config.client_part_size,
            enable_backpressure: true,
            initial_read_window_size: test_config.initial_read_window_size,
            ..Default::default()
        };
        let client = MockClient::new(config);
        let object = MockObject::ramp(0xaa, size as usize, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let client = countdown_failure_client(client, get_failures, HashMap::new(), HashMap::new(), HashMap::new());

        let prefetcher_config = PrefetcherConfig {
            max_read_window_size: test_config.max_read_window_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            ..Default::default()
        };

        let prefetcher = Prefetcher::new(part_stream, prefetcher_config);
        let mut request = prefetcher.prefetch(Arc::new(client), "test-bucket", "hello", size, etag);

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

    #[test_case("invalid range; length=42", default_stream())]
    #[test_case("invalid range; length=42", caching_stream(1 * MB))]
    // test case for the request failure due to etag not matching
    #[test_case("At least one of the pre-conditions you specified did not hold", default_stream())]
    #[test_case("At least one of the pre-conditions you specified did not hold", caching_stream(1 * MB))]
    fn fail_request_sequential_small<Stream>(err_value: &str, part_stream: Stream)
    where
        Stream: ObjectPartStream + Send + Sync + 'static,
    {
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
            Err(ObjectClientError::ClientError(MockClientError(
                err_value.to_owned().into(),
            ))),
        );

        fail_sequential_read_test(part_stream, 1024 * 1024 + 111, 1024 * 1024, config, get_failures);
    }

    proptest! {
        #[test]
        fn proptest_sequential_read(
            size in 1u64..1 * 1024 * 1024,
            read_size in 1usize..1 * 1024 * 1024,
            config: TestConfig,
        ) {
            run_sequential_read_test(default_stream(), size, read_size, config);
        }

        #[test]
        fn proptest_sequential_read_small_read_size(size in 1u64..1 * 1024 * 1024, read_factor in 1usize..10, config: TestConfig) {
            // Pick read size smaller than the object size
            let read_size = (size as usize / read_factor).max(1);
            run_sequential_read_test(default_stream(), size, read_size, config);
        }

        #[test]
        fn proptest_sequential_read_with_cache(
            size in 1u64..1 * 1024 * 1024,
            read_size in 1usize..1 * 1024 * 1024,
            config: TestConfig,
        ) {
            run_sequential_read_test(caching_stream(config.cache_block_size), size, read_size, config);
        }

        #[test]
        fn proptest_sequential_read_small_read_size_with_cache(size in 1u64..1 * 1024 * 1024, read_factor in 1usize..10,
            config: TestConfig) {
            // Pick read size smaller than the object size
            let read_size = (size as usize / read_factor).max(1);
            run_sequential_read_test(caching_stream(config.cache_block_size), size, read_size, config);
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
        run_sequential_read_test(default_stream(), object_size, read_size, config);
    }

    fn run_random_read_test<Stream: ObjectPartStream + Send + Sync + 'static>(
        part_stream: Stream,
        object_size: u64,
        reads: Vec<(u64, usize)>,
        test_config: TestConfig,
    ) {
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: test_config.client_part_size,
            enable_backpressure: true,
            initial_read_window_size: test_config.initial_read_window_size,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));
        let object = MockObject::ramp(0xaa, object_size as usize, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher_config = PrefetcherConfig {
            max_read_window_size: test_config.max_read_window_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            max_forward_seek_wait_distance: test_config.max_forward_seek_wait_distance,
            max_backward_seek_distance: test_config.max_backward_seek_distance,
            ..Default::default()
        };

        let prefetcher = Prefetcher::new(part_stream, prefetcher_config);
        let mut request = prefetcher.prefetch(client, "test-bucket", "hello", object_size, etag);

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
            run_random_read_test(default_stream(), object_size, reads, config);
        }

        #[test]
        fn proptest_random_read_with_cache(
            reads in random_read_strategy(1 * 1024 * 1024),
            config: TestConfig,
        ) {
            let (object_size, reads) = reads;
            run_random_read_test(caching_stream(config.cache_block_size), object_size, reads, config);
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
        run_random_read_test(default_stream(), object_size, reads, config);
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
        run_random_read_test(default_stream(), object_size, reads, config);
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
        run_random_read_test(default_stream(), object_size, reads, config);
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
        run_random_read_test(default_stream(), object_size, reads, config);
    }

    #[test]
    fn test_forward_seek_failure() {
        const PART_SIZE: usize = 8192;
        const OBJECT_SIZE: usize = 2 * PART_SIZE;

        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: PART_SIZE,
            enable_backpressure: true,
            // For simplicity, prefetch the whole object in one request.
            initial_read_window_size: OBJECT_SIZE,
            ..Default::default()
        };

        let client = MockClient::new(config);
        let object = MockObject::ramp(0xaa, OBJECT_SIZE, ETag::for_tests());
        let etag = object.etag();
        client.add_object("hello", object);

        let mut get_failures = HashMap::new();
        get_failures.insert(
            1,
            Ok((
                2,
                MockClientError("error in the second chunk of the first request".into()),
            )),
        );
        get_failures.insert(
            2,
            Err(ObjectClientError::ClientError(MockClientError(
                "error in second request".into(),
            ))),
        );

        let client = Arc::new(countdown_failure_client(
            client,
            get_failures,
            HashMap::new(),
            HashMap::new(),
            HashMap::new(),
        ));

        let prefetcher = Prefetcher::new(default_stream(), Default::default());
        block_on(async {
            let mut request = prefetcher.prefetch(client, "test-bucket", "hello", OBJECT_SIZE as u64, etag.clone());

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

    #[test_case(0, 25; "no first read")]
    #[test_case(60, 25; "read beyond first part")]
    #[test_case(20, 25; "read in first part")]
    #[test_case(125, 110; "read in second request")]
    fn test_forward_seek(first_read_size: usize, part_size: usize) {
        const OBJECT_SIZE: usize = 200;
        const FIRST_REQUEST_SIZE: usize = 100;

        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size,
            enable_backpressure: true,
            initial_read_window_size: FIRST_REQUEST_SIZE,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));
        let object = MockObject::ramp(0xaa, OBJECT_SIZE, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher = Prefetcher::new(default_stream(), Default::default());

        // Try every possible seek from first_read_size
        for offset in first_read_size + 1..OBJECT_SIZE {
            let mut request =
                prefetcher.prefetch(client.clone(), "test-bucket", "hello", OBJECT_SIZE as u64, etag.clone());
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

        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size,
            enable_backpressure: true,
            initial_read_window_size: part_size,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));
        let object = MockObject::ramp(0xaa, OBJECT_SIZE, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher = Prefetcher::new(default_stream(), Default::default());

        // Try every possible seek from first_read_size
        for offset in 0..first_read_size {
            let mut request =
                prefetcher.prefetch(client.clone(), "test-bucket", "hello", OBJECT_SIZE as u64, etag.clone());
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

            let config = MockClientConfig {
                bucket: "test-bucket".to_string(),
                part_size,
                enable_backpressure: true,
                initial_read_window_size,
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(config));
            let object = MockObject::ramp(0xaa, object_size as usize, ETag::for_tests());
            let file_etag = object.etag();

            client.add_object("hello", object);

            let prefetcher_config = PrefetcherConfig {
                max_read_window_size,
                sequential_prefetch_multiplier,
                max_forward_seek_wait_distance,
                max_backward_seek_distance,
                ..Default::default()
            };

            let prefetcher = Prefetcher::new(ClientPartStream::new(ShuttleRuntime), prefetcher_config);
            let mut request = prefetcher.prefetch(client, "test-bucket", "hello", object_size, file_etag);

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

            let config = MockClientConfig {
                bucket: "test-bucket".to_string(),
                part_size,
                enable_backpressure: true,
                initial_read_window_size,
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(config));
            let object = MockObject::ramp(0xaa, object_size as usize, ETag::for_tests());
            let file_etag = object.etag();

            client.add_object("hello", object);

            let prefetcher_config = PrefetcherConfig {
                max_read_window_size,
                sequential_prefetch_multiplier,
                max_forward_seek_wait_distance,
                max_backward_seek_distance,
                ..Default::default()
            };

            let prefetcher = Prefetcher::new(ClientPartStream::new(ShuttleRuntime), prefetcher_config);
            let mut request = prefetcher.prefetch(client, "test-bucket", "hello", object_size, file_etag);

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
