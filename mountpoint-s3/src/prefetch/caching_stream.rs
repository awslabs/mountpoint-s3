use std::time::Instant;
use std::{ops::Range, sync::Arc};

use bytes::Bytes;
use futures::task::{Spawn, SpawnExt};
use futures::{pin_mut, StreamExt};
use mountpoint_s3_client::{types::ETag, ObjectClient};
use tracing::{debug_span, error, trace, warn, Instrument};

use crate::checksums::ChecksummedBytes;
use crate::data_cache::{BlockIndex, CacheKey, DataCache};
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
        let range = get_aligned_request_range(range, self.cache.block_size());

        let start = range.start();
        let size = range.len();

        let (part_queue, part_queue_producer) = unbounded_part_queue();
        trace!(?range, "spawning request");

        let request_task = {
            let request = CachingRequest::new(
                client.clone(),
                self.cache.clone(),
                bucket.to_owned(),
                key.to_owned(),
                if_match,
                part_queue_producer,
            );
            let span = debug_span!("prefetch", ?range);
            async move {
                request.get_from_cache(range).await;
            }
            .instrument(span)
        };

        let task_handle = self.runtime.spawn_with_handle(request_task).unwrap();

        RequestTask::from_handle(task_handle, size, start, part_queue)
    }
}

fn get_aligned_request_range(range: RequestRange, block_size: u64) -> RequestRange {
    let object_size = range.object_size();
    let offset = range.start();
    let preferred_size = range.len();

    // If the request size is bigger than a block size we will try to align it to block boundaries.
    let offset_in_part = offset % block_size;
    let size = if offset_in_part != 0 {
        // if the offset is not at the start of the part we will drain all the bytes from that part first
        let remaining_in_part = block_size - offset_in_part;
        preferred_size.min(remaining_in_part as usize)
    } else {
        // if the request size is smaller than the block size, just return the block size
        if preferred_size < block_size as usize {
            block_size as usize
        } else {
            // if it exceeds block boundaries, trim it to the block boundaries
            let request_boundary = offset + preferred_size as u64;
            let remainder = request_boundary % block_size;
            if remainder != 0 {
                preferred_size + (block_size - remainder) as usize
            } else {
                preferred_size
            }
        }
    };
    RequestRange::new(object_size, offset, size)
}

#[derive(Debug)]
struct CachingRequest<Client: ObjectClient, Cache> {
    client: Client,
    cache: Arc<Cache>,
    bucket: String,
    cache_key: CacheKey,
    part_queue_producer: PartQueueProducer<Client::ClientError>,
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
    ) -> Self {
        let cache_key = CacheKey { s3_key: key, etag };
        Self {
            client,
            cache,
            bucket,
            cache_key,
            part_queue_producer,
        }
    }

    async fn get_from_cache(&self, range: RequestRange) {
        let key = &self.cache_key.s3_key;
        let block_size = self.cache.block_size();
        let block_range = self.block_indices_for_byte_range(&range);

        // TODO: consider starting GetObject requests pre-emptively if cache blocks are missing
        for block_index in block_range.clone() {
            match self.cache.get_block(&self.cache_key, block_index) {
                Ok(Some(block)) => {
                    trace!(?key, ?range, block_index, "cache hit");
                    let part = self.make_part(block, block_index, &range);
                    metrics::counter!("cache.total_bytes", part.len() as u64, "type" => "read");
                    self.part_queue_producer.push(Ok(part));
                }
                Ok(None) => {
                    trace!(?key, ?range, block_index, "cache miss - no data for block");
                    return self
                        .get_from_client(range.trim_start(block_index * block_size), block_index..block_range.end)
                        .await;
                }
                Err(error) => {
                    trace!(?key, ?range, block_index, ?error, "error reading block from cache");
                    return self
                        .get_from_client(range.trim_start(block_index * block_size), block_index..block_range.end)
                        .await;
                }
            }
        }
    }

    async fn get_from_client(&self, range: RequestRange, block_range: Range<u64>) {
        let key = &self.cache_key.s3_key;
        let block_size = self.cache.block_size();
        assert!(block_size > 0);

        let block_aligned_byte_range =
            (block_range.start * block_size)..(block_range.end * block_size).min(range.object_size() as u64);

        trace!(
            ?key,
            range =? block_aligned_byte_range,
            original_range =? range,
            "fetching data from client"
        );
        let get_object_result = match self
            .client
            .get_object(
                &self.bucket,
                key,
                Some(block_aligned_byte_range),
                Some(self.cache_key.etag.clone()),
            )
            .await
        {
            Ok(get_object_result) => get_object_result,
            Err(e) => {
                error!(key, error=?e, "GetObject request failed");
                self.part_queue_producer
                    .push(Err(PrefetchReadError::GetRequestFailed(e)));
                return;
            }
        };

        pin_mut!(get_object_result);
        let mut block_index = block_range.start;
        let mut buffer = ChecksummedBytes::default();
        loop {
            match get_object_result.next().await {
                Some(Ok((offset, body))) => {
                    trace!(offset, length = body.len(), "received GetObject part");

                    // Split the body into blocks.
                    let mut body: Bytes = body.into();
                    while !body.is_empty() {
                        let remaining = (block_size as usize).saturating_sub(buffer.len()).min(body.len());
                        let chunk = body.split_to(remaining);
                        if let Err(e) = buffer.extend(chunk.into()) {
                            error!(key, error=?e, "Integrity check failed");
                            self.part_queue_producer.push(Err(e.into()));
                            return;
                        }
                        if buffer.len() < block_size as usize {
                            break;
                        }
                        self.update_cache(block_index, &buffer);
                        self.part_queue_producer
                            .push(Ok(self.make_part(buffer, block_index, &range)));
                        block_index += 1;
                        buffer = ChecksummedBytes::default();
                    }
                }
                Some(Err(e)) => {
                    error!(key, error=?e, "GetObject body part failed");
                    self.part_queue_producer
                        .push(Err(PrefetchReadError::GetRequestFailed(e)));
                    break;
                }
                None => {
                    if !buffer.is_empty() {
                        if buffer.len() + (block_index * block_size) as usize == range.object_size() {
                            // Write last block to the cache.
                            self.update_cache(block_index, &buffer);
                        }
                        self.part_queue_producer
                            .push(Ok(self.make_part(buffer, block_index, &range)));
                    }
                    break;
                }
            }
        }
        trace!("request finished");
    }

    fn update_cache(&self, block_index: u64, block: &ChecksummedBytes) {
        // TODO: consider updating the cache asynchronously
        let start = Instant::now();
        match self.cache.put_block(self.cache_key.clone(), block_index, block.clone()) {
            Ok(()) => {
                metrics::histogram!("cache.write_duration_us", start.elapsed().as_micros() as f64);
                metrics::counter!("cache.total_bytes", block.len() as u64, "type" => "write");
            }
            Err(error) => {
                warn!(key=?self.cache_key.s3_key, block_index, ?error, "failed to update cache");
            }
        };
    }

    fn make_part(&self, block: ChecksummedBytes, block_index: u64, range: &RequestRange) -> Part {
        let key = &self.cache_key.s3_key;
        let block_offset = block_index * self.cache.block_size();
        let block_size = block.len();
        let part_range = range
            .trim_start(block_offset)
            .trim_end(block_offset + block_size as u64);
        trace!(
            key,
            ?part_range,
            block_index,
            block_offset,
            block_size,
            "creating part from block"
        );

        let trim_start = (part_range.start().saturating_sub(block_offset)) as usize;
        let trim_end = (part_range.end().saturating_sub(block_offset)) as usize;
        let bytes = block.slice(trim_start..trim_end);
        Part::new(key, part_range.start(), bytes)
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

    use futures::executor::{block_on, ThreadPool};
    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig, MockObject, Operation};
    use test_case::test_case;

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

        let cache = InMemoryDataCache::new(block_size as u64);
        let bucket = "test-bucket";
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: client_part_size,
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
            compare_read(key, &object, request_task);
            get_object_counter.count()
        };
        assert!(first_read_count > 0);

        let second_read_count = {
            // Second request (from cache)
            let get_object_counter = mock_client.new_counter(Operation::GetObject);
            let request_task = stream.spawn_get_object_request(&mock_client, bucket, key, etag.clone(), range, 0);
            compare_read(key, &object, request_task);
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

        let cache = InMemoryDataCache::new(block_size as u64);
        let bucket = "test-bucket";
        let config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: client_part_size,
        };
        let mock_client = Arc::new(MockClient::new(config));
        mock_client.add_object(key, object.clone());

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let stream = CachingPartStream::new(runtime, cache);

        for offset in [0, 512 * KB, 1 * MB, 4 * MB, 9 * MB] {
            for preferred_size in [1 * KB, 512 * KB, 4 * MB, 12 * MB, 16 * MB] {
                let range = RequestRange::new(object_size, offset as u64, preferred_size);
                let request_task = stream.spawn_get_object_request(&mock_client, bucket, key, etag.clone(), range, 0);
                compare_read(key, &object, request_task);
            }
        }
    }

    fn compare_read<E: std::error::Error + Send + Sync>(
        key: &str,
        object: &MockObject,
        mut request_task: RequestTask<E>,
    ) {
        let mut offset = request_task.start_offset();
        let mut remaining = request_task.total_size();
        while remaining > 0 {
            let part = block_on(request_task.read(remaining)).unwrap();
            let bytes = part.into_bytes(key, offset).unwrap();

            let expected = object.read(offset, bytes.len());
            let bytes = bytes.into_bytes().unwrap();
            assert_eq!(bytes, *expected);

            offset += bytes.len() as u64;
            remaining -= bytes.len();
        }
    }
}
