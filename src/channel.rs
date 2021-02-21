//! FUSE kernel driver communication
//!
//! Raw communication channel to the FUSE kernel driver.

#[cfg(any(feature = "libfuse", test))]
use crate::fuse_sys::fuse_args;
#[cfg(feature = "libfuse2")]
use crate::fuse_sys::fuse_mount_compat25;
#[cfg(not(feature = "libfuse"))]
use crate::fuse_sys::{fuse_mount_pure, fuse_unmount_pure};
#[cfg(feature = "libfuse3")]
use crate::fuse_sys::{
    fuse_session_destroy, fuse_session_fd, fuse_session_mount, fuse_session_new,
    fuse_session_unmount,
};
use libc::{self, c_int, c_void, size_t};
use log::error;
#[cfg(any(feature = "libfuse", test))]
use std::ffi::OsStr;
use std::ffi::{CStr, CString};
use std::os::unix::ffi::OsStrExt;
use std::path::{Path, PathBuf};
use std::{io, ptr};

use crate::reply::ReplySender;
#[cfg(not(feature = "libfuse"))]
use crate::MountOption;

/// Helper function to provide options as a fuse_args struct
/// (which contains an argc count and an argv pointer)
#[cfg(any(feature = "libfuse", test))]
fn with_fuse_args<T, F: FnOnce(&fuse_args) -> T>(options: &[&OsStr], f: F) -> T {
    let mut args = vec![CString::new("rust-fuse").unwrap()];
    args.extend(options.iter().map(|s| CString::new(s.as_bytes()).unwrap()));
    let argptrs: Vec<_> = args.iter().map(|s| s.as_ptr()).collect();
    f(&fuse_args {
        argc: argptrs.len() as i32,
        argv: argptrs.as_ptr(),
        allocated: 0,
    })
}

/// A raw communication channel to the FUSE kernel driver
#[derive(Debug)]
pub struct Channel {
    mountpoint: PathBuf,
    pub(in crate) fd: c_int,
    pub(in crate) fuse_session: *mut c_void,
}

impl Channel {
    /// Create a new communication channel to the kernel driver by mounting the
    /// given path. The kernel driver will delegate filesystem operations of
    /// the given path to the channel. If the channel is dropped, the path is
    /// unmounted.
    #[cfg(feature = "libfuse2")]
    pub fn new(mountpoint: &Path, options: &[&OsStr]) -> io::Result<Channel> {
        let mountpoint = mountpoint.canonicalize()?;
        with_fuse_args(options, |args| {
            let mnt = CString::new(mountpoint.as_os_str().as_bytes())?;
            let fd = unsafe { fuse_mount_compat25(mnt.as_ptr(), args) };
            if fd < 0 {
                Err(io::Error::last_os_error())
            } else {
                Ok(Channel {
                    mountpoint,
                    fd,
                    fuse_session: ptr::null_mut(),
                })
            }
        })
    }

    #[cfg(feature = "libfuse3")]
    pub fn new(mountpoint: &Path, options: &[&OsStr]) -> io::Result<Channel> {
        let mountpoint = mountpoint.canonicalize()?;
        with_fuse_args(options, |args| {
            let mnt = CString::new(mountpoint.as_os_str().as_bytes())?;
            let fuse_session = unsafe { fuse_session_new(args, ptr::null(), 0, ptr::null_mut()) };
            if fuse_session.is_null() {
                return Err(io::Error::last_os_error());
            }
            let result = unsafe { fuse_session_mount(fuse_session, mnt.as_ptr()) };
            if result != 0 {
                return Err(io::Error::last_os_error());
            }
            let fd = unsafe { fuse_session_fd(fuse_session) };
            if fd < 0 {
                Err(io::Error::last_os_error())
            } else {
                Ok(Channel {
                    mountpoint,
                    fd,
                    fuse_session,
                })
            }
        })
    }

    #[cfg(not(feature = "libfuse"))]
    pub fn new2(mountpoint: &Path, options: &[MountOption]) -> io::Result<Channel> {
        let mountpoint = mountpoint.canonicalize()?;
        let fd = fuse_mount_pure(mountpoint.as_os_str(), options)?;
        if fd < 0 {
            Err(io::Error::last_os_error())
        } else {
            Ok(Channel {
                mountpoint,
                fd,
                fuse_session: ptr::null_mut(),
            })
        }
    }

    /// Return path of the mounted filesystem
    pub fn mountpoint(&self) -> &Path {
        &self.mountpoint
    }

    /// Receives data up to the capacity of the given buffer (can block).
    pub fn receive(&self, buffer: &mut [u8]) -> io::Result<usize> {
        let rc = unsafe {
            libc::read(
                self.fd,
                buffer.as_ptr() as *mut c_void,
                buffer.len() as size_t,
            )
        };
        if rc < 0 {
            Err(io::Error::last_os_error())
        } else {
            Ok(rc as usize)
        }
    }

    /// Returns a sender object for this channel. The sender object can be
    /// used to send to the channel. Multiple sender objects can be used
    /// and they can safely be sent to other threads.
    pub fn sender(&self) -> ChannelSender {
        // Since write/writev syscalls are threadsafe, we can simply create
        // a sender by using the same fd and use it in other threads. Only
        // the channel closes the fd when dropped. If any sender is used after
        // dropping the channel, it'll return an EBADF error.
        ChannelSender { fd: self.fd }
    }
}

unsafe impl Send for Channel {}

impl Drop for Channel {
    fn drop(&mut self) {
        // TODO: send ioctl FUSEDEVIOCSETDAEMONDEAD on macOS before closing the fd
        // Close the communication channel to the kernel driver
        // (closing it before unnmount prevents sync unmount deadlock)
        unsafe {
            libc::close(self.fd);
        }
        // Unmount this channel's mount point
        let _ = unmount(&self.mountpoint, self.fuse_session, self.fd);
        self.fuse_session = ptr::null_mut(); // unmount frees this pointer
    }
}

#[derive(Clone, Copy, Debug)]
pub struct ChannelSender {
    fd: c_int,
}

impl ChannelSender {
    /// Send all data in the slice of slice of bytes in a single write (can block).
    pub fn send(&self, buffer: &[&[u8]]) -> io::Result<()> {
        let iovecs: Vec<_> = buffer
            .iter()
            .map(|d| libc::iovec {
                iov_base: d.as_ptr() as *mut c_void,
                iov_len: d.len() as size_t,
            })
            .collect();
        let rc = unsafe { libc::writev(self.fd, iovecs.as_ptr(), iovecs.len() as c_int) };
        if rc < 0 {
            Err(io::Error::last_os_error())
        } else {
            Ok(())
        }
    }
}

impl ReplySender for ChannelSender {
    fn send(&self, data: &[&[u8]]) {
        if let Err(err) = ChannelSender::send(self, data) {
            error!("Failed to send FUSE reply: {}", err);
        }
    }
}

/// Unmount an arbitrary mount point
#[allow(unused_variables)]
pub fn unmount(mountpoint: &Path, fuse_session: *mut c_void, fd: c_int) -> io::Result<()> {
    // fuse_unmount_compat22 unfortunately doesn't return a status. Additionally,
    // it attempts to call realpath, which in turn calls into the filesystem. So
    // if the filesystem returns an error, the unmount does not take place, with
    // no indication of the error available to the caller. So we call unmount
    // directly, which is what osxfuse does anyway, since we already converted
    // to the real path when we first mounted.

    #[cfg(any(
        target_os = "macos",
        target_os = "freebsd",
        target_os = "dragonfly",
        target_os = "openbsd",
        target_os = "bitrig",
        target_os = "netbsd"
    ))]
    #[inline]
    fn libc_umount(mnt: &CStr, _fuse_session: *mut c_void, _fd: c_int) -> c_int {
        unsafe { libc::unmount(mnt.as_ptr(), 0) }
    }

    #[cfg(not(any(
        target_os = "macos",
        target_os = "freebsd",
        target_os = "dragonfly",
        target_os = "openbsd",
        target_os = "bitrig",
        target_os = "netbsd"
    )))]
    #[inline]
    fn libc_umount(mnt: &CStr, fuse_session: *mut c_void, fd: c_int) -> c_int {
        #[cfg(feature = "libfuse2")]
        use crate::fuse_sys::fuse_unmount_compat22;
        use std::io::ErrorKind::PermissionDenied;

        let rc = unsafe { libc::umount(mnt.as_ptr()) };
        if rc < 0 && io::Error::last_os_error().kind() == PermissionDenied {
            // Linux always returns EPERM for non-root users.  We have to let the
            // library go through the setuid-root "fusermount -u" to unmount.
            #[cfg(feature = "libfuse2")]
            unsafe {
                fuse_unmount_compat22(mnt.as_ptr());
            }
            #[cfg(feature = "libfuse3")]
            unsafe {
                if fuse_session.is_null() {
                    fuse_session_unmount(fuse_session);
                    fuse_session_destroy(fuse_session);
                }
            }
            #[cfg(not(feature = "libfuse"))]
            fuse_unmount_pure(mnt, fd);

            0
        } else {
            rc
        }
    }

    let mnt = CString::new(mountpoint.as_os_str().as_bytes())?;
    let rc = libc_umount(&mnt, fuse_session, fd);
    if rc < 0 {
        Err(io::Error::last_os_error())
    } else {
        Ok(())
    }
}

#[cfg(test)]
mod test {
    use super::with_fuse_args;
    use std::ffi::{CStr, OsStr};

    #[test]
    fn fuse_args() {
        with_fuse_args(&[OsStr::new("foo"), OsStr::new("bar")], |args| {
            assert_eq!(args.argc, 3);
            assert_eq!(
                unsafe { CStr::from_ptr(*args.argv.offset(0)).to_bytes() },
                b"rust-fuse"
            );
            assert_eq!(
                unsafe { CStr::from_ptr(*args.argv.offset(1)).to_bytes() },
                b"foo"
            );
            assert_eq!(
                unsafe { CStr::from_ptr(*args.argv.offset(2)).to_bytes() },
                b"bar"
            );
        });
    }
}
