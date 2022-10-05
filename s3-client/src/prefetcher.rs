//! This module implements a prefetcher for GetObject requests.
//!
//! It works by making large concurrent "chunk"-sized GetObject requests to the CRT. We want the
//! chunks to be large enough that they can make effective use of the CRT's fan-out parallelism
//! across the S3 frontend, but small enough that we don't accumulate a lot of unread object data
//! in memory or wastefully download data we'll never read.
//!
//! TODO this code only supports reading the entire object, and does not react well to failures.

use std::borrow::Cow;
use std::collections::VecDeque;
use std::fmt::Debug;
use std::sync::atomic::{AtomicU64, AtomicUsize, Ordering};
use std::sync::{Arc, Condvar, Mutex, RwLock};

use futures::pin_mut;
use futures::stream::StreamExt;
use tracing::{debug, debug_span, error, instrument, trace, Instrument};

use crate::object_client::ObjectClient;

/// A multiplier on how many chunks can be in flight at once, to account for the fact that some
/// requests will be spending their time in setup or teardown. This number was just copied from the
/// CRT's `s_max_requests_multiplier`, which serves a roughly equivalent purpose, and is used to
/// decide how many requests can be inflight: to have N requests doing useful work (downloading
/// bytes), it allows up to 4*N requests to exist, on the premise that the others are doing
/// connection setup/teardown.
const MAX_CHUNKS_MULTIPLIER: usize = 4;

/// When the current (first) chunk has only 1/PARALLEL_CHUNK_REFILL_FACTOR of its bytes remaining to
/// consume (not just to download), we will spawn the next parallel chunk request. This value
/// controls how aggressively we use the CRT's available concurrency: higher values mean less
/// *contention* for that concurrency (later requests contending with earlier ones) but more *risk
/// of starving* it if we suddenly get slow consuming bytes.
///
/// 1/2 seemed like a good default.
const PARALLEL_CHUNK_REFILL_FACTOR: usize = 2;

/// The part size the CRT will use for GetObject requests
// TODO connect this to client config
const PART_SIZE: u64 = 8 * (1 << 20);

/// Chunk size is a trade-off between CRT throughput and memory usage/waste. These are arbitrary
/// numbers that haven't been tuned at all.
const PARTS_PER_CHUNK: usize = 60;
const CHUNK_SIZE: u64 = PARTS_PER_CHUNK as u64 * PART_SIZE;

/// Unfortunately the CRT is currently not very good at fair scheduling across GetObject requests.
/// It will happily let one request use all the available concurrency and starve the others. So we
/// help it out by dynamically scaling how many chunks we send to the CRT from a single
/// [PrefetchingGetRequest]. This requires us to duplicate some understanding of how the CRT
/// computes the available concurrency.
// TODO don't duplicate this from CRT
const THROUGHPUT_PER_CONNECTION_GBPS: f64 = 0.05;

/// A single body part returned by the object client, together with a cursor into the part. This
/// lets us do zero-copy reads from the part.
struct PartCursor {
    bytes: Box<[u8]>,
    cursor: usize,
}

impl PartCursor {
    fn new(bytes: Box<[u8]>) -> Self {
        Self { bytes, cursor: 0 }
    }

    fn read(&mut self, length: usize) -> &[u8] {
        let to_read = length.min(self.bytes.len() - self.cursor);
        let ret = &self.bytes[self.cursor..self.cursor + to_read];
        self.cursor += to_read;
        ret
    }

    fn available(&self) -> usize {
        self.bytes.len() - self.cursor
    }

    fn is_empty(&self) -> bool {
        self.available() == 0
    }
}

/// A single chunk of a `PrefetchingGetRequest`.
struct PrefetchChunk {
    // Data in a chunk is in three contiguous regions:
    //   [  1   |      2       |   3    ]
    // 1. Data both downloaded and consumed by the reader -- data we're finished with
    // 2. Data downloaded but not yet consumed -- data in `self.queue`
    // 3. Data not yet downloaded -- data we have yet to receive
    queue: Mutex<VecDeque<(u64, Box<[u8]>)>>,
    // (3)
    remaining_to_download: AtomicU64,
    // (2) + (3)
    remaining_to_consume: AtomicU64,
    // (1) + (2) + (3)
    total_chunk_size: u64,
    data_available: Condvar,
}

impl PrefetchChunk {
    fn new(size: u64) -> Self {
        Self {
            queue: Default::default(),
            remaining_to_download: AtomicU64::new(size),
            remaining_to_consume: AtomicU64::new(size),
            data_available: Condvar::new(),
            total_chunk_size: size,
        }
    }

    /// Pop the next body part off the chunk. Blocks until a body part is available. Returns the
    /// body part and its offset within the object.
    #[instrument(level = "debug", skip(self), fields(chunk = ?self as *const _))]
    fn pop(&self) -> (u64, Box<[u8]>) {
        let mut queue = self.queue.lock().unwrap();
        while queue.is_empty() {
            trace!("waiting for new part");
            queue = self.data_available.wait(queue).expect("cond failed");
        }
        let ret = queue.pop_front().unwrap();
        trace!(remaining_buffers = queue.len(), "read buffer from queue");
        let remaining_to_consume = self
            .remaining_to_consume
            .fetch_sub(ret.1.len() as u64, Ordering::SeqCst);
        assert!(remaining_to_consume >= ret.1.len() as u64);
        if remaining_to_consume == ret.1.len() as u64 {
            assert!(queue.is_empty());
        }
        ret
    }

    /// Push a new body part at the given offset onto the end of the chunk to make it ready for the
    /// consumer to read. Does not block.
    fn push(&self, offset: u64, body: Box<[u8]>) {
        let mut queue = self.queue.lock().unwrap();
        trace!(
            length = body.len(),
            remaining_buffers = queue.len(),
            "push buffer on queue"
        );
        self.remaining_to_download
            .fetch_sub(body.len() as u64, Ordering::SeqCst);
        queue.push_back((offset, body));
        self.data_available.notify_one();
    }

    fn remaining_to_consume(&self) -> u64 {
        self.remaining_to_consume.load(Ordering::SeqCst)
    }

    fn finished(&self) -> bool {
        self.remaining_to_consume() == 0
    }
}

/// A token that can be used to track how many requests a [Prefetcher] has inflight.
struct InflightRequestToken<Client: ObjectClient> {
    inner: Arc<PrefetcherInner<Client>>,
}

impl<Client: ObjectClient> InflightRequestToken<Client> {
    fn new(inner: Arc<PrefetcherInner<Client>>) -> Self {
        inner.inflight_requests.fetch_add(1, Ordering::Relaxed);
        Self { inner }
    }
}

impl<Client: ObjectClient> Drop for InflightRequestToken<Client> {
    fn drop(&mut self) {
        self.inner.inflight_requests.fetch_sub(1, Ordering::Relaxed);
    }
}

/// A [Prefetcher] creates and manages prefetching GetObject requests to objects. It manages the
/// total throughput available to the object store, and dynamically divides that throughput among
/// inflight requests.
pub struct Prefetcher<Client: ObjectClient> {
    inner: Arc<PrefetcherInner<Client>>,
}

struct PrefetcherInner<Client: ObjectClient> {
    client: Arc<Client>,
    inflight_requests: AtomicUsize,
    throughput_target_gbps: f64,
}

impl<Client: ObjectClient + Send + Sync + 'static> Prefetcher<Client> {
    /// Create a new [Prefetcher] that will make requests to the given client.
    pub fn new(client: Arc<Client>, throughput_target_gbps: f64) -> Self {
        let inner = PrefetcherInner {
            client,
            inflight_requests: AtomicUsize::new(0),
            throughput_target_gbps,
        };

        Self { inner: Arc::new(inner) }
    }

    /// Start a new get request to the specified object.
    pub fn get(&self, bucket: &str, key: &str, size: u64) -> PrefetchingGetRequest<Client> {
        PrefetchingGetRequest::new(Arc::clone(&self.inner), bucket, key, size)
    }
}

impl<Client: ObjectClient> PrefetcherInner<Client> {
    fn inflight_requests(&self) -> usize {
        self.inflight_requests.load(Ordering::Relaxed)
    }
}

/// A GetObject request that divides the desired range of the object into chunks that it prefetches
/// in a way that maximizes throughput from S3.
pub struct PrefetchingGetRequest<Client: ObjectClient> {
    inner: Arc<PrefetcherInner<Client>>,
    parallel_chunks: Arc<RwLock<VecDeque<Arc<PrefetchChunk>>>>,
    _inflight_request: InflightRequestToken<Client>,
    current_part: PartCursor,
    next_part_offset: u64,
    next_chunk_offset: u64,
    next_chunk_size: u64,
    bucket: String,
    key: String,
    object_size: u64,
}

impl<Client: ObjectClient> Debug for PrefetchingGetRequest<Client> {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        f.debug_struct("PrefetchingGetRequest")
            .field("next_part_offset", &self.next_part_offset)
            .field("next_chunk_offset", &self.next_chunk_offset)
            .field("next_chunk_size", &self.next_chunk_size)
            .field("bucket", &self.bucket)
            .field("key", &self.key)
            .field("object_size", &self.object_size)
            .finish()
    }
}

impl<Client: ObjectClient + Send + Sync + 'static> PrefetchingGetRequest<Client> {
    /// Create and spawn a new prefetching request for an object
    fn new(inner: Arc<PrefetcherInner<Client>>, bucket: &str, key: &str, size: u64) -> Self {
        let num_chunks = (size + CHUNK_SIZE - 1) / CHUNK_SIZE;
        assert!(num_chunks > 0);

        // The first chunk will be the leftover non-CHUNK_SIZE part
        let chunk_start = 0;
        let mut chunk_size = size % CHUNK_SIZE;
        if chunk_size == 0 {
            chunk_size = CHUNK_SIZE;
        }

        let mut request = PrefetchingGetRequest {
            inner: inner.clone(),
            parallel_chunks: Default::default(),
            current_part: PartCursor::new([].into()),
            _inflight_request: InflightRequestToken::new(inner),
            next_part_offset: 0,
            next_chunk_offset: chunk_start,
            next_chunk_size: chunk_size,
            object_size: size,
            bucket: bucket.to_owned(),
            key: key.to_owned(),
        };

        let span = debug_span!("PrefetchingGetRequest", request=?&request as *const _);
        span.in_scope(|| request.refill_chunk_queue());

        request
    }

    /// Read some bytes from the object. Blocks until the desired bytes are available or EOF. This
    /// function will always return exactly `size` bytes, except at the end of the object where it
    /// will return however many bytes are left (including possible 0 bytes).
    ///
    /// TODO reads have to be sequential right now, but we don't enforce that properly.
    pub fn read(&mut self, offset: u64, size: usize) -> Cow<'_, [u8]> {
        let span = debug_span!("PrefetchingGetRequest", request=?self as *const _);
        let _guard = span.enter();

        trace!(offset, size, "read");

        let remaining = self.object_size.saturating_sub(offset);
        let mut to_read = (size as u64).min(remaining);

        if to_read > 0 && self.current_part.is_empty() {
            self.install_next_part();
        }

        // This looks a little awkward, but it works around a borrow checker issue. We want to be
        // able to skip a copy and return a slice of `self.current_part` in the common case where
        // this read doesn't cross a part boundary. But if you write that in the obvious way that
        // just calls `self.current_part.read()` unconditionally and checks what it got back, like:
        //
        // > let bytes = self.current_part.read(to_read as usize);
        // > if bytes.len() == to_read {
        // >     return bytes.into();
        // > } else {
        // >     to_read -= bytes.len() as usize;
        // >     let mut response: Vec<u8> = bytes.into();
        // >     while to_read > 0 {
        // >         // ...
        // >     }
        // >     return response.into();
        // > }
        //
        // you confuse the borrow checker, which isn't context-sensitive enough to realize that the
        // lifetime of the return value is tied to the lifetime of `&mut self` *only* in the `if`
        // case. It sees the `if` case and extends the lifetime of `&mut self` to the entire
        // function, which means the accesses to `bytes` in the `else` branch are not allowed. This
        // is "Problem case #3" in the non-lexical lifetimes RFC (https://tinyurl.com/4pvd2rs2) and
        // a motivating example for the Polonius borrow checker (https://tinyurl.com/yckw2rhb).
        if self.current_part.available() as u64 >= to_read {
            return self.current_part.read(to_read as usize).into();
        }

        let mut response: Vec<u8> = Vec::with_capacity(to_read as usize);
        while to_read > 0 {
            let bytes = self.current_part.read(to_read as usize);
            assert!(!bytes.is_empty());
            to_read -= bytes.len() as u64;
            response.extend_from_slice(bytes);

            if to_read > 0 && self.current_part.is_empty() {
                self.install_next_part();
            }
        }
        response.into()
    }

    /// Install the next part of the object as `self.current_part`. May block if no more parts are
    /// available.
    fn install_next_part(&mut self) {
        assert!(self.current_part.is_empty());

        {
            let parallel_chunks = self.parallel_chunks.read().unwrap();

            let current_chunk = parallel_chunks.front().expect("cannot read with no chunks left");

            // Check if we're done with the current chunk. If so, push it off the queue and grab the
            // next one instead.
            if current_chunk.finished() {
                drop(parallel_chunks);

                let _ = self.parallel_chunks.write().unwrap().pop_front().unwrap();

                // That might have been the last/only chunk, so refill now
                self.refill_chunk_queue();

                let parallel_chunks = self.parallel_chunks.read().unwrap();
                let current_chunk = parallel_chunks
                    .front()
                    .expect("cannot read with no non-empty chunks left");

                let (next_offset, next_bytes) = current_chunk.pop();
                assert_eq!(next_offset, self.next_part_offset);
                self.next_part_offset += next_bytes.len() as u64;
                self.current_part = PartCursor::new(next_bytes);
            } else {
                // TODO don't duplicate this in both branches, but the locking is funky here and
                // this is the best idea I can come up with.
                let (next_offset, next_bytes) = current_chunk.pop();
                assert_eq!(next_offset, self.next_part_offset);
                self.next_part_offset += next_bytes.len() as u64;
                self.current_part = PartCursor::new(next_bytes);
            }
        }

        // Consider refilling the request queue since we might have taken the part that pushes us
        // over the refill threshold
        self.refill_chunk_queue();
    }

    /// Spawn requests for new chunks until the chunk queue is filled.
    fn refill_chunk_queue(&mut self) {
        let mut parallel_chunks = self.parallel_chunks.read().unwrap();

        // TODO This is a big hack. We want the CRT to handle fair scheduling among requests, but it
        // doesn't, so instead we basically replicate its understanding of S3 connections here.
        let throughput_target_gbps = self.inner.throughput_target_gbps;
        let max_connections = (throughput_target_gbps / THROUGHPUT_PER_CONNECTION_GBPS) as usize;
        let my_max_connections = max_connections.saturating_div(self.inner.inflight_requests());
        let my_max_chunks = my_max_connections * MAX_CHUNKS_MULTIPLIER / PARTS_PER_CHUNK;
        let my_max_chunks = my_max_chunks.max(1);

        while parallel_chunks.len() < my_max_chunks {
            if self.next_chunk_offset >= self.object_size {
                return;
            }

            // We'll only spawn a new chunk if there is room in the queue and the current chunk is
            // consumed enough (read by the client, not just downloaded). This is how we get some
            // backpressure: if the consumer is slow, we will slow down our spawning of new chunks.
            let first_chunk_nearing_completion = parallel_chunks
                .front()
                .map(|chunk| {
                    chunk.remaining_to_consume() < chunk.total_chunk_size / PARALLEL_CHUNK_REFILL_FACTOR as u64
                })
                .unwrap_or(true);

            if !first_chunk_nearing_completion {
                break;
            }

            // Upgrade to a write lock only if we actually need to write to the chunk queue, because
            // the CRT callback also needs to take a read lock on the queue and we don't want to
            // block its event loop unnecessarily.
            drop(parallel_chunks);
            {
                let mut parallel_chunks = self.parallel_chunks.write().unwrap();

                let range = Some(self.next_chunk_offset..self.next_chunk_offset + self.next_chunk_size);
                let chunk = Arc::new(PrefetchChunk::new(self.next_chunk_size));

                self.next_chunk_offset += self.next_chunk_size;
                self.next_chunk_size = CHUNK_SIZE;

                debug!(?range, inflight_chunks = parallel_chunks.len(), "starting new chunk");

                // Request object doesn't need to survive as we won't block on it
                // TODO we probably want to hold onto this thing for cancellation purposes
                // TODO how do we find out about errors? this whole mess needs to be async, i think
                let request_task = {
                    let client = Arc::clone(&self.inner.client);
                    let chunk = Arc::clone(&chunk);
                    let bucket = self.bucket.to_owned();
                    let key = self.key.to_owned();

                    let span = debug_span!("PrefetchingGetRequestTask", chunk=?&*chunk as *const _, range=?range);

                    async move {
                        let request = client
                            .get_object(&bucket, &key, range.clone())
                            .await
                            .expect("get object failed");
                        pin_mut!(request);
                        loop {
                            match request.next().await {
                                Some(Ok((offset, body))) => {
                                    chunk.push(offset, body);
                                }
                                Some(Err(e)) => {
                                    error!(error=?e, "PrefetchingGetRequest body part failed");
                                    break;
                                }
                                None => break,
                            }
                        }
                        trace!(?range, "finished GetObject task");
                    }
                    .instrument(span)
                };
                self.inner.client.spawn(request_task);

                parallel_chunks.push_back(chunk);
            }
            parallel_chunks = self.parallel_chunks.read().unwrap();
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::mock_client::{MockClient, MockClientConfig, MockObject};
    use test_case::test_case;

    #[test_case(1024 * 1024 + 111; "single chunk, single part")]
    #[test_case(16 * 1024 * 1024 + 111; "single chunk, multiple part")]
    #[test_case(5 * CHUNK_SIZE as usize * 2 + PART_SIZE as usize + 111; "multiple chunk, multiple part")]
    fn test_sequential_read(size: usize) {
        let config = MockClientConfig {
            bucket: "test-bucket".to_string(),
            part_size: 8 * 1024 * 1024,
        };
        let client = MockClient::new(config);

        client.add_object("hello", MockObject::constant(0xaa, size));

        let prefetcher = Prefetcher::new(Arc::new(client), 1.0);

        let mut request = prefetcher.get("test-bucket", "hello", size as u64);

        let expected = vec![0xaa; 1024 * 1024];
        let mut next_offset = 0;
        loop {
            let buf = request.read(next_offset, 1024 * 1024);
            if buf.len() == 0 {
                break;
            }
            assert_eq!(&buf[..], &expected[..buf.len()]);
            next_offset += buf.len() as u64;
        }
        assert_eq!(next_offset, size as u64);
    }
}
