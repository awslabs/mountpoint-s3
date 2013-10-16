/*!
 * Helper to decompose a packet of binary data into multiple arbitrary data
 * structures.
 */

use std::{cast, mem};

/// An iterator that can be used to fetch typed arguments from a byte slice
pub struct ArgumentIterator<'self> {
	priv data: &'self [u8],
	priv pos: uint,
}

impl<'self> ArgumentIterator<'self> {
	/// Create a new argument iterator for the given byte slice
	pub fn new (data: &'self [u8]) -> ArgumentIterator<'self> {
		ArgumentIterator { data: data, pos: 0 }
	}

	/// Fetch a typed argument
	pub fn fetch<T> (&mut self) -> &'self T {
		do self.data.as_imm_buf |dataptr, _| {
			let value = unsafe { cast::transmute(dataptr.offset(self.pos as int)) };
			self.pos += mem::size_of::<T>();
			assert!(self.pos <= self.data.len(), "trying to get argument behind data");
			value
		}
	}

	/// Fetch a (zero-terminated) string
	pub fn fetch_str (&mut self) -> &'self [u8] {
		let start = self.pos;
		while(self.data[self.pos] != 0u8) {
			self.pos += 1
		}
		self.pos += 1;  // Eat the null terminator
		self.data.slice(start, self.pos-1)
	}

	/// Fetch a slice of the remaining data
	pub fn fetch_data (&mut self) -> &'self [u8] {
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
	fn test_argument_type () {
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
	fn test_argument_string () {
		let mut it = ArgumentIterator::new(test_data);
		let arg = it.fetch_str();
		assert!(arg == bytes!("foo"), "argument iterator should fetch string from data");
		let arg = it.fetch_str();
		assert!(arg == bytes!("bar"), "argument iterator should fetch string from data");
	}

	#[test]
	fn test_argument_data () {
		let mut it = ArgumentIterator::new(test_data);
		it.fetch_str();
		it.fetch_str();
		let arg = it.fetch_data();
		assert!(arg == [0x62, 0x61, 0x7a, 0x00], "argument iterator should fetch data from data");
	}

	#[test]
	fn test_argument_mixed () {
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
