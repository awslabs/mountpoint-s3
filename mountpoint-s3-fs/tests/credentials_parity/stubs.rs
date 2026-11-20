//! Local stubs for S3, IMDS, ECS, STS and the IAM Identity Center portal, at the addresses the
//! chains use by default.
//!
//! The suite runs in its own network namespace ([crate::netns]), so the stubs listen on the real
//! IMDS and ECS addresses, and the STS and SSO host names resolve to a TLS stub that serves both.

use std::convert::Infallible;
use std::future::Future;
use std::net::SocketAddr;
use std::path::Path;
use std::pin::Pin;
use std::sync::{Arc, Mutex};

use http_body_util::{BodyExt, Full};
use hyper::body::{Bytes, Incoming};
use hyper::service::service_fn;
use hyper::{Request as HttpRequest, Response};
use hyper_util::rt::TokioIo;
use rustls::ServerConfig;
use rustls::pki_types::pem::PemObject;
use rustls::pki_types::{CertificateDer, PrivateKeyDer};
use tokio::net::TcpListener;
use tokio_rustls::TlsAcceptor;

use crate::model::{Expiry, Imds, Request, Setup, TokenResponse};

pub const S3_ADDR: &str = "127.0.0.1:9000";
const IMDS_ADDR: &str = "169.254.169.254:80";
const ECS_HOST_ADDR: &str = "169.254.170.2:80";
const ECS_LOCAL_ADDR: &str = "127.0.0.1:8080";
const STS_ADDR: &str = "127.0.0.1:443";

/// The host names that resolve to the TLS stub (STS and the IAM Identity Center portal), and that
/// its certificate covers.
pub const TLS_HOSTS: &[&str] = &[
    "portal.sso.us-west-2.amazonaws.com",
    "sts.amazonaws.com",
    "sts.us-east-1.amazonaws.com",
    "sts.us-west-2.amazonaws.com",
    "sts.eu-west-1.amazonaws.com",
    "sts.custom.test",
];

const IMDS_TOKEN: &str = "imds-test-token";

type Body = Full<Bytes>;
type Handler = Arc<dyn Fn(Received) -> Pin<Box<dyn Future<Output = Response<Body>> + Send>> + Send + Sync>;

/// A request as received by a stub, with its body read.
pub struct Received {
    pub method: String,
    pub path: String,
    pub query: String,
    pub host: String,
    pub authorization: Option<String>,
    pub security_token: bool,
    pub imds_token: Option<String>,
    pub sso_token: Option<String>,
    pub body: String,
}

/// The signing key of each S3 request the S3 stub received, in order.
#[derive(Clone, Default)]
pub struct S3Log(Arc<Mutex<Vec<(String, bool)>>>);

impl S3Log {
    pub fn len(&self) -> usize {
        self.0.lock().unwrap().len()
    }

    pub fn since(&self, start: usize) -> Vec<(String, bool)> {
        self.0.lock().unwrap()[start..].to_vec()
    }
}

/// The requests received by the IMDS, ECS, STS and IAM Identity Center portal stubs, in order.
#[derive(Clone, Default)]
pub struct CredentialLog(Arc<Mutex<Vec<Request>>>);

impl CredentialLog {
    fn push(&self, request: Request) {
        self.0.lock().unwrap().push(request);
    }

    pub fn take(&self) -> Vec<Request> {
        std::mem::take(&mut *self.0.lock().unwrap())
    }
}

/// The IMDS stub's state, which scenario steps can change.
#[derive(Clone)]
pub struct ImdsControl(Arc<Mutex<ImdsState>>);

struct ImdsState {
    imds: Imds,
    outage: bool,
}

impl ImdsControl {
    pub fn set_key(&self, key: &'static str) {
        self.0.lock().unwrap().imds.key = key;
    }

    pub fn start_outage(&self) {
        self.0.lock().unwrap().outage = true;
    }
}

/// The running stubs of one scenario.
pub struct Stubs {
    pub s3: S3Log,
    pub credentials: CredentialLog,
    pub imds: Option<ImdsControl>,
}

/// Start the stubs `setup` asks for, and the S3 stub. `pki_dir` holds the STS stub's certificate.
pub async fn start(setup: &Setup, pki_dir: &Path) -> Stubs {
    let s3 = S3Log::default();
    let credentials = CredentialLog::default();

    serve(S3_ADDR, None, s3_handler(s3.clone())).await;

    let imds = match &setup.imds {
        Some(imds) => {
            let control = ImdsControl(Arc::new(Mutex::new(ImdsState {
                imds: imds.clone(),
                outage: false,
            })));
            serve(IMDS_ADDR, None, imds_handler(control.clone(), credentials.clone())).await;
            Some(control)
        }
        None => None,
    };

    if let Some(ecs) = &setup.ecs {
        for (addr, name) in [(ECS_HOST_ADDR, "169.254.170.2"), (ECS_LOCAL_ADDR, "127.0.0.1:8080")] {
            serve(addr, None, ecs_handler(name, ecs.key, credentials.clone())).await;
        }
    }

    if setup.sts.is_some() || setup.sso {
        let fail = setup.sts.as_ref().and_then(|sts| sts.fail);
        let tls = tls_acceptor(pki_dir);
        serve(STS_ADDR, Some(tls), tls_handler(fail, credentials.clone())).await;
    }

    Stubs { s3, credentials, imds }
}

async fn serve(addr: &str, tls: Option<TlsAcceptor>, handler: Handler) {
    let addr: SocketAddr = addr.parse().unwrap();
    let listener = TcpListener::bind(addr)
        .await
        .unwrap_or_else(|e| panic!("bind {addr}: {e}"));
    tokio::spawn(async move {
        loop {
            let Ok((stream, _)) = listener.accept().await else {
                break;
            };
            let handler = handler.clone();
            let tls = tls.clone();
            tokio::spawn(async move {
                let service = service_fn(move |request: HttpRequest<Incoming>| {
                    let handler = handler.clone();
                    async move { Ok::<_, Infallible>(handler(read(request).await).await) }
                });
                let builder = hyper::server::conn::http1::Builder::new();
                match tls {
                    Some(tls) => {
                        if let Ok(stream) = tls.accept(stream).await {
                            let _ = builder.serve_connection(TokioIo::new(stream), service).await;
                        }
                    }
                    None => {
                        let _ = builder.serve_connection(TokioIo::new(stream), service).await;
                    }
                }
            });
        }
    });
}

async fn read(request: HttpRequest<Incoming>) -> Received {
    let header = |name: &str| {
        request
            .headers()
            .get(name)
            .and_then(|value| value.to_str().ok())
            .map(str::to_string)
    };
    let received = Received {
        method: request.method().to_string(),
        path: request.uri().path().to_string(),
        query: request.uri().query().unwrap_or_default().to_string(),
        host: header("host").unwrap_or_default(),
        authorization: header("authorization"),
        security_token: header("x-amz-security-token").is_some(),
        imds_token: header("x-aws-ec2-metadata-token"),
        sso_token: header("x-amz-sso_bearer_token"),
        body: String::new(),
    };
    let body = request
        .into_body()
        .collect()
        .await
        .map(|b| b.to_bytes())
        .unwrap_or_default();
    Received {
        body: String::from_utf8_lossy(&body).into_owned(),
        ..received
    }
}

fn response(status: u16, body: impl Into<String>) -> Response<Body> {
    Response::builder()
        .status(status)
        .body(Full::new(Bytes::from(body.into())))
        .unwrap()
}

/// The access key ID in a SigV4 `Authorization` header.
fn signing_key(authorization: &str) -> Option<String> {
    let credential = authorization.split("Credential=").nth(1)?;
    Some(credential.split('/').next()?.to_string())
}

fn expiration(expiry: Expiry) -> String {
    let minutes = match expiry {
        Expiry::Later => 360,
        Expiry::Soon => 1,
    };
    let at = jiff::Timestamp::now() + jiff::SignedDuration::from_mins(minutes);
    at.strftime("%Y-%m-%dT%H:%M:%SZ").to_string()
}

fn s3_handler(log: S3Log) -> Handler {
    Arc::new(move |request| {
        let log = log.clone();
        Box::pin(async move {
            let key = request.authorization.as_deref().and_then(signing_key);
            log.0
                .lock()
                .unwrap()
                .push((key.unwrap_or_default(), request.security_token));
            response(
                200,
                r#"<?xml version="1.0" encoding="UTF-8"?>
<ListBucketResult xmlns="http://s3.amazonaws.com/doc/2006-03-01/">
    <Name>test-bucket</Name><Prefix></Prefix><KeyCount>0</KeyCount><MaxKeys>1000</MaxKeys>
    <IsTruncated>false</IsTruncated>
</ListBucketResult>"#,
            )
        })
    })
}

fn imds_handler(control: ImdsControl, log: CredentialLog) -> Handler {
    Arc::new(move |request| {
        let control = control.clone();
        let log = log.clone();
        Box::pin(async move {
            let (imds, outage) = {
                let state = control.0.lock().unwrap();
                (state.imds.clone(), state.outage)
            };
            if request.method == "PUT" && request.path == "/latest/api/token" {
                log.push(Request::ImdsToken);
                if outage {
                    return response(500, "");
                }
                return match imds.token {
                    TokenResponse::Token => {
                        let mut response = response(200, IMDS_TOKEN);
                        response
                            .headers_mut()
                            .insert("x-aws-ec2-metadata-token-ttl-seconds", "21600".parse().unwrap());
                        response
                    }
                    TokenResponse::Status(status) => response(status, ""),
                    TokenResponse::Hang => std::future::pending().await,
                };
            }
            let Some(path) = request.path.strip_prefix("/latest/meta-data/") else {
                return response(404, "");
            };
            log.push(Request::ImdsGet {
                path: path.to_string(),
                v2: request.imds_token.as_deref() == Some(IMDS_TOKEN),
            });
            if outage {
                return response(500, "");
            }
            let role_path = format!("iam/security-credentials/{}", imds.role);
            if path == "iam/security-credentials/" {
                response(200, imds.role)
            } else if path == role_path {
                response(
                    200,
                    format!(
                        r#"{{"Code":"Success","LastUpdated":"2026-01-01T00:00:00Z","Type":"AWS-HMAC","AccessKeyId":"{}","SecretAccessKey":"secret","Token":"token","Expiration":"{}"}}"#,
                        imds.key,
                        expiration(imds.expiry)
                    ),
                )
            } else {
                response(404, "")
            }
        })
    })
}

/// `name` identifies the listener in the recorded requests.
fn ecs_handler(name: &'static str, key: &'static str, log: CredentialLog) -> Handler {
    Arc::new(move |request| {
        let log = log.clone();
        Box::pin(async move {
            log.push(Request::Ecs {
                host: name.to_string(),
                path: request.path.clone(),
                auth: request.authorization.clone(),
            });
            response(
                200,
                format!(
                    r#"{{"AccessKeyId":"{key}","SecretAccessKey":"secret","Token":"token","Expiration":"{}"}}"#,
                    expiration(Expiry::Later)
                ),
            )
        })
    })
}

/// The TLS stub: the IAM Identity Center portal for its host names, and STS for the others.
fn tls_handler(sts_fail: Option<u16>, log: CredentialLog) -> Handler {
    let sts = sts_handler(sts_fail, log.clone());
    let sso = sso_handler(log);
    Arc::new(move |request| {
        if request.host.starts_with("portal.sso.") {
            sso(request)
        } else {
            sts(request)
        }
    })
}

/// The IAM Identity Center portal's `GetRoleCredentials`, which returns `SSO-<role>` as the key.
fn sso_handler(log: CredentialLog) -> Handler {
    Arc::new(move |request| {
        let log = log.clone();
        Box::pin(async move {
            let role = form(&request.query)
                .find(|(key, _)| key == "role_name")
                .map(|(_, value)| value)
                .unwrap_or_default();
            log.push(Request::Sso {
                role: role.clone(),
                token: request.sso_token.clone(),
            });
            let expiration = jiff::Timestamp::now() + jiff::SignedDuration::from_hours(6);
            response(
                200,
                format!(
                    r#"{{"roleCredentials":{{"accessKeyId":"SSO-{role}","secretAccessKey":"secret","sessionToken":"token","expiration":{}}}}}"#,
                    expiration.as_millisecond()
                ),
            )
        })
    })
}

fn sts_handler(fail: Option<u16>, log: CredentialLog) -> Handler {
    Arc::new(move |request| {
        let log = log.clone();
        Box::pin(async move {
            let params = form(&request.body).chain(form(&request.query)).collect::<Vec<_>>();
            let param = |name: &str| {
                params
                    .iter()
                    .find(|(key, _)| key == name)
                    .map(|(_, value)| value.clone())
                    .unwrap_or_default()
            };
            let action = param("Action");
            log.push(Request::Sts {
                host: request.host.trim_end_matches(":443").to_string(),
                action: action.clone(),
                signed_by: request.authorization.as_deref().and_then(signing_key),
            });
            if let Some(status) = fail {
                return response(
                    status,
                    r#"<ErrorResponse><Error><Type>Sender</Type><Code>AccessDenied</Code><Message>denied</Message></Error><RequestId>1</RequestId></ErrorResponse>"#,
                );
            }
            let role = param("RoleArn");
            let role = role.rsplit('/').next().unwrap_or_default();
            response(
                200,
                format!(
                    r#"<{action}Response xmlns="https://sts.amazonaws.com/doc/2011-06-15/"><{action}Result><Credentials><AccessKeyId>ROLE-{role}</AccessKeyId><SecretAccessKey>secret</SecretAccessKey><SessionToken>token</SessionToken><Expiration>{}</Expiration></Credentials><AssumedRoleUser><Arn>arn:aws:sts::123456789012:assumed-role/{role}/session</Arn><AssumedRoleId>AROA:session</AssumedRoleId></AssumedRoleUser></{action}Result><ResponseMetadata><RequestId>1</RequestId></ResponseMetadata></{action}Response>"#,
                    expiration(Expiry::Later)
                ),
            )
        })
    })
}

/// The pairs of an `application/x-www-form-urlencoded` string, decoded.
fn form(encoded: &str) -> impl Iterator<Item = (String, String)> + '_ {
    encoded.split('&').filter(|pair| !pair.is_empty()).map(|pair| {
        let (key, value) = pair.split_once('=').unwrap_or((pair, ""));
        (decode(key), decode(value))
    })
}

fn decode(encoded: &str) -> String {
    let bytes = encoded.as_bytes();
    let mut out = Vec::with_capacity(bytes.len());
    let mut i = 0;
    while i < bytes.len() {
        let hex = encoded
            .get(i + 1..i + 3)
            .and_then(|hex| u8::from_str_radix(hex, 16).ok());
        match (bytes[i], hex) {
            (b'+', _) => out.push(b' '),
            (b'%', Some(byte)) => {
                out.push(byte);
                i += 2;
            }
            (byte, _) => out.push(byte),
        }
        i += 1;
    }
    String::from_utf8_lossy(&out).into_owned()
}

fn tls_acceptor(pki_dir: &Path) -> TlsAcceptor {
    let _ = rustls::crypto::aws_lc_rs::default_provider().install_default();
    let cert = CertificateDer::from_pem_file(pki_dir.join("sts.pem")).expect("STS certificate");
    let key = PrivateKeyDer::from_pem_file(pki_dir.join("sts.key")).expect("STS key");
    let config = ServerConfig::builder()
        .with_no_client_auth()
        .with_single_cert(vec![cert], key)
        .expect("STS TLS config");
    TlsAcceptor::from(Arc::new(config))
}

/// Write the CA (`ca.pem`) and the STS stub's certificate and key to `dir`.
pub fn write_pki(dir: &Path) {
    use rcgen::{BasicConstraints, CertificateParams, DnType, IsCa, Issuer, KeyPair};

    let mut ca_params = CertificateParams::new(Vec::<String>::new()).unwrap();
    ca_params.is_ca = IsCa::Ca(BasicConstraints::Unconstrained);
    ca_params
        .distinguished_name
        .push(DnType::CommonName, "credentials parity test CA");
    let ca_key = KeyPair::generate().unwrap();
    let ca_cert = ca_params.self_signed(&ca_key).unwrap();
    let issuer = Issuer::new(ca_params, ca_key);

    let names = TLS_HOSTS.iter().map(|host| host.to_string()).collect::<Vec<_>>();
    let sts_key = KeyPair::generate().unwrap();
    let mut sts_params = CertificateParams::new(names).unwrap();
    sts_params
        .distinguished_name
        .push(DnType::CommonName, "sts.amazonaws.com");
    let sts_cert = sts_params.signed_by(&sts_key, &issuer).unwrap();

    std::fs::write(dir.join("ca.pem"), ca_cert.pem()).unwrap();
    std::fs::write(dir.join("sts.pem"), sts_cert.pem()).unwrap();
    std::fs::write(dir.join("sts.key"), sts_key.serialize_pem()).unwrap();
}
