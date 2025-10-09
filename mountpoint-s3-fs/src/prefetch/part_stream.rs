use async_stream::try_stream;
use futures::task::SpawnExt;
use futures::{Stream, StreamExt, pin_mut};
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::types::{ClientBackpressureHandle, GetBodyPart, GetObjectParams, GetObjectResponse};
use std::marker::{Send, Sync};
use std::sync::Arc;
use std::{fmt::Debug, ops::Range};
use tracing::{Instrument, debug_span, error, trace};

use crate::async_util::Runtime;
use crate::checksums::ChecksummedBytes;
use crate::mem_limiter::MemoryLimiter;
use crate::object::ObjectId;

use super::PrefetchReadError;
use super::backpressure_controller::{BackpressureConfig, BackpressureLimiter, new_backpressure_controller};
use super::part::Part;
use super::part_queue::{PartQueueProducer, unbounded_part_queue};
use super::task::RequestTask;

/// A generic interface to retrieve data from objects in a S3-like store.
pub trait ObjectPartStream<Client: ObjectClient + Clone + Send + Sync + 'static> {
    /// Spawns a request to get the content of an object. The object data will be retrieved in fixed size
    /// parts and can then be consumed using [RequestTask::read]. Callers need to specify a preferred
    /// size for the parts, but implementations are allowed to ignore it.
    fn spawn_get_object_request(&self, config: RequestTaskConfig) -> RequestTask<Client>;

    /// The underlying [ObjectClient].
    fn client(&self) -> &Client;
}

#[derive(Clone, Debug)]
/// The configs for spawning a task in [ObjectPartStream::spawn_get_object_request].
pub struct RequestTaskConfig {
    pub bucket: String,
    pub object_id: ObjectId,
    pub range: RequestRange,
    pub read_part_size: usize,
    pub preferred_part_size: usize,
    pub initial_read_window_size: usize,
    pub max_read_window_size: usize,
    pub read_window_size_multiplier: usize,
}

/// The range of an [ObjectPartStream].
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

/// Type-erased [ObjectPartStream].
#[derive(Clone)]
pub struct PartStream<Client> {
    inner: Arc<dyn ObjectPartStream<Client> + Send + Sync + 'static>,
}

impl<Client> PartStream<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    pub fn new<Stream>(part_stream: Stream) -> Self
    where
        Stream: ObjectPartStream<Client> + Send + Sync + 'static,
    {
        Self {
            inner: Arc::new(part_stream),
        }
    }

    pub fn spawn_get_object_request(&self, config: RequestTaskConfig) -> RequestTask<Client> {
        self.inner.spawn_get_object_request(config)
    }

    pub fn client(&self) -> &Client {
        self.inner.client()
    }
}

impl<Client> Debug for PartStream<Client> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("PartStream").finish_non_exhaustive()
    }
}

/// [ObjectPartStream] implementation which delegates retrieving object data to a [Client].
#[derive(Debug)]
pub struct ClientPartStream<Client: ObjectClient + Clone + Send + Sync + 'static> {
    runtime: Runtime,
    client: Client,
    mem_limiter: Arc<MemoryLimiter>,
}

impl<Client: ObjectClient + Clone + Send + Sync + 'static> ClientPartStream<Client> {
    pub fn new(runtime: Runtime, client: Client, mem_limiter: Arc<MemoryLimiter>) -> Self {
        Self {
            runtime,
            client,
            mem_limiter,
        }
    }
}

pub type RequestReaderOutput<E> = Result<GetBodyPart, PrefetchReadError<E>>;

impl<Client: ObjectClient + Clone + Send + Sync + 'static> ObjectPartStream<Client> for ClientPartStream<Client> {
    fn spawn_get_object_request(&self, config: RequestTaskConfig) -> RequestTask<Client> {
        assert!(config.preferred_part_size > 0);

        let range = config.range;

        let backpressure_config = BackpressureConfig {
            initial_read_window_size: config.initial_read_window_size,
            // We don't want to completely block the stream so let's use
            // the read part size as minimum read window.
            min_read_window_size: config.read_part_size,
            max_read_window_size: config.max_read_window_size,
            read_window_size_multiplier: config.read_window_size_multiplier,
            request_range: range.into(),
        };
        let (backpressure_controller, mut backpressure_limiter) =
            new_backpressure_controller(backpressure_config, self.mem_limiter.clone());
        let (part_queue, part_queue_producer) = unbounded_part_queue(self.mem_limiter.clone());
        trace!(?range, "spawning request");

        let span = debug_span!("prefetch", ?range);
        let client = self.client.clone();
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

    fn client(&self) -> &Client {
        &self.client
    }
}

struct ClientPartComposer<E: std::error::Error> {
    part_queue_producer: PartQueueProducer<E>,
    object_id: ObjectId,
    preferred_part_size: usize,
}

impl<E> ClientPartComposer<E>
where
    E: std::error::Error + Send + Sync,
{
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
            let GetBodyPart { offset, data: mut body } = next?;
            // pre-split the body into multiple parts as suggested by preferred part size
            // in order to avoid validating checksum on large parts at read.
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
        let mut current_offset = first_req_range.start();
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
                let next = next?;
                current_offset = next.offset + next.data.len() as u64;
                yield(next);
            }
        }

        // After the first request is completed we will create the second request for the rest of the stream,
        // but only if there is something left to be fetched.
        let range = range.trim_start(first_read_window_end_offset);
        if !range.is_empty() {
            if current_offset < range.start() {
                // We got less data than we requested. We assume the consumer will consume
                // all the data up to `range.start()` and will increase the read window,
                // thus, the next line, `wait_for_read_window_increment(range.start())` will eventually be satisfied.
                // However, if we get less data than we expected, the consumer wouldn't consume
                // enough data and wouldn't increase the read window, and the next await would block forever
                // as there is no one to increase the read window.
                //
                // This is an runtime error instead of an `assert!` because the prefetcher resets the
                // prefetch to the offset again in case of an error, and that would cause a new stream
                // to be created which in turn would succeed in the next try if this was a transient issue.
                error!(key=object_id.key(), current_range=?range, current_offset, "Previous GetObject request terminated unexpectedly");
                Err(PrefetchReadError::GetRequestTerminatedUnexpectedly)?;
            }

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

            // TODO: We currently wait for the first request data to be consumed
            //       before starting the request for the remainder of the object.
            //       However, we could start this in parallel to potentially accelerate medium-sized reads,
            //       where medium-sized is roughly larger than 1MiB+1KiB but smaller than a few parts,
            //       since we expect impact due to round-trip time latency.
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

/// Creates a meta GetObject request with the specified range and sends received body parts via the returned [Stream].
///
/// A [PrefetchReadError] is returned when something goes wrong in the underlying meta GetObject request.
fn read_from_request<'a, Client: ObjectClient + 'a>(
    backpressure_limiter: &'a mut BackpressureLimiter,
    client: &'a Client,
    bucket: String,
    id: ObjectId,
    request_range: Range<u64>,
) -> impl Stream<Item = RequestReaderOutput<Client::ClientError>> + 'a {
    try_stream! {
        let mut request = client
            .get_object(&bucket, id.key(), &GetObjectParams::new().range(Some(request_range.clone())).if_match(Some(id.etag().clone())))
            .await
            .inspect_err(|e| error!(key=id.key(), error=?e, "GetObject request failed"))
            .map_err(|err| PrefetchReadError::get_request_failed(err, &bucket, id.key()))?;

        let mut client_backpressure_handle = request.backpressure_handle()
            .expect("S3 client backpressure should always be enabled in Mountpoint")
            .clone();
        client_backpressure_handle.ensure_read_window(backpressure_limiter.read_window_end_offset());

        pin_mut!(request);
        while let Some(next) = request.next().await {
            let part = next
                .inspect_err(|e| error!(key=id.key(), error=?e, "GetObject body part failed"))
                .map_err(|err| PrefetchReadError::get_request_failed(err, &bucket, id.key()))?;

            let length = part.data.len() as u64;
            trace!(offset=part.offset, length, "received GetObject part");
            metrics::counter!("s3.client.total_bytes", "type" => "read").increment(length);

            let next_offset = part.offset + length;
            yield part;

            // We are reaching the end so don't have to wait for more read window
            if next_offset == request_range.end {
                break;
            }

            // The CRT could return data more than what we have requested in the read window
            // which means unaccounted memory, so we want to record them here.
            let excess_bytes = next_offset.saturating_sub(backpressure_limiter.read_window_end_offset());
            if excess_bytes > 0 {
                metrics::histogram!("s3.client.read_window_excess_bytes").record(excess_bytes as f64);
            }

            // When we detect an updated read window end offset, pass this signal on to the S3 client.
            // TODO:
            //   It does not make sense to 'block' here. In reality, we don't actually block here anyway.
            //   This serves instead as the point where we react to the backpressure, and send signals to the S3 client.
            //   Instead, the backpressure controller or an async task could communicate directly with the client.
            if let Some(next_read_window_end_offset) = backpressure_limiter.wait_for_read_window_increment(next_offset).await? {
                client_backpressure_handle.ensure_read_window(next_read_window_end_offset);
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
                aligned_range.end() as usize == aligned_range.object_size()
                    || aligned_range.end() as usize % part_size == 0,
                "ranges starting on a part boundary should be aligned to another part boundary, or to the end of the object"
            );
        }

        if trim_only {
            assert!(aligned_range.len() <= range.len());
        }

        assert_eq!(aligned_range.len(), expected_size);
    }
}
