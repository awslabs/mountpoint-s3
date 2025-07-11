//! This module implements an upload pipeline that allows appending to existing objects.

use std::fmt::Debug;
use std::mem;

use async_channel::{Receiver, Sender, bounded, unbounded};
use futures::future::RemoteHandle;
use futures::task::SpawnExt as _;
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::error::{ObjectClientError, PutObjectError};
use mountpoint_s3_client::types::{
    ChecksumAlgorithm, ChecksumMode, ETag, HeadObjectParams, PutObjectResult, PutObjectSingleParams, UploadChecksum,
};
use tracing::{Instrument, debug_span, trace};

use crate::ServerSideEncryption;
use crate::async_util::{RemoteResult, Runtime, result_channel};
use crate::mem_limiter::{BufferArea, MemoryLimiter};
use crate::sync::Arc;

use super::hasher::ChecksumHasher;
use super::{ChecksumHasherError, UploadError};

/// Handle for appending data to an S3 object.
///
/// This request contains a buffer that can be written to,
/// before being pushed to the [AppendUploadQueue]
/// which may queue some number of buffers while appending data to the S3 object
/// over multiple subsequent S3 PutObject with offset requests.
#[derive(Debug)]
pub struct AppendUploadRequest<Client: ObjectClient> {
    /// The current buffer, initialized lazily on write.
    buffer: Option<UploadBuffer>,
    /// The current offset.
    offset: u64,
    buffer_size: usize,
    upload_queue: AppendUploadQueue<Client>,
}

/// Parameters to initialize an [AppendUploadQueue].
pub struct AppendUploadQueueParams {
    pub bucket: String,
    pub key: String,
    pub initial_offset: u64,
    pub initial_etag: Option<ETag>,
    pub server_side_encryption: ServerSideEncryption,
    /// Preferred checksum algorithm for new objects.
    ///
    /// If the object already exists, its current algorithm will be used instead.
    pub default_checksum_algorithm: Option<ChecksumAlgorithm>,
    pub capacity: usize,
}

impl<Client> AppendUploadRequest<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    pub(super) fn new(
        runtime: &Runtime,
        client: Client,
        buffer_size: usize,
        mem_limiter: Arc<MemoryLimiter>,
        params: AppendUploadQueueParams,
    ) -> Self {
        let offset = params.initial_offset;
        let upload_queue = AppendUploadQueue::new(runtime, client, mem_limiter, params);
        Self {
            buffer: None,
            upload_queue,
            offset,
            buffer_size,
        }
    }

    /// Write the given slice to the pipeline. This will not trigger the upload right away,
    /// but will be queued to upload until the buffer is full and all previous buffers have
    /// been uploaded.
    /// On success, returns the number of bytes written.
    pub async fn write(&mut self, offset: u64, data: &[u8]) -> Result<usize, UploadError<Client::ClientError>> {
        // Bail out if a previous request failed
        self.upload_queue.verify().await?;

        if offset != self.offset {
            return Err(UploadError::OutOfOrderWrite {
                write_offset: offset,
                expected_offset: self.offset,
            });
        }

        let mut slice = data;
        while !slice.is_empty() {
            let buffer = match self.buffer.as_mut() {
                Some(buffer) => buffer,
                None => {
                    self.buffer = Some(self.upload_queue.get_buffer(self.buffer_size).await?);
                    self.buffer.as_mut().unwrap()
                }
            };

            let len = slice.len();
            slice = buffer.write(slice)?;
            self.offset += (len - slice.len()) as u64;

            // Flush buffer to the queue if it is full
            if buffer.is_full() {
                trace!("push full buffer to append queue");
                self.upload_queue.push(self.buffer.take().unwrap()).await?;
            }
        }
        Ok((self.offset - offset) as usize)
    }

    /// Complete the upload and return the last `PutObjectResult` if any PUT requests are submitted.
    /// The pipeline cannot be used after this.
    pub async fn complete(mut self) -> Result<Option<PutObjectResult>, UploadError<Client::ClientError>> {
        if let Some(buffer) = self.buffer.take() {
            trace!("push remaining buffer to append queue");
            self.upload_queue.push(buffer).await?;
        } else if self.offset == 0 {
            // If we are not appending, but uploading a new object or entirely replacing an existing one,
            // we need to push an empty buffer to ensure a PutObject request is issued.
            trace!("push empty buffer to append queue");
            let empty_buffer = self.upload_queue.get_buffer(0).await?;
            self.upload_queue.push(empty_buffer).await?;
        }
        self.upload_queue.join().await
    }

    pub fn current_offset(&self) -> u64 {
        self.offset
    }
}

/// Queue for an active 'append' to an S3 object.
///
/// This struct has message channels whose queues may contain a number of buffered parts to be appended to an object.
/// The struct is responsible for taking requests from the queue and initiating the S3 PutObject with offset requests.
///
/// Requests should be sent to this struct using [AppendUploadRequest::write].
#[derive(Debug)]
struct AppendUploadQueue<Client: ObjectClient> {
    /// Channel handle for sending buffers to be appended to the object.
    request_sender: Sender<UploadBuffer>,
    /// Channel handle for receiving the response of S3 requests.
    response_receiver: Receiver<Result<PutObjectResult, UploadError<Client::ClientError>>>,
    mem_limiter: Arc<MemoryLimiter>,
    _task_handle: RemoteHandle<()>,
    /// Algorithm used to compute checksums. Lazily initialized.
    checksum_algorithm: RemoteResult<Option<ChecksumAlgorithm>, UploadError<Client::ClientError>>,
    /// Stores the last successful result to return in [join].
    last_known_result: Option<PutObjectResult>,
    /// Tracks the requests pushed to the queue but still pending a response.
    requests_in_queue: usize,
}

impl<Client> AppendUploadQueue<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    pub fn new(
        runtime: &Runtime,
        client: Client,
        mem_limiter: Arc<MemoryLimiter>,
        params: AppendUploadQueueParams,
    ) -> Self {
        let span = debug_span!("append", key = params.key, initial_offset = params.initial_offset);
        let (request_sender, request_receiver) = bounded(params.capacity);
        let (response_sender, response_receiver) = unbounded();
        let (checksum_algorithm_sender, checksum_algorithm) = result_channel();

        // Create a task for reading data out of the upload queue and create S3 requests for them.
        let task_handle = runtime
            .spawn_with_handle(
                async move {
                    let checksum_algorithm = get_checksum_algorithm(&client, &params).await;
                    let is_error = checksum_algorithm.is_err();
                    if !checksum_algorithm_sender.send(checksum_algorithm).await || is_error {
                        return;
                    }

                    run_append_loop(client, params, request_receiver, response_sender).await;
                    trace!("append upload task finished");
                }
                .instrument(span),
            )
            .unwrap();
        Self {
            request_sender,
            response_receiver,
            last_known_result: None,
            requests_in_queue: 0,
            mem_limiter,
            checksum_algorithm,
            _task_handle: task_handle,
        }
    }

    // Push given bytes with its checksum to the upload queue
    pub async fn push(&mut self, buffer: UploadBuffer) -> Result<(), UploadError<Client::ClientError>> {
        if let Err(_send_error) = self.request_sender.send(buffer).await {
            // The upload queue could be closed if there was a client error from previous requests
            trace!("upload queue is already closed");
            while self.consume_next_response().await? {}
            return Err(UploadError::UploadAlreadyTerminated);
        }
        self.requests_in_queue += 1;
        Ok(())
    }

    pub async fn verify(&mut self) -> Result<(), UploadError<Client::ClientError>> {
        if self.request_sender.is_closed() {
            // The upload queue could be closed if there was a client error from previous requests
            trace!("upload queue is already closed");
            while self.consume_next_response().await? {}
            return Err(UploadError::UploadAlreadyTerminated);
        }
        Ok(())
    }

    // Close the upload queue, wait for all uploads in the queue to complete, and get the last `PutObjectResult`
    pub async fn join(mut self) -> Result<Option<PutObjectResult>, UploadError<Client::ClientError>> {
        let terminated = !self.request_sender.close();
        while self.consume_next_response().await? {}
        if terminated {
            return Err(UploadError::UploadAlreadyTerminated);
        }
        Ok(self.last_known_result.take())
    }

    pub async fn get_buffer(&mut self, capacity: usize) -> Result<UploadBuffer, UploadError<Client::ClientError>> {
        let checksum_algorithm = self.checksum_algorithm.get_mut().await?.unwrap().clone();

        while self.requests_in_queue > 0 {
            match UploadBuffer::try_new(capacity, &checksum_algorithm, self.mem_limiter.clone())? {
                Some(buffer) => return Ok(buffer),
                None => {
                    // wait for requests in the queue to complete before trying to reserve memory again
                    trace!("wait for the next request to be processed");
                    if !self.consume_next_response().await? {
                        return Err(UploadError::UploadAlreadyTerminated);
                    }
                }
            }
        }
        // no more requests in the queue, so we force creating a new buffer
        Ok(UploadBuffer::new(
            capacity,
            &checksum_algorithm,
            self.mem_limiter.clone(),
        )?)
    }

    /// Wait on the response channel, updating the state of the [AppendUploadQueue] when the next response arrives.
    ///
    /// Returns `true` if a response was successfully consumed, or `false` if response channel was closed.
    async fn consume_next_response(&mut self) -> Result<bool, UploadError<Client::ClientError>> {
        let Ok(output) = self.response_receiver.recv().await else {
            return Ok(false);
        };
        let result = output?;
        trace!(?result, "received result");
        self.requests_in_queue -= 1;
        self.last_known_result = Some(result);
        Ok(true)
    }
}

async fn get_checksum_algorithm<Client>(
    client: &Client,
    params: &AppendUploadQueueParams,
) -> Result<Option<ChecksumAlgorithm>, UploadError<Client::ClientError>>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    if params.initial_offset == 0 {
        // If we are creating a new object or overwriting (truncate), use the default checksum algorithm.
        return Ok(params.default_checksum_algorithm.clone());
    }
    // We are appending to an existing object, find out which checksum algorithm it uses.
    let head_object = client
        .head_object(
            &params.bucket,
            &params.key,
            &HeadObjectParams::new().checksum_mode(Some(ChecksumMode::Enabled)),
        )
        .await?;

    trace!(?head_object, "received head_object response");
    if Some(head_object.etag) != params.initial_etag {
        // Fail early if the etag has changed.
        return Err(UploadError::PutRequestFailed(ObjectClientError::ServiceError(
            PutObjectError::PreconditionFailed,
        )));
    }
    Ok(head_object.checksum.algorithms().first().cloned())
}

/// Run the main loop waiting on new buffers to append to the S3 object.
async fn run_append_loop<Client>(
    client: Client,
    params: AppendUploadQueueParams,
    request_receiver: Receiver<UploadBuffer>,
    response_sender: Sender<Result<PutObjectResult, UploadError<Client::ClientError>>>,
) where
    Client: ObjectClient + Send + Sync + 'static,
{
    let bucket = params.bucket;
    let key = params.key;
    let sse = params.server_side_encryption;
    let mut etag = params.initial_etag;
    let mut offset = params.initial_offset;

    while let Ok(buffer) = request_receiver.recv().await {
        let buffer_len = buffer.len();
        let response = append(&client, &bucket, &key, buffer, offset, etag.take(), sse.clone())
            .await
            .inspect(|result| {
                offset += buffer_len as u64;
                etag = Some(result.etag.clone());
            });

        let error = response.is_err();
        if error {
            trace!("append upload task failed");
            // Stop receiving new requests
            request_receiver.close();
        }

        // Send response to the [AppendUploadQueue].
        if response_sender.send(response).await.is_err() {
            trace!("response channel is already closed");
            break;
        } else if error {
            trace!("closing response channel");
            response_sender.close();
            break;
        }
    }
}

async fn append<Client: ObjectClient>(
    client: &Client,
    bucket: &str,
    key: &str,
    buffer: UploadBuffer,
    offset: u64,
    etag: Option<ETag>,
    server_side_encryption: ServerSideEncryption,
) -> Result<PutObjectResult, UploadError<Client::ClientError>> {
    trace!(key, offset, len = buffer.len(), "preparing PutObject request");
    let (data, checksum) = buffer.freeze()?;
    let mut request_params = if offset == 0 {
        PutObjectSingleParams::new()
    } else {
        PutObjectSingleParams::new_for_append(offset).if_match(etag)
    };
    let (sse_type, key_id) = server_side_encryption
        .into_inner()
        .map_err(UploadError::SseCorruptedError)?;
    request_params.checksum = checksum;
    request_params.server_side_encryption = sse_type;
    request_params.ssekms_key_id = key_id;
    client
        .put_object_single(bucket, key, &request_params, data)
        .await
        .map_err(UploadError::PutRequestFailed)
}

#[derive(Debug)]
struct UploadBuffer {
    data: Vec<u8>,
    // Running checksum for the data.
    hasher: ChecksumHasher,
    capacity: usize,
    mem_limiter: Arc<MemoryLimiter>,
}

impl UploadBuffer {
    /// Force creating a new buffer regardless of available memory
    fn new(
        capacity: usize,
        checksum_algorithm: &Option<ChecksumAlgorithm>,
        mem_limiter: Arc<MemoryLimiter>,
    ) -> Result<Self, ChecksumHasherError> {
        let hasher = ChecksumHasher::new(checksum_algorithm)?;
        mem_limiter.reserve(BufferArea::Upload, capacity as u64);
        Ok(Self {
            data: Vec::with_capacity(capacity),
            hasher,
            capacity,
            mem_limiter,
        })
    }

    /// Try creating a new buffer, return `None` if unable to reserve memory for a buffer with the given capacity
    fn try_new(
        capacity: usize,
        checksum_algorithm: &Option<ChecksumAlgorithm>,
        mem_limiter: Arc<MemoryLimiter>,
    ) -> Result<Option<Self>, ChecksumHasherError> {
        let hasher = ChecksumHasher::new(checksum_algorithm)?;
        if mem_limiter.try_reserve(BufferArea::Upload, capacity as u64) {
            Ok(Some(Self {
                data: Vec::with_capacity(capacity),
                hasher,
                capacity,
                mem_limiter,
            }))
        } else {
            Ok(None)
        }
    }

    /// Write a slice to the buffer. The slice will be trimmed to fit into the buffer,
    /// remaining slice is returned back to the caller.
    fn write<'a>(&mut self, slice: &'a [u8]) -> Result<&'a [u8], ChecksumHasherError> {
        let available_cap = self.capacity - self.data.len();
        let (left, right) = slice.split_at(available_cap.min(slice.len()));
        self.data.extend_from_slice(left);
        self.hasher.update(left)?;
        Ok(right)
    }

    fn is_full(&self) -> bool {
        self.data.len() == self.capacity
    }

    fn len(&self) -> usize {
        self.data.len()
    }

    fn freeze(mut self) -> Result<(Box<[u8]>, Option<UploadChecksum>), ChecksumHasherError> {
        let bytes = mem::take(&mut self.data).into_boxed_slice();
        let checksum = mem::take(&mut self.hasher);
        Ok((bytes, checksum.finalize()?))
    }
}

impl Drop for UploadBuffer {
    fn drop(&mut self) {
        self.mem_limiter.release(BufferArea::Upload, self.capacity as u64);
    }
}

#[cfg(test)]
mod tests {
    use std::collections::HashMap;

    use crate::mem_limiter::MINIMUM_MEM_LIMIT;

    use super::super::{Uploader, UploaderConfig};
    use super::*;

    use futures::executor::ThreadPool;
    use mountpoint_s3_client::error::{ObjectClientError, PutObjectError};
    use mountpoint_s3_client::failure_client::{CountdownFailureConfig, countdown_failure_client};
    use mountpoint_s3_client::mock_client::{MockClient, MockObject};
    use mountpoint_s3_client::types::{ChecksumAlgorithm, ETag, GetObjectParams, GetObjectResponse};
    use test_case::test_case;

    fn new_uploader_for_test<Client>(
        client: Client,
        buffer_size: usize,
        server_side_encryption: Option<ServerSideEncryption>,
        default_checksum_algorithm: Option<ChecksumAlgorithm>,
    ) -> Uploader<Client>
    where
        Client: ObjectClient + Clone + Send + Sync + 'static,
    {
        let runtime = Runtime::new(ThreadPool::builder().pool_size(1).create().unwrap());
        let mem_limiter = MemoryLimiter::new(client.clone(), MINIMUM_MEM_LIMIT);
        Uploader::new(
            client,
            runtime,
            mem_limiter.into(),
            UploaderConfig::new(buffer_size)
                .server_side_encryption(server_side_encryption.unwrap_or_default())
                .default_checksum_algorithm(default_checksum_algorithm),
        )
    }

    #[test_case(None)]
    #[test_case(Some(MockObject::ramp(0xaa, 2 * 1024 * 1024, ETag::for_tests()).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::constant(0xab, 20, ETag::for_tests()).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::from([]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::from([0xbb; 128])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Crc64nvme])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Crc32])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Sha1])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Sha256])))]
    #[tokio::test]
    async fn test_append_align_with_buffer(existing_object: Option<MockObject>) {
        let bucket = "bucket";
        let key = "hello";
        let mut expected_content = Vec::new();

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());

        // Create the "before append" object for the test
        let mut existing_object = existing_object;
        if let Some(object) = &mut existing_object {
            client.add_object(key, object.clone());
            expected_content.extend_from_slice(&object.read(0, object.len()));
        }

        let buffer_size = 256;
        let uploader = new_uploader_for_test(client.clone(), buffer_size, None, None);
        let mut offset = existing_object.as_ref().map_or(0, |object| object.len() as u64);
        let initial_etag = existing_object.map(|object| object.etag());
        let mut upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), offset, initial_etag);

        // Write some data
        let append_data = [0xaa; 128];
        expected_content.extend_from_slice(&append_data);
        offset += upload_request
            .write(offset, &append_data)
            .await
            .expect("write should succeed") as u64;

        // The buffer should be updated
        let buffer = upload_request.buffer.as_ref().unwrap();
        assert_eq!(buffer_size, buffer.data.capacity());
        assert_eq!(&append_data, &buffer.data[..]);

        // Write more data to make the buffer full
        let append_data = [0xab; 128];
        expected_content.extend_from_slice(&append_data);
        upload_request
            .write(offset, &append_data)
            .await
            .expect("write should succeed");

        // The upload should be started and the buffer should be none
        assert!(upload_request.buffer.is_none());

        // Wait for the upload to complete
        upload_request
            .complete()
            .await
            .expect("upload should complete successfully");

        // Verify content of the object
        let get_request = client
            .get_object(bucket, key, &GetObjectParams::default())
            .await
            .expect("get_object failed");
        let actual = get_request.collect().await.expect("failed to collect body");
        assert_eq!(expected_content, *actual);
    }

    #[test_case(None)]
    #[test_case(Some(MockObject::ramp(0xaa, 2 * 1024 * 1024, ETag::for_tests()).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::constant(0xab, 20, ETag::for_tests()).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::from([]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::from([0xbb; 128])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Crc64nvme])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Crc32])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Sha1])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Sha256])))]
    #[tokio::test]
    async fn test_append_not_align_with_buffer(existing_object: Option<MockObject>) {
        let bucket = "bucket";
        let key = "hello";
        let mut expected_content = Vec::new();

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());
        // Create the "before append" object for the test
        let mut existing_object = existing_object;
        if let Some(object) = &mut existing_object {
            client.add_object(key, object.clone());
            expected_content.extend_from_slice(&object.read(0, object.len()));
        }

        let buffer_size = 256;
        let uploader = new_uploader_for_test(client.clone(), buffer_size, None, None);
        let mut offset = existing_object.as_ref().map_or(0, |object| object.len() as u64);
        let initial_etag = existing_object.map(|object| object.etag());
        let mut upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), offset, initial_etag);

        // Write some data and verify that buffer length should not grow larger than configured capacity
        let append_data = [0xaa; 384];
        expected_content.extend_from_slice(&append_data);
        offset += upload_request
            .write(offset, &append_data)
            .await
            .expect("write should succeed") as u64;
        let buffer = upload_request.buffer.as_ref().unwrap();
        assert!(buffer.data.len() < buffer_size);

        // Write more data and verify buffer length
        let append_data = [0xab; 256];
        expected_content.extend_from_slice(&append_data);
        upload_request
            .write(offset, &append_data)
            .await
            .expect("write should succeed");
        let buffer = upload_request.buffer.as_ref().unwrap();
        assert!(buffer.data.len() < buffer_size);

        // Wait for the upload to complete
        upload_request
            .complete()
            .await
            .expect("upload should complete successfully");

        // Verify content of the object
        let get_request = client
            .get_object(bucket, key, &GetObjectParams::default())
            .await
            .expect("get_object failed");
        let actual = get_request.collect().await.expect("failed to collect body");
        assert_eq!(expected_content, *actual);
    }

    #[test_case(None, None)]
    #[test_case(None, Some(ChecksumAlgorithm::Crc64nvme))]
    #[test_case(None, Some(ChecksumAlgorithm::Crc32c))]
    #[test_case(None, Some(ChecksumAlgorithm::Crc32))]
    #[test_case(None, Some(ChecksumAlgorithm::Sha1))]
    #[test_case(None, Some(ChecksumAlgorithm::Sha256))]
    #[test_case(Some(&[]), Some(ChecksumAlgorithm::Crc32c))]
    #[test_case(Some(&[ChecksumAlgorithm::Crc64nvme]), None)]
    #[test_case(Some(&[ChecksumAlgorithm::Crc32c]), None)]
    #[test_case(Some(&[ChecksumAlgorithm::Crc32]), None)]
    #[test_case(Some(&[ChecksumAlgorithm::Sha1]), None)]
    #[test_case(Some(&[ChecksumAlgorithm::Sha256]), None)]
    #[tokio::test]
    async fn test_append_respects_checksums(
        existing_object_checksum_algorithms: Option<&[ChecksumAlgorithm]>,
        default_checksum_algorithm: Option<ChecksumAlgorithm>,
    ) {
        let bucket = "bucket";
        let key = "hello";

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());

        let mut expected_checksum_algorithm = default_checksum_algorithm.as_slice();
        let mut expected_content = Vec::new();
        let mut offset = 0;
        let mut initial_etag = None;
        if let Some(algorithms) = existing_object_checksum_algorithms {
            let existing_content = [0xbb; 128];
            let object = MockObject::from(&existing_content).with_computed_checksums(algorithms);
            expected_content.extend_from_slice(&existing_content);
            expected_checksum_algorithm = algorithms;

            offset = object.len() as u64;
            initial_etag = Some(object.etag());
            // Create the "before append" object for the test
            client.add_object(key, object);
        }

        let buffer_size = 256;
        let uploader = new_uploader_for_test(client.clone(), buffer_size, None, default_checksum_algorithm.clone());
        let mut upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), offset, initial_etag);

        // Write some data
        let append_data = [0xaa; 384];
        expected_content.extend_from_slice(&append_data);
        upload_request
            .write(offset, &append_data)
            .await
            .expect("write should succeed");

        // Wait for the upload to complete
        upload_request
            .complete()
            .await
            .expect("upload should complete successfully");

        // Verify content of the object
        let get_request = client
            .get_object(
                bucket,
                key,
                &GetObjectParams::default().checksum_mode(Some(ChecksumMode::Enabled)),
            )
            .await
            .expect("get_object failed");

        let checksum = get_request.get_object_checksum().expect("failed to get checksum");
        assert_eq!(checksum.algorithms(), expected_checksum_algorithm);

        let actual = get_request.collect().await.expect("failed to collect body");
        assert_eq!(expected_content, *actual);
    }

    #[test_case(None)]
    #[test_case(Some(MockObject::ramp(0xaa, 2 * 1024 * 1024, ETag::for_tests()).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::constant(0xab, 20, ETag::for_tests()).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::from([]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[test_case(Some(MockObject::from([0xbb; 128]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c])))]
    #[tokio::test]
    async fn test_append_empty(existing_object: Option<MockObject>) {
        let bucket = "bucket";
        let key = "hello";
        let mut expected_content = Vec::new();

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());
        // Create the "before append" object for the test
        let mut existing_object = existing_object;
        if let Some(object) = &mut existing_object {
            client.add_object(key, object.clone());
            expected_content.extend_from_slice(&object.read(0, object.len()));
        }

        let buffer_size = 256;
        let uploader = new_uploader_for_test(client.clone(), buffer_size, None, None);
        let initial_offset = existing_object.as_ref().map_or(0, |object| object.len() as u64);
        let initial_etag = existing_object.map(|object| object.etag());
        let upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), initial_offset, initial_etag);
        // Wait for the upload to complete
        upload_request
            .complete()
            .await
            .expect("upload should complete successfully");

        // Verify content of the object
        let get_request = client
            .get_object(bucket, key, &GetObjectParams::default())
            .await
            .expect("get_object failed");
        let actual = get_request.collect().await.expect("failed to collect body");
        assert_eq!(expected_content, *actual);
    }

    #[tokio::test]
    async fn test_append_failure_at_completion() {
        let bucket = "bucket";
        let key = "hello";

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());
        // Create the "before append" object for the test
        let existing_object = MockObject::from([0xbb; 20]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c]);
        client.add_object(key, existing_object.clone());

        let buffer_size = 256;
        let uploader = new_uploader_for_test(client.clone(), buffer_size, None, None);

        // Test append with a wrong offset
        let initial_offset = (existing_object.len() - 1) as u64;
        let initial_etag = existing_object.etag();
        let mut upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), initial_offset, Some(initial_etag));

        let append_data = [0xaa; 128];
        upload_request
            .write(initial_offset, &append_data)
            .await
            .expect("write should succeed");
        // Verify that the request fails at completion
        assert!(matches!(
            upload_request.complete().await,
            Err(UploadError::PutRequestFailed(_))
        ));
    }

    #[tokio::test]
    async fn test_append_partial_failure_at_completion() {
        let bucket = "bucket";
        let key = "hello";
        let mut expected_content = Vec::new();

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());

        let mut put_single_failures = HashMap::new();
        put_single_failures.insert(2, ObjectClientError::ServiceError(PutObjectError::BadChecksum));
        let failure_client = Arc::new(countdown_failure_client(
            client.clone(),
            CountdownFailureConfig {
                put_single_failures,
                ..Default::default()
            },
        ));

        // Create the "before append" object for the test
        let existing_object = MockObject::from([0xbb; 20]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c]);
        client.add_object(key, existing_object.clone());
        expected_content.extend_from_slice(&existing_object.read(0, existing_object.len()));

        let buffer_size = 256;
        let uploader = new_uploader_for_test(failure_client, buffer_size, None, None);
        let initial_offset = existing_object.len() as u64;
        let initial_etag = existing_object.etag();
        let mut upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), initial_offset, Some(initial_etag));

        // Write data more than the buffer capacity as the first append should succeed
        let append_data = [0xab; 384];
        expected_content.extend_from_slice(&append_data[..buffer_size]);
        upload_request
            .write(initial_offset, &append_data)
            .await
            .expect("write should succeed");

        // Verify that the request fails and the error is surfaced
        let result = upload_request.complete().await;
        assert!(matches!(result, Err(UploadError::PutRequestFailed(_))));

        // Verify that object is partially appended from the first request
        let get_request = client
            .get_object(bucket, key, &GetObjectParams::default())
            .await
            .expect("get_object failed");
        let actual = get_request.collect().await.expect("failed to collect body");
        assert_eq!(expected_content, *actual);
    }

    #[tokio::test]
    async fn test_append_failure_during_write() {
        let bucket = "bucket";
        let key = "hello";

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());
        // Create the "before append" object for the test
        let existing_object = MockObject::from([0xbb; 20]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c]);
        client.add_object(key, existing_object.clone());

        let buffer_size = 256;
        let uploader = new_uploader_for_test(client.clone(), buffer_size, None, None);

        // Test append with a wrong offset
        let mut offset = (existing_object.len() - 1) as u64;
        let initial_etag = existing_object.etag();
        let mut upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), offset, Some(initial_etag));

        // Keep writing and it should fail eventually
        let mut write_success_count = 0;
        let max_retries = 10000;
        let append_data = [0xab; 256];
        while write_success_count < max_retries {
            match upload_request.write(offset, &append_data).await {
                Ok(len) => {
                    offset += len as u64;
                    write_success_count += 1;
                }
                Err(e) => {
                    assert!(matches!(e, UploadError::PutRequestFailed(_)));
                    break;
                }
            }
        }
        assert!(
            write_success_count < max_retries,
            "retry count should not have been exhausted"
        );

        // Verify that the pipeline cannot be used after failure
        assert!(matches!(
            upload_request.write(offset, b"some data").await,
            Err(UploadError::UploadAlreadyTerminated)
        ));
        assert!(matches!(
            upload_request.complete().await,
            Err(UploadError::UploadAlreadyTerminated)
        ));
    }

    #[tokio::test]
    async fn test_append_partial_failure_during_write() {
        let bucket = "bucket";
        let key = "hello";
        let mut expected_content = Vec::new();

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());

        let mut put_single_failures = HashMap::new();
        put_single_failures.insert(2, ObjectClientError::ServiceError(PutObjectError::BadChecksum));
        let failure_client = Arc::new(countdown_failure_client(
            client.clone(),
            CountdownFailureConfig {
                put_single_failures,
                ..Default::default()
            },
        ));

        // Create the "before append" object for the test
        let existing_object = MockObject::from([0xbb; 20]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c]);
        client.add_object(key, existing_object.clone());
        expected_content.extend_from_slice(&existing_object.read(0, existing_object.len()));

        let buffer_size = 256;
        let uploader = new_uploader_for_test(failure_client, buffer_size, None, None);
        let mut offset = existing_object.len() as u64;
        let initial_etag = existing_object.etag();
        let mut upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), offset, Some(initial_etag));

        // Keep writing and it should fail eventually
        let mut write_success_count = 0;

        let max_retries = 10000;
        let append_data = [0xab; 256];
        // The first request will succeed so we update the expected content
        expected_content.extend_from_slice(&append_data);
        while write_success_count < max_retries {
            match upload_request.write(offset, &append_data).await {
                Ok(len) => {
                    offset += len as u64;
                    write_success_count += 1;
                }
                Err(e) => {
                    assert!(matches!(e, UploadError::PutRequestFailed(_)));
                    break;
                }
            }
        }
        assert!(
            write_success_count < max_retries,
            "retry count should not have been exhausted"
        );

        // Verify that the pipeline cannot be used after failure
        assert!(matches!(
            upload_request.write(offset, b"some data").await,
            Err(UploadError::UploadAlreadyTerminated)
        ));
        assert!(matches!(
            upload_request.complete().await,
            Err(UploadError::UploadAlreadyTerminated)
        ));

        // Verify that object is partially appended from the first request
        let get_request = client
            .get_object(bucket, key, &GetObjectParams::default())
            .await
            .expect("get_object failed");
        let actual = get_request.collect().await.expect("failed to collect body");
        assert_eq!(expected_content, *actual);
    }

    #[tokio::test]
    async fn test_append_failure_on_object_replaced() {
        let bucket = "bucket";
        let key = "hello";

        let client = Arc::new(MockClient::config().bucket(bucket.to_owned()).part_size(32).build());
        // Create the "before append" object for the test
        let existing_object = MockObject::from([0xbb; 20]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c]);
        client.add_object(key, existing_object.clone());

        let buffer_size = 256;
        let uploader = new_uploader_for_test(client.clone(), buffer_size, None, None);

        // Start appending
        let mut offset = existing_object.len() as u64;
        let initial_etag = existing_object.etag();
        let mut upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), offset, Some(initial_etag));

        // Replace the existing object
        let replacing_object = MockObject::from(vec![0xcc; 20]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c]);
        client.add_object(key, replacing_object.clone());

        // Keep writing and it should fail eventually
        let mut write_success_count = 0;
        let max_retries = 10000;
        let append_data = [0xab; 256];
        while write_success_count < max_retries {
            match upload_request.write(offset, &append_data).await {
                Ok(len) => {
                    offset += len as u64;
                    write_success_count += 1;
                }
                Err(e) => {
                    assert!(matches!(
                        e,
                        UploadError::PutRequestFailed(ObjectClientError::ServiceError(
                            PutObjectError::PreconditionFailed
                        ))
                    ));
                    break;
                }
            }
        }
        assert!(
            write_success_count < max_retries,
            "retry count should not have been exhausted"
        );

        // Verify that the pipeline cannot be used after failure
        assert!(matches!(
            upload_request.write(offset, b"some data").await,
            Err(UploadError::UploadAlreadyTerminated)
        ));
        assert!(matches!(
            upload_request.complete().await,
            Err(UploadError::UploadAlreadyTerminated)
        ));
    }

    #[tokio::test]
    async fn test_append_failure_on_out_of_order() {
        let bucket = "bucket";
        let key = "hello";

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());

        let buffer_size = 256;
        let uploader = new_uploader_for_test(client.clone(), buffer_size, None, None);
        let mut upload_request = uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), 0, None);

        // Write some data
        let append_data = [0xaa; 128];
        upload_request
            .write(0, &append_data)
            .await
            .expect("write should succeed");

        let next_offset = append_data.len() as u64;
        let wrong_offset = next_offset + 1;
        let error = upload_request
            .write(wrong_offset, &append_data)
            .await
            .expect_err("out-of-order write should fail");

        assert!(matches!(error, UploadError::OutOfOrderWrite { .. }));
    }

    #[test_case(Some("aws:kmr"), Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), Some("some_key_ali`s"))]
    #[test_case(None, Some("some_key_alias"))]
    #[test_case(Some("aws:kms"), None)]
    #[tokio::test]
    async fn test_append_with_corrupted_sse_test(sse_type_corrupted: Option<&str>, key_id_corrupted: Option<&str>) {
        let bucket = "bucket";
        let key = "hello";

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());
        // Create the "before append" object for the test
        let existing_object = MockObject::from([0xbb; 20]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c]);
        client.add_object(key, existing_object.clone());

        let buffer_size = 256;
        let server_side_encryption =
            ServerSideEncryption::new(Some("aws:kms".to_string()), Some("some_key_alias".to_string()));
        let mut uploader = new_uploader_for_test(client.clone(), buffer_size, Some(server_side_encryption), None);

        // Corrupt the server side encryption settings
        uploader
            .server_side_encryption
            .corrupt_data(sse_type_corrupted.map(String::from), key_id_corrupted.map(String::from));

        let initial_offset = existing_object.len() as u64;
        let initial_etag = existing_object.etag();
        let mut upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), initial_offset, Some(initial_etag));

        let append_data = [0xaa; 128];
        upload_request
            .write(initial_offset, &append_data)
            .await
            .expect("write should succeed");

        // Verify that the request fails at completion
        assert!(matches!(
            upload_request.complete().await,
            Err(UploadError::SseCorruptedError(_))
        ));
    }

    #[tokio::test]
    async fn test_append_with_good_sse_test() {
        let bucket = "bucket";
        let key = "hello";
        let mut expected_content = Vec::new();

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());
        // Create the "before append" object for the test
        let existing_object = MockObject::from([0xbb; 20]).with_computed_checksums(&[ChecksumAlgorithm::Crc32c]);
        client.add_object(key, existing_object.clone());
        expected_content.extend_from_slice(&existing_object.read(0, existing_object.len()));

        let buffer_size = 256;
        let server_side_encryption =
            ServerSideEncryption::new(Some("aws:kms".to_string()), Some("some_key_alias".to_string()));
        let uploader = new_uploader_for_test(client.clone(), buffer_size, Some(server_side_encryption), None);

        let initial_offset = existing_object.len() as u64;
        let initial_etag = existing_object.etag();
        let mut upload_request =
            uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), initial_offset, Some(initial_etag));

        let append_data = [0xaa; 128];
        expected_content.extend_from_slice(&append_data);
        upload_request
            .write(initial_offset, &append_data)
            .await
            .expect("write should succeed");
        upload_request
            .complete()
            .await
            .expect("upload with sse should complete successfully");

        // Verify content of the object
        let get_request = client
            .get_object(bucket, key, &GetObjectParams::default())
            .await
            .expect("get_object failed");
        let actual = get_request.collect().await.expect("failed to collect body");
        assert_eq!(expected_content, *actual);
    }

    #[test_case(1024, 128, 10)]
    #[test_case(1024, 4096, 20)]
    #[tokio::test]
    async fn test_append_on_low_memory(part_size: usize, write_size: usize, part_count: usize) {
        let bucket = "bucket";
        let key = "hello";

        let client = Arc::new(MockClient::config().bucket(bucket).part_size(32).build());

        // Use a memory limiter with 0 limit
        let mem_limiter = MemoryLimiter::new(client.clone(), 0);
        let uploader = Uploader::new(
            client.clone(),
            Runtime::new(ThreadPool::builder().pool_size(1).create().unwrap()),
            mem_limiter.into(),
            UploaderConfig::new(part_size),
        );

        let mut offset = 0;
        let mut upload_request = uploader.start_incremental_upload(bucket.to_owned(), key.to_owned(), offset, None);
        let mut expected_content = Vec::new();

        // Write enough data to fill multiple parts
        while expected_content.len() < part_count * part_size {
            let append_data = vec![0xaa; write_size];
            expected_content.extend_from_slice(&append_data);
            offset += upload_request
                .write(offset, &append_data)
                .await
                .expect("write should succeed") as u64;
        }

        // Wait for the upload to complete
        upload_request
            .complete()
            .await
            .expect("upload should complete successfully");

        // Verify content of the object
        let get_request = client
            .get_object(bucket, key, &GetObjectParams::default())
            .await
            .expect("get_object failed");
        let actual = get_request.collect().await.expect("failed to collect body");
        assert_eq!(expected_content, *actual);
    }
}
