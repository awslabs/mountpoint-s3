//! Common error handing tools for the CRT

use std::ffi::CStr;
use std::fmt::{Debug, Display};

use aws_crt_s3_sys::{aws_error_debug_str, aws_last_error};

/// An error reported by the CRT
#[derive(Clone, Copy)]
pub struct Error(i32);

impl Error {
    /// Return the last error raised on the current thread
    ///
    /// Safety: This reads a thread local, so the caller must ensure no other CRT code has run on
    /// the same thread since the error was last set, otherwise the result will be the wrong error.
    pub(crate) unsafe fn last_error() -> Self {
        Self(aws_last_error())
    }

    /// Return a formatted description of this error suitable for debugging
    pub fn to_debug_str(&self) -> &str {
        // Safety for this function: we trust the CRT's `aws_error_debug_str` to return valid ASCII
        // C strings (null-terminated), that live for the life of the program, and it also promises
        // never to return a null pointer.
        unsafe {
            let s = CStr::from_ptr(aws_error_debug_str(self.0));
            s.to_str().expect("aws_error_debug_str should return valid ASCII")
        }
    }
}

impl From<i32> for Error {
    fn from(err: i32) -> Self {
        Self(err)
    }
}

impl From<Error> for i32 {
    fn from(err: Error) -> Self {
        err.0
    }
}

impl Debug for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_tuple("Error")
            .field(&self.0)
            .field(&self.to_debug_str())
            .finish()
    }
}

impl Display for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(f, "{}", self.to_debug_str())
    }
}

impl std::error::Error for Error {
    fn description(&self) -> &str {
        self.to_debug_str()
    }
}
