//! Serializers for types we don't own and don't already have a Serialize implementation.
//!
//! The way we get around this is by implementing a wrapping type
//! and using this in structures where we need to serialize/deserialize.

use std::ops::Deref;

use mountpoint_s3_crt::checksums::crc32c::Crc32c;
use serde::{Deserialize, Deserializer, Serialize};

/// Serializable wrapper for [Crc32c].
///
/// [Deref] is implemented to allow most access to the underlying type to be seamless,
/// and [From<Crc32c>] is implemented for easy wrapping using `.into()`.
///
/// [Crc32c] is owned by mountpoint-s3 (under the `mountpoint-s3-crt` crate).
/// An alternative to this wrapping type would be to
/// implement [Serialize]/[Deserialize] directly in that crate under a feature flag.
#[derive(Clone, Copy, Debug)]
pub struct SerializableCrc32c(Crc32c);

impl Deref for SerializableCrc32c {
    type Target = Crc32c;
    fn deref(&self) -> &Self::Target {
        &self.0
    }
}

impl From<Crc32c> for SerializableCrc32c {
    fn from(value: Crc32c) -> Self {
        SerializableCrc32c(value)
    }
}

impl From<SerializableCrc32c> for Crc32c {
    fn from(value: SerializableCrc32c) -> Self {
        value.0
    }
}

impl Serialize for SerializableCrc32c {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        serializer.serialize_u32(self.value())
    }
}

impl<'de> Deserialize<'de> for SerializableCrc32c {
    fn deserialize<D: Deserializer<'de>>(d: D) -> Result<Self, D::Error> {
        let checksum = u32::deserialize(d)?;
        let checksum = Crc32c::new(checksum);
        Ok(checksum.into())
    }
}
