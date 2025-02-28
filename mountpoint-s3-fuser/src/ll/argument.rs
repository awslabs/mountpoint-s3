//! Argument decomposition for FUSE operation requests.
//!
//! Helper to decompose a slice of binary data (incoming FUSE request) into multiple data
//! structures (request arguments).

use std::ffi::OsStr;
use std::os::unix::ffi::OsStrExt;
use zerocopy::{FromBytes, Immutable, KnownLayout};

/// An iterator that can be used to fetch typed arguments from a byte slice.
pub struct ArgumentIterator<'a> {
    data: &'a [u8],
}

impl<'a> ArgumentIterator<'a> {
    /// Create a new argument iterator for the given byte slice.
    pub fn new(data: &'a [u8]) -> ArgumentIterator<'a> {
        ArgumentIterator { data }
    }

    /// Returns the size of the remaining data.
    pub fn len(&self) -> usize {
        self.data.len()
    }

    /// Fetch a slice of all remaining bytes.
    pub fn fetch_all(&mut self) -> &'a [u8] {
        let bytes = self.data;
        self.data = &[];
        bytes
    }

    /// Fetch a typed argument. Returns `None` if there's not enough data left.
    pub fn fetch<T: FromBytes + KnownLayout + Immutable>(&mut self) -> Option<&'a T> {
        match zerocopy::Ref::<_, T>::from_prefix(self.data) {
            Err(_err) => {
                // TODO: do something with _err
                if self.data.as_ptr() as usize % core::mem::align_of::<T>() != 0 {
                    // Panic on alignment errors as this is under the control
                    // of the programmer, we can still return None for size
                    // failures as this may be caused by insufficient external
                    // data.
                    panic!("Data unaligned");
                } else {
                    None
                }
            }
            Ok((x, rest)) => {
                self.data = rest;
                Some(zerocopy::Ref::<&[u8], T>::into_ref(x))
            }
        }
    }

    /// Fetch a slice of typed of arguments. Returns `None` if there's not enough data left.
    #[cfg(feature = "abi-7-16")]
    pub fn fetch_slice<T: FromBytes + Immutable>(&mut self, count: usize) -> Option<&'a [T]> {
        match zerocopy::Ref::<_, [T]>::from_prefix_with_elems(self.data, count) {
            Err(_err) => {
                // TODO: do something with _err
                if self.data.as_ptr() as usize % core::mem::align_of::<T>() != 0 {
                    // Panic on alignment errors as this is under the control
                    // of the programmer, we can still return None for size
                    // failures as this may be caused by insufficient external
                    // data.
                    panic!("Data unaligned");
                } else {
                    None
                }
            }
            Ok((x, rest)) => {
                self.data = rest;
                Some(zerocopy::Ref::<&[u8], [T]>::into_ref(x))
            }
        }
    }

    /// Fetch a (zero-terminated) string (can be non-utf8). Returns `None` if there's not enough
    /// data left or no zero-termination could be found.
    pub fn fetch_str(&mut self) -> Option<&'a OsStr> {
        let len = memchr::memchr(0, self.data)?;
        let (out, rest) = self.data.split_at(len);
        self.data = &rest[1..];
        Some(OsStr::from_bytes(out))
    }
}

#[cfg(test)]
pub mod tests {
    use std::ops::Deref;

    use super::super::test::AlignedData;
    use super::*;
    use zerocopy::FromBytes;

    const TEST_DATA: AlignedData<[u8; 10]> =
        AlignedData([0x66, 0x6f, 0x6f, 0x00, 0x62, 0x61, 0x72, 0x00, 0x62, 0x61]);

    #[repr(C)]
    #[derive(FromBytes, KnownLayout, Immutable)]
    struct TestArgument {
        p1: u8,
        p2: u8,
        p3: u16,
    }

    #[test]
    fn all_data() {
        let mut it = ArgumentIterator::new(TEST_DATA.deref());
        it.fetch_str().unwrap();
        let arg = it.fetch_all();
        assert_eq!(arg, [0x62, 0x61, 0x72, 0x00, 0x62, 0x61]);
    }

    #[test]
    fn generic_argument() {
        let mut it = ArgumentIterator::new(TEST_DATA.deref());
        let arg: &TestArgument = it.fetch().unwrap();
        assert_eq!(arg.p1, 0x66);
        assert_eq!(arg.p2, 0x6f);
        assert_eq!(arg.p3, 0x006f);
        let arg: &TestArgument = it.fetch().unwrap();
        assert_eq!(arg.p1, 0x62);
        assert_eq!(arg.p2, 0x61);
        assert_eq!(arg.p3, 0x0072);
        assert_eq!(it.len(), 2);
    }

    #[test]
    fn string_argument() {
        let mut it = ArgumentIterator::new(TEST_DATA.deref());
        let arg = it.fetch_str().unwrap();
        assert_eq!(arg, "foo");
        let arg = it.fetch_str().unwrap();
        assert_eq!(arg, "bar");
        assert_eq!(it.len(), 2);
    }

    #[test]
    fn mixed_arguments() {
        let mut it = ArgumentIterator::new(TEST_DATA.deref());
        let arg: &TestArgument = it.fetch().unwrap();
        assert_eq!(arg.p1, 0x66);
        assert_eq!(arg.p2, 0x6f);
        assert_eq!(arg.p3, 0x006f);
        let arg = it.fetch_str().unwrap();
        assert_eq!(arg, "bar");
        let arg = it.fetch_all();
        assert_eq!(arg, [0x62, 0x61]);
    }

    #[test]
    fn out_of_data() {
        let mut it = ArgumentIterator::new(TEST_DATA.deref());
        it.fetch::<u64>().unwrap();
        let arg: Option<&TestArgument> = it.fetch();
        assert!(arg.is_none());
        assert_eq!(it.len(), 2);
        let arg = it.fetch_str();
        assert!(arg.is_none());
        assert_eq!(it.len(), 2);
    }
}
