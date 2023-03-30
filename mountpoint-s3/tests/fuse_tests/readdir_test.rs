use crate::fuse_tests::PutObjectFn;
use fuser::BackgroundSession;
use mountpoint_s3::S3FilesystemConfig;
use rand::{Rng, SeedableRng};
use rand_chacha::ChaCha20Rng;
use std::collections::HashMap;
use std::fs;
use tempfile::TempDir;
use test_case::test_case;

// Unit Tests
// Generate a filesystem with many entries
//   Populate a bucket (mock or S3) with filesystem entries
//   do various readdir() calls

// Naive populate
#[derive(Debug)]
struct File {
    pat: u8,
    len: usize,
}

impl File {
    fn new(pat: u8, len: usize) -> Self {
        Self { pat, len }
    }
}

fn prepare_fs(mut put_object_fn: PutObjectFn, map: &HashMap<String, File>) {
    for (name, file) in map {
        let content = vec![file.pat; file.len];
        put_object_fn(name, &content).unwrap();
    }
}

fn readdir<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn),
{
    let readdir_size = 5;
    let filesystem_config = S3FilesystemConfig {
        readdir_size,
        ..Default::default()
    };

    let mut map = HashMap::new();
    let mut expected_list = Vec::new();
    for i in 0..readdir_size * 4 {
        let file_name = format!("file{i}");
        map.insert(file_name.clone(), File::new((i % 256) as u8, 10 * i));
        expected_list.push(file_name);
    }
    expected_list.sort();

    let (mount_point, _session, put_object_fn) = creator_fn(prefix, filesystem_config);

    prepare_fs(put_object_fn, &map);

    let dir = fs::read_dir(mount_point.path()).unwrap();
    let dirs: Vec<_> = dir.map(|f| f.unwrap()).collect();
    assert_eq!(
        dirs.iter()
            .map(|f| f.path().file_name().unwrap().to_str().unwrap().to_owned())
            .collect::<Vec<_>>(),
        expected_list
    );
}

fn readdir_while_writing<F>(creator_fn: F, prefix: &str, new_files: Vec<&str>)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn),
{
    let readdir_size = 5;
    let filesystem_config = S3FilesystemConfig {
        readdir_size,
        ..Default::default()
    };

    let mut map = HashMap::new();
    let mut expected_list = Vec::new();
    for i in 0..readdir_size * 4 {
        let file_name = format!("file{i}");
        map.insert(file_name.clone(), File::new((i % 256) as u8, 10 * i));
        expected_list.push(file_name);
    }

    let (mount_point, _session, put_object_fn) = creator_fn(prefix, filesystem_config);

    prepare_fs(put_object_fn, &map);

    const OBJECT_SIZE: usize = 1024;
    let mut opened_files = Vec::new();
    for file_name in new_files {
        let path = mount_point.path().join(file_name);
        let mut options = fs::File::options();
        options.write(true);
        options.create(true);
        let f = options.open(path).unwrap();

        let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
        let mut body = vec![0u8; OBJECT_SIZE];
        rng.fill(&mut body[..]);
        opened_files.push(f);
        map.insert(file_name.to_owned(), File::new(0, 0));
        expected_list.push(file_name.to_owned());
    }
    expected_list.sort();

    let dir = fs::read_dir(mount_point.path()).unwrap();
    let dirs: Vec<_> = dir.map(|f| f.unwrap()).collect();
    assert_eq!(
        dirs.iter()
            .map(|f| f.path().file_name().unwrap().to_str().unwrap().to_owned())
            .collect::<Vec<_>>(),
        expected_list
    );
}

#[cfg(feature = "s3_tests")]
#[test]
fn readdir_s3() {
    readdir(crate::fuse_tests::s3_session::new, "readdir_s3");
}

#[cfg(feature = "s3_tests")]
#[test_case(vec!["aaa", "file150", "file151", "zzz"]; "new files at various positions")]
fn readdir_while_writing_s3(new_files: Vec<&str>) {
    readdir_while_writing(crate::fuse_tests::s3_session::new, "readdir_s3", new_files);
}

#[test]
fn readdir_mock() {
    readdir(crate::fuse_tests::mock_session::new, "");
}

#[test_case(vec!["aaa", "file150", "file151", "zzz"]; "new files at various positions")]
fn readdir_while_writing_mock(new_files: Vec<&str>) {
    readdir_while_writing(crate::fuse_tests::mock_session::new, "readdir_s3", new_files);
}
