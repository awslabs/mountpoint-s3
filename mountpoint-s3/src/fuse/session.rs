use std::sync::Arc;

use anyhow::Context;
use fuser::{Filesystem, Session, SessionUnmounter};
use tracing::{error, info, trace};

use crate::sync::mpsc;
use crate::sync::thread;

/// A multi-threaded FUSE session that can be joined to wait for the FUSE filesystem to unmount or
/// this process to be interrupted.
pub struct FuseSession {
    unmounter: SessionUnmounter,
    receiver: mpsc::Receiver<Message>,
}

impl FuseSession {
    /// Create worker threads to dispatch requests for a FUSE session.
    pub fn new<FS: Filesystem + Send + Sync + 'static>(
        mut session: Session<FS>,
        worker_threads: usize,
    ) -> anyhow::Result<Self> {
        assert!(worker_threads > 0);

        let unmounter = session.unmount_callable();

        let session = Arc::new(session);

        let (tx, rx) = mpsc::channel();

        let workers: Vec<_> = (0..worker_threads)
            .map(|i| {
                let session = session.clone();
                thread::Builder::new().name(format!("fuse-worker-{i}")).spawn(move || {
                    #[cfg(target_os = "linux")]
                    {
                        // SAFETY: this syscall is available since Linux 2.4.11 but glibc didn't
                        // wrap it until very recently.
                        let tid = unsafe { libc::syscall(libc::SYS_gettid) };
                        info!("fuse worker {i} is thread ID {tid}");
                    }
                    session.run()
                })
            })
            .collect::<Result<_, _>>()
            .context("failed to spawn worker threads")?;

        // A thread that waits for all workers to exit and then sends a message on the channel
        let _waiter = {
            let tx = tx.clone();
            thread::Builder::new()
                .name("fuse-worker-waiter".to_owned())
                .spawn(move || {
                    for thd in workers {
                        let thread_name = thd.thread().name().map(ToOwned::to_owned);
                        match thd.join() {
                            Err(panic_param) => {
                                // Try to downcast as &str or String to log
                                let panic_msg = match panic_param.downcast_ref::<&str>() {
                                    Some(s) => Some(*s),
                                    None => panic_param.downcast_ref::<String>().map(AsRef::as_ref),
                                };
                                error!(thread_name, panic_msg, "worker thread panicked");
                            }
                            Ok(thd_result) => {
                                if let Err(fuse_worker_error) = thd_result {
                                    error!(thread_name, "worker thread failed: {fuse_worker_error:?}");
                                }
                            }
                        };
                    }

                    let _ = tx.send(Message::WorkersExited);
                })
                .context("failed to spawn waiter thread")?
        };

        ctrlc::set_handler(move || {
            let _ = tx.send(Message::Interrupted);
        })
        .context("failed to set interrupt handler")?;

        Ok(Self {
            unmounter,
            receiver: rx,
        })
    }

    /// Block until the file system is unmounted or this process is interrupted via SIGTERM/SIGINT.
    /// When that happens, unmount the file system (if it hasn't been already unmounted).
    pub fn join(mut self) -> anyhow::Result<()> {
        let msg = self.receiver.recv();
        trace!("received message {msg:?}, unmounting filesystem");

        self.unmounter.unmount().context("failed to unmount FUSE session")
    }
}

#[derive(Debug)]
enum Message {
    WorkersExited,
    Interrupted,
}
