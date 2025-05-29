use std::collections::HashMap;
use std::ffi::{OsStr, OsString};
use std::time::{Duration, UNIX_EPOCH};

use async_trait::async_trait;
use fuser::FileAttr;
use mountpoint_s3_client::types::ETag;
use time::OffsetDateTime;

use crate::fs::{DirectoryEntry, FUSE_ROOT_INODE};
use crate::manifest::{Manifest, ManifestEntry, ManifestIter};
use crate::mountspace::{LookedUp, Mountspace, MountspaceDirectoryReplier, S3Location};
use crate::superblock::{InodeError, InodeErrorInfo, InodeKind, InodeNo, InodeStat, MakeAttrConfig, WriteMode};
use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::{Arc, Mutex, RwLock};

// 200 years seems long enough
const NEVER_EXPIRE_TTL: Duration = Duration::from_secs(200 * 365 * 24 * 60 * 60);

#[derive(Debug)]
pub struct HyperBlock {
    make_attr_config: MakeAttrConfig,
    bucket_name: String,
    mount_time: OffsetDateTime,
    manifest: Manifest,
    next_dir_handle_id: AtomicU64,
    readdir_handles: RwLock<HashMap<u64, Arc<Mutex<ManifestIter>>>>,
}

impl HyperBlock {
    pub fn new(make_attr_config: MakeAttrConfig, bucket_name: &str, manifest: Manifest) -> Self {
        Self {
            make_attr_config,
            bucket_name: bucket_name.to_string(),
            mount_time: OffsetDateTime::now_utc(),
            manifest,
            next_dir_handle_id: Default::default(),
            readdir_handles: Default::default(),
        }
    }

    fn manifest_entry_to_lookup(&self, manifest_entry: ManifestEntry) -> LookedUp {
        match manifest_entry {
            ManifestEntry::File {
                etag,
                size,
                id,
                full_key,
                ..
            } => LookedUp {
                ino: id,
                stat: InodeStat::for_file(
                    size,
                    self.mount_time,
                    Some(etag.as_str().into()),
                    // Intentionally leaving `storage_class` and `restore_status` empty,
                    // which may result in EIO errors on read for GLACIER | DEEP_ARCHIVE objects
                    None,
                    None,
                    NEVER_EXPIRE_TTL,
                ),
                kind: InodeKind::File,
                is_remote: true,
                location: Some(S3Location {
                    bucket: self.bucket_name.clone(),
                    full_key: full_key.try_into().expect("must be a valid key"),
                }),
            },
            ManifestEntry::Directory { id, full_key, .. } => LookedUp {
                ino: id,
                stat: InodeStat::for_directory(self.mount_time, NEVER_EXPIRE_TTL),
                kind: InodeKind::Directory,
                is_remote: true,
                location: Some(S3Location {
                    bucket: self.bucket_name.clone(),
                    full_key: full_key.try_into().expect("must be a valid key"),
                }),
            },
        }
    }

    fn get_parent_id(&self, ino: InodeNo) -> Result<InodeNo, InodeError> {
        if ino == FUSE_ROOT_INODE {
            return Ok(FUSE_ROOT_INODE);
        };

        let Some(manifest_entry) = self.manifest.manifest_lookup_by_id(ino)? else {
            return Err(InodeError::InodeDoesNotExist(ino));
        };

        match manifest_entry {
            ManifestEntry::File { parent_id, .. } => Ok(parent_id),
            ManifestEntry::Directory { parent_id, .. } => Ok(parent_id),
        }
    }

    fn make_attr(&self, ino: InodeNo, kind: InodeKind, size: u64) -> FileAttr {
        /// From man stat(2): `st_blocks`: "This field indicates the number of blocks allocated to
        /// the file, in 512-byte units."
        const STAT_BLOCK_SIZE: u64 = 512;
        /// From man stat(2): `st_blksize`: "This field gives the "preferred" block size for
        /// efficient filesystem I/O."
        const PREFERRED_IO_BLOCK_SIZE: u32 = 4096;

        // We don't implement hard links, and don't want to have to list a directory to count its
        // hard links, so we just assume one link for files (itself) and two links for directories
        // (itself + the "." link).
        let (perm, nlink) = match kind {
            InodeKind::File => (self.make_attr_config.file_mode, 1),
            InodeKind::Directory => (self.make_attr_config.dir_mode, 2),
        };

        FileAttr {
            ino,
            size,
            blocks: size.div_ceil(STAT_BLOCK_SIZE),
            atime: self.mount_time.into(),
            mtime: self.mount_time.into(),
            ctime: self.mount_time.into(),
            crtime: UNIX_EPOCH,
            kind: kind.into(),
            perm,
            nlink,
            uid: self.make_attr_config.uid,
            gid: self.make_attr_config.gid,
            rdev: 0,
            flags: 0,
            blksize: PREFERRED_IO_BLOCK_SIZE,
        }
    }
}

#[async_trait]
impl Mountspace for HyperBlock {
    async fn lookup(&self, parent_ino: InodeNo, name: &OsStr) -> Result<LookedUp, InodeError> {
        // TODO: handle non utf-8 names gracefully
        let name = name.to_str().expect("must be utf-8").to_string();
        let Some(manifest_entry) = self.manifest.manifest_lookup(parent_ino, &name)? else {
            return Err(InodeError::FileDoesNotExist(
                name.to_string(),
                InodeErrorInfo(parent_ino, name),
            ));
        };

        let lookup = self.manifest_entry_to_lookup(manifest_entry);
        Ok(lookup)
    }

    async fn getattr(&self, ino: InodeNo, _force_revalidate: bool) -> Result<LookedUp, InodeError> {
        if ino == FUSE_ROOT_INODE {
            return Ok(LookedUp {
                ino,
                stat: InodeStat::for_directory(self.mount_time, NEVER_EXPIRE_TTL),
                kind: InodeKind::Directory,
                is_remote: true,
                location: Some(S3Location {
                    bucket: self.bucket_name.clone(),
                    full_key: "".to_string().try_into().expect("must be a valid key"),
                }),
            });
        }

        let Some(manifest_entry) = self.manifest.manifest_lookup_by_id(ino)? else {
            return Err(InodeError::InodeDoesNotExist(ino));
        };

        let lookup = self.manifest_entry_to_lookup(manifest_entry);
        Ok(lookup)
    }

    // Other required Mountspace trait implementations...
    fn forget(&self, _ino: InodeNo, _n: u64) {
        // No-op for testing
    }

    async fn create(&self, _dir: InodeNo, _name: &OsStr, _kind: InodeKind) -> Result<LookedUp, InodeError> {
        // For a read-only view, don't allow creation
        Err(InodeError::OperationNotPermitted)
    }

    async fn start_writing(&self, _ino: InodeNo, _mode: &WriteMode, _is_truncate: bool) -> Result<(), InodeError> {
        // For a read-only view, don't allow writing
        Err(InodeError::OperationNotPermitted)
    }

    fn inc_file_size(&self, _ino: InodeNo, _len: usize) -> Result<usize, InodeError> {
        Err(InodeError::OperationNotPermitted)
    }

    fn finish_writing(&self, _ino: InodeNo, _etag: Option<ETag>) -> Result<(), InodeError> {
        Err(InodeError::OperationNotPermitted)
    }

    async fn start_reading(&self, _ino: InodeNo) -> Result<(), InodeError> {
        // Assume getattr was just called to check for inode existence
        Ok(())
    }

    fn finish_reading(&self, _ino: InodeNo) -> Result<(), InodeError> {
        Ok(())
    }

    async fn new_readdir_handle(&self, dir_ino: InodeNo, _page_size: usize) -> Result<u64, InodeError> {
        let readdir_handle_id = self.next_dir_handle_id.fetch_add(1, Ordering::SeqCst);
        let readdir_handle = self.manifest.iter(dir_ino);
        self.readdir_handles
            .write()
            .expect("lock must succeed")
            .insert(readdir_handle_id, Arc::new(Mutex::new(readdir_handle)));
        Ok(readdir_handle_id)
    }

    async fn rmdir(&self, _parent_ino: InodeNo, _name: &OsStr) -> Result<(), InodeError> {
        // For a read-only view, don't allow directory removal
        Err(InodeError::OperationNotPermitted)
    }

    async fn unlink(&self, _parent_ino: InodeNo, _name: &OsStr) -> Result<(), InodeError> {
        // For a read-only view, don't allow file removal
        Err(InodeError::OperationNotPermitted)
    }

    async fn setattr(
        &self,
        _ino: InodeNo,
        _atime: Option<OffsetDateTime>,
        _mtime: Option<OffsetDateTime>,
    ) -> Result<LookedUp, InodeError> {
        Err(InodeError::OperationNotPermitted)
    }

    async fn readdir<'a>(
        &self,
        parent: InodeNo,
        fh: u64,
        mut offset: i64,
        _is_readdirplus: bool,
        mut reply: MountspaceDirectoryReplier<'a>,
    ) -> Result<MountspaceDirectoryReplier<'a>, InodeError> {
        // serve '.' and '..' entries
        if offset < 1 {
            let attr = self.make_attr(parent, InodeKind::Directory, 0);
            let entry = DirectoryEntry {
                ino: parent,
                offset: offset + 1, // start with 1
                name: ".".into(),
                attr,
                generation: 0,
                ttl: NEVER_EXPIRE_TTL,
            };
            if reply.add(entry) {
                return Ok(reply);
            }
            offset += 1;
        }

        if offset < 2 {
            let grandparent_ino = self.get_parent_id(parent)?;
            let attr = self.make_attr(grandparent_ino, InodeKind::Directory, 0);
            let entry = DirectoryEntry {
                ino: grandparent_ino,
                offset: offset + 1,
                name: "..".into(),
                attr,
                generation: 0,
                ttl: NEVER_EXPIRE_TTL,
            };
            if reply.add(entry) {
                return Ok(reply);
            }
            offset += 1;
        }

        // load entries from the manifest
        let Some(readdir_handle) = self
            .readdir_handles
            .read()
            .expect("lock must succeed")
            .get(&fh)
            .cloned()
        else {
            return Err(InodeError::NoSuchDirHandle);
        };
        let mut readdir_handle = readdir_handle.lock().expect("lock must succeed"); // TODO: fine grained locking?
        readdir_handle.seek((offset - 2) as usize)?; // shift offset accounting for '.' and '..'
        loop {
            let Some(manifest_entry) = readdir_handle.next_entry()? else {
                break;
            };
            let (ino, full_key, size, kind) = match manifest_entry.clone() {
                ManifestEntry::File { id, full_key, size, .. } => (id, full_key, size, InodeKind::File),
                ManifestEntry::Directory { id, full_key, .. } => (id, full_key, 0, InodeKind::Directory),
            };
            let readdir_entry = DirectoryEntry {
                ino,
                offset: offset + 1,
                name: OsString::from(full_key.rsplit("/").next().unwrap()),
                attr: self.make_attr(ino, kind, size as u64),
                generation: 0,
                ttl: NEVER_EXPIRE_TTL,
            };
            if reply.add(readdir_entry) {
                readdir_handle.readd(manifest_entry);
                break;
            }
            offset += 1;
        }

        Ok(reply)
    }
}
