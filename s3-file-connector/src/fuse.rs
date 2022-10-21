use async_trait::async_trait;
use std::ffi::OsStr;
use std::time::Duration;

use crate::fs::{DirectoryReplier, Inode, ReadReplier, S3Filesystem, S3FilesystemConfig};
use fuser::{FileAttr, Filesystem, KernelConfig, ReplyAttr, ReplyData, ReplyEmpty, ReplyEntry, ReplyOpen, Request};
use s3_client::ObjectClient;

/// This is just a thin wrapper around [S3Filesystem] that implements the actual `fuser` protocol,
/// so that we can test our actual filesystem implementation without having actual FUSE in the loop.
pub struct S3FuseFilesystem<Client: ObjectClient> {
    fs: S3Filesystem<Client>,
}

impl<Client: ObjectClient + Send + Sync + 'static> S3FuseFilesystem<Client> {
    pub fn new(client: Client, bucket: &str, prefix: &str, config: S3FilesystemConfig) -> Self {
        let fs = S3Filesystem::new(client, bucket, prefix, config);

        Self { fs }
    }
}

#[async_trait]
impl<Client: ObjectClient + Send + Sync + 'static> Filesystem for S3FuseFilesystem<Client> {
    async fn init(&self, _req: &Request<'_>, config: &mut KernelConfig) -> Result<(), libc::c_int> {
        self.fs.init(config).await
    }

    async fn lookup(&self, _req: &Request<'_>, parent: Inode, name: &OsStr, reply: ReplyEntry) {
        match self.fs.lookup(parent, name).await {
            Ok(entry) => reply.entry(&entry.ttl, &entry.attr, entry.generation),
            Err(e) => reply.error(e),
        }
    }

    async fn getattr(&self, _req: &Request<'_>, ino: Inode, reply: ReplyAttr) {
        match self.fs.getattr(ino).await {
            Ok(attr) => reply.attr(&attr.ttl, &attr.attr),
            Err(e) => reply.error(e),
        }
    }

    async fn open(&self, _req: &Request<'_>, ino: Inode, flags: i32, reply: ReplyOpen) {
        match self.fs.open(ino, flags).await {
            Ok(opened) => reply.opened(opened.fh, opened.flags),
            Err(e) => reply.error(e),
        }
    }

    async fn read(
        &self,
        _req: &Request<'_>,
        ino: Inode,
        fh: u64,
        offset: i64,
        size: u32,
        flags: i32,
        lock: Option<u64>,
        reply: ReplyData,
    ) {
        struct Replied(());

        struct ReplyRead {
            inner: fuser::ReplyData,
        }

        impl ReadReplier for ReplyRead {
            type Replied = Replied;

            fn data(self, data: &[u8]) -> Replied {
                self.inner.data(data);
                Replied(())
            }

            fn error(self, error: libc::c_int) -> Replied {
                self.inner.error(error);
                Replied(())
            }
        }

        let replier = ReplyRead { inner: reply };
        self.fs.read(ino, fh, offset, size, flags, lock, replier).await;
        // return value of read is proof a reply was sent
    }

    async fn opendir(&self, _req: &Request<'_>, parent: Inode, flags: i32, reply: ReplyOpen) {
        match self.fs.opendir(parent, flags).await {
            Ok(opened) => reply.opened(opened.fh, opened.flags),
            Err(e) => reply.error(e),
        }
    }

    async fn readdir(&self, _req: &Request<'_>, parent: Inode, fh: u64, offset: i64, mut reply: fuser::ReplyDirectory) {
        struct ReplyDirectory<'a> {
            inner: &'a mut fuser::ReplyDirectory,
        }

        impl<'a> DirectoryReplier for ReplyDirectory<'a> {
            fn add<T: AsRef<OsStr>>(
                &mut self,
                ino: u64,
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

        match self.fs.readdir(parent, fh, offset, replier).await {
            Ok(_) => reply.ok(),
            Err(e) => reply.error(e),
        }
    }

    async fn readdirplus(
        &self,
        _req: &Request<'_>,
        parent: u64,
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

        match self.fs.readdir(parent, fh, offset, replier).await {
            Ok(_) => reply.ok(),
            Err(e) => reply.error(e),
        }
    }

    async fn release(
        &self,
        _req: &Request<'_>,
        ino: u64,
        fh: u64,
        flags: i32,
        lock_owner: Option<u64>,
        flush: bool,
        reply: ReplyEmpty,
    ) {
        match self.fs.release(ino, fh, flags, lock_owner, flush).await {
            Ok(()) => reply.ok(),
            Err(e) => reply.error(e),
        }
    }
}
