use std::io;

use anyhow::Context;
use fuser::{Filesystem, Session, SessionUnmounter};
use tracing::{debug, error, trace, warn};

use crate::sync::atomic::{AtomicUsize, Ordering};
use crate::sync::mpsc::{self, Sender};
use crate::sync::thread::{self, JoinHandle};
use crate::sync::Arc;

/// A multi-threaded FUSE session that can be joined to wait for the FUSE filesystem to unmount or
/// this process to be interrupted.
pub struct FuseSession {
    unmounter: SessionUnmounter,
    /// Waits for messages from threads or signal handler.
    receiver: mpsc::Receiver<Message>,
    /// List of closures or functions to call when session is exiting.
    on_close: Vec<OnClose>,
}

type OnClose = Box<dyn FnOnce()>;

impl FuseSession {
    /// Create worker threads to dispatch requests for a FUSE session.
    pub fn new<FS: Filesystem + Send + Sync + 'static>(
        mut session: Session<FS>,
        max_worker_threads: usize,
    ) -> anyhow::Result<Self> {
        assert!(max_worker_threads > 0);

        tracing::trace!(
            max_worker_threads,
            "creating worker thread pool for handling FUSE requests",
        );

        let unmounter = session.unmount_callable();

        let (tx, rx) = mpsc::channel();

        let (workers_tx, workers_rx) = mpsc::channel::<JoinHandle<io::Result<()>>>();

        // A thread that waits for all workers to exit and then sends a message on the channel
        let _waiter = {
            const FUSE_WORKER_WAITER_THREAD_NAME: &str = "fuse-worker-waiter";
            let tx = tx.clone();
            thread::Builder::new()
                .name(FUSE_WORKER_WAITER_THREAD_NAME.to_owned())
                .spawn(move || {
                    tracing::trace!(
                        "{FUSE_WORKER_WAITER_THREAD_NAME} thread now waiting for all worker threads to exit",
                    );
                    while let Ok(thd) = workers_rx.recv() {
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
                                } else {
                                    trace!(thread_name, "worker thread exited OK");
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

        WorkerPool::start(session, workers_tx, max_worker_threads).context("failed to start worker thread pool")?;

        Ok(Self {
            unmounter,
            receiver: rx,
            on_close: Default::default(),
        })
    }

    /// Add a new handler which is executed when this session is shutting down.
    pub fn run_on_close(&mut self, handler: OnClose) {
        self.on_close.push(handler);
    }

    /// Block until the file system is unmounted or this process is interrupted via SIGTERM/SIGINT.
    /// When that happens, unmount the file system (if it hasn't been already unmounted).
    pub fn join(mut self) -> anyhow::Result<()> {
        let msg = self.receiver.recv();
        trace!("received message {msg:?}, closing filesystem session");

        trace!("executing {} handler(s) on close", self.on_close.len());
        for handler in self.on_close {
            handler();
        }

        trace!("unmounting filesystem");
        self.unmounter.unmount().context("failed to unmount FUSE session")
    }
}

#[derive(Debug)]
enum Message {
    WorkersExited,
    Interrupted,
}

trait Work: Send + Sync + 'static {
    type Result: Send;

    /// Run the process loop for a worker, notifying the caller
    /// before and after each unit of work is processed.
    fn run<FB, FA>(&self, before: FB, after: FA) -> Self::Result
    where
        FB: FnMut(),
        FA: FnMut();
}

/// [WorkerPool] organizes a pool of workers, handling the spawning of new workers and registering the new handles with
/// the channel [WorkerPool::workers] for tear down.
#[derive(Debug)]
struct WorkerPool<W: Work> {
    state: Arc<WorkerPoolState<W>>,
    workers: Sender<JoinHandle<W::Result>>,
    max_workers: usize,
}

#[derive(Debug)]
struct WorkerPoolState<W: Work> {
    work: W,
    worker_count: AtomicUsize,
    idle_worker_count: AtomicUsize,
}

impl<W: Work> WorkerPool<W> {
    /// Start a new worker pool.
    ///
    /// The worker pool will start with a small number of workers, and may eventually grow up to `max_workers`.
    /// The `workers` argument consumes the worker thread handles to be joined when the pool is shutting down.
    fn start(work: W, workers: Sender<JoinHandle<W::Result>>, max_workers: usize) -> anyhow::Result<()> {
        assert!(max_workers > 0);

        tracing::trace!(max_workers, "worker pool starting");

        let state = WorkerPoolState {
            work,
            worker_count: AtomicUsize::new(0),
            idle_worker_count: AtomicUsize::new(0),
        };
        let pool = Self {
            state: state.into(),
            workers,
            max_workers,
        };
        if !pool.try_add_worker()? {
            unreachable!("should always create at least 1 worker (max_workers > 0)");
        }

        tracing::trace!("worker pool started OK");
        Ok(())
    }

    /// Try to add a new worker.
    /// Returns `Ok(false)` if there are already [`WorkerPool::max_workers`].
    fn try_add_worker(&self) -> anyhow::Result<bool> {
        let Ok(i) = self
            .state
            .worker_count
            .fetch_update(Ordering::SeqCst, Ordering::SeqCst, |i| {
                if i < self.max_workers {
                    Some(i + 1)
                } else {
                    None
                }
            })
        else {
            return Ok(false);
        };
        let idle_worker_count = self.state.idle_worker_count.fetch_add(1, Ordering::SeqCst) + 1;
        metrics::gauge!("fuse.idle_workers").set(idle_worker_count as f64);
        let clone = (*self).clone();
        let worker = thread::Builder::new()
            .name(format!("mp-fuse-worker"))
            .spawn(move || clone.run(i))
            .context("failed to spawn worker threads")?;
        self.workers.send(worker).unwrap();
        Ok(true)
    }

    fn run(self, worker_index: usize) -> W::Result {
        debug!("starting fuse worker {} ({})", worker_index, get_thread_id_string());

        self.state.work.run(
            || {
                let previous_idle_count = self.state.idle_worker_count.fetch_sub(1, Ordering::SeqCst);
                metrics::gauge!("fuse.idle_workers").decrement(1);
                if previous_idle_count == 1 {
                    // This was the only idle thread, try to spawn a new one.
                    if let Err(error) = self.try_add_worker() {
                        warn!(?error, "unable to spawn fuse worker");
                    }
                }
            },
            || {
                self.state.idle_worker_count.fetch_add(1, Ordering::SeqCst);
                metrics::gauge!("fuse.idle_workers").increment(1);
            },
        )
    }
}

impl<W: Work> Clone for WorkerPool<W> {
    fn clone(&self) -> Self {
        Self {
            state: self.state.clone(),
            workers: self.workers.clone(),
            max_workers: self.max_workers,
        }
    }
}

impl<FS> Work for Session<FS>
where
    FS: Filesystem + Send + Sync + 'static,
{
    type Result = io::Result<()>;

    fn run<FB, FA>(&self, mut before: FB, mut after: FA) -> Self::Result
    where
        FB: FnMut(),
        FA: FnMut(),
    {
        self.run_with_callbacks(
            |req| {
                // Do not scale threads on bursts of forget messages.
                if req.is_forget() {
                    return;
                }
                before();
            },
            |req| {
                // Do not scale threads on bursts of forget messages.
                if req.is_forget() {
                    return;
                }
                after();
            },
        )
    }
}

#[cfg(target_os = "linux")]
fn get_thread_id_string() -> String {
    // SAFETY: this syscall is available since Linux 2.4.11 but glibc didn't
    // wrap it until very recently.
    let tid = unsafe { libc::syscall(libc::SYS_gettid) };
    format!("thread id {tid}")
}

#[cfg(not(target_os = "linux"))]
fn get_thread_id_string() -> String {
    "unknown thread id".to_string()
}

#[cfg(test)]
mod tests {
    use crate::sync::{
        mpsc::{self, Receiver},
        Condvar, Mutex,
    };
    use std::time::Duration;
    use test_case::test_case;

    use super::*;

    struct TestMessage {
        _id: usize,
        mutex: Mutex<bool>,
        cond: Condvar,
    }

    impl TestMessage {
        fn new(_id: usize) -> Self {
            Self {
                _id,
                mutex: Mutex::new(false),
                cond: Condvar::new(),
            }
        }

        fn process(&self) {
            let mut done = self.mutex.lock().unwrap();
            while !*done {
                done = self.cond.wait(done).unwrap();
            }
        }

        fn complete(&self) {
            let mut done = self.mutex.lock().unwrap();
            *done = true;
            self.cond.notify_one();
        }
    }
    struct TestWork {
        receiver: Arc<Mutex<Receiver<Arc<TestMessage>>>>,
    }

    impl Work for TestWork {
        type Result = ();

        fn run<FB, FA>(&self, mut before: FB, mut after: FA) -> Self::Result
        where
            FB: FnMut(),
            FA: FnMut(),
        {
            while let Ok(message) = {
                let receiver = self.receiver.lock().unwrap();
                receiver.recv()
            } {
                before();
                message.process();
                after();
            }
        }
    }

    #[test_case(10, 10)]
    #[test_case(10, 30)]
    #[test_case(30, 10)]
    fn test_worker_pool_scales_threads(max_worker_threads: usize, concurrent_messages: usize) {
        let (tx, rx) = mpsc::channel();
        let work = TestWork {
            receiver: Arc::new(Mutex::new(rx)),
        };

        let (workers_tx, workers_rx) = mpsc::channel::<JoinHandle<()>>();
        WorkerPool::start(work, workers_tx, max_worker_threads).unwrap();

        // Send messages: when processed, they will just wait
        // until we mark them as completed.
        let messages = (0..concurrent_messages)
            .map(|i| {
                let message = Arc::new(TestMessage::new(i));
                tx.send(message.clone()).unwrap();
                message
            })
            .collect::<Vec<_>>();

        let mut workers = Vec::new();

        // Expect that the pool will spawn enough workers to handle all
        // messages (or reach max_worker_threads).
        let min_expected_workers = concurrent_messages.min(max_worker_threads);
        for _ in 0..min_expected_workers {
            let worker = workers_rx.recv_timeout(Duration::from_secs(1)).unwrap();
            workers.push(worker);
        }

        // Mark all messages as completed.
        for m in messages {
            m.complete();
        }

        drop(tx);

        // The pool tries to spawn an extra idle worker.
        if let Ok(worker) = workers_rx.recv() {
            workers.push(worker);
            assert_eq!(workers.len(), min_expected_workers + 1);
        } else {
            assert_eq!(workers.len(), min_expected_workers);
        }
    }

    struct CountWork {
        receiver: Arc<Mutex<Receiver<Arc<AtomicUsize>>>>,
    }

    impl Work for CountWork {
        type Result = ();

        fn run<FB, FA>(&self, mut before: FB, mut after: FA) -> Self::Result
        where
            FB: FnMut(),
            FA: FnMut(),
        {
            while let Ok(count) = {
                let receiver = self.receiver.lock().unwrap();
                receiver.recv()
            } {
                before();
                count.fetch_add(1, Ordering::SeqCst);
                after();
            }
        }
    }

    #[test_case(30, 10)]
    #[test_case(10, 1_000_000)]
    #[test_case(1, 10)]
    fn test_worker_pool_limits_thread_count(max_worker_threads: usize, message_count: usize) {
        let (tx, rx) = mpsc::channel();
        let work = CountWork {
            receiver: Arc::new(Mutex::new(rx)),
        };

        let (workers_tx, workers_rx) = mpsc::channel::<JoinHandle<()>>();
        WorkerPool::start(work, workers_tx, max_worker_threads).unwrap();

        // Messages will increment counter when processed.
        let counter = Arc::new(AtomicUsize::new(0));
        for _ in 0..message_count {
            tx.send(counter.clone()).unwrap();
        }
        drop(tx);

        // Join and count all spawned threads.
        let mut workers_count = 0usize;
        while let Ok(worker) = workers_rx.recv_timeout(Duration::from_secs(1)) {
            let _ = worker.join();
            workers_count += 1;
        }

        assert!(
            workers_count <= max_worker_threads,
            "spawned threads: {workers_count}, max threads: {max_worker_threads}"
        );

        let count = counter.load(Ordering::SeqCst);
        assert_eq!(count, message_count, "the pool should have processed all messages");
    }

    #[cfg(feature = "shuttle")]
    mod shuttle_tests {
        use shuttle::rand::Rng;
        use shuttle::{check_pct, check_random};

        #[test]
        fn test_worker_pool_scales_threads() {
            fn test_helper() {
                let mut rng = shuttle::rand::thread_rng();
                let num_worker_threads = rng.gen_range(1..=8);
                let num_concurrent_messages = rng.gen_range(1..=16);
                super::test_worker_pool_scales_threads(num_worker_threads, num_concurrent_messages);
            }

            check_random(test_helper, 10000);
            check_pct(test_helper, 10000, 3);
        }

        #[test]
        fn test_worker_pool_limits_thread_count() {
            fn test_helper() {
                let mut rng = shuttle::rand::thread_rng();
                let num_worker_threads = rng.gen_range(1..=8);
                let num_concurrent_messages = rng.gen_range(1..=16);
                super::test_worker_pool_limits_thread_count(num_worker_threads, num_concurrent_messages);
            }

            check_random(test_helper, 10000);
            check_pct(test_helper, 10000, 3);
        }
    }
}
