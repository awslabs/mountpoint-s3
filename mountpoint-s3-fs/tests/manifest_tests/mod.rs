use crate::common::manifest::{create_dummy_manifest, select_all, TestDbEntry, DUMMY_ETAG, DUMMY_SIZE};
use mountpoint_s3_fs::manifest::ManifestWarning;
use test_case::test_case;

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

#[test_case("dir1/./a.txt"; "with dot")]
#[test_case("dir1/../a.txt"; "with 2 dots")]
#[test_case("dir1//a.txt"; "with 2 slashes")]
#[test_case(""; "empty")]
#[test_case("dir1/a\0.txt"; "with 0")]
#[test_case("dir1/dir2/"; "ends with slash")]
fn test_ingest_invalid_key(key: &str) {
    let (_tmp_dir, db_path, warnings) = create_dummy_manifest(&[key], DUMMY_SIZE);
    let db_entries = select_all(&db_path).expect("must select all objects");
    assert!(db_entries.is_empty());
    assert_eq!(&warnings, &[ManifestWarning::InvalidKey(key.to_string())]);
}
