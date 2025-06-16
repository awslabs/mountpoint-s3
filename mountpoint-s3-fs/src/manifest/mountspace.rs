use std::collections::HashMap;
use std::ffi::{OsStr, OsString};
use std::time::{Duration, UNIX_EPOCH};

use async_trait::async_trait;
use fuser::FileAttr;
use mountpoint_s3_client::types::ETag;
use time::OffsetDateTime;

use crate::fs::{DirectoryEntry, FUSE_ROOT_INODE};
use crate::manifest::manifest_impl::{Manifest, ManifestEntry, ManifestError, ManifestIter};
use crate::mountspace::{LookedUp, Mountspace, MountspaceDirectoryReplier, ReadHandle, S3Location, WriteHandle};
use crate::prefix::Prefix;
use crate::superblock::path::{ValidKey, ValidKeyError};
use crate::superblock::{InodeError, InodeErrorInfo, InodeKind, InodeNo, InodeStat, MakeAttrConfig, WriteMode};
use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::{Arc, Mutex, RwLock};

// 200 years seems long enough
const NEVER_EXPIRE_TTL: Duration = Duration::from_secs(200 * 365 * 24 * 60 * 60);

#[derive(Debug)]
pub struct ChannelConfig {
    pub bucket_name: String,
    pub prefix: Prefix,
}

#[derive(Debug)]
pub struct HyperBlock {
    make_attr_config: MakeAttrConfig,
    channels: Vec<ChannelConfig>,
    mount_time: OffsetDateTime,
    manifest: Manifest,
    next_dir_handle_id: AtomicU64,
    readdir_handles: RwLock<HashMap<u64, Arc<Mutex<ManifestIter>>>>,
}

impl HyperBlock {
    pub fn new(make_attr_config: MakeAttrConfig, manifest: Manifest, channels: Vec<ChannelConfig>) -> Self {
        Self {
            make_attr_config,
            channels,
            mount_time: OffsetDateTime::now_utc(),
            manifest,
            next_dir_handle_id: Default::default(),
            readdir_handles: Default::default(),
        }
    }

    fn manifest_entry_to_lookup(&self, manifest_entry: ManifestEntry) -> Result<LookedUp, ValidKeyError> {
        assert_eq!(self.channels.len(), 1, "exactly one channel is expected now");
        let channel = &self.channels[0];
        let lookup = match manifest_entry {
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
                    bucket: channel.bucket_name.clone(),
                    full_key: ValidKey::try_from(format!("{}{}", channel.prefix, full_key))?,
                }),
            },
            ManifestEntry::Directory { id, full_key, .. } => LookedUp {
                ino: id,
                stat: InodeStat::for_directory(self.mount_time, NEVER_EXPIRE_TTL),
                kind: InodeKind::Directory,
                is_remote: true,
                location: Some(S3Location {
                    bucket: channel.bucket_name.clone(),
                    full_key: ValidKey::try_from(format!("{}{}/", channel.prefix, full_key))?,
                }),
            },
        };
        debug_assert!(
            lookup.location.as_ref().expect("must have location").full_key.kind() == lookup.kind,
            "inferred wrong kind from full_key for ino {}",
            lookup.ino,
        );
        Ok(lookup)
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
        let Some(name) = name.to_str().map(String::from) else {
            return Err(InodeError::InvalidFileName(name.to_os_string()));
        };
        let Some(manifest_entry) = self.manifest.manifest_lookup(parent_ino, &name)? else {
            return Err(InodeError::FileDoesNotExist(
                name.to_string(),
                InodeErrorInfo(parent_ino, name),
            ));
        };

        let lookup = self
            .manifest_entry_to_lookup(manifest_entry)
            .map_err(ManifestError::from)?;
        Ok(lookup)
    }

    async fn getattr(&self, ino: InodeNo, _force_revalidate: bool) -> Result<LookedUp, InodeError> {
        if ino == FUSE_ROOT_INODE {
            return Ok(LookedUp {
                ino,
                stat: InodeStat::for_directory(self.mount_time, NEVER_EXPIRE_TTL),
                kind: InodeKind::Directory,
                is_remote: true,
                location: None,
            });
        }

        let Some(manifest_entry) = self.manifest.manifest_lookup_by_id(ino)? else {
            return Err(InodeError::InodeDoesNotExist(ino));
        };

        let lookup = self
            .manifest_entry_to_lookup(manifest_entry)
            .map_err(ManifestError::from)?;
        Ok(lookup)
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

    async fn readdir<'a>(
        &self,
        parent: InodeNo,
        fh: u64,
        mut offset: i64,
        _is_readdirplus: bool,
        mut reply: MountspaceDirectoryReplier<'a>,
    ) -> Result<(), InodeError> {
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
                return Ok(());
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
                return Ok(());
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
        let mut readdir_handle = readdir_handle.lock().expect("lock must succeed");
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

        Ok(())
    }

    async fn start_reading(&self, ino: InodeNo) -> Result<ReadHandle, InodeError> {
        // Assume getattr was just called to check for inode existence, so this is a no-op
        Ok(ReadHandle { no: None, ino })
    }

    async fn finish_reading(&self, _handle: &ReadHandle) -> Result<(), InodeError> {
        // This is a no-op
        Ok(())
    }

    async fn forget(&self, _ino: InodeNo, _n: u64) {
        // Inodes are kept on disk for the lifetime of a mount (for feature lookup-s), so this is a no-op
    }

    async fn create(&self, _dir: InodeNo, _name: &OsStr, _kind: InodeKind) -> Result<LookedUp, InodeError> {
        // For a read-only view, don't allow creation
        Err(InodeError::OperationNotPermitted)
    }

    async fn start_writing(
        &self,
        _ino: InodeNo,
        _mode: &WriteMode,
        _is_truncate: bool,
    ) -> Result<WriteHandle, InodeError> {
        // For a read-only view, don't allow writing
        Err(InodeError::OperationNotPermitted)
    }

    async fn inc_file_size(&self, _handle: &WriteHandle, _len: usize) -> Result<usize, InodeError> {
        Err(InodeError::OperationNotPermitted)
    }

    async fn finish_writing(&self, _handle: &WriteHandle, _etag: Option<ETag>) -> Result<(), InodeError> {
        Err(InodeError::OperationNotPermitted)
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
}
