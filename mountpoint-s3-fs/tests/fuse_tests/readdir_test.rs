use std::collections::HashMap;
use std::fs;

use mountpoint_s3_fs::S3FilesystemConfig;
use rand::distr::{Alphanumeric, SampleString};
use rand::rngs::{SmallRng, StdRng};
use rand::{RngExt, SeedableRng};

use crate::common::fuse::{self, TestClient, TestSessionConfig, TestSessionCreator, read_dir_to_entry_names};

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

fn prepare_fs(test_client: &dyn TestClient, map: &HashMap<String, File>) {
    for (name, file) in map {
        let content = vec![file.pat; file.len];
        test_client.put_object(name, &content).unwrap();
    }
}

fn readdir(creator_fn: impl TestSessionCreator, prefix: &str, rng_seed: u64) {
    let readdir_size = 5;
    let filesystem_config = S3FilesystemConfig {
        readdir_size,
        ..Default::default()
    };

    let mut map = HashMap::new();
    let mut expected_list = Vec::new();
    for i in 0..readdir_size * 4 {
        let mut rng = StdRng::seed_from_u64(rng_seed + i as u64);
        let random_str = Alphanumeric.sample_string(&mut rng, 5);
        let file_name = format!("file_{random_str}_{i}");
        map.insert(file_name.clone(), File::new((i % 256) as u8, 10 * i));
        expected_list.push(file_name);
    }
    expected_list.sort();

    let test_session = creator_fn(
        prefix,
        TestSessionConfig {
            filesystem_config,
            ..Default::default()
        },
    );

    prepare_fs(test_session.client(), &map);

    let read_dir_iter = fs::read_dir(test_session.mount_path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(
        dir_entry_names, expected_list,
        "readdir test failed with random seed: {rng_seed}"
    );
}

fn readdir_while_writing(creator_fn: impl TestSessionCreator, prefix: &str, rng_seed: u64) {
    let readdir_size = 5;
    let filesystem_config = S3FilesystemConfig {
        readdir_size,
        ..Default::default()
    };

    let mut map = HashMap::new();
    let mut expected_list = Vec::new();
    for i in 0..readdir_size * 4 {
        let mut rng = StdRng::seed_from_u64(rng_seed + i as u64);
        let random_str = Alphanumeric.sample_string(&mut rng, 5);
        let file_name = format!("file_{random_str}_{i}");
        map.insert(file_name.clone(), File::new((i % 256) as u8, 10 * i));
        expected_list.push(file_name);
    }

    let test_session = creator_fn(
        prefix,
        TestSessionConfig {
            filesystem_config,
            ..Default::default()
        },
    );

    prepare_fs(test_session.client(), &map);

    const OBJECT_SIZE: usize = 1024;
    // open some new files for write and leave it open
    let mut opened_files = Vec::new();
    for i in 0..readdir_size {
        let mut rng = StdRng::seed_from_u64(rng_seed + (map.len() + i) as u64);
        let random_str = Alphanumeric.sample_string(&mut rng, 8);
        let file_name = format!("file_{random_str}_{i}");
        let path = test_session.mount_path().join(&file_name);
        let mut options = fs::File::options();
        options.write(true);
        options.create(true);
        let f = options.open(path).unwrap();

        let mut rng = SmallRng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
        let mut body = vec![0u8; OBJECT_SIZE];
        rng.fill(&mut body[..]);
        opened_files.push(f);
        map.insert(file_name.clone(), File::new(0, 0));
        expected_list.push(file_name);
    }
    expected_list.sort();

    let read_dir_iter = fs::read_dir(test_session.mount_path()).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(
        dir_entry_names, expected_list,
        "readdir test failed with random seed: {rng_seed}"
    );
}

#[cfg(feature = "s3_tests")]
#[test]
fn readdir_s3() {
    let rng_seed = rand::rng().random();
    readdir(fuse::s3_session::new, "", rng_seed);
}

#[cfg(feature = "s3_tests")]
#[test]
fn readdir_while_writing_s3() {
    let rng_seed = rand::rng().random();
    readdir_while_writing(fuse::s3_session::new, "", rng_seed);
}

#[test]
fn readdir_mock() {
    let iteration = 10;
    for _ in 0..iteration {
        let rng_seed = rand::rng().random();
        readdir(fuse::mock_session::new, "", rng_seed);
    }
}

#[test]
fn readdir_while_writing_mock() {
    let iteration = 10;
    for _ in 0..iteration {
        let rng_seed = rand::rng().random();
        readdir_while_writing(fuse::mock_session::new, "", rng_seed);
    }
}
