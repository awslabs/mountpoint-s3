use fuser::BackgroundSession;
use mountpoint_s3::prefetch::PrefetcherConfig;
use mountpoint_s3::S3FilesystemConfig;
use std::fs::{File, OpenOptions};
use std::io::Read;
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::TestClientBox;

fn read_test<F>(creator_fn: F, object_size: usize)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, TestClientBox),
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
    read_test(crate::fuse_tests::s3_session::new, object_size);
}

#[test_case(0; "empty file")]
#[test_case(1; "single-byte file")]
#[test_case(1024*1024; "1MiB file")]
fn read_test_mock(object_size: usize) {
    read_test(crate::fuse_tests::mock_session::new, object_size);
}

/// test for checking either prefetching fails or read original object when object is mutated during read.
/// Prefetching of next request occurs when more than half of the current request is being read.
/// So, when we read the first block, it prefetches the requests ti require to fulfill and the next request
/// depending on size of last request.
/// If object is mutated, E-Tag for the new prefetch request will change and hence the request will fail giving IO error.
fn prefetch_test_etag<F>(creator_fn: F, prefix: &str, request_size: usize, read_size: usize)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const OBJECT_SIZE: usize = 1024 * 1024;

    let prefetcher_config = PrefetcherConfig {
        first_request_size: request_size,
        ..Default::default()
    };

    let test_config = S3FilesystemConfig {
        prefetcher_config,
        ..Default::default()
    };

    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_config);
    let original_data_buf = vec![0u8; OBJECT_SIZE];

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
    let final_data_buf = vec![255u8; OBJECT_SIZE];
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
                assert_eq!(err.raw_os_error(), Some(libc::EIO));
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
fn prefetch_test_etag_mock(request_size: usize, read_size: usize) {
    prefetch_test_etag(
        crate::fuse_tests::mock_session::new,
        "prefetch_test_etag_mock",
        request_size,
        read_size,
    );
}

#[cfg(feature = "s3_tests")]
#[test_case(256 * 1024, 1024; "default first request size, much larger than first block read size")]
#[test_case(64 * 1024, 1024; "first request size smaller than default, much larger than first block read size")]
#[test_case(512 * 1024, 1024; "first request size greater than default,  much larger than first block read size")]
#[test_case(256 * 1024, 256 * 1024; "first request size smaller than first block read size")]
fn prefetch_test_etag_s3(request_size: usize, read_size: usize) {
    prefetch_test_etag(
        crate::fuse_tests::s3_session::new,
        "prefetch_test_etag_s3",
        request_size,
        read_size,
    );
}
