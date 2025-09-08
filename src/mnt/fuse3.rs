use super::fuse3_sys::{
    fuse_lowlevel_ops, fuse_session_destroy, fuse_session_fd, fuse_session_mount, fuse_session_new,
    fuse_session_unmount,
};
use super::{MountOption, with_fuse_args};
use log::warn;
use std::{
    ffi::{CString, c_void},
    fs::File,
    io,
    os::unix::{ffi::OsStrExt, io::FromRawFd},
    path::Path,
    ptr,
    sync::Arc,
};

/// Ensures that an os error is never 0/Success
fn ensure_last_os_error() -> io::Error {
    let err = io::Error::last_os_error();
    match err.raw_os_error() {
        Some(0) => io::Error::new(io::ErrorKind::Other, "Unspecified Error"),
        _ => err,
    }
}

#[derive(Debug)]
pub struct Mount {
    fuse_session: *mut c_void,
    mountpoint: CString,
}
impl Mount {
    pub fn new(mnt: &Path, options: &[MountOption]) -> io::Result<(Arc<File>, Mount)> {
        let mnt = CString::new(mnt.as_os_str().as_bytes()).unwrap();
        with_fuse_args(options, |args| {
            let ops = fuse_lowlevel_ops::default();

            let fuse_session = unsafe {
                fuse_session_new(
                    args,
                    &ops as *const _,
                    std::mem::size_of::<fuse_lowlevel_ops>(),
                    ptr::null_mut(),
                )
            };
            if fuse_session.is_null() {
                return Err(io::Error::last_os_error());
            }
            let mount = Mount {
                fuse_session,
                mountpoint: mnt.clone(),
            };
            let result = unsafe { fuse_session_mount(mount.fuse_session, mnt.as_ptr()) };
            if result != 0 {
                return Err(ensure_last_os_error());
            }
            let fd = unsafe { fuse_session_fd(mount.fuse_session) };
            if fd < 0 {
                return Err(io::Error::last_os_error());
            }
            // We dup the fd here as the existing fd is owned by the fuse_session, and we
            // don't want it being closed out from under us:
            let fd = nix::fcntl::fcntl(fd, nix::fcntl::FcntlArg::F_DUPFD_CLOEXEC(0))?;
            let file = unsafe { File::from_raw_fd(fd) };
            Ok((Arc::new(file), mount))
        })
    }
}
impl Drop for Mount {
    fn drop(&mut self) {
        use std::io::ErrorKind::PermissionDenied;

        if let Err(err) = super::libc_umount(&self.mountpoint) {
            // Linux always returns EPERM for non-root users.  We have to let the
            // library go through the setuid-root "fusermount -u" to unmount.
            if err.kind() == PermissionDenied {
                #[cfg(target_os = "linux")]
                unsafe {
                    fuse_session_unmount(self.fuse_session);
                    fuse_session_destroy(self.fuse_session);
                    return;
                }
            }
            warn!("umount failed with {err:?}");
        }
    }
}
unsafe impl Send for Mount {}
