use mountpoint_s3_client::checksums::crc32c::{self, Crc32c};

/// A [ChecksummedSlice] is a slice that carries its [Crc32c] checksum.
#[derive(Debug, Clone, Copy)]
pub struct ChecksummedSlice<'a> {
    slice: &'a [u8],
    checksum: Crc32c,
}

impl<'a> ChecksummedSlice<'a> {
    /// Create a [ChecksummedSlice] from a slice.
    pub fn new(slice: &'a [u8]) -> Self {
        let checksum = crc32c::checksum(slice);
        Self { slice, checksum }
    }

    /// The slice in this [ChecksummedSlice].
    pub fn slice(&self) -> &[u8] {
        self.slice
    }

    /// Returns the number of elements in the slice.
    pub fn len(&self) -> usize {
        self.slice.len()
    }

    /// Returns `true` if the slice has a length of 0.
    pub fn is_empty(&self) -> bool {
        self.slice.is_empty()
    }

    /// Calculates the combined checksum for `AB` where `A` has checksum
    /// `prefix_checksum` and `B` is this slice.
    pub fn combined_with_prefix(&self, prefix_checksum: &Crc32c) -> Crc32c {
        combine_checksums(*prefix_checksum, self.checksum, self.slice.len())
    }
}

/// Calculates the combined checksum for `AB` where `prefix_crc` is the checksum for `A`,
/// `suffix_crc` is the checksum for `B`, and `suffic_len` is the length of `B`.
pub fn combine_checksums(prefix_crc: Crc32c, suffix_crc: Crc32c, suffix_len: usize) -> Crc32c {
    let combined = ::crc32c::crc32c_combine(prefix_crc.value(), suffix_crc.value(), suffix_len);
    Crc32c::new(combined)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_combine_checksums() {
        let buf: &[u8] = b"123456789";
        let (buf1, buf2) = buf.split_at(4);
        let crc = crc32c::checksum(buf);
        let crc1 = crc32c::checksum(buf1);
        let crc2 = crc32c::checksum(buf2);
        let combined = combine_checksums(crc1, crc2, buf2.len());
        assert_eq!(combined, crc);
    }

    #[test]
    fn test_combined_with_prefix() {
        const FULL_DATA: &[u8] = b"foobar";
        let prefix_checksum = crc32c::checksum(&FULL_DATA[..3]);
        let data = &FULL_DATA[3..];
        let slice = ChecksummedSlice::new(data);
        let combined_checksum = slice.combined_with_prefix(&prefix_checksum);
        let full_checksum = crc32c::checksum(FULL_DATA);
        assert_eq!(full_checksum, combined_checksum);
    }
}
