use mountpoint_s3_fs::manifest::{create_db, DbEntry, ManifestError, ManifestWarning};
use rusqlite::{Connection, Row};
use std::path::{Path, PathBuf};
use tempfile::TempDir;
use test_case::test_case;

const DUMMY_ETAG: &str = "\"3bebe4037c8f040e0e573e191d34b2c6\"";
const DUMMY_SIZE: usize = 1024;

#[test_case(&[
    "dir1/a.txt",
    "dir1/dir2/b.txt",
    "dir1/dir2/c.txt",
    "dir1/dir3/dir4/d.txt",
    "e.txt",
]; "simple")]
#[test_case(&[
    "dir1/dir2/b.txt",
    "dir1/a.txt",
    "e.txt",
    "dir1/dir3/dir4/d.txt",
    "dir1/dir2/c.txt",
]; "unsorted")]
fn test_ingest_directories(manifest_keys: &[&str]) {
    let all_expected_entries = &[
        TestDbEntry::directory("dir1", ""),
        TestDbEntry::file("dir1/a.txt", "dir1", DUMMY_ETAG, DUMMY_SIZE),
        TestDbEntry::directory("dir1/dir2", "dir1"),
        TestDbEntry::file("dir1/dir2/b.txt", "dir1/dir2", DUMMY_ETAG, DUMMY_SIZE),
        TestDbEntry::file("dir1/dir2/c.txt", "dir1/dir2", DUMMY_ETAG, DUMMY_SIZE),
        TestDbEntry::directory("dir1/dir3", "dir1"),
        TestDbEntry::directory("dir1/dir3/dir4", "dir1/dir3"),
        TestDbEntry::file("dir1/dir3/dir4/d.txt", "dir1/dir3/dir4", DUMMY_ETAG, DUMMY_SIZE),
        TestDbEntry::file("e.txt", "", DUMMY_ETAG, DUMMY_SIZE),
    ];
    let (_tmp_dir, db_path, _) = create_dummy_manifest(manifest_keys, DUMMY_SIZE);
    let db_entries = select_all(&db_path).expect("must select all objects");
    assert_eq!(&db_entries, all_expected_entries);
}

#[test_case(&[
    "dir1", // must be shadowed
    "dir1/a.txt",
    "dir2/b.txt",
]; "simple")]
#[test_case(&[
    "dir1/a.txt",
    "dir2/b.txt",
    "dir1", // must be shadowed
]; "unsorted")]
fn test_ingest_shadowed(manifest_keys: &[&str]) {
    let all_expected_entries = &[
        TestDbEntry::directory("dir1", ""),
        TestDbEntry::file("dir1/a.txt", "dir1", DUMMY_ETAG, DUMMY_SIZE),
        TestDbEntry::directory("dir2", ""),
        TestDbEntry::file("dir2/b.txt", "dir2", DUMMY_ETAG, DUMMY_SIZE),
    ];
    let (_tmp_dir, db_path, warnings) = create_dummy_manifest(manifest_keys, DUMMY_SIZE);
    let db_entries = select_all(&db_path).expect("must select all objects");
    assert_eq!(&db_entries, all_expected_entries);
    assert_eq!(&warnings, &[ManifestWarning::ShadowedKey("dir1".to_string())]);
}

#[test_case("dir1/"; "ends with /")]
fn test_ingest_invalid_key(key: &str) {
    let (_tmp_dir, db_path, warnings) = create_dummy_manifest(&[key], DUMMY_SIZE);
    let db_entries = select_all(&db_path).expect("must select all objects");
    assert!(db_entries.is_empty());
    assert_eq!(&warnings, &[ManifestWarning::InvalidKey("dir1/".to_string())]);
}

fn create_dummy_manifest<T: AsRef<str>>(s3_keys: &[T], file_size: usize) -> (TempDir, PathBuf, Vec<ManifestWarning>) {
    let db_entries: Vec<_> = s3_keys
        .iter()
        .map(|key| DbEntry {
            full_key: key.as_ref().to_string(),
            etag: Some(DUMMY_ETAG.to_string()),
            size: Some(file_size),
        })
        .collect();

    create_manifest(&db_entries)
}

fn create_manifest(db_entries: &[DbEntry]) -> (TempDir, PathBuf, Vec<ManifestWarning>) {
    let db_dir = tempfile::tempdir().unwrap();
    let db_path = db_dir.path().join("s3_keys.db3");

    let warnings = create_db_from_slice(&db_path, db_entries).expect("db must be created");

    (db_dir, db_path, warnings)
}

fn create_db_from_slice(db_path: &Path, db_entries: &[DbEntry]) -> Result<Vec<ManifestWarning>, ManifestError> {
    let batch_size = 1024;
    create_db(db_path, db_entries.iter().map(|entry| Ok(entry.clone())), batch_size)
}

/// Entry from a db. Compared to [DbEntry] it has a `parent_key` field.
#[derive(Debug, PartialEq)]
struct TestDbEntry {
    key: String,
    parent_key: String,
    etag: Option<String>,
    size: Option<usize>,
}

impl TestDbEntry {
    fn file(key: &str, parent_key: &str, etag: &str, size: usize) -> TestDbEntry {
        Self {
            key: key.to_string(),
            parent_key: parent_key.to_string(),
            etag: Some(etag.to_string()),
            size: Some(size),
        }
    }

    fn directory(key: &str, parent_key: &str) -> TestDbEntry {
        Self {
            key: key.to_string(),
            parent_key: parent_key.to_string(),
            etag: None,
            size: None,
        }
    }

    fn from_row(row: &Row) -> rusqlite::Result<TestDbEntry> {
        Ok(Self {
            key: row.get(0)?,
            parent_key: row.get(1)?,
            etag: row.get(2)?,
            size: row.get(3)?,
        })
    }
}

fn select_all(manifest_db_path: &Path) -> rusqlite::Result<Vec<TestDbEntry>> {
    let conn = Connection::open(manifest_db_path).expect("must connect to a db");
    let query = "SELECT key, parent_key, etag, size FROM s3_objects ORDER BY key";
    let mut stmt = conn.prepare(query)?;
    let result: rusqlite::Result<Vec<TestDbEntry>> = stmt.query_map((), TestDbEntry::from_row)?.collect();
    result
}
