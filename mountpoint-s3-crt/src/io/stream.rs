//! AWS input streams.

use crate::common::{allocator::Allocator, error::Error};
use crate::CrtError;
use mountpoint_s3_crt_sys::*;
use std::marker::PhantomData;
use std::ptr::NonNull;

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
            _ => panic!("invalid stream seek basis: {value:?}"),
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
    /// Create a new [InputStream] from a slice. The slice is not copied, and so the resulting
    /// [InputStream] cannot outlive the slice (enforced by a lifetime restriction on the [InputStream].
    pub fn new_from_slice(allocator: &Allocator, buffer: &'a [u8]) -> Result<Self, Error> {
        let cursor = aws_byte_cursor {
            len: buffer.len(),
            ptr: buffer.as_ptr() as *mut u8,
        };

        // SAFETY: allocator is a valid aws_allocator. `Self` has a lifetime of 'a, so Rust
        // will ensure that the return value from this function doesn't out live the buffer.
        // We need to make sure in things that consume InputStream that we don't accidentally
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

impl<'a> InputStream<'a> {
    /// Seek to the given offset. Basis is either BEGIN or END, and describes where to seek from.
    pub fn seek(&self, offset: i64, basis: SeekBasis) -> Result<(), Error> {
        // SAFETY: self.inner is a valid input stream.
        unsafe { aws_input_stream_seek(self.inner.as_ptr(), offset, basis.into()).ok_or_last_error() }
    }

    /// Read some data into `buffer`, and return how many bytes were read.
    pub fn read(&self, buffer: &mut [u8]) -> Result<usize, Error> {
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

    /// Get the status of this stream. Can be used to indicate if stream is at the EOF.
    pub fn get_status(&self) -> Result<StreamStatus, Error> {
        let mut status: aws_stream_status = Default::default();

        // SAFETY: self.inner is a valid input stream and status is a local variable.
        unsafe {
            aws_input_stream_get_status(self.inner.as_ptr(), &mut status).ok_or_last_error()?;
        }

        Ok(status.into())
    }

    /// Get the length of this input stream, in bytes. If a length cannot be determined, return Err.
    pub fn get_length(&self) -> Result<usize, Error> {
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
}
