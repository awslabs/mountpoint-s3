//! What a scenario sets up, what it does, and the outcome it expects.

use std::fmt;
use std::time::Duration;

use serde::{Deserialize, Serialize};

/// A credentials chain under test.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Chain {
    /// The CRT's default chain, or its profile provider with `--profile`, built by `S3CrtClient`.
    Crt,
    /// The AWS SDK for Rust chain of `mountpoint_s3_fs::s3::credentials`, behind `SharedCredentials`.
    Sdk,
}

impl Chain {
    pub fn name(self) -> &'static str {
        match self {
            Chain::Crt => "crt",
            Chain::Sdk => "sdk",
        }
    }

    pub fn from_name(name: &str) -> Option<Self> {
        match name {
            "crt" => Some(Chain::Crt),
            "sdk" => Some(Chain::Sdk),
            _ => None,
        }
    }
}

/// One scenario: an environment, the steps run in it, and the expected outcome.
pub struct Scenario {
    pub name: &'static str,
    pub setup: Setup,
    pub steps: Vec<Action>,
    /// The outcome expected on every chain: today's CRT behaviour.
    pub expect: Outcome,
    /// How the SDK chain differs from `expect`, if it does.
    pub sdk: Sdk,
    /// Whether the scenario takes minutes, and runs only when asked for.
    pub slow: bool,
}

/// The outcome expected on the SDK chain.
pub enum Sdk {
    /// The same as the scenario's expectation.
    Same,
    /// A difference adopted as the new behaviour, documented at `doc`.
    Adopted { doc: &'static str, outcome: Outcome },
}

/// The environment a scenario runs in. In environment values and file contents, `{home}` is
/// replaced with the scenario's home directory.
#[derive(Default)]
pub struct Setup {
    pub env: Vec<(&'static str, String)>,
    /// Files to create, relative to the home directory.
    pub files: Vec<(&'static str, String)>,
    /// The `--profile` argument.
    pub profile: Option<&'static str>,
    pub imds: Option<Imds>,
    pub ecs: Option<Ecs>,
    pub sts: Option<Sts>,
    /// The IAM Identity Center portal stub, behind the STS stub's TLS listener.
    pub sso: bool,
}

/// The instance metadata stub, at 169.254.169.254:80.
#[derive(Clone)]
pub struct Imds {
    pub token: TokenResponse,
    pub role: &'static str,
    pub key: &'static str,
    pub expiry: Expiry,
}

/// How the IMDS stub answers the IMDSv2 token request.
#[derive(Clone, Copy, Debug)]
pub enum TokenResponse {
    Token,
    Status(u16),
    /// Never answers, as when the response is dropped by a hop limit of 1.
    Hang,
}

/// The expiry of the credentials a stub returns.
#[derive(Clone, Copy, Debug)]
pub enum Expiry {
    /// Six hours from now.
    Later,
    /// One minute from now: within the CRT cache's refresh window, so every fetch refreshes.
    Soon,
}

/// The container credentials stub, at 169.254.170.2:80 and 127.0.0.1:8080.
#[derive(Clone)]
pub struct Ecs {
    pub key: &'static str,
}

/// The STS stub, over TLS at 127.0.0.1:443. The STS host names in [crate::stubs::TLS_HOSTS]
/// resolve to it.
#[derive(Clone)]
pub struct Sts {
    /// Fail every request with this status.
    pub fail: Option<u16>,
}

/// A step of a scenario.
#[derive(Clone, Debug)]
pub enum Action {
    /// Sign one S3 request.
    Fetch,
    /// Sign several S3 requests at the same time.
    FetchConcurrently(usize),
    /// The IMDS stub returns this access key from now on.
    ImdsKey(&'static str),
    /// The IMDS stub fails every request with 500 from now on.
    ImdsOutage,
    /// Rewrite a file relative to the home directory.
    Write(&'static str, String),
    /// Wait, such as for the credentials cache to refresh.
    Wait(Duration),
}

/// The outcome of a scenario: one entry per [Action::Fetch] or [Action::FetchConcurrently].
#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
pub struct Outcome {
    pub fetches: Vec<Fetch>,
}

/// What one fetch resulted in, and the requests the credential stubs received for it (since the
/// previous fetch).
#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
pub struct Fetch {
    pub result: FetchResult,
    pub requests: Vec<Request>,
}

#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
pub enum FetchResult {
    /// The S3 request was signed with this access key, with or without a session token.
    Signed { key: String, token: bool },
    /// Creating the client failed.
    InvalidConfig,
    /// The request failed because no credentials could be resolved.
    NoCredentials,
    /// The request failed for another reason.
    Error,
}

/// A request received by a credential stub, normalised.
#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
pub enum Request {
    /// `PUT /latest/api/token`.
    ImdsToken,
    /// A GET under `/latest/meta-data/`, with the path after it, and whether it carried a token.
    ImdsGet { path: String, v2: bool },
    /// A container credentials request: the stub's address that received it, the path, and the
    /// `Authorization` header.
    Ecs {
        host: String,
        path: String,
        auth: Option<String>,
    },
    /// An STS request: the `Host` header, the action, and the access key that signed it, if any.
    Sts {
        host: String,
        action: String,
        signed_by: Option<String>,
    },
    /// An IAM Identity Center `GetRoleCredentials` request: the role, and the bearer token.
    Sso { role: String, token: Option<String> },
}

impl fmt::Display for Request {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Request::ImdsToken => write!(f, "IMDS PUT token"),
            Request::ImdsGet { path, v2 } => write!(f, "IMDS GET{} {path}", if *v2 { "" } else { " (v1)" }),
            Request::Ecs { host, path, auth } => {
                write!(f, "ECS GET {host}{path}")?;
                if let Some(auth) = auth {
                    write!(f, " auth={auth}")?;
                }
                Ok(())
            }
            Request::Sts {
                host,
                action,
                signed_by,
            } => {
                write!(f, "STS {action} at {host}")?;
                if let Some(key) = signed_by {
                    write!(f, " signed by {key}")?;
                }
                Ok(())
            }
            Request::Sso { role, token } => {
                write!(f, "SSO GetRoleCredentials for {role}")?;
                if let Some(token) = token {
                    write!(f, " with token {token}")?;
                }
                Ok(())
            }
        }
    }
}

// Builders used by the scenarios.

pub fn scenario(name: &'static str) -> Scenario {
    Scenario {
        name,
        setup: Setup::default(),
        steps: vec![Action::Fetch],
        expect: Outcome { fetches: vec![] },
        sdk: Sdk::Same,
        slow: false,
    }
}

impl Scenario {
    pub fn env(mut self, key: &'static str, value: impl Into<String>) -> Self {
        self.setup.env.push((key, value.into()));
        self
    }

    pub fn file(mut self, path: &'static str, contents: impl Into<String>) -> Self {
        self.setup.files.push((path, contents.into()));
        self
    }

    pub fn profile(mut self, name: &'static str) -> Self {
        self.setup.profile = Some(name);
        self
    }

    pub fn imds(mut self, imds: Imds) -> Self {
        self.setup.imds = Some(imds);
        self
    }

    pub fn ecs(mut self, key: &'static str) -> Self {
        self.setup.ecs = Some(Ecs { key });
        self
    }

    pub fn sts(mut self) -> Self {
        self.setup.sts = Some(Sts { fail: None });
        self
    }

    pub fn sso(mut self) -> Self {
        self.setup.sso = true;
        self
    }

    pub fn sts_failing(mut self, status: u16) -> Self {
        self.setup.sts = Some(Sts { fail: Some(status) });
        self
    }

    pub fn slow(mut self) -> Self {
        self.slow = true;
        self
    }

    pub fn steps(mut self, steps: impl IntoIterator<Item = Action>) -> Self {
        self.steps = steps.into_iter().collect();
        self
    }

    pub fn expect(mut self, fetches: impl IntoIterator<Item = Fetch>) -> Self {
        self.expect = Outcome {
            fetches: fetches.into_iter().collect(),
        };
        self
    }

    /// The SDK chain's different behaviour is adopted and documented at `doc`.
    pub fn sdk_adopted(mut self, doc: &'static str, fetches: impl IntoIterator<Item = Fetch>) -> Self {
        let outcome = Outcome {
            fetches: fetches.into_iter().collect(),
        };
        self.sdk = Sdk::Adopted { doc, outcome };
        self
    }

    /// The outcome expected on `chain`.
    pub fn expected(&self, chain: Chain) -> &Outcome {
        match (chain, &self.sdk) {
            (Chain::Crt, _) | (Chain::Sdk, Sdk::Same) => &self.expect,
            (Chain::Sdk, Sdk::Adopted { outcome, .. }) => outcome,
        }
    }
}

pub fn imds(key: &'static str) -> Imds {
    Imds {
        token: TokenResponse::Token,
        role: "instance-role",
        key,
        expiry: Expiry::Later,
    }
}

impl Imds {
    pub fn token(mut self, token: TokenResponse) -> Self {
        self.token = token;
        self
    }

    pub fn expiring_soon(mut self) -> Self {
        self.expiry = Expiry::Soon;
        self
    }
}

pub fn signed(key: &str) -> Fetch {
    fetch(FetchResult::Signed {
        key: key.to_string(),
        token: false,
    })
}

pub fn signed_with_token(key: &str) -> Fetch {
    fetch(FetchResult::Signed {
        key: key.to_string(),
        token: true,
    })
}

pub fn no_credentials() -> Fetch {
    fetch(FetchResult::NoCredentials)
}

pub fn invalid_config() -> Fetch {
    fetch(FetchResult::InvalidConfig)
}

fn fetch(result: FetchResult) -> Fetch {
    Fetch {
        result,
        requests: vec![],
    }
}

impl Fetch {
    pub fn requests(mut self, requests: impl IntoIterator<Item = Request>) -> Self {
        self.requests = requests.into_iter().collect();
        self
    }
}

// Requests, as the stubs record them.

pub fn imds_token() -> Request {
    Request::ImdsToken
}

/// The IMDSv2 requests for the instance role's credentials: the role name, then the credentials.
pub fn imds_v2_credentials() -> [Request; 2] {
    [
        Request::ImdsGet {
            path: "iam/security-credentials/".to_string(),
            v2: true,
        },
        Request::ImdsGet {
            path: "iam/security-credentials/instance-role".to_string(),
            v2: true,
        },
    ]
}

/// The same requests without a token (IMDSv1).
pub fn imds_v1_credentials() -> [Request; 2] {
    [
        Request::ImdsGet {
            path: "iam/security-credentials/".to_string(),
            v2: false,
        },
        Request::ImdsGet {
            path: "iam/security-credentials/instance-role".to_string(),
            v2: false,
        },
    ]
}

pub fn ecs(host: &str, path: &str, auth: Option<&str>) -> Request {
    Request::Ecs {
        host: host.to_string(),
        path: path.to_string(),
        auth: auth.map(str::to_string),
    }
}

pub fn sts(host: &str, action: &str, signed_by: Option<&str>) -> Request {
    Request::Sts {
        host: host.to_string(),
        action: action.to_string(),
        signed_by: signed_by.map(str::to_string),
    }
}

pub fn sso(role: &str, token: &str) -> Request {
    Request::Sso {
        role: role.to_string(),
        token: Some(token.to_string()),
    }
}
