use rusqlite::{Connection, Error, OptionalExtension, Result, Row};
use serde::Deserialize;
use std::path::Path;
use std::sync::{Arc, Mutex};
use std::time::Instant;

#[derive(Debug, Clone, PartialEq, Hash, Eq, Deserialize, Default)]
pub struct DbEntry {
    #[serde(skip)]
    pub id: u64,
    /// S3 key of the object.
    ///
    /// When a bucket prefix is mounted, this field does not contain prefix when stored or loaded from the DB.
    /// Both files and directories don't have '/' in the end.
    pub full_key: String,
    #[serde(skip)]
    pub name_offset: Option<u64>,
    #[serde(skip)]
    pub parent_id: Option<u64>,
    pub etag: Option<String>,
    pub size: Option<usize>,
}

impl TryFrom<&Row<'_>> for DbEntry {
    type Error = Error;

    fn try_from(row: &Row) -> std::result::Result<Self, Self::Error> {
        Ok(Self {
            id: row.get(0)?,
            full_key: row.get(1)?,
            name_offset: None,
            parent_id: row.get(2)?,
            etag: row.get(3)?,
            size: row.get(4)?,
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
        let query = "SELECT id, key, parent_id, etag, size FROM s3_objects WHERE id = ?1";
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
        let query = "SELECT id, key, parent_id, etag, size FROM s3_objects WHERE parent_id = ?1 AND name = ?2";
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
        let query = "SELECT id, key, parent_id, etag, size FROM s3_objects WHERE parent_id = ?1 ORDER BY name LIMIT ?2 OFFSET ?3";
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
                id          INTEGER   PRIMARY KEY,
                key         TEXT      NOT NULL,
                name_offset INTEGER   NOT NULL,
                name        TEXT      GENERATED ALWAYS AS (SUBSTR(key,name_offset + 1)) VIRTUAL,
                parent_id   INTEGER   NOT NULL,
                etag        TEXT      NULL,
                size        INTEGER   NULL
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
        let tx = conn.transaction()?;
        let mut stmt = tx.prepare(
            "INSERT INTO s3_objects (id, key, name_offset, parent_id, etag, size) VALUES (?1, ?2, ?3, ?4, ?5, ?6)",
        )?;
        for entry in entries {
            stmt.execute((
                entry.id,
                &entry.full_key,
                &entry.name_offset,
                entry.parent_id,
                entry.etag.as_deref(),
                entry.size,
            ))?;
        }
        drop(stmt);
        tx.commit()
    }
}
