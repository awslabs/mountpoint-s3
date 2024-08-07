use async_channel::{unbounded, Receiver, Sender};
use bytes::Bytes;
use futures::task::SpawnExt;
use futures::{join, pin_mut, task::Spawn, StreamExt};
use mountpoint_s3_client::ObjectClient;
use std::marker::{Send, Sync};
use std::{fmt::Debug, ops::Range};
use tracing::{debug_span, error, trace, Instrument};

use crate::checksums::ChecksummedBytes;
use crate::object::ObjectId;
use crate::prefetch::part::Part;
use crate::prefetch::part_queue::{unbounded_part_queue, PartQueueProducer};
use crate::prefetch::task::RequestTask;
use crate::prefetch::PrefetchReadError;

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
        let request_range = config
            .range
            .align(client.read_part_size().unwrap_or(8 * 1024 * 1024) as u64, true);
        let start = request_range.start();
        let size = request_range.len();

        let (part_queue, part_queue_producer) = unbounded_part_queue();
        trace!(range=?request_range, "spawning request");

        let span = debug_span!("prefetch", range=?request_range);
        let client = client.clone();
        let bucket = config.bucket.clone();
        let task_handle = self
            .runtime
            .spawn_with_handle(
                async move {
                    let (body_sender, body_receiver) = unbounded();
                    let part_composer = ClientPartComposer {
                        part_queue_producer,
                        object_id: config.object_id.clone(),
                        preferred_part_size: config.preferred_part_size,
                    };

                    let request_reader_future =
                        try_read_from_request(body_sender, client, bucket, config.object_id, request_range.into());
                    let part_composer_future = part_composer.try_compose_parts(body_receiver);
                    join!(request_reader_future, part_composer_future);
                }
                .instrument(span),
            )
            .unwrap();

        RequestTask::from_handle(task_handle, size, start, part_queue)
    }
}

struct ClientPartComposer<E: std::error::Error> {
    part_queue_producer: PartQueueProducer<E>,
    object_id: ObjectId,
    preferred_part_size: usize,
}

impl<E: std::error::Error + Send + Sync> ClientPartComposer<E> {
    async fn try_compose_parts(&self, body_receiver: Receiver<RequestReaderOutput<E>>) {
        if let Err(e) = self.compose_parts(body_receiver).await {
            trace!(error=?e, "part stream task failed");
            self.part_queue_producer.push(Err(e));
        }
        trace!("part composer finished");
    }

    async fn compose_parts(&self, body_receiver: Receiver<RequestReaderOutput<E>>) -> Result<(), PrefetchReadError<E>> {
        pin_mut!(body_receiver);
        while let Some(next) = body_receiver.next().await {
            let (offset, body) = next?;
            // pre-split the body into multiple parts as suggested by preferred part size
            // in order to avoid validating checksum on large parts at read.
            let mut body: Bytes = body.into();
            let mut curr_offset = offset;
            loop {
                let chunk_size = self.preferred_part_size.min(body.len());
                if chunk_size == 0 {
                    break;
                }
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

/// Spawns a `GetObject` request with the specified range and sends received body parts to the channel
/// pointed by `body_sender`. Once the request was finished (`None` returned), this future closes the
/// sending part of the channel and returns. After this the receiving part of the channel will still
/// be able to receive pending chunks. If the receiving part of the channel is closed before the request
/// was finished, future completes itself early canceling the request.
pub async fn try_read_from_request<Client: ObjectClient>(
    body_sender: Sender<RequestReaderOutput<Client::ClientError>>,
    client: Client,
    bucket: String,
    id: ObjectId,
    request_range: Range<u64>,
) {
    if let Err(e) = read_from_request(body_sender.clone(), client, bucket, id, request_range).await {
        trace!(error=?e, "part stream request failed");
        if body_sender.send(Err(e)).await.is_err() {
            trace!("body channel closed");
        }
    }
    trace!("request finished");
}

pub async fn read_from_request<Client: ObjectClient>(
    body_sender: Sender<RequestReaderOutput<Client::ClientError>>,
    client: Client,
    bucket: String,
    id: ObjectId,
    request_range: Range<u64>,
) -> Result<(), PrefetchReadError<Client::ClientError>> {
    let request = client
        .get_object(&bucket, id.key(), Some(request_range), Some(id.etag().clone()))
        .await
        .inspect_err(|e| error!(key=id.key(), error=?e, "GetObject request failed"))
        .map_err(PrefetchReadError::GetRequestFailed)?;

    pin_mut!(request);
    while let Some(next) = request.next().await {
        let (offset, body) = next
            .inspect_err(|e| error!(key=id.key(), error=?e, "GetObject body part failed"))
            .map_err(PrefetchReadError::GetRequestFailed)?;

        trace!(offset, length = body.len(), "received GetObject part");
        metrics::counter!("s3.client.total_bytes", "type" => "read").increment(body.len() as u64);
        if body_sender.send(Ok((offset, body))).await.is_err() {
            trace!("body channel closed");
            break;
        }
    }
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
