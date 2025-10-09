//! Implements safe wrappers for interacting with CRT [aws_byte_buf].

use mountpoint_s3_crt_sys::*;

use std::mem::MaybeUninit;

use crate::CrtError as _;
use crate::common::allocator::Allocator;
use crate::common::error::Error;

/// Rust wrapper for a CRT [aws_byte_buf].
///
/// This does not support pointing to constant memory at this time (as an allocator is currently required for this struct).
/// See CRT documentation for more information.
///
/// This type does not implement [Copy] or [Clone].
/// It is not safe to simply clone the struct, we must allocate a new buffer using [aws_byte_buf_init_copy].
#[derive(Debug)]
pub struct ByteBuf {
    /// Inner struct, representing the buffer.
    ///
    /// We own this struct and must not lose it, or we lose the ability to access and free the buffer.
    pub(crate) inner: aws_byte_buf,
}

impl ByteBuf {
    /// Create a new [ByteBuf] (backed by [aws_byte_buf]) with the given [Allocator] and capacity.
    pub fn new(allocator: &Allocator, capacity: usize) -> Result<Self, Error> {
        // SAFETY: Allocator is valid, we allocate the struct and immediately ask the CRT to initialize it (or error).
        let inner = unsafe {
            let mut inner: MaybeUninit<aws_byte_buf> = MaybeUninit::uninit();
            aws_byte_buf_init(inner.as_mut_ptr(), allocator.inner.as_ptr(), capacity).ok_or_last_error()?;
            inner.assume_init()
        };
        let buf = Self { inner };
        Ok(buf)
    }

    /// Get out the inner pointer to the [aws_byte_buf].
    ///
    /// This is useful for passing the buffer to CRT functions which take a pointer.
    pub fn as_mut_ptr(&mut self) -> *mut aws_byte_buf {
        &raw mut self.inner
    }

    /// Provide a slice into the underlying bytes for this [ByteBuf].
    pub fn as_slice(&self) -> &[u8] {
        // SAFETY: We know that the underlying buffer is valid and we have an immutable reference to it.
        //         The slice lifetime will be tied to this struct.
        unsafe { std::slice::from_raw_parts(self.inner.buffer, self.inner.len) }
    }
}

impl Drop for ByteBuf {
    fn drop(&mut self) {
        // SAFETY: We know that the [ByteBuf] will be dropped at this point.
        //         No other pointers should refer to the memory of the underlying buffer as we do not implement Copy or Clone.
        unsafe {
            aws_byte_buf_clean_up(&mut self.inner);
        }
    }
}
