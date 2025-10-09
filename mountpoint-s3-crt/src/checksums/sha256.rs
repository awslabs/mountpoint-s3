use std::ptr::NonNull;

use mountpoint_s3_crt_sys::{
    AWS_SHA256_LEN, aws_hash, aws_hash_destroy, aws_hash_finalize, aws_hash_update, aws_sha256_new,
};

use crate::common::allocator::Allocator;
use crate::common::byte_buf::ByteBuf;
use crate::common::error::Error;
use crate::{CrtError as _, ToAwsByteCursor};

/// SHA256 checksum
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct Sha256([u8; Self::LENGTH]);

impl Sha256 {
    /// Length of a SHA256 checksum.
    pub const LENGTH: usize = AWS_SHA256_LEN as usize;

    /// Create a SHA256 checksum.
    pub fn new(value: [u8; Self::LENGTH]) -> Self {
        Self(value)
    }

    /// The binary value
    pub fn value(&self) -> &[u8; Self::LENGTH] {
        &self.0
    }
}

/// Computes the SHA256 checksum of a byte slice.
///
/// Use [Sha256Hasher] for more advanced use-cases.
pub fn checksum(buf: &[u8]) -> Result<Sha256, Error> {
    let allocator = Allocator::default();
    let mut hasher = Sha256Hasher::new(&allocator)?;
    hasher.update(buf)?;
    hasher.finalize(&allocator)
}

/// SHA256 Hasher
#[derive(Debug)]
pub struct Sha256Hasher {
    inner: NonNull<aws_hash>,
}

/// Safety: [Sha256Hasher] is not [Clone] and owns the inner [aws_hash].
unsafe impl Send for Sha256Hasher {}

impl Sha256Hasher {
    /// Create a new SHA256 hasher.
    pub fn new(allocator: &Allocator) -> Result<Self, Error> {
        // SAFETY: allocator is a valid aws_allocator, and we check the return is non-null.
        let inner = unsafe { aws_sha256_new(allocator.inner.as_ptr()).ok_or_last_error()? };
        Ok(Self { inner })
    }

    /// Update the hash state with the given bytes slice.
    pub fn update(&mut self, buf: &[u8]) -> Result<(), Error> {
        // SAFETY: `self.inner` is a valid `aws_hash` and `buf` will outlive the call to `aws_hash_update`.
        unsafe { aws_hash_update(self.inner.as_ptr(), &buf.as_aws_byte_cursor()).ok_or_last_error() }
    }

    /// Finalize the hash state and return the computed SHA256 checksum value.
    pub fn finalize(self, allocator: &Allocator) -> Result<Sha256, Error> {
        let mut buffer = ByteBuf::new(allocator, Sha256::LENGTH)?;

        // SAFETY: `self.inner` is a valid `aws_hash` and `buffer` was initialized above.
        unsafe { aws_hash_finalize(self.inner.as_ptr(), buffer.as_mut_ptr(), 0).ok_or_last_error()? };

        // Slice will be copied into the struct.
        Ok(Sha256(buffer.as_slice().try_into().unwrap()))
    }
}

impl Drop for Sha256Hasher {
    fn drop(&mut self) {
        // SAFETY: `self.inner` is a valid `aws_hash` and safe to destroy since it's the only reference.
        unsafe {
            aws_hash_destroy(self.inner.as_ptr());
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn sha1_simple() {
        let buf: &[u8] = b"123456789";
        let sha256 = checksum(buf).expect("checksum failed");
        assert_eq!(
            sha256,
            Sha256([
                21, 226, 176, 211, 195, 56, 145, 235, 176, 241, 239, 96, 158, 196, 25, 66, 12, 32, 227, 32, 206, 148,
                198, 95, 188, 140, 51, 18, 68, 142, 178, 37
            ])
        );
    }

    #[test]
    fn sha256_append() {
        let allocator = Allocator::default();
        let mut hasher = Sha256Hasher::new(&allocator).expect("hasher creation failed");
        hasher.update(b"1234").expect("hasher updated failed");
        hasher.update(b"56789").expect("hasher updated failed");
        let sha256 = hasher.finalize(&allocator).expect("hasher finalization failed");
        assert_eq!(
            sha256,
            Sha256([
                21, 226, 176, 211, 195, 56, 145, 235, 176, 241, 239, 96, 158, 196, 25, 66, 12, 32, 227, 32, 206, 148,
                198, 95, 188, 140, 51, 18, 68, 142, 178, 37
            ])
        );
    }
}
