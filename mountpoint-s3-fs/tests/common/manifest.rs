use mountpoint_s3_fs::manifest::{ChannelManifest, DbEntry, InputManifestEntry, InputManifestError, create_db};
use mountpoint_s3_fs::s3::{Bucket, S3Path};
use rusqlite::Connection;
use std::path::{Path, PathBuf};
use tempfile::TempDir;

pub fn create_manifest<I: Iterator<Item = Result<InputManifestEntry, InputManifestError>>>(
    channel_manifests: Vec<ChannelManifest<I>>,
    batch_size: usize,
) -> Result<(TempDir, PathBuf), InputManifestError> {
    let db_dir = tempfile::tempdir().unwrap();
    let db_path = db_dir.path().join("s3_keys.db3");

    create_db(&db_path, channel_manifests, batch_size)?;

    Ok((db_dir, db_path))
}

pub fn insert_entries(manifest_db_path: &Path, entries: &[DbEntry]) -> rusqlite::Result<()> {
    let mut conn = Connection::open(manifest_db_path).expect("must connect to a db");
    let tx = conn.transaction()?;
    let mut stmt = tx.prepare(
        "INSERT INTO s3_objects (id, parent_id, channel_id, parent_partial_key, name, etag, size, checksum) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7, ?8)",
    )?;
    for entry in entries {
        stmt.execute((
            entry.id,
            entry.parent_id,
            entry.channel_id,
            &entry.parent_partial_key,
            &entry.name,
            &entry.etag,
            entry.size,
            entry.checksum,
        ))?;
    }
    drop(stmt);
    tx.commit()
}

pub const DUMMY_ETAG: &str = "\"3bebe4037c8f040e0e573e191d34b2c6\"";

pub fn create_dummy_manifest<T: AsRef<str>>(
    s3_keys: &[T],
    file_size: usize,
    channel_dir_name: &str,
    bucket_name: &str,
) -> Result<(TempDir, PathBuf), InputManifestError> {
    let entries = s3_keys
        .iter()
        .map(|key| Ok(InputManifestEntry::new_without_checksum(key.as_ref(), DUMMY_ETAG, file_size).unwrap()));

    let channel_manifests = vec![ChannelManifest {
        directory_name: channel_dir_name.to_string(),
        s3_path: S3Path::new(Bucket::new(bucket_name).unwrap(), Default::default()),
        entries,
    }];
    let batch_size = 1024;
    create_manifest(channel_manifests, batch_size)
}
