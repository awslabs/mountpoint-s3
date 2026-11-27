//! The scenarios, grouped by credentials source. Each expectation is the CRT chain's behaviour.

use std::time::Duration;

use crate::model::*;

const CREDENTIALS: &str = ".aws/credentials";
const CONFIG: &str = ".aws/config";
/// The SSO token cache file of the session `s`, named by the SHA-1 of the session name.
const SSO_TOKEN_CACHE: &str = ".aws/sso/cache/a0f1490a20d0211c997b44bc357e1972deab8ae3.json";

// The changes that remove the known differences of the SDK chain.
const STS: &str = "STS region and endpoint chosen as the CRT does";
const IMDS: &str = "IMDS credentials through the CRT's IMDS provider";
const METADATA_DISABLED: &str = "adopt the SDK's AWS_EC2_METADATA_DISABLED rule";
const PROCESS_VERSION: &str = "adopt the SDK's credential_process output check";
const REREAD: &str = "read the shared files again on every refresh";

// Where the adopted differences of the SDK chain are documented.
const CHANGELOG: &str = "mountpoint-s3/CHANGELOG.md";

const ROLE_R1: &str = "arn:aws:iam::123456789012:role/r1";
const ROLE_R2: &str = "arn:aws:iam::123456789012:role/r2";
const ROLE_W1: &str = "arn:aws:iam::123456789012:role/w1";

fn keys(id: &str) -> String {
    format!("aws_access_key_id = {id}\naws_secret_access_key = secret\n")
}

fn env_keys(scenario: Scenario, id: &str) -> Scenario {
    scenario
        .env("AWS_ACCESS_KEY_ID", id)
        .env("AWS_SECRET_ACCESS_KEY", "secret")
}

/// A `credential_process` script printing `json`, and the config file that runs it.
fn credential_process(scenario: Scenario, json: &str) -> Scenario {
    scenario
        .file("process.sh", format!("#!/bin/sh\necho '{json}'\n"))
        .file(CONFIG, "[default]\ncredential_process = {home}/process.sh\n")
}

/// A `credential_process` script printing credentials that expire in a minute, so that every fetch
/// refreshes them, and the config file that runs it.
fn expiring_credential_process(scenario: Scenario) -> Scenario {
    scenario
        .file(
            "process.sh",
            r#"#!/bin/sh
echo "{\"Version\": 1, \"AccessKeyId\": \"PROCESS\", \"SecretAccessKey\": \"secret\", \"SessionToken\": \"token\", \"Expiration\": \"$(date -u -d '+1 minute' +%Y-%m-%dT%H:%M:%SZ)\"}"
"#,
        )
        .file(CONFIG, "[default]\ncredential_process = {home}/process.sh\n")
}

fn assume_role(host: &str, signed_by: &str) -> Request {
    sts(host, "AssumeRole", Some(signed_by))
}

fn assume_role_with_web_identity(host: &str) -> Request {
    sts(host, "AssumeRoleWithWebIdentity", None)
}

fn web_identity_env(scenario: Scenario) -> Scenario {
    scenario
        .file("token", "web-identity-token")
        .env("AWS_WEB_IDENTITY_TOKEN_FILE", "{home}/token")
        .env("AWS_ROLE_ARN", ROLE_W1)
        .env("AWS_ROLE_SESSION_NAME", "session")
}

/// The requests for IMDSv2 credentials: the token, then the role and its credentials.
fn imds_v2() -> Vec<Request> {
    let mut requests = vec![imds_token()];
    requests.extend(imds_v2_credentials());
    requests
}

/// The requests for credentials through the IMDSv1 fallback, after a failed token request.
fn imds_v1_after_token() -> Vec<Request> {
    let mut requests = vec![imds_token()];
    requests.extend(imds_v1_credentials());
    requests
}

pub fn all() -> Vec<Scenario> {
    let mut all = Vec::new();
    all.extend(environment());
    all.extend(shared_files());
    all.extend(credential_processes());
    all.extend(assume_role_profiles());
    all.extend(web_identity());
    all.extend(containers());
    all.extend(instance_metadata());
    all.extend(order());
    all
}

fn environment() -> Vec<Scenario> {
    vec![
        env_keys(scenario("env: static keys"), "ENV").expect([signed("ENV")]),
        env_keys(scenario("env: keys with a session token"), "ENV")
            .env("AWS_SESSION_TOKEN", "token")
            .expect([signed_with_token("ENV")]),
        scenario("env: access key ID without a secret key")
            .env("AWS_ACCESS_KEY_ID", "ENV")
            .expect([no_credentials()]),
        scenario("none configured").expect([no_credentials()]),
    ]
}

fn shared_files() -> Vec<Scenario> {
    vec![
        scenario("profile: default profile in the credentials file")
            .file(CREDENTIALS, format!("[default]\n{}", keys("PROFILE")))
            .expect([signed("PROFILE")]),
        scenario("profile: default profile in the config file")
            .file(CONFIG, format!("[default]\n{}", keys("CONFIG")))
            .expect([signed("CONFIG")]),
        scenario("profile: session token")
            .file(
                CREDENTIALS,
                format!("[default]\n{}aws_session_token = token\n", keys("PROFILE")),
            )
            .expect([signed_with_token("PROFILE")]),
        scenario("profile: AWS_PROFILE")
            .file(CREDENTIALS, format!("[named]\n{}", keys("NAMED")))
            .env("AWS_PROFILE", "named")
            .expect([signed("NAMED")]),
        scenario("profile: AWS_PROFILE names a missing profile")
            .file(CREDENTIALS, format!("[named]\n{}", keys("NAMED")))
            .env("AWS_PROFILE", "missing")
            .expect([no_credentials()]),
        scenario("profile: AWS_SHARED_CREDENTIALS_FILE")
            .file("custom/credentials", format!("[default]\n{}", keys("CUSTOM")))
            .env("AWS_SHARED_CREDENTIALS_FILE", "{home}/custom/credentials")
            .expect([signed("CUSTOM")]),
        scenario("profile: AWS_CONFIG_FILE")
            .file("custom/config", format!("[default]\n{}", keys("CUSTOM")))
            .env("AWS_CONFIG_FILE", "{home}/custom/config")
            .expect([signed("CUSTOM")]),
        scenario("profile: rotated static keys, after the cache refresh")
            .file(CREDENTIALS, format!("[default]\n{}", keys("PROFILE")))
            .steps([
                Action::Fetch,
                Action::Write(CREDENTIALS, format!("[default]\n{}", keys("ROTATED"))),
                // The CRT cache refreshes credentials without an expiry every 15 minutes.
                Action::Wait(Duration::from_secs(15 * 60 + 10)),
                Action::Fetch,
            ])
            .slow()
            .expect([signed("PROFILE"), signed("ROTATED")])
            .sdk_todo(REREAD, [signed("PROFILE"), signed("PROFILE")]),
        scenario("profile: static keys removed, after the cache refresh, with IMDS available")
            .file(CREDENTIALS, format!("[default]\n{}", keys("PROFILE")))
            .imds(imds("IMDS-1"))
            .steps([
                Action::Fetch,
                Action::Write(CREDENTIALS, String::new()),
                // The CRT cache refreshes credentials without an expiry every 15 minutes.
                Action::Wait(Duration::from_secs(15 * 60 + 10)),
                Action::Fetch,
            ])
            .slow()
            .expect([signed("PROFILE"), no_credentials()])
            .sdk_todo(REREAD, [signed("PROFILE"), signed("PROFILE")]),
        scenario("profile: file that fails to parse")
            .file(CREDENTIALS, "[default\naws_access_key_id = PROFILE\n")
            .expect([no_credentials()]),
        scenario("profile: file that fails to parse, with IMDS available")
            .file(CREDENTIALS, "[default\naws_access_key_id = PROFILE\n")
            .imds(imds("IMDS-1"))
            .expect([signed_with_token("IMDS-1").requests(imds_v2())])
            .sdk_adopted(CHANGELOG, [no_credentials()]),
        scenario("profile: SSO")
            .file(
                CONFIG,
                "[default]\nsso_session = s\nsso_account_id = 123456789012\nsso_role_name = r\n\n[sso-session s]\nsso_region = us-west-2\nsso_start_url = https://example.awsapps.com/start\n",
            )
            .file(
                SSO_TOKEN_CACHE,
                r#"{"accessToken": "sso-token", "expiresAt": "2099-01-01T00:00:00Z", "region": "us-west-2", "startUrl": "https://example.awsapps.com/start"}"#,
            )
            .sso()
            .expect([no_credentials()])
            .sdk_adopted(CHANGELOG, [signed_with_token("SSO-r").requests([sso("r", "sso-token")])]),
        scenario("profile: login_session")
            .file(CONFIG, "[default]\nlogin_session = arn:aws:iam::123456789012:user/u\nregion = us-west-2\n")
            .expect([no_credentials()]),
        scenario("--profile: profile in the credentials file")
            .file(CREDENTIALS, format!("[named]\n{}", keys("NAMED")))
            .profile("named")
            .expect([signed("NAMED")]),
        scenario("--profile: profile in the config file")
            .file(CONFIG, format!("[profile named]\n{}", keys("NAMED")))
            .profile("named")
            .expect([signed("NAMED")]),
        env_keys(scenario("--profile: ignores the environment"), "ENV")
            .file(CREDENTIALS, format!("[named]\n{}", keys("NAMED")))
            .profile("named")
            .expect([signed("NAMED")]),
        scenario("--profile: missing profile")
            .file(CREDENTIALS, format!("[named]\n{}", keys("NAMED")))
            .profile("missing")
            .expect([invalid_config()]),
        scenario("--profile: no shared files")
            .profile("named")
            .expect([invalid_config()]),
    ]
}

fn credential_processes() -> Vec<Scenario> {
    vec![
        credential_process(
            scenario("process: credentials with a session token"),
            r#"{"Version": 1, "AccessKeyId": "PROCESS", "SecretAccessKey": "secret", "SessionToken": "token"}"#,
        )
        .expect([signed_with_token("PROCESS")]),
        credential_process(
            scenario("process: output without \"Version\": 1"),
            r#"{"AccessKeyId": "PROCESS", "SecretAccessKey": "secret"}"#,
        )
        .expect([signed("PROCESS")])
        .sdk_todo(PROCESS_VERSION, [no_credentials()]),
        scenario("process: command fails")
            .file("process.sh", "#!/bin/sh\nexit 1\n")
            .file(CONFIG, "[default]\ncredential_process = {home}/process.sh\n")
            .expect([no_credentials()]),
        scenario("process: command fails, with IMDS available")
            .file("process.sh", "#!/bin/sh\nexit 1\n")
            .file(CONFIG, "[default]\ncredential_process = {home}/process.sh\n")
            .imds(imds("IMDS-1"))
            .expect([signed_with_token("IMDS-1").requests(imds_v2())])
            .sdk_adopted(CHANGELOG, [no_credentials()]),
        expiring_credential_process(scenario("process: command fails at refresh, with IMDS available"))
            .imds(imds("IMDS-1"))
            .steps([
                Action::Fetch,
                Action::Write("process.sh", "#!/bin/sh\nexit 1\n".to_string()),
                Action::Fetch,
            ])
            .expect([signed_with_token("PROCESS"), no_credentials()]),
        expiring_credential_process(scenario("process: profile removed at refresh, with IMDS available"))
            .imds(imds("IMDS-1"))
            .steps([Action::Fetch, Action::Write(CONFIG, String::new()), Action::Fetch])
            .expect([signed_with_token("PROCESS"), signed_with_token("PROCESS")]),
    ]
}

fn assume_role_profiles() -> Vec<Scenario> {
    let role = |source: &str| format!("[default]\nrole_arn = {ROLE_R1}\n{source}");
    vec![
        scenario("role: source_profile")
            .file(CONFIG, role("source_profile = base\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .sts()
            .expect([signed_with_token("ROLE-r1").requests([assume_role("sts.amazonaws.com", "BASE")])])
            .sdk_todo(STS, [no_credentials()]),
        scenario("role: region in the profile")
            .file(CONFIG, role("source_profile = base\nregion = eu-west-1\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .sts()
            .expect([signed_with_token("ROLE-r1").requests([assume_role("sts.eu-west-1.amazonaws.com", "BASE")])])
            .sdk_todo(STS, [no_credentials()]),
        scenario("role: AWS_REGION")
            .file(CONFIG, role("source_profile = base\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .env("AWS_REGION", "us-west-2")
            .sts()
            .expect([signed_with_token("ROLE-r1").requests([assume_role("sts.us-west-2.amazonaws.com", "BASE")])])
            .sdk_todo(STS, [no_credentials()]),
        env_keys(scenario("role: credential_source = Environment"), "ENV")
            .file(
                CONFIG,
                format!("[profile named]\nrole_arn = {ROLE_R1}\ncredential_source = Environment\n"),
            )
            .profile("named")
            .sts()
            .expect([signed_with_token("ROLE-r1").requests([assume_role("sts.amazonaws.com", "ENV")])])
            .sdk_todo(STS, [no_credentials()]),
        scenario("role: credential_source = Ec2InstanceMetadata")
            .file(CONFIG, role("credential_source = Ec2InstanceMetadata\n"))
            .imds(imds("IMDS-1"))
            .sts()
            .expect([signed_with_token("ROLE-r1").requests({
                let mut requests = imds_v2();
                requests.push(assume_role("sts.amazonaws.com", "IMDS-1"));
                requests
            })])
            .sdk_todo(STS, [no_credentials().requests(imds_v2())]),
        scenario("role: role chain")
            .file(
                CONFIG,
                format!("[default]\nrole_arn = {ROLE_R2}\nsource_profile = first\n\n[profile first]\nrole_arn = {ROLE_R1}\nsource_profile = base\n"),
            )
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .sts()
            .expect([signed_with_token("ROLE-r2").requests([
                assume_role("sts.amazonaws.com", "BASE"),
                assume_role("sts.amazonaws.com", "ROLE-r1"),
            ])])
            .sdk_todo(STS, [no_credentials()]),
        scenario("role: role chain, each profile's region")
            .file(
                CONFIG,
                format!("[default]\nrole_arn = {ROLE_R2}\nsource_profile = first\nregion = us-west-2\n\n[profile first]\nrole_arn = {ROLE_R1}\nsource_profile = base\nregion = eu-west-1\n"),
            )
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .sts()
            .expect([signed_with_token("ROLE-r2").requests([
                assume_role("sts.eu-west-1.amazonaws.com", "BASE"),
                assume_role("sts.us-west-2.amazonaws.com", "ROLE-r1"),
            ])])
            .sdk_todo(STS, [no_credentials()]),
        scenario("role: empty region")
            .file(CONFIG, role("source_profile = base\nregion =\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .sts()
            .expect([no_credentials()]),
        scenario("role: credential_source = EcsContainer")
            .file(CONFIG, role("credential_source = EcsContainer\n"))
            .env("AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", "/creds")
            .ecs("ECS")
            .sts()
            .expect([signed_with_token("ROLE-r1").requests([
                ecs("169.254.170.2", "/creds", None),
                assume_role("sts.amazonaws.com", "ECS"),
            ])])
            .sdk_todo(STS, [no_credentials().requests([ecs("169.254.170.2", "/creds", None)])]),
        scenario("role: source_profile with credential_source")
            .file(CONFIG, role("source_profile = base\ncredential_source = Environment\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .sts()
            .expect([signed_with_token("ROLE-r1").requests([assume_role("sts.amazonaws.com", "BASE")])])
            .sdk_adopted(CHANGELOG, [no_credentials()]),
        scenario("role: STS endpoint in a services section")
            .file(
                CONFIG,
                role("source_profile = base\nregion = us-west-2\nservices = custom\n\n[services custom]\nsts =\n  endpoint_url = sts.custom.test\n"),
            )
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .sts()
            .expect([signed_with_token("ROLE-r1").requests([assume_role("sts.custom.test", "BASE")])])
            .sdk_todo(STS, [no_credentials()]),
        scenario("role: STS fails")
            .file(CONFIG, role("source_profile = base\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .sts_failing(403)
            .expect([no_credentials().requests([assume_role("sts.amazonaws.com", "BASE")])])
            .sdk_todo(STS, [no_credentials()]),
        scenario("role: STS fails, with IMDS available")
            .file(CONFIG, role("source_profile = base\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .imds(imds("IMDS-1"))
            .sts_failing(403)
            .expect([signed_with_token("IMDS-1")
                .requests([assume_role("sts.amazonaws.com", "BASE")].into_iter().chain(imds_v2()))])
            .sdk_todo(STS, [no_credentials()]),
        scenario("role: source_profile loop, with IMDS available")
            .file(
                CONFIG,
                format!("[default]\nrole_arn = {ROLE_R1}\nsource_profile = other\n\n[profile other]\nrole_arn = {ROLE_R2}\nsource_profile = default\n"),
            )
            .imds(imds("IMDS-1"))
            .sts()
            .expect([signed_with_token("IMDS-1").requests(imds_v2())])
            .sdk_adopted(CHANGELOG, [no_credentials()]),
        scenario("role: --profile")
            .file(CONFIG, format!("[profile named]\nrole_arn = {ROLE_R1}\nsource_profile = base\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .profile("named")
            .sts()
            .expect([signed_with_token("ROLE-r1").requests([assume_role("sts.amazonaws.com", "BASE")])])
            .sdk_todo(STS, [no_credentials()]),
        scenario("role: AWS_ENDPOINT_URL_STS as a host name")
            .file(CONFIG, role("source_profile = base\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .env("AWS_REGION", "us-west-2")
            .env("AWS_ENDPOINT_URL_STS", "sts.custom.test")
            .sts()
            .expect([signed_with_token("ROLE-r1").requests([assume_role("sts.custom.test", "BASE")])])
            .sdk_todo(STS, [no_credentials()]),
        scenario("role: AWS_ENDPOINT_URL_STS as a URL")
            .file(CONFIG, role("source_profile = base\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .env("AWS_REGION", "us-west-2")
            .env("AWS_ENDPOINT_URL_STS", "https://sts.custom.test")
            .sts()
            .expect([no_credentials()]),
        scenario("role: AWS_ENDPOINT_URL as a URL")
            .file(CONFIG, role("source_profile = base\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .env("AWS_REGION", "us-west-2")
            .env("AWS_ENDPOINT_URL", "https://sts.custom.test")
            .sts()
            .expect([no_credentials()]),
        scenario("role: AWS_ENDPOINT_URL_STS without a region")
            .file(CONFIG, role("source_profile = base\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .env("AWS_ENDPOINT_URL_STS", "sts.custom.test")
            .sts()
            .expect([no_credentials()]),
        scenario("role: endpoint_url in the profile")
            .file(CONFIG, role("source_profile = base\nregion = us-west-2\nendpoint_url = sts.custom.test\n"))
            .file(CREDENTIALS, format!("[base]\n{}", keys("BASE")))
            .sts()
            .expect([signed_with_token("ROLE-r1").requests([assume_role("sts.custom.test", "BASE")])])
            .sdk_todo(STS, [no_credentials()]),
    ]
}

fn web_identity() -> Vec<Scenario> {
    let profile =
        |extra: &str| format!("[default]\nrole_arn = {ROLE_W1}\nweb_identity_token_file = {{home}}/token\n{extra}");
    vec![
        web_identity_env(scenario("web identity: environment, AWS_REGION"))
            .env("AWS_REGION", "eu-west-1")
            .sts()
            .expect([
                signed_with_token("ROLE-w1").requests([assume_role_with_web_identity("sts.eu-west-1.amazonaws.com")])
            ])
            .sdk_todo(STS, [no_credentials()]),
        web_identity_env(scenario("web identity: environment, no region"))
            .sts()
            .expect([no_credentials()]),
        scenario("web identity: profile, region in the profile")
            .file("token", "web-identity-token")
            .file(CONFIG, profile("region = eu-west-1\n"))
            .sts()
            .expect([
                signed_with_token("ROLE-w1").requests([assume_role_with_web_identity("sts.eu-west-1.amazonaws.com")])
            ])
            .sdk_todo(STS, [no_credentials()]),
        scenario("web identity: profile, no region")
            .file("token", "web-identity-token")
            .file(CONFIG, profile(""))
            .sts()
            .expect([no_credentials()]),
        scenario("web identity: profile, region in the credentials file")
            .file("token", "web-identity-token")
            .file(CONFIG, profile(""))
            .file(CREDENTIALS, "[default]\nregion = eu-west-1\n")
            .sts()
            .expect([
                signed_with_token("ROLE-w1").requests([assume_role_with_web_identity("sts.eu-west-1.amazonaws.com")])
            ])
            .sdk_todo(STS, [no_credentials()]),
        web_identity_env(scenario("web identity: AWS_ENDPOINT_URL_STS as a URL"))
            .env("AWS_REGION", "eu-west-1")
            .env("AWS_ENDPOINT_URL_STS", "https://sts.custom.test")
            .sts()
            .expect([no_credentials()])
            .sdk_todo(
                STS,
                [signed_with_token("ROLE-w1").requests([assume_role_with_web_identity("sts.custom.test")])],
            ),
        web_identity_env(scenario("web identity: AWS_ENDPOINT_URL as a URL"))
            .env("AWS_REGION", "eu-west-1")
            .env("AWS_ENDPOINT_URL", "https://sts.custom.test")
            .sts()
            .expect([no_credentials()])
            .sdk_todo(
                STS,
                [signed_with_token("ROLE-w1").requests([assume_role_with_web_identity("sts.custom.test")])],
            ),
        web_identity_env(scenario("web identity: environment, STS endpoint in the profile"))
            .env("AWS_REGION", "eu-west-1")
            .file(CONFIG, "[default]\nendpoint_url = sts.custom.test\n")
            .sts()
            .expect([
                signed_with_token("ROLE-w1").requests([assume_role_with_web_identity("sts.eu-west-1.amazonaws.com")])
            ])
            .sdk_todo(STS, [no_credentials()]),
        web_identity_env(scenario("web identity: STS fails"))
            .env("AWS_REGION", "eu-west-1")
            .sts_failing(403)
            .expect([no_credentials().requests([assume_role_with_web_identity("sts.eu-west-1.amazonaws.com")])])
            .sdk_todo(STS, [no_credentials()]),
        web_identity_env(scenario("web identity: STS fails, with IMDS available"))
            .env("AWS_REGION", "eu-west-1")
            .imds(imds("IMDS-1"))
            .sts_failing(403)
            .expect([signed_with_token("IMDS-1").requests(
                [assume_role_with_web_identity("sts.eu-west-1.amazonaws.com")]
                    .into_iter()
                    .chain(imds_v2()),
            )])
            .sdk_todo(STS, [no_credentials()]),
    ]
}

fn containers() -> Vec<Scenario> {
    vec![
        scenario("ECS: relative URI")
            .env("AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", "/creds")
            .ecs("ECS")
            .expect([signed_with_token("ECS").requests([ecs("169.254.170.2", "/creds", None)])]),
        scenario("ECS: full URI")
            .env("AWS_CONTAINER_CREDENTIALS_FULL_URI", "http://127.0.0.1:8080/creds")
            .ecs("ECS")
            .expect([signed_with_token("ECS").requests([ecs("127.0.0.1:8080", "/creds", None)])]),
        scenario("ECS: full URI with an authorization token")
            .env("AWS_CONTAINER_CREDENTIALS_FULL_URI", "http://127.0.0.1:8080/creds")
            .env("AWS_CONTAINER_AUTHORIZATION_TOKEN", "auth-token")
            .ecs("ECS")
            .expect([signed_with_token("ECS").requests([ecs("127.0.0.1:8080", "/creds", Some("auth-token"))])]),
        scenario("ECS: full URI with an authorization token file")
            .file("auth-token", "file-token")
            .env("AWS_CONTAINER_CREDENTIALS_FULL_URI", "http://127.0.0.1:8080/creds")
            .env("AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE", "{home}/auth-token")
            .ecs("ECS")
            .expect([signed_with_token("ECS").requests([ecs("127.0.0.1:8080", "/creds", Some("file-token"))])]),
        scenario("ECS: used before IMDS")
            .env("AWS_CONTAINER_CREDENTIALS_RELATIVE_URI", "/creds")
            .ecs("ECS")
            .imds(imds("IMDS-1"))
            .expect([signed_with_token("ECS").requests([ecs("169.254.170.2", "/creds", None)])]),
    ]
}

fn instance_metadata() -> Vec<Scenario> {
    let token_failure = |name, token| {
        scenario(name)
            .imds(imds("IMDS-1").token(token))
            .expect([signed_with_token("IMDS-1").requests(imds_v1_after_token())])
    };
    vec![
        scenario("IMDS: IMDSv2")
            .imds(imds("IMDS-1"))
            .expect([signed_with_token("IMDS-1").requests(imds_v2())]),
        token_failure("IMDS: token 403, IMDSv1 fallback", TokenResponse::Status(403))
            .sdk_todo(IMDS, [no_credentials().requests([imds_token()])]),
        token_failure("IMDS: token 404, IMDSv1 fallback", TokenResponse::Status(404))
            .sdk_todo(IMDS, [no_credentials().requests([imds_token()])]),
        token_failure("IMDS: token 405, IMDSv1 fallback", TokenResponse::Status(405))
            .sdk_todo(IMDS, [no_credentials().requests([imds_token()])]),
        token_failure("IMDS: token 500, IMDSv1 fallback", TokenResponse::Status(500))
            .sdk_todo(IMDS, [no_credentials().requests(vec![imds_token(); 4])]),
        scenario("IMDS: token request hangs, retry then IMDSv1 fallback")
            .imds(imds("IMDS-1").token(TokenResponse::Hang))
            .expect([signed_with_token("IMDS-1").requests({
                let mut requests = vec![imds_token()];
                requests.extend(imds_v1_after_token());
                requests
            })])
            .sdk_todo(IMDS, [no_credentials().requests([imds_token()])]),
        scenario("IMDS: token 400")
            .imds(imds("IMDS-1").token(TokenResponse::Status(400)))
            .expect([no_credentials().requests([imds_token()])]),
        token_failure(
            "IMDS: token 403 with AWS_EC2_METADATA_V1_DISABLED",
            TokenResponse::Status(403),
        )
        .env("AWS_EC2_METADATA_V1_DISABLED", "true")
        .sdk_todo(IMDS, [no_credentials().requests([imds_token()])]),
        token_failure(
            "IMDS: token 403 with ec2_metadata_v1_disabled in the profile",
            TokenResponse::Status(403),
        )
        .file(CONFIG, "[default]\nec2_metadata_v1_disabled = true\n")
        .sdk_todo(IMDS, [no_credentials().requests([imds_token()])]),
        scenario("IMDS: AWS_EC2_METADATA_DISABLED=true")
            .env("AWS_EC2_METADATA_DISABLED", "true")
            .imds(imds("IMDS-1"))
            .expect([no_credentials()]),
        scenario("IMDS: AWS_EC2_METADATA_DISABLED=false")
            .env("AWS_EC2_METADATA_DISABLED", "false")
            .imds(imds("IMDS-1"))
            .expect([signed_with_token("IMDS-1").requests(imds_v2())]),
        scenario("IMDS: AWS_EC2_METADATA_DISABLED=1")
            .env("AWS_EC2_METADATA_DISABLED", "1")
            .imds(imds("IMDS-1"))
            .expect([no_credentials()])
            .sdk_todo(METADATA_DISABLED, [signed_with_token("IMDS-1").requests(imds_v2())]),
        scenario("IMDS: refresh before expiry")
            .imds(imds("IMDS-1").expiring_soon())
            .steps([Action::Fetch, Action::ImdsKey("IMDS-2"), Action::Fetch])
            .expect([
                signed_with_token("IMDS-1").requests(imds_v2()),
                signed_with_token("IMDS-2").requests(imds_v2_credentials()),
            ]),
        scenario("IMDS: outage at refresh")
            .imds(imds("IMDS-1").expiring_soon())
            .steps([Action::Fetch, Action::ImdsOutage, Action::Fetch])
            .expect([
                signed_with_token("IMDS-1").requests(imds_v2()),
                no_credentials().requests([imds_v2_credentials()[0].clone()]),
            ])
            .sdk_todo(
                IMDS,
                [
                    signed_with_token("IMDS-1").requests(imds_v2()),
                    signed_with_token("IMDS-1").requests(vec![imds_v2_credentials()[0].clone(); 4]),
                ],
            ),
        scenario("IMDS: concurrent requests share one fetch")
            .imds(imds("IMDS-1"))
            .steps([Action::FetchConcurrently(8)])
            .expect([signed_with_token("IMDS-1").requests(imds_v2())]),
    ]
}

fn order() -> Vec<Scenario> {
    vec![
        env_keys(scenario("order: environment before shared files"), "ENV")
            .file(CREDENTIALS, format!("[default]\n{}", keys("PROFILE")))
            .expect([signed("ENV")]),
        scenario("order: shared files before web identity")
            .file(CREDENTIALS, format!("[default]\n{}", keys("PROFILE")))
            .file("token", "web-identity-token")
            .env("AWS_WEB_IDENTITY_TOKEN_FILE", "{home}/token")
            .env("AWS_ROLE_ARN", ROLE_W1)
            .sts()
            .expect([signed("PROFILE")]),
        scenario("order: shared files before IMDS")
            .file(CREDENTIALS, format!("[default]\n{}", keys("PROFILE")))
            .imds(imds("IMDS-1"))
            .expect([signed("PROFILE")]),
    ]
}
