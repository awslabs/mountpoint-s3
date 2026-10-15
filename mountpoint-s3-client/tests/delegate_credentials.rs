//! Tests for S3 requests signed with credentials from a delegate credentials provider, against a
//! local HTTP server that records the credentials each request was signed with.

use std::net::SocketAddr;
use std::sync::atomic::{AtomicBool, AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::time::Duration;

use futures::StreamExt;
use futures::channel::mpsc;
use http_body_util::Full;
use hyper::body::Bytes;
use hyper::service::service_fn;
use hyper::{Request, Response};
use hyper_util::rt::TokioIo;
use mountpoint_s3_client::config::{
    AddressingStyle, Allocator, Credentials, CredentialsCallback, CredentialsOptions, CredentialsProvider,
    CredentialsSource, EndpointConfig, S3ClientAuthConfig, S3ClientConfig, Uri,
};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use tokio::net::TcpListener;
use tokio::runtime::Handle;

/// The access key ID and session token of a signed request.
#[derive(Debug, Clone, PartialEq, Eq)]
struct SignedWith {
    access_key_id: String,
    session_token: Option<String>,
}

/// Spawns a plain HTTP server on a random loopback port that answers every request with an empty
/// `ListObjectsV2` result and records the credentials it was signed with.
async fn spawn_server() -> (SocketAddr, Arc<Mutex<Vec<SignedWith>>>) {
    let requests = Arc::new(Mutex::new(Vec::new()));
    let listener = TcpListener::bind("127.0.0.1:0").await.expect("bind");
    let addr = listener.local_addr().expect("local addr");

    let recorded = requests.clone();
    tokio::spawn(async move {
        while let Ok((stream, _)) = listener.accept().await {
            let recorded = recorded.clone();
            tokio::spawn(async move {
                let service = service_fn(move |req: Request<hyper::body::Incoming>| {
                    let recorded = recorded.clone();
                    async move {
                        recorded.lock().unwrap().push(signed_with(&req));
                        Ok::<_, std::convert::Infallible>(list_objects_response())
                    }
                });
                let _ = hyper::server::conn::http1::Builder::new()
                    .serve_connection(TokioIo::new(stream), service)
                    .await;
            });
        }
    });

    (addr, requests)
}

fn signed_with(req: &Request<hyper::body::Incoming>) -> SignedWith {
    let header = |name| req.headers().get(name).map(|v| v.to_str().unwrap().to_owned());
    // `AWS4-HMAC-SHA256 Credential=<access key id>/<date>/<region>/s3/aws4_request, ...`
    let authorization = header("authorization").expect("request should be signed");
    let access_key_id = authorization
        .split_once("Credential=")
        .and_then(|(_, rest)| rest.split_once('/'))
        .map(|(key, _)| key.to_owned())
        .expect("authorization header should name the access key");
    SignedWith {
        access_key_id,
        session_token: header("x-amz-security-token"),
    }
}

fn list_objects_response() -> Response<Full<Bytes>> {
    let body = Bytes::from_static(
        br#"<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <Name>test-bucket</Name>
    <Prefix></Prefix>
    <KeyCount>0</KeyCount>
    <MaxKeys>1000</MaxKeys>
    <IsTruncated>false</IsTruncated>
</ListBucketResult>"#,
    );
    Response::builder()
        .status(200)
        .header("Content-Type", "application/xml")
        .body(Full::new(body))
        .expect("build response")
}

fn test_credentials(access_key_id: &str) -> Credentials {
    let session_token = format!("token-{access_key_id}");
    let options = CredentialsOptions {
        access_key_id,
        secret_access_key: "secret",
        session_token: Some(&session_token),
        expiration: None,
    };
    Credentials::new(&Allocator::default(), options).unwrap()
}

/// A credentials source that completes each query asynchronously on a Tokio runtime, as a source
/// backed by an async credentials chain would.
struct TestSource {
    runtime: Handle,
    calls: Arc<AtomicUsize>,
}

impl CredentialsSource for TestSource {
    fn get_credentials(&self, callback: CredentialsCallback) {
        self.calls.fetch_add(1, Ordering::SeqCst);
        self.runtime.spawn(async move {
            tokio::task::yield_now().await;
            callback.complete(test_credentials("AKIDFIRST"));
        });
    }
}

/// Creates a client that signs with credentials from `source` and sends its requests to a local
/// server.
async fn new_client(source: impl CredentialsSource) -> (S3CrtClient, Arc<Mutex<Vec<SignedWith>>>) {
    let (addr, requests) = spawn_server().await;

    let allocator = Allocator::default();
    let provider = CredentialsProvider::new_delegate(&allocator, source).expect("create delegate");

    let endpoint = Uri::new_from_str(&allocator, format!("http://{addr}")).expect("parse uri");
    let endpoint_config = EndpointConfig::new("us-east-1")
        .addressing_style(AddressingStyle::Path)
        .endpoint(endpoint);
    let config = S3ClientConfig::new()
        .endpoint_config(endpoint_config)
        .auth_config(S3ClientAuthConfig::Provider(provider));
    let client = S3CrtClient::new(config).expect("create client");
    (client, requests)
}

fn signed(access_key_id: &str) -> SignedWith {
    SignedWith {
        access_key_id: access_key_id.to_owned(),
        session_token: Some(format!("token-{access_key_id}")),
    }
}

#[tokio::test(flavor = "multi_thread", worker_threads = 2)]
async fn requests_signed_with_delegate_credentials() {
    let calls = Arc::new(AtomicUsize::new(0));
    let source = TestSource {
        runtime: Handle::current(),
        calls: calls.clone(),
    };
    let (client, requests) = new_client(source).await;

    for _ in 0..3 {
        client
            .list_objects("test-bucket", None, "", 1000, "")
            .await
            .expect("list should succeed");
    }

    assert_eq!(*requests.lock().unwrap(), vec![signed("AKIDFIRST"); 3]);
    assert_eq!(
        calls.load(Ordering::SeqCst),
        3,
        "the client queries the source for every request it signs"
    );
}

/// A source that hands each callback to the test, and records when it's dropped.
struct ManualSource {
    callbacks: Mutex<mpsc::UnboundedSender<CredentialsCallback>>,
    dropped: Arc<AtomicBool>,
}

impl CredentialsSource for ManualSource {
    fn get_credentials(&self, callback: CredentialsCallback) {
        // If the test is gone, the callback is dropped, which fails the query. Drop it after
        // releasing the lock, since completing the query can call back into the source.
        let unsent = self.callbacks.lock().unwrap().unbounded_send(callback).err();
        drop(unsent);
    }
}

impl Drop for ManualSource {
    fn drop(&mut self) {
        self.dropped.store(true, Ordering::SeqCst);
    }
}

/// Dropping the client while a query to the source is in flight leaves the CRT holding the only
/// references to the provider. Completing the query afterwards must be safe, and the source is
/// dropped once the client has shut down.
#[tokio::test(flavor = "multi_thread", worker_threads = 2)]
async fn client_dropped_while_query_in_flight() {
    let (sender, mut callbacks) = mpsc::unbounded();
    let dropped = Arc::new(AtomicBool::new(false));
    let source = ManualSource {
        callbacks: Mutex::new(sender),
        dropped: dropped.clone(),
    };
    let (client, _requests) = new_client(source).await;

    let request = tokio::spawn(async move { client.list_objects("test-bucket", None, "", 1000, "").await });
    let callback = callbacks.next().await.expect("the source should be queried");
    request.abort();
    assert!(request.await.unwrap_err().is_cancelled());
    assert!(
        !dropped.load(Ordering::SeqCst),
        "the in-flight query keeps the source alive"
    );

    let credentials = test_credentials("AKIDLATE");
    std::thread::spawn(move || callback.complete(credentials))
        .join()
        .unwrap();

    // The client shuts down asynchronously, and `S3CrtClient` gives no signal when it's done, so
    // poll for the source's drop with a deadline.
    tokio::task::spawn_blocking(move || {
        let start = std::time::Instant::now();
        while !dropped.load(Ordering::SeqCst) {
            assert!(
                start.elapsed() < Duration::from_secs(10),
                "the source should be dropped"
            );
            std::thread::sleep(Duration::from_millis(10));
        }
    })
    .await
    .unwrap();
}
