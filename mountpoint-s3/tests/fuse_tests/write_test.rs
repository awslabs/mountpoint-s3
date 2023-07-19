use std::fs::{metadata, read, read_dir, File};
use std::io::{ErrorKind, Read, Seek, Write};
use std::os::unix::prelude::OpenOptionsExt;
use std::path::Path;
use std::time::Duration;

use fuser::BackgroundSession;
use rand::{Rng, SeedableRng};
use rand_chacha::ChaCha20Rng;
use tempfile::TempDir;
use test_case::test_case;

use crate::fuse_tests::{read_dir_to_entry_names, TestClientBox, TestSessionConfig};

fn open_for_write(path: impl AsRef<Path>, append: bool) -> std::io::Result<File> {
    let mut options = File::options();
    if append {
        options.append(true);
    } else {
        options.write(true);
    }
    options.create(true).open(path)
}

fn sequential_write_test<F>(creator_fn: F, prefix: &str, append: bool)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const OBJECT_SIZE: usize = 50 * 1024;
    const WRITE_SIZE: usize = 1024;

    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    // Make sure there's an existing directory
    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let subdir = mount_point.path().join("dir");
    let path = mount_point.path().join("dir/new.txt");

    let mut f = open_for_write(&path, append).unwrap();

    // The file is visible with size 0 as soon as we open it for write
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), 0);

    // verify the new file is visible in readdir
    let read_dir_iter = read_dir(&subdir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["hello.txt", "new.txt"]);

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    let mut current_size = 0;
    for part in body.chunks(WRITE_SIZE) {
        f.write_all(part).unwrap();
        current_size += part.len() as u64;
        assert_eq!(f.metadata().unwrap().len(), current_size);
    }

    // We shouldn't be able to read from a file mid-write
    let err = f.read(&mut [0u8; 1]).expect_err("can't read file while writing");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    drop(f);

    // The kernel doesn't guarantee to flush the data as soon as the file is closed. Currently,
    // the file won't be visible on the file system until it's flushed to S3, and so trying to stat
    // the file will fail.
    // TODO we can remove this when we implement fsync, or change it when we make files visible
    // during writes
    std::thread::sleep(Duration::from_secs(5));

    // Now it's closed, we can stat or read it
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &body[..]);

    // Readdir should still work correctly
    let read_dir_iter = read_dir(&subdir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["hello.txt", "new.txt"]);

    // We shouldn't be allowed to open the file for writing again
    let err = open_for_write(&path, append).expect_err("can't write existing file");
    assert_eq!(err.kind(), ErrorKind::PermissionDenied);

    // Also test writing with O_RDWR flag
    let path = mount_point.path().join("dir/new_rdwr.txt");

    let mut f = File::options().read(true).write(true).create(true).open(&path).unwrap();

    // The file is visible with size 0 as soon as we open it for write
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), 0);

    // verify the new file is visible in readdir
    let read_dir_iter = read_dir(&subdir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["hello.txt", "new.txt", "new_rdwr.txt"]);

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    for part in body.chunks(WRITE_SIZE) {
        f.write_all(part).unwrap();
    }

    // We shouldn't be able to read from a file mid-write
    f.seek(std::io::SeekFrom::End(-1)).unwrap();
    let err = f.read(&mut [0u8; 1]).expect_err("can't read file while writing");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    drop(f);

    // The kernel doesn't guarantee to flush the data as soon as the file is closed. Currently,
    // the file won't be visible on the file system until it's flushed to S3, and so trying to stat
    // the file will fail.
    // TODO we can remove this when we implement fsync, or change it when we make files visible
    // during writes
    std::thread::sleep(Duration::from_secs(5));

    // Now it's closed, we can stat or read it
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &body[..]);

    // Readdir should still work correctly
    let read_dir_iter = read_dir(&subdir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["hello.txt", "new.txt", "new_rdwr.txt"]);

    // We shouldn't be allowed to open the file for writing again
    let err = open_for_write(&path, append).expect_err("can't write existing file");
    assert_eq!(err.kind(), ErrorKind::PermissionDenied);
}

#[cfg(feature = "s3_tests")]
#[test_case(true; "append")]
#[test_case(false; "no append")]
fn sequential_write_test_s3(append: bool) {
    sequential_write_test(crate::fuse_tests::s3_session::new, "sequential_write_test", append);
}

#[test_case("", true; "no prefix append")]
#[test_case("", false; "no prefix no append")]
#[test_case("sequential_write_test", true; "prefix append")]
#[test_case("sequential_write_test", false; "prefix no append")]
fn sequential_write_test_mock(prefix: &str, append: bool) {
    sequential_write_test(crate::fuse_tests::mock_session::new, prefix, append);
}

fn write_errors_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let path = mount_point.path().join("dir/hello.txt");

    // Existing files should not be writable even in O_APPEND
    let err = open_for_write(&path, false).expect_err("can't write existing file");
    assert_eq!(err.kind(), ErrorKind::PermissionDenied);
    let err = open_for_write(&path, true).expect_err("can't write existing file");
    assert_eq!(err.kind(), ErrorKind::PermissionDenied);

    // New files can't be opened with O_SYNC
    let err = File::options()
        .write(true)
        .create(true)
        .custom_flags(libc::O_SYNC)
        .open(&path)
        .expect_err("O_SYNC should fail");
    assert_eq!(err.kind(), ErrorKind::InvalidInput);

    // We can't write to a file opened in O_RDONLY
    let mut file = File::options().read(true).open(&path).unwrap();
    let err = file
        .write(b"hello world")
        .expect_err("writing to O_RDONLY file should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    // Existing files can be opened O_RDWR but only reading should work on them
    let mut file = File::options().read(true).write(true).create(true).open(&path).unwrap();
    let err = file
        .write(b"hello world")
        .expect_err("write to an existing file should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));
    // However, read should work
    assert!(file.read(&mut [0u8; 1]).is_ok());
}

#[cfg(feature = "s3_tests")]
#[test]
fn write_errors_test_s3() {
    write_errors_test(crate::fuse_tests::s3_session::new, "write_errors_test");
}

#[test_case(""; "no prefix append")]
#[test_case("sequential_write_test"; "prefix")]
fn write_errors_test_mock(prefix: &str) {
    write_errors_test(crate::fuse_tests::mock_session::new, prefix);
}

fn sequential_write_streaming_test<F>(creator_fn: F, object_size: usize, write_chunk_size: usize)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const KEY: &str = "dir/new.txt";

    let (mount_point, _session, mut test_client) = creator_fn("sequential_write_streaming_test", Default::default());

    // Make sure there's an existing directory
    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let path = mount_point.path().join(KEY);

    let mut f = open_for_write(&path, false).unwrap();

    // The file is visible with size 0 as soon as we open it for write
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), 0);

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + object_size as u64);
    let mut body = vec![0u8; object_size];
    rng.fill(&mut body[..]);

    let mut current_size = 0;
    for part in body.chunks(write_chunk_size) {
        f.write_all(part).unwrap();
        current_size += part.len() as u64;
        assert_eq!(f.metadata().unwrap().len(), current_size);
    }

    // We shouldn't be able to read from a file mid-write
    let err = f.read(&mut [0u8; 1]).expect_err("can't read file while writing");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    if object_size > 0 {
        // The upload starts after the first write at the latest
        assert!(test_client.is_upload_in_progress(KEY).unwrap());
    }

    drop(f);

    // The kernel doesn't guarantee to flush the data as soon as the file is closed. Currently,
    // the file won't be visible on the file system until it's flushed to S3, and so trying to stat
    // the file will fail.
    // TODO we can remove this when we implement fsync, or change it when we make files visible
    // during writes
    std::thread::sleep(Duration::from_secs(5));

    // Now it's closed, we can stat or read it
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &body[..]);
}

#[cfg(feature = "s3_tests")]
#[test_case(0, 1)]
#[test_case(1, 1)]
#[test_case(32, 32)]
#[test_case(32 * 1024 * 1024, 1024 * 1024 + 1)]
fn sequential_write_streaming_test_s3(object_size: usize, write_chunk_size: usize) {
    sequential_write_streaming_test(crate::fuse_tests::s3_session::new, object_size, write_chunk_size);
}

#[test_case(0, 1)]
#[test_case(1, 1)]
#[test_case(32, 32)]
#[test_case(32 * 1024 * 1024, 1024 * 1024 + 1)]
fn sequential_write_streaming_test_mock(object_size: usize, write_chunk_size: usize) {
    sequential_write_streaming_test(crate::fuse_tests::mock_session::new, object_size, write_chunk_size);
}

fn fsync_test<F>(creator_fn: F)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const OBJECT_SIZE: usize = 32;
    const KEY: &str = "new.txt";

    let (mount_point, _session, test_client) = creator_fn("fsync_test", Default::default());

    let path = mount_point.path().join(KEY);

    let mut f = open_for_write(&path, false).unwrap();

    // The file is visible with size 0 as soon as we open it for write
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), 0);

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    f.write_all(&body).unwrap();

    assert!(test_client.is_upload_in_progress(KEY).unwrap());

    f.sync_all().unwrap();

    assert!(!test_client.is_upload_in_progress(KEY).unwrap());

    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    f.write_all(&body).expect_err("write after sync should fail");

    drop(f);

    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &body[..]);
}

#[cfg(feature = "s3_tests")]
#[test]
fn fsync_test_s3() {
    fsync_test(crate::fuse_tests::s3_session::new);
}

#[test]
fn fsync_test_mock() {
    fsync_test(crate::fuse_tests::mock_session::new);
}

fn write_too_big_test<F>(creator_fn: F, write_size: usize)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const KEY: &str = "new.txt";
    const PART_SIZE: usize = 64;
    const MAX_S3_MULTIPART_UPLOAD_PARTS: usize = 10000;

    let config = TestSessionConfig {
        part_size: PART_SIZE,
        ..Default::default()
    };
    let (mount_point, _session, _test_client) = creator_fn("write_too_big_test", config);

    let path = mount_point.path().join(KEY);

    let mut f = open_for_write(&path, false).unwrap();

    let successful_writes = PART_SIZE * MAX_S3_MULTIPART_UPLOAD_PARTS / write_size;
    let data = vec![0xaa; write_size];
    let mut current_size = 0;
    for _ in 0..successful_writes {
        f.write_all(&data).expect("object should fit");
        current_size += data.len() as u64;
        assert_eq!(f.metadata().unwrap().len(), current_size);
    }

    let err = f.write_all(&data).expect_err("object should be too big");
    assert_eq!(err.raw_os_error(), Some(libc::EFBIG));

    let err = f
        .sync_all()
        .expect_err("upload should not succeed after growing too big");
    assert_eq!(err.raw_os_error(), Some(libc::ENOSPC));

    drop(f);

    // Wait a bit for `release` to be sure
    std::thread::sleep(Duration::from_secs(5));

    let err = metadata(&path).expect_err("upload shouldn't have succeeded");
    assert_eq!(err.raw_os_error(), Some(libc::ENOENT));
}

// We intentionally don't run this test against S3 because the part size minimum is 5MiB there, and
// so we'd have to upload 5MiB * 10000 = 50GiB to test the failure case.
#[test_case(8000; "divisible by max size")]
#[test_case(7000; "not divisible by max size")]
#[test_case(640001; "single write too big")]
fn write_too_big_test_mock(write_size: usize) {
    write_too_big_test(crate::fuse_tests::mock_session::new, write_size);
}

fn out_of_order_write_test<F>(creator_fn: F, offset: i64)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const OBJECT_SIZE: usize = 32;
    const KEY: &str = "new.txt";

    let (mount_point, _session, _test_client) = creator_fn("out_of_order_write_test", Default::default());

    let path = mount_point.path().join(KEY);

    let mut f = open_for_write(&path, false).unwrap();

    // The file is visible with size 0 as soon as we open it for write
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), 0);

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    f.write_all(&body).unwrap();

    // Attempt to write out-of-order.
    f.seek(std::io::SeekFrom::Current(offset)).unwrap();
    let err = f.write_all(&body).expect_err("out of order write should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EINVAL));

    // Seek where we left off and attempt to write.
    f.seek(std::io::SeekFrom::Start((OBJECT_SIZE) as u64)).unwrap();
    let err = f.write_all(&body).expect_err("writes after an error should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EINVAL));

    drop(f);

    // The kernel doesn't guarantee to flush the data as soon as the file is closed. Currently,
    // the file won't be visible on the file system until it's flushed to S3, and so trying to stat
    // the file will fail.
    // TODO we can remove this when we implement fsync, or change it when we make files visible
    // during writes
    std::thread::sleep(Duration::from_secs(5));

    let err = metadata(&path).expect_err("upload shouldn't have succeeded");
    assert_eq!(err.raw_os_error(), Some(libc::ENOENT));
}

#[cfg(feature = "s3_tests")]
#[test_case(-1; "earlier offset")]
#[test_case(1; "later offset")]
fn out_of_order_write_test_s3(offset: i64) {
    out_of_order_write_test(crate::fuse_tests::s3_session::new, offset);
}

#[test_case(-1; "earlier offset")]
#[test_case(1; "later offset")]
fn out_of_order_write_test_mock(offset: i64) {
    out_of_order_write_test(crate::fuse_tests::mock_session::new, offset);
}
