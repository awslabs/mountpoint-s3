use std::pin::Pin;

use mountpoint_s3_client::ObjectClient;

use crate::fs::{CompletionError, FileHandle, FileHandleState};
use crate::sync::{Arc, AsyncMutex};

use super::Metablock;

#[derive(Clone, Debug)]
pub struct CompletionHook {
    state: Arc<AsyncMutex<CompletionHookState>>,
}

struct CompletionHookState {
    future: Pin<Box<dyn Future<Output = Result<bool, CompletionError>> + Send>>,
    result: Option<Result<bool, CompletionError>>,
}

impl std::fmt::Debug for CompletionHookState {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("CompletionHookState")
            .field("result", &self.result)
            .finish()
    }
}

impl CompletionHook {
    pub(crate) fn new<Client>(metablock: Arc<dyn Metablock>, handle: Arc<FileHandle<Client>>) -> Self
    where
        Client: ObjectClient + Clone + Send + Sync + 'static,
    {
        let ino = handle.ino;
        let location = handle.location.clone();

        let state = Arc::new(AsyncMutex::new(CompletionHookState {
            future: Box::pin(async move {
                let mut fh_state = handle.state.lock().await;
                let FileHandleState::Write { state, .. } = &mut *fh_state else {
                    return Ok(false); // Nothing to do for read handles.
                };
                state.complete_if_in_progress(metablock, ino, &location).await
            }),
            result: None,
        }));

        Self { state }
    }

    pub async fn trigger(&self) -> Result<bool, CompletionError> {
        let mut state = self.state.lock().await;
        if let Some(result) = &state.result {
            return result.clone();
        }

        let future = std::mem::replace(&mut state.future, Box::pin(std::future::ready(Ok(false))));
        let result = future.await;
        state.result = Some(result.clone());
        result
    }
}
