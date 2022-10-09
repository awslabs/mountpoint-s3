pub mod mock_client;
mod object_client;
mod prefetcher;
mod s3_client;
mod util;

pub use object_client::{ListObjectsResult, ObjectClient};
pub use prefetcher::{Prefetcher, PrefetchingGetRequest};
pub use s3_client::get::GetObjectError;
pub use s3_client::head_bucket::HeadBucketError;
pub use s3_client::{S3Client, S3ClientConfig, S3RequestError};

#[cfg(test)]
mod tests {
    use crate::s3_client::S3Client;

    #[test]
    fn smoke() {
        let _client = S3Client::new("us-east-1", Default::default()).unwrap();
    }
}
