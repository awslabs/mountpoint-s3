use std::pin::Pin;

use mountpoint_s3_client::ObjectClient;

use crate::fs::FileHandle;
use crate::{
    fs::FileHandleState,
    sync::{Arc, AsyncMutex},
};

use super::Metablock;

#[derive(Clone, Debug)]
pub struct CompletionHook {
    state: Arc<AsyncMutex<CompletionHookState>>,
}

struct CompletionHookState {
    future: Pin<Box<dyn Future<Output = ()> + Send>>,
    result: bool,
}

impl std::fmt::Debug for CompletionHookState {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("CompletionHookState")
            .field("has_result", &self.result)
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
                if let FileHandleState::Write { state, .. } = &mut *fh_state {
                    _ = state.complete_if_in_progress(metablock, ino, &location).await;
                }
            }),
            result: false,
        }));

        Self { state }
    }

    pub async fn trigger(&self) {
        let mut state = self.state.lock().await;
        if state.result {
            return;
        }

        let future = std::mem::replace(&mut state.future, Box::pin(std::future::ready(())));
        future.await; // todo mansi how to return result of the upload?
        state.result = true;
    }
}
