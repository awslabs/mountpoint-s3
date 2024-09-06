use std::time::Instant;
use std::{ops::Range, sync::Arc};

use bytes::Bytes;
use futures::task::{Spawn, SpawnExt};
use futures::{pin_mut, Stream, StreamExt};
use mountpoint_s3_client::ObjectClient;
use tracing::{debug_span, trace, warn, Instrument};

use crate::checksums::ChecksummedBytes;
use crate::data_cache::{BlockIndex, DataCache};
use crate::mem_limiter::MemoryLimiter;
use crate::object::ObjectId;
use crate::prefetch::backpressure_controller::{new_backpressure_controller, BackpressureConfig, BackpressureLimiter};
use crate::prefetch::part::Part;
use crate::prefetch::part_queue::{unbounded_part_queue, PartQueueProducer};
use crate::prefetch::part_stream::{
    read_from_client_stream, ObjectPartStream, RequestRange, RequestReaderOutput, RequestTaskConfig,
};
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
        client: Arc<Client>,
        config: RequestTaskConfig,
        mem_limiter: Arc<MemoryLimiter>,
    ) -> RequestTask<<Client as ObjectClient>::ClientError>
    where
        Client: ObjectClient + Send + Sync + 'static,
    {
        let range = config.range;

        let backpressure_config = BackpressureConfig {
            initial_read_window_size: config.initial_read_window_size,
            min_read_window_size: config.read_part_size,
            max_read_window_size: config.max_read_window_size,
            read_window_size_multiplier: config.read_window_size_multiplier,
            request_range: range.into(),
            read_part_size: config.read_part_size,
        };
        let (backpressure_controller, backpressure_limiter) =
            new_backpressure_controller(backpressure_config, mem_limiter.clone());
        let (part_queue, part_queue_producer) = unbounded_part_queue();
        trace!(?range, "spawning request");

        let request_task = {
            let request = CachingRequest::new(client, self.cache.clone(), backpressure_limiter, config);
            let span = debug_span!("prefetch", ?range);
            request.get_from_cache(range, part_queue_producer).instrument(span)
        };

        let task_handle = self.runtime.spawn_with_handle(request_task).unwrap();

        RequestTask::from_handle(task_handle, range, part_queue, backpressure_controller)
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

    // We have changed how often this method is being called after backpressure is used.
    // Before, every time the prefetcher asked for more data and a new RequestTask is
    // spawned, we would first check the cache and fall back to the client at the first
    // cache miss.
    // Now new RequestTasks are only spawned on out-of-order reads, while sequential data
    // is requested via backpressure. This means that a fully sequential read will switch
    // entirely to the client after a single cache miss.
    //
    // In theory, that could mean more requests to S3, but in practice the previous behavior
    // would only be better when we have data cache scattered across the ranges and the new
    // RequestTasks must happen to start somewhere in one of those ranges to benefit from
    // the cache. This change should only affect sequential read workloads.
    async fn get_from_cache(
        mut self,
        range: RequestRange,
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
                    // Cache blocks always contain bytes in the request range
                    let part = try_make_part(&block, block_offset, cache_key, &range).unwrap();
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
            return self
                .get_from_client(
                    range.trim_start(block_offset),
                    block_index..block_range.end,
                    part_queue_producer,
                )
                .await;
        }
        // We served the whole range from cache.
        metrics::counter!("prefetch.blocks_served_from_cache").increment(block_range.end - block_range.start);
    }

    async fn get_from_client(
        &mut self,
        range: RequestRange,
        block_range: Range<u64>,
        part_queue_producer: PartQueueProducer<Client::ClientError>,
    ) {
        let bucket = &self.config.bucket;
        let cache_key = &self.config.object_id;
        let first_read_window_end_offset = self.config.range.start() + self.config.initial_read_window_size as u64;
        let block_size = self.cache.block_size();
        assert!(block_size > 0);

        // Always request a range aligned with block boundaries (or to the end of the object).
        let start_offset = block_range.start * block_size;
        let end_offset = (block_range.end * block_size).min(range.object_size() as u64);
        let request_len = (end_offset - start_offset) as usize;
        let block_aligned_byte_range = RequestRange::new(range.object_size(), start_offset, request_len);

        trace!(
            key = cache_key.key(),
            range =? block_aligned_byte_range,
            original_range =? range,
            "fetching data from client"
        );

        let request_stream = read_from_client_stream(
            &mut self.backpressure_limiter,
            &self.client,
            bucket.clone(),
            cache_key.clone(),
            first_read_window_end_offset,
            block_aligned_byte_range,
        );

        let mut part_composer = CachingPartComposer {
            part_queue_producer,
            cache_key: cache_key.clone(),
            original_range: range,
            block_index: block_range.start,
            block_offset: block_range.start * block_size,
            buffer: ChecksummedBytes::default(),
            cache: self.cache.clone(),
        };
        part_composer.try_compose_parts(request_stream).await;
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
    async fn try_compose_parts(&mut self, request_stream: impl Stream<Item = RequestReaderOutput<E>>) {
        if let Err(e) = self.compose_parts(request_stream).await {
            trace!(error=?e, "part stream task failed");
            self.part_queue_producer.push(Err(e));
        }
        trace!("part composer finished");
    }

    async fn compose_parts(
        &mut self,
        request_stream: impl Stream<Item = RequestReaderOutput<E>>,
    ) -> Result<(), PrefetchReadError<E>> {
        let key = self.cache_key.key();
        let block_size = self.cache.block_size();

        pin_mut!(request_stream);
        while let Some(next) = request_stream.next().await {
            assert!(
                self.buffer.len() < block_size as usize,
                "buffer should be flushed when we get a full block"
            );
            let (offset, body) = next?;
            let expected_offset = self.block_offset + self.buffer.len() as u64;
            if offset != expected_offset {
                warn!(key, offset, expected_offset, "wrong offset for GetObject body part");
                return Err(PrefetchReadError::GetRequestReturnedWrongOffset {
                    offset,
                    expected_offset,
                });
            }

            // Split the body into blocks.
            let mut body: Bytes = body.into();
            let mut offset = offset;
            while !body.is_empty() {
                let remaining = (block_size as usize).saturating_sub(self.buffer.len()).min(body.len());
                let chunk: ChecksummedBytes = body.split_to(remaining).into();

                // We need to return some bytes to the part queue even before we can fill an entire caching block because
                // we want to start the feedback loop for the flow-control window.
                //
                // This is because the read window may not be aligned to block boundaries and therefore not enough to fetch
                // the entire block, but we know it always fetch enough data for the prefetcher to start reading.
                // For example, consider that we got a file system read request with range 2MB to 4MB and we have to start
                // reading from block_offset=0 and block_size=5MB. The first read window might have a range up to 4MB which
                // is enough to serve the read request but if the prefetcher is not able to read anything it cannot tell
                // the stream to move its read window.
                //
                // A side effect from this is the delay on cache updating which makes testing a bit more complicated because
                // the cache is not updated synchronously.
                if let Some(part) = try_make_part(&chunk, offset, &self.cache_key, &self.original_range) {
                    self.part_queue_producer.push(Ok(part));
                }
                offset += chunk.len() as u64;
                self.buffer
                    .extend(chunk)
                    .inspect_err(|e| warn!(key, error=?e, "integrity check for body part failed"))?;
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
        }
        Ok(())
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

/// Creates a Part that can be streamed to the prefetcher if the given bytes
/// are in the request range, otherwise return None.
fn try_make_part(bytes: &ChecksummedBytes, offset: u64, object_id: &ObjectId, range: &RequestRange) -> Option<Part> {
    let part_range = range.trim_start(offset).trim_end(offset + bytes.len() as u64);
    if part_range.is_empty() {
        return None;
    }
    trace!(?part_range, "creating part trimmed to the request range");
    let trim_start = (part_range.start().saturating_sub(offset)) as usize;
    let trim_end = (part_range.end().saturating_sub(offset)) as usize;
    Some(Part::new(
        object_id.clone(),
        part_range.start(),
        bytes.slice(trim_start..trim_end),
    ))
}

#[cfg(test)]
mod tests {
    // It's convenient to write test constants like "1 * 1024 * 1024" for symmetry
    #![allow(clippy::identity_op)]

    use std::{thread, time::Duration};

    use futures::executor::{block_on, ThreadPool};
    use mountpoint_s3_client::{
        mock_client::{MockClient, MockClientConfig, MockObject, Operation},
        types::ETag,
    };
    use test_case::test_case;

    use crate::{data_cache::InMemoryDataCache, mem_limiter::MemoryLimiter, object::ObjectId};

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
        let mem_limiter = Arc::new(MemoryLimiter::new(512 * 1024 * 1024));
        mock_client.add_object(key, object.clone());

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let stream = CachingPartStream::new(runtime, cache);
        let range = RequestRange::new(object_size, offset as u64, preferred_size);
        let expected_start_block = (range.start() as usize).div_euclid(block_size);
        let expected_end_block = (range.end() as usize).div_ceil(block_size);

        let first_read_count = {
            // First request (from client)
            let get_object_counter = mock_client.new_counter(Operation::GetObject);
            let config = RequestTaskConfig {
                bucket: bucket.to_owned(),
                object_id: id.clone(),
                range,
                read_part_size: client_part_size,
                preferred_part_size: 256 * KB,
                initial_read_window_size,
                max_read_window_size,
                read_window_size_multiplier,
            };
            let request_task = stream.spawn_get_object_request(mock_client.clone(), config, mem_limiter.clone());
            compare_read(&id, &object, request_task);
            get_object_counter.count()
        };
        assert!(first_read_count > 0);

        // Wait until all blocks are saved to the cache before spawning a new request
        let expected_block_count = expected_end_block - expected_start_block;
        while stream.cache.block_count(&id) < expected_block_count {
            thread::sleep(Duration::from_millis(10));
        }
        assert_eq!(expected_block_count, stream.cache.block_count(&id));

        let second_read_count = {
            // Second request (from cache)
            let get_object_counter = mock_client.new_counter(Operation::GetObject);
            let config = RequestTaskConfig {
                bucket: bucket.to_owned(),
                object_id: id.clone(),
                range,
                read_part_size: client_part_size,
                preferred_part_size: 256 * KB,
                initial_read_window_size,
                max_read_window_size,
                read_window_size_multiplier,
            };
            let request_task = stream.spawn_get_object_request(mock_client.clone(), config, mem_limiter.clone());
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
        let mem_limiter = Arc::new(MemoryLimiter::new(512 * 1024 * 1024));
        mock_client.add_object(key, object.clone());

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let stream = CachingPartStream::new(runtime, cache);

        for offset in [0, 512 * KB, 1 * MB, 4 * MB, 9 * MB] {
            for preferred_size in [1 * KB, 512 * KB, 4 * MB, 12 * MB, 16 * MB] {
                let config = RequestTaskConfig {
                    bucket: bucket.to_owned(),
                    object_id: id.clone(),
                    range: RequestRange::new(object_size, offset as u64, preferred_size),
                    read_part_size: client_part_size,
                    preferred_part_size: 256 * KB,
                    initial_read_window_size,
                    max_read_window_size,
                    read_window_size_multiplier,
                };
                let request_task = stream.spawn_get_object_request(mock_client.clone(), config, mem_limiter.clone());
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
