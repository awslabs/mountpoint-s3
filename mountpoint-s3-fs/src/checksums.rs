use std::{
    fmt,
    ops::{Bound, Range, RangeBounds},
};

use bytes::{Bytes, BytesMut};
use serde::{
    Deserialize, Deserializer, Serialize, Serializer,
    de::{self, Visitor},
};
use thiserror::Error;

use mountpoint_s3_client::checksums::{
    crc32c::{self, Crc32c},
    crc32c_from_base64, crc32c_to_base64,
};

/// Check if integrity validation is disabled via environment variable
fn is_integrity_validation_disabled() -> bool {
    std::env::var("EXPERIMENTAL_MOUNTPOINT_NO_DOWNLOAD_INTEGRITY_VALIDATION").is_ok()
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
        let checksum = if is_integrity_validation_disabled() {
            Crc32c::new(0) // Dummy checksum when validation is disabled
        } else {
            crc32c::checksum(&bytes)
        };
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
                "range start must not be greater than end: {slice_start_offset:?} <= {slice_end_offset:?}",
            );
            assert!(
                slice_end_offset <= original_len,
                "range end out of bounds: {slice_end_offset:?} <= {original_len:?}",
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
        if is_integrity_validation_disabled() {
            return Ok(()); // Skip validation when disabled
        }

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

/// Accumulates several [ChecksummedBytes] into one pre-allocated buffer, copying each piece exactly
/// once and combining the pieces' checksums rather than recomputing one over the result.
///
/// Use this instead of repeated [ChecksummedBytes::extend] when the total length is known up front:
/// `extend` allocates a fresh buffer and re-copies the accumulated prefix on every call, so
/// stitching `n` pieces costs `n - 1` allocations and copies the prefix `n - 1` times.
///
/// The backing buffer is supplied by the caller, so it can come from a memory pool rather than the
/// heap. It must be exactly `capacity` bytes long, and [Self::finish] requires it to have been
/// filled: the checksum is only exact for the whole buffer, so a partially filled one would carry a
/// checksum covering the untouched tail.
#[must_use]
pub struct ChecksummedBytesBuilder<Buffer> {
    /// Destination buffer, filled from the front.
    buffer: Buffer,
    /// Bytes written into [Self::buffer] so far.
    len: usize,
    /// Combined checksum of the first [Self::len] bytes.
    checksum: Crc32c,
}

impl<Buffer: AsRef<[u8]> + AsMut<[u8]> + Send + 'static> ChecksummedBytesBuilder<Buffer> {
    /// Create a builder writing into `buffer`, which must be sized to the exact total length of the
    /// pieces that will be appended.
    pub fn new(buffer: Buffer) -> Self {
        Self {
            buffer,
            len: 0,
            checksum: Crc32c::new(0),
        }
    }

    /// Total number of bytes this builder can hold.
    fn capacity(&self) -> usize {
        self.buffer.as_ref().len()
    }

    /// Copy `bytes` into the buffer and fold its checksum into the running one.
    ///
    /// Return [IntegrityError] if data corruption is detected in `bytes`.
    ///
    /// Panics if `bytes` does not fit in the remaining capacity.
    pub fn append(&mut self, bytes: ChecksummedBytes) -> Result<(), IntegrityError> {
        if bytes.is_empty() {
            // No op, but check that `bytes` was not corrupted.
            bytes.validate()?;
            return Ok(());
        }

        // `into_inner` shrinks to fit, which both validates the source data and yields a checksum
        // covering exactly this piece — `combine_checksums` requires exact checksums, and a
        // `ChecksummedBytes` may otherwise carry the checksum of a larger containing buffer.
        let (bytes, checksum) = bytes.into_inner()?;

        let new_len = self.len + bytes.len();
        assert!(
            new_len <= self.capacity(),
            "appending {} bytes would exceed the builder capacity of {}",
            bytes.len(),
            self.capacity(),
        );
        self.buffer.as_mut()[self.len..new_len].copy_from_slice(&bytes);
        self.checksum = combine_checksums(self.checksum, checksum, bytes.len());
        self.len = new_len;
        Ok(())
    }

    /// Consume the builder and return the accumulated data.
    ///
    /// Panics if the buffer was not filled to its capacity.
    pub fn finish(self) -> ChecksummedBytes {
        assert_eq!(
            self.len,
            self.capacity(),
            "builder must be filled to capacity before finishing",
        );
        ChecksummedBytes::new_from_inner_data(Bytes::from_owner(self.buffer), self.checksum)
    }
}

impl<Buffer> fmt::Debug for ChecksummedBytesBuilder<Buffer> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        f.debug_struct("ChecksummedBytesBuilder")
            .field("len", &self.len)
            .field("checksum", &self.checksum)
            .finish_non_exhaustive()
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

/// Calculates the combined checksum for `AB` where `prefix_crc` is the checksum for `A`,
/// `suffix_crc` is the checksum for `B`, and `suffix_len` is the length of `B`.
pub fn combine_checksums(prefix_crc: Crc32c, suffix_crc: Crc32c, suffix_len: usize) -> Crc32c {
    if is_integrity_validation_disabled() {
        return Crc32c::new(0); // Dummy checksum when validation is disabled
    }

    let combined = ::crc32c::crc32c_combine(prefix_crc.value(), suffix_crc.value(), suffix_len);
    Crc32c::new(combined)
}

#[derive(Debug, Error)]
pub enum IntegrityError {
    #[error("Checksum mismatch. expected: {0:?}, actual: {1:?}")]
    ChecksumMismatch(Crc32c, Crc32c),
}

/// A Crc32c checksum which can be (de)serialized to a base64 encoded string.
///
/// TODO: there should be a single Crc32c type implementing serialization.
#[derive(Debug)]
pub struct Crc32cBase64(Crc32c);

impl Crc32cBase64 {
    /// Create a new Crc32cBase64 checksum with the given value.
    pub fn new(value: u32) -> Crc32cBase64 {
        Crc32cBase64(Crc32c::new(value))
    }

    /// The CRC32C checksum value.
    pub fn value(&self) -> Crc32c {
        self.0
    }
}

impl Serialize for Crc32cBase64 {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        let encoded = crc32c_to_base64(&self.0);
        serializer.serialize_str(&encoded)
    }
}

impl<'de> Deserialize<'de> for Crc32cBase64 {
    fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
        D: Deserializer<'de>,
    {
        struct Crc32cVisitor;

        impl<'de> Visitor<'de> for Crc32cVisitor {
            type Value = Crc32cBase64;

            fn expecting(&self, formatter: &mut fmt::Formatter) -> fmt::Result {
                formatter.write_str("a base64-encoded CRC32C string")
            }

            fn visit_str<E>(self, v: &str) -> Result<Self::Value, E>
            where
                E: de::Error,
            {
                crc32c_from_base64(v).map(Crc32cBase64).map_err(E::custom)
            }
        }

        deserializer.deserialize_str(Crc32cVisitor)
    }
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

    use mountpoint_s3_client::checksums::crc32c;
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

    /// Append `pieces` into a builder sized to their total length, and return the result.
    fn build(pieces: impl IntoIterator<Item = ChecksummedBytes>) -> Result<ChecksummedBytes, IntegrityError> {
        let pieces: Vec<_> = pieces.into_iter().collect();
        let capacity = pieces.iter().map(|p| p.len()).sum();
        let mut builder = ChecksummedBytesBuilder::new(vec![0u8; capacity]);
        for piece in pieces {
            builder.append(piece)?;
        }
        Ok(builder.finish())
    }

    #[test]
    fn builder_combines_pieces_into_one_buffer() {
        let expected = Bytes::from_static(b"some bytes and some more bytes");
        let pieces = [
            ChecksummedBytes::new(expected.slice(..10)),
            ChecksummedBytes::new(expected.slice(10..19)),
            ChecksummedBytes::new(expected.slice(19..)),
        ];

        let result = build(pieces).unwrap();

        // The combined checksum must match one computed over the whole result, and must be exact
        // for the buffer so `validate` (which checksums the entire buffer) passes.
        assert_eq!(crc32c::checksum(&expected), result.checksum);
        assert_eq!(result.range, 0..expected.len());
        assert_eq!(expected, result.into_bytes().unwrap());
    }

    #[test]
    fn builder_combines_pieces_whose_checksums_cover_a_larger_buffer() {
        // `split_off` is zero-copy: each half carries the checksum of the whole parent buffer rather
        // than its own slice. The builder must reconcile that before combining.
        let full = Bytes::from_static(b"some bytes and some more bytes");
        let mut first = ChecksummedBytes::new(full.clone());
        let second = first.split_off(10);
        assert_ne!(first.checksum, crc32c::checksum(&full.slice(..10)));

        let result = build([first, second]).unwrap();

        assert_eq!(crc32c::checksum(&full), result.checksum);
        assert_eq!(full, result.into_bytes().unwrap());
    }

    #[test]
    fn builder_skips_empty_pieces() {
        let expected = Bytes::from_static(b"some bytes");
        let pieces = [
            ChecksummedBytes::default(),
            ChecksummedBytes::new(expected.clone()),
            ChecksummedBytes::default(),
        ];

        let result = build(pieces).unwrap();

        assert_eq!(crc32c::checksum(&expected), result.checksum);
        assert_eq!(expected, result.into_bytes().unwrap());
    }

    #[test]
    fn builder_propagates_corruption_in_an_appended_piece() {
        // As with `extend`, a corrupt piece covering its whole buffer is not detected on append (its
        // checksum is already exact, so there is nothing to recompute). The stale checksum is
        // combined with the corrupt data, so the corruption surfaces when the result is validated.
        let mut corrupt = ChecksummedBytes::new(Bytes::from_static(b" extended"));
        // alter the content
        corrupt.buffer = Bytes::from_static(b"corrupted");

        let mut builder = ChecksummedBytesBuilder::new(vec![0u8; 19]);
        builder
            .append(ChecksummedBytes::new(Bytes::from_static(b"some bytes")))
            .unwrap();
        builder.append(corrupt).unwrap();

        let result = builder.finish();
        assert!(matches!(result.validate(), Err(IntegrityError::ChecksumMismatch(_, _))));
        assert!(matches!(
            result.into_bytes(),
            Err(IntegrityError::ChecksumMismatch(_, _))
        ));
    }

    #[test]
    fn builder_append_detects_corrupt_sliced_piece() {
        // A sliced piece carries its parent's checksum, so appending it must reconcile the two —
        // which catches the corruption eagerly.
        let mut corrupt = ChecksummedBytes::new(Bytes::from_static(b" extended"));
        // alter the content
        corrupt.buffer = Bytes::from_static(b"corrupted");
        _ = corrupt.split_off(4);

        let mut builder = ChecksummedBytesBuilder::new(vec![0u8; 14]);
        builder
            .append(ChecksummedBytes::new(Bytes::from_static(b"some bytes")))
            .unwrap();

        let actual = builder.append(corrupt);
        assert!(matches!(actual, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    fn builder_append_detects_corrupt_empty_piece() {
        // An empty piece is not copied, but must still be checked.
        let mut corrupt = ChecksummedBytes::new(Bytes::from_static(b"some bytes"));
        corrupt.range = 0..0;
        corrupt.buffer = Bytes::from_static(b"otherbytes");
        assert!(corrupt.is_empty());

        let mut builder = ChecksummedBytesBuilder::new(vec![0u8; 0]);
        let actual = builder.append(corrupt);
        assert!(matches!(actual, Err(IntegrityError::ChecksumMismatch(_, _))));
    }

    #[test]
    #[should_panic(expected = "would exceed the builder capacity")]
    fn builder_append_beyond_capacity_panics() {
        let mut builder = ChecksummedBytesBuilder::new(vec![0u8; 4]);
        let _ = builder.append(ChecksummedBytes::new(Bytes::from_static(b"some bytes")));
    }

    #[test]
    #[should_panic(expected = "must be filled to capacity")]
    fn builder_finish_underfilled_panics() {
        let mut builder = ChecksummedBytesBuilder::new(vec![0u8; 10]);
        builder
            .append(ChecksummedBytes::new(Bytes::from_static(b"some")))
            .unwrap();
        let _ = builder.finish();
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
