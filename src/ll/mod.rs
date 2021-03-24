//! Low-level kernel communication.

mod argument;
pub mod fuse_abi;
pub(crate) mod reply;
mod request;

use std::{convert::TryInto, num::NonZeroI32, time::SystemTime};

pub use reply::Response;
pub use request::{
    AnyRequest, FileHandle, INodeNo, Lock, Operation, Request, RequestError, RequestId, Version,
};

#[derive(Clone, Copy, Debug, Eq, Hash, PartialEq)]
/// Possible input arguments for atime & mtime, which can either be set to a specified time,
/// or to the current time
pub enum TimeOrNow {
    /// Specific time provided
    SpecificTime(SystemTime),
    /// Current time
    Now,
}

macro_rules! errno {
    ($x: expr) => {
        Errno(unsafe {
            // This is a static assertion that the constant $x is > 0
            const _X: [(); 0 - !{
                const ASSERT: bool = ($x > 0);
                ASSERT
            } as usize] = [];
            // Which makes this safe
            NonZeroI32::new_unchecked($x)
        });
    };
}

/// Represents an error code to be returned to the caller
#[derive(Debug)]
pub struct Errno(pub NonZeroI32);
impl Errno {
    /// Operation not permitted
    pub const EPERM: Errno = errno!(libc::EPERM);
    /// No such file or directory
    pub const ENOENT: Errno = errno!(libc::ENOENT);
    /// No such process
    pub const ESRCH: Errno = errno!(libc::ESRCH);
    /// Interrupted system call
    pub const EINTR: Errno = errno!(libc::EINTR);
    /// Input/output error
    pub const EIO: Errno = errno!(libc::EIO);
    /// No such device or address
    pub const ENXIO: Errno = errno!(libc::ENXIO);
    /// Argument list too long
    pub const E2BIG: Errno = errno!(libc::E2BIG);
    /// Exec format error
    pub const ENOEXEC: Errno = errno!(libc::ENOEXEC);
    /// Bad file descriptor
    pub const EBADF: Errno = errno!(libc::EBADF);
    /// No child processes
    pub const ECHILD: Errno = errno!(libc::ECHILD);
    /// Resource temporarily unavailable
    pub const EAGAIN: Errno = errno!(libc::EAGAIN);
    /// Cannot allocate memory
    pub const ENOMEM: Errno = errno!(libc::ENOMEM);
    /// Permission denied
    pub const EACCES: Errno = errno!(libc::EACCES);
    /// Bad address
    pub const EFAULT: Errno = errno!(libc::EFAULT);
    /// Block device required
    pub const ENOTBLK: Errno = errno!(libc::ENOTBLK);
    /// Device or resource busy
    pub const EBUSY: Errno = errno!(libc::EBUSY);
    /// File exists
    pub const EEXIST: Errno = errno!(libc::EEXIST);
    /// Invalid cross-device link
    pub const EXDEV: Errno = errno!(libc::EXDEV);
    /// No such device
    pub const ENODEV: Errno = errno!(libc::ENODEV);
    /// Not a directory
    pub const ENOTDIR: Errno = errno!(libc::ENOTDIR);
    /// Is a directory
    pub const EISDIR: Errno = errno!(libc::EISDIR);
    /// Invalid argument
    pub const EINVAL: Errno = errno!(libc::EINVAL);
    /// Too many open files in system
    pub const ENFILE: Errno = errno!(libc::ENFILE);
    /// Too many open files
    pub const EMFILE: Errno = errno!(libc::EMFILE);
    /// Inappropriate ioctl for device
    pub const ENOTTY: Errno = errno!(libc::ENOTTY);
    /// Text file busy
    pub const ETXTBSY: Errno = errno!(libc::ETXTBSY);
    /// File too large
    pub const EFBIG: Errno = errno!(libc::EFBIG);
    /// No space left on device
    pub const ENOSPC: Errno = errno!(libc::ENOSPC);
    /// Illegal seek
    pub const ESPIPE: Errno = errno!(libc::ESPIPE);
    /// Read-only file system
    pub const EROFS: Errno = errno!(libc::EROFS);
    /// Too many links
    pub const EMLINK: Errno = errno!(libc::EMLINK);
    /// Broken pipe
    pub const EPIPE: Errno = errno!(libc::EPIPE);
    /// Numerical argument out of domain
    pub const EDOM: Errno = errno!(libc::EDOM);
    /// Numerical result out of range
    pub const ERANGE: Errno = errno!(libc::ERANGE);
    /// Resource deadlock avoided
    pub const EDEADLK: Errno = errno!(libc::EDEADLK);
    /// File name too long
    pub const ENAMETOOLONG: Errno = errno!(libc::ENAMETOOLONG);
    /// No locks available
    pub const ENOLCK: Errno = errno!(libc::ENOLCK);
    /// Function not implemented
    pub const ENOSYS: Errno = errno!(libc::ENOSYS);
    /// Directory not empty
    pub const ENOTEMPTY: Errno = errno!(libc::ENOTEMPTY);
    /// Too many levels of symbolic links
    pub const ELOOP: Errno = errno!(libc::ELOOP);
    /// Resource temporarily unavailable
    pub const EWOULDBLOCK: Errno = errno!(libc::EWOULDBLOCK);
    /// No message of desired type
    pub const ENOMSG: Errno = errno!(libc::ENOMSG);
    /// Identifier removed
    pub const EIDRM: Errno = errno!(libc::EIDRM);
    /// Channel number out of range
    pub const ECHRNG: Errno = errno!(libc::ECHRNG);
    /// Level 2 not synchronised
    pub const EL2NSYNC: Errno = errno!(libc::EL2NSYNC);
    /// Level 3 halted
    pub const EL3HLT: Errno = errno!(libc::EL3HLT);
    /// Level 3 reset
    pub const EL3RST: Errno = errno!(libc::EL3RST);
    /// Link number out of range
    pub const ELNRNG: Errno = errno!(libc::ELNRNG);
    /// Protocol driver not attached
    pub const EUNATCH: Errno = errno!(libc::EUNATCH);
    /// No CSI structure available
    pub const ENOCSI: Errno = errno!(libc::ENOCSI);
    /// Level 2 halted
    pub const EL2HLT: Errno = errno!(libc::EL2HLT);
    /// Invalid exchange
    pub const EBADE: Errno = errno!(libc::EBADE);
    /// Invalid request descriptor
    pub const EBADR: Errno = errno!(libc::EBADR);
    /// Exchange full
    pub const EXFULL: Errno = errno!(libc::EXFULL);
    /// No anode
    pub const ENOANO: Errno = errno!(libc::ENOANO);
    /// Invalid request code
    pub const EBADRQC: Errno = errno!(libc::EBADRQC);
    /// Invalid slot
    pub const EBADSLT: Errno = errno!(libc::EBADSLT);
    /// Resource deadlock avoided
    pub const EDEADLOCK: Errno = errno!(libc::EDEADLOCK);
    /// Bad font file format
    pub const EBFONT: Errno = errno!(libc::EBFONT);
    /// Device not a stream
    pub const ENOSTR: Errno = errno!(libc::ENOSTR);
    /// No data available
    pub const ENODATA: Errno = errno!(libc::ENODATA);
    /// Timer expired
    pub const ETIME: Errno = errno!(libc::ETIME);
    /// Out of streams resources
    pub const ENOSR: Errno = errno!(libc::ENOSR);
    /// Machine is not on the network
    pub const ENONET: Errno = errno!(libc::ENONET);
    /// Package not installed
    pub const ENOPKG: Errno = errno!(libc::ENOPKG);
    /// Object is remote
    pub const EREMOTE: Errno = errno!(libc::EREMOTE);
    /// Link has been severed
    pub const ENOLINK: Errno = errno!(libc::ENOLINK);
    /// Advertise error
    pub const EADV: Errno = errno!(libc::EADV);
    /// Srmount error
    pub const ESRMNT: Errno = errno!(libc::ESRMNT);
    /// Communication error on send
    pub const ECOMM: Errno = errno!(libc::ECOMM);
    /// Protocol error
    pub const EPROTO: Errno = errno!(libc::EPROTO);
    /// Multihop attempted
    pub const EMULTIHOP: Errno = errno!(libc::EMULTIHOP);
    /// RFS specific error
    pub const EDOTDOT: Errno = errno!(libc::EDOTDOT);
    /// Bad message
    pub const EBADMSG: Errno = errno!(libc::EBADMSG);
    /// Value too large for defined data type
    pub const EOVERFLOW: Errno = errno!(libc::EOVERFLOW);
    /// Name not unique on network
    pub const ENOTUNIQ: Errno = errno!(libc::ENOTUNIQ);
    /// File descriptor in bad state
    pub const EBADFD: Errno = errno!(libc::EBADFD);
    /// Remote address changed
    pub const EREMCHG: Errno = errno!(libc::EREMCHG);
    /// Can not access a needed shared library
    pub const ELIBACC: Errno = errno!(libc::ELIBACC);
    /// Accessing a corrupted shared library
    pub const ELIBBAD: Errno = errno!(libc::ELIBBAD);
    /// .lib section in a.out corrupted
    pub const ELIBSCN: Errno = errno!(libc::ELIBSCN);
    /// Attempting to link in too many shared libraries
    pub const ELIBMAX: Errno = errno!(libc::ELIBMAX);
    /// Cannot exec a shared library directly
    pub const ELIBEXEC: Errno = errno!(libc::ELIBEXEC);
    /// Invalid or incomplete multibyte or wide character
    pub const EILSEQ: Errno = errno!(libc::EILSEQ);
    /// Interrupted system call should be restarted
    pub const ERESTART: Errno = errno!(libc::ERESTART);
    /// Streams pipe error
    pub const ESTRPIPE: Errno = errno!(libc::ESTRPIPE);
    /// Too many users
    pub const EUSERS: Errno = errno!(libc::EUSERS);
    /// Socket operation on non-socket
    pub const ENOTSOCK: Errno = errno!(libc::ENOTSOCK);
    /// Destination address required
    pub const EDESTADDRREQ: Errno = errno!(libc::EDESTADDRREQ);
    /// Message too long
    pub const EMSGSIZE: Errno = errno!(libc::EMSGSIZE);
    /// Protocol wrong type for socket
    pub const EPROTOTYPE: Errno = errno!(libc::EPROTOTYPE);
    /// Protocol not available
    pub const ENOPROTOOPT: Errno = errno!(libc::ENOPROTOOPT);
    /// Protocol not supported
    pub const EPROTONOSUPPORT: Errno = errno!(libc::EPROTONOSUPPORT);
    /// Socket type not supported
    pub const ESOCKTNOSUPPORT: Errno = errno!(libc::ESOCKTNOSUPPORT);
    /// Operation not supported
    pub const EOPNOTSUPP: Errno = errno!(libc::EOPNOTSUPP);
    /// Protocol family not supported
    pub const EPFNOSUPPORT: Errno = errno!(libc::EPFNOSUPPORT);
    /// Address family not supported by protocol
    pub const EAFNOSUPPORT: Errno = errno!(libc::EAFNOSUPPORT);
    /// Address already in use
    pub const EADDRINUSE: Errno = errno!(libc::EADDRINUSE);
    /// Cannot assign requested address
    pub const EADDRNOTAVAIL: Errno = errno!(libc::EADDRNOTAVAIL);
    /// Network is down
    pub const ENETDOWN: Errno = errno!(libc::ENETDOWN);
    /// Network is unreachable
    pub const ENETUNREACH: Errno = errno!(libc::ENETUNREACH);
    /// Network dropped connection on reset
    pub const ENETRESET: Errno = errno!(libc::ENETRESET);
    /// Software caused connection abort
    pub const ECONNABORTED: Errno = errno!(libc::ECONNABORTED);
    /// Connection reset by peer
    pub const ECONNRESET: Errno = errno!(libc::ECONNRESET);
    /// No buffer space available
    pub const ENOBUFS: Errno = errno!(libc::ENOBUFS);
    /// Transport endpoint is already connected
    pub const EISCONN: Errno = errno!(libc::EISCONN);
    /// Transport endpoint is not connected
    pub const ENOTCONN: Errno = errno!(libc::ENOTCONN);
    /// Cannot send after transport endpoint shutdown
    pub const ESHUTDOWN: Errno = errno!(libc::ESHUTDOWN);
    /// Too many references: cannot splice
    pub const ETOOMANYREFS: Errno = errno!(libc::ETOOMANYREFS);
    /// Connection timed out
    pub const ETIMEDOUT: Errno = errno!(libc::ETIMEDOUT);
    /// Connection refused
    pub const ECONNREFUSED: Errno = errno!(libc::ECONNREFUSED);
    /// Host is down
    pub const EHOSTDOWN: Errno = errno!(libc::EHOSTDOWN);
    /// No route to host
    pub const EHOSTUNREACH: Errno = errno!(libc::EHOSTUNREACH);
    /// Operation already in progress
    pub const EALREADY: Errno = errno!(libc::EALREADY);
    /// Operation now in progress
    pub const EINPROGRESS: Errno = errno!(libc::EINPROGRESS);
    /// Stale file handle
    pub const ESTALE: Errno = errno!(libc::ESTALE);
    /// Structure needs cleaning
    pub const EUCLEAN: Errno = errno!(libc::EUCLEAN);
    /// Not a XENIX named type file
    pub const ENOTNAM: Errno = errno!(libc::ENOTNAM);
    /// No XENIX semaphores available
    pub const ENAVAIL: Errno = errno!(libc::ENAVAIL);
    /// Is a named type file
    pub const EISNAM: Errno = errno!(libc::EISNAM);
    /// Remote I/O error
    pub const EREMOTEIO: Errno = errno!(libc::EREMOTEIO);
    /// Disk quota exceeded
    pub const EDQUOT: Errno = errno!(libc::EDQUOT);
    /// No medium found
    pub const ENOMEDIUM: Errno = errno!(libc::ENOMEDIUM);
    /// Wrong medium type
    pub const EMEDIUMTYPE: Errno = errno!(libc::EMEDIUMTYPE);
    /// Operation cancelled
    pub const ECANCELED: Errno = errno!(libc::ECANCELED);
    /// Required key not available
    pub const ENOKEY: Errno = errno!(libc::ENOKEY);
    /// Key has expired
    pub const EKEYEXPIRED: Errno = errno!(libc::EKEYEXPIRED);
    /// Key has been revoked
    pub const EKEYREVOKED: Errno = errno!(libc::EKEYREVOKED);
    /// Key was rejected by service
    pub const EKEYREJECTED: Errno = errno!(libc::EKEYREJECTED);
    /// Owner died
    pub const EOWNERDEAD: Errno = errno!(libc::EOWNERDEAD);
    /// State not recoverable
    pub const ENOTRECOVERABLE: Errno = errno!(libc::ENOTRECOVERABLE);
    /// Operation not possible due to RF-kill
    pub const ERFKILL: Errno = errno!(libc::ERFKILL);
    /// Memory page has hardware error
    pub const EHWPOISON: Errno = errno!(libc::EHWPOISON);
    /// Operation not supported
    pub const ENOTSUP: Errno = errno!(libc::ENOTSUP);

    /// Use this as an error return from getxattr/removexattr to indicate that the xattr doesn't
    /// exist.  This resolves to the appropriate platform specific error code.
    #[cfg(target_os = "linux")]
    pub const NO_XATTR: Errno = Self::ENODATA;
    #[cfg(not(target_os = "linux"))]
    pub const NO_XATTR: Errno = Self::ENOATTR;

    pub fn from_i32(err: i32) -> Errno {
        err.try_into().ok().map(Errno).unwrap_or(Errno::EIO)
    }
}
impl From<std::io::Error> for Errno {
    fn from(err: std::io::Error) -> Self {
        let errno = err.raw_os_error().unwrap_or(0);
        match errno.try_into() {
            Ok(i) => Errno(i),
            Err(_) => Errno::EIO,
        }
    }
}
impl From<std::io::ErrorKind> for Errno {
    fn from(x: std::io::ErrorKind) -> Self {
        let err: std::io::Error = x.into();
        err.into()
    }
}
impl From<Errno> for i32 {
    fn from(x: Errno) -> Self {
        x.0.into()
    }
}

/// A newtype for generation numbers
///
/// If the file system will be exported over NFS, the (ino, generation) pairs
/// need to be unique over the file system's lifetime (rather than just the
/// mount time). So if the file system reuses an inode after it has been
/// deleted, it must assign a new, previously unused generation number to the
/// inode at the same time.
#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord)]
pub struct Generation(pub u64);
impl From<Generation> for u64 {
    fn from(fh: Generation) -> Self {
        fh.0
    }
}

#[cfg(test)]
mod test {
    use std::ops::{Deref, DerefMut};
    /// If we want to be able to cast bytes to our fuse C struct types we need it
    /// to be aligned.  This struct helps getting &[u8]s which are 8 byte aligned.
    #[cfg(test)]
    #[repr(align(8))]
    pub(crate) struct AlignedData<T>(pub T);
    impl<T> Deref for AlignedData<T> {
        type Target = T;

        fn deref(&self) -> &Self::Target {
            &self.0
        }
    }
    impl<T> DerefMut for AlignedData<T> {
        fn deref_mut(&mut self) -> &mut Self::Target {
            &mut self.0
        }
    }
}
