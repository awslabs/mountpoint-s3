use thiserror::Error;

use crate::checksums::{ChecksummedBytes, IntegrityError};
use crate::object::ObjectId;

/// A self-identifying part of an S3 object. Users can only retrieve the bytes from this part if
/// they can prove they have the correct offset and object Id (key + etag).
#[derive(Debug, Clone)]
pub struct Part {
    id: ObjectId,
    offset: u64,
    checksummed_bytes: ChecksummedBytes,
}

impl Part {
    pub fn new(id: ObjectId, offset: u64, checksummed_bytes: ChecksummedBytes) -> Self {
        Self {
            id,
            offset,
            checksummed_bytes,
        }
    }

    pub fn extend(&mut self, other: &Part) -> Result<(), PartOperationError> {
        let expected_offset = self.offset + self.checksummed_bytes.len() as u64;
        other.check(&self.id, expected_offset)?;
        Ok(self.checksummed_bytes.extend(other.clone().checksummed_bytes)?)
    }

    pub fn into_bytes(self, id: &ObjectId, offset: u64) -> Result<ChecksummedBytes, PartOperationError> {
        self.check(id, offset).map(|_| self.checksummed_bytes)
    }

    /// Split the part into two at the given index.
    ///
    /// Returns a newly allocated part containing the range [at, len). After the call, the original
    /// part will be left containing the elements [0, at).
    pub fn split_off(&mut self, at: usize) -> Part {
        let new_bytes = self.checksummed_bytes.split_off(at);
        Part {
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

    fn check(&self, id: &ObjectId, offset: u64) -> Result<(), PartOperationError> {
        if self.id != *id {
            return Err(PartOperationError::IdMismatch {
                actual: self.id.clone(),
                requested: id.to_owned(),
            });
        }
        if self.offset != offset {
            return Err(PartOperationError::OffsetMismatch {
                actual: self.offset,
                requested: offset,
            });
        }
        Ok(())
    }
}

#[derive(Debug, Error)]
pub enum PartOperationError {
    #[error("part integrity check failed")]
    Integrity(#[from] IntegrityError),

    #[error("wrong part id: actual={actual:?}, requested={requested:?}")]
    IdMismatch { actual: ObjectId, requested: ObjectId },

    #[error("wrong part offset: actual={actual}, requested={requested}")]
    OffsetMismatch { actual: u64, requested: u64 },
}

#[cfg(test)]
mod tests {
    use mountpoint_s3_client::types::ETag;

    use crate::{checksums::ChecksummedBytes, object::ObjectId, prefetch::part::PartOperationError};

    use super::Part;

    #[test]
    fn test_append() {
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let first_offset = 0;
        let first_part_len = 1024;
        let body: Box<[u8]> = (0u8..=255)
            .cycle()
            .skip(first_offset as u8 as usize)
            .take(first_part_len)
            .collect();
        let checksummed_bytes = ChecksummedBytes::new(body.into());
        let mut first = Part::new(object_id.clone(), first_offset, checksummed_bytes);

        let second_part_len = 512;
        let second_offset = first_offset + first_part_len as u64;
        let body: Box<[u8]> = (0u8..=255)
            .cycle()
            .skip(second_offset as u8 as usize)
            .take(second_part_len)
            .collect();
        let checksummed_bytes = ChecksummedBytes::new(body.into());
        let second = Part::new(object_id.clone(), second_offset, checksummed_bytes);

        first.extend(&second).expect("should be able to extend");
        assert_eq!(first_part_len + second_part_len, first.len());
        first.check(&object_id, first_offset).expect("the part should be valid");
    }

    #[test]
    fn test_append_with_mismatch_object_id() {
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let first_offset = 0;
        let first_part_len = 1024;
        let body: Box<[u8]> = (0u8..=255)
            .cycle()
            .skip(first_offset as u8 as usize)
            .take(first_part_len)
            .collect();
        let checksummed_bytes = ChecksummedBytes::new(body.into());
        let mut first = Part::new(object_id.clone(), first_offset, checksummed_bytes);

        let second_object_id = ObjectId::new("other".to_owned(), ETag::for_tests());
        let second_part_len = 512;
        let second_offset = first_offset;
        let body: Box<[u8]> = (0u8..=255)
            .cycle()
            .skip(second_offset as u8 as usize)
            .take(second_part_len)
            .collect();
        let checksummed_bytes = ChecksummedBytes::new(body.into());
        let second = Part::new(second_object_id.clone(), second_offset, checksummed_bytes);

        let result = first.extend(&second);
        assert!(matches!(
            result,
            Err(PartOperationError::IdMismatch {
                actual: _,
                requested: _
            })
        ));
    }

    #[test]
    fn test_append_with_mismatch_offset() {
        let object_id = ObjectId::new("key".to_owned(), ETag::for_tests());
        let first_offset = 0;
        let first_part_len = 1024;
        let body: Box<[u8]> = (0u8..=255)
            .cycle()
            .skip(first_offset as u8 as usize)
            .take(first_part_len)
            .collect();
        let checksummed_bytes = ChecksummedBytes::new(body.into());
        let mut first = Part::new(object_id.clone(), first_offset, checksummed_bytes);

        let second_part_len = 512;
        let second_offset = first_offset;
        let body: Box<[u8]> = (0u8..=255)
            .cycle()
            .skip(second_offset as u8 as usize)
            .take(second_part_len)
            .collect();
        let checksummed_bytes = ChecksummedBytes::new(body.into());
        let second = Part::new(object_id.clone(), second_offset, checksummed_bytes);

        let result = first.extend(&second);
        assert!(matches!(
            result,
            Err(PartOperationError::OffsetMismatch {
                actual: _,
                requested: _
            })
        ));
    }
}
