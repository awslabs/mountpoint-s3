use mountpoint_s3_crt_sys::aws_checksums_crc32;

/// CRC32 checksum
#[derive(Debug, Clone, PartialEq, Eq, Copy)]
pub struct Crc32(u32);

impl Crc32 {
    /// Create a new CRC32 checksum with the given value.
    pub fn new(value: u32) -> Crc32 {
        Crc32(value)
    }

    /// The CRC32 checksum value.
    pub fn value(&self) -> u32 {
        self.0
    }
}

/// Computes the CRC32 checksum of a byte slice.
///
/// Use [`Hasher`] for more advanced use-cases.
pub fn checksum(buf: &[u8]) -> Crc32 {
    let mut hasher = Hasher::new();
    hasher.update(buf);
    hasher.finalize()
}

/// CRC32 Hasher
#[derive(Debug, Clone)]
pub struct Hasher {
    state: Crc32,
}

impl Hasher {
    /// Create a new CRC32 [`Hasher`].
    pub fn new() -> Self {
        Self { state: Crc32(0) }
    }

    /// Update the hash state with the given bytes slice.
    pub fn update(&mut self, buf: &[u8]) {
        self.state = Crc32(Self::crc32(buf, self.state.0));
    }

    /// Finalize the hash state and return the computed CRC32 checksum value.
    pub fn finalize(self) -> Crc32 {
        self.state
    }

    /// Compute CRC32 checksum of the data in the given bytes slice, append to the previous checksum.
    ///
    /// The underlying CRT function requires the buffer's length to be type [::libc::c_int], so this function cannot take
    /// any buffer that is bigger than [::libc::c_int::MAX] as an input.
    fn crc32(buf: &[u8], previous_checksum: u32) -> u32 {
        assert!(
            buf.len() <= ::libc::c_int::MAX as usize,
            "buffer length cannot exceed {}",
            ::libc::c_int::MAX,
        );

        // SAFETY: we pass a valid buffer to the CRT, and trust
        // the CRT function to only read from the buffer's boundary.
        unsafe { aws_checksums_crc32(buf.as_ptr(), buf.len() as ::libc::c_int, previous_checksum) }
    }
}

impl Default for Hasher {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use crate::checksums::crc32::{self, Crc32};

    #[test]
    fn crc32_simple() {
        let buf: &[u8] = b"123456789";
        let crc = crc32::checksum(buf);
        assert_eq!(crc, Crc32(0xcbf43926));
    }

    #[test]
    fn crc32_append() {
        let mut hasher = crc32::Hasher::new();
        hasher.update(b"1234");
        hasher.update(b"56789");
        let crc = hasher.finalize();
        assert_eq!(crc, Crc32(0xcbf43926));
    }
}
