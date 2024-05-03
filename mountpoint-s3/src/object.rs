use std::ops::{Bound, Range, RangeBounds};

use bytes::{Bytes, BytesMut};
use mountpoint_s3_client::types::ETag;
use mountpoint_s3_crt::checksums::crc32c::{self, Crc32c};
use thiserror::Error;

use crate::checksums::combine_checksums;
use crate::sync::Arc;

/// Identifier for a specific version of an S3 object.
/// Formed by the object key and etag. Holds its components in an [Arc], so it can be cheaply cloned.
#[derive(Clone, Debug, Hash, PartialEq, Eq)]
pub struct ObjectId {
    inner: Arc<InnerObjectId>,
}

#[derive(Debug, Hash, PartialEq, Eq)]
struct InnerObjectId {
    key: String,
    etag: ETag,
}

impl ObjectId {
    pub fn new(key: String, etag: ETag) -> Self {
        Self {
            inner: Arc::new(InnerObjectId { key, etag }),
        }
    }

    pub fn key(&self) -> &str {
        &self.inner.key
    }

    pub fn etag(&self) -> &ETag {
        &self.inner.etag
    }
}

/// A self-identifying part of an S3 object. Users can only retrieve the bytes from this part if
/// they can prove they have the correct offset and object Id (key + etag).
#[derive(Debug, Clone)]
pub struct ObjectPart {
    id: ObjectId,
    offset: u64,
    checksummed_bytes: ChecksummedBytes,
}

impl ObjectPart {
    pub fn new(id: ObjectId, offset: u64, checksummed_bytes: ChecksummedBytes) -> Self {
        Self {
            id,
            offset,
            checksummed_bytes,
        }
    }

    pub fn into_bytes(self, id: &ObjectId, offset: u64) -> Result<ChecksummedBytes, PartMismatchError> {
        self.check(id, offset).map(|_| self.checksummed_bytes)
    }

    /// Split the part into two at the given index.
    ///
    /// Returns a newly allocated part containing the range [at, len). After the call, the original
    /// part will be left containing the elements [0, at).
    pub fn split_off(&mut self, at: usize) -> ObjectPart {
        let new_bytes = self.checksummed_bytes.split_off(at);
        ObjectPart {
            id: self.id.clone(),
            offset: self.offset + at as u64,
            checksummed_bytes: new_bytes,
        }
    }

    pub(super) fn len(&self) -> usize {
        self.checksummed_bytes.len()
    }

    pub(super) fn is_empty(&self) -> bool {
        self.checksummed_bytes.is_empty()
    }

    fn check(&self, id: &ObjectId, offset: u64) -> Result<(), PartMismatchError> {
        if self.id != *id {
            return Err(PartMismatchError::Id {
                actual: self.id.clone(),
                requested: id.to_owned(),
            });
        }
        if self.offset != offset {
            return Err(PartMismatchError::Offset {
                actual: self.offset,
                requested: offset,
            });
        }
        Ok(())
    }
}

#[derive(Debug, Error)]
pub enum PartMismatchError {
    #[error("wrong part id: actual={actual:?}, requested={requested:?}")]
    Id { actual: ObjectId, requested: ObjectId },

    #[error("wrong part offset: actual={actual}, requested={requested}")]
    Offset { actual: u64, requested: u64 },
}

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
    /// Create a new [ChecksummedBytes] from the given [Bytes] and pre-calculated checksum.
    /// To be used for de-serialization.
    pub fn new_from_inner_data(bytes: Bytes, checksum: Crc32c) -> Self {
        let full_range = 0..bytes.len();
        Self {
            buffer: bytes,
            range: full_range,
            checksum,
        }
    }

    /// Create [ChecksummedBytes] from [Bytes], calculating its checksum.
    pub fn new(bytes: Bytes) -> Self {
        let checksum = crc32c::checksum(&bytes);
        Self::new_from_inner_data(bytes, checksum)
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

    /// Guarantees that the checksum is computed exactly
    /// on the slice, rather than on a larger containing buffer.
    ///
    /// Return [IntegrityError] if data corruption is detected.
    pub fn shrink_to_fit(&mut self) -> Result<(), IntegrityError> {
        if self.len() == self.buffer.len() {
            return Ok(());
        }

        // Note that no data is copied: `bytes` still points to a subslice of `buffer`.
        let bytes = self.buffer_slice();
        let checksum = crc32c::checksum(&bytes);

        // Check the integrity of the whole buffer.
        self.validate()?;

        *self = Self {
            buffer: bytes,
            range: 0..self.len(),
            checksum,
        };
        Ok(())
    }

    /// Append the given checksummed bytes to current [ChecksummedBytes]. Will combine the
    /// existing checksums if possible, or compute a new one and validate data integrity.
    ///
    /// Return [IntegrityError] if data corruption is detected.
    pub fn extend(&mut self, mut extend: ChecksummedBytes) -> Result<(), IntegrityError> {
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
        self.shrink_to_fit()?;
        assert_eq!(self.buffer.len(), self.len());
        extend.shrink_to_fit()?;
        assert_eq!(extend.buffer.len(), extend.len());

        // Combine the checksums.
        let new_checksum = combine_checksums(self.checksum, extend.checksum, extend.len());

        // Combine the slices.
        let new_bytes = {
            let mut bytes_mut = BytesMut::with_capacity(self.len() + extend.len());
            bytes_mut.extend_from_slice(&self.buffer);
            bytes_mut.extend_from_slice(&extend.buffer);
            bytes_mut.freeze()
        };

        let new_range = 0..(new_bytes.len());
        *self = Self {
            buffer: new_bytes,
            range: new_range,
            checksum: new_checksum,
        };
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
    pub fn into_inner(mut self) -> Result<(Bytes, Crc32c), IntegrityError> {
        self.shrink_to_fit()?;
        Ok((self.buffer, self.checksum))
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
        Self::new(value)
    }
}

impl TryFrom<ChecksummedBytes> for Bytes {
    type Error = IntegrityError;

    fn try_from(value: ChecksummedBytes) -> Result<Self, Self::Error> {
        value.into_bytes()
    }
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
        let checksummed_bytes = ChecksummedBytes::new(bytes);

        let actual = checksummed_bytes.into_bytes().unwrap();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_into_bytes_integrity_error() {
        let bytes = Bytes::from_static(b"some bytes");
        let mut checksummed_bytes = ChecksummedBytes::new(bytes);

        // alter the content
        checksummed_bytes.buffer = Bytes::from_static(b"otherbytes");

        let actual = checksummed_bytes.into_bytes();
        assert!(matches!(actual, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_split_off() {
        let split_off_at = 4;
        let bytes = Bytes::from_static(b"some bytes");
        let expected = bytes.clone();
        let expected_checksum = crc32c::checksum(&expected);
        let mut checksummed_bytes = ChecksummedBytes::new(bytes);

        let mut expected_part1 = expected.clone();
        let expected_part2 = expected_part1.split_off(split_off_at);
        let new_checksummed_bytes = checksummed_bytes.split_off(split_off_at);

        assert_eq!(expected, checksummed_bytes.buffer);
        assert_eq!(expected, new_checksummed_bytes.buffer);
        assert_eq!(expected_part1, checksummed_bytes.buffer_slice());
        assert_eq!(expected_part2, new_checksummed_bytes.buffer_slice());
        assert_eq!(expected_checksum, checksummed_bytes.checksum);
        assert_eq!(expected_checksum, new_checksummed_bytes.checksum);
    }

    #[test]
    fn test_slice() {
        let range = 3..7;
        let bytes = Bytes::from_static(b"some bytes");
        let expected = bytes.clone();
        let expected_slice = bytes.slice(range.clone());
        let expected_checksum = crc32c::checksum(&expected);
        let original = ChecksummedBytes::new(bytes);
        let slice = original.slice(range);

        assert_eq!(expected, original.buffer);
        assert_eq!(expected, original.buffer_slice());
        assert_eq!(expected, slice.buffer);
        assert_eq!(expected_slice, slice.buffer_slice());
        assert_eq!(expected_checksum, original.checksum);
        assert_eq!(expected_checksum, slice.checksum);
    }

    fn create_checksummed_bytes_with_range(range: Range<usize>) -> ChecksummedBytes {
        let buffer = Bytes::copy_from_slice(&vec![0; range.len()]);
        let checksum = crc32c::checksum(&buffer);
        ChecksummedBytes {
            buffer,
            range,
            checksum,
        }
    }

    #[test_case(0..10, 0..10, 0..10)]
    #[test_case(0..10, 5..6, 5..6)]
    #[test_case(5..10, 2..4, 7..9)]
    fn test_slice_range(original: Range<usize>, range: Range<usize>, expected: Range<usize>) {
        let bytes = create_checksummed_bytes_with_range(original);
        let slice = bytes.slice(range);
        assert_eq!(slice.range, expected);
    }

    #[allow(clippy::reversed_empty_ranges)]
    #[should_panic]
    #[test_case(5..10, 4..2; "start greater than end")]
    #[test_case(5..10, 4..12; "out of bounds")]
    fn test_slice_range_fail(original: Range<usize>, range: Range<usize>) {
        let bytes = create_checksummed_bytes_with_range(original);
        _ = bytes.slice(range);
    }

    #[test_case(0..10, ..10, 0..10)]
    #[test_case(0..10, ..6, 0..6)]
    #[test_case(5..10, ..4, 5..9)]
    fn test_slice_range_to(original: Range<usize>, range: RangeTo<usize>, expected: Range<usize>) {
        let bytes = create_checksummed_bytes_with_range(original);
        let slice = bytes.slice(range);
        assert_eq!(slice.range, expected);
    }

    #[test_case(0..10, 0.., 0..10)]
    #[test_case(0..10, 4.., 4..10)]
    #[test_case(5..10, 2.., 7..10)]
    fn test_slice_range_from(original: Range<usize>, range: RangeFrom<usize>, expected: Range<usize>) {
        let bytes = create_checksummed_bytes_with_range(original);
        let slice = bytes.slice(range);
        assert_eq!(slice.range, expected);
    }

    #[test]
    fn test_shrink_to_fit() {
        let original = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));
        let mut unchanged = original.clone();
        unchanged.shrink_to_fit().unwrap();
        assert_eq!(original.buffer_slice(), unchanged.buffer_slice());
        assert_eq!(original.buffer, unchanged.buffer);
        assert_eq!(original.checksum, unchanged.checksum);

        let slice = original.clone().split_off(5);
        let mut shrunken = slice.clone();
        shrunken.shrink_to_fit().unwrap();
        assert_eq!(slice.buffer_slice(), shrunken.buffer_slice());
        assert_ne!(slice.buffer, shrunken.buffer);
        assert_ne!(slice.checksum, shrunken.checksum);
    }

    #[test]
    fn test_shrink_to_fit_corrupted() {
        let mut original = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));

        // alter the content
        original.buffer = Bytes::from_static(b"otherbytes");

        assert!(matches!(
            original.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        let mut unchanged = original.clone();
        unchanged.shrink_to_fit().unwrap();
        assert_eq!(original.buffer_slice(), unchanged.buffer_slice());
        assert_eq!(original.buffer, unchanged.buffer);
        assert_eq!(original.checksum, unchanged.checksum);
        assert!(matches!(
            unchanged.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        let mut slice = original.clone().split_off(5);
        assert!(matches!(slice.validate(), Err(IntegrityError::ChecksumMismatch(_, _))));

        let result = slice.shrink_to_fit();
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_into_inner() {
        let original = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));
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
        let mut checksummed_bytes = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));
        let extend_bytes = ChecksummedBytes::new(Bytes::from_static(b" extended"));
        checksummed_bytes.extend(extend_bytes).unwrap();
        let actual = checksummed_bytes.buffer_slice();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_extend_after_split() {
        let expected = Bytes::from_static(b"some bytes extended");
        let mut checksummed_bytes = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));
        let mut extend = ChecksummedBytes::new(Bytes::from_static(b"bytes extended"));
        _ = checksummed_bytes.split_off(7);
        extend = extend.split_off(2);
        checksummed_bytes.extend(extend).unwrap();
        let actual = checksummed_bytes.buffer_slice();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_extend_self_corrupted() {
        let mut checksummed_bytes = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));

        // alter the content
        checksummed_bytes.buffer = Bytes::from_static(b"otherbytes");

        assert!(matches!(
            checksummed_bytes.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        let extend = ChecksummedBytes::new(Bytes::from_static(b" extended"));
        assert!(matches!(extend.validate(), Ok(())));

        checksummed_bytes.extend(extend).unwrap();
        assert!(matches!(
            checksummed_bytes.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));
    }

    #[test]
    fn test_extend_after_split_self_corrupted() {
        let mut checksummed_bytes = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));

        // alter the content
        checksummed_bytes.buffer = Bytes::from_static(b"otherbytes");

        assert!(matches!(
            checksummed_bytes.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        _ = checksummed_bytes.split_off(4);

        let extend = ChecksummedBytes::new(Bytes::from_static(b" extended"));
        assert!(matches!(extend.validate(), Ok(())));

        let result = checksummed_bytes.extend(extend);
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_extend_split_off_self_corrupted() {
        let mut split_off = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));

        // alter the content
        split_off.buffer = Bytes::from_static(b"otherbytes");

        split_off = split_off.split_off(4);

        assert!(matches!(
            split_off.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        let extend = ChecksummedBytes::new(Bytes::from_static(b" extended"));
        assert!(matches!(extend.validate(), Ok(())));

        let result = split_off.extend(extend);
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_extend_other_corrupted() {
        let mut checksummed_bytes = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));
        assert!(matches!(checksummed_bytes.validate(), Ok(())));

        let mut extend = ChecksummedBytes::new(Bytes::from_static(b" extended"));

        // alter the content
        extend.buffer = Bytes::from_static(b"corrupted");

        assert!(matches!(extend.validate(), Err(IntegrityError::ChecksumMismatch(_, _))));

        checksummed_bytes.extend(extend).unwrap();
        assert!(matches!(
            checksummed_bytes.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));
    }

    #[test]
    fn test_extend_after_split_other_corrupted() {
        let mut checksummed_bytes = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));
        assert!(matches!(checksummed_bytes.validate(), Ok(())));

        let mut extend = ChecksummedBytes::new(Bytes::from_static(b" extended"));

        // alter the content
        extend.buffer = Bytes::from_static(b"corrupted");

        assert!(matches!(extend.validate(), Err(IntegrityError::ChecksumMismatch(_, _))));

        _ = extend.split_off(4);

        let result = checksummed_bytes.extend(extend);
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn test_extend_split_off_other_corrupted() {
        let mut checksummed_bytes = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));
        assert!(matches!(checksummed_bytes.validate(), Ok(())));

        let mut split_off = ChecksummedBytes::new(Bytes::from_static(b"bytes extended"));

        // alter the content
        split_off.buffer = Bytes::from_static(b"bytescorrupted");

        split_off = split_off.split_off(5);
        assert!(matches!(
            split_off.validate(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));

        let result = checksummed_bytes.extend(split_off);
        assert!(matches!(result, Err(IntegrityError::ChecksumMismatch(_, _))));
    }
}
