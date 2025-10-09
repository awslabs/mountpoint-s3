use std::str::FromStr;
use std::string::ParseError;

/// An ETag (entity tag) is a unique identifier for a HTTP object.
///
/// New ETags can be created with the [`FromStr`] implementation.
#[derive(Debug, Clone, Hash, PartialEq, Eq)]
pub struct ETag(String);

impl ETag {
    /// Get the ETag as a string
    pub fn as_str(&self) -> &str {
        &self.0
    }

    /// Unpack the [String] contained by the [ETag] wrapper
    pub fn into_inner(self) -> String {
        self.0
    }

    /// Creating default etag for tests
    #[doc(hidden)]
    pub fn for_tests() -> Self {
        Self("test_etag".to_string())
    }

    /// Creating unique etag from bytes
    #[doc(hidden)]
    #[cfg(feature = "mock")]
    pub fn from_object_bytes(data: &[u8]) -> Self {
        use md5::Digest as _;

        let mut hasher = md5::Md5::new();
        hasher.update(data);

        let hash = hasher.finalize();
        let result = format!("{hash:x}");
        Self(result)
    }
}

impl FromStr for ETag {
    type Err = ParseError;
    fn from_str(value: &str) -> Result<Self, Self::Err> {
        let etag = value.to_string();
        Ok(ETag(etag))
    }
}

impl<S: AsRef<str>> From<S> for ETag {
    fn from(value: S) -> Self {
        Self(value.as_ref().to_string())
    }
}
