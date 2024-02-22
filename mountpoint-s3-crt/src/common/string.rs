//! CRT strings are immutable bytes with no inherent encoding. Most CRT APIs use byte buffers
//! instead, so this binding for `aws_string` is mostly for automatic memory management.

use std::ptr::NonNull;

use mountpoint_s3_crt_sys::*;

use crate::common::allocator::Allocator;

/// An immutable string holding either text or binary data.
#[derive(Debug)]
pub struct String {
    inner: NonNull<aws_string>,
}

impl String {
    /// Create a new String from the given Rust string.
    pub fn from_str<S: AsRef<str>>(s: S, allocator: &Allocator) -> Self {
        let bytes = s.as_ref().as_bytes();
        // SAFETY: `aws_string_new_from_array` will copy the bytes out of `bytes`
        let inner = unsafe { aws_string_new_from_array(allocator.inner.as_ptr(), bytes.as_ptr(), bytes.len()) };
        let inner = NonNull::new(inner).expect("allocation failed");
        Self { inner }
    }

    pub(crate) fn as_ptr(&self) -> *const aws_string {
        self.inner.as_ptr()
    }
}

impl Drop for String {
    fn drop(&mut self) {
        // SAFETY: we own the underlying `aws_string`
        unsafe {
            aws_string_destroy(self.inner.as_ptr());
        }
    }
}
