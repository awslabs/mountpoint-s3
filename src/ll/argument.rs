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

    /// Fetch a typed argument. Returns `None` if there's not enough data left.
    pub fn fetch<T>(&mut self) -> Option<&'a T> {
        let len = mem::size_of::<T>();
        if self.data.len() < len { return None }
        let bytes = &self.data[..len];
        self.data = &self.data[len..];
        unsafe { (bytes.as_ptr() as *const T).as_ref() }
    }

    /// Fetch a typed argument. Panics if there's not enough data left.
    pub fn fetch_unwrap<T>(&mut self) -> &'a T {
        self.fetch().expect("out of data while fetching typed argument")
    }

    /// Fetch a (zero-terminated) string (can be non-utf8). Returns `None` if there's not enough
    /// data left or no zero-termination could be found.
    pub fn fetch_str(&mut self) -> Option<&'a OsStr> {
        self.data.iter().position(|&c| c == 0).map(|len| {
            let bytes = &self.data[..len];
            self.data = &self.data[len + 1..];
            OsStr::from_bytes(&bytes)
        })
    }

    /// Fetch a (zero-terminated) string (can be non-utf8). Panics if there's not enough data
    /// left or no zero-termination could be found.
    pub fn fetch_str_unwrap(&mut self) -> &'a OsStr {
        self.fetch_str().expect("out of data while fetching string argument")
    }

    /// Fetch a slice of all remaining data.
    pub fn fetch_data(&mut self) -> &'a [u8] {
        let bytes = self.data;
        self.data = &[];
        bytes
    }
}


#[cfg(test)]
mod tests {
    use super::*;

    const TEST_DATA: [u8; 10] = [0x66, 0x6f, 0x6f, 0x00, 0x62, 0x61, 0x72, 0x00, 0x62, 0x61];

    #[repr(C)]
    struct TestArgument { p1: u8, p2: u8, p3: u16 }

    #[test]
    fn generic_argument() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg: &TestArgument = it.fetch_unwrap();
        assert_eq!(arg.p1, 0x66);
        assert_eq!(arg.p2, 0x6f);
        assert_eq!(arg.p3, 0x006f);
        let arg: &TestArgument = it.fetch_unwrap();
        assert_eq!(arg.p1, 0x62);
        assert_eq!(arg.p2, 0x61);
        assert_eq!(arg.p3, 0x0072);
        assert_eq!(it.len(), 2);
    }

    #[test]
    fn string_argument() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg = it.fetch_str_unwrap();
        assert_eq!(arg, "foo");
        let arg = it.fetch_str_unwrap();
        assert_eq!(arg, "bar");
        assert_eq!(it.len(), 2);
    }

    #[test]
    fn data_argument() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        it.fetch_str();
        let arg = it.fetch_data();
        assert_eq!(arg, [0x62, 0x61, 0x72, 0x00, 0x62, 0x61]);
    }

    #[test]
    fn mixed_arguments() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg: &TestArgument = it.fetch_unwrap();
        assert_eq!(arg.p1, 0x66);
        assert_eq!(arg.p2, 0x6f);
        assert_eq!(arg.p3, 0x006f);
        let arg = it.fetch_str_unwrap();
        assert_eq!(arg, "bar");
        let arg = it.fetch_data();
        assert_eq!(arg, [0x62, 0x61]);
    }

    #[test]
    fn out_of_data() {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg: Option<&TestArgument> = it.fetch();
        assert!(arg.is_some());
        let arg: Option<&TestArgument> = it.fetch();
        assert!(arg.is_some());
        let arg: Option<&TestArgument> = it.fetch();
        assert!(arg.is_none());
        assert_eq!(it.len(), 2);
        let arg = it.fetch_str();
        assert!(arg.is_none());
        assert_eq!(it.len(), 2);
    }
}
