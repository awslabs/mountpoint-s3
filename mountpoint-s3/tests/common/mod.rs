//! Functions and types shared across integration test modules.
//! Allow for unused items since this is included independently in each module.
#![allow(dead_code)]

#[cfg(feature = "fuse_tests")]
pub mod fuse;

#[cfg(feature = "s3_tests")]
pub mod s3;

use aws_sdk_s3::config::{Credentials, Region};
use fuser::{FileAttr, FileType};
use futures::executor::ThreadPool;
use mountpoint_s3::fs::{DirectoryEntry, DirectoryReplier};
use mountpoint_s3::prefetch::{default_prefetch, DefaultPrefetcher};
use mountpoint_s3::prefix::Prefix;
use mountpoint_s3::{S3Filesystem, S3FilesystemConfig};
use mountpoint_s3_client::config::S3ClientAuthConfig;
use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig};
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_crt::auth::credentials::{CredentialsProvider, CredentialsProviderStaticOptions};
use mountpoint_s3_crt::common::allocator::Allocator;
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use std::collections::VecDeque;
use std::sync::Arc;

#[cfg(feature = "s3_tests")]
use crate::common::s3::{get_subsession_iam_role, get_test_region};

pub type TestS3Filesystem<Client> = S3Filesystem<Client, DefaultPrefetcher<ThreadPool>>;

#[cfg(feature = "s3_tests")]
pub async fn get_test_sdk_sts_client() -> aws_sdk_sts::Client {
    let config = aws_config::from_env()
        .region(Region::new(get_test_region()))
        .load()
        .await;
    aws_sdk_sts::Client::new(&config)
}

#[cfg(feature = "s3_tests")]
pub async fn get_scoped_down_credentials(policy: &str) -> Credentials {
    let sts_client = get_test_sdk_sts_client().await;
    let assume_role_response = sts_client
        .assume_role()
        .role_arn(get_subsession_iam_role())
        .role_session_name("mountpoint-s3-client_tests")
        .policy(policy)
        .send()
        .await
        .expect("assume_role with valid ARN and policy should succeed");
    let credentials = assume_role_response
        .credentials()
        .expect("credentials should be present if assume_role succeeded")
        .to_owned();
    Credentials::new(
        credentials.access_key_id().unwrap(),
        credentials.secret_access_key().unwrap(),
        credentials.session_token().map(|s| s.to_owned()),
        None,
        "scoped_down_sts_creds",
    )
}

pub fn get_auth_config(credentials: Credentials) -> S3ClientAuthConfig {
    let auth_config = CredentialsProviderStaticOptions {
        access_key_id: credentials.access_key_id(),
        secret_access_key: credentials.secret_access_key(),
        session_token: credentials.session_token(),
    };
    let credentials_provider = CredentialsProvider::new_static(&Allocator::default(), auth_config).unwrap();
    S3ClientAuthConfig::Provider(credentials_provider)
}

pub fn make_test_filesystem(
    bucket: &str,
    prefix: &Prefix,
    config: S3FilesystemConfig,
) -> (Arc<MockClient>, TestS3Filesystem<Arc<MockClient>>) {
    let client_config = MockClientConfig {
        bucket: bucket.to_string(),
        part_size: 1024 * 1024,
        ..Default::default()
    };

    let client = Arc::new(MockClient::new(client_config));
    let fs = make_test_filesystem_with_client(client.clone(), bucket, prefix, config);
    (client, fs)
}

pub fn make_test_filesystem_with_client<Client>(
    client: Client,
    bucket: &str,
    prefix: &Prefix,
    config: S3FilesystemConfig,
) -> TestS3Filesystem<Client>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    let runtime = ThreadPool::builder().pool_size(1).create().unwrap();
    let prefetcher = default_prefetch(runtime, Default::default());
    S3Filesystem::new(client, prefetcher, bucket, prefix, config)
}

#[track_caller]
pub fn assert_attr(attr: FileAttr, ftype: FileType, size: u64, uid: u32, gid: u32, perm: u16) {
    assert_eq!(attr.kind, ftype);
    assert_eq!(attr.size, size);
    assert_eq!(attr.uid, uid);
    assert_eq!(attr.gid, gid);
    assert_eq!(attr.perm, perm);
}

#[derive(Debug, Default)]
pub struct DirectoryReply {
    readdir_limit: usize,
    pub entries: VecDeque<DirectoryEntry>,
}

impl DirectoryReplier for &mut DirectoryReply {
    fn add(&mut self, entry: DirectoryEntry) -> bool {
        if self.readdir_limit > 0 && !self.entries.is_empty() && self.entries.len() % self.readdir_limit == 0 {
            true
        } else {
            self.entries.push_back(entry);
            false
        }
    }
}

impl DirectoryReply {
    pub fn new(max_entries: usize) -> Self {
        Self {
            readdir_limit: max_entries,
            ..Default::default()
        }
    }

    pub fn clear(&mut self) {
        self.entries.clear();
    }
}

/// Enable tracing and CRT logging when running unit tests.
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = RustLogAdapter::try_init();
    let _ = tracing_subscriber::fmt::try_init();
}
