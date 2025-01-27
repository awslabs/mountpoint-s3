use mountpoint_s3_client::checksums::{crc32, crc32c, crc64nvme, sha1, sha256};
use mountpoint_s3_client::types::{ChecksumAlgorithm, UploadChecksum};
use mountpoint_s3_crt::common::allocator::Allocator;
use thiserror::Error;

#[derive(Debug, Default)]
pub enum ChecksumHasher {
    #[default]
    None,
    Crc64nvme(crc64nvme::Crc64nvmeHasher),
    Crc32(crc32::Hasher),
    Crc32c(crc32c::Hasher),
    Sha1(sha1::Sha1Hasher),
    Sha256(sha256::Sha256Hasher),
}

impl ChecksumHasher {
    pub fn new(checksum_algorithm: &Option<ChecksumAlgorithm>) -> Result<Self, ChecksumHasherError> {
        match checksum_algorithm {
            Some(ChecksumAlgorithm::Crc64nvme) => Ok(Self::Crc64nvme(crc64nvme::Crc64nvmeHasher::new())),
            Some(ChecksumAlgorithm::Crc32) => Ok(Self::Crc32(crc32::Hasher::new())),
            Some(ChecksumAlgorithm::Crc32c) => Ok(Self::Crc32c(crc32c::Hasher::new())),
            Some(ChecksumAlgorithm::Sha1) => Ok(Self::Sha1(sha1::Sha1Hasher::new(&Allocator::default())?)),
            Some(ChecksumAlgorithm::Sha256) => Ok(Self::Sha256(sha256::Sha256Hasher::new(&Allocator::default())?)),
            Some(other) => Err(ChecksumHasherError::UnsupportedChecksumAlgorithm(other.clone())),
            None => Ok(Self::None),
        }
    }

    pub fn update(&mut self, data: &[u8]) -> Result<(), ChecksumHasherError> {
        match self {
            ChecksumHasher::None => {}
            ChecksumHasher::Crc64nvme(hasher) => hasher.update(data),
            ChecksumHasher::Crc32(hasher) => hasher.update(data),
            ChecksumHasher::Crc32c(hasher) => hasher.update(data),
            ChecksumHasher::Sha1(hasher) => hasher.update(data)?,
            ChecksumHasher::Sha256(hasher) => hasher.update(data)?,
        };
        Ok(())
    }

    pub fn finalize(self) -> Result<Option<UploadChecksum>, ChecksumHasherError> {
        match self {
            ChecksumHasher::None => Ok(None),
            ChecksumHasher::Crc64nvme(hasher) => Ok(Some(UploadChecksum::Crc64nvme(hasher.finalize()))),
            ChecksumHasher::Crc32(hasher) => Ok(Some(UploadChecksum::Crc32(hasher.finalize()))),
            ChecksumHasher::Crc32c(hasher) => Ok(Some(UploadChecksum::Crc32c(hasher.finalize()))),
            ChecksumHasher::Sha1(hasher) => Ok(Some(UploadChecksum::Sha1(hasher.finalize(&Allocator::default())?))),
            ChecksumHasher::Sha256(hasher) => Ok(Some(UploadChecksum::Sha256(hasher.finalize(&Allocator::default())?))),
        }
    }
}

#[derive(Debug, Error)]
pub enum ChecksumHasherError {
    #[error("Checksum algorithm not supported: {0}")]
    UnsupportedChecksumAlgorithm(ChecksumAlgorithm),

    #[error("Unknown CRT error")]
    CrtError(#[from] mountpoint_s3_crt::common::error::Error),
}
