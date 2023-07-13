//! Implementation of CRT checksums.
use mountpoint_s3_crt_sys::aws_checksums_crc32;
use mountpoint_s3_crt_sys::aws_checksums_crc32c;

/// Compute CRC32 checksum of the data in the given bytes slice, append to the previous checksum.
///
/// The underlying CRT funtion requires the buffer's length to be type `i32`, so this function cannot take
/// any buffer that is bigger than `i32::MAX` as an input.
pub fn crc32(buf: &[u8], previous_checksum: u32) -> u32 {
    assert!(buf.len() <= i32::MAX as usize);

    // SAFETY: we pass a valid buffer to the CRT, and trust
    // the CRT function to only read from the buffer's boundary.
    unsafe { aws_checksums_crc32(buf.as_ptr(), buf.len() as i32, previous_checksum) }
}

/// Compute CRC32C checksum of the data in the given bytes slice, append to the previous checksum.
///
/// The underlying CRT funtion requires the buffer's length to be type `i32`, so this function cannot take
/// any buffer that is bigger than `i32::MAX` as an input.
pub fn crc32c(buf: &[u8], previous_checksum: u32) -> u32 {
    assert!(buf.len() <= i32::MAX as usize);

    // SAFETY: we pass a valid buffer to the CRT, and trust
    // the CRT function to only read from the buffer's boundary.
    unsafe { aws_checksums_crc32c(buf.as_ptr(), buf.len() as i32, previous_checksum) }
}
