//! AWS async input streams.

use std::ptr::NonNull;

use crate::common::{allocator::Allocator, error::Error};
use async_channel::{RecvError, Sender};
use log::debug;
use mountpoint_s3_crt_sys::*;
use thiserror::Error;

/// Create an [AsyncInputStream] and its associated [AsyncStreamWriter].
pub fn new_stream(allocator: &Allocator) -> (AsyncInputStream, AsyncStreamWriter) {
    let (sender, receiver) = async_channel::bounded(1);
    let stream = AsyncInputStream::new(allocator, sender);
    let writer = AsyncStreamWriter { receiver };
    (stream, writer)
}

/// An async input stream used to send the body of a request asynchronously.
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

/// Writer for an [AsyncInputStream].
#[derive(Debug)]
pub struct AsyncStreamWriter {
    /// The receiving side of a channel.
    receiver: async_channel::Receiver<ReadRequest>,
}

impl AsyncStreamWriter {
    /// Write a slice to the stream.
    pub async fn write(&mut self, slice: &[u8]) -> Result<(), AsyncStreamWriterError> {
        let mut remaining = slice;
        while !remaining.is_empty() {
            let request = self.receiver.recv().await?;
            request.consume(&mut remaining);
        }
        Ok(())
    }

    /// Complete writing.
    pub async fn complete(self) -> Result<(), AsyncStreamWriterError> {
        let request = self.receiver.recv().await?;
        request.complete();
        Ok(())
    }
}

/// An error returned by [AsyncStreamWriter].
#[derive(Debug, Error)]
pub enum AsyncStreamWriterError {
    /// The input stream was dropped.
    #[error("input stream was dropped")]
    InputStreamDropped(#[from] RecvError),
}

/// A read request from an [AsyncInputStream] to an [AsyncStreamWriter].
#[derive(Debug)]
struct ReadRequest {
    /// Destination buffer for the request.
    buffer: *mut aws_byte_buf,

    /// Promise to fulfull when the read is complete.
    promise: BoolPromise,
}

// SAFETY: The promise is thread-safe and access to buffer is guaranteed to be
// protected by the promise.
unsafe impl Send for ReadRequest {}

impl ReadRequest {
    fn new(dest: *mut aws_byte_buf, promise: BoolPromise) -> Self {
        Self { buffer: dest, promise }
    }

    fn consume(self, slice: &mut &[u8]) {
        let mut cursor = aws_byte_cursor {
            ptr: slice.as_ptr() as *mut _,
            len: slice.len(),
        };
        // SAFETY: buffer contains a valid aws_byte_buf.
        let written = unsafe { aws_byte_buf_write_to_capacity(self.buffer, &mut cursor) };
        *slice = &slice[written.len..];
        self.promise.fulfill(Ok(false));
    }

    fn complete(self) {
        self.promise.fulfill(Ok(true));
    }
}

/// Implementation of `aws_async_input_stream` which sends [ReadRequest]s to a channel.
#[derive(Debug)]
struct AsyncInputStreamImpl {
    /// The `aws_async_input_stream` that we can pass pointers to into the CRT functions.
    inner: aws_async_input_stream,

    /// The sending side of a channel.
    sender: Sender<ReadRequest>,
}

/// The vtable for [AsyncInputStreamImpl]s so we can use them as an `aws_async_input_stream`.
static ASYNC_INPUT_STREAM_IMPL_VTABLE: aws_async_input_stream_vtable = aws_async_input_stream_vtable {
    destroy: Some(destroy_impl),
    read: Some(read_impl),
};

/// Converts an aws_async_input_stream pointer into an [AsyncInputStreamImpl] pointer.
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

    // SAFETY: This is always a Box pointer, since we know this is from the impl vtable.
    // This will `drop` the stream's contents if it's the last pointer.
    drop(Box::from_raw(impl_stream));
}

unsafe extern "C" fn read_impl(stream: *mut aws_async_input_stream, dest: *mut aws_byte_buf) -> *mut aws_future_bool {
    let stream = &mut *async_input_stream_to_impl(stream);

    let promise = BoolPromise::new(stream.inner.alloc);
    let request = ReadRequest::new(dest, promise.clone());
    if let Err(e) = stream.sender.try_send(request) {
        debug!("channel closed: {:?}", e);
        e.into_inner().complete();
    }

    promise.leak()
}

/// Fulfills a [aws_future_bool].
#[derive(Debug)]
struct BoolPromise {
    inner: NonNull<aws_future_bool>,
}

impl BoolPromise {
    fn new(alloc: *mut aws_allocator) -> Self {
        Self {
            // SAFETY: aws_future_bool_new returns a valid aws_future_bool.
            inner: unsafe { NonNull::new_unchecked(aws_future_bool_new(alloc)) },
        }
    }

    fn fulfill(self, result: Result<bool, Error>) {
        match result {
            // SAFETY: inner contains a valid aws_future_bool.
            Ok(value) => unsafe {
                aws_future_bool_set_result(self.inner.as_ptr(), value);
            },
            // SAFETY: inner contains a valid aws_future_bool.
            Err(err) => unsafe {
                aws_future_bool_set_error(self.inner.as_ptr(), err.raw_error());
            },
        }
    }

    fn leak(self) -> *mut aws_future_bool {
        // SAFETY: inner contains a valid aws_future_bool.
        unsafe { aws_future_bool_acquire(self.inner.as_ptr()) }
    }
}

// SAFETY: aws_future_bool is atomically ref-counted and its methods are thread-safe.
unsafe impl Send for BoolPromise {}

impl Drop for BoolPromise {
    fn drop(&mut self) {
        // SAFETY: inner contains a valid aws_future_bool.
        unsafe {
            aws_future_bool_release(self.inner.as_ptr());
        }
    }
}

impl Clone for BoolPromise {
    fn clone(&self) -> Self {
        // SAFETY: inner contains a valid aws_future_bool.
        let inner = unsafe { NonNull::new_unchecked(aws_future_bool_acquire(self.inner.as_ptr())) };
        Self { inner }
    }
}
