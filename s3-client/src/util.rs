use aws_crt_s3_sys::aws_byte_cursor;
use std::ffi::OsStr;
use std::os::unix::prelude::OsStrExt;

/// Useful to convert from strings to aws_byte_cursors (unsafely, but cursors are roughly like &str
/// and don't convey ownership, so the CRT APIs that consume them are responsible for copying them).
pub(crate) trait StringExt {
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor;
}

impl<S: AsRef<OsStr>> StringExt for S {
    /// Safety: the user *must not* mutate the bytes pointed at by this cursor
    /// Also, the user must be careful that the aws_byte_cursor does not outlive self.
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor {
        aws_byte_cursor {
            ptr: self.as_ref().as_bytes().as_ptr() as *mut _,
            len: self.as_ref().as_bytes().len(),
        }
    }
}

/// Translate the common "return a null pointer on failure" pattern into Results
pub(crate) trait PtrExt: Sized {
    fn ok_or<E>(self, err: E) -> Result<Self, E>;
}

impl<T> PtrExt for *const T {
    fn ok_or<E>(self, err: E) -> Result<Self, E> {
        if self.is_null() {
            Err(err)
        } else {
            Ok(self)
        }
    }
}

impl<T> PtrExt for *mut T {
    fn ok_or<E>(self, err: E) -> Result<Self, E> {
        if self.is_null() {
            Err(err)
        } else {
            Ok(self)
        }
    }
}
