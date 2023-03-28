use aws_sdk_s3::types::ByteStream;
use aws_sdk_s3::Region;
use fuser::{FileAttr, FileType};
use futures::executor::ThreadPool;
use mountpoint_s3::fs::{DirectoryReplier, Prefix, ReadReplier};
use mountpoint_s3::{S3Filesystem, S3FilesystemConfig};
use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig};
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use rand::rngs::OsRng;
use rand::RngCore;
use std::collections::VecDeque;
use std::ffi::{OsStr, OsString};
use std::sync::Arc;
use std::time::Duration;

pub fn make_test_filesystem(
    bucket: &str,
    prefix: Option<&Prefix>,
    config: S3FilesystemConfig,
) -> (Arc<MockClient>, S3Filesystem<Arc<MockClient>, ThreadPool>) {
    let client_config = MockClientConfig {
        bucket: bucket.to_string(),
        part_size: 1024 * 1024,
    };

    let client = Arc::new(MockClient::new(client_config));
    let runtime = ThreadPool::builder().pool_size(1).create().unwrap();

    let fs = S3Filesystem::new(Arc::clone(&client), runtime, bucket, prefix, config);

    (client, fs)
}

pub fn get_test_bucket_and_prefix(test_name: &str) -> (String, String) {
    let bucket = std::env::var("S3_BUCKET_NAME").expect("Set S3_BUCKET_NAME to run integration tests");

    // Generate a random nonce to make sure this prefix is truly unique
    let nonce = OsRng.next_u64();

    // Prefix always has a trailing "/" to keep meaning in sync with the S3 API.
    let prefix = std::env::var("S3_BUCKET_TEST_PREFIX").expect("Set S3_BUCKET_TEST_PREFIX to run integration tests");
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

pub fn create_objects(bucket: &str, prefix: &str, region: &str, key: &str, value: &[u8]) {
    let runtime = tokio::runtime::Builder::new_current_thread()
        .enable_io()
        .enable_time()
        .build()
        .unwrap();

    let config = runtime.block_on(aws_config::from_env().region(Region::new(region.to_string())).load());
    let sdk_client = aws_sdk_s3::Client::new(&config);
    // runtime.block_on(client.list_buckets());
    let full_key = format!("{prefix}{key}");
    let _ = runtime.block_on(
        sdk_client
            .put_object()
            .bucket(bucket)
            .key(full_key)
            .body(ByteStream::from(value.to_vec()))
            .send(),
    );
}

#[track_caller]
pub fn assert_attr(attr: FileAttr, ftype: FileType, size: u64, uid: u32, gid: u32, perm: u16) {
    assert_eq!(attr.kind, ftype);
    assert_eq!(attr.size, size);
    assert_eq!(attr.uid, uid);
    assert_eq!(attr.gid, gid);
    assert_eq!(attr.perm, perm);
}

#[derive(Debug)]
pub struct DirectoryEntry {
    pub ino: u64,
    pub offset: i64,
    pub attr: FileAttr,
    pub name: OsString,
}

#[derive(Debug, Default)]
pub struct DirectoryReply {
    readdir_limit: usize,
    pub entries: VecDeque<DirectoryEntry>,
}

impl DirectoryReplier for &mut DirectoryReply {
    fn add<T: AsRef<OsStr>>(
        &mut self,
        ino: u64,
        offset: i64,
        name: T,
        attr: FileAttr,
        _generation: u64,
        _ttl: Duration,
    ) -> bool {
        if self.readdir_limit > 0 && !self.entries.is_empty() && self.entries.len() % self.readdir_limit == 0 {
            true
        } else {
            self.entries.push_back(DirectoryEntry {
                ino,
                offset,
                attr,
                name: name.as_ref().to_os_string(),
            });
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

    fn error(self, error: libc::c_int) -> Self::Replied {
        *self.0 = Err(error);
    }
}

/// Enable tracing and CRT logging when running unit tests.
#[ctor::ctor]
fn init_tracing_subscriber() {
    let _ = RustLogAdapter::try_init();
    let _ = tracing_subscriber::fmt::try_init();
}
