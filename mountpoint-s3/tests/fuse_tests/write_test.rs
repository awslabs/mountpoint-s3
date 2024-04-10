use std::fs::{metadata, read, read_dir, File};
use std::io::{ErrorKind, Read, Seek, Write};
use std::os::unix::prelude::OpenOptionsExt;
use std::path::Path;
use std::process::Command;
use std::thread;

use fuser::BackgroundSession;
use rand::{Rng, SeedableRng};
use rand_chacha::ChaCha20Rng;
use tempfile::TempDir;
use test_case::test_case;

use mountpoint_s3::S3FilesystemConfig;
#[cfg(all(feature = "s3_tests", not(feature = "s3express_tests")))]
use mountpoint_s3::ServerSideEncryption;

use crate::common::fuse::{self, read_dir_to_entry_names, TestClientBox, TestSessionConfig};
#[cfg(all(feature = "s3_tests", not(feature = "s3express_tests")))]
use crate::common::s3::{get_scoped_down_credentials, get_test_kms_key_id, tokio_block_on};

fn open_for_write(path: impl AsRef<Path>, append: bool, write_only: bool) -> std::io::Result<File> {
    let mut options = File::options();
    if !write_only {
        options.read(true);
    }

    if append {
        options.append(true);
    } else {
        options.write(true);
    }
    options.create(true).open(path)
}

fn sequential_write_test<F>(creator_fn: F, prefix: &str, append: bool, write_only: bool)
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

    let mut f = open_for_write(&path, append, write_only).unwrap();

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
    f.seek(std::io::SeekFrom::End(-1)).unwrap();
    let err = f.read(&mut [0u8; 1]).expect_err("can't read file while writing");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    f.sync_all().unwrap();
    drop(f);

    // Now it's closed, we can stat or read it
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &body[..]);

    // Readdir should still work correctly
    let read_dir_iter = read_dir(&subdir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["hello.txt", "new.txt"]);
}

#[cfg(feature = "s3_tests")]
#[test_case(true, true; "append write only")]
#[test_case(true, false; "append readwrite")]
#[test_case(false, true; "no append write only")]
#[test_case(false, false; "no append readwrite")]
fn sequential_write_test_s3(append: bool, write_only: bool) {
    sequential_write_test(fuse::s3_session::new, "sequential_write_test", append, write_only);
}

#[test_case("", true, true; "no prefix append write only")]
#[test_case("", true, false; "no prefix append readwrite")]
#[test_case("", false, true; "no prefix no append write only")]
#[test_case("", false, false; "no prefix no append readwrite")]
#[test_case("sequential_write_test", true, true; "prefix append write only")]
#[test_case("sequential_write_test", true, false; "prefix append readwrite")]
#[test_case("sequential_write_test", false, true; "prefix no append write only")]
#[test_case("sequential_write_test", false, false; "prefix no append readwrite")]
fn sequential_write_test_mock(prefix: &str, append: bool, write_only: bool) {
    sequential_write_test(fuse::mock_session::new, prefix, append, write_only);
}

fn write_errors_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let (mount_point, _session, mut test_client) = creator_fn(prefix, Default::default());

    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let path = mount_point.path().join("dir/hello.txt");

    // Existing files should not be writable even in O_APPEND
    let err = open_for_write(&path, true, true).expect_err("can't append existing file");
    assert_eq!(err.kind(), ErrorKind::InvalidInput);
    let err = open_for_write(&path, false, true).expect_err("can't open existing file for write");
    assert_eq!(err.kind(), ErrorKind::PermissionDenied);

    // New files can't be opened with O_SYNC
    let err = File::options()
        .write(true)
        .create(true)
        .custom_flags(libc::O_SYNC)
        .open(&path)
        .expect_err("O_SYNC should fail");
    assert_eq!(err.kind(), ErrorKind::InvalidInput);

    // Existing files can't be opened with O_APPEND
    let err = File::options()
        .write(true)
        .create(true)
        .custom_flags(libc::O_APPEND)
        .open(&path)
        .expect_err("O_APPEND should fail");
    assert_eq!(err.kind(), ErrorKind::InvalidInput);

    // We can't write to a file opened in O_RDONLY
    let mut file = File::options().read(true).open(&path).unwrap();
    let err = file
        .write(b"hello world")
        .expect_err("writing to O_RDONLY file should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    // For default config, existing files can be opened O_RDWR but only reading should work on them
    let mut file = File::options()
        .read(true)
        .write(true)
        .create(true)
        .truncate(false)
        .open(&path)
        .unwrap();
    assert!(file.read(&mut [0u8; 1]).is_ok());
    let err = file
        .write(b"hello world")
        .expect_err("write to an existing file should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    // For default config, existing files cannot be opened with O_TRUNC
    let err = File::options()
        .read(true)
        .write(true)
        .truncate(true)
        .open(&path)
        .expect_err("existing file cannot be opened with O_TRUNC");
    assert_eq!(err.raw_os_error(), Some(libc::EPERM));
}

#[cfg(feature = "s3_tests")]
#[test]
fn write_errors_test_s3() {
    write_errors_test(fuse::s3_session::new, "write_errors_test");
}

#[test_case(""; "no prefix append")]
#[test_case("sequential_write_test"; "prefix")]
fn write_errors_test_mock(prefix: &str) {
    write_errors_test(fuse::mock_session::new, prefix);
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

    let mut f = open_for_write(&path, false, true).unwrap();

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
        let status = test_client
            .is_upload_in_progress(KEY)
            .expect("the upload should be in-progress");
        assert!(status);
    }

    f.sync_all().unwrap();
    drop(f);

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
    sequential_write_streaming_test(fuse::s3_session::new, object_size, write_chunk_size);
}

#[test_case(0, 1)]
#[test_case(1, 1)]
#[test_case(32, 32)]
#[test_case(32 * 1024 * 1024, 1024 * 1024 + 1)]
fn sequential_write_streaming_test_mock(object_size: usize, write_chunk_size: usize) {
    sequential_write_streaming_test(fuse::mock_session::new, object_size, write_chunk_size);
}

fn fsync_test<F>(creator_fn: F, write_only: bool)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const OBJECT_SIZE: usize = 32;
    const KEY: &str = "new.txt";

    let (mount_point, _session, test_client) = creator_fn("fsync_test", Default::default());

    let path = mount_point.path().join(KEY);

    let mut f = open_for_write(&path, false, write_only).unwrap();

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
#[test_case(true; "write only")]
#[test_case(false; "readwrite")]
fn fsync_test_s3(write_only: bool) {
    fsync_test(fuse::s3_session::new, write_only);
}

#[test_case(true; "write only")]
#[test_case(false; "readwrite")]
fn fsync_test_mock(write_only: bool) {
    fsync_test(fuse::mock_session::new, write_only);
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

    let mut f = open_for_write(&path, false, true).unwrap();

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

    let err = metadata(&path).expect_err("upload shouldn't have succeeded");
    assert_eq!(err.raw_os_error(), Some(libc::ENOENT));
}

// We intentionally don't run this test against S3 because the part size minimum is 5MiB there, and
// so we'd have to upload 5MiB * 10000 = 50GiB to test the failure case.
#[test_case(8000; "divisible by max size")]
#[test_case(7000; "not divisible by max size")]
#[test_case(640001; "single write too big")]
fn write_too_big_test_mock(write_size: usize) {
    write_too_big_test(fuse::mock_session::new, write_size);
}

fn out_of_order_write_test<F>(creator_fn: F, offset: i64)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const OBJECT_SIZE: usize = 32;
    const KEY: &str = "new.txt";

    let (mount_point, _session, _test_client) = creator_fn("out_of_order_write_test", Default::default());

    let path = mount_point.path().join(KEY);

    let mut f = open_for_write(&path, false, true).unwrap();

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

    let err = metadata(&path).expect_err("upload shouldn't have succeeded");
    assert_eq!(err.raw_os_error(), Some(libc::ENOENT));
}

#[cfg(feature = "s3_tests")]
#[test_case(-1; "earlier offset")]
#[test_case(1; "later offset")]
fn out_of_order_write_test_s3(offset: i64) {
    out_of_order_write_test(fuse::s3_session::new, offset);
}

#[test_case(-1; "earlier offset")]
#[test_case(1; "later offset")]
fn out_of_order_write_test_mock(offset: i64) {
    out_of_order_write_test(fuse::mock_session::new, offset);
}

#[cfg(not(feature = "s3express_tests"))]
fn write_with_storage_class_test<F>(creator_fn: F, storage_class: Option<&str>)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const KEY: &str = "new.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            storage_class: storage_class.map(String::from),
            ..Default::default()
        },
        ..Default::default()
    };
    let (mount_point, _session, test_client) = creator_fn("write_with_storage_class_test", config);

    let path = mount_point.path().join(KEY);

    write_file(path).unwrap();

    assert_eq!(
        storage_class.map(String::from),
        test_client.get_object_storage_class(KEY).unwrap()
    );
}

#[cfg(feature = "s3_tests")]
// S3 Express One Zone is a distinct storage class and can't be overridden
#[cfg(not(feature = "s3express_tests"))]
#[test_case(Some("INTELLIGENT_TIERING"))]
#[test_case(Some("GLACIER"))]
fn write_with_storage_class_test_s3(storage_class: Option<&str>) {
    write_with_storage_class_test(fuse::s3_session::new, storage_class);
}

#[cfg(not(feature = "s3express_tests"))]
// S3 Express One Zone is a distinct storage class and can't be overridden
#[test_case(Some("INTELLIGENT_TIERING"))]
#[test_case(Some("GLACIER"))]
fn write_with_storage_class_test_s3_mock(storage_class: Option<&str>) {
    write_with_storage_class_test(fuse::mock_session::new, storage_class);
}

#[cfg_attr(not(feature = "s3_tests"), allow(unused))] // Mock client doesn't validate storage classes
fn write_with_invalid_storage_class_test<F>(creator_fn: F, storage_class: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const KEY: &str = "new.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            storage_class: Some(storage_class.to_owned()),
            ..Default::default()
        },
        ..Default::default()
    };
    let (mount_point, _session, _test_client) = creator_fn("write_with_storage_class_test", config);

    let path = mount_point.path().join(KEY);
    write_file(path).expect_err("write with invalid storage class should fail");
}

fn write_file(path: impl AsRef<Path>) -> std::io::Result<()> {
    let mut f = open_for_write(&path, false, true)?;
    let data = [0xaa; 16];
    f.write_all(&data)?;
    f.sync_all()?;
    Ok(())
}

#[cfg(feature = "s3_tests")]
#[test_case("INVALID_CLASS")]
fn write_with_invalid_storage_class_test_s3(storage_class: &str) {
    write_with_invalid_storage_class_test(fuse::s3_session::new, storage_class);
}

fn flush_test<F>(creator_fn: F, append: bool)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const OBJECT_SIZE: usize = 50 * 1024;
    const WRITE_SIZE: usize = 1024;
    const KEY: &str = "new.txt";

    let (mount_point, _session, test_client) = creator_fn("flush_test", Default::default());

    let path = mount_point.path().join(KEY);

    let mut f = open_for_write(&path, append, true).unwrap();

    let mut rng = ChaCha20Rng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    for part in body.chunks(WRITE_SIZE) {
        f.write_all(part).unwrap();
    }

    assert!(test_client.is_upload_in_progress(KEY).unwrap());

    // Close the file. Will trigger a call to flush.
    drop(f);

    assert!(!test_client.is_upload_in_progress(KEY).unwrap());

    // Now it's closed, we can stat or read it
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &body[..]);
}

#[cfg(feature = "s3_tests")]
#[test_case(true; "append")]
#[test_case(false; "no append")]
fn flush_test_s3(append: bool) {
    flush_test(fuse::s3_session::new, append);
}

#[test_case(true; "append")]
#[test_case(false; "no append")]
fn flush_test_mock(append: bool) {
    flush_test(fuse::mock_session::new, append);
}

fn touch_test<F>(creator_fn: F)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const KEY: &str = "new.txt";

    let (mount_point, _session, test_client) = creator_fn("touch_test", Default::default());

    let path = mount_point.path().join(KEY);

    let exit_status = Command::new("touch")
        .arg(&path)
        .status()
        .expect("Unable to spawn touch");
    assert!(exit_status.success());

    // Wait until the upload completes.
    const MAX_WAIT_DURATION: std::time::Duration = std::time::Duration::from_secs(10);
    let st = std::time::Instant::now();
    loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for result timeout")
        }
        if !test_client.is_upload_in_progress(KEY).unwrap() && test_client.contains_key(KEY).unwrap() {
            break;
        }
        std::thread::sleep(std::time::Duration::from_millis(100));
    }

    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), 0);
}

#[cfg(feature = "s3_tests")]
#[test]
fn touch_test_s3() {
    touch_test(fuse::s3_session::new);
}

#[test]
fn touch_test_mock() {
    touch_test(fuse::mock_session::new);
}

fn dd_test<F>(creator_fn: F)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    const KEY: &str = "new.txt";
    const SIZE: u64 = 128;

    let (mount_point, _session, test_client) = creator_fn("dd_test", Default::default());

    let path = mount_point.path().join(KEY);

    let exit_status = Command::new("dd")
        .arg("if=/dev/random")
        .arg(format!("of={}", path.to_str().unwrap()))
        .arg(format!("bs={}", SIZE))
        .arg("count=1")
        .status()
        .expect("Unable to spawn dd");
    assert!(exit_status.success());

    assert!(!test_client.is_upload_in_progress(KEY).unwrap());
    assert!(test_client.contains_key(KEY).unwrap());

    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), SIZE);
}

#[cfg(feature = "s3_tests")]
#[test]
fn dd_test_s3() {
    dd_test(fuse::s3_session::new);
}

#[test]
fn dd_test_mock() {
    dd_test(fuse::mock_session::new);
}

#[test]
fn spawn_test() {
    const KEY: &str = "new.txt";
    let (mount_point, _session, _test_client) = fuse::mock_session::new("spawn_test", Default::default());

    let path = mount_point.path().join(KEY);
    let mut f = open_for_write(&path, false, true).unwrap();

    let data = vec![0xaa; 32];
    f.write_all(&data).unwrap();

    // Spawn another process between writes to
    // an open file.
    _ = Command::new("echo").status().expect("Unable to spawn echo");

    f.write_all(&data).unwrap();
    drop(f);

    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), (data.len() * 2) as u64);
}

#[test]
fn multi_thread_test() {
    const KEY: &str = "new.txt";
    let (mount_point, _session, test_client) = fuse::mock_session::new("spawn_test", Default::default());

    let path = mount_point.path().join(KEY);
    let mut f = open_for_write(&path, false, true).unwrap();

    let data = vec![0xaa; 32 * 1024 * 1024];
    f.write_all(&data).unwrap();

    thread::spawn(move || {
        f.write_all(&data).unwrap();
        drop(f);

        assert!(!test_client.is_upload_in_progress(KEY).unwrap());
        assert!(test_client.contains_key(KEY).unwrap());

        let m = metadata(&path).unwrap();
        assert_eq!(m.len(), (data.len() * 2) as u64);
    })
    .join()
    .unwrap();
}

fn overwrite_test<F>(creator_fn: F, prefix: &str, write_only: bool)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let _subdir = mount_point.path().join("dir");
    let path = mount_point.path().join("dir/hello.txt");

    // Open with O_TRUNC and write something to the file
    let mut options = File::options();
    if !write_only {
        options.read(true);
    }
    let mut write_fh = options.write(true).truncate(true).open(&path).unwrap();
    write_fh.write_all(b"overwrite").expect("write should succeed");
    write_fh.sync_all().unwrap();
    drop(write_fh);

    // Check the new file content
    let mut options = File::options();
    let mut read_fh = options.read(true).open(&path).unwrap();
    let mut hello_contents = String::new();
    read_fh.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "overwrite");
    drop(read_fh);
}

#[cfg(feature = "s3_tests")]
#[test_case(true; "write_only")]
#[test_case(false; "read_write")]
fn overwrite_test_s3(write_only: bool) {
    overwrite_test(fuse::s3_session::new, "overwrite_test", write_only);
}

#[test_case(true; "write_only")]
#[test_case(false; "read_write")]
fn overwrite_test_mock(write_only: bool) {
    overwrite_test(fuse::mock_session::new, "overwrite_test", write_only);
}

fn overwrite_disallowed_on_concurrent_read_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let _subdir = mount_point.path().join("dir");
    let path = mount_point.path().join("dir/hello.txt");

    // We can't write to the file that is being read
    // from both the same file handle or a new one
    let mut options = File::options();
    let mut fh = options.read(true).write(true).open(&path).unwrap();
    let mut hello_contents = String::new();
    fh.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world");

    let err = fh
        .write(b"hello world")
        .expect_err("writing to a file is being read should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    let mut options = File::options();
    let err = options
        .write(true)
        .truncate(true)
        .open(&path)
        .expect_err("opening a file for write while it is being read should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EPERM));

    drop(fh);
}

#[cfg(feature = "s3_tests")]
#[test]
fn overwrite_disallowed_on_concurrent_read_test_s3() {
    overwrite_disallowed_on_concurrent_read_test(fuse::s3_session::new, "overwrite_disallowed_on_concurrent_read_test");
}

#[test]
fn overwrite_disallowed_on_concurrent_read_test_mock() {
    overwrite_disallowed_on_concurrent_read_test(
        fuse::mock_session::new,
        "overwrite_disallowed_on_concurrent_read_test",
    );
}

fn overwrite_fail_on_write_without_truncate_test<F>(creator_fn: F, prefix: &str, write_only: bool)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let _subdir = mount_point.path().join("dir");
    let path = mount_point.path().join("dir/hello.txt");

    // Open should fail without truncate flag
    let mut options = File::options();
    if !write_only {
        let mut read_fh = options
            .read(true)
            .write(true)
            .open(path)
            .expect("using RW should open for read");
        let err = read_fh
            .write(b"hello world")
            .expect_err("writing to a file opened for read should fail");
        assert_eq!(err.raw_os_error(), Some(libc::EBADF));
    } else {
        let err = options
            .write(true)
            .open(path)
            .expect_err("overwriting a file opened without truncate flag should fail");
        assert_eq!(err.raw_os_error(), Some(libc::EPERM));
    }
}

#[cfg(feature = "s3_tests")]
#[test_case(true; "write_only")]
#[test_case(false; "read_write")]
fn overwrite_fail_on_write_without_truncate_test_s3(write_only: bool) {
    overwrite_fail_on_write_without_truncate_test(
        fuse::s3_session::new,
        "overwrite_fail_on_write_without_truncate_test",
        write_only,
    );
}

#[test_case(true; "write_only")]
#[test_case(false; "read_write")]
fn overwrite_fail_on_write_without_truncate_test_mock(write_only: bool) {
    overwrite_fail_on_write_without_truncate_test(
        fuse::mock_session::new,
        "overwrite_fail_on_write_without_truncate_test",
        write_only,
    );
}

fn overwrite_truncate_test<F>(creator_fn: F, prefix: &str, write_only: bool)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let _subdir = mount_point.path().join("dir");
    let path = mount_point.path().join("dir/hello.txt");

    // File should be empty when opened with O_TRUNC even without any write
    let mut options = File::options();
    if !write_only {
        options.read(true);
    }
    let write_fh = options
        .write(true)
        .truncate(true)
        .open(&path)
        .expect("open should succeed");
    drop(write_fh);

    let mut options = File::options();
    let mut read_fh = options.read(true).open(&path).unwrap();
    let mut hello_contents = String::new();
    read_fh.read_to_string(&mut hello_contents).unwrap();
    assert!(hello_contents.is_empty());
}

#[cfg(feature = "s3_tests")]
#[test_case(true; "write_only")]
#[test_case(false; "read_write")]
fn overwrite_truncate_test_s3(write_only: bool) {
    overwrite_truncate_test(fuse::s3_session::new, "overwrite_truncate_test", write_only);
}

#[test_case(true; "write_only")]
#[test_case(false; "read_write")]
fn overwrite_truncate_test_mock(write_only: bool) {
    overwrite_truncate_test(fuse::mock_session::new, "overwrite_truncate_test", write_only);
}

fn overwrite_after_read_test<F>(creator_fn: F, prefix: &str)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_client.put_object("dir/hello.txt", b"hello world").unwrap();

    let _subdir = mount_point.path().join("dir");
    let path = mount_point.path().join("dir/hello.txt");

    // Read first
    let mut read_fh = File::options().read(true).open(&path).unwrap();
    let mut hello_contents = String::new();
    read_fh.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world");
    drop(read_fh);

    // Try to open the same file for write (overwrite)
    let write_fh = File::options()
        .write(true)
        .truncate(true)
        .open(&path)
        .expect("open should succeed");
    drop(write_fh);
}

#[cfg(feature = "s3_tests")]
#[test]
#[ignore = "due to a race condition on release of a read handle, overwrite after read may occasionally fail on open"]
fn overwrite_after_read_test_s3() {
    overwrite_after_read_test(fuse::s3_session::new, "overwrite_after_read_test");
}

#[test_case(""; "no prefix")]
#[test_case("overwrite_after_read_test"; "prefix")]
#[ignore = "due to a race condition on release of a read handle, overwrite after read may occasionally fail on open"]
fn overwrite_after_read_test_mock(prefix: &str) {
    overwrite_after_read_test(fuse::mock_session::new, prefix);
}

fn write_handle_no_update_existing_empty_file<F>(creator_fn: F, prefix: &str, allow_overwrite: bool)
where
    F: FnOnce(&str, TestSessionConfig) -> (TempDir, BackgroundSession, TestClientBox),
{
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let (mount_point, _session, mut test_client) = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_client.put_object("dir/hello.txt", b"").unwrap();

    let _subdir = mount_point.path().join("dir");
    let path = mount_point.path().join("dir/hello.txt");

    // Open the file in non-truncate mode and do nothing
    File::options()
        .write(true)
        .open(path)
        .expect_err("write-only open should not succeed without O_TRUNC");
}

#[cfg(feature = "s3_tests")]
#[test_case(true; "allow overwrite")]
#[test_case(false; "disallow overwrite")]
fn write_handle_no_update_existing_empty_file_s3(allow_overwrite: bool) {
    write_handle_no_update_existing_empty_file(
        fuse::s3_session::new,
        "write_handle_no_update_existing_empty_file",
        allow_overwrite,
    );
}

#[test_case(true; "allow overwrite")]
#[test_case(false; "disallow overwrite")]
fn write_handle_no_update_existing_empty_file_mock(allow_overwrite: bool) {
    write_handle_no_update_existing_empty_file(
        fuse::mock_session::new,
        "write_handle_no_update_existing_empty_file",
        allow_overwrite,
    );
}

#[cfg(all(feature = "s3_tests", not(feature = "s3express_tests")))]
const SSE_KMS_POLICY: &str = r#"{"Statement": [
    {"Effect": "Allow", "Action": ["s3:*"], "Resource": "*"},
    {"Effect": "Allow", "Action": ["kms:*"], "Resource": "*"},
    {
        "Effect": "Deny",
        "Action": ["s3:PutObject"],
        "Resource": "*",
        "Condition": {
            "StringNotEquals": {
                "s3:x-amz-server-side-encryption": "aws:kms"
            }
        }
    },
    {
        "Effect": "Deny",
        "Action": ["s3:PutObject"],
        "Resource": "*",
        "Condition": {
            "StringNotEquals": {
                "s3:x-amz-server-side-encryption-aws-kms-key-id": "__SSE_KEY_ARN__"
            }
        }
    }
]}"#;

#[cfg(all(feature = "s3_tests", not(feature = "s3express_tests")))]
const SSE_S3_POLICY: &str = r#"{"Statement": [
    {"Effect": "Allow", "Action": ["s3:*"], "Resource": "*"},
    {
        "Effect": "Deny",
        "Action": ["s3:PutObject"],
        "Resource": "*",
        "Condition": {
            "StringNotEquals": {
                "s3:x-amz-server-side-encryption": "AES256"
            }
        }
    }
]}"#;

// This test checks that a write can be performed when IAM session policy enforces the usage of the specific SSE type and a KMS key ID
// This test also contains error cases, that check that IAM session policy actually rejects writes with wrong SSE
#[cfg(all(feature = "s3_tests", not(feature = "s3express_tests")))]
#[test_case(SSE_KMS_POLICY, ServerSideEncryption::new(None, None), true)]
#[test_case(SSE_KMS_POLICY, ServerSideEncryption::new(Some("aws:kms".to_owned()), None), true)]
#[test_case(SSE_KMS_POLICY, ServerSideEncryption::new(Some("aws:kms".to_owned()), Some(get_test_kms_key_id())), false)]
#[test_case(SSE_S3_POLICY, ServerSideEncryption::new(Some("aws:kms".to_owned()), None), true)]
#[test_case(SSE_S3_POLICY, ServerSideEncryption::new(Some("AES256".to_owned()), None), false)]
fn write_with_sse_settings_test(policy: &str, sse: ServerSideEncryption, should_fail: bool) {
    let policy = policy
        .to_string()
        .replace("__SSE_KEY_ARN__", get_test_kms_key_id().as_str());
    let mut test_config =
        TestSessionConfig::default().with_credentials(tokio_block_on(get_scoped_down_credentials(&policy)));
    test_config.filesystem_config.server_side_encryption = sse;
    let (mount_point, _session, test_client) = fuse::s3_session::new("sse_with_policy_test", test_config);
    let file_name = "hello";
    let path = mount_point.path().join(file_name);
    let mut f = open_for_write(&path, false, true).unwrap();
    let data = vec![0xaa; 32];
    let write_result = f.write_all(&data);

    if should_fail {
        write_result.expect_err("should not be able to write to the file without proper sse");
        return;
    }

    write_result.expect("should be able to write to the file with proper sse");

    drop(f);

    let m = metadata(&path).unwrap();
    assert_eq!(
        m.len(),
        data.len() as u64,
        "filesystem must report correct size for the file"
    );
    assert!(test_client.contains_key(file_name).unwrap(), "object must exist in S3");
}

#[cfg(feature = "s3_tests")]
#[test_case(200)]
fn concurrent_open_for_write_test(max_files: usize) {
    let (mount_point, _session, test_client) =
        fuse::s3_session::new("concurrent_open_for_write_test", Default::default());

    let file_names: Vec<_> = (0..max_files).map(|i| format!("file-{i}")).collect();

    // Open many files for write.
    let mut open_files = Vec::new();
    for file_name in &file_names {
        let path = mount_point.path().join(file_name);
        let f = open_for_write(&path, false, true).expect("open should succeed");
        open_files.push(f);
    }

    // Write a few bytes to each file.
    let data = vec![0xaa; 32];
    for f in &mut open_files {
        f.write_all(&data).expect("write should succeed");
    }

    // Ensure the uploads succeed before closing each file.
    for f in open_files {
        f.sync_all().expect("upload should succeed");
    }

    for file_name in file_names {
        assert!(test_client.contains_key(&file_name).unwrap(), "object must exist in S3");
    }
}
