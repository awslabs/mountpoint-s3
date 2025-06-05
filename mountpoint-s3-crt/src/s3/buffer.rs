//! Data buffers used by the S3 Client.

use std::ops::Deref;
use std::ptr::NonNull;

use mountpoint_s3_crt_sys::{
    aws_byte_cursor, aws_s3_buffer_ticket, aws_s3_buffer_ticket_acquire, aws_s3_buffer_ticket_release,
};

use crate::aws_byte_cursor_as_slice;

/// A slice of a data buffer.
///
/// Wrapper for a [aws_byte_cursor] pointing to (part of) the body returned by
/// a meta request. It can optionally hold a [aws_s3_buffer_ticket] to acquire
/// ownership of the underlying memory pool buffer.
#[derive(Debug)]
pub struct Buffer<'slice> {
    slice: &'slice aws_byte_cursor,
    ticket: *mut aws_s3_buffer_ticket,
}

impl<'slice> Buffer<'slice> {
    /// Create a new instance from a [aws_byte_cursor] and optional associated [aws_s3_buffer_ticket].
    ///
    /// SAFETY: slice must be a valid `aws_byte_cursor`.
    pub(crate) fn new_unchecked(slice: &'slice aws_byte_cursor, ticket: *mut aws_s3_buffer_ticket) -> Self {
        Self { slice, ticket }
    }

    /// Acquire ownership of the underlying memory pool buffer and return an [OwnedBuffer].
    ///
    /// Fails and returns [None] if no [aws_s3_buffer_ticket] was provided.
    pub fn to_owned_buffer(&self) -> Option<OwnedBuffer> {
        let ticket = NonNull::new(self.ticket)?;
        Some(OwnedBuffer::new(*self.slice, ticket))
    }
}

impl Deref for Buffer<'_> {
    type Target = [u8];

    fn deref(&self) -> &Self::Target {
        // SAFETY: `self.slice` is valid for the lifetime of self.
        unsafe { aws_byte_cursor_as_slice(self.slice) }
    }
}

impl AsRef<[u8]> for Buffer<'_> {
    fn as_ref(&self) -> &[u8] {
        self.deref()
    }
}

/// An owned data buffer from the memory pool.
#[derive(Debug)]
pub struct OwnedBuffer {
    slice: aws_byte_cursor,
    ticket: NonNull<aws_s3_buffer_ticket>,
}

impl OwnedBuffer {
    /// Create a new instance.
    fn new(slice: aws_byte_cursor, ticket: NonNull<aws_s3_buffer_ticket>) -> Self {
        // SAFETY: `ticket` is a valid `aws_s3_buffer_ticket`.
        unsafe { aws_s3_buffer_ticket_acquire(ticket.as_ptr()) };
        Self { slice, ticket }
    }
}

// SAFETY: `aws_s3_buffer_ticket` is reference counted and its methods are thread-safe
unsafe impl Send for OwnedBuffer {}
// SAFETY: `aws_s3_buffer_ticket` is reference counted and its methods are thread-safe
unsafe impl Sync for OwnedBuffer {}

impl Deref for OwnedBuffer {
    type Target = [u8];

    fn deref(&self) -> &Self::Target {
        // SAFETY: `self.slice` is valid as for the lifetime of `self.ticket`.
        unsafe { aws_byte_cursor_as_slice(&self.slice) }
    }
}

impl AsRef<[u8]> for OwnedBuffer {
    fn as_ref(&self) -> &[u8] {
        self.deref()
    }
}

impl Drop for OwnedBuffer {
    fn drop(&mut self) {
        // SAFETY: `self.ticket` is a valid `aws_s3_buffer_ticket`, and we're dropping a reference to it
        // so it's safe to call release (which will decrement the refcnt).
        unsafe {
            aws_s3_buffer_ticket_release(self.ticket.as_ptr());
        }
    }
}

impl Clone for OwnedBuffer {
    fn clone(&self) -> Self {
        Self::new(self.slice, self.ticket)
    }
}
