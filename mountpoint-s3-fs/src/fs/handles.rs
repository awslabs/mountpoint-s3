use std::str::FromStr as _;

use mountpoint_s3_client::types::ETag;
use mountpoint_s3_client::ObjectClient;
use tracing::{debug, error};

use crate::mountspace::LookedUp;
use crate::mountspace::Mountspace;
use crate::object::ObjectId;
use crate::prefetch::PrefetchGetObject;
use crate::superblock::path::ValidKey;
use crate::sync::atomic::{AtomicI64, AtomicU64, Ordering};
use crate::sync::AsyncMutex;
use crate::upload::{AppendUploadRequest, UploadRequest};

use super::{DirectoryEntry, Error, InodeNo, OpenFlags, S3Filesystem, ToErrno};

#[derive(Debug)]
pub struct DirHandle {
    #[allow(unused)]
    ino: InodeNo,
    pub handleNo: AtomicU64,
    offset: AtomicI64,
    pub last_response: AsyncMutex<Option<(i64, Vec<DirectoryEntry>)>>,
}

impl DirHandle {
    pub fn new(ino: InodeNo, handleNo: u64) -> Self {
        Self {
            ino,
            handleNo: AtomicU64::new(handleNo),
            offset: AtomicI64::new(0),
            last_response: AsyncMutex::new(None),
        }
    }
    pub fn offset(&self) -> i64 {
        self.offset.load(Ordering::SeqCst)
    }

    pub fn next_offset(&self) {
        self.offset.fetch_add(1, Ordering::SeqCst);
    }

    pub fn rewind_offset(&self) {
        self.offset.store(0, Ordering::SeqCst);
    }

    pub fn handleNo(&self) -> u64 {
        self.handleNo.load(Ordering::SeqCst)
    }

    pub fn set_handleNo(&self, new: u64) {
        self.handleNo.store(new, Ordering::SeqCst);
    }
}

#[derive(Debug)]
pub struct FileHandle<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    pub ino: InodeNo,
    pub full_key: ValidKey,
    pub state: AsyncMutex<FileHandleState<Client>>,
    /// Process that created the handle
    pub open_pid: u32,
}

impl<Client> FileHandle<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    pub fn file_name(&self) -> &str {
        self.full_key.name()
    }
}

#[derive(Debug)]
pub enum FileHandleState<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    /// The file handle has been assigned as a read handle
    Read(PrefetchGetObject<Client>),
    /// The file handle has been assigned as a write handle
    Write(UploadState<Client>),
}

impl<Client> FileHandleState<Client>
where
    Client: ObjectClient + Clone + Send + Sync,
{
    pub async fn new_write_handle(
        lookup: &LookedUp,
        ino: InodeNo,
        flags: OpenFlags,
        fs: &S3Filesystem<Client>,
    ) -> Result<FileHandleState<Client>, Error> {
        let is_truncate = flags.contains(OpenFlags::O_TRUNC);
        let write_mode = fs.config.write_mode();
        fs.superblock.start_writing(ino, &write_mode, is_truncate).await?;
        let bucket = fs.bucket.clone();
        let key = fs.superblock.full_key_for_inode(lookup.ino);
        let handle = if write_mode.incremental_upload {
            let initial_etag = if is_truncate {
                None
            } else {
                lookup.stat.etag.as_ref().map(|e| e.into())
            };
            let current_offset = if is_truncate { 0 } else { lookup.stat.size as u64 };
            let request =
                fs.uploader
                    .start_incremental_upload(bucket, key.into(), current_offset, initial_etag.clone());
            FileHandleState::Write(UploadState::AppendInProgress {
                request,
                initial_etag,
                written_bytes: 0,
            })
        } else {
            let request = fs
                .uploader
                .start_atomic_upload(bucket, key.into())
                .map_err(|e| err!(libc::EIO, source:e, "put failed to start"))?;
            FileHandleState::Write(UploadState::MPUInProgress { request })
        };
        metrics::gauge!("fs.current_handles", "type" => "write").increment(1.0);
        Ok(handle)
    }

    pub async fn new_read_handle(
        lookup: &LookedUp,
        fs: &S3Filesystem<Client>,
    ) -> Result<FileHandleState<Client>, Error> {
        if !lookup.stat.is_readable {
            return Err(err!(
                libc::EACCES,
                "objects in flexible retrieval storage classes are not accessible",
            ));
        }
        fs.superblock.start_reading(lookup.ino).await?;
        let full_key = fs.superblock.full_key_for_inode(lookup.ino);
        let object_size = lookup.stat.size as u64;
        let etag = match &lookup.stat.etag {
            None => return Err(err!(libc::EBADF, "no E-Tag for inode {}", lookup.ino)),
            Some(etag) => ETag::from_str(etag).expect("E-Tag should be set"),
        };
        let object_id = ObjectId::new(full_key.into(), etag);
        let request = fs.prefetcher.prefetch(fs.bucket.clone(), object_id, object_size);
        let handle = FileHandleState::Read(request);
        metrics::gauge!("fs.current_handles", "type" => "read").increment(1.0);
        Ok(handle)
    }
}

#[derive(Debug)]
pub enum UploadState<Client: ObjectClient> {
    AppendInProgress {
        request: AppendUploadRequest<Client>,
        initial_etag: Option<ETag>,
        written_bytes: usize,
    },
    MPUInProgress {
        request: UploadRequest<Client>,
    },
    Completed,
    // Remember the failure reason to respond to retries
    Failed(libc::c_int),
}

impl<Client> UploadState<Client>
where
    Client: ObjectClient + Send + Sync + Clone + 'static,
{
    pub async fn write(
        &mut self,
        fs: &S3Filesystem<Client>,
        handle: &FileHandle<Client>,
        offset: i64,
        data: &[u8],
    ) -> Result<u32, Error> {
        let result: Result<_, Error> = match self {
            UploadState::AppendInProgress {
                request, written_bytes, ..
            } => match request.write(offset as u64, data).await {
                Ok(len) => {
                    *written_bytes += len;
                    Ok(len)
                }
                Err(e) => Err(e.into()),
            },
            UploadState::MPUInProgress { request, .. } => match request.write(offset, data).await {
                Ok(len) => Ok(len),
                Err(e) => Err(e.into()),
            },
            UploadState::Completed => {
                return Err(err!(
                    libc::EIO,
                    "upload already completed for key {:?}",
                    handle.full_key
                ))
            }
            UploadState::Failed(e) => return Err(err!(*e, "upload already aborted for key {:?}", handle.full_key)),
        };

        match result {
            Ok(len) => {
                fs.superblock.inc_file_size(handle.ino, len)?;
                Ok(len as u32)
            }
            Err(e) => {
                // Abort the request.
                match std::mem::replace(self, UploadState::Failed(e.to_errno())) {
                    UploadState::MPUInProgress { .. } | UploadState::AppendInProgress { .. } => {
                        if let Err(err) = fs.superblock.finish_writing(handle.ino, None) {
                            // Log the issue but still return the write error.
                            error!(?err, key=?handle.full_key, "error updating the inode status");
                        }
                    }
                    UploadState::Failed(_) | UploadState::Completed => unreachable!("checked above"),
                };
                Err(e)
            }
        }
    }

    pub async fn commit(&mut self, fs: &S3Filesystem<Client>, handle: &FileHandle<Client>) -> Result<(), Error> {
        match &self {
            UploadState::Completed => return Ok(()),
            UploadState::Failed(e) => return Err(err!(*e, "upload already aborted for key {:?}", handle.full_key)),
            _ => {}
        };

        match std::mem::replace(self, UploadState::Completed) {
            UploadState::AppendInProgress {
                request,
                initial_etag,
                written_bytes,
            } => {
                let current_offset = request.current_offset();
                match Self::commit_append(request, &handle.full_key).await {
                    Ok(etag) => {
                        // Restart append request.
                        let initial_etag = etag.or(initial_etag);
                        let request = fs.uploader.start_incremental_upload(
                            fs.bucket.clone(),
                            handle.full_key.to_owned(),
                            current_offset,
                            initial_etag.clone(),
                        );
                        *self = UploadState::AppendInProgress {
                            request,
                            initial_etag,
                            written_bytes,
                        };
                        Ok(())
                    }
                    Err(e) => {
                        *self = UploadState::Failed(e.to_errno());
                        Err(e)
                    }
                }
            }
            UploadState::MPUInProgress { request, .. } => {
                let result = Self::complete_upload(fs, handle.ino, &handle.full_key, request).await;
                if let Err(e) = &result {
                    *self = UploadState::Failed(e.to_errno());
                }
                result
            }
            UploadState::Failed(_) | UploadState::Completed => unreachable!("checked above"),
        }
    }

    pub async fn complete(
        &mut self,
        fs: &S3Filesystem<Client>,
        handle: &FileHandle<Client>,
        pid: u32,
        open_pid: u32,
    ) -> Result<(), Error> {
        match self {
            UploadState::AppendInProgress { written_bytes, .. } => {
                if *written_bytes == 0 || !are_from_same_process(open_pid, pid) {
                    // Commit current changes, but do not close the write handle.
                    return self.commit(fs, handle).await;
                }
            }
            UploadState::MPUInProgress { request, .. } => {
                if request.size() == 0 {
                    debug!(key=?handle.full_key, "not completing upload because nothing was written yet");
                    return Ok(());
                }
                if !are_from_same_process(open_pid, pid) {
                    debug!(
                        key=?handle.full_key,
                        pid, open_pid, "not completing upload because current PID differs from PID at open",
                    );
                    return Ok(());
                }
            }
            UploadState::Completed => return Ok(()),
            UploadState::Failed(e) => return Err(err!(*e, "upload already aborted for key {:?}", handle.full_key)),
        };

        let result = match std::mem::replace(self, UploadState::Completed) {
            UploadState::AppendInProgress {
                request, initial_etag, ..
            } => Self::complete_append(fs, handle.ino, &handle.full_key, request, initial_etag).await,
            UploadState::MPUInProgress { request, .. } => {
                Self::complete_upload(fs, handle.ino, &handle.full_key, request).await
            }
            UploadState::Failed(_) | UploadState::Completed => unreachable!("checked above"),
        };

        if let Err(e) = &result {
            *self = UploadState::Failed(e.to_errno());
        }
        result
    }

    /// Check state of upload, and complete the upload if it is still in-progress.
    ///
    /// When successful, returns `true` where the upload was still in-progress and thus completed by this method call.
    pub async fn complete_if_in_progress(
        self,
        fs: &S3Filesystem<Client>,
        ino: InodeNo,
        key: &str,
    ) -> Result<bool, Error> {
        match self {
            UploadState::AppendInProgress {
                request, initial_etag, ..
            } => {
                Self::complete_append(fs, ino, key, request, initial_etag).await?;
                Ok(true)
            }
            UploadState::MPUInProgress { request, .. } => {
                Self::complete_upload(fs, ino, key, request).await?;
                Ok(true)
            }
            UploadState::Failed(_) | UploadState::Completed => Ok(false),
        }
    }

    async fn complete_upload(
        fs: &S3Filesystem<Client>,
        ino: InodeNo,
        key: &str,
        upload: UploadRequest<Client>,
    ) -> Result<(), Error> {
        let size = upload.size();
        let (put_result, etag) = match upload.complete().await {
            Ok(result) => {
                debug!(etag=?result.etag.as_str(), ?key, size, "put succeeded");
                (Ok(()), Some(result.etag))
            }
            Err(e) => (Err(err!(libc::EIO, source:e, "put failed")), None),
        };
        if let Err(err) = fs.superblock.finish_writing(ino, etag) {
            // Log the issue but still return put_result.
            error!(?err, ?key, "error updating the inode status");
        }
        put_result
    }

    async fn complete_append(
        fs: &S3Filesystem<Client>,
        ino: InodeNo,
        key: &str,
        upload: AppendUploadRequest<Client>,
        initial_etag: Option<ETag>,
    ) -> Result<(), Error> {
        match Self::commit_append(upload, key).await {
            Ok(etag) => {
                Self::finish(fs, ino, etag.or(initial_etag));
                Ok(())
            }
            Err(err) => {
                Self::finish(fs, ino, None);
                Err(err)
            }
        }
    }

    async fn commit_append(upload: AppendUploadRequest<Client>, key: &str) -> Result<Option<ETag>, Error> {
        match upload.complete().await {
            Ok(Some(result)) => {
                debug!(key, "put succeeded");
                Ok(Some(result.etag))
            }
            Ok(None) => {
                debug!(key, "no put required");
                Ok(None)
            }
            Err(e) => Err(err!(libc::EIO, source:e, "put failed")),
        }
    }

    fn finish(fs: &S3Filesystem<Client>, ino: InodeNo, etag: Option<ETag>) {
        if let Err(err) = fs.superblock.finish_writing(ino, etag) {
            // Log the issue but still return put_result.
            error!(?err, "error updating the inode status");
        }
    }
}

/// Get the thread-group id (tgid) from a process id (pid).
/// Despite the names, the process id is actually the thread id
/// and the thread-group id is the parent process id.
/// Returns `None` if unable to find or parse the task status.
/// Not supported on macOS.
fn get_tgid(pid: u32) -> Option<u32> {
    if cfg!(not(target_os = "macos")) {
        use std::fs::File;
        use std::io::{BufRead, BufReader};

        let path = format!("/proc/{}/task/{}/status", pid, pid);
        let file = File::open(path).ok()?;
        for line in BufReader::new(file).lines() {
            let line = line.ok()?;
            if line.starts_with("Tgid:") {
                return line["Tgid: ".len()..].trim().parse::<u32>().ok();
            }
        }
    }

    None
}

/// Check whether two pids correspond to the same process.
fn are_from_same_process(pid1: u32, pid2: u32) -> bool {
    if pid1 == pid2 {
        return true;
    }
    let Some(tgid1) = get_tgid(pid1) else {
        return false;
    };
    let Some(tgid2) = get_tgid(pid2) else {
        return false;
    };
    tgid1 == tgid2
}
