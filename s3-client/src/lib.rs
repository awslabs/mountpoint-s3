pub mod mock_client;
mod object_client;
mod s3_client;
mod streaming_get;
mod util;

pub use object_client::ObjectClient;
pub use s3_client::get::GetObjectError;
pub use s3_client::{S3Client, S3ClientConfig};
pub use streaming_get::{StreamingGetManager, StreamingGetObject};

#[cfg(test)]
mod tests {
    use crate::s3_client::S3Client;

    #[test]
    fn smoke() {
        let _client = S3Client::new("us-east-1", Default::default()).unwrap();
    }
}
