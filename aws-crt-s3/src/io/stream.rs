//! AWS input streams.

use crate::common::{allocator::Allocator, error::Error};
use crate::CrtError;
use aws_crt_s3_sys::*;
use std::ffi::CString;
use std::marker::PhantomData;
use std::os::unix::prelude::OsStrExt;
use std::path::Path;
use std::ptr::NonNull;
use std::sync::Arc;

/// Status of an [InputStream].
#[derive(Debug)]
pub struct StreamStatus {
    is_valid: bool,
    is_end_of_stream: bool,
}

impl From<aws_stream_status> for StreamStatus {
    fn from(status: aws_stream_status) -> Self {
        Self {
            is_valid: status.is_valid,
            is_end_of_stream: status.is_end_of_stream,
        }
    }
}

impl From<StreamStatus> for aws_stream_status {
    fn from(status: StreamStatus) -> Self {
        Self {
            is_valid: status.is_valid,
            is_end_of_stream: status.is_end_of_stream,
        }
    }
}

/// Specifies where to seek from in an [InputStream].
#[derive(Debug)]
pub enum SeekBasis {
    /// Seek from the beginning of the stream.
    Begin,
    /// Seek from the end of the stream.
    End,
}

impl From<aws_stream_seek_basis> for SeekBasis {
    fn from(value: aws_stream_seek_basis) -> Self {
        match value {
            aws_stream_seek_basis::AWS_SSB_BEGIN => Self::Begin,
            aws_stream_seek_basis::AWS_SSB_END => Self::End,
            _ => panic!("invalid stream seek basis: {:?}", value),
        }
    }
}

impl From<SeekBasis> for aws_stream_seek_basis {
    fn from(value: SeekBasis) -> Self {
        match value {
            SeekBasis::Begin => aws_stream_seek_basis::AWS_SSB_BEGIN,
            SeekBasis::End => aws_stream_seek_basis::AWS_SSB_END,
        }
    }
}

/// An [InputStream] is a way to read bytes. They can be obtained either from CRT functions,
/// or by creating a new one based on a Rust type that implements the [GenericInputStream] trait.
#[derive(Debug)]
pub struct InputStream<'a> {
    /// The inner aws_input_stream
    pub(crate) inner: NonNull<aws_input_stream>,

    /// Phantom data to keep the lifetimes correct, for example, if this stream is created from an
    /// aws_byte_cursor that has some lifetime.
    _phantom: PhantomData<&'a [u8]>,
}

impl<'a> InputStream<'a> {
    /// Creates a stream that operates on a file opened from the provided path.
    pub fn new_from_file_path(allocator: &Allocator, path: impl AsRef<Path>) -> Result<Self, Error> {
        let path = CString::new(path.as_ref().as_os_str().as_bytes()).unwrap();

        let inner =
            // SAFETY: The allocator is valid and the path is a valid C string.
            unsafe { aws_input_stream_new_from_file(allocator.inner.as_ptr(), path.as_ptr()).ok_or_last_error()? };

        Ok(Self {
            inner,
            _phantom: Default::default(),
        })
    }

    /// Convert a [GenericInputStream] into an [InputStream] that we can use with CRT functions. The
    /// returned stream uses a vtable that "knows" how to call the trait methods for the stream
    /// object. It also knows how to map the CRT's acquire/release for proper reference counting.
    pub fn from_boxed_generic(stream: Box<dyn GenericInputStream>) -> Self {
        let ptr = Arc::new(GenericInputStreamWrapper {
            inner: aws_input_stream {
                // Point to the generic vtable
                vtable: &GENERIC_INPUT_STREAM_VTABLE,

                // ref_count is not used if we have our own acquire/release.
                ref_count: Default::default(),

                // Cannot set impl_ until we've created this Arc ptr.
                impl_: std::ptr::null_mut(),
            },
            stream,
        });

        // Turn out Arc pointer into a raw pointer (effectively leaking it).
        let ptr = Arc::into_raw(ptr) as *mut GenericInputStreamWrapper;

        // SAFETY: We know ptr isn't null because we just made it from Arc.
        unsafe {
            // Store the pointer into the aws_input_stream as `impl_`.
            // Now this structure is self-referential, since the GenericInputStream contains, through
            // aws_input_stream, a pointer to itself. We don't need Pin here though since the
            // GenericInputStream type is not exposed to users.
            (*ptr).inner.impl_ = ptr as *mut libc::c_void;

            // Wrap the inner aws_input_stream pointer into an [InputStream] object. We know it's not
            // null (we just created it), and the vtable functions below can undo this transformation
            // and go back to the wrapper struct by using the impl_ field we set just before this.
            Self {
                inner: NonNull::new_unchecked(&mut (*ptr).inner),
                _phantom: Default::default(),
            }
        }
    }

    /// Like [Self::from_boxed_generic] but unboxed.
    pub fn from_generic<S: GenericInputStream + 'static>(stream: S) -> Self {
        Self::from_boxed_generic(Box::new(stream))
    }

    /// Create a new [InputStream] from a slice. The slice is not copied, and so the resulting
    /// [InputStream] cannot outlive the slice (enforced by a lifetime restriction on the [InputStream].
    pub fn new_from_slice(allocator: &Allocator, buffer: &'a [u8]) -> Result<Self, Error> {
        let cursor = aws_byte_cursor {
            len: buffer.len(),
            ptr: buffer.as_ptr() as *mut u8,
        };

        // SAFETY: allocator is a valid aws_allocator. `Self` has a lifetime of 'a, so Rust
        // will ensure that the return value from this function doesn't out live the buffer.
        // We need to make sure in thigs that consume InputStream that we don't accidentally
        // cause it to live longer than expected. (Or just kill this function...)
        let inner = unsafe { aws_input_stream_new_from_cursor(allocator.inner.as_ptr(), &cursor).ok_or_last_error()? };

        Ok(Self {
            inner,
            _phantom: Default::default(),
        })
    }
}

impl<'a> Drop for InputStream<'a> {
    fn drop(&mut self) {
        // SAFETY: self.inner is a valid `aws_input_stream`.
        unsafe {
            aws_input_stream_release(self.inner.as_ptr());
        }
    }
}

/// A [GenericInputStream] describes a type that provides a way to read bytes into a buffer.
/// This allows Rust client code to define new ways of creating [InputStream]s.
pub trait GenericInputStream {
    /// Seek to the given offset. Basis is either BEGIN or END, and describes where to seek from.
    fn seek(&self, offset: i64, basis: SeekBasis) -> Result<(), Error>;

    /// Read some data into `buffer`, and return how many bytes were read.
    fn read(&self, buffer: &mut [u8]) -> Result<usize, Error>;

    /// Get the status of this stream. Can be used to indicate if stream is at the EOF.
    fn get_status(&self) -> Result<StreamStatus, Error>;

    /// Get the length of this input stream, in bytes. If a length cannot be determined, return Err.
    fn get_length(&self) -> Result<usize, Error>;
}

/// A [GenericInputStreamWrapper] is a way to turn objects of Rust types that implement the
/// [GenericInputStream] trait into a proper `aws_input_stream` we can use with the CRT.
struct GenericInputStreamWrapper {
    // The `aws_input_stream` that we can pass pointers to into the CRT functions.
    inner: aws_input_stream,

    // The client's stream, which implements the InputStream trait.
    stream: Box<dyn GenericInputStream>,
}

// A vtable for types that implement the [InputStream] trait so we can use them as an `aws_input_stream`.
static GENERIC_INPUT_STREAM_VTABLE: aws_input_stream_vtable = aws_input_stream_vtable {
    seek: Some(generic_seek),
    read: Some(generic_read),
    get_status: Some(generic_get_status),
    get_length: Some(generic_get_length),
    acquire: Some(generic_acquire),
    release: Some(generic_release),
};

/// Converts an aws_input_stream pointer into a GenericInputStream pointer.
/// Must only be called on streams that use the generic vtable.
/// The returned pointer will be an Arc pointer (i.e., it should be safe to use with Arc::from_raw).
/// This function doesn't do that automatically, since that will drop the the value if it's the last
/// Arc pointer, which isn't what we want unless we're in generic_release.
unsafe fn input_stream_to_generic_stream(stream: *mut aws_input_stream) -> *mut GenericInputStreamWrapper {
    assert!(!stream.is_null(), "stream should never be null");

    assert!(
        std::ptr::eq((*stream).vtable, &GENERIC_INPUT_STREAM_VTABLE),
        "this function should only be called on streams that use the generic vtable"
    );

    assert!(!(*stream).impl_.is_null(), "stream.impl_ should never be null");

    // SAFETY: The invariant of generic streams is that .impl_ always is an Arc ptr to a
    // GenericInputStream.
    let generic_ptr = (*stream).impl_ as *mut GenericInputStreamWrapper;

    assert!(
        std::ptr::eq(&(*generic_ptr).inner, stream),
        "&generic_input_stream.inner should be the same stream we started with"
    );

    generic_ptr
}

// Allow use of `enum aws_stream_seek_basis` in an extern function since it's only used in a
// callback, and we trust the CRT to call this with proper values for the enum.
#[allow(improper_ctypes_definitions)]
unsafe extern "C" fn generic_seek(stream: *mut aws_input_stream, offset: i64, basis: aws_stream_seek_basis) -> i32 {
    let generic_stream = &*input_stream_to_generic_stream(stream);

    match generic_stream.stream.seek(offset, basis.into()) {
        Ok(()) => AWS_OP_SUCCESS,
        Err(err) => err.raise_error(),
    }
}

unsafe extern "C" fn generic_read(stream: *mut aws_input_stream, dest: *mut aws_byte_buf) -> i32 {
    let generic_stream = &*input_stream_to_generic_stream(stream);
    let dest = dest.as_mut().expect("dest cannot be null");

    let buffer: &mut [u8] = if dest.capacity != 0 {
        assert!(!dest.buffer.is_null());
        std::slice::from_raw_parts_mut(dest.buffer, dest.capacity)
    } else {
        // If the capacity is 0, we can't use from_raw_parts.
        &mut []
    };

    assert!(dest.len <= dest.capacity, "invalid byte buffer");

    // reslice the buffer so that it starts at the place where new data should go.
    let buffer = &mut buffer[dest.len..];

    // call the generic read function from the trait, on this buffer.
    match generic_stream.stream.read(buffer) {
        // The read succeeded, update dest.len and return success.
        Ok(nread) => {
            assert!(nread <= buffer.len(), "cannot have read more than buffer size");
            dest.len += nread;
            assert!(dest.len <= dest.capacity, "len cannot be greater than capacity");
            AWS_OP_SUCCESS
        }

        Err(err) => err.raise_error(),
    }
}

unsafe extern "C" fn generic_get_status(stream: *mut aws_input_stream, out_status: *mut aws_stream_status) -> i32 {
    let generic_stream = &*input_stream_to_generic_stream(stream);

    match generic_stream.stream.get_status() {
        Ok(status) => {
            *out_status = status.into();
            AWS_OP_SUCCESS
        }

        Err(err) => err.raise_error(),
    }
}

unsafe extern "C" fn generic_get_length(stream: *mut aws_input_stream, out_length: *mut i64) -> i32 {
    let generic_stream = &*input_stream_to_generic_stream(stream);

    match generic_stream.stream.get_length() {
        Ok(length) => {
            *out_length = length.try_into().expect("Can't convert usize to i64");
            AWS_OP_SUCCESS
        }
        Err(err) => err.raise_error(),
    }
}

unsafe extern "C" fn generic_acquire(stream: *mut aws_input_stream) {
    let generic_stream = input_stream_to_generic_stream(stream);

    // SAFETY: This is always an Arc pointer, since we know this is from the generic vtable.
    Arc::increment_strong_count(generic_stream);
}

unsafe extern "C" fn generic_release(stream: *mut aws_input_stream) {
    let generic_stream = input_stream_to_generic_stream(stream);

    // SAFETY: This is always an Arc pointer, since we know this is from the generic vtable.
    // This will `drop` the stream's contents if it's the last pointer.
    Arc::decrement_strong_count(generic_stream);
}

// We can implement [GenericInputStream] for [InputStream] so that we can use CRT-defined
// input streams using a nice Rust interface.
impl<'a> GenericInputStream for InputStream<'a> {
    fn seek(&self, offset: i64, basis: SeekBasis) -> Result<(), Error> {
        // SAFETY: self.inner is a valid input stream.
        unsafe { aws_input_stream_seek(self.inner.as_ptr(), offset, basis.into()).ok_or_last_error() }
    }

    fn read(&self, buffer: &mut [u8]) -> Result<usize, Error> {
        let mut byte_buf = aws_byte_buf {
            len: 0,
            buffer: buffer.as_mut_ptr(),
            capacity: buffer.len(),
            allocator: std::ptr::null_mut(),
        };

        // SAFETY: we know that the aws_byte_buf we just made points to a valid buffer, and trust
        // the CRT function not to write outside that buffer's capacity. Also, self.inner is a
        // valid input stream.
        unsafe {
            aws_input_stream_read(self.inner.as_ptr(), &mut byte_buf).ok_or_last_error()?;
        };

        assert_eq!(byte_buf.capacity, buffer.len(), "capacity should not change");

        assert!(
            byte_buf.len <= buffer.len(),
            "should not have written more than available"
        );
        Ok(byte_buf.len)
    }

    fn get_status(&self) -> Result<StreamStatus, Error> {
        let mut status: aws_stream_status = Default::default();

        // SAFETY: self.inner is a valid input stream and status is a local variable.
        unsafe {
            aws_input_stream_get_status(self.inner.as_ptr(), &mut status).ok_or_last_error()?;
        }

        Ok(status.into())
    }

    fn get_length(&self) -> Result<usize, Error> {
        let mut out_length: i64 = 0;

        // SAFETY: self.inner is a valid input stream and out_length is a pointer to a local variable.
        unsafe {
            aws_input_stream_get_length(self.inner.as_ptr(), &mut out_length).ok_or_last_error()?;
        }

        Ok(out_length.try_into().expect("failed to convert i64 to usize"))
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::common::allocator::Allocator;
    use crate::io::stream::InputStream;

    // An implementation of [GenericInputStream] that always reads 0s.
    #[derive(Debug)]
    struct ZeroStream;

    impl GenericInputStream for ZeroStream {
        fn seek(&self, _offset: i64, _basis: SeekBasis) -> Result<(), Error> {
            Ok(())
        }

        fn read(&self, buffer: &mut [u8]) -> Result<usize, Error> {
            buffer.fill(0u8);
            Ok(buffer.len())
        }

        fn get_status(&self) -> Result<StreamStatus, Error> {
            Ok(StreamStatus {
                is_end_of_stream: false,
                is_valid: true,
            })
        }

        fn get_length(&self) -> Result<usize, Error> {
            // Cannot return size because it's infinite
            Err(Error::from(0))
        }
    }

    #[test]
    fn test_slice_cursor() {
        let allocator = Allocator::default();

        let bytes = b"Hello world!".to_vec();

        // Create a new CRT input stream from this slice.
        let stream =
            InputStream::new_from_slice(&allocator, &bytes[..]).expect("failed to make input stream from slice");

        let mut buffer = vec![0u8; 40];

        let nread = stream.read(&mut buffer).expect("read failed");

        assert_eq!(nread, bytes.len());
        assert_eq!(&buffer[..nread], &bytes[..]);

        let status = stream.get_status().expect("get_status failed");

        assert!(status.is_end_of_stream);

        let length = stream.get_length().expect("get_length failed");

        assert_eq!(length, bytes.len());
    }

    #[test]
    fn test_file_input_stream() {
        let allocator = Allocator::default();

        let temp_path = tempfile::NamedTempFile::new().unwrap().into_temp_path();

        // Write some contents to the temporary file.
        let contents = b"Hello World!";
        std::fs::write(&temp_path, contents).unwrap();

        let stream = InputStream::new_from_file_path(&allocator, &temp_path).unwrap();
        assert!(stream.get_status().unwrap().is_valid);

        // NB: EOF flag is only set if we try to read past end of file, so this buffer needs to be
        // one byte larger than the contents we started with.
        let mut buffer = vec![0u8; contents.len() + 1];

        let mut offset = 0;

        let mut status = stream.get_status().unwrap();
        while status.is_valid && !status.is_end_of_stream {
            // Try to read up to two bytes at a time.
            let offset_end = (offset + 2).max(buffer.len());

            let actually_read = stream.read(&mut buffer[offset..offset_end]).unwrap();

            if actually_read == 0 {
                break;
            }

            offset += actually_read;
            status = stream.get_status().unwrap();
        }

        assert_eq!(offset, contents.len());

        // Can drop the temp_path (and delete the file) at this point.
        std::mem::drop(temp_path);

        assert_eq!(
            contents,
            &buffer[..contents.len()],
            "buffer should match contents written to file"
        );
    }

    /// Test that the generic stream API works by making a really deep stack of
    /// nested generic streams.
    #[test]
    fn test_deep_generic_stream_stack() {
        let mut stream: Box<dyn GenericInputStream> = Box::new(ZeroStream);

        for _ in 0..100 {
            stream = Box::new(InputStream::from_boxed_generic(stream));
        }

        let mut buffer = vec![0xffu8; 40];

        let nread = stream.read(&mut buffer).expect("read failed");
        assert_eq!(nread, buffer.len());
    }
}
