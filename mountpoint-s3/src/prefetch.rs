//! This module implements a prefetcher for GetObject requests.
//!
//! It works by making increasingly larger GetObject requests to the CRT. We want the chunks to be
//! large enough that they can make effective use of the CRT's fan-out parallelism across the S3
//! frontend, but small enough that we don't accumulate a lot of unread object data in memory or
//! wastefully download data we'll never read. As the reader continues to make sequential reads,
//! we increase the size of the GetObject requests up to some maximum. If the reader ever makes a
//! non-sequential read, we abandon the prefetching and start again with the minimum request size.

mod caching_stream;
mod part;
mod part_queue;
mod part_stream;
mod seek_window;
mod task;

use std::collections::VecDeque;
use std::fmt::Debug;
use std::time::Duration;

use async_trait::async_trait;
use futures::task::Spawn;
use metrics::{counter, histogram};
use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_client::ObjectClient;
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
    Runtime: Spawn + Send + Sync + 'static,
{
    let part_stream = CachingPartStream::new(runtime, cache);
    Prefetcher::new(part_stream, prefetcher_config)
}

#[derive(Debug, Clone, Copy)]
pub struct PrefetcherConfig {
    /// Size of the first request in a prefetch run
    pub first_request_size: usize,
    /// Maximum size of a single prefetch request
    pub max_request_size: usize,
    /// Factor to increase the request size by whenever the reader continues making sequential reads
    pub sequential_prefetch_multiplier: usize,
    /// Timeout to wait for a part to become available
    pub read_timeout: Duration,
    /// The maximum distance the prefetcher will seek forwards before resetting and starting a new
    /// S3 request
    pub max_forward_seek_distance: u64,
    /// The maximum distance the prefetcher will seek backwards before resetting and starting a new
    /// S3 request. We keep this much data in memory in addition to any inflight requests.
    pub max_backward_seek_distance: u64,
}

impl Default for PrefetcherConfig {
    fn default() -> Self {
        #[allow(clippy::identity_op)]
        Self {
            // This is a weird looking number! We really want our first request size to be 1MiB,
            // which is a common IO size. But Linux's readahead will try to read an extra 128k on on
            // top of a 1MiB read, which we'd have to wait for a second request to service. Because
            // FUSE doesn't know the difference between regular reads and readahead reads, it will
            // send us a READ request for that 128k, so we'll have to block waiting for it even if
            // the application doesn't want it. This is all in the noise for sequential IO, but
            // waiting for the readahead hurts random IO. So we add 128k to the first request size
            // to avoid the latency hit of the second request.
            first_request_size: 1 * 1024 * 1024 + 128 * 1024,
            max_request_size: 2 * 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            read_timeout: Duration::from_secs(60),
            // We want these large enough to tolerate a single out-of-order Linux readahead, which
            // is at most 256KiB backwards and then 512KiB forwards. For forwards seeks, we're also
            // making a guess about where the optimal cut-off point is before it would be faster to
            // just start a new request instead.
            max_forward_seek_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 1 * 1024 * 1024,
        }
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
    // Invariant: the offset of the first byte in this task's part queue is always
    // self.next_sequential_read_offset.
    current_task: Option<RequestTask<Client::ClientError>>,
    // Currently we only every spawn at most one future task (see [spawn_next_request])
    future_tasks: VecDeque<RequestTask<Client::ClientError>>,
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
    next_request_size: usize,
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

        self.prepare_requests();

        let mut response = ChecksummedBytes::default();
        while to_read > 0 {
            let Some(current_task) = self.current_task.as_mut() else {
                // If [prepare_requests] didn't spawn a request, we've reached the end of the object.
                trace!(offset, length, "read beyond object size");
                break;
            };
            debug_assert!(current_task.remaining() > 0);

            let part = match current_task.read(to_read as usize).await {
                Err(e) => {
                    self.reset_prefetch_to_offset(offset);
                    return Err(e);
                }
                Ok(part) => part,
            };
            self.backward_seek_window.push(part.clone());
            let part_bytes = part
                .into_bytes(&self.object_id, self.next_sequential_read_offset)
                .unwrap();

            self.next_sequential_read_offset += part_bytes.len() as u64;
            self.prepare_requests();

            // If we can complete the read with just a single buffer, early return to avoid copying
            // into a new buffer. This should be the common case as long as part size is larger than
            // read size, which it almost always is for real S3 clients and FUSE.
            if response.is_empty() && part_bytes.len() == to_read as usize {
                return Ok(part_bytes);
            }

            let part_len = part_bytes.len() as u64;
            let result = response.extend(part_bytes);
            match result {
                Ok(()) => {}
                Err(e @ IntegrityError::ChecksumMismatch(_, _)) => {
                    // cancel inflight tasks
                    self.current_task = None;
                    self.future_tasks.drain(..);
                    return Err(e.into());
                }
            }
            to_read -= part_len;
        }

        Ok(response)
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
            current_task: None,
            future_tasks: Default::default(),
            backward_seek_window: SeekWindow::new(config.max_backward_seek_distance as usize),
            preferred_part_size: 128 * 1024,
            sequential_read_start_offset: 0,
            next_sequential_read_offset: 0,
            next_request_size: config.first_request_size,
            next_request_offset: 0,
            bucket: bucket.to_owned(),
            object_id: ObjectId::new(key.to_owned(), etag),
            size,
        }
    }

    /// Runs on every read to prepare and spawn any requests our prefetching logic requires
    fn prepare_requests(&mut self) {
        let current_task = self.current_task.as_ref();
        if current_task.map(|task| task.remaining() == 0).unwrap_or(true) {
            // There's no current task, or the current task is finished. Prepare the next request.
            if let Some(next_task) = self.future_tasks.pop_front() {
                self.current_task = Some(next_task);
                return;
            }
            self.current_task = self.spawn_next_request();
        } else if current_task
            .map(|task| {
                // Don't trigger prefetch if we're in a fake task created by backward streaming
                task.is_streaming() && task.remaining() <= task.total_size() / 2
            })
            .unwrap_or(false)
            && self.future_tasks.is_empty()
        {
            // The current task is nearing completion, so pre-spawn the next request in anticipation
            // of it completing.
            if let Some(task) = self.spawn_next_request() {
                self.future_tasks.push_back(task);
            }
        }
    }

    /// Spawn the next required request
    fn spawn_next_request(&mut self) -> Option<RequestTask<Client::ClientError>> {
        let start = self.next_request_offset;
        if start >= self.size {
            return None;
        }

        let range = RequestRange::new(self.size as usize, start, self.next_request_size);
        let task = self.part_stream.spawn_get_object_request(
            &self.client,
            &self.bucket,
            self.object_id.key(),
            self.object_id.etag().clone(),
            range,
            self.preferred_part_size,
        );

        // [read] will reset these if the reader stops making sequential requests
        self.next_request_offset += task.total_size() as u64;
        self.next_request_size = self.get_next_request_size(task.total_size());

        Some(task)
    }

    /// Suggest next request size.
    /// The next request size is the current request size multiplied by sequential prefetch multiplier.
    fn get_next_request_size(&self, request_size: usize) -> usize {
        // TODO: this logic doesn't work well right now in the case where part_size <
        // first_request_size and sequential_prefetch_multiplier = 1. It ends up just repeatedly
        // shrinking the request size until it reaches 1. But this isn't a configuration we
        // currently expect to ever run in (part_size will always be >= 5MB for MPU reasons, and a
        // prefetcher with multiplier 1 is not very good).
        (request_size * self.config.sequential_prefetch_multiplier).min(self.config.max_request_size)
    }

    /// Reset this prefetch request to a new offset, clearing any existing tasks queued.
    fn reset_prefetch_to_offset(&mut self, offset: u64) {
        self.current_task = None;
        self.future_tasks.drain(..);
        self.backward_seek_window.clear();
        self.sequential_read_start_offset = offset;
        self.next_sequential_read_offset = offset;
        self.next_request_size = self.config.first_request_size;
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
            self.try_seek_backward(offset)
        }
    }

    async fn try_seek_forward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset > self.next_sequential_read_offset);
        let total_seek_distance = offset - self.next_sequential_read_offset;
        let Some(current_task) = self.current_task.as_mut() else {
            // Can't seek if there's no requests in flight at all
            return Ok(false);
        };

        // Jump ahead to the right request
        if total_seek_distance >= current_task.remaining() as u64 {
            self.next_sequential_read_offset += current_task.remaining() as u64;
            self.current_task = None;
            while let Some(next_request) = self.future_tasks.pop_front() {
                if next_request.end_offset() > offset {
                    self.current_task = Some(next_request);
                    break;
                } else {
                    self.next_sequential_read_offset = next_request.end_offset();
                }
            }

            if self.current_task.is_none() {
                // No inflight task containing the target offset.
                trace!(current_offset=?self.next_sequential_read_offset, requested_offset=?offset, "seek failed: not enough inflight data");
                return Ok(false);
            }

            // We could try harder to preserve the backwards seek buffer if we're near the
            // request boundary, but it's probably not worth the trouble.
            self.backward_seek_window.clear();
        }
        let mut seek_distance = offset - self.next_sequential_read_offset;

        let current_task = self
            .current_task
            .as_mut()
            .expect("a request existed that covered this seek offset");
        while seek_distance > 0 {
            let part = current_task.read(seek_distance as usize).await?;
            seek_distance -= part.len() as u64;
            self.next_sequential_read_offset += part.len() as u64;
            self.backward_seek_window.push(part);
        }

        histogram!("prefetch.seek_distance", "dir" => "forward").record(total_seek_distance as f64);

        Ok(true)
    }

    fn try_seek_backward(&mut self, offset: u64) -> Result<bool, PrefetchReadError<Client::ClientError>> {
        assert!(offset < self.next_sequential_read_offset);
        let backwards_length_needed = self.next_sequential_read_offset - offset;
        let Some(parts) = self.backward_seek_window.read_back(backwards_length_needed as usize) else {
            trace!("seek failed: not enough data in backwards seek window");
            return Ok(false);
        };
        // We're going to create a new fake "request" that contains the parts we read out of the
        // window. That sounds a bit hacky, but it keeps all the read logic simple rather than
        // needing separate paths for backwards seeks vs others.
        let request = RequestTask::from_parts(parts, offset);
        if let Some(current_task) = self.current_task.take() {
            self.future_tasks.push_front(current_task);
        }
        self.current_task = Some(request);
        self.next_sequential_read_offset = offset;

        histogram!("prefetch.seek_distance", "dir" => "backward").record(backwards_length_needed as f64);

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
    use crate::prefetch::part_stream::ClientPartStream;

    use super::caching_stream::CachingPartStream;
    use super::*;
    use futures::executor::{block_on, ThreadPool};
    use mountpoint_s3_client::error::{GetObjectError, ObjectClientError};
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
        first_request_size: usize,
        #[proptest(strategy = "16usize..1*1024*1024")]
        max_request_size: usize,
        #[proptest(strategy = "1usize..8usize")]
        sequential_prefetch_multiplier: usize,
        #[proptest(strategy = "16usize..2*1024*1024")]
        client_part_size: usize,
        #[proptest(strategy = "1u64..4*1024*1024")]
        max_forward_seek_distance: u64,
        #[proptest(strategy = "1u64..4*1024*1024")]
        max_backward_seek_distance: u64,
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
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));
        let object = MockObject::ramp(0xaa, size as usize, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher_config = PrefetcherConfig {
            first_request_size: test_config.first_request_size,
            max_request_size: test_config.max_request_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            read_timeout: Duration::from_secs(5),
            max_forward_seek_distance: test_config.max_forward_seek_distance,
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
            first_request_size: 256 * 1024,
            max_request_size: 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
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
            first_request_size: 256 * 1024,
            max_request_size: 64 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
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
            first_request_size: 256 * 1024,
            max_request_size: 64 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
        };

        run_sequential_read_test(part_stream, 256 * 1024 * 1024 + 111, 1024 * 1024, config);
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
            ..Default::default()
        };
        let client = MockClient::new(config);
        let object = MockObject::ramp(0xaa, size as usize, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let client = countdown_failure_client(client, get_failures, HashMap::new(), HashMap::new(), HashMap::new());

        let prefetcher_config = PrefetcherConfig {
            first_request_size: test_config.first_request_size,
            max_request_size: test_config.max_request_size,
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
            first_request_size: 256 * 1024,
            max_request_size: 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
            max_forward_seek_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
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
            block_size in 16usize..1 * 1024 * 1024,
            config: TestConfig,
        ) {
            run_sequential_read_test(caching_stream(block_size), size, read_size, config);
        }

        #[test]
        fn proptest_sequential_read_small_read_size_with_cache(size in 1u64..1 * 1024 * 1024, read_factor in 1usize..10,
            block_size in 16usize..1 * 1024 * 1024, config: TestConfig) {
            // Pick read size smaller than the object size
            let read_size = (size as usize / read_factor).max(1);
            run_sequential_read_test(caching_stream(block_size), size, read_size, config);
        }
    }

    #[test]
    fn test_sequential_read_regression() {
        let object_size = 854966;
        let read_size = 161647;
        let config = TestConfig {
            first_request_size: 484941,
            max_request_size: 81509,
            sequential_prefetch_multiplier: 1,
            client_part_size: 181682,
            max_forward_seek_distance: 1,
            max_backward_seek_distance: 18668,
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
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));
        let object = MockObject::ramp(0xaa, object_size as usize, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher_config = PrefetcherConfig {
            first_request_size: test_config.first_request_size,
            max_request_size: test_config.max_request_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            max_forward_seek_distance: test_config.max_forward_seek_distance,
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
            block_size in 16usize..1 * 1024 * 1024,
            config: TestConfig,
        ) {
            let (object_size, reads) = reads;
            run_random_read_test(caching_stream(block_size), object_size, reads, config);
        }
    }

    #[test]
    fn test_random_read_regression() {
        let object_size = 724314;
        let reads = vec![(0, 516883)];
        let config = TestConfig {
            first_request_size: 3684779,
            max_request_size: 2147621,
            sequential_prefetch_multiplier: 4,
            client_part_size: 516882,
            max_forward_seek_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
        };
        run_random_read_test(default_stream(), object_size, reads, config);
    }

    #[test]
    fn test_random_read_regression2() {
        let object_size = 755678;
        let reads = vec![(0, 278499), (311250, 1)];
        let config = TestConfig {
            first_request_size: 556997,
            max_request_size: 105938,
            sequential_prefetch_multiplier: 7,
            client_part_size: 1219731,
            max_forward_seek_distance: 16 * 1024 * 1024,
            max_backward_seek_distance: 2 * 1024 * 1024,
        };
        run_random_read_test(default_stream(), object_size, reads, config);
    }

    #[test]
    fn test_random_read_regression3() {
        let object_size = 755678;
        let reads = vec![(0, 236766), (291204, 1), (280930, 36002)];
        let config = TestConfig {
            first_request_size: 556997,
            max_request_size: 105938,
            sequential_prefetch_multiplier: 7,
            client_part_size: 1219731,
            max_forward_seek_distance: 2260662,
            max_backward_seek_distance: 2369799,
        };
        run_random_read_test(default_stream(), object_size, reads, config);
    }

    #[test]
    fn test_random_read_regression4() {
        let object_size = 14201;
        let reads = vec![(3584, 1), (9424, 1460), (3582, 3340), (248, 9218)];
        let config = TestConfig {
            first_request_size: 457999,
            max_request_size: 863511,
            sequential_prefetch_multiplier: 5,
            client_part_size: 1972409,
            max_forward_seek_distance: 2810651,
            max_backward_seek_distance: 3531090,
        };
        run_random_read_test(default_stream(), object_size, reads, config);
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
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));
        let object = MockObject::ramp(0xaa, OBJECT_SIZE, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher_config = PrefetcherConfig {
            first_request_size: FIRST_REQUEST_SIZE,
            ..Default::default()
        };

        let prefetcher = Prefetcher::new(default_stream(), prefetcher_config);

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
        const FIRST_REQUEST_SIZE: usize = 100;

        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(config));
        let object = MockObject::ramp(0xaa, OBJECT_SIZE, ETag::for_tests());
        let etag = object.etag();

        client.add_object("hello", object);

        let prefetcher_config = PrefetcherConfig {
            first_request_size: FIRST_REQUEST_SIZE,
            ..Default::default()
        };
        let prefetcher = Prefetcher::new(default_stream(), prefetcher_config);

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
            let first_request_size = rng.gen_range(16usize..1 * 1024 * 1024);
            let max_request_size = rng.gen_range(16usize..1 * 1024 * 1024);
            let sequential_prefetch_multiplier = rng.gen_range(2usize..16);
            let part_size = rng.gen_range(16usize..1 * 1024 * 1024 + 128 * 1024);
            let max_forward_seek_distance = rng.gen_range(16u64..1 * 1024 * 1024 + 256 * 1024);
            let max_backward_seek_distance = rng.gen_range(16u64..1 * 1024 * 1024 + 256 * 1024);

            let config = MockClientConfig {
                bucket: "test-bucket".to_string(),
                part_size,
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(config));
            let object = MockObject::ramp(0xaa, object_size as usize, ETag::for_tests());
            let file_etag = object.etag();

            client.add_object("hello", object);

            let prefetcher_config = PrefetcherConfig {
                first_request_size,
                max_request_size,
                sequential_prefetch_multiplier,
                max_forward_seek_distance,
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
            let first_request_size = rng.gen_range(16usize..32 * 1024);
            let max_request_size = rng.gen_range(16usize..32 * 1024);
            // Try to prevent testing very small reads of very large objects, which are easy to OOM
            // under Shuttle (lots of concurrent tasks)
            let max_object_size = first_request_size.min(max_request_size) * 20;
            let object_size = rng.gen_range(1u64..(64 * 1024).min(max_object_size) as u64);
            let sequential_prefetch_multiplier = rng.gen_range(2usize..16);
            let part_size = rng.gen_range(16usize..128 * 1024);
            let max_forward_seek_distance = rng.gen_range(16u64..192 * 1024);
            let max_backward_seek_distance = rng.gen_range(16u64..192 * 1024);

            let config = MockClientConfig {
                bucket: "test-bucket".to_string(),
                part_size,
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(config));
            let object = MockObject::ramp(0xaa, object_size as usize, ETag::for_tests());
            let file_etag = object.etag();

            client.add_object("hello", object);

            let prefetcher_config = PrefetcherConfig {
                first_request_size,
                max_request_size,
                sequential_prefetch_multiplier,
                max_forward_seek_distance,
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
