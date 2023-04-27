use fuser::BackgroundSession;
use mountpoint_s3::prefetch::PrefetcherConfig;
use mountpoint_s3::S3FilesystemConfig;
use std::fs::OpenOptions;
use std::io::Read;
use std::io::Seek;
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::PutObjectFn;

// test for checking either prefetching fails or read original object when object is mutated during read.
fn prefetch_test_etag<F>(creator_fn: F, prefix: &str, request_size: usize, read_size: usize)
where
    F: FnOnce(&str, S3FilesystemConfig) -> (TempDir, BackgroundSession, PutObjectFn),
{
    const OBJECT_SIZE: usize = 1024 * 1024;
    const SEEK_POS: u64 = 200 * 1024;

    let prefetcher_config = PrefetcherConfig {
        first_request_size: request_size,
        ..Default::default()
    };

    let test_config = S3FilesystemConfig {
        prefetcher_config,
        ..Default::default()
    };

    let (mount_point, _session, mut put_object_fn) = creator_fn(prefix, test_config);
    let mut read_buf = vec![0u8; OBJECT_SIZE];

    // Make sure there's an existing directory
    put_object_fn("dir/hello.txt", &mut read_buf).unwrap();

    let mut path = mount_point.path().join("dir/hello.txt");

    // Opening the file to read and write
    let mut f = OpenOptions::new()
        .read(true)
        .open(path)
        .expect("should be able to open the file");

    let mut buf = vec![0u8; read_size];
    f.read_exact(&mut buf).expect("Should be able to read file to buf");

    read_buf = vec![255u8; OBJECT_SIZE];
    put_object_fn("dir/hello.txt", &mut read_buf).unwrap();

    // In order to read from a position where prefetching next block is necessary
    f.seek(std::io::SeekFrom::Start(SEEK_POS))
        .expect("Seek position should be less than object size");
    let mut dest_buf = vec![0u8; read_size];
    match f.read_exact(&mut dest_buf) {
        Ok(()) => assert_eq!(buf, dest_buf),
        Err(err) => assert_eq!(err.raw_os_error(), Some(libc::EIO)),
    };

    drop(f);

    // File wont be mutated during read now to check if prefetcher reads correctly otherwise.
    path = mount_point.path().join("dir/hello.txt");
    let mut f = OpenOptions::new()
        .read(true)
        .open(path)
        .expect("should be able to open the file");

    f.read_exact(&mut dest_buf).expect("Should be able to read file to buf");
    // Now 'dest_buf' should have new data.
    assert_eq!(dest_buf, vec![255u8; read_size]);
    
    drop(f);
}

// Prefetching of next request occurs when more than half of the current request is being read.
// In the cases below, when the read size is 1 byte, it will only prefetch the first request.
// So, when the seek positon (200 KB) is greater than first request size, it will try to prefetch that request and fail (due to E-Tag change).
// For other cases, mutation of object wont affect. It should read the original bytes as they were already prefetched.
//
// When the read size is 200 KB, it will always prefetch the request at the seek position.
// Hence, it will read the original object and writing to the object should not affect.
#[cfg(feature = "s3_tests")]
#[test_case(256 * 1024, 1; "default first request size reading 1 byte")]
#[test_case(64 * 1024, 1; "first request size smaller than seek position reading 1 byte")]
#[test_case(512 * 1024, 1; "first request size greater than seek position reading 1 byte")]
#[test_case(256 * 1024, 200 * 1024; "default first request size reading till seek")]
fn prefetch_test_etag_mock(request_size: usize, read_size: usize) {
    // prefetch_test_etag(
    //     crate::fuse_tests::mock_session::new,
    //     "prefetch_etag_test",
    //     request_size,
    //     read_size,
    // );

    prefetch_test_etag(
        crate::fuse_tests::s3_session::new,
        "prefetch_etag_test",
        request_size,
        read_size,
    );
}
