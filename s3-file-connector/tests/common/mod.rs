use aws_crt_s3::common::rust_log_adapter::RustLogAdapter;
use fuser::FileAttr;
use s3_client::mock_client::{MockClient, MockClientConfig};
use s3_file_connector::fs::{DirectoryReplier, ReadReplier};
use s3_file_connector::{S3Filesystem, S3FilesystemConfig};
use std::collections::VecDeque;
use std::ffi::{OsStr, OsString};
use std::sync::Arc;
use std::time::Duration;

pub fn make_test_filesystem(
    bucket: &str,
    prefix: &str,
    config: S3FilesystemConfig,
) -> (Arc<MockClient>, S3Filesystem<Arc<MockClient>>) {
    let client_config = MockClientConfig {
        bucket: bucket.to_string(),
        part_size: 1024 * 1024,
    };

    let client = Arc::new(MockClient::new(client_config));

    let fs = S3Filesystem::new(Arc::clone(&client), bucket, prefix, config);

    (client, fs)
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
