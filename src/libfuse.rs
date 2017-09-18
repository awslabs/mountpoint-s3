//! Native FFI bindings to libfuse
//!
//! This is a small set of bindings that are required to mount/unmount FUSE filesystems and
//! open/close a fd to the kernel driver with it. Since these bindings by far don't cover
//! everything in libfuse, we don't use a fuse-sys crate. It would actually be nice to get rid
//! of these bindings to become independent from libfuse, but FUSE mounting isn't trivial
//! unfortunately.
#![allow(non_camel_case_types, missing_docs, dead_code)]

use std::os::raw::{c_char, c_int};

#[repr(C)]
pub struct fuse_args {
    pub argc: c_int,
    pub argv: *const *const c_char,
    pub allocated: c_int,
}

extern "C" {
    // *_compat25 functions were introduced in FUSE 2.6 when function signatures changed.
    // Therefore, the minimum version requirement for *_compat25 functions is libfuse-2.6.0.

    pub fn fuse_mount_compat25(mountpoint: *const c_char, args: *const fuse_args) -> c_int;
    pub fn fuse_unmount_compat22(mountpoint: *const c_char);
}
