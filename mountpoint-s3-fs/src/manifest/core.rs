use std::collections::VecDeque;
use std::path::Path;

use mountpoint_s3_client::checksums::crc32c::{self, Crc32c};
use thiserror::Error;
use time::OffsetDateTime;
use tracing::error;

use super::db::{Db, DbEntry};

use crate::metablock::{
    InodeInformation, InodeKind, InodeStat, Lookup, NEVER_EXPIRE_TTL, ROOT_INODE_NO, S3Location, ValidKey,
    ValidKeyError, ValidName,
};
use crate::s3::S3Path;
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
    #[error("invalid checksum for the entry with key {0}, computed {1}, received {2}")]
    InvalidChecksum(String, u32, u32),
}

#[derive(Debug, Clone)]
enum ManifestEntryKind {
    File { etag: String, size: usize },
    Directory,
}

/// A validated entry to be returned by manifest_lookup() and ManifestDirIter::next_entry().
#[derive(Debug, Clone)]
pub struct ManifestEntry {
    /// Unique identifier for this file entry, used as inode number.
    id: u64,
    /// Identifier of the parent directory entry.
    parent_id: u64,
    /// Identifier of the S3 channel (bucket+prefix combination) this file belongs to.
    channel_id: usize,
    /// Partial key of the parent directory.
    parent_partial_key: Option<ValidKey>,
    /// Name of the file.
    name: String,
    /// Kind and associated metadata.
    kind: ManifestEntryKind,
    /// CRC32C checksum of this entry.
    checksum: Crc32c,
}

impl ManifestEntry {
    /// Returns identifier of the parent of this entry.
    pub fn parent_id(&self) -> u64 {
        self.parent_id
    }

    /// Converts this entry into a `Lookup` object.
    ///
    /// Used in lookup and getattr file system operations.
    pub fn into_lookup(self, channels: &[Arc<S3Path>], mount_time: OffsetDateTime) -> Result<Lookup, ManifestError> {
        let s3_path = self.channel(channels)?;
        let (id, partial_key, entry_kind) = self.validate_checksum(s3_path.as_ref())?;
        let stat = Self::stat(entry_kind, mount_time);
        let inode_kind = partial_key.kind();
        // s3_location is not set for virtual directories
        let s3_location = self
            .parent_partial_key
            .map(move |_| S3Location::new(s3_path, partial_key));
        Ok(Lookup::new(id, stat, inode_kind, s3_location))
    }

    /// Converts this entry into inode information and name. Used in readdir.
    pub fn into_inode_information(
        self,
        channels: &[Arc<S3Path>],
        mount_time: OffsetDateTime,
    ) -> Result<(InodeInformation, String), ManifestError> {
        let s3_path = self.channel(channels)?;
        let (id, partial_key, entry_kind) = self.validate_checksum(s3_path.as_ref())?;
        let stat = Self::stat(entry_kind, mount_time);
        let inode_kind = partial_key.kind();
        let name = partial_key.name();
        Ok((InodeInformation::new(id, stat, inode_kind), name.to_string()))
    }

    fn channel(&self, channels: &[Arc<S3Path>]) -> Result<Arc<S3Path>, ManifestError> {
        let channel_id = self.channel_id;
        if channel_id >= channels.len() {
            error!("channel id {} specified in entry {} is invalid", channel_id, self.id);
            return Err(ManifestError::InvalidRow(self.id));
        }
        Ok(channels[channel_id].clone())
    }

    /// Computes and validates the checksum, returns validated data: (id, partial_key, entry_kind).
    ///
    /// Note: this method will copy etag and parent_partial_key, which may be avoided, but intentionally done this way to improve readability.
    fn validate_checksum(&self, path: &S3Path) -> Result<(u64, ValidKey, ManifestEntryKind), ManifestError> {
        let name = ValidName::parse_str(&self.name).map_err(|_| ManifestError::InvalidRow(self.id))?;

        // Compute checksum
        let (partial_key, computed_checksum, _) = match &self.kind {
            ManifestEntryKind::File { etag, size } => compute_checksum(
                self.id,
                self.parent_id,
                self.parent_partial_key.as_ref(),
                name,
                Some(etag),
                Some(*size),
                path,
            )?,
            ManifestEntryKind::Directory => compute_checksum(
                self.id,
                self.parent_id,
                self.parent_partial_key.as_ref(),
                name,
                None,
                None,
                path,
            )?,
        };

        // Validate checksum
        if computed_checksum != self.checksum {
            return Err(ManifestError::InvalidChecksum(
                self.name.clone(),
                computed_checksum.value(),
                self.checksum.value(),
            ));
        }

        Ok((self.id, partial_key, self.kind.clone()))
    }

    /// Creates stat information based on the kind of this manifest entry.
    fn stat(kind: ManifestEntryKind, mount_time: OffsetDateTime) -> InodeStat {
        match kind {
            ManifestEntryKind::File { etag, size } => {
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
            ManifestEntryKind::Directory => InodeStat::for_directory(mount_time, NEVER_EXPIRE_TTL),
        }
    }
}

impl TryFrom<DbEntry> for ManifestEntry {
    type Error = ManifestError;

    fn try_from(db_entry: DbEntry) -> Result<Self, Self::Error> {
        let parent_partial_key = db_entry.parent_partial_key.map(ValidKey::try_from).transpose()?;
        if parent_partial_key.is_none() && db_entry.parent_id != ROOT_INODE_NO {
            error!("only channel directories may have no parent_key, id: {}", db_entry.id);
            return Err(ManifestError::InvalidRow(db_entry.id));
        }

        let kind = match (db_entry.etag, db_entry.size) {
            (None, None) => ManifestEntryKind::Directory,
            (Some(etag), Some(size)) => ManifestEntryKind::File { etag, size },
            _ => return Err(ManifestError::InvalidRow(db_entry.id)),
        };

        Ok(ManifestEntry {
            id: db_entry.id,
            parent_id: db_entry.parent_id,
            channel_id: db_entry.channel_id,
            parent_partial_key,
            name: db_entry.name,
            kind,
            checksum: Crc32c::new(db_entry.checksum),
        })
    }
}

/// A helper to compute the checksum of the given set of fields.
///
/// Computes two checksums:
/// - **partial_checksum**: Only (partial_key, etag, size) - validates external manifest data
/// - **full_checksum**: All fields including IDs and S3 path - validates complete DB entries
///
/// Both are needed: partial checksums verify input data integrity, full checksums verify storage integrity.
///
/// Returns (partial_key, full_checksum, partial_checksum).
///
/// Note: this function reconstructs the full S3 key by calling `parent_partial_key.new_child(name, kind)`,
/// which copies the parent key string. This is wasteful when validating existing entries (where we could
/// pass the pre-existing full key), but necessary when creating new entries. Done this way for code simplicity.
pub fn compute_checksum(
    id: u64,
    parent_id: u64,
    parent_partial_key: Option<&ValidKey>,
    name: ValidName,
    etag: Option<&str>,
    size: Option<usize>,
    s3_path: &S3Path,
) -> Result<(ValidKey, Crc32c, Crc32c), ValidKeyError> {
    // Create the partial key of the entry
    let kind = if etag.is_some() && size.is_some() {
        InodeKind::File
    } else {
        InodeKind::Directory
    };

    let partial_key = if let Some(parent_key) = parent_partial_key {
        parent_key.new_child(name, kind)?
    } else {
        ValidKey::root().new_child(name, kind)?
    };

    // Compute checksums
    let mut hasher = crc32c::Hasher::new();

    hasher.update(partial_key.as_bytes());

    if let Some(etag) = etag {
        hasher.update(etag.as_bytes());
    }
    if let Some(size) = size {
        // we encode size with big endian byte order and with a fixed width of 8 bytes (rust: u64, java: long)
        let size = size as u64;
        hasher.update(size.to_be_bytes().as_ref());
    }
    let partial_checksum = hasher.clone().finalize();

    hasher.update(id.to_be_bytes().as_ref());
    hasher.update(parent_id.to_be_bytes().as_ref());

    hasher.update(s3_path.bucket.as_bytes());
    hasher.update(s3_path.prefix.as_str().as_bytes());

    let full_checksum = hasher.finalize();
    Ok((partial_key, full_checksum, partial_checksum))
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
