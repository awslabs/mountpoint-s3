use mountpoint_s3_fs::manifest::{create_db, DbEntry, ManifestError};
use rusqlite::Connection;
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
            // Other fields will be auto populated by [create_db]
            ..Default::default()
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

pub fn insert_entries(manifest_db_path: &Path, entries: &[DbEntry]) -> rusqlite::Result<()> {
    let mut conn = Connection::open(manifest_db_path).expect("must connect to a db");
    let tx = conn.transaction()?;
    let mut stmt = tx.prepare(
        "INSERT INTO s3_objects (id, key, name_offset, parent_id, etag, size) VALUES (?1, ?2, ?3, ?4, ?5, ?6)",
    )?;
    for entry in entries {
        stmt.execute((
            entry.id,
            &entry.full_key,
            &entry.name_offset,
            entry.parent_id,
            entry.etag.as_deref(),
            entry.size,
        ))?;
    }
    drop(stmt);
    tx.commit()
}
