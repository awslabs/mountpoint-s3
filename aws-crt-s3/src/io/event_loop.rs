//! Infrastructure for asynchronous green-threaded execution

use std::fmt::Debug;
use std::future::Future;
use std::pin::Pin;
use std::ptr::NonNull;
use std::sync::atomic::{AtomicU8, Ordering};
use std::sync::Arc;
use std::task::{Context, Poll};
use std::time::Duration;

use aws_crt_s3_sys::*;
use thiserror::Error;

use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::common::ref_count::{abort_shutdown_callback, new_shutdown_callback_options};
use crate::common::task_scheduler::{Task, TaskScheduler, TaskStatus};
use crate::io::io_library_init;
use crate::CrtError as _;
use crate::ResultExt;

/// An event loop that can be used to schedule and execute tasks
#[derive(Debug)]
pub struct EventLoop {
    /// Pointer to the underlying `aws_event_loop`
    pub(crate) inner: NonNull<aws_event_loop>,
    /// Hold a cloned copy of the event loop group so that it's not destroyed while this event loop exists
    _event_loop_group: EventLoopGroup,
}

// SAFETY: Event Loops are safe to send across threads, since they're the main way to schedule things onto other threads.
// From aws_c_io README
// > The functions we specify as thread-safe, we do so because those functions are necessary for abiding by the stated threading model.
// > For example, since scheduling a task is the main function for addressing cross-threaded operations, it has to be thread-safe.
// From event_loop.h:aws_event_loop_schedule_task_now
// >  * This function may be called from outside or inside the event loop thread.
unsafe impl Send for EventLoop {}
// SAFETY: See above argument.
unsafe impl Sync for EventLoop {}

impl EventLoop {
    /// Schedule a task to execute on this event loop at the specified time
    fn schedule_task_future(&self, task: Task, when: u64) {
        // SAFETY: self.inner is a valid aws_event_loop and into_aws_task_ptr leaks memory until
        // the callback fires, so it will live as long as it needs to.
        unsafe {
            aws_event_loop_schedule_task_future(self.inner.as_ptr(), task.into_aws_task_ptr(), when);
        }
    }

    /// Get the current timestamp for this event loop's clock
    fn current_clock_time(&self) -> Result<u64, Error> {
        // SAFETY: self.inner is a valid aws_event_loop.
        unsafe {
            let mut time_nanos: u64 = 0;
            aws_event_loop_current_clock_time(self.inner.as_ptr(), &mut time_nanos).ok_or_last_error()?;
            Ok(time_nanos)
        }
    }
}

impl crate::private::Sealed for EventLoop {}

impl TaskScheduler for EventLoop {
    fn schedule_task_now(&self, task: Task) -> Result<(), Error> {
        // SAFETY: self.inner is a valid aws_event_loop and into_aws_task_ptr leaks memory until
        // the callback fires, so it will live as long as it needs to.
        unsafe {
            aws_event_loop_schedule_task_now(self.inner.as_ptr(), task.into_aws_task_ptr());
        }
        Ok(())
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

// SAFETY: EventLoopGroups have to be safe to share across threads since they're the primary
// mechanism the CRT provides for scheduling things on other threads.
unsafe impl Send for EventLoopGroup {}
// SAFETY: See above.
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

        // SAFETY: `allocator` is a valid `aws_allocator`. If the creation of the event loop group
        // fails, then (and only then), we abort the callback which frees the internal data
        // structures, which is safe since we know the callback won't fire if the event loop group
        // cannot be created.
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
        // SAFETY: we make sure to embed a copy of the event loop group into the EventLoop struct so
        // we don't free the group while we still have a reference to one of its event loops.
        unsafe {
            let inner = aws_event_loop_group_get_next_loop(self.inner.as_ptr()).ok_or_last_error()?;

            Ok(EventLoop {
                inner,
                _event_loop_group: self.clone(),
            })
        }
    }

    /// Get the number of loops in this group.
    pub fn get_loop_count(&self) -> usize {
        // SAFETY: self.inner is a valid event_loop_group.
        unsafe { aws_event_loop_group_get_loop_count(self.inner.as_ptr()) }
    }
}

impl crate::private::Sealed for EventLoopGroup {}

/// Scheduling a task on an [EventLoopGroup] first finds the next [EventLoop] to use (as reported by
/// the CRT), then uses that one to run the [Task].
impl TaskScheduler for EventLoopGroup {
    fn schedule_task_now(&self, task: Task) -> Result<(), Error> {
        let event_loop = self.get_next_loop()?;
        event_loop.schedule_task_now(task)
    }
}

impl Clone for EventLoopGroup {
    fn clone(&self) -> Self {
        // SAFETY: aws_event_loop_group_acquire returns the same pointer as input, and self.inner is [NonNull].
        let inner = unsafe { NonNull::new_unchecked(aws_event_loop_group_acquire(self.inner.as_ptr())) };
        Self { inner }
    }
}

impl Drop for EventLoopGroup {
    fn drop(&mut self) {
        // SAFETY: In Clone, we call acquire to increment the ref count, so on Drop it is safe to decerement by calling release.
        unsafe {
            aws_event_loop_group_release(self.inner.as_ptr());
        }
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

    /// State of the timer. See associated constants below.
    /// 0 => Not yet started.
    /// 1 => Scheduled but not fired.
    /// 2 => Done.
    /// 3 => Canceled.
    state: Arc<AtomicU8>,
}

impl EventLoopTimer {
    const TIMER_UNSCHEDULED: u8 = 0;
    const TIMER_RUNNING: u8 = 1;
    const TIMER_DONE: u8 = 2;
    const TIMER_CANCELED: u8 = 3;

    /// Create a new EventLoopTimer.
    /// event_loop is the loop that the timer thread will run on (which doesn't need to be related
    /// to the event loop the calling thread or future uses).
    /// duration is how long the timer should delay for. The timer doesn't start until the first
    /// time it's been polled / awaited upon.
    pub fn new(event_loop: &EventLoop, duration: Duration) -> Self {
        Self {
            event_loop: event_loop.clone(),
            duration,
            state: Arc::new(AtomicU8::new(Self::TIMER_UNSCHEDULED)),
        }
    }
}

impl Future for EventLoopTimer {
    type Output = Result<(), EventLoopTimerError>;

    fn poll(self: Pin<&mut Self>, cx: &mut Context<'_>) -> Poll<Self::Output> {
        // If the timer callback has already fired, return with [Poll::Ready].
        match self.state.load(Ordering::SeqCst) {
            Self::TIMER_DONE => return Poll::Ready(Ok(())),
            Self::TIMER_CANCELED => return Poll::Ready(Err(EventLoopTimerError::Canceled)),
            _ => {}
        }

        // Set the state to RUNNING if the current state is UNSCHEDULED. If this fails (because the
        // current state is not RUNNING), then another thread got here first so we can return
        // [Poll::Pending] and this function will be called again when the timer completes.
        if self
            .state
            .compare_exchange(
                Self::TIMER_UNSCHEDULED,
                Self::TIMER_RUNNING,
                Ordering::SeqCst,
                Ordering::SeqCst,
            )
            .is_err()
        {
            return Poll::Pending;
        }

        let now = match self.event_loop.current_clock_time() {
            Ok(now) => now,
            Err(e) => return Poll::Ready(Err(e.into())),
        };

        // 2^64 nanoseconds is almost 600 years, shrug
        let nanos: u64 = self
            .duration
            .as_nanos()
            .try_into()
            .expect("cannot set a timer beyond 2^64 nanoseconds");

        let waker = cx.waker().clone();
        let state = self.state.clone();

        self.event_loop.schedule_task_future(
            Task::init(
                move |status| {
                    // Compute the new state the timer should move into. If the [Task] was canceled,
                    // the the timer Future should complete with an error.
                    let new_state = match status {
                        TaskStatus::RunReady => Self::TIMER_DONE,
                        TaskStatus::Canceled => Self::TIMER_CANCELED,
                    };
                    // Store the new state, and wake up the future so that [TimerFuture::poll] gets
                    // called again.
                    state.store(new_state, Ordering::SeqCst);
                    waker.wake()
                },
                "event_loop_timer",
            ),
            // Schedule the task to execute "nanos" nanoseconds into the future.
            now + nanos,
        );

        Poll::Pending
    }
}

/// [EventLoopTimer] failure results
#[derive(Error, Debug)]
pub enum EventLoopTimerError {
    /// The timer was cancelled
    #[error("The timer was cancelled")]
    Canceled,

    /// An internal error from the AWS Common Runtime
    #[error("Internal CRT error: {0}")]
    InternalError(#[from] crate::common::error::Error),
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::common::allocator::Allocator;
    use crate::io::futures::FutureSpawner;
    use futures::executor::block_on;
    use std::sync::atomic::{AtomicI32, Ordering};
    use std::sync::{mpsc, Arc};
    use std::time::Duration;

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

        let (tx, rx) = mpsc::channel::<i32>();

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

            el.schedule_task_now(task).expect("failed to schedule task");
        }

        for _ in 0..NUM_TASKS {
            rx.recv_timeout(RECV_TIMEOUT).unwrap();
        }

        let final_result = counter.load(Ordering::SeqCst);

        assert_eq!(final_result, NUM_TASKS);
    }

    /// Test that the event loop group shutdown callback works.
    #[test]
    fn test_event_loop_group_shutdown() {
        let mut allocator = Allocator::default();

        let (tx, rx) = mpsc::channel();

        {
            let _el_group = EventLoopGroup::new_default(&mut allocator, None, move || tx.send(()).unwrap()).unwrap();
        }

        // Wait until the event loop group's shutdown callback fires.
        rx.recv_timeout(RECV_TIMEOUT).unwrap();
    }

    /// Test [EventLoopGroup::get_loop_count]
    #[test]
    fn test_event_loop_group_get_loop_count() {
        let mut allocator = Allocator::default();

        let el_group = EventLoopGroup::new_default(&mut allocator, None, || {}).unwrap();

        assert!(el_group.get_loop_count() > 0);
    }

    /// Test [EventLoopGroup::get_loop_count]
    #[test]
    fn test_new_event_loop_group_max_threads_fails() {
        let mut allocator = Allocator::default();

        EventLoopGroup::new_default(&mut allocator, Some(u16::MAX), || {})
            .expect_err("creating an event loop group with u16::MAX threads should fail");
    }

    /// Test the EventLoopTimer with some simple timers.
    #[test]
    fn test_timer_future() {
        let mut allocator = Allocator::default();

        let el_group = EventLoopGroup::new_default(&mut allocator, None, || {}).unwrap();
        let event_loop = el_group.get_next_loop().unwrap();

        // Create two timers, each delaying 1 second. They won't start timing until they're awaited.
        let timer1 = EventLoopTimer::new(&event_loop, Duration::from_secs(1));
        let timer2 = EventLoopTimer::new(&event_loop, Duration::from_secs(1));

        let before_nanos = event_loop
            .current_clock_time()
            .expect("Failed to get current clock time");

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
