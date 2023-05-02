use fuser::BackgroundSession;
use mountpoint_s3::prefetch::PrefetcherConfig;
use mountpoint_s3::S3FilesystemConfig;
use std::fs::OpenOptions;
use std::io::Read;
use std::io::Seek;
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::TestClientBox;

/// test for checking either prefetching fails or read original object when object is mutated during read.
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

    let mut seek_pos: u64 = 0;
    let mut dest_buf = vec![0u8; read_size];

    // Reading the file untill we keep getting the prefetched data or we get an IO error where E-Tag did not match.
    loop {
        seek_pos = match f.seek(std::io::SeekFrom::Start(seek_pos + read_size as u64)) {
            Ok(pos) => pos,
            Err(..) => break,
        };

        match f.read_exact(&mut dest_buf) {
            // since all bytes are same, we can assert every slice will be equal.
            Ok(()) => assert_eq!(reader_buf, dest_buf),
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

// Prefetching of next request occurs when more than half of the current request is being read.
// In the cases below, first read (i.e. before we put new data in the object) will prefetch data for the requests where previous request
// more than half is read.
// Therefore, in case of request size being greater than buffer read size, only first reqeust will be prefetched.
// For the final case multiple requests will be prefetched in first read. But, thee read will eevntually fail
// when it do not get the right e-tag for new prefetch requests.
#[test_case(256 * 1024, 1024; "default first request size reading 1 KiB")]
#[test_case(64 * 1024, 1024; "first request size smaller than default reading 1 KiB")]
#[test_case(512 * 1024, 1024; "first request size greater than default reading 1 KiB")]
#[test_case(64 * 1024, 500 * 1024; "dfirst request size smaller than read size")]
fn prefetch_test_etag_mock(request_size: usize, read_size: usize) {
    prefetch_test_etag(
        crate::fuse_tests::mock_session::new,
        "prefetch_test_etag_mock",
        request_size,
        read_size,
    );
}

#[cfg(feature = "s3_tests")]
#[test_case(256 * 1024, 1024; "default first request size reading 1 KiB")]
#[test_case(64 * 1024, 1024; "first request size smaller than seek position reading 1 KiB")]
#[test_case(512 * 1024, 1024; "first request size greater than seek position reading 1 KiB")]
#[test_case(256 * 1024, 256 * 1024; "default first request size reading till seek")]
fn prefetch_test_etag_s3(request_size: usize, read_size: usize) {
    prefetch_test_etag(
        crate::fuse_tests::s3_session::new,
        "prefetch_test_etag_s3",
        request_size,
        read_size,
    );
}
