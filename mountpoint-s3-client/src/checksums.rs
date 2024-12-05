//! Provides base64 encoding/decoding for various checksums.
pub use mountpoint_s3_crt::checksums::crc32::{self, Crc32};
pub use mountpoint_s3_crt::checksums::crc32c::{self, Crc32c};
pub use mountpoint_s3_crt::checksums::crc64nvme::{self, Crc64nvme};
pub use mountpoint_s3_crt::checksums::sha1::{self, Sha1};
pub use mountpoint_s3_crt::checksums::sha256::{self, Sha256};

use base64ct::Base64;
use base64ct::Encoding;
use thiserror::Error;

/// The base64 encoding for this CRC64-NVME checksum value.
pub fn crc64nvme_to_base64(checksum: &Crc64nvme) -> String {
    Base64::encode_string(&checksum.value().to_be_bytes())
}

/// Create a CRC64-NVME checksum from a base64 encoding.
pub fn crc64nvme_from_base64(base64_str: &str) -> Result<Crc64nvme, ParseError> {
    let mut dec_buf = [0u8; std::mem::size_of::<u64>()];
    let _ = Base64::decode(base64_str, &mut dec_buf)?;
    Ok(Crc64nvme::new(u64::from_be_bytes(dec_buf)))
}

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

/// The base64 encoding for this CRC32 checksum value.
pub fn crc32_to_base64(checksum: &Crc32) -> String {
    Base64::encode_string(&checksum.value().to_be_bytes())
}

/// Create a CRC32 checksum from a base64 encoding.
pub fn crc32_from_base64(base64_str: &str) -> Result<Crc32, ParseError> {
    let mut dec_buf = [0u8; std::mem::size_of::<u32>()];
    let _ = Base64::decode(base64_str, &mut dec_buf)?;
    Ok(Crc32::new(u32::from_be_bytes(dec_buf)))
}

/// The base64 encoding for this SHA1 checksum value.
pub fn sha1_to_base64(checksum: &Sha1) -> String {
    Base64::encode_string(checksum.value())
}

/// The base64 encoding for this SHA256 checksum value.
pub fn sha256_to_base64(checksum: &Sha256) -> String {
    Base64::encode_string(checksum.value())
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
    fn test_crc64nvme_to_base64() {
        let crc = Crc64nvme::new(0xAE8B14860A799888);
        let base64 = crc64nvme_to_base64(&crc);
        assert_eq!(&base64, "rosUhgp5mIg=");
    }

    #[test]
    fn test_crc64nvme_from_base64() {
        let base64 = "rosUhgp5mIg=";
        let crc = crc64nvme_from_base64(base64).expect("parsing should succeeed");
        assert_eq!(crc.value(), 0xAE8B14860A799888);
    }

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

    #[test]
    fn test_crc32_to_base64() {
        let crc = Crc32::new(1234);
        let base64 = crc32_to_base64(&crc);
        assert_eq!(&base64, "AAAE0g==");
    }

    #[test]
    fn test_crc32_from_base64() {
        let base64 = "AAAE0g==";
        let crc = crc32_from_base64(base64).expect("parsing should succeeed");
        assert_eq!(crc.value(), 1234);
    }

    #[test_case("AAA")]
    #[test_case("AAAE0g")]
    #[test_case("AAAE0gAA==")]
    fn test_crc32_from_base64_error(invalid_base64: &str) {
        let err = crc32_from_base64(invalid_base64).expect_err("parsing should fail");
        assert!(matches!(err, ParseError::Base64ParseError(_)));
    }

    #[test]
    fn test_sha1_to_base64() {
        let sha1 = Sha1::new([
            247, 195, 188, 29, 128, 142, 4, 115, 42, 223, 103, 153, 101, 204, 195, 76, 167, 174, 52, 65,
        ]);
        let base64 = sha1_to_base64(&sha1);
        assert_eq!(&base64, "98O8HYCOBHMq32eZZczDTKeuNEE=");
    }

    #[test]
    fn test_sha256_to_base64() {
        let sha256 = Sha256::new([
            21, 226, 176, 211, 195, 56, 145, 235, 176, 241, 239, 96, 158, 196, 25, 66, 12, 32, 227, 32, 206, 148, 198,
            95, 188, 140, 51, 18, 68, 142, 178, 37,
        ]);
        let base64 = sha256_to_base64(&sha256);
        assert_eq!(&base64, "FeKw08M4keuw8e9gnsQZQgwg4yDOlMZfvIwzEkSOsiU=");
    }
}
