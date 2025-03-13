use crate::sync::{Arc, Mutex};
use std::collections::VecDeque;
use std::time::Instant;

use rusqlite::Connection;
use tracing::{error, trace};

use crate::superblock::{Inode, InodeError, InodeKind};

/// An entry returned by manifest_lookup() and ManifestIter::next()
#[derive(Debug, Clone)]
pub enum ManifestEntry {
    File {
        full_key: String,
        etag: String,
        size: usize,
    },
    Directory {
        full_key: String, // let's assume it always ends with '/'
    },
}

impl ManifestEntry {
    fn file(db_entry: DbEntry) -> Self {
        ManifestEntry::File {
            full_key: db_entry.full_key,
            etag: db_entry.etag,
            size: db_entry.size,
        }
    }

    fn directory(full_key: String) -> Self {
        ManifestEntry::Directory { full_key }
    }
}

/// Manifest of all available objects in the bucket
#[derive(Debug)]
pub struct Manifest {
    db: Db,
}

impl Manifest {
    pub fn new() -> Result<Self, rusqlite::Error> {
        let db = Db::new()?;
        Ok(Self { db })
    }

    /// Lookup an entry in the manifest, the result may be a file or a directory
    pub fn manifest_lookup(
        &self,
        parent: Inode,
        parent_full_path: String,
        name: &str,
    ) -> Result<ManifestEntry, InodeError> {
        trace!("using manifest to lookup {} in {}", name, parent_full_path);

        if parent.kind() != InodeKind::Directory {
            return Err(InodeError::NotADirectory(parent.err()));
        }

        let mut full_path = parent_full_path;
        full_path.push_str(name);

        // search for an entry
        let start = Instant::now();
        let manifest_entry = self
            .search_manifest_entry(&full_path)
            .inspect_err(|err| error!("failed to query the database: {}", err))
            .map_err(|_| InodeError::InodeDoesNotExist(0))?; // TODO: ManifestError::DbError
        trace!("lookup db search completed in {:?}", start.elapsed());

        // return an inode or error
        match manifest_entry {
            Some(manifest_entry) => Ok(manifest_entry.clone()),
            None => Err(InodeError::FileDoesNotExist(name.to_owned(), parent.err())),
        }
    }

    /// Create an iterator over directory's direct children
    pub fn iter(&self, bucket: &str, directory_full_path: &str) -> Result<ManifestIter, InodeError> {
        ManifestIter::new(self.db.clone(), bucket, directory_full_path)
    }

    /// Search an entry in the manifest that matches the path, a partial match is expected for a directory
    fn search_manifest_entry(&self, full_path: &str) -> Result<Option<ManifestEntry>, rusqlite::Error> {
        let dir_search_start = format!("{full_path}/");
        let dir_search_end = format!("{full_path}0"); // any child of [full_path] directory will have a key which is "less" than this
        let file_search = full_path;

        let db_entry = self
            .db
            .select_entry_or_child(&dir_search_start, &dir_search_end, file_search)?;
        let Some(db_entry) = db_entry else {
            return Ok(None);
        };

        trace!(
            "found entry in the manifest: {}, searched for: {}",
            db_entry.full_key,
            full_path
        );

        let entry = if db_entry.full_key == full_path {
            // exact match means this is a file
            ManifestEntry::file(db_entry)
        } else if db_entry.full_key.starts_with(full_path) {
            // partial match means this is a directory
            ManifestEntry::directory(full_path.to_owned())
        } else {
            panic!("got non-matching row: {}, searched: {}", db_entry.full_key, full_path);
        };

        Ok(Some(entry))
    }
}

#[derive(Debug)]
struct DbEntry {
    full_key: String,
    etag: String,
    size: usize,
}

impl DbEntry {
    fn from(row: &rusqlite::Row) -> Result<Self, rusqlite::Error> {
        Ok(Self {
            full_key: row.get(0)?,
            etag: row.get(1)?,
            size: row.get(2)?,
        })
    }
}

#[derive(Debug, Clone)]
struct Db {
    conn: Arc<Mutex<Connection>>,
}

impl Db {
    fn new() -> Result<Self, rusqlite::Error> {
        let db_path = "./s3_objects.db3";
        let conn = Connection::open(db_path)?;
        Ok(Self {
            conn: Arc::new(Mutex::new(conn)), // TODO: no mutex? serialized mode of sqlite?
        })
    }

    fn select_entry_or_child(
        &self,
        dir_search_start: &str,
        dir_search_end: &str,
        file_search: &str,
    ) -> Result<Option<DbEntry>, rusqlite::Error> {
        let query = "SELECT key, etag, size FROM s3_objects where (key > ?1 and key < ?2) or key = ?3 LIMIT 1";
        let conn = self.conn.lock().expect("lock must succeed");
        let mut stmt = conn.prepare(query)?;
        let manifest_entry = stmt
            .query_map((dir_search_start, dir_search_end, file_search), |row| {
                DbEntry::from(row)
            })?
            .next();

        manifest_entry.map_or(Ok(None), |v| v.map(Some))
    }

    fn select_children(
        &self,
        dir_search_start: &str,
        dir_search_end: Option<&str>,
        batch_size: usize,
    ) -> Result<Vec<DbEntry>, rusqlite::Error> {
        let conn = self.conn.lock().expect("lock must succeed");
        if let Some(dir_search_end) = dir_search_end {
            let query = "SELECT key, etag, size FROM s3_objects where key > ?1 and key < ?2 ORDER BY key LIMIT ?3";
            let query_params = (dir_search_start, dir_search_end, batch_size);
            let mut stmt = conn.prepare(query)?;
            let result: Result<Vec<_>, _> = stmt.query_map(query_params, |row| DbEntry::from(row))?.collect();
            result
        } else {
            let query = "SELECT key, etag, size FROM s3_objects where key > ?1 ORDER BY key LIMIT ?2";
            let query_params = (dir_search_start, batch_size);
            let mut stmt = conn.prepare(query)?;
            let result: Result<Vec<_>, _> = stmt.query_map(query_params, |row| DbEntry::from(row))?.collect();
            result
        }
    }
}

#[derive(Debug)]
pub struct ManifestIter {
    db: Db,
    /// Prepared entries in order to be returned by the iterator.
    entries: VecDeque<ManifestEntry>,
    /// Key of the directory being listed by this iterator
    parent_key: String,
    /// Next key to search for in the database
    search_from_key: String,
    /// Name of the last subdirectory pushed to self.entries, used for deduplication
    last_subdir_name: Option<String>,
    /// Max amount of entries to read from the database at once
    batch_size: usize,
    /// Database has no more entries
    finished: bool,
}

impl ManifestIter {
    fn new(db: Db, _bucket: &str, parent_key: &str) -> Result<Self, InodeError> {
        let parent_key = parent_key.to_owned();

        let batch_size = 1000;
        let search_from_key = parent_key.clone();
        Ok(Self {
            db,
            entries: Default::default(),
            parent_key,
            search_from_key,
            last_subdir_name: None,
            batch_size,
            finished: false,
        })
    }

    /// Next child of the directory
    pub fn next(&mut self) -> Result<Option<ManifestEntry>, InodeError> {
        if self.entries.is_empty() {
            self.search_next_entries()
                .inspect_err(|err| error!("failed to query the database: {}", err))
                .map_err(|_| InodeError::InodeDoesNotExist(0))?; // TODO: ManifestError::DbError
        }

        Ok(self.entries.pop_front())
    }

    /// Load next batch of entries from the database, inferring subdirectories and filtering out ancestors of those
    fn search_next_entries(&mut self) -> Result<(), rusqlite::Error> {
        let dir_search_end = if self.parent_key.is_empty() {
            None
        } else {
            let mut dir_search_end = self.parent_key[..self.parent_key.len() - 1].to_owned();
            dir_search_end.push('0'); // any child of [self.parent_key] directory will have a key which is "less" than this
            Some(dir_search_end)
        };

        // Given that we filter loaded entries, we may need multiple requests to the db
        while self.entries.is_empty() && !self.finished {
            let start = Instant::now();
            let db_entries =
                self.db
                    .select_children(&self.search_from_key, dir_search_end.as_deref(), self.batch_size)?;
            trace!("list db search completed in {:?}", start.elapsed());

            if db_entries.len() < self.batch_size {
                self.finished = true;
            }

            if let Some(last_entry) = db_entries.last() {
                self.search_from_key = last_entry.full_key.clone();
            }

            for db_entry in db_entries {
                let relative_key = &db_entry.full_key[self.parent_key.len()..];
                let components: Vec<&str> = relative_key.split('/').collect(); // todo: handle "//" and other weird names? empty?
                let first_path_component = components[0];
                let manifest_entry = if components.len() == 1 {
                    // this file is a direct child of the listed directory
                    ManifestEntry::file(db_entry)
                } else if self.last_subdir_name.as_deref() != Some(first_path_component) {
                    // infer a subdirectory, discarding the irrelevant part of the path
                    self.last_subdir_name = Some(first_path_component.to_owned());
                    let subdir_full_key = format!("{}{}/", self.parent_key, first_path_component);
                    ManifestEntry::directory(subdir_full_key)
                } else {
                    // skipping subdirectory which was already pushed to self.entries
                    continue;
                };
                self.entries.push_back(manifest_entry);
            }
        }

        Ok(())
    }
}
