use crate::superblock::InodeError;
use db::Db;
use std::{collections::VecDeque, path::Path};
use thiserror::Error;
use tracing::{error, trace};

mod builder;
mod db;

pub use builder::create_db;
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
    #[error("too many rows returned from db")]
    TooManyRows,
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

impl ManifestEntry {
    fn from_db_entry(db_entry: DbEntry) -> Result<Self, ManifestError> {
        if db_entry.full_key.ends_with('/') {
            Err(ManifestError::InvalidRow)
        } else if db_entry.etag.is_none() && db_entry.size.is_none() {
            Ok(ManifestEntry::Directory {
                full_key: db_entry.full_key,
            })
        } else if db_entry.etag.is_some() && db_entry.size.is_some() {
            Ok(ManifestEntry::File {
                full_key: db_entry.full_key,
                etag: db_entry.etag.unwrap(),
                size: db_entry.size.unwrap(),
            })
        } else {
            Err(ManifestError::InvalidRow)
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

        // search for an entry
        let mut db_entries = self.db.select_entries(&full_path)?;
        let Some(db_entry) = db_entries.pop() else {
            return Ok(None);
        };
        if !db_entries.is_empty() {
            Err(ManifestError::TooManyRows)
        } else {
            ManifestEntry::from_db_entry(db_entry).map(Some)
        }
    }

    /// Create an iterator over directory's direct children
    pub fn iter(&self, bucket: &str, directory_full_path: &str) -> Result<ManifestIter, InodeError> {
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
    fn new(db: Db, _bucket: &str, parent_key: &str) -> Result<Self, InodeError> {
        // remove trailing '/' since we don't store it in the db
        let parent_key = parent_key.trim_end_matches("/").to_owned();
        let batch_size = 10000;
        Ok(Self {
            db,
            entries: Default::default(),
            parent_key,
            next_offset: 0,
            batch_size,
            finished: false,
        })
    }

    /// Next child of the directory
    pub fn next_entry(&mut self) -> Result<Option<ManifestEntry>, ManifestError> {
        if self.entries.is_empty() && !self.finished {
            self.search_next_entries()?
        }

        let Some(db_entry) = self.entries.pop_front() else {
            return Ok(None);
        };

        ManifestEntry::from_db_entry(db_entry).map(Some)
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
