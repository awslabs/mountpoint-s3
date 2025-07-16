use crate::fs::{FUSE_ROOT_INODE, InodeKind};
use crate::sync::Arc;
use std::collections::VecDeque;
use std::io;
use std::path::{Path, PathBuf};
use std::time::Duration;
use thiserror::Error;
use time::OffsetDateTime;
use tracing::error;

use super::db::{Db, DbEntry};

use crate::metablock::{InodeInformation, InodeStat, Lookup, S3Location, ValidKey, ValidKeyError, ValidName};
use crate::prefix::PrefixError;
use crate::s3::config::S3Path;

const NEVER_EXPIRE_TTL: Duration = Duration::from_secs(200 * 365 * 24 * 60 * 60);

#[derive(Debug, Error)]
pub enum ManifestError {
    #[error("database exists")]
    DbExists,
    #[error("error opening manifest file at '{0}'")]
    CsvOpenError(PathBuf, #[source] io::Error),
    #[error("database error")]
    DbError(#[from] rusqlite::Error),
    #[error("key is invalid")]
    InvalidKey(#[from] ValidKeyError),
    #[error("folder marker {0}")]
    FolderMarker(String),
    #[error("invalid database row with id {0}")]
    InvalidRow(u64),
    #[error("csv error")]
    CsvError(#[from] csv::Error),
    #[error("db unique constraint violation, possibly due to a shadowed key")]
    ConstraintViolation(#[source] rusqlite::Error),
    #[error("prefix is invalid")]
    InvalidPrefix(#[from] PrefixError),
    #[error("channel is invalid: {0}")]
    InvalidChannel(String),
}

/// An entry returned by manifest_lookup() and ManifestIter::next()
#[derive(Debug, Clone)]
pub enum ManifestEntry {
    File {
        id: u64,
        parent_id: u64,
        channel_id: usize,
        parent_partial_key: ValidKey,
        name: String,
        etag: String,
        size: usize,
    },
    Directory {
        id: u64,
        parent_id: u64,
        channel_id: usize,
        parent_partial_key: Option<ValidKey>, // not set for synthetic channel dirs
        name: String,
    },
}

impl ManifestEntry {
    pub fn id(&self) -> u64 {
        match self {
            ManifestEntry::File { id, .. } => *id,
            ManifestEntry::Directory { id, .. } => *id,
        }
    }

    pub fn into_lookup(self, path: Arc<S3Path>, mount_time: OffsetDateTime) -> Result<Lookup, ManifestError> {
        let lookup = match self {
            ManifestEntry::File {
                id,
                parent_partial_key,
                name,
                etag,
                size,
                ..
            } => Lookup::new(
                id,
                Self::stat_for_file(&etag, size, mount_time),
                InodeKind::File,
                true,
                Some(S3Location::new(
                    path,
                    parent_partial_key.new_child(
                        ValidName::parse_str(&name).map_err(|_| ManifestError::InvalidRow(id))?,
                        InodeKind::File,
                    )?,
                )),
            ),
            ManifestEntry::Directory {
                id,
                parent_id,
                parent_partial_key,
                name,
                ..
            } => {
                let location = if let Some(parent_partial_key) = parent_partial_key {
                    Some(S3Location::new(
                        path,
                        parent_partial_key.new_child(
                            ValidName::parse_str(&name).map_err(|_| ManifestError::InvalidRow(id))?,
                            InodeKind::Directory,
                        )?,
                    ))
                } else {
                    // this invariant is guaranteed when constructed via [ManifestEntry::try_from], which is the only way we use
                    debug_assert_eq!(
                        parent_id, FUSE_ROOT_INODE,
                        "only synthetic channel dirs are allowed not to have parent_partial_key"
                    );
                    None
                };
                Lookup::new(
                    id,
                    Self::stat_for_directory(mount_time),
                    InodeKind::Directory,
                    true,
                    location,
                )
            }
        };
        Ok(lookup)
    }

    pub fn into_inode_information(
        self,
        mount_time: OffsetDateTime,
    ) -> Result<(InodeInformation, String), ManifestError> {
        let (ino, name, kind, stat) = match self {
            ManifestEntry::File {
                id, name, etag, size, ..
            } => (id, name, InodeKind::File, Self::stat_for_file(&etag, size, mount_time)),
            ManifestEntry::Directory { id, name, .. } => {
                (id, name, InodeKind::Directory, Self::stat_for_directory(mount_time))
            }
        };
        ValidName::parse_str(&name).map_err(|_| ManifestError::InvalidRow(ino))?;
        Ok((InodeInformation::new(ino, stat, kind, true), name))
    }

    fn stat_for_directory(mount_time: OffsetDateTime) -> InodeStat {
        InodeStat::for_directory(mount_time, NEVER_EXPIRE_TTL)
    }

    fn stat_for_file(etag: &str, size: usize, mount_time: OffsetDateTime) -> InodeStat {
        InodeStat::for_file(
            size,
            mount_time,
            Some(etag.into()),
            // Intentionally leaving `storage_class` and `restore_status` empty,
            // which may result in EIO errors on read for GLACIER | DEEP_ARCHIVE objects
            None,
            None,
            NEVER_EXPIRE_TTL,
        )
    }
}

impl TryFrom<DbEntry> for ManifestEntry {
    type Error = ManifestError;

    fn try_from(db_entry: DbEntry) -> Result<Self, Self::Error> {
        match (db_entry.etag, db_entry.size) {
            (None, None) => {
                // no etag and no size means a directory entry
                let parent_partial_key = db_entry.parent_partial_key.map(ValidKey::try_from).transpose()?;
                if parent_partial_key.is_none() && db_entry.parent_id != FUSE_ROOT_INODE {
                    Err(ManifestError::InvalidRow(db_entry.id))
                } else {
                    Ok(ManifestEntry::Directory {
                        id: db_entry.id,
                        parent_id: db_entry.parent_id,
                        channel_id: db_entry.channel_id,
                        parent_partial_key,
                        name: db_entry.name,
                    })
                }
            }
            (Some(etag), Some(size)) => Ok(ManifestEntry::File {
                // existing etag and size means a file entry
                id: db_entry.id,
                parent_id: db_entry.parent_id,
                channel_id: db_entry.channel_id,
                parent_partial_key: db_entry
                    .parent_partial_key
                    .map(ValidKey::try_from)
                    .transpose()?
                    .ok_or(ManifestError::InvalidRow(db_entry.id))?,
                name: db_entry.name,
                etag,
                size,
            }),
            _ => Err(ManifestError::InvalidRow(db_entry.id)),
        }
    }
}

/// Manifest of all available objects in the bucket
#[derive(Debug, Clone)]
pub struct Manifest {
    db: Db,
}

impl Manifest {
    pub fn new(manifest_db_path: &Path) -> Result<Self, rusqlite::Error> {
        let db = Db::new(manifest_db_path)?;
        Ok(Self { db })
    }

    /// Lookup an entry in the manifest, the result may be a file or a directory
    pub fn manifest_lookup(&self, parent_id: u64, name: &str) -> Result<Option<ManifestEntry>, ManifestError> {
        // search for an entry and validate it
        let db_entry = self.db.select_entry(parent_id, name)?;
        match db_entry {
            Some(db_entry) => Ok(Some(db_entry.try_into()?)),
            None => Ok(None),
        }
    }

    pub fn manifest_lookup_by_id(&self, ino: u64) -> Result<Option<ManifestEntry>, ManifestError> {
        // search for an entry and validate it
        let db_entry = self.db.select_entry_by_id(ino)?;
        match db_entry {
            Some(db_entry) => Ok(Some(db_entry.try_into()?)),
            None => Ok(None),
        }
    }

    /// Create an iterator over directory's direct children
    pub fn dir_iter(&self, parent_id: u64) -> ManifestIter {
        ManifestIter::new(self.db.clone(), parent_id)
    }

    pub fn load_channels(&self) -> Result<Vec<S3Path>, ManifestError> {
        self.db.load_channels()
    }
}

#[derive(Debug)]
pub struct ManifestIter {
    db: Db,
    /// Prepared entries in order to be returned by the iterator.
    entries: VecDeque<ManifestEntry>,
    /// ID of the directory being listed by this iterator
    parent_id: u64,
    /// Offset of the next child to search for in the database
    next_offset: usize,
    /// Max amount of entries to read from the database at once
    batch_size: usize,
    /// Database has no more entries
    finished: bool,
}

impl ManifestIter {
    fn new(db: Db, parent_id: u64) -> Self {
        let batch_size = 10000;
        Self {
            db,
            entries: Default::default(),
            parent_id,
            next_offset: 0,
            batch_size,
            finished: false,
        }
    }

    /// Next child of the directory
    pub fn next_entry(&mut self) -> Result<Option<ManifestEntry>, ManifestError> {
        if self.entries.is_empty() && !self.finished {
            self.search_next_entries()?;
        }

        let entry = self.entries.pop_front();
        if entry.is_some() {
            self.next_offset += 1;
        }

        Ok(entry)
    }

    pub fn readd(&mut self, entry: ManifestEntry) {
        self.next_offset -= 1;

        self.entries.push_front(entry);
    }

    // TODO: test the out of order readdir
    pub fn seek(&mut self, offset: usize) -> Result<(), ManifestError> {
        if offset != self.next_offset {
            metrics::counter!("manifest.readdir.out_of_order").increment(1);
            self.entries.clear();
            self.next_offset = offset;
            self.finished = false;
        };
        Ok(())
    }

    /// Load next batch of entries from the database
    fn search_next_entries(&mut self) -> Result<(), ManifestError> {
        let db_entries = self
            .db
            .select_children(self.parent_id, self.next_offset, self.batch_size)?;

        if db_entries.len() < self.batch_size {
            self.finished = true;
        }

        let manifest_entries: Result<Vec<ManifestEntry>, ManifestError> =
            db_entries.into_iter().map(|db_entry| db_entry.try_into()).collect();
        self.entries.extend(manifest_entries?);

        Ok(())
    }
}
