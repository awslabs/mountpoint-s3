//! Low-level filesystem operation request.
//!
//! A request represents information about a filesystem operation the kernel driver wants us to
//! perform.

use crate::fuse_abi::*;
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
            RequestError::ShortReadHeader(len) => write!(
                f,
                "Short read of FUSE request header ({} < {})",
                len,
                mem::size_of::<fuse_in_header>()
            ),
            RequestError::UnknownOperation(opcode) => write!(f, "Unknown FUSE opcode ({})", opcode),
            RequestError::ShortRead(len, total) => {
                write!(f, "Short read of FUSE request ({} < {})", len, total)
            }
            RequestError::InsufficientData => write!(f, "Insufficient argument data"),
        }
    }
}

impl error::Error for RequestError {}

/// Filesystem operation (and arguments) the kernel driver wants us to perform. The fields of each
/// variant needs to match the actual arguments the kernel driver sends for the specific operation.
#[derive(Debug)]
pub enum Operation<'a> {
    Lookup {
        name: &'a OsStr,
    },
    Forget {
        arg: &'a fuse_forget_in,
    },
    GetAttr,
    SetAttr {
        arg: &'a fuse_setattr_in,
    },
    ReadLink,
    SymLink {
        name: &'a OsStr,
        link: &'a OsStr,
    },
    MkNod {
        arg: &'a fuse_mknod_in,
        name: &'a OsStr,
    },
    MkDir {
        arg: &'a fuse_mkdir_in,
        name: &'a OsStr,
    },
    Unlink {
        name: &'a OsStr,
    },
    RmDir {
        name: &'a OsStr,
    },
    Rename {
        arg: &'a fuse_rename_in,
        name: &'a OsStr,
        newname: &'a OsStr,
    },
    Link {
        arg: &'a fuse_link_in,
        name: &'a OsStr,
    },
    Open {
        arg: &'a fuse_open_in,
    },
    Read {
        arg: &'a fuse_read_in,
    },
    Write {
        arg: &'a fuse_write_in,
        data: &'a [u8],
    },
    StatFs,
    Release {
        arg: &'a fuse_release_in,
    },
    FSync {
        arg: &'a fuse_fsync_in,
    },
    SetXAttr {
        arg: &'a fuse_setxattr_in,
        name: &'a OsStr,
        value: &'a [u8],
    },
    GetXAttr {
        arg: &'a fuse_getxattr_in,
        name: &'a OsStr,
    },
    ListXAttr {
        arg: &'a fuse_getxattr_in,
    },
    RemoveXAttr {
        name: &'a OsStr,
    },
    Flush {
        arg: &'a fuse_flush_in,
    },
    Init {
        arg: &'a fuse_init_in,
    },
    OpenDir {
        arg: &'a fuse_open_in,
    },
    ReadDir {
        arg: &'a fuse_read_in,
    },
    ReleaseDir {
        arg: &'a fuse_release_in,
    },
    FSyncDir {
        arg: &'a fuse_fsync_in,
    },
    GetLk {
        arg: &'a fuse_lk_in,
    },
    SetLk {
        arg: &'a fuse_lk_in,
    },
    SetLkW {
        arg: &'a fuse_lk_in,
    },
    Access {
        arg: &'a fuse_access_in,
    },
    Create {
        arg: &'a fuse_create_in,
        name: &'a OsStr,
    },
    Interrupt {
        arg: &'a fuse_interrupt_in,
    },
    BMap {
        arg: &'a fuse_bmap_in,
    },
    Destroy,
    #[cfg(feature = "abi-7-11")]
    IoCtl {
        arg: &'a fuse_ioctl_in,
        data: &'a [u8],
    },
    #[cfg(feature = "abi-7-11")]
    Poll {
        arg: &'a fuse_poll_in,
    },
    #[cfg(feature = "abi-7-15")]
    NotifyReply {
        data: &'a [u8],
    },
    #[cfg(feature = "abi-7-16")]
    BatchForget {
        arg: &'a fuse_forget_in,
        nodes: &'a [fuse_forget_one],
    },
    #[cfg(feature = "abi-7-19")]
    FAllocate {
        arg: &'a fuse_fallocate_in,
    },
    #[cfg(feature = "abi-7-21")]
    ReadDirPlus {
        arg: &'a fuse_read_in,
    },
    #[cfg(feature = "abi-7-23")]
    Rename2 {
        arg: &'a fuse_rename2_in,
        name: &'a OsStr,
        newname: &'a OsStr,
    },
    #[cfg(feature = "abi-7-24")]
    Lseek {
        arg: &'a fuse_lseek_in,
    },
    #[cfg(feature = "abi-7-28")]
    CopyFileRange {
        arg: &'a fuse_copy_file_range_in,
    },

    #[cfg(target_os = "macos")]
    SetVolName {
        name: &'a OsStr,
    },
    #[cfg(target_os = "macos")]
    GetXTimes,
    #[cfg(target_os = "macos")]
    Exchange {
        arg: &'a fuse_exchange_in,
        oldname: &'a OsStr,
        newname: &'a OsStr,
    },

    #[cfg(feature = "abi-7-12")]
    CuseInit {
        arg: &'a fuse_init_in,
    },
}

impl<'a> fmt::Display for Operation<'a> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Operation::Lookup { name } => write!(f, "LOOKUP name {:?}", name),
            Operation::Forget { arg } => write!(f, "FORGET nlookup {}", arg.nlookup),
            Operation::GetAttr => write!(f, "GETATTR"),
            Operation::SetAttr { arg } => write!(f, "SETATTR valid {:#x}", arg.valid),
            Operation::ReadLink => write!(f, "READLINK"),
            Operation::SymLink { name, link } => write!(f, "SYMLINK name {:?}, link {:?}", name, link),
            Operation::MkNod { arg, name } => write!(f, "MKNOD name {:?}, mode {:#05o}, rdev {}", name, arg.mode, arg.rdev),
            Operation::MkDir { arg, name } => write!(f, "MKDIR name {:?}, mode {:#05o}", name, arg.mode),
            Operation::Unlink { name } => write!(f, "UNLINK name {:?}", name),
            Operation::RmDir { name } => write!(f, "RMDIR name {:?}", name),
            Operation::Rename { arg, name, newname } => write!(f, "RENAME name {:?}, newdir {:#018x}, newname {:?}", name, arg.newdir, newname),
            Operation::Link { arg, name } => write!(f, "LINK name {:?}, oldnodeid {:#018x}", name, arg.oldnodeid),
            Operation::Open { arg } => write!(f, "OPEN flags {:#x}", arg.flags),
            Operation::Read { arg } => write!(f, "READ fh {}, offset {}, size {}", arg.fh, arg.offset, arg.size),
            Operation::Write { arg, .. } => write!(f, "WRITE fh {}, offset {}, size {}, write flags {:#x}", arg.fh, arg.offset, arg.size, arg.write_flags),
            Operation::StatFs => write!(f, "STATFS"),
            Operation::Release { arg } => write!(f, "RELEASE fh {}, flags {:#x}, release flags {:#x}, lock owner {}", arg.fh, arg.flags, arg.release_flags, arg.lock_owner),
            Operation::FSync { arg } => write!(f, "FSYNC fh {}, fsync flags {:#x}", arg.fh, arg.fsync_flags),
            Operation::SetXAttr { arg, name, .. } => write!(f, "SETXATTR name {:?}, size {}, flags {:#x}", name, arg.size, arg.flags),
            Operation::GetXAttr { arg, name } => write!(f, "GETXATTR name {:?}, size {}", name, arg.size),
            Operation::ListXAttr { arg } => write!(f, "LISTXATTR size {}", arg.size),
            Operation::RemoveXAttr { name } => write!(f, "REMOVEXATTR name {:?}", name),
            Operation::Flush { arg } => write!(f, "FLUSH fh {}, lock owner {}", arg.fh, arg.lock_owner),
            Operation::Init { arg } => write!(f, "INIT kernel ABI {}.{}, flags {:#x}, max readahead {}", arg.major, arg.minor, arg.flags, arg.max_readahead),
            Operation::OpenDir { arg } => write!(f, "OPENDIR flags {:#x}", arg.flags),
            Operation::ReadDir { arg } => write!(f, "READDIR fh {}, offset {}, size {}", arg.fh, arg.offset, arg.size),
            Operation::ReleaseDir { arg } => write!(f, "RELEASEDIR fh {}, flags {:#x}, release flags {:#x}, lock owner {}", arg.fh, arg.flags, arg.release_flags, arg.lock_owner),
            Operation::FSyncDir { arg } => write!(f, "FSYNCDIR fh {}, fsync flags {:#x}", arg.fh, arg.fsync_flags),
            Operation::GetLk { arg } => write!(f, "GETLK fh {}, lock owner {}", arg.fh, arg.owner),
            Operation::SetLk { arg } => write!(f, "SETLK fh {}, lock owner {}", arg.fh, arg.owner),
            Operation::SetLkW { arg } => write!(f, "SETLKW fh {}, lock owner {}", arg.fh, arg.owner),
            Operation::Access { arg } => write!(f, "ACCESS mask {:#05o}", arg.mask),
            Operation::Create { arg, name } => write!(f, "CREATE name {:?}, mode {:#05o}, flags {:#x}", name, arg.mode, arg.flags),
            Operation::Interrupt { arg } => write!(f, "INTERRUPT unique {}", arg.unique),
            Operation::BMap { arg } => write!(f, "BMAP blocksize {}, ids {}", arg.blocksize, arg.block),
            Operation::Destroy => write!(f, "DESTROY"),
            #[cfg(feature = "abi-7-11")]
            Operation::IoCtl { arg, data} => write!(f, "IOCTL fh {}, cmd {}, data size {}, flags {:#x}", arg.fh, arg.cmd, data.len(), arg.flags),
            #[cfg(feature = "abi-7-11")]
            Operation::Poll { arg } => write!(f, "POLL fh {}, flags {:#x}", arg.fh, arg.flags),
            #[cfg(feature = "abi-7-15")]
            Operation::NotifyReply { data } => write!(f, "NOTIFYREPLY data len {}", data.len()),
            #[cfg(feature = "abi-7-16")]
            Operation::BatchForget { arg, nodes } => write!(f, "BATCHFORGET nodes {}, nlookup {}", nodes.len(), arg.nlookup),
            #[cfg(feature = "abi-7-19")]
            Operation::FAllocate { arg: _ } => write!(f, "FALLOCATE"),
            #[cfg(feature = "abi-7-21")]
            Operation::ReadDirPlus { arg } => write!(f, "READDIRPLUS fh {}, offset {}, size {}", arg.fh, arg.offset, arg.size),
            #[cfg(feature = "abi-7-23")]
            Operation::Rename2 { arg, name, newname } => write!(f, "RENAME2 name {:?}, newdir {:#018x}, newname {:?}", name, arg.newdir, newname),
            #[cfg(feature = "abi-7-24")]
            Operation::Lseek { arg } => write!(f, "LSEEK fh {}, offset {}, whence {}", arg.fh, arg.offset, arg.whence),
            #[cfg(feature = "abi-7-28")]
            Operation::CopyFileRange { arg } => write!(f, "COPY_FILE_RANGE fh_in {}, offset_in {}, fh_out {}, offset_out {}, inode_out {}, len {}", arg.fh_in, arg.off_in, arg.fh_out, arg.off_out, arg.nodeid_out, arg.len),

            #[cfg(target_os = "macos")]
            Operation::SetVolName { name } => write!(f, "SETVOLNAME name {:?}", name),
            #[cfg(target_os = "macos")]
            Operation::GetXTimes => write!(f, "GETXTIMES"),
            #[cfg(target_os = "macos")]
            Operation::Exchange { arg, oldname, newname } => write!(f, "EXCHANGE olddir {:#018x}, oldname {:?}, newdir {:#018x}, newname {:?}, options {:#x}", arg.olddir, oldname, arg.newdir, newname, arg.options),

            #[cfg(feature = "abi-7-12")]
            Operation::CuseInit { arg } => write!(f, "CUSE_INIT kernel ABI {}.{}, flags {:#x}, max readahead {}", arg.major, arg.minor, arg.flags, arg.max_readahead),
        }
    }
}

impl<'a> Operation<'a> {
    fn parse(opcode: &fuse_opcode, data: &mut ArgumentIterator<'a>) -> Option<Self> {
        unsafe {
            Some(match opcode {
                fuse_opcode::FUSE_LOOKUP => Operation::Lookup {
                    name: data.fetch_str()?,
                },
                fuse_opcode::FUSE_FORGET => Operation::Forget { arg: data.fetch()? },
                fuse_opcode::FUSE_GETATTR => Operation::GetAttr,
                fuse_opcode::FUSE_SETATTR => Operation::SetAttr { arg: data.fetch()? },
                fuse_opcode::FUSE_READLINK => Operation::ReadLink,
                fuse_opcode::FUSE_SYMLINK => Operation::SymLink {
                    name: data.fetch_str()?,
                    link: data.fetch_str()?,
                },
                fuse_opcode::FUSE_MKNOD => Operation::MkNod {
                    arg: data.fetch()?,
                    name: data.fetch_str()?,
                },
                fuse_opcode::FUSE_MKDIR => Operation::MkDir {
                    arg: data.fetch()?,
                    name: data.fetch_str()?,
                },
                fuse_opcode::FUSE_UNLINK => Operation::Unlink {
                    name: data.fetch_str()?,
                },
                fuse_opcode::FUSE_RMDIR => Operation::RmDir {
                    name: data.fetch_str()?,
                },
                fuse_opcode::FUSE_RENAME => Operation::Rename {
                    arg: data.fetch()?,
                    name: data.fetch_str()?,
                    newname: data.fetch_str()?,
                },
                fuse_opcode::FUSE_LINK => Operation::Link {
                    arg: data.fetch()?,
                    name: data.fetch_str()?,
                },
                fuse_opcode::FUSE_OPEN => Operation::Open { arg: data.fetch()? },
                fuse_opcode::FUSE_READ => Operation::Read { arg: data.fetch()? },
                fuse_opcode::FUSE_WRITE => Operation::Write {
                    arg: data.fetch()?,
                    data: data.fetch_all(),
                },
                fuse_opcode::FUSE_STATFS => Operation::StatFs,
                fuse_opcode::FUSE_RELEASE => Operation::Release { arg: data.fetch()? },
                fuse_opcode::FUSE_FSYNC => Operation::FSync { arg: data.fetch()? },
                fuse_opcode::FUSE_SETXATTR => Operation::SetXAttr {
                    arg: data.fetch()?,
                    name: data.fetch_str()?,
                    value: data.fetch_all(),
                },
                fuse_opcode::FUSE_GETXATTR => Operation::GetXAttr {
                    arg: data.fetch()?,
                    name: data.fetch_str()?,
                },
                fuse_opcode::FUSE_LISTXATTR => Operation::ListXAttr { arg: data.fetch()? },
                fuse_opcode::FUSE_REMOVEXATTR => Operation::RemoveXAttr {
                    name: data.fetch_str()?,
                },
                fuse_opcode::FUSE_FLUSH => Operation::Flush { arg: data.fetch()? },
                fuse_opcode::FUSE_INIT => Operation::Init { arg: data.fetch()? },
                fuse_opcode::FUSE_OPENDIR => Operation::OpenDir { arg: data.fetch()? },
                fuse_opcode::FUSE_READDIR => Operation::ReadDir { arg: data.fetch()? },
                fuse_opcode::FUSE_RELEASEDIR => Operation::ReleaseDir { arg: data.fetch()? },
                fuse_opcode::FUSE_FSYNCDIR => Operation::FSyncDir { arg: data.fetch()? },
                fuse_opcode::FUSE_GETLK => Operation::GetLk { arg: data.fetch()? },
                fuse_opcode::FUSE_SETLK => Operation::SetLk { arg: data.fetch()? },
                fuse_opcode::FUSE_SETLKW => Operation::SetLkW { arg: data.fetch()? },
                fuse_opcode::FUSE_ACCESS => Operation::Access { arg: data.fetch()? },
                fuse_opcode::FUSE_CREATE => Operation::Create {
                    arg: data.fetch()?,
                    name: data.fetch_str()?,
                },
                fuse_opcode::FUSE_INTERRUPT => Operation::Interrupt { arg: data.fetch()? },
                fuse_opcode::FUSE_BMAP => Operation::BMap { arg: data.fetch()? },
                fuse_opcode::FUSE_DESTROY => Operation::Destroy,
                #[cfg(feature = "abi-7-11")]
                fuse_opcode::FUSE_IOCTL => Operation::IoCtl {
                    arg: data.fetch()?,
                    data: data.fetch_all(),
                },
                #[cfg(feature = "abi-7-11")]
                fuse_opcode::FUSE_POLL => Operation::Poll { arg: data.fetch()? },
                #[cfg(feature = "abi-7-15")]
                fuse_opcode::FUSE_NOTIFY_REPLY => Operation::NotifyReply {
                    data: data.fetch_all(),
                },
                #[cfg(feature = "abi-7-16")]
                // TODO: parse the nodes
                fuse_opcode::FUSE_BATCH_FORGET => Operation::BatchForget {
                    arg: data.fetch()?,
                    nodes: &[],
                },
                #[cfg(feature = "abi-7-19")]
                fuse_opcode::FUSE_FALLOCATE => Operation::FAllocate { arg: data.fetch()? },
                #[cfg(feature = "abi-7-21")]
                fuse_opcode::FUSE_READDIRPLUS => Operation::ReadDirPlus { arg: data.fetch()? },
                #[cfg(feature = "abi-7-23")]
                fuse_opcode::FUSE_RENAME2 => Operation::Rename2 {
                    arg: data.fetch()?,
                    name: data.fetch_str()?,
                    newname: data.fetch_str()?,
                },
                #[cfg(feature = "abi-7-24")]
                fuse_opcode::FUSE_LSEEK => Operation::Lseek { arg: data.fetch()? },
                #[cfg(feature = "abi-7-28")]
                fuse_opcode::FUSE_COPY_FILE_RANGE => {
                    Operation::CopyFileRange { arg: data.fetch()? }
                }

                #[cfg(target_os = "macos")]
                fuse_opcode::FUSE_SETVOLNAME => Operation::SetVolName {
                    name: data.fetch_str()?,
                },
                #[cfg(target_os = "macos")]
                fuse_opcode::FUSE_GETXTIMES => Operation::GetXTimes,
                #[cfg(target_os = "macos")]
                fuse_opcode::FUSE_EXCHANGE => Operation::Exchange {
                    arg: data.fetch()?,
                    oldname: data.fetch_str()?,
                    newname: data.fetch_str()?,
                },

                #[cfg(feature = "abi-7-12")]
                fuse_opcode::CUSE_INIT => Operation::CuseInit { arg: data.fetch()? },
            })
        }
    }
}

/// Low-level request of a filesystem operation the kernel driver wants to perform.
#[derive(Debug)]
pub struct Request<'a> {
    header: &'a fuse_in_header,
    operation: Operation<'a>,
}

impl<'a> fmt::Display for Request<'a> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "FUSE({:3}) ino {:#018x}: {}",
            self.header.unique, self.header.nodeid, self.operation
        )
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
        let header: &fuse_in_header =
            unsafe { data.fetch() }.ok_or_else(|| RequestError::ShortReadHeader(data.len()))?;
        // Parse/check opcode
        let opcode = fuse_opcode::try_from(header.opcode)
            .map_err(|_: InvalidOpcodeError| RequestError::UnknownOperation(header.opcode))?;
        // Check data size
        if data_len < header.len as usize {
            return Err(RequestError::ShortRead(data_len, header.len as usize));
        }
        // Parse/check operation arguments
        let operation =
            Operation::parse(&opcode, &mut data).ok_or_else(|| RequestError::InsufficientData)?;
        Ok(Self { header, operation })
    }
}

impl<'a> Request<'a> {
    /// Returns the unique identifier of this request.
    ///
    /// The FUSE kernel driver assigns a unique id to every concurrent request. This allows to
    /// distinguish between multiple concurrent requests. The unique id of a request may be
    /// reused in later requests after it has completed.
    #[inline]
    pub fn unique(&self) -> u64 {
        self.header.unique
    }

    /// Returns the node id of the inode this request is targeted to.
    #[inline]
    pub fn nodeid(&self) -> u64 {
        self.header.nodeid
    }

    /// Returns the UID that the process that triggered this request runs under.
    #[inline]
    pub fn uid(&self) -> u32 {
        self.header.uid
    }

    /// Returns the GID that the process that triggered this request runs under.
    #[inline]
    pub fn gid(&self) -> u32 {
        self.header.gid
    }

    /// Returns the PID of the process that triggered this request.
    #[inline]
    pub fn pid(&self) -> u32 {
        self.header.pid
    }

    /// Returns the filesystem operation (and its arguments) of this request.
    #[inline]
    pub fn operation(&self) -> &Operation<'_> {
        &self.operation
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
        0xc0, 0x01, 0xd0, 0x0d, 0xc0, 0x01, 0xca, 0xfe, // uid, gid
        0xc0, 0xde, 0xba, 0x5e, 0x00, 0x00, 0x00, 0x00, // pid, padding
        0x00, 0x00, 0x00, 0x07, 0x00, 0x00, 0x00, 0x08, // major, minor
        0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, // max_readahead, flags
    ];

    #[cfg(target_endian = "little")]
    const INIT_REQUEST: [u8; 56] = [
        0x38, 0x00, 0x00, 0x00, 0x1a, 0x00, 0x00, 0x00, // len, opcode
        0x0d, 0xf0, 0xad, 0xba, 0xef, 0xbe, 0xad, 0xde, // unique
        0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11, // nodeid
        0x0d, 0xd0, 0x01, 0xc0, 0xfe, 0xca, 0x01, 0xc0, // uid, gid
        0x5e, 0xba, 0xde, 0xc0, 0x00, 0x00, 0x00, 0x00, // pid, padding
        0x07, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, // major, minor
        0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // max_readahead, flags
    ];

    #[cfg(target_endian = "big")]
    const MKNOD_REQUEST: [u8; 56] = [
        0x00, 0x00, 0x00, 0x38, 0x00, 0x00, 0x00, 0x08, // len, opcode
        0xde, 0xad, 0xbe, 0xef, 0xba, 0xad, 0xd0, 0x0d, // unique
        0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88, // nodeid
        0xc0, 0x01, 0xd0, 0x0d, 0xc0, 0x01, 0xca, 0xfe, // uid, gid
        0xc0, 0xde, 0xba, 0x5e, 0x00, 0x00, 0x00, 0x00, // pid, padding
        0x00, 0x00, 0x01, 0xa4, 0x00, 0x00, 0x00, 0x00, // mode, rdev
        0x66, 0x6f, 0x6f, 0x2e, 0x74, 0x78, 0x74, 0x00, // name
    ];

    #[cfg(all(target_endian = "little", not(feature = "abi-7-12")))]
    const MKNOD_REQUEST: [u8; 56] = [
        0x38, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, // len, opcode
        0x0d, 0xf0, 0xad, 0xba, 0xef, 0xbe, 0xad, 0xde, // unique
        0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11, // nodeid
        0x0d, 0xd0, 0x01, 0xc0, 0xfe, 0xca, 0x01, 0xc0, // uid, gid
        0x5e, 0xba, 0xde, 0xc0, 0x00, 0x00, 0x00, 0x00, // pid, padding
        0xa4, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // mode, rdev
        0x66, 0x6f, 0x6f, 0x2e, 0x74, 0x78, 0x74, 0x00, // name
    ];

    #[cfg(all(target_endian = "little", feature = "abi-7-12"))]
    const MKNOD_REQUEST: [u8; 64] = [
        0x38, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, // len, opcode
        0x0d, 0xf0, 0xad, 0xba, 0xef, 0xbe, 0xad, 0xde, // unique
        0x88, 0x77, 0x66, 0x55, 0x44, 0x33, 0x22, 0x11, // nodeid
        0x0d, 0xd0, 0x01, 0xc0, 0xfe, 0xca, 0x01, 0xc0, // uid, gid
        0x5e, 0xba, 0xde, 0xc0, 0x00, 0x00, 0x00, 0x00, // pid, padding
        0xa4, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // mode, rdev
        0xed, 0x01, 0x00, 0x00, 0xe7, 0x03, 0x00, 0x00, // umask, padding
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
        assert_eq!(req.unique(), 0xdead_beef_baad_f00d);
        assert_eq!(req.nodeid(), 0x1122_3344_5566_7788);
        assert_eq!(req.uid(), 0xc001_d00d);
        assert_eq!(req.gid(), 0xc001_cafe);
        assert_eq!(req.pid(), 0xc0de_ba5e);
        match req.operation() {
            Operation::Init { arg } => {
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
        assert_eq!(req.unique(), 0xdead_beef_baad_f00d);
        assert_eq!(req.nodeid(), 0x1122_3344_5566_7788);
        assert_eq!(req.uid(), 0xc001_d00d);
        assert_eq!(req.gid(), 0xc001_cafe);
        assert_eq!(req.pid(), 0xc0de_ba5e);
        match req.operation() {
            Operation::MkNod { arg, name } => {
                assert_eq!(arg.mode, 0o644);
                #[cfg(feature = "abi-7-12")]
                assert_eq!(arg.umask, 0o755);
                #[cfg(feature = "abi-7-12")]
                assert_eq!(arg.padding, 999);
                assert_eq!(*name, "foo.txt");
            }
            _ => panic!("Unexpected request operation"),
        }
    }
}
