use mountpoint_s3_crt::checksums::crc32;

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
        self.state = Crc32(crc32(buf, self.state.0));
    }

    /// Finalize the hash state and return the computed CRC32 checksum value.
    pub fn finalize(self) -> Crc32 {
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
