use mountpoint_s3_client::types::ETag;
use thiserror::Error;

use crate::{checksums::ChecksummedBytes, sync::Arc};

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
