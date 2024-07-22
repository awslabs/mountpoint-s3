#![deny(missing_debug_implementations, missing_docs, clippy::undocumented_unsafe_blocks)]

//! Rust bindings for the AWS Common Runtime.

use mountpoint_s3_crt_sys::*;

pub mod auth;
pub mod checksums;
pub mod common;
pub mod http;
pub mod io;
pub mod s3;

use std::ptr::NonNull;
use std::{ffi::OsStr, os::unix::prelude::OsStrExt};

use crate::common::error::Error;

pub(crate) mod private {
    /// Seals a trait to prevent clients from implementing it for their own types, since this trait
    /// is only accessible to this crate.
    pub trait Sealed {}
}

pub(crate) trait ToAwsByteCursor {
    /// SAFETY: the user *must not* mutate the bytes pointed at by this cursor
    /// Also, the user must be careful that the aws_byte_cursor does not outlive self. When passing
    /// the aws_byte_cursor to the CRT, make sure that self will live as long as the CRT might
    /// continue to use that buffer.
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor;
}

impl<S: AsRef<OsStr>> ToAwsByteCursor for S {
    /// SAFETY: See comment on [ToAwsByteCursor::as_aws_byte_cursor].
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor {
        self.as_ref().as_bytes().as_aws_byte_cursor()
    }
}

impl ToAwsByteCursor for [u8] {
    /// SAFETY: See comment on [ToAwsByteCursor::as_aws_byte_cursor].
    unsafe fn as_aws_byte_cursor(&self) -> aws_byte_cursor {
        aws_byte_cursor {
            ptr: self.as_ptr() as *mut _,
            len: self.len(),
        }
    }
}

/// View an aws_byte_cursor as a slice of bytes.
/// SAFETY: This function is unsafe because it makes a reference from the raw pointers
/// inside the aws_byte_cursor. The caller must ensure that the returned slice does not outlive
/// the bytes pointed to by the cursor, for example, by copying the bytes out.
pub(crate) unsafe fn aws_byte_cursor_as_slice<'a>(cursor: &aws_byte_cursor) -> &'a [u8] {
    // SAFETY: from_raw_parts can't be used on null pointers, even if the length is 0. So we handle
    // that as a special case. If the pointer is null, the length must be 0 and we return an empty slice.
    if cursor.ptr.is_null() {
        assert_eq!(cursor.len, 0, "length must be 0 for null cursors");
        &[]
    } else {
        std::slice::from_raw_parts(cursor.ptr, cursor.len)
    }
}

/// Translate the common "return a null pointer on failure" pattern into Results that pull the last
/// error from the CRT.
pub(crate) trait CrtError: Sized {
    type Return;

    /// Safety: This must only be used immediately on a pointer returned from the CRT, with no other
    /// CRT code being run beforehand, or else it will return the wrong error.
    unsafe fn ok_or_last_error(self) -> Result<Self::Return, Error>;
}

impl<T> CrtError for *const T {
    type Return = NonNull<T>;

    unsafe fn ok_or_last_error(self) -> Result<Self::Return, Error> {
        NonNull::new(self as *mut T).ok_or_else(|| Error::last_error())
    }
}

impl<T> CrtError for *mut T {
    type Return = NonNull<T>;

    unsafe fn ok_or_last_error(self) -> Result<Self::Return, Error> {
        NonNull::new(self).ok_or_else(|| Error::last_error())
    }
}

/// Some CRT functions return an int that is either AWS_OP_SUCCESS or AWS_OP_ERR, and the caller
/// should use last_error to find out what happened. This simplifies that pattern.
impl CrtError for i32 {
    type Return = ();

    unsafe fn ok_or_last_error(self) -> Result<Self::Return, Error> {
        match self {
            AWS_OP_SUCCESS => Ok(()),
            AWS_OP_ERR => Err(Error::last_error()),
            // This case shouldn't happen if used correctly since we should use this on functions
            // that only return SUCCESS or ERR. But if it does happen, we can attempt to convert the
            // error code directly, which may or may not work (but at least the Error won't be swallowed).
            n => Err(common::error::Error::from(n)),
        }
    }
}

#[cfg(test)]
mod test {
    use crate::common::rust_log_adapter::RustLogAdapter;

    /// Enable tracing when running unit tests.
    #[ctor::ctor]
    fn init_tracing_subscriber() {
        RustLogAdapter::try_init().expect("unable to install CRT log adapter");
        tracing_subscriber::fmt::init();
    }

    #[ctor::ctor]
    fn init_crt() {
        crate::io::io_library_init(&crate::common::allocator::Allocator::default());
        crate::s3::s3_library_init(&crate::common::allocator::Allocator::default());
    }

    /// Validate that ASan is working across both Rust and the CRT by intentionally provoking a
    /// use-after-free that crosses the boundary: the allocation is created and freed by Rust, but
    /// accessed by the CRT. Ignored by default, and run only by ASan in CI.
    #[test]
    #[ignore]
    fn test_asan_working() {
        use mountpoint_s3_crt_sys::{aws_byte_cursor, aws_byte_cursor_is_valid};

        let heap_cursor = Box::new(aws_byte_cursor {
            ptr: std::ptr::null_mut(),
            len: 0,
        });
        let heap_ptr = &*heap_cursor as *const aws_byte_cursor as *mut _;
        drop(heap_cursor);

        // SAFETY: This code isn't safe; it's supposed to test that ASan can catch use-after-free
        // bugs. `heap_ptr` points to a freed allocation, so this causes a use-after-free that ASan
        // should catch.
        let _ = unsafe { aws_byte_cursor_is_valid(heap_ptr) };
    }
}
