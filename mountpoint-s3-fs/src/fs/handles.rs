use std::str::FromStr as _;
use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::types::ETag;
use tracing::{debug, error};

use super::{Error, InodeNo, OpenFlags, S3Filesystem, ToErrno};
use crate::metablock::{Lookup, Metablock};
use crate::metablock::S3Location;
use crate::object::ObjectId;
use crate::prefetch::PrefetchGetObject;
use crate::superblock::inode::CompletionHandle;
use crate::sync::{AsyncMutex, Arc};
use crate::upload::{AppendUploadRequest, UploadRequest};

#[derive(Debug)]
pub struct FileHandle<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    pub ino: InodeNo,
    pub location: S3Location,
    pub state: AsyncMutex<FileHandleState<Client>>,
    /// Process that created the handle
    pub open_pid: u32,
}

impl<Client> FileHandle<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    pub fn file_name(&self) -> &str {
        self.location.name()
    }
}

#[derive(Debug)]
pub enum FileHandleState<Client>
where
    Client: ObjectClient + Clone + Send + Sync + 'static,
{
    /// The file handle has been assigned as a read handle
    Read {
        request: PrefetchGetObject<Client>,
        flushed: bool,
    },
    /// The file handle has been assigned as a write handle
    Write {
        state: UploadState<Client>,
        flushed: bool,
    },
}

impl<Client> FileHandleState<Client>
where
    Client: ObjectClient + Clone + Send + Sync,
{
    pub async fn new_write_handle(
        lookup: &Lookup,
        ino: InodeNo,
        flags: OpenFlags,
        fs: &S3Filesystem<Client>,
        handle_id: u64,
    ) -> Result<FileHandleState<Client>, Error> {
        let is_truncate = flags.contains(OpenFlags::O_TRUNC);
        let write_mode = fs.config.write_mode();
        fs.metablock.start_writing(ino, &write_mode, is_truncate, handle_id).await?;
        let location = lookup.s3_location()?;
        let bucket = location.bucket_name();
        let key = location.full_key();
        let handle = if write_mode.incremental_upload {
            let initial_etag = if is_truncate {
                None
            } else {
                lookup.stat().etag.as_ref().map(|e| e.into())
            };
            let current_offset = if is_truncate { 0 } else { lookup.stat().size as u64 };
            let request = fs.uploader.start_incremental_upload(
                bucket.to_string(),
                key.into(),
                current_offset,
                initial_etag.clone(),
            );
            FileHandleState::Write {
                state: UploadState::AppendInProgress {
                    request,
                    initial_etag,
                    written_bytes: 0,
                },
                flushed: false,
            }
        } else {
            let request = fs
                .uploader
                .start_atomic_upload(bucket.to_string(), key.into())
                .map_err(|e| err!(libc::EIO, source:e, "put failed to start"))?;
            FileHandleState::Write {
                state: UploadState::MPUInProgress { request },
                flushed: false,
            }
        };
        metrics::gauge!("fs.current_handles", "type" => "write").increment(1.0);
        Ok(handle)
    }

    pub async fn new_read_handle(lookup: &Lookup, fs: &S3Filesystem<Client>, handle_id: u64) -> Result<FileHandleState<Client>, Error> {
        if !lookup.stat().is_readable {
            return Err(err!(
                libc::EACCES,
                "objects in flexible retrieval storage classes are not accessible",
            ));
        }
        fs.metablock.start_reading(lookup.ino(), handle_id).await?;
        let location = lookup.s3_location()?;
        let full_key = location.full_key();
        let bucket = location.bucket_name();
        let object_size = lookup.stat().size as u64;
        let etag = match &lookup.stat().etag {
            None => return Err(err!(libc::EBADF, "no E-Tag for inode {}", lookup.ino())),
            Some(etag) => ETag::from_str(etag).expect("E-Tag should be set"),
        };
        let object_id = ObjectId::new(full_key.into(), etag);
        let request = fs.prefetcher.prefetch(bucket.to_string(), object_id, object_size);
        let handle = FileHandleState::Read {
            request,
            flushed: false,
        };
        metrics::gauge!("fs.current_handles", "type" => "read").increment(1.0);
        Ok(handle)
    }
}

#[derive(Debug)]
pub enum UploadState<Client: ObjectClient + Send + Sync> {
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
                return Err(err!(libc::EIO, "upload already completed for key {}", handle.location));
            }
            UploadState::Failed(e) => {
                return Err(err!(*e, "upload already aborted for key {}", handle.location));
            }
        };

        match result {
            Ok(len) => {
                fs.metablock.inc_file_size(handle.ino, len).await?;
                Ok(len as u32)
            }
            Err(e) => {
                // Abort the request.
                match std::mem::replace(self, UploadState::Failed(e.to_errno())) {
                    UploadState::MPUInProgress { .. } | UploadState::AppendInProgress { .. } => {
                        Self::finish(fs.metablock.clone(), handle.ino, &handle.location, None).await
                    }
                    UploadState::Failed(_) | UploadState::Completed => unreachable!("checked above"),
                };
                Err(e)
            }
        }
    }

    pub async fn commit(&mut self, fs: &S3Filesystem<Client>, handle: Arc<FileHandle<Client>>) -> Result<(), Error> {
        match &self {
            UploadState::Completed => return Ok(()),
            UploadState::Failed(e) => {
                return Err(err!(*e, "upload already aborted for key {}", handle.location));
            }
            _ => {}
        };

        match std::mem::replace(self, UploadState::Completed) {
            UploadState::AppendInProgress {
                request,
                initial_etag,
                written_bytes,
            } => {
                let current_offset = request.current_offset();
                match Self::commit_append(request, &handle.location).await {
                    Ok(etag) => {
                        // Restart append request.
                        let initial_etag = etag.or(initial_etag);
                        let request = fs.uploader.start_incremental_upload(
                            handle.location.bucket_name().to_owned(),
                            handle.location.full_key().to_string(),
                            current_offset,
                            initial_etag.clone(),
                        );
                        *self = UploadState::AppendInProgress {
                            request,
                            initial_etag: initial_etag.clone(),
                            written_bytes,
                        };
                        let handle_flushed = Self::flush(fs, handle.ino, &handle.location, handle.clone()).await;
                        let mut state = handle.state.lock().await;
                        match &mut *state {
                            FileHandleState::Read { .. } => {unreachable!("checked above")}
                            FileHandleState::Write { flushed, .. } => {
                                *flushed = handle_flushed;
                            }
                        }
                        Ok(())
                    }
                    Err(e) => {
                        *self = UploadState::Failed(e.to_errno());
                        Err(e)
                    }
                }
            }
            UploadState::MPUInProgress { request, .. } => {
                let result = Self::complete_upload(fs.metablock.clone(), handle.ino, &handle.location, request).await;
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
        handle: Arc<FileHandle<Client>>,
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
                    debug!(key=%handle.location, "not completing upload because nothing was written yet");
                    Self::flush(fs, handle.ino, &handle.location, handle.clone()).await;
                    return Ok(());
                }
                if !are_from_same_process(open_pid, pid) {
                    debug!(
                        key=%handle.location,
                        pid, open_pid, "not completing upload because current PID differs from PID at open",
                    );
                    Self::flush(fs, handle.ino, &handle.location, handle.clone()).await;
                    return Ok(());
                }
            }
            UploadState::Completed => return Ok(()),
            UploadState::Failed(e) => {
                return Err(err!(
                    *e,
                    "upload already aborted for key {:?}",
                    handle.location.full_key()
                ));
            }
        };

        let result = match std::mem::replace(self, UploadState::Completed) {
            UploadState::AppendInProgress {
                request, initial_etag, ..
            } => Self::complete_append(fs.metablock.clone(), handle.ino, &handle.location, request, initial_etag).await,
            UploadState::MPUInProgress { request, .. } => {
                Self::complete_upload(fs.metablock.clone(), handle.ino, &handle.location, request).await
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
        &mut self,
        metablock: Arc<dyn Metablock>,
        ino: InodeNo,
        key: &S3Location,
    ) -> Result<bool, Error> {
        match std::mem::replace(self, UploadState::Completed) {
            UploadState::AppendInProgress {
                request, initial_etag, ..
            } => {
                Self::complete_append(metablock, ino, key, request, initial_etag).await?;
                Ok(true)
            }
            UploadState::MPUInProgress { request, .. } => {
                Self::complete_upload(metablock, ino, key, request).await?;
                Ok(true)
            }
            UploadState::Failed(_) | UploadState::Completed => Ok(false),
        }
    }

    async fn complete_upload(
        metablock: Arc<dyn Metablock>,
        ino: InodeNo,
        key: &S3Location,
        upload: UploadRequest<Client>,
    ) -> Result<(), Error> {
        let size = upload.size();
        let (put_result, etag) = match upload.complete().await {
            Ok(result) => {
                debug!(etag=?result.etag.as_str(), %key, size, "put succeeded");
                (Ok(()), Some(result.etag))
            }
            Err(e) => (Err(err!(libc::EIO, source:e, "put failed")), None),
        };
        Self::finish(metablock, ino, key, etag).await;
        put_result
    }

    async fn complete_append(
        metablock: Arc<dyn Metablock>,
        ino: InodeNo,
        key: &S3Location,
        upload: AppendUploadRequest<Client>,
        initial_etag: Option<ETag>,
    ) -> Result<(), Error> {
        match Self::commit_append(upload, key).await {
            Ok(etag) => {
                Self::finish(metablock, ino, key, etag.or(initial_etag)).await;
                Ok(())
            }
            Err(err) => {
                Self::finish(metablock, ino, key, None).await;
                Err(err)
            }
        }
    }

    async fn commit_append(upload: AppendUploadRequest<Client>, key: &S3Location) -> Result<Option<ETag>, Error> {
        match upload.complete().await {
            Ok(Some(result)) => {
                debug!(%key, "put succeeded");
                Ok(Some(result.etag))
            }
            Ok(None) => {
                debug!(%key, "no put required");
                Ok(None)
            }
            Err(e) => Err(err!(libc::EIO, source:e, "put failed")),
        }
    }

    async fn finish(metablock: Arc<dyn Metablock>, ino: InodeNo, s3location: &S3Location, etag: Option<ETag>) {
        if let Err(err) = metablock.finish_writing(ino, etag).await {
            // Log the issue but still return put_result.
            error!(?err, key=?s3location.full_key(), "error updating the inode status");
        }
    }

    async fn flush(fs: &S3Filesystem<Client>, ino: InodeNo, s3location: &S3Location, handle: Arc<FileHandle<Client>>) -> bool {
        let completion_handle = CompletionHandle::new(fs.metablock.clone(), handle);
        match fs.metablock.flush_writer(ino, completion_handle).await {
            // Log the issue but still return put_result.
            Err(err) => {
                error!(?err, key=?s3location.full_key(), "error updating the inode status");
                false
            },
            Ok(true) => true,
            Ok(false) => false,
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

        let path = format!("/proc/{pid}/task/{pid}/status");
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
