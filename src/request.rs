//!
//! A request represents information about a filesystem operation the
//! kernel driver wants us to perform.
//!

use std::mem;
use std::num::FromPrimitive;
use libc::consts::os::posix88::{EIO, ENOSYS, EPROTO};
use time::Timespec;
use argument::ArgumentIterator;
use channel::ChannelSender;
use Filesystem;
use fuse::*;
use fuse::consts::*;
use fuse::fuse_opcode::*;
use reply::{Reply, ReplyRaw, ReplyEmpty, ReplyDirectory};
use session::{MAX_WRITE_SIZE, Session};

/// We generally support async reads, lookups of . and .. and writes larger than 4k
#[cfg(not(target_os = "macos"))]
const INIT_FLAGS: u32 = FUSE_ASYNC_READ | FUSE_EXPORT_SUPPORT | FUSE_BIG_WRITES;

/// On OS X, we additionally support case insensitiveness, volume renames and xtimes
/// TODO: we should eventually let the filesystem implementation decide which flags to set
#[cfg(target_os = "macos")]
const INIT_FLAGS: u32 = FUSE_ASYNC_READ | FUSE_EXPORT_SUPPORT | FUSE_BIG_WRITES | FUSE_CASE_INSENSITIVE | FUSE_VOL_RENAME | FUSE_XTIMES;

/// Create a new request from the given buffer
pub fn request<'a> (ch: ChannelSender, buffer: &'a [u8]) -> Option<Request<'a>> {
    Request::new(ch, buffer)
}

/// Dispatch request to the given filesystem
pub fn dispatch<FS: Filesystem> (req: &Request, se: &mut Session<FS>) {
    req.dispatch(se);
}

/// Request data structure
pub struct Request<'a> {
    /// Channel sender for sending the reply
    ch: ChannelSender,
    /// Header of the FUSE request
    header: &'a fuse_in_header,
    /// Operation-specific data payload
    data: &'a [u8],
}

impl<'a> Request<'a> {
    /// Create a new request from the given buffer
    fn new (ch: ChannelSender, buffer: &'a [u8]) -> Option<Request<'a>> {
        // Every request always begins with a fuse_in_header struct
        // followed by arbitrary data depending on which opcode it contains
        if buffer.len() < mem::size_of::<fuse_in_header>() {
            error!("Short read of FUSE request ({} < {})", buffer.len(), mem::size_of::<fuse_in_header>());
            return None;
        }
        let mut data = ArgumentIterator::new(buffer);
        let req = Request {
            ch: ch,
            header: data.fetch(),
            data: data.fetch_data(),
        };
        if buffer.len() < req.header.len as usize {
            error!("Short read of FUSE request ({} < {})", buffer.len(), req.header.len);
            return None;
        }
        Some(req)
    }

    /// Dispatch request to the given filesystem.
    /// This calls the appropriate filesystem operation method for the
    /// request and sends back the returned reply to the kernel
    fn dispatch<FS: Filesystem> (&self, se: &mut Session<FS>) {
        let opcode: fuse_opcode = match FromPrimitive::from_u32(self.header.opcode) {
            Some(op) => op,
            None => {
                warn!("Ignoring unknown FUSE operation {}", self.header.opcode);
                self.reply::<ReplyEmpty>().error(ENOSYS);
                return;
            },
        };
        let mut data = ArgumentIterator::new(self.data);
        match opcode {
            // Filesystem initialization
            FUSE_INIT => {
                let reply: ReplyRaw<fuse_init_out> = self.reply();
                let arg: &fuse_init_in = data.fetch();
                debug!("INIT({})   kernel: ABI {}.{}, flags {:#x}, max readahead {}", self.header.unique, arg.major, arg.minor, arg.flags, arg.max_readahead);
                // We don't support ABI versions before 7.6
                if arg.major < 7 || (arg.major == 7 && arg.minor < 6) {
                    error!("Unsupported FUSE ABI version {}.{}", arg.major, arg.minor);
                    reply.error(EPROTO);
                    return;
                }
                // Remember ABI version supported by kernel
                se.proto_major = arg.major;
                se.proto_minor = arg.minor;
                // Call filesystem init method and give it a chance to return an error
                let res = se.filesystem.init(self);
                if res.is_err() {
                    reply.error(res.unwrap_err());
                    return;
                }
                // Reply with our desired version and settings. If the kernel supports a
                // larger major version, it'll re-send a matching init message. If it
                // supports only lower major versions, we replied with an error above.
                let init = fuse_init_out {
                    major: FUSE_KERNEL_VERSION,
                    minor: FUSE_KERNEL_MINOR_VERSION,
                    max_readahead: arg.max_readahead,       // accept any readahead size
                    flags: arg.flags & INIT_FLAGS,          // use features given in INIT_FLAGS and reported as capable
                    unused: 0,
                    max_write: MAX_WRITE_SIZE as u32,       // use a max write size that fits into the session's buffer
                };
                debug!("INIT({}) response: ABI {}.{}, flags {:#x}, max readahead {}, max write {}", self.header.unique, init.major, init.minor, init.flags, init.max_readahead, init.max_write);
                se.initialized = true;
                reply.ok(&init);
            },
            // Any operation is invalid before initialization
            _ if !se.initialized => {
                warn!("Ignoring FUSE operation {} before init", self.header.opcode);
                self.reply::<ReplyEmpty>().error(EIO);
            },
            // Filesystem destroyed
            FUSE_DESTROY => {
                debug!("DESTROY({})", self.header.unique);
                se.filesystem.destroy(self);
                se.destroyed = true;
                self.reply::<ReplyEmpty>().ok();
            }
            // Any operation is invalid after destroy
            _ if se.destroyed => {
                warn!("Ignoring FUSE operation {} after destroy", self.header.opcode);
                self.reply::<ReplyEmpty>().error(EIO);
            }

            FUSE_INTERRUPT => {
                let arg: &fuse_interrupt_in = data.fetch();
                debug!("INTERRUPT({}) unique {}", self.header.unique, arg.unique);
                // TODO: handle FUSE_INTERRUPT
                self.reply::<ReplyEmpty>().error(ENOSYS);
            },

            FUSE_LOOKUP => {
                let name = data.fetch_path();
                debug!("LOOKUP({}) parent {:#018x}, name {}", self.header.unique, self.header.nodeid, name.display());
                se.filesystem.lookup(self, self.header.nodeid, &name, self.reply());
            },
            FUSE_FORGET => {
                let arg: &fuse_forget_in = data.fetch();
                debug!("FORGET({}) ino {:#018x}, nlookup {}", self.header.unique, self.header.nodeid, arg.nlookup);
                se.filesystem.forget(self, self.header.nodeid, arg.nlookup);    // no reply
            },
            FUSE_GETATTR => {
                debug!("GETATTR({}) ino {:#018x}", self.header.unique, self.header.nodeid);
                se.filesystem.getattr(self, self.header.nodeid, self.reply());
            },
            FUSE_SETATTR => {
                let arg: &fuse_setattr_in = data.fetch();
                debug!("SETATTR({}) ino {:#018x}, valid {:#x}", self.header.unique, self.header.nodeid, arg.valid);
                let mode = match arg.valid & FATTR_MODE { 0 => None, _ => Some(arg.mode) };
                let uid = match arg.valid & FATTR_UID { 0 => None, _ => Some(arg.uid) };
                let gid = match arg.valid & FATTR_GID { 0 => None, _ => Some(arg.gid) };
                let size = match arg.valid & FATTR_SIZE { 0 => None, _ => Some(arg.size) };
                let atime = match arg.valid & FATTR_ATIME { 0 => None, _ => Some(Timespec::new(arg.atime, arg.atimensec)) };
                let mtime = match arg.valid & FATTR_MTIME { 0 => None, _ => Some(Timespec::new(arg.mtime, arg.mtimensec)) };
                let fh = match arg.valid & FATTR_FH { 0 => None, _ => Some(arg.fh) };
                #[cfg(target_os = "macos")] #[inline]
                fn get_macos_setattr (arg: &fuse_setattr_in) -> (Option<Timespec>, Option<Timespec>, Option<Timespec>, Option<u32>) {
                    let crtime = match arg.valid & FATTR_CRTIME { 0 => None, _ => Some(Timespec::new(arg.crtime, arg.crtimensec)) };
                    let chgtime = match arg.valid & FATTR_CHGTIME { 0 => None, _ => Some(Timespec::new(arg.chgtime, arg.chgtimensec)) };
                    let bkuptime = match arg.valid & FATTR_BKUPTIME { 0 => None, _ => Some(Timespec::new(arg.bkuptime, arg.bkuptimensec)) };
                    let flags = match arg.valid & FATTR_FLAGS { 0 => None, _ => Some(arg.flags) };
                    (crtime, chgtime, bkuptime, flags)
                }
                #[cfg(not(target_os = "macos"))] #[inline]
                fn get_macos_setattr (_arg: &fuse_setattr_in) -> (Option<Timespec>, Option<Timespec>, Option<Timespec>, Option<u32>) {
                    (None, None, None, None)
                }
                let (crtime, chgtime, bkuptime, flags) = get_macos_setattr(arg);
                se.filesystem.setattr(self, self.header.nodeid, mode, uid, gid, size, atime, mtime, fh, crtime, chgtime, bkuptime, flags, self.reply());
            },
            FUSE_READLINK => {
                debug!("READLINK({}) ino {:#018x}", self.header.unique, self.header.nodeid);
                se.filesystem.readlink(self, self.header.nodeid, self.reply());
            },
            FUSE_MKNOD => {
                let arg: &fuse_mknod_in = data.fetch();
                let name = data.fetch_path();
                debug!("MKNOD({}) parent {:#018x}, name {}, mode {:#05o}, rdev {}", self.header.unique, self.header.nodeid, name.display(), arg.mode, arg.rdev);
                se.filesystem.mknod(self, self.header.nodeid, &name, arg.mode, arg.rdev, self.reply());
            },
            FUSE_MKDIR => {
                let arg: &fuse_mkdir_in = data.fetch();
                let name = data.fetch_path();
                debug!("MKDIR({}) parent {:#018x}, name {}, mode {:#05o}", self.header.unique, self.header.nodeid, name.display(), arg.mode);
                se.filesystem.mkdir(self, self.header.nodeid, &name, arg.mode, self.reply());
            },
            FUSE_UNLINK => {
                let name = data.fetch_path();
                debug!("UNLINK({}) parent {:#018x}, name {}", self.header.unique, self.header.nodeid, name.display());
                se.filesystem.unlink(self, self.header.nodeid, &name, self.reply());
            },
            FUSE_RMDIR => {
                let name = data.fetch_path();
                debug!("RMDIR({}) parent {:#018x}, name {}", self.header.unique, self.header.nodeid, name.display());
                se.filesystem.rmdir(self, self.header.nodeid, &name, self.reply());
            },
            FUSE_SYMLINK => {
                let name = data.fetch_path();
                let link = data.fetch_path();
                debug!("SYMLINK({}) parent {:#018x}, name {}, link {}", self.header.unique, self.header.nodeid, name.display(), link.display());
                se.filesystem.symlink(self, self.header.nodeid, &name, &link, self.reply());
            },
            FUSE_RENAME => {
                let arg: &fuse_rename_in = data.fetch();
                let name = data.fetch_path();
                let newname = data.fetch_path();
                debug!("RENAME({}) parent {:#018x}, name {}, newparent {:#018x}, newname {}", self.header.unique, self.header.nodeid, name.display(), arg.newdir, newname.display());
                se.filesystem.rename(self, self.header.nodeid, &name, arg.newdir, &newname, self.reply());
            },
            FUSE_LINK => {
                let arg: &fuse_link_in = data.fetch();
                let newname = data.fetch_path();
                debug!("LINK({}) ino {:#018x}, newparent {:#018x}, newname {}", self.header.unique, arg.oldnodeid, self.header.nodeid, newname.display());
                se.filesystem.link(self, arg.oldnodeid, self.header.nodeid, &newname, self.reply());
            },
            FUSE_OPEN => {
                let arg: &fuse_open_in = data.fetch();
                debug!("OPEN({}) ino {:#018x}, flags {:#x}", self.header.unique, self.header.nodeid, arg.flags);
                se.filesystem.open(self, self.header.nodeid, arg.flags, self.reply());
            },
            FUSE_READ => {
                let arg: &fuse_read_in = data.fetch();
                debug!("READ({}) ino {:#018x}, fh {}, offset {}, size {}", self.header.unique, self.header.nodeid, arg.fh, arg.offset, arg.size);
                se.filesystem.read(self, self.header.nodeid, arg.fh, arg.offset, arg.size, self.reply());
            },
            FUSE_WRITE => {
                let arg: &fuse_write_in = data.fetch();
                let data = data.fetch_data();
                assert!(data.len() == arg.size as usize);
                debug!("WRITE({}) ino {:#018x}, fh {}, offset {}, size {}, flags {:#x}", self.header.unique, self.header.nodeid, arg.fh, arg.offset, arg.size, arg.write_flags);
                se.filesystem.write(self, self.header.nodeid, arg.fh, arg.offset, data, arg.write_flags, self.reply());
            },
            FUSE_FLUSH => {
                let arg: &fuse_flush_in = data.fetch();
                debug!("FLUSH({}) ino {:#018x}, fh {}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.lock_owner);
                se.filesystem.flush(self, self.header.nodeid, arg.fh, arg.lock_owner, self.reply());
            },
            FUSE_RELEASE => {
                let arg: &fuse_release_in = data.fetch();
                let flush = match arg.release_flags & FUSE_RELEASE_FLUSH { 0 => false, _ => true };
                debug!("RELEASE({}) ino {:#018x}, fh {}, flags {:#x}, release flags {:#x}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.flags, arg.release_flags, arg.lock_owner);
                se.filesystem.release(self, self.header.nodeid, arg.fh, arg.flags, arg.lock_owner, flush, self.reply());
            },
            FUSE_FSYNC => {
                let arg: &fuse_fsync_in = data.fetch();
                let datasync = match arg.fsync_flags & 1 { 0 => false, _ => true };
                debug!("FSYNC({}) ino {:#018x}, fh {}, flags {:#x}", self.header.unique, self.header.nodeid, arg.fh, arg.fsync_flags);
                se.filesystem.fsync(self, self.header.nodeid, arg.fh, datasync, self.reply());
            },
            FUSE_OPENDIR => {
                let arg: &fuse_open_in = data.fetch();
                debug!("OPENDIR({}) ino {:#018x}, flags {:#x}", self.header.unique, self.header.nodeid, arg.flags);
                se.filesystem.opendir(self, self.header.nodeid, arg.flags, self.reply());
            },
            FUSE_READDIR => {
                let arg: &fuse_read_in = data.fetch();
                debug!("READDIR({}) ino {:#018x}, fh {}, offset {}, size {}", self.header.unique, self.header.nodeid, arg.fh, arg.offset, arg.size);
                se.filesystem.readdir(self, self.header.nodeid, arg.fh, arg.offset, self.reply::<ReplyDirectory>().sized(arg.size as usize));
            },
            FUSE_RELEASEDIR => {
                let arg: &fuse_release_in = data.fetch();
                debug!("RELEASEDIR({}) ino {:#018x}, fh {}, flags {:#x}, release flags {:#x}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.flags, arg.release_flags, arg.lock_owner);
                se.filesystem.releasedir(self, self.header.nodeid, arg.fh, arg.flags, self.reply());
            },
            FUSE_FSYNCDIR => {
                let arg: &fuse_fsync_in = data.fetch();
                let datasync = match arg.fsync_flags & 1 { 0 => false, _ => true };
                debug!("FSYNCDIR({}) ino {:#018x}, fh {}, flags {:#x}", self.header.unique, self.header.nodeid, arg.fh, arg.fsync_flags);
                se.filesystem.fsyncdir(self, self.header.nodeid, arg.fh, datasync, self.reply());
            },
            FUSE_STATFS => {
                debug!("STATFS({}) ino {:#018x}", self.header.unique, self.header.nodeid);
                se.filesystem.statfs(self, self.header.nodeid, self.reply());
            },
            FUSE_SETXATTR => {
                let arg: &fuse_setxattr_in = data.fetch();
                let name = data.fetch_str();
                let value = data.fetch_data();
                assert!(value.len() == arg.size as usize);
                debug!("SETXATTR({}) ino {:#018x}, name {}, size {}, flags {:#x}", self.header.unique, self.header.nodeid, String::from_utf8_lossy(name), arg.size, arg.flags);
                #[cfg(target_os = "macos")] #[inline]
                fn get_position (arg: &fuse_setxattr_in) -> u32 { arg.position }
                #[cfg(not(target_os = "macos"))] #[inline]
                fn get_position (_arg: &fuse_setxattr_in) -> u32 { 0 }
                se.filesystem.setxattr(self, self.header.nodeid, name, value, arg.flags, get_position(arg), self.reply());
            },
            FUSE_GETXATTR => {
                let arg: &fuse_getxattr_in = data.fetch();
                let name = data.fetch_str();
                debug!("GETXATTR({}) ino {:#018x}, name {}, size {}", self.header.unique, self.header.nodeid, String::from_utf8_lossy(name), arg.size);
                se.filesystem.getxattr(self, self.header.nodeid, name, self.reply());
            },
            FUSE_LISTXATTR => {
                let arg: &fuse_getxattr_in = data.fetch();
                debug!("LISTXATTR({}) ino {:#018x}, size {}", self.header.unique, self.header.nodeid, arg.size);
                se.filesystem.listxattr(self, self.header.nodeid, self.reply());
            },
            FUSE_REMOVEXATTR => {
                let name = data.fetch_str();
                debug!("REMOVEXATTR({}) ino {:#018x}, name {}", self.header.unique, self.header.nodeid, String::from_utf8_lossy(name));
                se.filesystem.removexattr(self, self.header.nodeid, name, self.reply());
            },
            FUSE_ACCESS => {
                let arg: &fuse_access_in = data.fetch();
                debug!("ACCESS({}) ino {:#018x}, mask {:#05o}", self.header.unique, self.header.nodeid, arg.mask);
                se.filesystem.access(self, self.header.nodeid, arg.mask, self.reply());
            },
            FUSE_CREATE => {
                let arg: &fuse_open_in = data.fetch();
                let name = data.fetch_path();
                debug!("CREATE({}) parent {:#018x}, name {}, mode {:#05o}, flags {:#x}", self.header.unique, self.header.nodeid, name.display(), arg.mode, arg.flags);
                se.filesystem.create(self, self.header.nodeid, &name, arg.mode, arg.flags, self.reply());
            },
            FUSE_GETLK => {
                let arg: &fuse_lk_in = data.fetch();
                debug!("GETLK({}) ino {:#018x}, fh {}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.owner);
                se.filesystem.getlk(self, self.header.nodeid, arg.fh, arg.owner, arg.lk.start, arg.lk.end, arg.lk.typ, arg.lk.pid, self.reply());
            },
            FUSE_SETLK | FUSE_SETLKW => {
                let arg: &fuse_lk_in = data.fetch();
                let sleep = match opcode { FUSE_SETLKW => true, _ => false };
                debug!("SETLK({}) ino {:#018x}, fh {}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.owner);
                se.filesystem.setlk(self, self.header.nodeid, arg.fh, arg.owner, arg.lk.start, arg.lk.end, arg.lk.typ, arg.lk.pid, sleep, self.reply());
            },
            FUSE_BMAP => {
                let arg: &fuse_bmap_in = data.fetch();
                debug!("BMAP({}) ino {:#018x}, blocksize {}, ids {}", self.header.unique, self.header.nodeid, arg.blocksize, arg.block);
                se.filesystem.bmap(self, self.header.nodeid, arg.blocksize, arg.block, self.reply());
            },
            #[cfg(target_os = "macos")]
            FUSE_SETVOLNAME => {                        // OS X only
                let name = data.fetch_str();
                debug!("SETVOLNAME({}) name {}", self.header.unique, String::from_utf8_lossy(name));
                se.filesystem.setvolname(self, name, self.reply());
            },
            #[cfg(target_os = "macos")]
            FUSE_EXCHANGE => {                          // OS X only
                let arg: &fuse_exchange_in = data.fetch();
                let oldname = data.fetch_path();
                let newname = data.fetch_path();
                debug!("EXCHANGE({}) parent {:#018x}, name {}, newparent {:#018x}, newname {}, options {:#x}", self.header.unique, arg.olddir, oldname.display(), arg.newdir, newname.display(), arg.options);
                se.filesystem.exchange(self, arg.olddir, &oldname, arg.newdir, &newname, arg.options, self.reply());
            },
            #[cfg(target_os = "macos")]
            FUSE_GETXTIMES => {                         // OS X only
                debug!("GETXTIMES({}) ino {:#018x}", self.header.unique, self.header.nodeid);
                se.filesystem.getxtimes(self, self.header.nodeid, self.reply());
            },
        }
    }

    /// Create a reply object for this request that can be passed to the filesystem
    /// implementation and makes sure that a request is replied exactly once
    fn reply<T: Reply> (&self) -> T {
        let ch = self.ch;
        Reply::new(self.header.unique, move |buffer| {
            match ch.send(buffer) {
                Ok(()) => (),
                Err(err) => error!("Failed to send FUSE reply: {}", err),
            }
        })
    }

    /// Returns the unique identifier of this request
    #[inline] #[allow(dead_code)]
    pub fn unique (&self) -> u64 {
        self.header.unique
    }

    /// Returns the uid of this request
    #[inline] #[allow(dead_code)]
    pub fn uid (&self) -> u32 {
        self.header.uid
    }

    /// Returns the gid of this request
    #[inline] #[allow(dead_code)]
    pub fn gid (&self) -> u32 {
        self.header.gid
    }

    /// Returns the pid of this request
    #[inline] #[allow(dead_code)]
    pub fn pid (&self) -> u32 {
        self.header.pid
    }
}
