use mountpoint_s3_client::ObjectClient;
use std::pin::Pin;

use crate::fs::{FileHandle, FileHandleState};
use crate::sync::{Arc, AsyncMutex};

use super::{InodeError, Lookup, Metablock};

/// A hook that ensures any local state and data buffered for a file handle pending upload to S3
///
/// ### Lifecycle
/// 1. Created during `flush_writer` when a file handle is marked flushed
/// 2. Attached to the inode state via `pending_upload_hook` field
/// 3. Triggered using `wait_for_completion` by either:
///    - A subsequent `release` call
///    - A new `open` that needs to override the flushed handle
/// 4. Once triggered, subsequent `wait_for_completion`s return the result of the attempted upload (once available).
///
/// Multiple concurrent `wait_for_completion()` calls are safe as the underlying future is protected
/// by the hook's state lock, thus executed only once, with the result cached in the
/// `PendingUploadHookState`. The execution calls `UploadState::complete_if_in_progress` and takes
/// a lock on the file handle state in order to do this.
///
/// The hook is cleaned up from the inode state when the upload is completed (in `metablock::finish_writing`)
#[derive(Clone, Debug)]
pub struct PendingUploadHook {
    state: Arc<AsyncMutex<PendingUploadHookState>>,
}

type UploadCompletionResult = Result<Option<Lookup>, InodeError>;

struct PendingUploadHookState {
    future: Pin<Box<dyn Future<Output = UploadCompletionResult> + Send>>,
    result: Option<UploadCompletionResult>,
}

impl std::fmt::Debug for PendingUploadHookState {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("PendingUploadHookState")
            .field("result", &self.result)
            .finish()
    }
}

impl PendingUploadHook {
    pub(crate) fn new<Client>(metablock: Arc<dyn Metablock>, handle: Arc<FileHandle<Client>>, fh: u64) -> Self
    where
        Client: ObjectClient + Clone + Send + Sync + 'static,
    {
        let ino = handle.ino;
        let location = handle.location.clone();

        let state = Arc::new(AsyncMutex::new(PendingUploadHookState {
            future: Box::pin(async move {
                let mut fh_state = handle.state.lock().await;
                let FileHandleState::Write { state, .. } = &mut *fh_state else {
                    return Ok(None); // Nothing to do for read handles.
                };
                state.complete_if_in_progress(metablock, ino, &location, fh).await
            }),
            result: None,
        }));

        Self { state }
    }

    pub async fn wait_for_completion(&self) -> UploadCompletionResult {
        let mut state = self.state.lock().await;
        if let Some(result) = &state.result {
            return result.clone();
        }
        let future = std::mem::replace(&mut state.future, Box::pin(std::future::ready(Ok(None))));
        let result = future.await;
        state.result = Some(result.clone());
        result
    }
}
