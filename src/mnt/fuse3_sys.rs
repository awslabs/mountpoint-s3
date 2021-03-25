//! Native FFI bindings to libfuse3.
//!
//! This is a small set of bindings that are required to mount/unmount FUSE filesystems and
//! open/close a fd to the FUSE kernel driver.

#![warn(missing_debug_implementations)]
#![allow(missing_docs)]

use super::fuse2_sys::fuse_args;
use libc::c_void;
use libc::{c_char, c_int};

extern "C" {
    // Really this returns *fuse_session, but we don't need to access its fields
    pub fn fuse_session_new(
        args: *const fuse_args,
        op: *const c_void, // This argument is really a *const fuse_lowlevel_ops, but we don't use them
        op_size: libc::size_t,
        userdata: *mut c_void,
    ) -> *mut c_void;
    pub fn fuse_session_mount(
        se: *mut c_void, // This argument is really a *fuse_session
        mountpoint: *const c_char,
    ) -> c_int;
    // This function's argument is really a *fuse_session
    pub fn fuse_session_fd(se: *mut c_void) -> c_int;
    // This function's argument is really a *fuse_session
    pub fn fuse_session_unmount(se: *mut c_void);
    // This function's argument is really a *fuse_session
    pub fn fuse_session_destroy(se: *mut c_void);
}
