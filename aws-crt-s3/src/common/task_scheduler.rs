use aws_crt_s3_sys::*;
use std::ffi::CString;
use std::marker::PhantomPinned;
use std::pin::Pin;

/// Wrapper around aws_task_status. We need to do this (rather than have bindgen generate a
/// Rust-like enum) since the type has to be FFI-safe in the callbacks later in this file. But the
/// generated enum is less friendly to use, to we have this wrapper.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
#[non_exhaustive]
pub enum TaskStatus {
    RunReady,
    Canceled,
}

impl TaskStatus {
    fn to_aws_task_status(self) -> aws_task_status {
        match self {
            Self::RunReady => aws_task_status::AWS_TASK_STATUS_RUN_READY,
            Self::Canceled => aws_task_status::AWS_TASK_STATUS_CANCELED,
        }
    }

    fn from_aws_task_status(status: aws_task_status) -> Option<Self> {
        if status == aws_task_status::AWS_TASK_STATUS_RUN_READY {
            Some(Self::RunReady)
        } else if status == aws_task_status::AWS_TASK_STATUS_CANCELED {
            Some(Self::Canceled)
        } else {
            None
        }
    }
}

/// Abbreviation for the TaskCallbacks to make the code easier to read.
type TaskCallback = Box<dyn FnOnce(TaskStatus) + Send>;

struct TaskInner {
    // The inner aws_task struct that we pass pointers to when interacting with the CRT.
    inner: aws_task,

    /// The callback the user wants to be notified on.
    callback: TaskCallback,

    /// Owned copy of the type_tag the aws_task references.
    type_tag: CString,

    /// Force this object to be !Unpin since aws_task contains a linked list node, and the aws_task
    /// user data is a pointer to this struct itself.
    _pinned: PhantomPinned,
}

// We're going to assume that TaskInner implements Send below, so let's add some safety
// checks that the types inside it implement Send. Rust doesn't allow static assertions that
// involve generic type parameters. So instead just () as a proxy for double checking that the
// callback type implements Send.
static_assertions::assert_impl_all!(TaskCallback: Send);
static_assertions::assert_impl_all!(CString: Send);

// Safety: TaskInner satisfies Send because all of the fields we added do, and aws_task must
// because the CRT can schedule tasks on different threads (and it passes a pointer to the aws_task struct).
unsafe impl Send for TaskInner {}

/// A wrapper around the CRT's aws_task. T is the type of some user data the user would like to
/// receive as an argument in the callback.
pub struct Task(Pin<Box<TaskInner>>);

impl Task {
    /// Create a new Task from some user data and a callback function.
    /// type_tag must be CString-compatible (i.e., must not contain any null bytes)
    pub fn init(callback: impl FnOnce(TaskStatus) + Send + 'static, type_tag: &str) -> Self {
        let mut task: Box<TaskInner> = Box::new(TaskInner {
            inner: Default::default(),
            callback: Box::new(callback),
            type_tag: CString::new(type_tag).expect("type_tag must be CString-compatible"),
            _pinned: Default::default(),
        });

        // Pass a pointer to our TaskInner struct as the user_data for the task. This makes the
        // structure even more self-referential (which it already is because aws_task holds a linked
        // list node). So it's really important to Pin the pointer we give back to the user.
        let task_ptr = &mut *task as *mut TaskInner;

        unsafe {
            // Safety: we pass in a pointer to the type_tag string, which is owned by the TaskInner
            // struct to ensure it lives at least as long as the task does. The user_data is a
            // pointer to our TaskInner struct, which is why it's important that the result of this
            // function is Pinned.
            aws_task_init(
                &mut task.inner,
                Some(task_fn),
                task_ptr as *mut libc::c_void,
                task.type_tag.as_ptr(),
            );
        }

        Task(Box::into_pin(task))
    }

    /// Turn this Task into a pointer to an aws_task. Consumes the Task and leaks Box holding
    /// the task, since we need to keep it around until the task actually runs. If this function is
    /// called without scheduling the resulting pointer, the space will be leaked. It's not unsafe
    /// to leak memory though, so scheduling the task is not required to uphold the safety contract.
    /// Safety: Don't move the task out of the pointed-to struct.
    pub(crate) unsafe fn into_aws_task_ptr(self) -> *mut aws_task {
        // Safety: this function gets the inner aws_task pointer and gives to aws_task_run to
        // run it on the current thread. The aws_task struct contains a self-referential pointer
        // to TaskInner struct. So we need to leak the Box containing the TaskInner so that the
        // memory isn't freed when the Box is dropped at the end of this function. In the task_fn
        // callback, we turn it back into a Box so it can be freed when the task is done.
        // From the CRT comments:
        // "* Once added to the scheduler, a task must remain in memory until its function is executed."
        // "* The task should not be cleaned up or modified until its function is executed."

        let task = Box::leak(Pin::into_inner_unchecked(self.0));
        &mut task.inner
    }

    /// Run this task on the current thread. Consumes the Task.
    pub fn run(self, status: TaskStatus) {
        unsafe {
            // Safety: we turn the task into a pointer but immediately schedule it with aws_task_run
            // and don't return it to the caller.
            aws_task_run(self.into_aws_task_ptr(), status.to_aws_task_status());
        }
    }
}

/// All tasks given to the CRT are scheduled to call back to this function, which is the glue that goes
/// from the unsafe C bindings to the Rust callback from the user.
/// Safety: Don't call this function directly, it should only be given to aws_task_init as a callback.
unsafe extern "C" fn task_fn(task: *mut aws_task, arg: *mut libc::c_void, status: aws_task_status) {
    // Safety: the only caller of this function is the CRT after we give this to aws_task_init with
    // an arg that is the Box containing TaskInner. We leaked the Box in into_aws_task_ptr, so it
    // still will be live here.
    let task_inner = Box::from_raw(arg as *mut TaskInner);

    // This should always be true, since the TaskInner contains the aws_task. But let's double check
    // to make sure nothing super strange is happening.
    assert!(std::ptr::eq(task, &task_inner.inner));

    let status = TaskStatus::from_aws_task_status(status).expect("got invalid aws_task_status from CRT");

    (task_inner.callback)(status);

    // task_inner will be freed when dropped, which is okay since the task is now finished running.
}

#[cfg(test)]
mod test {
    use super::*;
    use crossbeam::channel;

    /// Test the task creation / execution using a very simple task that runs on the same thread
    /// as the task's creator.
    #[test]
    fn test_create_task() {
        let (tx, rx) = channel::bounded(1);

        let start_num: u32 = 4;

        let my_task = Task::init(
            move |_| {
                tx.send(start_num + 1).unwrap();
            },
            "test",
        );

        my_task.run(TaskStatus::RunReady);

        // Task::run runs the task on the same thread, so the value on the channel will always
        // be available by the time we get here.
        let end_num = rx.try_recv().unwrap();
        assert_eq!(end_num, start_num + 1);
    }
}
