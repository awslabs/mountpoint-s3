use std::fmt::Debug;
use std::fs::{File, OpenOptions, metadata, read, read_dir};
use std::io::{ErrorKind, Read, Seek, Write};
use std::os::unix::prelude::*;
use std::path::Path;
use std::process::Command;
use std::thread;
use std::time::Duration;

use mountpoint_s3_client::types::{Checksum, ChecksumAlgorithm, PutObjectSingleParams, UploadChecksum};
use rand::rngs::SmallRng;
use rand::{RngExt, SeedableRng};
use test_case::{test_case, test_matrix};

use mountpoint_s3_fs::S3FilesystemConfig;
#[cfg(all(feature = "s3_tests", not(feature = "s3express_tests")))]
use mountpoint_s3_fs::ServerSideEncryption;
use mountpoint_s3_fs::fs::CacheConfig;

use crate::common::fuse::{self, TestSessionConfig, TestSessionCreator, read_dir_to_entry_names};
#[cfg(all(feature = "s3_tests", not(feature = "s3express_tests")))]
use crate::common::{creds::get_scoped_down_credentials, s3::get_test_kms_key_id};

/// Extend [OptionOptions] to allow configuration using test enums.
///
/// This supports us in providing a matrix of test cases and automatically configuring the opened file handle.
trait OpenOptionsTestExt {
    fn append_mode(&mut self, append_mode: AppendMode) -> &mut Self;

    fn rw_mode(&mut self, rw_mode: ReadWriteMode) -> &mut Self;
}

impl OpenOptionsTestExt for OpenOptions {
    fn append_mode(&mut self, append_mode: AppendMode) -> &mut Self {
        match append_mode {
            AppendMode::On => self.append(true),
            AppendMode::Off => self.write(true),
        }
    }

    fn rw_mode(&mut self, rw_mode: ReadWriteMode) -> &mut Self {
        match rw_mode {
            ReadWriteMode::WriteOnly => self.write(true).read(false),
            ReadWriteMode::ReadWrite => self.write(true).read(true),
        }
    }
}

#[derive(Clone, Copy)]
enum ReadWriteMode {
    WriteOnly,
    ReadWrite,
}

const WRITE_ONLY: ReadWriteMode = ReadWriteMode::WriteOnly;
const READ_WRITE: ReadWriteMode = ReadWriteMode::ReadWrite;

/// Sets whether to open files with `O_APPEND`.
#[derive(Clone, Copy)]
enum AppendMode {
    On,
    Off,
}

const APPEND: AppendMode = AppendMode::On;
const NO_APPEND: AppendMode = AppendMode::Off;

/// Sets whether to invoke `fsync` after a write.
#[derive(Clone, Copy)]
enum FSyncMode {
    On,
    Off,
}
impl FSyncMode {
    fn on(&self) -> bool {
        matches!(self, Self::On)
    }
}

const FSYNC: FSyncMode = FSyncMode::On;
const NO_FSYNC: FSyncMode = FSyncMode::Off;

#[derive(Clone, Copy)]
enum UploadMode {
    Atomic,
    Incremental,
}

impl UploadMode {
    fn is_incremental(&self) -> bool {
        matches!(self, Self::Incremental)
    }
}

const ATOMIC_UPLOAD: UploadMode = UploadMode::Atomic;
const INCREMENTAL_UPLOAD: UploadMode = UploadMode::Incremental;

trait S3FilesystemConfigExt {
    fn upload_mode(self, upload_mode: UploadMode) -> Self;
}

impl S3FilesystemConfigExt for S3FilesystemConfig {
    fn upload_mode(mut self, upload_mode: UploadMode) -> Self {
        self.incremental_upload = upload_mode.is_incremental();
        self
    }
}

fn sequential_write_test(
    creator_fn: impl TestSessionCreator,
    append_mode: AppendMode,
    rw_mode: ReadWriteMode,
    upload_mode: UploadMode,
) {
    const OBJECT_SIZE: usize = 50 * 1024;
    const WRITE_SIZE: usize = 1024;

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig::default().upload_mode(upload_mode),
        ..Default::default()
    };
    let test_session = creator_fn("sequential_write_test", config);

    // Make sure there's an existing directory
    test_session
        .client()
        .put_object("dir/hello.txt", b"hello world")
        .unwrap();

    let subdir = test_session.mount_path().join("dir");
    let path = test_session.mount_path().join("dir/new.txt");

    let mut f = File::options()
        .append_mode(append_mode)
        .rw_mode(rw_mode)
        .create(true)
        .open(&path)
        .unwrap();

    // The file is visible with size 0 as soon as we open it for write
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), 0);

    // verify the new file is visible in readdir
    let read_dir_iter = read_dir(&subdir).unwrap();
    let dir_entry_names = read_dir_to_entry_names(read_dir_iter);
    assert_eq!(dir_entry_names, vec!["hello.txt", "new.txt"]);

    let mut rng = SmallRng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
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
#[test_matrix([APPEND, NO_APPEND], [WRITE_ONLY, READ_WRITE])]
fn sequential_write_test_s3(append_mode: AppendMode, rw_mode: ReadWriteMode) {
    sequential_write_test(fuse::s3_session::new, append_mode, rw_mode, ATOMIC_UPLOAD);
}

#[cfg(feature = "s3express_tests")]
#[test_matrix([APPEND, NO_APPEND], [WRITE_ONLY, READ_WRITE])]
fn sequential_write_test_s3_incremental_upload(append_mode: AppendMode, rw_mode: ReadWriteMode) {
    sequential_write_test(fuse::s3_session::new, append_mode, rw_mode, INCREMENTAL_UPLOAD);
}

#[test_matrix([APPEND, NO_APPEND], [WRITE_ONLY, READ_WRITE], [ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn sequential_write_test_mock(append_mode: AppendMode, rw_mode: ReadWriteMode, upload_mode: UploadMode) {
    sequential_write_test(fuse::mock_session::new, append_mode, rw_mode, upload_mode);
}

fn write_errors_test(creator_fn: impl TestSessionCreator, upload_mode: UploadMode) {
    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig::default().upload_mode(upload_mode),
        ..Default::default()
    };
    let test_session = creator_fn("write_errors_test", config);

    test_session
        .client()
        .put_object("dir/hello.txt", b"hello world")
        .unwrap();

    let existing_file_path = test_session.mount_path().join("dir/hello.txt");
    let new_file_path = test_session.mount_path().join("dir/new.txt");

    // Existing files can't be opened with O_SYNC
    let err = File::options()
        .write(true)
        .custom_flags(libc::O_SYNC)
        .open(&existing_file_path)
        .expect_err("O_SYNC should fail");
    assert_eq!(err.kind(), ErrorKind::InvalidInput);

    // New files can't be opened with O_SYNC
    let err = File::options()
        .write(true)
        .create_new(true)
        .custom_flags(libc::O_SYNC)
        .open(&new_file_path)
        .expect_err("O_SYNC should fail");
    assert_eq!(err.kind(), ErrorKind::InvalidInput);

    // Existing files should not be writable by default
    if !upload_mode.is_incremental() {
        let err = File::options()
            .write(true)
            .open(&existing_file_path)
            .expect_err("can't open existing file for write");
        assert_eq!(err.kind(), ErrorKind::PermissionDenied);

        // Existing files can't be opened in append mode
        let err = File::options()
            .append(true)
            .open(&existing_file_path)
            .expect_err("can't append existing file");
        assert_eq!(err.kind(), ErrorKind::PermissionDenied);

        // Also try explicitly setting O_APPEND
        let err = File::options()
            .write(true)
            .custom_flags(libc::O_APPEND)
            .open(&existing_file_path)
            .expect_err("O_APPEND should fail");
        assert_eq!(err.kind(), ErrorKind::PermissionDenied);
    }

    // We can't write to a file opened in O_RDONLY
    let mut file = File::options().read(true).open(&existing_file_path).unwrap();
    let err = file
        .write(b"hello world")
        .expect_err("writing to O_RDONLY file should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    // For default config, existing files can be opened O_RDWR but only reading should work on them
    let mut file = File::options()
        .read(true)
        .write(true)
        .truncate(false)
        .open(&existing_file_path)
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
        .open(&existing_file_path)
        .expect_err("existing file cannot be opened with O_TRUNC");
    assert_eq!(err.raw_os_error(), Some(libc::EPERM));
}

#[cfg(feature = "s3_tests")]
#[test]
fn write_errors_test_s3() {
    write_errors_test(fuse::s3_session::new, ATOMIC_UPLOAD);
}

#[cfg(feature = "s3express_tests")]
#[test]
fn write_errors_test_s3_incremental_update() {
    write_errors_test(fuse::s3_session::new, INCREMENTAL_UPLOAD);
}

#[test_matrix([ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn write_errors_test_mock(upload_mode: UploadMode) {
    write_errors_test(fuse::mock_session::new, upload_mode);
}

fn sequential_write_streaming_test(creator_fn: impl TestSessionCreator, object_size: usize, write_chunk_size: usize) {
    const KEY: &str = "dir/new.txt";

    let test_session = creator_fn("sequential_write_streaming_test", Default::default());

    // Make sure there's an existing directory
    test_session
        .client()
        .put_object("dir/hello.txt", b"hello world")
        .unwrap();

    let path = test_session.mount_path().join(KEY);

    let mut f = File::options().append(true).create(true).open(&path).unwrap();

    // The file is visible with size 0 as soon as we open it for write
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), 0);

    let mut rng = SmallRng::seed_from_u64(0x12345678 + object_size as u64);
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
        let status = test_session
            .client()
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

fn fsync_test(creator_fn: impl TestSessionCreator, rw_mode: ReadWriteMode, upload_mode: UploadMode) {
    const OBJECT_SIZE: usize = 32;
    const KEY: &str = "new.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig::default().upload_mode(upload_mode),
        ..Default::default()
    };
    let test_session = creator_fn("fsync_test", config);
    let path = test_session.mount_path().join(KEY);

    let mut f = File::options().rw_mode(rw_mode).create(true).open(&path).unwrap();

    // The file is visible with size 0 as soon as we open it for write
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), 0);

    let mut rng = SmallRng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    f.write_all(&body).unwrap();

    assert!(upload_mode.is_incremental() || test_session.client().is_upload_in_progress(KEY).unwrap());

    f.sync_all().unwrap();

    assert!(upload_mode.is_incremental() || !test_session.client().is_upload_in_progress(KEY).unwrap());

    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    if !upload_mode.is_incremental() {
        f.write_all(&body).expect_err("write after sync should fail");
    }

    drop(f);

    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &body[..]);
}

#[cfg(feature = "s3_tests")]
#[test_matrix([WRITE_ONLY, READ_WRITE])]
fn fsync_test_s3(rw_mode: ReadWriteMode) {
    fsync_test(fuse::s3_session::new, rw_mode, ATOMIC_UPLOAD);
}

#[cfg(feature = "s3express_tests")]
#[test_matrix([WRITE_ONLY, READ_WRITE])]
fn fsync_test_s3_incremental_upload(rw_mode: ReadWriteMode) {
    fsync_test(fuse::s3_session::new, rw_mode, INCREMENTAL_UPLOAD);
}

#[test_matrix([WRITE_ONLY, READ_WRITE], [ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn fsync_test_mock(rw_mode: ReadWriteMode, upload_mode: UploadMode) {
    fsync_test(fuse::mock_session::new, rw_mode, upload_mode);
}

fn fstat_after_writing(creator_fn: impl TestSessionCreator, sync_mode: FSyncMode, upload_mode: UploadMode) {
    const OBJECT_SIZE: usize = 32;
    const KEY: &str = "new.txt";

    let file_ttl = Duration::from_millis(50); // keep short for fast tests...
    let filesystem_config = S3FilesystemConfig {
        cache_config: CacheConfig {
            file_ttl,
            ..Default::default()
        },
        ..Default::default()
    }
    .upload_mode(upload_mode);
    let session_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let test_session = creator_fn("fstat_after_writing", session_config);

    let path = test_session.mount_path().join(KEY);

    let mut f = File::options().append(true).create(true).open(&path).unwrap();

    let stat = f.metadata().expect("fstat should succeed before writing");
    assert_eq!(stat.len(), 0);

    let mut rng = SmallRng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    f.write_all(&body).unwrap();
    let stat = f.metadata().expect("fstat should succeed after writing");
    assert_eq!(stat.len(), OBJECT_SIZE as u64);

    if sync_mode.on() {
        f.sync_all().expect("fsync should succeed since it's the first fsync");

        // Wait at least this long in case there's anything bumping the validity that we didn't know of.
        thread::sleep(file_ttl + Duration::from_millis(100));

        let stat = f.metadata().expect("fstat should succeed after fsync");
        assert_eq!(stat.len(), OBJECT_SIZE as u64);
    }

    drop(f);

    // Wait at least this long in case there's anything bumping the validity that we didn't know of.
    thread::sleep(file_ttl + Duration::from_millis(100));

    let stat = metadata(&path).expect("stat should succeed after closing the file");
    assert_eq!(stat.len(), OBJECT_SIZE as u64);
    // Inode could change for all we care, so we don't assert anything here.
}

#[cfg(feature = "s3_tests")]
#[test_matrix([FSYNC, NO_FSYNC])]
fn fstat_after_writing_s3(sync_mode: FSyncMode) {
    fstat_after_writing(fuse::s3_session::new, sync_mode, ATOMIC_UPLOAD);
}

#[cfg(feature = "s3express_tests")]
#[test_matrix([FSYNC, NO_FSYNC])]
fn fstat_after_writing_s3_incremental_upload(sync_mode: FSyncMode) {
    fstat_after_writing(fuse::s3_session::new, sync_mode, INCREMENTAL_UPLOAD);
}

#[test_matrix([FSYNC, NO_FSYNC], [ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn fstat_after_writing_mock(sync_mode: FSyncMode, upload_mode: UploadMode) {
    fstat_after_writing(fuse::mock_session::new, sync_mode, upload_mode);
}

fn write_too_big_test(creator_fn: impl TestSessionCreator, write_size: usize) {
    const KEY: &str = "new.txt";
    const PART_SIZE: usize = 64;
    const MAX_S3_MULTIPART_UPLOAD_PARTS: usize = 10000;

    let config = TestSessionConfig {
        part_size: PART_SIZE,
        ..Default::default()
    };
    let test_session = creator_fn("write_too_big_test", config);

    let path = test_session.mount_path().join(KEY);

    let mut f = File::options().append(true).create(true).open(&path).unwrap();

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

fn out_of_order_write_test(creator_fn: impl TestSessionCreator, offset: i64, upload_mode: UploadMode) {
    const OBJECT_SIZE: usize = 32;
    const KEY: &str = "new.txt";

    let filesystem_config = S3FilesystemConfig::default().upload_mode(upload_mode);
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let test_session = creator_fn("out_of_order_write_test", test_config);

    let path = test_session.mount_path().join(KEY);

    let mut f = File::options()
        .write(true)
        .create(true)
        .truncate(true)
        .open(&path)
        .unwrap();

    // The file is visible with size 0 as soon as we open it for write
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), 0);

    let mut rng = SmallRng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
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

    // When using incremental upload, data from previous successful writes is uploaded if
    // fsync or flush are called. In this test, flush is occasionally invoked before the
    // out-of-order write when the test runner process is forked.
    if !upload_mode.is_incremental() {
        // In atomic mode, the multi-part upload is always aborted on error.
        let err = metadata(&path).expect_err("upload shouldn't have succeeded atomic mode");
        assert_eq!(err.raw_os_error(), Some(libc::ENOENT));
    }
}

const EARLIER_OFFSET: i64 = -1;
const LATER_OFFSET: i64 = 1;

#[cfg(feature = "s3_tests")]
#[test_matrix([EARLIER_OFFSET, LATER_OFFSET])]
fn out_of_order_write_test_s3(offset: i64) {
    out_of_order_write_test(fuse::s3_session::new, offset, ATOMIC_UPLOAD);
}

#[cfg(feature = "s3express_tests")]
#[test_matrix([EARLIER_OFFSET, LATER_OFFSET])]
fn out_of_order_write_test_s3_incremental_upload(offset: i64) {
    out_of_order_write_test(fuse::s3_session::new, offset, INCREMENTAL_UPLOAD);
}

#[test_matrix([EARLIER_OFFSET, LATER_OFFSET], [ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn out_of_order_write_test_mock(offset: i64, upload_mode: UploadMode) {
    out_of_order_write_test(fuse::mock_session::new, offset, upload_mode);
}

#[cfg(not(feature = "s3express_tests"))]
fn write_with_storage_class_test(creator_fn: impl TestSessionCreator, storage_class: Option<&str>) {
    const KEY: &str = "new.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            storage_class: storage_class.map(String::from),
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn("write_with_storage_class_test", config);

    let path = test_session.mount_path().join(KEY);

    write_file(path).unwrap();

    assert_eq!(
        storage_class.map(String::from),
        test_session.client().get_object_storage_class(KEY).unwrap()
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
fn write_with_invalid_storage_class_test(creator_fn: impl TestSessionCreator, storage_class: &str) {
    const KEY: &str = "new.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            storage_class: Some(storage_class.to_owned()),
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn("write_with_storage_class_test", config);

    let path = test_session.mount_path().join(KEY);
    write_file(path).expect_err("write with invalid storage class should fail");
}

fn write_file(path: impl AsRef<Path>) -> std::io::Result<()> {
    let mut f = File::options().append(true).create(true).open(&path)?;
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

fn flush_test(creator_fn: impl TestSessionCreator, append_mode: AppendMode, upload_mode: UploadMode) {
    const OBJECT_SIZE: usize = 50 * 1024;
    const WRITE_SIZE: usize = 1024;
    const KEY: &str = "new.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig::default().upload_mode(upload_mode),
        ..Default::default()
    };
    let test_session = creator_fn("flush_test", config);

    let path = test_session.mount_path().join(KEY);

    let mut f = File::options()
        .append_mode(append_mode)
        .create(true)
        .open(&path)
        .unwrap();

    let mut rng = SmallRng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    for part in body.chunks(WRITE_SIZE) {
        f.write_all(part).unwrap();
    }

    assert!(upload_mode.is_incremental() || test_session.client().is_upload_in_progress(KEY).unwrap());

    // Close the file. Will trigger a call to flush.
    drop(f);

    assert!(upload_mode.is_incremental() || !test_session.client().is_upload_in_progress(KEY).unwrap());

    // Now it's closed, we can stat or read it
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), body.len() as u64);

    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &body[..]);
}

#[cfg(feature = "s3_tests")]
#[test_matrix([APPEND, NO_APPEND])]
fn flush_test_s3(append_mode: AppendMode) {
    flush_test(fuse::s3_session::new, append_mode, ATOMIC_UPLOAD);
}

#[cfg(feature = "s3express_tests")]
#[test_matrix([APPEND, NO_APPEND])]
fn flush_test_s3_incremental_upload(append_mode: AppendMode) {
    flush_test(fuse::s3_session::new, append_mode, INCREMENTAL_UPLOAD);
}

#[test_matrix([APPEND, NO_APPEND], [ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn flush_test_mock(append_mode: AppendMode, upload_mode: UploadMode) {
    flush_test(fuse::mock_session::new, append_mode, upload_mode);
}

fn touch_test(creator_fn: impl TestSessionCreator, upload_mode: UploadMode) {
    const KEY: &str = "new.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig::default().upload_mode(upload_mode),
        ..Default::default()
    };
    let test_session = creator_fn("touch_test", config);

    let path = test_session.mount_path().join(KEY);

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
        if !test_session.client().is_upload_in_progress(KEY).unwrap()
            && test_session.client().contains_key(KEY).unwrap()
        {
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
    touch_test(fuse::s3_session::new, ATOMIC_UPLOAD);
}

#[cfg(feature = "s3express_tests")]
#[test]
fn touch_test_s3_incremental_upload() {
    touch_test(fuse::s3_session::new, INCREMENTAL_UPLOAD);
}

#[test_matrix([ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn touch_test_mock(upload_mode: UploadMode) {
    touch_test(fuse::mock_session::new, upload_mode);
}

fn dd_test(creator_fn: impl TestSessionCreator, upload_mode: UploadMode) {
    const KEY: &str = "new.txt";
    const SIZE: u64 = 128;

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig::default().upload_mode(upload_mode),
        ..Default::default()
    };
    let test_session = creator_fn("dd_test", config);

    let path = test_session.mount_path().join(KEY);

    let exit_status = Command::new("dd")
        .arg("if=/dev/random")
        .arg(format!("of={}", path.to_str().unwrap()))
        .arg(format!("bs={SIZE}"))
        .arg("count=1")
        .status()
        .expect("Unable to spawn dd");
    assert!(exit_status.success());

    assert!(!test_session.client().is_upload_in_progress(KEY).unwrap());
    assert!(test_session.client().contains_key(KEY).unwrap());

    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), SIZE);
}

#[cfg(feature = "s3_tests")]
#[test]
fn dd_test_s3() {
    dd_test(fuse::s3_session::new, ATOMIC_UPLOAD);
}

#[cfg(feature = "s3express_tests")]
#[test]
fn dd_test_s3_incremental_upload() {
    dd_test(fuse::s3_session::new, INCREMENTAL_UPLOAD);
}

#[test_matrix([ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn dd_test_mock(upload_mode: UploadMode) {
    dd_test(fuse::mock_session::new, upload_mode);
}

#[test_matrix([ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn spawn_test(upload_mode: UploadMode) {
    const KEY: &str = "new.txt";
    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig::default().upload_mode(upload_mode),
        ..Default::default()
    };
    let test_session = fuse::mock_session::new("spawn_test", config);

    let path = test_session.mount_path().join(KEY);
    let mut f = File::options().append(true).create(true).open(&path).unwrap();

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

#[test_matrix([ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn multi_thread_test(upload_mode: UploadMode) {
    const KEY: &str = "new.txt";
    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig::default().upload_mode(upload_mode),
        ..Default::default()
    };
    let test_session = fuse::mock_session::new("multi_thread_test", config);

    let path = test_session.mount_path().join(KEY);
    let mut f = File::options().append(true).create(true).open(&path).unwrap();

    let data = vec![0xaa; 32 * 1024 * 1024];
    f.write_all(&data).unwrap();

    thread::spawn(move || {
        f.write_all(&data).unwrap();
        drop(f);

        assert!(!test_session.client().is_upload_in_progress(KEY).unwrap());
        assert!(test_session.client().contains_key(KEY).unwrap());

        let m = metadata(&path).unwrap();
        assert_eq!(m.len(), (data.len() * 2) as u64);
    })
    .join()
    .unwrap();
}

fn overwrite_test(creator_fn: impl TestSessionCreator, prefix: &str, rw_mode: ReadWriteMode, upload_mode: UploadMode) {
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    }
    .upload_mode(upload_mode);
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_session
        .client()
        .put_object("dir/hello.txt", b"hello world")
        .unwrap();

    let _subdir = test_session.mount_path().join("dir");
    let path = test_session.mount_path().join("dir/hello.txt");

    // Open with O_TRUNC and write something to the file
    let mut write_fh = File::options().rw_mode(rw_mode).truncate(true).open(&path).unwrap();
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
#[test_matrix([WRITE_ONLY, READ_WRITE])]
fn overwrite_test_s3(rw_mode: ReadWriteMode) {
    overwrite_test(fuse::s3_session::new, "overwrite_test", rw_mode, ATOMIC_UPLOAD);
}

#[cfg(feature = "s3express_tests")]
#[test_matrix([WRITE_ONLY, READ_WRITE])]
fn overwrite_test_s3_incremental_upload(rw_mode: ReadWriteMode) {
    overwrite_test(fuse::s3_session::new, "overwrite_test", rw_mode, INCREMENTAL_UPLOAD);
}

#[test_matrix([WRITE_ONLY, READ_WRITE], [ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn overwrite_test_mock(rw_mode: ReadWriteMode, upload_mode: UploadMode) {
    overwrite_test(fuse::mock_session::new, "overwrite_test", rw_mode, upload_mode);
}

fn overwrite_disallowed_on_concurrent_read_test(creator_fn: impl TestSessionCreator, prefix: &str) {
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_session
        .client()
        .put_object("dir/hello.txt", b"hello world")
        .unwrap();

    let _subdir = test_session.mount_path().join("dir");
    let path = test_session.mount_path().join("dir/hello.txt");

    // We can't write to the file that is being read
    // from both the same file handle or a new one
    let mut fh = File::options().read(true).write(true).open(&path).unwrap();
    let mut hello_contents = String::new();
    fh.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world");

    let err = fh
        .write(b"hello world")
        .expect_err("writing to a read file handle should fail");
    assert_eq!(err.raw_os_error(), Some(libc::EBADF));

    let err = File::options()
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

fn overwrite_fail_on_write_without_truncate_test(
    creator_fn: impl TestSessionCreator,
    prefix: &str,
    rw_mode: ReadWriteMode,
) {
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_session
        .client()
        .put_object("dir/hello.txt", b"hello world")
        .unwrap();

    let _subdir = test_session.mount_path().join("dir");
    let path = test_session.mount_path().join("dir/hello.txt");

    // Open should fail without truncate flag
    let mut options = File::options();
    match rw_mode {
        ReadWriteMode::WriteOnly => {
            let err = options
                .write(true)
                .open(path)
                .expect_err("overwriting a file opened without truncate flag should fail");
            assert_eq!(err.raw_os_error(), Some(libc::EPERM));
        }
        ReadWriteMode::ReadWrite => {
            let mut read_fh = options
                .read(true)
                .write(true)
                .open(path)
                .expect("using RW should open for read");
            let err = read_fh
                .write(b"hello world")
                .expect_err("writing to a file opened for read should fail");
            assert_eq!(err.raw_os_error(), Some(libc::EBADF));
        }
    }
}

#[cfg(feature = "s3_tests")]
#[test_matrix([WRITE_ONLY, READ_WRITE])]
fn overwrite_fail_on_write_without_truncate_test_s3(rw_mode: ReadWriteMode) {
    overwrite_fail_on_write_without_truncate_test(
        fuse::s3_session::new,
        "overwrite_fail_on_write_without_truncate_test",
        rw_mode,
    );
}

#[test_matrix([WRITE_ONLY, READ_WRITE])]
fn overwrite_fail_on_write_without_truncate_test_mock(rw_mode: ReadWriteMode) {
    overwrite_fail_on_write_without_truncate_test(
        fuse::mock_session::new,
        "overwrite_fail_on_write_without_truncate_test",
        rw_mode,
    );
}

fn overwrite_truncate_test(creator_fn: impl TestSessionCreator, prefix: &str, rw_mode: ReadWriteMode) {
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_session
        .client()
        .put_object("dir/hello.txt", b"hello world")
        .unwrap();

    let _subdir = test_session.mount_path().join("dir");
    let path = test_session.mount_path().join("dir/hello.txt");

    // File should be empty when opened with O_TRUNC even without any write
    let write_fh = File::options()
        .rw_mode(rw_mode)
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
#[test_matrix([WRITE_ONLY, READ_WRITE])]
fn overwrite_truncate_test_s3(rw_mode: ReadWriteMode) {
    overwrite_truncate_test(fuse::s3_session::new, "overwrite_truncate_test", rw_mode);
}

#[test_matrix([WRITE_ONLY, READ_WRITE])]
fn overwrite_truncate_test_mock(rw_mode: ReadWriteMode) {
    overwrite_truncate_test(fuse::mock_session::new, "overwrite_truncate_test", rw_mode);
}

fn overwrite_after_read_test(creator_fn: impl TestSessionCreator, prefix: &str) {
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_session
        .client()
        .put_object("dir/hello.txt", b"hello world")
        .unwrap();

    let _subdir = test_session.mount_path().join("dir");
    let path = test_session.mount_path().join("dir/hello.txt");

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
fn overwrite_after_read_test_s3() {
    overwrite_after_read_test(fuse::s3_session::new, "overwrite_after_read_test");
}

#[test_case(""; "no prefix")]
#[test_case("overwrite_after_read_test"; "prefix")]
fn overwrite_after_read_test_mock(prefix: &str) {
    overwrite_after_read_test(fuse::mock_session::new, prefix);
}

fn write_handle_no_update_existing_empty_file(
    creator_fn: impl TestSessionCreator,
    prefix: &str,
    allow_overwrite: bool,
) {
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };
    let test_session = creator_fn(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_session.client().put_object("dir/hello.txt", b"").unwrap();

    let _subdir = test_session.mount_path().join("dir");
    let path = test_session.mount_path().join("dir/hello.txt");

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
    use crate::common::tokio_block_on;

    let policy = policy
        .to_string()
        .replace("__SSE_KEY_ARN__", get_test_kms_key_id().as_str());
    let mut test_config =
        TestSessionConfig::default().with_credentials(tokio_block_on(get_scoped_down_credentials(&policy)));
    test_config.filesystem_config.server_side_encryption = sse;
    let test_session = fuse::s3_session::new("sse_with_policy_test", test_config);
    let file_name = "hello";
    let path = test_session.mount_path().join(file_name);
    let mut f = File::options().write(true).create(true).open(&path).unwrap();
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
    assert!(
        test_session.client().contains_key(file_name).unwrap(),
        "object must exist in S3"
    );
}

#[cfg(feature = "s3_tests")]
#[test_case(200)]
fn concurrent_open_for_write_test(max_files: usize) {
    let test_session = fuse::s3_session::new("concurrent_open_for_write_test", Default::default());

    let file_names: Vec<_> = (0..max_files).map(|i| format!("file-{i}")).collect();

    // Open many files for write.
    let mut open_files = Vec::new();
    for file_name in &file_names {
        let path = test_session.mount_path().join(file_name);
        let f = File::options()
            .append(true)
            .create(true)
            .open(&path)
            .expect("open should succeed");
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
        assert!(
            test_session.client().contains_key(&file_name).unwrap(),
            "object must exist in S3"
        );
    }
}

#[derive(Clone, Copy)]
enum UploadChecksumsMode {
    Enabled,
    Disabled,
}

const CHECKSUMS_ENABLED: UploadChecksumsMode = UploadChecksumsMode::Enabled;
const CHECKSUMS_DISABLED: UploadChecksumsMode = UploadChecksumsMode::Disabled;

fn write_checksums_test(
    creator_fn: impl TestSessionCreator,
    checksums_mode: UploadChecksumsMode,
    upload_mode: UploadMode,
) {
    const OBJECT_SIZE: usize = 20 * 1024 * 1024;
    const KEY: &str = "dir/new.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            use_upload_checksums: matches!(checksums_mode, UploadChecksumsMode::Enabled),
            ..Default::default()
        }
        .upload_mode(upload_mode),
        ..Default::default()
    };
    let test_session = creator_fn("write_checksums_test", config);

    // Make sure there's an existing directory
    test_session
        .client()
        .put_object("dir/hello.txt", b"hello world")
        .unwrap();

    let path = test_session.mount_path().join(KEY);

    let mut f = File::options().append(true).create(true).open(&path).unwrap();
    let mut rng = SmallRng::seed_from_u64(0x12345678 + OBJECT_SIZE as u64);
    let mut body = vec![0u8; OBJECT_SIZE];
    rng.fill(&mut body[..]);

    let mut current_size = 0;
    for part in body.chunks(1024 * 1024) {
        f.write_all(part).unwrap();
        current_size += part.len() as u64;
        assert_eq!(f.metadata().unwrap().len(), current_size);
    }

    f.sync_all().unwrap();
    drop(f);

    // Now it's fsync'ed and closed, it should be present in S3
    let (object_checksum, part_checksums) = test_session.client().get_object_checksums(KEY).unwrap();
    match checksums_mode {
        UploadChecksumsMode::Enabled => {
            // We should get the correct checksum on the whole object or on the parts.
            let object_crc32c = object_checksum.is_some_and(|checksum| checksum.checksum_crc32c.is_some());
            let parts_crc32c = !part_checksums.is_empty()
                && part_checksums.iter().all(|checksum| {
                    checksum
                        .as_ref()
                        .is_some_and(|checksum| checksum.checksum_crc32c.is_some())
                });
            assert!(object_crc32c || parts_crc32c, "crc32c is used for trailing checksums");
        }
        UploadChecksumsMode::Disabled => {
            // If no checksum was sent with the PutObject request, S3 automatically uses CRC-64NVME.
            // We'll ignore it for the test below.
            // See https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html.
            assert!(
                object_checksum.is_none_or(|c| Checksum {
                    checksum_crc64nvme: None,
                    ..c
                } == Checksum::empty()),
                "checksums should not be present when upload checksums are disabled"
            );

            // For S3 Standard, the list of parts is only present if checksums were used, but for S3
            // Express One Zone the list of parts is always present.
            for part_checksum in part_checksums {
                assert!(
                    part_checksum.is_none_or(|c| c == Checksum::empty()),
                    "checksums should not be present when upload checksums are disabled"
                );
            }
        }
    }
}

#[cfg(feature = "s3_tests")]
#[test_matrix([CHECKSUMS_ENABLED, CHECKSUMS_DISABLED])]
fn write_checksums_test_s3(checksums_mode: UploadChecksumsMode) {
    write_checksums_test(fuse::s3_session::new, checksums_mode, ATOMIC_UPLOAD);
}

#[cfg(feature = "s3express_tests")]
#[test_matrix([CHECKSUMS_ENABLED, CHECKSUMS_DISABLED])]
fn write_checksums_test_s3_incremental_upload(checksums_mode: UploadChecksumsMode) {
    write_checksums_test(fuse::s3_session::new, checksums_mode, INCREMENTAL_UPLOAD);
}

#[test_matrix([CHECKSUMS_ENABLED, CHECKSUMS_DISABLED], [ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn write_checksums_test_mock(checksums_mode: UploadChecksumsMode, upload_mode: UploadMode) {
    write_checksums_test(fuse::mock_session::new, checksums_mode, upload_mode);
}

#[derive(Debug)]
struct AppendTestConfig {
    initial_content: Option<&'static str>,
    writes: Vec<&'static str>,
    fsync_after_write: bool,
}

fn append_test(creator_fn: impl TestSessionCreator, append_config: AppendTestConfig) {
    const KEY: &str = "append.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            incremental_upload: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn("append_test", config);

    let path = test_session.mount_path().join(KEY);

    let mut expected = Vec::new();
    if let Some(initial_content) = append_config.initial_content {
        expected.extend_from_slice(initial_content.as_bytes());

        // Create the file with the initial content
        test_session.client().put_object(KEY, &expected).unwrap();

        // Check the file already exists and has the expected size
        let m = metadata(&path).unwrap();
        assert_eq!(m.len(), expected.len() as u64);
    }

    let mut f = File::options()
        .read(false)
        .append(true)
        .create(true)
        .open(&path)
        .unwrap();

    // The file is visible with the initial size after as we open it for write
    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), expected.len() as u64);

    for write_content in append_config.writes {
        expected.extend_from_slice(write_content.as_bytes());

        f.write_all(write_content.as_bytes()).unwrap();

        if append_config.fsync_after_write {
            f.sync_all().unwrap();

            let m = metadata(&path).unwrap();
            assert_eq!(m.len(), expected.len() as u64);

            let new_size = test_session.client().get_object_size(KEY).unwrap();
            assert_eq!(new_size, expected.len());
        }
    }

    drop(f);

    let m = metadata(&path).unwrap();
    assert_eq!(m.len(), expected.len() as u64);

    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &expected[..]);
}

#[cfg(feature = "s3express_tests")]
#[test_case(AppendTestConfig { initial_content: Some("initial."), writes: vec!["one."], fsync_after_write: true })]
#[test_case(AppendTestConfig { initial_content: Some("initial."), writes: vec!["one."], fsync_after_write: false })]
#[test_case(AppendTestConfig { initial_content: Some("initial."), writes: vec!["one.", "two."], fsync_after_write: true })]
#[test_case(AppendTestConfig { initial_content: Some("initial."), writes: vec!["one.", "two."], fsync_after_write: false })]
#[test_case(AppendTestConfig { initial_content: None, writes: vec!["one."], fsync_after_write: true })]
#[test_case(AppendTestConfig { initial_content: None, writes: vec!["one."], fsync_after_write: false })]
#[test_case(AppendTestConfig { initial_content: Some(""), writes: vec!["one."], fsync_after_write: true })]
#[test_case(AppendTestConfig { initial_content: Some(""), writes: vec!["one."], fsync_after_write: false })]
fn append_test_s3(config: AppendTestConfig) {
    append_test(fuse::s3_session::new, config);
}

#[test_case(AppendTestConfig { initial_content: Some("initial."), writes: vec!["one."], fsync_after_write: true })]
#[test_case(AppendTestConfig { initial_content: Some("initial."), writes: vec!["one."], fsync_after_write: false })]
#[test_case(AppendTestConfig { initial_content: Some("initial."), writes: vec!["one.", "two."], fsync_after_write: true })]
#[test_case(AppendTestConfig { initial_content: Some("initial."), writes: vec!["one.", "two."], fsync_after_write: false })]
#[test_case(AppendTestConfig { initial_content: None, writes: vec!["one."], fsync_after_write: true })]
#[test_case(AppendTestConfig { initial_content: None, writes: vec!["one."], fsync_after_write: false })]
#[test_case(AppendTestConfig { initial_content: Some(""), writes: vec!["one."], fsync_after_write: true })]
#[test_case(AppendTestConfig { initial_content: Some(""), writes: vec!["one."], fsync_after_write: false })]
fn append_test_mock(config: AppendTestConfig) {
    append_test(fuse::mock_session::new, config);
}

fn append_with_checksums(creator_fn: impl TestSessionCreator, checksum_algorithm: Option<ChecksumAlgorithm>) {
    const KEY: &str = "append.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            incremental_upload: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn("append_with_checksums", config);

    let path = test_session.mount_path().join(KEY);

    // Create the file with the initial content
    const INITIAL_CONTENT: &[u8] = b"initial";
    let checksum = match checksum_algorithm {
        None => None,
        Some(ChecksumAlgorithm::Crc64nvme) => Some(UploadChecksum::Crc64nvme(
            mountpoint_s3_client::checksums::crc64nvme::checksum(INITIAL_CONTENT),
        )),
        Some(ChecksumAlgorithm::Crc32c) => Some(UploadChecksum::Crc32c(
            mountpoint_s3_client::checksums::crc32c::checksum(INITIAL_CONTENT),
        )),
        Some(ChecksumAlgorithm::Crc32) => Some(UploadChecksum::Crc32(
            mountpoint_s3_client::checksums::crc32::checksum(INITIAL_CONTENT),
        )),
        Some(ChecksumAlgorithm::Sha1) => Some(UploadChecksum::Sha1(
            mountpoint_s3_client::checksums::sha1::checksum(INITIAL_CONTENT).unwrap(),
        )),
        Some(ChecksumAlgorithm::Sha256) => Some(UploadChecksum::Sha256(
            mountpoint_s3_client::checksums::sha256::checksum(INITIAL_CONTENT).unwrap(),
        )),
        Some(other) => unimplemented!("checksum algorithm {}", other),
    };
    let params = PutObjectSingleParams::new().checksum(checksum);
    test_session
        .client()
        .put_object_single(KEY, INITIAL_CONTENT, params)
        .unwrap();

    let mut f = File::options().read(false).append(true).open(&path).unwrap();

    const APPEND_CONTENT: &[u8] = b"append";
    f.write_all(APPEND_CONTENT).unwrap();
    f.sync_all().unwrap();
    drop(f);

    let expected = [INITIAL_CONTENT, APPEND_CONTENT].concat();
    let buf = read(&path).unwrap();
    assert_eq!(&buf[..], &expected[..]);
}

#[cfg(feature = "s3express_tests")]
#[test_case(None)]
#[test_case(Some(ChecksumAlgorithm::Crc64nvme))]
#[test_case(Some(ChecksumAlgorithm::Crc32c))]
#[test_case(Some(ChecksumAlgorithm::Crc32))]
#[test_case(Some(ChecksumAlgorithm::Sha1))]
#[test_case(Some(ChecksumAlgorithm::Sha256))]
fn append_with_checksums_s3(checksum_algorithm: Option<ChecksumAlgorithm>) {
    append_with_checksums(fuse::s3_session::new, checksum_algorithm);
}

#[test_case(None)]
#[test_case(Some(ChecksumAlgorithm::Crc64nvme))]
#[test_case(Some(ChecksumAlgorithm::Crc32c))]
#[test_case(Some(ChecksumAlgorithm::Crc32))]
#[test_case(Some(ChecksumAlgorithm::Sha1))]
#[test_case(Some(ChecksumAlgorithm::Sha256))]
fn append_with_checksums_mock(checksum_algorithm: Option<ChecksumAlgorithm>) {
    append_with_checksums(fuse::mock_session::new, checksum_algorithm);
}

fn append_fails_on_object_replaced(creator_fn: impl TestSessionCreator) {
    const KEY: &str = "append.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            incremental_upload: true,
            ..Default::default()
        },
        ..Default::default()
    };
    let test_session = creator_fn("append_fails_on_object_replaced", config);

    let path = test_session.mount_path().join(KEY);

    // Create the file with the initial content
    const INITIAL_CONTENT: &[u8] = b"original";
    test_session.client().put_object(KEY, INITIAL_CONTENT).unwrap();

    let f = File::options().read(false).append(true).open(&path).unwrap();

    // Replace the original file
    const REPLACED_CONTENT: &[u8] = b"replaced";
    test_session.client().put_object(KEY, REPLACED_CONTENT).unwrap();

    fn append_to_file(mut f: File) -> std::io::Result<()> {
        f.write_all(b"append")?;
        f.sync_all()?;
        Ok(())
    }

    append_to_file(f).expect_err("appending to a replaced file should fail");
}

#[cfg(feature = "s3express_tests")]
#[test]
fn append_fails_on_object_replaced_s3() {
    append_fails_on_object_replaced(fuse::s3_session::new);
}

#[test]
fn append_fails_on_object_replaced_mock() {
    append_fails_on_object_replaced(fuse::mock_session::new);
}

const MOCK: fn(&str, TestSessionConfig) -> fuse::TestSession = fuse::mock_session::new;
#[cfg(feature = "s3_tests")]
const S3: fn(&str, TestSessionConfig) -> fuse::TestSession = fuse::s3_session::new;

enum Open {
    ForReading,
    ForWriting,
}

#[cfg_attr(feature = "s3_tests", test_matrix(S3, [Open::ForReading, Open::ForWriting], [ATOMIC_UPLOAD]))]
#[cfg_attr(feature = "s3express_tests", test_matrix(S3, [Open::ForReading, Open::ForWriting], [INCREMENTAL_UPLOAD]))]
#[test_matrix(MOCK, [Open::ForReading, Open::ForWriting], [ATOMIC_UPLOAD, INCREMENTAL_UPLOAD])]
fn open_after_closing_empty_file_test(
    creator_fn: impl TestSessionCreator,
    second_open_type: Open,
    upload_mode: UploadMode,
) {
    const KEY: &str = "empty.txt";

    let config = TestSessionConfig {
        filesystem_config: S3FilesystemConfig {
            allow_overwrite: true,
            ..Default::default()
        }
        .upload_mode(upload_mode),
        ..Default::default()
    };
    let test_session = creator_fn("open_after_closing_empty_file_test", config);

    let path = test_session.mount_path().join(KEY);

    // Create a new file but do not write anything to it.
    let f1 = File::options()
        .create(true)
        .truncate(true)
        .write(true)
        .open(&path)
        .expect("first open should succeed");
    // Close the file without writing.
    drop(f1);

    // Open it again
    let f2 = {
        let mut options = File::options();
        match second_open_type {
            Open::ForReading => options.read(true),
            Open::ForWriting => options.write(true).truncate(true),
        };
        options
    }
    .open(&path)
    .expect("second open should succeed");
    // Close the file.
    drop(f2);
}

#[test]
fn write_allowed_on_flushed_handle() {
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };

    let prefix = "write_allowed_on_flushed_handle";
    let test_session = fuse::mock_session::new(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_session
        .client()
        .put_object(&format!("dir/{}.txt", prefix), b"hello world")
        .unwrap();

    let _subdir = test_session.mount_path().join("dir");
    let path = test_session.mount_path().join(format!("dir/{}.txt", prefix));

    let fh = File::options().write(true).truncate(true).open(path).unwrap();
    let mut dup_fh = fh.try_clone().unwrap();

    drop(fh);

    let mut hello_contents = String::new();
    dup_fh
        .read_to_string(&mut hello_contents)
        .expect_err("reading from a write file handle should fail");

    dup_fh
        .write_all(b"hello world3")
        .expect("writing to a flushed write file handle should succeed");
    drop(dup_fh);
}

#[test]
fn open_allowed_only_after_all_readers_flushed() {
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };

    let prefix = "open_allowed_only_after_all_readers_flushed";
    let test_session = fuse::mock_session::new(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_session
        .client()
        .put_object(&format!("dir/{}.txt", prefix), b"hello world")
        .unwrap();

    let _subdir = test_session.mount_path().join("dir");
    let path = test_session.mount_path().join(format!("dir/{}.txt", prefix));

    let mut fh1 = File::options().read(true).open(&path).unwrap();
    let mut fh2 = File::options().read(true).open(&path).unwrap();

    let mut hello_contents = String::new();
    fh1.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello world");

    fh2.read_to_string(&mut hello_contents).unwrap();
    assert_eq!(hello_contents, "hello worldhello world");

    let err1 = File::options()
        .write(true)
        .truncate(true)
        .open(&path)
        .expect_err("opening a file for write while it is being read should fail");
    assert_eq!(err1.raw_os_error(), Some(libc::EPERM));

    drop(fh1);
    let err2 = File::options()
        .write(true)
        .truncate(true)
        .open(&path)
        .expect_err("opening a file for write while it is being read should fail");
    assert_eq!(err2.raw_os_error(), Some(libc::EPERM));

    let mut dup_fh2 = fh2.try_clone().unwrap();
    drop(fh2);

    // should be able to read from a flushed handle's duplicate FD
    dup_fh2.read_to_string(&mut hello_contents).unwrap();
    // read_to_string already read fh2 until EOF so hello_contents remains unchanged
    assert_eq!(hello_contents, "hello worldhello world");

    let mut dup2_fh2 = dup_fh2.try_clone().unwrap();
    drop(dup_fh2);

    // should be able to open a new write handle and write to it after the last open reader flushed
    let mut write_fh = File::options().write(true).truncate(true).open(&path).unwrap();
    write_fh
        .write_all(b"hello world2")
        .expect("writing to a new write file handle should succeed");

    dup2_fh2
        .read_to_string(&mut hello_contents)
        .expect_err("reading from an overridden file handle should fail");

    drop(dup2_fh2);
    drop(write_fh);
}

#[test]
fn open_disallowed_when_writer_exists() {
    let filesystem_config = S3FilesystemConfig {
        allow_overwrite: true,
        ..Default::default()
    };
    let test_config = TestSessionConfig {
        filesystem_config,
        ..Default::default()
    };

    let prefix = "open_disallowed_when_writer_exists";
    let test_session = fuse::mock_session::new(prefix, test_config);

    // Make sure there's an existing directory and a file
    test_session
        .client()
        .put_object(&format!("dir/{}.txt", prefix), b"hello world")
        .unwrap();

    let _subdir = test_session.mount_path().join("dir");
    let path = test_session.mount_path().join(format!("dir/{}.txt", prefix));

    let fh1 = File::options().write(true).truncate(true).open(&path).unwrap();

    let err1 = File::options()
        .write(true)
        .truncate(true)
        .open(&path)
        .expect_err("opening a file for write while it is already being written to should fail");
    assert_eq!(err1.raw_os_error(), Some(libc::EPERM));

    let err2 = File::options()
        .read(true)
        .open(&path)
        .expect_err("opening a file for read while it is being written to should fail");
    assert_eq!(err2.raw_os_error(), Some(libc::EPERM));

    let mut dup_fh1 = fh1.try_clone().unwrap();
    drop(fh1);

    // should be able to write to a flushed handle's duplicate FD
    dup_fh1
        .write_all(b"hello world2")
        .expect("writing to a duplicate file descriptor should succeed");

    let err3 = File::options()
        .write(true)
        .truncate(true)
        .open(&path)
        .expect_err("opening a file for write while it is already being written to should fail");
    assert_eq!(err3.raw_os_error(), Some(libc::EPERM));

    let err4 = File::options()
        .read(true)
        .open(&path)
        .expect_err("opening a file for read while it is being written to should fail");
    assert_eq!(err4.raw_os_error(), Some(libc::EPERM));

    drop(dup_fh1);

    let mut hello_contents = String::new();

    // should be able to open a new read handle and read from it after the last open writer flushed
    let mut read_fh = File::options().read(true).open(&path).unwrap();
    read_fh
        .read_to_string(&mut hello_contents)
        .expect("reading from a new read file handle should succeed");
    assert_eq!(hello_contents, "hello world2");
    drop(read_fh);
}
