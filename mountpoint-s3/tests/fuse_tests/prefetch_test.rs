use fuser::BackgroundSession;
use mountpoint_s3::data_cache::InMemoryDataCache;
use std::fs::{File, OpenOptions};
use std::io::Read;
use tempfile::TempDir;
use test_case::test_case;

use crate::common::fuse::{self, TestClientBox, TestSessionConfig};

fn read_test<F>(creator_fn: F, object_size: usize)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, mut test_client) = creator_fn(Default::default(), Default::default());

    let file_name = "hello.bin";
    let object = vec![255u8; object_size];
    test_client.put_object(file_name, &object).unwrap();

    let file_path = mount_point.path().join(file_name);
    let buf = {
        let mut buf = Vec::new();
        let mut file = File::open(file_path).unwrap();
        file.read_to_end(&mut buf).unwrap();
        buf
    };

    assert_eq!(buf, object);
}

#[cfg(feature = "s3_tests")]
#[test_case(0; "empty file")]
#[test_case(1; "single-byte file")]
#[test_case(1024*1024; "1MiB file")]
fn read_test_s3(object_size: usize) {
    read_test(fuse::s3_session::new, object_size);
}

#[cfg(feature = "s3_tests")]
#[test_case(0; "empty file")]
#[test_case(1; "single-byte file")]
#[test_case(1024*1024; "1MiB file")]
fn read_test_s3_with_cache(object_size: usize) {
    read_test(
        fuse::s3_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
        object_size,
    );
}

#[test_case(0; "empty file")]
#[test_case(1; "single-byte file")]
#[test_case(1024*1024; "1MiB file")]
fn read_test_mock(object_size: usize) {
    read_test(fuse::mock_session::new, object_size);
}

#[test_case(0; "empty file")]
#[test_case(1; "single-byte file")]
#[test_case(1024*1024; "1MiB file")]
fn read_test_mock_with_cache(object_size: usize) {
    read_test(
        fuse::mock_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
        object_size,
    );
}

/// Test for checking either prefetching fails or read original object when object is mutated during read.
/// Prefetching of next read window occurs when more than half of the current window is being read.
/// When we read the first block, it prefetches the data with a window size enough to fulfill the request
/// then increase the window size when needed.
/// If object is mutated, reading a part from the next read window would fail from pre-condition (ETag) error.
fn prefetch_test_etag<F>(
    creator_fn: F,
    prefix: &str,
    part_size: usize,
    initial_read_window_size: usize,
    read_size: usize,
) where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    // Object needs to be larger than part size because the CRT returns data in chunks of part size,
    // we would not be able to see the failures if it's smaller.
    let object_size = part_size * 2;
    let (mount_point, _session, mut test_client) = creator_fn(
        prefix,
        TestSessionConfig {
            part_size,
            initial_read_window_size,
            ..Default::default()
        },
    );
    let original_data_buf = vec![0u8; object_size];

    test_client.put_object("dir/hello.txt", &original_data_buf).unwrap();

    let mut path = mount_point.path().join("dir/hello.txt");

    let mut f = OpenOptions::new()
        .read(true)
        .open(path)
        .expect("should be able to open the file");

    let mut reader_buf = vec![0u8; read_size];
    f.read_exact(&mut reader_buf)
        .expect("Should be able to read file to buf");

    // changed the value of data buf to distinguish it from previous data of the object.
    let final_data_buf = vec![255u8; object_size];
    test_client.put_object("dir/hello.txt", &final_data_buf).unwrap();
    let mut dest_buf = vec![0u8; read_size];

    // Reading the file until we keep getting the prefetched data or we get an IO error where E-Tag did not match.
    loop {
        match f.read(&mut dest_buf) {
            Ok(n) => {
                // Reached the end of file
                if n == 0 {
                    break;
                }
                // since all bytes are same, we can assert every slice will be equal.
                assert_eq!(reader_buf[0..n], dest_buf[0..n]);
            }
            Err(err) => {
                assert_eq!(err.raw_os_error(), Some(libc::ESTALE));
                break;
            }
        };
    }

    drop(f);

    // Since we are reopening the file, prefetching will start again. So, it will be able to read new data in the object.
    path = mount_point.path().join("dir/hello.txt");
    let mut f = OpenOptions::new()
        .read(true)
        .open(path)
        .expect("should be able to open the file");

    let mut new_dest_buf = Vec::new();

    f.read_to_end(&mut new_dest_buf)
        .expect("Should be able to read file to buf");
    // Now 'new_dest_buf' should have new data.
    assert_eq!(new_dest_buf, final_data_buf);

    drop(f);
}

#[test_case(256 * 1024, 1024; "default first request size, much larger than first block read size")]
#[test_case(64 * 1024, 1024; "first request size smaller than default, much larger than first block read size")]
#[test_case(512 * 1024, 1024; "first request size greater than default,  much larger than first block read size")]
#[test_case(64 * 1024, 500 * 1024; "first request size smaller than first block read size")]
fn prefetch_test_etag_mock(initial_read_window_size: usize, read_size: usize) {
    let part_size = 256 * 1024;
    prefetch_test_etag(
        fuse::mock_session::new,
        "prefetch_test_etag_mock",
        part_size,
        initial_read_window_size,
        read_size,
    );
}

#[test_case(256 * 1024, 1024; "default first request size, much larger than first block read size")]
#[test_case(64 * 1024, 1024; "first request size smaller than default, much larger than first block read size")]
#[test_case(512 * 1024, 1024; "first request size greater than default,  much larger than first block read size")]
#[test_case(64 * 1024, 500 * 1024; "first request size smaller than first block read size")]
fn prefetch_test_etag_mock_with_cache(initial_read_window_size: usize, read_size: usize) {
    let part_size = 256 * 1024;
    prefetch_test_etag(
        fuse::mock_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
        "prefetch_test_etag_mock",
        part_size,
        initial_read_window_size,
        read_size,
    );
}

#[cfg(feature = "s3_tests")]
#[test_case(256 * 1024, 1024; "default first request size, much larger than first block read size")]
#[test_case(64 * 1024, 1024; "first request size smaller than default, much larger than first block read size")]
#[test_case(512 * 1024, 1024; "first request size greater than default, much larger than first block read size")]
#[test_case(256 * 1024, 256 * 1024; "first request size smaller than first block read size")]
fn prefetch_test_etag_s3(initial_read_window_size: usize, read_size: usize) {
    let part_size = 8 * 1024 * 1024;
    prefetch_test_etag(
        fuse::s3_session::new,
        "prefetch_test_etag_s3",
        part_size,
        initial_read_window_size,
        read_size,
    );
}

#[cfg(feature = "s3_tests")]
#[test_case(256 * 1024, 1024; "default first request size, much larger than first block read size")]
#[test_case(64 * 1024, 1024; "first request size smaller than default, much larger than first block read size")]
#[test_case(512 * 1024, 1024; "first request size greater than default, much larger than first block read size")]
#[test_case(256 * 1024, 256 * 1024; "first request size smaller than first block read size")]
fn prefetch_test_etag_s3_with_cache(initial_read_window_size: usize, read_size: usize) {
    let part_size = 8 * 1024 * 1024;
    prefetch_test_etag(
        fuse::s3_session::new_with_cache(InMemoryDataCache::new(1024 * 1024)),
        "prefetch_test_etag_s3",
        part_size,
        initial_read_window_size,
        read_size,
    );
}
