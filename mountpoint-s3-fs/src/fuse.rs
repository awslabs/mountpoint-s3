//! Links _fuser_ method calls into Mountpoint's filesystem code in [crate::fs].

use futures::executor::block_on;
use mountpoint_s3_client::ObjectClient;
use std::ffi::OsStr;
use std::path::Path;
use std::time::SystemTime;
use time::OffsetDateTime;
use tracing::{Instrument, debug, field, instrument};

use crate::fs::{
    DirectoryEntry, DirectoryReplier, InodeNo, S3Filesystem, ToErrno, error_metadata::MOUNTPOINT_EVENT_READY,
};
use crate::metrics::defs::{ATTR_FUSE_REQUEST, FUSE_IO_SIZE, FUSE_REQUEST_ERRORS};
#[cfg(target_os = "macos")]
use fuser::ReplyXTimes;
use fuser::{
    Filesystem, KernelConfig, ReplyAttr, ReplyBmap, ReplyCreate, ReplyData, ReplyEmpty, ReplyEntry, ReplyIoctl,
    ReplyLock, ReplyLseek, ReplyOpen, ReplyStatfs, ReplyWrite, ReplyXattr, Request, TimeOrNow,
};

pub mod config;
pub mod session;

/// A trait that can be implemented to log errors returned by fuse operations.
pub trait ErrorLogger: std::fmt::Debug {
    /// Log an error returned by a fuse operation.
    ///
    /// This method will be invoked immediately before a fuse operation returns an error response, with the exception of those
    /// operations which are not implemented.
    fn error(&self, err: &crate::fs::Error, fuse_operation: &str, fuse_request_id: u64);

    /// Log an event with the given operation and code
    fn event(&self, operation: &str, event_code: &str);
}

/// `tracing` doesn't allow dynamic levels but we want to dynamically choose the log level for
/// requests based on their response status. https://github.com/tokio-rs/tracing/issues/372
macro_rules! event {
    ($level:expr, $($args:tt)*) => {
        match $level {
            ::tracing::Level::ERROR => ::tracing::event!(::tracing::Level::ERROR, $($args)*),
            ::tracing::Level::WARN => ::tracing::event!(::tracing::Level::WARN, $($args)*),
            ::tracing::Level::INFO => ::tracing::event!(::tracing::Level::INFO, $($args)*),
            ::tracing::Level::DEBUG => ::tracing::event!(::tracing::Level::DEBUG, $($args)*),
            ::tracing::Level::TRACE => ::tracing::event!(::tracing::Level::TRACE, $($args)*),
        }
    };
}

/// Handle an error in a FUSE handler. This logs the appropriate error message and then calls
/// `reply` on the given replier with the error's corresponding errno.
macro_rules! fuse_error {
    ($name:literal, $reply:expr, $err:expr, $fs:expr, $request:expr) => {{
        let err = $err;
        event!(err.level, "{} failed with errno {}: {:#}", $name, err.to_errno(), err);
        ::metrics::counter!(FUSE_REQUEST_ERRORS, ATTR_FUSE_REQUEST => $name).increment(1);
        if let Some(error_logger) = $fs.error_logger.as_ref() {
            error_logger.error(&err, $name, $request.unique());
        }
        $reply.error(err.to_errno());
    }};
}

/// Generic handler for unimplemented FUSE operations
macro_rules! fuse_unsupported {
    ($name:literal, $reply:expr, $err:expr, $level:expr) => {{
        event!($level, "{} failed: operation not supported by Mountpoint", $name);
        ::metrics::counter!(FUSE_REQUEST_ERRORS, ATTR_FUSE_REQUEST => $name).increment(1);
        ::metrics::counter!("fuse.op_unimplemented","op" => $name).increment(1);
        $reply.error($err);
    }};
    ($name:literal, $reply:expr) => {
        fuse_unsupported!($name, $reply, libc::ENOSYS, tracing::Level::WARN)
    };
    ($name:literal, $reply:expr, $err:expr) => {
        fuse_unsupported!($name, $reply, $err, tracing::Level::WARN)
    };
}

/// This is just a thin wrapper around [S3Filesystem] that implements the actual `fuser` protocol,
/// so that we can test our actual filesystem implementation without having actual FUSE in the loop.
pub struct S3FuseFilesystem<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    fs: S3Filesystem<Client>,
    error_logger: Option<Box<dyn ErrorLogger + Send + Sync>>,
}

impl<Client> S3FuseFilesystem<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    pub fn new(fs: S3Filesystem<Client>, error_logger: Option<Box<dyn ErrorLogger + Send + Sync>>) -> Self {
        Self { fs, error_logger }
    }
}

impl<Client> Filesystem for S3FuseFilesystem<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    #[instrument(level="warn", skip_all, fields(req=_req.unique(), pid=_req.pid()))]
    fn init(&self, _req: &Request<'_>, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        if let Some(error_logger) = self.error_logger.as_ref() {
            error_logger.event("mount", MOUNTPOINT_EVENT_READY);
        }
        block_on(self.fs.init(config).in_current_span())
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=parent, name=?name, pid=req.pid()))]
    fn lookup(&self, req: &Request<'_>, parent: InodeNo, name: &OsStr, reply: ReplyEntry) {
        debug!("New request");
        match block_on(self.fs.lookup(parent, name).in_current_span()) {
            Ok(entry) => reply.entry(&entry.ttl, &entry.attr, entry.generation),
            Err(e) => fuse_error!("lookup", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=ino, name=field::Empty, pid=req.pid()))]
    fn getattr(&self, req: &Request<'_>, ino: InodeNo, _fh: Option<u64>, reply: ReplyAttr) {
        debug!("New request");
        match block_on(self.fs.getattr(ino).in_current_span()) {
            Ok(attr) => reply.attr(&attr.ttl, &attr.attr),
            Err(e) => fuse_error!("getattr", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino, nlookup, name=field::Empty, pid=_req.pid()))]
    fn forget(&self, _req: &Request<'_>, ino: u64, nlookup: u64) {
        debug!("New request");
        block_on(self.fs.forget(ino, nlookup));
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=ino, name=field::Empty, pid=req.pid()))]
    fn open(&self, req: &Request<'_>, ino: InodeNo, flags: i32, reply: ReplyOpen) {
        debug!("New request");
        match block_on(self.fs.open(ino, flags.into(), req.pid()).in_current_span()) {
            Ok(opened) => reply.opened(opened.fh, opened.flags),
            Err(e) => fuse_error!("open", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=ino, fh=fh, offset=offset, size=size, name=field::Empty, pid=req.pid()))]
    fn read(
        &self,
        req: &Request<'_>,
        ino: InodeNo,
        fh: u64,
        offset: i64,
        size: u32,
        flags: i32,
        lock: Option<u64>,
        reply: ReplyData,
    ) {
        debug!("New request");
        let mut bytes_sent = 0;

        match block_on(self.fs.read(ino, fh, offset, size, flags, lock).in_current_span()) {
            Ok(data) => {
                bytes_sent = data.len();
                reply.data(&data);
            }
            Err(err) => fuse_error!("read", reply, err, self, req),
        }

        metrics::counter!("fuse.total_bytes", "type" => "read").increment(bytes_sent as u64);
        metrics::histogram!(FUSE_IO_SIZE, ATTR_FUSE_REQUEST => "read").record(bytes_sent as f64);
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=parent, name=field::Empty, pid=req.pid()))]
    fn opendir(&self, req: &Request<'_>, parent: InodeNo, flags: i32, reply: ReplyOpen) {
        debug!("New request");
        match block_on(self.fs.opendir(parent, flags).in_current_span()) {
            Ok(opened) => reply.opened(opened.fh, opened.flags),
            Err(e) => fuse_error!("opendir", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=parent, fh=fh, offset=offset, pid=req.pid()))]
    fn readdir(&self, req: &Request<'_>, parent: InodeNo, fh: u64, offset: i64, mut reply: fuser::ReplyDirectory) {
        debug!("New request");
        struct ReplyDirectory<'a> {
            inner: &'a mut fuser::ReplyDirectory,
            count: &'a mut usize,
        }

        impl DirectoryReplier for ReplyDirectory<'_> {
            fn add(&mut self, entry: DirectoryEntry) -> bool {
                let result = self.inner.add(entry.ino, entry.offset, entry.attr.kind, entry.name);
                if !result {
                    *self.count += 1;
                }
                result
            }
        }

        let mut count = 0;
        let replier = ReplyDirectory {
            inner: &mut reply,
            count: &mut count,
        };

        match block_on(self.fs.readdir(parent, fh, offset, replier).in_current_span()) {
            Ok(_) => {
                reply.ok();
                metrics::histogram!("fuse.readdir.entries").record(count as f64);
            }
            Err(e) => fuse_error!("readdir", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=parent, fh=fh, offset=offset, pid=req.pid()))]
    fn readdirplus(
        &self,
        req: &Request<'_>,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        mut reply: fuser::ReplyDirectoryPlus,
    ) {
        debug!("New request");
        struct ReplyDirectoryPlus<'a> {
            inner: &'a mut fuser::ReplyDirectoryPlus,
            count: &'a mut usize,
        }

        impl DirectoryReplier for ReplyDirectoryPlus<'_> {
            fn add(&mut self, entry: DirectoryEntry) -> bool {
                let result = self.inner.add(
                    entry.ino,
                    entry.offset,
                    entry.name,
                    &entry.ttl,
                    &entry.attr,
                    entry.generation,
                );
                if !result {
                    *self.count += 1;
                }
                result
            }
        }

        let mut count = 0;
        let replier = ReplyDirectoryPlus {
            inner: &mut reply,
            count: &mut count,
        };

        match block_on(self.fs.readdirplus(parent, fh, offset, replier).in_current_span()) {
            Ok(_) => {
                reply.ok();
                metrics::histogram!("fuse.readdirplus.entries").record(count as f64);
            }
            Err(e) => fuse_error!("readdirplus", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=ino, fh=fh, datasync=datasync, name=field::Empty, pid=req.pid()))]
    fn fsync(&self, req: &Request<'_>, ino: u64, fh: u64, datasync: bool, reply: ReplyEmpty) {
        debug!("New request");
        match block_on(self.fs.fsync(ino, fh, datasync).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("fsync", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=ino, fh=fh, name=field::Empty, pid=req.pid()))]
    fn flush(&self, req: &Request<'_>, ino: u64, fh: u64, lock_owner: u64, reply: ReplyEmpty) {
        debug!("New request");
        match block_on(self.fs.flush(ino, fh, lock_owner, req.pid()).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("flush", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=ino, fh=fh, name=field::Empty, pid=req.pid()))]
    fn release(
        &self,
        req: &Request<'_>,
        ino: InodeNo,
        fh: u64,
        flags: i32,
        lock_owner: Option<u64>,
        flush: bool,
        reply: ReplyEmpty,
    ) {
        debug!("New request");
        match block_on(self.fs.release(ino, fh, flags, lock_owner, flush).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("release", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=ino, fh=fh, name=field::Empty, pid=req.pid()))]
    fn releasedir(&self, req: &Request<'_>, ino: u64, fh: u64, flags: i32, reply: ReplyEmpty) {
        debug!("New request");
        match block_on(self.fs.releasedir(ino, fh, flags).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("releasedir", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), parent=parent, name=?name, pid=req.pid()))]
    fn mknod(
        &self,
        req: &Request<'_>,
        parent: InodeNo,
        name: &OsStr,
        mode: u32,
        umask: u32,
        rdev: u32,
        reply: ReplyEntry,
    ) {
        debug!("New request");
        // mode_t is u32 on Linux but u16 on macOS, so cast it here
        let mode = mode as libc::mode_t;

        match block_on(self.fs.mknod(parent, name, mode, umask, rdev).in_current_span()) {
            Ok(entry) => reply.entry(&entry.ttl, &entry.attr, entry.generation),
            Err(e) => fuse_error!("mknod", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), parent=parent, name=?name, pid=req.pid()))]
    fn mkdir(&self, req: &Request<'_>, parent: u64, name: &OsStr, mode: u32, umask: u32, reply: ReplyEntry) {
        debug!("New request");
        // mode_t is u32 on Linux but u16 on macOS, so cast it here
        let mode = mode as libc::mode_t;

        match block_on(self.fs.mkdir(parent, name, mode, umask).in_current_span()) {
            Ok(entry) => reply.entry(&entry.ttl, &entry.attr, entry.generation),
            Err(e) => fuse_error!("mkdir", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=ino, fh=fh, offset=offset, length=data.len(), name=field::Empty, pid=req.pid()))]
    fn write(
        &self,
        req: &Request<'_>,
        ino: InodeNo,
        fh: u64,
        offset: i64,
        data: &[u8],
        write_flags: u32,
        flags: i32,
        lock_owner: Option<u64>,
        reply: ReplyWrite,
    ) {
        debug!("New request");
        match block_on(
            self.fs
                .write(ino, fh, offset, data, write_flags, flags, lock_owner)
                .in_current_span(),
        ) {
            Ok(bytes_written) => {
                reply.written(bytes_written);
                metrics::counter!("fuse.total_bytes", "type" => "write").increment(bytes_written as u64);
                metrics::histogram!(FUSE_IO_SIZE, ATTR_FUSE_REQUEST => "write").record(bytes_written as f64);
            }
            Err(e) => fuse_error!("write", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), parent=parent, name=?name, pid=req.pid()))]
    fn rmdir(&self, req: &Request<'_>, parent: u64, name: &OsStr, reply: ReplyEmpty) {
        debug!("New request");
        match block_on(self.fs.rmdir(parent, name).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("rmdir", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), parent=parent, name=?name, pid=req.pid()))]
    fn unlink(&self, req: &Request<'_>, parent: InodeNo, name: &OsStr, reply: ReplyEmpty) {
        debug!("New request");
        match block_on(self.fs.unlink(parent, name).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("unlink", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=ino, fh=_fh, name=field::Empty, pid=req.pid()))]
    fn setattr(
        &self,
        req: &Request<'_>,
        ino: u64,
        _mode: Option<u32>,
        _uid: Option<u32>,
        _gid: Option<u32>,
        size: Option<u64>,
        atime: Option<TimeOrNow>,
        mtime: Option<TimeOrNow>,
        _ctime: Option<SystemTime>,
        _fh: Option<u64>,
        _crtime: Option<SystemTime>,
        _chgtime: Option<SystemTime>,
        _bkuptime: Option<SystemTime>,
        flags: Option<u32>,
        reply: ReplyAttr,
    ) {
        debug!("New request");
        let atime = atime.map(|t| match t {
            TimeOrNow::SpecificTime(st) => OffsetDateTime::from(st),
            TimeOrNow::Now => OffsetDateTime::now_utc(),
        });
        let mtime = mtime.map(|t| match t {
            TimeOrNow::SpecificTime(st) => OffsetDateTime::from(st),
            TimeOrNow::Now => OffsetDateTime::now_utc(),
        });
        match block_on(self.fs.setattr(ino, atime, mtime, size, flags).in_current_span()) {
            Ok(attr) => reply.attr(&attr.ttl, &attr.attr),
            Err(e) => fuse_error!("setattr", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), parent=parent, name=?name, newparent=newparent, newname=?newname, pid=req.pid()))]
    fn rename(
        &self,
        req: &Request<'_>,
        parent: u64,
        name: &OsStr,
        newparent: u64,
        newname: &OsStr,
        flags: u32,
        reply: ReplyEmpty,
    ) {
        debug!("New request");
        match block_on(
            self.fs
                .rename(parent, name, newparent, newname, flags.into())
                .in_current_span(),
        ) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("rename", reply, e, self, req),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=req.unique(), ino=ino, pid=req.pid()))]
    fn statfs(&self, req: &Request<'_>, ino: u64, reply: ReplyStatfs) {
        debug!("New request");
        match block_on(self.fs.statfs(ino).in_current_span()) {
            Ok(statfs) => reply.statfs(
                statfs.total_blocks,
                statfs.free_blocks,
                statfs.available_blocks,
                statfs.total_inodes,
                statfs.free_inodes,
                statfs.block_size,
                statfs.maximum_name_length,
                statfs.fragment_size,
            ),
            Err(e) => fuse_error!("statfs", reply, e, self, req),
        }
    }

    // Everything below here is stubs for unsupported functions so we log them correctly

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, pid=_req.pid()))]
    fn readlink(&self, _req: &Request<'_>, _ino: u64, reply: ReplyData) {
        fuse_unsupported!("readlink", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=_parent, name=?_name, link=?_link, pid=_req.pid()))]
    fn symlink(&self, _req: &Request<'_>, _parent: u64, _name: &OsStr, _link: &Path, reply: ReplyEntry) {
        // Userspace expects EPERM for link/symlink if unsupported
        fuse_unsupported!("symlink", reply, libc::EPERM);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, newparent=_newparent, newname=?_newname, pid=_req.pid()))]
    fn link(&self, _req: &Request<'_>, _ino: u64, _newparent: u64, _newname: &OsStr, reply: ReplyEntry) {
        // Userspace expects EPERM for link/symlink if unsupported
        fuse_unsupported!("link", reply, libc::EPERM);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, fh=_fh, datasync=_datasync, pid=_req.pid()))]
    fn fsyncdir(&self, _req: &Request<'_>, _ino: u64, _fh: u64, _datasync: bool, reply: ReplyEmpty) {
        fuse_unsupported!("fsyncdir", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, name=?_name, pid=_req.pid()))]
    fn setxattr(
        &self,
        _req: &Request<'_>,
        _ino: u64,
        _name: &OsStr,
        _value: &[u8],
        _flags: i32,
        _position: u32,
        reply: ReplyEmpty,
    ) {
        fuse_unsupported!("setxattr", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, name=?_name, pid=_req.pid()))]
    fn getxattr(&self, _req: &Request<'_>, _ino: u64, _name: &OsStr, _size: u32, reply: ReplyXattr) {
        fuse_unsupported!("getxattr", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, pid=_req.pid()))]
    fn listxattr(&self, _req: &Request<'_>, _ino: u64, _size: u32, reply: ReplyXattr) {
        fuse_unsupported!("listxattr", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, name=?_name, pid=_req.pid()))]
    fn removexattr(&self, _req: &Request<'_>, _ino: u64, _name: &OsStr, reply: ReplyEmpty) {
        fuse_unsupported!("removexattr", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, mask=_mask, pid=_req.pid()))]
    fn access(&self, _req: &Request<'_>, _ino: u64, _mask: i32, reply: ReplyEmpty) {
        fuse_unsupported!("access", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=_parent, name=?_name, pid=_req.pid()))]
    fn create(
        &self,
        _req: &Request<'_>,
        _parent: u64,
        _name: &OsStr,
        _mode: u32,
        _umask: u32,
        _flags: i32,
        reply: ReplyCreate,
    ) {
        fuse_unsupported!("create", reply, libc::ENOSYS, tracing::Level::DEBUG);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, fh=_fh, pid=pid))]
    fn getlk(
        &self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _lock_owner: u64,
        _start: u64,
        _end: u64,
        _typ: i32,
        pid: u32,
        reply: ReplyLock,
    ) {
        fuse_unsupported!("getlk", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, fh=_fh, pid=pid))]
    fn setlk(
        &self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _lock_owner: u64,
        _start: u64,
        _end: u64,
        _typ: i32,
        pid: u32,
        _sleep: bool,
        reply: ReplyEmpty,
    ) {
        fuse_unsupported!("setlk", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, pid=_req.pid()))]
    fn bmap(&self, _req: &Request<'_>, _ino: u64, _blocksize: u32, _idx: u64, reply: ReplyBmap) {
        fuse_unsupported!("bmap", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, fh=_fh, cmd=_cmd, pid=_req.pid()))]
    fn ioctl(
        &self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _flags: u32,
        _cmd: u32,
        _in_data: &[u8],
        _out_size: u32,
        reply: ReplyIoctl,
    ) {
        fuse_unsupported!("ioctl", reply, libc::ENOSYS, tracing::Level::DEBUG);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, fh=_fh, offset=_offset, length=_length, pid=_req.pid()))]
    fn fallocate(
        &self,
        _req: &Request<'_>,
        _ino: u64,
        _fh: u64,
        _offset: i64,
        _length: i64,
        _mode: i32,
        reply: ReplyEmpty,
    ) {
        fuse_unsupported!("fallocate", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, fh=_fh, offset=_offset, whence=_whence, pid=_req.pid()))]
    fn lseek(&self, _req: &Request<'_>, _ino: u64, _fh: u64, _offset: i64, _whence: i32, reply: ReplyLseek) {
        fuse_unsupported!("lseek", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino_in=_ino_in, fh_in=_fh_in, offset_in=_offset_in, ino_out=_ino_out, fh_out=_fh_out, offset_out=_offset_out, len=_len, pid=_req.pid()))]
    fn copy_file_range(
        &self,
        _req: &Request<'_>,
        _ino_in: u64,
        _fh_in: u64,
        _offset_in: i64,
        _ino_out: u64,
        _fh_out: u64,
        _offset_out: i64,
        _len: u64,
        _flags: u32,
        reply: ReplyWrite,
    ) {
        fuse_unsupported!("copy_file_range", reply);
    }

    #[cfg(target_os = "macos")]
    #[instrument(level="warn", skip_all, fields(req=_req.unique(), name=?_name, pid=_req.pid()))]
    fn setvolname(&self, _req: &Request<'_>, _name: &OsStr, reply: ReplyEmpty) {
        fuse_unsupported!("setvolname", reply);
    }

    #[cfg(target_os = "macos")]
    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=_parent, name=?_name, newparent=_newparent, newname=?_newname, pid=_req.pid()))]
    fn exchange(
        &self,
        _req: &Request<'_>,
        _parent: u64,
        _name: &OsStr,
        _newparent: u64,
        _newname: &OsStr,
        _options: u64,
        reply: ReplyEmpty,
    ) {
        fuse_unsupported!("exchange", reply);
    }

    #[cfg(target_os = "macos")]
    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=_ino, pid=_req.pid()))]
    fn getxtimes(&self, _req: &Request<'_>, _ino: u64, reply: ReplyXTimes) {
        fuse_unsupported!("getxtimes", reply);
    }
}
