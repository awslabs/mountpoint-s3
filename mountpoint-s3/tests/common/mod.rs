use aws_sdk_s3::config::Region;
use aws_sdk_s3::primitives::ByteStream;
use fuser::{FileAttr, FileType};
use mountpoint_s3::fs::{self, DirectoryEntry, DirectoryReplier, ReadReplier, ToErrno};
use mountpoint_s3::prefix::Prefix;
use mountpoint_s3::store::{test_store, TestStore};
use mountpoint_s3::{S3Filesystem, S3FilesystemConfig};
use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig};
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use rand::rngs::OsRng;
use rand::RngCore;
use std::collections::VecDeque;
use std::future::Future;
use std::sync::Arc;

pub fn make_test_filesystem(
    bucket: &str,
    prefix: &Prefix,
    config: S3FilesystemConfig,
) -> (Arc<MockClient>, S3Filesystem<TestStore<MockClient>>) {
    let client_config = MockClientConfig {
        bucket: bucket.to_string(),
        part_size: 1024 * 1024,
    };

    let client = Arc::new(MockClient::new(client_config));
    let fs = make_test_filesystem_with_client(client.clone(), bucket, prefix, config);
    (client, fs)
}

pub fn make_test_filesystem_with_client<Client>(
    client: Arc<Client>,
    bucket: &str,
    prefix: &Prefix,
    config: S3FilesystemConfig,
) -> S3Filesystem<TestStore<Client>>
where
    Client: ObjectClient + Send + Sync + 'static,
{
    let store = test_store(client);
    S3Filesystem::new(store, bucket, prefix, config)
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

pub struct ReadReply<'a>(pub &'a mut Result<Box<[u8]>, libc::c_int>);

impl<'a> ReadReplier for ReadReply<'a> {
    type Replied = ();

    fn data(self, data: &[u8]) -> Self::Replied {
        *self.0 = Ok(data.into());
    }

    fn error(self, error: fs::Error) -> Self::Replied {
        *self.0 = Err(error.to_errno());
    }
}

/// Enable tracing and CRT logging when running unit tests.
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = RustLogAdapter::try_init();
    let _ = tracing_subscriber::fmt::try_init();
}
