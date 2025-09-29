use std::collections::HashMap;
use std::ffi::{OsStr, OsString};

use async_trait::async_trait;
use mountpoint_s3_client::types::ETag;
use time::OffsetDateTime;

use super::core::{Manifest, ManifestDirIter, ManifestError};

use crate::metablock::{
    InodeError, InodeErrorInfo, InodeInformation, InodeKind, InodeNo, InodeStat, Lookup, Metablock, NEVER_EXPIRE_TTL,
    ROOT_INODE_NO, TryAddDirEntry, ValidName, WriteMode,
};
use crate::s3::S3Path;
use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::{Arc, Mutex, RwLock};

/// Implementation of the `Metablock` trait that provides a read-only view of the metadata store.
///
/// This struct serves as the bridge between the filesystem operations and the metadata store,
/// handling lookups, directory listings, and attribute retrieval. It maintains the state needed
/// for these operations, including directory handles for readdir operations.
#[derive(Debug)]
pub struct ManifestMetablock {
    /// List of S3 channels (bucket+prefix combinations) available in the manifest.
    channels: Vec<Arc<S3Path>>,
    /// Time when the filesystem was mounted, used for setting timestamps in stat information.
    mount_time: OffsetDateTime,
    /// The underlying the metadata store that stores information about files and directories.
    manifest: Manifest,
    /// Counter for generating unique directory handle IDs for readdir operations.
    next_dir_handle_id: AtomicU64,
    /// Map of active directory handles used for readdir operations.
    /// Maps from handle ID to the directory iterator.
    readdir_handles: RwLock<HashMap<u64, Arc<Mutex<ManifestDirIter>>>>,
}

impl ManifestMetablock {
    pub fn new(manifest: Manifest) -> Result<Self, ManifestError> {
        let channels = manifest.load_channels()?.into_iter().map(Arc::new).collect();
        Ok(Self {
            channels,
            mount_time: OffsetDateTime::now_utc(),
            manifest,
            next_dir_handle_id: Default::default(),
            readdir_handles: Default::default(),
        })
    }

    fn get_parent_id(&self, ino: InodeNo) -> Result<InodeNo, InodeError> {
        if ino == ROOT_INODE_NO {
            return Ok(ROOT_INODE_NO);
        };

        let Some(manifest_entry) = self.manifest.manifest_lookup_by_id(ino)? else {
            return Err(InodeError::InodeDoesNotExist(ino));
        };

        Ok(manifest_entry.parent_id())
    }

    fn stat_for_directory(&self) -> InodeStat {
        InodeStat::for_directory(self.mount_time, NEVER_EXPIRE_TTL)
    }
}

#[async_trait]
impl Metablock for ManifestMetablock {
    async fn lookup(&self, parent_ino: InodeNo, name: &OsStr) -> Result<Lookup, InodeError> {
        let name: ValidName = name.try_into()?;
        let Some(manifest_entry) = self.manifest.manifest_lookup(parent_ino, &name)? else {
            return Err(InodeError::FileDoesNotExist(
                name.to_string(),
                InodeErrorInfo {
                    ino: parent_ino,
                    key: "".into(), // todo: review InodeErrorInfo
                    bucket: None,
                },
            ));
        };

        let lookup = manifest_entry.into_lookup(&self.channels, self.mount_time)?;
        Ok(lookup)
    }

    async fn getattr(&self, ino: InodeNo, _force_revalidate: bool) -> Result<Lookup, InodeError> {
        if ino == ROOT_INODE_NO {
            return Ok(Lookup::new(
                ino,
                self.stat_for_directory(),
                InodeKind::Directory,
                true,
                None,
            ));
        }

        let Some(manifest_entry) = self.manifest.manifest_lookup_by_id(ino)? else {
            return Err(InodeError::InodeDoesNotExist(ino));
        };

        let lookup = manifest_entry.into_lookup(&self.channels, self.mount_time)?;
        Ok(lookup)
    }

    async fn new_readdir_handle(&self, dir_ino: InodeNo) -> Result<u64, InodeError> {
        let readdir_handle_id = self.next_dir_handle_id.fetch_add(1, Ordering::SeqCst);
        let readdir_handle = self.manifest.dir_iter(dir_ino);
        self.readdir_handles
            .write()
            .expect("lock must succeed")
            .insert(readdir_handle_id, Arc::new(Mutex::new(readdir_handle)));
        Ok(readdir_handle_id)
    }

    async fn readdir<'a>(
        &self,
        parent: InodeNo,
        fh: u64,
        mut offset: i64,
        // In lookup-count-aware implementation of [Metablock] is_readdirplus argument enables "reference" counting of inodes:
        // https://github.com/libfuse/libfuse/blob/4166f2eb97da4e25a516abee3d6fe13b9ed77bc6/include/fuse_lowlevel.h#L1231
        //
        // [ManifestMetablock] never forgets inodes, so this argument is unused.
        _is_readdirplus: bool,
        mut replier: TryAddDirEntry<'a>,
    ) -> Result<(), InodeError> {
        let Some(readdir_handle) = self
            .readdir_handles
            .read()
            .expect("lock must succeed")
            .get(&fh)
            .cloned()
        else {
            return Err(InodeError::NoSuchDirHandle { fh });
        };

        // serve '.' and '..' entries
        if offset < 1 {
            if replier(
                InodeInformation::new(parent, self.stat_for_directory(), InodeKind::Directory, true),
                ".".into(),
                offset + 1,
                0,
            ) {
                return Ok(());
            }
            offset += 1;
        }

        if offset < 2 {
            let grandparent_ino = self.get_parent_id(parent)?;
            if replier(
                InodeInformation::new(grandparent_ino, self.stat_for_directory(), InodeKind::Directory, true),
                "..".into(),
                offset + 1,
                0,
            ) {
                return Ok(());
            }
            offset += 1;
        }

        // load entries from the manifest
        let mut readdir_handle = readdir_handle.lock().expect("lock must succeed");
        let shifted_offset = (offset - 2) as usize; // shift offset accounting for '.' and '..'
        readdir_handle.seek(shifted_offset)?; // typically no-op, but required for out-of-order requests
        while let Some(manifest_entry) = readdir_handle.next_entry()? {
            let (inode_info, name) = manifest_entry
                .clone()
                .into_inode_information(&self.channels, self.mount_time)?;
            if replier(inode_info, OsString::from(name), offset + 1, 0) {
                readdir_handle.readd(manifest_entry);
                break;
            }
            offset += 1;
        }

        Ok(())
    }

    async fn releasedir(&self, fh: u64) -> Result<(), InodeError> {
        self.readdir_handles.write().expect("lock must succeed").remove(&fh);
        Ok(())
    }

    async fn start_reading(&self, _ino: InodeNo) -> Result<(), InodeError> {
        // Assume getattr was just called to check for inode existence, so this is a no-op
        Ok(())
    }

    async fn finish_reading(&self, _ino: InodeNo) -> Result<(), InodeError> {
        // This is a no-op
        Ok(())
    }

    async fn forget(&self, _ino: InodeNo, _n: u64) {
        // Inodes are kept on disk for the lifetime of a mount (for feature lookup-s), so this is a no-op
    }

    async fn create(&self, dir: InodeNo, _name: &OsStr, _kind: InodeKind) -> Result<Lookup, InodeError> {
        // For a read-only view, don't allow creation
        Err(InodeError::InodeNotWritable(InodeErrorInfo {
            ino: dir,
            key: "".into(),
            bucket: None,
        }))
    }

    async fn start_writing(&self, ino: InodeNo, _mode: &WriteMode, _is_truncate: bool) -> Result<(), InodeError> {
        // For a read-only view, don't allow writing
        Err(InodeError::InodeNotWritable(InodeErrorInfo {
            ino,
            key: "".into(),
            bucket: None,
        }))
    }

    async fn inc_file_size(&self, ino: InodeNo, _len: usize) -> Result<usize, InodeError> {
        Err(InodeError::InodeNotWritable(InodeErrorInfo {
            ino,
            key: "".into(),
            bucket: None,
        }))
    }

    async fn finish_writing(&self, ino: InodeNo, _etag: Option<ETag>) -> Result<(), InodeError> {
        Err(InodeError::InodeNotWritable(InodeErrorInfo {
            ino,
            key: "".into(),
            bucket: None,
        }))
    }

    async fn rename(
        &self,
        src_parent_ino: InodeNo,
        _src_name: &OsStr,
        _dst_parent_ino: InodeNo,
        _dst_name: &OsStr,
        _allow_overwrite: bool,
    ) -> Result<(), InodeError> {
        Err(InodeError::InodeNotWritable(InodeErrorInfo {
            ino: src_parent_ino,
            key: "".into(),
            bucket: None,
        }))
    }

    async fn rmdir(&self, parent_ino: InodeNo, _name: &OsStr) -> Result<(), InodeError> {
        // For a read-only view, don't allow directory removal
        Err(InodeError::InodeNotWritable(InodeErrorInfo {
            ino: parent_ino,
            key: "".into(),
            bucket: None,
        }))
    }

    async fn unlink(&self, parent_ino: InodeNo, _name: &OsStr) -> Result<(), InodeError> {
        // For a read-only view, don't allow file removal
        Err(InodeError::InodeNotWritable(InodeErrorInfo {
            ino: parent_ino,
            key: "".into(),
            bucket: None,
        }))
    }

    async fn setattr(
        &self,
        ino: InodeNo,
        _atime: Option<OffsetDateTime>,
        _mtime: Option<OffsetDateTime>,
    ) -> Result<Lookup, InodeError> {
        Err(InodeError::InodeNotWritable(InodeErrorInfo {
            ino,
            key: "".into(),
            bucket: None,
        }))
    }
}
