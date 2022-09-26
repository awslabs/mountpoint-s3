//! Common error handing tools for the CRT

use std::ffi::CStr;
use std::fmt::Debug;

use aws_crt_s3_sys::{aws_error_debug_str, aws_last_error};

/// An error returned by the CRT bindings.
#[derive(thiserror::Error)]
#[non_exhaustive]
pub enum Error {
    /// An error inside the CRT, obtained from aws_last_error().
    #[error("Error from CRT: ({0}) {}", err_code_to_debug_str(*.0))]
    CRTError(i32),

    /// An generic error generated inside the CRT bindings.
    #[error("Error in CRT bindings: cause = {0}, context = {1}")]
    BindingError(#[source] Box<dyn std::error::Error + Send + Sync>, String),

    /// An error to indicate that a Future or callback was canceled before completion. Some examples
    /// of when this could happen are if the client explicitly calls a cancel method before the
    /// asynchronous task completes, or when the last [crate::io::event_loop::EventLoopGroup]
    /// associated with the task is dropped before the task finishes executing.
    #[error("The future / callback was canceled")]
    Canceled,
}

impl Error {
    /// Return the last error raised on the current thread
    ///
    /// Safety: This reads a thread local, so the caller must ensure no other CRT code has run on
    /// the same thread since the error was last set, otherwise the result will be the wrong error.
    pub(crate) unsafe fn last_error() -> Self {
        Self::CRTError(aws_last_error())
    }
}

/// Return a formatted description of this error suitable for debugging
fn err_code_to_debug_str(code: i32) -> &'static str {
    // Safety for this function: we trust the CRT's `aws_error_debug_str` to return valid ASCII
    // C strings (null-terminated), that live for the life of the program, and it also promises
    // never to return a null pointer.
    unsafe {
        let s = CStr::from_ptr(aws_error_debug_str(code));
        s.to_str().expect("aws_error_debug_str should return valid ASCII")
    }
}

impl From<i32> for Error {
    fn from(err: i32) -> Self {
        Self::CRTError(err)
    }
}

impl Debug for Error {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
            Self::CRTError(err_code) => f
                .debug_tuple("CRTError")
                .field(err_code)
                .field(&err_code_to_debug_str(*err_code))
                .finish(),
            Self::BindingError(cause, msg) => f.debug_tuple("BindingError").field(cause).field(msg).finish(),
            Self::Canceled => f.debug_tuple("Canceled").finish(),
        }
    }
}
