use std::path::Path;
use std::sync::{Arc, Mutex};
use std::time::Instant;

use mountpoint_s3_client::checksums::crc32c::Crc32c;
use rusqlite::types::Type;
use rusqlite::{Connection, Error, OptionalExtension, Result, Row};

use super::{InputManifestError, ManifestError, core::compute_checksum};

use crate::metablock::{ValidKey, ValidName};
use crate::s3::{Bucket, Prefix, S3Path};

/// Represents an entry in the manifest database.
///
/// Each entry corresponds to either a file or directory in the S3 bucket.
/// Files have an etag and size, while directories do not.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DbEntry {
    /// Unique identifier for this entry in the database. Used as an inode id returned to the kernel.
    pub id: u64,
    /// Identifier of the parent directory entry.
    pub parent_id: u64,
    /// Identifier of the S3 channel (bucket+prefix combination) this entry belongs to.
    pub channel_id: usize,
    /// Partial S3 key of the parent directory, not set for synthetic channel directories.
    ///
    /// Does not include S3 prefix when prefix is mounted. Always includes the trailing '/'.
    ///
    /// This field allows to reconstruct the full S3 key of the given entry without retrieving its parent.
    pub parent_partial_key: Option<String>,
    /// Name of the file or directory.
    pub name: String,
    /// Entity tag (ETag) of the S3 object, not set for directories.
    /// ETags are used for content validation and change detection.
    pub etag: Option<String>,
    /// Size of the S3 object in bytes, not set for directories.
    pub size: Option<usize>,
    /// CRC32C checksum of this entry.
    ///
    /// This is initially computed by our code upon creation of DbEntry from [InputManifestEntry].
    /// It is stored in the database and verified on retrieval, before serving fuse requests.
    pub checksum: u32,
}

impl DbEntry {
    /// Creates a DB entry and computes the checksum of the fields to store in the DB later.
    #[allow(clippy::too_many_arguments)]
    pub fn new(
        id: u64,
        parent_id: u64,
        channel_id: usize,
        parent_partial_key: Option<ValidKey>,
        name: ValidName,
        etag: Option<String>,
        size: Option<usize>,
        s3_path: &S3Path, // this is only used to compute a checksum
    ) -> Result<Self, InputManifestError> {
        let (_, checksum, _) = compute_checksum(
            id,
            parent_id,
            parent_partial_key.as_ref(),
            name,
            etag.as_deref(),
            size,
            s3_path,
        )?;
        Ok(Self {
            id,
            parent_id,
            channel_id,
            parent_partial_key: parent_partial_key.map(String::from),
            name: name.to_string(),
            etag,
            size,
            checksum: checksum.value(),
        })
    }

    /// Creates a DB entry and verifies the partial checksum (of partial_key, etag, size) against the computed value.
    /// Also computes the full checksum to store in the DB later.
    #[allow(clippy::too_many_arguments)]
    pub fn new_with_partial_checksum(
        id: u64,
        parent_id: u64,
        channel_id: usize,
        parent_partial_key: Option<ValidKey>,
        name: ValidName,
        etag: Option<String>,
        size: Option<usize>,
        s3_path: &S3Path,               // this is only used to compute a checksum
        input_partial_checksum: Crc32c, // the partial checksum, received as an input, to validate
    ) -> Result<Self, InputManifestError> {
        let (_, checksum, partial_checksum) = compute_checksum(
            id,
            parent_id,
            parent_partial_key.as_ref(),
            name,
            etag.as_deref(),
            size,
            s3_path,
        )?;
        if input_partial_checksum != partial_checksum {
            return Err(InputManifestError::InvalidChecksum(
                name.to_string(),
                partial_checksum.value(),
                input_partial_checksum.value(),
            ));
        }
        Ok(Self {
            id,
            parent_id,
            channel_id,
            parent_partial_key: parent_partial_key.map(String::from),
            name: name.to_string(),
            etag,
            size,
            checksum: checksum.value(),
        })
    }
}

impl TryFrom<&Row<'_>> for DbEntry {
    type Error = Error;

    fn try_from(row: &Row) -> std::result::Result<Self, Self::Error> {
        Ok(Self {
            id: row.get(0)?,
            parent_id: row.get(1)?,
            channel_id: row.get(2)?,
            parent_partial_key: row.get(3)?,
            name: row.get(4)?,
            etag: row.get(5)?,
            size: row.get(6)?,
            checksum: row.get(7)?,
        })
    }
}

/// Database wrapper for the manifest SQLite database.
///
/// This struct provides methods to interact with the manifest database,
/// which stores information about S3 objects and their hierarchical structure.
/// The database is used to efficiently look up files and directories without
/// making requests to S3.
#[derive(Debug, Clone)]
pub struct Db {
    /// Thread-safe connection to the SQLite database.
    conn: Arc<Mutex<Connection>>,
}

impl Db {
    /// Creates a new database connection to the manifest SQLite database.
    ///
    /// This initializes the connection and disables the SQLite journal for performance.
    pub fn new(manifest_db_path: &Path) -> Result<Self> {
        let conn = Connection::open(manifest_db_path)?;
        let mode: String = conn.query_row("PRAGMA journal_mode=off", [], |row| row.get(0))?;
        assert_eq!(&mode, "off");

        Ok(Self {
            conn: Arc::new(Mutex::new(conn)), // TODO: connection pool?
        })
    }

    /// Retrieves a database entry by its unique ID.
    pub fn select_entry_by_id(&self, id: u64) -> Result<Option<DbEntry>> {
        let start = Instant::now();
        let conn = self.conn.lock().expect("lock must succeed");
        metrics::histogram!("manifest.connection_lock.duration_us").record(start.elapsed().as_micros() as f64);

        let start = Instant::now();
        let query = "SELECT id, parent_id, channel_id, parent_partial_key, name, etag, size, checksum FROM s3_objects WHERE id = ?1";
        tracing::debug!("executing {} with parameters {:?}", query, (id,));
        let mut stmt = conn.prepare(query)?;
        let result = stmt.query_row((id,), |row: &Row| row.try_into()).optional();
        metrics::histogram!("manifest.query.duration_us", "query" => "lookup_by_id")
            .record(start.elapsed().as_micros() as f64);

        result
    }

    /// Queries a row from the DB representing either a file or a directory.
    ///
    /// Looks up an entry by its parent ID and name, which uniquely identifies
    /// an entry within its parent directory.
    pub fn select_entry(&self, parent_id: u64, name: &str) -> Result<Option<DbEntry>> {
        let start = Instant::now();
        let conn = self.conn.lock().expect("lock must succeed");
        metrics::histogram!("manifest.connection_lock.duration_us").record(start.elapsed().as_micros() as f64);

        let start = Instant::now();
        let query = "SELECT id, parent_id, channel_id, parent_partial_key, name, etag, size, checksum FROM s3_objects WHERE parent_id = ?1 AND name = ?2";
        tracing::debug!("executing {} with parameters {:?}", query, (parent_id, name,));
        let mut stmt = conn.prepare(query)?;
        let result = stmt.query_row((parent_id, name), |row: &Row| row.try_into()).optional();
        metrics::histogram!("manifest.query.duration_us", "query" => "lookup")
            .record(start.elapsed().as_micros() as f64);

        result
    }

    /// Queries up to `batch_size` direct children of a directory.
    ///
    /// This method is used for directory listing operations. It returns a batch of entries
    /// that are direct children of the specified parent directory, ordered by name.
    pub fn select_children(&self, parent_id: u64, next_offset: usize, batch_size: usize) -> Result<Vec<DbEntry>> {
        let start = Instant::now();
        let conn = self.conn.lock().expect("lock must succeed");
        metrics::histogram!("manifest.connection_lock.duration_us").record(start.elapsed().as_micros() as f64);

        let start = Instant::now();
        let query = "SELECT id, parent_id, channel_id, parent_partial_key, name, etag, size, checksum FROM s3_objects WHERE parent_id = ?1 ORDER BY name LIMIT ?2 OFFSET ?3";
        tracing::debug!(
            "executing {} with parameters {:?}",
            query,
            (parent_id, batch_size, next_offset)
        );
        let mut stmt = conn.prepare(query)?;
        let result: Result<Vec<DbEntry>> = stmt
            .query_map((parent_id, batch_size, next_offset), |row: &Row| row.try_into())?
            .collect();
        metrics::histogram!("manifest.query.duration_us", "query" => "readdir")
            .record(start.elapsed().as_micros() as f64);

        result
    }

    /// Creates the database tables needed for the manifest.
    ///
    /// This initializes the database schema with tables for S3 objects and channels.
    pub fn create_table(&self) -> Result<()> {
        let conn = self.conn.lock().expect("lock must succeed");
        conn.execute(
            "CREATE TABLE s3_objects (
                id                  INTEGER   PRIMARY KEY,
                parent_id           INTEGER   NOT NULL,
                channel_id          INTEGER   NOT NULL,
                parent_partial_key  TEXT      NULL,
                name                TEXT      NOT NULL,
                etag                TEXT      NULL,
                size                INTEGER   NULL,
                checksum            INTEGER   NOT NULL
            )",
            (),
        )?;

        conn.execute(
            "CREATE TABLE channels (
                id          INTEGER   PRIMARY KEY,
                bucket_name TEXT      NOT NULL,
                prefix      TEXT      NOT NULL
            )",
            (),
        )?;

        Ok(())
    }

    /// Creates database indexes to optimize query performance.
    ///
    /// This creates a unique index on (parent_id, name) to efficiently look up
    /// entries by their parent directory and name.
    pub fn create_index(&self) -> Result<()> {
        let conn = self.conn.lock().expect("lock must succeed");

        conn.execute("CREATE UNIQUE INDEX idx_parent_id ON s3_objects (parent_id, name)", ())?;

        Ok(())
    }

    /// Inserts a batch of entries into the database.
    ///
    /// This method is optimized for bulk insertions by using a transaction.
    pub fn insert_batch(&self, entries: &[DbEntry]) -> Result<()> {
        let mut conn = self.conn.lock().expect("lock must succeed");

        let start = Instant::now();
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
        tx.commit()?;
        metrics::histogram!("manifest.query.duration_us", "query" => "insert")
            .record(start.elapsed().as_micros() as f64);
        Ok(())
    }

    /// Inserts S3 channels (bucket+prefix combinations) into the database.
    ///
    /// Each channel is assigned a sequential ID starting from 0.
    pub fn insert_channels(&self, channels: Vec<S3Path>) -> Result<()> {
        let mut conn = self.conn.lock().expect("lock must succeed");
        let tx = conn.transaction()?;
        let mut stmt = tx.prepare("INSERT INTO channels (id, bucket_name, prefix) VALUES (?1, ?2, ?3)")?;
        for (id, channel) in channels.into_iter().enumerate() {
            stmt.execute((id, channel.bucket.as_str(), channel.prefix.as_str()))?;
        }
        drop(stmt);
        tx.commit()
    }

    /// Loads all S3 channels from the database.
    ///
    /// This method retrieves all channels and verifies that their IDs form a
    /// contiguous sequence starting from 0.
    pub fn load_channels(&self) -> Result<Vec<S3Path>, ManifestError> {
        let conn = self.conn.lock().expect("lock must succeed");

        let query = "SELECT id, bucket_name, prefix FROM channels ORDER BY id";
        tracing::debug!("executing {} with parameters", query);
        let mut stmt = conn.prepare(query)?;
        let result: Result<Vec<(u64, S3Path)>> = stmt
            .query_map((), |row: &Row| {
                let id: u64 = row.get(0)?;
                let bucket_string: String = row.get(1)?;
                let prefix_string: String = row.get(2)?;
                Ok((
                    id,
                    S3Path::new(
                        Bucket::new(bucket_string)
                            .map_err(|err| Error::FromSqlConversionFailure(0, Type::Null, Box::new(err)))?,
                        Prefix::new(&prefix_string)
                            .map_err(|err| Error::FromSqlConversionFailure(0, Type::Null, Box::new(err)))?,
                    ),
                ))
            })?
            .collect();

        // check that channel ids is a contiguous sequence of integers starting from 0, otherwise error-out
        let result = result?;
        for (i, (id, _)) in result.iter().enumerate() {
            if i as u64 != *id {
                return Err(ManifestError::InvalidChannel(*id));
            }
        }

        Ok(result.into_iter().map(|(_, channel)| channel).collect())
    }
}
