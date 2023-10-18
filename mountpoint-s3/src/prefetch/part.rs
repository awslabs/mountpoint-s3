use thiserror::Error;

use super::checksummed_bytes::ChecksummedBytes;

/// A self-identifying part of an S3 object. Users can only retrieve the bytes from this part if
/// they can prove they have the correct offset and key.
// TODO this is not very efficient right now -- it forces a lot of copying around of Strings. If
// that's a bottleneck, let's think about either carrying &str (hard to make lifetimes work?) or
// the etag or some kind of "cookie" (like the hash of the key).
#[derive(Debug, Clone)]
pub struct Part {
    key: String,
    offset: u64,
    checksummed_bytes: ChecksummedBytes,
}

impl Part {
    pub fn new(key: &str, offset: u64, checksummed_bytes: ChecksummedBytes) -> Self {
        Self {
            key: key.to_owned(),
            offset,
            checksummed_bytes,
        }
    }

    pub fn into_bytes(self, key: &str, offset: u64) -> Result<ChecksummedBytes, PartMismatchError> {
        self.check(key, offset).map(|_| self.checksummed_bytes)
    }

    /// Split the part into two at the given index.
    ///
    /// Returns a newly allocated part containing the range [at, len). After the call, the original
    /// part will be left containing the elements [0, at).
    pub fn split_off(&mut self, at: usize) -> Part {
        let new_bytes = self.checksummed_bytes.split_off(at);
        Part {
            key: self.key.clone(),
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
}
