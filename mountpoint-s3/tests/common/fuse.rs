use std::ffi::OsStr;
use std::fs::ReadDir;
use std::path::Path;
use std::sync::Arc;

use fuser::{BackgroundSession, MountOption, Session};
use mountpoint_s3::data_cache::DataCache;
use mountpoint_s3::fuse::S3FuseFilesystem;
use mountpoint_s3::prefetch::{Prefetch, PrefetcherConfig};
use mountpoint_s3::prefix::Prefix;
use mountpoint_s3::S3FilesystemConfig;
use mountpoint_s3_client::config::S3ClientAuthConfig;
use mountpoint_s3_client::types::{ObjectPart, PutObjectParams};
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_crt::auth::credentials::{CredentialsProvider, CredentialsProviderStaticOptions};
use mountpoint_s3_crt::common::allocator::Allocator;
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

    fn get_object_parts(&self, key: &str) -> Result<Option<Vec<ObjectPart>>, Box<dyn std::error::Error>>;

    fn restore_object(&mut self, key: &str, expedited: bool) -> Result<(), Box<dyn std::error::Error>>;

    fn is_object_restored(&mut self, key: &str) -> Result<bool, Box<dyn std::error::Error>>;
}

pub type TestClientBox = Box<dyn TestClient>;

pub struct TestSessionConfig {
    pub part_size: usize,
    pub filesystem_config: S3FilesystemConfig,
    pub prefetcher_config: PrefetcherConfig,
    pub auth_config: S3ClientAuthConfig,
}

impl Default for TestSessionConfig {
    fn default() -> Self {
        Self {
            part_size: 8 * 1024 * 1024,
            filesystem_config: Default::default(),
            prefetcher_config: Default::default(),
            auth_config: Default::default(),
        }
    }
}

impl TestSessionConfig {
    pub fn with_credentials(mut self, credentials: aws_sdk_s3::config::Credentials) -> Self {
        let auth_config = CredentialsProviderStaticOptions {
            access_key_id: credentials.access_key_id(),
            secret_access_key: credentials.secret_access_key(),
            session_token: credentials.session_token(),
        };
        let credentials_provider = CredentialsProvider::new_static(&Allocator::default(), auth_config).unwrap();
        self.auth_config = S3ClientAuthConfig::Provider(credentials_provider);
        self
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

pub mod mock_session {
    use crate::common::s3::tokio_block_on;

    use super::*;

    use futures::executor::ThreadPool;
    use mountpoint_s3::prefetch::{caching_prefetch, default_prefetch};
    use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig, MockObject};
    use mountpoint_s3_client::types::ObjectAttribute;

    const BUCKET_NAME: &str = "test_bucket";

    /// Create a FUSE mount backed by a mock object client that does not talk to S3
    pub fn new(test_name: &str, test_config: TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox) {
        let mount_dir = tempfile::tempdir().unwrap();

        let prefix = if test_name.is_empty() {
            test_name.to_string()
        } else {
            format!("{test_name}/")
        };

        let client_config = MockClientConfig {
            bucket: BUCKET_NAME.to_string(),
            part_size: test_config.part_size,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));
        let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
        let prefetcher = default_prefetch(runtime, test_config.prefetcher_config);
        let session = create_fuse_session(
            client.clone(),
            prefetcher,
            BUCKET_NAME,
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

            let prefix = if test_name.is_empty() {
                test_name.to_string()
            } else {
                format!("{test_name}/")
            };

            let client_config = MockClientConfig {
                bucket: BUCKET_NAME.to_string(),
                part_size: test_config.part_size,
                ..Default::default()
            };
            let client = Arc::new(MockClient::new(client_config));
            let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
            let prefetcher = caching_prefetch(cache, runtime, test_config.prefetcher_config);
            let session = create_fuse_session(
                client.clone(),
                prefetcher,
                BUCKET_NAME,
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
            Ok(self.client.get_object_storage_class(&full_key)?)
        }

        fn get_object_parts(&self, key: &str) -> Result<Option<Vec<ObjectPart>>, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let attrs = tokio_block_on(self.client.get_object_attributes(
                BUCKET_NAME,
                &full_key,
                None,
                None,
                &[ObjectAttribute::ObjectParts],
            ))?;
            Ok(attrs.object_parts.and_then(|parts| parts.parts))
        }

        fn restore_object(&mut self, key: &str, _expedited: bool) -> Result<(), Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            Ok(self.client.restore_object(&full_key)?)
        }

        fn is_object_restored(&mut self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            Ok(self.client.is_object_restored(&full_key)?)
        }
    }
}

#[cfg(feature = "s3_tests")]
pub mod s3_session {
    use super::*;

    use aws_sdk_s3::operation::head_object::HeadObjectError;
    use aws_sdk_s3::primitives::ByteStream;
    use aws_sdk_s3::types::{ChecksumAlgorithm, GlacierJobParameters, RestoreRequest, Tier};
    use aws_sdk_s3::Client;
    use mountpoint_s3::prefetch::{caching_prefetch, default_prefetch};
    use mountpoint_s3_client::config::{EndpointConfig, S3ClientConfig};
    use mountpoint_s3_client::types::{Checksum, PutObjectTrailingChecksums};
    use mountpoint_s3_client::S3CrtClient;

    use crate::common::s3::{get_test_bucket_and_prefix, get_test_region, get_test_sdk_client, tokio_block_on};

    /// Create a FUSE mount backed by a real S3 client
    pub fn new(test_name: &str, test_config: TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox) {
        let mount_dir = tempfile::tempdir().unwrap();

        let (bucket, prefix) = get_test_bucket_and_prefix(test_name);
        let region = get_test_region();

        let client_config = S3ClientConfig::default()
            .part_size(test_config.part_size)
            .endpoint_config(EndpointConfig::new(&region))
            .auth_config(test_config.auth_config);
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
            if params.trailing_checksums == PutObjectTrailingChecksums::Enabled {
                request = request.set_checksum_algorithm(Some(ChecksumAlgorithm::Crc32C));
            }
            Ok(tokio_block_on(request.send()).map(|_| ())?)
        }

        fn remove_object(&mut self, key: &str) -> Result<(), Box<dyn std::error::Error>> {
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

        fn get_object_parts(&self, key: &str) -> Result<Option<Vec<ObjectPart>>, Box<dyn std::error::Error>> {
            let full_key = format!("{}{}", self.prefix, key);
            let attrs = tokio_block_on(
                self.sdk_client
                    .get_object_attributes()
                    .bucket(&self.bucket)
                    .key(full_key)
                    .object_attributes(aws_sdk_s3::types::ObjectAttributes::ObjectParts)
                    .send(),
            )?;
            let Some(parts) = attrs.object_parts else {
                return Ok(None);
            };
            let Some(parts) = parts.parts else {
                return Ok(None);
            };
            let parts = parts
                .iter()
                .map(|part| ObjectPart {
                    checksum: Some(Checksum {
                        checksum_crc32: part.checksum_crc32.to_owned(),
                        checksum_crc32c: part.checksum_crc32_c.to_owned(),
                        checksum_sha1: part.checksum_sha1.to_owned(),
                        checksum_sha256: part.checksum_sha256.to_owned(),
                    }),
                    part_number: part.part_number.unwrap() as usize,
                    size: part.size.unwrap() as usize,
                })
                .collect();
            Ok(Some(parts))
        }

        // Schudule restoration of an object, do not wait until completion. Expidited restoration completes within 1-5 min for GLACIER and is not available for DEEP_ARCHIVE.
        // https://docs.aws.amazon.com/AmazonS3/latest/userguide/restoring-objects-retrieval-options.html?icmpid=docs_amazons3_console#restoring-objects-upgrade-tier
        fn restore_object(&mut self, key: &str, expedited: bool) -> Result<(), Box<dyn std::error::Error>> {
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

        fn is_object_restored(&mut self, key: &str) -> Result<bool, Box<dyn std::error::Error>> {
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
