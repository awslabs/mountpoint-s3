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
use std::fmt::Debug;
use std::time::Duration;

use bytes::{Bytes, BytesMut};
use futures::pin_mut;
use futures::stream::StreamExt;
use futures::task::{Spawn, SpawnExt};
use metrics::counter;
use mountpoint_s3_client::{GetObjectError, ObjectClient, ObjectClientError};
use thiserror::Error;
use tracing::{debug_span, error, trace, Instrument};

use crate::prefetch::part::Part;
use crate::prefetch::part_queue::PartQueue;
use crate::sync::{Arc, RwLock};

type TaskError<Client> = ObjectClientError<GetObjectError, <Client as ObjectClient>::ClientError>;

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
    /// The size of the parts that the prefetcher is trying to align with
    pub part_alignment: usize,
}

impl Default for PrefetcherConfig {
    fn default() -> Self {
        Self {
            first_request_size: 256 * 1024,
            max_request_size: 2 * 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            read_timeout: Duration::from_secs(60),
            part_alignment: 8 * 1024 * 1024,
        }
    }
}

/// A [Prefetcher] creates and manages prefetching GetObject requests to objects.
#[derive(Debug)]
pub struct Prefetcher<Client, Runtime> {
    inner: Arc<PrefetcherInner<Client, Runtime>>,
}

#[derive(Debug)]
struct PrefetcherInner<Client, Runtime> {
    client: Arc<Client>,
    config: PrefetcherConfig,
    runtime: Runtime,
}

impl<Client, Runtime> Prefetcher<Client, Runtime>
where
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn,
{
    /// Create a new [Prefetcher] that will make requests to the given client.
    pub fn new(client: Arc<Client>, runtime: Runtime, config: PrefetcherConfig) -> Self {
        let inner = PrefetcherInner {
            client,
            config,
            runtime,
        };

        Self { inner: Arc::new(inner) }
    }

    /// Start a new get request to the specified object.
    pub fn get(&self, bucket: &str, key: &str, size: u64) -> PrefetchGetObject<Client, Runtime> {
        PrefetchGetObject::new(Arc::clone(&self.inner), bucket, key, size)
    }
}

/// A GetObject request that divides the desired range of the object into chunks that it prefetches
/// in a way that maximizes throughput from S3.
#[derive(Debug)]
pub struct PrefetchGetObject<Client: ObjectClient, Runtime> {
    inner: Arc<PrefetcherInner<Client, Runtime>>,
    current_task: Option<RequestTask<TaskError<Client>>>,
    // Currently we only every spawn at most one future task (see [spawn_next_request])
    future_tasks: Arc<RwLock<VecDeque<RequestTask<TaskError<Client>>>>>,
    bucket: String,
    key: String,
    next_sequential_read_offset: u64,
    next_request_size: usize,
    next_request_offset: u64,
    size: u64,
}

impl<Client, Runtime> PrefetchGetObject<Client, Runtime>
where
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn,
{
    /// Create and spawn a new prefetching request for an object
    fn new(inner: Arc<PrefetcherInner<Client, Runtime>>, bucket: &str, key: &str, size: u64) -> Self {
        PrefetchGetObject {
            inner: inner.clone(),
            current_task: None,
            future_tasks: Default::default(),
            next_request_size: inner.config.first_request_size,
            next_sequential_read_offset: 0,
            next_request_offset: 0,
            bucket: bucket.to_owned(),
            key: key.to_owned(),
            size,
        }
    }

    /// Read some bytes from the object. This function will always return exactly `size` bytes,
    /// except at the end of the object where it will return however many bytes are left (including
    /// possibly 0 bytes).
    pub async fn read(&mut self, offset: u64, length: usize) -> Result<Bytes, PrefetchReadError<TaskError<Client>>> {
        trace!(
            offset,
            length,
            next_seq_offset = self.next_sequential_read_offset,
            "read"
        );

        let remaining = self.size.saturating_sub(offset);
        if remaining == 0 {
            return Ok(Bytes::new());
        }
        let mut to_read = (length as u64).min(remaining);

        // Cancel and reset prefetching if this is an out-of-order read
        if self.next_sequential_read_offset != offset {
            trace!(
                expected = self.next_sequential_read_offset,
                actual = offset,
                "out-of-order read, resetting prefetch"
            );
            counter!("prefetch.out_of_order", 1);
            // TODO cancel inflight requests
            // TODO see if we can reuse any inflight requests rather than dropping them immediately
            self.current_task = None;
            self.future_tasks.write().unwrap().drain(..);
            self.next_request_size = self.inner.config.first_request_size;
            self.next_sequential_read_offset = offset;
            self.next_request_offset = offset;
        }
        debug_assert_eq!(self.next_sequential_read_offset, offset);

        self.prepare_requests();

        // If [prepare_requests] didn't spawn a request, then we must have reached the end of the
        // object.
        if self.current_task.is_none() {
            trace!(offset, length, "read beyond object size");
            return Ok(Bytes::new());
        }

        let mut response = BytesMut::new();
        while to_read > 0 {
            let current_task = self.current_task.as_mut().unwrap();
            debug_assert!(current_task.remaining > 0);

            let part = match current_task.read(to_read as usize).await {
                Err(e) => {
                    // cancel inflight tasks
                    self.current_task = None;
                    self.future_tasks.write().unwrap().drain(..);
                    return Err(e);
                }
                Ok(part) => part,
            };
            let part_bytes = part.into_bytes(&self.key, self.next_sequential_read_offset).unwrap();

            self.next_sequential_read_offset += part_bytes.len() as u64;

            // If we can complete the read with just a single buffer, early return to avoid copying
            // into a new buffer. This should be the common case as long as part size is larger than
            // read size, which it almost always is for real S3 clients and FUSE.
            if response.is_empty() && part_bytes.len() == to_read as usize {
                return Ok(part_bytes);
            }

            response.extend_from_slice(&part_bytes[..]);
            to_read -= part_bytes.len() as u64;
            if current_task.remaining == 0 {
                self.prepare_requests();
                if self.current_task.is_none() {
                    break;
                }
            }
        }

        Ok(response.freeze())
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
    fn spawn_next_request(&mut self) -> Option<RequestTask<TaskError<Client>>> {
        let start = self.next_request_offset;
        let end = (start + self.next_request_size as u64).min(self.size);

        if start >= self.size {
            return None;
        }

        let size = end - start;
        let range = start..end;
        let part_queue = Arc::new(PartQueue::new());

        trace!(?range, size, "spawning request");

        let request_task = {
            let client = Arc::clone(&self.inner.client);
            let part_queue = Arc::clone(&part_queue);
            let bucket = self.bucket.to_owned();
            let key = self.key.to_owned();

            let span = debug_span!("prefetch", range=?range);

            async move {
                match client.get_object(&bucket, &key, Some(range.clone())).await {
                    Err(e) => {
                        error!(error=?e, "RequestTask get object failed");
                        part_queue.push(Err(e));
                    }
                    Ok(request) => {
                        pin_mut!(request);
                        loop {
                            match request.next().await {
                                Some(Ok((offset, body))) => {
                                    let part = Part::new(&key, offset, body.into());
                                    part_queue.push(Ok(part));
                                }
                                Some(Err(e)) => {
                                    error!(error=?e, "RequestTask body part failed");
                                    part_queue.push(Err(e));
                                    break;
                                }
                                None => break,
                            }
                        }
                        trace!("finished");
                    }
                }
            }
            .instrument(span)
        };

        // TODO hold onto this so we can cancel the task
        self.inner.runtime.spawn(request_task).unwrap();

        // [read] will reset these if the reader stops making sequential requests
        self.next_request_offset += size;
        self.next_request_size = self.get_next_request_size();

        Some(RequestTask {
            total_size: size as usize,
            remaining: size as usize,
            part_queue,
        })
    }

    /// Suggest next request size.
    /// Normally, next request size is current request size multiply by sequential prefetch multiplier,
    /// but if the request size is getting bigger than a part size we will try to align it to part boundaries.
    fn get_next_request_size(&self) -> usize {
        // calculate next request size
        let next_request_size = (self.next_request_size * self.inner.config.sequential_prefetch_multiplier)
            .min(self.inner.config.max_request_size);

        let offset_in_part = (self.next_request_offset % self.inner.config.part_alignment as u64) as usize;
        // if the offset is not at the start of the part we will drain all the bytes from that part first
        if offset_in_part != 0 {
            let remaining_in_part = self.inner.config.part_alignment - offset_in_part;
            next_request_size.min(remaining_in_part)
        } else {
            // if the next request size is smaller than the part size, just return that value
            if next_request_size < self.inner.config.part_alignment {
                return next_request_size;
            }

            // if it exceeds part boundaries, trim it to the part boundaries
            let next_request_boundary = self.next_request_offset + next_request_size as u64;
            let remainder = (next_request_boundary % self.inner.config.part_alignment as u64) as usize;
            next_request_size - remainder
        }
    }
}

/// A single GetObject request submitted to the S3 client
#[derive(Debug)]
struct RequestTask<E> {
    remaining: usize,
    total_size: usize,
    part_queue: Arc<PartQueue<E>>,
}

impl<E: std::error::Error + Send + Sync> RequestTask<E> {
    async fn read(&mut self, length: usize) -> Result<Part, PrefetchReadError<E>> {
        let part = self.part_queue.read(length).await?;
        debug_assert!(part.len() <= self.remaining);
        self.remaining -= part.len();
        Ok(part)
    }
}

#[derive(Debug, Error)]
pub enum PrefetchReadError<E: std::error::Error> {
    #[error("get request failed")]
    GetRequestFailed(#[from] E),
}

#[cfg(test)]
mod tests {
    // It's convenient to write test constants like "1 * 1024 * 1024" for symmetry
    #![allow(clippy::identity_op)]

    use super::*;
    use futures::executor::{block_on, ThreadPool};
    use mountpoint_s3_client::failure_client::{countdown_failure_client, GetFailureMap};
    use mountpoint_s3_client::mock_client::{ramp_bytes, MockClient, MockClientConfig, MockClientError, MockObject};
    use proptest::proptest;
    use proptest::strategy::{Just, Strategy};
    use proptest_derive::Arbitrary;
    use std::collections::HashMap;
    use test_case::test_case;

    const KB: usize = 1024;
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
    }

    fn run_sequential_read_test(size: u64, read_size: usize, test_config: TestConfig) {
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: test_config.client_part_size,
        };
        let client = MockClient::new(config);

        client.add_object("hello", MockObject::ramp(0xaa, size as usize));

        let test_config = PrefetcherConfig {
            first_request_size: test_config.first_request_size,
            max_request_size: test_config.max_request_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            read_timeout: Duration::from_secs(5),
            part_alignment: test_config.client_part_size,
        };
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let prefetcher = Prefetcher::new(Arc::new(client), runtime, test_config);

        let mut request = prefetcher.get("test-bucket", "hello", size);

        let mut next_offset = 0;
        loop {
            let buf = block_on(request.read(next_offset, read_size)).unwrap();
            if buf.is_empty() {
                break;
            }
            let expected = ramp_bytes((0xaa + next_offset) as usize, buf.len());
            assert_eq!(&buf[..], &expected[..buf.len()]);
            next_offset += buf.len() as u64;
        }
        assert_eq!(next_offset, size);
    }

    #[test]
    fn sequential_read_small() {
        let config = TestConfig {
            first_request_size: 256 * 1024,
            max_request_size: 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
        };
        run_sequential_read_test(1024 * 1024 + 111, 1024 * 1024, config);
    }

    #[test]
    fn sequential_read_medium() {
        let config = TestConfig {
            first_request_size: 256 * 1024,
            max_request_size: 64 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
        };
        run_sequential_read_test(16 * 1024 * 1024 + 111, 1024 * 1024, config);
    }

    #[test]
    fn sequential_read_large() {
        let config = TestConfig {
            first_request_size: 256 * 1024,
            max_request_size: 64 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
        };
        run_sequential_read_test(256 * 1024 * 1024 + 111, 1024 * 1024, config);
    }

    fn fail_sequential_read_test(
        size: u64,
        read_size: usize,
        test_config: TestConfig,
        get_failures: GetFailureMap<MockClient>,
    ) {
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: test_config.client_part_size,
        };
        let client = MockClient::new(config);
        client.add_object("hello", MockObject::ramp(0xaa, size as usize));

        let client = countdown_failure_client(client, get_failures, HashMap::new(), HashMap::new());

        let test_config = PrefetcherConfig {
            first_request_size: test_config.first_request_size,
            max_request_size: test_config.max_request_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            ..Default::default()
        };
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let prefetcher = Prefetcher::new(Arc::new(client), runtime, test_config);

        let mut request = prefetcher.get("test-bucket", "hello", size);

        let mut next_offset = 0;
        loop {
            let buf = match block_on(request.read(next_offset, read_size)) {
                Ok(buf) => buf,
                Err(_) => break,
            };

            if buf.is_empty() {
                break;
            }
            let expected = ramp_bytes((0xaa + next_offset) as usize, buf.len());
            assert_eq!(&buf[..], &expected[..buf.len()]);
            next_offset += buf.len() as u64;
        }
        assert!(next_offset < size); // Since we're injecting failures, shouldn't make it to the end
    }

    #[test]
    fn fail_request_sequential_small() {
        let config = TestConfig {
            first_request_size: 256 * 1024,
            max_request_size: 1024 * 1024 * 1024,
            sequential_prefetch_multiplier: 8,
            client_part_size: 8 * 1024 * 1024,
        };

        let mut get_failures = HashMap::new();
        get_failures.insert(
            2,
            Err(ObjectClientError::ClientError(MockClientError(
                "invalid range; length=42".into(),
            ))),
        );

        fail_sequential_read_test(1024 * 1024 + 111, 1024 * 1024, config, get_failures);
    }

    #[test_case(256 * KB, 256 * KB, 8, 100 * MB, 8 * MB, 2 * MB; "next request size is smaller than part size")]
    #[test_case(7 * MB, 256 * KB, 8, 100 * MB, 8 * MB, 1 * MB; "next request size is remaining bytes in the part")]
    #[test_case(9 * MB, (2 * MB) + 11, 11, 100 * MB, 9 * MB, 18 * MB; "next request size is trimmed to part boundaries")]
    #[test_case(8 * MB, 2 * MB, 8, 100 * MB, 8 * MB, 16 * MB; "next request size is multiple of the part size")]
    #[test_case(8 * MB, 2 * MB, 100, 20 * MB, 8 * MB, 16 * MB; "max request size is trimmed to part boundaries")]
    #[test_case(8 * MB, 2 * MB, 100, 24 * MB, 8 * MB, 24 * MB; "max request size is multiple of the part size")]
    #[test_case(8 * MB, 2 * MB, 8, 3 * MB, 8 * MB, 3 * MB; "max request size is less than part size")]
    fn test_get_next_request_size(
        next_request_offset: usize,
        current_request_size: usize,
        prefetch_multiplier: usize,
        max_request_size: usize,
        part_size: usize,
        expected_size: usize,
    ) {
        let object_size = 50 * 1024 * 1024;

        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size,
        };
        let client = MockClient::new(config);

        let test_config = PrefetcherConfig {
            first_request_size: 256 * 1024,
            sequential_prefetch_multiplier: prefetch_multiplier,
            max_request_size,
            read_timeout: Duration::from_secs(60),
            part_alignment: part_size,
        };
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let prefetcher = Prefetcher::new(Arc::new(client), runtime, test_config);

        let mut request = prefetcher.get("test-bucket", "hello", object_size);

        request.next_request_offset = next_request_offset as u64;
        request.next_request_size = current_request_size;
        let next_request_size = request.get_next_request_size();
        assert_eq!(next_request_size, expected_size);
    }

    proptest! {
        #[test]
        fn proptest_sequential_read(
            size in 1u64..1 * 1024 * 1024,
            read_size in 1usize..1 * 1024 * 1024,
            config: TestConfig,
        ) {
            run_sequential_read_test(size, read_size, config);
        }

        #[test]
        fn proptest_sequential_read_small_read_size(size in 1u64..1 * 1024 * 1024, read_factor in 1usize..10, config: TestConfig) {
            let read_size = (size as usize / read_factor).max(1);
            run_sequential_read_test(size, read_size, config);
        }
    }

    fn run_random_read_test(object_size: u64, reads: Vec<(u64, usize)>, test_config: TestConfig) {
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: test_config.client_part_size,
        };
        let client = MockClient::new(config);

        client.add_object("hello", MockObject::ramp(0xaa, object_size as usize));

        let test_config = PrefetcherConfig {
            first_request_size: test_config.first_request_size,
            max_request_size: test_config.max_request_size,
            sequential_prefetch_multiplier: test_config.sequential_prefetch_multiplier,
            ..Default::default()
        };
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let prefetcher = Prefetcher::new(Arc::new(client), runtime, test_config);

        let mut request = prefetcher.get("test-bucket", "hello", object_size);

        for (offset, length) in reads {
            assert!(offset < object_size);
            assert!(offset + length as u64 <= object_size);
            let expected = ramp_bytes((0xaa + offset) as usize, length);
            let buf = block_on(request.read(offset, length)).unwrap();
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
            run_random_read_test(object_size, reads, config);
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
        };
        run_random_read_test(object_size, reads, config);
    }

    #[cfg(feature = "shuttle")]
    mod shuttle_tests {
        use super::*;
        use futures::task::{FutureObj, SpawnError};
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
            let sequential_prefetch_multiplier = rng.gen_range(1usize..16);
            let part_size = rng.gen_range(16usize..2 * 1024 * 1024);

            let config = MockClientConfig {
                bucket: "test-bucket".to_string(),
                part_size,
            };
            let client = MockClient::new(config);

            client.add_object("hello", MockObject::ramp(0xaa, object_size as usize));

            let test_config = PrefetcherConfig {
                first_request_size,
                max_request_size,
                sequential_prefetch_multiplier,
                ..Default::default()
            };

            let prefetcher = Prefetcher::new(Arc::new(client), ShuttleRuntime, test_config);

            let mut request = prefetcher.get("test-bucket", "hello", object_size);

            let mut next_offset = 0;
            loop {
                let read_size = rng.gen_range(1usize..1 * 1024 * 1024);
                let buf = block_on(request.read(next_offset, read_size)).unwrap();
                if buf.is_empty() {
                    break;
                }
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
            let sequential_prefetch_multiplier = rng.gen_range(1usize..16);
            let part_size = rng.gen_range(16usize..128 * 1024);

            let config = MockClientConfig {
                bucket: "test-bucket".to_string(),
                part_size,
            };
            let client = MockClient::new(config);

            client.add_object("hello", MockObject::ramp(0xaa, object_size as usize));

            let test_config = PrefetcherConfig {
                first_request_size,
                max_request_size,
                sequential_prefetch_multiplier,
                ..Default::default()
            };

            let prefetcher = Prefetcher::new(Arc::new(client), ShuttleRuntime, test_config);

            let mut request = prefetcher.get("test-bucket", "hello", object_size);

            let num_reads = rng.gen_range(10usize..50);
            for _ in 0..num_reads {
                let offset = rng.gen_range(0u64..object_size);
                let length = rng.gen_range(1usize..(object_size - offset + 1) as usize);
                let expected = ramp_bytes((0xaa + offset) as usize, length);
                let buf = block_on(request.read(offset, length)).unwrap();
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
