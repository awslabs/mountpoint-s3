use mountpoint_s3_crt_sys::aws_checksums_crc32c;

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
        self.state = Hasher::crc32c(buf, self.state);
    }

    /// Finalize the hash state and return the computed CRC32C checksum value.
    pub fn finalize(self) -> Crc32c {
        self.state
    }

    /// Compute CRC32C checksum of the data in the given bytes slice, append to the previous checksum.
    ///
    /// The underlying CRT funtion requires the buffer's length to be type `i32`, so this function cannot take
    /// any buffer that is bigger than `i32::MAX` as an input.
    fn crc32c(buf: &[u8], previous_checksum: Crc32c) -> Crc32c {
        assert!(buf.len() <= i32::MAX as usize);

        // SAFETY: we pass a valid buffer to the CRT, and trust
        // the CRT function to only read from the buffer's boundary.
        let checksum = unsafe { aws_checksums_crc32c(buf.as_ptr(), buf.len() as i32, previous_checksum.0) };
        Crc32c(checksum)
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
    use crate::checksums::crc32c::{self, Crc32c};

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
}
