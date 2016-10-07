//!
//! Raw communication channel to the FUSE kernel driver.
//!

use std::io;
use std::ffi::{CString, CStr, OsStr};
use std::os::unix::ffi::OsStrExt;
use std::path::{PathBuf, Path};
use libc::{c_int, c_void, size_t};
use fuse::{fuse_args, fuse_mount_compat25};
use reply::ReplySender;

// Libc provides iovec based I/O using readv and writev functions
#[allow(dead_code, non_camel_case_types)]
mod libc {
    use libc::{c_char, c_int, c_void, size_t, ssize_t};

    /// Iovec data structure for readv and writev calls.
    #[repr(C)]
    pub struct iovec {
        pub iov_base: *const c_void,
        pub iov_len: size_t,
    }

    extern "system" {
        /// Read data from fd into multiple buffers
        pub fn readv (fd: c_int, iov: *mut iovec, iovcnt: c_int) -> ssize_t;
        /// Write data from multiple buffers to fd
        pub fn writev (fd: c_int, iov: *const iovec, iovcnt: c_int) -> ssize_t;

        #[cfg(any(target_os = "macos", target_os = "freebsd", target_os = "dragonfly",
                  target_os = "openbsd", target_os = "bitrig", target_os = "netbsd"))]
        pub fn unmount(dir: *const c_char, flags: c_int) -> c_int;
        #[cfg(not(any(target_os = "macos", target_os = "freebsd", target_os = "dragonfly",
                      target_os = "openbsd", target_os = "bitrig", target_os = "netbsd")))]
        pub fn umount(dir: *const c_char) -> c_int;
    }
}

/// Helper function to provide options as a fuse_args struct
/// (which contains an argc count and an argv pointer)
fn with_fuse_args<T, F: FnOnce(&fuse_args) -> T> (options: &[&OsStr], f: F) -> T {
    let mut args: Vec<CString> = vec![CString::new("rust-fuse").unwrap()];
    args.extend(options.iter().map(|s| CString::new(s.as_bytes()).unwrap() ));
    let argptrs: Vec<*const i8> = args.iter().map(|s| s.as_ptr()).collect();
    f(&fuse_args { argc: argptrs.len() as i32, argv: argptrs.as_ptr(), allocated: 0 })
}

/// A raw communication channel to the FUSE kernel driver
#[derive(Debug)]
pub struct Channel {
    mountpoint: PathBuf,
    fd: c_int,
}

impl Channel {
    /// Create a new communication channel to the kernel driver by mounting the
    /// given path. The kernel driver will delegate filesystem operations of
    /// the given path to the channel. If the channel is dropped, the path is
    /// unmounted.
    pub fn new (mountpoint: &Path, options: &[&OsStr]) -> io::Result<Channel> {
        let mountpoint = try!(mountpoint.canonicalize());
        with_fuse_args(options, |args| {
            let mnt = try!(CString::new(mountpoint.as_os_str().as_bytes()));
            let fd = unsafe { fuse_mount_compat25(mnt.as_ptr(), args) };
            if fd < 0 {
                Err(io::Error::last_os_error())
            } else {
                Ok(Channel { mountpoint: mountpoint, fd: fd })
            }
        })
    }

    /// Return path of the mounted filesystem
    pub fn mountpoint (&self) -> &Path {
        &self.mountpoint
    }

    /// Receives data up to the capacity of the given buffer (can block).
    pub fn receive (&self, buffer: &mut Vec<u8>) -> io::Result<()> {
        let rc = unsafe { ::libc::read(self.fd, buffer.as_ptr() as *mut c_void, buffer.capacity() as size_t) };
        if rc < 0 {
            Err(io::Error::last_os_error())
        } else {
            unsafe { buffer.set_len(rc as usize); }
            Ok(())
        }
    }

    /// Returns a sender object for this channel. The sender object can be
    /// used to send to the channel. Multiple sender objects can be used
    /// and they can safely be sent to other threads.
    pub fn sender (&self) -> ChannelSender {
        // Since write/writev syscalls are threadsafe, we can simply create
        // a sender by using the same fd and use it in other threads. Only
        // the channel closes the fd when dropped. If any sender is used after
        // dropping the channel, it'll return an EBADF error.
        ChannelSender { fd: self.fd }
    }
}

impl Drop for Channel {
    fn drop (&mut self) {
        // TODO: send ioctl FUSEDEVIOCSETDAEMONDEAD on OS X before closing the fd
        // Close the communication channel to the kernel driver
        // (closing it before unnmount prevents sync unmount deadlock)
        unsafe { ::libc::close(self.fd); }
        // Unmount this channel's mount point
        let _ = unmount(&self.mountpoint);
    }
}

#[derive(Clone, Copy, Debug)]
pub struct ChannelSender {
    fd: c_int,
}

impl ChannelSender {
    /// Send all data in the slice of slice of bytes in a single write (can block).
    pub fn send (&self, buffer: &[&[u8]]) -> io::Result<()> {
        let iovecs: Vec<libc::iovec> = buffer.iter().map(|d| {
            libc::iovec { iov_base: d.as_ptr() as *const c_void, iov_len: d.len() as size_t }
        }).collect();
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
pub fn unmount (mountpoint: &Path) -> io::Result<()> {
    // fuse_unmount_compat22 unfortunately doesn't return a status. Additionally,
    // it attempts to call realpath, which in turn calls into the filesystem. So
    // if the filesystem returns an error, the unmount does not take place, with
    // no indication of the error available to the caller. So we call unmount
    // directly, which is what osxfuse does anyway, since we already converted
    // to the real path when we first mounted.

    #[cfg(any(target_os = "macos", target_os = "freebsd", target_os = "dragonfly",
              target_os = "openbsd", target_os = "bitrig", target_os = "netbsd"))] #[inline]
    fn libc_umount (mnt: &CStr) -> c_int { unsafe { libc::unmount(mnt.as_ptr(), 0) } }

    #[cfg(not(any(target_os = "macos", target_os = "freebsd", target_os = "dragonfly",
                  target_os = "openbsd", target_os = "bitrig", target_os = "netbsd")))] #[inline]
    fn libc_umount (mnt: &CStr) -> c_int {
        use fuse::fuse_unmount_compat22;
        use std::io::ErrorKind::PermissionDenied;

        let rc = unsafe { libc::umount(mnt.as_ptr()) };
        if rc < 0 && io::Error::last_os_error().kind() == PermissionDenied {
            // Linux always returns EPERM for non-root users.  We have to let the
            // library go through the setuid-root "fusermount -u" to unmount.
            unsafe { fuse_unmount_compat22(mnt.as_ptr()); }
            0
        } else {
            rc
        }
    }

    let mnt = try!(CString::new(mountpoint.as_os_str().as_bytes()));
    let rc = libc_umount(&mnt);
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
    fn fuse_args () {
        with_fuse_args(&[OsStr::new("foo"), OsStr::new("bar")], |args| {
            assert_eq!(args.argc, 3);
            assert_eq!(unsafe { CStr::from_ptr(*args.argv.offset(0)).to_bytes() }, b"rust-fuse");
            assert_eq!(unsafe { CStr::from_ptr(*args.argv.offset(1)).to_bytes() }, b"foo");
            assert_eq!(unsafe { CStr::from_ptr(*args.argv.offset(2)).to_bytes() }, b"bar");
        });
    }
}
