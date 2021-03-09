use fuse2_sys::*;
use std::{fs::File, os::unix::prelude::FromRawFd};

use super::*;

#[derive(Debug)]
pub struct Mount {
    mountpoint: CString,
}
impl Mount {
    pub fn new(mountpoint: &Path, options: &[&OsStr]) -> io::Result<(File, Mount)> {
        let mountpoint = CString::new(mountpoint.as_os_str().as_bytes()).unwrap();
        with_fuse_args(options, |args| {
            let fd = unsafe { fuse_mount_compat25(mountpoint.as_ptr(), args) };
            if fd < 0 {
                Err(io::Error::last_os_error())
            } else {
                Ok((unsafe { File::from_raw_fd(fd) }, Mount { mountpoint }))
            }
        })
    }
}
impl Drop for Mount {
    fn drop(&mut self) {
        use std::io::ErrorKind::PermissionDenied;

        // fuse_unmount_compat22 unfortunately doesn't return a status. Additionally,
        // it attempts to call realpath, which in turn calls into the filesystem. So
        // if the filesystem returns an error, the unmount does not take place, with
        // no indication of the error available to the caller. So we call unmount
        // directly, which is what osxfuse does anyway, since we already converted
        // to the real path when we first mounted.
        let rc = super::libc_umount(&self.mountpoint);
        if rc < 0 && io::Error::last_os_error().kind() == PermissionDenied {
            // Linux always returns EPERM for non-root users.  We have to let the
            // library go through the setuid-root "fusermount -u" to unmount.
            #[cfg(not(any(
                target_os = "macos",
                target_os = "freebsd",
                target_os = "dragonfly",
                target_os = "openbsd",
                target_os = "bitrig",
                target_os = "netbsd"
            )))]
            unsafe {
                fuse_unmount_compat22(self.mountpoint.as_ptr());
            }
        }
    }
}
