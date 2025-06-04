use crate::fs::DirectoryEntry;
use crate::fs::DirectoryReplier;
use crate::superblock::path::ValidKey;
use crate::superblock::InodeError;
use crate::superblock::InodeKind;
use crate::superblock::InodeNo;
use crate::superblock::InodeStat;
use crate::superblock::WriteMode;
use async_trait::async_trait;
use mountpoint_s3_client::types::ETag;
use std::ffi::OsStr;
use std::fmt::Debug;
use std::time::Duration;
use time::OffsetDateTime;

pub struct MountspaceDirectoryReplier<'a> {
    reply: &'a mut (dyn DirectoryReplier + Send + Sync),
}

impl<'a> MountspaceDirectoryReplier<'a> {
    pub fn new<R: DirectoryReplier + 'a + Send + Sync>(reply: &'a mut R) -> Self {
        MountspaceDirectoryReplier { reply }
    }

    pub fn add(&mut self, entry: DirectoryEntry) -> bool {
        self.reply.add(entry)
    }
}

#[derive(Clone, Debug)]
pub struct S3Location {
    pub bucket: String,
    pub full_key: ValidKey,
}

#[derive(Clone, Debug)]
pub struct LookedUp {
    pub ino: InodeNo,
    pub stat: InodeStat,
    pub kind: InodeKind,
    pub is_remote: bool,
    pub location: Option<S3Location>,
}

impl LookedUp {
    /// How much longer this lookup will be valid for
    pub fn validity(&self) -> Duration {
        self.stat.expiry.remaining_ttl()
    }

    pub fn s3_location(&self) -> Result<&S3Location, InodeError> {
        self.location.as_ref().ok_or(InodeError::VirtualFileNotAccessible)
    }
}

#[async_trait]
pub trait Mountspace: Send + Sync + Debug {
    async fn lookup(&self, parent_ino: InodeNo, name: &OsStr) -> Result<LookedUp, InodeError>;

    async fn getattr(&self, ino: InodeNo, force_revalidate: bool) -> Result<LookedUp, InodeError>;

    async fn setattr(
        &self,
        ino: InodeNo,
        atime: Option<OffsetDateTime>,
        mtime: Option<OffsetDateTime>,
    ) -> Result<LookedUp, InodeError>;

    async fn create(&self, dir: InodeNo, name: &OsStr, kind: InodeKind) -> Result<LookedUp, InodeError>;

    fn forget(&self, ino: InodeNo, n: u64);

    async fn start_writing(&self, ino: InodeNo, mode: &WriteMode, is_truncate: bool) -> Result<(), InodeError>;

    fn inc_file_size(&self, ino: InodeNo, len: usize) -> Result<usize, InodeError>;

    fn finish_writing(&self, ino: InodeNo, etag: Option<ETag>) -> Result<(), InodeError>;

    async fn start_reading(&self, ino: InodeNo) -> Result<(), InodeError>;

    fn finish_reading(&self, ino: InodeNo) -> Result<(), InodeError>;

    async fn new_readdir_handle(&self, dir_ino: InodeNo, page_size: usize) -> Result<u64, InodeError>;

    async fn readdir<'a>(
        &self,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        is_readdirplus: bool,
        reply: MountspaceDirectoryReplier<'a>,
    ) -> Result<(), InodeError>;

    async fn rename(
        &self,
        src_parent_ino: InodeNo,
        src_name: &OsStr,
        dst_parent_ino: InodeNo,
        dst_name: &OsStr,
        allow_overwrite: bool,
    ) -> Result<(), InodeError>;

    async fn rmdir(&self, parent_ino: InodeNo, name: &OsStr) -> Result<(), InodeError>;

    async fn unlink(&self, parent_ino: InodeNo, name: &OsStr) -> Result<(), InodeError>;
}
