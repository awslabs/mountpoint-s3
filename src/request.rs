//!
//! A request represents information about a filesystem operation the
//! kernel driver wants us to perform.
//!

use std::{mem, str};
use std::libc::{c_int, EIO, ENOSYS, EPROTO, ERANGE};
use argument::ArgumentIterator;
use channel::Channel;
use Filesystem;
use fuse::*;
use fuse::consts::*;
use sendable::{Sendable, DirBuffer};
use session::Session;

/// Maximum write size. FUSE recommends at least 128k, max 16M. Default on OS X is 16M.
pub static MAX_WRITE_SIZE: u32 = 16*1024*1024;

#[cfg(target_os = "macos")]
/// We support async reads and our filesystems are usually case-insensitive
/// TODO: should case sensitivity be an option passable by the implementing FS?
static INIT_FLAGS: u32 = FUSE_ASYNC_READ | FUSE_CASE_INSENSITIVE;

#[cfg(not(target_os = "macos"))]
/// We support async reads
static INIT_FLAGS: u32 = FUSE_ASYNC_READ;

/// Request data structure
pub struct Request<'a> {
	priv data: &'a [u8],
}

impl<'a> Request<'a> {
	/// Create a new request from the given data
	pub fn new (data: &'a [u8]) -> Request<'a> {
		Request { data: data }
	}

	/// Dispatch request to the given filesystem.
	/// This parses a previously read request, calls the appropriate
	/// filesystem operation method and sends back the returned reply
	/// to the kernel
	pub fn dispatch<FS: Filesystem> (&self, se: &mut Session<FS>) {
		// Every request begins with a fuse_in_header struct followed by arbitrary
		// data depending on which opcode it contains
		assert!(self.data.len() >= mem::size_of::<fuse_in_header>());
		let mut data = ArgumentIterator::new(self.data);
		let header: &fuse_in_header = data.fetch();
		let opcode: fuse_opcode = match FromPrimitive::from_u32(header.opcode) {
			Some(op) => op,
			None => {
				warn!("Ignoring unknown FUSE operation {:u}", header.opcode)
				self.reply_error(&se.ch, ENOSYS);
				return;
			},
		};
		match opcode {
			// Filesystem initialization
			FUSE_INIT => {
				let arg: &fuse_init_in = data.fetch();
				debug!("INIT({:u})   kernel: ABI {:u}.{:u}, flags {:#x}, max readahead {:u}", header.unique, arg.major, arg.minor, arg.flags, arg.max_readahead);
				// We don't support ABI versions before 7.6
				if arg.major < 7 || (arg.major == 7 && arg.minor < 6) {
					error!("Unsupported FUSE ABI version {:u}.{:u}", arg.major, arg.minor);
					self.reply_error(&se.ch, EPROTO);
					return;
				}
				// Remember ABI version supported by kernel
				se.proto_major = arg.major as uint;
				se.proto_minor = arg.minor as uint;
				// Call filesystem init method and give it a chance to return an error
				let res = se.filesystem.init();
				if res.is_err() {
					self.reply_error(&se.ch, res.unwrap_err());
					return;
				}
				// Reply with our desired version and settings. If the kernel supports a
				// larger major version, it'll re-send a matching init message. If it
				// supports only lower major versions, we replied with an error above.
				let reply = fuse_init_out {
					major: FUSE_KERNEL_VERSION,
					minor: FUSE_KERNEL_MINOR_VERSION,
					max_readahead: arg.max_readahead,
					flags: INIT_FLAGS,
					unused: 0,
					max_write: MAX_WRITE_SIZE,
				};
				debug!("INIT({:u}) response: ABI {:u}.{:u}, flags {:#x}, max readahead {:u}, max write {:u}", header.unique, reply.major, reply.minor, reply.flags, reply.max_readahead, reply.max_write);
				se.initialized = true;
				self.reply(&se.ch, Ok(reply));
			},
			// Any operation is invalid before initialization
			_ if !se.initialized => {
				warn!("Ignoring FUSE operation {:u} before init", header.opcode);
				self.reply_error(&se.ch, EIO);
			},
			// Filesystem destroyed
			FUSE_DESTROY => {
				debug!("DESTROY({:u})", header.unique);
				se.filesystem.destroy();
				se.destroyed = true;
				self.reply(&se.ch, Ok(()));
			}
			// Any operation is invalid after destroy
			_ if se.destroyed => {
				warn!("Ignoring FUSE operation {:u} after destroy", header.opcode);
				self.reply_error(&se.ch, EIO);
			}

			FUSE_INTERRUPT => {
				let arg: &fuse_interrupt_in = data.fetch();
				debug!("INTERRUPT({:u}) unique {:u}", header.unique, arg.unique);
				// TODO: handle FUSE_INTERRUPT
				self.reply_error(&se.ch, ENOSYS);
			},

			FUSE_LOOKUP => {
				let name = data.fetch_path();
				debug!("LOOKUP({:u}) parent {:#018x}, name {}", header.unique, header.nodeid, name.display());
				self.reply(&se.ch, se.filesystem.lookup(header.nodeid, &name));
			},
			FUSE_FORGET => {
				let arg: &fuse_forget_in = data.fetch();
				debug!("FORGET({:u}) ino {:#018x}, nlookup {:u}", header.unique, header.nodeid, arg.nlookup);
				se.filesystem.forget(header.nodeid, arg.nlookup as uint);	// no reply
			},
			FUSE_GETATTR => {
				debug!("GETATTR({:u}) ino {:#018x}", header.unique, header.nodeid);
				self.reply(&se.ch, se.filesystem.getattr(header.nodeid));
			},
			FUSE_SETATTR => {
				let arg: &fuse_setattr_in = data.fetch();
				debug!("SETATTR({:u}) ino {:#018x}, valid {:#x}", header.unique, header.nodeid, arg.valid);
				self.reply(&se.ch, se.filesystem.setattr(header.nodeid, arg));
			},
			FUSE_READLINK => {
				debug!("READLINK({:u}) ino {:#018x}", header.unique, header.nodeid);
				self.reply(&se.ch, se.filesystem.readlink(header.nodeid));
			},
			FUSE_MKNOD => {
				let arg: &fuse_mknod_in = data.fetch();
				let name = data.fetch_path();
				debug!("MKNOD({:u}) parent {:#018x}, name {}, mode {:#05o}, rdev {:u}", header.unique, header.nodeid, name.display(), arg.mode, arg.rdev);
				self.reply(&se.ch, se.filesystem.mknod(header.nodeid, &name, arg.mode, arg.rdev));
			},
			FUSE_MKDIR => {
				let arg: &fuse_mkdir_in = data.fetch();
				let name = data.fetch_path();
				debug!("MKDIR({:u}) parent {:#018x}, name {}, mode {:#05o}", header.unique, header.nodeid, name.display(), arg.mode);
				self.reply(&se.ch, se.filesystem.mkdir(header.nodeid, &name, arg.mode));
			},
			FUSE_UNLINK => {
				let name = data.fetch_path();
				debug!("UNLINK({:u}) parent {:#018x}, name {}", header.unique, header.nodeid, name.display());
				self.reply(&se.ch, se.filesystem.unlink(header.nodeid, &name));
			},
			FUSE_RMDIR => {
				let name = data.fetch_path();
				debug!("RMDIR({:u}) parent {:#018x}, name {}", header.unique, header.nodeid, name.display());
				self.reply(&se.ch, se.filesystem.rmdir(header.nodeid, &name));
			},
			FUSE_SYMLINK => {
				let name = data.fetch_path();
				let link = data.fetch_path();
				debug!("SYMLINK({:u}) parent {:#018x}, name {}, link {}", header.unique, header.nodeid, name.display(), link.display());
				self.reply(&se.ch, se.filesystem.symlink(header.nodeid, &name, &link));
			},
			FUSE_RENAME => {
				let arg: &fuse_rename_in = data.fetch();
				let name = data.fetch_path();
				let newname = data.fetch_path();
				debug!("RENAME({:u}) parent {:#018x}, name {}, newparent {:#018x}, newname {}", header.unique, header.nodeid, name.display(), arg.newdir, newname.display());
				self.reply(&se.ch, se.filesystem.rename(header.nodeid, &name, arg.newdir, &newname));
			},
			FUSE_LINK => {
				let arg: &fuse_link_in = data.fetch();
				let newname = data.fetch_path();
				debug!("LINK({:u}) ino {:#018x}, newparent {:#018x}, newname {}", header.unique, arg.oldnodeid, header.nodeid, newname.display());
				self.reply(&se.ch, se.filesystem.link(arg.oldnodeid, header.nodeid, &newname));
			},
			FUSE_OPEN => {
				let arg: &fuse_open_in = data.fetch();
				debug!("OPEN({:u}) ino {:#018x}, flags {:#x}", header.unique, header.nodeid, arg.flags);
				self.reply(&se.ch, se.filesystem.open(header.nodeid, arg.flags as uint));
			},
			FUSE_READ => {
				let arg: &fuse_read_in = data.fetch();
				debug!("READ({:u}) ino {:#018x}, fh {:u}, offset {:u}, size {:u}", header.unique, header.nodeid, arg.fh, arg.offset, arg.size);
				self.reply(&se.ch, se.filesystem.read(header.nodeid, arg.fh, arg.offset, arg.size as uint));
			},
			FUSE_WRITE => {
				let arg: &fuse_write_in = data.fetch();
				let data = data.fetch_data();
				assert!(data.len() == arg.size as uint);
				debug!("WRITE({:u}) ino {:#018x}, fh {:u}, offset {:u}, size {:u}, flags {:#x}", header.unique, header.nodeid, arg.fh, arg.offset, arg.size, arg.write_flags);
				self.reply(&se.ch, se.filesystem.write(header.nodeid, arg.fh, arg.offset, data, arg.write_flags as uint).and_then(|written| {
					Ok(fuse_write_out { size: written as u32, padding: 0 })
				}));
			},
			FUSE_FLUSH => {
				let arg: &fuse_flush_in = data.fetch();
				debug!("FLUSH({:u}) ino {:#018x}, fh {:u}, lock owner {:u}", header.unique, header.nodeid, arg.fh, arg.lock_owner);
				self.reply(&se.ch, se.filesystem.flush(header.nodeid, arg.fh, arg.lock_owner));
			},
			FUSE_RELEASE => {
				let arg: &fuse_release_in = data.fetch();
				let flush = match arg.release_flags & FUSE_RELEASE_FLUSH { 0 => false, _ => true };
				debug!("RELEASE({:u}) ino {:#018x}, fh {:u}, flags {:#x}, release flags {:#x}, lock owner {:u}", header.unique, header.nodeid, arg.fh, arg.flags, arg.release_flags, arg.lock_owner);
				self.reply(&se.ch, se.filesystem.release(header.nodeid, arg.fh, arg.flags as uint, arg.lock_owner, flush));
			},
			FUSE_FSYNC => {
				let arg: &fuse_fsync_in = data.fetch();
				let datasync = match arg.fsync_flags & 1 { 0 => false, _ => true };
				debug!("FSYNC({:u}) ino {:#018x}, fh {:u}, flags {:#x}", header.unique, header.nodeid, arg.fh, arg.fsync_flags);
				self.reply(&se.ch, se.filesystem.fsync(header.nodeid, arg.fh, datasync));
			},
			FUSE_OPENDIR => {
				let arg: &fuse_open_in = data.fetch();
				debug!("OPENDIR({:u}) ino {:#018x}, flags {:#x}", header.unique, header.nodeid, arg.flags);
				self.reply(&se.ch, se.filesystem.opendir(header.nodeid, arg.flags as uint));
			},
			FUSE_READDIR => {
				let arg: &fuse_read_in = data.fetch();
				debug!("READDIR({:u}) ino {:#018x}, fh {:u}, offset {:u}, size {:u}", header.unique, header.nodeid, arg.fh, arg.offset, arg.size);
				self.reply(&se.ch, se.filesystem.readdir(header.nodeid, arg.fh, arg.offset, DirBuffer::new(arg.size as uint)));
			},
			FUSE_RELEASEDIR => {
				let arg: &fuse_release_in = data.fetch();
				debug!("RELEASEDIR({:u}) ino {:#018x}, fh {:u}, flags {:#x}, release flags {:#x}, lock owner {:u}", header.unique, header.nodeid, arg.fh, arg.flags, arg.release_flags, arg.lock_owner);
				self.reply(&se.ch, se.filesystem.releasedir(header.nodeid, arg.fh, arg.flags as uint));
			},
			FUSE_FSYNCDIR => {
				let arg: &fuse_fsync_in = data.fetch();
				let datasync = match arg.fsync_flags & 1 { 0 => false, _ => true };
				debug!("FSYNCDIR({:u}) ino {:#018x}, fh {:u}, flags {:#x}", header.unique, header.nodeid, arg.fh, arg.fsync_flags);
				self.reply(&se.ch, se.filesystem.fsyncdir(header.nodeid, arg.fh, datasync));
			},
			FUSE_STATFS => {
				debug!("STATFS({:u}) ino {:#018x}", header.unique, header.nodeid);
				self.reply(&se.ch, se.filesystem.statfs(header.nodeid));
			},
			FUSE_SETXATTR => {
				let arg: &fuse_setxattr_in = data.fetch();
				let name = data.fetch_str();
				let value = data.fetch_data();
				assert!(value.len() == arg.size as uint);
				debug!("SETXATTR({:u}) ino {:#018x}, name {:s}, size {:u}, flags {:#x}", header.unique, header.nodeid, str::from_utf8_lossy(name), arg.size, arg.flags);
				#[cfg(target_os = "macos")]
				fn get_position(arg: &fuse_setxattr_in) -> u32 { arg.position }
				#[cfg(not(target_os = "macos"))]
				fn get_position(_arg: &fuse_setxattr_in) -> u32 { 0 }
				self.reply(&se.ch, se.filesystem.setxattr(header.nodeid, name, value, arg.flags as uint, get_position(arg)));
			},
			FUSE_GETXATTR => {
				let arg: &fuse_getxattr_in = data.fetch();
				let name = data.fetch_str();
				debug!("GETXATTR({:u}) ino {:#018x}, name {:s}, size {:u}", header.unique, header.nodeid, str::from_utf8_lossy(name), arg.size);
				match se.filesystem.getxattr(header.nodeid, name) {
					// If arg.size is zero, the size of the value should be sent with fuse_getxattr_out
					Ok(ref value) if arg.size == 0 => self.reply(&se.ch, Ok(fuse_getxattr_out { size: value.len() as u32, padding: 0 })),
					// If arg.size is non-zero, send the value if it fits, or ERANGE otherwise
					Ok(ref value) if value.len() > arg.size as uint => self.reply_error(&se.ch, ERANGE),
					Ok(value) => self.reply(&se.ch, Ok(value)),
					Err(err) => self.reply_error(&se.ch, err),
				}
			},
			FUSE_LISTXATTR => {
				let arg: &fuse_getxattr_in = data.fetch();
				debug!("LISTXATTR({:u}) ino {:#018x}, size {:u}", header.unique, header.nodeid, arg.size);
				match se.filesystem.listxattr(header.nodeid) {
					// TODO: If arg.size is zero, the size of the attribute list should be sent with fuse_getxattr_out
					// TODO: If arg.size is non-zero, send the attribute list if it fits, or ERANGE otherwise
					Ok(..) => self.reply_error(&se.ch, ENOSYS),
					Err(err) => self.reply_error(&se.ch, err),
				}
			},
			FUSE_REMOVEXATTR => {
				let name = data.fetch_str();
				debug!("REMOVEXATTR({:u}) ino {:#018x}, name {:s}", header.unique, header.nodeid, str::from_utf8_lossy(name));
				self.reply(&se.ch, se.filesystem.removexattr(header.nodeid, name));
			},
			FUSE_ACCESS => {
				let arg: &fuse_access_in = data.fetch();
				debug!("ACCESS({:u}) ino {:#018x}, mask {:#05o}", header.unique, header.nodeid, arg.mask);
				self.reply(&se.ch, se.filesystem.access(header.nodeid, arg.mask as uint));
			},
			FUSE_CREATE => {
				let arg: &fuse_open_in = data.fetch();
				let name = data.fetch_path();
				debug!("CREATE({:u}) parent {:#018x}, name {}, mode {:#05o}, flags {:#x}", header.unique, header.nodeid, name.display(), arg.mode, arg.flags);
				self.reply(&se.ch, se.filesystem.create(header.nodeid, &name, arg.mode, arg.flags as uint));
			},
			FUSE_GETLK => {
				let arg: &fuse_lk_in = data.fetch();
				debug!("GETLK({:u}) ino {:#018x}, fh {:u}, lock owner {:u}", header.unique, header.nodeid, arg.fh, arg.owner);
				self.reply(&se.ch, se.filesystem.getlk(header.nodeid, arg.fh, arg.owner, &arg.lk));
			},
			FUSE_SETLK | FUSE_SETLKW => {
				let arg: &fuse_lk_in = data.fetch();
				let sleep = match opcode { FUSE_SETLKW => true, _ => false };
				debug!("SETLK({:u}) ino {:#018x}, fh {:u}, lock owner {:u}", header.unique, header.nodeid, arg.fh, arg.owner);
				self.reply(&se.ch, se.filesystem.setlk(header.nodeid, arg.fh, arg.owner, &arg.lk, sleep));
			},
			FUSE_BMAP => {
				let arg: &fuse_bmap_in = data.fetch();
				debug!("BMAP({:u}) ino {:#018x}, blocksize {:u}, ids {:u}", header.unique, header.nodeid, arg.blocksize, arg.block);
				self.reply(&se.ch, se.filesystem.bmap(header.nodeid, arg.blocksize as uint, arg.block));
			},
			// OS X only
			FUSE_SETVOLNAME | FUSE_EXCHANGE | FUSE_GETXTIMES => self.dispatch_macos_only(opcode, se, header, &mut data),
		}
	}

	/// Handle OS X operation
	#[cfg(target_os = "macos")]
	fn dispatch_macos_only<FS: Filesystem> (&self, opcode: fuse_opcode, se: &mut Session<FS>, header: &fuse_in_header, data: &mut ArgumentIterator) {
		match opcode {
			FUSE_SETVOLNAME => {
				let name = data.fetch_str();
				debug!("SETVOLNAME({:u}) name {:s}", header.unique, str::from_utf8_lossy(name));
				self.reply(&se.ch, se.filesystem.setvolname(name));
			},
			FUSE_EXCHANGE => {
				let arg: &fuse_exchange_in = data.fetch();
				let oldname = data.fetch_path();
				let newname = data.fetch_path();
				debug!("EXCHANGE({:u}) parent {:#018x}, name {}, newparent {:#018x}, newname {}, options {:#x}", header.unique, arg.olddir, oldname.display(), arg.newdir, newname.display(), arg.options);
				self.reply(&se.ch, se.filesystem.exchange(arg.olddir, &oldname, arg.newdir, &newname, arg.options as uint));
			},
			FUSE_GETXTIMES => {
				debug!("GETXTIMES({:u}) ino {:#018x}", header.unique, header.nodeid);
				self.reply(&se.ch, se.filesystem.getxtimes(header.nodeid));
			},
			_ => unreachable!(),
		}
	}

	/// Warn about unsupported OS X operation on other os
	#[cfg(not(target_os = "macos"))]
	fn dispatch_macos_only<FS: Filesystem> (&self, _opcode: fuse_opcode, se: &mut Session<FS>, header: &fuse_in_header, _data: &mut ArgumentIterator) {
		warn!("Ignoring unsupported FUSE operation {:u}", header.opcode)
		self.reply_error(&se.ch, ENOSYS);
	}

	/// Reply to a request with the given error code and data
	fn send<T: Sendable> (&self, ch: &Channel, err: c_int, data: &T) {
		let inheader: &fuse_in_header = ArgumentIterator::new(self.data.as_slice()).fetch();
		data.as_bytegroups(|databytes| {
			let datalen = databytes.iter().fold(0, |l, b| { l +  b.len()});
			let outheader = fuse_out_header {
				len: mem::size_of::<fuse_out_header>() as u32 + datalen as u32,
				error: err,
				unique: inheader.unique,
			};
			outheader.as_bytegroups(|headbytes| {
				let _ = ch.send(headbytes + databytes);
			});
		});
	}

	/// Reply to a request with the given data or error code
	fn reply<T: Sendable> (&self, ch: &Channel, result: Result<T, c_int>) {
		match result {
			Ok(reply) => self.send(ch, 0, &reply),
			Err(err) => self.send(ch, -err, &()),
		}
	}

	/// Reply to a request with the given error code
	fn reply_error (&self, ch: &Channel, err: c_int) {
		self.send(ch, -err, &());
	}
}
