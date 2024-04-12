use aws_config::{BehaviorVersion, Region};
use aws_sdk_s3::primitives::ByteStream;
use aws_sdk_sts::config::Credentials;
use rand::RngCore;
use rand_chacha::rand_core::OsRng;

use crate::common::tokio_block_on;

pub fn get_test_bucket_and_prefix(test_name: &str) -> (String, String) {
    let bucket = if cfg!(feature = "s3express_tests") {
        std::env::var("S3_EXPRESS_ONE_ZONE_BUCKET_NAME")
            .expect("Set S3_EXPRESS_ONE_ZONE_BUCKET_NAME to run integration tests")
    } else {
        std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests")
    };

    // Generate a random nonce to make sure this prefix is truly unique
    let nonce = OsRng.next_u64();

    // Prefix always has a trailing "/" to keep meaning in sync with the S3 API.
    let prefix = std::env::var("S3_BUCKET_TEST_PREFIX").unwrap_or(String::from("mountpoint-test/"));
    assert!(prefix.ends_with('/'), "S3_BUCKET_TEST_PREFIX should end in '/'");

    let prefix = format!("{prefix}{test_name}/{nonce}/");

    (bucket, prefix)
}

pub fn get_test_bucket_forbidden() -> String {
    std::env::var("S3_FORBIDDEN_BUCKET_NAME").expect("Set S3_FORBIDDEN_BUCKET_NAME to run integration tests")
}

pub fn get_test_region() -> String {
    std::env::var("S3_REGION").expect("Set S3_REGION to run integration tests")
}

pub fn get_subsession_iam_role() -> String {
    std::env::var("S3_SUBSESSION_IAM_ROLE").expect("Set S3_SUBSESSION_IAM_ROLE to run integration tests")
}

pub async fn get_test_sdk_client(region: &str) -> aws_sdk_s3::Client {
    let sdk_config = aws_config::defaults(BehaviorVersion::latest())
        .region(Region::new(region.to_owned()))
        .load()
        .await;
    let mut s3_config = aws_sdk_s3::config::Builder::from(&sdk_config);

    // TODO: remove when the Rust SDK supports S3 Express One Zone. For now, we force the SDK to
    // always use SigV4, because it doesn't yet know about the `sigv4-s3express` auth scheme.
    if cfg!(feature = "s3express_tests") {
        #[derive(Debug)]
        struct ForceSigV4EndpointResolver;

        impl aws_sdk_s3::config::endpoint::ResolveEndpoint for ForceSigV4EndpointResolver {
            fn resolve_endpoint<'a>(
                &'a self,
                params: &'a aws_sdk_s3::config::endpoint::Params,
            ) -> aws_sdk_s3::config::endpoint::EndpointFuture<'a> {
                let fut = async {
                    let resolver = aws_sdk_s3::config::endpoint::DefaultResolver::new();
                    let endpoint = resolver.resolve_endpoint(params).await?;
                    // Build new properties that force SigV4
                    let mut auth_schemes = endpoint
                        .properties()
                        .get("authSchemes")
                        .expect("no auth scheme")
                        .clone();
                    let auth_scheme = auth_schemes.as_array_mut().unwrap().get_mut(0).unwrap();
                    let auth_scheme_map = auth_scheme.as_object_mut().unwrap();
                    assert_eq!(
                        auth_scheme_map.get("name").unwrap().as_string().unwrap(),
                        "sigv4-s3express"
                    );
                    auth_scheme_map.insert("name".to_string(), "sigv4".to_string().into());
                    // Replace the properties and return the endpoint
                    Ok(endpoint.into_builder().property("authSchemes", auth_schemes).build())
                };
                aws_sdk_s3::config::endpoint::EndpointFuture::new(fut)
            }
        }

        s3_config = s3_config.endpoint_resolver(ForceSigV4EndpointResolver);
    }

    aws_sdk_s3::Client::from_conf(s3_config.build())
}

pub fn get_test_kms_key_id() -> String {
    std::env::var("KMS_TEST_KEY_ID").expect("Set KMS_TEST_KEY_ID to run integration tests")
}

pub fn create_objects(bucket: &str, prefix: &str, region: &str, key: &str, value: &[u8]) {
    let sdk_client = tokio_block_on(get_test_sdk_client(region));
    let full_key = format!("{prefix}{key}");
    tokio_block_on(
        sdk_client
            .put_object()
            .bucket(bucket)
            .key(full_key)
            .body(ByteStream::from(value.to_vec()))
            .send(),
    )
    .unwrap();
}

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
            println!("::add-mask::{}", token);
        }
    }
}

pub async fn get_test_sdk_sts_client() -> aws_sdk_sts::Client {
    let config = aws_config::defaults(BehaviorVersion::latest())
        .region(Region::new(get_test_region()))
        .load()
        .await;
    aws_sdk_sts::Client::new(&config)
}

pub async fn get_scoped_down_credentials(policy: &str) -> Credentials {
    let sts_client = get_test_sdk_sts_client().await;
    let nonce = OsRng.next_u64();
    let assume_role_response = sts_client
        .assume_role()
        .role_arn(get_subsession_iam_role())
        .role_session_name(format!("mountpoint-s3-tests-{nonce}"))
        .policy(policy)
        .send()
        .await
        .expect("assume_role with valid ARN and policy should succeed");
    let credentials = assume_role_response
        .credentials()
        .expect("credentials should be present if assume_role succeeded")
        .to_owned();
    let credentials = Credentials::new(
        credentials.access_key_id(),
        credentials.secret_access_key(),
        Some(credentials.session_token().to_owned()),
        None,
        "scoped_down_sts_creds",
    );
    mask_aws_creds_if_on_gha(&credentials);
    credentials
}
