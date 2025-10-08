use std::ffi::OsStr;
use std::fs::{File, ReadDir};
use std::path::Path;
use std::sync::Arc;

use nix::fcntl::{self, FdFlag};

use fuser::{Mount, MountOption};

/// Open `/dev/fuse` and call `mount` syscall with given `mount_point`.
///
/// The mount is automatically unmounted when the returned [Mount] is dropped.
pub fn mount_for_passing_fuse_fd(mount_point: &Path, options: &[MountOption]) -> (Arc<File>, Mount) {
    let (file, mount) = Mount::new(mount_point, options).unwrap();

    // fuser sets `FD_CLOEXEC` (i.e., close-on-exec) flag on the file descriptor in its libfuse3 implementation.
    // Since we're forking the process in some of our test cases, this prevents child process to inherit the FUSE fd and causes our tests to fail.
    // Here we're clearing this flag if its set on the FUSE fd.
    let mut flags = FdFlag::from_bits_retain(fcntl::fcntl(&file, fcntl::F_GETFD).unwrap());
    if flags.contains(FdFlag::FD_CLOEXEC) {
        flags.remove(FdFlag::FD_CLOEXEC);
        let _ = fcntl::fcntl(&file, fcntl::F_SETFD(flags)).unwrap();
    }

    (file, mount)
}

/// Take a `read_dir` iterator and return the entry names
pub fn read_dir_to_entry_names(read_dir_iter: ReadDir) -> Vec<String> {
    read_dir_iter
        .map(|entry| {
            let entry = entry.expect("no io err during readdir");
            let entry_path = entry.path();
            let name = entry_path
                .file_name()
                .and_then(OsStr::to_str)
                .expect("path should end with valid unicode file or dir name");
            name.to_owned()
        })
        .collect::<Vec<_>>()
}
