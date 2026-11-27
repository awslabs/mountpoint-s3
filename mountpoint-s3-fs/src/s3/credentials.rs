//! AWS credentials resolved by the AWS SDK for Rust and shared by the CRT and SDK clients.
//!
//! ```text
//! CRT S3 client ──► delegate provider ──┐
//!                   (auth_config)       ├──► SharedCredentials ──► SdkCredentialsSource, an aws-config chain:
//! SDK S3 client ────────────────────────┘    (one cache)             1. environment variables
//!   (SdkClientAuth::SharedCredentials)                               2. profile (shared files)
//!                                                                    3. web identity
//!                                                                    4. container credentials
//!                                                                    5. instance metadata (CRT IMDS provider)
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
//!
//! Credentials from EC2 instance metadata come from the CRT's IMDS provider, in the default chain and
//! for profiles with `credential_source = Ec2InstanceMetadata`, so they keep the CRT's IMDSv1
//! fallback. It is skipped when `AWS_EC2_METADATA_V1_DISABLED` or the profile's
//! `ec2_metadata_v1_disabled` is `true`.
//!
//! The providers that assume a role (from a profile, or with web identity) send their STS requests
//! to the region in `AWS_REGION`, `AWS_DEFAULT_REGION` or the selected profile's `region` in the
//! shared config file, in that order, and to the STS endpoint set in `AWS_ENDPOINT_URL_STS`,
//! `AWS_ENDPOINT_URL` or the selected profile, if any. Mountpoint's region and the endpoint in its
//! client configuration don't apply to them, and neither do the FIPS and dual-stack settings.
//!
//! * Without a region, roles from a profile use the global endpoint, `sts.amazonaws.com`, and web
//!   identity from the environment is skipped unless an STS endpoint is set.
//! * Web identity uses an STS endpoint set with `AWS_ENDPOINT_URL_STS` or the `sts` entry of a
//!   profile's `services` section, but not one set for every service with `AWS_ENDPOINT_URL` or a
//!   profile's `endpoint_url`, so that the token never goes to an endpoint meant for another
//!   service, such as an S3 endpoint in `AWS_ENDPOINT_URL`: the default chain moves on to the next
//!   source, and a profile chain fails.

use std::fmt::Debug;
use std::path::PathBuf;
use std::sync::OnceLock;
use std::time::Duration;

use aws_config::Region;
use aws_config::ecs::EcsCredentialsProvider;
use aws_config::environment::EnvironmentVariableCredentialsProvider;
use aws_config::meta::credentials::CredentialsProviderChain;
use aws_config::profile::{Profile, ProfileFileCredentialsProvider, ProfileFileLoadError, ProfileSet};
use aws_config::provider_config::ProviderConfig;
use aws_config::web_identity_token::WebIdentityTokenCredentialsProvider;
use aws_credential_types::credential_fn::provide_credentials_fn;
use aws_credential_types::provider::error::CredentialsError;
use aws_credential_types::provider::{self, ProvideCredentials, SharedCredentialsProvider};
use aws_runtime::env_config::file::EnvConfigFiles;
use aws_runtime::env_config::property::PropertiesKey;
use aws_sdk_s3::config::SharedHttpClient;
use aws_smithy_http_client::ConnectorBuilder;
use aws_smithy_http_client::proxy::ProxyConfig;
use aws_smithy_http_client::tls::{self, TlsContext, TrustStore};
use aws_types::os_shim_internal::{Env, Fs};
use mountpoint_s3_client::config::{CredentialsProvider, TlsConfig, imds_credentials_provider};
use mountpoint_s3_client::error::CrtError;
use thiserror::Error;
use tracing::{debug, error};

use crate::sync::Arc;
#[cfg(doc)]
use tokio::runtime::Handle;

mod cache;

pub use cache::{LoadCredentialsError, SharedCredentials};

/// How long a query to the SDK credentials chain may take. When it runs out, the query fails with a
/// timeout error, without trying the next source in the chain. With [SharedCredentials], the
/// requests waiting for the query fail. The next request starts a new query.
///
/// The timeout is for a source that stops answering, such as a stuck `credential_process` or an STS
/// endpoint that accepts the connection but never responds: the STS client has only a connect
/// timeout. A working chain only reaches it if its responses take tens of seconds: a chain of roles
/// sends one STS request per role, after the query to its first source.
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
/// The chain is built on the first query and reused after that. The regions of
/// its STS requests are chosen when the source is created, as the [module](self) documentation
/// describes.
#[derive(Clone)]
pub struct SdkCredentialsSource {
    inner: Arc<SourceInner>,
}

struct SourceInner {
    config: SdkCredentialsConfig,
    http_client: Option<SharedHttpClient>,
    sts_regions: StsRegions,
    /// Whether the IMDSv1 fallback of the instance metadata provider is disabled.
    imds_v1_disabled: bool,
    chain: OnceLock<SharedCredentialsProvider>,
}

impl SdkCredentialsSource {
    /// Create a source for `config`.
    ///
    /// For [SdkCredentialsChain::Profile], checks that the profile exists. Chooses the regions of
    /// the STS requests. Reads the shared files and the CA bundle with blocking I/O.
    pub async fn new(config: SdkCredentialsConfig) -> Result<Self, SdkCredentialsError> {
        if let SdkCredentialsChain::Profile(name) = &config.chain {
            check_profile_exists(name).await?;
        }
        let http_client = config.trust_store_path.as_ref().map(https_client).transpose()?;
        let sts_regions = StsRegions::resolve(&config.chain, &Env::real(), &Fs::real()).await;
        let imds_v1_disabled = imds_v1_disabled(config.chain.profile_name()).await;
        Ok(Self {
            inner: Arc::new(SourceInner {
                config,
                http_client,
                sts_regions,
                imds_v1_disabled,
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
        let sts_regions = self.sts_regions.clone();
        debug!(chain = ?self.config.chain, ?sts_regions, "building the SDK credentials chain");
        // STS requests don't use the FIPS or dual-stack endpoints. Unless they are set here, the
        // profile provider reads these settings from the environment and the profile.
        let mut provider_config = ProviderConfig::without_region()
            .with_use_fips(Some(false))
            .with_use_dual_stack(Some(false));
        if let Some(http_client) = &self.http_client {
            provider_config = provider_config.with_http_client(http_client.clone());
        }
        let imds = CrtImdsCredentials::new(self.imds_v1_disabled);
        let profile = ProfileFileCredentialsProvider::builder()
            .configure(&provider_config.clone().with_region(Some(sts_regions.profile)))
            .with_custom_provider("Ec2InstanceMetadata", imds.clone());
        match &self.config.chain {
            SdkCredentialsChain::Default => {
                let mut chain =
                    CredentialsProviderChain::first_try("Environment", EnvironmentVariableCredentialsProvider::new());
                // The default chain skips a profile whose web identity would send its token to an
                // endpoint set for every service.
                if !sts_regions.profile_web_identity_to_url {
                    chain = chain.or_else("Profile", profile.build());
                }
                // Without a usable STS endpoint, the chain skips web identity and moves on to the
                // next source.
                if let Some(region) = sts_regions.web_identity {
                    chain = chain.or_else(
                        "WebIdentityToken",
                        WebIdentityTokenCredentialsProvider::builder()
                            .configure(&provider_config.clone().with_region(region))
                            .build(),
                    );
                }
                let chain = chain
                    .or_else(
                        "EcsContainer",
                        EcsCredentialsProvider::builder().configure(&provider_config).build(),
                    )
                    .or_else("Ec2InstanceMetadata", imds);
                SharedCredentialsProvider::new(chain)
            }
            SdkCredentialsChain::Profile(_) if sts_regions.profile_web_identity_to_url => {
                SharedCredentialsProvider::new(provide_credentials_fn(|| async {
                    Err(CredentialsError::invalid_configuration(
                        "the profile uses web identity with an endpoint set for every service (`AWS_ENDPOINT_URL` \
                         or the profile's `endpoint_url`): set the STS endpoint with `AWS_ENDPOINT_URL_STS` or \
                         the `sts` entry of the profile's `services` section",
                    ))
                }))
            }
            SdkCredentialsChain::Profile(name) => SharedCredentialsProvider::new(profile.profile_name(name).build()),
        }
    }
}

impl SdkCredentialsChain {
    /// The profile the chain reads settings from, if not the one selected by `AWS_PROFILE`.
    fn profile_name(&self) -> Option<&str> {
        match self {
            SdkCredentialsChain::Default => None,
            SdkCredentialsChain::Profile(name) => Some(name),
        }
    }
}

/// Credentials from EC2 instance metadata through the CRT's IMDS provider, which falls back to
/// IMDSv1 when the IMDSv2 token request fails, as Mountpoint's CRT chain does. The SDK's own IMDS
/// provider only uses IMDSv2.
#[derive(Debug, Clone)]
struct CrtImdsCredentials {
    /// The CRT's provider, or why there is none.
    provider: Result<CredentialsProvider, &'static str>,
}

impl CrtImdsCredentials {
    /// The provider, with the IMDSv1 fallback disabled if `v1_disabled`. Instance metadata is
    /// disabled when `AWS_EC2_METADATA_DISABLED` is `true`, as in the SDK.
    fn new(v1_disabled: bool) -> Self {
        if Env::real()
            .get("AWS_EC2_METADATA_DISABLED")
            .is_ok_and(|value| value.eq_ignore_ascii_case("true"))
        {
            return Self {
                provider: Err("instance metadata is disabled"),
            };
        }
        match imds_credentials_provider(v1_disabled) {
            Ok(provider) => Self { provider: Ok(provider) },
            Err(e) => {
                error!(error = %e, "failed to create the instance metadata credentials provider");
                Self {
                    provider: Err("the instance metadata credentials provider couldn't be created (see the logs)"),
                }
            }
        }
    }
}

/// Whether the IMDSv1 fallback is disabled: `AWS_EC2_METADATA_V1_DISABLED` or, if it isn't set, the
/// `ec2_metadata_v1_disabled` setting of the selected profile (`profile_name`, or the one selected
/// by `AWS_PROFILE`) is `true`.
async fn imds_v1_disabled(profile_name: Option<&str>) -> bool {
    let env = Env::real();
    let is_true = |value: &str| value.eq_ignore_ascii_case("true");
    match env.get("AWS_EC2_METADATA_V1_DISABLED") {
        Ok(value) => is_true(&value),
        Err(_) => aws_config::profile::load(
            &Fs::real(),
            &env,
            &Default::default(),
            profile_name.map(|name| name.to_owned().into()),
        )
        .await
        .ok()
        .and_then(|profiles| profiles.get("ec2_metadata_v1_disabled").map(is_true))
        .unwrap_or(false),
    }
}

impl ProvideCredentials for CrtImdsCredentials {
    fn provide_credentials<'a>(&'a self) -> provider::future::ProvideCredentials<'a>
    where
        Self: 'a,
    {
        let provider = match &self.provider {
            Ok(provider) => provider,
            Err(reason) => {
                return provider::future::ProvideCredentials::ready(Err(CredentialsError::not_loaded(*reason)));
            }
        };
        let query = provider.get_credentials();
        provider::future::ProvideCredentials::new(async move {
            // Every failure counts as no credentials from IMDS, so that the default chain's error lists
            // what each of its sources returned. The SDK's IMDS provider reports an unreachable IMDS and
            // an instance without a role this way. The CRT's provider can't tell those cases from other
            // failures: for an instance without a role, it fails with an invalid path.
            let credentials = query.await.map_err(CredentialsError::not_loaded)?;
            Ok(aws_credential_types::Credentials::new(
                credentials.access_key_id(),
                credentials.secret_access_key(),
                credentials.session_token().map(str::to_owned),
                credentials.expiration(),
                "Ec2InstanceMetadata",
            ))
        })
    }
}

/// Region of the global STS endpoint, `sts.amazonaws.com`, in the SDK's endpoint rules, which sign
/// its requests for `us-east-1`.
const STS_GLOBAL_REGION: &str = "aws-global";

/// The regions the credential providers send their STS requests to: `AWS_REGION`, then
/// `AWS_DEFAULT_REGION`, then the `region` of the selected profile in the shared config file. The
/// selected profile is the one given with [SdkCredentialsChain::Profile], or else `AWS_PROFILE`, or
/// else `default`.
#[derive(Debug, Clone, PartialEq, Eq)]
struct StsRegions {
    /// For the profile provider: its roles, and the services its sources call. Without a region,
    /// the global endpoint.
    profile: Region,
    /// For web identity from the environment: `None` if the chain skips it, `Some(None)` if it
    /// uses an STS endpoint set in the environment without a region.
    web_identity: Option<Option<Region>>,
    /// Whether the selected profile gets its base credentials from web identity (`role_arn` with
    /// `web_identity_token_file`, in the profile or one of its source profiles) with an STS
    /// endpoint that would be one set for every service, in `AWS_ENDPOINT_URL` or the selected
    /// profile's `endpoint_url`. The chain doesn't use such a profile, so that the token never
    /// goes to an endpoint meant for another service.
    profile_web_identity_to_url: bool,
}

impl StsRegions {
    async fn resolve(chain: &SdkCredentialsChain, env: &Env, fs: &Fs) -> Self {
        let profile_name = match chain {
            SdkCredentialsChain::Default => None,
            SdkCredentialsChain::Profile(name) => Some(name.clone().into()),
        };
        let env_var = |key: &str| env.get(key).ok().filter(|value| !value.is_empty());
        // Only the config file's `region` counts, not one in the credentials file.
        let config_file = EnvConfigFiles::builder().include_default_config_file(true).build();
        let config_profiles = load_profiles(fs, env, &config_file, profile_name.clone()).await;
        let selected_profile = config_profiles
            .as_ref()
            .and_then(|profiles| profiles.get_profile(profiles.selected_profile()));
        let region = env_var("AWS_REGION")
            .or_else(|| env_var("AWS_DEFAULT_REGION"))
            .or_else(|| {
                let region = selected_profile?.get("region")?;
                (!region.is_empty()).then(|| region.to_owned())
            })
            .map(Region::new);

        let profiles = load_profiles(fs, env, &Default::default(), profile_name).await;
        let base = profiles.as_ref().and_then(sdk_base_credentials);
        let profile = region.clone().unwrap_or_else(|| Region::from_static(STS_GLOBAL_REGION));
        let sts_endpoint = env_var("AWS_ENDPOINT_URL_STS");
        let shared_endpoint = env_var("AWS_ENDPOINT_URL");
        let is_url = |endpoint: &str| endpoint.contains("://");
        // Web identity uses an STS endpoint set for STS, but not one set for every service: the token
        // must not go to an endpoint meant for another service, such as the S3 endpoint that Mountpoint
        // reads from `AWS_ENDPOINT_URL`.
        let profile_web_identity_to_url = base == Some(BaseCredentials::WebIdentity) && sts_endpoint.is_none() && {
            // The SDK uses the endpoint settings of the selected profile for the whole chain.
            let selected = profiles
                .as_ref()
                .and_then(|profiles| Some((profiles, profiles.get_profile(profiles.selected_profile())?)));
            match (&shared_endpoint, selected) {
                (Some(endpoint), _) => is_url(endpoint),
                (None, Some((profiles, profile))) => {
                    !has_sts_service_endpoint(profiles, profile) && profile.get("endpoint_url").is_some_and(is_url)
                }
                (None, None) => false,
            }
        };
        let endpoint = sts_endpoint.as_deref().or(shared_endpoint.as_deref());
        let web_identity = match (endpoint, region) {
            (Some(endpoint), _) if sts_endpoint.is_none() && is_url(endpoint) => None,
            (_, Some(region)) => Some(Some(region)),
            // Without a region, the endpoint is used only with the selected profile in the config
            // file.
            (Some(_), None) if selected_profile.is_some() => Some(None),
            (_, None) => None,
        };
        Self {
            profile,
            web_identity,
            profile_web_identity_to_url,
        }
    }
}

/// Whether `profile` sets an STS endpoint in the `sts` entry of its `services` section.
fn has_sts_service_endpoint(profiles: &ProfileSet, profile: &Profile) -> bool {
    let Some(services) = profile.get("services") else {
        return false;
    };
    PropertiesKey::builder()
        .section_key("services")
        .section_name(services)
        .property_name("sts")
        .sub_property_name("endpoint_url")
        .build()
        .is_ok_and(|key| profiles.other_sections().get(&key).is_some())
}

/// Parse the given shared files. A failure counts as no profiles here: the chain reports it when it
/// reads the files itself.
async fn load_profiles(
    fs: &Fs,
    env: &Env,
    profile_files: &EnvConfigFiles,
    profile_name: Option<std::borrow::Cow<'static, str>>,
) -> Option<ProfileSet> {
    aws_config::profile::load(fs, env, profile_files, profile_name)
        .await
        .ok()
}

/// The kinds of base credentials of a profile chain that the STS regions depend on.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
enum BaseCredentials {
    WebIdentity,
    Other,
}

/// The kind of base credentials the SDK's profile provider uses for the selected profile: it
/// follows `source_profile` from the selected profile, as the SDK does, to the profile that holds
/// the base credentials, and picks them in the SDK's order. `None` if the SDK can't resolve the
/// chain (a missing profile or a loop).
fn sdk_base_credentials(profiles: &ProfileSet) -> Option<BaseCredentials> {
    let mut visited = std::collections::HashSet::new();
    let mut name = profiles.selected_profile();
    let base = loop {
        if !visited.insert(name) {
            return None;
        }
        let profile = profiles.get_profile(name)?;
        // After the selected profile, static keys come first.
        let has_static_keys = ["aws_access_key_id", "aws_secret_access_key"]
            .iter()
            .all(|key| profile.get(key).is_some());
        if visited.len() > 1 && has_static_keys {
            return Some(BaseCredentials::Other);
        }
        // A role with a web identity token file is a base, not a link in the chain.
        if profile.get("role_arn").is_none() || profile.get("web_identity_token_file").is_some() {
            break profile;
        }
        match (profile.get("source_profile"), profile.get("credential_source")) {
            (Some(source), None) if source != name => name = source,
            (Some(_), None) | (None, Some(_)) => break profile,
            _ => return None,
        }
    };
    Some(if base.get("credential_source").is_some() {
        BaseCredentials::Other
    } else if base.get("web_identity_token_file").is_some() {
        BaseCredentials::WebIdentity
    } else {
        BaseCredentials::Other
    })
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
fn https_client(ca_bundle_path: &PathBuf) -> Result<SharedHttpClient, SdkCredentialsError> {
    let pem = std::fs::read(ca_bundle_path).map_err(|source| SdkCredentialsError::CaBundle {
        path: ca_bundle_path.clone(),
        source,
    })?;
    check_ca_bundle(&pem).map_err(|reason| SdkCredentialsError::InvalidCaBundle {
        path: ca_bundle_path.clone(),
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
