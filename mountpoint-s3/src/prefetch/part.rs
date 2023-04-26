use bytes::Bytes;
use mountpoint_s3_crt::checksums::crc::checksums_crc32c;
use thiserror::Error;
use tracing::trace;

use super::ChecksumCrc;

/// A self-identifying part of an S3 object. Users can only retrieve the bytes from this part if
/// they can prove they have the correct offset and key.
// TODO this is not very efficient right now -- it forces a lot of copying around of Strings. If
// that's a bottleneck, let's think about either carrying &str (hard to make lifetimes work?) or
// the etag or some kind of "cookie" (like the hash of the key).
#[derive(Debug)]
pub struct Part {
    key: String,
    offset: u64,
    bytes: Bytes,
    checksum: ChecksumCrc,
}

impl Part {
    pub fn new(key: &str, offset: u64, bytes: Bytes) -> Self {
        let checksum = checksums_crc32c(&bytes, None);
        Self {
            key: key.to_owned(),
            offset,
            bytes,
            checksum,
        }
    }

    pub fn checksum(&self) -> ChecksumCrc {
        self.checksum
    }

    pub fn bytes_ref(&self) -> &[u8] {
        self.bytes.as_ref()
    }

    pub fn into_bytes(self, key: &str, offset: u64) -> Result<Bytes, PartMismatchError> {
        self.check(key, offset).map(|_| self.bytes)
    }

    /// Split the part into two at the given index.
    ///
    /// Returns a newly allocated part containing the range [at, len). After the call, the original
    /// part will be left containing the elements [0, at).
    pub fn split_off(&mut self, at: usize) -> Result<Part, PartMismatchError> {
        trace!(size = self.bytes.len(), at, "split_off");
        let before_checksum = self.checksum;

        let new_bytes = self.bytes.split_off(at);
        // update self checksum
        self.checksum = checksums_crc32c(&self.bytes, None);

        let new_part = Self::new(&self.key, self.offset + at as u64, new_bytes);

        // validate the checksum after the split
        let after_checksum = checksums_crc32c(new_part.bytes.as_ref(), Some(self.checksum));
        if before_checksum != after_checksum {
            return Err(PartMismatchError::Checksum);
        }
        Ok(new_part)
    }

    pub(super) fn len(&self) -> usize {
        self.bytes.len()
    }

    pub(super) fn is_empty(&self) -> bool {
        self.bytes.is_empty()
    }

    fn check(&self, key: &str, offset: u64) -> Result<(), PartMismatchError> {
        if self.key != key {
            return Err(PartMismatchError::Key {
                actual: self.key.clone(),
                requested: key.to_owned(),
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
    #[error("wrong part key: actual={actual:?}, requested={requested:?}")]
    Key { actual: String, requested: String },

    #[error("wrong part offset: actual={actual}, requested={requested}")]
    Offset { actual: u64, requested: u64 },

    #[error("checksum mismatch at part split off")]
    Checksum,
}

#[cfg(test)]
mod tests {
    use bytes::Bytes;

    use super::*;

    #[test]
    fn split_off() {
        let key = "test_key";
        let offset = 0;
        let data = b"split_off_checksum_valid";
        let expected_checksum = checksums_crc32c(data, None);
        let mut part = Part::new(key, offset, Bytes::copy_from_slice(data));

        let part_checksum = part.checksum;
        assert_eq!(expected_checksum, part_checksum);

        let new_part = part.split_off(10).expect("should be able to split off the part");

        let expected_first_checksum = checksums_crc32c(b"split_off_", None);
        let expected_second_checksum = checksums_crc32c(b"checksum_valid", None);

        assert_eq!(expected_first_checksum, part.checksum);
        assert_eq!(expected_second_checksum, new_part.checksum);
    }

    #[test]
    fn split_off_checksum_mismatch() {
        let key = "test_key";
        let offset = 0;
        let data = b"split_off_checksum_mismatch";
        let expected_checksum = checksums_crc32c(data, None);
        let mut part = Part::new(key, offset, Bytes::copy_from_slice(data));

        let part_checksum = part.checksum;
        assert_eq!(expected_checksum, part_checksum);

        // mutate the bytes before split off
        part.bytes = Bytes::copy_from_slice(b"split_off-checksum_mismatch");

        let new_part = part.split_off(10);
        assert!(matches!(new_part, Err(PartMismatchError::Checksum)));
    }
}
