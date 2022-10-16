//! This module implements a prefetcher for GetObject requests.
//!
//! It works by making increasingly larger GetObject requests to the CRT. We want the chunks to be
//! large enough that they can make effective use of the CRT's fan-out parallelism across the S3
//! frontend, but small enough that we don't accumulate a lot of unread object data in memory or
//! wastefully download data we'll never read. As the reader continues to make sequential reads,
//! we increase the size of the GetObject requests up to some maximum. If the reader ever makes a
//! non-sequential read, we abandon the prefetching and start again with the minimum request size.

mod part;
mod part_queue;

use std::collections::VecDeque;
use std::ffi::{OsStr, OsString};
use std::fmt::Debug;
use std::os::unix::prelude::OsStrExt;
use std::sync::{Arc, RwLock};
use std::time::Duration;

use bytes::{Bytes, BytesMut};
use futures::pin_mut;
use futures::stream::StreamExt;
use s3_client::ObjectClient;
use tracing::{debug_span, error, instrument, trace, Instrument};

use crate::prefetch::part::Part;
use crate::prefetch::part_queue::{PartQueue, PartReadError};

/// Size of the first request in a prefetch run
const FIRST_REQUEST_SIZE: usize = 256 * 1024;
/// Maximum size of a single prefetch request
const MAX_REQUEST_SIZE: usize = 2 * 1024 * 1024 * 1024;
/// The factor to increase the request size by whenever the reader continues making sequential reads
const SEQUENTIAL_PREFETCH_MULTIPLIER: usize = 8;

/// A [Prefetcher] creates and manages prefetching GetObject requests to objects.
pub struct Prefetcher<Client: ObjectClient> {
    inner: Arc<PrefetcherInner<Client>>,
}

#[derive(Debug)]
struct PrefetcherInner<Client: ObjectClient> {
    client: Arc<Client>,
    first_part_size: usize,
}

impl<Client: ObjectClient + Send + Sync + 'static> Prefetcher<Client> {
    /// Create a new [Prefetcher] that will make requests to the given client.
    pub fn new(client: Arc<Client>) -> Self {
        let inner = PrefetcherInner {
            client,
            first_part_size: FIRST_REQUEST_SIZE,
        };

        Self { inner: Arc::new(inner) }
    }

    /// Start a new get request to the specified object.
    pub fn get(&self, bucket: &str, key: &str, size: u64) -> PrefetchGetObject<Client> {
        PrefetchGetObject::new(Arc::clone(&self.inner), bucket, key, size)
    }
}

/// A GetObject request that divides the desired range of the object into chunks that it prefetches
/// in a way that maximizes throughput from S3.
#[derive(Debug)]
pub struct PrefetchGetObject<Client: ObjectClient> {
    inner: Arc<PrefetcherInner<Client>>,
    current_task: Option<RequestTask>,
    // Currently we only every spawn at most one future task (see [spawn_next_request])
    future_tasks: Arc<RwLock<VecDeque<RequestTask>>>,
    bucket: String,
    key: String,
    next_sequential_read_offset: Option<u64>,
    next_request_size: usize,
    next_request_offset: u64,
    size: u64,
}

impl<Client: ObjectClient + Send + Sync + 'static> PrefetchGetObject<Client> {
    /// Create and spawn a new prefetching request for an object
    fn new(inner: Arc<PrefetcherInner<Client>>, bucket: &str, key: &str, size: u64) -> Self {
        PrefetchGetObject {
            inner: inner.clone(),
            current_task: None,
            future_tasks: Default::default(),
            next_request_size: inner.first_part_size,
            next_sequential_read_offset: None,
            next_request_offset: 0,
            bucket: bucket.to_owned(),
            key: key.to_owned(),
            size,
        }
    }

    /// Read some bytes from the object. Blocks until the desired bytes are available or EOF. This
    /// function will always return exactly `size` bytes, except at the end of the object where it
    /// will return however many bytes are left (including possibly 0 bytes).
    #[instrument(skip(self), fields(self=?&*self as *const _))]
    pub fn read(&mut self, mut offset: u64, length: usize) -> Bytes {
        trace!(
            offset,
            length,
            next_seq_offset = self.next_sequential_read_offset,
            "read"
        );

        let remaining = self.size.saturating_sub(offset);
        if remaining == 0 {
            return Bytes::new();
        }
        let mut to_read = (length as u64).min(remaining);

        // Cancel and reset prefetching if this is an out-of-order read
        if self
            .next_sequential_read_offset
            .map(|next_read_offset| next_read_offset != offset)
            .unwrap_or(true)
        {
            trace!(expected=?self.next_sequential_read_offset, actual=offset, "out-of-order read, resetting prefetch");
            // TODO cancel inflight requests
            // TODO see if we can reuse any inflight requests rather than dropping them immediately
            self.current_task = None;
            self.future_tasks.write().unwrap().drain(..);
            self.next_request_size = self.inner.first_part_size;
            self.next_sequential_read_offset = Some(offset);
            self.next_request_offset = offset;
        }
        debug_assert_eq!(self.next_sequential_read_offset, Some(offset));

        self.prepare_requests();

        // If [prepare_requests] didn't spawn a request, then we must have reached the end of the
        // object.
        if self.current_task.is_none() {
            trace!(offset, length, "read beyond object size");
            return Bytes::new();
        }

        let current_task = self.current_task.as_mut().unwrap();
        if current_task.remaining >= to_read as usize {
            // TODO handle timeouts
            let part = current_task.read(to_read as usize, Duration::from_secs(60)).unwrap();
            *self.next_sequential_read_offset.as_mut().unwrap() += part.len() as u64;
            return part.into_bytes(OsStr::from_bytes(self.key.as_bytes()), offset).unwrap();
        }

        let mut response = BytesMut::with_capacity(to_read as usize);
        while to_read > 0 {
            let current_task = self.current_task.as_mut().unwrap();
            assert!(current_task.remaining > 0);
            // TODO handle timeouts
            let part = current_task.read(to_read as usize, Duration::from_secs(60)).unwrap();
            let part_bytes = part.into_bytes(OsStr::from_bytes(self.key.as_bytes()), offset).unwrap();
            let part_length = part_bytes.len();
            response.extend_from_slice(&part_bytes[..]);
            to_read -= part_length as u64;
            offset += part_length as u64;
            *self.next_sequential_read_offset.as_mut().unwrap() += part_length as u64;
            if current_task.remaining == 0 {
                self.prepare_requests();
                if self.current_task.is_none() {
                    break;
                }
            }
        }
        response.freeze()
    }

    /// Runs on every read to prepare and spawn any requests our prefetching logic requires
    fn prepare_requests(&mut self) {
        let current_task = self.current_task.as_ref();
        if current_task.map(|task| task.remaining == 0).unwrap_or(true) {
            // There's no current task, or the current task is finished. Prepare the next request.
            if let Some(next_task) = self.future_tasks.write().unwrap().pop_front() {
                self.current_task = Some(next_task);
                return;
            }
            self.current_task = self.spawn_next_request();
        } else if current_task
            .map(|task| task.remaining < task.total_size / 2)
            .unwrap_or(false)
            && self.future_tasks.read().unwrap().is_empty()
        {
            // The current task is nearing completion, so pre-spawn the next request in anticipation
            // of it completing.
            if let Some(task) = self.spawn_next_request() {
                self.future_tasks.write().unwrap().push_back(task);
            }
        }
    }

    /// Spawn the next required request
    fn spawn_next_request(&mut self) -> Option<RequestTask> {
        let start = self.next_request_offset;
        let size = self.next_request_size;
        let end = (start + size as u64).min(self.size);

        if start >= self.size {
            return None;
        }

        let range = start..end;
        let part_queue = Arc::new(PartQueue::new());

        trace!(?range, size, "spawning request");

        let request_task = {
            let client = Arc::clone(&self.inner.client);
            let part_queue = Arc::clone(&part_queue);
            let bucket = self.bucket.to_owned();
            let key = self.key.to_owned();

            let span = debug_span!("Request", task=?&*part_queue as *const _, range=?range);

            async move {
                let request = client
                    .get_object(&bucket, &key, Some(range.clone()))
                    .await
                    .expect("get object failed");
                pin_mut!(request);
                loop {
                    match request.next().await {
                        Some(Ok((offset, body))) => {
                            let part = Part::new(OsString::from(&key), offset, body.into());
                            part_queue.push(part);
                        }
                        Some(Err(e)) => {
                            error!(error=?e, "RequestTask body part failed");
                            break;
                        }
                        None => break,
                    }
                }
                trace!("finished");
            }
            .instrument(span)
        };

        // TODO hold onto this so we can cancel the task
        self.inner.client.spawn(request_task);

        // [read] will reset these if the reader stops making sequential requests
        self.next_request_offset += size as u64;
        self.next_request_size = (self.next_request_size * SEQUENTIAL_PREFETCH_MULTIPLIER).min(MAX_REQUEST_SIZE);

        Some(RequestTask {
            total_size: size,
            remaining: size,
            part_queue,
        })
    }
}

#[derive(Debug)]
struct RequestTask {
    remaining: usize,
    total_size: usize,
    part_queue: Arc<PartQueue>,
}

impl RequestTask {
    fn read(&mut self, length: usize, timeout: Duration) -> Result<Part, PartReadError> {
        let part = self.part_queue.read(length, timeout)?;
        debug_assert!(part.len() <= self.remaining);
        self.remaining -= part.len();
        Ok(part)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use proptest::proptest;
    use proptest::sample::SizeRange;
    use proptest::strategy::{Just, Strategy};
    use s3_client::mock_client::{MockClient, MockClientConfig, MockObject};

    fn run_sequential_read_test(size: u64, read_size: usize, prefetch_part_size: usize) {
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: 8 * 1024 * 1024,
        };
        let client = MockClient::new(config);

        client.add_object("hello", MockObject::constant(0xaa, size as usize));

        let mut prefetcher = Prefetcher::new(Arc::new(client));
        Arc::get_mut(&mut prefetcher.inner).unwrap().first_part_size = prefetch_part_size;

        let mut request = prefetcher.get("test-bucket", "hello", size as u64);

        let expected = vec![0xaa; read_size];
        let mut next_offset = 0;
        loop {
            let buf = request.read(next_offset, read_size);
            if buf.is_empty() {
                break;
            }
            assert_eq!(&buf[..], &expected[..buf.len()]);
            next_offset += buf.len() as u64;
        }
        assert_eq!(next_offset, size as u64);
    }

    #[test]
    fn sequential_read_small() {
        run_sequential_read_test(1024 * 1024 + 111, 1024 * 1024, FIRST_REQUEST_SIZE);
    }

    #[test]
    fn sequential_read_medium() {
        run_sequential_read_test(16 * 1024 * 1024 + 111, 1024 * 1024, FIRST_REQUEST_SIZE);
    }

    #[test]
    fn sequential_read_large() {
        run_sequential_read_test(4 * 1024 * 1024 * 1024 + 111, 1024 * 1024, FIRST_REQUEST_SIZE);
    }

    #[test]
    fn sequential_read_regression1() {
        run_sequential_read_test(3413830, 4, 20009);
    }

    proptest! {
        #[test]
        fn proptest_sequential_read(
            size in 1u64..5 * 1024 * 1024,
            read_size in 1usize..5 * 1024 * 1024,
            prefetch_part_size in 1usize..5 * 1024 * 1024
        ) {
            run_sequential_read_test(size, read_size, prefetch_part_size);
        }

        #[test]
        fn proptest_sequential_read_small_read_size(size in 1u64..5 * 1024 * 1024, read_factor in 1usize..10, prefetch_factor in 1usize..10) {
            let read_size = (size as usize / read_factor).max(1);
            let prefetch_size = (size as usize / prefetch_factor).max(1);
            run_sequential_read_test(size, read_size, prefetch_size);
        }
    }

    fn run_random_read_test(object_size: u64, reads: Vec<(u64, usize)>, prefetch_part_size: usize) {
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: 8 * 1024 * 1024,
        };
        let client = MockClient::new(config);

        // TODO non-constant object so we can actually tell if we're getting the right bytes
        client.add_object("hello", MockObject::constant(0xaa, object_size as usize));

        let mut prefetcher = Prefetcher::new(Arc::new(client));
        Arc::get_mut(&mut prefetcher.inner).unwrap().first_part_size = prefetch_part_size;

        let mut request = prefetcher.get("test-bucket", "hello", object_size);

        for (offset, length) in reads {
            assert!(offset < object_size);
            assert!(offset + length as u64 <= object_size);
            let expected = vec![0xaa; length];
            let buf = request.read(offset, length);
            assert_eq!(&buf[..], &expected[..]);
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
                    SizeRange::default(),
                ),
            )
        })
    }

    proptest! {
        #[test]
        fn proptest_random_read(
            reads in random_read_strategy(5 * 1024 * 1024),
            prefetch_part_size in 1usize..5 * 1024 * 1024,
        ) {
            let (object_size, reads) = reads;
            run_random_read_test(object_size, reads, prefetch_part_size);
        }
    }
}
