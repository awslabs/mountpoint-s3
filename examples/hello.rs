extern mod fuse;

use std::libc::{c_int, mode_t, off_t, size_t, ENOENT, S_IFDIR, S_IFREG};

struct HelloFS;

static hello_world: &'static str = "Hello World!\n";
static hello_dir_attr: fuse::fuse_attr = fuse::fuse_attr {
	ino: 1, size: 0,  blocks: 0, atime: 0, mtime: 0, ctime: 0, crtime: 0, atimensec: 0, mtimensec: 0, ctimensec: 0, crtimensec: 0, mode: S_IFDIR as u32|493, nlink: 2, uid: 501, gid: 20, rdev: 0, flags: 0
};
static hello_txt_attr: fuse::fuse_attr = fuse::fuse_attr {
	ino: 2, size: 13, blocks: 0, atime: 0, mtime: 0, ctime: 0, crtime: 0, atimensec: 0, mtimensec: 0, ctimensec: 0, crtimensec: 0, mode: S_IFREG as u32|420, nlink: 1, uid: 501, gid: 20, rdev: 0, flags: 0
};

impl fuse::Filesystem for HelloFS {
	fn lookup (&mut self, parent: u64, name: &str) -> Result<~fuse::fuse_entry_out, c_int> {
		if parent == 1 && name == "hello.txt" {
			Ok(~fuse::fuse_entry_out { nodeid: 2, generation: 0, attr: hello_txt_attr, entry_valid: 1, entry_valid_nsec: 0, attr_valid: 1, attr_valid_nsec: 0 })
		} else {
			Err(ENOENT)
		}
	}

	fn getattr (&mut self, ino: u64) -> Result<~fuse::fuse_attr_out, c_int> {
		match ino {
			1 => Ok(~fuse::fuse_attr_out { attr_valid: 1, attr_valid_nsec: 0, dummy: 0, attr: hello_dir_attr }),
			2 => Ok(~fuse::fuse_attr_out { attr_valid: 1, attr_valid_nsec: 0, dummy: 0, attr: hello_txt_attr }),
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

	fn readdir (&mut self, ino: u64, _fh: u64, offset: off_t, buffer: ~fuse::DirBuffer) -> Result<~fuse::DirBuffer, c_int> {
		if ino == 1 {
			let mut buffer = buffer;
			if offset == 0 {
				buffer.fill(1, 0, hello_dir_attr.mode as mode_t, ".");
				buffer.fill(1, 1, hello_dir_attr.mode as mode_t, "..");
				buffer.fill(2, 2, hello_txt_attr.mode as mode_t, "hello.txt");
			}
			Ok(buffer)
		} else {
			Err(ENOENT)
		}
	}
}

fn main () {
	fuse::mount(HelloFS, ::std::os::args()[1], []);
}
