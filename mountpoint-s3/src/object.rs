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

/// A part of an S3 object. The implementation guarantees that integrity will be validated before
/// the part's content can be accessed.
/// Data transformations will either fail returning a [PartValidationError], or propagate the
/// data checksum so that it can be validated on access.
/// [ObjectPart]s can internally reference a buffer which is larger than the slice they represent.
/// This allows to implement a number of operations (e.g. `slice`, `split_off`) without forcing a
/// re-calculation of the integrity checksum on the part content (`buffer_checksum`). A separate
/// `metadata_checksum` is always re-calculated based on all other fields.
#[derive(Debug, Clone)]
#[must_use]
pub struct ObjectPart {
    object_id: ObjectId,
    /// Offset in the object
    offset: u64,
    /// Underlying buffer
    buffer: Bytes,
    /// Checksum for the whole [Self::buffer]
    buffer_checksum: Crc32c,
    /// Range over `buffer`
    range: Range<usize>,
    /// Checksum for this part metadata.
    /// Computed over [Self::object_id], [Self::offset], [Self::buffer_checksum], and [Self::range] (but not [Self::buffer]).
    metadata_checksum: Crc32c,
}

impl ObjectPart {
    /// Create a new [ObjectPart] from the given [Bytes] and pre-calculated checksum.
    /// To be used for de-serialization.
    pub fn new_from_inner_data(object_id: ObjectId, offset: u64, bytes: Bytes, bytes_checksum: Crc32c) -> Self {
        let full_range = 0..bytes.len();
        let metadata_checksum = compute_part_checksum(&object_id, offset, bytes_checksum, &full_range);
        Self {
            object_id,
            offset,
            buffer: bytes,
            buffer_checksum: bytes_checksum,
            range: full_range,
            metadata_checksum,
        }
    }

    /// Create a new [ObjectPart] from the given [Bytes].
    pub fn new(object_id: ObjectId, offset: u64, bytes: Bytes) -> Self {
        let bytes_checksum = crc32c::checksum(&bytes);
        Self::new_from_inner_data(object_id, offset, bytes, bytes_checksum)
    }

    /// Returns the bytes in this part, if its integrity can be validated.
    pub fn into_bytes(self) -> Result<Bytes, PartValidationError> {
        self.validate()?;
        Ok(self.buffer_slice())
    }

    /// Returns the [ObjectId] of this [ObjectPart].
    pub fn object_id(&self) -> &ObjectId {
        &self.object_id
    }

    /// Returns the offset of this [ObjectPart] in the object.
    pub fn offset(&self) -> u64 {
        self.offset
    }

    /// Returns the number of bytes contained in this [ObjectPart].
    pub fn len(&self) -> usize {
        self.range.len()
    }

    /// Returns true if this [ObjectPart] is empty.
    pub fn is_empty(&self) -> bool {
        self.range.is_empty()
    }

    /// Split off the part at the given index.
    ///
    /// Returns a new part containing the range [at, len). After the call, the original
    /// part will be left containing the elements [0, at).
    pub fn split_off(&mut self, at: usize) -> Result<Self, PartValidationError> {
        assert!(at < self.len());

        let start = self.range.start;
        let prefix_range = start..(start + at);
        let suffix_range = (start + at)..self.range.end;

        let mut split_off = self.clone();
        self.replace_range(prefix_range)?;
        split_off.replace_range(suffix_range)?;
        Ok(split_off)
    }

    /// Returns a slice of self for the provided range.
    pub fn slice(&self, range: impl RangeBounds<usize>) -> Result<Self, PartValidationError> {
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

        let mut sliced = self.clone();
        sliced.replace_range(sliced_range)?;
        Ok(sliced)
    }

    /// Guarantees that the checksum is computed exactly
    /// on the slice, rather than on a larger containing buffer.
    ///
    /// Return [PartValidationError] if data corruption is detected.
    pub fn shrink_to_fit(&mut self) -> Result<(), PartValidationError> {
        if self.range.len() == self.buffer.len() {
            return Ok(());
        }

        // Note that no data is copied: `bytes` still points to a subslice of `buffer`.
        let bytes = self.buffer_slice();
        let bytes_checksum = crc32c::checksum(&bytes);
        let new_range = 0..bytes.len();
        let part_checksum = compute_part_checksum(&self.object_id, self.offset, bytes_checksum, &new_range);

        // Check the integrity of the whole buffer.
        self.validate()?;

        // Replace with the slice.
        *self = Self {
            object_id: self.object_id.clone(),
            offset: self.offset,
            buffer: bytes,
            buffer_checksum: bytes_checksum,
            range: new_range,
            metadata_checksum: part_checksum,
        };
        Ok(())
    }

    /// Append the given part to current [ObjectPart]. Will combine the
    /// existing checksums if possible, or compute a new one and validate data integrity.
    ///
    /// Return [PartValidationError] if data corruption is detected.
    pub fn extend(&mut self, mut extend: ObjectPart) -> Result<(), PartValidationError> {
        let expected_offset = self.offset + self.len() as u64;
        if expected_offset != extend.offset {
            return Err(PartValidationError::NonContiguousOffset {
                actual: extend.offset,
                expected: expected_offset,
            });
        }

        if extend.is_empty() {
            // No op, but check that `extend` was not corrupted
            extend.validate_metadata()?;
            return Ok(());
        }

        if self.is_empty() {
            // Replace with `extend`, but check that `self` was not corrupted
            self.validate_metadata()?;
            *self = extend;
            return Ok(());
        }

        // When appending two slices, we can combine their checksums and obtain the new checksum
        // without having to recompute it from the data.
        // However, since an `ObjectPart` potentially holds the checksum of some larger buffer,
        // rather than the exact one for the slice, we need to first invoke `shrink_to_fit` on each
        // slice and use the resulting exact checksums.
        self.shrink_to_fit()?;
        assert_eq!(self.buffer.len(), self.range.len());
        extend.shrink_to_fit()?;
        assert_eq!(extend.buffer.len(), extend.range.len());

        // Combine the checksums.
        let new_checksum = combine_checksums(self.buffer_checksum, extend.buffer_checksum, extend.len());

        // Combine the slices.
        let new_bytes = {
            let mut bytes_mut = BytesMut::with_capacity(self.len() + extend.len());
            bytes_mut.extend_from_slice(&self.buffer);
            bytes_mut.extend_from_slice(&extend.buffer);
            bytes_mut.freeze()
        };

        let new_range = 0..(new_bytes.len());
        let new_metadata_checksum = compute_part_checksum(&self.object_id, self.offset, new_checksum, &new_range);
        *self = Self {
            object_id: self.object_id.clone(),
            offset: self.offset,
            buffer: new_bytes,
            buffer_checksum: new_checksum,
            range: new_range,
            metadata_checksum: new_metadata_checksum,
        };
        Ok(())
    }

    /// Validate data and metadata integrity in this [ObjectPart].
    ///
    /// Return an error if part data and metadata integrity could not be verified.
    fn validate(&self) -> Result<(), PartValidationError> {
        self.validate_metadata()?;
        let checksum = crc32c::checksum(&self.buffer);
        if self.buffer_checksum != checksum {
            return Err(PartValidationError::DataChecksumMismatch {
                expected: self.buffer_checksum,
                actual: checksum,
            });
        }
        Ok(())
    }

    /// Validate metadata integrity in this [ObjectPart].
    ///
    /// Return an error if part metadata integrity could not be verified.
    fn validate_metadata(&self) -> Result<(), PartValidationError> {
        let part_checksum = compute_part_checksum(&self.object_id, self.offset, self.buffer_checksum, &self.range);
        if self.metadata_checksum != part_checksum {
            return Err(PartValidationError::MetadataChecksumMismatch {
                expected: self.metadata_checksum,
                actual: part_checksum,
            });
        }
        Ok(())
    }

    /// Check whether this part matches the given identifier and offset.
    pub fn check(&self, object_id: &ObjectId, offset: u64) -> Result<(), PartMismatchError> {
        if self.object_id.key() != object_id.key() {
            return Err(PartMismatchError::Key {
                actual: self.object_id.key().to_owned(),
                requested: object_id.key().to_owned(),
            });
        }
        if self.object_id.etag() != object_id.etag() {
            return Err(PartMismatchError::ETag {
                actual: self.object_id.etag().to_owned(),
                requested: object_id.etag().to_owned(),
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

    /// Provide the underlying bytes and the associated checksum,
    /// which may be recalculated if the checksum covers a larger slice than the current slice.
    /// Validation may or may not be triggered, and **bytes or checksum may be corrupt** even if result returns [Ok].
    ///
    /// If you are only interested in the underlying bytes, **you should use `into_bytes()`**.
    pub fn into_inner_data(mut self) -> Result<(Bytes, Crc32c), PartValidationError> {
        self.shrink_to_fit()?;
        Ok((self.buffer, self.buffer_checksum))
    }

    /// Return the slice of `buffer` corresponding to `range`.
    ///
    /// Note that no data is copied: the returned `Bytes` still points to a subslice of `buffer`.
    fn buffer_slice(&self) -> Bytes {
        self.buffer.slice(self.range.clone())
    }

    /// Replace the range and recompute the offset and the metadata checksum.
    /// Ensures metadata is valid before any modification is performed.
    fn replace_range(&mut self, new_range: Range<usize>) -> Result<(), PartValidationError> {
        self.validate_metadata()?;
        self.offset += (new_range.start - self.range.start) as u64;
        self.range = new_range;
        self.metadata_checksum = compute_part_checksum(&self.object_id, self.offset, self.buffer_checksum, &self.range);
        Ok(())
    }
}

fn compute_part_checksum(
    object_id: &ObjectId,
    offset: u64,
    buffer_checksum: Crc32c,
    buffer_range: &Range<usize>,
) -> Crc32c {
    let mut hasher = crc32c::Hasher::new();
    hasher.update(object_id.key().as_bytes());
    hasher.update(object_id.etag().as_str().as_bytes());
    hasher.update(&offset.to_be_bytes());
    hasher.update(&buffer_checksum.value().to_be_bytes());
    hasher.update(&buffer_range.start.to_be_bytes());
    hasher.update(&buffer_range.end.to_be_bytes());
    hasher.finalize()
}

#[derive(Debug, Error)]
pub enum PartValidationError {
    #[error("part offset not contiguous. actual={actual}, expected={expected}")]
    NonContiguousOffset { actual: u64, expected: u64 },

    #[error("data checksum mismatch. expected: {expected:?}, actual: {actual:?}")]
    DataChecksumMismatch { actual: Crc32c, expected: Crc32c },

    #[error("metadata checksum mismatch. expected: {expected:?}, actual: {actual:?}")]
    MetadataChecksumMismatch { actual: Crc32c, expected: Crc32c },
}

#[derive(Debug, Error)]
pub enum PartMismatchError {
    #[error("wrong part key: actual={actual:?}, requested={requested:?}")]
    Key { actual: String, requested: String },

    #[error("wrong part etag: actual={actual:?}, requested={requested:?}")]
    ETag { actual: ETag, requested: ETag },

    #[error("wrong part offset: actual={actual}, requested={requested}")]
    Offset { actual: u64, requested: u64 },
}

// Implement equality for tests only. We implement equality, and will panic if the data is corrupted.
#[cfg(test)]
impl PartialEq for ObjectPart {
    fn eq(&self, other: &Self) -> bool {
        let result = self.object_id == other.object_id
            && self.offset == other.offset
            && self.buffer_slice() == other.buffer_slice();
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
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let offset = 64;
        let part = ObjectPart::new(object_id.clone(), offset, bytes);

        let actual = part.into_bytes().unwrap();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_into_bytes_integrity_error() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let offset = 64;
        let mut part = ObjectPart::new(object_id.clone(), offset, bytes);

        // alter the content
        part.buffer = Bytes::from_static(b"otherbytes");

        let actual = part.into_bytes();
        assert!(matches!(actual, Err(PartValidationError::DataChecksumMismatch { .. })));
    }

    #[test]
    fn test_into_bytes_metadata_integrity_error_offset() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let offset = 64;
        let mut part = ObjectPart::new(object_id.clone(), offset, bytes);

        // alter the offset
        part.offset += 1;

        let actual = part.into_bytes();
        assert!(matches!(
            actual,
            Err(PartValidationError::MetadataChecksumMismatch { .. })
        ));
    }

    #[test]
    fn test_into_bytes_metadata_integrity_error_key() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let offset = 64;
        let mut part = ObjectPart::new(object_id.clone(), offset, bytes);

        // alter the key
        part.object_id = ObjectId::new("key2".to_owned(), object_id.etag().clone());

        let actual = part.into_bytes();
        assert!(matches!(
            actual,
            Err(PartValidationError::MetadataChecksumMismatch { .. })
        ));
    }

    #[test]
    fn test_into_bytes_metadata_integrity_error_etag() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let offset = 64;
        let mut part = ObjectPart::new(object_id.clone(), offset, bytes);

        // alter the etag
        part.object_id = ObjectId::new(object_id.key().to_owned(), ETag::from_object_bytes(b"data"));

        let actual = part.into_bytes();
        assert!(matches!(
            actual,
            Err(PartValidationError::MetadataChecksumMismatch { .. })
        ));
    }

    #[test]
    fn test_split_off() {
        let split_off_at = 4;
        let bytes = Bytes::from_static(b"some bytes");
        let expected = bytes.clone();
        let expected_checksum = crc32c::checksum(&expected);
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let mut part = ObjectPart::new(object_id, 0, bytes);

        let mut expected_bytes_1 = expected.clone();
        let expected_bytes_2 = expected_bytes_1.split_off(split_off_at);
        let new_part = part.split_off(split_off_at).unwrap();

        assert_eq!(expected, part.buffer);
        assert_eq!(expected, new_part.buffer);
        assert_eq!(expected_bytes_1, part.buffer_slice());
        assert_eq!(expected_bytes_2, new_part.buffer_slice());
        assert_eq!(expected_checksum, part.buffer_checksum);
        assert_eq!(expected_checksum, new_part.buffer_checksum);
    }

    #[test]
    fn test_slice() {
        let range = 3..7;
        let bytes = Bytes::from_static(b"some bytes");
        let expected = bytes.clone();
        let expected_slice = bytes.slice(range.clone());
        let expected_checksum = crc32c::checksum(&bytes);

        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let original = ObjectPart::new(object_id, 0, bytes);
        let slice = original.slice(range).unwrap();

        assert_eq!(expected, original.buffer);
        assert_eq!(expected, original.buffer_slice());
        assert_eq!(expected, slice.buffer);
        assert_eq!(expected_slice, slice.buffer_slice());
        assert_eq!(expected_checksum, original.buffer_checksum);
        assert_eq!(expected_checksum, slice.buffer_checksum);
    }

    fn create_part_with_range(range: Range<usize>) -> ObjectPart {
        let buffer = Bytes::copy_from_slice(&vec![0; range.len()]);
        let buffer_checksum = crc32c::checksum(&buffer);
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let offset = range.start as u64;
        let metadata_checksum = compute_part_checksum(&object_id, offset, buffer_checksum, &range);
        ObjectPart {
            object_id,
            offset,
            buffer,
            buffer_checksum,
            range,
            metadata_checksum,
        }
    }

    #[test_case(0..10, 0..10, 0..10)]
    #[test_case(0..10, 5..6, 5..6)]
    #[test_case(5..10, 2..4, 7..9)]
    fn test_slice_range(original: Range<usize>, range: Range<usize>, expected: Range<usize>) {
        let part = create_part_with_range(original);
        let slice = part.slice(range).unwrap();
        assert_eq!(slice.range, expected);
    }

    #[allow(clippy::reversed_empty_ranges)]
    #[should_panic]
    #[test_case(5..10, 4..2; "start greater than end")]
    #[test_case(5..10, 4..12; "out of bounds")]
    fn test_slice_range_fail(original: Range<usize>, range: Range<usize>) {
        let part = create_part_with_range(original);
        _ = part.slice(range);
    }

    #[test_case(0..10, ..10, 0..10)]
    #[test_case(0..10, ..6, 0..6)]
    #[test_case(5..10, ..4, 5..9)]
    fn test_slice_range_to(original: Range<usize>, range: RangeTo<usize>, expected: Range<usize>) {
        let part = create_part_with_range(original);
        let slice = part.slice(range).unwrap();
        assert_eq!(slice.range, expected);
    }

    #[test_case(0..10, 0.., 0..10)]
    #[test_case(0..10, 4.., 4..10)]
    #[test_case(5..10, 2.., 7..10)]
    fn test_slice_range_from(original: Range<usize>, range: RangeFrom<usize>, expected: Range<usize>) {
        let part = create_part_with_range(original);
        let slice = part.slice(range).unwrap();
        assert_eq!(slice.range, expected);
    }

    #[test]
    fn test_shrink_to_fit() {
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let bytes = Bytes::from_static(b"some bytes");
        let original = ObjectPart::new(object_id, 0, bytes);
        let mut unchanged = original.clone();
        unchanged.shrink_to_fit().unwrap();
        assert_eq!(original.buffer_slice(), unchanged.buffer_slice());
        assert_eq!(original.buffer, unchanged.buffer);
        assert_eq!(original.buffer_checksum, unchanged.buffer_checksum);

        let slice = original.slice(2..6).unwrap();
        let mut fit_slice = slice.clone();
        fit_slice.shrink_to_fit().unwrap();
        assert_eq!(slice.buffer_slice(), fit_slice.buffer_slice());
        assert_ne!(slice.buffer, fit_slice.buffer);
        assert_ne!(slice.buffer_checksum, fit_slice.buffer_checksum);
    }

    #[test]
    fn test_shrink_to_fit_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let mut original = ObjectPart::new(object_id, 0, bytes);
        original.buffer = Bytes::from_static(b"otherbytes");

        assert!(matches!(
            original.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));

        let mut unchanged = original.clone();
        unchanged.shrink_to_fit().unwrap();
        assert_eq!(original.buffer_slice(), unchanged.buffer_slice());
        assert_eq!(original.buffer, unchanged.buffer);
        assert_eq!(original.buffer_checksum, unchanged.buffer_checksum);
        assert!(matches!(
            unchanged.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));

        let mut slice = original.clone().split_off(5).unwrap();
        assert!(matches!(
            slice.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));

        let result = slice.shrink_to_fit();
        assert!(matches!(result, Err(PartValidationError::DataChecksumMismatch { .. })));
    }

    #[test]
    fn test_into_inner_data() {
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let bytes = Bytes::from_static(b"some bytes");
        let original = ObjectPart::new(object_id, 0, bytes);
        let (unchanged_bytes, unchanged_checksum) = original.clone().into_inner_data().unwrap();
        assert_eq!(original.buffer_slice(), unchanged_bytes);
        assert_eq!(original.buffer, unchanged_bytes);
        assert_eq!(original.buffer_checksum, unchanged_checksum);

        let slice = original.clone().split_off(5).unwrap();
        let (shrunken_bytes, shrunken_checksum) = slice.clone().into_inner_data().unwrap();
        assert_eq!(slice.buffer_slice(), shrunken_bytes);
        assert_ne!(slice.buffer, shrunken_bytes);
        assert_ne!(slice.buffer_checksum, shrunken_checksum);
    }

    #[test]
    fn test_extend() {
        let expected = Bytes::from_static(b"some bytes extended");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let mut part = ObjectPart::new(object_id.clone(), 0, Bytes::from_static(b"some bytes"));
        let extend_part = ObjectPart::new(object_id.clone(), part.len() as u64, Bytes::from_static(b" extended"));
        part.extend(extend_part).unwrap();
        let actual = part.buffer_slice();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_extend_after_split() {
        let expected = Bytes::from_static(b"some bytes extended");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let mut part = ObjectPart::new(object_id.clone(), 0, Bytes::from_static(b"some bytes"));
        let mut extend = ObjectPart::new(object_id.clone(), 5, Bytes::from_static(b"bytes extended"));
        _ = part.split_off(7);
        extend = extend.split_off(2).unwrap();
        part.extend(extend).unwrap();
        let actual = part.buffer_slice();
        assert_eq!(expected, actual);
    }

    #[test]
    fn test_extend_self_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let mut part = ObjectPart::new(object_id.clone(), 0, bytes);

        // alter the content
        part.buffer = Bytes::from_static(b"otherbytes");

        assert!(matches!(
            part.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));

        let extend = ObjectPart::new(object_id.clone(), 10, Bytes::from_static(b" extended"));
        assert!(matches!(extend.validate(), Ok(())));

        part.extend(extend).unwrap();
        assert!(matches!(
            part.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));
    }

    #[test]
    fn test_extend_after_split_self_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let mut part = ObjectPart::new(object_id.clone(), 0, bytes);

        // alter the content
        part.buffer = Bytes::from_static(b"otherbytes");

        assert!(matches!(
            part.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));

        _ = part.split_off(4);

        let extend = ObjectPart::new(object_id.clone(), 4, Bytes::from_static(b" extended"));
        assert!(matches!(extend.validate(), Ok(())));

        let result = part.extend(extend);
        assert!(matches!(result, Err(PartValidationError::DataChecksumMismatch { .. })));
    }

    #[test]
    fn test_extend_split_off_self_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let mut split_off = ObjectPart::new(object_id.clone(), 0, bytes);

        // alter the content
        split_off.buffer = Bytes::from_static(b"otherbytes");

        split_off = split_off.split_off(4).unwrap();

        assert!(matches!(
            split_off.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));

        let extend = ObjectPart::new(object_id.clone(), 10, Bytes::from_static(b" extended"));
        assert!(matches!(extend.validate(), Ok(())));

        let result = split_off.extend(extend);
        assert!(matches!(result, Err(PartValidationError::DataChecksumMismatch { .. })));
    }

    #[test]
    fn test_extend_other_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let mut part = ObjectPart::new(object_id.clone(), 0, bytes);
        assert!(matches!(part.validate(), Ok(())));

        let mut extend = ObjectPart::new(object_id.clone(), 10, Bytes::from_static(b" extended"));

        // alter the content
        extend.buffer = Bytes::from_static(b"corrupted");

        assert!(matches!(
            extend.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));

        part.extend(extend).unwrap();
        assert!(matches!(
            part.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));
    }

    #[test]
    fn test_extend_after_split_other_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let mut part = ObjectPart::new(object_id.clone(), 0, bytes);
        assert!(matches!(part.validate(), Ok(())));

        let mut extend = ObjectPart::new(object_id.clone(), 10, Bytes::from_static(b" extended"));

        // alter the content
        extend.buffer = Bytes::from_static(b"corrupted");

        assert!(matches!(
            extend.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));

        _ = extend.split_off(4);

        let result = part.extend(extend);
        assert!(matches!(result, Err(PartValidationError::DataChecksumMismatch { .. })));
    }

    #[test]
    fn test_extend_split_off_other_corrupted() {
        let bytes = Bytes::from_static(b"some bytes");
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let mut part = ObjectPart::new(object_id.clone(), 0, bytes);
        assert!(matches!(part.validate(), Ok(())));

        let mut split_off = ObjectPart::new(object_id.clone(), 5, Bytes::from_static(b"bytes extended"));

        // alter the content
        split_off.buffer = Bytes::from_static(b"bytescorrupted");

        split_off = split_off.split_off(5).unwrap();
        assert!(matches!(
            split_off.validate(),
            Err(PartValidationError::DataChecksumMismatch { .. })
        ));

        let result = part.extend(split_off);
        assert!(matches!(result, Err(PartValidationError::DataChecksumMismatch { .. })));
    }
}
