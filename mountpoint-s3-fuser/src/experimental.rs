#![allow(missing_docs, missing_debug_implementations)]

use std::ffi::OsStr;
use std::sync::Arc;
use std::time::Duration;

use crate::Errno;
use crate::FileAttr;
use crate::FileHandle;
use crate::FileType;
use crate::Filesystem;
use crate::Generation;
use crate::INodeNo;
use crate::LockOwner;
use crate::OpenFlags;
use crate::ReplyAttr;
use crate::ReplyData;
use crate::ReplyDirectory;
use crate::ReplyEntry;
use crate::Request;
use crate::RequestId;

pub type Result<T> = std::result::Result<T, Errno>;

/// Standard request context for all filesystem operations
pub struct RequestContext {
    uid: u32,
    gid: u32,
    pid: u32,
    request_id: RequestId,
}

impl RequestContext {
    fn new(uid: u32, gid: u32, pid: u32, request_id: RequestId) -> Self {
        Self {
            uid,
            gid,
            pid,
            request_id,
        }
    }

    /// The user making the request
    pub fn user_id(&self) -> u32 {
        self.uid
    }

    /// The group the user belongs to
    pub fn group_id(&self) -> u32 {
        self.gid
    }

    /// The process ID of the process that made the request
    pub fn process_id(&self) -> u32 {
        self.pid
    }

    /// The unique ID of the request
    pub fn request_id(&self) -> RequestId {
        self.request_id
    }
}

impl From<&Request> for RequestContext {
    fn from(req: &Request) -> Self {
        Self::new(req.uid(), req.gid(), req.pid(), req.unique())
    }
}

pub struct DirEntListBuilder<'a> {
    entries: &'a mut ReplyDirectory,
}

impl DirEntListBuilder<'_> {
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
        self.entries.add(ino, offset, kind, name)
    }
}

/// Response from [`AsyncFilesystem::lookup`]
#[derive(Debug)]
pub struct LookupResponse {
    ttl: Duration,
    attr: FileAttr,
    generation: Generation,
}

impl LookupResponse {
    /// `ttl` is the time for which this response may be cached
    /// `attr` is the attributes of the file
    /// `generation`
    pub fn new(ttl: Duration, attr: FileAttr, generation: Generation) -> Self {
        Self {
            ttl,
            attr,
            generation,
        }
    }
}

/// Response from [`AsyncFilesystem::lookup`]
#[derive(Debug)]
pub struct GetAttrResponse {
    ttl: Duration,
    attr: FileAttr,
}

impl GetAttrResponse {
    pub fn new(ttl: Duration, attr: FileAttr) -> Self {
        Self { ttl, attr }
    }
}

/// Adapter to allow running an [`AsyncFilesystem`] with tokio's runtime.
#[derive(Debug)]
pub struct TokioAdapter<T: AsyncFilesystem> {
    inner: Arc<T>,
    runtime: tokio::runtime::Runtime,
}

impl<T: AsyncFilesystem> TokioAdapter<T> {
    pub fn new(inner: T) -> Self {
        Self {
            inner: Arc::new(inner),
            runtime: tokio::runtime::Builder::new_multi_thread()
                .enable_all()
                .build()
                .unwrap(),
        }
    }
}

impl<T: AsyncFilesystem + Send + Sync + 'static> Filesystem for TokioAdapter<T> {
    fn lookup(&self, req: &Request, parent: INodeNo, name: &OsStr, reply: ReplyEntry) {
        let context: RequestContext = req.into();
        let name = name.to_os_string();
        let inner = self.inner.clone();
        self.runtime.spawn(async move {
            match inner.lookup(&context, parent, &name).await {
                Ok(LookupResponse {
                    ttl,
                    attr,
                    generation,
                }) => reply.entry(&ttl, &attr, generation),
                Err(e) => reply.error(e),
            }
        });
    }

    fn getattr(&self, req: &Request, ino: INodeNo, fh: Option<FileHandle>, reply: ReplyAttr) {
        let context: RequestContext = req.into();
        let inner = self.inner.clone();
        self.runtime.spawn(async move {
            match inner.getattr(&context, ino, fh).await {
                Ok(GetAttrResponse { ttl, attr }) => reply.attr(&ttl, &attr),
                Err(e) => reply.error(e),
            }
        });
    }

    fn read(
        &self,
        req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        offset: u64,
        size: u32,
        flags: OpenFlags,
        lock_owner: Option<LockOwner>,
        reply: ReplyData,
    ) {
        let context: RequestContext = req.into();
        let inner = self.inner.clone();
        self.runtime.spawn(async move {
            let mut buf = vec![];
            match inner
                .read(&context, ino, fh, offset, size, flags, lock_owner, &mut buf)
                .await
            {
                Ok(()) => reply.data(&buf),
                Err(e) => reply.error(e),
            }
        });
    }

    fn readdir(
        &self,
        req: &Request,
        ino: INodeNo,
        fh: FileHandle,
        offset: u64,
        mut reply: ReplyDirectory,
    ) {
        let context: RequestContext = req.into();
        let inner = self.inner.clone();
        self.runtime.spawn(async move {
            let builder = DirEntListBuilder {
                entries: &mut reply,
            };
            match inner.readdir(&context, ino, fh, offset, builder).await {
                Ok(()) => reply.ok(),
                Err(e) => reply.error(e),
            }
        });
    }
}

/// Experimental async API. Expect this to change in the future
#[async_trait::async_trait]
pub trait AsyncFilesystem: Send + Sync + 'static {
    async fn lookup(
        &self,
        context: &RequestContext,
        parent: INodeNo,
        name: &OsStr,
    ) -> Result<LookupResponse>;

    async fn getattr(
        &self,
        context: &RequestContext,
        ino: INodeNo,
        file_handle: Option<FileHandle>,
    ) -> Result<GetAttrResponse>;

    async fn read(
        &self,
        context: &RequestContext,
        ino: INodeNo,
        file_handle: FileHandle,
        offset: u64,
        size: u32,
        flags: OpenFlags,
        lock: Option<LockOwner>,
        out_data: &mut Vec<u8>,
    ) -> Result<()>;

    /// Use the builder to construct a directory listing and then return it.
    /// Be sure to check if the builder has become full
    async fn readdir(
        &self,
        context: &RequestContext,
        ino: INodeNo,
        file_handle: FileHandle,
        offset: u64,
        builder: DirEntListBuilder<'_>,
    ) -> Result<()>;
}
