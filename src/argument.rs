//!
//! Helper to decompose a packet of binary data into multiple arbitrary data
//! structures.
//!

use std::mem;
use std::path::PosixPath;

/// An iterator that can be used to fetch typed arguments from a byte slice
pub struct ArgumentIterator<'a> {
    data: &'a [u8],
    pos: usize,
}

impl<'a> ArgumentIterator<'a> {
    /// Create a new argument iterator for the given byte slice
    pub fn new (data: &'a [u8]) -> ArgumentIterator<'a> {
        ArgumentIterator { data: data, pos: 0 }
    }

    /// Fetch a typed argument
    pub fn fetch<T> (&mut self) -> &'a T {
        let value = unsafe { mem::transmute(self.data.as_ptr().offset(self.pos as isize)) };
        self.pos += mem::size_of::<T>();
        assert!(self.pos <= self.data.len(), "trying to fetch argument behind data");
        value
    }

    /// Fetch a (zero-terminated) string (can be non-utf8)
    pub fn fetch_str (&mut self) -> &'a [u8] {
        let start = self.pos;
        while self.data[self.pos] != 0u8 {
            self.pos += 1
        }
        self.pos += 1;  // Eat the null terminator
        self.data.slice(start, self.pos-1)
    }

    /// Fetch a (zero-terminated) Posix path
    pub fn fetch_path (&mut self) -> PosixPath {
        PosixPath::new(self.fetch_str())
    }

    /// Fetch a slice of the remaining data
    pub fn fetch_data (&mut self) -> &'a [u8] {
        let bytes = self.data.slice_from(self.pos);
        self.pos = self.data.len();
        bytes
    }
}


#[cfg(test)]
mod test {
    use std::path::PosixPath;
    use super::ArgumentIterator;

    static TEST_DATA: [u8; 12] = [0x66, 0x6f, 0x6f, 0x00, 0x62, 0x61, 0x72, 0x00, 0x62, 0x61, 0x7a, 0x00];
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
        assert_eq!(arg, b"foo");
        let arg = it.fetch_str();
        assert_eq!(arg, b"bar");
    }

    #[test]
    fn path_argument () {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg = it.fetch_path();
        assert!(arg == PosixPath::new("foo"));
        let arg = it.fetch_path();
        assert!(arg == PosixPath::new("bar"));
    }

    #[test]
    fn remaining_data_argument () {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        it.fetch_str();
        it.fetch_str();
        let arg = it.fetch_data();
        assert_eq!(arg, [0x62, 0x61, 0x7a, 0x00].as_slice());
    }

    #[test]
    fn mixed_arguments () {
        let mut it = ArgumentIterator::new(&TEST_DATA);
        let arg: &TestArgument = it.fetch();
        assert_eq!(arg.p1, 0x66);
        assert_eq!(arg.p2, 0x6f);
        assert_eq!(arg.p3, 0x006f);
        let arg = it.fetch_str();
        assert_eq!(arg, b"bar");
        let arg = it.fetch_data();
        assert_eq!(arg, [0x62, 0x61, 0x7a, 0x00].as_slice());
    }
}
