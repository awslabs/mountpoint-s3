use mountpoint_s3_crt::checksums::crc32c::Crc32c;

/// Calculates the combined checksum for `AB` where `prefix_crc` is the checksum for `A`,
/// `suffix_crc` is the checksum for `B`, and `suffix_len` is the length of `B`.
pub fn combine_checksums(prefix_crc: Crc32c, suffix_crc: Crc32c, suffix_len: usize) -> Crc32c {
    let combined = ::crc32c::crc32c_combine(prefix_crc.value(), suffix_crc.value(), suffix_len);
    Crc32c::new(combined)
}

#[cfg(test)]
mod tests {
    use mountpoint_s3_crt::checksums::crc32c;

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
}
