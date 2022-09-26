//! Infrastructure for asynchronous green-threaded execution

use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::common::ref_count::{abort_shutdown_callback, new_shutdown_callback_options};
use crate::common::task_scheduler::{Task, TaskStatus};
use crate::io::io_library_init;
use crate::CrtError as _;
use crate::ResultExt;
use aws_crt_s3_sys::*;
use futures::channel::oneshot;
use futures::future::BoxFuture;
use futures::task::ArcWake;
use futures::FutureExt;
use std::future::{Future, IntoFuture};
use std::pin::Pin;
use std::ptr::NonNull;
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll};
use std::time::Duration;

/// An event loop that can be used to schedule and execute tasks
#[derive(Debug)]
pub struct EventLoop {
    /// Pointer to the underlying `aws_event_loop`
    pub(crate) inner: NonNull<aws_event_loop>,
    /// Hold a cloned copy of the event loop group so that it's not destroyed while this event loop exists
    _event_loop_group: EventLoopGroup,
}

// Safety: Event Loops are safe to send across threads, since they're the main way to schedule things onto other threads.
// From aws_c_io README
// > The functions we specify as thread-safe, we do so because those functions are necessary for abiding by the stated threading model.
// > For example, since scheduling a task is the main function for addressing cross-threaded operations, it has to be thread-safe.
// From event_loop.h:aws_event_loop_schedule_task_now
// >  * This function may be called from outside or inside the event loop thread.
unsafe impl Send for EventLoop {}

impl EventLoop {
    /// Schedule a task to execute on this event loop as soon as possible
    pub fn schedule_task_now(&self, task: Task) {
        unsafe {
            // Safety: we turn the Task into a pointer but don't return it to the caller and
            // immediately schedule it on this event loop.
            aws_event_loop_schedule_task_now(self.inner.as_ptr(), task.into_aws_task_ptr());
        }
    }

    /// Schedule a task to execute on this event loop at the specified time
    fn schedule_task_future(&self, task: Task, when: u64) {
        unsafe {
            // Safety: see schedule_task_now
            aws_event_loop_schedule_task_future(self.inner.as_ptr(), task.into_aws_task_ptr(), when);
        }
    }

    /// Get the current timestamp for this event loop's clock
    fn current_clock_time(&self) -> Result<u64, Error> {
        unsafe {
            let mut time_nanos: u64 = 0;
            aws_event_loop_current_clock_time(self.inner.as_ptr(), &mut time_nanos).ok_or_last_error()?;
            Ok(time_nanos)
        }
    }
}

/// EventLoops don't destroy anything on Drop, so we are free to duplicate the pointer to it. But we
/// do need to clone the EventLoopGroup reference so that the group won't be Dropped while this
/// reference to the EventLoop exists.
impl Clone for EventLoop {
    fn clone(&self) -> Self {
        Self {
            inner: self.inner,
            _event_loop_group: self._event_loop_group.clone(),
        }
    }
}

/// An event loop group collects one or more [`EventLoop`]s together for processor affiniity and
/// load balancing purposes
#[derive(Debug)]
pub struct EventLoopGroup {
    pub(crate) inner: NonNull<aws_event_loop_group>,
}

unsafe impl Send for EventLoopGroup {}
unsafe impl Sync for EventLoopGroup {}

impl EventLoopGroup {
    /// Create a new default EventLoopGroup.
    /// max_threads: use None for the CRT default
    /// on_shutdown will be called when the event loop group shuts down.
    pub fn new_default(
        allocator: &mut Allocator,
        max_threads: Option<u16>,
        on_shutdown: impl FnOnce() + Send + 'static,
    ) -> Result<Self, Error> {
        io_library_init(allocator);

        let max_threads = max_threads.unwrap_or(0);

        let shutdown_options = new_shutdown_callback_options(on_shutdown);

        let inner = unsafe {
            aws_event_loop_group_new_default(allocator.inner.as_ptr(), max_threads, &shutdown_options)
                .ok_or_last_error()
                .on_err(|| abort_shutdown_callback(shutdown_options))?
        };

        Ok(Self { inner })
    }

    /// Get the next event loop to schedule a task on. (Internally, the CRT will make a choice
    /// on which loop in the group will be returned.)
    pub fn get_next_loop(&self) -> Result<EventLoop, Error> {
        unsafe {
            // Safety: we make sure to embed a copy of the event loop group into the EventLoop
            // struct so we don't free the group while we still have a reference to one of its
            // event loops.
            let inner = aws_event_loop_group_get_next_loop(self.inner.as_ptr()).ok_or_last_error()?;

            Ok(EventLoop {
                inner,
                _event_loop_group: self.clone(),
            })
        }
    }

    /// Get the number of loops in this group.
    pub fn get_loop_count(&self) -> usize {
        unsafe {
            // Safety: self.inner is always non-null and we're calling a simple getter.
            aws_event_loop_group_get_loop_count(self.inner.as_ptr())
        }
    }

    /// Spawn the given Future as a task to run to completion on an event loop from this group. The
    /// returned channel will return the result of the task once it completes.
    pub fn spawn_future<T: Send + 'static>(&self, future: impl Future<Output = T> + Send + 'static) -> FutureHandle<T> {
        let future = future.boxed();

        let (tx, rx) = oneshot::channel();

        let waker = futures::task::waker(Arc::new(FutureTask {
            el_group: self.clone(),
            result_channel: Mutex::new(Some(tx)),
            future: Mutex::new(Some(future)),
        }));

        waker.wake_by_ref();

        FutureHandle { receiver: rx }
    }
}

/// Handle to a spawned future. Can be awaited upon to get the result.
#[derive(Debug)]
pub struct FutureHandle<T: Send + 'static> {
    receiver: oneshot::Receiver<T>,
}

impl<T> IntoFuture for FutureHandle<T>
where
    T: Send + 'static,
{
    type IntoFuture = oneshot::Receiver<T>;

    type Output = <Self::IntoFuture as Future>::Output;

    fn into_future(self) -> Self::IntoFuture {
        self.receiver
    }
}

impl Clone for EventLoopGroup {
    fn clone(&self) -> Self {
        let inner = unsafe {
            // Safety: aws_event_loop_group_acquire returns the same pointer as input, and self.inner is [NonNull].
            NonNull::new_unchecked(aws_event_loop_group_acquire(self.inner.as_ptr()))
        };
        Self { inner }
    }
}

impl Drop for EventLoopGroup {
    fn drop(&mut self) {
        unsafe {
            // Safety: In Clone, we call acquire to increment the ref count, so on Drop it is safe to decerement by calling release.
            aws_event_loop_group_release(self.inner.as_ptr());
        }
    }
}

struct FutureTask<T: Send + 'static> {
    /// The future this task is running. Locked behind a mutex (since wake can be called from
    /// different threads). If the future is not None, then it is still waiting to execute and we
    /// need to call poll again when woken. If it is None, the future has already finished executing.
    future: Mutex<Option<BoxFuture<'static, T>>>,

    /// A channel to write the result of the future to when it completes. This bridges the
    /// synchronous and asynchronous worlds by providing a way to block on the completion of the
    /// future in non-async code.
    result_channel: Mutex<Option<oneshot::Sender<T>>>,

    /// The event loop group this future is running on. For now, every time wake is called, it is
    /// scheduled on the next event loop given by the group. In the future, we could change this to
    /// pin the future to a particular event loop (or try to always use the same event loop a CRT
    /// callback comes in on).
    el_group: EventLoopGroup,
}

impl<T: Send + 'static> FutureTask<T> {
    /// Poll the future associated with this FutureTask. If the future has already completed,
    /// this does nothing. If it hasn't, then it calls Future::poll. If the future is ready, write
    /// the result back to the synchronous channel. Otherwise wait for someone to poll again.
    fn poll(arc_self: &Arc<Self>) {
        // Lock to read the future and call poll on it. Note this will block other tasks if wake was
        // called multiple times.
        let mut locked = arc_self.future.lock().unwrap();

        // Only do anything if there is a future to poll (i.e., it hasn't completed yet).
        if let Some(mut future) = locked.take() {
            let waker = futures::task::waker_ref(arc_self);
            let context = &mut Context::from_waker(&*waker);

            match Future::poll(future.as_mut(), context) {
                Poll::Ready(value) => {
                    // Drop the future before replying on the channel
                    std::mem::drop(future);
                    // This will never fail because we only send one value and we don't put the
                    // Future back into arc_self when it completes. Ignore the result since if this
                    // fails, the client must have closed the receiver side, in which case they must
                    // not care about the result.
                    let channel = arc_self
                        .result_channel
                        .lock()
                        .unwrap()
                        .take()
                        .expect("channel already taken");
                    let _ = channel.send(value);
                }
                Poll::Pending => {
                    // The future isn't done, so keep it around for future calls to wake.
                    *locked = Some(future);
                }
            }
        }
    }
}

impl<T: Send + 'static> ArcWake for FutureTask<T> {
    /// Wakes the FutureTask by creating a new Task to call poll, and scheduling it on the event
    /// loop group associated with the task.
    fn wake_by_ref(arc_self: &Arc<Self>) {
        let el_group = arc_self.el_group.clone();
        let arc_self = arc_self.clone();

        let task = Task::init(
            move |status| {
                // TODO: handle the Canceled case gracefully
                assert_eq!(status, TaskStatus::RunReady, "Task canceled");
                FutureTask::poll(&arc_self);
            },
            "event_loop_future",
        );

        el_group.get_next_loop().unwrap().schedule_task_now(task);
    }
}

/// EventLoopTimer is a Future that delays for some amount of time.
/// Internally it schedules the timer on an event loop using schedule_task_future.
#[derive(Debug)]
pub struct EventLoopTimer {
    /// The event loop that the timer task is running on.
    event_loop: EventLoop,
    /// How long the timer should run for.
    duration: Duration,
    /// Whether the timer has completed already.
    done: Arc<AtomicBool>,
    /// Whether the timer task has been scheduled yet.
    scheduled: Arc<AtomicBool>,
}

impl EventLoopTimer {
    /// Create a new EventLoopTimer.
    /// event_loop is the loop that the timer thread will run on (which doesn't need to be related
    /// to the event loop the calling thread or future uses).
    /// duration is how long the timer should delay for. The timer doesn't start until the first
    /// time it's been polled / awaited upon.
    pub fn new(event_loop: EventLoop, duration: Duration) -> Self {
        Self {
            event_loop,
            duration,
            done: Arc::new(AtomicBool::new(false)),
            scheduled: Arc::new(AtomicBool::new(false)),
        }
    }
}

impl Future for EventLoopTimer {
    type Output = Result<(), Error>;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
        // Check if the timer is already done
        if self.done.load(Ordering::SeqCst) {
            return Poll::Ready(Ok(()));
        }

        // Check if the timer is scheduled already. If it is, swapping true won't do anything and we
        // return Pending. If it isn't, this atomically sets scheduled to true and we will schedule
        // the task now.
        if self.scheduled.swap(true, Ordering::SeqCst) {
            return Poll::Pending;
        }

        let now = match self.event_loop.current_clock_time() {
            Ok(now) => now,
            Err(e) => return Poll::Ready(Err(e)),
        };

        let nanos: u64 = match self.duration.as_nanos().try_into() {
            Ok(nanos) => nanos,
            Err(e) => {
                return Poll::Ready(Err(Error::BindingError(
                    Box::new(e),
                    "Failed to convert nanos to u64 in EventLoopTimer".to_string(),
                )))
            }
        };

        let waker = cx.waker().clone();
        let done = self.done.clone();

        self.event_loop.schedule_task_future(
            Task::init(
                move |status| {
                    // TODO: handle the Canceled case more gracefully
                    assert_eq!(status, TaskStatus::RunReady, "Task canceled");
                    done.store(true, Ordering::SeqCst);
                    waker.wake()
                },
                "event_loop_timer",
            ),
            now + nanos,
        );

        Poll::Pending
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::common::allocator::Allocator;
    use crossbeam::channel;
    use futures::executor::block_on;
    use std::sync::atomic::{AtomicI32, Ordering};
    use std::sync::Arc;
    use std::time::{Duration, Instant};

    /// How long each test should wait to receive values from channels. We set this deadline so that
    /// if there's a bug, the tests won't try to spin forever.
    const RECV_TIMEOUT: Duration = Duration::from_secs(5);

    /// Test that scheduling tasks on the default event loop works, by scheduling a large number
    /// of parallel tasks that all increment a counter.
    #[test]
    fn test_schedule_tasks_default_el_group() {
        const NUM_TASKS: i32 = 2_000;

        let mut allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&mut allocator, None, || {}).unwrap();

        let counter = Arc::new(AtomicI32::new(0));

        let (tx, rx) = channel::bounded::<i32>(NUM_TASKS as usize);

        for id in 0..NUM_TASKS {
            let el = el_group.get_next_loop().unwrap();

            let counter = counter.clone();
            let tx = tx.clone();

            let task = Task::init(
                move |_| {
                    counter.fetch_add(1, Ordering::SeqCst);
                    tx.send(id).unwrap();
                },
                "test",
            );

            el.schedule_task_now(task);
        }

        // Only wait 5 seconds to get all of the results to avoid blocking forever if there's a bug.
        let deadline = Instant::now() + RECV_TIMEOUT;

        for _ in 0..NUM_TASKS {
            rx.recv_deadline(deadline).unwrap();
        }

        let final_result = counter.load(Ordering::SeqCst);

        assert_eq!(final_result, NUM_TASKS);
    }

    /// Test that running a small future on an event loop works correctly.
    #[test]
    fn test_simple_future() {
        let mut allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&mut allocator, None, || {}).unwrap();

        let handle = el_group.spawn_future(async {
            println!("Hello from the future");
        });

        block_on(handle.into_future()).unwrap();
    }

    /// Test that the event loop group shutdown callback works.
    #[test]
    fn test_event_loop_group_shutdown() {
        let mut allocator = Allocator::default().traced();

        let (tx, rx) = channel::bounded(1);

        {
            let _el_group = EventLoopGroup::new_default(&mut allocator, None, move || tx.send(()).unwrap()).unwrap();
        }

        // Wait until the event loop group's shutdown callback fires.
        rx.recv_timeout(RECV_TIMEOUT).unwrap();
    }

    /// Test the EventLoopTimer with some simple timers.
    #[test]
    fn test_timer_future() {
        let mut allocator = Allocator::default().traced();

        let el_group = EventLoopGroup::new_default(&mut allocator, None, || {}).unwrap();
        let event_loop = el_group.get_next_loop().unwrap();

        // Create two timers, each delaying 1 second. They won't start timing until they're awaited.
        let timer1 = EventLoopTimer::new(event_loop.clone(), Duration::from_secs(1));
        let timer2 = EventLoopTimer::new(event_loop.clone(), Duration::from_secs(1));

        let before_nanos = event_loop
            .current_clock_time()
            .expect("Failed to get current clock time");

        allocator.tracer_dump();

        // Run a future that awaits both timers.
        let handle = el_group.spawn_future(async {
            timer1.await.expect("timer1 failed");
            timer2.await.expect("timer2 failed");
        });

        // Wait for the future to complete
        block_on(handle.into_future()).unwrap();

        let after_nanos = event_loop
            .current_clock_time()
            .expect("Failed to get current clock time");

        // At least 2 seconds should have passed by the time the future completes.
        assert!(after_nanos > before_nanos + u64::try_from(Duration::from_secs(2).as_nanos()).unwrap());
    }
}
