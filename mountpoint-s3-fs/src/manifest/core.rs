use std::collections::VecDeque;
use std::path::Path;

use thiserror::Error;
use time::OffsetDateTime;
use tracing::error;

use super::db::{Db, DbEntry};

use crate::fs::{FUSE_ROOT_INODE, InodeKind};
use crate::metablock::{
    InodeInformation, InodeStat, Lookup, NEVER_EXPIRE_TTL, S3Location, ValidKey, ValidKeyError, ValidName,
};
use crate::s3::config::S3Path;
use crate::sync::Arc;

#[derive(Debug, Error)]
pub enum ManifestError {
    #[error("failed to read from the metadata store")]
    DbError(#[from] rusqlite::Error),
    #[error("s3 key from the metadata store is invalid")]
    InvalidKey(#[from] ValidKeyError),
    #[error("read invalid row with id {0}")]
    InvalidRow(u64),
    #[error("read invalid channel row with id {0}")]
    InvalidChannel(u64),
}

/// An validated entry to be returned by manifest_lookup() and ManifestDirIter::next_entry().
///
/// Represents either a file or directory in the S3 bucket manifest.
/// Files have additional metadata like etag and size, while directories
/// may be regular directories or synthetic channel directories.
#[derive(Debug, Clone)]
pub enum ManifestEntry {
    /// Represents a file in the S3 bucket.
    File {
        /// Unique identifier for this file entry, used as inode number.
        id: u64,
        /// Identifier of the parent directory entry.
        parent_id: u64,
        /// Identifier of the S3 channel (bucket+prefix combination) this file belongs to.
        channel_id: usize,
        /// Partial key of the parent directory.
        parent_partial_key: ValidKey,
        /// Name of the file.
        name: String,
        /// Entity tag (ETag) of the S3 object, used for content validation.
        etag: String,
        /// Size of the S3 object in bytes.
        size: usize,
    },
    /// Represents a directory in the S3 bucket.
    Directory {
        /// Unique identifier for this directory entry, used as inode number.
        id: u64,
        /// Identifier of the parent directory entry.
        parent_id: u64,
        /// Identifier of the S3 channel (bucket+prefix combination) this directory belongs to.
        channel_id: usize,
        /// Partial key of the parent directory, not set for synthetic channel directories.
        parent_partial_key: Option<ValidKey>,
        /// Name of the directory.
        name: String,
    },
}

impl ManifestEntry {
    /// Returns the unique identifier (inode number) of this entry.
    pub fn id(&self) -> u64 {
        match self {
            ManifestEntry::File { id, .. } => *id,
            ManifestEntry::Directory { id, .. } => *id,
        }
    }

    /// Returns the channel identifier for this entry.
    pub fn channel_id(&self) -> usize {
        match self {
            ManifestEntry::File { channel_id, .. } => *channel_id,
            ManifestEntry::Directory { channel_id, .. } => *channel_id,
        }
    }

    /// Returns identifier of the parent of this entry.
    pub fn parent_id(&self) -> u64 {
        match self {
            ManifestEntry::File { parent_id, .. } => *parent_id,
            ManifestEntry::Directory { parent_id, .. } => *parent_id,
        }
    }

    /// Converts this entry into a `Lookup` object.
    ///
    /// Used in lookup and getattr file system operations.
    ///
    /// The `Lookup` object contains information needed by the filesystem
    /// to represent this entry, including its inode number, stat information,
    /// and S3 location.
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

    /// Converts this entry into inode information and name. Used in readdir.
    ///
    /// This method extracts the essential filesystem metadata from the entry,
    /// including inode number, stat information, and kind (file or directory).
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

    /// Creates stat information for a directory entry.
    fn stat_for_directory(mount_time: OffsetDateTime) -> InodeStat {
        InodeStat::for_directory(mount_time, NEVER_EXPIRE_TTL)
    }

    /// Creates stat information for a file entry.
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

/// Manifest of all objects in the mounted directory.
///
/// This struct provides access to the metadata store, which contains
/// information about files and directories in the S3 bucket (or buckets if multiple mounted).
/// It allows looking up entries by name or ID, iterating over directory
/// contents, and retrieving channel information.
#[derive(Debug, Clone)]
pub struct Manifest {
    /// The underlying database connection.
    db: Db,
}

impl Manifest {
    /// Creates a new manifest with a connection to the specified database file.
    pub fn new(manifest_db_path: &Path) -> Result<Self, rusqlite::Error> {
        let db = Db::new(manifest_db_path)?;
        Ok(Self { db })
    }

    /// Looks up an entry in the manifest by parent ID and name.
    ///
    /// This method searches for a file or directory with the given name
    /// within the specified parent directory.
    pub fn manifest_lookup(&self, parent_id: u64, name: &str) -> Result<Option<ManifestEntry>, ManifestError> {
        // search for an entry and validate it
        let db_entry = self.db.select_entry(parent_id, name)?;
        match db_entry {
            Some(db_entry) => Ok(Some(db_entry.try_into()?)),
            None => Ok(None),
        }
    }

    /// Looks up an entry in the manifest by its unique ID (inode number).
    pub fn manifest_lookup_by_id(&self, ino: u64) -> Result<Option<ManifestEntry>, ManifestError> {
        // search for an entry and validate it
        let db_entry = self.db.select_entry_by_id(ino)?;
        match db_entry {
            Some(db_entry) => Ok(Some(db_entry.try_into()?)),
            None => Ok(None),
        }
    }

    /// Creates an iterator over a directory's direct children.
    ///
    /// This method returns an iterator that can be used to list
    /// all files and subdirectories within the specified directory.
    pub fn dir_iter(&self, parent_id: u64) -> ManifestDirIter {
        ManifestDirIter::new(self.db.clone(), parent_id)
    }

    /// Loads all S3 channels from the manifest database.
    pub fn load_channels(&self) -> Result<Vec<S3Path>, ManifestError> {
        self.db.load_channels()
    }
}

/// Iterator over entries in a directory.
#[derive(Debug)]
pub struct ManifestDirIter {
    /// The underlying database connection.
    db: Db,
    /// Prepared entries in order to be returned by the iterator.
    entries: VecDeque<ManifestEntry>,
    /// ID of the directory being listed by this iterator.
    parent_id: u64,
    /// Offset of the next child to search for in the database.
    next_offset: usize,
    /// Maximum number of entries to read from the database at once.
    batch_size: usize,
    /// Indicates whether the database has no more entries.
    finished: bool,
}

impl ManifestDirIter {
    /// Creates a new iterator over the contents of a directory.
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

    /// Returns the next child entry in the directory.
    ///
    /// This method retrieves the next entry in the directory being iterated over.
    /// If there are no more entries in the current batch, it will attempt to load
    /// the next batch from the database.
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

    /// Re-adds an entry to the front of the iteration.
    ///
    /// This method is useful when an entry has been retrieved but needs
    /// to be processed again in a subsequent iteration.
    pub fn readd(&mut self, entry: ManifestEntry) {
        self.next_offset -= 1;

        self.entries.push_front(entry);
    }

    /// Seeks to a specific offset in the directory iteration.
    ///
    /// This method allows jumping to a specific position in the directory listing,
    /// which is useful for out of order readdir (typically to a "seen" offset).
    pub fn seek(&mut self, offset: usize) -> Result<(), ManifestError> {
        // TODO: test the out of order readdir
        if offset != self.next_offset {
            metrics::counter!("manifest.readdir.out_of_order").increment(1);
            self.entries.clear();
            self.next_offset = offset;
            self.finished = false;
        };
        Ok(())
    }

    /// Loads the next batch of entries from the database.
    ///
    /// This method is called internally when the current batch of entries
    /// has been exhausted and more entries need to be retrieved from the database.
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
