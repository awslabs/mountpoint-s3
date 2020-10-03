//! Native FFI bindings to libfuse.
//!
//! This is a small set of bindings that are required to mount/unmount FUSE filesystems and
//! open/close a fd to the FUSE kernel driver.

#![warn(missing_debug_implementations)]
#![allow(missing_docs)]

#[cfg(not(feature = "libfuse"))]
use crate::mount_options::{option_group, option_to_flag, option_to_string, MountOptionGroup};
#[cfg(not(feature = "libfuse"))]
use crate::MountOption;
#[cfg(feature = "abi-7-20")]
use libc::c_void;
use libc::{c_char, c_int};
#[cfg(not(feature = "libfuse"))]
use log::{debug, error};
#[cfg(not(feature = "libfuse"))]
use std::ffi::{CStr, CString, OsStr};
#[cfg(not(feature = "libfuse"))]
use std::fs::{File, OpenOptions};
#[cfg(not(feature = "libfuse"))]
use std::io;
#[cfg(not(feature = "libfuse"))]
use std::io::{Error, ErrorKind, Read};
#[cfg(not(feature = "libfuse"))]
use std::os::unix::ffi::OsStrExt;
#[cfg(not(feature = "libfuse"))]
use std::os::unix::fs::PermissionsExt;
#[cfg(not(feature = "libfuse"))]
use std::os::unix::io::{AsRawFd, FromRawFd, IntoRawFd};
#[cfg(not(feature = "libfuse"))]
use std::os::unix::net::UnixStream;
#[cfg(not(feature = "libfuse"))]
use std::process::{Command, Stdio};
#[cfg(not(feature = "libfuse"))]
use std::{mem, ptr};

#[cfg(not(feature = "libfuse"))]
const FUSERMOUNT_BIN: &str = "fusermount";
#[cfg(not(feature = "libfuse"))]
const FUSERMOUNT3_BIN: &str = "fusermount3";
#[cfg(not(feature = "libfuse"))]
const FUSERMOUNT_COMM_ENV: &str = "_FUSE_COMMFD";

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

    #[cfg(all(not(feature = "abi-7-20"), feature = "libfuse"))]
    pub fn fuse_mount_compat25(mountpoint: *const c_char, args: *const fuse_args) -> c_int;
    #[cfg(all(not(feature = "abi-7-20"), feature = "libfuse"))]
    pub fn fuse_unmount_compat22(mountpoint: *const c_char);
    #[cfg(all(feature = "abi-7-20", feature = "libfuse"))]
    // Really this returns *fuse_session, but we don't need to access its fields
    pub fn fuse_session_new(
        args: *const fuse_args,
        op: *const c_void, // This argument is really a *const fuse_lowlevel_ops, but we don't use them
        op_size: libc::size_t,
        userdata: *mut c_void,
    ) -> *mut c_void;
    #[cfg(all(feature = "abi-7-20", feature = "libfuse"))]
    pub fn fuse_session_mount(
        se: *mut c_void, // This argument is really a *fuse_session
        mountpoint: *const c_char,
    ) -> c_int;
    #[cfg(all(feature = "abi-7-20", feature = "libfuse"))]
    // This function's argument is really a *fuse_session
    pub fn fuse_session_fd(se: *mut c_void) -> c_int;
    #[cfg(all(feature = "abi-7-20", feature = "libfuse"))]
    // This function's argument is really a *fuse_session
    pub fn fuse_session_unmount(se: *mut c_void);
    #[cfg(all(feature = "abi-7-20", feature = "libfuse"))]
    // This function's argument is really a *fuse_session
    pub fn fuse_session_destroy(se: *mut c_void);
}

#[cfg(not(feature = "libfuse"))]
pub fn fuse_mount_pure(mountpoint: &OsStr, options: &[MountOption]) -> Result<c_int, io::Error> {
    if options.contains(&MountOption::AutoUnmount) {
        // Auto unmount is only supported via fusermount
        return fuse_mount_fusermount(mountpoint, options);
    }

    let res = fuse_mount_sys(mountpoint, options)?;
    if let Some(fd) = res {
        Ok(fd)
    } else {
        // Retry
        fuse_mount_fusermount(mountpoint, options)
    }
}

#[cfg(not(feature = "libfuse"))]
pub fn fuse_unmount_pure(mountpoint: &CStr, fd: c_int) {
    if fd != -1 {
        let mut poll_result = libc::pollfd {
            fd,
            events: 0,
            revents: 0,
        };

        unsafe {
            let result = libc::poll(&mut poll_result, 1, 0);
            libc::close(fd);
            // If the filesystem has already been unmounted, avoid unmounting it again
            // Unmounting it a second time could cause a race with a newly mounted filesystem
            // living at the same mountpoint
            if result > 0 && (poll_result.revents & libc::POLLERR) != 0 {
                return;
            }
        }
    }

    unsafe {
        let result = libc::umount2(mountpoint.as_ptr(), libc::MNT_DETACH);
        if result == 0 {
            return;
        }
    }

    let mut builder = Command::new(detect_fusermount_bin());
    builder.stdout(Stdio::piped()).stderr(Stdio::piped());
    builder
        .arg("-u")
        .arg("-q")
        .arg("-z")
        .arg("--")
        .arg(OsStr::new(&mountpoint.to_string_lossy().into_owned()));

    if let Ok(output) = builder.output() {
        debug!("fusermount: {}", String::from_utf8_lossy(&output.stdout));
        debug!("fusermount: {}", String::from_utf8_lossy(&output.stderr));
    }
}

#[cfg(not(feature = "libfuse"))]
fn detect_fusermount_bin() -> String {
    for name in [
        FUSERMOUNT3_BIN.to_string(),
        FUSERMOUNT_BIN.to_string(),
        format!("/bin/{}", FUSERMOUNT3_BIN),
        format!("/bin/{}", FUSERMOUNT_BIN),
    ]
    .iter()
    {
        if Command::new(name).arg("-h").output().is_ok() {
            return name.to_string();
        }
    }
    // Default to fusermount3
    FUSERMOUNT3_BIN.to_string()
}

#[cfg(not(feature = "libfuse"))]
fn receive_fusermount_message(socket_fd: c_int) -> Result<c_int, Error> {
    let mut io_vec_buf = [0u8];
    let mut io_vec = libc::iovec {
        iov_base: (&mut io_vec_buf).as_mut_ptr() as *mut libc::c_void,
        iov_len: io_vec_buf.len(),
    };
    let cmsg_buffer_len = unsafe { libc::CMSG_SPACE(mem::size_of::<c_int>() as libc::c_uint) };
    let mut cmsg_buffer = vec![0u8; cmsg_buffer_len as usize];
    let mut message = libc::msghdr {
        msg_name: ptr::null_mut(),
        msg_namelen: 0,
        msg_iov: &mut io_vec,
        msg_iovlen: 1,
        msg_control: (&mut cmsg_buffer).as_mut_ptr() as *mut libc::c_void,
        msg_controllen: cmsg_buffer.len(),
        msg_flags: 0,
    };

    let mut result;
    loop {
        unsafe {
            result = libc::recvmsg(socket_fd, &mut message, 0);
        }
        if result != -1 {
            break;
        }
        let err = Error::last_os_error();
        if err.kind() != ErrorKind::Interrupted {
            return Err(err);
        }
    }
    if result == 0 {
        return Err(Error::new(
            ErrorKind::UnexpectedEof,
            "Unexpected EOF reading from fusermount",
        ));
    }

    unsafe {
        let control_msg = libc::CMSG_FIRSTHDR(&message);
        if (*control_msg).cmsg_type != libc::SCM_RIGHTS {
            return Err(Error::new(
                ErrorKind::InvalidData,
                format!(
                    "Unknown control message from fusermount: {}",
                    (*control_msg).cmsg_type
                ),
            ));
        }
        let fd_data = libc::CMSG_DATA(control_msg);

        Ok(*(fd_data as *const c_int))
    }
}

#[cfg(not(feature = "libfuse"))]
fn fuse_mount_fusermount(mountpoint: &OsStr, options: &[MountOption]) -> Result<c_int, Error> {
    let (child_socket, receive_socket) = UnixStream::pair()?;

    let comm_fd = child_socket.into_raw_fd();
    unsafe {
        libc::fcntl(comm_fd, libc::F_SETFD, 0);
    }

    let mut builder = Command::new(detect_fusermount_bin());
    builder.stdout(Stdio::piped()).stderr(Stdio::piped());
    if !options.is_empty() {
        builder.arg("-o");
        let options_strs: Vec<String> = options.iter().map(option_to_string).collect();
        builder.arg(options_strs.join(","));
    }
    builder
        .arg("--")
        .arg(mountpoint)
        .env(FUSERMOUNT_COMM_ENV, comm_fd.to_string());

    let fusermount_child = builder.spawn()?;

    let child_socket = unsafe { UnixStream::from_raw_fd(comm_fd) };
    drop(child_socket); // close socket in parent

    let receive_fd = receive_socket.into_raw_fd();
    let fd = receive_fusermount_message(receive_fd)?;

    if !options.contains(&MountOption::AutoUnmount) {
        // Only close the socket, if auto unmount is not set.
        // fusermount will keep running until the socket is closed, if auto unmount is set
        drop(unsafe { UnixStream::from_raw_fd(receive_fd) });
        let output = fusermount_child.wait_with_output()?;
        debug!("fusermount: {}", String::from_utf8_lossy(&output.stdout));
        debug!("fusermount: {}", String::from_utf8_lossy(&output.stderr));
    } else {
        if let Some(mut stdout) = fusermount_child.stdout {
            let stdout_fd = stdout.as_raw_fd();
            unsafe {
                let mut flags = libc::fcntl(stdout_fd, libc::F_GETFL, 0);
                flags |= libc::O_NONBLOCK;
                libc::fcntl(stdout_fd, libc::F_SETFL, flags);
            }
            let mut buf = vec![0; 64 * 1024];
            if let Ok(len) = stdout.read(&mut buf) {
                debug!("fusermount: {}", String::from_utf8_lossy(&buf[..len]));
            }
        }
        if let Some(mut stderr) = fusermount_child.stderr {
            let stderr_fd = stderr.as_raw_fd();
            unsafe {
                let mut flags = libc::fcntl(stderr_fd, libc::F_GETFL, 0);
                flags |= libc::O_NONBLOCK;
                libc::fcntl(stderr_fd, libc::F_SETFL, flags);
            }
            let mut buf = vec![0; 64 * 1024];
            if let Ok(len) = stderr.read(&mut buf) {
                debug!("fusermount: {}", String::from_utf8_lossy(&buf[..len]));
            }
        }
    }

    if fd < 0 {
        return Err(Error::from(ErrorKind::InvalidData));
    }

    assert!(fd > 2);

    unsafe {
        libc::fcntl(fd, libc::F_SETFD, libc::FD_CLOEXEC);
    }

    Ok(fd)
}

// If returned option is none. Then fusermount binary should be tried
#[cfg(not(feature = "libfuse"))]
fn fuse_mount_sys(mountpoint: &OsStr, options: &[MountOption]) -> Result<Option<c_int>, Error> {
    let fuse_device_name = "/dev/fuse";

    let mountpoint_mode = File::open(mountpoint)?.metadata()?.permissions().mode();

    // Auto unmount requests must be sent to fusermount binary
    assert!(!options.contains(&MountOption::AutoUnmount));

    let fd = match OpenOptions::new()
        .read(true)
        .write(true)
        .open(fuse_device_name)
    {
        Ok(file) => file.into_raw_fd(),
        Err(error) => {
            if error.kind() == ErrorKind::NotFound {
                error!("{} not found. Try 'modprobe fuse'", fuse_device_name);
            }
            return Err(error);
        }
    };
    assert!(fd > 2, "Conflict with stdin/stdout/stderr. fd={}", fd);

    let mut mount_options = format!(
        "fd={},rootmode={:o},user_id={},group_id={}",
        fd,
        mountpoint_mode,
        users::get_current_uid(),
        users::get_current_gid()
    );

    for option in options
        .iter()
        .filter(|x| option_group(*x) == MountOptionGroup::KernelOption)
    {
        mount_options.push_str(",");
        mount_options.push_str(&option_to_string(option));
    }

    let mut flags = 0;
    if !options.contains(&MountOption::Dev) {
        // Default to nodev
        flags |= libc::MS_NODEV;
    }
    if !options.contains(&MountOption::Suid) {
        // Default to nosuid
        flags |= libc::MS_NOSUID;
    }
    for flag in options
        .iter()
        .filter(|x| option_group(*x) == MountOptionGroup::KernelFlag)
    {
        flags |= option_to_flag(flag);
    }

    // Default name is "/dev/fuse", then use the subtype, and lastly prefer the name
    let mut source = fuse_device_name;
    if let Some(MountOption::Subtype(subtype)) = options.iter().find(|x| match **x {
        MountOption::Subtype(_) => true,
        _ => false,
    }) {
        source = subtype;
    }
    if let Some(MountOption::FSName(name)) = options.iter().find(|x| match **x {
        MountOption::FSName(_) => true,
        _ => false,
    }) {
        source = name;
    }

    let c_source = CString::new(source).unwrap();
    let c_mountpoint = CString::new(mountpoint.as_bytes()).unwrap();
    let c_type = CString::new("fuse").unwrap();
    let c_options = CString::new(mount_options).unwrap();

    let result = unsafe {
        libc::mount(
            c_source.as_ptr(),
            c_mountpoint.as_ptr(),
            c_type.as_ptr(),
            flags,
            c_options.as_ptr() as *const libc::c_void,
        )
    };
    if result == -1 {
        let err = Error::last_os_error();
        if err.kind() == ErrorKind::PermissionDenied {
            return Ok(None); // Retry with fusermount
        } else {
            return Err(err);
        }
    }

    Ok(Some(fd))
}
