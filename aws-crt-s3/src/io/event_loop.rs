use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::common::task_scheduler::{Task, TaskStatus};
use crate::io::io_library_init;
use crate::PtrExt as _;
use aws_crt_s3_sys::*;
use crossbeam::channel;
use futures::future::BoxFuture;
use futures::task::ArcWake;
use futures::FutureExt;
use std::future::Future;
use std::ptr::NonNull;
use std::sync::{Arc, Mutex};
use std::task::{Context, Poll};

pub struct EventLoop {
    pub(crate) inner: NonNull<aws_event_loop>,
    /// Hold a cloned copy of the event loop group so that it's not destroyed while this event loop exists
    _event_loop_group: EventLoopGroup,
}

impl EventLoop {
    pub fn schedule_task_now(&mut self, task: Task) {
        unsafe {
            // Safety: we turn the Task into a pointer but don't return it to the caller and
            // immediately schedule it on this event loop.
            aws_event_loop_schedule_task_now(self.inner.as_ptr(), task.into_aws_task_ptr());
        }
    }

    pub fn schedule_task_future(&mut self, task: Task, when: u64) {
        unsafe {
            // Safety: see schedule_task_now
            aws_event_loop_schedule_task_future(self.inner.as_ptr(), task.into_aws_task_ptr(), when);
        }
    }

    pub fn current_clock_time(&mut self) -> u64 {
        unsafe {
            let mut time_nanos: u64 = 0;
            let res = aws_event_loop_current_clock_time(self.inner.as_ptr(), &mut time_nanos);
            assert_eq!(res, AWS_OP_SUCCESS);
            time_nanos
        }
    }
}

pub struct EventLoopGroup {
    pub(crate) inner: NonNull<aws_event_loop_group>,
}

unsafe impl Send for EventLoopGroup {}
unsafe impl Sync for EventLoopGroup {}

impl EventLoopGroup {
    /// Create a new default EventLoopGroup.
    /// max_threads: use None for the CRT default
    pub fn new_default(allocator: &mut Allocator, max_threads: Option<u16>) -> Result<Self, Error> {
        io_library_init(allocator);

        let max_threads = max_threads.unwrap_or(0);

        let inner = unsafe {
            // TODO: Don't hardcode clock = null
            aws_event_loop_group_new_default(allocator.inner.as_ptr(), max_threads, std::ptr::null())
                .ok_or_last_error()?
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
    pub fn get_loop_count(&mut self) -> usize {
        unsafe {
            // Safety: self.inner is always non-null and we're calling a simple getter.
            aws_event_loop_group_get_loop_count(self.inner.as_ptr())
        }
    }

    pub fn schedule_future<T: Send + 'static>(
        &self,
        future: impl Future<Output = T> + Send + 'static,
    ) -> channel::Receiver<T> {
        let future = future.boxed();

        let (tx, rx) = channel::bounded(1);

        let waker = futures::task::waker(Arc::new(FutureTask {
            el_group: self.clone(),
            result_channel: tx,
            future: Mutex::new(Some(future)),
        }));

        waker.wake_by_ref();

        rx
    }
}

impl Clone for EventLoopGroup {
    fn clone(&self) -> Self {
        let inner = unsafe {
            // Safety: aws_event_loop_group_acquire returns the same pointer as input, and we know self.inner is NonNull.
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
    result_channel: channel::Sender<T>,

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
                    // This will never block because we only send one value. Ignore the result since
                    // if this fails, the client must have closed the receiver side, in which case
                    // they must not care about the result.
                    let _ = arc_self.result_channel.send(value);
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
                assert_eq!(status, TaskStatus::RunReady);
                FutureTask::poll(&arc_self);
            },
            "event_loop_future",
        );

        el_group.get_next_loop().unwrap().schedule_task_now(task);
    }
}

#[cfg(test)]
mod test {
    use super::*;
    use crate::common::allocator::Allocator;
    use crossbeam::channel;
    use std::sync::atomic::{AtomicI32, Ordering};
    use std::sync::Arc;
    use std::time::{Duration, Instant};

    /// Test that scheduling tasks on the default event loop works, by scheduling a large number
    /// of parallel tasks that all increment a counter.
    #[test]
    fn test_schedule_tasks_default_el_group() {
        const NUM_TASKS: i32 = 2_000;

        let mut allocator = Allocator::default();
        let el_group = EventLoopGroup::new_default(&mut allocator, None).unwrap();

        let counter = Arc::new(AtomicI32::new(0));

        let (tx, rx) = channel::bounded::<i32>(NUM_TASKS as usize);

        for id in 0..NUM_TASKS {
            let mut el = el_group.get_next_loop().unwrap();

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
        let deadline = Instant::now() + Duration::from_secs(5);

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
        let el_group = EventLoopGroup::new_default(&mut allocator, None).unwrap();

        let rx = el_group.schedule_future(async {
            println!("Hello from the future");
        });

        rx.recv_timeout(Duration::from_secs(5)).unwrap();
    }
}
