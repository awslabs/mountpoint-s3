use std::collections::HashMap;
use std::ffi::{OsStr, OsString};
use std::time::Duration;

use async_trait::async_trait;
use mountpoint_s3_client::types::ETag;
use time::OffsetDateTime;

use crate::fs::FUSE_ROOT_INODE;
use crate::manifest::manifest_impl::{Manifest, ManifestEntry, ManifestError, ManifestIter};
use crate::metablock::{
    InodeError, InodeErrorInfo, InodeInformation, InodeKind, InodeNo, InodeStat, Lookup, Metablock, S3Location,
    TryAddDirEntry, ValidKey, WriteMode,
};
use crate::s3::config::S3Path;
use crate::sync::atomic::{AtomicU64, Ordering};
use crate::sync::{Arc, Mutex, RwLock};

// 200 years seems long enough
const NEVER_EXPIRE_TTL: Duration = Duration::from_secs(200 * 365 * 24 * 60 * 60);

#[derive(Debug)]
pub struct ManifestMetablock {
    channels: Vec<Arc<S3Path>>,
    mount_time: OffsetDateTime,
    manifest: Manifest,
    next_dir_handle_id: AtomicU64,
    readdir_handles: RwLock<HashMap<u64, Arc<Mutex<ManifestIter>>>>,
}

impl ManifestMetablock {
    pub fn new(manifest: Manifest) -> Result<Self, ManifestError> {
        let channels = manifest.channels()?.into_iter().map(Arc::new).collect();
        Ok(Self {
            channels,
            mount_time: OffsetDateTime::now_utc(),
            manifest,
            next_dir_handle_id: Default::default(),
            readdir_handles: Default::default(),
        })
    }

    fn manifest_entry_to_lookup(&self, manifest_entry: ManifestEntry) -> Result<Lookup, ManifestError> {
        let channel_id = match &manifest_entry {
            ManifestEntry::File { channel_id, .. } => *channel_id,
            ManifestEntry::Directory { channel_id, .. } => *channel_id,
        } as usize;
        if channel_id >= self.channels.len() {
            return Err(ManifestError::InvalidRow(manifest_entry.get_full_key().to_string()));
        }
        let channel = self.channels[channel_id].clone();
        let lookup = match manifest_entry {
            ManifestEntry::File {
                etag,
                size,
                id,
                full_key,
                ..
            } => Lookup::new(
                id,
                self.stat_for_file(&etag, size),
                InodeKind::File,
                true,
                Some(S3Location {
                    path: channel,
                    partial_key: ValidKey::try_from(ManifestEntry::s3_key(full_key))?,
                }),
            ),
            ManifestEntry::Directory {
                id,
                full_key,
                parent_id,
                ..
            } => {
                let location = if parent_id == FUSE_ROOT_INODE {
                    None // virtual channel directories have no corresponding S3 location
                } else {
                    Some(S3Location {
                        path: channel,
                        partial_key: ValidKey::try_from(format!("{}/", ManifestEntry::s3_key(full_key)))?, // TODO: append slash in ManifestEntry::s3_key
                    })
                };
                Lookup::new(id, self.stat_for_directory(), InodeKind::Directory, true, location)
            }
        };
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

    fn stat_for_directory(&self) -> InodeStat {
        InodeStat::for_directory(self.mount_time, NEVER_EXPIRE_TTL)
    }

    fn stat_for_file(&self, etag: &str, size: usize) -> InodeStat {
        InodeStat::for_file(
            size,
            self.mount_time,
            Some(etag.into()),
            // Intentionally leaving `storage_class` and `restore_status` empty,
            // which may result in EIO errors on read for GLACIER | DEEP_ARCHIVE objects
            None,
            None,
            NEVER_EXPIRE_TTL,
        )
    }
}

#[async_trait]
impl Metablock for ManifestMetablock {
    async fn lookup(&self, parent_ino: InodeNo, name: &OsStr) -> Result<Lookup, InodeError> {
        let Some(name) = name.to_str().map(String::from) else {
            return Err(InodeError::InvalidFileName(name.to_os_string()));
        };
        let Some(manifest_entry) = self.manifest.manifest_lookup(parent_ino, &name)? else {
            return Err(InodeError::FileDoesNotExist(
                name.to_string(),
                InodeErrorInfo {
                    ino: parent_ino,
                    key: name.into(),
                    bucket: None,
                },
            ));
        };

        let lookup = self.manifest_entry_to_lookup(manifest_entry)?;
        Ok(lookup)
    }

    async fn getattr(&self, ino: InodeNo, _force_revalidate: bool) -> Result<Lookup, InodeError> {
        if ino == FUSE_ROOT_INODE {
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

        let lookup = self.manifest_entry_to_lookup(manifest_entry)?;
        Ok(lookup)
    }

    async fn new_readdir_handle(&self, dir_ino: InodeNo) -> Result<u64, InodeError> {
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
        mut replier: TryAddDirEntry<'a>,
    ) -> Result<(), InodeError> {
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
        let Some(readdir_handle) = self
            .readdir_handles
            .read()
            .expect("lock must succeed")
            .get(&fh)
            .cloned()
        else {
            return Err(InodeError::NoSuchDirHandle { fh });
        };
        let mut readdir_handle = readdir_handle.lock().expect("lock must succeed");
        readdir_handle.seek((offset - 2) as usize)?; // shift offset accounting for '.' and '..'
        loop {
            let Some(manifest_entry) = readdir_handle.next_entry()? else {
                break;
            };
            let (ino, full_key, kind, stat) = match manifest_entry.clone() {
                ManifestEntry::File {
                    id,
                    full_key,
                    etag,
                    size,
                    ..
                } => (id, full_key, InodeKind::File, self.stat_for_file(&etag, size)),
                ManifestEntry::Directory { id, full_key, .. } => {
                    (id, full_key, InodeKind::Directory, self.stat_for_directory())
                }
            };
            if replier(
                InodeInformation::new(ino, stat, kind, true),
                OsString::from(full_key.rsplit("/").next().unwrap()),
                offset + 1,
                0,
            ) {
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
        })) // TODO: lookup the key?
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
