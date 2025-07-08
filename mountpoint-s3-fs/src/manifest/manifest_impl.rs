use std::collections::VecDeque;
use std::io;
use std::path::{Path, PathBuf};
use thiserror::Error;
use tracing::error;

use super::db::{Db, DbEntry};

use crate::metablock::ValidKeyError;
use crate::prefix::PrefixError;
use crate::s3::config::S3Path;

#[derive(Debug, Error)]
pub enum ManifestError {
    #[error("database exists")]
    DbExists,
    #[error("error opening manifest file at '{0}'")]
    CsvOpenError(PathBuf, #[source] io::Error),
    #[error("database error")]
    DbError(#[from] rusqlite::Error),
    #[error("key has no etag or size and will be unavailable: {0}")]
    NoEtagOrSize(String),
    #[error("key is invalid")]
    InvalidKey(#[from] ValidKeyError),
    #[error("folder marker {0}")]
    FolderMarker(String),
    #[error("invalid database row: {0}")]
    InvalidRow(String),
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
        full_key: String,
        parent_id: u64,
        etag: String,
        size: usize,
        channel_id: u64,
    },
    Directory {
        id: u64,
        full_key: String, // doesn't contain '/'
        parent_id: u64,
        channel_id: u64,
    },
}

impl ManifestEntry {
    /// Removes first path component, corresponding to the virtual channel directory name, from the [full_path]
    pub fn s3_key(mut full_path: String) -> String {
        let channel_dir_name_len = full_path.split('/').next().expect("path must contain /").len();
        full_path.drain(..channel_dir_name_len + 1);
        full_path
    }

    pub fn get_full_key(&self) -> &str {
        match self {
            ManifestEntry::File { full_key, .. } => full_key,
            ManifestEntry::Directory { full_key, .. } => full_key,
        }
    }
}

impl TryFrom<DbEntry> for ManifestEntry {
    type Error = ManifestError;

    fn try_from(db_entry: DbEntry) -> Result<Self, Self::Error> {
        if db_entry.full_key.ends_with('/') {
            return Err(ManifestError::InvalidRow(db_entry.full_key.clone()));
        }

        let Some(parent_id) = db_entry.parent_id else {
            return Err(ManifestError::InvalidRow(db_entry.full_key.clone()));
        };

        let Some(channel_id) = db_entry.channel_id else {
            return Err(ManifestError::InvalidRow(db_entry.full_key.clone()));
        };

        match (db_entry.etag, db_entry.size) {
            (None, None) => Ok(ManifestEntry::Directory {
                id: db_entry.id,
                full_key: db_entry.full_key,
                parent_id,
                channel_id,
            }),
            (Some(etag), Some(size)) => Ok(ManifestEntry::File {
                id: db_entry.id,
                full_key: db_entry.full_key,
                parent_id,
                etag,
                size,
                channel_id,
            }),
            _ => Err(ManifestError::InvalidRow(db_entry.full_key.clone())),
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
    pub fn iter(&self, parent_id: u64) -> ManifestIter {
        ManifestIter::new(self.db.clone(), parent_id)
    }

    pub fn channels(&self) -> Result<Vec<S3Path>, ManifestError> {
        Ok(self.db.load_channels()?)
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

#[cfg(test)]
mod test {
    use super::ManifestEntry;
    use test_case::test_case;

    #[test_case("channel_0/dir/a.txt", "dir/a.txt"; "ascii virtual dir name")]
    #[test_case("通道_0/目录/a.txt", "目录/a.txt"; "unicode virtual dir name")]
    fn test_entry_s3_key(full_path: &str, s3_key: &str) {
        assert_eq!(&ManifestEntry::s3_key(full_path.to_string()), s3_key);
    }
}
