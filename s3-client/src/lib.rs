mod s3_client;
mod streaming_get;
mod util;

pub use self::s3_client::{S3Client, S3ClientConfig};
pub use self::s3_client::list_objects_v2::S3ObjectInfo;
pub use streaming_get::StreamingGetObject;

#[cfg(test)]
mod tests {
    use crate::s3_client::S3Client;

    #[test]
    fn smoke() {
        let _client = S3Client::new("us-east-1", Default::default()).unwrap();
    }
}
