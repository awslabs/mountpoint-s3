use std::ops::{Bound, Range, RangeBounds};

use bytes::{Bytes, BytesMut};
use mountpoint_s3_crt::checksums::crc32c::{self, Crc32c};

use thiserror::Error;

/// A `ChecksummedBytes` is a bytes buffer that carries its checksum.
/// The implementation guarantees that integrity will be validated before the data can be accessed.
/// Data transformations will either fail returning an [IntegrityError], or propagate the checksum
/// so that it can be validated on access.
#[derive(Clone, Debug)]
#[must_use]
pub struct ChecksummedBytes {
    /// Underlying buffer
    buffer: Bytes,
    /// Range over [Self::buffer]
    range: Range<usize>,
    /// Checksum for [Self::buffer]
    checksum: Crc32c,
}

impl ChecksummedBytes {
    pub fn new(bytes: Bytes, checksum: Crc32c) -> Self {
        let full_range = 0..bytes.len();
        Self {
            buffer: bytes,
            range: full_range,
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
        Ok(self.buffer_slice())
    }

    /// Returns the number of bytes contained in this [ChecksummedBytes].
    pub fn len(&self) -> usize {
        self.range.len()
    }

    /// Returns true if the [ChecksummedBytes] has a length of 0.
    pub fn is_empty(&self) -> bool {
        self.range.is_empty()
    }

    /// Split off the checksummed bytes at the given index.
    ///
    /// Afterwards self contains elements [0, at), and the returned Bytes contains elements [at, len).
    ///
    /// This operation just increases the reference count and sets a few indices,
    /// so there will be no validation and the checksum will not be recomputed.
    pub fn split_off(&mut self, at: usize) -> ChecksummedBytes {
        assert!(at < self.len());

        let start = self.range.start;
        let prefix_range = start..(start + at);
        let suffix_range = (start + at)..self.range.end;

        self.range = prefix_range;
        Self {
            buffer: self.buffer.clone(),
            range: suffix_range,
            checksum: self.checksum,
        }
    }

    /// Returns a slice of self for the provided range.
    ///
    /// This operation just increases the reference count and sets a few indices,
    /// so there will be no validation and the checksum will not be recomputed.
    pub fn slice(&self, range: impl RangeBounds<usize>) -> Self {
        let sliced_range = {
            let original_len = self.len();
            let original_start = self.range.start;

            let slice_start_offset = match range.start_bound() {
                Bound::Included(&n) => n,
                Bound::Excluded(&n) => n.checked_add(1).expect("range start greater than maximum usize"),
                Bound::Unbounded => 0,
            };

            let slice_end_offset = match range.end_bound() {
                Bound::Included(&n) => n.checked_add(1).expect("range end greater than maximum usize"),
                Bound::Excluded(&n) => n,
                Bound::Unbounded => original_len,
            };

            assert!(
                slice_start_offset <= slice_end_offset,
                "range start must not be greater than end: {:?} <= {:?}",
                slice_start_offset,
                slice_end_offset,
            );
            assert!(
                slice_end_offset <= original_len,
                "range end out of bounds: {:?} <= {:?}",
                slice_end_offset,
                original_len,
            );

            (original_start + slice_start_offset)..(original_start + slice_end_offset)
        };

        Self {
            buffer: self.buffer.clone(),
            range: sliced_range,
            checksum: self.checksum,
        }
    }

    /// Returns a copy of this slice, with the guarantee that the checksum is computed exactly
    /// on the slice, rather than on a larger containing buffer.
    ///
    /// Return [IntegrityError] if data corruption is detected.
    pub fn shrink_to_fit(&self) -> Result<Self, IntegrityError> {
        if self.len() == self.buffer.len() {
            return Ok(self.clone());
        }

        // Note that no data is copied: `bytes` still points to a subslice of `buffer`.
        let bytes = self.buffer_slice();
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
        assert_eq!(prefix.buffer.len(), prefix.len());
        let suffix = extend.shrink_to_fit()?;
        assert_eq!(suffix.buffer.len(), suffix.len());

        // Combine the checksums.
        let new_checksum = combine_checksums(prefix.checksum, suffix.checksum, suffix.len());

        // Combine the slices.
        let new_bytes = {
            let mut bytes_mut = BytesMut::with_capacity(prefix.len() + suffix.len());
            bytes_mut.extend_from_slice(&prefix.buffer);
            bytes_mut.extend_from_slice(&suffix.buffer);
            bytes_mut.freeze()
        };
        *self = ChecksummedBytes::new(new_bytes, new_checksum);
        Ok(())
    }

    /// Validate data integrity in this [ChecksummedBytes].
    ///
    /// Return [IntegrityError] on data corruption.
    pub fn validate(&self) -> Result<(), IntegrityError> {
        let checksum = crc32c::checksum(&self.buffer);
        if self.checksum != checksum {
            return Err(IntegrityError::ChecksumMismatch(self.checksum, checksum));
        }
        Ok(())
    }

    /// Provide the underlying bytes and the associated checksum,
    /// which may be recalculated if the checksum covers a larger slice than the current slice.
    /// Validation may or may not be triggered, and **bytes or checksum may be corrupt** even if result returns [Ok].
    ///
    /// If you are only interested in the underlying bytes, **you should use `into_bytes()`**.
    pub fn into_inner(self) -> Result<(Bytes, Crc32c), IntegrityError> {
        let fit = self.shrink_to_fit()?;
        Ok((fit.buffer, fit.checksum))
    }

    /// Return the slice of `buffer` corresponding to `range`.
    ///
    /// Note that no data is copied: the returned `Bytes` still points to a subslice of `buffer`.
    fn buffer_slice(&self) -> Bytes {
        self.buffer.slice(self.range.clone())
    }
}

impl Default for ChecksummedBytes {
    fn default() -> Self {
        Self {
            buffer: Default::default(),
            range: Default::default(),
            checksum: Crc32c::new(0),
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
        let result = self.buffer_slice() == other.buffer_slice();
        self.validate().expect("should be valid");
        other.validate().expect("should be valid");
        result
    }
}

#[cfg(test)]
mod tests {
    use std::ops::{RangeFrom, RangeTo};

    use mountpoint_s3_crt::checksums::crc32c;
    use test_case::test_case;

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

        assert_eq!(expected, checksummed_bytes.buffer);
        assert_eq!(expected, new_checksummed_bytes.buffer);
        assert_eq!(expected_part1, checksummed_bytes.buffer_slice());
        assert_eq!(expected_part2, new_checksummed_bytes.buffer_slice());
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

        assert_eq!(expected, original.buffer);
        assert_eq!(expected, original.buffer_slice());
        assert_eq!(expected, slice.buffer);
        assert_eq!(expected_slice, slice.buffer_slice());
        assert_eq!(checksum, original.checksum);
        assert_eq!(checksum, slice.checksum);
    }

    fn slice(original: Range<usize>, range: impl RangeBounds<usize>) -> ChecksummedBytes {
        let buffer = Bytes::copy_from_slice(&vec![0; original.len()]);
        let checksum = crc32c::checksum(&buffer);
        let bytes = ChecksummedBytes {
            buffer,
            range: original,
            checksum,
        };
        bytes.slice(range)
    }

    #[test_case(0..10, 0..10, 0..10)]
    #[test_case(0..10, 5..6, 5..6)]
    #[test_case(5..10, 2..4, 7..9)]
    fn test_slice_range(original: Range<usize>, range: Range<usize>, expected: Range<usize>) {
        let slice = slice(original, range);
        assert_eq!(slice.range, expected);
    }

    #[allow(clippy::reversed_empty_ranges)]
    #[should_panic]
    #[test_case(5..10, 4..2; "start greater than end")]
    #[test_case(5..10, 4..12; "out of bounds")]
    fn test_slice_range_fail(original: Range<usize>, range: Range<usize>) {
        _ = slice(original, range);
    }

    #[test_case(0..10, ..10, 0..10)]
    #[test_case(0..10, ..6, 0..6)]
    #[test_case(5..10, ..4, 5..9)]
    fn test_slice_range_to(original: Range<usize>, range: RangeTo<usize>, expected: Range<usize>) {
        let slice = slice(original, range);
        assert_eq!(slice.range, expected);
    }

    #[test_case(0..10, 0.., 0..10)]
    #[test_case(0..10, 4.., 4..10)]
    #[test_case(5..10, 2.., 7..10)]
    fn test_slice_range_from(original: Range<usize>, range: RangeFrom<usize>, expected: Range<usize>) {
        let slice = slice(original, range);
        assert_eq!(slice.range, expected);
    }

    #[test]
    fn test_shrink_to_fit() {
        let original = ChecksummedBytes::from_bytes(Bytes::from_static(b"some bytes"));
        let unchanged = original.shrink_to_fit().unwrap();
        assert_eq!(original.buffer_slice(), unchanged.buffer_slice());
        assert_eq!(original.buffer, unchanged.buffer);
        assert_eq!(original.checksum, unchanged.checksum);

        let slice = original.clone().split_off(5);
        let shrunken = slice.shrink_to_fit().unwrap();
        assert_eq!(slice.buffer_slice(), shrunken.buffer_slice());
        assert_ne!(slice.buffer, shrunken.buffer);
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
        assert_eq!(original.buffer_slice(), unchanged.buffer_slice());
        assert_eq!(original.buffer, unchanged.buffer);
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
    fn test_into_inner() {
        let original = ChecksummedBytes::from_bytes(Bytes::from_static(b"some bytes"));
        let (unchanged_bytes, unchanged_checksum) = original.clone().into_inner().unwrap();
        assert_eq!(original.buffer_slice(), unchanged_bytes);
        assert_eq!(original.buffer, unchanged_bytes);
        assert_eq!(original.checksum, unchanged_checksum);

        let slice = original.clone().split_off(5);
        let (shrunken_bytes, shrunken_checksum) = slice.clone().into_inner().unwrap();
        assert_eq!(slice.buffer_slice(), shrunken_bytes);
        assert_ne!(slice.buffer, shrunken_bytes);
        assert_ne!(slice.checksum, shrunken_checksum);
    }

    #[test]
    fn test_extend() {
        let expected = Bytes::from_static(b"some bytes extended");
        let mut checksummed_bytes = ChecksummedBytes::from_bytes(Bytes::from_static(b"some bytes"));
        let extend_bytes = ChecksummedBytes::from_bytes(Bytes::from_static(b" extended"));
        checksummed_bytes.extend(extend_bytes).unwrap();
        let actual = checksummed_bytes.buffer_slice();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_extend_after_split() {
        let split_off_at = 4;

        let expected = Bytes::from_static(b"some ext");
        let mut checksummed_bytes = ChecksummedBytes::from_bytes(Bytes::from_static(b"some bytes"));
        let mut extend = ChecksummedBytes::from_bytes(Bytes::from_static(b" extended"));
        _ = checksummed_bytes.split_off(split_off_at);
        _ = extend.split_off(split_off_at);
        checksummed_bytes.extend(extend).unwrap();
        let actual = checksummed_bytes.buffer_slice();
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
        _ = checksummed_bytes.split_off(4);

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
        _ = extend.split_off(4);
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
