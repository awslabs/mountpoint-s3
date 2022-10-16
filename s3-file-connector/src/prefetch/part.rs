use std::ffi::{OsStr, OsString};

use bytes::Bytes;
use thiserror::Error;

/// A self-identifying part of an S3 object. Users can only retrieve the bytes from this part if
/// they can prove they have the correct offset and key.
// TODO this is not very efficient right now -- it forces a lot of copying around of OsStrings. If
// that's a bottleneck, let's think about either carrying &OsStr (hard to make lifetimes work?) or
// the etag or some kind of "cookie" (like the hash of the key).
#[derive(Debug)]
pub struct Part {
    key: OsString,
    offset: u64,
    bytes: Bytes,
}

impl Part {
    pub fn new(key: OsString, offset: u64, bytes: Bytes) -> Self {
        Self { key, offset, bytes }
    }

    pub fn into_bytes(self, key: &OsStr, offset: u64) -> Result<Bytes, PartMismatchError> {
        self.check(key, offset).map(|_| self.bytes)
    }

    /// Split the part into two at the given index.
    ///
    /// Returns a newly allocated part containing the range [at, len). After the call, the original
    /// part will be left containing the elements [0, at).
    pub fn split_off(&mut self, at: usize) -> Part {
        let new_bytes = self.bytes.split_off(at);
        Part {
            key: self.key.clone(),
            offset: self.offset + at as u64,
            bytes: new_bytes,
        }
    }

    pub(super) fn len(&self) -> usize {
        self.bytes.len()
    }

    pub(super) fn is_empty(&self) -> bool {
        self.bytes.is_empty()
    }

    fn check(&self, key: &OsStr, offset: u64) -> Result<(), PartMismatchError> {
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
    Key { actual: OsString, requested: OsString },

    #[error("wrong part offset: actual={actual}, requested={requested}")]
    Offset { actual: u64, requested: u64 },
}
