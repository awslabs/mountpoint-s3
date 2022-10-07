//! Common error handing tools for the CRT

use std::ffi::CStr;
use std::fmt::Debug;

use aws_crt_s3_sys::{aws_error_debug_str, aws_last_error, AWS_OP_SUCCESS};
use thiserror::Error;

/// An error reported by the AWS Common Runtime
#[derive(Error, Clone, Copy)]
#[error("CRT error: {0}")]
pub struct Error(i32);

impl Error {
    /// Return the last error raised on the current thread
    ///
    /// Safety: This reads a thread local, so the caller must ensure no other CRT code has run on
    /// the same thread since the error was last set, otherwise the result will be the wrong error.
    pub(crate) unsafe fn last_error() -> Self {
        Self(aws_last_error())
    }

    /// Return whether this error is an error or a successful result
    pub fn is_err(&self) -> bool {
        self.0 != AWS_OP_SUCCESS
    }
}

/// Return a formatted description of this error suitable for debugging
fn err_code_to_debug_str(code: i32) -> &'static str {
    // SAFETY: we trust the CRT's `aws_error_debug_str` to return valid ASCII
    // C strings (null-terminated), that live for the life of the program, and it also promises
    // never to return a null pointer.
    unsafe {
        let s = CStr::from_ptr(aws_error_debug_str(code));
        s.to_str().expect("aws_error_debug_str should return valid ASCII")
    }
}

impl From<i32> for Error {
    fn from(err: i32) -> Self {
        Self(err)
    }
}

impl Debug for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_tuple("Error")
            .field(&self.0)
            .field(&err_code_to_debug_str(self.0))
            .finish()
    }
}
