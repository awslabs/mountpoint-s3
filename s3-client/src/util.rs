use aws_c_s3_sys::aws_byte_cursor;
use std::ffi::OsStr;
use std::mem::MaybeUninit;
use std::os::unix::prelude::OsStrExt;

/// Useful to convert from strings to aws_byte_cursors (unsafely, but cursors are roughly like &str
/// and don't convey ownership, so the CRT APIs that consume them are responsible for copying them).
pub(crate) trait StringExt {
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor;
}

impl<S: AsRef<str>> StringExt for S {
    /// Safety: the user *must not* mutate the bytes pointed at by this cursor
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor {
        aws_byte_cursor {
            ptr: self.as_ref().as_ptr() as *mut _,
            len: self.as_ref().len(),
        }
    }
}

pub(crate) unsafe fn byte_cursor_as_osstr<'a>(cursor: aws_byte_cursor) -> &'a OsStr {
    let slice = std::slice::from_raw_parts(cursor.ptr, cursor.len);
    OsStr::from_bytes(slice)
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

/// Convert an initialized `Box<MaybeUninit<T>>` to a `Box<T>`.
///
/// This is `Box::assume_init` but not yet stabilized.
///
/// Safety: the `MaybeUninit` contents must be fully initialized.
pub(crate) fn box_assume_init<T>(b: Box<MaybeUninit<T>>) -> Box<T> {
    let raw = Box::into_raw(b);
    unsafe { Box::from_raw(raw as *mut T) }
}
