//! Functions and types shared across integration test modules.
//! Allow for unused items since this is included independently in each module.
#![allow(dead_code)]

pub mod cache;

pub mod creds;

#[cfg(feature = "fuse_tests")]
pub mod fuse;

#[cfg(feature = "s3_tests")]
pub mod s3;

#[cfg(all(test, feature = "manifest"))]
pub mod manifest;

use aws_credential_types::Credentials;
use fuser::{FileAttr, FileType};
use futures::executor::ThreadPool;
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::config::{
    Allocator, CredentialsProvider, CredentialsProviderStaticOptions, RustLogAdapter, S3ClientAuthConfig,
};
use mountpoint_s3_client::mock_client::MockClient;
use mountpoint_s3_fs::fs::{DirectoryEntry, DirectoryReplier};
use mountpoint_s3_fs::memory::PagedPool;
use mountpoint_s3_fs::prefetch::Prefetcher;
use mountpoint_s3_fs::s3::{Bucket, Prefix, S3Path};
use mountpoint_s3_fs::{Runtime, S3Filesystem, S3FilesystemConfig, Superblock, SuperblockConfig};
use std::collections::VecDeque;
use std::future::Future;
use std::sync::Arc;

pub fn make_test_filesystem(
    bucket: &str,
    prefix: &Prefix,
    config: S3FilesystemConfig,
) -> (Arc<MockClient>, S3Filesystem<Arc<MockClient>>) {
    let part_size = 1024 * 1024;
    let client = Arc::new(
        MockClient::config()
            .bucket(bucket)
            .part_size(part_size)
            .enable_backpressure(true)
            .initial_read_window_size(256 * 1024)
            .build(),
    );
    let pool = PagedPool::new_with_candidate_sizes([part_size]);
    let fs = make_test_filesystem_with_client(client.clone(), pool, bucket, prefix, config);
    (client, fs)
}

pub fn make_test_filesystem_with_client<Client>(
    client: Client,
    pool: PagedPool,
    bucket: &str,
    prefix: &Prefix,
    config: S3FilesystemConfig,
) -> S3Filesystem<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    let runtime = Runtime::new(ThreadPool::builder().pool_size(1).create().unwrap());
    let prefetcher_builder = Prefetcher::default_builder(client.clone());
    let superblock = Superblock::new(
        client.clone(),
        S3Path::new(Bucket::new(bucket).unwrap(), prefix.clone()),
        SuperblockConfig {
            cache_config: config.cache_config.clone(),
            s3_personality: config.s3_personality,
        },
    );
    S3Filesystem::new(client, prefetcher_builder, pool, runtime, superblock, config)
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

pub fn tokio_block_on<F: Future>(future: F) -> F::Output {
    let runtime = tokio::runtime::Builder::new_current_thread()
        .enable_io()
        .enable_time()
        .build()
        .unwrap();
    runtime.block_on(future)
}

pub fn get_crt_client_auth_config(credentials: Credentials) -> S3ClientAuthConfig {
    let auth_config = CredentialsProviderStaticOptions {
        access_key_id: credentials.access_key_id(),
        secret_access_key: credentials.secret_access_key(),
        session_token: credentials.session_token(),
    };
    let credentials_provider = CredentialsProvider::new_static(&Allocator::default(), auth_config).unwrap();
    S3ClientAuthConfig::Provider(credentials_provider)
}

/// Enable tracing and CRT logging when running unit tests.
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = RustLogAdapter::try_init();
    let _ = tracing_subscriber::fmt::try_init();
}

#[ctor::ctor]
fn init_crt() {
    mountpoint_s3_client::config::io_library_init(&mountpoint_s3_client::config::Allocator::default());
    mountpoint_s3_client::config::s3_library_init(&mountpoint_s3_client::config::Allocator::default());
}
