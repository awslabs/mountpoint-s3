//! The credentials cache behind [SharedCredentials].

// The cache is queried from CRT threads, outside any Shuttle test, so it uses `std::sync`.
use std::fmt::Debug;
use std::sync::{Arc, Mutex};
use std::time::{Duration, SystemTime};

use aws_credential_types::Credentials as SdkCredentials;
use aws_credential_types::provider::error::CredentialsError;
use aws_credential_types::provider::{self, ProvideCredentials, SharedCredentialsProvider};
use aws_sdk_s3::error::DisplayErrorContext;
use futures::channel::oneshot;
use mountpoint_s3_client::config::{
    Allocator, Credentials, CredentialsCallback, CredentialsOptions, CredentialsProvider, CredentialsSource,
    S3ClientAuthConfig,
};
use thiserror::Error;
use tokio::runtime::Handle;
use tracing::{debug, error};

use super::{SdkCredentialsConfig, SdkCredentialsError, SdkCredentialsSource};

/// How long before their expiration time the cache refreshes credentials, as the CRT's caching
/// credentials provider does.
const REFRESH_BEFORE_EXPIRATION: Duration = Duration::from_secs(5 * 60);

/// How long the cache keeps credentials that don't expire, as the CRT's default chain does.
const REFRESH_INTERVAL: Duration = Duration::from_secs(15 * 60);

/// Credentials shared by everything that signs requests for a mount, in one cache.
///
/// Caches the credentials of a source (normally an [SdkCredentialsSource]) with the timing of the
/// CRT's caching credentials provider: it refreshes them 5 minutes before they expire, or after
/// 15 minutes if they don't. A query that finds no credentials, or credentials due for a refresh,
/// waits for a fetch from the source, and concurrent queries wait for the same fetch, so the
/// source is queried once per refresh. A failed fetch empties the cache, so the next query fetches
/// again. Clones share the cache.
///
/// Fetches run as tasks on a Tokio runtime, and fail if it shuts down. Queries that find
/// credentials in the cache are answered on the caller's thread, without the runtime.
///
/// The CRT client queries the cache through [SharedCredentials::auth_config], for every request it
/// signs, and only sees whether a query failed: the cache logs why each fetch failed, as an error.
/// [SharedCredentials::load] returns the reason, and so does the [ProvideCredentials]
/// implementation, for SDK clients. An SDK client must not put an identity cache of its own in
/// front of it, or that cache could keep credentials after this one has replaced them (see
/// [SdkClientAuth::SharedCredentials](crate::s3::sdk_client::SdkClientAuth::SharedCredentials)).
#[derive(Clone)]
pub struct SharedCredentials {
    cache: Arc<Cache>,
    /// The CRT delegate provider over the cache.
    provider: CredentialsProvider,
}

impl SharedCredentials {
    /// Cache the credentials of `source`, fetched on the runtime of `tokio_handle`: a
    /// multi-thread runtime with the I/O and time drivers enabled (for example with
    /// `Builder::enable_all`), which its owner keeps running for as long as the credentials may
    /// be queried.
    pub fn new(source: impl ProvideCredentials + 'static, tokio_handle: Handle) -> Result<Self, SdkCredentialsError> {
        Self::with_refresh_interval(source, tokio_handle, REFRESH_INTERVAL)
    }

    fn with_refresh_interval(
        source: impl ProvideCredentials + 'static,
        tokio_handle: Handle,
        refresh_interval: Duration,
    ) -> Result<Self, SdkCredentialsError> {
        let cache = Arc::new(Cache {
            source: SharedCredentialsProvider::new(source),
            tokio_handle,
            refresh_interval,
            state: Mutex::default(),
        });
        let provider = CredentialsProvider::new_delegate(&Allocator::default(), CrtQueries(cache.clone()))
            .map_err(SdkCredentialsError::Provider)?;
        Ok(Self { cache, provider })
    }

    /// Cache the credentials of an [SdkCredentialsSource] built from `config`, fetched on the
    /// runtime of `tokio_handle`, as for [SharedCredentials::new].
    pub async fn from_sdk(config: SdkCredentialsConfig, tokio_handle: Handle) -> Result<Self, SdkCredentialsError> {
        Self::new(SdkCredentialsSource::new(config).await?, tokio_handle)
    }

    /// The credentials in the cache, or, if there are none or they are due for a refresh, the
    /// credentials of a fetch from the source.
    ///
    /// # Errors
    ///
    /// Fails with the source's error if the fetch fails.
    pub async fn load(&self) -> Result<SdkCredentials, LoadCredentialsError> {
        let (sender, receiver) = oneshot::channel();
        self.cache.query(Waiter::Load(sender));
        // The cache completes every waiter, so the sender is only dropped after sending.
        receiver
            .await
            .unwrap_or_else(|_| Err(LoadCredentialsError(Arc::new(fetch_dropped()))))
    }

    /// The CRT credentials provider that reads from the cache.
    pub fn provider(&self) -> &CredentialsProvider {
        &self.provider
    }

    /// The authentication configuration for a CRT client that signs with these credentials.
    pub fn auth_config(&self) -> S3ClientAuthConfig {
        S3ClientAuthConfig::Provider(self.provider.clone())
    }
}

impl ProvideCredentials for SharedCredentials {
    fn provide_credentials<'a>(&'a self) -> provider::future::ProvideCredentials<'a>
    where
        Self: 'a,
    {
        provider::future::ProvideCredentials::new(async move {
            self.load().await.map_err(|e| CredentialsError::provider_error(e.0))
        })
    }
}

impl Debug for SharedCredentials {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("SharedCredentials")
            .field("source", &self.cache.source)
            .finish_non_exhaustive()
    }
}

/// Why [SharedCredentials] couldn't load credentials: the error of the fetch from its source.
#[derive(Debug, Clone, Error)]
#[error("failed to load AWS credentials")]
pub struct LoadCredentialsError(#[source] Arc<CredentialsError>);

/// The error of a fetch whose task was dropped before it completed: its runtime shut down or the
/// source panicked.
fn fetch_dropped() -> CredentialsError {
    CredentialsError::provider_error("the credentials fetch did not complete")
}

struct Cache {
    source: SharedCredentialsProvider,
    /// The runtime the fetches run on.
    tokio_handle: Handle,
    /// How long the cache keeps credentials that don't expire.
    refresh_interval: Duration,
    state: Mutex<State>,
}

#[derive(Default)]
struct State {
    /// The cached credentials, and when they are due for a refresh.
    cached: Option<(CachedCredentials, SystemTime)>,
    /// The queries waiting for the fetch in progress, if there is one.
    fetching: Option<Vec<Waiter>>,
}

/// Credentials in the forms the SDK and the CRT use, converted once per fetch.
#[derive(Clone)]
struct CachedCredentials {
    sdk: SdkCredentials,
    crt: Credentials,
}

impl CachedCredentials {
    fn new(sdk: SdkCredentials) -> Result<Self, CredentialsError> {
        let options = CredentialsOptions {
            access_key_id: sdk.access_key_id(),
            secret_access_key: sdk.secret_access_key(),
            session_token: sdk.session_token(),
            expiration: sdk.expiry(),
        };
        let crt = Credentials::new(&Allocator::default(), options)
            .map_err(|e| CredentialsError::provider_error(format!("the credentials are not valid: {e}")))?;
        Ok(Self { sdk, crt })
    }
}

/// A query waiting for the cache.
enum Waiter {
    /// A query from the CRT client, through the delegate provider.
    Crt(CredentialsCallback),
    /// A call to [SharedCredentials::load].
    Load(oneshot::Sender<Result<SdkCredentials, LoadCredentialsError>>),
}

impl Waiter {
    /// Complete the query. The CRT may sign requests inside this call, and query the cache again,
    /// so call it without holding the state lock.
    fn complete(self, result: &Result<CachedCredentials, LoadCredentialsError>) {
        match (self, result) {
            (Waiter::Crt(callback), Ok(credentials)) => callback.complete(credentials.crt.clone()),
            // Dropping the callback fails the query.
            (Waiter::Crt(callback), Err(_)) => drop(callback),
            (Waiter::Load(sender), result) => {
                // The caller may have stopped waiting.
                let _ = sender.send(result.clone().map(|credentials| credentials.sdk));
            }
        }
    }
}

impl Cache {
    /// Answer `waiter` from the cache, or else make it wait for a fetch, starting one if none is in
    /// progress.
    fn query(self: &Arc<Self>, waiter: Waiter) {
        let mut state = self.state.lock().unwrap();
        if let Some((credentials, refresh_at)) = &state.cached
            && SystemTime::now() < *refresh_at
        {
            let credentials = credentials.clone();
            drop(state);
            waiter.complete(&Ok(credentials));
            return;
        }
        if let Some(waiters) = &mut state.fetching {
            waiters.push(waiter);
            return;
        }
        state.fetching = Some(vec![waiter]);
        drop(state);

        let source = self.source.clone();
        let fetch = Fetch(Some(self.clone()));
        // If the runtime has shut down, or shuts down before the fetch completes, the task is
        // dropped, and so is `fetch`, which fails the waiting queries.
        self.tokio_handle.spawn(async move {
            let result = source.provide_credentials().await;
            fetch.finish(result);
        });
    }

    /// Cache the result of a fetch, and complete the queries waiting for it.
    fn finish(&self, result: Result<SdkCredentials, CredentialsError>) {
        let result = result
            .and_then(CachedCredentials::new)
            .map_err(|e| LoadCredentialsError(Arc::new(e)));
        match &result {
            Ok(credentials) => debug!(expiration = ?credentials.sdk.expiry(), "loaded AWS credentials"),
            Err(e) => error!(error = %DisplayErrorContext(&*e.0), "failed to load AWS credentials"),
        }
        let waiters = {
            let mut state = self.state.lock().unwrap();
            state.cached = result
                .as_ref()
                .ok()
                .map(|credentials| (credentials.clone(), self.refresh_at(credentials)));
            state.fetching.take().unwrap_or_default()
        };
        for waiter in waiters {
            waiter.complete(&result);
        }
    }

    /// When credentials fetched now are due for a refresh: 5 minutes before they expire, or after
    /// the refresh interval if they don't expire. Credentials that expire in less than 5 minutes
    /// are already due: the next query fetches again.
    fn refresh_at(&self, credentials: &CachedCredentials) -> SystemTime {
        match credentials.sdk.expiry() {
            // `checked_sub` only fails for times long past, which are due too.
            Some(expiration) => expiration.checked_sub(REFRESH_BEFORE_EXPIRATION).unwrap_or(expiration),
            None => SystemTime::now() + self.refresh_interval,
        }
    }
}

/// A fetch in progress. Dropping it before [Fetch::finish] fails the queries waiting for it.
struct Fetch(Option<Arc<Cache>>);

impl Fetch {
    fn finish(mut self, result: Result<SdkCredentials, CredentialsError>) {
        if let Some(cache) = self.0.take() {
            cache.finish(result);
        }
    }
}

impl Drop for Fetch {
    fn drop(&mut self) {
        if let Some(cache) = self.0.take() {
            cache.finish(Err(fetch_dropped()));
        }
    }
}

/// The CRT client's queries to the cache, through the delegate provider.
struct CrtQueries(Arc<Cache>);

impl CredentialsSource for CrtQueries {
    fn get_credentials(&self, callback: CredentialsCallback) {
        self.0.query(Waiter::Crt(callback));
    }
}

#[cfg(test)]
mod tests {
    use std::sync::atomic::{AtomicUsize, Ordering};
    use std::time::UNIX_EPOCH;

    use aws_credential_types::provider::future;
    use futures::executor::block_on;
    use tokio::runtime::{Builder, Runtime};

    use super::*;

    const SECRET_ACCESS_KEY: &str = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

    /// The access key ID a [TestSource] returns for its `n`-th fetch (from 1).
    fn access_key_id(n: usize) -> String {
        format!("AKIAIOSFODNN7EXAMPL{n}")
    }

    /// An expiration time `lifetime` after the cache's refresh window starts, in whole seconds.
    fn expiring_after_refresh_window(lifetime: Duration) -> SystemTime {
        let expiration = SystemTime::now() + REFRESH_BEFORE_EXPIRATION + lifetime;
        UNIX_EPOCH + Duration::from_secs(expiration.duration_since(UNIX_EPOCH).unwrap().as_secs() + 1)
    }

    /// What a [TestSource] returns for a fetch.
    #[derive(Clone, Copy)]
    enum Answer {
        /// Credentials that expire at the given time, or don't expire.
        Credentials(Option<SystemTime>),
        /// A failure.
        Fail,
    }

    /// A source that counts its fetches, returns different credentials for each one, and takes a
    /// little time, so that concurrent queries overlap. Each fetch takes the next answer, and the
    /// last answer repeats.
    #[derive(Clone)]
    struct TestSource {
        fetches: Arc<AtomicUsize>,
        answers: Arc<Vec<Answer>>,
    }

    impl TestSource {
        fn new(answers: impl IntoIterator<Item = Answer>) -> Self {
            Self {
                fetches: Default::default(),
                answers: Arc::new(answers.into_iter().collect()),
            }
        }

        fn fetches(&self) -> usize {
            self.fetches.load(Ordering::SeqCst)
        }
    }

    impl Debug for TestSource {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            f.debug_struct("TestSource").finish_non_exhaustive()
        }
    }

    impl ProvideCredentials for TestSource {
        fn provide_credentials<'a>(&'a self) -> future::ProvideCredentials<'a>
        where
            Self: 'a,
        {
            let n = self.fetches.fetch_add(1, Ordering::SeqCst) + 1;
            let answer = self.answers[(n - 1).min(self.answers.len() - 1)];
            future::ProvideCredentials::new(async move {
                tokio::time::sleep(Duration::from_millis(50)).await;
                match answer {
                    Answer::Credentials(expiration) => Ok(SdkCredentials::new(
                        access_key_id(n),
                        SECRET_ACCESS_KEY,
                        Some(format!("token-{n}")),
                        expiration,
                        "TestSource",
                    )),
                    Answer::Fail => Err(CredentialsError::not_loaded(format!("no credentials for fetch {n}"))),
                }
            })
        }
    }

    fn new_runtime() -> Runtime {
        Builder::new_multi_thread().enable_all().build().unwrap()
    }

    fn crt_query(credentials: &SharedCredentials) -> Result<Credentials, mountpoint_s3_client::error::CrtError> {
        block_on(credentials.provider().get_credentials())
    }

    #[test]
    fn load_and_crt_queries_return_the_cached_credentials() {
        let runtime = new_runtime();
        let expiration = SystemTime::now() + Duration::from_secs(3600);
        let source = TestSource::new([Answer::Credentials(Some(expiration))]);
        let credentials = SharedCredentials::new(source.clone(), runtime.handle().clone()).unwrap();

        let loaded = block_on(credentials.load()).unwrap();
        assert_eq!(loaded.access_key_id(), access_key_id(1));
        assert_eq!(loaded.secret_access_key(), SECRET_ACCESS_KEY);
        assert_eq!(loaded.session_token(), Some("token-1"));
        assert_eq!(loaded.expiry(), Some(expiration));

        let crt = crt_query(&credentials).unwrap();
        assert_eq!(crt.access_key_id(), access_key_id(1));
        assert_eq!(crt.secret_access_key(), SECRET_ACCESS_KEY);
        assert_eq!(crt.session_token(), Some("token-1"));
        // The CRT keeps whole seconds.
        let seconds = expiration.duration_since(UNIX_EPOCH).unwrap().as_secs();
        assert_eq!(crt.expiration(), Some(UNIX_EPOCH + Duration::from_secs(seconds)));
        assert_eq!(source.fetches(), 1);
    }

    #[test]
    fn sdk_provider_reads_the_cache() {
        let runtime = new_runtime();
        let source = TestSource::new([Answer::Fail, Answer::Credentials(None)]);
        let credentials = SharedCredentials::new(source.clone(), runtime.handle().clone()).unwrap();

        let error = block_on(credentials.provide_credentials()).unwrap_err();
        assert!(matches!(error, CredentialsError::ProviderError(_)), "{error:?}");
        let message = format!("{}", DisplayErrorContext(&error));
        assert!(message.contains("no credentials for fetch 1"), "{message}");

        let provided = block_on(credentials.provide_credentials()).unwrap();
        assert_eq!(provided.access_key_id(), access_key_id(2));
        assert_eq!(crt_query(&credentials).unwrap().access_key_id(), access_key_id(2));
        assert_eq!(source.fetches(), 2);
    }

    #[test]
    fn concurrent_queries_share_one_fetch() {
        let runtime = new_runtime();
        let source = TestSource::new([Answer::Credentials(None)]);
        let credentials = SharedCredentials::new(source.clone(), runtime.handle().clone()).unwrap();

        let loads = futures::future::join_all((0..4).map(|_| credentials.load()));
        let crt_queries = futures::future::join_all((0..4).map(|_| credentials.provider().get_credentials()));
        let (loads, crt_queries) = block_on(futures::future::join(loads, crt_queries));
        for loaded in loads {
            assert_eq!(loaded.unwrap().access_key_id(), access_key_id(1));
        }
        for crt in crt_queries {
            assert_eq!(crt.unwrap().access_key_id(), access_key_id(1));
        }
        assert_eq!(source.fetches(), 1);
    }

    #[test]
    fn refreshes_five_minutes_before_expiration() {
        let runtime = new_runtime();
        let first_expiration = expiring_after_refresh_window(Duration::from_secs(1));
        let source = TestSource::new([Answer::Credentials(Some(first_expiration)), Answer::Credentials(None)]);
        let credentials = SharedCredentials::new(source.clone(), runtime.handle().clone()).unwrap();

        assert_eq!(block_on(credentials.load()).unwrap().access_key_id(), access_key_id(1));
        assert_eq!(crt_query(&credentials).unwrap().access_key_id(), access_key_id(1));
        assert_eq!(source.fetches(), 1);

        let refresh_at = first_expiration - REFRESH_BEFORE_EXPIRATION;
        std::thread::sleep(refresh_at.duration_since(SystemTime::now()).unwrap_or_default());
        assert_eq!(crt_query(&credentials).unwrap().access_key_id(), access_key_id(2));
        assert_eq!(block_on(credentials.load()).unwrap().access_key_id(), access_key_id(2));
        assert_eq!(source.fetches(), 2);
    }

    #[test]
    fn credentials_in_the_refresh_window_are_fetched_on_every_query() {
        let runtime = new_runtime();
        let expiration = SystemTime::now() + Duration::from_secs(60);
        let source = TestSource::new([Answer::Credentials(Some(expiration))]);
        let credentials = SharedCredentials::new(source.clone(), runtime.handle().clone()).unwrap();

        block_on(credentials.load()).unwrap();
        crt_query(&credentials).unwrap();
        assert_eq!(block_on(credentials.load()).unwrap().access_key_id(), access_key_id(3));
        assert_eq!(source.fetches(), 3);
    }

    #[test]
    fn credentials_without_expiration_are_refreshed_after_the_interval() {
        let runtime = new_runtime();
        let source = TestSource::new([Answer::Credentials(None)]);
        let interval = Duration::from_millis(500);
        let credentials =
            SharedCredentials::with_refresh_interval(source.clone(), runtime.handle().clone(), interval).unwrap();

        block_on(credentials.load()).unwrap();
        assert_eq!(crt_query(&credentials).unwrap().access_key_id(), access_key_id(1));
        assert_eq!(source.fetches(), 1);
        std::thread::sleep(interval);
        assert_eq!(crt_query(&credentials).unwrap().access_key_id(), access_key_id(2));
        assert_eq!(source.fetches(), 2);
    }

    #[test]
    fn failures_are_returned_and_not_cached() {
        let runtime = new_runtime();
        let source = TestSource::new([Answer::Fail, Answer::Fail, Answer::Credentials(None)]);
        let credentials = SharedCredentials::new(source.clone(), runtime.handle().clone()).unwrap();

        let error = block_on(credentials.load()).unwrap_err();
        let message = format!("{}", DisplayErrorContext(&error));
        assert!(message.starts_with("failed to load AWS credentials"), "{message}");
        assert!(message.contains("no credentials for fetch 1"), "{message}");
        crt_query(&credentials).expect_err("the second fetch fails too");
        assert_eq!(crt_query(&credentials).unwrap().access_key_id(), access_key_id(3));
        assert_eq!(source.fetches(), 3);
    }

    #[test]
    fn failed_refresh_empties_the_cache() {
        let runtime = new_runtime();
        let first_expiration = expiring_after_refresh_window(Duration::from_secs(1));
        let source = TestSource::new([
            Answer::Credentials(Some(first_expiration)),
            Answer::Fail,
            Answer::Credentials(None),
        ]);
        let credentials = SharedCredentials::new(source.clone(), runtime.handle().clone()).unwrap();

        assert_eq!(crt_query(&credentials).unwrap().access_key_id(), access_key_id(1));
        let refresh_at = first_expiration - REFRESH_BEFORE_EXPIRATION;
        std::thread::sleep(refresh_at.duration_since(SystemTime::now()).unwrap_or_default());
        // The credentials haven't expired yet, but the failed refresh drops them.
        crt_query(&credentials).expect_err("the refresh fails");
        assert_eq!(crt_query(&credentials).unwrap().access_key_id(), access_key_id(3));
        assert_eq!(source.fetches(), 3);
    }

    #[test]
    fn cached_credentials_are_served_without_the_runtime() {
        let runtime = new_runtime();
        let source = TestSource::new([Answer::Credentials(None)]);
        let credentials = SharedCredentials::new(source.clone(), runtime.handle().clone()).unwrap();

        block_on(credentials.load()).unwrap();
        runtime.shutdown_background();
        assert_eq!(crt_query(&credentials).unwrap().access_key_id(), access_key_id(1));
        assert_eq!(block_on(credentials.load()).unwrap().access_key_id(), access_key_id(1));
        assert_eq!(source.fetches(), 1);
    }

    #[test]
    fn fetch_fails_after_runtime_shutdown() {
        let runtime = new_runtime();
        let source = TestSource::new([Answer::Credentials(None)]);
        let credentials = SharedCredentials::new(source.clone(), runtime.handle().clone()).unwrap();

        runtime.shutdown_background();
        let error = block_on(credentials.load()).unwrap_err();
        let message = format!("{}", DisplayErrorContext(&error));
        assert!(message.contains("the credentials fetch did not complete"), "{message}");
        crt_query(&credentials).expect_err("the runtime is shut down");
    }
}
