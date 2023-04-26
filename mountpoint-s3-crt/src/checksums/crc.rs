use mountpoint_s3_crt_sys::*;

/// Calculate CRC32 checksum of the data in the given buffer, append to the previous checksum if provided.
pub fn checksums_crc32(buf: &[u8], previous_checksum: Option<u32>) -> u32 {
    // SAFETY: we pass a valid buffer to the CRT, and trust
    // the CRT function to only read from the buffer's boundary.
    unsafe { aws_checksums_crc32(buf.as_ptr(), buf.len() as i32, previous_checksum.unwrap_or(0)) }
}

/// Calculate CRC32C checksum of the data in the given buffer, append to the previous checksum if provided.
pub fn checksums_crc32c(buf: &[u8], previous_checksum: Option<u32>) -> u32 {
    // SAFETY: we pass a valid buffer to the CRT, and trust
    // the CRT function to only read from the buffer's boundary.
    unsafe { aws_checksums_crc32c(buf.as_ptr(), buf.len() as i32, previous_checksum.unwrap_or(0)) }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn crc32_works() {
        let buf: &[u8] = b"123456789";
        let crc = checksums_crc32(buf, None);
        assert_eq!(crc, 0xcbf43926);
    }

    #[test]
    fn crc32c_works() {
        let buf: &[u8] = b"123456789";
        let crc = checksums_crc32c(buf, None);
        assert_eq!(crc, 0xe3069283);
    }
}
