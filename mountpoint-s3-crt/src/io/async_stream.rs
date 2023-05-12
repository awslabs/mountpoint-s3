//! AWS async streams.

use std::{mem, ptr::NonNull};

use crate::common::{allocator::Allocator, error::Error};
use async_channel::{RecvError, Sender};
use log::debug;
use mountpoint_s3_crt_sys::*;

/// Create an [AsyncInputStream] and its associated [AsyncStreamWriter].
pub fn new_stream(allocator: &Allocator) -> (AsyncInputStream, AsyncStreamWriter) {
    let (sender, receiver) = async_channel::unbounded();
    let stream = AsyncInputStream::new(allocator, sender);
    let writer = AsyncStreamWriter { receiver };
    (stream, writer)
}

/// An [AsyncInputStream]
#[derive(Debug)]
pub struct AsyncInputStream {
    /// The inner aws_async_input_stream
    pub(crate) inner: NonNull<aws_async_input_stream>,
}

impl AsyncInputStream {
    fn new(allocator: &Allocator, sender: Sender<ReadRequest>) -> Self {
        let ptr = Box::new(AsyncInputStreamImpl {
            inner: Default::default(),
            sender,
        });

        // Turn out Box pointer into a raw pointer (effectively leaking it).
        let ptr = Box::into_raw(ptr) as *mut AsyncInputStreamImpl;

        // SAFETY: We know ptr isn't null because we just made it from Box.
        unsafe {
            aws_async_input_stream_init_base(
                &mut (*ptr).inner,
                allocator.inner.as_ptr(),
                &ASYNC_INPUT_STREAM_IMPL_VTABLE,
                ptr as *mut libc::c_void,
            );

            // Wrap the inner aws_input_stream pointer into an [AsyncInputStream] object. We know it's not
            // null (we just created it), and the vtable functions below can undo this transformation
            // and go back to the wrapper struct by using the impl_ field set in
            // [aws_async_input_stream_init_base].
            Self {
                inner: NonNull::new_unchecked(&mut (*ptr).inner),
            }
        }
    }
}

impl Drop for AsyncInputStream {
    fn drop(&mut self) {
        // SAFETY: self.inner is a valid `aws_async_input_stream`.
        unsafe {
            aws_async_input_stream_release(self.inner.as_ptr());
        }
    }
}

/// Write buffer
#[derive(Debug)]
struct AwsByteBuf {
    inner: *mut aws_byte_buf,
}

// SAFETY: TODO
unsafe impl Send for AwsByteBuf {}

impl AwsByteBuf {
    /// Append from slice
    fn append_from_slice(&self, slice: &[u8]) -> usize {
        let mut cursor = aws_byte_cursor {
            ptr: slice.as_ptr() as *mut _,
            len: slice.len(),
        };
        // SAFETY: TODO
        let written = unsafe { aws_byte_buf_write_to_capacity(self.inner, &mut cursor) };
        written.len
    }
}

struct ReadRequest {
    buffer: AwsByteBuf,
    future: AwsFutureBool,
}

impl ReadRequest {
    fn consume(&self, slice: &mut &[u8]) {
        let consumed = self.buffer.append_from_slice(slice);
        *slice = &slice[consumed..];
        self.future.set_result(false);
    }
    fn complete(&self) {
        self.future.set_result(true);
    }
}

/// Writer for an [AsyncInputStream].
#[derive(Debug)]
pub struct AsyncStreamWriter {
    receiver: async_channel::Receiver<ReadRequest>,
}

impl AsyncStreamWriter {
    /// Write a slice to the stream.
    pub async fn write(&mut self, slice: &[u8]) -> Result<(), RecvError> {
        let mut remaining = slice;
        while !remaining.is_empty() {
            let request = self.receiver.recv().await?;
            request.consume(&mut remaining);
        }

        Ok(())
    }

    /// Complete writing.
    pub async fn complete(self) -> Result<(), RecvError> {
        let request = self.receiver.recv().await?;
        request.complete();
        Ok(())
    }
}

/// Implementation of `aws_async_input_stream` which sends [ReadRequest]s to a channel.
struct AsyncInputStreamImpl {
    /// The `aws_async_input_stream` that we can pass pointers to into the CRT functions.
    inner: aws_async_input_stream,

    // The sending side of a channel.
    sender: Sender<ReadRequest>,
}

/// The vtable for [AsyncInputStreamImpl]s so we can use them as an `aws_async_input_stream`.
static ASYNC_INPUT_STREAM_IMPL_VTABLE: aws_async_input_stream_vtable = aws_async_input_stream_vtable {
    destroy: Some(destroy_impl),
    read: Some(read_impl),
};

/// Converts an aws_input_stream pointer into an [AsyncInputStreamImpl] pointer.
/// Must only be called on streams that use the [ASYNC_INPUT_STREAM_IMPL_VTABLE] vtable.
unsafe fn async_input_stream_to_impl(stream: *mut aws_async_input_stream) -> *mut AsyncInputStreamImpl {
    assert!(!stream.is_null(), "stream should never be null");

    assert!(
        std::ptr::eq((*stream).vtable, &ASYNC_INPUT_STREAM_IMPL_VTABLE),
        "this function should only be called on streams that use the impl vtable"
    );

    assert!(!(*stream).impl_.is_null(), "stream.impl_ should never be null");

    // SAFETY: On streams using the impl vtable, .impl_ always is a ptr to a
    // AsyncInputStreamImpl.
    let impl_ptr = (*stream).impl_ as *mut AsyncInputStreamImpl;

    assert!(
        std::ptr::eq(&(*impl_ptr).inner, stream),
        "&async_input_stream.inner should be the same stream we started with"
    );

    impl_ptr
}

unsafe extern "C" fn destroy_impl(stream: *mut aws_async_input_stream) {
    let impl_stream = async_input_stream_to_impl(stream);

    debug!("drop stream");

    // SAFETY: This is always a Box pointer, since we know this is from the generic vtable.
    // This will `drop` the stream's contents if it's the last pointer.
    drop(Box::from_raw(impl_stream));
}

unsafe extern "C" fn read_impl(stream: *mut aws_async_input_stream, dest: *mut aws_byte_buf) -> *mut aws_future_bool {
    let impl_stream = &mut *async_input_stream_to_impl(stream);

    let buffer = AwsByteBuf { inner: dest };
    let future = AwsFutureBool::new(impl_stream.inner.alloc);
    let ptr = future.leak();
    let request = ReadRequest { buffer, future };
    if let Err(e) = impl_stream.sender.try_send(request) {
        debug!("channel closed: {:?}", e);
        aws_future_bool_set_result(ptr, true);
    }

    ptr
}

struct AwsFutureBool {
    inner: NonNull<aws_future_bool>,
}

impl AwsFutureBool {
    fn new(alloc: *mut aws_allocator) -> Self {
        Self {
            // SAFETY: TODO
            inner: NonNull::new(unsafe { aws_future_bool_new(alloc) }).unwrap(),
        }
    }

    fn set_result(&self, value: bool) {
        // SAFETY: TODO
        unsafe {
            aws_future_bool_set_result(self.inner.as_ptr(), value);
        }
    }

    fn set_error(&self, err: Error) {
        // SAFETY: TODO
        unsafe {
            aws_future_bool_set_error(self.inner.as_ptr(), err.raw_error());
        }
    }

    fn leak(&self) -> *mut aws_future_bool {
        // SAFETY: TODO
        unsafe { aws_future_bool_acquire(self.inner.as_ptr()) }
    }
}

// SAFETY: TODO
unsafe impl Send for AwsFutureBool {}

// SAFETY: TODO
unsafe impl Sync for AwsFutureBool {}

impl Drop for AwsFutureBool {
    fn drop(&mut self) {
        // SAFETY: TODO
        unsafe {
            aws_future_bool_release(self.inner.as_ptr());
        }
    }
}
