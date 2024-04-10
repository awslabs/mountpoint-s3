#![cfg(feature = "fuse_tests")]

//! This is a differential test suite for our FUSE file system against a "real" file system, which
//! we implement just using a temporary directory. The big idea is to run a sequence of random
//! operations against both the real file system and Mountpoint and check for discrepancies. Because
//! Mountpoint doesn't implement all POSIX semantics, we sometimes need to allow discrepancies, but
//! the tests are constructed in a way such that these cases should be easy to identify.

use std::fs::{self, File, OpenOptions};
use std::io::Seek as _;
use std::os::fd::IntoRawFd;
use std::os::unix::fs::FileExt;
use std::path::{Path, PathBuf};

use fuser::BackgroundSession;
use mountpoint_s3::S3FilesystemConfig;
use proptest::collection;
use proptest::prelude::*;
use proptest_derive::Arbitrary;
use tempfile::TempDir;
use tracing::{info, info_span};

use crate::common::fuse::{mock_session, TestClient, TestSessionConfig};

const MAX_NUM_FILES: usize = 10;
const MAX_FILE_SIZE: usize = 1024 * 1024;

/// A file system for our purposes just needs to be able to provide the path to its root directory
/// plus a method for "out-of-band" writes of new files. For everything else, we use real file
/// system calls.
trait Filesystem {
    fn root(&self) -> &Path;
    fn put(&mut self, path: impl AsRef<Path>, contents: &[u8]) -> anyhow::Result<()>;
}

/// A file system backed by a temporary directory
struct DirectoryFileSystem {
    // Deleted on drop, so no need for explicit cleanup
    tempdir: TempDir,
}

impl DirectoryFileSystem {
    fn new() -> anyhow::Result<Self> {
        let tempdir = TempDir::new()?;
        Ok(Self { tempdir })
    }
}

impl Filesystem for DirectoryFileSystem {
    fn root(&self) -> &Path {
        self.tempdir.path()
    }

    fn put(&mut self, path: impl AsRef<Path>, contents: &[u8]) -> anyhow::Result<()> {
        let path = self.tempdir.path().join(path.as_ref());
        fs::create_dir_all(path.parent().unwrap())?;
        fs::write(&path, contents)?;
        Ok(())
    }
}

/// A file system backed by Mountpoint
struct MountpointFileSystem {
    mountpoint: TempDir,
    // Option so we can explicitly unmount
    session: Option<BackgroundSession>,
    client: Box<dyn TestClient>,
}

impl MountpointFileSystem {
    fn new(config: S3FilesystemConfig) -> anyhow::Result<Self> {
        let test_config = TestSessionConfig {
            filesystem_config: config,
            ..Default::default()
        };
        let (mountpoint, session, client) = mock_session::new("", test_config);
        Ok(Self {
            mountpoint,
            session: Some(session),
            client,
        })
    }
}

impl Filesystem for MountpointFileSystem {
    fn root(&self) -> &Path {
        self.mountpoint.path()
    }

    fn put(&mut self, path: impl AsRef<Path>, contents: &[u8]) -> anyhow::Result<()> {
        let key = path.as_ref().to_str().unwrap();
        self.client
            .put_object(key, contents)
            .map_err(|e| anyhow::anyhow!("put failed: {:?}", e))
    }
}

impl Drop for MountpointFileSystem {
    fn drop(&mut self) {
        // Explicitly unmount so we know the background thread is gone
        self.session.take().unwrap().join();
    }
}

/// Operations to perform against the file system. These are roughly 1:1 to real POSIX file system
/// calls, but capturing only the arguments we're interested in controlling randomly.
#[derive(Debug, Arbitrary)]
enum Op {
    Open {
        file_path: FilePath,
        mode: OpenMode,
    },
    Dup {
        fd: FileDescriptor,
    },
    Close {
        fd: FileDescriptor,
    },
    Read {
        fd: FileDescriptor,
        offset: Offset,
        size: Size,
    },
    Write {
        fd: FileDescriptor,
        offset: Offset,
        size: Size,
    },
}

fn index_strategy() -> impl Strategy<Value = usize> {
    0..(2 * MAX_NUM_FILES)
}

fn size_strategy() -> impl Strategy<Value = usize> {
    0..(2 * MAX_FILE_SIZE)
}

#[derive(Debug, Arbitrary)]
struct FilePath(#[proptest(strategy = "index_strategy()")] usize);

#[derive(Debug, Arbitrary)]
struct FileDescriptor(#[proptest(strategy = "index_strategy()")] usize);

#[derive(Debug, Arbitrary)]
enum Offset {
    Current,
    Absolute(#[proptest(strategy = "size_strategy()")] usize),
}

#[derive(Debug, Arbitrary)]
struct Size(#[proptest(strategy = "size_strategy()")] usize);

#[derive(Debug, Arbitrary, Clone, Copy)]
enum OpenMode {
    Read,
    Write { truncate: bool },
    ReadWrite { truncate: bool },
}

impl OpenMode {
    fn is_read(&self) -> bool {
        matches!(self, OpenMode::Read | OpenMode::ReadWrite { .. })
    }

    fn is_write(&self) -> bool {
        matches!(self, OpenMode::Write { .. } | OpenMode::ReadWrite { .. })
    }

    fn is_truncate(&self) -> bool {
        match self {
            OpenMode::Write { truncate, .. } => *truncate,
            OpenMode::ReadWrite { truncate, .. } => *truncate,
            _ => panic!("is_truncate called on read"),
        }
    }
}

/// The current state of a test run
///
/// We track the set of all files on the file system, as well as all open file descriptors. We use
/// this State object to check the results of operations, as the state will often dictate whether
/// some results are valid or not (e.g. rejecting an open(O_RDONLY) if there's already an open
/// writer).
#[derive(Debug, Default)]
struct State {
    files: Vec<FileState>,
    fds: Vec<FdState>,
}

#[derive(Debug)]
struct FileState {
    path: PathBuf,
    size: usize,
}

#[derive(Debug)]
struct FdState {
    fd1: File,
    fd2: File,
    path: PathBuf,
    size: usize,
    mode: OpenMode,
}

impl State {
    fn check_open_result(
        &self,
        op: &Op,
        file: &FileState,
        expected: Result<File, std::io::Error>,
        actual: Result<File, std::io::Error>,
    ) -> OpResult<(File, File)> {
        match (&expected, &actual) {
            (Ok(_), Ok(_)) => OpResult::Success((expected.unwrap(), actual.unwrap())),
            (Err(e1), Err(e2)) => {
                assert_eq!(e1.kind(), e2.kind());
                OpResult::Continue
            }
            (Ok(_), Err(e2)) => {
                info!(?expected, ?actual, "divergence on open results");
                let Op::Open { mode, .. } = op else {
                    panic!("check_open_result on non-Open op");
                };
                // Tried to read or write but already writing
                let existing_writers = self.fds.iter().any(|fd| file.path == fd.path && fd.mode.is_write());
                if existing_writers {
                    return OpResult::Continue;
                }
                // Tried to write but already reading
                if mode.is_write() {
                    let existing_readers = self.fds.iter().any(|fd| file.path == fd.path && fd.mode.is_read());
                    if existing_readers {
                        if mode.is_truncate() {
                            // File has been truncated by the reference file system, so state has
                            // now diverged
                            info!("ending test because `open` truncated a file that was being read");
                            return OpResult::Finish;
                        } else {
                            return OpResult::Continue;
                        }
                    }
                }
                // Tried to write without truncate but already exists
                if mode.is_write() && !mode.is_truncate() {
                    let existing_file = self.files.iter().any(|fd| file.path == fd.path);
                    if existing_file {
                        return OpResult::Continue;
                    }
                }
                panic!("unexpected Mountpoint failure on {op:?}: {e2:?}");
            }
            _ => panic!("expected and actual are not equal"),
        }
    }

    fn check_read_result(
        &self,
        op: &Op,
        fd: &FdState,
        expected: Result<usize, std::io::Error>,
        actual: Result<usize, std::io::Error>,
    ) -> OpResult<()> {
        match (&expected, &actual) {
            (Ok(f1), Ok(f2)) => {
                assert_eq!(f1, f2);
                OpResult::Success(())
            }
            (Err(e), Err(f)) => {
                assert_eq!(e.kind(), f.kind());
                OpResult::Continue
            }
            (Ok(_), Err(e2)) => {
                info!(?expected, ?actual, "divergence on read results");
                if fd.mode.is_write() {
                    return OpResult::Continue;
                }
                panic!("unexpected Mountpoint failure on {op:?}: {e2:?}");
            }
            _ => panic!("expected and actual are not equal"),
        }
    }

    fn check_write_result(
        &self,
        op: &Op,
        fd: &FdState,
        offset: u64,
        expected: Result<usize, std::io::Error>,
        actual: Result<usize, std::io::Error>,
    ) -> OpResult<()> {
        match (&expected, &actual) {
            (Ok(f1), Ok(f2)) => {
                assert_eq!(f1, f2);
                OpResult::Success(())
            }
            (Err(e), Err(f)) => {
                assert_eq!(e.kind(), f.kind());
                OpResult::Continue
            }
            (Ok(_), Err(e2)) => {
                info!(?expected, ?actual, "divergence on write results");
                // If write succeeded, might be an O_RDWR file that Mountpoint is treating as
                // read-only because it already existed
                if fd.mode.is_read() {
                    info!("ending test because `write` to O_RDWR file that was read-only");
                    return OpResult::Finish;
                }
                // Maybe it was a non-sequential write
                if offset != fd.size as u64 {
                    info!("ending test because `write` out of order");
                    return OpResult::Finish;
                }
                panic!("unexpected Mountpoint failure on {op:?}: {e2:?}");
            }
            _ => panic!("expected and actual are not equal"),
        }
    }
}

/// Results of checking an operation
#[derive(Debug)]
enum OpResult<T> {
    /// The operation was successful and testing should continue
    Success(T),
    /// The operation wasn't successful, but testing can continue
    Continue,
    /// The operation wasn't successful and testing needs to stop. This is used when the two file
    /// systems have diverged and can't be reconciled.
    // TODO: I think instead of aborting the whole test we can just jettison the file? Or maybe
    // that's too complicated.
    Finish,
}

/// Run a sequence of operations against the two file systems and compare the results
fn run(ops: &[Op], mut f1: DirectoryFileSystem, mut f2: MountpointFileSystem) {
    let mut state = State::default();

    // Pre-populate the file system with some interesting files
    for i in 1..5 {
        let file_path = PathBuf::from(format!("file_{}", i));
        let content = vec![i as u8; 100000 * i];

        f1.put(&file_path, &content).unwrap();
        f2.put(&file_path, &content).unwrap();

        state.files.push(FileState {
            path: file_path,
            size: content.len(),
        });
    }

    for (i, op) in ops.iter().enumerate() {
        let _span = info_span!("op", i, ?op).entered();
        match op {
            Op::Open { file_path, mode } => {
                if state.files.is_empty() {
                    continue;
                }
                let idx = file_path.0 % state.files.len();
                let file = &state.files[idx];
                info!(?idx, ?file, "open");

                let mut options = OpenOptions::new();
                match mode {
                    OpenMode::Read => {
                        options.read(true);
                    }
                    OpenMode::Write { truncate } | OpenMode::ReadWrite { truncate } => {
                        options.write(true);
                        if *truncate {
                            options.truncate(true);
                        }
                        if matches!(mode, OpenMode::ReadWrite { .. }) {
                            options.read(true);
                        }
                    }
                }

                let ret1 = options.open(f1.root().join(&file.path));
                let ret2 = options.open(f2.root().join(&file.path));
                let (f1, f2) = match state.check_open_result(op, file, ret1, ret2) {
                    OpResult::Success((f1, f2)) => (f1, f2),
                    OpResult::Continue => continue,
                    OpResult::Finish => return,
                };

                // For Mountpoint, we resolve ReadWrite to Read or Write based on whether the file
                // exists already or not
                let mode = match mode {
                    OpenMode::ReadWrite { truncate } => {
                        let existing_file = state.files.iter().any(|f| file.path == f.path);
                        if existing_file && *truncate {
                            OpenMode::Write { truncate: true }
                        } else if existing_file {
                            OpenMode::Read
                        } else {
                            OpenMode::Write { truncate: false }
                        }
                    }
                    _ => *mode,
                };

                state.fds.push(FdState {
                    fd1: f1,
                    fd2: f2,
                    path: file.path.clone(),
                    size: file.size,
                    mode,
                });
            }
            Op::Read { fd, offset, size } => {
                if state.fds.is_empty() {
                    continue;
                }
                let idx = fd.0 % state.fds.len();
                let fd = &state.fds[idx];
                let (offset, size) = match offset {
                    Offset::Current => {
                        // Get next read offset from the directory filesystem
                        let offset = (&fd.fd1).stream_position().unwrap();
                        (offset, (size.0 % fd.size).max(1))
                    }
                    Offset::Absolute(offset) => {
                        let offset = (offset % fd.size) as u64;
                        (offset, (size.0.min(fd.size - offset as usize)).max(1))
                    }
                };
                info!(?idx, ?offset, ?size, "read");

                // TODO fix https://github.com/awslabs/mountpoint-s3/issues/791 and then remove this check
                if fd.mode.is_write() {
                    info!("skipping read to write-mode FD due to page cache bug; see https://github.com/awslabs/mountpoint-s3/issues/791");
                    continue;
                }

                let mut buf1 = vec![0; size];
                let mut buf2 = vec![0; size];
                let ret1 = fd.fd1.read_at(&mut buf1, offset);
                let ret2 = fd.fd2.read_at(&mut buf2, offset);
                match state.check_read_result(op, fd, ret1, ret2) {
                    OpResult::Success(_) => {
                        assert_eq!(buf1, buf2);
                    }
                    OpResult::Continue => continue,
                    OpResult::Finish => return,
                }
                assert_eq!(buf1, buf2);
            }
            Op::Write { fd, offset, size } => {
                if state.fds.is_empty() {
                    continue;
                }
                let idx = fd.0 % state.fds.len();
                let fd = &state.fds[idx];
                let offset = match offset {
                    Offset::Current => {
                        // Get next read offset from the directory filesystem
                        (&fd.fd1).stream_position().unwrap()
                    }
                    Offset::Absolute(offset) => (offset % MAX_FILE_SIZE).max(1) as u64,
                };
                let size = (size.0 % MAX_FILE_SIZE).max(1).min(MAX_FILE_SIZE - offset as usize);
                info!(?idx, ?offset, ?size, "write");

                let buf = vec![0xaau8; size];
                let ret1 = fd.fd1.write_at(&buf, offset);
                let ret2 = fd.fd2.write_at(&buf, offset);
                match state.check_write_result(op, fd, offset, ret1, ret2) {
                    OpResult::Success(_) => {}
                    OpResult::Continue => continue,
                    OpResult::Finish => return,
                }
                let fd = &mut state.fds[idx];
                fd.size = fd.fd1.metadata().unwrap().len() as usize;
            }
            Op::Dup { fd } => {
                if state.fds.is_empty() {
                    continue;
                }
                let idx = fd.0 % state.fds.len();
                let fd = &mut state.fds[idx];
                info!(?idx, "dup");

                let f1 = fd.fd1.try_clone().expect("dup always succeeds");
                let f2 = fd.fd2.try_clone().expect("dup always succeeds");
                let path = fd.path.clone();
                let mode = fd.mode;
                let size = fd.size;
                state.fds.push(FdState {
                    fd1: f1,
                    fd2: f2,
                    path,
                    size,
                    mode,
                });
            }
            Op::Close { fd } => {
                if state.fds.is_empty() {
                    continue;
                }
                let idx = fd.0 % state.fds.len();
                info!(?idx, "close");

                let fd = state.fds.swap_remove(idx);

                // Explicitly capture the close return code so we can check if it fails
                let fd1 = fd.fd1.into_raw_fd();
                let fd2 = fd.fd2.into_raw_fd();
                // SAFETY: this was a valid file descriptor
                let ret1 = unsafe { libc::close(fd1) };
                // SAFETY: this was a valid file descriptor
                let ret2 = unsafe { libc::close(fd2) };

                // close should always succeed (modulo retries which we're not testing)
                assert_eq!(ret1, ret2);
            }
        }
    }

    for fd in state.fds {
        drop(fd.fd1);
        drop(fd.fd2);
    }
}

/// Entry point for test cases.
///
/// Set up the two file systems and then run the given operations against them.
fn diff_directory_mountpoint(ops: &[Op]) {
    let f1 = DirectoryFileSystem::new().unwrap();

    let config = S3FilesystemConfig {
        allow_delete: true,
        allow_overwrite: true,
        ..Default::default()
    };
    let f2 = MountpointFileSystem::new(config).unwrap();

    run(ops, f1, f2);
}

#[test]
fn smoke_test() {
    let ops = vec![
        Op::Open {
            file_path: FilePath(0),
            mode: OpenMode::Read,
        },
        Op::Read {
            fd: FileDescriptor(0),
            offset: Offset::Current,
            size: Size(10),
        },
        Op::Open {
            file_path: FilePath(1),
            mode: OpenMode::Read,
        },
        Op::Read {
            fd: FileDescriptor(1),
            offset: Offset::Absolute(5),
            size: Size(10),
        },
        Op::Read {
            fd: FileDescriptor(0),
            offset: Offset::Current,
            size: Size(100),
        },
    ];

    diff_directory_mountpoint(&ops);
}

proptest! {
    #![proptest_config(ProptestConfig {
        failure_persistence: None,
        .. ProptestConfig::default()
    })]

    #[test]
    fn proptest_fuse(ops in collection::vec(any::<Op>(), 1..10)) {
        diff_directory_mountpoint(&ops);
    }
}

/// https://github.com/awslabs/mountpoint-s3/issues/749
#[test]
fn regression_dup_read1() {
    let ops = vec![
        Op::Open {
            file_path: FilePath(0),
            mode: OpenMode::Read,
        },
        Op::Dup { fd: FileDescriptor(0) },
        Op::Read {
            fd: FileDescriptor(0),
            offset: Offset::Current,
            size: Size(1),
        },
        Op::Close { fd: FileDescriptor(0) },
        Op::Read {
            fd: FileDescriptor(0),
            offset: Offset::Absolute(0),
            size: Size(16385),
        },
    ];

    diff_directory_mountpoint(&ops);
}

/// https://github.com/awslabs/mountpoint-s3/issues/749
#[test]
fn regression_dup_read2() {
    let ops = vec![
        Op::Open {
            file_path: FilePath(0),
            mode: OpenMode::Read,
        },
        Op::Open {
            file_path: FilePath(0),
            mode: OpenMode::Read,
        },
        Op::Read {
            fd: FileDescriptor(0),
            offset: Offset::Current,
            size: Size(1),
        },
        Op::Open {
            file_path: FilePath(0),
            mode: OpenMode::Read,
        },
        Op::Dup { fd: FileDescriptor(0) },
        Op::Close { fd: FileDescriptor(3) },
        Op::Read {
            fd: FileDescriptor(0),
            offset: Offset::Current,
            size: Size(1),
        },
    ];

    diff_directory_mountpoint(&ops);
}

/// Make sure that we don't continue after truncating a file in a way Mountpoint doesn't allow
#[test]
fn open_open_read() {
    let ops = vec![
        Op::Open {
            file_path: FilePath(3),
            mode: OpenMode::ReadWrite { truncate: false },
        },
        Op::Open {
            file_path: FilePath(11),
            mode: OpenMode::Write { truncate: true },
        },
        Op::Read {
            fd: FileDescriptor(0),
            offset: Offset::Current,
            size: Size(0),
        },
    ];

    diff_directory_mountpoint(&ops);
}

/// Incorrectly (partially) serving the read from page cache
/// https://github.com/awslabs/mountpoint-s3/issues/791
#[test]
fn open_write_read() {
    let ops = vec![
        Op::Open {
            file_path: FilePath(0),
            mode: OpenMode::ReadWrite { truncate: true },
        },
        Op::Write {
            fd: FileDescriptor(0),
            offset: Offset::Current,
            size: Size(4097),
        },
        Op::Read {
            fd: FileDescriptor(0),
            offset: Offset::Absolute(0),
            size: Size(4097),
        },
    ];

    diff_directory_mountpoint(&ops);
}
