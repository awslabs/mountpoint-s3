use std::collections::HashSet;
use std::io::{self, BufReader};
use std::path::{Path, PathBuf};
use std::{collections::HashMap, fs::File};

use serde::Deserialize;
use thiserror::Error;

use crate::fs::InodeKind;
use crate::metablock::{ROOT_INODE_NO, ValidKey, ValidKeyError};
use crate::prefix::{Prefix, PrefixError};
use crate::s3::config::{BucketName, S3Path, S3PathError};

use super::{
    CsvReader,
    db::{Db, DbEntry},
};

/// InputManifestError represents errors occurring during the creation of the metadata store.
#[derive(Debug, Error)]
pub enum InputManifestError {
    #[error("the metadata store already exists at the provided path")]
    DbExists,
    #[error("error opening csv manifest file at {0}")]
    CsvOpenError(PathBuf, #[source] io::Error),
    #[error("directory marker will be ignored {0}")]
    DirectoryMarker(String),
    #[error("failed to parse a csv row")]
    CsvError(#[from] csv::Error),
    #[error("db unique constraint violation, possibly due to a shadowed key")]
    ConstraintViolation(#[source] rusqlite::Error),
    #[error("channel provided in the config is invalid: {0}")]
    InvalidChannel(String),
    #[error("s3 bucket provided in the config is invalid")]
    InvalidBucket(#[from] S3PathError),
    #[error("s3 prefix provided in the config is invalid")]
    InvalidPrefix(#[from] PrefixError),
    #[error("failed to write to the metadata store")]
    DbError(#[from] rusqlite::Error),
    #[error("s3 key provided in the csv manifest is invalid")]
    InvalidKey(#[from] ValidKeyError),
}

/// ChannelConfig represents per-channel configuration, when multiple buckets are mounted.
#[derive(Debug, Deserialize)]
pub struct ChannelConfig {
    pub directory_name: String,
    pub bucket_name: String,
    #[serde(default)]
    pub prefix: String,
    pub manifest_path: PathBuf,
}

/// ChannelManifest is a helper struct, primarily exposed for usage in tests.
///
/// This struct represents the same information as [ChannelConfig], but holds iterator over manifest entries.
pub struct ChannelManifest<EntriesIterator: Iterator<Item = Result<InputManifestEntry, InputManifestError>>> {
    pub directory_name: String,
    pub s3_path: S3Path,
    pub entries: EntriesIterator,
}

/// InputManifestEntry represents a validated manifest entry from an input file.
///
/// Notably it holds a validated [partial_key] which is guaranteed to be a [ValidKey] of an object.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct InputManifestEntry {
    /// Partial key of an S3 object. Does not contain prefix when prefix is mounted.
    ///
    /// Guaranteed to be [InodeKind::File] (and thus not empty).
    partial_key: ValidKey,
    etag: String,
    size: usize,
}

impl InputManifestEntry {
    pub fn new(
        partial_key: impl Into<String>,
        etag: impl Into<String>,
        size: usize,
    ) -> Result<Self, InputManifestError> {
        let partial_key = ValidKey::try_from(partial_key.into())?;
        if partial_key.is_empty() {
            return Err(InputManifestError::InvalidKey(ValidKeyError::InvalidKey(
                partial_key.to_string(),
            )));
        }
        if partial_key.kind() != InodeKind::File {
            return Err(InputManifestError::DirectoryMarker(partial_key.to_string()));
        }
        Ok(Self {
            partial_key,
            etag: etag.into(),
            size,
        })
    }

    fn into_db_entry(self, id: u64, parent_id: u64, channel_id: usize, parent_partial_key: ValidKey) -> DbEntry {
        debug_assert_eq!(self.partial_key.kind(), InodeKind::File);

        DbEntry {
            id,
            parent_id,
            channel_id,
            parent_partial_key: Some(parent_partial_key.to_string()),
            name: self.partial_key.name().to_string(),
            etag: Some(self.etag),
            size: Some(self.size),
        }
    }
}

/// Ingests CSV manifests into the the metadata store.
///
/// Accepts a slice of [ChannelConfig], with each channel having a dedicated CSV manifest.
///
/// For each manifest, the expected file format is CSV with no header and 3 columns: partial_key, etag, size.
/// The field `partial_key` must not contain S3 prefix, when the prefix is mounted.
/// The field `etag` may contain enclosing quotes, just as it is returned by S3 ListObjectsV2 API.
/// All fields must be properly escaped.
pub fn ingest_manifest(channel_configs: &[ChannelConfig], db_path: &Path) -> Result<(), InputManifestError> {
    if db_path.exists() {
        return Err(InputManifestError::DbExists);
    }
    // validate that channel directories are unique and do not have '/' in it
    let mut distinct_names: HashSet<String> = Default::default();
    for config in channel_configs {
        if config.directory_name.contains('/') || !distinct_names.insert(config.directory_name.clone()) {
            return Err(InputManifestError::InvalidChannel(config.directory_name.clone()));
        }
    }
    // open the csv files and create readers
    let mut channel_manifest_readers = Vec::with_capacity(channel_configs.len());
    for config in channel_configs {
        let csv_path = &config.manifest_path;
        let file = File::open(csv_path).map_err(|err| InputManifestError::CsvOpenError(csv_path.to_path_buf(), err))?;
        let csv_reader = CsvReader::new(BufReader::new(file));
        channel_manifest_readers.push(ChannelManifest {
            directory_name: config.directory_name.clone(),
            s3_path: S3Path::new(BucketName::new(&config.bucket_name)?, Prefix::new(&config.prefix)?),
            entries: csv_reader,
        });
    }
    // create the db from readers
    create_db(db_path, channel_manifest_readers, 100000)?;
    Ok(())
}

/// Ingests CSV manifests into the the metadata store.
///
/// Compared to [ingest_manifest] this method accepts an iterator of parsed [InputManifestEntry].
/// Method [ingest_manifest] actually delegates db creation to this method, but this one is also used in tests.
pub fn create_db<EntriesIterator: Iterator<Item = Result<InputManifestEntry, InputManifestError>>>(
    db_path: &Path,
    channel_manifests: Vec<ChannelManifest<EntriesIterator>>,
    batch_size: usize,
) -> Result<(), InputManifestError> {
    let mut builder = ManifestBuilder::new(db_path, batch_size)?;
    builder.insert_channels(&channel_manifests)?;
    builder.insert_entries(channel_manifests)?;
    builder.create_index()
}

/// A private helper struct implementing methods for the metadata store creation
struct ManifestBuilder {
    db: Db,
    dir_ids: HashMap<String, u64>,
    next_id: u64,
    insert_buffer: Vec<DbEntry>,
    batch_size: usize,
}

impl ManifestBuilder {
    fn new(db_path: &Path, batch_size: usize) -> Result<Self, InputManifestError> {
        let db = Db::new(db_path)?;
        db.create_table()?;

        Ok(Self {
            db,
            dir_ids: Default::default(),
            next_id: ROOT_INODE_NO + 1,
            insert_buffer: Vec::with_capacity(batch_size),
            batch_size,
        })
    }

    fn insert_channels<EntriesIterator: Iterator<Item = Result<InputManifestEntry, InputManifestError>>>(
        &self,
        channel_manifests: &[ChannelManifest<EntriesIterator>],
    ) -> Result<(), InputManifestError> {
        let channels = channel_manifests
            .iter()
            .map(|channel_manifest| channel_manifest.s3_path.clone())
            .collect();
        self.db.insert_channels(channels)?;
        Ok(())
    }

    fn create_index(&self) -> Result<(), InputManifestError> {
        match self.db.create_index() {
            Ok(_) => Ok(()),
            // Handle the following error which may be a sign of a shadowed key present in the manifest:
            // SqliteFailure(Error { code: ConstraintViolation, extended_code: 2067 }, Some("UNIQUE constraint failed: s3_objects.parent_id, s3_objects.name"))
            Err(rusqlite::Error::SqliteFailure(err, msg)) if err.code == rusqlite::ErrorCode::ConstraintViolation => {
                Err(InputManifestError::ConstraintViolation(rusqlite::Error::SqliteFailure(
                    err, msg,
                )))
            }
            Err(e) => Err(e)?,
        }
    }

    fn insert_entries<EntriesIterator: Iterator<Item = Result<InputManifestEntry, InputManifestError>>>(
        &mut self,
        channel_manifests: Vec<ChannelManifest<EntriesIterator>>,
    ) -> Result<(), InputManifestError> {
        for (channel_id, channel_manifest) in channel_manifests.into_iter().enumerate() {
            // insert synthetic channel dir
            let channel_root_id = self.next_id;
            self.insert_buffer.push(DbEntry {
                id: channel_root_id,
                parent_id: ROOT_INODE_NO,
                channel_id,
                parent_partial_key: None,
                name: channel_manifest.directory_name.clone(),
                etag: None,
                size: None,
            });
            self.next_id += 1;

            // insert keys from the manifest (and corresponding dirs)
            for entry in channel_manifest.entries {
                if let Err(InputManifestError::DirectoryMarker(key)) = entry {
                    tracing::warn!(
                        "directory marker will be ignored: {}, channel directory may be empty: {}",
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
                self.insert_buffer.push(db_entry);
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
    ) -> Result<(u64, ValidKey), InputManifestError> {
        debug_assert_eq!(object_key.kind(), InodeKind::File);

        let components: Vec<_> = object_key.components();
        let mut parent_id = channel_root_id;
        let mut parent_partial_key = ValidKey::root();

        for component in components[..components.len() - 1].iter() {
            let partial_key = parent_partial_key.new_child(*component, InodeKind::Directory)?;
            parent_id = if let Some(dir_id) = self.dir_ids.get(&partial_key as &str) {
                *dir_id
            } else {
                let id = self.next_id;
                self.insert_buffer.push(DbEntry {
                    id,
                    parent_id,
                    channel_id,
                    parent_partial_key: Some(parent_partial_key.to_string()),
                    name: component.to_string(),
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

    fn flush_insert_buffer(&mut self) -> Result<(), InputManifestError> {
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
            .map(|key| Ok(InputManifestEntry::new(*key, DUMMY_ETAG, DUMMY_SIZE).unwrap()));
        let err = create_db(
            &db_path,
            vec![ChannelManifest {
                directory_name: "channel_0".to_string(),
                s3_path: S3Path::new(BucketName::new("bucket").unwrap(), Default::default()),
                entries,
            }],
            1000,
        )
        .expect_err("must be an error");
        assert!(matches!(err, InputManifestError::ConstraintViolation(_)));
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
        if let InputManifestError::InvalidChannel(channel) = err {
            assert_eq!(&channel, bad_channel);
        } else {
            panic!("expected InputManifestError::InvalidChannel, got: {err:?}")
        }
    }

    #[test]
    fn test_directory_marker_ignored() {
        let db_dir = tempfile::tempdir().unwrap();
        let db_path = db_dir.path().join("s3_keys.db3");
        let entries = [Err(InputManifestError::DirectoryMarker("dir1/dir2/".to_string()))].into_iter();
        create_db(
            &db_path,
            vec![ChannelManifest {
                directory_name: "channel_0".to_string(),
                s3_path: S3Path::new(BucketName::new("bucket").unwrap(), Default::default()),
                entries,
            }],
            1000,
        )
        .expect("db creation must succeed");
    }
}
