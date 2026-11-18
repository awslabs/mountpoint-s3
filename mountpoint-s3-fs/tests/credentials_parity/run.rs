//! Running one scenario on one chain.
//!
//! Each run is a child process of the suite, with an environment that holds only what the scenario
//! sets, and its own home directory. The child starts the stubs, creates an `S3CrtClient` with the
//! chain, runs the steps and prints the outcome as JSON on its last line of output.

use std::path::{Path, PathBuf};
use std::process::{Command, ExitCode};
use std::time::Duration;

use futures::future::join_all;
use mountpoint_s3_client::config::{
    AddressingStyle, Allocator, EndpointConfig, S3ClientAuthConfig, S3ClientConfig, TlsConfig, Uri,
};
use mountpoint_s3_client::error::ObjectClientError;
use mountpoint_s3_client::{ObjectClient, S3CrtClient, S3RequestError};
use mountpoint_s3_fs::s3::credentials::{SdkCredentialsChain, SdkCredentialsConfig, SharedCredentials};
use tokio::runtime::Handle;

use crate::model::{Action, Chain, Fetch, FetchResult, Outcome, Scenario};
use crate::stubs::{self, S3_ADDR, Stubs};

const OUTCOME_PREFIX: &str = "OUTCOME ";
const PKI_DIR: &str = "CREDENTIALS_PARITY_PKI";
const FETCH_TIMEOUT: Duration = Duration::from_secs(60);

/// The result of running a scenario on a chain.
pub enum Run {
    /// The child's outcome, and what it wrote to stderr.
    Done(Outcome, String),
    /// The child didn't print an outcome. The string holds its output.
    Crashed(String),
}

/// Run `scenario` on `chain` in a child process.
pub fn spawn(scenario: &Scenario, chain: Chain, pki_dir: &Path) -> Run {
    let home = tempfile::tempdir().expect("home directory");
    let substitute = |value: &str| value.replace("{home}", home.path().to_str().unwrap());
    for (path, contents) in &scenario.setup.files {
        write(home.path(), path, &substitute(contents));
    }
    let mut command = Command::new(std::env::current_exe().unwrap());
    command
        .args(["--child", scenario.name, chain.name()])
        .env_clear()
        .env("PATH", "/usr/bin:/bin")
        .env("HOME", home.path())
        .env(PKI_DIR, pki_dir);
    if let Some(filter) = std::env::var_os("RUST_LOG") {
        command.env("RUST_LOG", filter);
    }
    for (key, value) in &scenario.setup.env {
        command.env(key, substitute(value));
    }
    let output = command.output().expect("run scenario");
    let stdout = String::from_utf8_lossy(&output.stdout);
    let outcome = stdout
        .lines()
        .filter_map(|line| line.strip_prefix(OUTCOME_PREFIX))
        .next_back()
        .and_then(|json| serde_json::from_str(json).ok());
    match outcome {
        Some(outcome) => Run::Done(outcome, String::from_utf8_lossy(&output.stderr).into_owned()),
        None => Run::Crashed(format!(
            "{}\n{stdout}\n{}",
            output.status,
            String::from_utf8_lossy(&output.stderr)
        )),
    }
}

/// The child's side of [spawn].
pub fn child(scenario: &Scenario, chain: Chain) -> ExitCode {
    let pki_dir = PathBuf::from(std::env::var_os(PKI_DIR).expect("PKI directory"));
    if std::env::var_os("RUST_LOG").is_some() {
        tracing_subscriber::fmt()
            .with_env_filter(tracing_subscriber::EnvFilter::from_default_env())
            .with_writer(std::io::stderr)
            .init();
        let _ = mountpoint_s3_client::config::RustLogAdapter::try_init();
    }
    let runtime = tokio::runtime::Builder::new_multi_thread()
        .enable_all()
        .build()
        .unwrap();
    let home = PathBuf::from(std::env::var_os("HOME").expect("home directory"));
    let outcome = runtime.block_on(run(scenario, chain, &pki_dir, &home));
    println!("{OUTCOME_PREFIX}{}", serde_json::to_string(&outcome).unwrap());
    ExitCode::SUCCESS
}

async fn run(scenario: &Scenario, chain: Chain, pki_dir: &Path, home: &Path) -> Outcome {
    let stubs = stubs::start(&scenario.setup, pki_dir).await;
    let mut fetches = Vec::new();
    let client = match client(chain, scenario.setup.profile, pki_dir).await {
        Ok(client) => client,
        Err(_) => {
            fetches.push(Fetch {
                result: FetchResult::InvalidConfig,
                requests: stubs.credentials.take(),
            });
            return Outcome { fetches };
        }
    };
    for action in &scenario.steps {
        match action {
            Action::Fetch => fetches.push(fetch(&client, &stubs, 1).await),
            Action::FetchConcurrently(count) => fetches.push(fetch(&client, &stubs, *count).await),
            Action::ImdsKey(key) => stubs.imds.as_ref().expect("IMDS stub").set_key(key),
            Action::ImdsOutage => stubs.imds.as_ref().expect("IMDS stub").start_outage(),
            Action::Write(path, contents) => write(home, path, &contents.replace("{home}", home.to_str().unwrap())),
            Action::Wait(duration) => tokio::time::sleep(*duration).await,
        }
    }
    Outcome { fetches }
}

/// A client that signs with `chain`. Call it on the runtime the SDK chain runs on.
async fn client(chain: Chain, profile: Option<&str>, pki_dir: &Path) -> Result<S3CrtClient, ()> {
    let endpoint = Uri::new_from_str(&Allocator::default(), format!("http://{S3_ADDR}")).unwrap();
    let tls_config = TlsConfig::new().with_trust_store_path(pki_dir.join("ca.pem"));
    let auth_config = match chain {
        Chain::Crt => match profile {
            None => S3ClientAuthConfig::Default,
            Some(profile) => S3ClientAuthConfig::Profile(profile.to_string()),
        },
        Chain::Sdk => {
            let sdk_chain = match profile {
                None => SdkCredentialsChain::Default,
                Some(profile) => SdkCredentialsChain::Profile(profile.to_string()),
            };
            let config = SdkCredentialsConfig::new(sdk_chain).tls_config(&tls_config);
            SharedCredentials::from_sdk(config, Handle::current())
                .await
                .map_err(|e| eprintln!("credentials creation failed: {e:?}"))?
                .auth_config()
        }
    };
    let config = S3ClientConfig::new()
        .endpoint_config(
            EndpointConfig::new("us-east-1")
                .addressing_style(AddressingStyle::Path)
                .endpoint(endpoint),
        )
        .auth_config(auth_config)
        .tls_config(tls_config);
    S3CrtClient::new(config).map_err(|e| eprintln!("client creation failed: {e:?}"))
}

/// Sign `count` S3 requests at the same time, and collect what the credential stubs received.
async fn fetch(client: &S3CrtClient, stubs: &Stubs, count: usize) -> Fetch {
    let start = stubs.s3.len();
    let requests =
        (0..count).map(|_| tokio::time::timeout(FETCH_TIMEOUT, client.list_objects("test-bucket", None, "/", 10, "")));
    let results = join_all(requests).await;
    let mut result = None;
    for outcome in results {
        let this = match outcome {
            Ok(Ok(_)) => None,
            Ok(Err(ObjectClientError::ClientError(S3RequestError::NoSigningCredentials))) => {
                Some(FetchResult::NoCredentials)
            }
            Ok(Err(e)) => {
                eprintln!("request failed: {e:?}");
                Some(FetchResult::Error)
            }
            Err(_) => {
                eprintln!("request timed out");
                Some(FetchResult::Error)
            }
        };
        if let Some(this) = this {
            result.get_or_insert(this);
        }
    }
    let result = result.unwrap_or_else(|| {
        let signed = stubs.s3.since(start);
        match signed.first() {
            Some(first) if signed.iter().all(|key| key == first) => FetchResult::Signed {
                key: first.0.clone(),
                token: first.1,
            },
            _ => {
                eprintln!("requests signed with different keys: {signed:?}");
                FetchResult::Error
            }
        }
    });
    Fetch {
        result,
        requests: stubs.credentials.take(),
    }
}

fn write(home: &Path, path: &str, contents: &str) {
    let path = home.join(path);
    std::fs::create_dir_all(path.parent().unwrap()).unwrap();
    std::fs::write(&path, contents).unwrap();
    if path.extension().is_some_and(|ext| ext == "sh") {
        use std::os::unix::fs::PermissionsExt;
        std::fs::set_permissions(&path, std::fs::Permissions::from_mode(0o755)).unwrap();
    }
}
