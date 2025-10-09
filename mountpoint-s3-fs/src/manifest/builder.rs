use std::collections::HashSet;
use std::io::{self, BufReader};
use std::path::{Path, PathBuf};
use std::{collections::HashMap, fs::File};

use mountpoint_s3_client::checksums::Crc32c;
use serde::Deserialize;
use thiserror::Error;

use crate::checksums::Crc32cBase64;
use crate::fs::InodeKind;
use crate::metablock::{ROOT_INODE_NO, ValidKey, ValidKeyError, ValidName};
use crate::s3::{Bucket, Prefix, PrefixError, S3Path, S3PathError};

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
    #[error("invalid checksum for the entry with key {0}, computed {1}, received {2}")]
    InvalidChecksum(String, u32, u32),
    #[error("invalid checksum for the manifest file for channel {0}, computed {1}, received {2}")]
    InvalidFileChecksum(String, u32, u32),
    #[error("invalid etag {0} for the entry with key {1}")]
    InvalidEtag(String, String),
    #[error("provided size {0} is too large")]
    SizeTooLarge(u64),
}

/// ChannelConfig represents per-channel configuration, when multiple buckets are mounted.
#[derive(Debug, Deserialize)]
pub struct ChannelConfig {
    pub directory_name: String,
    pub bucket_name: String,
    #[serde(default)]
    pub prefix: String,
    pub manifest_path: PathBuf,
    pub manifest_checksum: Crc32cBase64,
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
    // Checksum as computed by the creator of the manifest; we will validate it before storing to DB.
    checksum: Crc32c,
}

impl InputManifestEntry {
    /// Creates an InputManifestEntry and stores the expected checksum for later validation.
    pub fn new(
        partial_key: impl Into<String>,
        etag: impl Into<String>,
        size: usize,
        checksum: Crc32c,
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
        let etag = etag.into();
        if etag.is_empty() {
            return Err(InputManifestError::InvalidEtag(partial_key.to_string(), etag));
        }
        Ok(Self {
            partial_key,
            etag,
            size,
            checksum,
        })
    }

    /// Creates an InputManifestEntry and computes the checksum.
    ///
    /// This is only useful in tests.
    #[cfg(any(test, feature = "fuse_tests"))]
    pub fn new_without_checksum(
        partial_key: impl Into<String>,
        etag: impl Into<String>,
        size: usize,
    ) -> Result<Self, InputManifestError> {
        let mut hasher = mountpoint_s3_client::checksums::crc32c::Hasher::new();

        let partial_key: String = partial_key.into();
        hasher.update(partial_key.as_bytes());
        let etag: String = etag.into();
        hasher.update(etag.as_bytes());
        // we encode size with big endian byte order and with a fixed width of 8 bytes (rust: u64, java: long)
        hasher.update((size as u64).to_be_bytes().as_ref());
        let checksum = hasher.finalize();

        Self::new(partial_key, etag, size, checksum)
    }

    /// Creates a [DbEntry] from self. The checksum is validated here.
    fn into_db_entry(
        self,
        id: u64,
        parent_id: u64,
        channel_id: usize,
        parent_partial_key: ValidKey,
        s3_path: &S3Path,
    ) -> Result<DbEntry, InputManifestError> {
        debug_assert_eq!(self.partial_key.kind(), InodeKind::File);

        DbEntry::new_with_partial_checksum(
            id,
            parent_id,
            channel_id,
            Some(parent_partial_key),
            self.partial_key
                .valid_name()
                .expect("files guaranteed to have a valid name"),
            Some(self.etag),
            Some(self.size),
            s3_path,
            self.checksum,
        )
    }
}

/// Ingests CSV manifests into the the metadata store.
///
/// Accepts a slice of [ChannelConfig], with each channel having a dedicated CSV manifest.
///
/// For each manifest, the expected file format is CSV with no header and 4 columns: partial_key, etag, size, checksum.
/// The field `partial_key` must not contain S3 prefix, when the prefix is mounted.
/// The field `etag` may contain enclosing quotes, just as it is returned by S3 ListObjectsV2 API.
/// The fields `checksum` must contain the CRC32C checksum of the other 3 fields of the entry.
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
        let csv_reader = CsvReader::new(
            BufReader::new(file),
            csv_path.to_string_lossy().as_ref(),
            config.manifest_checksum.value(),
        );
        channel_manifest_readers.push(ChannelManifest {
            directory_name: config.directory_name.clone(),
            s3_path: S3Path::new(Bucket::new(&config.bucket_name)?, Prefix::new(&config.prefix)?),
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
            let channel_directory_name = ValidName::try_from(channel_manifest.directory_name.as_str())
                .map_err(|_| InputManifestError::InvalidChannel(channel_manifest.directory_name.clone()))?;
            self.insert_buffer.push(DbEntry::new(
                channel_root_id,
                ROOT_INODE_NO,
                channel_id,
                None,
                channel_directory_name,
                None,
                None,
                &channel_manifest.s3_path,
            )?);
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
                let (parent_id, parent_partial_key) = self.ensure_dirs_inserted(
                    &entry.partial_key,
                    channel_id,
                    channel_root_id,
                    &channel_manifest.s3_path,
                )?;

                // push new file entry to the insert_buffer
                let db_entry = entry.into_db_entry(
                    self.next_id,
                    parent_id,
                    channel_id,
                    parent_partial_key,
                    &channel_manifest.s3_path,
                )?;
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
        s3_path: &S3Path,
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
                self.insert_buffer.push(DbEntry::new(
                    id,
                    parent_id,
                    channel_id,
                    Some(parent_partial_key.clone()),
                    *component,
                    None,
                    None,
                    s3_path,
                )?);
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
            .map(|key| Ok(InputManifestEntry::new_without_checksum(*key, DUMMY_ETAG, DUMMY_SIZE).unwrap()));
        let err = create_db(
            &db_path,
            vec![ChannelManifest {
                directory_name: "channel_0".to_string(),
                s3_path: S3Path::new(Bucket::new("bucket").unwrap(), Default::default()),
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
                manifest_checksum: Crc32cBase64::new(0),
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
                s3_path: S3Path::new(Bucket::new("bucket").unwrap(), Default::default()),
                entries,
            }],
            1000,
        )
        .expect("db creation must succeed");
    }

    #[test]
    fn test_invalid_file_checksum() {
        let db_dir = tempfile::tempdir().unwrap();
        let db_path = db_dir.path().join("s3_keys.db3");
        let entries = [Err(InputManifestError::InvalidFileChecksum(
            "manifest1.csv".to_string(),
            0,
            0,
        ))]
        .into_iter();
        let err = create_db(
            &db_path,
            vec![ChannelManifest {
                directory_name: "channel_0".to_string(),
                s3_path: S3Path::new(Bucket::new("bucket").unwrap(), Default::default()),
                entries,
            }],
            1000,
        )
        .expect_err("must be an error");
        assert!(matches!(err, InputManifestError::InvalidFileChecksum(_, _, _)));
    }
}
