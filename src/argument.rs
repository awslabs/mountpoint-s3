//!
//! Helper to decompose a packet of binary data into multiple arbitrary data
//! structures.
//!

use std::mem;
use std::ffi::OsStr;
use std::path::Path;
use std::os::unix::ffi::OsStrExt;

/// An iterator that can be used to fetch typed arguments from a byte slice
pub struct ArgumentIterator<'a> {
    data: &'a [u8],
}

impl<'a> ArgumentIterator<'a> {
    /// Create a new argument iterator for the given byte slice
    pub fn new (data: &'a [u8]) -> ArgumentIterator<'a> {
        ArgumentIterator { data: data }
    }

    /// Fetch a typed argument
    pub fn fetch<T> (&mut self) -> &'a T {
        let len = mem::size_of::<T>();
        assert!(len <= self.data.len(), "out of data while fetching typed argument");
        let bytes = &self.data[..len];
        self.data = &self.data[len..];
        unsafe { mem::transmute(bytes.as_ptr()) }
    }

    /// Fetch a (zero-terminated) string (can be non-utf8)
    pub fn fetch_str (&mut self) -> &'a OsStr {
        let len = self.data.iter().position(|&c| c == 0).expect("out of data while fetching string argument");
        let bytes = &self.data[..len];
        self.data = &self.data[len+1..];
        OsStr::from_bytes(&bytes)
    }

    /// Fetch a (zero-terminated) path (can be non-utf8)
    pub fn fetch_path (&mut self) -> &'a Path {
        Path::new(self.fetch_str())
    }

    /// Fetch a slice of all remaining data
    pub fn fetch_data (&mut self) -> &'a [u8] {
        let bytes = self.data;
        self.data = &[];
        bytes
    }
}


#[cfg(test)]
mod test {
    use std::path::Path;
    use super::ArgumentIterator;

    static TEST_DATA: [u8; 12] = [0x66, 0x6f, 0x6f, 0x00, 0x62, 0x61, 0x72, 0x00, 0x62, 0x61, 0x7a, 0x00];

    #[repr(C)]
    struct TestArgument { p1: u8, p2: u8, p3: u16 }

    #[test]
    fn generic_argument () {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg: &TestArgument = it.fetch();
        assert_eq!(arg.p1, 0x66);
        assert_eq!(arg.p2, 0x6f);
        assert_eq!(arg.p3, 0x006f);
        let arg: &TestArgument = it.fetch();
        assert_eq!(arg.p1, 0x62);
        assert_eq!(arg.p2, 0x61);
        assert_eq!(arg.p3, 0x0072);
    }

    #[test]
    fn string_argument () {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg = it.fetch_str();
        assert_eq!(arg, "foo");
        let arg = it.fetch_str();
        assert_eq!(arg, "bar");
    }

    #[test]
    fn path_argument () {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg = it.fetch_path();
        assert_eq!(arg, Path::new("foo"));
        let arg = it.fetch_path();
        assert_eq!(arg, Path::new("bar"));
    }

    #[test]
    fn data_argument () {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        it.fetch_str();
        it.fetch_str();
        let arg = it.fetch_data();
        assert_eq!(arg, [0x62, 0x61, 0x7a, 0x00]);
    }

    #[test]
    fn mixed_arguments () {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg: &TestArgument = it.fetch();
        assert_eq!(arg.p1, 0x66);
        assert_eq!(arg.p2, 0x6f);
        assert_eq!(arg.p3, 0x006f);
        let arg = it.fetch_str();
        assert_eq!(arg, "bar");
        let arg = it.fetch_data();
        assert_eq!(arg, [0x62, 0x61, 0x7a, 0x00]);
    }
}
