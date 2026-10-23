//! Native FFI bindings to libfuse3.
//!
//! This is a small set of bindings that are required to mount/unmount FUSE filesystems and
//! open/close a fd to the FUSE kernel driver.
#![warn(missing_debug_implementations)]
#![allow(missing_docs)]
#![allow(non_camel_case_types)]
use libc::c_char;
use libc::c_int;
use libc::c_uint;
use libc::c_void;
use libc::dev_t;
use libc::mode_t;
use libc::off_t;
use libc::size_t;

use crate::mnt::fuse2_sys::fuse_args;
// Opaque types for FUSE-specific pointers
type fuse_req_t = *mut c_void;
type fuse_pollhandle = *mut c_void;
type fuse_bufvec = *mut c_void;
type fuse_forget_data = *mut c_void;
pub(crate) type fuse_ino_t = u64;
// Struct to represent fuse_file_info
#[repr(C)]
pub(crate) struct fuse_file_info {
    // Simplified; actual fields depend on FUSE version
    pub(crate) flags: c_int,
    pub(crate) fh: u64,
    // Add other fields as needed
}
// Struct to represent stat
#[repr(C)]
pub(crate) struct stat {
    pub(crate) st_ino: u64,
    pub(crate) st_mode: mode_t,
    // Add other fields as needed
}
// Struct to represent flock
#[repr(C)]
pub(crate) struct flock {
    pub(crate) l_type: c_int,
    pub(crate) l_start: off_t,
    pub(crate) l_len: off_t,
    pub(crate) l_pid: c_int,
    // Add other fields as needed
}
// Struct to represent fuse_conn_info
#[repr(C)]
pub(crate) struct fuse_conn_info {
    pub(crate) proto_major: c_uint,
    pub(crate) proto_minor: c_uint,
    // Add other fields as needed
}
// Rust binding for fuse_lowlevel_ops
#[repr(C)]
#[derive(Default)]
pub(crate) struct fuse_lowlevel_ops {
    pub(crate) init: Option<extern "C" fn(userdata: *mut c_void, conn: *mut fuse_conn_info)>,
    pub(crate) destroy: Option<extern "C" fn(userdata: *mut c_void)>,
    pub(crate) lookup:
        Option<extern "C" fn(req: fuse_req_t, parent: fuse_ino_t, name: *const c_char)>,
    pub(crate) forget: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, nlookup: u64)>,
    pub(crate) getattr:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub(crate) setattr: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            attr: *mut stat,
            to_set: c_int,
            fi: *mut fuse_file_info,
        ),
    >,
    pub(crate) readlink: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t)>,
    pub(crate) mknod: Option<
        extern "C" fn(
            req: fuse_req_t,
            parent: fuse_ino_t,
            name: *const c_char,
            mode: mode_t,
            rdev: dev_t,
        ),
    >,
    pub(crate) mkdir: Option<
        extern "C" fn(req: fuse_req_t, parent: fuse_ino_t, name: *const c_char, mode: mode_t),
    >,
    pub(crate) unlink:
        Option<extern "C" fn(req: fuse_req_t, parent: fuse_ino_t, name: *const c_char)>,
    pub(crate) rmdir:
        Option<extern "C" fn(req: fuse_req_t, parent: fuse_ino_t, name: *const c_char)>,
    pub(crate) symlink: Option<
        extern "C" fn(
            req: fuse_req_t,
            link: *const c_char,
            parent: fuse_ino_t,
            name: *const c_char,
        ),
    >,
    pub(crate) rename: Option<
        extern "C" fn(
            req: fuse_req_t,
            parent: fuse_ino_t,
            name: *const c_char,
            newparent: fuse_ino_t,
            newname: *const c_char,
            flags: c_uint,
        ),
    >,
    pub(crate) link: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            newparent: fuse_ino_t,
            newname: *const c_char,
        ),
    >,
    pub(crate) open:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub(crate) read: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            size: size_t,
            off: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub(crate) write: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            buf: *const c_char,
            size: size_t,
            off: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub(crate) flush:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub(crate) release:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub(crate) fsync: Option<
        extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, datasync: c_int, fi: *mut fuse_file_info),
    >,
    pub(crate) opendir:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub(crate) readdir: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            size: size_t,
            off: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub(crate) releasedir:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info)>,
    pub(crate) fsyncdir: Option<
        extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, datasync: c_int, fi: *mut fuse_file_info),
    >,
    pub(crate) statfs: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t)>,
    pub(crate) setxattr: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            name: *const c_char,
            value: *const c_char,
            size: size_t,
            flags: c_int,
        ),
    >,
    pub(crate) getxattr:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, name: *const c_char, size: size_t)>,
    pub(crate) listxattr: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, size: size_t)>,
    pub(crate) removexattr:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, name: *const c_char)>,
    pub(crate) access: Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, mask: c_int)>,
    pub(crate) create: Option<
        extern "C" fn(
            req: fuse_req_t,
            parent: fuse_ino_t,
            name: *const c_char,
            mode: mode_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub(crate) getlk: Option<
        extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info, lock: *mut flock),
    >,
    pub(crate) setlk: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            fi: *mut fuse_file_info,
            lock: *mut flock,
            sleep: c_int,
        ),
    >,
    pub(crate) bmap:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, blocksize: size_t, idx: u64)>,
    pub(crate) ioctl: Option<
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
    pub(crate) poll: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            fi: *mut fuse_file_info,
            ph: *mut fuse_pollhandle,
        ),
    >,
    pub(crate) write_buf: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            bufv: *mut fuse_bufvec,
            off: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub(crate) retrieve_reply: Option<
        extern "C" fn(
            req: fuse_req_t,
            cookie: *mut c_void,
            ino: fuse_ino_t,
            offset: off_t,
            bufv: *mut fuse_bufvec,
        ),
    >,
    pub(crate) forget_multi:
        Option<extern "C" fn(req: fuse_req_t, count: size_t, forgets: *mut fuse_forget_data)>,
    pub(crate) flock:
        Option<extern "C" fn(req: fuse_req_t, ino: fuse_ino_t, fi: *mut fuse_file_info, op: c_int)>,
    pub(crate) fallocate: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            mode: c_int,
            offset: off_t,
            length: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub(crate) readdirplus: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            size: size_t,
            off: off_t,
            fi: *mut fuse_file_info,
        ),
    >,
    pub(crate) copy_file_range: Option<
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
    pub(crate) lseek: Option<
        extern "C" fn(
            req: fuse_req_t,
            ino: fuse_ino_t,
            off: off_t,
            whence: c_int,
            fi: *mut fuse_file_info,
        ),
    >,
    pub(crate) tmpfile: Option<
        extern "C" fn(req: fuse_req_t, parent: fuse_ino_t, mode: mode_t, fi: *mut fuse_file_info),
    >,
}
unsafe extern "C" {
    // Really this returns *fuse_session, but we don't need to access its fields
    pub(crate) fn fuse_session_new(
        args: *const fuse_args,
        op: *const fuse_lowlevel_ops,
        op_size: libc::size_t,
        userdata: *mut c_void,
    ) -> *mut c_void;
    pub(crate) fn fuse_session_mount(
        se: *mut c_void, // This argument is really a *fuse_session
        mountpoint: *const c_char,
    ) -> c_int;
    // This function's argument is really a *fuse_session
    pub(crate) fn fuse_session_fd(se: *mut c_void) -> c_int;
    // This function's argument is really a *fuse_session
    pub(crate) fn fuse_session_unmount(se: *mut c_void);
    // This function's argument is really a *fuse_session
    pub(crate) fn fuse_session_destroy(se: *mut c_void);
}
