//! Native FFI bindings to libfuse3.
//!
//! This is a small set of bindings that are required to mount/unmount FUSE filesystems and
//! open/close a fd to the FUSE kernel driver.
#![warn(missing_debug_implementations)]
#![allow(missing_docs)]
#![allow(non_camel_case_types)]
use super::fuse2_sys::fuse_args;
use libc::{c_char, c_int, c_uint, c_void, dev_t, mode_t, off_t, size_t};
// Opaque types for FUSE-specific pointers
type fuse_req_t = *mut c_void;
type fuse_pollhandle = *mut c_void;
type fuse_bufvec = *mut c_void;
type fuse_forget_data = *mut c_void;
pub type fuse_ino_t = u64;
// Struct to represent fuse_file_info
#[repr(C)]
pub struct fuse_file_info {
    // Simplified; actual fields depend on FUSE version
    pub flags: c_int,
    pub fh: u64,
    // Add other fields as needed
}
// Struct to represent stat
#[repr(C)]
pub struct stat {
    pub st_ino: u64,
    pub st_mode: mode_t,
    // Add other fields as needed
}
// Struct to represent flock
#[repr(C)]
pub struct flock {
    pub l_type: c_int,
    pub l_start: off_t,
    pub l_len: off_t,
    pub l_pid: c_int,
    // Add other fields as needed
}
// Struct to represent fuse_conn_info
#[repr(C)]
pub struct fuse_conn_info {
    pub proto_major: c_uint,
    pub proto_minor: c_uint,
    // Add other fields as needed
}
// Rust binding for fuse_lowlevel_ops
#[repr(C)]
#[derive(Default)]
pub struct fuse_lowlevel_ops {
    pub init: Option<extern "C" fn(userdata: *mut c_void, conn: *mut fuse_conn_info)>,
    pub destroy: Option<extern "C" fn(userdata: *mut c_void)>,
    pub lookup: Option<extern "C" fn(req: fuse_req_t, parent: fuse_ino_t, name: *const c_char)>,
    pub forget: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, nlookup: u64)>,
    pub getattr: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub setattr: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            attr: *mut stat,
            to_set: c_int,
            fi: *mut fuse_file_info,
        ),
    >,
    pub readlink: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t)>,
    pub mknod: Option<
        extern "C" fn(
            req: fuse_req_t,
            parent: fuse_ino_t,
            name: *const c_char,
            mode: mode_t,
            rdev: dev_t,
        ),
    >,
    pub mkdir: Option<
        extern "C" fn(req: fuse_req_t, parent: fuse_ino_t, name: *const c_char, mode: mode_t),
    >,
    pub unlink: Option<extern "C" fn(req: fuse_req_t, parent: fuse_ino_t, name: *const c_char)>,
    pub rmdir: Option<extern "C" fn(req: fuse_req_t, parent: fuse_ino_t, name: *const c_char)>,
    pub symlink: Option<
        extern "C" fn(
            req: fuse_req_t,
            link: *const c_char,
            parent: fuse_ino_t,
            name: *const c_char,
        ),
    >,
    pub rename: Option<
        extern "C" fn(
            req: fuse_req_t,
            parent: fuse_ino_t,
            name: *const c_char,
            newparent: fuse_ino_t,
            newname: *const c_char,
            flags: c_uint,
        ),
    >,
    pub link: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            newparent: fuse_ino_t,
            newname: *const c_char,
        ),
    >,
    pub open: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub read: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            size: size_t,
            off: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub write: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            buf: *const c_char,
            size: size_t,
            off: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub flush: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub release: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub fsync: Option<
        extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, datasync: c_int, fi: *mut fuse_file_info),
    >,
    pub opendir: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub readdir: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            size: size_t,
            off: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub releasedir:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub fsyncdir: Option<
        extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, datasync: c_int, fi: *mut fuse_file_info),
    >,
    pub statfs: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t)>,
    pub setxattr: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            name: *const c_char,
            value: *const c_char,
            size: size_t,
            flags: c_int,
        ),
    >,
    pub getxattr:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, name: *const c_char, size: size_t)>,
    pub listxattr: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, size: size_t)>,
    pub removexattr: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, name: *const c_char)>,
    pub access: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, mask: c_int)>,
    pub create: Option<
        extern "C" fn(
            req: fuse_req_t,
            parent: fuse_ino_t,
            name: *const c_char,
            mode: mode_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub getlk: Option<
        extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info, lock: *mut flock),
    >,
    pub setlk: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            fi: *mut fuse_file_info,
            lock: *mut flock,
            sleep: c_int,
        ),
    >,
    pub bmap: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, blocksize: size_t, idx: u64)>,
    pub ioctl: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            cmd: c_uint,
            arg: *mut c_void,
            fi: *mut fuse_file_info,
            flags: c_uint,
            in_buf: *const c_void,
            in_bufsz: size_t,
            out_bufsz: size_t,
        ),
    >,
    pub poll: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            fi: *mut fuse_file_info,
            ph: *mut fuse_pollhandle,
        ),
    >,
    pub write_buf: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            bufv: *mut fuse_bufvec,
            off: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub retrieve_reply: Option<
        extern "C" fn(
            req: fuse_req_t,
            cookie: *mut c_void,
            ino: fuse_ino_t,
            offset: off_t,
            bufv: *mut fuse_bufvec,
        ),
    >,
    pub forget_multi:
        Option<extern "C" fn(req: fuse_req_t, count: size_t, forgets: *mut fuse_forget_data)>,
    pub flock:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info, op: c_int)>,
    pub fallocate: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            mode: c_int,
            offset: off_t,
            length: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub readdirplus: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            size: size_t,
            off: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub copy_file_range: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino_in: fuse_ino_t,
            off_in: off_t,
            fi_in: *mut fuse_file_info,
            ino_out: fuse_ino_t,
            off_out: off_t,
            fi_out: *mut fuse_file_info,
            len: size_t,
            flags: c_int,
        ),
    >,
    pub lseek: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            off: off_t,
            whence: c_int,
            fi: *mut fuse_file_info,
        ),
    >,
    pub tmpfile: Option<
        extern "C" fn(req: fuse_req_t, parent: fuse_ino_t, mode: mode_t, fi: *mut fuse_file_info),
    >,
}
unsafe extern "C" {
    // Really this returns *fuse_session, but we don't need to access its fields
    pub fn fuse_session_new(
        args: *const fuse_args,
        op: *const fuse_lowlevel_ops,
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
