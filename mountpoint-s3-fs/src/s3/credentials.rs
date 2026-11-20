//! AWS credentials resolved by the AWS SDK for Rust and shared by the CRT and SDK clients.
//!
//! ```text
//! CRT S3 client ──► delegate provider ──┐
//!                   (auth_config)       ├──► SharedCredentials ──► SdkCredentialsSource, an aws-config chain:
//! SDK S3 client ────────────────────────┘    (one cache)             1. environment variables
//!   (SdkClientAuth::SharedCredentials)                               2. profile (shared files)
//!                                                                    3. web identity
//!                                                                    4. container credentials
//!                                                                    5. instance metadata
//! ```
//!
//! With [SdkCredentialsChain::Default], the chain tries the sources in this order; with
//! [SdkCredentialsChain::Profile], it uses only the profile.
//!
//! [SdkCredentialsSource] runs an `aws-config` credentials chain. [SharedCredentials] caches its
//! credentials, fetched on a Tokio runtime given as a [Handle], and refreshes them 5 minutes
//! before they expire, or every 15 minutes if they don't expire, with one fetch from the chain per
//! refresh. The CRT client reads the cache through [SharedCredentials::auth_config], and an SDK
//! client through [SdkClientAuth::SharedCredentials](super::sdk_client::SdkClientAuth::SharedCredentials).

use std::fmt::Debug;
use std::path::PathBuf;
use std::sync::OnceLock;
use std::time::Duration;

use aws_config::ecs::EcsCredentialsProvider;
use aws_config::environment::EnvironmentVariableCredentialsProvider;
use aws_config::imds::credentials::ImdsCredentialsProvider;
use aws_config::meta::credentials::CredentialsProviderChain;
use aws_config::profile::{ProfileFileCredentialsProvider, ProfileFileLoadError};
use aws_config::provider_config::ProviderConfig;
use aws_config::web_identity_token::WebIdentityTokenCredentialsProvider;
use aws_credential_types::provider::error::CredentialsError;
use aws_credential_types::provider::{self, ProvideCredentials, SharedCredentialsProvider};
use aws_sdk_s3::config::SharedHttpClient;
use aws_smithy_http_client::ConnectorBuilder;
use aws_smithy_http_client::proxy::ProxyConfig;
use aws_smithy_http_client::tls::{self, TlsContext, TrustStore};
use aws_types::os_shim_internal::{Env, Fs};
use mountpoint_s3_client::config::TlsConfig;
use mountpoint_s3_client::error::CrtError;
use thiserror::Error;
use tracing::debug;

use crate::sync::Arc;
#[cfg(doc)]
use tokio::runtime::Handle;

mod cache;

pub use cache::{LoadCredentialsError, SharedCredentials};

/// How long a query to the SDK credentials chain may take before it fails. Requests waiting to be
/// signed wait for the query, so a source that hangs (such as a stuck `credential_process`) must
/// not hold them forever. Long enough for the slower sources to finish their own retries: the SDK's
/// instance metadata client alone allows 30 seconds per operation, and a role's source credentials
/// may come from it before the call to STS.
///
/// A timed-out `credential_process` keeps running: the SDK doesn't kill it.
pub const DEFAULT_FETCH_TIMEOUT: Duration = Duration::from_secs(60);

/// Which credentials chain [SdkCredentialsSource] runs.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum SdkCredentialsChain {
    /// The default chain: environment variables, the shared config and credentials files (with the
    /// profile selected by `AWS_PROFILE`), web identity, then the ECS container endpoint or EC2
    /// instance metadata.
    Default,
    /// Only the given profile from the shared config and credentials files. Environment
    /// variables, web identity, ECS and instance metadata are used only through the profile's own
    /// settings (such as `credential_source`).
    Profile(String),
}

/// Configuration of an [SdkCredentialsSource].
#[derive(Debug, Clone)]
pub struct SdkCredentialsConfig {
    chain: SdkCredentialsChain,
    trust_store_path: Option<PathBuf>,
    fetch_timeout: Duration,
}

impl SdkCredentialsConfig {
    /// Configuration for the given chain, with the default trust store and
    /// [DEFAULT_FETCH_TIMEOUT].
    pub fn new(chain: SdkCredentialsChain) -> Self {
        Self {
            chain,
            trust_store_path: None,
            fetch_timeout: DEFAULT_FETCH_TIMEOUT,
        }
    }

    /// The TLS configuration for the credential providers' HTTPS requests. Its CA bundle, if any,
    /// replaces the default trust store.
    #[must_use = "SdkCredentialsConfig follows a builder pattern"]
    pub fn tls_config(mut self, tls_config: &TlsConfig) -> Self {
        self.trust_store_path = tls_config.trust_store_path.clone();
        self
    }

    /// How long a query to the chain may take before it fails.
    #[must_use = "SdkCredentialsConfig follows a builder pattern"]
    pub fn fetch_timeout(mut self, fetch_timeout: Duration) -> Self {
        self.fetch_timeout = fetch_timeout;
        self
    }
}

/// Error creating an [SdkCredentialsSource] or [SharedCredentials].
#[derive(Debug, Error)]
#[non_exhaustive]
pub enum SdkCredentialsError {
    /// The profile is in neither the shared config file nor the shared credentials file.
    #[error("invalid AWS credentials: profile {0:?} not found in the shared AWS config and credentials files")]
    ProfileNotFound(String),
    #[error("invalid AWS credentials: failed to load the shared AWS config and credentials files")]
    ProfileFiles(#[source] ProfileFileLoadError),
    #[error("failed to read the CA bundle {path:?} for the credential providers")]
    CaBundle {
        path: PathBuf,
        #[source]
        source: std::io::Error,
    },
    #[error("invalid CA bundle {path:?} for the credential providers: {reason}")]
    InvalidCaBundle { path: PathBuf, reason: String },
    #[error("invalid TLS configuration for the credential providers")]
    Tls(#[source] aws_smithy_http_client::HttpClientError),
    #[error("failed to create the credentials provider")]
    Provider(#[source] CrtError),
}

/// A credentials provider that resolves credentials with an `aws-config` credentials chain.
///
/// Each query fails after the configured fetch timeout. The chain doesn't cache credentials: put
/// [SharedCredentials] in front of it. Its providers need a Tokio runtime with the I/O and time
/// drivers enabled.
///
/// The chain is built on the first query and reused after that. Mountpoint's S3 endpoint doesn't
/// apply to its providers.
#[derive(Clone)]
pub struct SdkCredentialsSource {
    inner: Arc<SourceInner>,
}

struct SourceInner {
    config: SdkCredentialsConfig,
    http_client: Option<SharedHttpClient>,
    chain: OnceLock<SharedCredentialsProvider>,
}

impl SdkCredentialsSource {
    /// Create a source for `config`.
    ///
    /// For [SdkCredentialsChain::Profile], checks that the profile exists. Reads the shared files
    /// and the CA bundle with blocking I/O.
    pub async fn new(config: SdkCredentialsConfig) -> Result<Self, SdkCredentialsError> {
        if let SdkCredentialsChain::Profile(name) = &config.chain {
            check_profile_exists(name).await?;
        }
        let http_client = config.trust_store_path.as_ref().map(https_client).transpose()?;
        Ok(Self {
            inner: Arc::new(SourceInner {
                config,
                http_client,
                chain: OnceLock::new(),
            }),
        })
    }
}

impl Debug for SdkCredentialsSource {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("SdkCredentialsSource")
            .field("config", &self.inner.config)
            .finish_non_exhaustive()
    }
}

impl ProvideCredentials for SdkCredentialsSource {
    fn provide_credentials<'a>(&'a self) -> provider::future::ProvideCredentials<'a>
    where
        Self: 'a,
    {
        provider::future::ProvideCredentials::new(self.inner.fetch())
    }
}

impl SourceInner {
    /// Query the chain, with the fetch timeout.
    async fn fetch(&self) -> provider::Result {
        let chain = self.chain.get_or_init(|| self.build_chain());
        tokio::time::timeout(self.config.fetch_timeout, chain.provide_credentials())
            .await
            .unwrap_or_else(|_| Err(CredentialsError::provider_timed_out(self.config.fetch_timeout)))
    }

    fn build_chain(&self) -> SharedCredentialsProvider {
        debug!(chain = ?self.config.chain, "building the SDK credentials chain");
        let mut provider_config = ProviderConfig::without_region();
        if let Some(http_client) = &self.http_client {
            provider_config = provider_config.with_http_client(http_client.clone());
        }
        match &self.config.chain {
            SdkCredentialsChain::Default => {
                let chain =
                    CredentialsProviderChain::first_try("Environment", EnvironmentVariableCredentialsProvider::new())
                        .or_else(
                            "Profile",
                            ProfileFileCredentialsProvider::builder()
                                .configure(&provider_config)
                                .build(),
                        )
                        .or_else(
                            "WebIdentityToken",
                            WebIdentityTokenCredentialsProvider::builder()
                                .configure(&provider_config)
                                .build(),
                        )
                        .or_else(
                            "EcsContainer",
                            EcsCredentialsProvider::builder().configure(&provider_config).build(),
                        )
                        .or_else(
                            "Ec2InstanceMetadata",
                            ImdsCredentialsProvider::builder().configure(&provider_config).build(),
                        );
                SharedCredentialsProvider::new(chain)
            }
            SdkCredentialsChain::Profile(name) => SharedCredentialsProvider::new(
                ProfileFileCredentialsProvider::builder()
                    .configure(&provider_config)
                    .profile_name(name)
                    .build(),
            ),
        }
    }
}

/// Check that a profile is in the shared config or credentials file, which the SDK would only
/// notice on the first query.
async fn check_profile_exists(name: &str) -> Result<(), SdkCredentialsError> {
    let profiles = aws_config::profile::load(&Fs::real(), &Env::real(), &Default::default(), None)
        .await
        .map_err(SdkCredentialsError::ProfileFiles)?;
    if profiles.get_profile(name).is_none() {
        return Err(SdkCredentialsError::ProfileNotFound(name.to_owned()));
    }
    Ok(())
}

/// An HTTPS client whose trust store is only the certificates in the given PEM file, and which uses
/// the proxy environment variables.
fn https_client(path: &PathBuf) -> Result<SharedHttpClient, SdkCredentialsError> {
    let pem = std::fs::read(path).map_err(|source| SdkCredentialsError::CaBundle {
        path: path.clone(),
        source,
    })?;
    check_ca_bundle(&pem).map_err(|reason| SdkCredentialsError::InvalidCaBundle {
        path: path.clone(),
        reason,
    })?;
    let trust_store = TrustStore::empty().with_native_roots(false).with_pem_certificate(pem);
    let tls_context = TlsContext::builder()
        .with_trust_store(trust_store)
        .build()
        .map_err(SdkCredentialsError::Tls)?;
    // As in the SDK's default HTTPS client, the proxy environment variables apply.
    Ok(
        aws_smithy_http_client::Builder::new().build_with_connector_fn(move |settings, runtime_components| {
            let mut builder = ConnectorBuilder::default()
                .tls_provider(tls::Provider::Rustls(tls::rustls_provider::CryptoMode::AwsLc))
                .tls_context(tls_context.clone());
            builder.set_connector_settings(settings.cloned());
            if let Some(components) = runtime_components {
                builder.set_sleep_impl(components.sleep_impl());
            }
            builder.set_proxy_config(Some(ProxyConfig::from_env()));
            builder.build()
        }),
    )
}

/// Check that a PEM CA bundle holds at least one certificate and that every certificate in it can
/// be a trust anchor. The HTTPS client parses the bundle only when it first connects, and panics if
/// it can't, which would fail every query.
fn check_ca_bundle(pem: &[u8]) -> Result<(), String> {
    use rustls::pki_types::CertificateDer;
    use rustls::pki_types::pem::PemObject as _;

    let mut roots = rustls::RootCertStore::empty();
    for certificate in CertificateDer::pem_slice_iter(pem) {
        let certificate = certificate.map_err(|e| e.to_string())?;
        roots.add(certificate).map_err(|e| e.to_string())?;
    }
    if roots.is_empty() {
        return Err("no certificates found".to_owned());
    }
    Ok(())
}

#[cfg(test)]
mod tests {
    use std::io::Write as _;
    use std::os::unix::fs::PermissionsExt as _;
    use std::path::Path;
    use std::time::Instant;

    use mountpoint_s3_client::config::Credentials;
    use rusty_fork::rusty_fork_test;

    use super::*;
    use tokio::runtime::{Builder, Handle, Runtime};

    const ENV_ACCESS_KEY_ID: &str = "AKIAENVIRONMENT";
    const PROCESS_ACCESS_KEY_ID: &str = "AKIACREDPROCESS";

    /// Point every credential source at `dir` or turn it off: no `AWS_*` variables from the test's
    /// environment, shared files and `HOME` in `dir`, and no instance metadata.
    ///
    /// Only call it in a forked test process, which has a single thread at this point.
    fn isolate_environment(dir: &Path) {
        for (key, _) in std::env::vars_os() {
            if key.to_string_lossy().starts_with("AWS_") {
                // SAFETY: the test runs in its own forked, single-threaded process.
                unsafe { std::env::remove_var(key) };
            }
        }
        // SAFETY: the test runs in its own forked, single-threaded process.
        unsafe {
            std::env::set_var("HOME", dir);
            std::env::set_var("AWS_CONFIG_FILE", dir.join("config"));
            std::env::set_var("AWS_SHARED_CREDENTIALS_FILE", dir.join("credentials"));
            std::env::set_var("AWS_EC2_METADATA_DISABLED", "true");
        }
    }

    fn set_environment_credentials() {
        // SAFETY: the test runs in its own forked, single-threaded process.
        unsafe {
            std::env::set_var("AWS_ACCESS_KEY_ID", ENV_ACCESS_KEY_ID);
            std::env::set_var("AWS_SECRET_ACCESS_KEY", "env-secret");
            std::env::set_var("AWS_SESSION_TOKEN", "env-token");
        }
    }

    fn write_file(path: &Path, contents: &str) {
        std::fs::write(path, contents).unwrap();
    }

    /// Write a `credential_process` script that appends a line to `count_file` on every run, and
    /// after `delay_secs`, prints credentials that expire in an hour.
    fn write_credential_process(dir: &Path, count_file: &Path, delay_secs: u32) -> PathBuf {
        let expiration = time::OffsetDateTime::now_utc() + time::Duration::hours(1);
        let expiration = expiration
            .format(&time::format_description::well_known::Rfc3339)
            .unwrap();
        let script = dir.join("credential-process.sh");
        let mut file = std::fs::File::create(&script).unwrap();
        writeln!(
            file,
            r#"#!/bin/sh
echo run >> "{count}"
sleep {delay_secs}
echo '{{"Version": 1, "AccessKeyId": "{PROCESS_ACCESS_KEY_ID}", "SecretAccessKey": "process-secret", "SessionToken": "process-token", "Expiration": "{expiration}"}}'"#,
            count = count_file.display(),
        )
        .unwrap();
        drop(file);
        std::fs::set_permissions(&script, std::fs::Permissions::from_mode(0o755)).unwrap();
        script
    }

    fn runs(count_file: &Path) -> usize {
        std::fs::read_to_string(count_file).map_or(0, |s| s.lines().count())
    }

    /// A multi-thread runtime for the code under test. Build it only after setting up the
    /// environment: it starts threads.
    fn new_runtime() -> Runtime {
        Builder::new_multi_thread().enable_all().build().unwrap()
    }

    /// A handle to a runtime that lives until the test process exits. Build it only after setting
    /// up the environment: it starts threads.
    fn test_handle() -> Handle {
        static RUNTIME: OnceLock<Runtime> = OnceLock::new();
        RUNTIME.get_or_init(new_runtime).handle().clone()
    }

    fn shared_credentials(config: SdkCredentialsConfig) -> (SharedCredentials, Runtime) {
        let tokio_runtime = new_runtime();
        let credentials = tokio_runtime
            .block_on(SharedCredentials::from_sdk(config, tokio_runtime.handle().clone()))
            .unwrap();
        (credentials, tokio_runtime)
    }

    fn query(credentials: &SharedCredentials) -> Result<Credentials, CrtError> {
        futures::executor::block_on(credentials.provider().get_credentials())
    }

    rusty_fork_test! {
        #[test]
        fn query_times_out() {
            let dir = tempfile::tempdir().unwrap();
            isolate_environment(dir.path());
            let count_file = dir.path().join("runs");
            let script = write_credential_process(dir.path(), &count_file, 30);
            write_file(&dir.path().join("config"), &format!("[default]\ncredential_process = {}\n", script.display()));

            let config = SdkCredentialsConfig::new(SdkCredentialsChain::Default).fetch_timeout(Duration::from_millis(500));
            let (credentials, _tokio_runtime) = shared_credentials(config);
            let start = Instant::now();
            query(&credentials).expect_err("the query should time out");
            assert!(start.elapsed() < Duration::from_secs(20), "took {:?}", start.elapsed());
        }

        #[test]
        fn query_fails_after_runtime_shutdown() {
            let dir = tempfile::tempdir().unwrap();
            isolate_environment(dir.path());
            set_environment_credentials();

            let (credentials, tokio_runtime) = shared_credentials(SdkCredentialsConfig::new(SdkCredentialsChain::Default));
            tokio_runtime.shutdown_background();
            query(&credentials).expect_err("the runtime is shut down");
        }

        #[test]
        fn query_fails_when_runtime_shuts_down_during_query() {
            let dir = tempfile::tempdir().unwrap();
            isolate_environment(dir.path());
            let count_file = dir.path().join("runs");
            let script = write_credential_process(dir.path(), &count_file, 30);
            write_file(&dir.path().join("config"), &format!("[default]\ncredential_process = {}\n", script.display()));

            let (credentials, tokio_runtime) = shared_credentials(SdkCredentialsConfig::new(SdkCredentialsChain::Default));
            let pending = credentials.provider().get_credentials();
            while runs(&count_file) == 0 {
                std::thread::sleep(Duration::from_millis(10));
            }
            tokio_runtime.shutdown_background();
            futures::executor::block_on(pending).expect_err("the runtime is shut down");
        }

        #[test]
        fn create_and_query_in_async_context() {
            let dir = tempfile::tempdir().unwrap();
            isolate_environment(dir.path());
            set_environment_credentials();

            // Built outside the caller's runtime, so that it is never dropped inside it (which panics).
            let tokio_runtime = new_runtime();
            let handle = tokio_runtime.handle().clone();
            let runtime = tokio::runtime::Builder::new_current_thread().enable_all().build().unwrap();
            runtime.block_on(async {
                let config = SdkCredentialsConfig::new(SdkCredentialsChain::Default);
                let credentials = SharedCredentials::from_sdk(config, handle).await.unwrap();
                let result = credentials.provider().get_credentials().await;
                assert_eq!(result.unwrap().access_key_id(), ENV_ACCESS_KEY_ID);
            });
        }

        #[test]
        fn invalid_ca_bundle_fails_creation() {
            let dir = tempfile::tempdir().unwrap();
            isolate_environment(dir.path());
            for (name, contents) in [
                ("empty.pem", ""),
                ("no-certificates.pem", "not a certificate\n"),
                ("bad-certificate.pem", "-----BEGIN CERTIFICATE-----\nAAAA\n-----END CERTIFICATE-----\n"),
            ] {
                let path = dir.path().join(name);
                write_file(&path, contents);
                let tls_config = TlsConfig::new().with_trust_store_path(&path);
                let config = SdkCredentialsConfig::new(SdkCredentialsChain::Default).tls_config(&tls_config);
                let err = test_handle().block_on(SharedCredentials::from_sdk(config, test_handle())).unwrap_err();
                assert!(matches!(err, SdkCredentialsError::InvalidCaBundle { .. }), "{name}: {err:?}");
            }
        }

        #[test]
        fn unreadable_ca_bundle_fails_creation() {
            let dir = tempfile::tempdir().unwrap();
            isolate_environment(dir.path());
            let tls_config = TlsConfig::new().with_trust_store_path(dir.path().join("missing.pem"));
            let config = SdkCredentialsConfig::new(SdkCredentialsChain::Default).tls_config(&tls_config);
            let err = test_handle().block_on(SharedCredentials::from_sdk(config, test_handle())).unwrap_err();
            assert!(matches!(err, SdkCredentialsError::CaBundle { .. }), "{err:?}");
        }
    }
}
