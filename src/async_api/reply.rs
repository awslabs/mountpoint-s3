//! Filesystem operation reply
//!
//! A reply is passed to filesystem operation implementations and must be used to send back the
//! result of an operation. The reply can optionally be sent to another thread to asynchronously
//! work on an operation and provide the result later. Also it allows replying with a block of
//! data without cloning the data. A reply *must always* be used (by calling either ok() or
//! error() exactly once).

#[cfg(target_os = "macos")]
use crate::ll::fuse_abi::fuse_getxtimes_out;
use crate::ll::fuse_abi::{
    fuse_attr, fuse_attr_out, fuse_bmap_out, fuse_create_out, fuse_dirent, fuse_direntplus,
    fuse_entry_out, fuse_file_lock, fuse_getxattr_out, fuse_ioctl_out, fuse_kstatfs, fuse_lk_out,
    fuse_lseek_out, fuse_open_out, fuse_out_header, fuse_statfs_out, fuse_write_out,
};
use crate::{FileAttr, FileType};
use async_trait::async_trait;
use libc::{c_int, EIO, S_IFBLK, S_IFCHR, S_IFDIR, S_IFIFO, S_IFLNK, S_IFREG, S_IFSOCK};
use log::warn;
use std::ffi::OsStr;
use std::fmt;
use std::marker::PhantomData;
use std::mem;
use std::os::unix::ffi::OsStrExt;
use std::time::{Duration, SystemTime, UNIX_EPOCH};
use std::{
    convert::{AsRef, TryInto},
    sync::Arc,
};
use zerocopy::AsBytes;

/// Generic reply callback to send data
#[async_trait]
pub trait ReplySender: Send + Sync + 'static {
    /// Send data.
    async fn send(&self, data: &[&[u8]]);
}

impl fmt::Debug for Box<dyn ReplySender> {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> Result<(), fmt::Error> {
        write!(f, "Box<ReplySender>")
    }
}

/// Generic reply trait
pub trait Reply {
    /// Create a new reply for the given request
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> Self;
}

///
/// Raw reply
///
#[derive(derivative::Derivative)]
#[derivative(Debug)]
pub(crate) struct ReplyRaw<T: AsBytes> {
    /// Unique id of the request to reply to
    unique: u64,
    /// Closure to call for sending the reply
    #[derivative(Debug = "ignore")]
    sender: Option<Arc<dyn ReplySender>>,
    /// Marker for being able to have T on this struct (which enforces
    /// reply types to send the correct type of data)
    marker: PhantomData<T>,
}

impl<T: AsBytes> Reply for ReplyRaw<T> {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyRaw<T> {
        ReplyRaw {
            unique,
            sender: Some(sender),
            marker: PhantomData,
        }
    }
}

impl<T: AsBytes> ReplyRaw<T> {
    /// Reply to a request with the given error code and data. Must be called
    /// only once (the `ok` and `error` methods ensure this by consuming `self`)
    async fn send(&mut self, err: c_int, bytes: &[&[u8]]) {
        assert!(self.sender.is_some());
        let len = bytes.iter().fold(0, |l, b| l + b.len());
        let header = fuse_out_header {
            len: (mem::size_of::<fuse_out_header>() + len) as u32,
            error: -err,
            unique: self.unique,
        };
        let sender = self.sender.take().unwrap();
        let mut sendbytes = [header.as_bytes()].to_vec();
        sendbytes.extend(bytes);
        sender.send(&sendbytes).await;
    }

    /// Reply to a request with the given type
    pub async fn ok(mut self, data: &T) {
        self.send(0, &[data.as_bytes()]).await;
    }

    /// Reply to a request with the given error code
    pub async fn error(mut self, err: c_int) {
        self.send(err, &[]).await;
    }
}

impl<T: AsBytes> Drop for ReplyRaw<T> {
    fn drop(&mut self) {
        if self.sender.is_some() {
            warn!(
                "Reply not sent for operation {}, replying with I/O error",
                self.unique
            );
            futures::executor::block_on(self.send(EIO, &[]));
        }
    }
}

///
/// Empty reply
///
#[derive(Debug)]
pub struct ReplyEmpty {
    reply: ReplyRaw<()>,
}

impl Reply for ReplyEmpty {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyEmpty {
        ReplyEmpty {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyEmpty {
    /// Reply to a request with nothing
    pub async fn ok(mut self) {
        self.reply.send(0, &[]).await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// Data reply
///
#[derive(Debug)]
pub struct ReplyData {
    reply: ReplyRaw<()>,
}

impl Reply for ReplyData {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyData {
        ReplyData {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyData {
    /// Reply to a request with the given data
    pub async fn data(mut self, data: &[u8]) {
        self.reply.send(0, &[data]).await
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await
    }
}

///
/// Entry reply
///
#[derive(Debug)]
pub struct ReplyEntry {
    reply: ReplyRaw<fuse_entry_out>,
}

impl Reply for ReplyEntry {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyEntry {
        ReplyEntry {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyEntry {
    /// Reply to a request with the given entry
    pub async fn entry(self, ttl: &Duration, attr: &FileAttr, generation: u64) {
        self.reply
            .ok(&fuse_entry_out {
                nodeid: attr.ino,
                generation,
                entry_valid: ttl.as_secs(),
                attr_valid: ttl.as_secs(),
                entry_valid_nsec: ttl.subsec_nanos(),
                attr_valid_nsec: ttl.subsec_nanos(),
                attr: crate::reply::fuse_attr_from_attr(attr),
            })
            .await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await
    }
}

///
/// Attribute Reply
///
#[derive(Debug)]
pub struct ReplyAttr {
    reply: ReplyRaw<fuse_attr_out>,
}

impl Reply for ReplyAttr {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyAttr {
        ReplyAttr {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyAttr {
    /// Reply to a request with the given attribute
    pub async fn attr(self, ttl: &Duration, attr: &FileAttr) {
        self.reply
            .ok(&fuse_attr_out {
                attr_valid: ttl.as_secs(),
                attr_valid_nsec: ttl.subsec_nanos(),
                dummy: 0,
                attr: crate::reply::fuse_attr_from_attr(attr),
            })
            .await
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await
    }
}

///
/// XTimes Reply
///
#[cfg(target_os = "macos")]
#[derive(Debug)]
pub struct ReplyXTimes {
    reply: ReplyRaw<fuse_getxtimes_out>,
}

#[cfg(target_os = "macos")]
impl Reply for ReplyXTimes {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyXTimes {
        ReplyXTimes {
            reply: Reply::new(unique, sender),
        }
    }
}

#[cfg(target_os = "macos")]
impl ReplyXTimes {
    /// Reply to a request with the given xtimes
    pub async fn xtimes(self, bkuptime: SystemTime, crtime: SystemTime) {
        let (bkuptime_secs, bkuptime_nanos) = crate::reply::time_from_system_time(&bkuptime);
        let (crtime_secs, crtime_nanos) = crate::reply::time_from_system_time(&crtime);
        self.reply
            .ok(&fuse_getxtimes_out {
                bkuptime: bkuptime_secs as u64,
                crtime: crtime_secs as u64,
                bkuptimensec: bkuptime_nanos,
                crtimensec: crtime_nanos,
            })
            .await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// Open Reply
///
#[derive(Debug)]
pub struct ReplyOpen {
    reply: ReplyRaw<fuse_open_out>,
}

impl Reply for ReplyOpen {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyOpen {
        ReplyOpen {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyOpen {
    /// Reply to a request with the given open result
    pub async fn opened(self, fh: u64, flags: u32) {
        self.reply
            .ok(&fuse_open_out {
                fh,
                open_flags: flags,
                padding: 0,
            })
            .await
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await
    }
}

///
/// Write Reply
///
#[derive(Debug)]
pub struct ReplyWrite {
    reply: ReplyRaw<fuse_write_out>,
}

impl Reply for ReplyWrite {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyWrite {
        ReplyWrite {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyWrite {
    /// Reply to a request with the given open result
    pub async fn written(self, size: u32) {
        self.reply.ok(&fuse_write_out { size, padding: 0 }).await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// Statfs Reply
///
#[derive(Debug)]
pub struct ReplyStatfs {
    reply: ReplyRaw<fuse_statfs_out>,
}

impl Reply for ReplyStatfs {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyStatfs {
        ReplyStatfs {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyStatfs {
    /// Reply to a request with the given open result
    #[allow(clippy::too_many_arguments)]
    pub async fn statfs(
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
        self.reply
            .ok(&fuse_statfs_out {
                st: fuse_kstatfs {
                    blocks,
                    bfree,
                    bavail,
                    files,
                    ffree,
                    bsize,
                    namelen,
                    frsize,
                    padding: 0,
                    spare: [0; 6],
                },
            })
            .await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// Create reply
///
#[derive(Debug)]
pub struct ReplyCreate {
    reply: ReplyRaw<fuse_create_out>,
}

impl Reply for ReplyCreate {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyCreate {
        ReplyCreate {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyCreate {
    /// Reply to a request with the given entry
    pub async fn created(
        self,
        ttl: &Duration,
        attr: &FileAttr,
        generation: u64,
        fh: u64,
        flags: u32,
    ) {
        self.reply
            .ok(&fuse_create_out(
                fuse_entry_out {
                    nodeid: attr.ino,
                    generation,
                    entry_valid: ttl.as_secs(),
                    attr_valid: ttl.as_secs(),
                    entry_valid_nsec: ttl.subsec_nanos(),
                    attr_valid_nsec: ttl.subsec_nanos(),
                    attr: crate::reply::fuse_attr_from_attr(attr),
                },
                fuse_open_out {
                    fh,
                    open_flags: flags,
                    padding: 0,
                },
            ))
            .await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// Lock Reply
///
#[derive(Debug)]
pub struct ReplyLock {
    reply: ReplyRaw<fuse_lk_out>,
}

impl Reply for ReplyLock {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyLock {
        ReplyLock {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyLock {
    /// Reply to a request with the given open result
    pub async fn locked(self, start: u64, end: u64, typ: i32, pid: u32) {
        self.reply
            .ok(&fuse_lk_out {
                lk: fuse_file_lock {
                    start,
                    end,
                    typ,
                    pid,
                },
            })
            .await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// Bmap Reply
///
#[derive(Debug)]
pub struct ReplyBmap {
    reply: ReplyRaw<fuse_bmap_out>,
}

impl Reply for ReplyBmap {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyBmap {
        ReplyBmap {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyBmap {
    /// Reply to a request with the given open result
    pub async fn bmap(self, block: u64) {
        self.reply.ok(&fuse_bmap_out { block }).await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// Ioctl Reply
///
#[derive(Debug)]
pub struct ReplyIoctl {
    reply: ReplyRaw<fuse_ioctl_out>,
}

impl Reply for ReplyIoctl {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyIoctl {
        ReplyIoctl {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyIoctl {
    /// Reply to a request with the given open result
    pub async fn ioctl(mut self, result: i32, data: &[u8]) {
        let header = fuse_ioctl_out {
            result,
            // these fields are only needed for unrestricted ioctls
            flags: 0,
            in_iovs: 1,
            out_iovs: if !data.is_empty() { 1 } else { 0 },
        };

        if !data.is_empty() {
            self.reply.send(0, &[header.as_bytes(), data]).await;
        } else {
            self.reply.send(0, &[header.as_bytes()]).await;
        }
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// Directory reply
///
#[derive(Debug)]
pub struct ReplyDirectory {
    reply: ReplyRaw<()>,
    data: Vec<u8>,
}

impl ReplyDirectory {
    /// Creates a new ReplyDirectory with a specified buffer size.
    pub fn new(unique: u64, sender: Arc<dyn ReplySender>, size: usize) -> ReplyDirectory {
        ReplyDirectory {
            reply: Reply::new(unique, sender),
            data: Vec::with_capacity(size),
        }
    }

    /// Add an entry to the directory reply buffer. Returns true if the buffer is full.
    /// A transparent offset value can be provided for each entry. The kernel uses these
    /// value to request the next entries in further readdir calls
    #[must_use]
    pub fn add<T: AsRef<OsStr>>(&mut self, ino: u64, offset: i64, kind: FileType, name: T) -> bool {
        let name = name.as_ref().as_bytes();
        let entlen = mem::size_of::<fuse_dirent>() + name.len();
        let entsize = (entlen + mem::size_of::<u64>() - 1) & !(mem::size_of::<u64>() - 1); // 64bit align
        if self.data.len() + entsize > self.data.capacity() {
            return true;
        }
        let header = fuse_dirent {
            ino,
            off: offset,
            namelen: name.len().try_into().expect("Name too long"),
            typ: crate::reply::mode_from_kind_and_perm(kind, 0) >> 12,
        };
        self.data.extend_from_slice(header.as_bytes());
        self.data.extend_from_slice(name);
        let padlen = entsize - entlen;
        self.data.extend_from_slice(&b"\0\0\0\0\0\0\0\0"[..padlen]);
        false
    }

    /// Reply to a request with the filled directory buffer
    pub async fn ok(mut self) {
        self.reply.send(0, &[&self.data]).await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// DirectoryPlus reply
///
#[derive(Debug)]
pub struct ReplyDirectoryPlus {
    reply: ReplyRaw<()>,
    data: Vec<u8>,
}

impl ReplyDirectoryPlus {
    /// Creates a new ReplyDirectory with a specified buffer size.
    pub fn new(unique: u64, sender: Arc<dyn ReplySender>, size: usize) -> ReplyDirectoryPlus {
        ReplyDirectoryPlus {
            reply: Reply::new(unique, sender),
            data: Vec::with_capacity(size),
        }
    }

    /// Add an entry to the directory reply buffer. Returns true if the buffer is full.
    /// A transparent offset value can be provided for each entry. The kernel uses these
    /// value to request the next entries in further readdir calls
    pub fn add<T: AsRef<OsStr>>(
        &mut self,
        ino: u64,
        offset: i64,
        name: T,
        ttl: &Duration,
        attr: &FileAttr,
        generation: u64,
    ) -> bool {
        let name = name.as_ref().as_bytes();
        let entlen = mem::size_of::<fuse_direntplus>() + name.len();
        let entsize = (entlen + mem::size_of::<u64>() - 1) & !(mem::size_of::<u64>() - 1); // 64bit align
        let padlen = entsize - entlen;
        if self.data.len() + entsize > self.data.capacity() {
            return true;
        }
        let direntplus = fuse_direntplus {
            entry_out: fuse_entry_out {
                nodeid: attr.ino,
                generation,
                entry_valid: ttl.as_secs(),
                attr_valid: ttl.as_secs(),
                entry_valid_nsec: ttl.subsec_nanos(),
                attr_valid_nsec: ttl.subsec_nanos(),
                attr: crate::reply::fuse_attr_from_attr(attr),
            },
            dirent: fuse_dirent {
                ino,
                off: offset,
                namelen: name.len().try_into().expect("Name too long"),
                typ: crate::reply::mode_from_kind_and_perm(attr.kind, 0) >> 12,
            },
        };
        self.data.extend_from_slice(direntplus.as_bytes());
        self.data.extend_from_slice(name);
        self.data.extend_from_slice(&b"\0\0\0\0\0\0\0\0"[..padlen]);
        false
    }

    /// Reply to a request with the filled directory buffer
    pub async fn ok(mut self) {
        self.reply.send(0, &[&self.data]).await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// Xattr reply
///
#[derive(Debug)]
pub struct ReplyXattr {
    reply: ReplyRaw<fuse_getxattr_out>,
}

impl Reply for ReplyXattr {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyXattr {
        ReplyXattr {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyXattr {
    /// Reply to a request with the size of the xattr.
    pub async fn size(self, size: u32) {
        self.reply.ok(&fuse_getxattr_out { size, padding: 0 }).await;
    }

    /// Reply to a request with the data in the xattr.
    pub async fn data(mut self, data: &[u8]) {
        self.reply.send(0, &[data]).await;
    }

    /// Reply to a request with the given error code.
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

///
/// Lseek Reply
///
#[derive(Debug)]
pub struct ReplyLseek {
    reply: ReplyRaw<fuse_lseek_out>,
}

impl Reply for ReplyLseek {
    fn new(unique: u64, sender: Arc<dyn ReplySender>) -> ReplyLseek {
        ReplyLseek {
            reply: Reply::new(unique, sender),
        }
    }
}

impl ReplyLseek {
    /// Reply to a request with seeked offset
    pub async fn offset(self, offset: i64) {
        self.reply.ok(&fuse_lseek_out { offset }).await;
    }

    /// Reply to a request with the given error code
    pub async fn error(self, err: c_int) {
        self.reply.error(err).await;
    }
}

#[cfg(test)]
mod test {

    use futures_await_test::async_test;

    use super::AsBytes;

    #[cfg(target_os = "macos")]
    use super::ReplyXTimes;
    use super::ReplyXattr;
    use super::{Reply, ReplyAttr, ReplyData, ReplyEmpty, ReplyEntry, ReplyOpen, ReplyRaw};
    use super::{ReplyBmap, ReplyCreate, ReplyDirectory, ReplyLock, ReplyStatfs, ReplyWrite};
    use crate::{FileAttr, FileType};
    use std::{
        sync::Arc,
        time::{Duration, UNIX_EPOCH},
    };

    #[allow(dead_code)]
    #[derive(Debug, AsBytes)]
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

    struct AssertSender {
        expected: Vec<Vec<u8>>,
    }

    #[async_trait::async_trait]
    impl super::ReplySender for AssertSender {
        async fn send(&self, data: &[&[u8]]) {
            assert_eq!(self.expected, data);
        }
    }

    #[async_test]
    async fn reply_raw() {
        let data = Data {
            a: 0x12,
            b: 0x34,
            c: 0x5678,
        };
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![0x12, 0x34, 0x78, 0x56],
            ],
        });
        let reply: ReplyRaw<Data> = Reply::new(0xdeadbeef, sender);
        reply.ok(&data).await;
    }

    #[async_test]
    async fn reply_error() {
        let sender = Arc::new(AssertSender {
            expected: vec![vec![
                0x10, 0x00, 0x00, 0x00, 0xbe, 0xff, 0xff, 0xff, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00,
            ]],
        });
        let reply: ReplyRaw<Data> = Reply::new(0xdeadbeef, sender);
        reply.error(66).await;
    }

    #[async_test]
    async fn reply_empty() {
        let sender = Arc::new(AssertSender {
            expected: vec![vec![
                0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00, 0x00,
                0x00, 0x00,
            ]],
        });
        let reply: ReplyEmpty = Reply::new(0xdeadbeef, sender);
        reply.ok().await;
    }

    #[async_test]
    async fn reply_data() {
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![0xde, 0xad, 0xbe, 0xef],
            ],
        });
        let reply: ReplyData = Reply::new(0xdeadbeef, sender);
        reply.data(&[0xde, 0xad, 0xbe, 0xef]).await;
    }

    #[async_test]
    async fn reply_entry() {
        let mut expected = if cfg!(target_os = "macos") {
            vec![
                vec![
                    0x98, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x87,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x21, 0x43, 0x00,
                    0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34,
                    0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00,
                    0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0xa4, 0x81, 0x00, 0x00, 0x55,
                    0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88, 0x00,
                    0x00, 0x00, 0x99, 0x00, 0x00, 0x00,
                ],
            ]
        } else {
            vec![
                vec![
                    0x88, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x87,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x21, 0x43, 0x00,
                    0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34,
                    0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00,
                    0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0xa4, 0x81, 0x00, 0x00,
                    0x55, 0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88,
                    0x00, 0x00, 0x00,
                ],
            ]
        };

        if cfg!(feature = "abi-7-9") {
            expected[1].extend(vec![0xbb, 0x00, 0x00, 0x00, 0xcc, 0x00, 0x00, 0x00]);
        }
        expected[0][0] = (expected[0].len() + expected[1].len()) as u8;

        let sender = Arc::new(AssertSender { expected });
        let reply: ReplyEntry = Reply::new(0xdeadbeef, sender);
        let time = UNIX_EPOCH + Duration::new(0x1234, 0x5678);
        let ttl = Duration::new(0x8765, 0x4321);
        let attr = FileAttr {
            ino: 0x11,
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
            padding: 0xcc,
        };
        reply.entry(&ttl, &attr, 0xaa).await;
    }

    #[async_test]
    async fn reply_attr() {
        let mut expected = if cfg!(target_os = "macos") {
            vec![
                vec![
                    0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34,
                    0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56,
                    0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0xa4, 0x81, 0x00,
                    0x00, 0x55, 0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00, 0x00,
                    0x88, 0x00, 0x00, 0x00, 0x99, 0x00, 0x00, 0x00,
                ],
            ]
        } else {
            vec![
                vec![
                    0x70, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x78,
                    0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0xa4, 0x81,
                    0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00,
                    0x00, 0x88, 0x00, 0x00, 0x00,
                ],
            ]
        };

        if cfg!(feature = "abi-7-9") {
            expected[1].extend(vec![0xbb, 0x00, 0x00, 0x00, 0xcc, 0x00, 0x00, 0x00]);
        }
        expected[0][0] = (expected[0].len() + expected[1].len()) as u8;

        let sender = Arc::new(AssertSender { expected });
        let reply: ReplyAttr = Reply::new(0xdeadbeef, sender);
        let time = UNIX_EPOCH + Duration::new(0x1234, 0x5678);
        let ttl = Duration::new(0x8765, 0x4321);
        let attr = FileAttr {
            ino: 0x11,
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
            padding: 0xcc,
        };
        reply.attr(&ttl, &attr).await;
    }

    #[async_test]
    #[cfg(target_os = "macos")]
    async fn reply_xtimes() {
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00,
                ],
            ],
        });
        let reply: ReplyXTimes = Reply::new(0xdeadbeef, sender);
        let time = UNIX_EPOCH + Duration::new(0x1234, 0x5678);
        reply.xtimes(time, time).await;
    }

    #[async_test]
    async fn reply_open() {
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0x22, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00,
                ],
            ],
        });
        let reply: ReplyOpen = Reply::new(0xdeadbeef, sender);
        reply.opened(0x1122, 0x33).await;
    }

    #[async_test]
    async fn reply_write() {
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![0x22, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
            ],
        });
        let reply: ReplyWrite = Reply::new(0xdeadbeef, sender);
        reply.written(0x1122).await;
    }

    #[async_test]
    async fn reply_statfs() {
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x44, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x55, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00,
                ],
            ],
        });
        let reply: ReplyStatfs = Reply::new(0xdeadbeef, sender);
        reply
            .statfs(0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88)
            .await;
    }

    #[async_test]
    async fn reply_create() {
        let mut expected = if cfg!(target_os = "macos") {
            vec![
                vec![
                    0xa8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x87,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x21, 0x43, 0x00,
                    0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34,
                    0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00,
                    0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0xa4, 0x81, 0x00, 0x00, 0x55,
                    0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88, 0x00,
                    0x00, 0x00, 0x99, 0x00, 0x00, 0x00, 0xbb, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0xcc, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                ],
            ]
        } else {
            vec![
                vec![
                    0x98, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xaa, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x65, 0x87, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x65, 0x87,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x43, 0x00, 0x00, 0x21, 0x43, 0x00,
                    0x00, 0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34,
                    0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x78, 0x56, 0x00,
                    0x00, 0x78, 0x56, 0x00, 0x00, 0x78, 0x56, 0x00, 0x00, 0xa4, 0x81, 0x00, 0x00,
                    0x55, 0x00, 0x00, 0x00, 0x66, 0x00, 0x00, 0x00, 0x77, 0x00, 0x00, 0x00, 0x88,
                    0x00, 0x00, 0x00, 0xbb, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xcc, 0x00,
                    0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
                ],
            ]
        };

        if cfg!(feature = "abi-7-9") {
            let insert_at = expected[1].len() - 16;
            expected[1].splice(
                insert_at..insert_at,
                vec![0xdd, 0x00, 0x00, 0x00, 0xee, 0x00, 0x00, 0x00],
            );
        }
        expected[0][0] = (expected[0].len() + expected[1].len()) as u8;

        let sender = Arc::new(AssertSender { expected });
        let reply: ReplyCreate = Reply::new(0xdeadbeef, sender);
        let time = UNIX_EPOCH + Duration::new(0x1234, 0x5678);
        let ttl = Duration::new(0x8765, 0x4321);
        let attr = FileAttr {
            ino: 0x11,
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
            padding: 0xee,
        };
        reply.created(&ttl, &attr, 0xaa, 0xbb, 0xcc).await;
    }

    #[async_test]
    async fn reply_lock() {
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x28, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0x11, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x22, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x33, 0x00, 0x00, 0x00, 0x44, 0x00, 0x00, 0x00,
                ],
            ],
        });
        let reply: ReplyLock = Reply::new(0xdeadbeef, sender);
        reply.locked(0x11, 0x22, 0x33, 0x44).await;
    }

    #[async_test]
    async fn reply_bmap() {
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![0x34, 0x12, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00],
            ],
        });
        let reply: ReplyBmap = Reply::new(0xdeadbeef, sender);
        reply.bmap(0x1234).await;
    }

    #[async_test]
    async fn reply_directory() {
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x50, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xef, 0xbe, 0xad, 0xde, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![
                    0xbb, 0xaa, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x68, 0x65,
                    0x6c, 0x6c, 0x6f, 0x00, 0x00, 0x00, 0xdd, 0xcc, 0x00, 0x00, 0x00, 0x00, 0x00,
                    0x00, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x08, 0x00, 0x00, 0x00,
                    0x08, 0x00, 0x00, 0x00, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x2e, 0x72, 0x73,
                ],
            ],
        });
        let mut reply = ReplyDirectory::new(0xdeadbeef, sender, 4096);
        assert!(!reply.add(0xaabb, 1, FileType::Directory, "hello"));
        assert!(!reply.add(0xccdd, 2, FileType::RegularFile, "world.rs"));
        reply.ok().await;
    }

    #[async_test]
    async fn reply_xattr_size() {
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xEF, 0xBE, 0xAD, 0xDE, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![0x78, 0x56, 0x34, 0x12, 0x00, 0x00, 0x00, 0x00],
            ],
        });
        let reply = ReplyXattr::new(0xdeadbeef, sender);
        reply.size(0x12345678).await;
    }

    #[async_test]
    async fn reply_xattr_data() {
        let sender = Arc::new(AssertSender {
            expected: vec![
                vec![
                    0x14, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xEF, 0xBE, 0xAD, 0xDE, 0x00,
                    0x00, 0x00, 0x00,
                ],
                vec![0x11, 0x22, 0x33, 0x44],
            ],
        });
        let reply = ReplyXattr::new(0xdeadbeef, sender);
        reply.data(&[0x11, 0x22, 0x33, 0x44]).await;
    }
}
