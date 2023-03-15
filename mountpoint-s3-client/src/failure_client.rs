use std::collections::HashMap;
use std::fmt::Debug;
use std::ops::Range;
use std::pin::Pin;
use std::sync::Mutex;
use std::task::{Context, Poll};

use async_trait::async_trait;
use futures::Stream;
use pin_project::pin_project;

use crate::object_client::{
    DeleteObjectError, DeleteObjectResult, GetBodyPart, GetObjectAttributesError, GetObjectAttributesResult,
    GetObjectError, HeadObjectError, HeadObjectResult, ListObjectsError, ObjectClientError, ObjectClientResult,
    PutObjectError, PutObjectParams, PutObjectResult,
};
use crate::{ListObjectsResult, ObjectAttribute, ObjectClient};

// Wrapper for injecting failures into a get stream
pub struct FailureGetWrapper<Client: ObjectClient, GetWrapperState> {
    state: GetWrapperState,
    result_fn: fn(&mut GetWrapperState) -> Result<(), Client::ClientError>,
}

#[allow(clippy::type_complexity)]
pub struct FailureClient<Client: ObjectClient, State, GetWrapperState> {
    pub client: Client,
    pub state: Mutex<State>,
    pub get_object_cb: fn(
        &mut State,
        &str,
        &str,
        Option<Range<u64>>,
    ) -> Result<
        FailureGetWrapper<Client, GetWrapperState>,
        ObjectClientError<GetObjectError, Client::ClientError>,
    >,
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
}

#[async_trait]
impl<Client, State, GetWrapperState> ObjectClient for FailureClient<Client, State, GetWrapperState>
where
    Client: ObjectClient + Send + Sync + 'static,
    State: Send + Sync + 'static,
    GetWrapperState: Send + Sync + 'static,
{
    type GetObjectResult = FailureGetResult<Client, GetWrapperState>;
    type ClientError = Client::ClientError;

    async fn delete_object(
        &self,
        bucket: &str,
        key: &str,
    ) -> ObjectClientResult<DeleteObjectResult, DeleteObjectError, Self::ClientError> {
        // TODO failure hook for delete_object
        self.client.delete_object(bucket, key).await
    }

    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
    ) -> ObjectClientResult<Self::GetObjectResult, GetObjectError, Self::ClientError> {
        let wrapper = (self.get_object_cb)(&mut *self.state.lock().unwrap(), bucket, key, range.clone())?;
        let get_result = self.client.get_object(bucket, key, range).await?;
        Ok(FailureGetResult {
            state: wrapper.state,
            result_fn: wrapper.result_fn,
            get_result,
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
    ) -> ObjectClientResult<HeadObjectResult, HeadObjectError, Self::ClientError> {
        (self.head_object_cb)(&mut *self.state.lock().unwrap(), bucket, key)?;
        self.client.head_object(bucket, key).await
    }

    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        params: &PutObjectParams,
        contents: impl Stream<Item = impl AsRef<[u8]> + Send> + Send,
    ) -> ObjectClientResult<PutObjectResult, PutObjectError, Self::ClientError> {
        // TODO Add put fault injection hooks
        self.client.put_object(bucket, key, params, contents).await
    }

    async fn get_object_attributes(
        &self,
        bucket: &str,
        key: &str,
        object_attributes: Vec<ObjectAttribute>,
    ) -> ObjectClientResult<GetObjectAttributesResult, GetObjectAttributesError, Self::ClientError> {
        // TODO failure hook for get_object_attributes
        self.client.get_object_attributes(bucket, key, object_attributes).await
    }
}

#[pin_project]
pub struct FailureGetResult<Client: ObjectClient, GetWrapperState> {
    state: GetWrapperState,
    result_fn: fn(&mut GetWrapperState) -> Result<(), Client::ClientError>,
    #[pin]
    get_result: Client::GetObjectResult,
}

impl<Client: ObjectClient, FailState> Stream for FailureGetResult<Client, FailState> {
    type Item = ObjectClientResult<GetBodyPart, GetObjectError, Client::ClientError>;

    fn poll_next(self: Pin<&mut Self>, cx: &mut Context) -> Poll<Option<Self::Item>> {
        let this = self.project();
        (this.result_fn)(this.state)?;
        this.get_result.poll_next(cx)
    }
}

/// A failure client that fails operations based on counts.
pub type CountdownFailureClient<Client> =
    FailureClient<Client, CountdownFailureClientState<Client>, CountdownFailureGetState<Client>>;

pub type GetFailureMap<Client> = HashMap<
    usize,
    Result<
        (usize, <Client as ObjectClient>::ClientError),
        ObjectClientError<GetObjectError, <Client as ObjectClient>::ClientError>,
    >,
>;

#[allow(clippy::type_complexity)]
#[derive(Default)]
pub struct CountdownFailureClientState<Client: ObjectClient> {
    get_count: usize,
    get_results: GetFailureMap<Client>,
    head_count: usize,
    head_failures: HashMap<usize, ObjectClientError<HeadObjectError, Client::ClientError>>,
    list_count: usize,
    list_failures: HashMap<usize, ObjectClientError<ListObjectsError, Client::ClientError>>,
}

#[derive(Debug, Default)]
pub struct CountdownFailureGetState<Client: ObjectClient> {
    count: usize,
    fail_count: usize,
    error: Option<Client::ClientError>,
}

#[allow(clippy::type_complexity)]
pub fn countdown_failure_client<Client: ObjectClient>(
    client: Client,
    // For GET, map entries are interpreted as follows (operations are numbered starting at 1):
    //   (k -> Err(E) means return error E on the k'th GET
    //   (k -> Ok((n, E))) means return a stream object on the k'th get that
    //       returns error E on the n'th read request from that stream, otherwise reads from the underlying stream
    // (Note: we could also define a failure client that tracks offsets, and returns an error when the offset
    // reaches a specified threshold.)
    get_results: GetFailureMap<Client>,
    // For HEAD and LIST, map entries are interpreted as follows:
    //   (k -> E) means inject error E on the k'th call to that operation
    head_failures: HashMap<usize, ObjectClientError<HeadObjectError, Client::ClientError>>,
    list_failures: HashMap<usize, ObjectClientError<ListObjectsError, Client::ClientError>>,
    // TODO add put failures
) -> CountdownFailureClient<Client> {
    let state = Mutex::new(CountdownFailureClientState {
        get_count: 0usize,
        get_results,
        head_count: 0usize,
        head_failures,
        list_count: 0usize,
        list_failures,
    });
    FailureClient {
        client,
        state,
        get_object_cb: |state, _bucket, _key, _range| {
            state.get_count += 1;
            let (fail_count, error) = if let Some(result) = state.get_results.remove(&state.get_count) {
                let (fail_count, error) = result?;
                (fail_count, Some(error))
            } else {
                (usize::MAX, None)
            };
            Ok(FailureGetWrapper {
                state: CountdownFailureGetState {
                    count: 0,
                    fail_count,
                    error,
                },
                result_fn: |state| {
                    state.count += 1;
                    if state.count >= state.fail_count {
                        Err(state.error.take().unwrap())
                    } else {
                        Ok(())
                    }
                },
            })
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
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::mock_client::{MockClient, MockClientConfig, MockClientError, MockObject};
    use std::collections::HashSet;

    #[tokio::test]
    async fn fail_client_sanity_check() {
        let bucket = "test_bucket";
        let key = "foo";

        let client = MockClient::new(MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 128,
        });

        let body = vec![0u8; 50];
        client.add_object(key, MockObject::from_bytes(&body));

        let mut get_failures = HashMap::new();
        get_failures.insert(
            2,
            Err(ObjectClientError::ClientError(MockClientError(
                "invalid range, length=3".into(),
            ))),
        );
        get_failures.insert(
            4,
            Err(ObjectClientError::ClientError(MockClientError("no such object".into()))),
        );
        get_failures.insert(
            5,
            Err(ObjectClientError::ClientError(MockClientError("no such bucket".into()))),
        );

        let fail_client = countdown_failure_client(client, get_failures, HashMap::new(), HashMap::new());

        let fail_set = HashSet::from([2, 4, 5]);
        for i in 1..=6 {
            let r = fail_client.get_object(bucket, key, None).await;
            if fail_set.contains(&i) {
                assert!(r.is_err());
            } else {
                assert!(r.is_ok());
            }
        }
    }
}
