extern mod fuse;

use std::libc::{c_int, mode_t, off_t, size_t, ENOENT, S_IFDIR, S_IFREG};
use std::default::Default;

struct HelloFS;

static hello_world: &'static str = "Hello World!\n";

fn hello_dir_attr () -> fuse::fuse_attr {
	fuse::fuse_attr {
		ino: 1, mode: S_IFDIR as u32|493, nlink: 2, uid: 501, gid: 20, ..Default::default()
	}
}

fn hello_txt_attr () -> fuse::fuse_attr {
	fuse::fuse_attr {
		ino: 2, size: 13, mode: S_IFREG as u32|420, nlink: 1, uid: 501, gid: 20, ..Default::default()
	}
}

impl fuse::Filesystem for HelloFS {
	fn lookup (&mut self, parent: u64, name: &[u8]) -> Result<~fuse::fuse_entry_out, c_int> {
		if parent == 1 && name == bytes!("hello.txt") {
			Ok(~fuse::fuse_entry_out { nodeid: 2, generation: 0, attr: hello_txt_attr(), entry_valid: 1, entry_valid_nsec: 0, attr_valid: 1, attr_valid_nsec: 0 })
		} else {
			Err(ENOENT)
		}
	}

	fn getattr (&mut self, ino: u64) -> Result<~fuse::fuse_attr_out, c_int> {
		match ino {
			1 => Ok(~fuse::fuse_attr_out { attr_valid: 1, attr_valid_nsec: 0, dummy: 0, attr: hello_dir_attr() }),
			2 => Ok(~fuse::fuse_attr_out { attr_valid: 1, attr_valid_nsec: 0, dummy: 0, attr: hello_txt_attr() }),
			_ => Err(ENOENT),
		}
	}

	fn read (&mut self, ino: u64, _fh: u64, offset: off_t, _size: size_t) -> Result<~[u8], c_int> {
		if ino == 2 {
			Ok(hello_world.as_bytes().tailn(offset as uint).to_owned())
		} else {
			Err(ENOENT)
		}
	}

	fn readdir (&mut self, ino: u64, _fh: u64, offset: off_t, mut buffer: ~fuse::DirBuffer) -> Result<~fuse::DirBuffer, c_int> {
		if ino == 1 {
			if offset == 0 {
				buffer.fill(1, 0, hello_dir_attr().mode as mode_t, ".");
				buffer.fill(1, 1, hello_dir_attr().mode as mode_t, "..");
				buffer.fill(2, 2, hello_txt_attr().mode as mode_t, "hello.txt");
			}
			Ok(buffer)
		} else {
			Err(ENOENT)
		}
	}
}

fn main () {
	let mountpoint = Path::new(::std::os::args()[1]);
	fuse::mount(HelloFS, &mountpoint, []);
}
