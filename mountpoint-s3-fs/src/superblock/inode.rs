use std::collections::{HashMap, HashSet};
use std::fmt::{Debug, Display};
use std::time::{Duration, SystemTime};

use fuser::FileType;
use mountpoint_s3_client::checksums::crc32c::{self, Crc32c};
use mountpoint_s3_client::types::{ETag, RestoreStatus};
use time::OffsetDateTime;
use tracing::debug;

use crate::prefix::Prefix;
use crate::sync::atomic::{AtomicBool, Ordering};
use crate::sync::{Arc, RwLock, RwLockReadGuard, RwLockWriteGuard};

use super::path::ValidKey;
use super::{Expiry, InodeError, SuperblockInner};

pub type InodeNo = u64;

#[derive(Debug, Clone)]
pub struct Inode {
    inner: Arc<InodeInner>,
}

const ROOT_INODE_NO: InodeNo = crate::fs::FUSE_ROOT_INODE;

// 200 years seems long enough
const NEVER_EXPIRE_TTL: Duration = Duration::from_secs(200 * 365 * 24 * 60 * 60);

#[derive(Debug)]
struct InodeInner {
    // Immutable inode state -- any changes to these requires a new inode
    ino: InodeNo,
    parent: InodeNo,
    valid_key: ValidKey,
    checksum: Crc32c,

    /// Mutable inode state. This lock should also be held to serialize operations on an inode (like
    /// creating a new child).
    ///
    /// When taking a lock across multiple [Inode]s,
    /// we must always acquire the locks in the following order to avoid deadlock:
    ///
    /// - Any ancestors in descending order, if they need to be locked.
    /// - Otherwise, ascending order by [InodeNo].
    ///   This reflects similar behavior in the Kernel's VFS named 'inode pointer order',
    ///   described in https://www.kernel.org/doc/html/next/filesystems/directory-locking.html
    ///   Note that the kernel locks by the actual pointer address instead of [InodeNo].
    ///   For rename operations we respect ancestor relationship,
    ///   but otherwise just lock the source first.
    sync: RwLock<InodeState>,
}

impl Inode {
    pub fn ino(&self) -> InodeNo {
        self.inner.ino
    }

    pub fn parent(&self) -> InodeNo {
        self.inner.parent
    }

    pub fn name(&self) -> &str {
        self.inner.valid_key.name()
    }

    pub fn kind(&self) -> InodeKind {
        self.inner.valid_key.kind()
    }

    pub fn key(&self) -> &str {
        self.inner.valid_key.as_ref()
    }

    pub fn valid_key(&self) -> &ValidKey {
        &self.inner.valid_key
    }

    pub fn is_remote(&self) -> Result<bool, InodeError> {
        let state = self.get_inode_state()?;
        Ok(state.write_status == WriteStatus::Remote)
    }

    /// return Inode State with read lock after checking whether the directory inode is deleted or not.
    pub(super) fn get_inode_state(&self) -> Result<RwLockReadGuard<InodeState>, InodeError> {
        let inode_state = self.inner.sync.read().unwrap();
        match &inode_state.kind_data {
            InodeKindData::Directory { deleted, .. } if *deleted => Err(InodeError::InodeDoesNotExist(self.ino())),
            _ => Ok(inode_state),
        }
    }

    /// return Inode State with write lock after checking whether the directory inode is deleted or not.
    pub(super) fn get_mut_inode_state(&self) -> Result<RwLockWriteGuard<InodeState>, InodeError> {
        let inode_state = self.inner.sync.write().unwrap();
        match &inode_state.kind_data {
            InodeKindData::Directory { deleted, .. } if *deleted => Err(InodeError::InodeDoesNotExist(self.ino())),
            _ => Ok(inode_state),
        }
    }

    /// return Inode State with write lock without checking whether the directory inode is deleted or not.
    pub(super) fn get_mut_inode_state_no_check(&self) -> RwLockWriteGuard<InodeState> {
        self.inner.sync.write().unwrap()
    }

    /// Create a new inode.
    pub(super) fn new(ino: InodeNo, parent: InodeNo, key: ValidKey, prefix: &Prefix, state: InodeState) -> Self {
        let checksum = Self::compute_checksum(ino, prefix, key.as_ref());
        let sync = RwLock::new(state);
        let inner = InodeInner {
            ino,
            parent,
            valid_key: key,
            checksum,
            sync,
        };
        Self { inner: inner.into() }
    }

    /// Create the root inode.
    pub(super) fn new_root(prefix: &Prefix, mount_time: OffsetDateTime) -> Self {
        Self::new(
            ROOT_INODE_NO,
            ROOT_INODE_NO,
            ValidKey::root(),
            prefix,
            InodeState {
                // The root inode never expires because there's no remote to consult for its
                // metadata, and it always exists.
                stat: InodeStat::for_directory(mount_time, NEVER_EXPIRE_TTL),
                write_status: WriteStatus::Remote,
                kind_data: InodeKindData::default_for(InodeKind::Directory),
            },
        )
    }

    /// Try to clone the inode with a new key.
    /// Additionally, it prolongs the validity be the time amount specified.
    pub fn try_clone_with_new_key(
        &self,
        new_key: ValidKey,
        prefix: &Prefix,
        new_validity: Duration,
        new_parent: InodeNo,
    ) -> Result<Inode, InodeError> {
        if self.kind() != InodeKind::File {
            debug!("Cannot re-create an inode of kind != InodeKind::File");
            return Err(InodeError::IsDirectory(self.err()));
        }
        let old_inode_state = self.get_inode_state()?;
        let new_inode_state = InodeState {
            stat: InodeStat::for_file(
                old_inode_state.stat.size,
                old_inode_state.stat.atime,
                old_inode_state.stat.etag.clone(),
                None,
                None,
                new_validity,
            ),
            write_status: WriteStatus::Remote,
            kind_data: InodeKindData::default_for(InodeKind::File),
        };

        Ok(Self::new(self.ino(), new_parent, new_key, prefix, new_inode_state))
    }

    /// Verify [Inode] has the expected inode number and the inode content is valid for its checksum.
    pub fn verify_inode(&self, expected_ino: InodeNo, prefix: &Prefix) -> Result<(), InodeError> {
        let computed = Self::compute_checksum(self.ino(), prefix, self.key());
        if computed == self.inner.checksum && self.ino() == expected_ino {
            Ok(())
        } else {
            Err(InodeError::CorruptedMetadata(self.err()))
        }
    }

    /// Verify [Inode] has the expected inode number, expected parent inode number,
    /// and the inode's content is valid for its checksum.
    pub fn verify_child(
        &self,
        expected_parent: InodeNo,
        expected_name: &str,
        prefix: &Prefix,
    ) -> Result<(), InodeError> {
        let computed = Self::compute_checksum(self.ino(), prefix, self.key());
        if computed == self.inner.checksum && self.parent() == expected_parent && self.name() == expected_name {
            Ok(())
        } else {
            Err(InodeError::CorruptedMetadata(self.err()))
        }
    }

    fn compute_checksum(ino: InodeNo, prefix: &Prefix, key: &str) -> Crc32c {
        let mut hasher = crc32c::Hasher::new();
        hasher.update(ino.to_be_bytes().as_ref());
        hasher.update(prefix.as_str().as_bytes());
        hasher.update(key.as_bytes());
        hasher.finalize()
    }

    /// Produce a description of this Inode for use in errors
    pub fn err(&self) -> InodeErrorInfo {
        InodeErrorInfo(self.clone())
    }
}

/// A wrapper that prints useful customer-facing error messages for inodes by including the object
/// key rather than just the inode number.
pub struct InodeErrorInfo(Inode);

impl Display for InodeErrorInfo {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{} (key {:?})", self.0.ino(), self.0.key())
    }
}

impl Debug for InodeErrorInfo {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        self.0.fmt(f)
    }
}

#[derive(Debug, Clone)]
pub(super) struct InodeState {
    pub stat: InodeStat,
    pub write_status: WriteStatus,
    pub kind_data: InodeKindData,
}

impl InodeState {
    pub fn new(stat: &InodeStat, kind: InodeKind, write_status: WriteStatus) -> Self {
        Self {
            stat: stat.clone(),
            kind_data: InodeKindData::default_for(kind),
            write_status,
        }
    }
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum InodeKind {
    File,
    Directory,
}

impl InodeKind {
    pub fn as_str(&self) -> &'static str {
        match self {
            InodeKind::File => "file",
            InodeKind::Directory => "directory",
        }
    }
}

impl From<InodeKind> for FileType {
    fn from(kind: InodeKind) -> Self {
        match kind {
            InodeKind::File => FileType::RegularFile,
            InodeKind::Directory => FileType::Directory,
        }
    }
}

#[derive(Debug, Clone)]
pub(super) enum InodeKindData {
    File {},
    Directory {
        /// Mapping from child names to previously seen [Inode]s.
        ///
        /// The existence of a child or lack thereof does not imply the object does not exist,
        /// nor that it currently exists in S3 in that state.
        children: HashMap<Box<str>, Inode>,

        /// A set of inode numbers that have been opened for write but not completed yet.
        /// This should be a subset of the [children](Self::Directory::children) field.
        writing_children: HashSet<InodeNo>,

        /// True if this directory has been deleted (`rmdir`) from its parent
        deleted: bool,
    },
}

impl InodeKindData {
    pub fn default_for(kind: InodeKind) -> Self {
        match kind {
            InodeKind::File => Self::File {},
            InodeKind::Directory => Self::Directory {
                children: Default::default(),
                writing_children: Default::default(),
                deleted: false,
            },
        }
    }
}

#[derive(Debug, Clone)]
pub struct InodeStat {
    /// Time this stat becomes invalid and needs to be refreshed
    pub expiry: Expiry,

    /// Size in bytes
    pub size: usize,

    /// Time of last file content modification
    pub mtime: OffsetDateTime,
    /// Time of last file metadata (or content) change
    pub ctime: OffsetDateTime,
    /// Time of last access
    pub atime: OffsetDateTime,
    /// Etag for the file (object)
    pub etag: Option<Box<str>>,
    /// Inodes corresponding to S3 objects with GLACIER or DEEP_ARCHIVE storage classes
    /// are only readable after restoration. For objects with other storage classes
    /// this field should be always `true`.
    pub is_readable: bool,
}

/// Inode write status (local vs remote)
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WriteStatus {
    /// Local inode created but not yet opened
    LocalUnopened,
    /// Local inode already opened
    LocalOpen,
    /// Remote inode
    Remote,
    /// Pending rename for indoe
    PendingRename,
}

impl InodeStat {
    pub fn is_valid(&self) -> bool {
        !self.expiry.is_expired()
    }

    /// Objects in flexible retrieval storage classes can't be accessed via GetObject unless they are
    /// restored, and so we override their permissions to 000 and reject reads to them. We also warn
    /// the first time we see an object like this, because FUSE enforces the 000 permissions on our
    /// behalf so we might not see an attempted `open` call.
    fn is_readable(storage_class: Option<&str>, restore_status: Option<RestoreStatus>) -> bool {
        static HAS_SENT_WARNING: AtomicBool = AtomicBool::new(false);
        match storage_class {
            Some("GLACIER") | Some("DEEP_ARCHIVE") => {
                let restored =
                    matches!(restore_status, Some(RestoreStatus::Restored { expiry }) if expiry > SystemTime::now());
                if !restored && !HAS_SENT_WARNING.swap(true, Ordering::SeqCst) {
                    tracing::warn!(
                        "objects in the GLACIER and DEEP_ARCHIVE storage classes are only accessible if restored"
                    );
                }
                restored
            }
            _ => true,
        }
    }

    /// Initialize an [InodeStat] for a file, given some metadata.
    pub fn for_file(
        size: usize,
        datetime: OffsetDateTime,
        etag: Option<Box<str>>,
        storage_class: Option<&str>,
        restore_status: Option<RestoreStatus>,
        validity: Duration,
    ) -> InodeStat {
        let is_readable = Self::is_readable(storage_class, restore_status);
        InodeStat {
            expiry: Expiry::from_now(validity),
            size,
            atime: datetime,
            ctime: datetime,
            mtime: datetime,
            etag,
            is_readable,
        }
    }

    /// Initialize an [InodeStat] for a directory, given some metadata.
    pub fn for_directory(datetime: OffsetDateTime, validity: Duration) -> InodeStat {
        InodeStat {
            expiry: Expiry::from_now(validity),
            size: 0,
            atime: datetime,
            ctime: datetime,
            mtime: datetime,
            etag: None,
            is_readable: true,
        }
    }

    pub fn update_validity(&mut self, validity: Duration) {
        self.expiry = Expiry::from_now(validity);
    }
}

#[derive(Debug, Default)]
pub struct WriteMode {
    /// Allow overwrite
    pub allow_overwrite: bool,
    /// Enable incremental uploads
    pub incremental_upload: bool,
}

impl WriteMode {
    fn is_inode_writable(&self, is_truncate: bool) -> bool {
        if self.incremental_upload || (self.allow_overwrite && is_truncate) {
            true
        } else {
            if is_truncate {
                tracing::warn!("file overwrite is disabled by default, you need to remount with --allow-overwrite flag to enable it");
            } else {
                tracing::warn!("modifying an existing file is disabled by default, you need to remount with the --allow-overwrite or the --incremental-upload flag to enable it");
            }
            false
        }
    }
}

/// Handle for a file writing that we use to interact with [Superblock]
#[derive(Debug, Clone)]
pub struct WriteHandle {
    inner: Arc<SuperblockInner>,
    inode: Inode,
}

impl WriteHandle {
    /// Create a new write handle
    pub(super) fn new(
        inner: Arc<SuperblockInner>,
        inode: Inode,
        mode: &WriteMode,
        is_truncate: bool,
    ) -> Result<Self, InodeError> {
        let mut state = inode.get_mut_inode_state()?;
        let reader_count = inner.reader_count.read().unwrap();
        if reader_count.get(&inode.ino()).map_or(0, |&count| count) > 0 {
            return Err(InodeError::InodeNotWritableWhileReading(inode.err()));
        }
        match state.write_status {
            WriteStatus::LocalUnopened => {
                state.write_status = WriteStatus::LocalOpen;
                state.stat.size = 0;
            }
            WriteStatus::LocalOpen | WriteStatus::PendingRename => {
                return Err(InodeError::InodeAlreadyWriting(inode.err()))
            }
            WriteStatus::Remote => {
                if !mode.is_inode_writable(is_truncate) {
                    return Err(InodeError::InodeNotWritable(inode.err()));
                }

                if is_truncate {
                    state.stat.size = 0;
                }

                state.write_status = WriteStatus::LocalOpen;
            }
        }
        drop(state);
        drop(reader_count);
        Ok(Self { inner, inode })
    }

    pub fn inc_file_size(&self, len: usize) {
        let mut state = self.inode.get_mut_inode_state_no_check();
        state.stat.size += len;
    }

    /// Update status of the inode and of containing "local" directories.
    pub fn finish(self, etag: Option<ETag>) -> Result<(), InodeError> {
        // Collect ancestor inodes that may need updating,
        // from parent to first remote ancestor.
        let ancestors = {
            let mut ancestors = Vec::new();
            let mut ancestor_ino = self.inode.parent();
            let mut visited = HashSet::new();
            loop {
                assert!(visited.insert(ancestor_ino), "cycle detected in inode ancestors");
                let ancestor = self.inner.get(ancestor_ino)?;
                ancestors.push(ancestor.clone());
                if ancestor.ino() == ROOT_INODE_NO || ancestor.get_inode_state()?.write_status == WriteStatus::Remote {
                    break;
                }
                ancestor_ino = ancestor.parent();
            }
            ancestors
        };

        // Acquire locks on ancestors in descending order to avoid deadlocks.
        let mut ancestors_states = ancestors
            .iter()
            .rev()
            .map(|inode| inode.get_mut_inode_state())
            .collect::<Result<Vec<_>, _>>()?;

        let mut state = self.inode.get_mut_inode_state()?;
        match state.write_status {
            WriteStatus::LocalOpen => {
                state.write_status = WriteStatus::Remote;
                state.stat.etag = etag.map(|e| e.into_inner().into_boxed_str());

                // Invalidate the inode's stats so we refresh them from S3 when next queried
                state.stat.update_validity(Duration::from_secs(0));

                // Walk up the ancestors from parent to first remote ancestor to transition
                // the inode and all "local" containing directories to "remote".
                let children_inos =
                    std::iter::once(self.inode.ino()).chain(ancestors.iter().map(|ancestor| ancestor.ino()));
                for (ancestor_state, child_ino) in ancestors_states.iter_mut().rev().zip(children_inos) {
                    match &mut ancestor_state.kind_data {
                        InodeKindData::File { .. } => unreachable!("we know the ancestor is a directory"),
                        InodeKindData::Directory { writing_children, .. } => {
                            writing_children.remove(&child_ino);
                        }
                    }
                    ancestor_state.write_status = WriteStatus::Remote;
                }

                Ok(())
            }
            _ => Err(InodeError::InodeInvalidWriteStatus(self.inode.err())),
        }
    }
}

/// Handle for a file being read
#[derive(Debug)]
pub struct ReadHandle {
    inner: Arc<SuperblockInner>,
    inode: Inode,
}

impl ReadHandle {
    /// Create a new read handle
    pub(super) fn new(inner: Arc<SuperblockInner>, inode: Inode) -> Result<Self, InodeError> {
        let ino = inode.ino();
        let state = inode.get_inode_state()?;
        if !matches!(state.write_status, WriteStatus::Remote | WriteStatus::PendingRename) {
            return Err(InodeError::InodeNotReadableWhileWriting(inode.err()));
        }
        {
            let mut reader_count = inner.reader_count.write().unwrap();
            let count = reader_count.entry(ino).or_insert(0);
            *count += 1;
        }
        drop(state);

        Ok(Self { inner, inode })
    }

    /// Update status of the inode to reflect the read being finished
    pub fn finish(self) -> Result<(), InodeError> {
        let ino = self.inode.ino();
        let mut reader_count = self.inner.reader_count.write().unwrap();
        if let Some(count) = reader_count.get_mut(&ino) {
            *count -= 1;
            if *count == 0 {
                reader_count.remove(&ino);
            }
        }
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use crate::superblock::Superblock;
    use mountpoint_s3_client::{
        mock_client::{MockClient, MockClientConfig, MockObject},
        types::ETag,
    };
    use time::Duration;

    use super::*;

    #[tokio::test]
    async fn test_forget() {
        let superblock = Superblock::new("test_bucket", &Default::default(), Default::default());
        let ino = 42;
        let inode_name = "made-up-inode";
        let inode = Inode::new(
            ino,
            ROOT_INODE_NO,
            ValidKey::root()
                .new_child(inode_name.try_into().unwrap(), InodeKind::File)
                .unwrap(),
            &superblock.inner.prefix,
            InodeState {
                write_status: WriteStatus::Remote,
                stat: InodeStat::for_file(0, OffsetDateTime::now_utc(), None, None, None, Default::default()),
                kind_data: InodeKindData::File {},
            },
        );
        superblock.inner.inodes.write().unwrap().insert(ino, inode.clone(), 5);

        superblock.forget(ino, 3);
        let lookup_count = superblock.get_lookup_count(ino);
        assert_eq!(lookup_count, 2, "lookup should have been reduced");
        assert!(
            superblock.inner.get(ino).is_ok(),
            "inode should be present in superblock"
        );

        superblock.forget(ino, 2);
        let lookup_count = superblock.get_lookup_count(ino);
        assert_eq!(lookup_count, 0, "lookup should have been reduced");
        assert!(
            superblock.inner.inodes.read().unwrap().get(&ino).is_none(),
            "inode should not be present in superblock"
        );

        // Make sure we didn't leak the inode anywhere else
        assert_eq!(Arc::strong_count(&inode.inner), 1);
    }

    #[tokio::test]
    async fn test_forget_can_remove_inodes() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));

        let name = "foo";
        client.add_object(name, b"foo".into());

        let superblock = Superblock::new("test_bucket", &Default::default(), Default::default());

        let lookup = superblock.lookup(&client, ROOT_INODE_NO, name.as_ref()).await.unwrap();
        let ino = lookup.inode.ino();
        let lookup_count = superblock.get_lookup_count(ino);
        assert_eq!(lookup_count, 1);

        superblock.forget(ino, 1);

        let lookup_count = superblock.get_lookup_count(ino);
        assert_eq!(lookup_count, 0);
        // This test should now hold the only reference to the inode, so we know it's unreferenced
        // and will be freed
        assert_eq!(Arc::strong_count(&lookup.inode.inner), 1);
        drop(lookup);

        let err = superblock
            .getattr(&client, ino, false)
            .await
            .expect_err("Inode should not be valid");
        assert!(matches!(err, InodeError::InodeDoesNotExist(_)));

        let lookup_count = superblock.get_lookup_count(ROOT_INODE_NO);
        assert_eq!(lookup_count, 1);
    }

    #[tokio::test]
    async fn test_forget_shadowed_inode() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));

        let name = "foo";
        client.add_object(name, b"foo".into());

        let superblock = Superblock::new("test_bucket", &Default::default(), Default::default());

        let lookup = superblock.lookup(&client, ROOT_INODE_NO, name.as_ref()).await.unwrap();
        let lookup_count = superblock.get_lookup_count(ROOT_INODE_NO);
        assert_eq!(lookup_count, 1);
        let ino = lookup.inode.ino();
        drop(lookup);

        client.add_object(&format!("{name}/bar"), b"bar".into());

        // Should be a directory now, so a different inode
        let new_lookup = superblock.lookup(&client, ROOT_INODE_NO, name.as_ref()).await.unwrap();
        assert_ne!(ino, new_lookup.inode.ino());

        superblock.forget(ino, 1);

        // Lookup still works after forgetting the old inode
        let new_lookup2 = superblock.lookup(&client, ROOT_INODE_NO, name.as_ref()).await.unwrap();
        assert_eq!(new_lookup.inode.ino(), new_lookup2.inode.ino());
    }

    #[tokio::test]
    async fn test_unlink_verify_checksum() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));
        let file_name = "corrupted";
        client.add_object(file_name.as_ref(), MockObject::constant(0xaa, 30, ETag::for_tests()));

        let superblock = Superblock::new("test_bucket", &Default::default(), Default::default());

        // Create an inode with "corrupted" metadata, i.e.
        // checksum not matching ino + full key.
        let parent_ino = ROOT_INODE_NO;
        let bad_checksum = Crc32c::new(42);
        let inode = Inode {
            inner: Arc::new(InodeInner {
                ino: 42,
                parent: parent_ino,
                valid_key: ValidKey::root()
                    .new_child(file_name.try_into().unwrap(), InodeKind::File)
                    .unwrap(),
                checksum: bad_checksum,
                sync: RwLock::new(InodeState {
                    stat: InodeStat::for_file(
                        0,
                        OffsetDateTime::now_utc(),
                        Some(ETag::for_tests().into_inner().into_boxed_str()),
                        None,
                        None,
                        NEVER_EXPIRE_TTL,
                    ),
                    write_status: WriteStatus::Remote,
                    kind_data: InodeKindData::File {},
                }),
            }),
        };

        // Manually add the corrupted inode to the superblock and root directory.
        {
            let mut inodes = superblock.inner.inodes.write().unwrap();
            inodes.insert(inode.ino(), inode.clone(), 1);
            let parent = inodes.get(&parent_ino).unwrap();
            let mut parent_state = parent.get_mut_inode_state().unwrap();
            match &mut parent_state.kind_data {
                InodeKindData::File {} => panic!("root is always a directory"),
                InodeKindData::Directory { children, .. } => _ = children.insert(file_name.into(), inode.clone()),
            }
        }

        let err = superblock
            .unlink(&client, parent_ino, file_name.as_ref())
            .await
            .expect_err("unlink of a corrupted inode should fail");
        assert!(matches!(err, InodeError::CorruptedMetadata(_)));
    }

    #[tokio::test]
    async fn test_setattr_invalid_stat() {
        let client_config = MockClientConfig {
            bucket: "test_bucket".to_string(),
            part_size: 1024 * 1024,
            ..Default::default()
        };
        let client = Arc::new(MockClient::new(client_config));
        let superblock = Superblock::new("test_bucket", &Default::default(), Default::default());

        let ino: u64 = 42;
        let inode_name = "made-up-inode";
        let mut hasher = crc32c::Hasher::new();
        hasher.update(ino.to_be_bytes().as_ref());
        hasher.update(superblock.inner.prefix.as_str().as_bytes());
        hasher.update(inode_name.as_bytes());
        let checksum = hasher.finalize();
        let inode = Inode {
            inner: Arc::new(InodeInner {
                ino,
                parent: ROOT_INODE_NO,
                valid_key: ValidKey::root()
                    .new_child(inode_name.try_into().unwrap(), InodeKind::File)
                    .unwrap(),
                checksum,
                sync: RwLock::new(InodeState {
                    write_status: WriteStatus::LocalOpen,
                    stat: InodeStat::for_file(0, OffsetDateTime::UNIX_EPOCH, None, None, None, Default::default()),
                    kind_data: InodeKindData::File {},
                }),
            }),
        };
        superblock.inner.inodes.write().unwrap().insert(ino, inode.clone(), 5);

        // Verify that the stat is invalid
        let inode = superblock.inner.get(ino).unwrap();
        let stat = inode.get_inode_state().unwrap().stat.clone();
        assert!(!stat.is_valid());

        // Should be able to reset expiry back and make stat valid when calling setattr
        let atime = OffsetDateTime::UNIX_EPOCH + Duration::days(90);
        let mtime = OffsetDateTime::UNIX_EPOCH + Duration::days(60);
        let lookup = superblock
            .setattr(&client, ino, Some(atime), Some(mtime))
            .await
            .expect("setattr should be successful");
        let stat = lookup.stat;
        assert_eq!(stat.atime, atime);
        assert_eq!(stat.mtime, mtime);
        assert!(stat.is_valid());
    }

    #[cfg(feature = "shuttle")]
    mod shuttle_tests {
        use super::*;
        use crate::fs::FUSE_ROOT_INODE;
        use mountpoint_s3_client::mock_client::{MockClient, MockClientConfig};
        use shuttle::{check_dfs, check_pct, check_random, thread};
        use shuttle::{future::block_on, sync::Arc};

        #[test]
        fn test_create_and_forget_race_condition() {
            async fn test_helper() {
                let client_config = MockClientConfig {
                    bucket: "test_bucket".to_string(),
                    part_size: 1024 * 1024,
                    ..Default::default()
                };
                let client = Arc::new(MockClient::new(client_config));

                let name = "foo";
                client.add_object(name, b"foo".into());

                let superblock = Arc::new(Superblock::new("test_bucket", &Default::default(), Default::default()));

                let lookup = superblock.lookup(&client, ROOT_INODE_NO, name.as_ref()).await.unwrap();
                let ino = lookup.inode.ino();
                let lookup_count = superblock.get_lookup_count(ino);
                assert_eq!(lookup_count, 1);

                let superblock_clone = superblock.clone();
                let forget_task = thread::spawn(move || {
                    superblock_clone.forget(ino, 1);
                });

                let file_name = "bar";
                superblock
                    .create(&client, ROOT_INODE_NO, file_name.as_ref(), InodeKind::File)
                    .await
                    .unwrap();

                forget_task.join().unwrap();
                let ino = lookup.inode.ino();
                let lookup_count = superblock.get_lookup_count(ino);
                assert_eq!(lookup_count, 0);
            }

            check_random(|| block_on(test_helper()), 1000);
            check_pct(|| block_on(test_helper()), 1000, 3);
        }

        #[test]
        fn test_concurrent_rename_different_files() {
            async fn test_helper() {
                let client_config = MockClientConfig {
                    bucket: "test_bucket".to_string(),
                    part_size: 1024 * 1024,
                    enable_rename: true,
                    ..Default::default()
                };
                let client = Arc::new(MockClient::new(client_config));

                // Create directories first
                let superblock = Arc::new(Superblock::new("test_bucket", &Default::default(), Default::default()));

                // Create initial files and directories
                let dir = "dir";
                let dirtwo = "dirtwo";
                let source_name = "source"; // Changed to match the full key
                let dest_name = "dest";

                // Create directories and files
                client.add_object("dir/source", b"content".into());
                client.add_object("dirtwo/source", b"content".into());

                // Lookup directories to get inodes
                let dir_lookup = superblock.lookup(&client, ROOT_INODE_NO, dir.as_ref()).await.unwrap();
                let dir_ino = dir_lookup.inode.ino();

                let dirtwo_lookup = superblock
                    .lookup(&client, ROOT_INODE_NO, dirtwo.as_ref())
                    .await
                    .unwrap();
                let dirtwo_ino = dirtwo_lookup.inode.ino();

                // Verify source files exist before rename
                let source1_lookup = superblock.lookup(&client, dir_ino, source_name.as_ref()).await;
                let source2_lookup = superblock.lookup(&client, dirtwo_ino, source_name.as_ref()).await;
                assert!(
                    source1_lookup.is_ok() && source2_lookup.is_ok(),
                    "Source files should exist before rename"
                );

                // Spawn concurrent rename operations
                let superblock_clone1 = superblock.clone();
                let superblock_clone2 = superblock.clone();
                let client_clone = client.clone();

                let rename_task1 = thread::spawn(move || {
                    block_on(superblock_clone1.rename(
                        &client_clone,
                        dir_ino,
                        source_name.as_ref(),
                        dir_ino,
                        dest_name.as_ref(),
                        false,
                    ))
                });

                let client_clone = client.clone();
                let rename_task2 = thread::spawn(move || {
                    block_on(superblock_clone2.rename(
                        &client_clone,
                        dirtwo_ino,
                        source_name.as_ref(),
                        dirtwo_ino,
                        dest_name.as_ref(),
                        false,
                    ))
                });

                // Wait for both rename operations
                let result1 = rename_task1.join().unwrap();
                let result2 = rename_task2.join().unwrap();

                // Both renames should succeed
                assert!(result1.is_ok(), "First rename failed: {:?}", result1.err());
                assert!(result2.is_ok(), "Second rename failed: {:?}", result2.err());

                // Verify both destination files exist
                let dest1_lookup = superblock.lookup(&client, dir_ino, dest_name.as_ref()).await;
                let dest2_lookup = superblock.lookup(&client, dirtwo_ino, dest_name.as_ref()).await;

                assert!(
                    dest1_lookup.is_ok() && dest2_lookup.is_ok(),
                    "Both renamed files should exist"
                );

                // Verify source files no longer exist
                let source1_after = superblock.lookup(&client, dir_ino, source_name.as_ref()).await;
                let source2_after = superblock.lookup(&client, dirtwo_ino, source_name.as_ref()).await;

                assert!(
                    source1_after.is_err() && source2_after.is_err(),
                    "Source files should no longer exist"
                );
            }

            // Run the test multiple times with different interleavings
            check_dfs(|| block_on(test_helper()), Some(100000));
        }

        #[test]
        fn test_concurrent_rename_and_lookup() {
            async fn test_helper() {
                let client_config = MockClientConfig {
                    bucket: "test_bucket".to_string(),
                    part_size: 1024 * 1024,
                    enable_rename: true,
                    ..Default::default()
                };
                let client = Arc::new(MockClient::new(client_config));

                let source_name = "source";
                client.add_object(source_name, b"foo".into());

                let dest_name = "dest";
                client.add_object(dest_name, b"dest".into());

                let superblock = Arc::new(Superblock::new("test_bucket", &Default::default(), Default::default()));
                // Create two threads, one that renames and one that tries to open the destination
                let superblock_clone1 = superblock.clone();
                let client_clone = client.clone();
                let dest_lookup = superblock
                    .lookup(&client, ROOT_INODE_NO, dest_name.as_ref())
                    .await
                    .unwrap();
                let _dest_ino = dest_lookup.inode.ino();
                let src_lookup = superblock
                    .lookup(&client, ROOT_INODE_NO, source_name.as_ref())
                    .await
                    .unwrap();
                let _src_ino = src_lookup.inode.ino();

                let rename_task1 = thread::spawn(move || {
                    block_on(async {
                        superblock_clone1
                            .rename(
                                &client_clone,
                                FUSE_ROOT_INODE,
                                source_name.as_ref(),
                                FUSE_ROOT_INODE,
                                dest_name.as_ref(),
                                true,
                            )
                            .await
                            .expect("Rename should work");
                    });
                });
                let superblock_clone2 = superblock.clone();
                let client_clone = client.clone();

                let lookup_task = thread::spawn(move || {
                    block_on(async {
                        let lookup = superblock_clone2
                            .lookup(&client_clone, ROOT_INODE_NO, dest_name.as_ref())
                            .await
                            .expect("should succeed as object will be in S3");
                        lookup.inode.ino()
                    })
                });
                let _ = rename_task1.join();

                // FIXME: This invariant is violated by Mountpoint
                // The inode of the destination file from lookup should either be the original value or the original source inode
                // but no other value.
                let _ino_after_lookup = lookup_task.join().unwrap();
                //assert!(
                //    _ino_after_lookup == dest_ino || _ino_after_lookup == src_ino,
                //    "Unexpected inode during rename operation got {ino_after_lookup} but expected {dest_ino} or {src_ino}"
                //);
            }

            check_pct(|| block_on(test_helper()), 10000, 3);
        }
    }
}
