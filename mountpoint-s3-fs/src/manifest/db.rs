use rusqlite::{Connection, Error, OptionalExtension, Result, Row};
use std::collections::HashSet;
use std::path::Path;
use std::sync::{Arc, Mutex};
use std::time::Instant;

#[derive(Debug, Clone, PartialEq, Hash, Eq)]
pub struct DbEntry {
    pub full_key: String, // Both files and directories don't have '/' in the end
    pub etag: Option<String>,
    pub size: Option<usize>,
}

impl DbEntry {
    // Parent key without a trailing '/'
    fn parent_key(&self) -> &str {
        let key = self.full_key.trim_end_matches("/");
        let last_component_len = key.rsplit("/").next().expect("expect at least one component").len();
        if last_component_len == key.len() {
            // root case is special, it doesn't contain trailing '/'
            ""
        } else {
            &key[..key.len() - last_component_len - 1]
        }
    }
}

impl TryFrom<&Row<'_>> for DbEntry {
    type Error = Error;

    fn try_from(row: &Row) -> std::result::Result<Self, Self::Error> {
        Ok(Self {
            full_key: row.get(0)?,
            etag: row.get(1)?,
            size: row.get(2)?,
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

    /// Queries a row from the DB representing either the file or a directory
    pub fn select_entry(&self, key: &str) -> Result<Option<DbEntry>> {
        let start = Instant::now();
        let conn = self.conn.lock().expect("lock must succeed");
        metrics::histogram!("manifest.lookup.lock.elapsed_micros").record(start.elapsed().as_micros() as f64);

        let start = Instant::now();
        let query = "SELECT key, etag, size FROM s3_objects WHERE key = ?1";
        let mut stmt = conn.prepare(query)?;
        let result = stmt.query_row((key,), |row: &Row| row.try_into()).optional();
        metrics::histogram!("manifest.lookup.query.elapsed_micros").record(start.elapsed().as_micros() as f64);

        result
    }

    /// Queries up to `batch_size` direct children of the directory with key `parent`, starting from `next_offset`
    pub fn select_children(&self, parent: &str, next_offset: usize, batch_size: usize) -> Result<Vec<DbEntry>> {
        let start = Instant::now();
        let conn = self.conn.lock().expect("lock must succeed");
        metrics::histogram!("manifest.readdir.lock.elapsed_micros").record(start.elapsed().as_micros() as f64);

        let start = Instant::now();
        let query = "SELECT key, etag, size FROM s3_objects WHERE parent_key = ?1 ORDER BY key LIMIT ?2, ?3";
        let mut stmt = conn.prepare(query)?;
        let result: Result<Vec<DbEntry>> = stmt
            .query_map((parent, next_offset, batch_size), |row: &Row| row.try_into())?
            .collect();
        metrics::histogram!("manifest.readdir.query.elapsed_micros").record(start.elapsed().as_micros() as f64);

        result
    }

    pub fn create_table(&self) -> Result<()> {
        let conn = self.conn.lock().expect("lock must succeed");
        conn.execute(
            "CREATE TABLE s3_objects (
                id          INTEGER   PRIMARY KEY,
                key         TEXT      NOT NULL,
                parent_key  TEXT      NOT NULL,
                etag        TEXT      NULL,
                size        INTEGER   NULL
            )",
            (),
        )?;

        Ok(())
    }

    pub fn create_index(&self) -> Result<()> {
        let conn = self.conn.lock().expect("lock must succeed");
        conn.execute("CREATE UNIQUE INDEX idx_key ON s3_objects (key)", ())?;

        conn.execute("CREATE INDEX idx_parent_key ON s3_objects (parent_key, key)", ())?;

        Ok(())
    }

    pub fn insert_batch(&self, entries: &[DbEntry]) -> Result<()> {
        let mut conn = self.conn.lock().expect("lock must succeed");
        let tx = conn.transaction()?;
        let mut stmt = tx.prepare("INSERT INTO s3_objects (key, parent_key, etag, size) VALUES (?1, ?2, ?3, ?4)")?;
        for entry in entries {
            stmt.execute((&entry.full_key, entry.parent_key(), entry.etag.as_deref(), entry.size))?;
        }
        drop(stmt);
        tx.commit()
    }

    pub fn insert_directories(&self, batch_size: usize) -> Result<()> {
        let mut conn = self.conn.lock().expect("lock must succeed");
        let tx = conn.transaction()?;
        let mut read_stmt = tx.prepare("SELECT DISTINCT(parent_key) FROM s3_objects")?;
        let mut write_stmt =
            tx.prepare("INSERT OR REPLACE INTO s3_objects (key, parent_key, etag, size) VALUES (?1, ?2, ?3, ?4)")?;
        let keys_iter = read_stmt.query_map((), |row| {
            let key: String = row.get(0)?;
            Ok(key)
        })?;

        let mut insert_buffer: HashSet<DbEntry> = Default::default();
        for dir_key in keys_iter {
            insert_buffer.extend(infer_directories(&dir_key?));

            if insert_buffer.len() >= batch_size {
                for entry in insert_buffer.iter() {
                    write_stmt.execute((&entry.full_key, entry.parent_key(), entry.etag.as_deref(), entry.size))?;
                }
                insert_buffer.clear();
            }
        }

        for entry in insert_buffer {
            write_stmt.execute((&entry.full_key, entry.parent_key(), entry.etag.as_deref(), entry.size))?;
        }

        drop(read_stmt);
        drop(write_stmt);
        tx.commit()
    }
}

fn infer_directories(dir_key: &str) -> Vec<DbEntry> {
    let dir_key = dir_key.trim_end_matches("/");
    if dir_key.is_empty() {
        return Default::default();
    }

    let mut insert_buffer: Vec<DbEntry> = Default::default();

    // create new subdirectories
    let mut dir_key_len = 0;
    for component in dir_key.split("/") {
        dir_key_len += component.len() + 1; // includes the trailing '/'
        let directory_key = &dir_key[..dir_key_len - 1];
        debug_assert!(!directory_key.ends_with("/")); // directories don't have '/' in the end
        insert_buffer.push(DbEntry {
            full_key: directory_key.to_owned(),
            etag: None,
            size: None,
        });
    }

    insert_buffer
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    #[test_case("a.txt", "")]
    #[test_case("dir1/a.txt", "dir1")]
    #[test_case("dir1/dir2/a.txt", "dir1/dir2")]
    #[test_case("dir1", "")]
    #[test_case("dir1/dir2", "dir1")]
    fn test_manifest_entry_parent_key(full_key: &str, parent_key: &str) {
        let entry = DbEntry {
            full_key: full_key.to_string(),
            etag: None,
            size: None,
        };
        assert_eq!(entry.parent_key(), parent_key);
    }

    #[test_case("dir1", &["dir1"]; "no prev 1 dir")]
    #[test_case( "dir1/dir2", &["dir1", "dir1/dir2"]; "no prev 2 dirs")]
    #[test_case("", &[]; "empty")]
    #[test_case("dir1/", &["dir1"]; "ends with /")]
    fn test_infer_directories(dir_key: &str, inferred_dirs: &[&str]) {
        let inferred_dirs: Vec<_> = inferred_dirs
            .iter()
            .map(|key| DbEntry {
                full_key: key.to_string(),
                etag: None,
                size: None,
            })
            .collect();
        assert_eq!(infer_directories(dir_key), inferred_dirs);
    }
}
