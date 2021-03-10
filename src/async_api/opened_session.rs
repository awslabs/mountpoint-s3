//! Filesystem session
//!
//! A session runs a filesystem implementation while it is being mounted to a specific mount
//! point. A session begins by mounting the filesystem and ends by unmounting it. While the
//! filesystem is mounted, the session loop receives, dispatches and replies to kernel requests
//! for filesystem operations under its mount point.

use crate::async_api::Filesystem;

use std::{io, sync::Arc};

use super::SessionHandle;

#[async_trait::async_trait]
pub trait OpenedFlavor {
    async fn spawn_run(self, fs: Arc<dyn Filesystem>) -> io::Result<Arc<dyn SessionHandle>>;
}

/// The session data structure
#[derive(Debug)]
pub struct OpenedSession<FS: Filesystem + 'static, OF: OpenedFlavor + 'static> {
    /// Filesystem operation implementations
    pub filesystem: FS,
    /// Communication channel to the kernel driver
    pub(in crate::async_api) opened_flavor: OF,
}

impl<FS: Filesystem + 'static, OF: OpenedFlavor + 'static> OpenedSession<FS, OF> {
    /// Run the session loop that receives kernel requests and dispatches them to method
    /// calls into the filesystem. This spawns as a task in tokio returning that task
    #[cfg(feature = "async_impl")]
    pub async fn spawn_run(self) -> io::Result<Arc<dyn SessionHandle>> {
        let OpenedSession {
            filesystem,
            opened_flavor,
        } = self;
        opened_flavor.spawn_run(Arc::new(filesystem)).await
    }

    /// Run the session loop that receives kernel requests and dispatches them to method
    /// calls into the filesystem. This async method will not return until the system is shut down.
    #[cfg(feature = "async_impl")]
    pub async fn run(self) -> io::Result<()> {
        self.spawn_run().await?.wait_destroy().await;
        Ok(())
    }
}
