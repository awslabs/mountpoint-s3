//! Management of HTTP streams

use std::ffi::OsStr;
use std::ptr::NonNull;

use aws_crt_s3_sys::*;

use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::http::http_library_init;
use crate::{CrtError, StringExt};

/// Wraps an aws_http_stream. A stream exists for the duration of a request/response
/// exchange.
#[derive(Debug)]
pub struct Stream {
    inner: NonNull<aws_http_stream>,
}

impl Drop for Stream {
    fn drop(&mut self) {
        unsafe {
            // Safety: TODO: stream callbacks can still fire after we call
            // this, so we need to make sure those are safe too.
            aws_http_stream_release(self.inner.as_ptr());
        }
    }
}

/// An HTTP header.
#[derive(Debug)]
pub struct Header<P: AsRef<OsStr>> {
    inner: aws_http_header,
    _name: P,
    _value: P,
}

impl<P: AsRef<OsStr>> Header<P> {
    /// Create a new header.
    pub fn new(name: P, value: P) -> Self {
        let inner = unsafe {
            aws_http_header {
                name: name.as_ref().as_aws_byte_cursor(),
                value: value.as_ref().as_aws_byte_cursor(),
                ..Default::default()
            }
        };

        Self {
            _name: name,
            _value: value,
            inner,
        }
    }
}

/// A single HTTP message, initialized to be blank.
#[derive(Debug)]
pub struct Message {
    /// TODO: make this field non-public
    pub inner: NonNull<aws_http_message>,
}

impl Message {
    /// Creates a new HTTP/1.1 request message.
    pub fn new_request(allocator: &mut Allocator) -> Result<Self, Error> {
        // TODO: figure out a better place to call this
        http_library_init(allocator);

        let inner = unsafe { aws_http_message_new_request(allocator.inner.as_ptr()).ok_or_last_error()? };

        Ok(Self { inner })
    }

    /// Add a header to this message.
    pub fn add_header(&mut self, header: &Header<impl AsRef<OsStr>>) -> Result<(), Error> {
        unsafe {
            // Safety: this makes a copy of the underlying strings in the header.
            aws_http_message_add_header(self.inner.as_ptr(), header.inner).ok_or_last_error()
        }
    }

    /// Set the request path for this message.
    pub fn set_request_path(&mut self, path: impl AsRef<OsStr>) -> Result<(), Error> {
        unsafe {
            // Safety: the header makes its own copy of the string.
            aws_http_message_set_request_path(self.inner.as_ptr(), path.as_aws_byte_cursor()).ok_or_last_error()
        }
    }

    /// Set the request method for this message.
    pub fn set_request_method(&mut self, method: impl AsRef<OsStr>) -> Result<(), Error> {
        unsafe {
            // Safety: the header makes its own copy of the string.
            aws_http_message_set_request_method(self.inner.as_ptr(), method.as_aws_byte_cursor()).ok_or_last_error()
        }
    }
}

impl Drop for Message {
    fn drop(&mut self) {
        unsafe {
            // Safety: okay to release the message since we're in Drop for this handle
            aws_http_message_release(self.inner.as_ptr());
        }
    }
}
