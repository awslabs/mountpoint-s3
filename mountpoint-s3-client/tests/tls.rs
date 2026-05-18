use std::future::Future;
use std::io::Write;
use std::net::SocketAddr;
use std::path::{Path, PathBuf};
use std::pin::Pin;
use std::sync::Arc;

use http_body_util::Full;
use hyper::body::Bytes;
use hyper::service::service_fn;
use hyper::{Request, Response};
use hyper_util::rt::TokioIo;
use mountpoint_s3_client::config::{
    AddressingStyle, Allocator, EndpointConfig, S3ClientAuthConfig, S3ClientConfig, TlsConfig, Uri,
};
use mountpoint_s3_client::{NewClientError, S3CrtClient};
use rcgen::{BasicConstraints, CertificateParams, DnType, IsCa, Issuer, KeyPair};
use rustls::ServerConfig;
use rustls::pki_types::pem::PemObject;
use rustls::pki_types::{CertificateDer, PrivateKeyDer};
use rusty_fork::rusty_fork_test;
use tokio::net::TcpListener;
use tokio_rustls::TlsAcceptor;

// ---------------------------------------------------------------------------
// PKI helpers
// ---------------------------------------------------------------------------

pub struct TestPki {
    pub ca_pem: Vec<u8>,
    pub server_cert_pem: Vec<u8>,
    pub server_key_pem: Vec<u8>,
}

pub fn generate_test_pki() -> TestPki {
    let mut ca_params = CertificateParams::new(Vec::<String>::new()).expect("ca params");
    ca_params.is_ca = IsCa::Ca(BasicConstraints::Unconstrained);
    ca_params
        .distinguished_name
        .push(DnType::CommonName, "mountpoint-s3 tls test CA");
    let ca_key = KeyPair::generate().expect("ca keypair");
    let ca_cert = ca_params.self_signed(&ca_key).expect("sign CA");
    let ca_issuer = Issuer::new(ca_params, ca_key);

    let mut server_params =
        CertificateParams::new(vec!["localhost".to_string(), "127.0.0.1".to_string()]).expect("server params");
    server_params
        .distinguished_name
        .push(DnType::CommonName, "mountpoint-s3 tls test server");
    let server_key = KeyPair::generate().expect("server keypair");
    let server_cert = server_params.signed_by(&server_key, &ca_issuer).expect("sign server");

    TestPki {
        ca_pem: ca_cert.pem().into_bytes(),
        server_cert_pem: server_cert.pem().into_bytes(),
        server_key_pem: server_key.serialize_pem().into_bytes(),
    }
}

/// A well-formed but unrelated CA, for testing wrong-bundle behaviour.
pub fn generate_independent_ca_pem() -> Vec<u8> {
    let mut ca_params = CertificateParams::new(Vec::<String>::new()).expect("ca params");
    ca_params.is_ca = IsCa::Ca(BasicConstraints::Unconstrained);
    ca_params
        .distinguished_name
        .push(DnType::CommonName, "mountpoint-s3 unrelated test CA");
    let ca_key = KeyPair::generate().expect("ca keypair");
    let ca_cert = ca_params.self_signed(&ca_key).expect("sign CA");
    ca_cert.pem().into_bytes()
}

fn write_pem(dir: &Path, name: &str, contents: &[u8]) -> PathBuf {
    let path = dir.join(name);
    let mut file = std::fs::File::create(&path).expect("create pem");
    file.write_all(contents).expect("write pem");
    path
}

fn parse_cert_der(pem: &[u8]) -> CertificateDer<'static> {
    CertificateDer::from_pem_slice(pem).expect("parse cert")
}

fn parse_key_der(pem: &[u8]) -> PrivateKeyDer<'static> {
    PrivateKeyDer::from_pem_slice(pem).expect("parse private key")
}

// ---------------------------------------------------------------------------
// TestTlsServer - minimal in-process HTTPS server for TLS integration tests.
// ---------------------------------------------------------------------------

type HandlerFn = Arc<
    dyn Fn(
            Request<hyper::body::Incoming>,
        ) -> Pin<Box<dyn Future<Output = Result<Response<Full<Bytes>>, std::convert::Infallible>> + Send>>
        + Send
        + Sync,
>;

/// Canned `ListBucketResult` XML response.
pub fn default_list_objects_handler() -> HandlerFn {
    Arc::new(|_req| {
        Box::pin(async move {
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
            Ok(Response::builder()
                .status(200)
                .header("Content-Type", "application/xml")
                .body(Full::new(body))
                .expect("build response"))
        })
    })
}

/// Static ECS container-credentials JSON, plus a counter of requests received.
pub fn ecs_credentials_handler() -> (HandlerFn, Arc<std::sync::atomic::AtomicUsize>) {
    let counter = Arc::new(std::sync::atomic::AtomicUsize::new(0));
    let counter_for_handler = counter.clone();
    let handler: HandlerFn = Arc::new(move |_req| {
        let counter = counter_for_handler.clone();
        Box::pin(async move {
            counter.fetch_add(1, std::sync::atomic::Ordering::SeqCst);
            let body = Bytes::from_static(
                br#"{"AccessKeyId":"AKIAEXAMPLE","SecretAccessKey":"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY","Token":"FwoGZXIvYXdzEXAMPLE","Expiration":"2099-01-01T00:00:00Z"}"#,
            );
            Ok(Response::builder()
                .status(200)
                .header("Content-Type", "application/json")
                .body(Full::new(body))
                .expect("build response"))
        })
    });
    (handler, counter)
}

fn install_crypto_provider() {
    let _ = rustls::crypto::aws_lc_rs::default_provider().install_default();
}

/// Spawn an HTTPS listener on a random loopback port. Returns its bound address.
pub async fn spawn_tls_server(
    cert_chain: Vec<CertificateDer<'static>>,
    private_key: PrivateKeyDer<'static>,
    handler: HandlerFn,
) -> SocketAddr {
    install_crypto_provider();

    let config = ServerConfig::builder()
        .with_no_client_auth()
        .with_single_cert(cert_chain, private_key)
        .expect("build server config");

    let acceptor = TlsAcceptor::from(Arc::new(config));
    let listener = TcpListener::bind("127.0.0.1:0").await.expect("bind");
    let addr = listener.local_addr().expect("local addr");

    tokio::spawn(async move {
        loop {
            let (stream, _peer) = match listener.accept().await {
                Ok(pair) => pair,
                Err(_) => break,
            };
            let acceptor = acceptor.clone();
            let handler = handler.clone();
            tokio::spawn(async move {
                let tls_stream = match acceptor.accept(stream).await {
                    Ok(s) => s,
                    Err(_) => return,
                };
                let io = TokioIo::new(tls_stream);
                let _ = hyper::server::conn::http1::Builder::new()
                    .serve_connection(io, service_fn(move |req| (handler)(req)))
                    .await;
            });
        }
    });

    addr
}

pub async fn spawn_s3_test_server(pki: &TestPki) -> SocketAddr {
    let cert = parse_cert_der(&pki.server_cert_pem);
    let key = parse_key_der(&pki.server_key_pem);
    spawn_tls_server(vec![cert], key, default_list_objects_handler()).await
}

// ---------------------------------------------------------------------------
// Client builder used by tests
// ---------------------------------------------------------------------------

fn make_client(endpoint: SocketAddr, tls_config: Option<TlsConfig>) -> S3CrtClient {
    let uri = format!("https://{endpoint}");
    let endpoint_uri = Uri::new_from_str(&Allocator::default(), uri).expect("parse uri");
    let endpoint_config = EndpointConfig::new("us-east-1")
        .addressing_style(AddressingStyle::Path)
        .endpoint(endpoint_uri);
    let mut client_config = S3ClientConfig::new()
        .endpoint_config(endpoint_config)
        .auth_config(S3ClientAuthConfig::NoSigning);
    if let Some(tls) = tls_config {
        client_config = client_config.tls_config(tls);
    }
    S3CrtClient::new(client_config).expect("build S3CrtClient")
}

fn test_pki_in_tempdir() -> (tempfile::TempDir, PathBuf, TestPki) {
    let pki = generate_test_pki();
    let tmp = tempfile::tempdir().expect("tempdir");
    let ca_path = write_pem(tmp.path(), "ca.pem", &pki.ca_pem);
    (tmp, ca_path, pki)
}

/// Match on broad keywords; CRT TLS error text differs across platforms (s2n on Linux,
/// Secure Transport on macOS).
fn is_tls_error(err: &dyn std::fmt::Debug) -> bool {
    let rendered = format!("{err:?}").to_lowercase();
    rendered.contains("tls")
        || rendered.contains("certificate")
        || rendered.contains("handshake")
        || rendered.contains("peer")
        || rendered.contains("trust")
        || rendered.contains("ssl")
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

/// Matching CA bundle → handshake succeeds → list completes.
#[tokio::test(flavor = "multi_thread", worker_threads = 2)]
async fn list_objects_over_https_with_ca_bundle_succeeds() {
    use mountpoint_s3_client::ObjectClient;

    let (_tmp, ca_path, pki) = test_pki_in_tempdir();
    let addr = spawn_s3_test_server(&pki).await;

    let tls = TlsConfig::new().with_trust_store_path(&ca_path);
    let client = make_client(addr, Some(tls));

    client
        .list_objects("test-bucket", None, "", 0, "")
        .await
        .expect("list should succeed with matching CA bundle");
}

/// Wrong CA bundle → handshake fails. Guards against the bundle being silently appended to
/// the system trust store instead of replacing it.
#[tokio::test(flavor = "multi_thread", worker_threads = 2)]
async fn list_objects_over_https_with_wrong_ca_bundle_fails_handshake() {
    use mountpoint_s3_client::ObjectClient;

    let (_tmp, _ca_path, pki) = test_pki_in_tempdir();
    let addr = spawn_s3_test_server(&pki).await;

    let wrong_ca_pem = generate_independent_ca_pem();
    let wrong_tmp = tempfile::tempdir().expect("tempdir");
    let wrong_ca_path = write_pem(wrong_tmp.path(), "wrong-ca.pem", &wrong_ca_pem);

    let tls = TlsConfig::new().with_trust_store_path(&wrong_ca_path);
    let client = make_client(addr, Some(tls));

    let err = client
        .list_objects("test-bucket", None, "", 0, "")
        .await
        .expect_err("list should fail when the supplied CA did not sign the server cert");
    assert!(
        is_tls_error(&err),
        "expected a TLS-related error from a mismatched CA, got: {err:?}"
    );
}

/// Empty PEM passes `validate()` but the CRT rejects it → `NewClientError::TlsConfigurationError`.
#[test]
fn empty_ca_bundle_file_fails_client_construction() {
    let tmp = tempfile::tempdir().expect("tempdir");
    let empty = write_pem(tmp.path(), "empty.pem", &[]);

    let endpoint_uri = Uri::new_from_str(&Allocator::default(), "https://127.0.0.1:1").expect("parse uri");
    let endpoint_config = EndpointConfig::new("us-east-1")
        .addressing_style(AddressingStyle::Path)
        .endpoint(endpoint_uri);
    let config = S3ClientConfig::new()
        .endpoint_config(endpoint_config)
        .auth_config(S3ClientAuthConfig::NoSigning)
        .tls_config(TlsConfig::new().with_trust_store_path(&empty));

    let err = S3CrtClient::new(config).expect_err("client build must fail with an empty PEM");
    assert!(
        matches!(err, NewClientError::TlsConfigurationError(_)),
        "expected NewClientError::TlsConfigurationError for an empty PEM, got: {err:?}"
    );
}

// Proves the custom TlsContext is plumbed into the credentials chain (not just the S3 client).
// We can't redirect STS to loopback (CRT hard-codes `sts.{region}.amazonaws.com`), so we mock
// the ECS credentials endpoint via `AWS_CONTAINER_CREDENTIALS_FULL_URI` — same code path
// (`tls_ctx` → default chain → HTTPS sub-provider). Env vars are process-global, hence the fork.

rusty_fork_test! {
    #[test]
    fn credentials_chain_over_https_uses_custom_ca_bundle() {
        use mountpoint_s3_client::ObjectClient;
        use std::time::Duration;

        // Force the chain to skip every provider before ECS — otherwise a leaked
        // `~/.aws/credentials` or IMDS on EC2 could satisfy it without our mock being hit.
        let isolated_home = tempfile::tempdir().expect("isolated home");
        // SAFETY: forked subprocess, single-threaded until CRT is initialized.
        unsafe {
            for var in [
                "AWS_ACCESS_KEY_ID",
                "AWS_SECRET_ACCESS_KEY",
                "AWS_SESSION_TOKEN",
                "AWS_PROFILE",
                "AWS_ROLE_ARN",
                "AWS_WEB_IDENTITY_TOKEN_FILE",
                "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI",
                "AWS_CONTAINER_AUTHORIZATION_TOKEN",
                "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE",
                "AWS_REGION",
                "AWS_DEFAULT_REGION",
                "AWS_CA_BUNDLE",
                "HTTP_PROXY",
                "HTTPS_PROXY",
                "NO_PROXY",
                "http_proxy",
                "https_proxy",
                "no_proxy",
            ] {
                std::env::remove_var(var);
            }

            // Hide `~/.aws/...` (credentials, config, SSO cache).
            std::env::set_var("HOME", isolated_home.path());
            std::env::set_var(
                "AWS_SHARED_CREDENTIALS_FILE",
                isolated_home.path().join("nonexistent-credentials"),
            );
            std::env::set_var(
                "AWS_CONFIG_FILE",
                isolated_home.path().join("nonexistent-config"),
            );
            // Disable IMDS so EC2 runners don't satisfy the chain after ECS.
            std::env::set_var("AWS_EC2_METADATA_DISABLED", "true");
        }

        let rt = tokio::runtime::Builder::new_multi_thread()
            .worker_threads(2)
            .enable_all()
            .build()
            .expect("tokio runtime");

        rt.block_on(async {
            // Same CA signs both the S3 mock and the ECS creds mock, so one bundle covers both.
            let pki = generate_test_pki();
            let tmp = tempfile::tempdir().expect("tempdir");
            let ca_path = write_pem(tmp.path(), "ca.pem", &pki.ca_pem);

            let s3_addr = spawn_s3_test_server(&pki).await;

            let creds_cert = parse_cert_der(&pki.server_cert_pem);
            let creds_key = parse_key_der(&pki.server_key_pem);
            let (creds_handler, creds_request_count) = ecs_credentials_handler();
            let creds_addr = spawn_tls_server(vec![creds_cert], creds_key, creds_handler).await;

            // SAFETY: forked subprocess.
            unsafe {
                std::env::set_var(
                    "AWS_CONTAINER_CREDENTIALS_FULL_URI",
                    format!("https://127.0.0.1:{}/creds", creds_addr.port()),
                );
            }

            let endpoint_uri =
                Uri::new_from_str(&Allocator::default(), format!("https://{s3_addr}")).expect("parse uri");
            let endpoint_config = EndpointConfig::new("us-east-1")
                .addressing_style(AddressingStyle::Path)
                .endpoint(endpoint_uri);
            let config = S3ClientConfig::new()
                .endpoint_config(endpoint_config)
                .auth_config(S3ClientAuthConfig::Default)
                .tls_config(TlsConfig::new().with_trust_store_path(&ca_path));
            let client_with_bundle = S3CrtClient::new(config).expect("build client with bundle");

            let list_with_bundle = tokio::time::timeout(
                Duration::from_secs(30),
                client_with_bundle.list_objects("test-bucket", None, "", 0, ""),
            )
            .await
            .expect("list should not time out when CA bundle trusts creds server");
            list_with_bundle.expect("list should succeed when CA bundle trusts creds server");

            // S3 list succeeded *and* the chain hit our mock ECS endpoint. The mock is signed
            // by a CA the system trust store does not contain, so the handshake could only
            // succeed via the custom TlsContext — proving propagation into the credentials chain.
            // Without this counter check, a leaked credential source could satisfy the chain
            // first and the success above would be misleading.
            assert!(
                creds_request_count.load(std::sync::atomic::Ordering::SeqCst) >= 1,
                "credentials chain never reached the mock ECS endpoint — test isolation is leaking",
            );
        });
    }
}
