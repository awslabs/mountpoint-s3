//! Low-level filesystem operation request.
//!
//! A request represents information about a filesystem operation the kernel driver wants us to
//! perform.

use fuse_abi::*;
use std::convert::TryFrom;
use std::ffi::OsStr;
use std::{error, fmt, mem};

use super::argument::ArgumentIterator;


/// Error that may occur while reading and parsing a request from the kernel driver.
#[derive(Debug)]
pub enum RequestError {
    /// Not enough data for parsing header (short read).
    ShortReadHeader(usize),
    /// Kernel requested an unknown operation.
    UnknownOperation(u32),
    /// Not enough data for arguments (short read).
    ShortRead(usize, usize),
    /// Insufficient argument data.
    InsufficientData,
}

impl fmt::Display for RequestError {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            RequestError::ShortReadHeader(len) => write!(f, "Short read of FUSE request header ({} < {})", len, mem::size_of::<fuse_in_header>()),
            RequestError::UnknownOperation(opcode) => write!(f, "Unknown FUSE opcode ({})", opcode),
            RequestError::ShortRead(len, total) => write!(f, "Short read of FUSE request ({} < {})", len, total),
            RequestError::InsufficientData => write!(f, "Insufficient argument data"),
        }
    }
}

impl error::Error for RequestError {}


/// Filesystem operation (and arguments) the kernel driver wants us to perform. The fields of each
/// variant needs to match the actual arguments the kernel driver sends for the specific operation.
#[derive(Debug)]
pub enum Operation<'a> {
    Lookup(&'a OsStr),
    Forget(&'a fuse_forget_in), // no reply
    GetAttr,
    SetAttr(&'a fuse_setattr_in),
    ReadLink,
    SymLink(&'a OsStr, &'a OsStr),
    MkNod(&'a fuse_mknod_in, &'a OsStr),
    MkDir(&'a fuse_mkdir_in, &'a OsStr),
    Unlink(&'a OsStr),
    RmDir(&'a OsStr),
    Rename(&'a fuse_rename_in, &'a OsStr, &'a OsStr),
    Link(&'a fuse_link_in, &'a OsStr),
    Open(&'a fuse_open_in),
    Read(&'a fuse_read_in),
    Write(&'a fuse_write_in, &'a [u8]),
    StatFs,
    Release(&'a fuse_release_in),
    FSync(&'a fuse_fsync_in),
    SetXAttr(&'a fuse_setxattr_in, &'a OsStr, &'a [u8]),
    GetXAttr(&'a fuse_getxattr_in, &'a OsStr),
    ListXAttr(&'a fuse_getxattr_in),
    RemoveXAttr(&'a OsStr),
    Flush(&'a fuse_flush_in),
    Init(&'a fuse_init_in),
    OpenDir(&'a fuse_open_in),
    ReadDir(&'a fuse_read_in),
    ReleaseDir(&'a fuse_release_in),
    FSyncDir(&'a fuse_fsync_in),
    GetLk(&'a fuse_lk_in),
    SetLk(&'a fuse_lk_in),
    SetLkW(&'a fuse_lk_in),
    Access(&'a fuse_access_in),
    Create(&'a fuse_create_in, &'a OsStr),
    Interrupt(&'a fuse_interrupt_in),
    BMap(&'a fuse_bmap_in),
    Destroy,
    // IoCtl(...),                  // TODO: FUSE_IOCTL since ABI 7.11
    // Poll(...),                   // TODO: FUSE_POLL since ABI 7.11
    // NotifyReply(...),            // TODO: FUSE_NOTIFY_REPLY since ABI 7.15
    // BatchForget(...),            // TODO: FUSE_BATCH_FORGET since ABI 7.16
    // FAllocate(...),              // TODO: FUSE_FALLOCATE since ABI 7.19

    #[cfg(target_os = "macos")]
    SetVolName(&'a OsStr),
    #[cfg(target_os = "macos")]
    GetXTimes,
    #[cfg(target_os = "macos")]
    Exchange(&'a fuse_exchange_in, &'a OsStr, &'a OsStr),

    // CuseInit(...),               // TODO: CUSE_INIT since ABI 7.12
}

impl<'a> Operation<'a> {
    fn parse(opcode: &fuse_opcode, data: &mut ArgumentIterator<'a>) -> Option<Self> {
        unsafe {
            Some(match opcode {
                fuse_opcode::FUSE_LOOKUP => Operation::Lookup(data.fetch_str()?),
                fuse_opcode::FUSE_FORGET => Operation::Forget(data.fetch()?),
                fuse_opcode::FUSE_GETATTR => Operation::GetAttr,
                fuse_opcode::FUSE_SETATTR => Operation::SetAttr(data.fetch()?),
                fuse_opcode::FUSE_READLINK => Operation::ReadLink,
                fuse_opcode::FUSE_SYMLINK => Operation::SymLink(data.fetch_str()?, data.fetch_str()?),
                fuse_opcode::FUSE_MKNOD => Operation::MkNod(data.fetch()?, data.fetch_str()?),
                fuse_opcode::FUSE_MKDIR => Operation::MkDir(data.fetch()?, data.fetch_str()?),
                fuse_opcode::FUSE_UNLINK => Operation::Unlink(data.fetch_str()?),
                fuse_opcode::FUSE_RMDIR => Operation::RmDir(data.fetch_str()?),
                fuse_opcode::FUSE_RENAME => Operation::Rename(data.fetch()?, data.fetch_str()?, data.fetch_str()?),
                fuse_opcode::FUSE_LINK => Operation::Link(data.fetch()?, data.fetch_str()?),
                fuse_opcode::FUSE_OPEN => Operation::Open(data.fetch()?),
                fuse_opcode::FUSE_READ => Operation::Read(data.fetch()?),
                fuse_opcode::FUSE_WRITE => Operation::Write(data.fetch()?, data.fetch_all()),
                fuse_opcode::FUSE_STATFS => Operation::StatFs,
                fuse_opcode::FUSE_RELEASE => Operation::Release(data.fetch()?),
                fuse_opcode::FUSE_FSYNC => Operation::FSync(data.fetch()?),
                fuse_opcode::FUSE_SETXATTR => Operation::SetXAttr(data.fetch()?, data.fetch_str()?, data.fetch_all()),
                fuse_opcode::FUSE_GETXATTR => Operation::GetXAttr(data.fetch()?, data.fetch_str()?),
                fuse_opcode::FUSE_LISTXATTR => Operation::ListXAttr(data.fetch()?),
                fuse_opcode::FUSE_REMOVEXATTR => Operation::RemoveXAttr(data.fetch_str()?),
                fuse_opcode::FUSE_FLUSH => Operation::Flush(data.fetch()?),
                fuse_opcode::FUSE_INIT => Operation::Init(data.fetch()?),
                fuse_opcode::FUSE_OPENDIR => Operation::OpenDir(data.fetch()?),
                fuse_opcode::FUSE_READDIR => Operation::ReadDir(data.fetch()?),
                fuse_opcode::FUSE_RELEASEDIR => Operation::ReleaseDir(data.fetch()?),
                fuse_opcode::FUSE_FSYNCDIR => Operation::FSyncDir(data.fetch()?),
                fuse_opcode::FUSE_GETLK => Operation::GetLk(data.fetch()?),
                fuse_opcode::FUSE_SETLK => Operation::SetLk(data.fetch()?),
                fuse_opcode::FUSE_SETLKW => Operation::SetLkW(data.fetch()?),
                fuse_opcode::FUSE_ACCESS => Operation::Access(data.fetch()?),
                fuse_opcode::FUSE_CREATE => Operation::Create(data.fetch()?, data.fetch_str()?),
                fuse_opcode::FUSE_INTERRUPT => Operation::Interrupt(data.fetch()?),
                fuse_opcode::FUSE_BMAP => Operation::BMap(data.fetch()?),
                fuse_opcode::FUSE_DESTROY => Operation::Destroy,

                #[cfg(target_os = "macos")]
                fuse_opcode::FUSE_SETVOLNAME => Operation::SetVolName(data.fetch_str()?),
                #[cfg(target_os = "macos")]
                fuse_opcode::FUSE_GETXTIMES => Operation::GetXTimes,
                #[cfg(target_os = "macos")]
                fuse_opcode::FUSE_EXCHANGE => Operation::Exchange(data.fetch()?, data.fetch_str()?, data.fetch_str()?),
            })
        }
    }
}


/// Low-level request of a filesystem operation the kernel driver wants to perform.
#[derive(Debug)]
pub struct Request<'a> {
    pub header: &'a fuse_in_header,
    pub operation: Operation<'a>,
}

impl<'a> fmt::Display for Request<'a> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self.operation {
            Operation::Lookup(name) => write!(f, "LOOKUP({}) parent {:#018x}, name {:?}", self.header.unique, self.header.nodeid, name),
            Operation::Forget(arg) => write!(f, "FORGET({}) ino {:#018x}, nlookup {}", self.header.unique, self.header.nodeid, arg.nlookup),
            Operation::GetAttr => write!(f, "GETATTR({}) ino {:#018x}", self.header.unique, self.header.nodeid),
            Operation::SetAttr(arg) => write!(f, "SETATTR({}) ino {:#018x}, valid {:#x}", self.header.unique, self.header.nodeid, arg.valid),
            Operation::ReadLink => write!(f, "READLINK({}) ino {:#018x}", self.header.unique, self.header.nodeid),
            Operation::SymLink(name, link) => write!(f, "SYMLINK({}) parent {:#018x}, name {:?}, link {:?}", self.header.unique, self.header.nodeid, name, link),
            Operation::MkNod(arg, name) => write!(f, "MKNOD({}) parent {:#018x}, name {:?}, mode {:#05o}, rdev {}", self.header.unique, self.header.nodeid, name, arg.mode, arg.rdev),
            Operation::MkDir(arg, name) => write!(f, "MKDIR({}) parent {:#018x}, name {:?}, mode {:#05o}", self.header.unique, self.header.nodeid, name, arg.mode),
            Operation::Unlink(name) => write!(f, "UNLINK({}) parent {:#018x}, name {:?}", self.header.unique, self.header.nodeid, name),
            Operation::RmDir(name) => write!(f, "RMDIR({}) parent {:#018x}, name {:?}", self.header.unique, self.header.nodeid, name),
            Operation::Rename(arg, name, newname) => write!(f, "RENAME({}) parent {:#018x}, name {:?}, newparent {:#018x}, newname {:?}", self.header.unique, self.header.nodeid, name, arg.newdir, newname),
            Operation::Link(arg, newname) => write!(f, "LINK({}) ino {:#018x}, newparent {:#018x}, newname {:?}", self.header.unique, arg.oldnodeid, self.header.nodeid, newname),
            Operation::Open(arg) => write!(f, "OPEN({}) ino {:#018x}, flags {:#x}", self.header.unique, self.header.nodeid, arg.flags),
            Operation::Read(arg) => write!(f, "READ({}) ino {:#018x}, fh {}, offset {}, size {}", self.header.unique, self.header.nodeid, arg.fh, arg.offset, arg.size),
            Operation::Write(arg, _data) => write!(f, "WRITE({}) ino {:#018x}, fh {}, offset {}, size {}, flags {:#x}", self.header.unique, self.header.nodeid, arg.fh, arg.offset, arg.size, arg.write_flags),
            Operation::StatFs => write!(f, "STATFS({}) ino {:#018x}", self.header.unique, self.header.nodeid),
            Operation::Release(arg) => write!(f, "RELEASE({}) ino {:#018x}, fh {}, flags {:#x}, release flags {:#x}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.flags, arg.release_flags, arg.lock_owner),
            Operation::FSync(arg) => write!(f, "FSYNC({}) ino {:#018x}, fh {}, flags {:#x}", self.header.unique, self.header.nodeid, arg.fh, arg.fsync_flags),
            Operation::SetXAttr(arg, name, _value) => write!(f, "SETXATTR({}) ino {:#018x}, name {:?}, size {}, flags {:#x}", self.header.unique, self.header.nodeid, name, arg.size, arg.flags),
            Operation::GetXAttr(arg, name) => write!(f, "GETXATTR({}) ino {:#018x}, name {:?}, size {}", self.header.unique, self.header.nodeid, name, arg.size),
            Operation::ListXAttr(arg) => write!(f, "LISTXATTR({}) ino {:#018x}, size {}", self.header.unique, self.header.nodeid, arg.size),
            Operation::RemoveXAttr(name) => write!(f, "REMOVEXATTR({}) ino {:#018x}, name {:?}", self.header.unique, self.header.nodeid, name),
            Operation::Flush(arg) => write!(f, "FLUSH({}) ino {:#018x}, fh {}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.lock_owner),
            Operation::Init(arg) => write!(f, "INIT({}) kernel ABI {}.{}, flags {:#x}, max readahead {}", self.header.unique, arg.major, arg.minor, arg.flags, arg.max_readahead),
            Operation::OpenDir(arg) => write!(f, "OPENDIR({}) ino {:#018x}, flags {:#x}", self.header.unique, self.header.nodeid, arg.flags),
            Operation::ReadDir(arg) => write!(f, "READDIR({}) ino {:#018x}, fh {}, offset {}, size {}", self.header.unique, self.header.nodeid, arg.fh, arg.offset, arg.size),
            Operation::ReleaseDir(arg) => write!(f, "RELEASEDIR({}) ino {:#018x}, fh {}, flags {:#x}, release flags {:#x}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.flags, arg.release_flags, arg.lock_owner),
            Operation::FSyncDir(arg) => write!(f, "FSYNCDIR({}) ino {:#018x}, fh {}, flags {:#x}", self.header.unique, self.header.nodeid, arg.fh, arg.fsync_flags),
            Operation::GetLk(arg) => write!(f, "GETLK({}) ino {:#018x}, fh {}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.owner),
            Operation::SetLk(arg) => write!(f, "SETLK({}) ino {:#018x}, fh {}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.owner),
            Operation::SetLkW(arg) => write!(f, "SETLKW({}) ino {:#018x}, fh {}, lock owner {}", self.header.unique, self.header.nodeid, arg.fh, arg.owner),
            Operation::Access(arg) => write!(f, "ACCESS({}) ino {:#018x}, mask {:#05o}", self.header.unique, self.header.nodeid, arg.mask),
            Operation::Create(arg, name) => write!(f, "CREATE({}) parent {:#018x}, name {:?}, mode {:#05o}, flags {:#x}", self.header.unique, self.header.nodeid, name, arg.mode, arg.flags),
            Operation::Interrupt(arg) => write!(f, "INTERRUPT({}) unique {}", self.header.unique, arg.unique),
            Operation::BMap(arg) => write!(f, "BMAP({}) ino {:#018x}, blocksize {}, ids {}", self.header.unique, self.header.nodeid, arg.blocksize, arg.block),
            Operation::Destroy => write!(f, "DESTROY({})", self.header.unique),

            #[cfg(target_os = "macos")]
            Operation::SetVolName(name) => write!(f, "SETVOLNAME({}) name {:?}", self.header.unique, name),
            #[cfg(target_os = "macos")]
            Operation::GetXTimes => write!(f, "GETXTIMES({}) ino {:#018x}", self.header.unique, self.header.nodeid),
            #[cfg(target_os = "macos")]
            Operation::Exchange(arg, oldname, newname) => write!(f, "EXCHANGE({}) parent {:#018x}, name {:?}, newparent {:#018x}, newname {:?}, options {:#x}", self.header.unique, arg.olddir, oldname, arg.newdir, newname, arg.options),
        }
    }
}

impl<'a> TryFrom<&'a [u8]> for Request<'a> {
    type Error = RequestError;

    fn try_from(data: &'a [u8]) -> Result<Self, Self::Error> {
        // Parse a raw packet as sent by the kernel driver into typed data. Every request always
        // begins with a `fuse_in_header` struct followed by arguments depending on the opcode.
        let data_len = data.len();
        let mut data = ArgumentIterator::new(data);
        // Parse header
        let header: &fuse_in_header = unsafe { data.fetch() }
            .ok_or_else(|| RequestError::ShortReadHeader(data.len()))?;
        // Parse/check opcode
        let opcode = fuse_opcode::try_from(header.opcode)
            .map_err(|_: InvalidOpcodeError| RequestError::UnknownOperation(header.opcode))?;
        // Check data size
        if data_len < header.len as usize {
            return Err(RequestError::ShortRead(data_len, header.len as usize));
        }
        // Parse/check operation arguments
        let operation = Operation::parse(&opcode, &mut data)
            .ok_or_else(|| RequestError::InsufficientData)?;
        Ok(Self { header, operation })
    }
}


#[cfg(test)]
mod tests {
    use super::*;

    #[cfg(target_endian = "big")]
    const INIT_REQUEST: [u8; 56] = [
        0x00, 0x00, 0x00, 0x38, 0x00, 0x00, 0x00, 0x1a, // len, opcode
        0xde, 0xad, 0xbe, 0xef, 0xba, 0xad, 0xd0, 0x0d, // unique
        0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88, // nodeid
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // uid, gid
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pid, padding
        0x00, 0x00, 0x00, 0x07, 0x00, 0x00, 0x00, 0x08, // major, minor
        0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, // max_readahead, flags
    ];

    #[cfg(target_endian = "little")]
    const INIT_REQUEST: [u8; 56] = [
        0x38, 0x00, 0x00, 0x00, 0x1a, 0x00, 0x00, 0x00, // len, opcode
        0x0d, 0xf0, 0xad, 0xba, 0xef, 0xbe, 0xad, 0xde, // unique
        0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11, // nodeid
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // uid, gid
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pid, padding
        0x07, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, // major, minor
        0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // max_readahead, flags
    ];

    #[cfg(target_endian = "big")]
    const MKNOD_REQUEST: [u8; 56] = [
        0x00, 0x00, 0x00, 0x38, 0x00, 0x00, 0x00, 0x08, // len, opcode
        0xde, 0xad, 0xbe, 0xef, 0xba, 0xad, 0xd0, 0x0d, // unique
        0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88, // nodeid
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // uid, gid
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pid, padding
        0x00, 0x00, 0x01, 0xa4, 0x00, 0x00, 0x00, 0x00, // mode, rdev
        0x66, 0x6f, 0x6f, 0x2e, 0x74, 0x78, 0x74, 0x00, // name
    ];

    #[cfg(target_endian = "little")]
    const MKNOD_REQUEST: [u8; 56] = [
        0x38, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, // len, opcode
        0x0d, 0xf0, 0xad, 0xba, 0xef, 0xbe, 0xad, 0xde, // unique
        0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11, // nodeid
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // uid, gid
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // pid, padding
        0xa4, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // mode, rdev
        0x66, 0x6f, 0x6f, 0x2e, 0x74, 0x78, 0x74, 0x00, // name
    ];

    #[test]
    fn short_read_header() {
        match Request::try_from(&INIT_REQUEST[..20]) {
            Err(RequestError::ShortReadHeader(20)) => (),
            _ => panic!("Unexpected request parsing result"),
        }
    }

    #[test]
    fn short_read() {
        match Request::try_from(&INIT_REQUEST[..48]) {
            Err(RequestError::ShortRead(48, 56)) => (),
            _ => panic!("Unexpected request parsing result"),
        }
    }

    #[test]
    fn init() {
        let req = Request::try_from(&INIT_REQUEST[..]).unwrap();
        assert_eq!(req.header.len, 56);
        assert_eq!(req.header.opcode, 26);
        assert_eq!(req.header.unique, 0xdead_beef_baad_f00d);
        assert_eq!(req.header.nodeid, 0x1122_3344_5566_7788);
        match req.operation {
            Operation::Init(arg) => {
                assert_eq!(arg.major, 7);
                assert_eq!(arg.minor, 8);
                assert_eq!(arg.max_readahead, 4096);
            }
            _ => panic!("Unexpected request operation"),
        }
    }

    #[test]
    fn mknod() {
        let req = Request::try_from(&MKNOD_REQUEST[..]).unwrap();
        assert_eq!(req.header.len, 56);
        assert_eq!(req.header.opcode, 8);
        assert_eq!(req.header.unique, 0xdead_beef_baad_f00d);
        assert_eq!(req.header.nodeid, 0x1122_3344_5566_7788);
        match req.operation {
            Operation::MkNod(arg, name) => {
                assert_eq!(arg.mode, 0o644);
                assert_eq!(name, "foo.txt");
            }
            _ => panic!("Unexpected request operation"),
        }
    }
}
