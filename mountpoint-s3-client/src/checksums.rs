//! Provides base64 encoding/decoding for CRC32C checksums.
use mountpoint_s3_crt::checksums::crc32c::Crc32c;

use base64ct::Base64;
use base64ct::Encoding;
use thiserror::Error;

/// The base64 encoding for this CRC32C checksum value.
pub fn crc32c_to_base64(checksum: &Crc32c) -> String {
    Base64::encode_string(&checksum.value().to_be_bytes())
}

/// Create a CRC32C checksum from a base64 encoding.
pub fn crc32c_from_base64(base64_str: &str) -> Result<Crc32c, ParseError> {
    let mut dec_buf = [0u8; std::mem::size_of::<u32>()];
    let _ = Base64::decode(base64_str, &mut dec_buf)?;
    Ok(Crc32c::new(u32::from_be_bytes(dec_buf)))
}

/// Error parsing CRC32C checksums.
#[derive(Error, Debug)]
pub enum ParseError {
    /// Error parsing base64 encoding.
    #[error("Failed to parse base64 encoding")]
    Base64ParseError(#[from] base64ct::Error),
}

#[cfg(test)]
mod tests {
    use super::*;
    use test_case::test_case;

    #[test]
    fn test_crc32c_to_base64() {
        let crc = Crc32c::new(1234);
        let base64 = crc32c_to_base64(&crc);
        assert_eq!(&base64, "AAAE0g==");
    }

    #[test]
    fn test_crc32c_from_base64() {
        let base64 = "AAAE0g==";
        let crc = crc32c_from_base64(base64).expect("parsing should succeeed");
        assert_eq!(crc.value(), 1234);
    }

    #[test_case("AAA")]
    #[test_case("AAAE0g")]
    #[test_case("AAAE0gAA==")]
    fn test_crc32c_from_base64_error(invalid_base64: &str) {
        let err = crc32c_from_base64(invalid_base64).expect_err("parsing should fail");
        assert!(matches!(err, ParseError::Base64ParseError(_)));
    }
}
