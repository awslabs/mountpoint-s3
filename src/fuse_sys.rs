//! Native FFI bindings to libfuse.
//!
//! This is a small set of bindings that are required to mount/unmount FUSE filesystems and
//! open/close a fd to the FUSE kernel driver.

#![warn(missing_debug_implementations)]
#![allow(missing_docs)]

#[cfg(feature = "abi-7-20")]
use libc::c_void;
use libc::{c_char, c_int};

#[repr(C)]
#[derive(Debug)]
pub struct fuse_args {
    pub argc: c_int,
    pub argv: *const *const c_char,
    pub allocated: c_int,
}

extern "C" {
    // *_compat25 functions were introduced in FUSE 2.6 when function signatures changed.
    // Therefore, the minimum version requirement for *_compat25 functions is libfuse-2.6.0.

    #[cfg(not(feature = "abi-7-20"))]
    pub fn fuse_mount_compat25(mountpoint: *const c_char, args: *const fuse_args) -> c_int;
    #[cfg(not(feature = "abi-7-20"))]
    pub fn fuse_unmount_compat22(mountpoint: *const c_char);
    #[cfg(feature = "abi-7-20")]
    // Really this returns *fuse_session, but we don't need to access its fields
    pub fn fuse_session_new(
        args: *const fuse_args,
        op: *const c_void, // This argument is really a *const fuse_lowlevel_ops, but we don't use them
        op_size: libc::size_t,
        userdata: *mut c_void,
    ) -> *mut c_void;
    #[cfg(feature = "abi-7-20")]
    pub fn fuse_session_mount(
        se: *mut c_void, // This argument is really a *fuse_session
        mountpoint: *const c_char,
    ) -> c_int;
    #[cfg(feature = "abi-7-20")]
    // This function's argument is really a *fuse_session
    pub fn fuse_session_fd(se: *mut c_void) -> c_int;
    #[cfg(feature = "abi-7-20")]
    // This function's argument is really a *fuse_session
    pub fn fuse_session_unmount(se: *mut c_void);
    #[cfg(feature = "abi-7-20")]
    // This function's argument is really a *fuse_session
    pub fn fuse_session_destroy(se: *mut c_void);
}
