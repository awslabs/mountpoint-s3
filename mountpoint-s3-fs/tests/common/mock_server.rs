//! Test helpers that run a local S3 mock server and connect Mountpoint's clients to it.
//!
//! [MockServer] runs an [s3_mock_server::S3MockServer] with an in-memory store and one bucket. Tests
//! seed and inspect the bucket through it, inject faults and count requests on the server side,
//! and connect Mountpoint's production clients to it. [MockServer::crt_client_config] and
//! [MockServer::sdk_config] return configurations for an
//! [S3CrtClient](mountpoint_s3_client::S3CrtClient) and an AWS SDK client that connect to the
//! server over TCP. Tests add the client settings they need, such as the part size or read
//! backpressure, and build the clients themselves. The server holds no client.
//!
//! All the clients see the same bucket, so a test can seed it once and exercise several clients.
//!
//! # Usage
//!
//! ```text
//! use mountpoint_s3_client::{ObjectClient, S3CrtClient};
//! use mountpoint_s3_client::types::HeadObjectParams;
//! use common::mock_server::{AddObjectRequest, Error, MockServer, Occurrence, Operation};
//!
//! async fn example() {
//!     let server = MockServer::config().bucket("test-bucket").build().await;
//!     // Clients report ETags in quotes, as S3 does, so compare with the returned ETag.
//!     let etag = server.add_object("key", AddObjectRequest::new(vec![0xaa; 3000])).await;
//!
//!     let client = S3CrtClient::new(server.crt_client_config()).unwrap();
//!     let head_counter = server.new_counter(Operation::HeadObject);
//!     let head = client
//!         .head_object(server.bucket(), "key", &HeadObjectParams::new())
//!         .await
//!         .unwrap();
//!     assert_eq!(head.etag, etag);
//!     assert_eq!(head_counter.count(), 1);
//!
//!     // Fail the next GetObject request for the key with an S3 error response.
//!     server.inject_error(Operation::GetObject, Some("key"), Error::AccessDenied, 0, Occurrence::Once);
//! }
//! ```
//!
//! # Lifetime
//!
//! [MockServer] is a cheap handle. Its clones share one server, which stops when the last clone
//! is dropped. Anything that holds a client of the server (a file system, a prefetcher, a FUSE
//! session) must be dropped before the server stops. Otherwise its last requests fail with
//! connection errors. Bind the server before the component that uses it, so that the server is
//! dropped after the component, or wrap the component in a [MockServerGuard]
//! ([MockServer::guard]), which keeps the server running for as long as the component exists.
//!
//! # Runtimes
//!
//! The server listens on its own Tokio runtime, so that it keeps serving requests while a test
//! blocks, for example in a system call on a FUSE mount. The seeding and inspection methods are
//! async, and tests await them.
//!
//! # Retries
//!
//! The client configurations that [MockServer] returns make a single attempt per request, so
//! that injected errors reach the test as they would without retries. Tests that need retries
//! set them on the client configuration. The `AWS_MAX_ATTEMPTS` environment variable overrides
//! the number of attempts of the CRT client.

use std::net::SocketAddr;
use std::num::NonZeroUsize;
use std::ops::{Deref, DerefMut};
use std::sync::Arc;
use std::time::{Duration, Instant};

use aws_sdk_s3::config::retry::RetryConfig;
use aws_sdk_s3::config::{BehaviorVersion, Credentials, Region};
use mountpoint_s3_client::config::{
    AddressingStyle, Allocator, CredentialsProvider, CredentialsProviderStaticOptions, EndpointConfig,
    S3ClientAuthConfig, S3ClientConfig, Uri,
};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_fs::s3::S3Personality;
use s3_mock_server::{FaultTarget, FaultType, S3MockServer, ServerHandle};
use tokio::runtime::Runtime;

pub use s3_mock_server::{AddObjectRequest, Error, ObjectData, Occurrence, Operation, RestoreStatus};

/// A general purpose bucket name, which servers use unless the test sets another.
pub const GENERAL_PURPOSE_BUCKET: &str = "test-bucket";

/// A directory bucket name. Tests that need the operations that S3 only serves in directory
/// buckets, such as appends and renames, build their server with
/// `MockServer::config().bucket(DIRECTORY_BUCKET)`.
pub const DIRECTORY_BUCKET: &str = "test-bucket--usw2-az1--x-s3";

/// Returns the bucket for a file system with `personality`: a directory bucket for the
/// `ExpressOneZone` personality, and a general purpose bucket otherwise.
pub fn bucket_for(personality: S3Personality) -> &'static str {
    match personality {
        S3Personality::ExpressOneZone => DIRECTORY_BUCKET,
        _ => GENERAL_PURPOSE_BUCKET,
    }
}

/// The credentials that the server accepts.
const ACCESS_KEY: &str = "mock-akid";
const SECRET_KEY: &str = "mock-secret";
const REGION: &str = "us-east-1";

/// The longest time that [MockServer::wait_for_no_upload_in_progress] waits for an upload to end.
const UPLOAD_END_TIMEOUT: Duration = Duration::from_secs(5);

/// Configuration for a [MockServer].
#[derive(Debug, Clone)]
pub struct MockServerConfig {
    bucket: String,
}

impl Default for MockServerConfig {
    fn default() -> Self {
        Self {
            bucket: GENERAL_PURPOSE_BUCKET.to_owned(),
        }
    }
}

impl MockServerConfig {
    /// Set the name of the bucket that the server creates. It must be a valid S3 bucket name,
    /// because the server rejects requests for names that S3 rejects, such as `test_bucket`.
    ///
    /// A directory bucket name (`<base>--<zone-id>--x-s3`) makes the bucket an S3 directory
    /// bucket. The server then answers as S3 does for directory buckets: it lists keys in no
    /// particular order and serves appends and renames. SDK clients authenticate with S3 Express
    /// sessions. CRT clients sign their requests with the server's credentials and use no
    /// sessions, because the CRT sends CreateSession with the bucket only in the host name, which
    /// the server cannot see. In a general purpose bucket, appends and renames fail with 501
    /// NotImplemented, as they do in S3.
    pub fn bucket(mut self, bucket: impl Into<String>) -> Self {
        self.bucket = bucket.into();
        self
    }

    /// Start the server and create its bucket.
    pub async fn build(self) -> MockServer {
        MockServer::start(self).await
    }
}

/// A local S3 mock server with one bucket.
///
/// Clones share the server, which stops when the last clone is dropped. The
/// [module documentation](self) shows how to connect clients to it.
#[derive(Clone)]
pub struct MockServer {
    inner: Arc<Inner>,
}

struct Inner {
    config: MockServerConfig,
    server: Arc<S3MockServer>,
    address: SocketAddr,
    /// Dropping the handle stops the listener.
    handle: Option<ServerHandle>,
    runtime: Option<Runtime>,
}

impl Drop for Inner {
    fn drop(&mut self) {
        // Stop accepting connections, then shut the runtime down. Dropping a runtime blocks, which
        // panics inside async contexts (e.g. at the end of a `#[tokio::test]`), so shut it down
        // without waiting for its tasks.
        drop(self.handle.take());
        if let Some(runtime) = self.runtime.take() {
            runtime.shutdown_background();
        }
    }
}

impl std::fmt::Debug for MockServer {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("MockServer")
            .field("config", &self.inner.config)
            .field("address", &self.inner.address)
            .finish_non_exhaustive()
    }
}

impl MockServer {
    /// Create a builder for a new server.
    pub fn config() -> MockServerConfig {
        MockServerConfig::default()
    }

    async fn start(config: MockServerConfig) -> Self {
        let runtime = tokio::runtime::Builder::new_multi_thread()
            .worker_threads(2)
            .thread_name("mock-s3-server")
            .enable_all()
            .build()
            .expect("failed to create the mock server runtime");
        let server = Arc::new(
            S3MockServer::builder()
                .with_in_memory_store()
                .build()
                .expect("failed to build the mock server"),
        );
        let start = runtime.spawn({
            let server = server.clone();
            let bucket = config.bucket.clone();
            async move {
                let handle = server.start().await.expect("failed to start the mock server");
                server
                    .create_bucket(&bucket)
                    .await
                    .expect("failed to create the bucket");
                handle
            }
        });
        let handle = start.await.expect("failed to start the mock server");
        Self {
            inner: Arc::new(Inner {
                config,
                server,
                address: handle.socket_addr(),
                handle: Some(handle),
                runtime: Some(runtime),
            }),
        }
    }

    /// Returns the name of the bucket that the server created.
    pub fn bucket(&self) -> &str {
        &self.inner.config.bucket
    }

    /// Returns the URL of the server's TCP endpoint.
    pub fn endpoint_url(&self) -> String {
        format!("http://{}", self.inner.address)
    }

    /// Keep this server running for as long as `value` exists. See [MockServerGuard].
    pub fn guard<T>(&self, value: T) -> MockServerGuard<T> {
        MockServerGuard {
            value,
            server: self.clone(),
        }
    }

    /// Returns a configuration for a CRT client of this server. It sets what connecting to the
    /// server needs: the endpoint with path-style addressing, the server's credentials and
    /// signing without S3 Express sessions. It also sets a single attempt per request. Tests add
    /// other client settings, such as the part size or read backpressure, and build the client
    /// with `S3CrtClient::new`.
    pub fn crt_client_config(&self) -> S3ClientConfig {
        let allocator = Allocator::default();
        let endpoint =
            Uri::new_from_str(&allocator, self.endpoint_url()).expect("the server URL should be a valid URI");
        let credentials = CredentialsProvider::new_static(
            &allocator,
            CredentialsProviderStaticOptions {
                access_key_id: ACCESS_KEY,
                secret_access_key: SECRET_KEY,
                session_token: None,
            },
        )
        .expect("failed to create the static credentials provider");
        S3ClientConfig::new()
            .endpoint_config(
                EndpointConfig::new(REGION)
                    .addressing_style(AddressingStyle::Path)
                    .endpoint(endpoint)
                    // The CRT sends CreateSession with the bucket only in the host name, which
                    // the server cannot see. Without sessions, `S3Personality::infer_from_bucket`
                    // can't recognise directory buckets. That doesn't matter here, because tests
                    // choose the personality and the bucket themselves ([bucket_for]).
                    .disable_s3express_session_auth(true),
            )
            .auth_config(S3ClientAuthConfig::Provider(credentials))
            .max_attempts(NonZeroUsize::new(1).unwrap())
    }

    /// Returns a configuration for an SDK client of this server. It sets the endpoint, the
    /// credentials, the region, path-style addressing and a single attempt per request, and reads
    /// nothing from the environment. Tests add other client settings, such as interceptors,
    /// timeouts or checksum behaviour, and build the client with `aws_sdk_s3::Client::from_conf`.
    pub fn sdk_config(&self) -> aws_sdk_s3::config::Builder {
        aws_sdk_s3::Config::builder()
            .behavior_version(BehaviorVersion::latest())
            .credentials_provider(Credentials::new(ACCESS_KEY, SECRET_KEY, None, None, "mock-s3-server"))
            .region(Region::new(REGION))
            .endpoint_url(self.endpoint_url())
            .force_path_style(true)
            .retry_config(RetryConfig::standard().with_max_attempts(1))
    }

    /// Add an object to the bucket, replacing any object with the same key, and return its ETag
    /// in the quoted form that clients report.
    ///
    /// The server stores the request's content, ETag, last-modified time, user metadata, storage
    /// class and restore status. Without other settings, it computes the ETag from the content and
    /// stores a CRC64NVME checksum, as S3 does.
    pub async fn add_object(&self, key: &str, request: AddObjectRequest) -> ETag {
        self.store()
            .add_object_with(self.bucket(), key, request)
            .await
            .expect("failed to add the object");
        let object = self.object(key).await.expect("the object was just added");
        ETag::from(object.etag)
    }

    /// Remove an object, if it exists.
    pub async fn remove_object(&self, key: &str) {
        self.store()
            .delete_object(self.bucket(), key)
            .await
            .expect("failed to remove the object");
    }

    /// Returns `true` if the bucket contains an object with this key.
    pub async fn contains_key(&self, key: &str) -> bool {
        self.store()
            .object_exists(self.bucket(), key)
            .await
            .expect("failed to look up the object")
    }

    /// Returns `true` if any key in the bucket starts with `prefix`.
    pub async fn contains_prefix(&self, prefix: &str) -> bool {
        let objects = self
            .store()
            .list_objects(self.bucket(), Some(prefix))
            .await
            .expect("failed to list the objects");
        !objects.is_empty()
    }

    /// Returns an object's content and metadata as the server stores them, or `None` if the
    /// object doesn't exist.
    pub async fn object(&self, key: &str) -> Option<ObjectData> {
        self.store()
            .get_object(self.bucket(), key)
            .await
            .expect("failed to get the object")
    }

    /// Returns an object's content, or `None` if the object doesn't exist. The content is read
    /// from the server's store, so this also works for archived objects.
    pub async fn object_content(&self, key: &str) -> Option<Vec<u8>> {
        self.object(key).await.map(|object| object.body.to_vec())
    }

    /// Returns `true` if a multipart upload is in progress for the key.
    pub async fn is_upload_in_progress(&self, key: &str) -> bool {
        self.store()
            .list_multipart_uploads(self.bucket())
            .await
            .expect("failed to list the uploads")
            .iter()
            .any(|upload| upload.key == key)
    }

    /// Wait until no multipart upload is in progress for the key, for example while the CRT client
    /// aborts a failed upload in the background. It panics if an upload is still in progress after
    /// a few seconds.
    pub async fn wait_for_no_upload_in_progress(&self, key: &str) {
        let deadline = Instant::now() + UPLOAD_END_TIMEOUT;
        while self.is_upload_in_progress(key).await {
            assert!(
                Instant::now() < deadline,
                "an upload for {key} is still in progress after {UPLOAD_END_TIMEOUT:?}"
            );
            tokio::time::sleep(Duration::from_millis(10)).await;
        }
    }

    /// Returns whether an object is restored, or an error if the object doesn't exist.
    pub async fn is_object_restored(&self, key: &str) -> Result<bool, ObjectNotFound> {
        self.object(key)
            .await
            .map(|object| matches!(object.restore_status, Some(RestoreStatus::Restored { .. })))
            .ok_or_else(|| ObjectNotFound(key.to_owned()))
    }

    /// Create a counter of the HTTP requests that the server receives for `operation` from now
    /// on. The CRT client sends one GetObject request per part, and makes a `put_object` upload as
    /// a multipart upload ([Operation::CreateMultipartUpload], [Operation::UploadPart] and
    /// [Operation::CompleteMultipartUpload]).
    pub fn new_counter(&self, operation: Operation) -> RequestCounter {
        RequestCounter {
            server: self.clone(),
            operation,
            initial_count: self.store().request_count(operation),
        }
    }

    /// Fail requests for `operation` in the bucket with an S3 error response, as
    /// [S3MockServer::insert_fault_for] does. If `key` is given, only requests for that key fail,
    /// and [S3MockServer::insert_fault_for] describes which key each request has.
    ///
    /// The fault fires once the target has seen more than `skip` matching requests, counted from
    /// when the target was first registered rather than from this call. The faults of a target fire
    /// in the order in which they were injected. The server counts HTTP requests, so when the CRT
    /// client sends part requests concurrently, which of them fails is not deterministic.
    pub fn inject_error(
        &self,
        operation: Operation,
        key: Option<&str>,
        error: Error,
        skip: u32,
        occurrence: Occurrence,
    ) {
        let mut target = FaultTarget::operation(operation).bucket(self.bucket());
        if let Some(key) = key {
            target = target.key(key);
        }
        self.store()
            .insert_fault_for(target, FaultType::Error(error), skip, occurrence);
    }

    fn store(&self) -> &S3MockServer {
        &self.inner.server
    }
}

/// An object the test expected in the bucket doesn't exist.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct ObjectNotFound(pub String);

impl std::fmt::Display for ObjectNotFound {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "object not found: {}", self.0)
    }
}

impl std::error::Error for ObjectNotFound {}

/// A value that keeps a [MockServer] running for as long as it exists.
///
/// Wrap the component under test (a file system, a FUSE session, a prefetcher) in it, so that the
/// component is dropped before the server stops, regardless of the order in which the test drops
/// its variables. It dereferences to the wrapped value, and [MockServerGuard::server] returns the
/// server.
pub struct MockServerGuard<T> {
    // Rust drops fields in declaration order, so the value is dropped before the server.
    value: T,
    server: MockServer,
}

impl<T> MockServerGuard<T> {
    /// Returns the server that this guard keeps running.
    pub fn server(&self) -> &MockServer {
        &self.server
    }
}

impl<T> Deref for MockServerGuard<T> {
    type Target = T;

    fn deref(&self) -> &T {
        &self.value
    }
}

impl<T> DerefMut for MockServerGuard<T> {
    fn deref_mut(&mut self) -> &mut T {
        &mut self.value
    }
}

impl<T: std::fmt::Debug> std::fmt::Debug for MockServerGuard<T> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_tuple("MockServerGuard").field(&self.value).finish()
    }
}

/// Counts the requests that a [MockServer] receives for an operation. The counter keeps the
/// server running.
#[derive(Debug)]
pub struct RequestCounter {
    server: MockServer,
    operation: Operation,
    initial_count: u64,
}

impl RequestCounter {
    /// Returns the number of requests since the counter was created.
    pub fn count(&self) -> u64 {
        self.server.store().request_count(self.operation) - self.initial_count
    }
}
