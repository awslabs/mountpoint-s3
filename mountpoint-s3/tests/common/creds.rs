use aws_credential_types::Credentials;

#[cfg(not(feature = "s3express_tests"))]
use crate::common::s3::get_test_region;
#[cfg(not(feature = "s3express_tests"))]
use aws_config::{Region, sts::AssumeRoleProvider};
#[cfg(not(feature = "s3express_tests"))]
use aws_credential_types::provider::ProvideCredentials;

/// Detect if running on GitHub Actions (GHA) and if so,
/// emit masking string to avoid credentials accidentally being printed.
fn mask_aws_creds_if_on_gha(credentials: &Credentials) {
    if std::env::var_os("GITHUB_ACTIONS").is_some() {
        // GitHub Actions aren't aware of these credential strings since we're sourcing them inside the tests.
        // If we think we're in GitHub Actions environment, register each in stdout.
        // https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#masking-a-value-in-a-log
        println!("::add-mask::{}", credentials.access_key_id());
        println!("::add-mask::{}", credentials.secret_access_key());
        if let Some(token) = credentials.session_token() {
            println!("::add-mask::{token}");
        }
    }
}

pub async fn get_sdk_default_chain_creds() -> Credentials {
    use aws_config::default_provider::credentials::DefaultCredentialsChain;
    use aws_credential_types::provider::ProvideCredentials;

    let sdk_provider = DefaultCredentialsChain::builder().build().await;
    let credentials = sdk_provider
        .provide_credentials()
        .await
        .expect("default chain credentials should be available");
    mask_aws_creds_if_on_gha(&credentials);
    credentials
}

pub fn get_subsession_iam_role() -> String {
    std::env::var("S3_SUBSESSION_IAM_ROLE").expect("Set S3_SUBSESSION_IAM_ROLE to run integration tests")
}

/// Takes the provided IAM Policy and assumes the configured subsession role,
/// applying the given policy to scope down the permissions available.
///
/// This method works by making an AWS Security Token Service (STS) AssumeRole call providing the policy request field.
/// The permissions are the intersection of the identity-based policy of the principal creating the session
/// and the session policies. This means that the subsession role must already have any permissions you wish to use -
/// this method can only reduce the scope of permissions.
///
/// See the [session policies section of the AWS IAM User Guide][session_policies] for more detail.
///
/// [session_policies]: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#policies_session
#[cfg(not(feature = "s3express_tests"))]
pub async fn get_scoped_down_credentials<Policy: AsRef<str>>(policy: Policy) -> Credentials {
    let provider = AssumeRoleProvider::builder(get_subsession_iam_role())
        .region(Region::new(get_test_region()))
        .session_name("test_mountpoint-s3")
        .policy(policy.as_ref())
        .build()
        .await;
    let credentials = provider
        .provide_credentials()
        .await
        .expect("default chain credentials should be available");
    mask_aws_creds_if_on_gha(&credentials);
    credentials
}
