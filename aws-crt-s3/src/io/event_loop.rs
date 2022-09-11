use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::common::task_scheduler::Task;
use crate::PtrExt as _;
use aws_crt_s3_sys::*;
use std::ptr::NonNull;

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
}

pub struct EventLoopGroup {
    pub(crate) inner: NonNull<aws_event_loop_group>,
}

impl EventLoopGroup {
    /// Create a new default EventLoopGroup.
    /// max_threads: use None for the CRT default
    pub fn new_default(allocator: &mut Allocator, max_threads: Option<u16>) -> Result<Self, Error> {
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
    pub fn get_next_loop(&mut self) -> Result<EventLoop, Error> {
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
}

impl Clone for EventLoopGroup {
    fn clone(&self) -> Self {
        let inner = unsafe { NonNull::new_unchecked(aws_event_loop_group_acquire(self.inner.as_ptr())) };
        Self { inner }
    }
}

impl Drop for EventLoopGroup {
    fn drop(&mut self) {
        unsafe {
            aws_event_loop_group_release(self.inner.as_ptr());
        }
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
        let mut el_group = EventLoopGroup::new_default(&mut allocator, None).unwrap();

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
}
