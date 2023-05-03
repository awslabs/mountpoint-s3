use futures::executor::block_on;
use futures::task::Spawn;
use std::ffi::OsStr;
use std::time::Duration;
use tracing::{instrument, Instrument};

use crate::fs::{DirectoryReplier, InodeNo, ReadReplier, S3Filesystem, S3FilesystemConfig};
use crate::prefix::Prefix;
use fuser::{
    FileAttr, Filesystem, KernelConfig, ReplyAttr, ReplyData, ReplyEmpty, ReplyEntry, ReplyOpen, ReplyWrite, Request,
};
use mountpoint_s3_client::ObjectClient;

pub mod session;

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
    #[instrument(level = "debug", skip_all)]
    fn init(&self, _req: &Request<'_>, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        block_on(self.fs.init(config).in_current_span())
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), ino=parent, name=?name))]
    fn lookup(&self, _req: &Request<'_>, parent: InodeNo, name: &OsStr, reply: ReplyEntry) {
        match block_on(self.fs.lookup(parent, name).in_current_span()) {
            Ok(entry) => reply.entry(&entry.ttl, &entry.attr, entry.generation),
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), ino=ino))]
    fn getattr(&self, _req: &Request<'_>, ino: InodeNo, reply: ReplyAttr) {
        match block_on(self.fs.getattr(ino).in_current_span()) {
            Ok(attr) => reply.attr(&attr.ttl, &attr.attr),
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), ino=ino))]
    fn open(&self, _req: &Request<'_>, ino: InodeNo, flags: i32, reply: ReplyOpen) {
        match block_on(self.fs.open(ino, flags).in_current_span()) {
            Ok(opened) => reply.opened(opened.fh, opened.flags),
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, offset=offset, size=size))]
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

            fn error(self, error: libc::c_int) -> Replied {
                self.inner.error(error);
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

        metrics::counter!("fuse.bytes_read", bytes_sent as u64);
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), ino=parent))]
    fn opendir(&self, _req: &Request<'_>, parent: InodeNo, flags: i32, reply: ReplyOpen) {
        match block_on(self.fs.opendir(parent, flags).in_current_span()) {
            Ok(opened) => reply.opened(opened.fh, opened.flags),
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), ino=parent, fh=fh, offset=offset))]
    fn readdir(&self, _req: &Request<'_>, parent: InodeNo, fh: u64, offset: i64, mut reply: fuser::ReplyDirectory) {
        struct ReplyDirectory<'a> {
            inner: &'a mut fuser::ReplyDirectory,
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
                self.inner.add(ino, offset, attr.kind, name)
            }
        }

        let replier = ReplyDirectory { inner: &mut reply };

        match block_on(self.fs.readdir(parent, fh, offset, replier).in_current_span()) {
            Ok(_) => reply.ok(),
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), ino=parent, fh=fh, offset=offset))]
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
                self.inner.add(ino, offset, name, &ttl, &attr, generation)
            }
        }

        let replier = ReplyDirectoryPlus { inner: &mut reply };

        match block_on(self.fs.readdir(parent, fh, offset, replier).in_current_span()) {
            Ok(_) => reply.ok(),
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), ino=ino, fh=fh))]
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
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), ino=ino, fh=fh))]
    fn releasedir(&self, _req: &Request<'_>, ino: u64, fh: u64, flags: i32, reply: ReplyEmpty) {
        match block_on(self.fs.releasedir(ino, fh, flags).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), parent=parent, name=?name))]
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
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), parent=parent, name=?name))]
    fn mkdir(&self, _req: &Request<'_>, parent: u64, name: &OsStr, mode: u32, umask: u32, reply: ReplyEntry) {
        // mode_t is u32 on Linux but u16 on macOS, so cast it here
        let mode = mode as libc::mode_t;

        match block_on(self.fs.mkdir(parent, name, mode, umask).in_current_span()) {
            Ok(entry) => reply.entry(&entry.ttl, &entry.attr, entry.generation),
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), ino=ino, fh=fh, offset=offset, length=data.len()))]
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
            Ok(bytes_written) => reply.written(bytes_written),
            Err(e) => reply.error(e),
        }
    }

    #[instrument(level="debug", skip_all, fields(req=_req.unique(), parent=parent, name=?name))]
    fn unlink(&self, _req: &Request<'_>, parent: InodeNo, name: &OsStr, reply: ReplyEmpty) {
        match block_on(self.fs.unlink(parent, name).in_current_span()) {
            Ok(()) => reply.ok(),
            Err(e) => reply.error(e),
        }
    }
}
