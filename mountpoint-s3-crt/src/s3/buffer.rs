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
/// a meta request. If built with a non-null ticket, it can be used to
/// acquire ownership of the underlying memory pool buffer.
#[derive(Debug)]
pub struct Buffer<'slice> {
    slice: &'slice aws_byte_cursor,
    /// Potentially null [aws_s3_buffer_ticket] pointer.
    ticket: &'slice *mut aws_s3_buffer_ticket,
}

impl<'slice> Buffer<'slice> {
    /// Create a new instance from a [aws_byte_cursor] and optional associated [aws_s3_buffer_ticket].
    ///
    /// # Safety
    /// slice must be a valid `aws_byte_cursor` and, if not null, ticket must be a valid
    /// `aws_s3_buffer_ticket` for the `'slice` lifetime.
    ///
    /// Note that [Buffer] does not need to acquire the ticket, because the lifetime constraint already
    /// guarantees that the ticket will remain valid.
    pub(crate) fn new_unchecked(slice: &'slice aws_byte_cursor, ticket: &'slice *mut aws_s3_buffer_ticket) -> Self {
        Self { slice, ticket }
    }

    /// Acquire ownership of the underlying memory pool buffer and return an [OwnedBuffer].
    ///
    /// Fails and returns [None] if no ticket was provided.
    pub fn to_owned_buffer(&self) -> Option<OwnedBuffer> {
        let ticket_ptr = NonNull::new(*self.ticket)?;
        // SAFETY: `ticket_ptr` is a valid `aws_s3_buffer_ticket`.
        let ticket = unsafe { BufferTicket::new(ticket_ptr) };
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
#[derive(Debug, Clone)]
pub struct OwnedBuffer {
    slice: aws_byte_cursor,
    _ticket: BufferTicket,
}

impl OwnedBuffer {
    /// Create a new instance.
    fn new(slice: aws_byte_cursor, ticket: BufferTicket) -> Self {
        Self { slice, _ticket: ticket }
    }
}

// SAFETY: `self.slice` is valid for the lifetime of `self._ticket`
unsafe impl Send for OwnedBuffer {}
// SAFETY: `self.slice` is valid for the lifetime of `self._ticket`
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

/// Wraps a valid [aws_s3_buffer_ticket] and manages its refcount.
#[derive(Debug)]
struct BufferTicket {
    inner: NonNull<aws_s3_buffer_ticket>,
}

impl BufferTicket {
    /// Create a new instance.
    ///
    /// # Safety
    /// `ticket` must be a valid `aws_s3_buffer_ticket`.
    pub unsafe fn new(ticket: NonNull<aws_s3_buffer_ticket>) -> Self {
        // SAFETY:  `ticket` points to a valid `aws_s3_buffer_ticket`.
        unsafe { aws_s3_buffer_ticket_acquire(ticket.as_ptr()) };
        Self { inner: ticket }
    }
}

// SAFETY: `aws_s3_buffer_ticket` is reference counted and its methods are thread-safe
unsafe impl Send for BufferTicket {}
// SAFETY: `aws_s3_buffer_ticket` is reference counted and its methods are thread-safe
unsafe impl Sync for BufferTicket {}

impl Drop for BufferTicket {
    fn drop(&mut self) {
        // SAFETY: `self.ticket` is a valid `aws_s3_buffer_ticket`, and we're dropping a reference to it
        // so it's safe to call release (which will decrement the refcnt).
        unsafe {
            aws_s3_buffer_ticket_release(self.inner.as_ptr());
        }
    }
}

impl Clone for BufferTicket {
    fn clone(&self) -> Self {
        // SAFETY: `self.inner` is a valid `aws_s3_buffer_ticket`.
        unsafe { Self::new(self.inner) }
    }
}
