use mountpoint_s3_crt::checksums::crc32c::{self, Crc32c};

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
        Crc32c::new(::crc32c::crc32c_combine(
            prefix_checksum.value(),
            self.checksum.value(),
            self.slice.len(),
        ))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_combine() {
        const FULL_DATA: &[u8] = b"foobar";
        let prefix_checksum = crc32c::checksum(&FULL_DATA[..3]);
        let data = &FULL_DATA[3..];
        let slice = ChecksummedSlice::new(data);
        let combined_checksum = slice.combined_with_prefix(&prefix_checksum);
        let full_checksum = crc32c::checksum(FULL_DATA);
        assert_eq!(full_checksum, combined_checksum);
    }
}
