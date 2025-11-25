use std::str::FromStr as _;

use mountpoint_s3_client::ObjectClient;
use mountpoint_s3_client::types::ETag;
use tracing::{debug, error};

use crate::fs::InodeError;
use crate::metablock::{CompletionHook, Lookup, Metablock, NewHandle, ReadWriteMode, S3Location};
use crate::object::ObjectId;
use crate::prefetch::PrefetchGetObject;
use crate::sync::{Arc, AsyncMutex};
use crate::upload::{AppendUploadRequest, UploadRequest};

use super::{Error, InodeNo, OpenFlags, S3Filesystem, ToErrno};

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
    Write { state: UploadState<Client>, flushed: bool },
}

impl<Client> FileHandleState<Client>
where
    Client: ObjectClient + Clone + Send + Sync,
{
    pub async fn new(
        handle: &NewHandle,
        flags: OpenFlags,
        fs: &S3Filesystem<Client>,
    ) -> Result<FileHandleState<Client>, Error> {
        let ino = handle.lookup.ino();
        let stat = handle.lookup.stat();
        let location = handle.lookup.s3_location()?;
        let full_key = location.full_key();
        let bucket = location.bucket_name();

        match handle.mode {
            ReadWriteMode::Read => {
                let object_size = stat.size as u64;
                let etag = match &stat.etag {
                    None => return Err(err!(libc::EBADF, "no E-Tag for inode {}", ino)),
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
            ReadWriteMode::Write => {
                let is_truncate = flags.contains(OpenFlags::O_TRUNC);
                let write_mode = fs.config.write_mode();

                let handle = if write_mode.incremental_upload {
                    let initial_etag = if is_truncate {
                        None
                    } else {
                        stat.etag.as_ref().map(|e| e.into())
                    };
                    let current_offset = if is_truncate { 0 } else { stat.size as u64 };
                    let request = fs.uploader.start_incremental_upload(
                        bucket.to_string(),
                        full_key.into(),
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
                        .start_atomic_upload(bucket.to_string(), full_key.into())
                        .map_err(|e| err!(libc::EIO, source:e, "put failed to start"))?;
                    FileHandleState::Write {
                        state: UploadState::MPUInProgress { request },
                        flushed: false,
                    }
                };
                metrics::gauge!("fs.current_handles", "type" => "write").increment(1.0);
                Ok(handle)
            }
        }
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
                        Self::finish_on_error(fs.metablock.clone(), handle.ino, &handle.location).await;
                    }
                    UploadState::Failed(_) | UploadState::Completed => unreachable!("checked above"),
                }
                Err(e)
            }
        }
    }

    /// Commit and return whether the handle should be set to "flushed".
    pub async fn commit(
        &mut self,
        fs: &S3Filesystem<Client>,
        handle: Arc<FileHandle<Client>>,
    ) -> Result<(), Error> {
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
                let etag = Self::commit_append(request, &handle.location)
                    .await
                    .inspect_err(|e| *self = UploadState::Failed(e.to_errno()))?;

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
            }
            UploadState::MPUInProgress { request, .. } => {
                Self::complete_upload(fs.metablock.clone(), handle.ino, &handle.location, request)
                    .await
                    .inspect_err(|e| *self = UploadState::Failed(e.to_errno()))?;
            }
            UploadState::Failed(_) | UploadState::Completed => unreachable!("checked above"),
        }
        Ok(())
    }

    pub async fn complete(
        &mut self,
        fs: &S3Filesystem<Client>,
        handle: Arc<FileHandle<Client>>,
        pid: u32,
        open_pid: u32,
        fh: u64,
    ) -> Result<(), Error> {
        match self {
            UploadState::AppendInProgress { written_bytes, .. } => {
                if *written_bytes == 0 || !are_from_same_process(open_pid, pid) {
                    // Commit current changes, but do not close the write handle.
                    self.commit(fs, handle.clone()).await?;
                    return Self::flush(fs, handle.ino, handle.clone(), fh).await;
                }
            }
            UploadState::MPUInProgress { request, .. } => {
                if request.size() == 0 {
                    debug!(key=%handle.location, "not completing upload because nothing was written yet");
                    return Self::flush(fs, handle.ino, handle.clone(), fh).await;
                }
                if !are_from_same_process(open_pid, pid) {
                    debug!(
                        key=%handle.location,
                        pid, open_pid, "not completing upload because current PID differs from PID at open",
                    );
                    return Self::flush(fs, handle.ino, handle.clone(), fh).await;
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
            } => {
                Self::complete_append(
                    fs.metablock.clone(),
                    handle.ino,
                    &handle.location,
                    request,
                    initial_etag,
                )
                .await
            }
            UploadState::MPUInProgress { request, .. } => {
                Self::complete_upload(fs.metablock.clone(), handle.ino, &handle.location, request).await
            }
            UploadState::Failed(_) | UploadState::Completed => unreachable!("checked above"),
        };

        if let Err(e) = result {
            *self = UploadState::Failed(e.to_errno());
        }
        Ok(())
    }

    /// Check state of upload, and complete the upload if it is still in-progress.
    ///
    /// When successful, returns a [`Lookup`] where the upload was still in-progress and thus completed by this method call.
    pub async fn complete_if_in_progress(
        &mut self,
        metablock: Arc<dyn Metablock>,
        ino: InodeNo,
        key: &S3Location,
    ) -> Result<Option<Lookup>, InodeError> {
        match std::mem::replace(self, UploadState::Completed) {
            UploadState::AppendInProgress {
                request, initial_etag, ..
            } => Ok(Some(
                Self::complete_append(metablock, ino, key, request, initial_etag).await?,
            )),
            UploadState::MPUInProgress { request, .. } => {
                Ok(Some(Self::complete_upload(metablock, ino, key, request).await?))
            }
            UploadState::Failed(_) | UploadState::Completed => Ok(None),
        }
    }

    async fn complete_upload(
        metablock: Arc<dyn Metablock>,
        ino: InodeNo,
        key: &S3Location,
        upload: UploadRequest<Client>,
    ) -> Result<Lookup, InodeError> {
        let size = upload.size();
        match upload.complete().await {
            Ok(put_result) => {
                debug!(etag=?put_result.etag.as_str(), %key, size, "put succeeded");
                metablock.finish_writing(ino, Some(put_result.etag)).await
            }
            Err(e) => {
                Self::finish_on_error(metablock, ino, key).await;
                Err(InodeError::upload_error(e, key.clone()))
            }
        }
    }

    async fn complete_append(
        metablock: Arc<dyn Metablock>,
        ino: InodeNo,
        key: &S3Location,
        upload: AppendUploadRequest<Client>,
        initial_etag: Option<ETag>,
    ) -> Result<Lookup, InodeError> {
        match Self::commit_append(upload, key).await {
            Ok(etag) => {
                let etag = etag.or(initial_etag);
                metablock.finish_writing(ino, etag).await
            }
            Err(err) => {
                Self::finish_on_error(metablock, ino, key).await;
                Err(err)
            }
        }
    }

    async fn commit_append(upload: AppendUploadRequest<Client>, key: &S3Location) -> Result<Option<ETag>, InodeError> {
        match upload.complete().await {
            Ok(Some(result)) => {
                debug!(%key, "put succeeded");
                Ok(Some(result.etag))
            }
            Ok(None) => {
                debug!(%key, "no put required");
                Ok(None)
            }
            Err(e) => Err(InodeError::upload_error(e, key.clone())),
        }
    }

    async fn finish_on_error(metablock: Arc<dyn Metablock>, ino: InodeNo, s3location: &S3Location) {
        if let Err(err) = metablock.finish_writing(ino, None).await {
            // Log the issue but still return put_result.
            error!(?err, key=?s3location.full_key(), "error updating the inode status");
        }
    }

    async fn flush(
        fs: &S3Filesystem<Client>,
        ino: InodeNo,
        handle: Arc<FileHandle<Client>>,
        fh: u64,
    ) -> Result<(), Error> {
        let completion_handle = CompletionHook::new(fs.metablock.clone(), handle);
        fs.metablock.flush_writer(ino, fh, completion_handle).await?;
        Ok(())
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
