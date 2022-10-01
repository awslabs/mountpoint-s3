//! This module provides an interface to use [Future]s on top of the CRT's event loops and event
//! loop groups.

use crate::common::error::Error;
use crate::common::task_scheduler::{Task, TaskScheduler, TaskStatus};
use futures::channel::oneshot;
use futures::future::BoxFuture;
use futures::task::ArcWake;
use futures::{FutureExt, TryFutureExt};
use std::fmt::Debug;
use std::future::Future;
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll};

/// Handle to a spawned future. Can be converted into a [Future] that completes when the task finishes.
#[derive(Debug)]
pub struct FutureJoinHandle<T: Send + 'static> {
    inner: Arc<Mutex<Option<FutureTaskInner<T>>>>,

    receiver: oneshot::Receiver<Result<T, Error>>,
}

impl<T> FutureJoinHandle<T>
where
    T: Send + 'static,
{
    /// Convert this handle into a future that completes when the spawned future does.
    pub fn into_future(self) -> impl Future<Output = Result<T, Error>> {
        self.receiver.unwrap_or_else(|oneshot::Canceled| Err(Error::Canceled))
    }

    /// Wait for a result, blocking the current thread.
    pub fn wait(self) -> Result<T, Error> {
        futures::executor::block_on(self.into_future())
    }

    /// Cancel this Future. This is best-effort: the Future can continue to run in the background
    /// after this until the next time that it gets woken up (probably by some CRT callback deep
    /// down, but it could be anything that calls wake).
    ///
    /// However, this _does_ synchronously drop the [Future] provided to [EventLoopGroup::spawn_future].
    /// This frees any resources associated with that Future before cancel returns.
    pub fn cancel(self) {
        let mut locked = self.inner.lock().unwrap();

        // Cancel the task by dropping the [FutureTaskInner] held by the mutex. The next time the
        // task is woken up, it will look as though the future has already completed and won't
        // be able to make any progress.
        if let Some(inner) = locked.take() {
            std::mem::drop(inner);
        }
    }
}

/// Internal bookkeeping about a not-yet-completed future.
struct FutureTaskInner<T: Send + 'static> {
    /// The [Future] from the client.
    future: BoxFuture<'static, T>,

    /// A channel to write the result to when the future completes.
    result_channel: oneshot::Sender<Result<T, Error>>,
}

/// Manual [Debug] implementation since [BoxFuture] doesn't implement Debug.
impl<T: Debug + Send + 'static> Debug for FutureTaskInner<T> {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("FutureTaskInner")
            .field("future", &(&self.future as *const BoxFuture<'static, T>))
            .field("result_channel", &self.result_channel)
            .finish()
    }
}

/// Implements [ArcWake] for Futures spawned on an event loop group.
struct FutureTaskWaker<S: TaskScheduler, T: Send + 'static> {
    /// Inner information about the task if it hasn't completed yet. Held behind a mutex (since wake
    /// can be called from different threads). If the future is not None, then it is still busy
    /// and we should call poll again when woken. If it is None, the future has already
    /// finished executing.
    inner: Arc<Mutex<Option<FutureTaskInner<T>>>>,

    /// The [TaskScheduler] that knows how to arrange for [Task]s to be run by the CRT.
    scheduler: S,
}

impl<S: TaskScheduler, T: Send + 'static> FutureTaskWaker<S, T> {
    /// Finish this task with an error. Does not call [Future::poll], and prevents any future
    /// wake-ups from calling poll either.
    fn finish_with_error(arc_self: &Arc<Self>, error: Error) {
        let mut locked = arc_self.inner.lock().unwrap();

        if let Some(inner) = locked.take() {
            // Drop the future before replying, so the client can rely on resources from future
            // being freed before continuing execution.
            std::mem::drop(inner.future);
            let _ = inner.result_channel.send(Err(error));
        }
    }

    /// Poll the future associated with this FutureTask. If the future has already completed,
    /// this does nothing. If it hasn't, then it calls Future::poll. If the future is ready, write
    /// the result back to the synchronous channel. Otherwise wait for someone to poll again.
    fn poll(arc_self: &Arc<Self>) {
        // Lock to read the future and call poll on it. Note this will block other tasks if wake was
        // called multiple times.
        let mut locked = arc_self.inner.lock().unwrap();

        // Only do anything if there is a future to poll (i.e., it hasn't completed yet).
        if let Some(mut inner) = locked.take() {
            // Otherwise poll the client-provided future.
            let waker = futures::task::waker_ref(arc_self);
            let context = &mut Context::from_waker(&*waker);

            match Future::poll(inner.future.as_mut(), context) {
                Poll::Ready(value) => {
                    // Drop the future before replying on the channel. This guarantees that the
                    // client can rely on values owned by the Future / closure will be dropped
                    // once the channel has a result on it.
                    std::mem::drop(inner.future);
                    let _ = inner.result_channel.send(Ok(value));
                }
                Poll::Pending => {
                    // The future isn't done, so put inner back into the [FutureTask] so that it
                    // will still be there the next time this is polled.
                    *locked = Some(inner);
                }
            }
        }
    }
}

impl<S: TaskScheduler, T: Send + 'static> ArcWake for FutureTaskWaker<S, T> {
    /// Wakes the FutureTask by creating a new [Task] to call poll, and scheduling it on the event
    /// loop group associated with the task.
    fn wake_by_ref(arc_self: &Arc<Self>) {
        let task_arc_self = arc_self.clone();

        // Create a [Task] that calls poll. If the CRT tells us that the task is canceled, finishes
        // the future with an error.
        let task = Task::init(
            move |status| match status {
                TaskStatus::RunReady => FutureTaskWaker::poll(&task_arc_self),
                TaskStatus::Canceled => FutureTaskWaker::finish_with_error(&task_arc_self, Error::Canceled),
            },
            "FutureTaskWaker_wake_by_ref",
        );

        // Schedule the task. If it fails, finish with the error.
        match arc_self.scheduler.schedule_task_now(task) {
            Ok(()) => {}
            Err(err) => FutureTaskWaker::finish_with_error(arc_self, err),
        }
    }
}

/// Trait for things that can spawn futures. For now this is just an extension to the [TaskScheduler] trait.
pub trait FutureSpawner: crate::private::Sealed {
    /// Spawn the given [Future] to run asynchronously. This [TaskScheduler] is responsible for
    /// determining how to run [Task]s in the CRT. This returns a [FutureJoinHandle] that can be
    /// used to cancel, block on, or await the result.
    ///
    /// - If the scheduler is an [EventLoopGroup], then every time the Future is polled, the CRT
    ///   will determine the best [EventLoop] to run on.
    ///
    /// - If the scheduler is an [EventLoop], the Future will be pinned to the core that [EventLoop]
    ///   runs on.
    ///
    /// - If the scheduler is [BlockingTaskScheduler], then the thread that calls wake will block on
    ///   [Future::poll]. (This is undesirable except in tests, and could cause deadlocks or other
    ///   issues when combined with other CRT functionality.)
    fn spawn_future<T>(&self, future: impl Future<Output = T> + Send + 'static) -> FutureJoinHandle<T>
    where
        T: Send + 'static;
}

impl<S: TaskScheduler + Clone> FutureSpawner for S {
    fn spawn_future<T>(&self, future: impl Future<Output = T> + Send + 'static) -> FutureJoinHandle<T>
    where
        T: Send + 'static,
    {
        let future = future.boxed();

        let (tx, rx) = oneshot::channel();

        let task_inner = Arc::new(Mutex::new(Some(FutureTaskInner {
            future,
            result_channel: tx,
        })));

        let waker = futures::task::waker(Arc::new(FutureTaskWaker {
            inner: task_inner.clone(),
            scheduler: self.clone(),
        }));

        // Inject a wake to kick-start the Future's execution. (This internally uses the TaskScheduler
        // to call poll, so this won't block unless the scheduler does.)
        waker.wake_by_ref();

        FutureJoinHandle {
            inner: task_inner,
            receiver: rx,
        }
    }
}

#[cfg(test)]
mod test {
    use futures::executor::block_on;
    use futures::future::join_all;
    use std::sync::atomic::{AtomicBool, AtomicU64};
    use std::time::Duration;

    use super::*;
    use crate::common::allocator::Allocator;
    use crate::io::event_loop::{EventLoopGroup, EventLoopTimer};
    use std::sync::atomic::Ordering;

    /// Test that running a small future on an event loop works correctly.
    #[test]
    fn test_simple_future() {
        let mut allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&mut allocator, None, || {}).unwrap();

        let handle = el_group.spawn_future(async {
            println!("Hello from the future");
        });

        handle.wait().unwrap();
    }

    /// Test that spawns a lot of futures and waits for them all to finish, parameterized by the FutureSpawner.
    fn test_join_all_futures(scheduler: &impl FutureSpawner) {
        const NUM_FUTURES: u64 = 50_000;

        let counter = Arc::new(AtomicU64::new(0));

        let mut future_handles = vec![];

        for _ in 0..NUM_FUTURES {
            let counter = counter.clone();
            future_handles.push(scheduler.spawn_future(async move {
                counter.fetch_add(1, Ordering::SeqCst);
            }))
        }

        let results = block_on(join_all(future_handles.into_iter().map(FutureJoinHandle::into_future)));

        assert_eq!(
            Arc::strong_count(&counter),
            1,
            "all references to the counter except ours should be dropped"
        );

        // Check that all Futures completed successfully.
        let results: Result<(), Error> = results.into_iter().collect();
        results.expect("one or more futures failed");

        assert_eq!(counter.load(Ordering::SeqCst), NUM_FUTURES);
    }

    /// test_join_all_futures using a pinned EventLoop.
    #[test]
    fn test_join_all_futures_event_loop() {
        let mut allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&mut allocator, None, || {}).unwrap();
        let event_loop = el_group.get_next_loop().unwrap();

        test_join_all_futures(&event_loop);
    }

    /// test_join_all_futures using an EventLoopGroup.
    #[test]
    fn test_join_all_futures_event_loop_group() {
        let mut allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&mut allocator, None, || {}).unwrap();

        test_join_all_futures(&el_group);
    }

    /// Test that cancelling a future works.
    #[test]
    fn test_cancel_future() {
        let mut allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&mut allocator, None, || {}).unwrap();

        // Create a long timer to delay the future for some time.
        let timer = EventLoopTimer::new(&el_group.get_next_loop().unwrap(), Duration::from_secs(20));

        // Set up a flag that will set to true when the timer is finished.
        let flag = Arc::new(AtomicBool::new(false));

        // Spawn a future that waits for the timer to be done then stores true to the flag.
        let future_handle = {
            let flag = flag.clone();
            el_group.spawn_future(async move {
                timer.await.expect("failed while awaiting timer");
                flag.store(true, Ordering::SeqCst);
            })
        };

        assert_eq!(
            Arc::strong_count(&flag),
            2,
            "there should be 2 references to flag: ours and the Future's"
        );

        // Sleep this thread some amount of time (enough for the timer to start running after the first poll).
        std::thread::sleep(Duration::from_secs(1));

        // Cancel the future
        future_handle.cancel();

        assert_eq!(
            Arc::strong_count(&flag),
            1,
            "The Future should be dropped at this point"
        );
        assert!(
            !flag.load(Ordering::SeqCst),
            "flag should still be false after cancellation"
        );
    }
}
