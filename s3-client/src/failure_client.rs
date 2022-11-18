use crate::object_client::HeadObjectResult;
use crate::{ListObjectsResult, ObjectClient};
use async_trait::async_trait;
use std::collections::{HashMap, HashSet};
use std::ops::Range;
use std::sync::Mutex;

pub struct FailureClient<Client: ObjectClient, State> {
    pub client: Client,
    pub state: Mutex<State>,
    pub get_object_cb: Option<fn(&mut State, &str, &str, Option<Range<u64>>) -> Result<(), Client::GetObjectError>>,
    pub head_object_cb: Option<fn(&mut State, &str, &str) -> Result<(), Client::HeadObjectError>>,
    pub list_objects_cb:
        Option<fn(&mut State, &str, Option<&str>, &str, usize, &str) -> Result<(), Client::ListObjectsError>>,
}

#[async_trait]
impl<Client, State> ObjectClient for FailureClient<Client, State>
where
    Client: ObjectClient + Send + Sync + 'static,
    State: Send + Sync + 'static,
{
    type GetObjectResult = Client::GetObjectResult;
    type GetObjectError = Client::GetObjectError;
    type HeadObjectError = Client::HeadObjectError;
    type ListObjectsError = Client::ListObjectsError;

    async fn get_object(
        &self,
        bucket: &str,
        key: &str,
        range: Option<Range<u64>>,
    ) -> Result<Self::GetObjectResult, Self::GetObjectError> {
        if let Some(f) = self.get_object_cb {
            let mut state = self.state.lock().unwrap();
            f(&mut state, bucket, key, range.clone())?;
        }
        self.client.get_object(bucket, key, range).await
    }

    async fn list_objects(
        &self,
        bucket: &str,
        continuation_token: Option<&str>,
        delimiter: &str,
        max_keys: usize,
        prefix: &str,
    ) -> Result<ListObjectsResult, Self::ListObjectsError> {
        if let Some(f) = self.list_objects_cb {
            let mut state = self.state.lock().unwrap();
            f(&mut state, bucket, continuation_token, delimiter, max_keys, prefix)?;
        }
        self.client
            .list_objects(bucket, continuation_token, delimiter, max_keys, prefix)
            .await
    }

    async fn head_object(&self, bucket: &str, key: &str) -> Result<HeadObjectResult, Self::HeadObjectError> {
        if let Some(f) = self.head_object_cb {
            let mut state = self.state.lock().unwrap();
            f(&mut state, bucket, key)?;
        }
        self.client.head_object(bucket, key).await
    }
}

/// A failure client that fails operations based on counts.
pub type CountdownFailureClient<Client> = FailureClient<Client, CountdownFailureClientState<Client>>;

#[derive(Debug, Default)]
pub struct CountdownFailureClientState<Client: ObjectClient> {
    get_count: usize,
    get_failures: HashMap<usize, Client::GetObjectError>,
    head_count: usize,
    head_failures: HashMap<usize, Client::HeadObjectError>,
    list_count: usize,
    list_failures: HashMap<usize, Client::ListObjectsError>,
}

pub fn countdown_failure_client<Client: ObjectClient>(
    client: Client,
    get_failures: HashMap<usize, Client::GetObjectError>,
    head_failures: HashMap<usize, Client::HeadObjectError>,
    list_failures: HashMap<usize, Client::ListObjectsError>,
) -> CountdownFailureClient<Client> {
    let state = Mutex::new(CountdownFailureClientState {
        get_count: 0usize,
        get_failures,
        head_count: 0usize,
        head_failures,
        list_count: 0usize,
        list_failures,
    });
    FailureClient {
        client,
        state,
        get_object_cb: Some(|state, _bucket, _key, _range| {
            state.get_count += 1;
            if let Some(error) = state.get_failures.remove(&state.get_count) {
                Err(error)
            } else {
                Ok(())
            }
        }),
        head_object_cb: Some(|state, _bucket, _key| {
            state.head_count += 1;
            if let Some(error) = state.head_failures.remove(&state.head_count) {
                Err(error)
            } else {
                Ok(())
            }
        }),
        list_objects_cb: Some(|state, _bucket, _ct, _delim, _max_keys, _prefix| {
            state.list_count += 1;
            if let Some(error) = state.list_failures.remove(&state.list_count) {
                Err(error)
            } else {
                Ok(())
            }
        }),
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::mock_client::{GetObjectError, MockClient, MockClientConfig, MockObject};
    use std::sync::Mutex;

    #[tokio::test]
    async fn fail_client_sanity_check() {
        let bucket = "test_bucket";
        let key = "foo";

        let client = MockClient::new(MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 128,
        });

        let body = vec![0u8; 50];
        client.add_object(key.clone(), MockObject::from_bytes(&body));

        let mut get_failures = HashMap::new();
        get_failures.insert(2, GetObjectError::InvalidRange(3));
        get_failures.insert(4, GetObjectError::NoSuchObject);
        get_failures.insert(5, GetObjectError::NoSuchBucket);

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
