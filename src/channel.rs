//!
//! Raw communication channel to the FUSE kernel driver.
//!

use std::os;
use libc::{c_int, c_void, size_t};
use fuse::{fuse_args, fuse_mount_compat25, fuse_unmount_compat22};

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

        pub fn realpath (file_name: *const c_char, resolved_name: *mut c_char) -> *const c_char;

        pub fn unmount(dir: *const c_char, flags: c_int) -> c_int;
    }

    /// Max length for path names. 4096 should be reasonable safe (OS X uses 1024, Linux uses 4096)
    pub const PATH_MAX: int = 4096;
}

/// Wrapper around libc's realpath.  Returns the errno value if the real path cannot be obtained.
/// FIXME: Use Rust's realpath method once available in std (see also https://github.com/mozilla/rust/issues/11857)
fn real_path (path: &PosixPath) -> Result<PosixPath, c_int> {
    path.with_c_str(|p| {
        let mut resolved = [0, ..libc::PATH_MAX as uint];
        unsafe {
            let rp = libc::realpath(p, resolved.as_mut_ptr());
            if rp.is_null() {
                Err(::std::os::errno() as c_int)
            } else {
                Ok(PosixPath::new(::std::c_str::CString::new(rp,false)))
            }
        }
    })
}

/// Helper function to provide options as a fuse_args struct
/// (which contains an argc count and an argv pointer)
fn with_fuse_args<T> (options: &[&[u8]], f: |&fuse_args| -> T) -> T {
    let progname = "rust-fuse";
    let args = Vec::from_fn(1+options.len(), |i| {
        match i {
            0 => progname.to_c_str(),
            _ => options[i-1].to_c_str(),
        }
    });
    let argptrs: Vec<*const i8> = args.iter().map(|s| s.as_ptr()).collect();
    f(&fuse_args { argc: argptrs.len() as i32, argv: argptrs.as_ptr(), allocated: 0 })
}

/// A raw communication channel to the FUSE kernel driver
pub struct Channel {
    mountpoint: Path,
    fd: c_int,
}

impl Channel {
    /// Create a new communication channel to the kernel driver by mounting the
    /// given path. The kernel driver will delegate filesystem operations of
    /// the given path to the channel. If the channel is dropped, the path is
    /// unmounted.
    pub fn new (mountpoint: &Path, options: &[&[u8]]) -> Result<Channel, c_int> {
        real_path(mountpoint).and_then(|mountpoint| mountpoint.with_c_str(|mnt| {
            with_fuse_args(options, |args| {
                let fd = unsafe { fuse_mount_compat25(mnt, args) };
                if fd < 0 {
                    Err(os::errno() as c_int)
                } else {
                    Ok(Channel { mountpoint: mountpoint.clone(), fd: fd })
                }
            })
        }))
    }

    /// Receives data up to the size of the given buffer and returns the size
    /// of the received data.
    /// Note: Can block natively, so it should be called from a separate thread
    pub fn receive (&self, buffer: &mut [u8]) -> Result<uint, c_int> {
        let rc = unsafe { ::libc::read(self.fd, buffer.as_ptr() as *mut c_void, buffer.len() as size_t) };
        if rc < 0 {
            Err(os::errno() as c_int)
        } else {
            Ok(rc as uint)
        }
    }

    /// Returns a sender object for this channel. The sender object can be
    /// used to send to the channel. Multiple sender objects can be used
    /// and they can safely be sent to other tasks.
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
        unmount(&self.mountpoint);
    }
}

pub struct ChannelSender {
    fd: c_int,
}

impl ChannelSender {
    /// Send all data in the slice of slice of bytes in a single write.
    /// Note: Can block natively, so it should be called from a separate thread
    pub fn send (&self, buffer: &[&[u8]]) -> Result<(), c_int> {
        let iovecs: Vec<libc::iovec> = buffer.iter().map(|d| {
            libc::iovec { iov_base: d.as_ptr() as *const c_void, iov_len: d.len() as size_t }
        }).collect();
        let rc = unsafe { libc::writev(self.fd, iovecs.as_ptr(), iovecs.len() as c_int) };
        if rc < 0 {
            Err(os::errno() as c_int)
        } else {
            Ok(())
        }
    }
}

/// Unmount an arbitrary mount point
pub fn unmount (mountpoint: &Path) {
    mountpoint.with_c_str(|mnt| {
        // On OS X, fuse_unmount_compat22 attempts to call realpath, which in turn calls into the filesystem.
        // If the filesystem returns an error, the unmount does not take place, with no indication of the error
        // available to the caller.  So we call unmount directly, which is what osxfuse does anyway, since
        // we already converted to the real path when we first mounted.
        if cfg!(target_os = "macos") {
            unsafe { libc::unmount(mnt, 0); }
        } else {
            unsafe { fuse_unmount_compat22(mnt); }
        }
    })
}


#[cfg(test)]
mod test {
    use super::with_fuse_args;
    use std::c_str::CString;

    #[test]
    fn fuse_args () {
        with_fuse_args(&[b"foo", b"bar"], |args| {
            assert!(args.argc == 3);
            let cmp_arg = |i, val: &[u8]| {
                let arg = unsafe { CString::new(*args.argv.offset(i), false) };
                assert_eq!(arg.as_bytes(), val);
            };
            cmp_arg(0, b"rust-fuse\0");
            cmp_arg(1, b"foo\0");
            cmp_arg(2, b"bar\0");
        });
    }
}
