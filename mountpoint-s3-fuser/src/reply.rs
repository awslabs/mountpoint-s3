//! Filesystem operation reply
//!
//! A reply is passed to filesystem operation implementations and must be used to send back the
//! result of an operation. The reply can optionally be sent to another thread to asynchronously
//! work on an operation and provide the result later. Also it allows replying with a block of
//! data without cloning the data. A reply *must always* be used (by calling either `ok()` or
//! `error()` exactly once).

use std::convert::AsRef;
use std::ffi::OsStr;
use std::io::IoSlice;
use std::os::fd::BorrowedFd;
use std::time::Duration;
#[cfg(target_os = "macos")]
use std::time::SystemTime;

use log::error;
use log::warn;

use crate::Errno;
use crate::FileAttr;
use crate::FileType;
use crate::PollEvents;
use crate::channel::ChannelSender;
use crate::ll::Generation;
use crate::ll::INodeNo;
use crate::ll::flags::fopen_flags::FopenFlags;
use crate::ll::reply::DirEntList;
use crate::ll::reply::DirEntOffset;
use crate::ll::reply::DirEntPlusList;
use crate::ll::reply::DirEntry;
use crate::ll::reply::DirEntryPlus;
use crate::ll::reply::Response;
use crate::ll::{self};
use crate::passthrough::BackingId;

/// Generic reply callback to send data
#[derive(Debug)]
pub(crate) enum ReplySender {
    Channel(ChannelSender),
    #[cfg(test)]
    Assert(AssertSender),
    #[cfg(test)]
    Sync(std::sync::mpsc::SyncSender<()>),
}

impl ReplySender {
    /// Send data.
    pub(crate) fn send(&self, data: &[IoSlice<'_>]) -> std::io::Result<()> {
        match self {
            ReplySender::Channel(sender) => sender.send(data),
            #[cfg(test)]
            ReplySender::Assert(sender) => sender.send(data),
            #[cfg(test)]
            ReplySender::Sync(sender) => {
                sender.send(()).unwrap();
                Ok(())
            }
        }
    }

    /// Open a backing file
    pub(crate) fn open_backing(&self, fd: BorrowedFd<'_>) -> std::io::Result<BackingId> {
        match self {
            ReplySender::Channel(sender) => sender.open_backing(fd),
            #[cfg(test)]
            ReplySender::Assert(_) => unreachable!(),
            #[cfg(test)]
            ReplySender::Sync(_) => unreachable!(),
        }
    }
}

#[cfg(test)]
#[derive(Debug)]
pub(crate) struct AssertSender {
    expected: Vec<u8>,
}

#[cfg(test)]
impl AssertSender {
    fn send(&self, data: &[IoSlice<'_>]) -> std::io::Result<()> {
        let mut v = vec![];
        for x in data {
            v.extend_from_slice(x);
        }
        assert_eq!(self.expected, v);
        Ok(())
    }
}

/// Generic reply trait
pub(crate) trait Reply: Send + 'static {
    /// Create a new reply for the given request
    fn new(unique: ll::RequestId, sender: ReplySender) -> Self;
}

///
/// Raw reply
///
#[derive(Debug)]
pub(crate) struct ReplyRaw {
    /// Unique id of the request to reply to
    unique: ll::RequestId,
    /// Closure to call for sending the reply
    sender: Option<ReplySender>,
}

impl Reply for ReplyRaw {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyRaw {
        ReplyRaw {
            unique,
            sender: Some(sender),
        }
    }
}

impl ReplyRaw {
    /// Reply to a request with the given error code and data. Must be called
    /// only once (the `ok` and `error` methods ensure this by consuming `self`)
    pub(crate) fn send_ll_mut(&mut self, response: &impl Response) {
        assert!(self.sender.is_some());
        let sender = self.sender.take().unwrap();
        let res = response.with_iovec(self.unique, |iov| sender.send(iov));
        if let Err(err) = res {
            error!("Failed to send FUSE reply: {err}");
        }
    }
    pub(crate) fn send_ll(mut self, response: &impl Response) {
        self.send_ll_mut(response);
    }

    /// Reply to a request with the given error code
    pub(crate) fn error(self, err: ll::Errno) {
        self.send_ll(&ll::ResponseErrno(err));
    }
}

impl Drop for ReplyRaw {
    fn drop(&mut self) {
        if self.sender.is_some() {
            warn!(
                "Reply not sent for operation {}, replying with I/O error",
                self.unique.0
            );
            self.send_ll_mut(&ll::ResponseErrno(ll::Errno::EIO));
        }
    }
}

///
/// Empty reply
///
#[derive(Debug)]
pub struct ReplyEmpty {
    reply: ReplyRaw,
}

impl Reply for ReplyEmpty {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyEmpty {
        ReplyEmpty {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyEmpty {
    /// Reply to a request with nothing
    pub fn ok(self) {
        self.reply.send_ll(&ll::ResponseEmpty);
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Data reply
///
#[derive(Debug)]
pub struct ReplyData {
    reply: ReplyRaw,
}

impl Reply for ReplyData {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyData {
        ReplyData {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyData {
    /// Reply to a request with the given data
    pub fn data(self, data: &[u8]) {
        self.reply.send_ll(&ll::ResponseSlice(data));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Entry reply
///
#[derive(Debug)]
pub struct ReplyEntry {
    reply: ReplyRaw,
}

impl Reply for ReplyEntry {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyEntry {
        ReplyEntry {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyEntry {
    /// Reply to a request with the given entry
    pub fn entry(self, ttl: &Duration, attr: &FileAttr, generation: Generation) {
        self.reply.send_ll(&ll::ResponseStruct::new_entry(
            attr.ino,
            generation,
            &attr.into(),
            *ttl,
            *ttl,
        ));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Attribute Reply
///
#[derive(Debug)]
pub struct ReplyAttr {
    reply: ReplyRaw,
}

impl Reply for ReplyAttr {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyAttr {
        ReplyAttr {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyAttr {
    /// Reply to a request with the given attribute
    pub fn attr(self, ttl: &Duration, attr: &FileAttr) {
        self.reply
            .send_ll(&ll::ResponseStruct::new_attr(ttl, &attr.into()));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// XTimes Reply
///
#[cfg(target_os = "macos")]
#[derive(Debug)]
pub struct ReplyXTimes {
    reply: ReplyRaw,
}

#[cfg(target_os = "macos")]
impl Reply for ReplyXTimes {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyXTimes {
        ReplyXTimes {
            reply: Reply::new(unique, sender),
        }
    }
}

#[cfg(target_os = "macos")]
impl ReplyXTimes {
    /// Reply to a request with the given xtimes
    pub fn xtimes(self, bkuptime: SystemTime, crtime: SystemTime) {
        self.reply
            .send_ll(&ll::ResponseStruct::new_xtimes(bkuptime, crtime))
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Open Reply
///
#[derive(Debug)]
pub struct ReplyOpen {
    reply: ReplyRaw,
}

impl Reply for ReplyOpen {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyOpen {
        ReplyOpen {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyOpen {
    /// Reply to a request with the given open result
    /// # Panics
    /// When attempting to use kernel passthrough.
    /// Use [`opened_passthrough()`](Self::opened_passthrough) instead.
    pub fn opened(self, fh: ll::FileHandle, flags: FopenFlags) {
        assert!(!flags.contains(FopenFlags::FOPEN_PASSTHROUGH));
        self.reply
            .send_ll(&ll::ResponseStruct::new_open(fh, flags, 0));
    }

    /// Registers a fd for passthrough, returning a `BackingId`.  Once you have the backing ID,
    /// you can pass it as the 3rd parameter of [`ReplyOpen::opened_passthrough()`]. This is done in
    /// two separate steps because it may make sense to reuse backing IDs (to avoid having to
    /// repeatedly reopen the underlying file or potentially keep thousands of fds open).
    pub fn open_backing(&self, fd: impl std::os::fd::AsFd) -> std::io::Result<BackingId> {
        // TODO: assert passthrough capability is enabled.
        self.reply.sender.as_ref().unwrap().open_backing(fd.as_fd())
    }

    /// Reply to a request with an opened backing id. Call [`ReplyOpen::open_backing()`]
    /// to get one of these.
    pub fn opened_passthrough(self, fh: ll::FileHandle, flags: FopenFlags, backing_id: &BackingId) {
        // TODO: assert passthrough capability is enabled.
        let flags = flags | FopenFlags::FOPEN_PASSTHROUGH;
        self.reply.send_ll(&ll::ResponseStruct::new_open(
            fh,
            flags,
            backing_id.backing_id,
        ));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Write Reply
///
#[derive(Debug)]
pub struct ReplyWrite {
    reply: ReplyRaw,
}

impl Reply for ReplyWrite {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyWrite {
        ReplyWrite {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyWrite {
    /// Reply to a request with the number of bytes written
    pub fn written(self, size: u32) {
        self.reply.send_ll(&ll::ResponseStruct::new_write(size));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Statfs Reply
///
#[derive(Debug)]
pub struct ReplyStatfs {
    reply: ReplyRaw,
}

impl Reply for ReplyStatfs {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyStatfs {
        ReplyStatfs {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyStatfs {
    /// Reply to a statfs request with filesystem information
    #[allow(clippy::too_many_arguments)]
    pub fn statfs(
        self,
        blocks: u64,
        bfree: u64,
        bavail: u64,
        files: u64,
        ffree: u64,
        bsize: u32,
        namelen: u32,
        frsize: u32,
    ) {
        self.reply.send_ll(&ll::ResponseStruct::new_statfs(
            blocks, bfree, bavail, files, ffree, bsize, namelen, frsize,
        ));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Create reply
///
#[derive(Debug)]
pub struct ReplyCreate {
    reply: ReplyRaw,
}

impl Reply for ReplyCreate {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyCreate {
        ReplyCreate {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyCreate {
    /// Reply to a request with a newly created file entry and its newly open file handle
    /// # Panics
    /// When attempting to use kernel passthrough. Use `opened_passthrough()` instead.
    pub fn created(
        self,
        ttl: &Duration,
        attr: &FileAttr,
        generation: Generation,
        fh: ll::FileHandle,
        flags: FopenFlags,
    ) {
        assert!(!flags.contains(FopenFlags::FOPEN_PASSTHROUGH));
        self.reply.send_ll(&ll::ResponseStruct::new_create(
            ttl,
            &attr.into(),
            generation,
            fh,
            flags,
            0,
        ));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }

    /// Registers a fd for passthrough, returning a `BackingId`.  Once you have the backing ID,
    /// you can pass it as the 6th parameter of `ReplyCreate::created_passthrough()`.  This is done in
    /// two separate steps because it may make sense to reuse backing IDs (to avoid having to
    /// repeatedly reopen the underlying file or potentially keep thousands of fds open).
    pub fn open_backing(&self, fd: impl std::os::fd::AsFd) -> std::io::Result<BackingId> {
        self.reply.sender.as_ref().unwrap().open_backing(fd.as_fd())
    }

    /// Reply to a request with an opened backing id. Call `ReplyCreate::open_backing()` to get one of
    /// these.
    pub fn created_passthrough(
        self,
        ttl: &Duration,
        attr: &FileAttr,
        generation: Generation,
        fh: ll::FileHandle,
        flags: FopenFlags,
        backing_id: &BackingId,
    ) {
        self.reply.send_ll(&ll::ResponseStruct::new_create(
            ttl,
            &attr.into(),
            generation,
            fh,
            flags | FopenFlags::FOPEN_PASSTHROUGH,
            backing_id.backing_id,
        ));
    }
}

///
/// Lock Reply
///
#[derive(Debug)]
pub struct ReplyLock {
    reply: ReplyRaw,
}

impl Reply for ReplyLock {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyLock {
        ReplyLock {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyLock {
    /// Reply to a request with a file lock
    pub fn locked(self, start: u64, end: u64, typ: i32, pid: u32) {
        self.reply.send_ll(&ll::ResponseStruct::new_lock(&ll::Lock {
            range: (start, end),
            typ,
            pid,
        }));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Bmap Reply
///
#[derive(Debug)]
pub struct ReplyBmap {
    reply: ReplyRaw,
}

impl Reply for ReplyBmap {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyBmap {
        ReplyBmap {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyBmap {
    /// Reply to a request with a bmap
    pub fn bmap(self, block: u64) {
        self.reply.send_ll(&ll::ResponseStruct::new_bmap(block));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Ioctl Reply
///
#[derive(Debug)]
pub struct ReplyIoctl {
    reply: ReplyRaw,
}

impl Reply for ReplyIoctl {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyIoctl {
        ReplyIoctl {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyIoctl {
    /// Reply to a request with an ioctl
    pub fn ioctl(self, result: i32, data: &[u8]) {
        self.reply
            .send_ll(&ll::ResponseIoctl::new_ioctl(result, &[IoSlice::new(data)]));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Poll Reply
///
#[derive(Debug)]
pub struct ReplyPoll {
    reply: ReplyRaw,
}

impl Reply for ReplyPoll {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyPoll {
        ReplyPoll {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyPoll {
    /// Reply to a request with ready poll events
    pub fn poll(self, revents: PollEvents) {
        self.reply.send_ll(&ll::ResponseStruct::new_poll(revents));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Directory reply
///
#[derive(Debug)]
pub struct ReplyDirectory {
    reply: ReplyRaw,
    data: DirEntList,
}

impl ReplyDirectory {
    /// Creates a new `ReplyDirectory` with a specified buffer size.
    pub(crate) fn new(unique: ll::RequestId, sender: ReplySender, size: usize) -> ReplyDirectory {
        ReplyDirectory {
            reply: Reply::new(unique, sender),
            data: DirEntList::new(size),
        }
    }

    /// Add an entry to the directory reply buffer. Returns true if the buffer is full.
    /// A transparent offset value can be provided for each entry. The kernel uses these
    /// value to request the next entries in further readdir calls
    #[must_use]
    pub fn add<T: AsRef<OsStr>>(
        &mut self,
        ino: INodeNo,
        offset: u64,
        kind: FileType,
        name: T,
    ) -> bool {
        let name = name.as_ref();
        self.data
            .push(&DirEntry::new(ino, DirEntOffset(offset), kind, name))
    }

    /// Reply to a request with the filled directory buffer
    pub fn ok(self) {
        let response: ll::ResponseData = self.data.into();
        self.reply.send_ll(&response);
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// `DirectoryPlus` reply
///
#[derive(Debug)]
pub struct ReplyDirectoryPlus {
    reply: ReplyRaw,
    buf: DirEntPlusList,
}

impl ReplyDirectoryPlus {
    /// Creates a new `ReplyDirectory` with a specified buffer size.
    pub(crate) fn new(
        unique: ll::RequestId,
        sender: ReplySender,
        size: usize,
    ) -> ReplyDirectoryPlus {
        ReplyDirectoryPlus {
            reply: Reply::new(unique, sender),
            buf: DirEntPlusList::new(size),
        }
    }

    /// Add an entry to the directory reply buffer. Returns true if the buffer is full.
    /// A transparent offset value can be provided for each entry. The kernel uses these
    /// value to request the next entries in further readdir calls
    pub fn add<T: AsRef<OsStr>>(
        &mut self,
        ino: INodeNo,
        offset: u64,
        name: T,
        ttl: &Duration,
        attr: &FileAttr,
        generation: Generation,
    ) -> bool {
        let name = name.as_ref();
        self.buf.push(&DirEntryPlus::new(
            ino,
            generation,
            DirEntOffset(offset),
            name,
            *ttl,
            attr.into(),
            *ttl,
        ))
    }

    /// Reply to a request with the filled directory buffer
    pub fn ok(self) {
        let response: ll::ResponseData = self.buf.into();
        self.reply.send_ll(&response);
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Xattr reply
///
#[derive(Debug)]
pub struct ReplyXattr {
    reply: ReplyRaw,
}

impl Reply for ReplyXattr {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyXattr {
        ReplyXattr {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyXattr {
    /// Reply to a request with the size of an extended attribute
    pub fn size(self, size: u32) {
        self.reply
            .send_ll(&ll::ResponseStruct::new_xattr_size(size));
    }

    /// Reply to a request with the data of an extended attribute
    pub fn data(self, data: &[u8]) {
        self.reply.send_ll(&ll::ResponseSlice(data));
    }

    /// Reply to a request with the given error code.
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

///
/// Lseek Reply
///
#[derive(Debug)]
pub struct ReplyLseek {
    reply: ReplyRaw,
}

impl Reply for ReplyLseek {
    fn new(unique: ll::RequestId, sender: ReplySender) -> ReplyLseek {
        ReplyLseek {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyLseek {
    /// Reply to a request with seeked offset
    pub fn offset(self, offset: i64) {
        self.reply.send_ll(&ll::ResponseStruct::new_lseek(offset));
    }

    /// Reply to a request with the given error code
    pub fn error(self, err: Errno) {
        self.reply.error(err);
    }
}

#[cfg(test)]
mod test {
    use std::sync::mpsc::sync_channel;
    use std::thread;
    use std::time::Duration;
    use std::time::UNIX_EPOCH;

    use zerocopy::Immutable;
    use zerocopy::IntoBytes;

    use crate::FileAttr;
    use crate::FileType;
    use crate::reply::*;

    #[derive(Debug, IntoBytes, Immutable)]
    #[repr(C)]
    struct Data {
        a: u8,
        b: u8,
        c: u16,
    }

    #[test]
    fn serialize_empty() {
        assert!(().as_bytes().is_empty());
    }

    #[test]
    fn serialize_slice() {
        let data: [u8; 4] = [0x12, 0x34, 0x56, 0x78];
        assert_eq!(data.as_bytes(), [0x12, 0x34, 0x56, 0x78]);
    }

    #[test]
    fn serialize_struct() {
        let data = Data {
            a: 0x12,
            b: 0x34,
            c: 0x5678,
        };
        assert_eq!(data.as_bytes(), [0x12, 0x34, 0x78, 0x56]);
    }

    #[test]
    fn reply_raw() {
        let data = Data {
            a: 0x12,
            b: 0x34,
            c: 0x5678,
        };
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x12, 0x34, 0x78, 0x56,
            ],
        });
        let reply: ReplyRaw = Reply::new(ll::RequestId(0xdeadbeef), sender);
        reply.send_ll(&ll::ResponseData::new_data(data.as_bytes()));
    }

    #[test]
    fn reply_error() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x10, 0x00, 0x00, 0x00, 0xbe, 0xff, 0xff, 0xff, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00,
            ],
        });
        let reply: ReplyRaw = Reply::new(ll::RequestId(0xdeadbeef), sender);
        reply.error(Errno::from_i32(66));
    }

    #[test]
    fn reply_empty() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00,
            ],
        });
        let reply: ReplyEmpty = Reply::new(ll::RequestId(0xdeadbeef), sender);
        reply.ok();
    }

    #[test]
    fn reply_data() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0xde, 0xad, 0xbe, 0xef,
            ],
        });
        let reply: ReplyData = Reply::new(ll::RequestId(0xdeadbeef), sender);
        reply.data(&[0xde, 0xad, 0xbe, 0xef]);
    }

    #[test]
    fn reply_entry() {
        let mut expected = if cfg!(target_os = "macos") {
            vec![
                0x98, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x87,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00,
                0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56,
                0x00, 0x00, 0xa4, 0x81, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00,
                0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00, 0x99, 0x00, 0x00, 0x00,
            ]
        } else {
            vec![
                0x88, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x87,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00,
                0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00,
                0x78, 0x56, 0x00, 0x00, 0xa4, 0x81, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x66, 0x00,
                0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00,
            ]
        };

        expected.extend(vec![0xbb, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
        expected[0] = (expected.len()) as u8;

        let sender = ReplySender::Assert(AssertSender { expected });
        let reply: ReplyEntry = Reply::new(ll::RequestId(0xdeadbeef), sender);
        let time = UNIX_EPOCH + Duration::new(0x1234, 0x5678);
        let ttl = Duration::new(0x8765, 0x4321);
        let attr = FileAttr {
            ino: INodeNo(0x11),
            size: 0x22,
            blocks: 0x33,
            atime: time,
            mtime: time,
            ctime: time,
            crtime: time,
            kind: FileType::RegularFile,
            perm: 0o644,
            nlink: 0x55,
            uid: 0x66,
            gid: 0x77,
            rdev: 0x88,
            flags: 0x99,
            blksize: 0xbb,
        };
        reply.entry(&ttl, &attr, ll::Generation(0xaa));
    }

    #[test]
    fn reply_attr() {
        let mut expected = if cfg!(target_os = "macos") {
            vec![
                0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56,
                0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0xa4, 0x81, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00,
                0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00, 0x99, 0x00,
                0x00, 0x00,
            ]
        } else {
            vec![
                0x70, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00,
                0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0xa4, 0x81, 0x00, 0x00, 0x55, 0x00,
                0x00, 0x00, 0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00,
            ]
        };

        expected.extend_from_slice(&[0xbb, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]);
        expected[0] = expected.len() as u8;

        let sender = ReplySender::Assert(AssertSender { expected });
        let reply: ReplyAttr = Reply::new(ll::RequestId(0xdeadbeef), sender);
        let time = UNIX_EPOCH + Duration::new(0x1234, 0x5678);
        let ttl = Duration::new(0x8765, 0x4321);
        let attr = FileAttr {
            ino: INodeNo(0x11),
            size: 0x22,
            blocks: 0x33,
            atime: time,
            mtime: time,
            ctime: time,
            crtime: time,
            kind: FileType::RegularFile,
            perm: 0o644,
            nlink: 0x55,
            uid: 0x66,
            gid: 0x77,
            rdev: 0x88,
            flags: 0x99,
            blksize: 0xbb,
        };
        reply.attr(&ttl, &attr);
    }

    #[test]
    #[cfg(target_os = "macos")]
    fn reply_xtimes() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00,
            ],
        });
        let reply: ReplyXTimes = Reply::new(ll::RequestId(0xdeadbeef), sender);
        let time = UNIX_EPOCH + Duration::new(0x1234, 0x5678);
        reply.xtimes(time, time);
    }

    #[test]
    fn reply_open() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x22, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00,
            ],
        });
        let reply: ReplyOpen = Reply::new(ll::RequestId(0xdeadbeef), sender);
        reply.opened(ll::FileHandle(0x1122), FopenFlags::from_bits_retain(0x33));
    }

    #[test]
    fn reply_write() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x22, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ],
        });
        let reply: ReplyWrite = Reply::new(ll::RequestId(0xdeadbeef), sender);
        reply.written(0x1122);
    }

    #[test]
    fn reply_statfs() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x44, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ],
        });
        let reply: ReplyStatfs = Reply::new(ll::RequestId(0xdeadbeef), sender);
        reply.statfs(0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88);
    }

    #[test]
    fn reply_create() {
        let mut expected = if cfg!(target_os = "macos") {
            vec![
                0xa8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x87,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00,
                0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56,
                0x00, 0x00, 0xa4, 0x81, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00,
                0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00, 0x99, 0x00, 0x00, 0x00, 0xbb, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ]
        } else {
            vec![
                0x98, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x87,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00,
                0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12,
                0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00,
                0x78, 0x56, 0x00, 0x00, 0xa4, 0x81, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x66, 0x00,
                0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00, 0xbb, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x0c, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ]
        };

        let insert_at = expected.len() - 16;
        expected.splice(
            insert_at..insert_at,
            vec![0xdd, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
        );
        expected[0] = (expected.len()) as u8;

        let sender = ReplySender::Assert(AssertSender { expected });
        let reply: ReplyCreate = Reply::new(ll::RequestId(0xdeadbeef), sender);
        let time = UNIX_EPOCH + Duration::new(0x1234, 0x5678);
        let ttl = Duration::new(0x8765, 0x4321);
        let attr = FileAttr {
            ino: INodeNo(0x11),
            size: 0x22,
            blocks: 0x33,
            atime: time,
            mtime: time,
            ctime: time,
            crtime: time,
            kind: FileType::RegularFile,
            perm: 0o644,
            nlink: 0x55,
            uid: 0x66,
            gid: 0x77,
            rdev: 0x88,
            flags: 0x99,
            blksize: 0xdd,
        };
        reply.created(
            &ttl,
            &attr,
            ll::Generation(0xaa),
            ll::FileHandle(0xbb),
            FopenFlags::from_bits_retain(0x0c),
        );
    }

    #[test]
    fn reply_lock() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x44, 0x00, 0x00, 0x00,
            ],
        });
        let reply: ReplyLock = Reply::new(ll::RequestId(0xdeadbeef), sender);
        reply.locked(0x11, 0x22, 0x33, 0x44);
    }

    #[test]
    fn reply_bmap() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ],
        });
        let reply: ReplyBmap = Reply::new(ll::RequestId(0xdeadbeef), sender);
        reply.bmap(0x1234);
    }

    #[test]
    fn reply_directory() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x50, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00, 0xbb, 0xaa, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00,
                0x00, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x68, 0x65,
                0x6c, 0x6c, 0x6f, 0x00, 0x00, 0x00, 0xdd, 0xcc, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00, 0x08, 0x00,
                0x00, 0x00, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x2e, 0x72, 0x73,
            ],
        });
        let mut reply = ReplyDirectory::new(ll::RequestId(0xdeadbeef), sender, 4096);
        assert!(!reply.add(INodeNo(0xaabb), 1, FileType::Directory, "hello"));
        assert!(!reply.add(INodeNo(0xccdd), 2, FileType::RegularFile, "world.rs"));
        reply.ok();
    }

    #[test]
    fn reply_xattr_size() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xEF, 0xBE, 0xAD, 0xDE, 0x00, 0x00,
                0x00, 0x00, 0x78, 0x56, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00,
            ],
        });
        let reply = ReplyXattr::new(ll::RequestId(0xdeadbeef), sender);
        reply.size(0x12345678);
    }

    #[test]
    fn reply_xattr_data() {
        let sender = ReplySender::Assert(AssertSender {
            expected: vec![
                0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xEF, 0xBE, 0xAD, 0xDE, 0x00, 0x00,
                0x00, 0x00, 0x11, 0x22, 0x33, 0x44,
            ],
        });
        let reply = ReplyXattr::new(ll::RequestId(0xdeadbeef), sender);
        reply.data(&[0x11, 0x22, 0x33, 0x44]);
    }

    #[test]
    fn async_reply() {
        let (tx, rx) = sync_channel::<()>(1);
        let reply: ReplyEmpty = Reply::new(ll::RequestId(0xdeadbeef), ReplySender::Sync(tx));
        thread::spawn(move || {
            reply.ok();
        });
        rx.recv().unwrap();
    }
}
