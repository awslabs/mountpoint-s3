use mountpoint_s3_crt_sys::aws_checksums_crc64nvme;

/// CRC64-NVME (aka. CRC64-Rocksoft) checksum
#[derive(Debug, Clone, PartialEq, Eq, Copy)]
pub struct Crc64nvme(u64);

impl Crc64nvme {
    /// Create a new CRC64-NVME checksum with the given value.
    pub fn new(value: u64) -> Self {
        Self(value)
    }

    /// The CRC64-NVME checksum value.
    pub fn value(&self) -> u64 {
        self.0
    }
}

/// Computes the CRC64-NVME checksum of a byte slice.
///
/// Use [Crc64nvmeHasher] for more advanced use-cases.
pub fn checksum(buf: &[u8]) -> Crc64nvme {
    let mut hasher = Crc64nvmeHasher::new();
    hasher.update(buf);
    hasher.finalize()
}

/// CRC64-NVME Hasher
#[derive(Debug, Clone)]
pub struct Crc64nvmeHasher {
    state: Crc64nvme,
}

impl Crc64nvmeHasher {
    /// Create a new CRC64-NVME Hasher.
    pub fn new() -> Self {
        Self { state: Crc64nvme(0) }
    }

    /// Update the hash state with the given bytes slice.
    pub fn update(&mut self, buf: &[u8]) {
        self.state = Crc64nvme(Self::crc64(buf, self.state.0));
    }

    /// Finalize the hash state and return the computed CRC64-NVME checksum value.
    pub fn finalize(self) -> Crc64nvme {
        self.state
    }

    /// Compute CRC64-NVME checksum of the data in the given bytes slice, append to the previous checksum.
    ///
    /// The underlying CRT function requires the buffer's length to be type [::libc::c_int], so this function cannot take
    /// any buffer that is bigger than [::libc::c_int::MAX] as an input.
    fn crc64(buf: &[u8], previous_checksum: u64) -> u64 {
        assert!(
            buf.len() <= ::libc::c_int::MAX as usize,
            "buffer length cannot exceed {}",
            ::libc::c_int::MAX,
        );

        // SAFETY: we pass a valid buffer to the CRT, and trust
        // the CRT function to only read from the buffer's boundary.
        unsafe { aws_checksums_crc64nvme(buf.as_ptr(), buf.len() as ::libc::c_int, previous_checksum) }
    }
}

impl Default for Crc64nvmeHasher {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use crate::checksums::crc64nvme::{self, Crc64nvme};

    #[test]
    fn crc64nvme_simple() {
        let buf: &[u8] = b"123456789";
        let crc = crc64nvme::checksum(buf);
        assert_eq!(crc, Crc64nvme(0xAE8B14860A799888));
    }

    #[test]
    fn crc64nvme_append() {
        let mut hasher = crc64nvme::Crc64nvmeHasher::new();
        hasher.update(b"1234");
        hasher.update(b"56789");
        let crc = hasher.finalize();
        assert_eq!(crc, Crc64nvme(0xAE8B14860A799888));
    }
}
