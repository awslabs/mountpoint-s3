use bytes::{Bytes, BytesMut};
use mountpoint_s3_crt::checksums::crc32c::{self, Crc32c};
use thiserror::Error;

/// A `ChecksummedBytes` is a bytes buffer that carries its checksum.
/// The implementation guarantees that its integrity will be validated when data transformation occurs.
#[derive(Debug)]
pub struct ChecksummedBytes {
    orig_bytes: Bytes,
    curr_slice: Bytes,
    checksum: Crc32c,
}

impl ChecksummedBytes {
    pub fn new(bytes: Bytes, checksum: Crc32c) -> Self {
        let curr_slice = bytes.clone();
        Self {
            orig_bytes: bytes,
            curr_slice,
            checksum,
        }
    }

    /// Convert the `ChecksummedBytes` into `Bytes`, data integrity will be validated before converting.
    ///
    /// Return `IntegrityError` on data corruption.
    pub fn into_bytes(self) -> Result<Bytes, IntegrityError> {
        #[cfg(feature = "checksum")]
        self.validate()?;

        Ok(self.curr_slice)
    }

    /// Returns the number of bytes contained in this `ChecksummedBytes`.
    pub fn len(&self) -> usize {
        self.curr_slice.len()
    }

    /// Returns true if the `ChecksummedBytes` has a length of 0.
    pub fn is_empty(&self) -> bool {
        self.curr_slice.is_empty()
    }

    /// Split off the checksummed bytes at the given index.
    ///
    /// Afterwards self contains elements [0, at), and the returned Bytes contains elements [at, len).
    ///
    /// This operation just increases the reference count and sets a few indices,
    /// so there will be no validation and the checksum will not be recomputed.
    pub fn split_off(&mut self, at: usize) -> ChecksummedBytes {
        let new_bytes = self.curr_slice.split_off(at);
        Self {
            orig_bytes: self.orig_bytes.clone(),
            curr_slice: new_bytes,
            checksum: self.checksum,
        }
    }

    /// Append the given checksummed bytes to current `ChecksummedBytes`, ensure that data integrity will
    /// be validated.
    ///
    /// Return `IntegrityError` on data corruption.
    pub fn extend(&mut self, extend: ChecksummedBytes) -> Result<(), IntegrityError> {
        let curr_len = self.curr_slice.len();
        let total_len = curr_len + extend.len();

        let mut bytes_mut = BytesMut::with_capacity(total_len);
        bytes_mut.extend_from_slice(&self.curr_slice);
        bytes_mut.extend_from_slice(&extend.curr_slice);
        let new_bytes = bytes_mut.freeze();
        let new_checksum = crc32c::checksum(&new_bytes);
        let new_checksummed_bytes = ChecksummedBytes::new(new_bytes, new_checksum);

        // Validate data integrity with checksum bracketing.
        #[cfg(feature = "checksum")]
        {
            // 1. repeat the operation, which means copying into a new buffer in this case.
            let mut bytes_mut_dup = BytesMut::with_capacity(total_len);
            bytes_mut_dup.extend_from_slice(&self.curr_slice);
            bytes_mut_dup.extend_from_slice(&extend.curr_slice);
            let new_bytes_dup = bytes_mut_dup.freeze();
            let new_checksum_dup = crc32c::checksum(&new_bytes_dup);

            // 2. compare the checksum between the two transformations.
            if new_checksum != new_checksum_dup {
                return Err(IntegrityError::ChecksumMismatch(new_checksum, new_checksum_dup));
            }

            // 3. validate original buffers to make sure that the data we have copied are still valid.
            self.validate()?;
            extend.validate()?;
        }

        *self = new_checksummed_bytes;
        Ok(())
    }

    /// Validate data integrity in this `ChecksummedBytes`.
    ///
    /// Return `IntegrityError` on data corruption.
    pub fn validate(&self) -> Result<(), IntegrityError> {
        let checksum = crc32c::checksum(&self.orig_bytes);
        if self.checksum != checksum {
            return Err(IntegrityError::ChecksumMismatch(self.checksum, checksum));
        }
        Ok(())
    }
}

impl Default for ChecksummedBytes {
    fn default() -> Self {
        let orig_bytes = Bytes::new();
        let curr_slice = orig_bytes.clone();
        let checksum = Crc32c::new(0);
        Self {
            orig_bytes,
            curr_slice,
            checksum,
        }
    }
}

#[derive(Debug, Error)]
pub enum IntegrityError {
    #[error("Checksum mismatch. expected: {0:?}, actual: {1:?}")]
    ChecksumMismatch(Crc32c, Crc32c),
}
#[cfg(test)]
mod tests {
    use bytes::Bytes;
    use mountpoint_s3_crt::checksums::crc32c;

    #[cfg(feature = "checksum")]
    use crate::prefetch::checksummed_bytes::IntegrityError;

    use super::ChecksummedBytes;

    #[test]
    fn test_into_bytes() {
        let bytes = Bytes::from_static(b"some bytes");
        let expected = bytes.clone();
        let checksum = crc32c::checksum(&bytes);
        let checksummed_bytes = ChecksummedBytes::new(bytes, checksum);

        let actual = checksummed_bytes.into_bytes().unwrap();
        assert_eq!(expected, actual);
    }

    #[cfg(feature = "checksum")]
    #[test]
    fn test_into_bytes_integrity_error() {
        let bytes = Bytes::from_static(b"some bytes");
        let checksum = crc32c::checksum(&bytes);
        let mut checksummed_bytes = ChecksummedBytes::new(bytes, checksum);
        checksummed_bytes.orig_bytes = Bytes::from_static(b"new bytes");

        let actual = checksummed_bytes.into_bytes();
        assert!(matches!(actual, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_split_off() {
        let split_off_at = 4;
        let bytes = Bytes::from_static(b"some bytes");
        let expected = bytes.clone();
        let checksum = crc32c::checksum(&bytes);
        let mut checksummed_bytes = ChecksummedBytes::new(bytes, checksum);

        let mut expected_part1 = expected.clone();
        let expected_part2 = expected_part1.split_off(split_off_at);
        let new_checksummed_bytes = checksummed_bytes.split_off(split_off_at);

        assert_eq!(expected, checksummed_bytes.orig_bytes);
        assert_eq!(expected, new_checksummed_bytes.orig_bytes);
        assert_eq!(expected_part1, checksummed_bytes.curr_slice);
        assert_eq!(expected_part2, new_checksummed_bytes.curr_slice);
        assert_eq!(checksum, checksummed_bytes.checksum);
        assert_eq!(checksum, new_checksummed_bytes.checksum);
    }

    #[test]
    fn test_extend() {
        let bytes = Bytes::from_static(b"some bytes");
        let expected = Bytes::from_static(b"some bytes extended");
        let checksum = crc32c::checksum(&bytes);
        let mut checksummed_bytes = ChecksummedBytes::new(bytes, checksum);

        let extend = Bytes::from_static(b" extended");
        let extend_checksum = crc32c::checksum(&extend);
        let extend = ChecksummedBytes::new(extend, extend_checksum);
        checksummed_bytes.extend(extend).unwrap();
        let actual = checksummed_bytes.curr_slice;
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_extend_after_split() {
        let split_off_at = 4;
        let bytes = Bytes::from_static(b"some bytes");
        let expected = Bytes::from_static(b"some ext");
        let checksum = crc32c::checksum(&bytes);
        let mut checksummed_bytes = ChecksummedBytes::new(bytes, checksum);

        let extend = Bytes::from_static(b" extended");
        let extend_checksum = crc32c::checksum(&extend);
        let mut extend = ChecksummedBytes::new(extend, extend_checksum);
        checksummed_bytes.split_off(split_off_at);
        extend.split_off(split_off_at);
        checksummed_bytes.extend(extend).unwrap();
        let actual = checksummed_bytes.curr_slice;
        assert_eq!(expected, actual);
    }

    #[cfg(feature = "checksum")]
    #[test]
    fn test_extend_self_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let checksum = crc32c::checksum(&bytes);
        let mut checksummed_bytes = ChecksummedBytes::new(bytes, checksum);

        let currupted_bytes = Bytes::from_static(b"corrupted data");
        checksummed_bytes.orig_bytes = currupted_bytes.clone();
        checksummed_bytes.curr_slice = currupted_bytes;

        let extend = Bytes::from_static(b" extended");
        let extend_checksum = crc32c::checksum(&extend);
        let extend = ChecksummedBytes::new(extend, extend_checksum);
        let result = checksummed_bytes.extend(extend);
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[cfg(feature = "checksum")]
    #[test]
    fn test_extend_other_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let checksum = crc32c::checksum(&bytes);
        let mut checksummed_bytes = ChecksummedBytes::new(bytes, checksum);

        let extend = Bytes::from_static(b" extended");
        let extend_checksum = crc32c::checksum(&extend);
        let mut extend = ChecksummedBytes::new(extend, extend_checksum);

        let currupted_bytes = Bytes::from_static(b"corrupted data");
        extend.orig_bytes = currupted_bytes.clone();
        extend.curr_slice = currupted_bytes;

        let result = checksummed_bytes.extend(extend);
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }
}
