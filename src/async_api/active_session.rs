//! Filesystem session
//!
//! A session runs a filesystem implementation while it is being mounted to a specific mount
//! point. A session begins by mounting the filesystem and ends by unmounting it. While the
//! filesystem is mounted, the session loop receives, dispatches and replies to kernel requests
//! for filesystem operations under its mount point.

use crate::async_api::request::Request;
#[cfg(feature = "async_impl")]
use crate::async_api::Filesystem;
#[cfg(feature = "async_impl")]
use crate::ll::fuse_abi as abi;

#[cfg(feature = "async_impl")]
use crate::session::BUFFER_SIZE;

#[cfg(feature = "async_impl")]
use log::warn;
#[cfg(feature = "async_impl")]
use std::ops::DerefMut;

use std::{io, sync::Arc};

use super::reply::ReplySender;
#[derive(Debug, Clone, Default)]
pub struct SessionConfiguration {
    /// FUSE protocol major version
    pub proto_major: u32,
    /// FUSE protocol minor version
    pub proto_minor: u32,
}
/// This is a handle that can be returned to the caller/user to query
/// some high level aspects about the session or request it shut down.
#[async_trait::async_trait]
pub trait SessionHandle: Send + Sync {
    /// Destroy the session and commence shutdown.
    async fn destroy(&self) -> ();

    /// Wait until the system has been destroyed, cleaned up and shut down.
    async fn wait_destroy(&self) -> ();
}
#[async_trait::async_trait]
pub(super) trait ActiveSession: SessionHandle {
    /// Query if a session has been marked destroyed
    /// The shutdown/cleanup may still be ongoing
    fn destroyed(&self) -> bool;

    /// Have we received an init message (version in formation will be available)
    fn initialized(&self) -> bool;

    async fn initialize(&self, version: &crate::ll::Version) -> ();
    async fn wait_worker_shutdown(&self) -> ();

    /// If an init message has been received/processed then this should return Some
    /// otherwise None.
    async fn session_configuration(&self) -> Option<SessionConfiguration>;
}

#[async_trait::async_trait]
pub(in crate::async_api) trait Worker: Send + Sync {
    // this method can presumed to only return when the worker/session is being shut down
    // generally something like a one shot channel will back this.
    async fn return_on_destory(&mut self) -> ();

    async fn read_single_request<'a, 'b>(
        &mut self,
        buffer: &'b mut [u8],
    ) -> Option<io::Result<Request<'b>>>;

    async fn sender(&self) -> Arc<dyn ReplySender>;
}

#[cfg(feature = "async_impl")]
pub(in crate::async_api) async fn main_request_loop(
    active_session: &Arc<dyn ActiveSession>,
    worker: &mut dyn Worker,
    filesystem: Arc<dyn Filesystem>,
) -> io::Result<()> {
    // Buffer for receiving requests from the kernel. Only one is allocated and
    // it is reused immediately after dispatching to conserve memory and allocations.
    let mut buffer = vec![0; BUFFER_SIZE];
    let buf = aligned_sub_buf(
        buffer.deref_mut(),
        std::mem::align_of::<abi::fuse_in_header>(),
    );

    loop {
        if active_session.destroyed() {
            return Ok(());
        }

        if let Some(req_or_err) = worker.read_single_request(buf).await {
            let req = req_or_err?;
            let filesystem = filesystem.clone();

            match req
                .dispatch(&active_session, filesystem, worker.sender().await)
                .await
            {
                Ok(_) => {}
                Err(e) => {
                    warn!("I/O failure in dispatch paths: {:#?}", e);
                }
            };
        }
    }
}

/// Spin around in the state waiting to ensure we are initialized.
/// There is a possbile race/blocking condition here in that one channel may get an init, and another channel may then
/// get a valid message. So while we won't process messages _before_ an init, a single channel if it gets its first message
/// after a different channel got the init we will need to process that as if we were in the main loop.
#[cfg(feature = "async_impl")]
pub(in crate::async_api) async fn wait_for_init(
    active_session: &Arc<dyn ActiveSession>,
    worker: &mut dyn Worker,
    filesystem: Arc<dyn Filesystem>,
) -> io::Result<()> {
    loop {
        let mut buffer = vec![0; BUFFER_SIZE];
        let buf = aligned_sub_buf(
            buffer.deref_mut(),
            std::mem::align_of::<abi::fuse_in_header>(),
        );

        if active_session.destroyed() {
            return Ok(());
        }

        if let Some(req_or_err) = worker.read_single_request(buf).await {
            let req = req_or_err?;
            if !active_session.initialized() {
                req.dispatch_init(&active_session, &filesystem, worker.sender().await)
                    .await;
            } else {
                let filesystem = filesystem.clone();
                match req
                    .dispatch(&active_session, filesystem, worker.sender().await)
                    .await
                {
                    Ok(_) => {}
                    Err(e) => {
                        warn!("I/O failure in dispatch paths: {:#?}", e);
                    }
                };
            }

            if active_session.initialized() {
                return Ok(());
            }
        }
    }
}

#[cfg(feature = "async_impl")]
pub(in crate::async_api) async fn spawn_worker_loop(
    active_session: Arc<dyn ActiveSession>,
    worker: &mut dyn Worker,
    filesystem: Arc<dyn Filesystem>,
) -> io::Result<()> {
    crate::async_api::active_session::wait_for_init(&active_session, worker, filesystem.clone())
        .await?;
    crate::async_api::active_session::main_request_loop(&active_session, worker, filesystem.clone())
        .await
}

#[cfg(feature = "async_impl")]
pub(in crate::async_api) async fn driver_evt_loop(
    active_session: Arc<dyn ActiveSession>,
    mut filesystem: Arc<dyn Filesystem>,
) -> io::Result<()> {
    let _ = active_session.wait_destroy().await;
    active_session.wait_worker_shutdown().await;

    loop {
        if let Some(fs) = Arc::get_mut(&mut filesystem) {
            fs.destroy().await;
            break;
        }
    }
    return Ok(());
}

#[cfg(feature = "async_impl")]
fn aligned_sub_buf(buf: &mut [u8], alignment: usize) -> &mut [u8] {
    let off = alignment - (buf.as_ptr() as usize) % alignment;
    if off == alignment {
        buf
    } else {
        &mut buf[off..]
    }
}
