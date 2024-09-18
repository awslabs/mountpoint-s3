use std::env;

fn main() -> anyhow::Result<()> {
    const USE_MOCK_S3_VAR: &str = "USE_MOCK_S3_CLIENT";
    let use_mock_s3_client = match env::var(USE_MOCK_S3_VAR) {
        Ok(env_str_value) => {
            let use_mock_s3_client = env_str_value != "0" && env_str_value.to_lowercase() != "false";
            tracing::warn!("should use mock S3 client?: {use_mock_s3_client}");
            use_mock_s3_client
        },
        Err(env::VarError::NotPresent) => false,
        Err(err) => {
            tracing::error!("failed to read {USE_MOCK_S3_VAR}: {err:?}");
            panic!("could not figure out if mock s3 client should be used")
        }
    };

    if use_mock_s3_client {
        mountpoint_s3::cli::main(mountpoint_s3::cli::create_mock_s3_client)
    } else {
        mountpoint_s3::cli::main(mountpoint_s3::cli::create_s3_client)
    }
}
