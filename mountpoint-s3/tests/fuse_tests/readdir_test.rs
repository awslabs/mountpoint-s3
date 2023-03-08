use crate::fuse_tests::PutObjectFn;
use fuser::BackgroundSession;
use mountpoint_s3::S3FilesystemConfig;
use std::collections::HashMap;
use std::fs;
use tempfile::TempDir;

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

fn readdir_1<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn),
{
    let readdir_size = 5usize;
    let filesystem_config = S3FilesystemConfig {
        readdir_size,
        ..Default::default()
    };

    let mut map = HashMap::new();
    for i in 0..readdir_size * 4 {
        map.insert(format!("file{i}"), File::new((i % 256) as u8, 10 * i));
    }
    let (mount_point, _session, put_object_fn) = creator_fn(prefix, filesystem_config);

    prepare_fs(put_object_fn, &map);

    let dir = fs::read_dir(mount_point.path()).unwrap();
    let mut files: Vec<_> = dir.map(|f| f.unwrap()).collect();

    for f in files.drain(..) {
        let path = f.path();
        let name = path.file_name().unwrap().to_str().unwrap();
        assert!(map.remove(name).is_some());
    }

    println!("... map is {map:?}");
    assert!(map.is_empty());
}

#[test]
fn readdir_1_mock() {
    readdir_1(crate::fuse_tests::mock_session::new, "");
}
