use std::ffi::OsStr;
use std::fs::ReadDir;
use std::path::Path;
use std::sync::Arc;

use fuser::{BackgroundSession, MountOption, Session};
use futures::task::Spawn;
use mountpoint_s3::data_cache::DataCache;
use mountpoint_s3::fuse::S3FuseFilesystem;
use mountpoint_s3::prefetch::{Prefetch, PrefetcherConfig};
use mountpoint_s3::prefix::Prefix;
use mountpoint_s3::{S3Filesystem, S3FilesystemConfig};
use mountpoint_s3_client::checksums::crc32c;
use mountpoint_s3_client::config::S3ClientAuthConfig;
use mountpoint_s3_client::types::{Checksum, PutObjectSingleParams, UploadChecksum};
use mountpoint_s3_client::ObjectClient;
use tempfile::TempDir;

use crate::common::{get_crt_client_auth_config, tokio_block_on};

pub trait TestClient: Send {
    fn put_object(&self, key: &str, value: &[u8]) -> Result<(), Box<dyn std::error::Error>> {
        self.put_object_single(
            key,
            value,
            PutObjectSingleParams::new().checksum(Some(UploadChecksum::Crc32c(crc32c::checksum(value)))),
        )
    }

    fn put_object_single(
        &self,
        key: &str,
        value: &[u8],
        params: PutObjectSingleParams,
    ) -> Result<(), Box<dyn std::error::Error>>;

    fn remove_object(&self, key: &str) -> Result<(), Box<dyn std::error::Error>>;

    fn contains_dir(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>>;

    fn contains_key(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>>;

    fn is_upload_in_progress(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>>;

    fn get_object_storage_class(&self, key: &str) -> Result<Option<String>, Box<dyn std::error::Error>>;

    fn get_object_checksums(&self, key: &str) -> Result<ObjectChecksums, Box<dyn std::error::Error>>;

    fn get_object_size(&self, key: &str) -> Result<usize, Box<dyn std::error::Error>>;

    fn restore_object(&self, key: &str, expedited: bool) -> Result<(), Box<dyn std::error::Error>>;

    fn is_object_restored(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>>;
}

/// Checksum for the whole object, if present, and [Vec] of the checksum for each part, if present.
type ObjectChecksums = (Option<Checksum>, Vec<Option<Checksum>>);

pub struct TestSessionConfig {
    pub part_size: usize,
    pub initial_read_window_size: usize,
    pub filesystem_config: S3FilesystemConfig,
    pub prefetcher_config: PrefetcherConfig,
    pub auth_config: S3ClientAuthConfig,
}

impl Default for TestSessionConfig {
    fn default() -> Self {
        let part_size = 8 * 1024 * 1024;
        Self {
            part_size,
            initial_read_window_size: part_size,
            filesystem_config: Default::default(),
            prefetcher_config: Default::default(),
            auth_config: Default::default(),
        }
    }
}

impl TestSessionConfig {
    pub fn with_credentials(mut self, credentials: aws_sdk_s3::config::Credentials) -> Self {
        self.auth_config = get_crt_client_auth_config(credentials);
        self
    }
}

// Holds resources for the testing session and cleans them on drop.
pub struct TestSession {
    mount_dir: TempDir,
    test_client: Box<dyn TestClient>,
    // Option so we can explicitly unmount
    session: Option<BackgroundSession>,
}

impl TestSession {
    pub fn new(mount_dir: TempDir, session: BackgroundSession, test_client: impl TestClient + 'static) -> Self {
        Self {
            mount_dir,
            test_client: Box::new(test_client),
            session: Some(session),
        }
    }

    pub fn mount_path(&self) -> &Path {
        self.mount_dir.path()
    }

    pub fn client(&self) -> &dyn TestClient {
        self.test_client.as_ref()
    }
}

impl Drop for TestSession {
    fn drop(&mut self) {
        // Unmount first by dropping the background session
        self.session.take();
    }
}

pub trait TestSessionCreator: FnOnce(&str, TestSessionConfig) -> TestSession {}

// Since trait aliases are not stable yet, we can't just `type TestSessionCreator = FnOnce(...)`.
// As a workaround we can subtrait `FnOnce(...)` and have this blank impl to allow
// `FnOnce(...)` in place of `impl TestSessionCreator`.
impl<T> TestSessionCreator for T where T: FnOnce(&str, TestSessionConfig) -> TestSession {}

pub fn create_fuse_session<Client, Prefetcher, Runtime>(
    client: Client,
    prefetcher: Prefetcher,
    runtime: Runtime,
    bucket: &str,
    prefix: &str,
    mount_dir: &Path,
    filesystem_config: S3FilesystemConfig,
) -> BackgroundSession
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
    Prefetcher: Prefetch + Send + Sync + 'static,
    Runtime: Spawn + Send + Sync + 'static,
{
    let options = vec![
        MountOption::DefaultPermissions,
        MountOption::FSName("mountpoint-s3".to_string()),
        MountOption::NoAtime,
        MountOption::AllowOther,
    ];

    let prefix = Prefix::new(prefix).expect("valid prefix");
    let session = Session::new(
        S3FuseFilesystem::new(S3Filesystem::new(
            client,
            prefetcher,
            runtime,
            bucket,
            &prefix,
            filesystem_config,
        )),
        mount_dir,
        &options,
    )
    .unwrap();

    BackgroundSession::new(session).unwrap()
}

pub mod mock_session {
    use super::*;

    use futures::executor::ThreadPool;
    use mountpoint_s3::prefetch::{caching_prefetch, default_prefetch};
    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig};
    use mountpoint_s3_client::types::{HeadObjectParams, ObjectAttribute};

    const BUCKET_NAME: &str = "test_bucket";

    /// Create a FUSE mount backed by a mock object client that does not talk to S3
    pub fn new(test_name: &str, test_config: TestSessionConfig) -> TestSession {
        let mount_dir = tempfile::tempdir().unwrap();

        let prefix = if test_name.is_empty() {
            test_name.to_string()
        } else {
            format!("{test_name}/")
        };

        let client_config = MockClientConfig {
            bucket: BUCKET_NAME.to_string(),
            part_size: test_config.part_size,
            enable_backpressure: true,
            initial_read_window_size: test_config.initial_read_window_size,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let prefetcher = default_prefetch(runtime.clone(), test_config.prefetcher_config);
        let session = create_fuse_session(
            client.clone(),
            prefetcher,
            runtime,
            BUCKET_NAME,
            &prefix,
            mount_dir.path(),
            test_config.filesystem_config,
        );
        let test_client = create_test_client(client, &prefix);

        TestSession::new(mount_dir, session, test_client)
    }

    /// Create a FUSE mount backed by a mock object client, with caching, that does not talk to S3
    pub fn new_with_cache<Cache>(cache: Cache) -> impl TestSessionCreator
    where
        Cache: DataCache + Send + Sync + 'static,
    {
        |test_name, test_config| {
            let mount_dir = tempfile::tempdir().unwrap();

            let prefix = if test_name.is_empty() {
                test_name.to_string()
            } else {
                format!("{test_name}/")
            };

            let client_config = MockClientConfig {
                bucket: BUCKET_NAME.to_string(),
                part_size: test_config.part_size,
                enable_backpressure: true,
                initial_read_window_size: test_config.initial_read_window_size,
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(client_config));
            let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
            let prefetcher = caching_prefetch(cache, runtime.clone(), test_config.prefetcher_config);
            let session = create_fuse_session(
                client.clone(),
                prefetcher,
                runtime,
                BUCKET_NAME,
                &prefix,
                mount_dir.path(),
                test_config.filesystem_config,
            );
            let test_client = create_test_client(client, &prefix);

            TestSession::new(mount_dir, session, test_client)
        }
    }

    fn create_test_client(client: Arc<MockClient>, prefix: &str) -> impl TestClient {
        MockTestClient {
            prefix: prefix.to_owned(),
            client,
        }
    }

    struct MockTestClient {
        prefix: String,
        client: Arc<MockClient>,
    }

    impl TestClient for MockTestClient {
        fn put_object_single(
            &self,
            key: &str,
            value: &[u8],
            params: PutObjectSingleParams,
        ) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            _ = tokio_block_on(self.client.put_object_single(BUCKET_NAME, &full_key, &params, value))?;
            Ok(())
        }

        fn remove_object(&self, key: &str) -> Result<(), Box<dyn std::error::Error>> {
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
            Ok(self.client.get_object_storage_class(&full_key)?)
        }

        fn get_object_checksums(&self, key: &str) -> Result<ObjectChecksums, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let attrs = tokio_block_on(self.client.get_object_attributes(
                BUCKET_NAME,
                &full_key,
                None,
                None,
                &[ObjectAttribute::ObjectParts, ObjectAttribute::Checksum],
            ))?;
            let part_checksums = attrs
                .object_parts
                .map(|parts| {
                    parts
                        .parts
                        .map(|parts| parts.into_iter().map(|part| part.checksum).collect())
                        .unwrap_or_default()
                })
                .unwrap_or_default();
            Ok((attrs.checksum, part_checksums))
        }

        fn get_object_size(&self, key: &str) -> Result<usize, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let head_object = tokio_block_on(self.client.head_object(
                BUCKET_NAME,
                &full_key,
                &HeadObjectParams::new(),
            ))?;
            Ok(head_object.size as usize)
        }

        fn restore_object(&self, key: &str, _expedited: bool) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            Ok(self.client.restore_object(&full_key)?)
        }

        fn is_object_restored(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            Ok(self.client.is_object_restored(&full_key)?)
        }
    }
}

#[cfg(feature = "s3_tests")]
pub mod s3_session {
    use super::*;

    use crate::common::s3::{
        get_test_bucket_and_prefix, get_test_endpoint_config, get_test_region, get_test_sdk_client,
    };
    use aws_sdk_s3::operation::head_object::HeadObjectError;
    use aws_sdk_s3::primitives::ByteStream;
    use aws_sdk_s3::types::{ChecksumAlgorithm, GlacierJobParameters, RestoreRequest, Tier};
    use aws_sdk_s3::Client;
    use mountpoint_s3::prefetch::{caching_prefetch, default_prefetch};
    use mountpoint_s3_client::config::S3ClientConfig;
    use mountpoint_s3_client::types::Checksum;
    use mountpoint_s3_client::S3CrtClient;

    /// Create a FUSE mount backed by a real S3 client
    pub fn new(test_name: &str, test_config: TestSessionConfig) -> TestSession {
        let mount_dir = tempfile::tempdir().unwrap();

        let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
        let region = get_test_region();

        let client_config = S3ClientConfig::default()
            .part_size(test_config.part_size)
            .endpoint_config(get_test_endpoint_config())
            .auth_config(test_config.auth_config)
            .read_backpressure(true)
            .initial_read_window(test_config.initial_read_window_size);
        let client = S3CrtClient::new(client_config).unwrap();
        let runtime = client.event_loop_group();
        let prefetcher = default_prefetch(runtime.clone(), test_config.prefetcher_config);
        let session = create_fuse_session(
            client,
            prefetcher,
            runtime,
            &bucket,
            &prefix,
            mount_dir.path(),
            test_config.filesystem_config,
        );
        let test_client = create_test_client(&region, &bucket, &prefix);

        TestSession::new(mount_dir, session, test_client)
    }

    /// Create a FUSE mount backed by a real S3 client, with caching
    pub fn new_with_cache<Cache>(cache: Cache) -> impl TestSessionCreator
    where
        Cache: DataCache + Send + Sync + 'static,
    {
        |test_name, test_config| {
            let mount_dir = tempfile::tempdir().unwrap();

            let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
            let region = get_test_region();

            let client = create_crt_client(
                test_config.part_size,
                test_config.initial_read_window_size,
                Default::default(),
            );
            let runtime = client.event_loop_group();
            let prefetcher = caching_prefetch(cache, runtime.clone(), test_config.prefetcher_config);
            let session = create_fuse_session(
                client,
                prefetcher,
                runtime,
                &bucket,
                &prefix,
                mount_dir.path(),
                test_config.filesystem_config,
            );
            let test_client = create_test_client(&region, &bucket, &prefix);

            TestSession::new(mount_dir, session, test_client)
        }
    }

    pub fn create_crt_client(
        part_size: usize,
        initial_read_window_size: usize,
        auth_config: S3ClientAuthConfig,
    ) -> S3CrtClient {
        let client_config = S3ClientConfig::default()
            .part_size(part_size)
            .endpoint_config(get_test_endpoint_config())
            .read_backpressure(true)
            .initial_read_window(initial_read_window_size)
            .auth_config(auth_config);
        S3CrtClient::new(client_config).unwrap()
    }

    fn create_test_client(region: &str, bucket: &str, prefix: &str) -> impl TestClient {
        let sdk_client = tokio_block_on(async { get_test_sdk_client(region).await });
        SDKTestClient {
            prefix: prefix.to_owned(),
            bucket: bucket.to_owned(),
            sdk_client,
        }
    }

    struct SDKTestClient {
        prefix: String,
        bucket: String,
        sdk_client: Client,
    }

    impl TestClient for SDKTestClient {
        fn put_object_single(
            &self,
            key: &str,
            value: &[u8],
            params: PutObjectSingleParams,
        ) -> Result<(), Box<dyn std::error::Error>> {
            let checksum_algorithm = params.checksum.map(|c| match c.checksum_algorithm() {
                mountpoint_s3_crt::s3::client::ChecksumAlgorithm::Crc32c => ChecksumAlgorithm::Crc32C,
                mountpoint_s3_crt::s3::client::ChecksumAlgorithm::Crc32 => ChecksumAlgorithm::Crc32,
                mountpoint_s3_crt::s3::client::ChecksumAlgorithm::Sha1 => ChecksumAlgorithm::Sha1,
                mountpoint_s3_crt::s3::client::ChecksumAlgorithm::Sha256 => ChecksumAlgorithm::Sha256,
                other => panic!("Unsupported algorithm: {}", other),
            });
            let full_key = format!("{}{}", self.prefix, key);
            let mut request = self
                .sdk_client
                .put_object()
                .bucket(&self.bucket)
                .key(full_key)
                .set_checksum_algorithm(checksum_algorithm)
                .body(ByteStream::from(value.to_vec()));

            if let Some(storage_class) = params.storage_class {
                request = request.set_storage_class(Some(storage_class.as_str().into()));
            }

            Ok(tokio_block_on(request.send()).map(|_| ())?)
        }

        fn remove_object(&self, key: &str) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let request = self
                .sdk_client
                .delete_object()
                .bucket(&self.bucket)
                .key(full_key)
                .send();
            Ok(tokio_block_on(request).map(|_| ())?)
        }

        fn contains_dir(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key_suffixed = format!("{}{}/", self.prefix, key);
            let list = tokio_block_on(
                self.sdk_client
                    .list_objects_v2()
                    .bucket(&self.bucket)
                    .delimiter('/')
                    .prefix(full_key_suffixed)
                    .send(),
            )?;
            Ok(!(list.contents().is_empty() && list.common_prefixes().is_empty()))
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
            let uploads = tokio_block_on(
                self.sdk_client
                    .list_multipart_uploads()
                    .bucket(&self.bucket)
                    .prefix(self.prefix.clone())
                    .send(),
            )?;
            Ok(uploads.uploads().iter().any(|u| u.key().unwrap().ends_with(key)))
        }

        fn get_object_storage_class(&self, key: &str) -> Result<Option<String>, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let attrs = tokio_block_on(
                self.sdk_client
                    .get_object_attributes()
                    .bucket(&self.bucket)
                    .key(full_key)
                    .object_attributes(aws_sdk_s3::types::ObjectAttributes::StorageClass)
                    .send(),
            )?;
            Ok(attrs.storage_class().map(|s| s.as_str().to_string()))
        }

        fn get_object_checksums(&self, key: &str) -> Result<ObjectChecksums, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let attrs = tokio_block_on(
                self.sdk_client
                    .get_object_attributes()
                    .bucket(&self.bucket)
                    .key(full_key)
                    .object_attributes(aws_sdk_s3::types::ObjectAttributes::ObjectParts)
                    .object_attributes(aws_sdk_s3::types::ObjectAttributes::Checksum)
                    .send(),
            )?;
            let object_checksum = attrs.checksum.map(|checksum| Checksum {
                checksum_crc32: checksum.checksum_crc32,
                checksum_crc32c: checksum.checksum_crc32_c,
                checksum_sha1: checksum.checksum_sha1,
                checksum_sha256: checksum.checksum_sha256,
            });

            let part_checksums = attrs
                .object_parts
                .map(|parts| {
                    parts
                        .parts
                        .unwrap_or_default()
                        .into_iter()
                        .map(|part| {
                            Some(Checksum {
                                checksum_crc32: part.checksum_crc32,
                                checksum_crc32c: part.checksum_crc32_c,
                                checksum_sha1: part.checksum_sha1,
                                checksum_sha256: part.checksum_sha256,
                            })
                        })
                        .collect()
                })
                .unwrap_or_default();

            Ok((object_checksum, part_checksums))
        }

        fn get_object_size(&self, key: &str) -> Result<usize, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let head_object = tokio_block_on(self.sdk_client.head_object().bucket(&self.bucket).key(&full_key).send())?;
            Ok(head_object.content_length().unwrap() as usize)
        }

        // Schedule restoration of an object, do not wait until completion. Expidited restoration completes within 1-5 min for GLACIER and is not available for DEEP_ARCHIVE.
        // https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html?icmpid=docs_amazons3_console#restoring-objects-upgrade-tier
        fn restore_object(&self, key: &str, expedited: bool) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let tier = if expedited { Tier::Expedited } else { Tier::Bulk };
            let request = self
                .sdk_client
                .restore_object()
                .bucket(&self.bucket)
                .key(full_key)
                .set_restore_request(Some(
                    RestoreRequest::builder()
                        .set_days(Some(1))
                        .set_glacier_job_parameters(Some(GlacierJobParameters::builder().set_tier(Some(tier)).build()?))
                        .build(),
                ))
                .send();
            Ok(tokio_block_on(request).map(|_| ())?)
        }

        fn is_object_restored(&self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let head_object = tokio_block_on(self.sdk_client.head_object().bucket(&self.bucket).key(full_key).send())?;
            Ok(head_object.restore().unwrap().contains("ongoing-request=\"false\""))
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
