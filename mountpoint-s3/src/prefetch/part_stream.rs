use async_channel::{unbounded, Receiver, Sender};
use bytes::Bytes;
use futures::task::SpawnExt;
use futures::try_join;
use futures::{pin_mut, task::Spawn, StreamExt};
use mountpoint_s3_client::{types::GetObjectRequest, ObjectClient};
use std::marker::{Send, Sync};
use std::sync::Arc;
use std::{fmt::Debug, ops::Range};
use tracing::{debug_span, trace, Instrument};

use crate::object::ObjectId;
use crate::prefetch::backpressure_controller::new_backpressure_controller;
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
        client: Arc<Client>,
        config: RequestTaskConfig,
    ) -> RequestTask<Client::ClientError>
    where
        Client: ObjectClient + Send + Sync + 'static;
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

pub type RequestReaderOutput = (u64, Box<[u8]>);

impl<Runtime> ObjectPartStream for ClientPartStream<Runtime>
where
    Runtime: Spawn,
{
    fn spawn_get_object_request<Client>(
        &self,
        client: Arc<Client>,
        config: RequestTaskConfig,
    ) -> RequestTask<Client::ClientError>
    where
        Client: ObjectClient + Send + Sync + 'static,
    {
        assert!(config.preferred_part_size > 0);

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

        let span = debug_span!("prefetch", ?range);
        let client = client.clone();
        let task_handle = self
            .runtime
            .spawn_with_handle(
                async move {
                    let mut client_request = ClientRequest {
                        client: client.clone(),
                        backpressure_limiter,
                        config,
                    };
                    if let Err(e) = client_request
                        .get_from_client(initial_read_window_offset, part_queue_producer.clone())
                        .await
                    {
                        part_queue_producer.push(Err(e));
                    }
                }
                .instrument(span),
            )
            .unwrap();

        RequestTask::from_handle(task_handle, range, part_queue)
    }
}

struct ClientRequest<Client: ObjectClient> {
    client: Arc<Client>,
    backpressure_limiter: BackpressureLimiter,
    config: RequestTaskConfig,
}

impl<Client> ClientRequest<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    async fn get_from_client(
        &mut self,
        initial_read_window_offset: u64,
        part_queue_producer: PartQueueProducer<Client::ClientError>,
    ) -> Result<(), PrefetchReadError<Client::ClientError>> {
        let bucket = &self.config.bucket;
        let object_id = &self.config.object_id;

        let part_composer = ClientPartComposer {
            part_queue_producer,
            object_id: object_id.clone(),
            preferred_part_size: self.config.preferred_part_size,
        };

        // Normally, initial read window size should be very small (~1MB) so that we can serve the first read request as soon as possible,
        // but right now the CRT only returns data in chunks of part size (default to 8MB) even if initial read window is smaller than that.
        // This makes time to first byte much higher than expected.
        //
        // To workaround this issue, we instead create two requests for the part stream where the first request has the range exactly equal to
        // the initial read window size to force the CRT to return data immediately, and the second request for the rest of the stream.
        // From this, our first read window range must be 2x of the initial read window size because we make two requests, each with the same
        // initial read window size.
        //
        // Let's start by issuing the first request with a range trimmed to initial read window offset
        let first_req_range = self.config.range.trim_end(initial_read_window_offset);

        let (body_sender, body_receiver) = unbounded();
        let request_reader_future = read_from_request(
            body_sender,
            &mut self.backpressure_limiter,
            self.client.clone(),
            bucket.clone(),
            object_id.clone(),
            first_req_range.into(),
        );
        let part_composer_future = part_composer.compose_parts(body_receiver);
        try_join!(request_reader_future, part_composer_future)?;

        // After the first request is completed we will create the second request for the rest of the stream,
        // but only if there is something left to be fetched.
        let range = self.config.range.trim_start(initial_read_window_offset);
        if range.is_empty() {
            return Ok(());
        }
        let (body_sender, body_receiver) = unbounded();
        let request_reader_future = read_from_request(
            body_sender,
            &mut self.backpressure_limiter,
            self.client.clone(),
            bucket.clone(),
            object_id.clone(),
            range.into(),
        );
        let part_composer_future = part_composer.compose_parts(body_receiver);
        try_join!(request_reader_future, part_composer_future)?;
        Ok(())
    }
}

struct ClientPartComposer<E: std::error::Error> {
    part_queue_producer: PartQueueProducer<E>,
    object_id: ObjectId,
    preferred_part_size: usize,
}

impl<E: std::error::Error + Send + Sync> ClientPartComposer<E> {
    async fn compose_parts(&self, body_receiver: Receiver<RequestReaderOutput>) -> Result<(), PrefetchReadError<E>> {
        pin_mut!(body_receiver);
        loop {
            let Some((offset, body)) = body_receiver.next().await else {
                break;
            };
            let body: Bytes = body.into();
            // pre-split the body into multiple parts as suggested by preferred part size
            // in order to avoid validating checksum on large parts at read.
            self.part_queue_producer
                .split_and_push(self.object_id.clone(), offset, body, self.preferred_part_size)?;
        }
        trace!("part composer finished");
        Ok(())
    }
}

/// Spawns a `GetObject` request with the specified range and sends received body parts to the channel
/// pointed by `body_sender`. Once the request was finished (`None` returned), this future closes the
/// sending part of the channel and returns. After this the receiving part of the channel will still
/// be able to receive pending chunks. If the receiving part of the channel is closed before the request
/// was finished, future completes itself early canceling the request.
pub async fn read_from_request<Client: ObjectClient>(
    body_sender: Sender<RequestReaderOutput>,
    backpressure_limiter: &mut BackpressureLimiter,
    client: Client,
    bucket: String,
    id: ObjectId,
    request_range: Range<u64>,
) -> Result<(), PrefetchReadError<Client::ClientError>> {
    let request = client
        .get_object(&bucket, id.key(), Some(request_range), Some(id.etag().clone()))
        .await
        .map_err(PrefetchReadError::GetRequestFailed)?;

    pin_mut!(request);
    let read_window_size_diff = backpressure_limiter
        .read_window_offset()
        .saturating_sub(request.as_ref().read_window_offset()) as usize;
    request.as_mut().increment_read_window(read_window_size_diff);

    loop {
        let Some(next) = request.next().await else {
            break;
        };

        let (offset, body) = next.map_err(PrefetchReadError::GetRequestFailed)?;
        let length = body.len() as u64;
        trace!(offset, length, "received GetObject part");
        metrics::counter!("s3.client.total_bytes", "type" => "read").increment(body.len() as u64);
        if body_sender.send((offset, body)).await.is_err() {
            trace!("body channel closed");
            break;
        }

        // Blocks if read window increment if it's not enough to read the next offset
        let next_offset = offset + length;
        if let Some(next_read_window_offset) = backpressure_limiter.wait_for_read_window_increment(next_offset).await? {
            let diff = next_read_window_offset.saturating_sub(request.as_ref().read_window_offset()) as usize;
            request.as_mut().increment_read_window(diff);
        }
    }
    trace!("request finished");
    Ok(())
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
