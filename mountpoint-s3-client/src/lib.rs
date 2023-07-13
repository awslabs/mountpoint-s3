mod build_info;
pub mod checksums;
mod endpoint;
pub mod failure_client;
mod imds_crt_client;
pub mod mock_client;
mod object_client;
mod s3_crt_client;
mod util;

pub use endpoint::{AddressingStyle, Endpoint};
pub use imds_crt_client::ImdsCrtClient;
pub use object_client::*;
pub use s3_crt_client::head_bucket::HeadBucketError;
pub use s3_crt_client::{S3ClientAuthConfig, S3ClientConfig, S3CrtClient, S3RequestError};

#[cfg(test)]
mod tests {
    use crate::s3_crt_client::S3CrtClient;

    #[test]
    fn smoke() {
        let _client = S3CrtClient::new("us-east-1", Default::default()).unwrap();
    }
}
