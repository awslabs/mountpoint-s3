use rusqlite::{params_from_iter, Connection, Result, Row};
use std::path::Path;
use std::sync::{Arc, Mutex, MutexGuard};

#[derive(Debug, Clone, PartialEq)]
pub struct DbEntry {
    pub full_key: String, // Both files and directories don't have '/' in the end
    pub etag: Option<String>,
    pub size: Option<usize>,
}

impl DbEntry {
    fn from_row(row: &Row) -> Result<Self> {
        Ok(Self {
            full_key: row.get(0)?,
            etag: row.get(1)?,
            size: row.get(2)?,
        })
    }

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

#[derive(Debug, Clone)]
pub(super) struct Db {
    conn: Arc<Mutex<Connection>>,
}

impl Db {
    pub(super) fn new(manifest_db_path: &Path) -> Result<Self> {
        let conn = Connection::open(manifest_db_path)?;
        let mode: String = conn.query_row("PRAGMA journal_mode=off", [], |row| row.get(0))?;
        assert_eq!(&mode, "off");

        Ok(Self {
            conn: Arc::new(Mutex::new(conn)), // TODO: connection pool?
        })
    }

    pub(super) fn create_table(&self) -> Result<()> {
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

    pub(super) fn create_index(&self) -> Result<()> {
        let conn = self.conn.lock().expect("lock must succeed");
        conn.execute("CREATE UNIQUE INDEX idx_key ON s3_objects (key)", ())?;

        conn.execute("CREATE INDEX idx_parent_key ON s3_objects (parent_key, key)", ())?;

        Ok(())
    }

    pub(super) fn insert_batch(&self, entries: &[DbEntry]) -> Result<()> {
        let conn = self.conn.lock().expect("lock must succeed");
        self.insert_batch_locked(&conn, entries)
    }

    /// Iterates over a sorted list of S3 object keys, infers and inserts the directories,
    /// deduplicating those based on the previous row.
    ///
    /// Returns the list of keys that were replaced (shadowed) during the process (maximum `batch_size` shadowed entries).
    /// A unique index is assumed to be build at this point for shadowing to happen.
    pub(super) fn insert_directories(&self, batch_size: usize) -> Result<Vec<DbEntry>> {
        let conn = self.conn.lock().expect("lock must succeed");
        let query = "SELECT key FROM s3_objects ORDER BY key";
        let mut stmt = conn.prepare(query)?;
        let keys_iter = stmt.query_map((), |row| {
            let key: String = row.get(0)?;
            Ok(key)
        })?;

        let insert = |db: &Self,
                      conn: &MutexGuard<'_, Connection>,
                      insert_buffer: &mut Vec<DbEntry>,
                      shadowed: &mut Vec<DbEntry>|
         -> Result<()> {
            // we want to report shadowed keys back to user, but we have a memory constraint, so cap it at `batch_size`
            if shadowed.len() < batch_size {
                let mut new_shadowed = db.select_shadowed_locked(conn, insert_buffer)?;
                new_shadowed.truncate(batch_size - shadowed.len());
                shadowed.extend(new_shadowed);
            }
            db.insert_batch_locked(conn, insert_buffer)?;
            insert_buffer.clear();
            Ok(())
        };

        let mut prev_s3_key: Option<String> = None;
        let mut shadowed: Vec<DbEntry> = Default::default();
        let mut insert_buffer: Vec<DbEntry> = Default::default();
        for s3_key in keys_iter {
            let s3_key = s3_key?;
            insert_buffer.extend(infer_directories(prev_s3_key.as_deref(), &s3_key));
            prev_s3_key = Some(s3_key);

            if insert_buffer.len() >= batch_size {
                insert(self, &conn, &mut insert_buffer, &mut shadowed)?;
            }
        }

        if !insert_buffer.is_empty() {
            insert(self, &conn, &mut insert_buffer, &mut shadowed)?;
        }

        Ok(shadowed)
    }

    fn insert_batch_locked(&self, conn: &MutexGuard<'_, Connection>, entries: &[DbEntry]) -> Result<()> {
        conn.execute_batch("BEGIN TRANSACTION;")?;
        let mut stmt =
            conn.prepare("INSERT OR REPLACE INTO s3_objects (key, parent_key, etag, size) VALUES (?1, ?2, ?3, ?4)")?;
        for entry in entries {
            stmt.execute((&entry.full_key, entry.parent_key(), entry.etag.as_deref(), entry.size))?;
        }
        conn.execute_batch("COMMIT;")?;
        Ok(())
    }

    // From a list of new directories to be inserted find files that will be shadowed by those
    fn select_shadowed_locked(&self, conn: &MutexGuard<'_, Connection>, entries: &[DbEntry]) -> Result<Vec<DbEntry>> {
        let placeholders = std::iter::repeat("?")
            .take(entries.len())
            .collect::<Vec<_>>()
            .join(", ");
        let query = format!("SELECT key, etag, size FROM s3_objects WHERE key in ({})", placeholders);
        let mut stmt = conn.prepare(&query)?;
        let keys: Vec<&str> = entries.iter().map(|entry| entry.full_key.as_str()).collect();
        let result: rusqlite::Result<Vec<DbEntry>> = stmt
            .query_map(params_from_iter(keys.iter()), DbEntry::from_row)?
            .collect();
        result
    }
}

// From 2 subsequent keys in the sorted list infer new directories to be created, e.g:
// dir1/dir2/dir3/dir4/c.jpg
// dir1/dir5/d.jpg => dir5
fn infer_directories(prev_s3_key: Option<&str>, s3_key: &str) -> Vec<DbEntry> {
    let mut insert_buffer: Vec<DbEntry> = Default::default();
    let prev_components = if let Some(prev_s3_key) = &prev_s3_key {
        let mut prev_components: Vec<_> = prev_s3_key.split("/").collect();
        prev_components.pop(); // remove last component, i.e. name of the file
        prev_components
    } else {
        Default::default()
    };
    let components: Vec<&str> = s3_key.split("/").collect();

    // find the first subdirectory which wasn't created yet
    let mut longest_common_path_len = 0;
    let mut common_components_count = 0;
    for (idx, component) in components.iter().take(components.len() - 1).enumerate() {
        if idx >= prev_components.len() || *component != prev_components[idx] {
            break;
        }
        longest_common_path_len += component.len() + 1;
        common_components_count += 1;
    }

    // create new subdirectories
    let mut dir_key_len = longest_common_path_len;
    for component in components
        .iter()
        .take(components.len() - 1)
        .skip(common_components_count)
    {
        dir_key_len += component.len() + 1; // includes the trailing '/'
        let directory_key = &s3_key[..dir_key_len - 1];
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

    #[test_case(None, "dir1/a.jpg", &["dir1"]; "no prev 1 dir")]
    #[test_case(None, "dir1/dir2/a.jpg", &["dir1", "dir1/dir2"]; "no prev 2 dirs")]
    #[test_case(None, "", &[]; "empty")]
    #[test_case(Some("dir1/dir2/a.jpg"), "dir1/dir2/b.jpg", &[]; "all dirs created in prev")]
    #[test_case(Some("dir1/a.jpg"), "dir1/dir2/b.jpg", &["dir1/dir2"]; "cur longer")]
    #[test_case(Some("dir1/dir2/dir3/a.jpg"), "dir1/dir2/b.jpg", &[]; "prev longer")]
    #[test_case(Some("dir1/dir2/dir3/dir4/c.jpg"), "dir1/dir5/d.jpg", &["dir1/dir5"]; "prev longer, new dir")]
    #[test_case(Some(""), "dir1/dir2/a.jpg", &["dir1", "dir1/dir2"]; "empty prev")]
    #[test_case(Some("dir1/a.jpg"), "dir1/dir2/", &["dir1/dir2"]; "cur ends with /")]
    #[test_case(Some("dir1/"), "dir1/dir2/a.jpg", &["dir1/dir2"]; "prev ends with /")]
    fn test_infer_directories(prev_key: Option<&str>, current_key: &str, inferred_dirs: &[&str]) {
        let inferred_dirs: Vec<_> = inferred_dirs
            .iter()
            .map(|key| DbEntry {
                full_key: key.to_string(),
                etag: None,
                size: None,
            })
            .collect();
        assert_eq!(infer_directories(prev_key, current_key), inferred_dirs);
    }
}
