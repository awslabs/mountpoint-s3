use bytes::{Bytes, BytesMut};
use mountpoint_s3_crt::checksums::crc32c::{self, Crc32c};

use crate::checksums::{bytes::ChecksummedBytes, combine_checksums, IntegrityError};

/// A `ChecksummedBlock` is a bytes buffer that carries its checksum.
/// The implementation guarantees that its integrity will be validated when data is accessed.
#[derive(Debug, Clone)]
pub struct ChecksummedBlock {
    bytes: Bytes,
    checksum: Crc32c,
}

impl ChecksummedBlock {
    pub fn new(bytes: Bytes, checksum: Crc32c) -> Self {
        Self { bytes, checksum }
    }

    /// Create `ChecksummedBlock` from `Bytes`, calculating its checksum.
    pub fn from_bytes(bytes: Bytes) -> Self {
        let checksum = crc32c::checksum(&bytes);
        Self::new(bytes, checksum)
    }

    /// Convert the `ChecksummedBlock` into `Bytes`, data integrity will be validated before converting.
    ///
    /// Return `IntegrityError` on data corruption.
    pub fn into_bytes(self) -> Result<Bytes, IntegrityError> {
        self.validate()?;

        Ok(self.bytes)
    }

    /// Convert into a `ChecksummedBytes`.
    pub fn into_checksummed_bytes(self) -> ChecksummedBytes {
        ChecksummedBytes::new(self.bytes, self.checksum)
    }

    /// Returns the number of bytes contained in this `ChecksummedBlock`.
    pub fn len(&self) -> usize {
        self.bytes.len()
    }

    /// Returns true if the `ChecksummedBlock` has a length of 0.
    pub fn is_empty(&self) -> bool {
        self.bytes.is_empty()
    }

    /// Append the given bytes to current `ChecksummedBlock`.
    pub fn extend(&mut self, extend: ChecksummedBlock) {
        if self.is_empty() {
            *self = extend;
            return;
        }
        if extend.is_empty() {
            return;
        }

        let total_len = self.bytes.len() + extend.len();
        let mut bytes_mut = BytesMut::with_capacity(total_len);
        bytes_mut.extend_from_slice(&self.bytes);
        bytes_mut.extend_from_slice(&extend.bytes);
        let new_bytes = bytes_mut.freeze();
        let new_checksum = combine_checksums(self.checksum, extend.checksum, extend.len());
        *self = ChecksummedBlock {
            bytes: new_bytes,
            checksum: new_checksum,
        };
    }

    /// Validate data integrity in this `ChecksummedBlock`.
    ///
    /// Return `IntegrityError` on data corruption.
    pub fn validate(&self) -> Result<(), IntegrityError> {
        let checksum = crc32c::checksum(&self.bytes);
        if self.checksum != checksum {
            return Err(IntegrityError::ChecksumMismatch(self.checksum, checksum));
        }
        Ok(())
    }
}

impl Default for ChecksummedBlock {
    fn default() -> Self {
        let bytes = Bytes::new();
        let checksum = Crc32c::new(0);
        Self { bytes, checksum }
    }
}

impl From<ChecksummedBlock> for ChecksummedBytes {
    fn from(value: ChecksummedBlock) -> Self {
        value.into_checksummed_bytes()
    }
}

// Implement equality for tests only. We implement equality, and will panic if the data is corrupted.
#[cfg(test)]
impl PartialEq for ChecksummedBlock {
    fn eq(&self, other: &Self) -> bool {
        if self.bytes != other.bytes {
            return false;
        }

        if self.checksum == other.checksum {
            return true;
        }

        self.validate().expect("should be valid");
        other.validate().expect("should be valid");

        true
    }
}

#[cfg(test)]
mod tests {
    use bytes::Bytes;
    use mountpoint_s3_crt::checksums::crc32c;

    use super::*;

    #[test]
    fn test_into_bytes() {
        let bytes = Bytes::from_static(b"some bytes");
        let expected = bytes.clone();
        let checksum = crc32c::checksum(&bytes);
        let checksummed_block = ChecksummedBlock::new(bytes, checksum);

        let actual = checksummed_block.into_bytes().unwrap();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_into_bytes_integrity_error() {
        let bytes = Bytes::from_static(b"some bytes");
        let checksum = crc32c::checksum(&bytes);
        let mut checksummed_block = ChecksummedBlock::new(bytes, checksum);
        checksummed_block.bytes = Bytes::from_static(b"new bytes");

        let actual = checksummed_block.into_bytes();
        assert!(matches!(actual, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_into_checksummed_bytes() {
        let bytes = Bytes::from_static(b"some bytes");
        let checksum = crc32c::checksum(&bytes);
        let checksummed_block = ChecksummedBlock::new(bytes, checksum);
        let checksummed_bytes = checksummed_block.clone().into_checksummed_bytes();

        assert_eq!(
            checksummed_block.into_bytes().unwrap(),
            checksummed_bytes.into_bytes().unwrap()
        );
    }

    #[test]
    fn test_extend() {
        let bytes = Bytes::from_static(b"some bytes");
        let expected = Bytes::from_static(b"some bytes extended");
        let checksum = crc32c::checksum(&bytes);
        let mut checksummed_block = ChecksummedBlock::new(bytes, checksum);

        let extend = Bytes::from_static(b" extended");
        let extend_checksum = crc32c::checksum(&extend);
        let extend = ChecksummedBlock::new(extend, extend_checksum);
        checksummed_block.extend(extend);
        let actual = checksummed_block.bytes;
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_extend_self_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let checksum = crc32c::checksum(&bytes);
        let mut checksummed_block = ChecksummedBlock::new(bytes, checksum);

        let currupted_bytes = Bytes::from_static(b"corrupted data");
        checksummed_block.bytes = currupted_bytes.clone();

        let extend = Bytes::from_static(b" extended");
        let extend_checksum = crc32c::checksum(&extend);
        let extend = ChecksummedBlock::new(extend, extend_checksum);
        checksummed_block.extend(extend);
        assert!(matches!(
            checksummed_block.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));
    }

    #[test]
    fn test_extend_other_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let checksum = crc32c::checksum(&bytes);
        let mut checksummed_block = ChecksummedBlock::new(bytes, checksum);

        let extend = Bytes::from_static(b" extended");
        let extend_checksum = crc32c::checksum(&extend);
        let mut extend = ChecksummedBlock::new(extend, extend_checksum);

        let currupted_bytes = Bytes::from_static(b"corrupted data");
        extend.bytes = currupted_bytes.clone();

        checksummed_block.extend(extend);
        assert!(matches!(
            checksummed_block.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));
    }
}
