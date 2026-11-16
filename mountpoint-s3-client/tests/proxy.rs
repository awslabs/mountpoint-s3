//! Tests that the credentials providers send their requests through the proxy set by the standard
//! proxy environment variables, and bypass it for hosts in `NO_PROXY`.
//!
//! Each test runs in a forked process, as it sets environment variables. The proxy, the fake S3
//! endpoint and the fake ECS credentials endpoint listen on 127.0.0.1. The tests behind `s3_tests`
//! send their requests to S3 and STS through the proxy.

pub mod common;

use std::net::SocketAddr;
use std::path::Path;
use std::sync::atomic::{AtomicUsize, Ordering};
use std::sync::{Arc, Mutex};
use std::time::Duration;

use http_body_util::Full;
use hyper::body::Bytes;
use hyper::service::service_fn;
use hyper::{Request, Response};
use hyper_util::rt::TokioIo;
use mountpoint_s3_client::config::{
    AddressingStyle, Allocator, EndpointConfig, S3ClientAuthConfig, S3ClientConfig, Uri,
};
use mountpoint_s3_client::{ObjectClient, S3CrtClient};
use rusty_fork::rusty_fork_test;
use tokio::io::{AsyncReadExt, AsyncWriteExt};
use tokio::net::{TcpListener, TcpStream};

const ACCESS_KEY_ID: &str = "AKIAIOSFODNN7EXAMPLE";
const SECRET_ACCESS_KEY: &str = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

/// An HTTP proxy that records the target of each connection: `CONNECT <host>:<port>` for a tunnel,
/// or `<method> <absolute URL>` for a plain HTTP request.
struct RecordingProxy {
    targets: Arc<Mutex<Vec<String>>>,
}

/// Bind a listener on 127.0.0.1. The tests bind their listeners before they start the Tokio runtime,
/// so that the addresses can be put in the environment while no other thread is running.
fn bind_local() -> (std::net::TcpListener, SocketAddr) {
    let listener = std::net::TcpListener::bind("127.0.0.1:0").expect("bind");
    listener.set_nonblocking(true).unwrap();
    let addr = listener.local_addr().unwrap();
    (listener, addr)
}

impl RecordingProxy {
    /// Start a proxy on `listener` that forwards plain HTTP requests and, if `tunnel` is true,
    /// opens the tunnels it is asked for. Otherwise it refuses tunnels, so that nothing leaves the
    /// host.
    fn start(listener: std::net::TcpListener, tunnel: bool) -> Self {
        let listener = TcpListener::from_std(listener).unwrap();
        let targets = Arc::new(Mutex::new(Vec::new()));
        let recorded = targets.clone();
        tokio::spawn(async move {
            while let Ok((client, _)) = listener.accept().await {
                let recorded = recorded.clone();
                tokio::spawn(async move {
                    let _ = proxy_connection(client, recorded, tunnel).await;
                });
            }
        });
        Self { targets }
    }

    fn targets(&self) -> Vec<String> {
        self.targets.lock().unwrap().clone()
    }
}

async fn proxy_connection(
    mut client: TcpStream,
    targets: Arc<Mutex<Vec<String>>>,
    tunnel: bool,
) -> std::io::Result<()> {
    // Read the request head one byte at a time, so that nothing after it is consumed.
    let mut head = Vec::new();
    while !head.ends_with(b"\r\n\r\n") {
        let mut byte = [0u8];
        if client.read(&mut byte).await? == 0 {
            return Ok(());
        }
        head.push(byte[0]);
    }
    let head = String::from_utf8_lossy(&head).into_owned();
    let (request_line, rest) = head.split_once("\r\n").unwrap();
    let mut parts = request_line.split(' ');
    let (method, target, version) = (parts.next().unwrap(), parts.next().unwrap(), parts.next().unwrap());
    targets.lock().unwrap().push(format!("{method} {target}"));

    let mut upstream = if method == "CONNECT" {
        if !tunnel {
            client.write_all(b"HTTP/1.1 502 Bad Gateway\r\n\r\n").await?;
            return Ok(());
        }
        let upstream = TcpStream::connect(target).await?;
        client.write_all(b"HTTP/1.1 200 Connection Established\r\n\r\n").await?;
        upstream
    } else {
        // Forward the request to its origin, with the request target in origin form.
        let url = target.strip_prefix("http://").expect("absolute http URL");
        let (authority, path) = url.split_once('/').unwrap_or((url, ""));
        let mut upstream = TcpStream::connect(authority).await?;
        upstream
            .write_all(format!("{method} /{path} {version}\r\n{rest}").as_bytes())
            .await?;
        upstream
    };
    tokio::io::copy_bidirectional(&mut client, &mut upstream).await?;
    Ok(())
}

/// Start an HTTP server on `listener` that answers every request with `body`, and count the requests.
fn start_server(listener: std::net::TcpListener, body: impl Into<Bytes>) -> Arc<AtomicUsize> {
    let body = body.into();
    let listener = TcpListener::from_std(listener).unwrap();
    let requests = Arc::new(AtomicUsize::new(0));
    let count = requests.clone();
    tokio::spawn(async move {
        while let Ok((stream, _)) = listener.accept().await {
            let count = count.clone();
            let body = body.clone();
            tokio::spawn(async move {
                let service = service_fn(move |_: Request<hyper::body::Incoming>| {
                    count.fetch_add(1, Ordering::SeqCst);
                    let body = body.clone();
                    async move { Ok::<_, std::convert::Infallible>(Response::new(Full::new(body))) }
                });
                let _ = hyper::server::conn::http1::Builder::new()
                    .serve_connection(TokioIo::new(stream), service)
                    .await;
            });
        }
    });
    requests
}

const LIST_OBJECTS_RESPONSE: &str = r#"<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <Name>test-bucket</Name>
    <Prefix></Prefix>
    <KeyCount>0</KeyCount>
    <MaxKeys>1000</MaxKeys>
    <IsTruncated>false</IsTruncated>
</ListBucketResult>"#;

const ECS_CREDENTIALS_RESPONSE: &str = r#"{
    "AccessKeyId": "AKIAIOSFODNN7EXAMPLE",
    "SecretAccessKey": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
    "Token": "token",
    "Expiration": "2099-01-01T00:00:00Z"
}"#;

/// Remove the environment variables that could supply credentials or proxy settings, and hide the
/// user's AWS configuration files and IMDS.
///
/// # Safety
/// Only call this from a forked process, while no other thread is running.
unsafe fn isolate_environment(home: &Path) {
    for var in [
        "AWS_ACCESS_KEY_ID",
        "AWS_SECRET_ACCESS_KEY",
        "AWS_SESSION_TOKEN",
        "AWS_PROFILE",
        "AWS_DEFAULT_PROFILE",
        "AWS_ROLE_ARN",
        "AWS_WEB_IDENTITY_TOKEN_FILE",
        "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
        "AWS_CONTAINER_CREDENTIALS_FULL_URI",
        "AWS_CONTAINER_AUTHORIZATION_TOKEN",
        "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
        "AWS_REGION",
        "AWS_DEFAULT_REGION",
        "AWS_ENDPOINT_URL",
        "HTTP_PROXY",
        "HTTPS_PROXY",
        "NO_PROXY",
        "http_proxy",
        "https_proxy",
        "no_proxy",
    ] {
        // SAFETY: guaranteed by the caller.
        unsafe { std::env::remove_var(var) };
    }
    // SAFETY: guaranteed by the caller.
    unsafe {
        std::env::set_var("HOME", home);
        std::env::set_var("AWS_SHARED_CREDENTIALS_FILE", home.join("credentials"));
        std::env::set_var("AWS_CONFIG_FILE", home.join("config"));
        std::env::set_var("AWS_EC2_METADATA_DISABLED", "true");
    }
}

/// Write an AWS config file with a profile `proxy-test` that assumes `role_arn` with the given
/// source credentials.
fn write_role_profile(home: &Path, role_arn: &str, region: &str, credentials: (&str, &str, Option<&str>)) {
    let (access_key_id, secret_access_key, session_token) = credentials;
    let session_token = session_token
        .map(|token| format!("aws_session_token = {token}\n"))
        .unwrap_or_default();
    let config = format!(
        "[profile proxy-test]\nrole_arn = {role_arn}\nsource_profile = proxy-test-source\nregion = {region}\n\n\
         [profile proxy-test-source]\naws_access_key_id = {access_key_id}\n\
         aws_secret_access_key = {secret_access_key}\n{session_token}region = {region}\n"
    );
    std::fs::write(home.join("config"), config).expect("write config");
}

fn runtime() -> tokio::runtime::Runtime {
    tokio::runtime::Builder::new_multi_thread()
        .worker_threads(2)
        .enable_all()
        .build()
        .expect("tokio runtime")
}

/// A client for a fake S3 endpoint on `s3_addr`, with path-style addressing.
fn local_s3_client(s3_addr: SocketAddr, auth_config: S3ClientAuthConfig) -> S3CrtClient {
    let endpoint = Uri::new_from_str(&Allocator::default(), format!("http://{s3_addr}")).expect("parse uri");
    let endpoint_config = EndpointConfig::new("us-east-1")
        .addressing_style(AddressingStyle::Path)
        .endpoint(endpoint);
    let config = S3ClientConfig::new()
        .endpoint_config(endpoint_config)
        .auth_config(auth_config);
    S3CrtClient::new(config).expect("create client")
}

rusty_fork_test! {
    /// The profile provider sends its AssumeRole request to STS through the proxy. The proxy refuses
    /// the tunnel, so the request never leaves the host, and listing fails for lack of credentials.
    /// (If the request went direct instead, it would reach STS with example keys and fail too: the
    /// test then fails on the proxy's record.)
    #[test]
    fn assume_role_goes_through_https_proxy() {
        let home = tempfile::tempdir().unwrap();
        write_role_profile(
            home.path(),
            "arn:aws:iam::111122223333:role/proxy-test",
            "us-east-1",
            (ACCESS_KEY_ID, SECRET_ACCESS_KEY, None),
        );
        let (proxy_listener, proxy_addr) = bind_local();
        let (s3_listener, s3_addr) = bind_local();
        // SAFETY: forked process, and no other thread is running yet.
        unsafe {
            isolate_environment(home.path());
            std::env::set_var("HTTPS_PROXY", format!("http://{proxy_addr}"));
        }

        runtime().block_on(async {
            let proxy = RecordingProxy::start(proxy_listener, false);
            let s3_requests = start_server(s3_listener, LIST_OBJECTS_RESPONSE);

            let client = local_s3_client(s3_addr, S3ClientAuthConfig::Profile("proxy-test".to_owned()));
            let list = client.list_objects("test-bucket", None, "", 0, "");
            let result = tokio::time::timeout(Duration::from_secs(30), list)
                .await
                .expect("list should not time out");
            assert!(result.is_err(), "list should fail without credentials: {result:?}");
            assert_eq!(s3_requests.load(Ordering::SeqCst), 0, "no request should reach S3");

            let targets = proxy.targets();
            assert!(
                targets
                    .iter()
                    .any(|t| t.starts_with("CONNECT sts.") && t.ends_with(".amazonaws.com:443")),
                "the STS request should go through the proxy: {targets:?}"
            );
        });
    }

    /// The default chain fetches ECS credentials over plain HTTP through the proxy.
    #[test]
    fn ecs_credentials_go_through_http_proxy() {
        let home = tempfile::tempdir().unwrap();
        let (proxy_listener, proxy_addr) = bind_local();
        let (s3_listener, s3_addr) = bind_local();
        let (ecs_listener, ecs_addr) = bind_local();
        let ecs_url = format!("http://{ecs_addr}/credentials");
        // SAFETY: forked process, and no other thread is running yet.
        unsafe {
            isolate_environment(home.path());
            std::env::set_var("AWS_CONTAINER_CREDENTIALS_FULL_URI", &ecs_url);
            std::env::set_var("HTTP_PROXY", format!("http://{proxy_addr}"));
        }

        runtime().block_on(async {
            let proxy = RecordingProxy::start(proxy_listener, false);
            start_server(s3_listener, LIST_OBJECTS_RESPONSE);
            let ecs_requests = start_server(ecs_listener, ECS_CREDENTIALS_RESPONSE);

            let client = local_s3_client(s3_addr, S3ClientAuthConfig::Default);
            let list = client.list_objects("test-bucket", None, "", 0, "");
            tokio::time::timeout(Duration::from_secs(30), list)
                .await
                .expect("list should not time out")
                .expect("list should succeed");

            assert!(ecs_requests.load(Ordering::SeqCst) >= 1, "the ECS endpoint should be queried");
            let targets = proxy.targets();
            assert!(
                targets.contains(&format!("GET {ecs_url}")),
                "the ECS request should go through the proxy: {targets:?}"
            );
        });
    }

    /// Hosts in `NO_PROXY` are reached directly, so that, for example, the instance metadata and
    /// container credentials endpoints can be excluded from the proxy. Here `NO_PROXY` covers both
    /// the ECS endpoint and the fake S3 endpoint.
    #[test]
    fn ecs_credentials_bypass_proxy_for_no_proxy_hosts() {
        let home = tempfile::tempdir().unwrap();
        let (proxy_listener, proxy_addr) = bind_local();
        let (s3_listener, s3_addr) = bind_local();
        let (ecs_listener, ecs_addr) = bind_local();
        // SAFETY: forked process, and no other thread is running yet.
        unsafe {
            isolate_environment(home.path());
            std::env::set_var("AWS_CONTAINER_CREDENTIALS_FULL_URI", format!("http://{ecs_addr}/credentials"));
            std::env::set_var("HTTP_PROXY", format!("http://{proxy_addr}"));
            std::env::set_var("NO_PROXY", "127.0.0.1");
        }

        runtime().block_on(async {
            let proxy = RecordingProxy::start(proxy_listener, false);
            start_server(s3_listener, LIST_OBJECTS_RESPONSE);
            let ecs_requests = start_server(ecs_listener, ECS_CREDENTIALS_RESPONSE);

            let client = local_s3_client(s3_addr, S3ClientAuthConfig::Default);
            let list = client.list_objects("test-bucket", None, "", 0, "");
            tokio::time::timeout(Duration::from_secs(30), list)
                .await
                .expect("list should not time out")
                .expect("list should succeed");

            assert!(ecs_requests.load(Ordering::SeqCst) >= 1, "the ECS endpoint should be queried");
            assert_eq!(proxy.targets(), Vec::<String>::new(), "nothing should go through the proxy");
        });
    }
}

/// Tests that send their requests to S3 and STS through a proxy that opens the tunnels.
#[cfg(feature = "s3_tests")]
mod s3_tests {
    use aws_credential_types::Credentials;
    use aws_sdk_s3::primitives::{DateTime, DateTimeFormat};

    use super::*;
    use crate::common::creds::{get_sdk_default_chain_creds, get_subsession_iam_role};
    use crate::common::{get_test_bucket, get_test_endpoint_config, get_test_region, get_unique_test_prefix};

    /// The credentials of the test environment, resolved before the environment is isolated.
    fn test_credentials() -> Credentials {
        tokio::runtime::Builder::new_current_thread()
            .enable_all()
            .build()
            .unwrap()
            .block_on(get_sdk_default_chain_creds())
    }

    /// List the test bucket with a client that signs with `auth_config`.
    async fn list_test_bucket(auth_config: S3ClientAuthConfig, test_name: &str) {
        let config = S3ClientConfig::new()
            .endpoint_config(get_test_endpoint_config())
            .auth_config(auth_config);
        let client = S3CrtClient::new(config).expect("create client");
        let prefix = get_unique_test_prefix(test_name);
        tokio::time::timeout(
            Duration::from_secs(60),
            client.list_objects(&get_test_bucket(), None, "/", 10, &prefix),
        )
        .await
        .expect("list should not time out")
        .expect("list should succeed");
    }

    /// A tunnel to S3: the only tunnels the tests open are to STS and S3.
    fn is_s3_tunnel(target: &str) -> bool {
        target.starts_with("CONNECT ") && !target.starts_with("CONNECT sts.")
    }

    rusty_fork_test! {
        /// A client with a role profile assumes the role through the proxy, and lists the bucket
        /// with the role's credentials through the proxy.
        #[test]
        fn assume_role_and_list_through_proxy() {
            let credentials = test_credentials();
            let (role_arn, region) = (get_subsession_iam_role(), get_test_region());
            let home = tempfile::tempdir().unwrap();
            write_role_profile(
                home.path(),
                &role_arn,
                &region,
                (credentials.access_key_id(), credentials.secret_access_key(), credentials.session_token()),
            );
            let (proxy_listener, proxy_addr) = bind_local();
            // SAFETY: forked process. The runtime `test_credentials` used has shut down and joined
            // its threads, so no other thread is running.
            unsafe {
                isolate_environment(home.path());
                std::env::set_var("HTTPS_PROXY", format!("http://{proxy_addr}"));
            }

            runtime().block_on(async {
                let proxy = RecordingProxy::start(proxy_listener, true);

                let auth_config = S3ClientAuthConfig::Profile("proxy-test".to_owned());
                list_test_bucket(auth_config, "assume_role_and_list_through_proxy").await;

                let targets = proxy.targets();
                assert!(
                    targets.iter().any(|t| t.starts_with("CONNECT sts.")),
                    "the STS request should go through the proxy: {targets:?}"
                );
                assert!(
                    targets.iter().any(|t| is_s3_tunnel(t)),
                    "the S3 request should go through the proxy: {targets:?}"
                );
            });
        }

        /// A client with ECS credentials fetches them through the proxy, and lists the bucket
        /// through the proxy.
        #[test]
        fn ecs_credentials_and_list_through_proxy() {
            let credentials = test_credentials();
            let expiration = credentials
                .expiry()
                .map(|expiry| DateTime::from(expiry).fmt(DateTimeFormat::DateTime).unwrap())
                .unwrap_or_else(|| "2099-01-01T00:00:00Z".to_owned());
            let ecs_response = serde_json::json!({
                "AccessKeyId": credentials.access_key_id(),
                "SecretAccessKey": credentials.secret_access_key(),
                "Token": credentials.session_token().unwrap_or_default(),
                "Expiration": expiration,
            })
            .to_string();
            let home = tempfile::tempdir().unwrap();
            let (proxy_listener, proxy_addr) = bind_local();
            let (ecs_listener, ecs_addr) = bind_local();
            let ecs_url = format!("http://{ecs_addr}/credentials");
            // SAFETY: forked process. The runtime `test_credentials` used has shut down and joined
            // its threads, so no other thread is running.
            unsafe {
                isolate_environment(home.path());
                std::env::set_var("AWS_CONTAINER_CREDENTIALS_FULL_URI", &ecs_url);
                std::env::set_var("HTTP_PROXY", format!("http://{proxy_addr}"));
                std::env::set_var("HTTPS_PROXY", format!("http://{proxy_addr}"));
            }

            runtime().block_on(async {
                let proxy = RecordingProxy::start(proxy_listener, true);
                let ecs_requests = start_server(ecs_listener, ecs_response);

                list_test_bucket(S3ClientAuthConfig::Default, "ecs_credentials_and_list_through_proxy").await;

                assert!(ecs_requests.load(Ordering::SeqCst) >= 1, "the ECS endpoint should be queried");
                let targets = proxy.targets();
                assert!(
                    targets.contains(&format!("GET {ecs_url}")),
                    "the ECS request should go through the proxy: {targets:?}"
                );
                assert!(
                    targets.iter().any(|t| is_s3_tunnel(t)),
                    "the S3 request should go through the proxy: {targets:?}"
                );
            });
        }
    }
}
