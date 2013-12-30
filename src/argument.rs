//!
//! Helper to decompose a packet of binary data into multiple arbitrary data
//! structures.
//!

use std::{cast, mem};

/// An iterator that can be used to fetch typed arguments from a byte slice
pub struct ArgumentIterator<'a> {
	priv data: &'a [u8],
	priv pos: uint,
}

impl<'a> ArgumentIterator<'a> {
	/// Create a new argument iterator for the given byte slice
	pub fn new (data: &'a [u8]) -> ArgumentIterator<'a> {
		ArgumentIterator { data: data, pos: 0 }
	}

	/// Fetch a typed argument
	pub fn fetch<T> (&mut self) -> &'a T {
		let value = unsafe { cast::transmute(self.data.as_ptr().offset(self.pos as int)) };
		self.pos += mem::size_of::<T>();
		assert!(self.pos <= self.data.len(), "trying to get argument behind data");
		value
	}

	/// Fetch a (zero-terminated) string (can be non-utf8)
	pub fn fetch_str (&mut self) -> &'a [u8] {
		let start = self.pos;
		while(self.data[self.pos] != 0u8) {
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
		let bytes = self.data.tailn(self.pos);
		self.pos = self.data.len();
		bytes
	}
}


#[cfg(test)]
mod test {
	use super::ArgumentIterator;

	static test_data: [u8, ..12] = [0x66, 0x6f, 0x6f, 0x00, 0x62, 0x61, 0x72, 0x00, 0x62, 0x61, 0x7a, 0x00];
	struct test_argument_t { p1: u8, p2: u8, p3: u16 }

	#[test]
	fn generic_argument () {
		let mut it = ArgumentIterator::new(test_data);
		let arg: &test_argument_t = it.fetch();
		assert!(arg.p1 == 0x66, "argument iterator should fetch typed argument from data");
		assert!(arg.p2 == 0x6f, "argument iterator should fetch typed argument from data");
		assert!(arg.p3 == 0x006f, "argument iterator should fetch typed argument from data");
		let arg: &test_argument_t = it.fetch();
		assert!(arg.p1 == 0x62, "argument iterator should fetch typed argument from data");
		assert!(arg.p2 == 0x61, "argument iterator should fetch typed argument from data");
		assert!(arg.p3 == 0x0072, "argument iterator should fetch typed argument from data");
	}

	#[test]
	fn string_argument () {
		let mut it = ArgumentIterator::new(test_data);
		let arg = it.fetch_str();
		assert!(arg == bytes!("foo"), "argument iterator should fetch string from data");
		let arg = it.fetch_str();
		assert!(arg == bytes!("bar"), "argument iterator should fetch string from data");
	}

	#[test]
	fn path_argument () {
		let mut it = ArgumentIterator::new(test_data);
		let arg = it.fetch_path();
		assert!(arg.as_str() == Some("foo"), "argument iterator should fetch path from data");
		let arg = it.fetch_path();
		assert!(arg.as_str() == Some("bar"), "argument iterator should fetch path from data");
	}

	#[test]
	fn remaining_data_argument () {
		let mut it = ArgumentIterator::new(test_data);
		it.fetch_str();
		it.fetch_str();
		let arg = it.fetch_data();
		assert!(arg == [0x62, 0x61, 0x7a, 0x00], "argument iterator should fetch data from data");
	}

	#[test]
	fn mixed_arguments () {
		let mut it = ArgumentIterator::new(test_data);
		let arg: &test_argument_t = it.fetch();
		assert!(arg.p1 == 0x66, "argument iterator should fetch typed argument from data");
		assert!(arg.p2 == 0x6f, "argument iterator should fetch typed argument from data");
		assert!(arg.p3 == 0x006f, "argument iterator should fetch typed argument from data");
		let arg = it.fetch_str();
		assert!(arg == bytes!("bar"), "argument iterator should fetch string from data");
		let arg = it.fetch_data();
		assert!(arg == [0x62, 0x61, 0x7a, 0x00], "argument iterator should fetch data from data");
	}
}
