use std::io::BufReader;
use std::path::Path;
use std::{collections::HashMap, fs::File};

use fuser::FUSE_ROOT_ID;

use crate::{
    manifest::db::{Db, DbEntry},
    manifest::{CsvReader, ManifestError},
    superblock::path::ValidName,
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
        validate_db_entry(&entry)?;
        // split full_key to parent_dir and file_name
        let (parent_dir, file_name) = entry
            .full_key
            .rsplit_once('/')
            .map_or((None, entry.full_key.as_str()), |(dir, file)| (Some(dir), file));
        // insert the parent directory and link current entry to it
        entry.parent_id = Some(ensure_dirs_inserted(&db, &mut dir_ids, &mut next_id, parent_dir)?);
        // set entry's name and id and push it to the insert buffer
        entry.name = Some(file_name.to_string());
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

    db.create_index()?;

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
                name: Some(component.to_string()),
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
