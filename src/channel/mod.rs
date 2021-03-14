//! FUSE kernel driver communication
//!
//! Raw communication channel to the FUSE kernel driver.

#[cfg(feature = "libfuse2")]
mod fuse2;
#[cfg(any(feature = "libfuse", test))]
mod fuse2_sys;
#[cfg(feature = "libfuse3")]
mod fuse3;
#[cfg(feature = "libfuse3")]
mod fuse3_sys;

#[cfg(not(feature = "libfuse"))]
mod fuse_pure;
pub mod mount_options;

#[cfg(any(feature = "libfuse", test))]
use fuse2_sys::fuse_args;
use libc::{self, c_int, c_void, size_t};
use log::error;
use std::io;
use std::os::unix::prelude::AsRawFd;
use std::path::Path;
#[cfg(any(feature = "libfuse", test))]
use std::{
    ffi::{CString, OsStr},
    os::unix::ffi::OsStrExt,
};
use std::{fs::File, sync::Arc};

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

#[cfg(feature = "libfuse2")]
pub use fuse2::Mount;
#[cfg(feature = "libfuse3")]
pub use fuse3::Mount;
#[cfg(not(feature = "libfuse"))]
pub use fuse_pure::Mount;
#[cfg(not(feature = "libfuse3"))]
use std::ffi::CStr;

/// A raw communication channel to the FUSE kernel driver
#[derive(Debug)]
pub struct Channel(Arc<File>);

impl Channel {
    /// Create a new communication channel to the kernel driver by mounting the
    /// given path. The kernel driver will delegate filesystem operations of
    /// the given path to the channel.
    #[cfg(feature = "libfuse")]
    pub fn new(mountpoint: &Path, options: &[&OsStr]) -> io::Result<(Channel, Mount)> {
        let mountpoint = mountpoint.canonicalize()?;
        let (file, mount) = Mount::new(&mountpoint, options)?;
        Ok((Channel(Arc::new(file)), mount))
    }

    #[cfg(not(feature = "libfuse"))]
    pub fn new2(mountpoint: &Path, options: &[MountOption]) -> io::Result<(Channel, Mount)> {
        let (file, mount) = fuse_pure::Mount::new(mountpoint, options)?;
        Ok((Channel(file), mount))
    }

    /// Receives data up to the capacity of the given buffer (can block).
    pub fn receive(&self, buffer: &mut [u8]) -> io::Result<usize> {
        let rc = unsafe {
            libc::read(
                self.0.as_raw_fd(),
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
        // a sender by using the same file and use it in other threads.
        ChannelSender(self.0.clone())
    }
}

#[derive(Clone, Debug)]
pub struct ChannelSender(Arc<File>);

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
        let rc =
            unsafe { libc::writev(self.0.as_raw_fd(), iovecs.as_ptr(), iovecs.len() as c_int) };
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

#[cfg(not(feature = "libfuse3"))]
#[inline]
fn libc_umount(mnt: &CStr) -> std::io::Result<()> {
    #[cfg(any(
        target_os = "macos",
        target_os = "freebsd",
        target_os = "dragonfly",
        target_os = "openbsd",
        target_os = "bitrig",
        target_os = "netbsd"
    ))]
    let r = unsafe { libc::unmount(mnt.as_ptr(), 0) };

    #[cfg(not(any(
        target_os = "macos",
        target_os = "freebsd",
        target_os = "dragonfly",
        target_os = "openbsd",
        target_os = "bitrig",
        target_os = "netbsd"
    )))]
    let r = unsafe { libc::umount(mnt.as_ptr()) };
    if r < 0 {
        Err(io::Error::last_os_error())
    } else {
        Ok(())
    }
}

/// Warning: This will return true if the filesystem has been detached (lazy unmounted), but not
/// yet destroyed by the kernel.
#[cfg(any(test, not(feature = "libfuse")))]
fn is_mounted(fuse_device: &File) -> bool {
    use libc::{poll, pollfd};
    let mut poll_result = pollfd {
        fd: fuse_device.as_raw_fd(),
        events: 0,
        revents: 0,
    };
    loop {
        let res = unsafe { poll(&mut poll_result, 1, 0) };
        break match res {
            0 => true,
            1 => (poll_result.revents & libc::POLLERR) != 0,
            -1 => {
                let err = io::Error::last_os_error();
                if err.kind() == io::ErrorKind::Interrupted {
                    continue;
                } else {
                    // This should never happen. The fd is guaranteed good as `File` owns it.
                    // According to man poll ENOMEM is the only error code unhandled, so we panic
                    // consistent with rust's usual ENOMEM behaviour.
                    panic!("Poll failed with error {}", err)
                }
            }
            _ => unreachable!(),
        };
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use std::{
        ffi::{CStr, OsStr},
        mem::ManuallyDrop,
    };

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
    fn cmd_mount() -> String {
        std::str::from_utf8(
            std::process::Command::new("sh")
                .arg("-c")
                .arg("mount | grep fuse")
                .output()
                .unwrap()
                .stdout
                .as_ref(),
        )
        .unwrap()
        .to_owned()
    }

    #[test]
    fn mount_unmount() {
        // We use ManuallyDrop here to leak the directory on test failure.  We don't
        // want to try and clean up the directory if it's a mountpoint otherwise we'll
        // deadlock.
        let tmp = ManuallyDrop::new(tempfile::tempdir().unwrap());
        let (file, mount) = Mount::new(&tmp.path(), &[]).unwrap();
        let mnt = cmd_mount();
        eprintln!("Our mountpoint: {:?}\nfuse mounts:\n{}", tmp.path(), mnt,);
        assert!(mnt.contains(&*tmp.path().to_string_lossy()));
        assert!(is_mounted(&file));
        drop(mount);
        let mnt = cmd_mount();
        eprintln!("Our mountpoint: {:?}\nfuse mounts:\n{}", tmp.path(), mnt,);

        let detached = !mnt.contains(&*tmp.path().to_string_lossy());
        // Linux supports MNT_DETACH, so we expect unmount to succeed even if the FS
        // is busy.  Other systems don't so the unmount may fail and we will still
        // have the mount listed.  The mount will get cleaned up later.
        #[cfg(target_os = "linux")]
        assert!(detached);

        if detached {
            // We've detached successfully, it's safe to clean up:
            std::mem::ManuallyDrop::<_>::into_inner(tmp);
        }

        // Filesystem may have been lazy unmounted, so we can't assert this:
        // assert!(!is_mounted(&file));
    }
}
