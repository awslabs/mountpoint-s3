use std::collections::HashSet;
use std::io::BufReader;
use std::path::{Path, PathBuf};
use std::{collections::HashMap, fs::File};

use fuser::FUSE_ROOT_ID;
use serde::Deserialize;

use crate::fs::InodeKind;
use crate::metablock::{ValidKey, ValidKeyError, ValidName};
use crate::prefix::Prefix;
use crate::s3::config::S3Path;
use crate::{
    manifest::db::{Db, DbEntry},
    manifest::{CsvReader, ManifestError},
};

#[derive(Debug, Deserialize)]
pub struct ChannelConfig {
    pub directory_name: String,
    pub bucket_name: String,
    #[serde(default)]
    pub prefix: String,
    pub manifest_path: PathBuf,
}

pub struct ChannelManifest<I> {
    pub directory_name: String,
    pub s3_path: S3Path,
    pub entries: I,
}

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct InputManifestEntry {
    partial_key: ValidKey, // guaranteed to be InodeKind::File (=> not empty)
    etag: String,
    size: usize,
}

impl InputManifestEntry {
    pub fn new(partial_key: &str, etag: &str, size: usize) -> Result<Self, ManifestError> {
        Self::from_owned(partial_key.to_string(), etag.to_string(), size)
    }

    pub fn from_owned(partial_key: String, etag: String, size: usize) -> Result<Self, ManifestError> {
        let partial_key = ValidKey::try_from(partial_key)?;
        if partial_key.is_empty() {
            return Err(ManifestError::InvalidKey(ValidKeyError::InvalidKey(
                partial_key.to_string(),
            )));
        }
        if partial_key.kind() != InodeKind::File {
            return Err(ManifestError::FolderMarker(partial_key.to_string()));
        }
        Ok(Self {
            partial_key,
            etag,
            size,
        })
    }

    fn into_db_entry(
        self,
        id: u64,
        parent_id: u64,
        channel_id: usize,
        parent_partial_key: ValidKey,
    ) -> Result<DbEntry, ManifestError> {
        debug_assert_eq!(self.partial_key.kind(), InodeKind::File);

        // parse and validate the name
        let name = match self.partial_key.rsplit_once('/') {
            Some((_, name)) => name.to_string(),
            None => self.partial_key.to_string(),
        };
        let _ = ValidName::parse_str(&name)
            .map_err(|_| ManifestError::InvalidKey(ValidKeyError::InvalidKey(name.clone())))?;

        Ok(DbEntry {
            id,
            parent_id,
            channel_id,
            parent_partial_key: Some(parent_partial_key.to_string()),
            name,
            etag: Some(self.etag),
            size: Some(self.size),
        })
    }
}

/// Ingests a manifest into the database.
///
/// The expected file format is CSV with no header and 3 columns -- full_key, etag, size.
/// The field `full_key` must not contain S3 prefix, when the prefix is mounted.
/// The field `etag` may contain enclosing quotes, just as it is returned by S3 ListObjectsV2 API.
/// All fields must be properly escaped.
pub fn ingest_manifest(channel_configs: &[ChannelConfig], db_path: &Path) -> Result<(), ManifestError> {
    if db_path.exists() {
        return Err(ManifestError::DbExists);
    }
    // validate that channel directories are unique and do not have '/' in it
    let mut distinct_names: HashSet<String> = Default::default();
    for config in channel_configs {
        if config.directory_name.contains('/') || !distinct_names.insert(config.directory_name.clone()) {
            return Err(ManifestError::InvalidChannel(config.directory_name.clone()));
        }
    }
    // open the csv files and create readers
    let channel_readers: Result<Vec<_>, ManifestError> = channel_configs
        .iter()
        .map(|config| {
            let csv_path = &config.manifest_path;
            let file = File::open(csv_path).map_err(|err| ManifestError::CsvOpenError(csv_path.to_path_buf(), err))?;
            let csv_reader = CsvReader::new(BufReader::new(file));
            Ok(ChannelManifest {
                directory_name: config.directory_name.clone(),
                s3_path: S3Path {
                    bucket_name: config.bucket_name.clone(),
                    prefix: Prefix::new(&config.prefix)?,
                },
                entries: csv_reader,
            })
        })
        .collect();
    // create the db from readers
    create_db(db_path, channel_readers?, 100000)?;
    Ok(())
}

/// Ingests a manifest into the database.
///
/// Compared to [ingest_manifest] this method accepts an iterator of parsed [InputManifestEntry].
/// Method [ingest_manifest] actually delegates db creation to this method, but this one is also used in tests.
pub fn create_db<I: Iterator<Item = Result<InputManifestEntry, ManifestError>>>(
    db_path: &Path,
    channel_manifests: Vec<ChannelManifest<I>>,
    batch_size: usize,
) -> Result<(), ManifestError> {
    let mut builder = ManifestBuilder::new(db_path, batch_size)?;
    builder.insert_channels(&channel_manifests)?;
    builder.insert_entries(channel_manifests)?;
    builder.create_index()
}

/// A private helper struct implementing methods for database creation
struct ManifestBuilder {
    db: Db,
    dir_ids: HashMap<String, u64>, // TODO: limit size of this hash map
    next_id: u64,
    insert_buffer: Vec<DbEntry>,
    batch_size: usize,
}

impl ManifestBuilder {
    fn new(db_path: &Path, batch_size: usize) -> Result<Self, ManifestError> {
        let db = Db::new(db_path)?;
        db.create_table()?;

        Ok(Self {
            db,
            dir_ids: Default::default(),
            next_id: FUSE_ROOT_ID + 1,
            insert_buffer: Vec::with_capacity(batch_size),
            batch_size,
        })
    }

    fn insert_channels<I: Iterator<Item = Result<InputManifestEntry, ManifestError>>>(
        &self,
        channel_manifests: &[ChannelManifest<I>],
    ) -> Result<(), ManifestError> {
        let channels = channel_manifests
            .iter()
            .map(|channel_manifest| channel_manifest.s3_path.clone())
            .collect();
        self.db.insert_channels(channels)?;
        Ok(())
    }

    fn create_index(&self) -> Result<(), ManifestError> {
        match self.db.create_index() {
            Ok(_) => Ok(()),
            // Handle the following error which may be a sign of a shadowed key present in the manifest:
            // SqliteFailure(Error { code: ConstraintViolation, extended_code: 2067 }, Some("UNIQUE constraint failed: s3_objects.parent_id, s3_objects.name"))
            Err(rusqlite::Error::SqliteFailure(err, msg)) if err.code == rusqlite::ErrorCode::ConstraintViolation => {
                Err(ManifestError::ConstraintViolation(rusqlite::Error::SqliteFailure(
                    err, msg,
                )))
            }
            Err(e) => Err(e)?,
        }
    }

    fn insert_entries<I: Iterator<Item = Result<InputManifestEntry, ManifestError>>>(
        &mut self,
        channel_manifests: Vec<ChannelManifest<I>>,
    ) -> Result<(), ManifestError> {
        for (channel_id, channel_manifest) in channel_manifests.into_iter().enumerate() {
            // insert synthetic channel dir
            let channel_root_id = self.next_id;
            self.insert_buffer.push(DbEntry {
                id: channel_root_id,
                parent_id: FUSE_ROOT_ID,
                channel_id,
                parent_partial_key: None,
                name: channel_manifest.directory_name.clone(),
                etag: None,
                size: None,
            });
            self.next_id += 1;

            // insert keys from the manifest (and corresponding dirs)
            for entry in channel_manifest.entries {
                if let Err(ManifestError::FolderMarker(key)) = entry {
                    tracing::warn!(
                        "folder marker will be ignored: {}, channel directory may be empty: {}",
                        key,
                        channel_manifest.directory_name
                    );
                    continue;
                }
                let entry = entry?;

                // insert the parent directories
                let (parent_id, parent_partial_key) =
                    self.ensure_dirs_inserted(&entry.partial_key, channel_id, channel_root_id)?;

                // push new file entry to the insert_buffer
                let db_entry = entry.into_db_entry(self.next_id, parent_id, channel_id, parent_partial_key);
                self.insert_buffer.push(db_entry?);
                self.next_id += 1;

                // if insert_buffer is full, write to db
                if self.insert_buffer.len() >= self.batch_size {
                    self.flush_insert_buffer()?;
                }
            }

            self.dir_ids.clear(); // dirs across channels do not overlap, forget them
        }

        self.flush_insert_buffer()?; // flush remaining entries to db

        Ok(())
    }

    /// Ingests parent directory of `object_key` and its parents to db (if not done yet), returns ID and key of the immediate parent
    ///
    /// Note that insertion of directories is postponed till we have a full batch.
    fn ensure_dirs_inserted(
        &mut self,
        object_key: &ValidKey,
        channel_id: usize,
        channel_root_id: u64,
    ) -> Result<(u64, ValidKey), ManifestError> {
        debug_assert_eq!(object_key.kind(), InodeKind::File);

        let components: Vec<_> = object_key.split('/').collect();
        let mut parent_id = channel_root_id;
        let mut parent_partial_key = ValidKey::root();

        for component in components[..components.len() - 1].iter() {
            let valid_name = ValidName::parse_str(component)
                .map_err(|_| ManifestError::InvalidKey(ValidKeyError::InvalidKey(object_key.to_string())))?;
            let partial_key = parent_partial_key.new_child(valid_name, InodeKind::Directory)?;
            parent_id = if let Some(dir_id) = self.dir_ids.get(&partial_key as &str) {
                *dir_id
            } else {
                let id = self.next_id;
                self.insert_buffer.push(DbEntry {
                    id,
                    parent_id,
                    channel_id,
                    parent_partial_key: Some(parent_partial_key.to_string()),
                    name: valid_name.to_string(),
                    etag: None,
                    size: None,
                });
                self.dir_ids.insert(partial_key.to_string(), id);
                self.next_id += 1;
                id
            };
            parent_partial_key = partial_key;
        }

        Ok((parent_id, parent_partial_key))
    }

    fn flush_insert_buffer(&mut self) -> Result<(), ManifestError> {
        if !self.insert_buffer.is_empty() {
            self.db.insert_batch(&self.insert_buffer)?;
            self.insert_buffer.clear();
        }
        Ok(())
    }
}
#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    const DUMMY_ETAG: &str = "\"3bebe4037c8f040e0e573e191d34b2c6\"";
    const DUMMY_SIZE: usize = 1024;

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
    #[test_case(&[
        "dir1/a.txt",
        "dir1/b.txt",
        "dir1/a.txt", // duplicate
        "dir1/c.txt",
    ]; "duplicate file")]
    fn test_shadowed(manifest_keys: &[&str]) {
        let db_dir = tempfile::tempdir().unwrap();
        let db_path = db_dir.path().join("s3_keys.db3");
        let entries = manifest_keys
            .iter()
            .map(|key| Ok(InputManifestEntry::new(key, DUMMY_ETAG, DUMMY_SIZE).unwrap()));
        let err = create_db(
            &db_path,
            vec![ChannelManifest {
                directory_name: "channel_0".to_string(),
                s3_path: S3Path {
                    bucket_name: "bucket".to_string(),
                    prefix: Prefix::new("").unwrap(),
                },
                entries,
            }],
            1000,
        )
        .expect_err("must be an error");
        assert!(matches!(err, ManifestError::ConstraintViolation(_)));
    }

    #[test_case(&[
        "channel_0",
        "channel_1",
        "channel_0",
        "channel_2",
    ], "channel_0"; "duplicated")]
    #[test_case(&[
        "channel_0",
        "channel_1/",
    ], "channel_1/"; "ends with /")]
    fn test_channel_bad_dir(dir_names: &[&str], bad_channel: &str) {
        let db_dir = tempfile::tempdir().unwrap();
        let db_path = db_dir.path().join("s3_keys.db3");
        let configs: Vec<_> = dir_names
            .iter()
            .map(|dir_name| ChannelConfig {
                directory_name: dir_name.to_string(),
                bucket_name: "bucket".to_string(),
                prefix: "".to_string(),
                manifest_path: PathBuf::new(),
            })
            .collect();
        let err = ingest_manifest(&configs, &db_path).expect_err("must be an error");
        if let ManifestError::InvalidChannel(channel) = err {
            assert_eq!(&channel, bad_channel);
        } else {
            panic!("expected ManifestError::InvalidChannel, got: {err:?}")
        }
    }

    #[test]
    fn test_folder_marker_ignored() {
        let db_dir = tempfile::tempdir().unwrap();
        let db_path = db_dir.path().join("s3_keys.db3");
        let entries = [Err(ManifestError::FolderMarker("dir1/dir2/".to_string()))].into_iter();
        create_db(
            &db_path,
            vec![ChannelManifest {
                directory_name: "channel_0".to_string(),
                s3_path: S3Path {
                    bucket_name: "bucket".to_string(),
                    prefix: Prefix::new("").unwrap(),
                },
                entries,
            }],
            1000,
        )
        .expect("db creation must succeed");
    }
}
