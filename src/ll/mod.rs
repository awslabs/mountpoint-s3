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

/// Represents an error code to be returned to the caller
#[derive(Debug)]
pub struct Errno(pub NonZeroI32);
impl Errno {
    pub const EIO: Errno = Errno(unsafe { NonZeroI32::new_unchecked(libc::EIO) });
    pub const ENOSYS: Errno = Errno(unsafe { NonZeroI32::new_unchecked(libc::ENOSYS) });
    pub const ERANGE: Errno = Errno(unsafe { NonZeroI32::new_unchecked(libc::ERANGE) });
    pub const EPROTO: Errno = Errno(unsafe { NonZeroI32::new_unchecked(libc::EPROTO) });
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
