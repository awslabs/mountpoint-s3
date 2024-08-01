use std::time::Instant;
use std::{ops::Range, sync::Arc};

use async_channel::{unbounded, Receiver};
use bytes::Bytes;
use futures::task::{Spawn, SpawnExt};
use futures::{pin_mut, try_join, StreamExt};
use mountpoint_s3_client::ObjectClient;
use tracing::{debug_span, trace, warn, Instrument};

use crate::checksums::ChecksummedBytes;
use crate::data_cache::{BlockIndex, DataCache};
use crate::object::ObjectId;
use crate::prefetch::backpressure_controller::new_backpressure_controller;
use crate::prefetch::part::Part;
use crate::prefetch::part_queue::{unbounded_part_queue, PartQueueProducer};
use crate::prefetch::part_stream::{read_from_request, ObjectPartStream, RequestRange, RequestReaderOutput};
use crate::prefetch::task::RequestTask;
use crate::prefetch::PrefetchReadError;

use super::backpressure_controller::BackpressureLimiter;
use super::part_stream::RequestTaskConfig;

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
        client: Arc<Client>,
        config: RequestTaskConfig,
    ) -> RequestTask<<Client as ObjectClient>::ClientError>
    where
        Client: ObjectClient + Send + Sync + 'static,
    {
        let initial_read_window_offset = config.range.start() + config.initial_read_window_size as u64;
        let range = config.range;

        let (backpressure_controller, backpressure_limiter) = new_backpressure_controller(
            config.initial_read_window_size,
            config.max_read_window_size,
            config.read_window_size_multiplier,
            initial_read_window_offset,
            range.into(),
        );
        let (part_queue, part_queue_producer) = unbounded_part_queue(Some(backpressure_controller));
        trace!(range=?config.range, "spawning request");

        let request_task = {
            let request = CachingRequest::new(client.clone(), self.cache.clone(), backpressure_limiter, config);
            let span = debug_span!("prefetch", ?range);
            request
                .get_from_cache(range, initial_read_window_offset, part_queue_producer)
                .instrument(span)
        };

        let task_handle = self.runtime.spawn_with_handle(request_task).unwrap();

        RequestTask::from_handle(task_handle, range, part_queue)
    }
}

#[derive(Debug)]
struct CachingRequest<Client: ObjectClient, Cache> {
    client: Arc<Client>,
    cache: Arc<Cache>,
    backpressure_limiter: BackpressureLimiter,
    config: RequestTaskConfig,
}

impl<Client, Cache> CachingRequest<Client, Cache>
where
    Client: ObjectClient + Send + Sync + 'static,
    Cache: DataCache + Send + Sync,
{
    fn new(
        client: Arc<Client>,
        cache: Arc<Cache>,
        backpressure_limiter: BackpressureLimiter,
        config: RequestTaskConfig,
    ) -> Self {
        Self {
            client,
            cache,
            backpressure_limiter,
            config,
        }
    }

    async fn get_from_cache(
        mut self,
        range: RequestRange,
        initial_read_window_offset: u64,
        part_queue_producer: PartQueueProducer<Client::ClientError>,
    ) {
        let cache_key = &self.config.object_id;
        let block_size = self.cache.block_size();
        let block_range = self.block_indices_for_byte_range(&range);

        // Scan the blocks and feed them from the cache. If a block is missing or invalid,
        // start a GetObject request on the client for the remainder of the stream.
        // We could check for missing blocks in advance and pre-emptively start a GetObject
        // request, but since this stream is already behind the prefetcher, the delay is
        // already likely negligible.
        let mut block_offset = block_range.start * block_size;

        for block_index in block_range.clone() {
            match self.cache.get_block(cache_key, block_index, block_offset) {
                Ok(Some(block)) => {
                    trace!(?cache_key, ?range, block_index, "cache hit");

                    let part = make_part(block, block_index, block_offset, block_size, cache_key, &range);
                    part_queue_producer.push(Ok(part));
                    block_offset += block_size;

                    if let Err(e) = self
                        .backpressure_limiter
                        .wait_for_read_window_increment(block_offset)
                        .await
                    {
                        part_queue_producer.push(Err(e));
                        break;
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
            if let Err(e) = self
                .get_from_client(
                    range.trim_start(block_offset),
                    block_index..block_range.end,
                    initial_read_window_offset,
                    part_queue_producer.clone(),
                )
                .await
            {
                part_queue_producer.push(Err(e));
            }
            return;
        }
        // We served the whole range from cache.
        metrics::counter!("prefetch.blocks_served_from_cache").increment(block_range.end - block_range.start);
    }

    async fn get_from_client(
        &mut self,
        range: RequestRange,
        block_range: Range<u64>,
        initial_read_window_offset: u64,
        part_queue_producer: PartQueueProducer<Client::ClientError>,
    ) -> Result<(), PrefetchReadError<Client::ClientError>> {
        let bucket = &self.config.bucket;
        let cache_key = &self.config.object_id;
        let block_size = self.cache.block_size();
        assert!(block_size > 0);

        // Always request a range aligned with block boundaries (or to the end of the object).
        let block_aligned_byte_range =
            (block_range.start * block_size)..(block_range.end * block_size).min(range.object_size() as u64);
        let request_len = (block_aligned_byte_range.end - block_aligned_byte_range.start) as usize;
        let block_aligned_byte_range =
            RequestRange::new(range.object_size(), block_aligned_byte_range.start, request_len);

        trace!(
            key = self.config.object_id.key(),
            range =? block_aligned_byte_range,
            original_range =? range,
            "fetching data from client"
        );

        let mut part_composer = CachingPartComposer {
            part_queue_producer,
            cache_key: cache_key.clone(),
            preferred_part_size: self.config.preferred_part_size,
            original_range: range,
            block_index: block_range.start,
            block_offset: block_range.start * block_size,
            buffer: ChecksummedBytes::default(),
            cache: self.cache.clone(),
        };

        // Start by issuing the first request that has a range up to initial read window offset.
        // This is an optimization to lower time to first bytes, see more details in ClientPartStream about why this is needed.
        let first_req_range = block_aligned_byte_range.trim_end(initial_read_window_offset);
        if !first_req_range.is_empty() {
            let (body_sender, body_receiver) = unbounded();
            let request_reader_future = read_from_request(
                body_sender,
                &mut self.backpressure_limiter,
                self.client.clone(),
                bucket.clone(),
                cache_key.clone(),
                first_req_range.into(),
            );
            let part_composer_future = part_composer.compose_parts(body_receiver);
            try_join!(request_reader_future, part_composer_future)?;
        }

        // After the first request is completed we will create the second request for the rest of the stream,
        // but only if there is something left to be fetched.
        let range = block_aligned_byte_range.trim_start(initial_read_window_offset);
        if !range.is_empty() {
            let (body_sender, body_receiver) = unbounded();
            let request_reader_future = read_from_request(
                body_sender,
                &mut self.backpressure_limiter,
                self.client.clone(),
                bucket.clone(),
                cache_key.clone(),
                range.into(),
            );
            let part_composer_future = part_composer.compose_parts(body_receiver);
            try_join!(request_reader_future, part_composer_future)?;
        }
        part_composer.flush();

        Ok(())
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

struct CachingPartComposer<E: std::error::Error, Cache> {
    part_queue_producer: PartQueueProducer<E>,
    cache_key: ObjectId,
    preferred_part_size: usize,
    original_range: RequestRange,
    block_index: u64,
    block_offset: u64,
    buffer: ChecksummedBytes,
    cache: Arc<Cache>,
}

impl<E, Cache> CachingPartComposer<E, Cache>
where
    E: std::error::Error + Send + Sync,
    Cache: DataCache + Send + Sync,
{
    async fn compose_parts(
        &mut self,
        body_receiver: Receiver<RequestReaderOutput>,
    ) -> Result<(), PrefetchReadError<E>> {
        let key = self.cache_key.key();
        let block_size = self.cache.block_size();

        pin_mut!(body_receiver);
        loop {
            assert!(
                self.buffer.len() < block_size as usize,
                "buffer should be flushed when we get a full block"
            );
            let Some((offset, body)) = body_receiver.next().await else {
                break;
            };

            let expected_offset = self.block_offset + self.buffer.len() as u64;
            if offset != expected_offset {
                warn!(key, offset, expected_offset, "wrong offset for GetObject body part");
                return Err(PrefetchReadError::GetRequestReturnedWrongOffset {
                    offset,
                    expected_offset,
                });
            }

            // S3 doesn't provide checksum for us if the request range is not aligned to
            // object part boundaries, so we're computing our own checksum here.
            let mut body: ChecksummedBytes = Bytes::from(body).into();

            // Return some bytes to the part queue even before we can fill an entire caching block because we want to
            // start the feedback loop for the flow-control window.
            //
            // We need to do this because the read window might be enough to fetch "some data" from S3 but not the entire block.
            // For example, consider that we got a file system read request with range 2MB to 4MB and we have to start
            // reading from block_offset=0 and block_size=5MB. The first read window might have a range up to 4MB which is enough
            // to serve the read request but if the prefetcher is not able to read anything it cannot tell the stream to move
            // its read window.
            //
            // A side effect from this is delay on the cache updating which is actually good for performance but it makes testing
            // a bit more complicated because the cache might not be updated immediately.
            let part_range = self
                .original_range
                .trim_start(offset)
                .trim_end(offset + body.len() as u64);
            let trim_start = (part_range.start().saturating_sub(offset)) as usize;
            let trim_end = (part_range.end().saturating_sub(offset)) as usize;
            // Put to the part queue only if returned data is in the actual request range.
            if trim_end > trim_start {
                self.part_queue_producer.split_and_push(
                    self.cache_key.clone(),
                    part_range.start(),
                    body.slice(trim_start..trim_end),
                    self.preferred_part_size,
                )?;
            }

            // Now we can fill the caching blocks.
            while !body.is_empty() {
                let remaining = (block_size as usize).saturating_sub(self.buffer.len()).min(body.len());
                let chunk = body.split_to(remaining);
                if let Err(e) = self.buffer.extend(chunk) {
                    warn!(key, error=?e, "integrity check for body part failed");
                    return Err(e.into());
                }
                if self.buffer.len() < block_size as usize {
                    break;
                }

                // We have a full block: write it to the cache, send it to the queue, and flush the buffer.
                update_cache(
                    self.cache.as_ref(),
                    &self.buffer,
                    self.block_index,
                    self.block_offset,
                    &self.cache_key,
                );
                self.block_index += 1;
                self.block_offset += block_size;
                self.buffer = ChecksummedBytes::default();
            }
        }
        trace!("part composer finished");
        Ok(())
    }

    // Flush remaining data in the buffer to the cache
    fn flush(&self) {
        if !self.buffer.is_empty() {
            // If we still have data in the buffer, this must be the last block for this object,
            // which can be smaller than block_size (and ends at the end of the object).
            assert_eq!(
                self.block_offset as usize + self.buffer.len(),
                self.original_range.object_size(),
                "a partial block is only allowed at the end of the object"
            );
            // Write the last block to the cache.
            update_cache(
                self.cache.as_ref(),
                &self.buffer,
                self.block_index,
                self.block_offset,
                &self.cache_key,
            );
            self.part_queue_producer.push(Ok(make_part(
                self.buffer.clone(),
                self.block_index,
                self.block_offset,
                self.cache.block_size(),
                &self.cache_key,
                &self.original_range,
            )));
        }
    }
}

fn update_cache<Cache: DataCache + Send + Sync>(
    cache: &Cache,
    block: &ChecksummedBytes,
    block_index: u64,
    block_offset: u64,
    object_id: &ObjectId,
) {
    // TODO: consider updating the cache asynchronously
    let start = Instant::now();
    match cache.put_block(object_id.clone(), block_index, block_offset, block.clone()) {
        Ok(()) => {}
        Err(error) => {
            warn!(key=?object_id, block_index, ?error, "failed to update cache");
        }
    };
    metrics::histogram!("prefetch.cache_update_duration_us").record(start.elapsed().as_micros() as f64);
}

/// Creates a Part that can be streamed to the prefetcher from the given cache block.
/// If required, trims the block bytes to the request range.
fn make_part(
    block: ChecksummedBytes,
    block_index: u64,
    block_offset: u64,
    block_size: u64,
    cache_key: &ObjectId,
    range: &RequestRange,
) -> Part {
    assert_eq!(block_offset, block_index * block_size, "invalid block offset");

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

#[cfg(test)]
mod tests {
    // It's convenient to write test constants like "1 * 1024 * 1024" for symmetry
    #![allow(clippy::identity_op)]

    use futures::executor::{block_on, ThreadPool};
    use mountpoint_s3_client::{
        mock_client::{MockClient, MockClientConfig, MockObject, Operation},
        types::ETag,
    };
    use test_case::test_case;

    use crate::{data_cache::InMemoryDataCache, object::ObjectId};

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
        let id = ObjectId::new(key.to_owned(), object.etag());

        // backpressure config
        let initial_read_window_size = 1 * MB;
        let max_read_window_size = 64 * MB;
        let read_window_size_multiplier = 2;

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
            let config = RequestTaskConfig {
                bucket: bucket.to_owned(),
                object_id: id.clone(),
                range,
                preferred_part_size: 256 * KB,
                initial_read_window_size,
                max_read_window_size,
                read_window_size_multiplier,
            };
            let request_task = stream.spawn_get_object_request(mock_client.clone(), config);
            compare_read(&id, &object, request_task);
            get_object_counter.count()
        };
        assert!(first_read_count > 0);

        let second_read_count = {
            // Second request (from cache)
            let get_object_counter = mock_client.new_counter(Operation::GetObject);
            let config = RequestTaskConfig {
                bucket: bucket.to_owned(),
                object_id: id.clone(),
                range,
                preferred_part_size: 256 * KB,
                initial_read_window_size,
                max_read_window_size,
                read_window_size_multiplier,
            };
            let request_task = stream.spawn_get_object_request(mock_client.clone(), config);
            compare_read(&id, &object, request_task);
            get_object_counter.count()
        };
        // Just check that some blocks are served from cache
        assert!(second_read_count < first_read_count);
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
        let id = ObjectId::new(key.to_owned(), object.etag());

        // backpressure config
        let initial_read_window_size = 1 * MB;
        let max_read_window_size = 64 * MB;
        let read_window_size_multiplier = 2;

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
                let config = RequestTaskConfig {
                    bucket: bucket.to_owned(),
                    object_id: id.clone(),
                    range: RequestRange::new(object_size, offset as u64, preferred_size),
                    preferred_part_size: 256 * KB,
                    initial_read_window_size,
                    max_read_window_size,
                    read_window_size_multiplier,
                };
                let request_task = stream.spawn_get_object_request(mock_client.clone(), config);
                compare_read(&id, &object, request_task);
            }
        }
    }

    fn compare_read<E: std::error::Error + Send + Sync>(
        id: &ObjectId,
        object: &MockObject,
        mut request_task: RequestTask<E>,
    ) {
        let mut offset = request_task.start_offset();
        let mut remaining = request_task.total_size();
        while remaining > 0 {
            let part = block_on(request_task.read(remaining)).unwrap();
            let bytes = part.into_bytes(id, offset).unwrap();

            let expected = object.read(offset, bytes.len());
            let bytes = bytes.into_bytes().unwrap();
            assert_eq!(bytes, *expected);

            offset += bytes.len() as u64;
            remaining -= bytes.len();
        }
    }
}
