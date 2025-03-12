use crate::sync::{Arc, Mutex};
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
    pub fn key(&self) -> &str {
        match self {
            ManifestEntry::Directory { full_key, .. } => full_key.as_str(),
            ManifestEntry::File { full_key, .. } => full_key.as_str(),
        }
    }
}

/// Manifest of all available objects in the bucket
#[derive(Debug, Clone)]
pub struct Manifest {
    conn: Arc<Mutex<Connection>>,
}

impl Manifest {
    pub fn new() -> Result<Self, rusqlite::Error> {
        let db_path = "./s3_objects.db3";
        let conn = Connection::open(db_path)?; // TODO: ManifestError::DbError
        Ok(Self {
            conn: Arc::new(Mutex::new(conn)), // TODO: no mutex? serialized mode of sqlite?
        })
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
        trace!("db search completed in {:?}", start.elapsed());

        // return an inode or error
        match manifest_entry {
            Some(manifest_entry) => Ok(manifest_entry.clone()),
            None => Err(InodeError::FileDoesNotExist(name.to_owned(), parent.err())),
        }
    }

    /// Create an iterator over directory's direct children
    pub fn iter(&self, bucket: &str, directory_full_path: &str) -> Result<ManifestIter, InodeError> {
        ManifestIter::new(self.clone(), bucket, directory_full_path)
    }

    fn search_manifest_entry(&self, full_path: &str) -> Result<Option<ManifestEntry>, rusqlite::Error> {
        let dir_search_start = format!("{full_path}/");
        let dir_search_end = format!("{full_path}0"); // any child of [full_path] directory will have a key which is "less" than this
        let file_search = full_path;

        let query = "SELECT key, etag, size FROM s3_objects where (key >= ?1 and key < ?2) or key = ?3 LIMIT 1";
        let conn = self.conn.lock().expect("lock must succeed");
        let mut stmt = conn.prepare(query)?;
        let manifest_entry = stmt
            .query_map((dir_search_start, dir_search_end, file_search), |row| {
                let found_key: String = row.get(0)?;
                trace!(
                    "found entry in the manifest: {}, searched for: {}",
                    found_key,
                    full_path
                );

                let entry = if found_key == full_path {
                    // exact match means this is a file
                    ManifestEntry::File {
                        full_key: found_key,
                        etag: row.get(1)?,
                        size: row.get(2)?,
                    }
                } else if found_key.starts_with(full_path) {
                    // partial match means this is a directory
                    ManifestEntry::Directory { full_key: found_key }
                } else {
                    panic!("got non-matching row: {}, searched: {}", found_key, full_path);
                };

                Ok(entry)
            })?
            .next();

        manifest_entry.map_or(Ok(None), |v| v.map(Some))
    }
}

#[derive(Debug)]
pub struct ManifestIter {
    manifest: Manifest,
    search_from_key: String,
}

impl ManifestIter {
    /// Locate the index of the directory in the manifest and create an iterator
    fn new(manifest: Manifest, bucket: &str, full_key: &str) -> Result<Self, InodeError> {
        let full_key = full_key.to_owned();
        trace!("searching for an entry in the manifest starting with: {}", full_key);

        Ok(Self {
            manifest,
            search_from_key: full_key,
        })
    }

    /// Iterate over the manifest entries, skipping subdirectories
    pub fn next(&mut self) -> Result<Option<ManifestEntry>, InodeError> {
        Ok(None)
    }
}
