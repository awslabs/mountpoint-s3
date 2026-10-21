//! Filesystem operation request
//!
//! A request represents information about a filesystem operation the kernel driver wants us to
//! perform.
//!
//! TODO: This module is meant to go away soon in favor of `ll::Request`.

use std::convert::TryFrom;
use std::path::Path;

use log::debug;
use log::error;

use crate::Filesystem;
use crate::PollNotifier;
use crate::RenameFlags;
use crate::Request;
use crate::channel::ChannelSender;
use crate::forget_one::ForgetOne;
use crate::ll;
use crate::ll::Errno;
use crate::ll::ResponseData;
use crate::ll::ResponseErrno;
use crate::reply::Reply;
use crate::reply::ReplyDirectory;
use crate::reply::ReplyDirectoryPlus;
use crate::reply::ReplyRaw;
use crate::reply::ReplySender;
use crate::session::SessionACL;
use crate::session::SessionEventLoop;

/// Request data structure
#[derive(Debug)]
pub(crate) struct RequestWithSender<'a> {
    /// Channel sender for sending the reply
    ch: ChannelSender,
    /// Parsed request
    pub(crate) request: ll::AnyRequest<'a>,
}

impl<'a> RequestWithSender<'a> {
    /// Create a new request from the given data
    pub(crate) fn new(ch: ChannelSender, data: &'a [u8]) -> Option<RequestWithSender<'a>> {
        let request = match ll::AnyRequest::try_from(data) {
            Ok(request) => request,
            Err(err) => {
                error!("{err}");
                return None;
            }
        };

        Some(Self { ch, request })
    }

    /// Dispatch request to the given filesystem.
    /// This calls the appropriate filesystem operation method for the
    /// request and sends back the returned reply to the kernel
    pub(crate) fn dispatch<FS: Filesystem>(&self, se: &SessionEventLoop<FS>) {
        debug!("{} thread={}", self.request, se.thread_name);
        match self.dispatch_req(se) {
            Ok(Some(resp)) => self.reply::<ReplyRaw>().send_ll(&resp),
            Ok(None) => {}
            Err(errno) => self.reply::<ReplyRaw>().send_ll(&ResponseErrno(errno)),
        }
    }

    fn dispatch_req<FS: Filesystem>(
        &self,
        se: &SessionEventLoop<FS>,
    ) -> Result<Option<ResponseData>, Errno> {
        let op = self.request.operation().map_err(|_| Errno::ENOSYS)?;
        // Implement allow_root & access check for auto_unmount
        if (se.allowed == SessionACL::RootAndOwner
            && self.request.uid() != se.session_owner
            && !self.request.uid().is_root())
            || (se.allowed == SessionACL::Owner && self.request.uid() != se.session_owner)
        {
            {
                match op {
                    // Only allow operations that the kernel may issue without a uid set
                    ll::Operation::Init(_)
                    | ll::Operation::Destroy(_)
                    | ll::Operation::Read(_)
                    | ll::Operation::ReadDir(_)
                    | ll::Operation::BatchForget(_)
                    | ll::Operation::Forget(_)
                    | ll::Operation::Write(_)
                    | ll::Operation::FSync(_)
                    | ll::Operation::FSyncDir(_)
                    | ll::Operation::Release(_)
                    | ll::Operation::ReleaseDir(_) => {}
                    ll::Operation::ReadDirPlus(_) => {}
                    _ => {
                        return Err(Errno::EACCES);
                    }
                }
            }
        }

        let Some(filesystem) = &se.filesystem.fs else {
            // This is handled before dispatch call.
            error!("bug: filesystem must be initialized in dispatch_req");
            return Err(Errno::EIO);
        };

        match op {
            // Filesystem initialization - should not happen after handshake completed
            ll::Operation::Init(_) => {
                error!("Unexpected FUSE_INIT after handshake completed");
                return Err(Errno::EIO);
            }
            ll::Operation::Destroy(_x) => {
                // This is handled before dispatch call.
                return Err(Errno::EIO);
            }

            ll::Operation::Interrupt(_) => {
                // TODO: handle FUSE_INTERRUPT
                return Err(Errno::ENOSYS);
            }

            ll::Operation::Lookup(x) => {
                filesystem.lookup(
                    self.request_header(),
                    self.request.nodeid(),
                    x.name().as_ref(),
                    self.reply(),
                );
            }
            ll::Operation::Forget(x) => {
                filesystem.forget(self.request_header(), self.request.nodeid(), x.nlookup()); // no reply
            }
            ll::Operation::GetAttr(_attr) => {
                filesystem.getattr(
                    self.request_header(),
                    self.request.nodeid(),
                    _attr.file_handle(),
                    self.reply(),
                );
            }
            ll::Operation::SetAttr(x) => {
                filesystem.setattr(
                    self.request_header(),
                    self.request.nodeid(),
                    x.mode(),
                    x.uid(),
                    x.gid(),
                    x.size(),
                    x.atime(),
                    x.mtime(),
                    x.ctime(),
                    x.file_handle(),
                    x.crtime(),
                    x.chgtime(),
                    x.bkuptime(),
                    x.flags(),
                    self.reply(),
                );
            }
            ll::Operation::ReadLink(_) => {
                filesystem.readlink(self.request_header(), self.request.nodeid(), self.reply());
            }
            ll::Operation::MkNod(x) => {
                filesystem.mknod(
                    self.request_header(),
                    self.request.nodeid(),
                    x.name().as_ref(),
                    x.mode(),
                    x.umask(),
                    x.rdev(),
                    self.reply(),
                );
            }
            ll::Operation::MkDir(x) => {
                filesystem.mkdir(
                    self.request_header(),
                    self.request.nodeid(),
                    x.name().as_ref(),
                    x.mode(),
                    x.umask(),
                    self.reply(),
                );
            }
            ll::Operation::Unlink(x) => {
                filesystem.unlink(
                    self.request_header(),
                    self.request.nodeid(),
                    x.name().as_ref(),
                    self.reply(),
                );
            }
            ll::Operation::RmDir(x) => {
                filesystem.rmdir(
                    self.request_header(),
                    self.request.nodeid(),
                    x.name().as_ref(),
                    self.reply(),
                );
            }
            ll::Operation::SymLink(x) => {
                filesystem.symlink(
                    self.request_header(),
                    self.request.nodeid(),
                    x.link_name().as_ref(),
                    Path::new(x.target()),
                    self.reply(),
                );
            }
            ll::Operation::Rename(x) => {
                filesystem.rename(
                    self.request_header(),
                    self.request.nodeid(),
                    x.src().name.as_ref(),
                    x.dest().dir,
                    x.dest().name.as_ref(),
                    RenameFlags::empty(),
                    self.reply(),
                );
            }
            ll::Operation::Link(x) => {
                filesystem.link(
                    self.request_header(),
                    x.inode_no(),
                    self.request.nodeid(),
                    x.dest().name.as_ref(),
                    self.reply(),
                );
            }
            ll::Operation::Open(x) => {
                filesystem.open(
                    self.request_header(),
                    self.request.nodeid(),
                    x.flags(),
                    self.reply(),
                );
            }
            ll::Operation::Read(x) => {
                filesystem.read(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.offset()?,
                    x.size(),
                    x.flags(),
                    x.lock_owner(),
                    self.reply(),
                );
            }
            ll::Operation::Write(x) => {
                filesystem.write(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.offset()?,
                    x.data(),
                    x.write_flags(),
                    x.flags(),
                    x.lock_owner(),
                    self.reply(),
                );
            }
            ll::Operation::Flush(x) => {
                filesystem.flush(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.lock_owner(),
                    self.reply(),
                );
            }
            ll::Operation::Release(x) => {
                filesystem.release(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.flags(),
                    x.lock_owner(),
                    x.flush(),
                    self.reply(),
                );
            }
            ll::Operation::FSync(x) => {
                filesystem.fsync(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.fdatasync(),
                    self.reply(),
                );
            }
            ll::Operation::OpenDir(x) => {
                filesystem.opendir(
                    self.request_header(),
                    self.request.nodeid(),
                    x.flags(),
                    self.reply(),
                );
            }
            ll::Operation::ReadDir(x) => {
                filesystem.readdir(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.offset(),
                    ReplyDirectory::new(
                        self.request.unique(),
                        ReplySender::Channel(self.ch.clone()),
                        x.size() as usize,
                    ),
                );
            }
            ll::Operation::ReleaseDir(x) => {
                filesystem.releasedir(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.flags(),
                    self.reply(),
                );
            }
            ll::Operation::FSyncDir(x) => {
                filesystem.fsyncdir(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.fdatasync(),
                    self.reply(),
                );
            }
            ll::Operation::StatFs(_) => {
                filesystem.statfs(self.request_header(), self.request.nodeid(), self.reply());
            }
            ll::Operation::SetXAttr(x) => {
                filesystem.setxattr(
                    self.request_header(),
                    self.request.nodeid(),
                    x.name(),
                    x.value(),
                    x.flags(),
                    x.position(),
                    self.reply(),
                );
            }
            ll::Operation::GetXAttr(x) => {
                filesystem.getxattr(
                    self.request_header(),
                    self.request.nodeid(),
                    x.name(),
                    x.size_u32(),
                    self.reply(),
                );
            }
            ll::Operation::ListXAttr(x) => {
                filesystem.listxattr(
                    self.request_header(),
                    self.request.nodeid(),
                    x.size(),
                    self.reply(),
                );
            }
            ll::Operation::RemoveXAttr(x) => {
                filesystem.removexattr(
                    self.request_header(),
                    self.request.nodeid(),
                    x.name(),
                    self.reply(),
                );
            }
            ll::Operation::Access(x) => {
                filesystem.access(
                    self.request_header(),
                    self.request.nodeid(),
                    x.mask(),
                    self.reply(),
                );
            }
            ll::Operation::Create(x) => {
                filesystem.create(
                    self.request_header(),
                    self.request.nodeid(),
                    x.name().as_ref(),
                    x.mode(),
                    x.umask(),
                    x.flags(),
                    self.reply(),
                );
            }
            ll::Operation::GetLk(x) => {
                filesystem.getlk(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.lock_owner(),
                    x.lock().range.0,
                    x.lock().range.1,
                    x.lock().typ,
                    x.lock().pid,
                    self.reply(),
                );
            }
            ll::Operation::SetLk(x) => {
                filesystem.setlk(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.lock_owner(),
                    x.lock().range.0,
                    x.lock().range.1,
                    x.lock().typ,
                    x.lock().pid,
                    x.sleep(),
                    self.reply(),
                );
            }
            ll::Operation::BMap(x) => {
                filesystem.bmap(
                    self.request_header(),
                    self.request.nodeid(),
                    x.block_size(),
                    x.block(),
                    self.reply(),
                );
            }

            ll::Operation::IoCtl(x) => {
                if x.unrestricted() {
                    return Err(Errno::ENOSYS);
                }
                filesystem.ioctl(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.flags(),
                    x.command(),
                    x.in_data(),
                    x.out_size(),
                    self.reply(),
                );
            }
            ll::Operation::Poll(x) => {
                let ph = PollNotifier::new(se.ch.sender(), x.kernel_handle());

                filesystem.poll(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    ph,
                    x.events(),
                    x.flags(),
                    self.reply(),
                );
            }
            ll::Operation::NotifyReply(_) => {
                // TODO: handle FUSE_NOTIFY_REPLY
                return Err(Errno::ENOSYS);
            }
            ll::Operation::BatchForget(x) => {
                filesystem.batch_forget(
                    self.request_header(),
                    ForgetOne::slice_from_inner(x.nodes()),
                ); // no reply
            }
            ll::Operation::FAllocate(x) => {
                filesystem.fallocate(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.offset()?,
                    x.len()?,
                    x.mode(),
                    self.reply(),
                );
            }
            ll::Operation::ReadDirPlus(x) => {
                filesystem.readdirplus(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.offset(),
                    ReplyDirectoryPlus::new(
                        self.request.unique(),
                        ReplySender::Channel(self.ch.clone()),
                        x.size() as usize,
                    ),
                );
            }
            ll::Operation::Rename2(x) => {
                filesystem.rename(
                    self.request_header(),
                    x.from().dir,
                    x.from().name.as_ref(),
                    x.to().dir,
                    x.to().name.as_ref(),
                    x.flags(),
                    self.reply(),
                );
            }
            ll::Operation::Lseek(x) => {
                filesystem.lseek(
                    self.request_header(),
                    self.request.nodeid(),
                    x.file_handle(),
                    x.offset(),
                    x.whence(),
                    self.reply(),
                );
            }
            ll::Operation::CopyFileRange(x) => {
                let (i, o) = (x.src()?, x.dest()?);
                filesystem.copy_file_range(
                    self.request_header(),
                    i.inode,
                    i.file_handle,
                    i.offset,
                    o.inode,
                    o.file_handle,
                    o.offset,
                    x.len(),
                    x.flags(),
                    self.reply(),
                );
            }
            #[cfg(target_os = "macos")]
            ll::Operation::SetVolName(x) => {
                filesystem.setvolname(self.request_header(), x.name(), self.reply());
            }
            #[cfg(target_os = "macos")]
            ll::Operation::GetXTimes(x) => {
                filesystem.getxtimes(self.request_header(), x.nodeid(), self.reply());
            }
            #[cfg(target_os = "macos")]
            ll::Operation::Exchange(x) => {
                filesystem.exchange(
                    self.request_header(),
                    x.from().dir,
                    x.from().name.as_ref(),
                    x.to().dir,
                    x.to().name.as_ref(),
                    x.options(),
                    self.reply(),
                );
            }

            ll::Operation::CuseInit(_) => {
                // TODO: handle CUSE_INIT
                return Err(Errno::ENOSYS);
            }
        }
        Ok(None)
    }

    /// Create a reply object for this request that can be passed to the filesystem
    /// implementation and makes sure that a request is replied exactly once
    pub(crate) fn reply<T: Reply>(&self) -> T {
        Reply::new(self.request.unique(), ReplySender::Channel(self.ch.clone()))
    }

    /// Returns a Request reference for this request
    #[inline]
    fn request_header(&self) -> &Request {
        Request::ref_cast(self.request.header())
    }
}
