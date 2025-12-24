//! An [`ObjectClient`] that can inject failures into requests for testing purposes.

#![cfg(feature = "mock")]

use std::collections::HashMap;
use std::fmt::Debug;
use std::pin::Pin;
use std::sync::Mutex;
use std::task::{Context, Poll};

use async_trait::async_trait;
use futures::Stream;
use mountpoint_s3_crt::s3::client::BufferPoolUsageStats;
use pin_project::pin_project;

use crate::object_client::{
    Checksum, CopyObjectError, CopyObjectParams, CopyObjectResult, DeleteObjectError, DeleteObjectResult, GetBodyPart,
    GetObjectAttributesError, GetObjectAttributesResult, GetObjectError, GetObjectParams, GetObjectResponse,
    HeadObjectError, HeadObjectParams, HeadObjectResult, ListObjectsError, ListObjectsResult, ObjectAttribute,
    ObjectChecksumError, ObjectClient, ObjectClientError, ObjectClientResult, ObjectMetadata, PutObjectError,
    PutObjectParams, PutObjectRequest, PutObjectResult, PutObjectSingleParams, RenameObjectError, RenameObjectParams,
    RenameObjectResult, UploadReview,
};

// Wrapper for injecting failures into a get stream or a put request
pub struct FailureRequestWrapper<ClientError, RequestWrapperState> {
    state: RequestWrapperState,
    result_fn: fn(&mut RequestWrapperState) -> Result<(), ClientError>,
}

#[allow(clippy::type_complexity)]
pub struct FailureClient<Client: ObjectClient, State, RequestWrapperState> {
    pub client: Client,
    pub state: Mutex<State>,
    pub get_object_cb:
        fn(&mut State, &str, &str, &GetObjectParams) -> Option<GetObjectFailureMode<Client::ClientError>>,
    pub head_object_cb:
        fn(&mut State, &str, &str) -> Result<(), ObjectClientError<HeadObjectError, Client::ClientError>>,
    pub list_objects_cb: fn(
        &mut State,
        &str,
        Option<&str>,
        &str,
        usize,
        &str,
    ) -> Result<(), ObjectClientError<ListObjectsError, Client::ClientError>>,
    pub put_object_single_cb: fn(
        &mut State,
        &str,
        &str,
        params: &PutObjectSingleParams,
        &[u8],
    ) -> Result<(), ObjectClientError<PutObjectError, Client::ClientError>>,
    pub put_object_cb: fn(
        &mut State,
        &str,
        &str,
        &PutObjectParams,
    ) -> Result<
        FailureRequestWrapper<Client::ClientError, RequestWrapperState>,
        ObjectClientError<PutObjectError, Client::ClientError>,
    >,
}

#[cfg_attr(not(docsrs), async_trait)]
impl<Client, State, GetWrapperState> ObjectClient for FailureClient<Client, State, GetWrapperState>
where
    Client: ObjectClient + Send + Sync + 'static,
    State: Send + Sync + 'static,
    GetWrapperState: Send + Sync + 'static,
{
    type GetObjectResponse = FailureGetResponse<Client>;
    type PutObjectRequest = FailurePutObjectRequest<Client, GetWrapperState>;
    type ClientError = Client::ClientError;

    fn read_part_size(&self) -> usize {
        self.client.read_part_size()
    }

    fn write_part_size(&self) -> usize {
        self.client.write_part_size()
    }

    fn initial_read_window_size(&self) -> Option<usize> {
        self.client.initial_read_window_size()
    }

    fn mem_usage_stats(&self) -> Option<BufferPoolUsageStats> {
        self.client.mem_usage_stats()
    }

    async fn delete_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<DeleteObjectResult, DeleteObjectError, Self::ClientError> {
        // TODO failure hook for delete_object
        self.client.delete_object(bucket, key).await
    }

    async fn copy_object(
        &self,
        source_bucket: &str,
        source_key: &str,
        destination_bucket: &str,
        destination_key: &str,
        params: &CopyObjectParams,
    ) -> ObjectClientResult<CopyObjectResult, CopyObjectError, Self::ClientError> {
        self.client
            .copy_object(source_bucket, source_key, destination_bucket, destination_key, params)
            .await
    }

    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        params: &GetObjectParams,
    ) -> ObjectClientResult<Self::GetObjectResponse, GetObjectError, Self::ClientError> {
        let failure_mode = (self.get_object_cb)(&mut *self.state.lock().unwrap(), bucket, key, params);
        if let Some(GetObjectFailureMode::OperationError(err)) = failure_mode {
            return Err(err);
        }

        let request = self.client.get_object(bucket, key, params).await?;
        Ok(FailureGetResponse {
            request,
            poll_count: 0,
            failure_mode,
        })
    }

    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> ObjectClientResult<ListObjectsResult, ListObjectsError, Self::ClientError> {
        (self.list_objects_cb)(
            &mut *self.state.lock().unwrap(),
            bucket,
            continuation_token,
            delimiter,
            max_keys,
            prefix,
        )?;

        self.client
            .list_objects(bucket, continuation_token, delimiter, max_keys, prefix)
            .await
    }

    async fn head_object(
        &self,
        bucket: &str,
        key: &str,
        params: &HeadObjectParams,
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, Self::ClientError> {
        (self.head_object_cb)(&mut *self.state.lock().unwrap(), bucket, key)?;
        self.client.head_object(bucket, key, params).await
    }

    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
    ) -> ObjectClientResult<Self::PutObjectRequest, PutObjectError, Self::ClientError> {
        let wrapper = (self.put_object_cb)(&mut *self.state.lock().unwrap(), bucket, key, &params.clone())?;
        let request = self.client.put_object(bucket, key, params).await?;
        Ok(FailurePutObjectRequest {
            request,
            state: wrapper.state,
            result_fn: wrapper.result_fn,
        })
    }

    async fn put_object_single<'a>(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectSingleParams,
        contents: impl AsRef<[u8]> + Send + 'a,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        (self.put_object_single_cb)(&mut *self.state.lock().unwrap(), bucket, key, params, contents.as_ref())?;
        self.client.put_object_single(bucket, key, params, contents).await
    }

    async fn get_object_attributes(
        &self,
        bucket: &str,
        key: &str,
        max_parts: Option<usize>,
        part_number_marker: Option<usize>,
        object_attributes: &[ObjectAttribute],
    ) -> ObjectClientResult<GetObjectAttributesResult, GetObjectAttributesError, Self::ClientError> {
        // TODO failure hook for get_object_attributes
        self.client
            .get_object_attributes(bucket, key, max_parts, part_number_marker, object_attributes)
            .await
    }

    async fn rename_object(
        &self,
        bucket: &str,
        src_key: &str,
        dst_key: &str,
        params: &RenameObjectParams,
    ) -> ObjectClientResult<RenameObjectResult, RenameObjectError, Self::ClientError> {
        // TODO failure hook for rename_object
        self.client.rename_object(bucket, src_key, dst_key, params).await
    }
}

#[pin_project]
pub struct FailureGetResponse<Client: ObjectClient> {
    #[pin]
    request: Client::GetObjectResponse,
    poll_count: usize,
    failure_mode: Option<GetObjectFailureMode<Client::ClientError>>,
}

#[cfg_attr(not(docsrs), async_trait)]
impl<Client: ObjectClient + Send + Sync> GetObjectResponse for FailureGetResponse<Client> {
    type BackpressureHandle = <<Client as ObjectClient>::GetObjectResponse as GetObjectResponse>::BackpressureHandle;
    type ClientError = Client::ClientError;

    fn backpressure_handle(&mut self) -> Option<&mut Self::BackpressureHandle> {
        self.request.backpressure_handle()
    }

    fn get_object_metadata(&self) -> ObjectMetadata {
        self.request.get_object_metadata()
    }

    fn get_object_checksum(&self) -> Result<Checksum, ObjectChecksumError> {
        self.request.get_object_checksum()
    }
}

impl<Client: ObjectClient> Stream for FailureGetResponse<Client> {
    type Item = ObjectClientResult<GetBodyPart, GetObjectError, Client::ClientError>;

    fn poll_next(self: Pin<&mut Self>, cx: &mut Context) -> Poll<Option<Self::Item>> {
        let this = self.project();

        *this.poll_count += 1;

        match this.failure_mode {
            Some(GetObjectFailureMode::StreamShortCircuit(pos)) => {
                if this.poll_count >= pos {
                    return Poll::Ready(None);
                }
            }
            Some(GetObjectFailureMode::StreamPositionError(pos, _)) => {
                if this.poll_count >= pos {
                    let GetObjectFailureMode::StreamPositionError(_, err) = this.failure_mode.take().unwrap() else {
                        unreachable!()
                    };
                    return Poll::Ready(Some(Err(err)));
                }
            }
            Some(GetObjectFailureMode::OperationError(_)) => unreachable!(),
            None => {}
        }

        this.request.poll_next(cx)
    }
}

pub struct FailurePutObjectRequest<Client: ObjectClient, PutWrapperState> {
    request: Client::PutObjectRequest,
    state: PutWrapperState,
    result_fn: fn(&mut PutWrapperState) -> Result<(), Client::ClientError>,
}

#[cfg_attr(not(docsrs), async_trait)]
impl<Client: ObjectClient, PutWrapperState> PutObjectRequest for FailurePutObjectRequest<Client, PutWrapperState>
where
    Client::PutObjectRequest: Send,
    PutWrapperState: Send,
{
    type ClientError = Client::ClientError;

    async fn write(&mut self, slice: &[u8]) -> ObjectClientResult<(), PutObjectError, Self::ClientError> {
        (self.result_fn)(&mut self.state)?;
        self.request.write(slice).await
    }

    async fn complete(mut self) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        (self.result_fn)(&mut self.state)?;
        self.request.complete().await
    }

    async fn review_and_complete(
        mut self,
        review_callback: impl FnOnce(UploadReview) -> bool + Send + 'static,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        (self.result_fn)(&mut self.state)?;
        self.request.review_and_complete(review_callback).await
    }
}

/// A failure client that fails operations based on counts.
pub type CountdownFailureClient<Client> = FailureClient<
    Client,
    CountdownFailureClientState<<Client as ObjectClient>::ClientError>,
    CountdownFailureRequestState<<Client as ObjectClient>::ClientError>,
>;

/// Failure mode of `GetObject`.
pub enum GetObjectFailureMode<ClientError> {
    /// Returns an error to `get_object` operation.
    OperationError(ObjectClientError<GetObjectError, ClientError>),
    /// Returns an error at the nth poll (starting from 1) on the returned stream from `get_object` operation,
    /// up to that, reads from the underlying stream.
    StreamPositionError(usize, ObjectClientError<GetObjectError, ClientError>),
    /// Short cicuits at the nth poll (starting from 1) on the returned stream from `get_object` operation,
    /// up to that, reads from the underlying stream.
    StreamShortCircuit(usize),
}

pub type RequestFailureMap<ClientError, RequestError> =
    HashMap<usize, Result<(usize, ClientError), ObjectClientError<RequestError, ClientError>>>;

/// Configuration for a [CountdownFailureClient].
#[derive(Default)]
pub struct CountdownFailureConfig<ClientError> {
    /// For GET, map entries are interpreted as follows (operations are numbered starting at 1):
    ///   (k -> GetObjectFailureMode(E)) means fail according to the [GetObjectFailureMode] on the k'th GET
    /// (Note: we could also define a failure client that tracks offsets, and returns an error when the offset
    /// reaches a specified threshold.)
    pub get_failures: HashMap<usize, GetObjectFailureMode<ClientError>>,
    /// For HEAD, map entries are interpreted as follows:
    ///   (k -> E) means inject error E on the k'th call to that operation
    pub head_failures: HashMap<usize, ObjectClientError<HeadObjectError, ClientError>>,
    /// For LIST, map entries are interpreted as follows:
    ///   (k -> E) means inject error E on the k'th call to that operation
    pub list_failures: HashMap<usize, ObjectClientError<ListObjectsError, ClientError>>,
    /// For single PUT, map entries are interpreted as follows:
    ///   (k -> E) means inject error E on the k'th call to that operation
    pub put_single_failures: HashMap<usize, ObjectClientError<PutObjectError, ClientError>>,
    /// For PUT, map entries are interpreted as follows (operations are numbered starting at 1):
    ///   (k -> Err(E) means return error E on the k'th PUT
    ///   (k -> Ok((n, E))) means return a put request object on the k'th put that
    ///       returns error E on the n'th write, otherwise writes to the underlying request.
    pub put_failures: RequestFailureMap<ClientError, PutObjectError>,
}

#[allow(clippy::type_complexity)]
#[derive(Default)]
pub struct CountdownFailureClientState<ClientError> {
    get_count: usize,
    get_failures: HashMap<usize, GetObjectFailureMode<ClientError>>,
    head_count: usize,
    head_failures: HashMap<usize, ObjectClientError<HeadObjectError, ClientError>>,
    list_count: usize,
    list_failures: HashMap<usize, ObjectClientError<ListObjectsError, ClientError>>,
    put_single_count: usize,
    put_single_failures: HashMap<usize, ObjectClientError<PutObjectError, ClientError>>,
    put_count: usize,
    put_results: RequestFailureMap<ClientError, PutObjectError>,
}

#[derive(Debug, Default)]
pub struct CountdownFailureRequestState<ClientError> {
    count: usize,
    fail_count: usize,
    error: Option<ClientError>,
}

#[allow(clippy::type_complexity)]
pub fn countdown_failure_client<Client: ObjectClient>(
    client: Client,
    config: CountdownFailureConfig<<Client as ObjectClient>::ClientError>,
) -> CountdownFailureClient<Client> {
    let state = Mutex::new(CountdownFailureClientState {
        get_count: 0usize,
        get_failures: config.get_failures,
        head_count: 0usize,
        head_failures: config.head_failures,
        list_count: 0usize,
        list_failures: config.list_failures,
        put_single_count: 0usize,
        put_single_failures: config.put_single_failures,
        put_count: 0usize,
        put_results: config.put_failures,
    });
    FailureClient {
        client,
        state,
        get_object_cb: |state, _bucket, _key, _get_object_params| {
            state.get_count += 1;
            state.get_failures.remove(&state.get_count)
        },
        head_object_cb: |state, _bucket, _key| {
            state.head_count += 1;
            if let Some(error) = state.head_failures.remove(&state.head_count) {
                Err(error)
            } else {
                Ok(())
            }
        },
        list_objects_cb: |state, _bucket, _ct, _delim, _max_keys, _prefix| {
            state.list_count += 1;
            if let Some(error) = state.list_failures.remove(&state.list_count) {
                Err(error)
            } else {
                Ok(())
            }
        },
        put_object_single_cb: |state, _bucket, _key, _params, _data| {
            state.put_single_count += 1;
            if let Some(error) = state.put_single_failures.remove(&state.put_single_count) {
                Err(error)
            } else {
                Ok(())
            }
        },
        put_object_cb: |state, _bucket, _key, _params| {
            state.put_count += 1;
            let (fail_count, error) = if let Some(result) = state.put_results.remove(&state.put_count) {
                let (fail_count, error) = result?;
                (fail_count, Some(error))
            } else {
                (usize::MAX, None)
            };
            Ok(FailureRequestWrapper {
                state: CountdownFailureRequestState {
                    count: 0,
                    fail_count,
                    error,
                },
                result_fn: |state| {
                    state.count += 1;
                    if state.count >= state.fail_count
                        && let Some(error) = state.error.take()
                    {
                        Err(error)
                    } else {
                        Ok(())
                    }
                },
            })
        },
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::mock_client::{MockClient, MockClientError, MockObject};
    use crate::types::ETag;
    use std::collections::HashSet;

    #[tokio::test]
    async fn fail_client_sanity_check() {
        let bucket = "test_bucket";
        let key = "foo";

        let client = MockClient::config().bucket(bucket).part_size(128).build();

        let body = vec![0u8; 50];
        client.add_object(key, MockObject::from_bytes(&body, ETag::for_tests()));

        let mut get_failures = HashMap::new();
        get_failures.insert(
            2,
            GetObjectFailureMode::OperationError(ObjectClientError::ClientError(MockClientError(
                "invalid range, length=3".into(),
            ))),
        );
        get_failures.insert(
            4,
            GetObjectFailureMode::OperationError(ObjectClientError::ClientError(MockClientError(
                "no such object".into(),
            ))),
        );
        get_failures.insert(
            5,
            GetObjectFailureMode::OperationError(ObjectClientError::ClientError(MockClientError(
                "no such bucket".into(),
            ))),
        );

        let fail_client = countdown_failure_client(
            client,
            CountdownFailureConfig {
                get_failures,
                ..Default::default()
            },
        );

        let fail_set = HashSet::from([2, 4, 5]);
        for i in 1..=6 {
            let r = fail_client.get_object(bucket, key, &GetObjectParams::new()).await;
            if fail_set.contains(&i) {
                assert!(r.is_err());
            } else {
                assert!(r.is_ok());
            }
        }
    }

    #[tokio::test]
    async fn fail_client_sanity_check_put_single() {
        let bucket = "test_bucket";
        let key = "foo";

        let client = MockClient::config().bucket(bucket).build();

        let mut put_single_failures = HashMap::new();
        put_single_failures.insert(2, ObjectClientError::ClientError(MockClientError("error".into())));

        let fail_client = countdown_failure_client(
            client,
            CountdownFailureConfig {
                put_single_failures,
                ..Default::default()
            },
        );

        let fail_set = HashSet::from([2]);
        for i in 1..=3 {
            let body = vec![0u8; 50];
            let r = fail_client
                .put_object_single(bucket, key, &PutObjectSingleParams::new(), body)
                .await;
            if fail_set.contains(&i) {
                assert!(r.is_err());
            } else {
                assert!(r.is_ok());
            }
        }
    }
}
