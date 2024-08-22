use async_stream::try_stream;
use bytes::Bytes;
use futures::task::{Spawn, SpawnExt};
use futures::{pin_mut, Stream, StreamExt};
use mountpoint_s3_client::{types::GetObjectRequest, ObjectClient};
use std::marker::{Send, Sync};
use std::{fmt::Debug, ops::Range};
use tracing::{debug_span, error, trace, Instrument};

use crate::checksums::ChecksummedBytes;
use crate::object::ObjectId;
use crate::prefetch::backpressure_controller::{new_backpressure_controller, BackpressureConfig};
use crate::prefetch::part::Part;
use crate::prefetch::part_queue::{unbounded_part_queue, PartQueueProducer};
use crate::prefetch::task::RequestTask;
use crate::prefetch::PrefetchReadError;

use super::backpressure_controller::BackpressureLimiter;

/// A generic interface to retrieve data from objects in a S3-like store.
pub trait ObjectPartStream {
    /// Spawns a request to get the content of an object. The object data will be retrieved in fixed size
    /// parts and can then be consumed using [RequestTask::read]. Callers need to specify a preferred
    /// size for the parts, but implementations are allowed to ignore it.
    fn spawn_get_object_request<Client>(
        &self,
        client: &Client,
        config: RequestTaskConfig,
    ) -> RequestTask<Client::ClientError>
    where
        Client: ObjectClient + Clone + Send + Sync + 'static;
}

#[derive(Clone, Debug)]
/// The configs for spawning a task in [ObjectPartStream::spawn_get_object_request].
pub struct RequestTaskConfig {
    pub bucket: String,
    pub object_id: ObjectId,
    pub range: RequestRange,
    pub preferred_part_size: usize,
    pub initial_read_window_size: usize,
    pub max_read_window_size: usize,
    pub read_window_size_multiplier: usize,
}

/// The range of a [ObjectPartStream::spawn_get_object_request] request.
/// Includes the total size of the object.
#[derive(Clone, Copy)]
pub struct RequestRange {
    object_size: usize,
    offset: u64,
    size: usize,
}

impl RequestRange {
    pub fn new(object_size: usize, offset: u64, size: usize) -> Self {
        let size = size.min(object_size.saturating_sub(offset as usize));
        Self {
            object_size,
            offset,
            size,
        }
    }

    pub fn len(&self) -> usize {
        self.size
    }

    pub fn is_empty(&self) -> bool {
        self.size == 0
    }

    pub fn object_size(&self) -> usize {
        self.object_size
    }

    pub fn start(&self) -> u64 {
        self.offset
    }

    pub fn end(&self) -> u64 {
        self.offset + self.size as u64
    }

    /// Trim the start of this range at the given `start_offset`.
    /// Note `start_offset` is clamped to the original range.
    pub fn trim_start(&self, start_offset: u64) -> Self {
        let end = self.end();
        let offset = start_offset.clamp(self.offset, end);
        let size = end.saturating_sub(offset) as usize;
        Self {
            object_size: self.object_size,
            offset,
            size,
        }
    }

    /// Trim the end of this range at the given `end_offset`.
    /// Note `end_offset` is clamped to the original range.
    pub fn trim_end(&self, end_offset: u64) -> Self {
        let end = end_offset.clamp(self.offset, self.end());
        let size = end.saturating_sub(self.offset) as usize;
        Self {
            object_size: self.object_size,
            offset: self.offset,
            size,
        }
    }

    /// Try to align the end of this range to the given part boundaries.
    /// The `trim_only` flags controls whether the range is only trimmed down to
    /// part boundaries or is allowed to grow wider.
    pub fn align(&self, part_alignment: u64, trim_only: bool) -> RequestRange {
        let offset_in_part = self.offset % part_alignment;
        let size = if offset_in_part != 0 {
            // if the offset is not at the start of the part we will drain all the bytes from that part first
            let remaining_in_part = part_alignment - offset_in_part;
            if trim_only {
                self.size.min(remaining_in_part as usize)
            } else {
                remaining_in_part as usize
            }
        } else if self.size < part_alignment as usize {
            // if the size is smaller than the part size,
            if trim_only {
                // just return the original size
                self.size
            } else {
                // return the whole part
                part_alignment as usize
            }
        } else {
            // if it exceeds part boundaries,
            let remainder = self.end() % part_alignment;
            if trim_only || remainder == 0 {
                // trim it to the previous part boundary
                self.size - (remainder as usize)
            } else {
                // extend it to the next part boundary
                self.size + (part_alignment - remainder) as usize
            }
        };
        RequestRange::new(self.object_size, self.offset, size)
    }
}

impl From<RequestRange> for Range<u64> {
    fn from(val: RequestRange) -> Self {
        val.start()..val.end()
    }
}

impl Debug for RequestRange {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}..{} out of {}", self.start(), self.end(), self.object_size())
    }
}

/// [ObjectPartStream] implementation which delegates retrieving object data to a [Client].
#[derive(Debug)]
pub struct ClientPartStream<Runtime> {
    runtime: Runtime,
}

impl<Runtime> ClientPartStream<Runtime>
where
    Runtime: Spawn,
{
    pub fn new(runtime: Runtime) -> Self {
        Self { runtime }
    }
}

pub type RequestReaderOutput<E> = Result<(u64, Box<[u8]>), PrefetchReadError<E>>;

impl<Runtime> ObjectPartStream for ClientPartStream<Runtime>
where
    Runtime: Spawn,
{
    fn spawn_get_object_request<Client>(
        &self,
        client: &Client,
        config: RequestTaskConfig,
    ) -> RequestTask<Client::ClientError>
    where
        Client: ObjectClient + Clone + Send + Sync + 'static,
    {
        assert!(config.preferred_part_size > 0);

        let range = config.range;

        let backpressure_config = BackpressureConfig {
            initial_read_window_size: config.initial_read_window_size,
            max_read_window_size: config.max_read_window_size,
            read_window_size_multiplier: config.read_window_size_multiplier,
            request_range: range.into(),
        };
        let (backpressure_controller, mut backpressure_limiter) = new_backpressure_controller(backpressure_config);
        let (part_queue, part_queue_producer) = unbounded_part_queue();
        trace!(?range, "spawning request");

        let span = debug_span!("prefetch", ?range);
        let client = client.clone();
        let task_handle = self
            .runtime
            .spawn_with_handle(
                async move {
                    let first_read_window_end_offset = config.range.start() + config.initial_read_window_size as u64;
                    let request_stream = read_from_client_stream(
                        &mut backpressure_limiter,
                        &client,
                        config.bucket,
                        config.object_id.clone(),
                        first_read_window_end_offset,
                        config.range,
                    );

                    let part_composer = ClientPartComposer {
                        part_queue_producer,
                        object_id: config.object_id,
                        preferred_part_size: config.preferred_part_size,
                    };
                    part_composer.try_compose_parts(request_stream).await;
                }
                .instrument(span),
            )
            .unwrap();

        RequestTask::from_handle(task_handle, range, part_queue, backpressure_controller)
    }
}

struct ClientPartComposer<E: std::error::Error> {
    part_queue_producer: PartQueueProducer<E>,
    object_id: ObjectId,
    preferred_part_size: usize,
}

impl<E: std::error::Error + Send + Sync> ClientPartComposer<E> {
    async fn try_compose_parts(&self, request_stream: impl Stream<Item = RequestReaderOutput<E>>) {
        if let Err(e) = self.compose_parts(request_stream).await {
            trace!(error=?e, "part stream task failed");
            self.part_queue_producer.push(Err(e));
        }
        trace!("part composer finished");
    }

    async fn compose_parts(
        &self,
        request_stream: impl Stream<Item = RequestReaderOutput<E>>,
    ) -> Result<(), PrefetchReadError<E>> {
        pin_mut!(request_stream);
        while let Some(next) = request_stream.next().await {
            let (offset, body) = next?;
            // pre-split the body into multiple parts as suggested by preferred part size
            // in order to avoid validating checksum on large parts at read.
            let mut body: Bytes = body.into();
            let mut curr_offset = offset;
            let alignment = self.preferred_part_size;
            while !body.is_empty() {
                let distance_to_align = alignment - (curr_offset % alignment as u64) as usize;
                let chunk_size = distance_to_align.min(body.len());
                let chunk = body.split_to(chunk_size);
                // S3 doesn't provide checksum for us if the request range is not aligned to
                // object part boundaries, so we're computing our own checksum here.
                let checksum_bytes = ChecksummedBytes::new(chunk);
                let part = Part::new(self.object_id.clone(), curr_offset, checksum_bytes);
                curr_offset += part.len() as u64;
                self.part_queue_producer.push(Ok(part));
            }
        }
        Ok(())
    }
}

/// Creates a request stream with a given range. The stream will be served from two `GetObject` requests where the first request serves
/// data up to `first_read_window_end_offset` and the second request serves the rest of the stream.
/// A [PrefetchReadError] is returned when the request cannot be completed.
///
/// This is a workaround for a specific issue where initial read window size could be very small (~1MB), but the CRT only returns data
/// in chunks of part size (default to 8MB) even if initial read window is smaller than that, which make time to first byte much higher
/// than expected.
pub fn read_from_client_stream<'a, Client: ObjectClient + Clone + 'a>(
    backpressure_limiter: &'a mut BackpressureLimiter,
    client: &'a Client,
    bucket: String,
    object_id: ObjectId,
    first_read_window_end_offset: u64,
    range: RequestRange,
) -> impl Stream<Item = RequestReaderOutput<Client::ClientError>> + 'a {
    try_stream! {
        // Let's start by issuing the first request with a range trimmed to initial read window offset
        let first_req_range = range.trim_end(first_read_window_end_offset);
        if !first_req_range.is_empty() {
            let first_request_stream = read_from_request(
                backpressure_limiter,
                client,
                bucket.clone(),
                object_id.clone(),
                first_req_range.into(),
            );
            pin_mut!(first_request_stream);
            while let Some(next) = first_request_stream.next().await {
                yield(next?);
            }
        }

        // After the first request is completed we will create the second request for the rest of the stream,
        // but only if there is something left to be fetched.
        let range = range.trim_start(first_read_window_end_offset);
        if !range.is_empty() {
            // To optimize random reads we don't start the second request until half of the first one was read as the second
            // request may not be needed. After increment threshold is reached `backpressure_limiter` will receive a diff to
            // add to the window. This diff will be the initial read window size of the second request and we use it as
            // a signal to start the request. This is how it looks when the start offset is 1000 KiB and caching is not
            // enabled (i.e. 1st request size is 1152 KiB):
            //
            //  KiB: 1000             1576             2152                             3304                    10 000
            //       |________________|________________|________________________________|________  ...  ________|
            //   1st req start  increment threshold   2d req start             2d req window end      2d req end (object size)
            //                                        1st req end
            //                                        1st req window end
            backpressure_limiter.wait_for_read_window_increment(range.start()).await?;

            let request_stream = read_from_request(
                backpressure_limiter,
                client,
                bucket.clone(),
                object_id.clone(),
                range.into(),
            );
            pin_mut!(request_stream);
            while let Some(next) = request_stream.next().await {
                yield(next?);
            }
        }
    }
}

/// Creates a `GetObject` request with the specified range and sends received body parts to the stream.
/// A [PrefetchReadError] is returned when the request cannot be completed.
fn read_from_request<'a, Client: ObjectClient + 'a>(
    backpressure_limiter: &'a mut BackpressureLimiter,
    client: &'a Client,
    bucket: String,
    id: ObjectId,
    request_range: Range<u64>,
) -> impl Stream<Item = RequestReaderOutput<Client::ClientError>> + 'a {
    try_stream! {
        let request = client
            .get_object(&bucket, id.key(), Some(request_range.clone()), Some(id.etag().clone()))
            .await
            .inspect_err(|e| error!(key=id.key(), error=?e, "GetObject request failed"))
            .map_err(PrefetchReadError::GetRequestFailed)?;

        pin_mut!(request);
        let read_window_size_diff = backpressure_limiter
            .read_window_end_offset()
            .saturating_sub(request.as_ref().read_window_end_offset()) as usize;
        request.as_mut().increment_read_window(read_window_size_diff);

        while let Some(next) = request.next().await {
            let (offset, body) = next
                .inspect_err(|e| error!(key=id.key(), error=?e, "GetObject body part failed"))
                .map_err(PrefetchReadError::GetRequestFailed)?;

            let length = body.len() as u64;
            trace!(offset, length, "received GetObject part");
            metrics::counter!("s3.client.total_bytes", "type" => "read").increment(body.len() as u64);
            yield(offset, body);

            let next_offset = offset + length;
            // We are reaching the end so don't have to wait for more read window
            if next_offset == request_range.end {
                break;
            }
            // Blocks if read window increment if it's not enough to read the next offset
            if let Some(next_read_window_offset) = backpressure_limiter.wait_for_read_window_increment(next_offset).await? {
                let diff = next_read_window_offset.saturating_sub(request.as_ref().read_window_end_offset()) as usize;
                request.as_mut().increment_read_window(diff);
            }
        }
        trace!("request finished");
    }
}

#[cfg(test)]
mod tests {
    // It's convenient to write test constants like "1 * 1024 * 1024" for symmetry
    #![allow(clippy::identity_op)]

    use super::*;

    use test_case::test_case;

    const KB: usize = 1024;
    const MB: usize = 1024 * 1024;

    #[test_case(256 * KB, 2 * MB, 100 * MB, 8 * MB, true, 2 * MB; "mid-part offset, small size, unchanged")]
    #[test_case(256 * KB, 2 * MB, 100 * MB, 8 * MB, false, 8 * MB - 256 * KB; "mid-part offset, small size, grow up to part boundary")]
    #[test_case(7 * MB, 2 * MB, 100 * MB, 8 * MB, true, 1 * MB; "mid-part offset, trim to remaining bytes in the part (trim_only)")]
    #[test_case(7 * MB, 2 * MB, 100 * MB, 8 * MB, false, 1 * MB; "mid-part offset, trim to remaining bytes in the part")]
    #[test_case(9 * MB, (22 * MB) + 11, 100 * MB, 9 * MB, true, 18 * MB; "trim to part boundaries")]
    #[test_case(9 * MB, (22 * MB) + 11, 100 * MB, 9 * MB, false, 27 * MB; "grow to part boundaries")]
    #[test_case(8 * MB, 16 * MB, 100 * MB, 8 * MB, true, 16 * MB; "already aligned (trim_only)")]
    #[test_case(8 * MB, 16 * MB, 100 * MB, 8 * MB, false, 16 * MB; "already aligned")]
    fn test_request_range_align(
        offset: usize,
        request_size: usize,
        object_size: usize,
        part_size: usize,
        trim_only: bool,
        expected_size: usize,
    ) {
        let range = RequestRange::new(object_size, offset as u64, request_size);
        let aligned_range = range.align(part_size as u64, trim_only);

        assert_eq!(range.start(), aligned_range.start());
        assert_eq!(range.object_size(), aligned_range.object_size());
        if range.start() as usize % part_size == 0 {
            assert!(
                aligned_range.end() as usize == aligned_range.object_size() || aligned_range.end() as usize % part_size == 0,
                "ranges starting on a part boundary should be aligned to another part boundary, or to the end of the object"
            );
        }

        if trim_only {
            assert!(aligned_range.len() <= range.len());
        }

        assert_eq!(aligned_range.len(), expected_size);
    }
}
