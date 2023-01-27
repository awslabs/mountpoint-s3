mod lookup_test;
mod mount_test;
mod perm_test;
mod readdir_test;

use fuser::{BackgroundSession, MountOption, Session};
use s3_file_connector::fuse::S3FuseFilesystem;
use s3_file_connector::S3FilesystemConfig;
use tempfile::TempDir;

pub type PutObjectFn = Box<dyn FnMut(&str, &[u8]) -> Result<(), Box<dyn std::error::Error>>>;

mod mock_session {
    use super::*;

    use std::sync::Arc;

    use futures::executor::ThreadPool;
    use s3_client::mock_client::{MockClient, MockClientConfig};

    /// Create a FUSE mount backed by a mock object client that does not talk to S3
    pub fn new(test_name: &str, filesystem_config: S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn) {
        let mount_dir = tempfile::tempdir().unwrap();

        let bucket = "test_bucket";
        let prefix = if test_name.is_empty() {
            test_name.to_string()
        } else {
            format!("{test_name}/")
        };

        let client_config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: 1024 * 1024,
        };
        let client = Arc::new(MockClient::new(client_config));

        let options = vec![
            MountOption::RO,
            MountOption::DefaultPermissions,
            MountOption::FSName("s3_fuse".to_string()),
            MountOption::AutoUnmount,
            MountOption::AllowOther,
        ];

        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();

        let session = Session::new(
            S3FuseFilesystem::new(Arc::clone(&client), runtime, bucket, &prefix, filesystem_config),
            mount_dir.path(),
            &options,
        )
        .unwrap();

        let session = BackgroundSession::new(session).unwrap();

        let put_object = move |key: &str, value: &[u8]| {
            let full_key = format!("{prefix}{key}");
            client.add_object(&full_key, value.into());
            Ok(())
        };

        (mount_dir, session, Box::new(put_object))
    }
}

#[cfg(feature = "s3_tests")]
mod s3_session {
    use super::*;

    use std::future::Future;

    use aws_sdk_s3::types::ByteStream;
    use aws_sdk_s3::Region;
    use rand::rngs::OsRng;
    use rand::RngCore as _;
    use s3_client::{S3Client, S3ClientConfig};

    /// Create a FUSE mount backed by a real S3 client
    pub fn new(test_name: &str, filesystem_config: S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn) {
        let mount_dir = tempfile::tempdir().unwrap();

        let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
        let region = get_test_region();

        let client_config: S3ClientConfig = Default::default();
        let client = S3Client::new(&region, client_config).unwrap();
        let runtime = client.event_loop_group();

        let options = vec![
            MountOption::RO,
            MountOption::DefaultPermissions,
            MountOption::FSName("s3_fuse".to_string()),
            MountOption::AutoUnmount,
            MountOption::AllowOther,
        ];

        let session = Session::new(
            S3FuseFilesystem::new(client, runtime, &bucket, &prefix, filesystem_config),
            mount_dir.path(),
            &options,
        )
        .unwrap();

        let session = BackgroundSession::new(session).unwrap();

        let sdk_client = tokio_block_on(async { get_test_sdk_client(&region).await });
        let put_object = move |key: &str, value: &[u8]| {
            let full_key = format!("{prefix}{key}");
            tokio_block_on(
                sdk_client
                    .put_object()
                    .bucket(&bucket)
                    .key(full_key)
                    .body(ByteStream::from(value.to_vec()))
                    .send(),
            )
            .map(|_| ())
            .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        };

        (mount_dir, session, Box::new(put_object))
    }

    fn get_test_bucket_and_prefix(test_name: &str) -> (String, String) {
        let bucket = std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests");

        // Generate a random nonce to make sure this prefix is truly unique
        let nonce = OsRng.next_u64();

        // Prefix always has a trailing "/" to keep meaning in sync with the S3 API.
        let prefix =
            std::env::var("S3_BUCKET_TEST_PREFIX").expect("Set S3_BUCKET_TEST_PREFIX to run integration tests");
        assert!(prefix.ends_with('/'), "S3_BUCKET_TEST_PREFIX should end in '/'");

        let prefix = format!("{prefix}{test_name}/{nonce}/");

        (bucket, prefix)
    }

    fn get_test_region() -> String {
        std::env::var("S3_REGION").expect("Set S3_REGION to run integration tests")
    }

    async fn get_test_sdk_client(region: &str) -> aws_sdk_s3::Client {
        let config = aws_config::from_env()
            .region(Region::new(region.to_string()))
            .load()
            .await;
        aws_sdk_s3::Client::new(&config)
    }

    fn tokio_block_on<F: Future>(future: F) -> F::Output {
        let runtime = tokio::runtime::Builder::new_current_thread()
            .enable_io()
            .enable_time()
            .build()
            .unwrap();
        runtime.block_on(future)
    }
}
