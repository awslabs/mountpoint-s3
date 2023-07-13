use base64ct::Base64;
use base64ct::Encoding;
use mountpoint_s3_crt::checksums::crc32c;
use thiserror::Error;

/// CRC32C checksum
#[derive(Debug, Clone, PartialEq, Eq, Copy)]
pub struct Crc32c(u32);

impl Crc32c {
    /// Create a new CRC32C checksum with the given value.
    pub fn new(value: u32) -> Crc32c {
        Crc32c(value)
    }

    /// The CRC32C checksum value.
    pub fn value(&self) -> u32 {
        self.0
    }

    /// The base64 encoding for this CRC32C checksum value.
    pub fn to_base64(&self) -> String {
        Base64::encode_string(&self.value().to_be_bytes())
    }

    /// Create a CRC32C checksum from a base64 encoding.
    pub fn from_base64(base64_str: &str) -> Result<Self, ParseError> {
        let mut dec_buf = [0u8; std::mem::size_of::<u32>()];
        let _ = Base64::decode(base64_str, &mut dec_buf)?;
        Ok(Self(u32::from_be_bytes(dec_buf)))
    }
}

/// Error parsing CRC32C checksums.
#[derive(Error, Debug)]
pub enum ParseError {
    /// Error parsing base64 encoding.
    #[error("Failed to parse base64 encoding")]
    Base64ParseError(#[from] base64ct::Error),
}

/// Computes the CRC32C checksum of a byte slice.
///
/// Use [`Hasher`] for more advanced use-cases.
pub fn checksum(buf: &[u8]) -> Crc32c {
    let mut hasher = Hasher::new();
    hasher.update(buf);
    hasher.finalize()
}

/// CRC32C Hasher
#[derive(Debug, Clone)]
pub struct Hasher {
    state: Crc32c,
}

impl Hasher {
    /// Create a new CRC32C [`Hasher`].
    pub fn new() -> Self {
        Self { state: Crc32c(0) }
    }

    /// Update the hash state with the given bytes slice.
    pub fn update(&mut self, buf: &[u8]) {
        self.state = Crc32c(crc32c(buf, self.state.0));
    }

    /// Finalize the hash state and return the computed CRC32C checksum value.
    pub fn finalize(self) -> Crc32c {
        self.state
    }
}

impl Default for Hasher {
    fn default() -> Self {
        Self::new()
    }
}

impl std::hash::Hasher for Hasher {
    fn finish(&self) -> u64 {
        self.clone().finalize().0.into()
    }

    fn write(&mut self, bytes: &[u8]) {
        self.update(bytes);
    }
}

#[cfg(test)]
mod tests {
    use crate::checksums::crc32c::{self, Crc32c, ParseError};
    use test_case::test_case;

    #[test]
    fn crc32c_simple() {
        let buf: &[u8] = b"123456789";
        let crc = crc32c::checksum(buf);
        assert_eq!(crc, Crc32c(0xe3069283));
    }

    #[test]
    fn crc32c_append() {
        let mut hasher = crc32c::Hasher::new();
        hasher.update(b"1234");
        hasher.update(b"56789");
        let crc = hasher.finalize();
        assert_eq!(crc, Crc32c(0xe3069283));
    }

    #[test]
    fn crc32c_to_base64() {
        let crc = Crc32c(1234);
        let base64 = crc.to_base64();
        assert_eq!(&base64, "AAAE0g==");
    }

    #[test]
    fn crc32c_from_base64() {
        let base64 = "AAAE0g==";
        let crc = Crc32c::from_base64(base64).expect("parsing should succeeed");
        assert_eq!(crc.value(), 1234);
    }

    #[test_case("AAA")]
    #[test_case("AAAE0g")]
    #[test_case("AAAE0gAA==")]
    fn crc32c_from_base64_error(invalid_base64: &str) {
        let err = Crc32c::from_base64(invalid_base64).expect_err("parsing should fail");
        assert!(matches!(err, ParseError::Base64ParseError(_)));
    }
}
