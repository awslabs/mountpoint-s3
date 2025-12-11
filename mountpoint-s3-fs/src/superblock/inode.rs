use std::collections::{HashMap, HashSet};
use std::ops::{Deref, DerefMut};
use std::time::Duration;

use mountpoint_s3_client::checksums::crc32c::{self, Crc32c};
use time::OffsetDateTime;
use tracing::debug;

use crate::metablock::{
    InodeError, InodeErrorInfo, InodeKind, InodeNo, InodeStat, NEVER_EXPIRE_TTL, PendingUploadHook, ROOT_INODE_NO,
    ValidKey,
};
use crate::s3::Prefix;
use crate::sync::{Arc, RwLock, RwLockReadGuard, RwLockWriteGuard};

#[derive(Debug, Clone)]
pub struct Inode {
    inner: Arc<InodeInner>,
}

/// Write-locked inode state with its inode number, ensuring other operations use the correct inode number.
#[derive(Debug)]
pub struct InodeLockedForWriting<'a> {
    pub ino: InodeNo,
    pub state: RwLockWriteGuard<'a, InodeState>,
}

impl Deref for InodeLockedForWriting<'_> {
    type Target = InodeState;

    fn deref(&self) -> &Self::Target {
        &self.state
    }
}

impl DerefMut for InodeLockedForWriting<'_> {
    fn deref_mut(&mut self) -> &mut Self::Target {
        &mut self.state
    }
}

/// Read-locked inode state with its inode number, ensuring other operations use the correct inode number.
#[derive(Debug)]
pub struct InodeLockedForReading<'a> {
    pub ino: InodeNo,
    pub state: RwLockReadGuard<'a, InodeState>,
}

impl Deref for InodeLockedForReading<'_> {
    type Target = InodeState;

    fn deref(&self) -> &Self::Target {
        &self.state
    }
}

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

    /// return Inode State with read lock after checking whether the directory inode is deleted or not.
    pub fn get_inode_state(&self) -> Result<InodeLockedForReading<'_>, InodeError> {
        let inode_state = self.inner.sync.read().unwrap();
        match &inode_state.kind_data {
            InodeKindData::Directory { deleted, .. } if *deleted => Err(InodeError::InodeDoesNotExist(self.ino())),
            _ => Ok(InodeLockedForReading {
                state: inode_state,
                ino: self.ino(),
            }),
        }
    }

    /// return Inode State with write lock after checking whether the directory inode is deleted or not.
    pub fn get_mut_inode_state(&self) -> Result<InodeLockedForWriting<'_>, InodeError> {
        let inode_state = self.inner.sync.write().unwrap();
        match &inode_state.kind_data {
            InodeKindData::Directory { deleted, .. } if *deleted => Err(InodeError::InodeDoesNotExist(self.ino())),
            _ => Ok(InodeLockedForWriting {
                state: inode_state,
                ino: self.ino(),
            }),
        }
    }

    /// return Inode State with write lock without checking whether the directory inode is deleted or not.
    pub fn get_mut_inode_state_no_check(&self) -> RwLockWriteGuard<'_, InodeState> {
        self.inner.sync.write().unwrap()
    }

    /// Create a new inode.
    pub fn new(ino: InodeNo, parent: InodeNo, key: ValidKey, prefix: &Prefix, state: InodeState) -> Self {
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
    pub fn new_root(prefix: &Prefix, mount_time: OffsetDateTime) -> Self {
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
                pending_upload_hook: None,
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
            pending_upload_hook: None,
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
        InodeErrorInfo {
            ino: self.ino(),
            key: self.key().to_string().into(),
            bucket: None,
        }
    }
}

#[derive(Debug, Clone)]
pub struct InodeState {
    pub stat: InodeStat,
    pub write_status: WriteStatus,
    pub kind_data: InodeKindData,
    pub pending_upload_hook: Option<PendingUploadHook>,
}

impl InodeState {
    pub fn new(stat: &InodeStat, kind: InodeKind, write_status: WriteStatus) -> Self {
        Self {
            stat: stat.clone(),
            kind_data: InodeKindData::default_for(kind),
            write_status,
            pending_upload_hook: None,
        }
    }

    pub fn is_remote(&self) -> bool {
        self.write_status == WriteStatus::Remote
    }
}

#[derive(Debug, Clone)]
pub enum InodeKindData {
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

/// Inode write status (local vs remote)
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum WriteStatus {
    /// Local inode created but not yet opened
    LocalUnopened,
    /// Local inode currently opened for writing
    LocalOpenForWriting,
    /// Remote inode - already exists in S3 with internal state in sync with the S3 state
    Remote,
    /// Originally remote inode now pending a rename (as the source or destination)
    PendingRename,
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::metablock::Metablock;
    use crate::s3::{Bucket, S3Path};
    use crate::superblock::Superblock;
    use mountpoint_s3_client::{
        mock_client::{MockClient, MockObject},
        types::ETag,
    };
    use time::Duration;

    #[tokio::test]
    async fn test_forget() {
        let bucket = Bucket::new("test_bucket").unwrap();
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket.to_string())
                .part_size(1024 * 1024)
                .build(),
        );

        let superblock = Superblock::new(
            client.clone(),
            S3Path::new(bucket, Default::default()),
            Default::default(),
        );
        let ino = 42;
        let inode_name = "made-up-inode";
        let inode = Inode::new(
            ino,
            ROOT_INODE_NO,
            ValidKey::root()
                .new_child(inode_name.try_into().unwrap(), InodeKind::File)
                .unwrap(),
            &superblock.inner.s3_path.prefix,
            InodeState {
                write_status: WriteStatus::Remote,
                stat: InodeStat::for_file(0, OffsetDateTime::now_utc(), None, None, None, Default::default()),
                kind_data: InodeKindData::File {},
                pending_upload_hook: None,
            },
        );
        superblock.inner.inodes.write().unwrap().insert(ino, inode.clone(), 5);

        superblock.forget(ino, 3).await;
        let lookup_count = superblock.get_lookup_count(ino);
        assert_eq!(lookup_count, 2, "lookup should have been reduced");
        assert!(
            superblock.inner.get(ino).is_ok(),
            "inode should be present in superblock"
        );

        superblock.forget(ino, 2).await;
        let lookup_count = superblock.get_lookup_count(ino);
        assert_eq!(lookup_count, 0, "lookup should have been reduced");
        assert!(
            superblock.inner.inodes.read().unwrap().get_inode(&ino).is_none(),
            "inode should not be present in superblock"
        );

        // Make sure we didn't leak the inode anywhere else
        assert_eq!(Arc::strong_count(&inode.inner), 1);
    }

    #[tokio::test]
    async fn test_forget_can_remove_inodes() {
        let bucket = Bucket::new("test_bucket").unwrap();
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket.to_string())
                .part_size(1024 * 1024)
                .build(),
        );

        let name = "foo";
        client.add_object(name, b"foo".into());

        let superblock = Superblock::new(
            client.clone(),
            S3Path::new(bucket, Default::default()),
            Default::default(),
        );

        let lookup = superblock.lookup(ROOT_INODE_NO, name.as_ref()).await.unwrap();
        let ino = lookup.ino();
        let lookup_count = superblock.get_lookup_count(ino);
        assert_eq!(lookup_count, 1);

        superblock.forget(ino, 1).await;

        let lookup_count = superblock.get_lookup_count(ino);
        assert_eq!(lookup_count, 0);

        let err = superblock
            .getattr(ino, false)
            .await
            .expect_err("Inode should not be valid");
        assert!(matches!(err, InodeError::InodeDoesNotExist(_)));

        let lookup_count = superblock.get_lookup_count(ROOT_INODE_NO);
        assert_eq!(lookup_count, 1);
    }

    #[tokio::test]
    async fn test_forget_shadowed_inode() {
        let bucket = Bucket::new("test_bucket").unwrap();
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket.to_string())
                .part_size(1024 * 1024)
                .build(),
        );

        let name = "foo";
        client.add_object(name, b"foo".into());

        let superblock = Superblock::new(
            client.clone(),
            S3Path::new(bucket, Default::default()),
            Default::default(),
        );

        let lookup = superblock.lookup(ROOT_INODE_NO, name.as_ref()).await.unwrap();
        let lookup_count = superblock.get_lookup_count(ROOT_INODE_NO);
        assert_eq!(lookup_count, 1);
        let ino = lookup.ino();
        drop(lookup);

        client.add_object(&format!("{name}/bar"), b"bar".into());

        // Should be a directory now, so a different inode
        let new_lookup = superblock.lookup(ROOT_INODE_NO, name.as_ref()).await.unwrap();
        assert_ne!(ino, new_lookup.ino());

        superblock.forget(ino, 1).await;

        // Lookup still works after forgetting the old inode
        let new_lookup2 = superblock.lookup(ROOT_INODE_NO, name.as_ref()).await.unwrap();
        assert_eq!(new_lookup.ino(), new_lookup2.ino());
    }

    #[tokio::test]
    async fn test_unlink_verify_checksum() {
        let bucket = Bucket::new("test_bucket").unwrap();
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket.to_string())
                .part_size(1024 * 1024)
                .build(),
        );
        let file_name = "corrupted";
        client.add_object(file_name.as_ref(), MockObject::constant(0xaa, 30, ETag::for_tests()));

        let superblock = Superblock::new(
            client.clone(),
            S3Path::new(bucket, Default::default()),
            Default::default(),
        );

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
                    pending_upload_hook: None,
                }),
            }),
        };

        // Manually add the corrupted inode to the superblock and root directory.
        {
            let mut inodes = superblock.inner.inodes.write().unwrap();
            inodes.insert(inode.ino(), inode.clone(), 1);
            let parent = inodes.get_inode(&parent_ino).unwrap();
            let mut parent_state = parent.get_mut_inode_state().unwrap();
            match &mut parent_state.kind_data {
                InodeKindData::File {} => panic!("root is always a directory"),
                InodeKindData::Directory { children, .. } => _ = children.insert(file_name.into(), inode.clone()),
            }
        }

        let err = superblock
            .unlink(parent_ino, file_name.as_ref())
            .await
            .expect_err("unlink of a corrupted inode should fail");
        assert!(matches!(err, InodeError::CorruptedMetadata(_)));
    }

    #[tokio::test]
    async fn test_setattr_invalid_stat() {
        let bucket = Bucket::new("test_bucket").unwrap();
        let client = Arc::new(
            MockClient::config()
                .bucket(bucket.to_string())
                .part_size(1024 * 1024)
                .build(),
        );
        let superblock = Superblock::new(
            client.clone(),
            S3Path::new(bucket, Default::default()),
            Default::default(),
        );

        let ino: u64 = 42;
        let inode_name = "made-up-inode";
        let mut hasher = crc32c::Hasher::new();
        hasher.update(ino.to_be_bytes().as_ref());
        hasher.update(superblock.inner.s3_path.prefix.as_str().as_bytes());
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
                    write_status: WriteStatus::LocalOpenForWriting,
                    stat: InodeStat::for_file(0, OffsetDateTime::UNIX_EPOCH, None, None, None, Default::default()),
                    kind_data: InodeKindData::File {},
                    pending_upload_hook: None,
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
            .setattr(ino, Some(atime), Some(mtime))
            .await
            .expect("setattr should be successful");
        let stat = lookup.stat();
        assert_eq!(stat.atime, atime);
        assert_eq!(stat.mtime, mtime);
        assert!(stat.is_valid());
    }

    #[cfg(feature = "shuttle")]
    mod shuttle_tests {
        use super::*;
        use crate::fs::FUSE_ROOT_INODE;
        use mountpoint_s3_client::mock_client::MockClient;
        use shuttle::{check_dfs, check_pct, check_random, thread};
        use shuttle::{future::block_on, sync::Arc};

        #[test]
        fn test_create_and_forget_race_condition() {
            async fn test_helper() {
                let bucket = Bucket::new("test_bucket").unwrap();
                let client = Arc::new(
                    MockClient::config()
                        .bucket(bucket.to_string())
                        .part_size(1024 * 1024)
                        .build(),
                );

                let name = "foo";
                client.add_object(name, b"foo".into());

                let superblock = Arc::new(Superblock::new(
                    client.clone(),
                    S3Path::new(bucket, Default::default()),
                    Default::default(),
                ));

                let lookup = superblock.lookup(ROOT_INODE_NO, name.as_ref()).await.unwrap();
                let ino = lookup.ino();
                let lookup_count = superblock.get_lookup_count(ino);
                assert_eq!(lookup_count, 1);

                let superblock_clone = superblock.clone();
                let forget_task = thread::spawn(async move || {
                    superblock_clone.forget(ino, 1).await;
                });

                let file_name = "bar";
                superblock
                    .create(ROOT_INODE_NO, file_name.as_ref(), InodeKind::File)
                    .await
                    .unwrap();

                forget_task.join().unwrap().await;
                let ino = lookup.ino();
                let lookup_count = superblock.get_lookup_count(ino);
                assert_eq!(lookup_count, 0);
            }

            check_random(|| block_on(test_helper()), 1000);
            check_pct(|| block_on(test_helper()), 1000, 3);
        }

        #[test]
        fn test_concurrent_rename_different_files() {
            async fn test_helper() {
                let bucket = Bucket::new("test_bucket").unwrap();
                let client = Arc::new(
                    MockClient::config()
                        .bucket(bucket.to_string())
                        .part_size(1024 * 1024)
                        .enable_rename(true)
                        .build(),
                );

                // Create directories first
                let superblock = Arc::new(Superblock::new(
                    client.clone(),
                    S3Path::new(bucket, Default::default()),
                    Default::default(),
                ));

                // Create initial files and directories
                let dir = "dir";
                let dirtwo = "dirtwo";
                let source_name = "source"; // Changed to match the full key
                let dest_name = "dest";

                // Create directories and files
                client.add_object("dir/source", b"content".into());
                client.add_object("dirtwo/source", b"content".into());

                // Lookup directories to get inodes
                let dir_lookup = superblock.lookup(ROOT_INODE_NO, dir.as_ref()).await.unwrap();
                let dir_ino = dir_lookup.ino();

                let dirtwo_lookup = superblock.lookup(ROOT_INODE_NO, dirtwo.as_ref()).await.unwrap();
                let dirtwo_ino = dirtwo_lookup.ino();

                // Verify source files exist before rename
                let source1_lookup = superblock.lookup(dir_ino, source_name.as_ref()).await;
                let source2_lookup = superblock.lookup(dirtwo_ino, source_name.as_ref()).await;
                assert!(
                    source1_lookup.is_ok() && source2_lookup.is_ok(),
                    "Source files should exist before rename"
                );

                // Spawn concurrent rename operations
                let superblock_clone1 = superblock.clone();
                let superblock_clone2 = superblock.clone();

                let rename_task1 = thread::spawn(move || {
                    block_on(superblock_clone1.rename(
                        dir_ino,
                        source_name.as_ref(),
                        dir_ino,
                        dest_name.as_ref(),
                        false,
                    ))
                });

                let rename_task2 = thread::spawn(move || {
                    block_on(superblock_clone2.rename(
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
                let dest1_lookup = superblock.lookup(dir_ino, dest_name.as_ref()).await;
                let dest2_lookup = superblock.lookup(dirtwo_ino, dest_name.as_ref()).await;

                assert!(
                    dest1_lookup.is_ok() && dest2_lookup.is_ok(),
                    "Both renamed files should exist"
                );

                // Verify source files no longer exist
                let source1_after = superblock.lookup(dir_ino, source_name.as_ref()).await;
                let source2_after = superblock.lookup(dirtwo_ino, source_name.as_ref()).await;

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
                let bucket = Bucket::new("test_bucket").unwrap();
                let client = MockClient::config()
                    .bucket(bucket.to_string())
                    .part_size(1024 * 1024)
                    .enable_rename(true)
                    .build();

                let source_name = "source";
                client.add_object(source_name, b"foo".into());

                let dest_name = "dest";
                client.add_object(dest_name, b"dest".into());

                let superblock = Arc::new(Superblock::new(
                    client,
                    S3Path::new(bucket, Default::default()),
                    Default::default(),
                ));
                // Create two threads, one that renames and one that tries to open the destination
                let superblock_clone1 = superblock.clone();
                let dest_lookup = superblock.lookup(ROOT_INODE_NO, dest_name.as_ref()).await.unwrap();
                let _dest_ino = dest_lookup.ino();
                let src_lookup = superblock.lookup(ROOT_INODE_NO, source_name.as_ref()).await.unwrap();
                let _src_ino = src_lookup.ino();

                let rename_task1 = thread::spawn(move || {
                    block_on(async {
                        superblock_clone1
                            .rename(
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

                let lookup_task = thread::spawn(move || {
                    block_on(async {
                        let lookup = superblock_clone2
                            .lookup(ROOT_INODE_NO, dest_name.as_ref())
                            .await
                            .expect("should succeed as object will be in S3");
                        lookup.ino()
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
