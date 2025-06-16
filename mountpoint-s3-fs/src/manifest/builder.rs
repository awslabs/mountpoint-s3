use std::io::BufReader;
use std::path::Path;
use std::{collections::HashMap, fs::File};

use fuser::FUSE_ROOT_ID;

use crate::superblock::path::{ValidKey, ValidKeyError};
use crate::{
    manifest::db::{Db, DbEntry},
    manifest::{CsvReader, ManifestError},
};

pub fn create_db(
    db_path: &Path,
    entries: impl Iterator<Item = Result<DbEntry, ManifestError>>,
    batch_size: usize,
) -> Result<(), ManifestError> {
    let db = Db::new(db_path)?;
    db.create_table()?;

    let mut next_id = FUSE_ROOT_ID + 1;
    let mut dir_ids: HashMap<String, u64> = Default::default(); // TODO: limit size of this hash map
    let mut buffer = Vec::with_capacity(batch_size);
    for entry in entries {
        // parse next entry and validate it
        let mut entry = entry?;
        match validate_db_entry(&entry) {
            Err(ManifestError::FolderMarker(key)) => {
                tracing::warn!("folder marker will be ignored: {}", key);
                continue;
            }
            Err(err) => return Err(err),
            Ok(_) => (),
        }
        // split full_key to parent_dir and file_name
        let parent_dir = entry.full_key.rsplit_once('/').map(|(dir, _)| dir);
        // insert the parent directory and link current entry to it
        entry.parent_id = Some(ensure_dirs_inserted(&db, &mut dir_ids, &mut next_id, parent_dir)?);
        // set entry's name_offset and id and push it to the insert buffer
        // NOTE: name_offset is the number of complete UTF-8 chars (not bytes)
        entry.name_offset = Some(parent_dir.map_or(0, |parent_dir| parent_dir.chars().count() as u64 + 1));
        entry.id = next_id;
        next_id += 1;
        buffer.push(entry);
        // if buffer is full, write to db
        if buffer.len() >= batch_size {
            db.insert_batch(&buffer)?;
            buffer.clear();
        }
    }

    if !buffer.is_empty() {
        db.insert_batch(&buffer)?;
    }

    match db.create_index() {
        Ok(_) => (),
        // Handle the following error which may be a sign of a shadowed key present in the manifest:
        // SqliteFailure(Error { code: ConstraintViolation, extended_code: 2067 }, Some("UNIQUE constraint failed: s3_objects.parent_id, s3_objects.name"))
        Err(rusqlite::Error::SqliteFailure(err, msg)) if err.code == rusqlite::ErrorCode::ConstraintViolation => {
            return Err(ManifestError::ConstraintViolation(rusqlite::Error::SqliteFailure(
                err, msg,
            )))
        }
        Err(e) => Err(e)?,
    };

    Ok(())
}

/// Ingests a manifest into the database.
///
/// The expected file format is CSV with no header and 3 columns -- full_key, etag, size.
/// The field `full_key` must not contain S3 prefix, when the prefix is mounted.
/// The field `etag` may contain enclosing quotes, just as it is returned by S3 ListObjectsV2 API.
/// All fields must be properly escaped.
pub fn ingest_manifest(csv_path: &Path, db_path: &Path) -> Result<(), ManifestError> {
    let file = File::open(csv_path).map_err(|err| ManifestError::CsvOpenError(csv_path.to_path_buf(), err))?;
    let csv_reader = CsvReader::new(BufReader::new(file));
    if db_path.exists() {
        return Err(ManifestError::DbExists);
    }
    create_db(db_path, csv_reader, 100000)?;
    Ok(())
}

fn validate_db_entry(db_entry: &DbEntry) -> Result<(), ManifestError> {
    if db_entry.etag.is_none() || db_entry.size.is_none() {
        return Err(ManifestError::NoEtagOrSize(db_entry.full_key.clone()));
    }
    if db_entry.full_key.ends_with('/') {
        return Err(ManifestError::FolderMarker(db_entry.full_key.clone()));
    }
    if db_entry.full_key.is_empty() {
        Err(ValidKeyError::InvalidKey(db_entry.full_key.clone()))?
    }
    ValidKey::validate(&db_entry.full_key)?;
    Ok(())
}

/// Ingests directory `dir_key` and its parents to db (if not done yet), returns the ID of the `dir_key`
fn ensure_dirs_inserted(
    db: &Db,
    dir_ids: &mut HashMap<String, u64>,
    next_id: &mut u64,
    dir_key: Option<&str>,
) -> Result<u64, ManifestError> {
    let Some(dir_key) = dir_key else {
        return Ok(FUSE_ROOT_ID);
    };

    let mut insert_buffer = Vec::new();
    let mut dir_key_len = 0;
    let mut parent_id = FUSE_ROOT_ID;

    for component in dir_key.split('/') {
        dir_key_len += component.len() + 1; // includes the trailing '/'
        let directory_key = &dir_key[..dir_key_len - 1];
        debug_assert!(!directory_key.ends_with("/")); // directories don't have '/' in the end

        parent_id = if let Some(dir_id) = dir_ids.get(directory_key) {
            *dir_id
        } else {
            let id = *next_id;
            insert_buffer.push(DbEntry {
                id,
                full_key: directory_key.to_string(),
                name_offset: Some((directory_key.len() - component.len()) as u64),
                parent_id: Some(parent_id),
                etag: None,
                size: None,
            });
            dir_ids.insert(directory_key.to_string(), id);
            *next_id += 1;
            id
        }
    }

    if !insert_buffer.is_empty() {
        db.insert_batch(&insert_buffer)?;
    }

    Ok(parent_id)
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    const DUMMY_ETAG: &str = "\"3bebe4037c8f040e0e573e191d34b2c6\"";
    const DUMMY_SIZE: usize = 1024;

    #[test_case("dir1/./a.txt"; "with dot")]
    #[test_case("dir1/../a.txt"; "with 2 dots")]
    #[test_case("dir1//a.txt"; "with 2 slashes")]
    #[test_case(""; "empty")]
    #[test_case("dir1/a\0.txt"; "with 0")]
    fn test_ingest_invalid_key(key: &str) {
        let db_dir = tempfile::tempdir().unwrap();
        let db_path = db_dir.path().join("s3_keys.db3");
        let err = create_db(
            &db_path,
            [Ok(DbEntry {
                full_key: key.to_string(),
                etag: Some(DUMMY_ETAG.to_string()),
                size: Some(DUMMY_SIZE),
                ..Default::default()
            })]
            .into_iter(),
            1000,
        )
        .expect_err("must be an error");
        assert!(matches!(err, ManifestError::InvalidKey(_)));
    }

    #[test_case(&[
        "dir1", // must be shadowed
        "dir1/a.txt",
        "dir2/b.txt",
    ]; "shadowed first")]
    #[test_case(&[
        "dir1/a.txt",
        "dir2/b.txt",
        "dir1", // must be shadowed
    ]; "shadowing first")]
    fn test_shadowed(manifest_keys: &[&str]) {
        let db_dir = tempfile::tempdir().unwrap();
        let db_path = db_dir.path().join("s3_keys.db3");
        let err = create_db(
            &db_path,
            manifest_keys.iter().map(|key| {
                Ok(DbEntry {
                    full_key: key.to_string(),
                    etag: Some(DUMMY_ETAG.to_string()),
                    size: Some(DUMMY_SIZE),
                    ..Default::default()
                })
            }),
            1000,
        )
        .expect_err("must be an error");
        assert!(matches!(err, ManifestError::ConstraintViolation(_)));
    }
}
