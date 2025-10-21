use crate::common::fuse::{self, TestClient, TestSessionConfig, TestSessionCreator, read_dir_to_entry_names};
use mountpoint_s3_fs::S3FilesystemConfig;
use rand::distributions::{Alphanumeric, DistString};
use rand::rngs::StdRng;
use rand::{Rng, SeedableRng};
use rand_chacha::ChaCha20Rng;
use std::collections::HashMap;
use std::fs;
use std::io::Write;
use std::sync::Arc;
use std::sync::atomic::{AtomicBool, AtomicUsize, Ordering};
use std::thread;
use std::time::Duration;

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

fn readdir(creator_fn: impl TestSessionCreator, prefix: &str, rng_seed: usize) {
    let readdir_size = 5;
    let filesystem_config = S3FilesystemConfig {
        readdir_size,
        ..Default::default()
    };

    let mut map = HashMap::new();
    let mut expected_list = Vec::new();
    for i in 0..readdir_size * 4 {
        let mut rng = StdRng::seed_from_u64((rng_seed + i) as u64);
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

fn readdir_while_writing(creator_fn: impl TestSessionCreator, prefix: &str, rng_seed: usize) {
    let readdir_size = 5;
    let filesystem_config = S3FilesystemConfig {
        readdir_size,
        ..Default::default()
    };

    let mut map = HashMap::new();
    let mut expected_list = Vec::new();
    for i in 0..readdir_size * 4 {
        let mut rng = StdRng::seed_from_u64((rng_seed + i) as u64);
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
        let mut rng = StdRng::seed_from_u64((rng_seed + map.len() + i) as u64);
        let random_str = Alphanumeric.sample_string(&mut rng, 8);
        let file_name = format!("file_{random_str}_{i}");
        let path = test_session.mount_path().join(&file_name);
        let mut options = fs::File::options();
        options.write(true);
        options.create(true);
        let f = options.open(path).unwrap();

        let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
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
    let rng_seed = rand::thread_rng().r#gen();
    readdir(fuse::s3_session::new, "", rng_seed);
}

#[cfg(feature = "s3_tests")]
#[test]
fn readdir_while_writing_s3() {
    let rng_seed = rand::thread_rng().r#gen();
    readdir_while_writing(fuse::s3_session::new, "", rng_seed);
}

#[test]
fn readdir_mock() {
    let iteration = 10;
    for _ in 0..iteration {
        let rng_seed = rand::thread_rng().r#gen();
        readdir(fuse::mock_session::new, "", rng_seed);
    }
}

#[test]
fn readdir_while_writing_mock() {
    let iteration = 10;
    for _ in 0..iteration {
        let rng_seed = rand::thread_rng().r#gen();
        readdir_while_writing(fuse::mock_session::new, "", rng_seed);
    }
}

#[cfg(feature = "s3_tests")]
#[test]
fn stress_test_readdir_filesystem_s3() {
    stress_test_readdir_filesystem(fuse::s3_session::new, "stress_test_readdir_filesystem_s3");
}

#[test]
fn stress_test_readdir_filesystem_mock() {
    stress_test_readdir_filesystem(fuse::mock_session::new, "stress_test_readdir_filesystem_mock");
}

fn stress_test_readdir_filesystem(creator_fn: impl TestSessionCreator, prefix: &str) {
    let test_session = creator_fn(prefix, Default::default());

    // Create initial files in the filesystem
    for i in 0..20 {
        let content = vec![i as u8; 50];
        test_session
            .client()
            .put_object(&format!("base_{i}"), &content)
            .unwrap();
    }

    let path = test_session.mount_path().to_path_buf();
    let stop = Arc::new(AtomicBool::new(false));
    let operations = Arc::new(AtomicUsize::new(0));

    // Continuous readdir threads
    let readdir_handles: Vec<_> = (0..5)
        .map(|_id| {
            let path = path.clone();
            let stop = stop.clone();
            let operations = operations.clone();
            thread::spawn(move || {
                while !stop.load(Ordering::Relaxed) {
                    if let Ok(entries) = fs::read_dir(&path) {
                        let _count = read_dir_to_entry_names(entries).len();
                        operations.fetch_add(1, Ordering::Relaxed);
                    }
                    thread::sleep(Duration::from_millis(2));
                }
            })
        })
        .collect();

    // File creation thread
    let creator_handle = {
        let path = path.clone();
        let stop = stop.clone();
        thread::spawn(move || {
            let mut counter: u32 = 100;
            while !stop.load(Ordering::Relaxed) {
                let file_path = path.join(format!("created_{counter}"));
                if let Ok(mut file) = fs::File::create(&file_path) {
                    let _ = file.write_all(&counter.to_le_bytes());
                }
                counter += 1;
                thread::sleep(Duration::from_millis(3));
            }
        })
    };

    // File reader thread
    let reader_handle = {
        let path = path.clone();
        let stop = stop.clone();
        thread::spawn(move || {
            while !stop.load(Ordering::Relaxed) {
                if let Ok(entries) = fs::read_dir(&path) {
                    for entry in entries.flatten().take(5) {
                        let _ = fs::read(entry.path());
                    }
                }
                thread::sleep(Duration::from_millis(2));
            }
        })
    };

    // File deleter thread
    let deleter_handle = {
        let path = path.clone();
        let stop = stop.clone();
        thread::spawn(move || {
            while !stop.load(Ordering::Relaxed) {
                if let Ok(entries) = fs::read_dir(&path) {
                    for entry in entries.flatten().take(5) {
                        let _ = fs::remove_file(entry.path());
                    }
                }
                thread::sleep(Duration::from_millis(10));
            }
        })
    };

    // Run the stress test for a few seconds
    thread::sleep(Duration::from_secs(5));
    stop.store(true, Ordering::Relaxed);

    // Wait for all threads to finish
    creator_handle.join().unwrap();
    reader_handle.join().unwrap();
    deleter_handle.join().unwrap();
    for handle in readdir_handles {
        handle.join().unwrap();
    }

    println!(
        "Stress test completed successfully with {} readdir operations",
        operations.load(Ordering::Relaxed)
    );
}
