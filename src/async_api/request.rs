//! Filesystem operation request
//!
//! A request represents information about a filesystem operation the kernel driver wants us to
//! perform.
//!
//! TODO: This module is meant to go away soon in favor of `ll::Request`.

#[cfg(feature = "async_impl")]
use crate::async_api::ActiveSession;
#[cfg(feature = "async_impl")]
use crate::ll::fuse_abi as abi;
#[cfg(feature = "async_impl")]
use libc::{EIO, ENOSYS, EPROTO};
use log::error;
#[cfg(feature = "async_impl")]
use log::{debug, warn};

use std::convert::TryFrom;

#[cfg(all(feature = "abi-7-28", feature = "async_impl"))]
use std::convert::TryInto;

#[cfg(feature = "async_impl")]
use std::path::Path;

#[cfg(feature = "async_impl")]
use std::sync::Arc;

#[cfg(feature = "abi-7-21")]
use crate::async_api::reply::ReplyDirectoryPlus;

#[cfg(feature = "async_impl")]
use crate::async_api::reply::{Reply, ReplyDirectory, ReplyEmpty, ReplyRaw};
#[cfg(feature = "async_impl")]
use crate::async_api::Filesystem;
use crate::ll;

#[cfg(feature = "async_impl")]
use crate::KernelConfig;

#[cfg(feature = "async_impl")]
use super::reply::ReplySender;

/// Request data structure
#[derive(Debug)]
pub struct Request<'a> {
    /// Request raw data
    pub data: &'a [u8],
    /// Parsed request
    pub request: ll::Request<'a>,
}

impl<'a> Request<'a> {
    /// Create a new request from the given data
    pub fn new(data: &'a [u8]) -> Option<Request<'a>> {
        let request = match ll::Request::try_from(data) {
            Ok(request) => request,
            Err(err) => {
                // FIXME: Reply with ENOSYS?
                error!("{}", err);
                return None;
            }
        };

        Some(Self { data, request })
    }

    #[cfg(feature = "async_impl")]
    pub(in crate::async_api) async fn dispatch_init(
        &self,
        se: &Arc<dyn ActiveSession>,
        filesystem: &Arc<dyn Filesystem>,
        sender: Arc<dyn ReplySender>,
    ) {
        debug!("{}", self.request);
        match self.request.operation() {
            // Filesystem initialization
            ll::Operation::Init(x) => {
                let reply: ReplyRaw<abi::fuse_init_out> = self.reply(&sender);
                // We don't support ABI versions before 7.6
                let v = x.version();
                if v < ll::Version(7, 6) {
                    error!("Unsupported FUSE ABI version {}", v);
                    reply.error(EPROTO).await;
                    return;
                }

                se.initialize(&x.version()).await;

                let mut config = KernelConfig::new(x.capabilities(), x.max_readahead());
                // Call filesystem init method and give it a chance to return an error
                let res = filesystem.init(self, &mut config).await;
                if let Err(err) = res {
                    reply.error(err).await;
                    return;
                }
                // Reply with our desired version and settings. If the kernel supports a
                // larger major version, it'll re-send a matching init message. If it
                // supports only lower major versions, we replied with an error above.
                let init = abi::fuse_init_out {
                    major: abi::FUSE_KERNEL_VERSION,
                    minor: abi::FUSE_KERNEL_MINOR_VERSION,
                    max_readahead: config.max_readahead,
                    flags: x.capabilities() & config.requested, // use requested features and reported as capable
                    #[cfg(not(feature = "abi-7-13"))]
                    unused: 0,
                    #[cfg(feature = "abi-7-13")]
                    max_background: config.max_background,
                    #[cfg(feature = "abi-7-13")]
                    congestion_threshold: config.congestion_threshold(),
                    max_write: config.max_write,
                    #[cfg(feature = "abi-7-23")]
                    time_gran: config.time_gran.as_nanos() as u32,
                    #[cfg(all(feature = "abi-7-23", not(feature = "abi-7-28")))]
                    reserved: [0; 9],
                    #[cfg(feature = "abi-7-28")]
                    max_pages: config.max_pages(),
                    #[cfg(feature = "abi-7-28")]
                    unused2: 0,
                    #[cfg(feature = "abi-7-28")]
                    reserved: [0; 8],
                };
                debug!(
                    "INIT response: ABI {}.{}, flags {:#x}, max readahead {}, max write {}",
                    init.major, init.minor, init.flags, init.max_readahead, init.max_write
                );
                reply.ok(&init).await;
            }
            // Any operation is invalid before initialization
            _ => {
                warn!("Ignoring FUSE operation before init: {}", self.request);
                self.reply::<ReplyEmpty>(&sender).error(EIO).await;
            }
        }
    }

    /// Dispatch request to the given filesystem.
    /// This calls the appropriate filesystem operation method for the
    /// request and sends back the returned reply to the kernel
    #[cfg(feature = "async_impl")]
    pub(in crate::async_api) async fn dispatch(
        &self,
        active_session: &Arc<dyn ActiveSession>,
        filesystem: Arc<dyn Filesystem>,
        ch: Arc<dyn ReplySender>,
    ) -> std::io::Result<()> {
        debug!("{}", self.request);

        match self.request.operation() {
            // Filesystem initialization
            ll::Operation::Init(_) => {
                warn!(
                    "Already initialized, got init after init init: {}",
                    self.request
                );
                self.reply::<ReplyEmpty>(&ch).error(EIO).await;
            }

            ll::Operation::Interrupt(_) => {
                // TODO: handle FUSE_INTERRUPT
                self.reply::<ReplyEmpty>(&ch).error(ENOSYS).await;
            }

            ll::Operation::Lookup(x) => {
                filesystem
                    .lookup(
                        self,
                        self.request.nodeid().into(),
                        &x.name(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Forget(x) => {
                filesystem
                    .forget(self, self.request.nodeid().into(), x.nlookup())
                    .await; // no reply
            }
            ll::Operation::GetAttr(_) => {
                filesystem
                    .getattr(self, self.request.nodeid().into(), self.reply(&ch))
                    .await;
            }
            ll::Operation::SetAttr(x) => {
                filesystem
                    .setattr(
                        self,
                        self.request.nodeid().into(),
                        x.mode(),
                        x.uid(),
                        x.gid(),
                        x.size(),
                        x.atime(),
                        x.mtime(),
                        x.ctime(),
                        x.file_handle().map(|fh| fh.into()),
                        x.crtime(),
                        x.chgtime(),
                        x.bkuptime(),
                        x.flags(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::ReadLink(_) => {
                filesystem
                    .readlink(self, self.request.nodeid().into(), self.reply(&ch))
                    .await;
            }
            ll::Operation::MkNod(x) => {
                filesystem
                    .mknod(
                        self,
                        self.request.nodeid().into(),
                        &x.name(),
                        x.mode(),
                        x.umask(),
                        x.rdev(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::MkDir(x) => {
                filesystem
                    .mkdir(
                        self,
                        self.request.nodeid().into(),
                        x.name(),
                        x.mode(),
                        x.umask(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Unlink(x) => {
                filesystem
                    .unlink(
                        self,
                        self.request.nodeid().into(),
                        x.name(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::RmDir(x) => {
                filesystem
                    .rmdir(
                        self,
                        self.request.nodeid().into(),
                        x.name(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::SymLink(x) => {
                filesystem
                    .symlink(
                        self,
                        self.request.nodeid().into(),
                        x.target(),
                        &Path::new(x.link()),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Rename(x) => {
                filesystem
                    .rename(
                        self,
                        self.request.nodeid().into(),
                        x.from().name,
                        x.to().dir.into(),
                        x.to().name,
                        0,
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Link(x) => {
                filesystem
                    .link(
                        self,
                        x.inode_no().into(),
                        self.request.nodeid().into(),
                        x.to().name,
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Open(x) => {
                filesystem
                    .open(
                        self,
                        self.request.nodeid().into(),
                        x.flags(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Read(x) => {
                filesystem
                    .read(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.offset(),
                        x.size(),
                        x.flags(),
                        x.lock_owner().map(|l| l.into()),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Write(x) => {
                filesystem
                    .write(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.offset(),
                        x.data(),
                        x.write_flags(),
                        x.flags(),
                        x.lock_owner().map(|l| l.into()),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Flush(x) => {
                filesystem
                    .flush(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.lock_owner().into(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Release(x) => {
                filesystem
                    .release(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.flags(),
                        x.lock_owner().map(|x| x.into()),
                        x.flush(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::FSync(x) => {
                filesystem
                    .fsync(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.fdatasync(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::OpenDir(x) => {
                filesystem
                    .opendir(
                        self,
                        self.request.nodeid().into(),
                        x.flags(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::ReadDir(x) => {
                filesystem
                    .readdir(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.offset(),
                        ReplyDirectory::new(
                            self.request.unique().into(),
                            ch.clone(),
                            x.size() as usize,
                        ),
                    )
                    .await;
            }
            ll::Operation::ReleaseDir(x) => {
                filesystem
                    .releasedir(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.flags(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::FSyncDir(x) => {
                filesystem
                    .fsyncdir(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.fdatasync(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::StatFs(_) => {
                filesystem
                    .statfs(self, self.request.nodeid().into(), self.reply(&ch))
                    .await;
            }
            ll::Operation::SetXAttr(x) => {
                filesystem
                    .setxattr(
                        self,
                        self.request.nodeid().into(),
                        x.name(),
                        x.value(),
                        x.flags(),
                        x.position(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::GetXAttr(x) => {
                filesystem
                    .getxattr(
                        self,
                        self.request.nodeid().into(),
                        x.name(),
                        x.size(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::ListXAttr(x) => {
                filesystem
                    .listxattr(
                        self,
                        self.request.nodeid().into(),
                        x.size(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::RemoveXAttr(x) => {
                filesystem
                    .removexattr(
                        self,
                        self.request.nodeid().into(),
                        x.name(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Access(x) => {
                filesystem
                    .access(
                        self,
                        self.request.nodeid().into(),
                        x.mask(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::Create(x) => {
                filesystem
                    .create(
                        self,
                        self.request.nodeid().into(),
                        x.name(),
                        x.mode(),
                        x.umask(),
                        x.flags(),
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::GetLk(x) => {
                filesystem
                    .getlk(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.lock_owner().into(),
                        x.lock().range.0,
                        x.lock().range.1,
                        x.lock().typ,
                        x.lock().pid,
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::SetLk(x) => {
                filesystem
                    .setlk(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.lock_owner().into(),
                        x.lock().range.0,
                        x.lock().range.1,
                        x.lock().typ,
                        x.lock().pid,
                        false,
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::SetLkW(x) => {
                filesystem
                    .setlk(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.lock_owner().into(),
                        x.lock().range.0,
                        x.lock().range.1,
                        x.lock().typ,
                        x.lock().pid,
                        true,
                        self.reply(&ch),
                    )
                    .await;
            }
            ll::Operation::BMap(x) => {
                filesystem
                    .bmap(
                        self,
                        self.request.nodeid().into(),
                        x.block_size(),
                        x.block(),
                        self.reply(&ch),
                    )
                    .await;
            }

            #[cfg(feature = "abi-7-11")]
            ll::Operation::IoCtl(x) => {
                if x.unrestricted() {
                    self.reply::<ReplyEmpty>(&ch).error(ENOSYS).await;
                } else {
                    filesystem
                        .ioctl(
                            self,
                            self.request.nodeid().into(),
                            x.file_handle().into(),
                            x.flags(),
                            x.command(),
                            x.in_data(),
                            x.out_size(),
                            self.reply(&ch),
                        )
                        .await;
                }
            }
            #[cfg(feature = "abi-7-11")]
            ll::Operation::Poll(_) => {
                // TODO: handle FUSE_POLL
                self.reply::<ReplyEmpty>(&ch).error(ENOSYS).await;
            }
            #[cfg(feature = "abi-7-15")]
            ll::Operation::NotifyReply(_) => {
                // TODO: handle FUSE_NOTIFY_REPLY
                self.reply::<ReplyEmpty>(&ch).error(ENOSYS).await;
            }
            #[cfg(feature = "abi-7-16")]
            ll::Operation::BatchForget(x) => {
                filesystem.batch_forget(self, x.nodes()).await; // no reply
            }
            #[cfg(feature = "abi-7-19")]
            ll::Operation::FAllocate(x) => {
                filesystem
                    .fallocate(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.offset(),
                        x.len(),
                        x.mode(),
                        self.reply(&ch),
                    )
                    .await;
            }
            #[cfg(feature = "abi-7-21")]
            ll::Operation::ReadDirPlus(x) => {
                filesystem
                    .readdirplus(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.offset(),
                        ReplyDirectoryPlus::new(
                            self.request.unique().into(),
                            ch.clone(),
                            x.size() as usize,
                        ),
                    )
                    .await;
            }
            #[cfg(feature = "abi-7-23")]
            ll::Operation::Rename2(x) => {
                filesystem
                    .rename(
                        self,
                        x.from().dir.into(),
                        x.from().name,
                        x.to().dir.into(),
                        x.to().name,
                        x.flags(),
                        self.reply(&ch),
                    )
                    .await;
            }
            #[cfg(feature = "abi-7-24")]
            ll::Operation::Lseek(x) => {
                filesystem
                    .lseek(
                        self,
                        self.request.nodeid().into(),
                        x.file_handle().into(),
                        x.offset(),
                        x.whence(),
                        self.reply(&ch),
                    )
                    .await;
            }
            #[cfg(feature = "abi-7-28")]
            ll::Operation::CopyFileRange(x) => {
                let (i, o) = (x.input(), x.output());
                filesystem
                    .copy_file_range(
                        self,
                        i.inode.into(),
                        i.file_handle.into(),
                        i.offset,
                        o.inode.into(),
                        o.file_handle.into(),
                        o.offset,
                        x.len(),
                        x.flags().try_into().unwrap(),
                        self.reply(&ch),
                    )
                    .await;
            }
            #[cfg(target_os = "macos")]
            ll::Operation::SetVolName(x) => {
                filesystem.setvolname(self, x.name(), self.reply(&ch)).await;
            }
            #[cfg(target_os = "macos")]
            ll::Operation::GetXTimes(_) => {
                filesystem
                    .getxtimes(self, self.request.nodeid().into(), self.reply(&ch))
                    .await;
            }
            #[cfg(target_os = "macos")]
            ll::Operation::Exchange(x) => {
                filesystem
                    .exchange(
                        self,
                        x.from().dir.into(),
                        x.from().name,
                        x.to().dir.into(),
                        x.to().name,
                        x.options(),
                        self.reply(&ch),
                    )
                    .await;
            }

            #[cfg(feature = "abi-7-12")]
            ll::Operation::CuseInit(_) => {
                // TODO: handle CUSE_INIT
                self.reply::<ReplyEmpty>(&ch).error(ENOSYS).await;
            }

            ll::Operation::Destroy(_) => {
                active_session.destroy().await;
                self.reply::<ReplyEmpty>(&ch).ok().await;
            }
        }
        Ok(())
    }

    /// Create a reply object for this request that can be passed to the filesystem
    /// implementation and makes sure that a request is replied exactly once
    #[cfg(feature = "async_impl")]
    fn reply<T: Reply>(&self, ch: &Arc<dyn ReplySender>) -> T {
        Reply::new(self.request.unique().into(), ch.clone())
    }

    /// Returns the unique identifier of this request
    #[inline]
    #[allow(dead_code)]
    pub fn unique(&self) -> u64 {
        self.request.unique().into()
    }

    /// Returns the uid of this request
    #[inline]
    #[allow(dead_code)]
    pub fn uid(&self) -> u32 {
        self.request.uid()
    }

    /// Returns the gid of this request
    #[inline]
    #[allow(dead_code)]
    pub fn gid(&self) -> u32 {
        self.request.gid()
    }

    /// Returns the pid of this request
    #[inline]
    #[allow(dead_code)]
    pub fn pid(&self) -> u32 {
        self.request.pid()
    }
}
