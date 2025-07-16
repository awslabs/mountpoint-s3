use rusqlite::types::Type;
use rusqlite::{Connection, Error, OptionalExtension, Result, Row};
use std::path::Path;
use std::sync::{Arc, Mutex};
use std::time::Instant;

use crate::manifest::ManifestError;
use crate::prefix::Prefix;
use crate::s3::config::S3Path;

#[derive(Debug, Clone, PartialEq, Eq)]
pub struct DbEntry {
    pub id: u64,
    pub parent_id: u64,
    pub channel_id: usize,
    pub parent_partial_key: Option<String>, // not set for synthetic channel dirs
    pub name: String,
    pub etag: Option<String>, // not set for all dirs
    pub size: Option<usize>,  // not set for all dirs
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
        })
    }
}

#[derive(Debug, Clone)]
pub struct Db {
    conn: Arc<Mutex<Connection>>,
}

impl Db {
    pub fn new(manifest_db_path: &Path) -> Result<Self> {
        let conn = Connection::open(manifest_db_path)?;
        let mode: String = conn.query_row("PRAGMA journal_mode=off", [], |row| row.get(0))?;
        assert_eq!(&mode, "off");

        Ok(Self {
            conn: Arc::new(Mutex::new(conn)), // TODO: connection pool?
        })
    }

    pub fn select_entry_by_id(&self, id: u64) -> Result<Option<DbEntry>> {
        let start = Instant::now();
        let conn = self.conn.lock().expect("lock must succeed");
        metrics::histogram!("manifest.lookup.lock.elapsed_micros").record(start.elapsed().as_micros() as f64);

        let start = Instant::now();
        let query =
            "SELECT id, parent_id, channel_id, parent_partial_key, name, etag, size FROM s3_objects WHERE id = ?1";
        tracing::debug!("executing {} with parameters {:?}", query, (id,));
        let mut stmt = conn.prepare(query)?;
        let result = stmt.query_row((id,), |row: &Row| row.try_into()).optional();
        metrics::histogram!("manifest.lookup.query.elapsed_micros").record(start.elapsed().as_micros() as f64);

        result
    }

    /// Queries a row from the DB representing either the file or a directory
    pub fn select_entry(&self, parent_id: u64, name: &str) -> Result<Option<DbEntry>> {
        let start = Instant::now();
        let conn = self.conn.lock().expect("lock must succeed");
        metrics::histogram!("manifest.lookup_by_id.lock.elapsed_micros").record(start.elapsed().as_micros() as f64);

        let start = Instant::now();
        let query = "SELECT id, parent_id, channel_id, parent_partial_key, name, etag, size FROM s3_objects WHERE parent_id = ?1 AND name = ?2";
        tracing::debug!("executing {} with parameters {:?}", query, (parent_id, name,));
        let mut stmt = conn.prepare(query)?;
        let result = stmt.query_row((parent_id, name), |row: &Row| row.try_into()).optional();
        metrics::histogram!("manifest.lookup_by_id.query.elapsed_micros").record(start.elapsed().as_micros() as f64);

        result
    }

    /// Queries up to `batch_size` direct children of the directory with key `parent`, starting from `next_offset`
    pub fn select_children(&self, parent_id: u64, next_offset: usize, batch_size: usize) -> Result<Vec<DbEntry>> {
        // Current plan:
        // $ EXPLAIN QUERY PLAN SELECT id, key, etag, size FROM s3_objects WHERE parent_id = 2 ORDER BY name LIMIT 10000 OFFSET 30000;
        // 0|0|0|SEARCH TABLE s3_objects USING INDEX idx_parent_key (parent_id=?)
        //
        // TODO: measure performance on 10M rows (when large OFFSET's are used):
        // - consider using `WHERE name >= last_returned_name` instead of `OFFSET`
        // - consider covering index (we only need [id, key, size]) to improve performance
        let start = Instant::now();
        let conn = self.conn.lock().expect("lock must succeed");
        metrics::histogram!("manifest.readdir.lock.elapsed_micros").record(start.elapsed().as_micros() as f64);

        let start = Instant::now();
        let query = "SELECT id, parent_id, channel_id, parent_partial_key, name, etag, size FROM s3_objects WHERE parent_id = ?1 ORDER BY name LIMIT ?2 OFFSET ?3";
        tracing::debug!(
            "executing {} with parameters {:?}",
            query,
            (parent_id, batch_size, next_offset)
        );
        let mut stmt = conn.prepare(query)?;
        let result: Result<Vec<DbEntry>> = stmt
            .query_map((parent_id, batch_size, next_offset), |row: &Row| row.try_into())?
            .collect();
        metrics::histogram!("manifest.readdir.query.elapsed_micros").record(start.elapsed().as_micros() as f64);

        result
    }

    pub fn create_table(&self) -> Result<()> {
        let conn = self.conn.lock().expect("lock must succeed");
        // NOTE: SUBSTR in SQLite starts indexing from 1 (name_offset column assumes left-most character has index 0)
        conn.execute(
            "CREATE TABLE s3_objects (
                id                  INTEGER   PRIMARY KEY,
                parent_id           INTEGER   NOT NULL,
                channel_id          INTEGER   NOT NULL,
                parent_partial_key  TEXT      NULL,
                name                TEXT      NOT NULL,
                etag                TEXT      NULL,
                size                INTEGER   NULL
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

    pub fn create_index(&self) -> Result<()> {
        let conn = self.conn.lock().expect("lock must succeed");

        conn.execute("CREATE UNIQUE INDEX idx_parent_id ON s3_objects (parent_id, name)", ())?;

        Ok(())
    }

    pub fn insert_batch(&self, entries: &[DbEntry]) -> Result<()> {
        let mut conn = self.conn.lock().expect("lock must succeed");

        let start = Instant::now();
        let tx = conn.transaction()?;
        let mut stmt = tx.prepare(
            "INSERT INTO s3_objects (id, parent_id, channel_id, parent_partial_key, name, etag, size) VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)",
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
            ))?;
        }
        drop(stmt);
        tx.commit()?;
        metrics::histogram!("manifest.build.query.elapsed_micros").record(start.elapsed().as_micros() as f64);
        Ok(())
    }

    pub fn insert_channels(&self, channels: Vec<S3Path>) -> Result<()> {
        let mut conn = self.conn.lock().expect("lock must succeed");
        let tx = conn.transaction()?;
        let mut stmt = tx.prepare("INSERT INTO channels (id, bucket_name, prefix) VALUES (?1, ?2, ?3)")?;
        for (id, channel) in channels.into_iter().enumerate() {
            stmt.execute((id, channel.bucket_name, channel.prefix.as_str()))?;
        }
        drop(stmt);
        tx.commit()
    }

    pub fn load_channels(&self) -> Result<Vec<S3Path>, ManifestError> {
        let conn = self.conn.lock().expect("lock must succeed");

        let query = "SELECT id, bucket_name, prefix FROM channels ORDER BY id";
        tracing::debug!("executing {} with parameters", query);
        let mut stmt = conn.prepare(query)?;
        let result: Result<Vec<(usize, S3Path)>> = stmt
            .query_map((), |row: &Row| {
                let id: usize = row.get(0)?;
                let prefix_string: String = row.get(2)?;
                Ok((
                    id,
                    S3Path {
                        bucket_name: row.get(1)?,
                        prefix: Prefix::new(&prefix_string)
                            .map_err(|err| Error::FromSqlConversionFailure(0, Type::Null, Box::new(err)))?,
                    },
                ))
            })?
            .collect();

        // check that channel ids is a contiguous sequence of integers starting from 0, otherwise error-out
        let result = result?;
        for (i, (id, channel)) in result.iter().enumerate() {
            if i != *id {
                return Err(ManifestError::InvalidChannel(format!("{channel:?}")));
            }
        }

        Ok(result.into_iter().map(|pair| pair.1).collect())
    }
}
