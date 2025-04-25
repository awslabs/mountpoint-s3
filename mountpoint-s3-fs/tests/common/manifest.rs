use mountpoint_s3_fs::manifest::{create_db, DbEntry, ManifestError};
use rusqlite::{Connection, Row};
use std::path::{Path, PathBuf};
use tempfile::TempDir;

pub const DUMMY_ETAG: &str = "\"3bebe4037c8f040e0e573e191d34b2c6\"";
pub const DUMMY_SIZE: usize = 1024;

pub fn create_dummy_manifest<T: AsRef<str>>(
    s3_keys: &[T],
    file_size: usize,
) -> Result<(TempDir, PathBuf), ManifestError> {
    let db_entries = s3_keys.iter().map(|key| {
        Ok(DbEntry {
            full_key: key.as_ref().to_string(),
            etag: Some(DUMMY_ETAG.to_string()),
            size: Some(file_size),
        })
    });

    let batch_size = 1024;
    create_manifest(db_entries, batch_size)
}

pub fn create_manifest(
    db_entries: impl Iterator<Item = Result<DbEntry, ManifestError>>,
    batch_size: usize,
) -> Result<(TempDir, PathBuf), ManifestError> {
    let db_dir = tempfile::tempdir().unwrap();
    let db_path = db_dir.path().join("s3_keys.db3");

    create_db(&db_path, db_entries, batch_size)?;

    Ok((db_dir, db_path))
}

/// Entry from a db. Compared to [DbEntry] it has a `parent_key` field.
#[derive(Debug, PartialEq)]
pub struct TestDbEntry {
    key: String,
    parent_key: String,
    etag: Option<String>,
    size: Option<usize>,
}

impl TestDbEntry {
    pub fn file(key: &str, parent_key: &str, etag: &str, size: usize) -> TestDbEntry {
        Self {
            key: key.to_string(),
            parent_key: parent_key.to_string(),
            etag: Some(etag.to_string()),
            size: Some(size),
        }
    }

    pub fn directory(key: &str, parent_key: &str) -> TestDbEntry {
        Self {
            key: key.to_string(),
            parent_key: parent_key.to_string(),
            etag: None,
            size: None,
        }
    }

    fn from_row(row: &Row) -> rusqlite::Result<TestDbEntry> {
        Ok(Self {
            key: row.get(0)?,
            parent_key: row.get(1)?,
            etag: row.get(2)?,
            size: row.get(3)?,
        })
    }
}

pub fn select_all(manifest_db_path: &Path) -> rusqlite::Result<Vec<TestDbEntry>> {
    let conn = Connection::open(manifest_db_path).expect("must connect to a db");
    let query = "SELECT key, parent_key, etag, size FROM s3_objects ORDER BY key";
    let mut stmt = conn.prepare(query)?;
    let result: rusqlite::Result<Vec<TestDbEntry>> = stmt.query_map((), TestDbEntry::from_row)?.collect();
    result
}

pub fn insert_entries(
    manifest_db_path: &Path,
    entries: &[(&str, &str, Option<&str>, Option<usize>)],
) -> rusqlite::Result<()> {
    let mut conn = Connection::open(manifest_db_path).expect("must connect to a db");
    let tx = conn.transaction()?;
    let mut stmt = tx.prepare("INSERT INTO s3_objects (key, parent_key, etag, size) VALUES (?1, ?2, ?3, ?4)")?;
    for entry in entries {
        stmt.execute(*entry)?;
    }
    drop(stmt);
    tx.commit()
}
