#![deny(missing_debug_implementations, missing_docs)]

//! Rust bindings for the AWS Common Runtime.

use aws_crt_s3_sys::*;

pub mod auth;
pub mod common;
pub mod http;
pub mod io;
pub mod s3;

use std::ptr::NonNull;
use std::{ffi::OsStr, os::unix::prelude::OsStrExt};

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

/// Translate the common "return a null pointer on failure" pattern into Results that pull the last
/// error from the CRT.
pub(crate) trait PtrExt: Sized {
    type Return;

    /// Safety: This must only be used immediately on a pointer returned from the CRT, with no other
    /// CRT code being run beforehand, or else it will return the wrong error.
    unsafe fn ok_or_last_error(self) -> Result<NonNull<Self::Return>, common::error::Error>;
}

impl<T> PtrExt for *const T {
    type Return = T;

    unsafe fn ok_or_last_error(self) -> Result<NonNull<Self::Return>, common::error::Error> {
        NonNull::new(self as *mut T).ok_or_else(|| common::error::Error::last_error())
    }
}

impl<T> PtrExt for *mut T {
    type Return = T;

    unsafe fn ok_or_last_error(self) -> Result<NonNull<Self::Return>, common::error::Error> {
        NonNull::new(self as *mut T).ok_or_else(|| common::error::Error::last_error())
    }
}

/// Workaround until Result::inspect_err is stable.
pub(crate) trait ResultExt: Sized {
    fn on_err<F>(self, f: F) -> Self
    where
        F: FnOnce();
}

impl<T, E> ResultExt for Result<T, E> {
    fn on_err<F>(self, f: F) -> Result<T, E>
    where
        F: FnOnce(),
    {
        match self {
            Ok(val) => Ok(val),
            Err(err) => {
                f();
                Err(err)
            }
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
}
