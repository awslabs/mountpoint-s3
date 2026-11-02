use mountpoint_s3_crt_sys::{aws_checksums_crc32c, aws_checksums_crc32c_combine};

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

/// Combines two CRC32C checksums computed over consecutive data blocks
/// (CRC of `A`, then CRC of `B`) into the CRC32C of `A || B`.
/// `suffix_len` is the byte length of `B`.
pub fn combine(prefix: Crc32c, suffix: Crc32c, suffix_len: usize) -> Crc32c {
    // SAFETY: aws_checksums_crc32c_combine is a pure arithmetic function with no pointer args.
    let combined = unsafe { aws_checksums_crc32c_combine(prefix.0, suffix.0, suffix_len as u64) };
    Crc32c(combined)
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
        self.state = Crc32c(Self::crc32c(buf, self.state.0));
    }

    /// Finalize the hash state and return the computed CRC32C checksum value.
    pub fn finalize(self) -> Crc32c {
        self.state
    }

    /// Compute CRC32C checksum of the data in the given bytes slice, append to the previous checksum.
    ///
    /// The underlying CRT function requires the buffer's length to be type [::libc::c_int], so this function cannot take
    /// any buffer that is bigger than [::libc::c_int::MAX] as an input.
    fn crc32c(buf: &[u8], previous_checksum: u32) -> u32 {
        assert!(
            buf.len() <= ::libc::c_int::MAX as usize,
            "buffer length cannot exceed {}",
            ::libc::c_int::MAX,
        );

        // SAFETY: we pass a valid buffer to the CRT, and trust
        // the CRT function to only read from the buffer's boundary.
        unsafe { aws_checksums_crc32c(buf.as_ptr(), buf.len() as ::libc::c_int, previous_checksum) }
    }
}

impl Default for Hasher {
    fn default() -> Self {
        Self::new()
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

    #[test]
    fn crc32c_combine_matches_concatenation() {
        let a: &[u8] = b"1234";
        let b: &[u8] = b"56789";
        let combined = crc32c::combine(crc32c::checksum(a), crc32c::checksum(b), b.len());
        assert_eq!(combined, Crc32c(0xe3069283));
    }

    /// Combining must also match for a large suffix.
    #[test]
    fn crc32c_combine_matches_concatenation_with_large_suffix() {
        let data: Vec<u8> = (0..1 << 20).map(|i| i as u8).collect();
        let (a, b) = data.split_at(data.len() / 3);
        let combined = crc32c::combine(crc32c::checksum(a), crc32c::checksum(b), b.len());
        assert_eq!(combined, crc32c::checksum(&data));
    }

    /// Combining with an empty block on either side must be the identity.
    #[test]
    fn crc32c_combine_with_empty_block_is_identity() {
        let data: &[u8] = b"123456789";
        let data_crc = crc32c::checksum(data);
        let empty_crc = crc32c::checksum(b"");
        assert_eq!(crc32c::combine(empty_crc, data_crc, data.len()), data_crc);
        assert_eq!(crc32c::combine(data_crc, empty_crc, 0), data_crc);
        assert_eq!(crc32c::combine(empty_crc, empty_crc, 0), empty_crc);
    }
}
