use std::{fmt::Debug, ops::Range, sync::Arc};

use async_trait::async_trait;
use bytes::Bytes;
use futures::{pin_mut, StreamExt};
use mountpoint_s3_client::{
    error::{GetObjectError, ObjectClientError},
    types::ETag,
    ObjectClient,
};
use mountpoint_s3_crt::checksums::crc32c;
use tracing::{error, trace};

use crate::prefetch::{checksummed_bytes::ChecksummedBytes, part::Part, part_queue::PartQueueProducer};

/// A generic interface to retrieve data from objects in a S3-like store.
#[async_trait]
pub trait ObjectPartFeed<Client: ObjectClient> {
    /// Get the content of an object in fixed size parts. The parts are pushed to the provided `part_sink`
    /// and are guaranteed to be contiguous and in the correct order. Callers need to specify a preferred
    /// size for the parts, but implementations are allowed to ignore it.
    async fn get_object_parts(
        &self,
        bucket: &str,
        key: &str,
        range: Range<u64>,
        if_match: ETag,
        preferred_part_size: usize,
        part_sink: PartQueueProducer<ObjectClientError<GetObjectError, Client::ClientError>>,
    );

    /// Adjust the size of a request to align to optimal part boundaries for this client.
    fn get_aligned_request_size(&self, offset: u64, preferred_size: usize) -> usize;
}

/// [ObjectPartFeed] implementation which delegates retrieving object data to a [Client].
#[derive(Debug)]
pub struct ClientPartFeed<Client> {
    client: Arc<Client>,
}

impl<Client> ClientPartFeed<Client> {
    pub fn new(client: Arc<Client>) -> Self {
        Self { client }
    }
}

#[async_trait]
impl<Client> ObjectPartFeed<Client> for ClientPartFeed<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    async fn get_object_parts(
        &self,
        bucket: &str,
        key: &str,
        range: Range<u64>,
        if_match: ETag,
        preferred_part_size: usize,
        part_queue_producer: PartQueueProducer<ObjectClientError<GetObjectError, Client::ClientError>>,
    ) {
        assert!(preferred_part_size > 0);
        let get_object_result = match self.client.get_object(bucket, key, Some(range), Some(if_match)).await {
            Ok(get_object_result) => get_object_result,
            Err(e) => {
                error!(error=?e, "GetObject request failed");
                part_queue_producer.push(Err(e));
                return;
            }
        };

        pin_mut!(get_object_result);
        loop {
            match get_object_result.next().await {
                Some(Ok((offset, body))) => {
                    trace!(offset, length = body.len(), "received GetObject part");
                    // pre-split the body into multiple parts as suggested by preferred part size
                    // in order to avoid validating checksum on large parts at read.
                    let mut body: Bytes = body.into();
                    let mut curr_offset = offset;
                    loop {
                        let chunk_size = preferred_part_size.min(body.len());
                        if chunk_size == 0 {
                            break;
                        }
                        let chunk = body.split_to(chunk_size);
                        // S3 doesn't provide checksum for us if the request range is not aligned to
                        // object part boundaries, so we're computing our own checksum here.
                        let checksum = crc32c::checksum(&chunk);
                        let checksum_bytes = ChecksummedBytes::new(chunk, checksum);
                        let part = Part::new(key, curr_offset, checksum_bytes);
                        curr_offset += part.len() as u64;
                        part_queue_producer.push(Ok(part));
                    }
                }
                Some(Err(e)) => {
                    error!(error=?e, "GetObject body part failed");
                    part_queue_producer.push(Err(e));
                    break;
                }
                None => break,
            }
        }
        trace!("request finished");
    }

    fn get_aligned_request_size(&self, offset: u64, preferred_length: usize) -> usize {
        // If the request size is bigger than a part size we will try to align it to part boundaries.
        let part_alignment = self.client.part_size().unwrap_or(8 * 1024 * 1024);
        let offset_in_part = (offset % part_alignment as u64) as usize;
        if offset_in_part != 0 {
            // if the offset is not at the start of the part we will drain all the bytes from that part first
            let remaining_in_part = part_alignment - offset_in_part;
            preferred_length.min(remaining_in_part)
        } else {
            // if the request size is smaller than the part size, just return that value
            if preferred_length < part_alignment {
                preferred_length
            } else {
                // if it exceeds part boundaries, trim it to the part boundaries
                let request_boundary = offset + preferred_length as u64;
                let remainder = (request_boundary % part_alignment as u64) as usize;
                preferred_length - remainder
            }
        }
    }
}
