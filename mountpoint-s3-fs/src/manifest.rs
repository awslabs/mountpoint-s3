use std::collections::VecDeque;
use std::path::Path;
use thiserror::Error;
use tracing::{error, trace};

mod builder;
mod db;

pub use builder::create_db;
use db::Db;
pub use db::DbEntry;

#[derive(Debug, Error, PartialEq)]
pub enum ManifestError {
    #[error("database error")]
    DbError(#[from] rusqlite::Error),
    #[error("key has no etag or size and will be unavailable: {0}")]
    NoEtagOrSize(String),
    #[error("key is invalid and will be unavailable: {0}")]
    InvalidKey(String),
    #[error("invalid database row")]
    InvalidRow,
}

/// An entry returned by manifest_lookup() and ManifestIter::next()
#[derive(Debug, Clone)]
pub enum ManifestEntry {
    File {
        full_key: String,
        etag: String,
        size: usize,
    },
    Directory {
        full_key: String, // doesn't contain '/'
    },
}

impl TryFrom<DbEntry> for ManifestEntry {
    type Error = ManifestError;

    fn try_from(db_entry: DbEntry) -> Result<Self, Self::Error> {
        if db_entry.full_key.ends_with('/') {
            return Err(ManifestError::InvalidRow);
        }

        match (db_entry.etag, db_entry.size) {
            (None, None) => Ok(ManifestEntry::Directory {
                full_key: db_entry.full_key,
            }),
            (Some(etag), Some(size)) => Ok(ManifestEntry::File {
                full_key: db_entry.full_key,
                etag,
                size,
            }),
            _ => Err(ManifestError::InvalidRow),
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
    pub fn manifest_lookup(
        &self,
        parent_full_path: String,
        name: &str,
    ) -> Result<Option<ManifestEntry>, ManifestError> {
        trace!("using manifest to lookup {} in {}", name, parent_full_path);
        let mut full_path = parent_full_path;
        full_path.push_str(name);

        // search for an entry and validate it
        let db_entry = self.db.select_entry(&full_path)?;
        match db_entry {
            Some(db_entry) => Ok(Some(db_entry.try_into()?)),
            None => Ok(None),
        }
    }

    /// Create an iterator over directory's direct children
    pub fn iter(&self, bucket: &str, directory_full_path: &str) -> ManifestIter {
        ManifestIter::new(self.db.clone(), bucket, directory_full_path)
    }
}

#[derive(Debug)]
pub struct ManifestIter {
    db: Db,
    /// Prepared entries in order to be returned by the iterator.
    entries: VecDeque<DbEntry>,
    /// Key of the directory being listed by this iterator
    parent_key: String,
    /// Offset of the next child to search for in the database
    next_offset: usize,
    /// Max amount of entries to read from the database at once
    batch_size: usize,
    /// Database has no more entries
    finished: bool,
}

impl ManifestIter {
    fn new(db: Db, _bucket: &str, parent_key: &str) -> Self {
        // remove trailing '/' since we don't store it in the db
        let parent_key = parent_key.trim_end_matches("/").to_owned();
        let batch_size = 10000;
        Self {
            db,
            entries: Default::default(),
            parent_key,
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

        let Some(db_entry) = self.entries.pop_front() else {
            return Ok(None);
        };

        Ok(Some(db_entry.try_into()?))
    }

    /// Load next batch of entries from the database, keeping track of the `next_offset`
    fn search_next_entries(&mut self) -> Result<(), ManifestError> {
        let db_entries = self
            .db
            .select_children(&self.parent_key, self.next_offset, self.batch_size)?;

        if db_entries.len() < self.batch_size {
            self.finished = true;
        }

        self.next_offset += db_entries.len();
        self.entries.extend(db_entries);

        Ok(())
    }
}
