use std::time::Instant;
use std::{ops::Range, sync::Arc};

use async_channel::{unbounded, Receiver};
use bytes::Bytes;
use futures::task::{Spawn, SpawnExt};
use futures::{pin_mut, StreamExt};
use mountpoint_s3_client::{types::ETag, types::GetObjectRequest, ObjectClient};
use tracing::{debug, debug_span, trace, warn, Instrument};

use crate::checksums::ChecksummedBytes;
use crate::data_cache::{BlockIndex, DataCache};
use crate::object::ObjectId;
use crate::prefetch::part::Part;
use crate::prefetch::part_queue::{unbounded_part_queue, PartQueueProducer};
use crate::prefetch::part_stream::{ObjectPartStream, RequestRange};
use crate::prefetch::task::RequestTask;
use crate::prefetch::PrefetchReadError;

/// [ObjectPartStream] implementation which maintains a [DataCache] for the object data
/// retrieved by an [ObjectClient].
#[derive(Debug)]
pub struct CachingPartStream<Cache, Runtime> {
    cache: Arc<Cache>,
    runtime: Runtime,
}

impl<Cache, Runtime> CachingPartStream<Cache, Runtime> {
    pub fn new(runtime: Runtime, cache: Cache) -> Self {
        Self {
            cache: Arc::new(cache),
            runtime,
        }
    }
}

impl<Cache, Runtime> ObjectPartStream for CachingPartStream<Cache, Runtime>
where
    Cache: DataCache + Send + Sync + 'static,
    Runtime: Spawn,
{
    fn spawn_get_object_request<Client>(
        &self,
        client: &Client,
        bucket: &str,
        key: &str,
        if_match: ETag,
        range: RequestRange,
        _preferred_part_size: usize,
    ) -> RequestTask<<Client as ObjectClient>::ClientError>
    where
        Client: ObjectClient + Clone + Send + Sync + 'static,
    {
        let start = range.start();
        let size = range.len();

        let (part_queue, part_queue_producer) = unbounded_part_queue();
        let (sender, receiver) = unbounded();
        trace!(?range, "spawning request");

        let initial_read_window_size = client
            .initial_read_window_size()
            .expect("Backpressure must be enable for caching stream client");
        debug_assert!(
            initial_read_window_size as u64 >= self.cache.block_size(),
            "initial read window size should not less than a block size"
        );
        let request_task = {
            let request = CachingRequest::new(
                client.clone(),
                self.cache.clone(),
                bucket.to_owned(),
                key.to_owned(),
                if_match,
                part_queue_producer,
                initial_read_window_size,
            );
            let span = debug_span!("prefetch", ?range);
            request.get_from_cache(range, receiver).instrument(span)
        };

        let task_handle = self.runtime.spawn_with_handle(request_task).unwrap();

        RequestTask::from_handle(task_handle, size, start, part_queue, sender)
    }
}

#[derive(Debug)]
struct CachingRequest<Client: ObjectClient, Cache> {
    client: Client,
    cache: Arc<Cache>,
    bucket: String,
    cache_key: ObjectId,
    part_queue_producer: PartQueueProducer<Client::ClientError>,
    initial_read_window_size: usize,
    cache_read_window_size: usize,
}

impl<Client, Cache> CachingRequest<Client, Cache>
where
    Client: ObjectClient + Send + Sync + 'static,
    Cache: DataCache + Send + Sync,
{
    fn new(
        client: Client,
        cache: Arc<Cache>,
        bucket: String,
        key: String,
        etag: ETag,
        part_queue_producer: PartQueueProducer<Client::ClientError>,
        initial_read_window_size: usize,
    ) -> Self {
        let cache_key = ObjectId::new(key, etag);
        Self {
            client,
            cache,
            bucket,
            cache_key,
            part_queue_producer,
            initial_read_window_size,
            cache_read_window_size: initial_read_window_size,
        }
    }

    async fn get_from_cache(mut self, range: RequestRange, receiver: Receiver<usize>) {
        let cache_key = &self.cache_key;
        let block_size = self.cache.block_size();
        let block_range = self.block_indices_for_byte_range(&range);

        // Scan the blocks and feed them from the cache. If a block is missing or invalid,
        // start a GetObject request on the client for the remainder of the stream.
        // We could check for missing blocks in advance and pre-emptively start a GetObject
        // request, but since this stream is already behind the prefetcher, the delay is
        // already likely negligible.
        let mut block_offset = block_range.start * block_size;

        // Extend the read window by the diff in ranges, the prefetcher does not know that
        // the cache stream might have increased the range of the request on its own.
        let offset_diff = range.start().saturating_sub(block_offset);
        self.cache_read_window_size += offset_diff as usize;

        for block_index in block_range.clone() {
            match self.cache.get_block(cache_key, block_index, block_offset) {
                Ok(Some(block)) => {
                    trace!(?cache_key, ?range, block_index, "cache hit");

                    // Update remaining window
                    self.cache_read_window_size = self.cache_read_window_size.saturating_sub(block_size as usize);
                    let next_read_window_offset = block_offset + block_size + self.cache_read_window_size as u64;

                    let part = self.make_part(block, block_index, block_offset, &range);
                    self.part_queue_producer.push(Ok(part), Some(next_read_window_offset));
                    block_offset += block_size;

                    if self.cache_read_window_size > 0 {
                        if let Ok(len) = receiver.try_recv() {
                            self.cache_read_window_size += len;
                        }
                    } else if range.end() > block_offset {
                        debug!(
                            block_offset,
                            last_offset = range.end(),
                            "blocking for cache's read window increment"
                        );
                        let recv = receiver.recv().await;
                        match recv {
                            Ok(len) => {
                                self.cache_read_window_size += len;
                            }
                            Err(_) => {
                                self.part_queue_producer
                                    .push(Err(PrefetchReadError::ReadWindowIncrement), None);
                                break;
                            }
                        }
                    }
                    continue;
                }
                Ok(None) => trace!(?cache_key, block_index, ?range, "cache miss - no data for block"),
                Err(error) => warn!(
                    ?cache_key,
                    block_index,
                    ?range,
                    ?error,
                    "error reading block from cache",
                ),
            }
            // If a block is uncached or reading it fails, fallback to S3 for the rest of the stream.
            metrics::counter!("prefetch.blocks_served_from_cache").increment(block_index - block_range.start);
            metrics::counter!("prefetch.blocks_requested_to_client").increment(block_range.end - block_index);
            return self
                .get_from_client(range.trim_start(block_offset), block_index..block_range.end, receiver)
                .await;
        }
        // We served the whole range from cache.
        metrics::counter!("prefetch.blocks_served_from_cache").increment(block_range.end - block_range.start);
    }

    async fn get_from_client(&self, range: RequestRange, block_range: Range<u64>, receiver: Receiver<usize>) {
        let key = self.cache_key.key();
        let block_size = self.cache.block_size();
        assert!(block_size > 0);

        // Always request a range aligned with block boundaries (or to the end of the object).
        let block_aligned_byte_range =
            (block_range.start * block_size)..(block_range.end * block_size).min(range.object_size() as u64);

        trace!(
            ?key,
            range =? block_aligned_byte_range,
            original_range =? range,
            "fetching data from client"
        );
        let get_object_request = match self
            .client
            .get_object(
                &self.bucket,
                key,
                Some(block_aligned_byte_range.clone()),
                Some(self.cache_key.etag().clone()),
            )
            .await
        {
            Ok(get_object_request) => get_object_request,
            Err(e) => {
                warn!(key, error=?e, "GetObject request failed");
                self.part_queue_producer
                    .push(Err(PrefetchReadError::GetRequestFailed(e)), None);
                return;
            }
        };

        pin_mut!(get_object_request);

        // Increment client's read window by the cache's remaining read window size
        let remaining_read_window_size = self
            .cache_read_window_size
            .saturating_sub(self.initial_read_window_size);
        get_object_request
            .as_mut()
            .increment_read_window(remaining_read_window_size);

        let mut block_index = block_range.start;
        let mut block_offset = block_range.start * block_size;
        let mut buffer = ChecksummedBytes::default();
        loop {
            assert!(
                buffer.len() < block_size as usize,
                "buffer should be flushed when we get a full block"
            );
            match get_object_request.next().await {
                Some(Ok((offset, body))) => {
                    trace!(offset, length = body.len(), "received GetObject part");
                    metrics::counter!("s3.client.total_bytes", "type" => "read").increment(body.len() as u64);

                    let expected_offset = block_offset + buffer.len() as u64;
                    if offset != expected_offset {
                        warn!(key, offset, expected_offset, "wrong offset for GetObject body part");
                        self.part_queue_producer.push(
                            Err(PrefetchReadError::GetRequestReturnedWrongOffset {
                                offset,
                                expected_offset,
                            }),
                            None,
                        );
                        break;
                    }
                    let next_offset = offset + body.len() as u64;
                    debug_assert!(
                        next_offset <= block_aligned_byte_range.end,
                        "current offset must be withing the block range"
                    );

                    let mut body: Bytes = body.into();

                    let next_read_window_offset = get_object_request.as_ref().next_read_window_offset();
                    let remaining_window_size = next_read_window_offset.saturating_sub(next_offset);

                    // S3 doesn't provide checksum for us if the request range is not aligned to
                    // object part boundaries, so we're computing our own checksum here.
                    let checksum_bytes = ChecksummedBytes::new(body.clone());
                    let part_range = range.trim_start(offset).trim_end(offset + body.len() as u64);
                    let trim_start = (part_range.start().saturating_sub(offset)) as usize;
                    let trim_end = (part_range.end().saturating_sub(offset)) as usize;
                    // Return only if requested data is in the range.
                    // The initial read window should be equal or larger than a block size or the request could be blocked.
                    if trim_end > trim_start {
                        trace!(?part_range, trim_start, trim_end, "trimming body");
                        let bytes = checksum_bytes.slice(trim_start..trim_end);

                        let part = Part::new(self.cache_key.clone(), part_range.start(), bytes);
                        self.part_queue_producer.push(Ok(part), Some(next_read_window_offset));
                    }

                    // Split the body into blocks and save into the cache.
                    while !body.is_empty() {
                        let remaining = (block_size as usize).saturating_sub(buffer.len()).min(body.len());
                        let chunk = body.split_to(remaining);

                        if let Err(e) = buffer.extend(chunk.into()) {
                            warn!(key, error=?e, "integrity check for body part failed");
                            self.part_queue_producer.push(Err(e.into()), None);
                            return;
                        }
                        if buffer.len() < block_size as usize {
                            trace!(buffer_size = buffer.len(), block_size, "not enough data for a block");
                            break;
                        }

                        // We have a full block: write it to the cache, send it to the queue, and flush the buffer.
                        self.update_cache(block_index, block_offset, &buffer);
                        block_index += 1;
                        block_offset += block_size;
                        buffer = ChecksummedBytes::default();
                    }

                    if remaining_window_size > 0 {
                        if let Ok(len) = receiver.try_recv() {
                            get_object_request.as_mut().increment_read_window(len);
                        }
                    } else if block_aligned_byte_range.end != next_offset {
                        debug!(
                            next_offset,
                            last_offset = block_aligned_byte_range.end,
                            "blocking for client's read window increment"
                        );
                        let recv = receiver.recv().await;
                        match recv {
                            Ok(len) => get_object_request.as_mut().increment_read_window(len),
                            Err(_) => {
                                self.part_queue_producer
                                    .push(Err(PrefetchReadError::ReadWindowIncrement), None);
                                break;
                            }
                        }
                    }
                }
                Some(Err(e)) => {
                    warn!(key, error=?e, "GetObject body part failed");
                    self.part_queue_producer
                        .push(Err(PrefetchReadError::GetRequestFailed(e)), None);
                    break;
                }
                None => {
                    if !buffer.is_empty() {
                        // If we still have data in the buffer, this must be the last block for this object,
                        // which can be smaller than block_size (and ends at the end of the object).
                        assert_eq!(
                            block_offset as usize + buffer.len(),
                            range.object_size(),
                            "a partial block is only allowed at the end of the object"
                        );
                        // Write the last block to the cache.
                        self.update_cache(block_index, block_offset, &buffer);
                        self.part_queue_producer
                            .push(Ok(self.make_part(buffer, block_index, block_offset, &range)), Some(0));
                    }
                    break;
                }
            }
        }
        trace!("request finished");
    }

    fn update_cache(&self, block_index: u64, block_offset: u64, block: &ChecksummedBytes) {
        // TODO: consider updating the cache asynchronously
        let start = Instant::now();
        match self
            .cache
            .put_block(self.cache_key.clone(), block_index, block_offset, block.clone())
        {
            Ok(()) => {}
            Err(error) => {
                warn!(key=?self.cache_key.key(), block_index, ?error, "failed to update cache");
            }
        };
        metrics::histogram!("prefetch.cache_update_duration_us").record(start.elapsed().as_micros() as f64);
    }

    /// Creates a Part that can be streamed to the prefetcher from the given cache block.
    /// If required, trims the block bytes to the request range.
    fn make_part(&self, block: ChecksummedBytes, block_index: u64, block_offset: u64, range: &RequestRange) -> Part {
        assert_eq!(
            block_offset,
            block_index * self.cache.block_size(),
            "invalid block offset"
        );

        let cache_key = &self.cache_key;
        let block_size = block.len();
        let part_range = range
            .trim_start(block_offset)
            .trim_end(block_offset + block_size as u64);
        trace!(
            ?cache_key,
            block_index,
            ?part_range,
            block_offset,
            block_size,
            "creating part from block data",
        );

        let trim_start = (part_range.start().saturating_sub(block_offset)) as usize;
        let trim_end = (part_range.end().saturating_sub(block_offset)) as usize;
        let bytes = block.slice(trim_start..trim_end);
        Part::new(cache_key.clone(), part_range.start(), bytes)
    }

    fn block_indices_for_byte_range(&self, range: &RequestRange) -> Range<BlockIndex> {
        let block_size = self.cache.block_size();
        let start_block = range.start() / block_size;
        let mut end_block = range.end() / block_size;
        if !range.is_empty() && range.end() % block_size != 0 {
            end_block += 1;
        }

        start_block..end_block
    }
}

#[cfg(test)]
mod tests {
    // It's convenient to write test constants like "1 * 1024 * 1024" for symmetry
    #![allow(clippy::identity_op)]

    use std::{
        sync::mpsc::{self, RecvTimeoutError},
        thread,
        time::Duration,
    };

    use futures::executor::{block_on, ThreadPool};
    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig, MockObject, Operation};
    use test_case::test_case;
    use tracing::error;

    use crate::data_cache::InMemoryDataCache;

    use super::*;

    const KB: usize = 1024;
    const MB: usize = 1024 * 1024;

    #[test_case(1 * MB, 8 * MB, 16 * MB, 0, 16 * MB; "whole object")]
    #[test_case(1 * MB, 8 * MB, 16 * MB, 1 * MB, 3 * MB + 512 * KB; "aligned offset")]
    #[test_case(1 * MB, 8 * MB, 16 * MB, 512 * KB, 3 * MB; "non-aligned range")]
    #[test_case(3 * MB, 8 * MB, 14 * MB, 0, 14 * MB; "whole object, size not aligned to parts or blocks")]
    #[test_case(3 * MB, 8 * MB, 14 * MB, 9 * MB, 100 * MB; "aligned offset, size not aligned to parts or blocks")]
    #[test_case(1 * MB, 8 * MB, 100 * KB, 0, 100 * KB; "small object")]
    #[test_case(8 * MB, 5 * MB, 16 * MB, 0, 16 * MB; "cache blocks larger than client parts")]
    fn test_read_from_cache(
        block_size: usize,
        client_part_size: usize,
        object_size: usize,
        offset: usize,
        preferred_size: usize,
    ) {
        let key = "object";
        let seed = 0xaa;
        let object = MockObject::ramp(seed, object_size, ETag::for_tests());
        let etag = object.etag();
        let id = ObjectId::new(key.to_owned(), object.etag());
        let initial_read_window_size = client_part_size.max(block_size);

        let cache = InMemoryDataCache::new(block_size as u64);
        let bucket = "test-bucket";
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: client_part_size,
            enable_backpressure: true,
            initial_read_window_size,
            ..Default::default()
        };
        let mock_client = Arc::new(MockClient::new(config));
        mock_client.add_object(key, object.clone());

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let stream = CachingPartStream::new(runtime, cache);
        let range = RequestRange::new(object_size, offset as u64, preferred_size);

        let first_read_count = {
            // First request (from client)
            let get_object_counter = mock_client.new_counter(Operation::GetObject);
            let request_task = stream.spawn_get_object_request(&mock_client, bucket, key, etag.clone(), range, 0);
            compare_read(&id, &object, request_task);
            get_object_counter.count()
        };
        assert!(first_read_count > 0);

        let second_read_count = {
            // Second request (from cache)
            let get_object_counter = mock_client.new_counter(Operation::GetObject);
            let request_task = stream.spawn_get_object_request(&mock_client, bucket, key, etag.clone(), range, 0);
            compare_read(&id, &object, request_task);
            get_object_counter.count()
        };
        assert_eq!(second_read_count, 0);
    }

    #[test_case(1 * MB, 8 * MB)]
    #[test_case(8 * MB, 8 * MB)]
    #[test_case(1 * MB, 5 * MB + 1)]
    #[test_case(1 * MB + 1, 5 * MB)]
    fn test_get_object_parts(block_size: usize, client_part_size: usize) {
        let key = "object";
        let object_size = 16 * MB;
        let seed = 0xaa;
        let object = MockObject::ramp(seed, object_size, ETag::for_tests());
        let etag = object.etag();
        let id = ObjectId::new(key.to_owned(), object.etag());
        let initial_read_window_size = client_part_size;

        let cache = InMemoryDataCache::new(block_size as u64);
        let bucket = "test-bucket";
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: client_part_size,
            enable_backpressure: true,
            initial_read_window_size,
            ..Default::default()
        };
        let mock_client = Arc::new(MockClient::new(config));
        mock_client.add_object(key, object.clone());

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let stream = CachingPartStream::new(runtime, cache);

        for offset in [0, 512 * KB, 1 * MB, 4 * MB, 9 * MB] {
            for preferred_size in [1 * KB, 512 * KB, 4 * MB, 12 * MB, 16 * MB] {
                let range = RequestRange::new(object_size, offset as u64, preferred_size);
                let request_task = stream.spawn_get_object_request(&mock_client, bucket, key, etag.clone(), range, 0);
                compare_read(&id, &object, request_task);
            }
        }
    }

    #[test_case(1 * MB, 8 * MB, 16 * MB, 0, 16 * MB; "whole object")]
    #[test_case(1 * MB, 8 * MB, 16 * MB, 3 * MB, 16 * MB; "non-zero offset")]
    #[test_case(8 * MB, 5 * MB, 16 * MB, 0, 16 * MB; "cache blocks larger than client parts")]
    fn test_stream_is_blocked_by_read_window(
        block_size: usize,
        client_part_size: usize,
        object_size: usize,
        offset: usize,
        request_size: usize,
    ) {
        let key = "object";
        let seed = 0xaa;
        let object = MockObject::ramp(seed, object_size, ETag::for_tests());
        let etag = object.etag();
        let id = ObjectId::new(key.to_owned(), object.etag());
        let initial_read_window_size = client_part_size.max(block_size);

        let cache = InMemoryDataCache::new(block_size as u64);
        let bucket = "test-bucket";
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: client_part_size,
            enable_backpressure: true,
            initial_read_window_size,
            ..Default::default()
        };
        let mock_client = Arc::new(MockClient::new(config));
        mock_client.add_object(key, object.clone());

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let stream = CachingPartStream::new(runtime, cache);
        let range = RequestRange::new(object_size, offset as u64, request_size);

        let first_read_count = {
            // First request (from client)
            let get_object_counter = mock_client.new_counter(Operation::GetObject);
            let request_task = stream.spawn_get_object_request(&mock_client, bucket, key, etag.clone(), range, 0);
            compare_read(&id, &object, request_task);
            get_object_counter.count()
        };
        assert!(first_read_count > 0);

        let (sender, receiver) = mpsc::channel();
        thread::spawn(move || {
            let get_object_counter = mock_client.new_counter(Operation::GetObject);
            let mut request_task = stream.spawn_get_object_request(&mock_client, bucket, key, etag.clone(), range, 0);

            // Should be able to read data up to the size of read window
            let read_length = initial_read_window_size;
            let mut next_offset = offset as u64;
            let mut to_read = read_length;
            let mut response = ChecksummedBytes::default();
            while to_read > 0 {
                match block_on(request_task.read(to_read)) {
                    Ok(part) => {
                        let bytes = part.into_bytes(&id, next_offset).unwrap();
                        next_offset += bytes.len() as u64;
                        to_read -= bytes.len();
                        response.extend(bytes).unwrap();
                    }
                    Err(err) => error!("Failed to read data {}", err),
                }
            }
            let expected = object.read(offset as u64, read_length);
            assert_eq!(expected.len(), response.len());
            let bytes = response.into_bytes().unwrap();
            assert_eq!(bytes, *expected);
            assert_eq!(get_object_counter.count(), 0);

            // This await should be blocked
            let part = block_on(request_task.read(read_length)).unwrap();
            let bytes = part.into_bytes(&id, next_offset).unwrap();
            sender.send(bytes).unwrap();
        });
        match receiver.recv_timeout(Duration::from_millis(1000)) {
            Ok(_) => panic!("request should have been blocked"),
            Err(e) => assert_eq!(e, RecvTimeoutError::Timeout),
        }
    }

    fn compare_read<E: std::error::Error + Send + Sync>(
        id: &ObjectId,
        object: &MockObject,
        mut request_task: RequestTask<E>,
    ) {
        let read_window_size = 1 * 1024 * 1024;
        let mut offset = request_task.start_offset();
        let mut remaining = request_task.total_size();
        while remaining > 0 {
            let part = block_on(request_task.read(remaining)).unwrap();
            let remaining_window = request_task
                .next_read_window_offset()
                .saturating_sub(offset + part.len() as u64);
            if remaining_window == 0 {
                request_task.increment_read_window(read_window_size.min(remaining));
            }
            let bytes = part.into_bytes(id, offset).unwrap();

            let expected = object.read(offset, bytes.len());
            let bytes = bytes.into_bytes().unwrap();
            assert_eq!(bytes, *expected);

            offset += bytes.len() as u64;
            remaining -= bytes.len();
        }
    }
}
