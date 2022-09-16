//! This module implements a "streaming" GetObject request.
//!
//! The CRT's GetObject request is very eager -- it sets out to download the desired (range of an)
//! object as fast as possible. This is great for fast consumers, but it means there's not a great
//! way to apply backpressure if the consumer is slower. The CRT will happily accumulate the entire
//! object in memory if the consumer can't keep up with the rate of parts arriving.
//!
//! This module's `StreamingGetRequest` applies backpressure to the CRT by only requesting the
//! object in "chunks". Each chunk is sized large enough for the CRT to be able to make effective
//! use of many concurrent S3 requests, but small enough that we can tolerate holding a few entire
//! chunks in memory if the consumer runs slowly. The `StreamingGetRequest` dynamically requests new
//! chunks in line with the rate they're consumed.
//!
//! TODO this code only supports reading the entire object, and does not react well to failures.
//!
//! A quick glossary:
//! * Object: an entire S3 object (or a range of one). The thing the customer wants to read.
//! * Chunk: a large-ish part of the object. A chunk corresponds to one GetObject request submitted
//!          to the CRT. A `StreamingGetObject` has multiple chunks inflight at once.
//! * Part: a single part of an object as delivered by the CRT from a GetObject request. A chunk is
//!         many parts; one part is delivered by the CRT in one callback invocation.

use std::borrow::Cow;
use std::collections::VecDeque;
use std::fmt::Debug;
use std::sync::atomic::{AtomicU64, AtomicUsize, Ordering};
use std::sync::{Arc, Condvar, Mutex, RwLock};

use tracing::{debug, trace};

use crate::S3Client;

/// TODO connect this to client config
const PART_SIZE: u64 = 8 * (1 << 20);

/// A chunk will be exposed to the CRT in one piece, so we want it big enough that it can make good
/// use of a lot of concurrency to S3, but small enough that we can keep the whole chunk in memory
/// if we're consuming it too slowly.
///
/// Here's the napkin math: I wanted to shoot for an entitlement of 3GB/s per `StreamingGetRequest`
/// (a number I just made up that sounded reasonable). The CRT's math says that a single VIP can
/// offer up to 4Gbit/s (`s_throughput_per_vip_gbps`), and will allow up to 10 connections
/// (`g_max_num_connections_per_vip`). So a single connection to a single VIP offers 0.4Gbit =
/// 50MB/s of throughput, and so we need 3000/50 = 60 concurrent connections to hit our 3GB/s goal.
///
/// TODO make this configurable
/// TODO we really want to be more dynamic here -- if there's only a single request in flight,
/// expose more chunks to the CRT, but back off as more requests are spawned so that all the in
/// flight requests can share the available throughput.
/// TODO i think what we actually want here is for the CRT to do fair scheduling across requests.
const PARTS_PER_CHUNK: usize = 60;
const CHUNK_SIZE: u64 = PARTS_PER_CHUNK as u64 * PART_SIZE;
/// TODO don't duplicate this from CRT
const THROUGHPUT_PER_CONNECTION_GBPS: f64 = 0.05;

/// How many chunks can be in flight at once. We use this to smooth out the concurrency of chunks:
/// as one chunk is almost completely downloaded, it has little concurrency remaining, so the other
/// parallel chunks make use of those otherwise empty slots.
///
/// We're exploiting some understanding of the CRT's scheduler here: we know that it prefers to
/// saturate earlier requests first, so adding additional chunks won't slow down the current (first)
/// chunk.
///
/// This number was just derived empirically -- 2 was my first guess but wasn't enough. This roughly
/// corelates with the CRT's `s_max_requests_multiplier`, which is also 4, and is used to decide how
/// many requests can be inflight: to have N threads doing useful work (downloading bytes), it
/// allows up to 4*N requests to exist, on the premise that the others are doing connection
/// setup/teardown.
const MAX_CHUNKS_MULTIPLIER: usize = 4;

/// When the current (first) chunk has only 1/PARALLEL_CHUNK_REFILL_FACTOR of its bytes remaining to
/// consume (not just to download), we will spawn the next parallel chunk request. This value
/// controls how aggressively we use the CRT's available concurrency: higher values mean less
/// *contention* for that concurrency (later requests contending with earlier ones) but more *risk
/// of starving* it if we suddenly get slow consuming bytes.
///
/// 1/2 seemed like a good default.
const PARALLEL_CHUNK_REFILL_FACTOR: usize = 2;

/// A single body part as returned by the CRT, together with a cursor into the part. The idea is to
/// be able to do do zero-copy reads from the part if you own it.
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

/// A single chunk of a `StreamingGetRequest`.
struct StreamingChunk {
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

impl StreamingChunk {
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
    fn pop(&self) -> (u64, Box<[u8]>) {
        let mut queue = self.queue.lock().unwrap();
        while queue.is_empty() {
            trace!(chunk=?self as *const _, "StreamingChunk waiting for new part");
            queue = self.data_available.wait(queue).expect("cond failed");
        }
        let ret = queue.pop_front().unwrap();
        trace!(chunk=?self as *const _, remaining_buffers = queue.len(), "read buffer from queue");
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
    fn push(&self, offset: u64, body: &[u8]) {
        let mut queue = self.queue.lock().unwrap();
        trace!(
            chunk=?self as *const _,
            length = body.len(),
            remaining_buffers = queue.len(),
            "push buffer on queue"
        );
        self.remaining_to_download
            .fetch_sub(body.len() as u64, Ordering::SeqCst);
        queue.push_back((offset, body.into()));
        self.data_available.notify_one();
    }

    fn remaining_to_consume(&self) -> u64 {
        self.remaining_to_consume.load(Ordering::SeqCst)
    }

    fn finished(&self) -> bool {
        self.remaining_to_consume() == 0
    }
}

struct InflightRequestToken;

impl InflightRequestToken {
    fn new() -> Self {
        INFLIGHT_REQUEST_TRACKER.fetch_add(1, Ordering::Relaxed);
        InflightRequestToken
    }
}

impl Drop for InflightRequestToken {
    fn drop(&mut self) {
        INFLIGHT_REQUEST_TRACKER.fetch_sub(1, Ordering::Relaxed);
    }
}

/// TODO giant hack, don't make this a static... it should be per-client
static INFLIGHT_REQUEST_TRACKER: AtomicUsize = AtomicUsize::new(0);

/// A GetObject request that automatically divides the desired range into chunks and requests chunks
/// in parallel to best utilize the available throughput.
///
/// TODO could we replace this with a separate S3Client per request that configures the throughput
/// target appropriately? Depends if multiple clients can share the same pool of VIPs.
pub struct StreamingGetObject {
    client: Arc<S3Client>,
    parallel_chunks: Arc<RwLock<VecDeque<Arc<StreamingChunk>>>>,
    _inflight_request: InflightRequestToken,
    current_part: PartCursor,
    next_part_offset: u64,
    next_chunk_offset: u64,
    next_chunk_size: u64,
    bucket: String,
    key: String,
    object_size: u64,
}

impl Debug for StreamingGetObject {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        f.debug_struct("StreamingGetObject")
            .field("next_part_offset", &self.next_part_offset)
            .field("next_chunk_offset", &self.next_chunk_offset)
            .field("next_chunk_size", &self.next_chunk_size)
            .field("bucket", &self.bucket)
            .field("key", &self.key)
            .field("object_size", &self.object_size)
            .finish()
    }
}

impl StreamingGetObject {
    /// Create and spawn a new streaming request
    pub fn new(client: Arc<S3Client>, bucket: &str, key: &str, size: u64) -> Self {
        let num_chunks = (size + CHUNK_SIZE - 1) / CHUNK_SIZE;
        assert!(num_chunks > 0);

        // The first chunk will be the leftover non-CHUNK_SIZE part
        let chunk_start = 0;
        let mut chunk_size = size % CHUNK_SIZE;
        if chunk_size == 0 {
            chunk_size = CHUNK_SIZE;
        }

        let mut request = StreamingGetObject {
            client,
            parallel_chunks: Default::default(),
            current_part: PartCursor::new([].into()),
            _inflight_request: InflightRequestToken::new(),
            next_part_offset: 0,
            next_chunk_offset: chunk_start,
            next_chunk_size: chunk_size,
            object_size: size,
            bucket: bucket.to_owned(),
            key: key.to_owned(),
        };

        request.refill_chunk_queue();

        request
    }

    /// Read some bytes from the object. Blocks until the desired bytes are available or EOF. This
    /// function will always return exactly `size` bytes, except at the end of the object where it
    /// will return however many bytes are left (including possible 0 bytes).
    ///
    /// TODO reads have to be sequential right now, but we don't enforce that properly.
    pub fn read(&mut self, offset: u64, size: usize) -> Cow<'_, [u8]> {
        trace!(request=?self as *const _, offset, size, "StreamingGetObject read");

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

        let mut parallel_chunks = self.parallel_chunks.read().unwrap();

        let mut current_chunk = parallel_chunks.front().expect("cannot read with no chunks left");
        // Check if we're done with the current chunk. If so, push it off the queue and grab the
        // next one instead.
        if current_chunk.finished() {
            drop(parallel_chunks);
            let _ = self.parallel_chunks.write().unwrap().pop_front().unwrap();
            parallel_chunks = self.parallel_chunks.read().unwrap();
            current_chunk = parallel_chunks
                .front()
                .expect("cannot read with no non-empty chunks left");
        }

        let (next_offset, next_bytes) = current_chunk.pop();
        assert_eq!(next_offset, self.next_part_offset);
        self.next_part_offset += next_bytes.len() as u64;
        self.current_part = PartCursor::new(next_bytes);

        drop(parallel_chunks);

        // Consider refilling the request queue since we might have taken the part that pushes us
        // over the refill threshold
        self.refill_chunk_queue();
    }

    /// Spawn requests for new chunks until the chunk queue is filled.
    fn refill_chunk_queue(&mut self) {
        if self.next_chunk_offset >= self.object_size {
            return;
        }

        let mut parallel_chunks = self.parallel_chunks.read().unwrap();

        // TODO this is a big hack; we want the CRT to do this part for us -- fairly schedule among
        // all in-flight requests.
        let throughput_target_gbps = self.client.throughput_target_gbps();
        let max_connections = (throughput_target_gbps / THROUGHPUT_PER_CONNECTION_GBPS) as usize;
        let my_max_connections = max_connections
            .saturating_div(INFLIGHT_REQUEST_TRACKER.load(Ordering::Relaxed))
            .max(PARTS_PER_CHUNK);
        let my_max_chunks = (my_max_connections + PARTS_PER_CHUNK - 1) * MAX_CHUNKS_MULTIPLIER / PARTS_PER_CHUNK;

        while parallel_chunks.len() < my_max_chunks {
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
                let chunk = Arc::new(StreamingChunk::new(self.next_chunk_size));

                self.next_chunk_offset += self.next_chunk_size;
                self.next_chunk_size = CHUNK_SIZE;

                debug!(request=?self as *const _, ?range, inflight_chunks=parallel_chunks.len(), "starting new chunk");

                // Request object doesn't need to survive as we won't block on it
                // TODO we probably want to hold onto this thing for cancellation purposes
                let _request = {
                    let chunk = Arc::clone(&chunk);
                    self.client
                        .get_object(&self.bucket, &self.key, range, move |offset, body| {
                            chunk.push(offset, body);
                        })
                        .expect("failed to start GetObject")
                };

                parallel_chunks.push_back(chunk);
            }
            parallel_chunks = self.parallel_chunks.read().unwrap();
        }
    }
}
