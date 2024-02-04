use aws_config::{BehaviorVersion, Region};
use aws_sdk_s3::primitives::ByteStream;
use futures::Future;
use rand::RngCore;
use rand_chacha::rand_core::OsRng;

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

pub fn tokio_block_on<F: Future>(future: F) -> F::Output {
    let runtime = tokio::runtime::Builder::new_current_thread()
        .enable_io()
        .enable_time()
        .build()
        .unwrap();
    runtime.block_on(future)
}
