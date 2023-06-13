//! AWS async input streams.
//!
//! This module exports the [AsyncInputStream] and [AsyncStreamWriter] types, which use the
//! CRT async streaming API. [AsyncInputStream] internally implements an `aws_async_input_stream`
//! that can be passed to a `put_object` request. [AsyncStreamWriter] exposes `write` and `complete`
//! methods that feed data into the stream.
//! [AsyncInputStream] and [AsyncStreamWriter] are created in pairs with the [new_stream()] method
//! and are internally connected through an `async_channel`: when the CRT invokes a `read` on the
//! stream, a [ReadRequest] is sent through the channel with a pointer to the buffer to fill and a
//! future to set when done. [`AsyncStreamWriter::write(slice)`] receives a read request, copies
//! data from `slice` into its buffer, and set its future to signal the CRT. If `slice` is not
//! completely consumed, it repeats the process with the next read request.
//! [`AsyncStreamWriter::complete`] receives the next read request and set its future to `true` to
//! signal EoF.
//!
//! The following behavior is assumed from the reader (CRT):
//! * the buffer passed on read remains valid at least until the future is fulfilled,
//! * read calls on an `aws_async_input_stream` are never concurrent,
//! * read is called again until it signals EoF (or error).

use std::{marker::PhantomPinned, pin::Pin, ptr::NonNull};

use crate::{
    common::{allocator::Allocator, error::Error},
    ToAwsByteCursor,
};
use async_channel::{RecvError, Sender};
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
    inner: NonNull<aws_async_input_stream>,
}

impl AsyncInputStream {
    fn new(allocator: &Allocator, sender: Sender<ReadRequest>) -> Self {
        let ptr = Box::new(AsyncInputStreamImpl {
            inner: Default::default(),
            sender,
            _pinned: Default::default(),
        });

        // Turn the Box pointer into a raw pointer (effectively leaking it).
        let ptr = Box::into_raw(ptr);

        // SAFETY: We know ptr isn't null because we just made it from the Box.
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

    pub(crate) fn as_inner_ptr(&self) -> *mut aws_async_input_stream {
        self.inner.as_ptr()
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
///
/// Asynchronously write to the associated [AsyncInputStream] with
/// [`Self::write`] and signal completion with [`Self::complete`].
/// On drop, will signal an error to the [AsyncInputStream] if not completed.
///
/// Methods will return [AsyncStreamWriterError::InputStreamDropped] is the
/// [AsyncInputStream] was dropped.
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
            remaining = request.consume(remaining);
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

impl Drop for AsyncStreamWriter {
    fn drop(&mut self) {
        self.receiver.close();

        // Drain [ReadRequest], if any.
        while self.receiver.try_recv().is_ok() {}
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
    promise: Option<BoolPromise>,
}

// SAFETY: The promise is thread-safe and access to buffer is guaranteed to be
// protected by the promise.
unsafe impl Send for ReadRequest {}

impl ReadRequest {
    fn new(dest: *mut aws_byte_buf, promise: BoolPromise) -> Self {
        // SAFETY: this is a safety check on [dest]
        let is_valid = unsafe { aws_byte_buf_is_valid(dest as *const _) };
        assert!(is_valid);

        Self {
            buffer: dest,
            promise: Some(promise),
        }
    }

    #[must_use]
    fn consume(mut self, slice: &[u8]) -> &[u8] {
        // SAFETY: buffer contains a valid aws_byte_buf. aws_byte_buf_write_to_capacity
        //         only reads the data from slice (through cursor).
        let written = unsafe {
            let mut cursor = slice.as_aws_byte_cursor();
            aws_byte_buf_write_to_capacity(self.buffer, &mut cursor)
        };

        // Signal that the buffer can be read, but further reads
        // are needed (EoF=false).
        self.promise.take().unwrap().fulfill(Ok(false));
        &slice[written.len..]
    }

    fn complete(mut self) {
        // Signal EoF.
        self.promise.take().unwrap().fulfill(Ok(true));
    }
}

impl Drop for ReadRequest {
    fn drop(&mut self) {
        if let Some(promise) = self.promise.take() {
            // If the [ReadRequest] was not consumed/completed,
            // notify the reader of the error.
            promise.fulfill(Err((-1).into()));
        }
    }
}

/// Implementation of `aws_async_input_stream` which sends [ReadRequest]s to a channel.
#[derive(Debug)]
struct AsyncInputStreamImpl {
    /// The `aws_async_input_stream` that we can pass pointers to into the CRT functions.
    inner: aws_async_input_stream,

    /// The sending side of a channel.
    sender: Sender<ReadRequest>,

    /// The [aws_async_input_stream] is self-refencing, so mark as pinned.
    _pinned: PhantomPinned,
}

/// The vtable for [AsyncInputStreamImpl]s so we can use them as an `aws_async_input_stream`.
/// The CRT guarantees to never call vtable functions concurrently on the same stream.
static ASYNC_INPUT_STREAM_IMPL_VTABLE: aws_async_input_stream_vtable = aws_async_input_stream_vtable {
    destroy: Some(destroy_impl),
    read: Some(read_impl),
};

/// Converts an aws_async_input_stream pointer into a pinned [AsyncInputStreamImpl] pointer.
/// Must only be called on streams that use the [ASYNC_INPUT_STREAM_IMPL_VTABLE] vtable and
/// never concurrently on the same stream.
unsafe fn async_input_stream_to_impl<'a>(stream: *mut aws_async_input_stream) -> Pin<&'a mut AsyncInputStreamImpl> {
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

    // SAFETY: We are only accessing `impl_ptr` through the Pin (except when dropping it).
    unsafe { Pin::new_unchecked(&mut *impl_ptr) }
}

/// SAFETY: Only to be used as a CRT callback in aws_async_input_stream_vtable, which
/// guarantees it will not be called concurrently on the same stream.
unsafe extern "C" fn destroy_impl(stream: *mut aws_async_input_stream) {
    let impl_stream = async_input_stream_to_impl(stream);

    // SAFETY: We are immediately dropping the stream, so no risk of moving data out of it.
    let raw = impl_stream.get_unchecked_mut();

    // SAFETY: This is always a Box pointer, since we know this is from the impl vtable.
    let boxed = Box::from_raw(raw);

    // This will `drop` the sender and cause subsequent [AsyncStreamWriter::write] or
    // [AsyncStreamWriter::complete] calls to return an error.
    drop(boxed);
}

/// SAFETY: Only to be used as a CRT callback in aws_async_input_stream_vtable, which
/// guarantees it will not be called concurrently on the same stream.
unsafe extern "C" fn read_impl(stream: *mut aws_async_input_stream, dest: *mut aws_byte_buf) -> *mut aws_future_bool {
    let stream = async_input_stream_to_impl(stream);

    let promise = BoolPromise::new(stream.inner.alloc);
    let request = ReadRequest::new(dest, promise.clone());
    if let Err(_e) = stream.sender.try_send(request) {
        // _e implicitly drops the [ReadRequest].
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

#[cfg(test)]
mod test {
    use futures::{
        channel::oneshot::{self, Sender},
        executor::block_on,
    };
    use libc::c_void;
    use rand::Rng;

    use crate::io::{event_loop::EventLoopGroup, futures::FutureSpawner};

    use test_case::test_case;

    use super::*;

    #[test_case(32, 32, false)]
    #[test_case(32, 16, false)]
    #[test_case(16, 32, true)]
    #[test_case(1024 * 1024, 1024 * 1024, false)]
    fn read_test(read_buffer_size: usize, write_size: usize, expect_write_error: bool) {
        let allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&allocator, None, || {}).unwrap();

        let (stream, mut writer) = new_stream(&allocator);

        let source = generate_test_buffer(write_size);

        let contents = source.clone();
        let write_future = el_group.spawn_future(async move { writer.write(&contents).await });

        let mut dest = vec![0u8; read_buffer_size];
        let read_result = checked_read(&stream, &mut dest, &el_group, |stream, byte_buf| {
            // SAFETY: stream and byte_buf are valid and the CRT function do not write outside that buffer's capacity.
            unsafe { aws_async_input_stream_read(stream, byte_buf) }
        });

        drop(stream);
        let write_result = write_future.wait().unwrap();

        assert_eq!(read_result, Ok(false));
        if expect_write_error {
            assert!(write_result.is_err());
        } else {
            assert!(write_result.is_ok());
        }

        let min_size = std::cmp::min(write_size, read_buffer_size);
        assert_eq!(
            &source[..min_size],
            &dest[..min_size],
            "dest buffer should match source buffer"
        );
    }

    #[test_case(32, 32, 8, true, false)]
    #[test_case(32, 16, 8, false, true)]
    #[test_case(16, 32, 8, true, false)]
    #[test_case(1024 * 1024 + 1, 1024 * 1024, 137, false, true)]
    fn read_to_fill_test(
        read_buffer_size: usize,
        write_size: usize,
        chunk_size: usize,
        expect_write_error: bool,
        expect_eof: bool,
    ) {
        let allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&allocator, None, || {}).unwrap();

        let (stream, mut writer) = new_stream(&allocator);

        let source = generate_test_buffer(write_size);

        let contents = source.clone();
        let write_future = el_group.spawn_future(async move {
            for chunk in contents.chunks(chunk_size) {
                writer.write(chunk).await?;
            }
            writer.complete().await
        });

        let mut dest = vec![0u8; read_buffer_size];
        let read_result = checked_read(&stream, &mut dest, &el_group, |stream, byte_buf| {
            // SAFETY: stream and byte_buf are valid and the CRT function do not write outside that buffer's capacity.
            unsafe { aws_async_input_stream_read_to_fill(stream, byte_buf) }
        });

        drop(stream);
        let write_result = write_future.wait().unwrap();

        assert_eq!(read_result, Ok(expect_eof));
        if expect_write_error {
            assert!(write_result.is_err());
        } else {
            assert!(write_result.is_ok());
        }

        let min_size = std::cmp::min(write_size, read_buffer_size);
        assert_eq!(
            &source[..min_size],
            &dest[..min_size],
            "dest buffer should match source buffer"
        );
    }

    #[test]
    fn drop_writer_before_read_test() {
        let allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&allocator, None, || {}).unwrap();

        let (stream, writer) = new_stream(&allocator);

        let mut dest = vec![0u8; 32];
        let read_result = checked_read(&stream, &mut dest, &el_group, |stream, byte_buf| {
            drop(writer);

            // SAFETY: stream and byte_buf are valid and the CRT function do not write outside that buffer's capacity.
            unsafe { aws_async_input_stream_read(stream, byte_buf) }
        });

        drop(stream);
        assert!(read_result.is_err());
    }

    #[test]
    fn drop_writer_after_read_test() {
        const READ_BUFFER_SIZE: usize = 32;

        let allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&allocator, None, || {}).unwrap();

        let (stream, writer) = new_stream(&allocator);

        let mut dest = vec![0u8; READ_BUFFER_SIZE];
        let read_result = checked_read(&stream, &mut dest, &el_group, |stream, byte_buf| {
            // SAFETY: stream and byte_buf are valid and the CRT function do not write outside that buffer's capacity.
            let future = unsafe { aws_async_input_stream_read(stream, byte_buf) };

            drop(writer);

            future
        });
        drop(stream);

        assert!(read_result.is_err());
    }

    fn checked_read<F>(
        stream: &AsyncInputStream,
        buffer: &mut [u8],
        el_group: &EventLoopGroup,
        read: F,
    ) -> Result<bool, i32>
    where
        F: FnOnce(*mut aws_async_input_stream, *mut aws_byte_buf) -> *mut aws_future_bool,
    {
        let mut byte_buf = aws_byte_buf {
            len: 0,
            buffer: buffer.as_mut_ptr(),
            capacity: buffer.len(),
            allocator: std::ptr::null_mut(),
        };

        // Pass valid aws_async_input_stream and aws_byte_buf to the closure.
        let future = read(stream.as_inner_ptr(), &mut byte_buf);
        let result = block_on(await_on_event_loop(future, el_group));

        assert_eq!(byte_buf.capacity, buffer.len(), "capacity should not change");

        assert!(
            byte_buf.len <= buffer.len(),
            "should not have written more than available"
        );

        result
    }

    async fn await_on_event_loop(future: *mut aws_future_bool, el_group: &EventLoopGroup) -> Result<bool, i32> {
        let (tx, rx) = oneshot::channel();

        struct UserData {
            tx: Sender<Result<bool, i32>>,
            future: *mut aws_future_bool,
        }

        // SAFETY: only to be used as CRT callback with user_data from a boxed [UserData].
        unsafe extern "C" fn on_done(user_data: *mut c_void) {
            let user_data = Box::from_raw(user_data as *mut UserData);
            let result = {
                let error = aws_future_bool_get_error(user_data.future);
                if error == 0 {
                    Ok(aws_future_bool_get_result(user_data.future))
                } else {
                    Err(error)
                }
            };
            user_data.tx.send(result).unwrap();
            aws_future_bool_release(user_data.future);
        }

        let user_data = Box::into_raw(Box::new(UserData { tx, future }));

        // SAFETY: future is a valid aws_future_bool returned by a CRT function.
        unsafe {
            aws_future_bool_register_event_loop_callback(
                future,
                el_group.get_next_loop().unwrap().inner.as_ptr(),
                Some(on_done),
                user_data as *mut libc::c_void,
            )
        }

        rx.await.unwrap()
    }

    fn generate_test_buffer(size: usize) -> Vec<u8> {
        let mut rng = rand::thread_rng();
        let mut buffer = vec![0u8; size];
        rng.fill(&mut buffer[..]);
        buffer
    }
}
