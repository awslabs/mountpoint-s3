mod consistency_test;
mod fork_test;
mod lookup_test;
mod mkdir_test;
mod perm_test;
mod prefetch_test;
mod read_test;
mod readdir_test;
mod rmdir_test;
mod semantics_doc_test;
mod setattr_test;
mod unlink_test;
mod write_test;

use std::ffi::OsStr;
use std::fs::ReadDir;
use std::path::Path;
use std::sync::Arc;

use aws_sdk_s3::primitives::ByteStream;
use aws_sdk_sts::config::Region;
use fuser::{BackgroundSession, MountOption, Session};
use futures::Future;
use mountpoint_s3::data_cache::DataCache;
use mountpoint_s3::fuse::S3FuseFilesystem;
use mountpoint_s3::prefetch::{Prefetch, PrefetcherConfig};
use mountpoint_s3::prefix::Prefix;
use mountpoint_s3::S3FilesystemConfig;
use mountpoint_s3_client::types::PutObjectParams;
use mountpoint_s3_client::ObjectClient;
use rand::RngCore;
use rand_chacha::rand_core::OsRng;
use tempfile::TempDir;

pub trait TestClient: Send {
    fn put_object(&mut self, key: &str, value: &[u8]) -> Result<(), Box<dyn std::error::Error>> {
        self.put_object_params(key, value, PutObjectParams::default())
    }

    fn put_object_params(
        &mut self,
        key: &str,
        value: &[u8],
        params: PutObjectParams,
    ) -> Result<(), Box<dyn std::error::Error>>;

    fn remove_object(&mut self, key: &str) -> Result<(), Box<dyn std::error::Error>>;

    fn contains_dir(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>>;

    fn contains_key(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>>;

    fn is_upload_in_progress(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>>;

    fn get_object_storage_class(&self, key: &str) -> Result<Option<String>, Box<dyn std::error::Error>>;

    fn restore_object(&mut self, key: &str, expedited: bool) -> Result<(), Box<dyn std::error::Error>>;

    fn is_object_restored(&mut self, key: &str) -> Result<bool, Box<dyn std::error::Error>>;
}

pub type TestClientBox = Box<dyn TestClient>;

pub struct TestSessionConfig {
    pub part_size: usize,
    pub filesystem_config: S3FilesystemConfig,
    pub prefetcher_config: PrefetcherConfig,
}

impl Default for TestSessionConfig {
    fn default() -> Self {
        Self {
            part_size: 8 * 1024 * 1024,
            filesystem_config: Default::default(),
            prefetcher_config: Default::default(),
        }
    }
}

fn create_fuse_session<Client, Prefetcher>(
    client: Client,
    prefetcher: Prefetcher,
    bucket: &str,
    prefix: &str,
    mount_dir: &Path,
    filesystem_config: S3FilesystemConfig,
) -> BackgroundSession
where
    Client: ObjectClient + Send + Sync + 'static,
    Prefetcher: Prefetch + Send + Sync + 'static,
{
    let options = vec![
        MountOption::DefaultPermissions,
        MountOption::FSName("mountpoint-s3".to_string()),
        MountOption::NoAtime,
        MountOption::AutoUnmount,
        MountOption::AllowOther,
    ];

    let prefix = Prefix::new(prefix).expect("valid prefix");
    let session = Session::new(
        S3FuseFilesystem::new(client, prefetcher, bucket, &prefix, filesystem_config),
        mount_dir,
        &options,
    )
    .unwrap();

    BackgroundSession::new(session).unwrap()
}

mod mock_session {
    use super::*;

    use futures::executor::ThreadPool;
    use mountpoint_s3::prefetch::{caching_prefetch, default_prefetch};
    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig, MockObject};

    /// Create a FUSE mount backed by a mock object client that does not talk to S3
    pub fn new(test_name: &str, test_config: TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox) {
        let mount_dir = tempfile::tempdir().unwrap();

        let bucket = "test_bucket";
        let prefix = if test_name.is_empty() {
            test_name.to_string()
        } else {
            format!("{test_name}/")
        };

        let client_config = MockClientConfig {
            bucket: bucket.to_string(),
            part_size: test_config.part_size,
        };
        let client = Arc::new(MockClient::new(client_config));
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let prefetcher = default_prefetch(runtime, test_config.prefetcher_config);
        let session = create_fuse_session(
            client.clone(),
            prefetcher,
            bucket,
            &prefix,
            mount_dir.path(),
            test_config.filesystem_config,
        );
        let test_client = create_test_client(client, &prefix);

        (mount_dir, session, test_client)
    }

    /// Create a FUSE mount backed by a mock object client, with caching, that does not talk to S3
    pub fn new_with_cache<Cache>(
        cache: Cache,
    ) -> impl FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox)
    where
        Cache: DataCache + Send + Sync + 'static,
    {
        |test_name, test_config| {
            let mount_dir = tempfile::tempdir().unwrap();

            let bucket = "test_bucket";
            let prefix = if test_name.is_empty() {
                test_name.to_string()
            } else {
                format!("{test_name}/")
            };

            let client_config = MockClientConfig {
                bucket: bucket.to_string(),
                part_size: test_config.part_size,
            };
            let client = Arc::new(MockClient::new(client_config));
            let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
            let prefetcher = caching_prefetch(cache, runtime, test_config.prefetcher_config);
            let session = create_fuse_session(
                client.clone(),
                prefetcher,
                bucket,
                &prefix,
                mount_dir.path(),
                test_config.filesystem_config,
            );
            let test_client = create_test_client(client, &prefix);

            (mount_dir, session, test_client)
        }
    }

    fn create_test_client(client: Arc<MockClient>, prefix: &str) -> TestClientBox {
        let test_client = MockTestClient {
            prefix: prefix.to_owned(),
            client,
        };

        Box::new(test_client)
    }

    struct MockTestClient {
        prefix: String,
        client: Arc<MockClient>,
    }

    impl TestClient for MockTestClient {
        fn put_object_params(
            &mut self,
            key: &str,
            value: &[u8],
            params: PutObjectParams,
        ) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let mut mock_object = MockObject::from(value);
            mock_object.set_storage_class(params.storage_class);
            self.client.add_object(&full_key, mock_object);
            Ok(())
        }

        fn remove_object(&mut self, key: &str) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            self.client.remove_object(&full_key);
            Ok(())
        }

        fn contains_dir(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            Ok(self.client.contains_prefix(&full_key))
        }

        fn contains_key(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            Ok(self.client.contains_key(&full_key))
        }

        fn is_upload_in_progress(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            Ok(self.client.is_upload_in_progress(&full_key))
        }

        fn get_object_storage_class(&self, key: &str) -> Result<Option<String>, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            self.client
                .get_object_storage_class(&full_key)
                .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        }

        fn restore_object(&mut self, key: &str, _expedited: bool) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            self.client
                .restore_object(&full_key)
                .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        }

        fn is_object_restored(&mut self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            self.client
                .is_object_restored(&full_key)
                .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        }
    }
}

#[cfg(feature = "s3_tests")]
mod s3_session {
    use super::*;

    use std::future::Future;

    use aws_sdk_s3::config::Region;
    use aws_sdk_s3::operation::head_object::HeadObjectError;
    use aws_sdk_s3::primitives::ByteStream;
    use aws_sdk_s3::types::{ChecksumAlgorithm, GlacierJobParameters, RestoreRequest, Tier};
    use aws_sdk_s3::Client;
    use mountpoint_s3::prefetch::{caching_prefetch, default_prefetch};
    use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
    use mountpoint_s3_client::S3CrtClient;

    /// Create a FUSE mount backed by a real S3 client
    pub fn new(test_name: &str, test_config: TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox) {
        let mount_dir = tempfile::tempdir().unwrap();

        let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
        let region = get_test_region();

        let client_config = S3ClientConfig::default()
            .part_size(test_config.part_size)
            .endpoint_config(EndpointConfig::new(&region));
        let client = S3CrtClient::new(client_config).unwrap();
        let runtime = client.event_loop_group();
        let prefetcher = default_prefetch(runtime, test_config.prefetcher_config);
        let session = create_fuse_session(
            client,
            prefetcher,
            &bucket,
            &prefix,
            mount_dir.path(),
            test_config.filesystem_config,
        );
        let test_client = create_test_client(&region, &bucket, &prefix);

        (mount_dir, session, test_client)
    }

    /// Create a FUSE mount backed by a real S3 client, with caching
    pub fn new_with_cache<Cache>(
        cache: Cache,
    ) -> impl FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox)
    where
        Cache: DataCache + Send + Sync + 'static,
    {
        |test_name, test_config| {
            let mount_dir = tempfile::tempdir().unwrap();

            let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
            let region = get_test_region();

            let client_config = S3ClientConfig::default()
                .part_size(test_config.part_size)
                .endpoint_config(EndpointConfig::new(&region));
            let client = S3CrtClient::new(client_config).unwrap();
            let runtime = client.event_loop_group();
            let prefetcher = caching_prefetch(cache, runtime, test_config.prefetcher_config);
            let session = create_fuse_session(
                client,
                prefetcher,
                &bucket,
                &prefix,
                mount_dir.path(),
                test_config.filesystem_config,
            );
            let test_client = create_test_client(&region, &bucket, &prefix);

            (mount_dir, session, test_client)
        }
    }

    fn create_test_client(region: &str, bucket: &str, prefix: &str) -> TestClientBox {
        let sdk_client = tokio_block_on(async { get_test_sdk_client(region).await });
        let test_client = SDKTestClient {
            prefix: prefix.to_owned(),
            bucket: bucket.to_owned(),
            sdk_client,
        };

        Box::new(test_client)
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

    struct SDKTestClient {
        prefix: String,
        bucket: String,
        sdk_client: Client,
    }

    impl TestClient for SDKTestClient {
        fn put_object_params(
            &mut self,
            key: &str,
            value: &[u8],
            params: PutObjectParams,
        ) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let mut request = self
                .sdk_client
                .put_object()
                .bucket(&self.bucket)
                .key(full_key)
                .body(ByteStream::from(value.to_vec()));
            if let Some(storage_class) = params.storage_class {
                request = request.set_storage_class(Some(storage_class.as_str().into()));
            }
            if params.trailing_checksums {
                request = request.set_checksum_algorithm(Some(ChecksumAlgorithm::Crc32C));
            }
            tokio_block_on(request.send())
                .map(|_| ())
                .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        }

        fn remove_object(&mut self, key: &str) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            tokio_block_on(
                self.sdk_client
                    .delete_object()
                    .bucket(&self.bucket)
                    .key(full_key)
                    .send(),
            )
            .map(|_| ())
            .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        }

        fn contains_dir(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key_suffixed = format!("{}{}/", self.prefix, key);
            tokio_block_on(
                self.sdk_client
                    .list_objects_v2()
                    .bucket(&self.bucket)
                    .delimiter('/')
                    .prefix(full_key_suffixed)
                    .send(),
            )
            .map(|output| {
                let len = output.contents().map(|c| c.len()).unwrap_or_default()
                    + output.common_prefixes().map(|c| c.len()).unwrap_or_default();
                len > 0
            })
            .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        }

        fn contains_key(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let result = tokio_block_on(self.sdk_client.head_object().bucket(&self.bucket).key(full_key).send());
            match result {
                Ok(_) => Ok(true),
                Err(e) => match e.into_service_error() {
                    HeadObjectError::NotFound(_) => Ok(false),
                    err => Err(Box::new(err) as Box<dyn std::error::Error>),
                },
            }
        }

        fn is_upload_in_progress(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            tokio_block_on(
                self.sdk_client
                    .list_multipart_uploads()
                    .bucket(&self.bucket)
                    .prefix(full_key)
                    .send(),
            )
            .map(|output| output.uploads().map_or(0, |u| u.len()) > 0)
            .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        }

        fn get_object_storage_class(&self, key: &str) -> Result<Option<String>, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            tokio_block_on(
                self.sdk_client
                    .get_object_attributes()
                    .bucket(&self.bucket)
                    .key(full_key)
                    .object_attributes(aws_sdk_s3::types::ObjectAttributes::StorageClass)
                    .send(),
            )
            .map(|output| output.storage_class().map(|s| s.as_str().to_string()))
            .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        }

        // Schudule restoration of an object, do not wait until completion. Expidited restoration completes within 1-5 min for GLACIER and is not available for DEEP_ARCHIVE.
        // https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html?icmpid=docs_amazons3_console#restoring-objects-upgrade-tier
        fn restore_object(&mut self, key: &str, expedited: bool) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let tier = if expedited { Tier::Expedited } else { Tier::Bulk };
            tokio_block_on(
                self.sdk_client
                    .restore_object()
                    .bucket(&self.bucket)
                    .key(full_key)
                    .set_restore_request(Some(
                        RestoreRequest::builder()
                            .set_days(Some(1))
                            .set_glacier_job_parameters(Some(
                                GlacierJobParameters::builder().set_tier(Some(tier)).build(),
                            ))
                            .build(),
                    ))
                    .send(),
            )
            .map(|_| ())
            .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        }

        fn is_object_restored(&mut self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            tokio_block_on(self.sdk_client.head_object().bucket(&self.bucket).key(full_key).send())
                .map(|output| output.restore().unwrap().contains("ongoing-request=\"false\""))
                .map_err(|e| Box::new(e) as Box<dyn std::error::Error>)
        }
    }
}

/// Take a `read_dir` iterator and return the entry names
pub fn read_dir_to_entry_names(read_dir_iter: ReadDir) -> Vec<String> {
    read_dir_iter
        .map(|entry| {
            let entry = entry.expect("no io err during readdir");
            let entry_path = entry.path();
            let name = entry_path
                .file_name()
                .and_then(OsStr::to_str)
                .expect("path should end with valid unicode file or dir name");
            name.to_owned()
        })
        .collect::<Vec<_>>()
}

pub fn get_test_bucket_and_prefix(test_name: &str) -> (String, String) {
    let bucket = std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests");

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

pub fn create_objects(bucket: &str, prefix: &str, region: &str, key: &str, value: &[u8]) {
    let config = tokio_block_on(aws_config::from_env().region(Region::new(region.to_string())).load());
    let sdk_client = aws_sdk_s3::Client::new(&config);
    let full_key = format!("{prefix}{key}");
    tokio_block_on(async move {
        sdk_client
            .put_object()
            .bucket(bucket)
            .key(full_key)
            .body(ByteStream::from(value.to_vec()))
            .send()
            .await
            .unwrap()
    });
}

pub fn tokio_block_on<F: Future>(future: F) -> F::Output {
    let runtime = tokio::runtime::Builder::new_current_thread()
        .enable_io()
        .enable_time()
        .build()
        .unwrap();
    runtime.block_on(future)
}
