use crate::common::fuse::{TestSessionConfig, mock_session};
use crate::common::test_recorder::{Metric, TestRecorder};
use mountpoint_s3_fs::S3FilesystemConfig;
use mountpoint_s3_fs::metrics::defs::{
    ATTR_FUSE_REQUEST, FUSE_IO_SIZE, FUSE_REQUEST_ERRORS, FUSE_REQUEST_LATENCY, PREFETCH_RESET_STATE,
};
use rusty_fork::rusty_fork_test;
use std::fs::File;
use std::io::{Read, Seek, Write};
use std::thread::sleep;
use std::time::Duration;
use tempfile;


fn setup_recorder() -> TestRecorder {
    let recorder = TestRecorder::default();
    metrics::set_global_recorder(recorder.clone()).expect("Failed to set global recorder");
    recorder
}

macro_rules! get_metric {
    ($recorder:expr, $name:expr, $labels:expr) => {{
        match $recorder.get($name, $labels) {
            Some(metric) => metric,
            None => {
                eprintln!("Available metrics:");
                $recorder.print_metrics();
                panic!("Expected metric '{}' with labels {:?} to exist", $name, $labels)
            }
        }
    }};
}

macro_rules! get_histogram {
    ($recorder:expr, $name:expr, $labels:expr) => {{
        let metric = get_metric!($recorder, $name, $labels);
        match metric.as_ref() {
            Metric::Histogram(_) => metric.histogram(),
            _ => panic!("Metric '{}' is not a histogram", $name),
        }
    }};
}

fn assert_metric_exists(recorder: &TestRecorder, name: &str, labels: &[(&str, &str)]) {
    let _ = get_metric!(recorder, name, labels);
}

fn verify_common_metrics(recorder: &TestRecorder) {
    for request in ["open", "getattr"] {
        assert_metric_exists(recorder, FUSE_REQUEST_LATENCY, &[(ATTR_FUSE_REQUEST, request)]);
    }
    assert_metric_exists(recorder, "fs.inodes", &[]);
    assert_metric_exists(recorder, "fs.inode_kinds", &[("kind", "file")]);
    assert_metric_exists(recorder, "fs.inode_kinds", &[("kind", "directory")]);
    assert_metric_exists(recorder, "fuse.total_threads", &[]);
    assert_metric_exists(recorder, "fuse.idle_threads", &[]);
}

rusty_fork_test! {
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

        let write_handle = get_metric!(&recorder, "fs.current_handles", &[("type", "write")]);
        assert!(write_handle.gauge() >= 3.0, "should have at least 3 write handles");

        for f in [file, file2, file3] {
            drop(f);
        }

        let write_io_size = get_histogram!(&recorder, FUSE_IO_SIZE, &[(ATTR_FUSE_REQUEST, "write")]);
        assert_eq!(write_io_size.len(), 3, "should have 3 write operations");

        let write_latency = get_histogram!(&recorder, FUSE_REQUEST_LATENCY, &[(ATTR_FUSE_REQUEST, "write")]);
        assert_eq!(write_latency.len(), 3, "should have 3 write operations");

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

        let content = vec![b'a'; 1024];
        test_session.client().put_object("test.txt", &content).unwrap();

        let path = test_session.mount_path().join("test.txt");

        let mut read_buf = vec![0; 1024];
        let mut read_file = File::open(&path).unwrap();
        let bytes_read = read_file.read(&mut read_buf).unwrap();
        assert_eq!(bytes_read, 1024);
        assert_eq!(read_buf, content);

        // FIXME: Revisit this if this is really needed.
        sleep(Duration::from_millis(100));

        let read_handle = get_metric!(&recorder, "fs.current_handles", &[("type", "read")]);
        assert_eq!(read_handle.gauge(), 1.0, "should have at least 1 read handle");

        drop(read_file);

        let read_io_size = get_histogram!(&recorder, FUSE_IO_SIZE, &[(ATTR_FUSE_REQUEST, "read")]);
        assert!(read_io_size.contains(&1024.0));
        assert!(!read_io_size.is_empty(), "should have at least 1 io_size metric");

        let read_latency = get_histogram!(&recorder, FUSE_REQUEST_LATENCY, &[(ATTR_FUSE_REQUEST, "read")]);
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

    #[test]
    fn test_cache_metrics() {
        let recorder = setup_recorder();

        let config = TestSessionConfig::default();
        
        let test_session = mock_session::new_with_cache(|block_size, pool| {
            use mountpoint_s3_fs::data_cache::{DiskDataCache, DiskDataCacheConfig};
            let cache_dir = tempfile::tempdir().unwrap();
            let cache_config = DiskDataCacheConfig {
                cache_directory: cache_dir.path().to_path_buf(),
                block_size,
                limit: Default::default(),
            };
            DiskDataCache::new(cache_config, pool)
        })("test_cache_metrics", config);

        let content = vec![b'x'; 2 * 1024 * 1024];
        test_session.client().put_object("cached_file.txt", &content).unwrap();

        let path = test_session.mount_path().join("cached_file.txt");

        // First read to populate cache
        let mut file = File::open(&path).unwrap();
        let mut read_buf = vec![0; content.len()];
        let bytes_read = file.read(&mut read_buf).unwrap();
        assert_eq!(bytes_read, content.len());
        drop(file);

        // Verify cache_update metrics after first read (should be ~2MB for 2 blocks)
        let cache_update = get_metric!(&recorder, "prefetch.cache_update", &[] as &[(&str, &str)]);
        assert_eq!(cache_update.counter(), content.len() as u64, "cache_update should equal file size");

        // Second read should hit cache
        let mut file = File::open(&path).unwrap();
        let mut read_buf = vec![0; content.len()];
        let bytes_read = file.read(&mut read_buf).unwrap();
        assert_eq!(bytes_read, content.len());
        drop(file);

        // Verify cache hit metrics
        let cache_hit = get_metric!(&recorder, "prefetch.cache_hit", &[] as &[(&str, &str)]);
        assert_eq!(cache_hit.counter(), content.len() as u64, "cache_hit should equal file size");
    }
}
