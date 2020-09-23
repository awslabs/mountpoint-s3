//! Argument decomposition for FUSE operation requests.
//!
//! Helper to decompose a slice of binary data (incoming FUSE request) into multiple data
//! structures (request arguments).

use std::ffi::OsStr;
use std::mem;
use std::os::unix::ffi::OsStrExt;

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

    /// Fetch a slice of bytes of the given size. Returns `None` if there's not enough data left.
    pub fn fetch_bytes(&mut self, amt: usize) -> Option<&'a [u8]> {
        if amt > self.data.len() {
            return None;
        }
        let bytes = &self.data[..amt];
        self.data = &self.data[amt..];
        Some(bytes)
    }

    /// Fetch a typed argument. Returns `None` if there's not enough data left. This function is
    /// unsafe because there is no guarantee that the data actually contains the type T.
    pub unsafe fn fetch<T>(&mut self) -> Option<&'a T> {
        let len = mem::size_of::<T>();
        let bytes = self.fetch_bytes(len)?;
        (bytes.as_ptr() as *const T).as_ref()
    }

    /// Fetch a (zero-terminated) string (can be non-utf8). Returns `None` if there's not enough
    /// data left or no zero-termination could be found. This function is unsafe because there is
    /// no guarantee that the data actually contains a string.
    pub unsafe fn fetch_str(&mut self) -> Option<&'a OsStr> {
        let len = self.data.iter().position(|&c| c == 0)?;
        let bytes = self.fetch_bytes(len)?;
        let _zero = self.fetch_bytes(1)?;
        Some(OsStr::from_bytes(&bytes))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    const TEST_DATA: [u8; 10] = [0x66, 0x6f, 0x6f, 0x00, 0x62, 0x61, 0x72, 0x00, 0x62, 0x61];

    #[repr(C)]
    struct TestArgument {
        p1: u8,
        p2: u8,
        p3: u16,
    }

    #[test]
    fn all_data() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        unsafe { it.fetch_str().unwrap() };
        let arg = it.fetch_all();
        assert_eq!(arg, [0x62, 0x61, 0x72, 0x00, 0x62, 0x61]);
    }

    #[test]
    fn bytes_data() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg = it.fetch_bytes(5).unwrap();
        assert_eq!(arg, [0x66, 0x6f, 0x6f, 0x00, 0x62]);
        let arg = it.fetch_bytes(2).unwrap();
        assert_eq!(arg, [0x61, 0x72]);
        assert_eq!(it.len(), 3);
    }

    #[test]
    fn generic_argument() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg: &TestArgument = unsafe { it.fetch().unwrap() };
        assert_eq!(arg.p1, 0x66);
        assert_eq!(arg.p2, 0x6f);
        assert_eq!(arg.p3, 0x006f);
        let arg: &TestArgument = unsafe { it.fetch().unwrap() };
        assert_eq!(arg.p1, 0x62);
        assert_eq!(arg.p2, 0x61);
        assert_eq!(arg.p3, 0x0072);
        assert_eq!(it.len(), 2);
    }

    #[test]
    fn string_argument() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg = unsafe { it.fetch_str().unwrap() };
        assert_eq!(arg, "foo");
        let arg = unsafe { it.fetch_str().unwrap() };
        assert_eq!(arg, "bar");
        assert_eq!(it.len(), 2);
    }

    #[test]
    fn mixed_arguments() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg: &TestArgument = unsafe { it.fetch().unwrap() };
        assert_eq!(arg.p1, 0x66);
        assert_eq!(arg.p2, 0x6f);
        assert_eq!(arg.p3, 0x006f);
        let arg = unsafe { it.fetch_str().unwrap() };
        assert_eq!(arg, "bar");
        let arg = it.fetch_all();
        assert_eq!(arg, [0x62, 0x61]);
    }

    #[test]
    fn out_of_data() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let _arg = it.fetch_bytes(8).unwrap();
        let arg: Option<&TestArgument> = unsafe { it.fetch() };
        assert!(arg.is_none());
        assert_eq!(it.len(), 2);
        let arg = unsafe { it.fetch_str() };
        assert!(arg.is_none());
        assert_eq!(it.len(), 2);
    }
}
