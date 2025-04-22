use super::{ManifestError, ManifestWarning};
use crate::{
    manifest::db::{Db, DbEntry},
    superblock::path::ValidName,
};
use std::path::Path;
use tracing::warn;

pub fn create_db(
    db_path: &Path,
    entries: impl Iterator<Item = Result<DbEntry, ManifestError>>,
    batch_size: usize,
) -> Result<Vec<ManifestWarning>, ManifestError> {
    let db = Db::new(db_path)?;
    db.create_table()?;

    let mut warnings = Vec::new();
    let mut buffer = Vec::with_capacity(batch_size);
    for entry in entries {
        let entry = entry?;
        if let Some(warning) = validate_db_entry(&entry) {
            warn!("entry in the manifest is invalid and will be unavailable: {}", warning);
            // we want to report invalid keys back to user, but we have a memory constraint, so cap it at `batch_size`
            if warnings.len() < batch_size {
                warnings.push(warning);
            }
            continue;
        }
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

    warnings.extend(
        db.insert_directories(batch_size)?
            .into_iter()
            .map(|db_entry| ManifestWarning::ShadowedKey(db_entry.full_key)),
    );
    Ok(warnings)
}

fn validate_db_entry(db_entry: &DbEntry) -> Option<ManifestWarning> {
    if db_entry.etag.is_none() || db_entry.size.is_none() {
        return Some(ManifestWarning::NoEtagOrSize(db_entry.full_key.clone()));
    }
    for component in db_entry.full_key.split('/') {
        if ValidName::parse_str(component).is_err() {
            return Some(ManifestWarning::InvalidKey(db_entry.full_key.clone()));
        }
    }
    None
}
