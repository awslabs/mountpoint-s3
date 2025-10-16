use crate::common::fuse::{TestSessionConfig, mock_session, read_dir_to_entry_names};
use crate::common::test_recorder::{Metric, TestRecorder};
use mountpoint_s3_fs::S3FilesystemConfig;
use mountpoint_s3_fs::metrics::defs::{
    ATTR_FUSE_REQUEST, FUSE_IO_SIZE, FUSE_REQUEST_ERRORS, FUSE_REQUEST_LATENCY, PREFETCH_RESET_STATE,
};
use rusty_fork::rusty_fork_test;
use std::fs::{File, read_dir};
use std::io::{Read, Seek, Write};
use std::sync::Arc;

fn setup_recorder() -> TestRecorder {
    let recorder = TestRecorder::default();
    metrics::set_global_recorder(recorder.clone()).expect("Failed to set global recorder");
    recorder
}

fn get_metric(recorder: &TestRecorder, name: &str, labels: &[(&str, &str)]) -> Arc<Metric> {
    recorder
        .get(name, labels)
        .unwrap_or_else(|| panic!("Expected metric '{name}' with labels {labels:?} to exist"))
}

fn get_histogram(recorder: &TestRecorder, name: &str, labels: &[(&str, &str)]) -> Vec<f64> {
    let metric = get_metric(recorder, name, labels);
    match metric.as_ref() {
        Metric::Histogram(_) => metric.histogram(),
        _ => panic!("Metric '{name}' is not a histogram"),
    }
}

fn assert_metric_exists(recorder: &TestRecorder, name: &str, labels: &[(&str, &str)]) {
    let _ = get_metric(recorder, name, labels);
}

fn verify_common_metrics(recorder: &TestRecorder) {
    for request in ["open", "getattr", "fsync"] {
        assert_metric_exists(recorder, FUSE_REQUEST_LATENCY, &[(ATTR_FUSE_REQUEST, request)]);
    }
    assert_metric_exists(recorder, "fs.inodes", &[]);
    assert_metric_exists(recorder, "fs.inode_kinds", &[("kind", "file")]);
    assert_metric_exists(recorder, "fs.inode_kinds", &[("kind", "directory")]);
    assert_metric_exists(recorder, "fuse.op_unimplemented", &[("op", "getxattr")]);

    assert_metric_exists(recorder, "fuse.total_threads", &[]);
    assert_metric_exists(recorder, "fuse.idle_threads", &[]);
}

rusty_fork::rusty_fork_test! {
    #[test]
    fn test_fuse_write_metrics() {
        let recorder = setup_recorder();

        let filesystem_config = S3FilesystemConfig {
            allow_overwrite: true,
            ..Default::default()
        };
        let config = TestSessionConfig {
            filesystem_config,
            ..Default::default()
        };

        let test_session = mock_session::new("test_fuse_write_metrics", config);
        let path = test_session.mount_path().join("test.txt");

        // Test write
        let content = vec![b'a'; 1024];
        let mut file = File::create(&path).unwrap();
        file.write_all(&content).unwrap();
        file.sync_all().unwrap();

        // Write to multiple file handles and check all samples are recorded
        let path2 = test_session.mount_path().join("test2.txt");
        let mut file2 = File::create(&path2).unwrap();
        file2.write_all(&content).unwrap();
        file2.sync_all().unwrap();

        let path3 = test_session.mount_path().join("test3.txt");
        let mut file3 = File::create(&path3).unwrap();
        file3.write_all(&content).unwrap();
        file3.sync_all().unwrap();

        let write_handle = get_metric(&recorder, "fs.current_handles", &[("type", "write")]);
        assert!(write_handle.gauge() >= 3.0, "should have at least 3 write handles");

        for f in [file, file2, file3] {
            drop(f);
        }

        let write_io_size = get_histogram(&recorder, FUSE_IO_SIZE, &[(ATTR_FUSE_REQUEST, "write")]);
        assert_eq!(write_io_size.len(), 3, "should have 3 write operations");

        let write_latency = get_histogram(&recorder, FUSE_REQUEST_LATENCY, &[(ATTR_FUSE_REQUEST, "write")]);
        assert_eq!(write_latency.len(), 3, "should have 3 write operations");

        // List files
        let read_dir_iter = read_dir(test_session.mount_path()).unwrap();
        let dir_entries = read_dir_to_entry_names(read_dir_iter);
        assert_eq!(dir_entries, vec!["test.txt", "test2.txt", "test3.txt"]);

        let read_dir_latency = get_histogram(
            &recorder,
            FUSE_REQUEST_LATENCY,
            &[(ATTR_FUSE_REQUEST, "readdirplus")],
        );
        assert!(!read_dir_latency.is_empty(), "should have 1 readdirplus operation");
        assert!(recorder
                .get(FUSE_IO_SIZE, &[(ATTR_FUSE_REQUEST, "readdirplus")])
                .is_none(),
            "io size should not be recorded for non read/write operations"
        );

        assert_metric_exists(&recorder, "fuse.total_bytes", &[("type", "write")]);

        verify_common_metrics(&recorder);
    }

    #[test]
    fn test_fuse_read_metrics() {
        let recorder = setup_recorder();

        let filesystem_config = S3FilesystemConfig {
            allow_overwrite: true,
            ..Default::default()
        };
        let config = TestSessionConfig {
            filesystem_config,
            ..Default::default()
        };

        let test_session = mock_session::new("test_fuse_read_metrics", config);
        let path = test_session.mount_path().join("test.txt");

        // Create file first
        let content = vec![b'a'; 1024];
        let mut file = File::create(&path).unwrap();
        file.write_all(&content).unwrap();
        file.sync_all().unwrap();
        drop(file);

        let mut read_buf = vec![0; 1024];
        let mut read_file = File::open(&path).unwrap();
        let bytes_read = read_file.read(&mut read_buf).unwrap();
        read_file.sync_all().unwrap();
        assert_eq!(bytes_read, 1024);
        assert_eq!(read_buf, content);

        let read_handle = get_metric(&recorder, "fs.current_handles", &[("type", "read")]);
        assert_eq!(read_handle.gauge(), 1.0, "should have at least 1 read handle");

        drop(read_file);

        let read_io_size = get_histogram(&recorder, FUSE_IO_SIZE, &[(ATTR_FUSE_REQUEST, "read")]);
        assert!(read_io_size.contains(&1024.0));
        assert!(!read_io_size.is_empty(), "should have at least 1 io_size metric");

        let read_latency = get_histogram(&recorder, FUSE_REQUEST_LATENCY, &[(ATTR_FUSE_REQUEST, "read")]);
        assert!(!read_latency.is_empty(), "should have at least 1 read latency metric");

        assert_metric_exists(&recorder, "fuse.total_bytes", &[("type", "read")]);
        verify_common_metrics(&recorder);
    }

    #[test]
    fn test_fuse_error_metrics() {
        let recorder = setup_recorder();

        let test_session = mock_session::new("test_fuse_error_metrics", TestSessionConfig::default());

        // Try to read a non-existent file
        let non_existent = test_session.mount_path().join("does_not_exist.txt");
        assert!(File::open(&non_existent).is_err());

        let failure = recorder
            .get(FUSE_REQUEST_ERRORS, &[(ATTR_FUSE_REQUEST, "lookup")])
            .unwrap_or_else(|| panic!("failure metric for lookup should exist"));

        assert!(
            failure.counter() >= 1,
            "should have at least one failed lookup operation"
        );
    }

    #[test]
    fn test_random_access_resets_prefetch_state() {
        let recorder = setup_recorder();

        let test_session = mock_session::new("test_random_access_resets_prefetch_state", TestSessionConfig::default());
        let path = test_session.mount_path().join("large_file.txt");

        // Create a large file for random reading
        let content = vec![b'y'; 64 * 1024 * 1024];
        let mut file = File::create(&path).unwrap();
        file.write_all(&content).unwrap();
        file.sync_all().unwrap();
        drop(file);

        let mut file = File::open(&path).unwrap();
        let mut buffer = vec![0u8; 1024];

        for _ in 0..10 {
            file.read_exact(&mut buffer).unwrap();
        }

        let initial_reset_state = recorder
            .get(PREFETCH_RESET_STATE, &[])
            .map_or(0, |m| m.counter());

        // Jump around the file randomly to trigger out-of-order reads
        for offset in [2 * 1024 * 1024, 8 * 1024 * 1024, 0, 32 * 1024 * 1024] {
            file.seek(std::io::SeekFrom::Start(offset)).unwrap();
            file.read_exact(&mut buffer).unwrap();
        }

        drop(file);

        let final_reset_state = recorder
            .get(PREFETCH_RESET_STATE, &[])
            .map_or(0, |m| m.counter());

        assert!(
            final_reset_state > initial_reset_state,
            "Random access should increment reset_state metric"
        );
    }
}
