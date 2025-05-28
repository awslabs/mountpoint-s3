use super::ManifestError;
use crate::{
    manifest::db::{Db, DbEntry},
    manifest::CsvReader,
    superblock::path::ValidName,
};
use std::fs::File;
use std::io::BufReader;
use std::path::Path;

pub fn create_db(
    db_path: &Path,
    entries: impl Iterator<Item = Result<DbEntry, ManifestError>>,
    batch_size: usize,
) -> Result<(), ManifestError> {
    let db = Db::new(db_path)?;
    db.create_table()?;

    // TODO: remove hardcoded directories
    db.insert_batch(&[
        DbEntry {
            id: 2,
            full_key: "0".to_string(),
            name: Some("0".to_string()),
            parent_id: Some(1),
            etag: None,
            size: None,
        },
        DbEntry {
            id: 3,
            full_key: "1".to_string(),
            name: Some("1".to_string()),
            parent_id: Some(1),
            etag: None,
            size: None,
        },
    ])?;

    let mut buffer = Vec::with_capacity(batch_size);
    for entry in entries {
        let mut entry = entry?;
        entry.parent_id = if entry.full_key.starts_with("0/") {
            Some(2)
        } else {
            Some(3)
        };
        entry.name = Some(
            entry
                .full_key
                .rsplit("/")
                .next()
                .expect("expect at least one component")
                .to_string(),
        );
        validate_db_entry(&entry)?;
        buffer.push(entry);

        if buffer.len() >= batch_size {
            db.insert_batch(&buffer)?;
            buffer.clear();
        }
    }

    if !buffer.is_empty() {
        db.insert_batch(&buffer)?;
    }

    db.create_index()?;

    Ok(())
}

fn validate_db_entry(db_entry: &DbEntry) -> Result<(), ManifestError> {
    if db_entry.etag.is_none() || db_entry.size.is_none() {
        return Err(ManifestError::NoEtagOrSize(db_entry.full_key.clone()));
    }
    for component in db_entry.full_key.split('/') {
        if ValidName::parse_str(component).is_err() {
            return Err(ManifestError::InvalidKey(db_entry.full_key.clone()));
        }
    }
    Ok(())
}

/// Ingests a manifest into the database
pub fn ingest_manifest(csv_path: &Path, db_path: &Path) -> Result<(), ManifestError> {
    let file = File::open(csv_path).map_err(|err| ManifestError::CsvOpenError(csv_path.to_path_buf(), err))?;
    let csv_reader = CsvReader::new(BufReader::new(file));
    if db_path.exists() {
        return Err(ManifestError::DbExists);
    }
    create_db(db_path, csv_reader, 100000)?;
    Ok(())
}
