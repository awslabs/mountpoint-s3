use std::ops::RangeBounds;

use bytes::{Bytes, BytesMut};
use mountpoint_s3_crt::checksums::crc32c::{self, Crc32c};

use thiserror::Error;

/// A `ChecksummedBytes` is a bytes buffer that carries its checksum.
/// The implementation guarantees that integrity will be validated before the data can be accessed.
/// Data transformations will either fail returning an [IntegrityError], or propagate the checksum
/// so that it can be validated on access.
#[derive(Clone, Debug)]
pub struct ChecksummedBytes {
    orig_bytes: Bytes,
    /// Always a subslice of `orig_bytes`
    curr_slice: Bytes,
    /// Checksum for `orig_bytes`
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

    /// Create [ChecksummedBytes] from [Bytes], calculating its checksum.
    pub fn from_bytes(bytes: Bytes) -> Self {
        let checksum = crc32c::checksum(&bytes);
        Self::new(bytes, checksum)
    }

    /// Convert the [ChecksummedBytes] into [Bytes], data integrity will be validated before converting.
    ///
    /// Return [IntegrityError] on data corruption.
    pub fn into_bytes(self) -> Result<Bytes, IntegrityError> {
        self.validate()?;

        Ok(self.curr_slice)
    }

    /// Returns the number of bytes contained in this [ChecksummedBytes].
    pub fn len(&self) -> usize {
        self.curr_slice.len()
    }

    /// Returns true if the [ChecksummedBytes] has a length of 0.
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

    /// Returns a slice of self for the provided range.
    ///
    /// This operation just increases the reference count and sets a few indices,
    /// so there will be no validation and the checksum will not be recomputed.
    pub fn slice(&self, range: impl RangeBounds<usize>) -> Self {
        Self {
            orig_bytes: self.orig_bytes.clone(),
            curr_slice: self.curr_slice.slice(range),
            checksum: self.checksum,
        }
    }

    /// Returns a copy of this slice, with the guarantee that the checksum is computed exactly
    /// on the slice, rather than on a larger containing buffer.
    ///
    /// Return [IntegrityError] if data corruption is detected.
    pub fn shrink_to_fit(&self) -> Result<Self, IntegrityError> {
        if self.curr_slice.len() == self.orig_bytes.len() {
            return Ok(self.clone());
        }

        // Note that no data is copied: `bytes` still points to a subslice of `orig_bytes`.
        let bytes = self.curr_slice.clone();
        let checksum = crc32c::checksum(&bytes);
        let result = Self::new(bytes, checksum);

        // Check the integrity of the whole buffer.
        self.validate()?;
        Ok(result)
    }

    /// Append the given checksummed bytes to current [ChecksummedBytes]. Will combine the
    /// existing checksums if possible, or compute a new one and validate data integrity.
    ///
    /// Return [IntegrityError] if data corruption is detected.
    pub fn extend(&mut self, extend: ChecksummedBytes) -> Result<(), IntegrityError> {
        if extend.is_empty() {
            // No op, but check that `extend` was not corrupted
            extend.validate()?;
            return Ok(());
        }

        if self.is_empty() {
            // Replace with `extend`, but check that `self` was not corrupted
            self.validate()?;
            *self = extend;
            return Ok(());
        }

        // When appending two slices, we can combine their checksums and obtain the new checksum
        // without having to recompute it from the data.
        // However, since a `ChecksummedBytes` potentially holds the checksum of some larger buffer,
        // rather than the exact one for the slice, we need to first invoke `shrink_to_fit` on each
        // slice and use the resulting exact checksums.
        let prefix = self.shrink_to_fit()?;
        assert_eq!(prefix.orig_bytes.len(), prefix.curr_slice.len());
        let suffix = extend.shrink_to_fit()?;
        assert_eq!(suffix.orig_bytes.len(), suffix.curr_slice.len());

        // Combine the checksums.
        let new_checksum = combine_checksums(prefix.checksum, suffix.checksum, suffix.len());

        // Combine the slices.
        let new_bytes = {
            let mut bytes_mut = BytesMut::with_capacity(prefix.len() + suffix.len());
            bytes_mut.extend_from_slice(&prefix.curr_slice);
            bytes_mut.extend_from_slice(&suffix.curr_slice);
            bytes_mut.freeze()
        };
        *self = ChecksummedBytes::new(new_bytes, new_checksum);
        Ok(())
    }

    /// Validate data integrity in this [ChecksummedBytes].
    ///
    /// Return [IntegrityError] on data corruption.
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

impl From<Bytes> for ChecksummedBytes {
    fn from(value: Bytes) -> Self {
        Self::from_bytes(value)
    }
}

impl TryFrom<ChecksummedBytes> for Bytes {
    type Error = IntegrityError;

    fn try_from(value: ChecksummedBytes) -> Result<Self, Self::Error> {
        value.into_bytes()
    }
}

/// Calculates the combined checksum for `AB` where `prefix_crc` is the checksum for `A`,
/// `suffix_crc` is the checksum for `B`, and `suffix_len` is the length of `B`.
pub fn combine_checksums(prefix_crc: Crc32c, suffix_crc: Crc32c, suffix_len: usize) -> Crc32c {
    let combined = ::crc32c::crc32c_combine(prefix_crc.value(), suffix_crc.value(), suffix_len);
    Crc32c::new(combined)
}

#[derive(Debug, Error)]
pub enum IntegrityError {
    #[error("Checksum mismatch. expected: {0:?}, actual: {1:?}")]
    ChecksumMismatch(Crc32c, Crc32c),
}

// Implement equality for tests only. We implement equality, and will panic if the data is corrupted.
#[cfg(test)]
impl PartialEq for ChecksummedBytes {
    fn eq(&self, other: &Self) -> bool {
        if self.curr_slice != other.curr_slice {
            return false;
        }

        let result = self.orig_bytes == other.orig_bytes && self.checksum == other.checksum;
        self.validate().expect("should be valid");
        other.validate().expect("should be valid");
        result
    }
}

#[cfg(test)]
mod tests {
    use mountpoint_s3_crt::checksums::crc32c;

    use super::*;

    #[test]
    fn test_into_bytes() {
        let bytes = Bytes::from_static(b"some bytes");
        let expected = bytes.clone();
        let checksummed_bytes = ChecksummedBytes::from_bytes(bytes);

        let actual = checksummed_bytes.into_bytes().unwrap();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_into_bytes_integrity_error() {
        let bytes = Bytes::from_static(b"some bytes");
        let checksum = crc32c::checksum(&bytes);
        let checksummed_bytes = ChecksummedBytes::new(Bytes::from_static(b"new bytes"), checksum);

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
    fn test_slice() {
        let range = 3..7;
        let bytes = Bytes::from_static(b"some bytes");
        let expected = bytes.clone();
        let expected_slice = bytes.slice(range.clone());
        let checksum = crc32c::checksum(&bytes);
        let original = ChecksummedBytes::new(bytes, checksum);
        let slice = original.slice(range);

        assert_eq!(expected, original.orig_bytes);
        assert_eq!(expected, original.curr_slice);
        assert_eq!(expected, slice.orig_bytes);
        assert_eq!(expected_slice, slice.curr_slice);
        assert_eq!(checksum, original.checksum);
        assert_eq!(checksum, slice.checksum);
    }

    #[test]
    fn test_shrink_to_fit() {
        let original = ChecksummedBytes::from_bytes(Bytes::from_static(b"some bytes"));
        let unchanged = original.shrink_to_fit().unwrap();
        assert_eq!(original.curr_slice, unchanged.curr_slice);
        assert_eq!(original.orig_bytes, unchanged.orig_bytes);
        assert_eq!(original.checksum, unchanged.checksum);

        let slice = original.clone().split_off(5);
        let shrunken = slice.shrink_to_fit().unwrap();
        assert_eq!(slice.curr_slice, shrunken.curr_slice);
        assert_ne!(slice.orig_bytes, shrunken.orig_bytes);
        assert_ne!(slice.checksum, shrunken.checksum);
    }

    #[test]
    fn test_shrink_to_fit_corrupted() {
        let checksum = crc32c::checksum(b"some bytes");
        let original = ChecksummedBytes::new(Bytes::from_static(b"other bytes"), checksum);
        assert!(matches!(
            original.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        let unchanged = original.shrink_to_fit().unwrap();
        assert_eq!(original.curr_slice, unchanged.curr_slice);
        assert_eq!(original.orig_bytes, unchanged.orig_bytes);
        assert_eq!(original.checksum, unchanged.checksum);
        assert!(matches!(
            unchanged.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        let slice = original.clone().split_off(5);
        assert!(matches!(slice.validate(), Err(IntegrityError::ChecksumMismatch(_, _))));

        let result = slice.shrink_to_fit();
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_extend() {
        let expected = Bytes::from_static(b"some bytes extended");
        let mut checksummed_bytes = ChecksummedBytes::from_bytes(Bytes::from_static(b"some bytes"));
        let extend_bytes = ChecksummedBytes::from_bytes(Bytes::from_static(b" extended"));
        checksummed_bytes.extend(extend_bytes).unwrap();
        let actual = checksummed_bytes.curr_slice;
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_extend_after_split() {
        let split_off_at = 4;

        let expected = Bytes::from_static(b"some ext");
        let mut checksummed_bytes = ChecksummedBytes::from_bytes(Bytes::from_static(b"some bytes"));
        let mut extend = ChecksummedBytes::from_bytes(Bytes::from_static(b" extended"));
        checksummed_bytes.split_off(split_off_at);
        extend.split_off(split_off_at);
        checksummed_bytes.extend(extend).unwrap();
        let actual = checksummed_bytes.curr_slice;
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_extend_self_corrupted() {
        let corrupted_bytes = Bytes::from_static(b"corrupted data");
        let checksum = crc32c::checksum(b"some bytes");
        let mut checksummed_bytes = ChecksummedBytes::new(corrupted_bytes, checksum);
        assert!(matches!(
            checksummed_bytes.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        let extend = ChecksummedBytes::from_bytes(Bytes::from_static(b" extended"));
        assert!(matches!(extend.validate(), Ok(())));

        checksummed_bytes.extend(extend).unwrap();
        assert!(matches!(
            checksummed_bytes.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));
    }

    #[test]
    fn test_extend_after_split_self_corrupted() {
        let corrupted_bytes = Bytes::from_static(b"corrupted data");
        let checksum = crc32c::checksum(b"some bytes");
        let mut checksummed_bytes = ChecksummedBytes::new(corrupted_bytes, checksum);
        assert!(matches!(
            checksummed_bytes.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));
        checksummed_bytes.split_off(4);

        let extend = ChecksummedBytes::from_bytes(Bytes::from_static(b" extended"));
        assert!(matches!(extend.validate(), Ok(())));

        let result = checksummed_bytes.extend(extend);
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_extend_split_off_self_corrupted() {
        let corrupted_bytes = Bytes::from_static(b"corrupted data");
        let checksum = crc32c::checksum(b"some bytes");
        let mut split_off = ChecksummedBytes::new(corrupted_bytes, checksum).split_off(4);
        assert!(matches!(
            split_off.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        let extend = ChecksummedBytes::from_bytes(Bytes::from_static(b" extended"));
        assert!(matches!(extend.validate(), Ok(())));

        let result = split_off.extend(extend);
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_extend_other_corrupted() {
        let mut checksummed_bytes = ChecksummedBytes::from_bytes(Bytes::from_static(b"some bytes"));
        assert!(matches!(checksummed_bytes.validate(), Ok(())));

        let corrupted_bytes = Bytes::from_static(b"corrupted data");
        let extend_checksum = crc32c::checksum(b" extended");
        let extend = ChecksummedBytes::new(corrupted_bytes, extend_checksum);
        assert!(matches!(extend.validate(), Err(IntegrityError::ChecksumMismatch(_, _))));

        checksummed_bytes.extend(extend).unwrap();
        assert!(matches!(
            checksummed_bytes.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));
    }

    #[test]
    fn test_extend_after_split_other_corrupted() {
        let mut checksummed_bytes = ChecksummedBytes::from_bytes(Bytes::from_static(b"some bytes"));
        assert!(matches!(checksummed_bytes.validate(), Ok(())));

        let corrupted_bytes = Bytes::from_static(b"corrupted data");
        let extend_checksum = crc32c::checksum(b" extended");
        let mut extend = ChecksummedBytes::new(corrupted_bytes, extend_checksum);
        extend.split_off(4);
        assert!(matches!(extend.validate(), Err(IntegrityError::ChecksumMismatch(_, _))));

        let result = checksummed_bytes.extend(extend);
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_extend_split_off_other_corrupted() {
        let mut checksummed_bytes = ChecksummedBytes::from_bytes(Bytes::from_static(b"some bytes"));
        assert!(matches!(checksummed_bytes.validate(), Ok(())));

        let corrupted_bytes = Bytes::from_static(b"corrupted data");
        let extend_checksum = crc32c::checksum(b" extended");
        let split_off = ChecksummedBytes::new(corrupted_bytes, extend_checksum).split_off(4);
        assert!(matches!(
            split_off.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        let result = checksummed_bytes.extend(split_off);
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_combine_checksums() {
        let buf: &[u8] = b"123456789";
        let (buf1, buf2) = buf.split_at(4);
        let crc = crc32c::checksum(buf);
        let crc1 = crc32c::checksum(buf1);
        let crc2 = crc32c::checksum(buf2);
        let combined = combine_checksums(crc1, crc2, buf2.len());
        assert_eq!(combined, crc);
    }
}
