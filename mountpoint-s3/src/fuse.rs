//! Links _fuser_ method calls into Mountpoint's filesystem code in [crate::fs].

use futures::executor::block_on;
use futures::task::Spawn;
use std::ffi::OsStr;
use std::path::Path;
use std::time::{Duration, SystemTime};
use time::OffsetDateTime;
use tracing::{instrument, Instrument};

use crate::fs::{self, DirectoryReplier, InodeNo, ReadReplier, S3Filesystem, S3FilesystemConfig, ToErrno};
use crate::prefix::Prefix;
#[cfg(target_os = "macos")]
use fuser::ReplyXTimes;
use fuser::{
    FileAttr, Filesystem, KernelConfig, ReplyAttr, ReplyBmap, ReplyCreate, ReplyData, ReplyEmpty, ReplyEntry,
    ReplyIoctl, ReplyLock, ReplyLseek, ReplyOpen, ReplyWrite, ReplyXattr, Request, TimeOrNow,
};
use mountpoint_s3_client::ObjectClient;

pub mod session;

/// Handle an error in a FUSE handler. This logs the appropriate error message and then calls
/// `reply` on the given replier with the error's corresponding errno.
macro_rules! fuse_error {
    ($name:literal, $reply:expr, $err:expr) => {{
        let err = $err;
        ::tracing::warn!("{} failed: {:#}", $name, err);
        ::metrics::counter!("fuse.op_failures", 1, "op" => $name);
        $reply.error(err.to_errno());
    }};
}

/// Generic handler for unimplemented FUSE operations
macro_rules! fuse_unsupported {
    ($name:literal, $reply:expr, $err:expr) => {{
        ::tracing::warn!("{} failed: operation not supported by Mountpoint", $name);
        ::metrics::counter!("fuse.op_failures", 1, "op" => $name);
        ::metrics::counter!("fuse.op_unimplemented", 1, "op" => $name);
        $reply.error($err);
    }};
    ($name:literal, $reply:expr) => {
        fuse_unsupported!($name, $reply, libc::ENOSYS);
    }
}

/// This is just a thin wrapper around [S3Filesystem] that implements the actual `fuser` protocol,
/// so that we can test our actual filesystem implementation without having actual FUSE in the loop.
pub struct S3FuseFilesystem<Client: ObjectClient, Runtime> {
    fs: S3Filesystem<Client, Runtime>,
}

impl<Client, Runtime> S3FuseFilesystem<Client, Runtime>
where
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn + Send + Sync,
{
    pub fn new(client: Client, runtime: Runtime, bucket: &str, prefix: &Prefix, config: S3FilesystemConfig) -> Self {
        let fs = S3Filesystem::new(client, runtime, bucket, prefix, config);

        Self { fs }
    }
}

impl<Client, Runtime> Filesystem for S3FuseFilesystem<Client, Runtime>
where
    Client: ObjectClient + Send + Sync + 'static,
    Runtime: Spawn + Send + Sync,
{
    #[instrument(level="warn", skip_all, fields(req=_req.unique()))]
    fn init(&self, _req: &Request<'_>, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        block_on(self.fs.init(config).in_current_span())
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=parent, name=?name))]
    fn lookup(&self, _req: &Request<'_>, parent: InodeNo, name: &OsStr, reply: ReplyEntry) {
        match block_on(self.fs.lookup(parent, name).in_current_span()) {
            Ok(entry) => reply.entry(&entry.ttl, &entry.attr, entry.generation),
            Err(e) => fuse_error!("lookup", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino))]
    fn getattr(&self, _req: &Request<'_>, ino: InodeNo, reply: ReplyAttr) {
        match block_on(self.fs.getattr(ino).in_current_span()) {
            Ok(attr) => reply.attr(&attr.ttl, &attr.attr),
            Err(e) => fuse_error!("getattr", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino, nlookup))]
    fn forget(&self, _req: &Request<'_>, ino: u64, nlookup: u64) {
        block_on(self.fs.forget(ino, nlookup));
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino))]
    fn open(&self, _req: &Request<'_>, ino: InodeNo, flags: i32, reply: ReplyOpen) {
        match block_on(self.fs.open(ino, flags).in_current_span()) {
            Ok(opened) => reply.opened(opened.fh, opened.flags),
            Err(e) => fuse_error!("open", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, offset=offset, size=size))]
    fn read(
        &self,
        _req: &Request<'_>,
        ino: InodeNo,
        fh: u64,
        offset: i64,
        size: u32,
        flags: i32,
        lock: Option<u64>,
        reply: ReplyData,
    ) {
        let mut bytes_sent = 0;

        struct Replied(());

        struct ReplyRead<'a> {
            inner: fuser::ReplyData,
            bytes_sent: &'a mut usize,
        }

        impl ReadReplier for ReplyRead<'_> {
            type Replied = Replied;

            fn data(self, data: &[u8]) -> Replied {
                self.inner.data(data);
                *self.bytes_sent = data.len();
                Replied(())
            }

            fn error(self, error: fs::Error) -> Replied {
                fuse_error!("read", self.inner, error);
                Replied(())
            }
        }

        let replier = ReplyRead {
            inner: reply,
            bytes_sent: &mut bytes_sent,
        };
        block_on(
            self.fs
                .read(ino, fh, offset, size, flags, lock, replier)
                .in_current_span(),
        );
        // return value of read is proof a reply was sent

        metrics::counter!("fuse.total_bytes", bytes_sent as u64, "type" => "read");
        metrics::histogram!("fuse.io_size", bytes_sent as f64, "type" => "read");
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=parent))]
    fn opendir(&self, _req: &Request<'_>, parent: InodeNo, flags: i32, reply: ReplyOpen) {
        match block_on(self.fs.opendir(parent, flags).in_current_span()) {
            Ok(opened) => reply.opened(opened.fh, opened.flags),
            Err(e) => fuse_error!("opendir", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=parent, fh=fh, offset=offset))]
    fn readdir(&self, _req: &Request<'_>, parent: InodeNo, fh: u64, offset: i64, mut reply: fuser::ReplyDirectory) {
        struct ReplyDirectory<'a> {
            inner: &'a mut fuser::ReplyDirectory,
            count: &'a mut usize,
        }

        impl<'a> DirectoryReplier for ReplyDirectory<'a> {
            fn add<T: AsRef<OsStr>>(
                &mut self,
                ino: InodeNo,
                offset: i64,
                name: T,
                attr: FileAttr,
                _generation: u64,
                _ttl: Duration,
            ) -> bool {
                let result = self.inner.add(ino, offset, attr.kind, name);
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
                metrics::counter!("fuse.readdir.entries", count as u64);
            }
            Err(e) => fuse_error!("readdir", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=parent, fh=fh, offset=offset))]
    fn readdirplus(
        &self,
        _req: &Request<'_>,
        parent: InodeNo,
        fh: u64,
        offset: i64,
        mut reply: fuser::ReplyDirectoryPlus,
    ) {
        struct ReplyDirectoryPlus<'a> {
            inner: &'a mut fuser::ReplyDirectoryPlus,
            count: &'a mut usize,
        }

        impl<'a> DirectoryReplier for ReplyDirectoryPlus<'a> {
            fn add<T: AsRef<OsStr>>(
                &mut self,
                ino: u64,
                offset: i64,
                name: T,
                attr: FileAttr,
                generation: u64,
                ttl: Duration,
            ) -> bool {
                let result = self.inner.add(ino, offset, name, &ttl, &attr, generation);
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
                metrics::counter!("fuse.readdirplus.entries", count as u64);
            }
            Err(e) => fuse_error!("readdirplus", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, datasync=datasync))]
    fn fsync(&self, _req: &Request<'_>, ino: u64, fh: u64, datasync: bool, reply: ReplyEmpty) {
        match block_on(self.fs.fsync(ino, fh, datasync).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("fsync", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh))]
    fn release(
        &self,
        _req: &Request<'_>,
        ino: InodeNo,
        fh: u64,
        flags: i32,
        lock_owner: Option<u64>,
        flush: bool,
        reply: ReplyEmpty,
    ) {
        match block_on(self.fs.release(ino, fh, flags, lock_owner, flush).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("release", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh))]
    fn releasedir(&self, _req: &Request<'_>, ino: u64, fh: u64, flags: i32, reply: ReplyEmpty) {
        match block_on(self.fs.releasedir(ino, fh, flags).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("releasedir", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=parent, name=?name))]
    fn mknod(
        &self,
        _req: &Request<'_>,
        parent: InodeNo,
        name: &OsStr,
        mode: u32,
        umask: u32,
        rdev: u32,
        reply: ReplyEntry,
    ) {
        // mode_t is u32 on Linux but u16 on macOS, so cast it here
        let mode = mode as libc::mode_t;

        match block_on(self.fs.mknod(parent, name, mode, umask, rdev).in_current_span()) {
            Ok(entry) => reply.entry(&entry.ttl, &entry.attr, entry.generation),
            Err(e) => fuse_error!("mknod", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=parent, name=?name))]
    fn mkdir(&self, _req: &Request<'_>, parent: u64, name: &OsStr, mode: u32, umask: u32, reply: ReplyEntry) {
        // mode_t is u32 on Linux but u16 on macOS, so cast it here
        let mode = mode as libc::mode_t;

        match block_on(self.fs.mkdir(parent, name, mode, umask).in_current_span()) {
            Ok(entry) => reply.entry(&entry.ttl, &entry.attr, entry.generation),
            Err(e) => fuse_error!("mkdir", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, offset=offset, length=data.len()))]
    fn write(
        &self,
        _req: &Request<'_>,
        ino: InodeNo,
        fh: u64,
        offset: i64,
        data: &[u8],
        write_flags: u32,
        flags: i32,
        lock_owner: Option<u64>,
        reply: ReplyWrite,
    ) {
        match block_on(
            self.fs
                .write(ino, fh, offset, data, write_flags, flags, lock_owner)
                .in_current_span(),
        ) {
            Ok(bytes_written) => {
                reply.written(bytes_written);
                metrics::counter!("fuse.total_bytes", bytes_written as u64, "type" => "write");
                metrics::histogram!("fuse.io_size", bytes_written as f64, "type" => "write");
            }
            Err(e) => fuse_error!("write", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=parent, name=?name))]
    fn rmdir(&self, _req: &Request<'_>, parent: u64, name: &OsStr, reply: ReplyEmpty) {
        match block_on(self.fs.rmdir(parent, name).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("rmdir", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=parent, name=?name))]
    fn unlink(&self, _req: &Request<'_>, parent: InodeNo, name: &OsStr, reply: ReplyEmpty) {
        match block_on(self.fs.unlink(parent, name).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => fuse_error!("unlink", reply, e),
        }
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino))]
    fn setattr(
        &self,
        _req: &Request<'_>,
        ino: u64,
        _mode: Option<u32>,
        _uid: Option<u32>,
        _gid: Option<u32>,
        _size: Option<u64>,
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
        let atime = atime.map(|t| match t {
            TimeOrNow::SpecificTime(st) => OffsetDateTime::from(st),
            TimeOrNow::Now => OffsetDateTime::now_utc(),
        });
        let mtime = mtime.map(|t| match t {
            TimeOrNow::SpecificTime(st) => OffsetDateTime::from(st),
            TimeOrNow::Now => OffsetDateTime::now_utc(),
        });
        match block_on(self.fs.setattr(ino, atime, mtime, flags).in_current_span()) {
            Ok(attr) => reply.attr(&attr.ttl, &attr.attr),
            Err(e) => fuse_error!("setattr", reply, e),
        }
    }

    // Everything below here is stubs for unsupported functions so we log them correctly

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino))]
    fn readlink(&self, _req: &Request<'_>, ino: u64, reply: ReplyData) {
        fuse_unsupported!("readlink", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=parent, name=?name, link=?link))]
    fn symlink(&self, _req: &Request<'_>, parent: u64, name: &OsStr, link: &Path, reply: ReplyEntry) {
        // Userspace expects EPERM for link/symlink if unsupported
        fuse_unsupported!("symlink", reply, libc::EPERM);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=parent, name=?name, newparent=newparent, newname=?newname))]
    fn rename(
        &self,
        _req: &Request<'_>,
        parent: u64,
        name: &OsStr,
        newparent: u64,
        newname: &OsStr,
        _flags: u32,
        reply: ReplyEmpty,
    ) {
        fuse_unsupported!("rename", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, newparent=newparent, newname=?newname))]
    fn link(&self, _req: &Request<'_>, ino: u64, newparent: u64, newname: &OsStr, reply: ReplyEntry) {
        // Userspace expects EPERM for link/symlink if unsupported
        fuse_unsupported!("link", reply, libc::EPERM);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh))]
    fn flush(&self, _req: &Request<'_>, ino: u64, fh: u64, _lock_owner: u64, reply: ReplyEmpty) {
        fuse_unsupported!("flush", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, datasync=datasync))]
    fn fsyncdir(&self, _req: &Request<'_>, ino: u64, fh: u64, datasync: bool, reply: ReplyEmpty) {
        fuse_unsupported!("fsyncdir", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, name=?name))]
    fn setxattr(
        &self,
        _req: &Request<'_>,
        ino: u64,
        name: &OsStr,
        _value: &[u8],
        _flags: i32,
        _position: u32,
        reply: ReplyEmpty,
    ) {
        fuse_unsupported!("setxattr", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, name=?name))]
    fn getxattr(&self, _req: &Request<'_>, ino: u64, name: &OsStr, _size: u32, reply: ReplyXattr) {
        fuse_unsupported!("getxattr", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino))]
    fn listxattr(&self, _req: &Request<'_>, ino: u64, _size: u32, reply: ReplyXattr) {
        fuse_unsupported!("listxattr", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, name=?name))]
    fn removexattr(&self, _req: &Request<'_>, ino: u64, name: &OsStr, reply: ReplyEmpty) {
        fuse_unsupported!("removexattr", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, mask=mask))]
    fn access(&self, _req: &Request<'_>, ino: u64, mask: i32, reply: ReplyEmpty) {
        fuse_unsupported!("access", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=parent, name=?name))]
    fn create(
        &self,
        _req: &Request<'_>,
        parent: u64,
        name: &OsStr,
        _mode: u32,
        _umask: u32,
        _flags: i32,
        reply: ReplyCreate,
    ) {
        fuse_unsupported!("create", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, pid=pid))]
    fn getlk(
        &self,
        _req: &Request<'_>,
        ino: u64,
        fh: u64,
        _lock_owner: u64,
        _start: u64,
        _end: u64,
        _typ: i32,
        pid: u32,
        reply: ReplyLock,
    ) {
        fuse_unsupported!("getlk", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, pid=pid))]
    fn setlk(
        &self,
        _req: &Request<'_>,
        ino: u64,
        fh: u64,
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

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino))]
    fn bmap(&self, _req: &Request<'_>, ino: u64, _blocksize: u32, _idx: u64, reply: ReplyBmap) {
        fuse_unsupported!("bmap", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, cmd=cmd))]
    fn ioctl(
        &self,
        _req: &Request<'_>,
        ino: u64,
        fh: u64,
        _flags: u32,
        cmd: u32,
        _in_data: &[u8],
        _out_size: u32,
        reply: ReplyIoctl,
    ) {
        fuse_unsupported!("ioctl", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, offset=offset, length=length))]
    fn fallocate(
        &self,
        _req: &Request<'_>,
        ino: u64,
        fh: u64,
        offset: i64,
        length: i64,
        _mode: i32,
        reply: ReplyEmpty,
    ) {
        fuse_unsupported!("fallocate", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, offset=offset, whence=whence))]
    fn lseek(&self, _req: &Request<'_>, ino: u64, fh: u64, offset: i64, whence: i32, reply: ReplyLseek) {
        fuse_unsupported!("lseek", reply);
    }

    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino_in=ino_in, fh_in=fh_in, offset_in=offset_in, ino_out=ino_out, fh_out=fh_out, offset_out=offset_out, len=len))]
    fn copy_file_range(
        &self,
        _req: &Request<'_>,
        ino_in: u64,
        fh_in: u64,
        offset_in: i64,
        ino_out: u64,
        fh_out: u64,
        offset_out: i64,
        len: u64,
        _flags: u32,
        reply: ReplyWrite,
    ) {
        fuse_unsupported!("copy_file_range", reply);
    }

    #[cfg(target_os = "macos")]
    #[instrument(level="warn", skip_all, fields(req=_req.unique(), name=?name))]
    fn setvolname(&self, _req: &Request<'_>, name: &OsStr, reply: ReplyEmpty) {
        fuse_unsupported!("setvolname", reply);
    }

    #[cfg(target_os = "macos")]
    #[instrument(level="warn", skip_all, fields(req=_req.unique(), parent=parent, name=?name, newparent=newparent, newname=?newname))]
    fn exchange(
        &self,
        _req: &Request<'_>,
        parent: u64,
        name: &OsStr,
        newparent: u64,
        newname: &OsStr,
        _options: u64,
        reply: ReplyEmpty,
    ) {
        fuse_unsupported!("exchange", reply);
    }

    #[cfg(target_os = "macos")]
    #[instrument(level="warn", skip_all, fields(req=_req.unique(), ino=ino))]
    fn getxtimes(&self, _req: &Request<'_>, ino: u64, reply: ReplyXTimes) {
        fuse_unsupported!("getxtimes", reply);
    }
}
