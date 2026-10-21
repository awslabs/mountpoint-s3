//! Strategies for scheduling retries of failed requests

use std::mem::ManuallyDrop;
use std::ptr::NonNull;
use std::time::Duration;

use mountpoint_s3_crt_sys::{
    AWS_OP_SUCCESS, aws_atomic_init_int, aws_byte_cursor, aws_exponential_backoff_jitter_mode,
    aws_exponential_backoff_retry_options, aws_io_errors, aws_raise_error, aws_retry_error_type, aws_retry_strategy,
    aws_retry_strategy_acquire, aws_retry_strategy_new_standard, aws_retry_strategy_on_retry_ready_fn,
    aws_retry_strategy_on_retry_token_acquired_fn, aws_retry_strategy_release, aws_retry_strategy_vtable,
    aws_retry_token, aws_retry_token_release, aws_standard_retry_options,
};

use crate::CrtError as _;
use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::common::task_scheduler::{Task, TaskScheduler, TaskStatus};
use crate::io::event_loop::EventLoopGroup;

/// A strategy for scheduling retries of failed requests
#[derive(Debug)]
pub struct RetryStrategy {
    pub(crate) inner: NonNull<aws_retry_strategy>,
}

impl RetryStrategy {
    /// Create a new standard retry strategy that uses exponential backoff and jittering to schedule
    /// retries, and separates failing endpoints into partitions.
    pub fn standard(allocator: &Allocator, options: &StandardRetryOptions<'_>) -> Result<Self, Error> {
        let options = options.to_inner();

        // Safety: `options.backoff_retry_options.event_loop_group` is a reference counted object,
        // so will survive even when the Rust reference is dropped
        let inner = unsafe { aws_retry_strategy_new_standard(allocator.inner.as_ptr(), &options).ok_or_last_error()? };

        Ok(Self { inner })
    }

    /// Create a strategy that makes a single attempt and never retries.
    ///
    /// The CRT has no way to configure zero retries on its other strategies: they treat
    /// `max_retries = 0` as "use the default". Its own no-retry strategy
    /// (`aws_retry_strategy_new_no_retry`) refuses to issue retry tokens at all, which fails every
    /// request in clients that acquire a token before the first attempt (such as the S3 client).
    /// This strategy issues tokens as usual and rejects every retry with
    /// `AWS_IO_MAX_RETRIES_EXCEEDED`, so the failed attempt's error is reported.
    pub fn no_retry(allocator: &Allocator, event_loop_group: &EventLoopGroup) -> Self {
        let mut strategy = Box::new(NoRetryStrategy {
            base: aws_retry_strategy {
                allocator: allocator.inner.as_ptr(),
                // The CRT only reads through the vtable pointer.
                vtable: &raw const NO_RETRY_VTABLE as *mut aws_retry_strategy_vtable,
                ..Default::default()
            },
            event_loop_group: event_loop_group.clone(),
        });
        // SAFETY: the strategy is not shared yet. Its first reference is owned by the returned handle.
        unsafe { aws_atomic_init_int(&mut strategy.base.ref_count, 1) };
        let strategy = Box::into_raw(strategy);
        // SAFETY: `strategy` was just allocated and is not shared yet. `impl_` lets the vtable
        // functions get back to the Rust struct, and `no_retry_destroy` frees it when the CRT
        // releases the last reference.
        unsafe {
            (*strategy).base.impl_ = strategy as *mut libc::c_void;
            Self {
                inner: NonNull::new_unchecked(&raw mut (*strategy).base),
            }
        }
    }
}

/// The state behind [RetryStrategy::no_retry].
///
/// The CRT changes the reference count in `base` concurrently through raw pointers, so code never
/// holds a reference to the whole struct: it reads single fields through raw pointers.
struct NoRetryStrategy {
    base: aws_retry_strategy,
    /// Runs the token-acquired callbacks, which the CRT's contract requires to be asynchronous.
    event_loop_group: EventLoopGroup,
}

static NO_RETRY_VTABLE: aws_retry_strategy_vtable = aws_retry_strategy_vtable {
    destroy: Some(no_retry_destroy),
    acquire_token: Some(no_retry_acquire_token),
    schedule_retry: Some(no_retry_schedule_retry),
    record_success: Some(no_retry_record_success),
    release_token: Some(no_retry_release_token),
};

/// A retry token issued by [RetryStrategy::no_retry], waiting to be delivered to the CRT caller
/// that requested it.
///
/// Invariants, established by [NoRetryToken::new]:
/// - `token` points to a live `aws_retry_token`, which holds one reference to its
///   [NoRetryStrategy], released in `no_retry_release_token`.
/// - This value owns one reference to `token`: [complete](Self::complete) passes it to the caller
///   on success, and dropping releases it otherwise.
/// - `on_acquired` and `user_data` are the arguments the CRT caller passed to `acquire_token`, and
///   the caller keeps `user_data` valid until `on_acquired` runs.
struct NoRetryToken {
    token: NonNull<aws_retry_token>,
    on_acquired: aws_retry_strategy_on_retry_token_acquired_fn,
    user_data: *mut libc::c_void,
}

// SAFETY: the token and its strategy are reference counted with atomics and can be used from any
// thread. The CRT caller that passed `user_data` expects the callback on an event loop thread.
unsafe impl Send for NoRetryToken {}

impl NoRetryToken {
    /// Issue a new token for `retry_strategy`, to be delivered to `on_acquired`.
    ///
    /// # Safety
    /// `retry_strategy` must be a live strategy created by [RetryStrategy::no_retry], and
    /// `on_acquired` and `user_data` the arguments the CRT caller passed to its `acquire_token`.
    unsafe fn new(
        retry_strategy: *mut aws_retry_strategy,
        allocator: &Allocator,
        on_acquired: aws_retry_strategy_on_retry_token_acquired_fn,
        user_data: *mut libc::c_void,
    ) -> Self {
        // SAFETY: `retry_strategy` is live. The token holds the new reference (see the invariants).
        unsafe { aws_retry_strategy_acquire(retry_strategy) };
        let mut token = Box::new(aws_retry_token {
            allocator: allocator.inner.as_ptr(),
            retry_strategy,
            ..Default::default()
        });
        // SAFETY: the token is not shared yet. Its first reference is owned by `Self`.
        unsafe { aws_atomic_init_int(&mut token.ref_count, 1) };
        Self {
            token: NonNull::from(Box::leak(token)),
            on_acquired,
            user_data,
        }
    }

    /// Deliver the token to the CRT caller, or on cancellation report the error with no token.
    fn complete(self, status: TaskStatus) {
        let Some(on_acquired) = self.on_acquired else {
            // Nobody to deliver to: dropping `self` releases the token.
            return;
        };
        // SAFETY: `token` is live (see the invariants) and its `retry_strategy` field is never
        // modified.
        let strategy = unsafe { (*self.token.as_ptr()).retry_strategy };
        match status {
            TaskStatus::RunReady => {
                // The token's reference passes to the caller.
                let this = ManuallyDrop::new(self);
                // SAFETY: the callback and its arguments are the CRT caller's (see the invariants).
                unsafe { on_acquired(strategy, AWS_OP_SUCCESS, this.token.as_ptr(), this.user_data) };
            }
            TaskStatus::Canceled => {
                // SAFETY: as above.
                unsafe {
                    on_acquired(
                        strategy,
                        aws_io_errors::AWS_ERROR_IO_OPERATION_CANCELLED as i32,
                        std::ptr::null_mut(),
                        self.user_data,
                    )
                };
                // Release the token only after the callback: it may hold the last reference to the
                // strategy passed to the callback.
                drop(self);
            }
        }
    }
}

impl Drop for NoRetryToken {
    fn drop(&mut self) {
        // SAFETY: this value owns one reference to `token` (see the invariants).
        unsafe { aws_retry_token_release(self.token.as_ptr()) };
    }
}

/// SAFETY: only called by the CRT, when the last reference to the strategy is released.
unsafe extern "C" fn no_retry_destroy(retry_strategy: *mut aws_retry_strategy) {
    // SAFETY: `impl_` was set to the leaked box in `RetryStrategy::no_retry`, and no other
    // reference is left.
    unsafe {
        drop(Box::from_raw((*retry_strategy).impl_ as *mut NoRetryStrategy));
    }
}

/// SAFETY: only called by the CRT, with a strategy created by `RetryStrategy::no_retry`.
unsafe extern "C" fn no_retry_acquire_token(
    retry_strategy: *mut aws_retry_strategy,
    _partition_id: *const aws_byte_cursor,
    on_acquired: aws_retry_strategy_on_retry_token_acquired_fn,
    user_data: *mut libc::c_void,
    _timeout_ms: u64,
) -> i32 {
    // The CRT changes the reference count of the strategy concurrently, so no reference may cover
    // it: read single fields through raw pointers.
    // SAFETY: the CRT passes a strategy created by `RetryStrategy::no_retry`, which its caller
    // keeps alive for the duration of this call. Its `allocator` was set from an `Allocator`, so
    // it is non-null, and is never modified.
    let allocator = unsafe { Allocator::from(NonNull::new_unchecked((*retry_strategy).allocator)) };
    // SAFETY: as above. `impl_` points to the boxed `NoRetryStrategy`, whose `event_loop_group` is
    // never modified while the strategy is alive. The borrow covers only that field.
    let event_loop_group = unsafe {
        let strategy = (*retry_strategy).impl_ as *const NoRetryStrategy;
        &(*strategy).event_loop_group
    };
    // SAFETY: as above, and `on_acquired` and `user_data` are the arguments of the CRT caller.
    let token = unsafe { NoRetryToken::new(retry_strategy, &allocator, on_acquired, user_data) };

    let task = Task::init(&allocator, move |status| token.complete(status), "no_retry_token");
    match event_loop_group.schedule_task_now(task) {
        Ok(()) => AWS_OP_SUCCESS,
        // The task was dropped unscheduled, and the token with it.
        // SAFETY: raising an error only sets the thread-local last error.
        Err(error) => unsafe { aws_raise_error(error.raw_error()) },
    }
}

/// SAFETY: only called by the CRT, with a token issued by [NoRetryToken::new].
unsafe extern "C" fn no_retry_schedule_retry(
    _token: *mut aws_retry_token,
    _error_type: aws_retry_error_type,
    _retry_ready: aws_retry_strategy_on_retry_ready_fn,
    _user_data: *mut libc::c_void,
) -> i32 {
    // SAFETY: raising an error only sets the thread-local last error.
    unsafe { aws_raise_error(aws_io_errors::AWS_IO_MAX_RETRIES_EXCEEDED as i32) }
}

/// SAFETY: only called by the CRT, with a token issued by [NoRetryToken::new].
unsafe extern "C" fn no_retry_record_success(_token: *mut aws_retry_token) -> i32 {
    AWS_OP_SUCCESS
}

/// SAFETY: only called by the CRT, when the last reference to the token is released.
unsafe extern "C" fn no_retry_release_token(token: *mut aws_retry_token) {
    // SAFETY: `token` was leaked in `NoRetryToken::new` and no other reference is left.
    let token = unsafe { Box::from_raw(token) };
    // SAFETY: the token held one reference to its strategy.
    unsafe { aws_retry_strategy_release(token.retry_strategy) };
}

impl Drop for RetryStrategy {
    fn drop(&mut self) {
        // Safety: this object owns one reference to the [aws_retry_strategy], which we can give up
        // here.
        unsafe {
            aws_retry_strategy_release(self.inner.as_ptr());
        }
    }
}

/// Options for the standard retry strategy
#[derive(Debug)]
pub struct StandardRetryOptions<'a> {
    /// Options for the exponential backoff schedule this strategy uses
    pub backoff_retry_options: ExponentialBackoffRetryOptions<'a>,
    /// Initial capacity for partitions
    pub initial_bucket_capacity: usize,
}

impl<'a> StandardRetryOptions<'a> {
    /// Create the default standard retry options with the given [EventLoopGroup]
    pub fn default(event_loop_group: &'a mut EventLoopGroup) -> Self {
        let backoff_retry_options = ExponentialBackoffRetryOptions::default(event_loop_group);
        Self {
            backoff_retry_options,
            // Defer to the CRT's default
            initial_bucket_capacity: 0,
        }
    }

    fn to_inner(&self) -> aws_standard_retry_options {
        aws_standard_retry_options {
            backoff_retry_options: self.backoff_retry_options.to_inner(),
            initial_bucket_capacity: self.initial_bucket_capacity,
        }
    }
}

/// Options for exponential backoff retry strategy
#[derive(Debug)]
pub struct ExponentialBackoffRetryOptions<'a> {
    /// Event loop group to use for scheduling tasks
    pub event_loop_group: &'a mut EventLoopGroup,
    /// Max retries to allow
    pub max_retries: usize,
    /// Scaling factor to add for the backoff. Default is 25ms.
    pub backoff_scale_factor: Duration,
    /// Jitter mode to use. Default is [ExponentialBackoffJitterMode::Full].
    pub jitter_mode: ExponentialBackoffJitterMode,
}

impl<'a> ExponentialBackoffRetryOptions<'a> {
    /// Create the default exponential backoff retry options with the given [EventLoopGroup]
    pub fn default(event_loop_group: &'a mut EventLoopGroup) -> Self {
        Self {
            event_loop_group,
            // Defer to the CRT's defaults for everything else
            max_retries: 0,
            backoff_scale_factor: Duration::from_millis(0),
            jitter_mode: ExponentialBackoffJitterMode::Full,
        }
    }

    fn to_inner(&self) -> aws_exponential_backoff_retry_options {
        aws_exponential_backoff_retry_options {
            el_group: self.event_loop_group.inner.as_ptr(),
            max_retries: self.max_retries,
            backoff_scale_factor_ms: self.backoff_scale_factor.as_millis().min(u32::MAX as u128) as u32,
            jitter_mode: self.jitter_mode.into(),
            ..Default::default()
        }
    }
}

/// Jitter mode for exponential backoff. See the [AWS Architecture
/// Blog](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/) for more
/// details.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ExponentialBackoffJitterMode {
    /// Do not add jitter to backoffs
    None,
    /// Add random jitter on the full range of possible backoffs
    Full,
    /// Add random jitter that is decorrelated between retries
    Decorrelated,
}

impl From<ExponentialBackoffJitterMode> for aws_exponential_backoff_jitter_mode {
    fn from(mode: ExponentialBackoffJitterMode) -> Self {
        match mode {
            ExponentialBackoffJitterMode::None => {
                aws_exponential_backoff_jitter_mode::AWS_EXPONENTIAL_BACKOFF_JITTER_NONE
            }
            ExponentialBackoffJitterMode::Full => {
                aws_exponential_backoff_jitter_mode::AWS_EXPONENTIAL_BACKOFF_JITTER_FULL
            }
            ExponentialBackoffJitterMode::Decorrelated => {
                aws_exponential_backoff_jitter_mode::AWS_EXPONENTIAL_BACKOFF_JITTER_DECORRELATED
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use std::sync::mpsc;
    use std::sync::mpsc::Sender;

    use mountpoint_s3_crt_sys::{
        aws_atomic_load_int, aws_atomic_var, aws_last_error, aws_retry_strategy_acquire_retry_token,
        aws_retry_strategy_schedule_retry, aws_retry_token_record_success,
    };

    use super::*;

    const RECV_TIMEOUT: Duration = Duration::from_secs(5);

    /// Pointer sent back from the token-acquired callback.
    struct SendToken(*mut aws_retry_token);

    /// What the token-acquired callback reports: error code, token, and the thread it ran on.
    type Acquired = (i32, SendToken, std::thread::ThreadId);

    // SAFETY: tokens are reference counted with atomics and can be used from any thread.
    unsafe impl Send for SendToken {}

    unsafe extern "C" fn on_acquired(
        _strategy: *mut aws_retry_strategy,
        error_code: i32,
        token: *mut aws_retry_token,
        user_data: *mut libc::c_void,
    ) {
        // SAFETY: `user_data` is the boxed sender leaked by `acquire_token`.
        let tx = unsafe { Box::from_raw(user_data as *mut Sender<Acquired>) };
        tx.send((error_code, SendToken(token), std::thread::current().id()))
            .unwrap();
    }

    unsafe extern "C" fn on_retry_ready(_token: *mut aws_retry_token, _error_code: i32, _user_data: *mut libc::c_void) {
        panic!("a no-retry strategy must never schedule a retry");
    }

    fn ref_count(ptr: *const aws_atomic_var) -> usize {
        // SAFETY: test-only read of a live reference count.
        unsafe { aws_atomic_load_int(ptr) }
    }

    /// Acquire a token and wait for the callback, which must run on another thread.
    fn acquire_token(strategy: &RetryStrategy) -> *mut aws_retry_token {
        let (tx, rx) = mpsc::channel::<Acquired>();
        let user_data = Box::into_raw(Box::new(tx)) as *mut libc::c_void;
        let partition = aws_byte_cursor::default();
        // SAFETY: `strategy.inner` is valid and `on_acquired` reclaims `user_data`.
        let result = unsafe {
            aws_retry_strategy_acquire_retry_token(strategy.inner.as_ptr(), &partition, Some(on_acquired), user_data, 0)
        };
        assert_eq!(result, AWS_OP_SUCCESS);
        let (error_code, token, thread) = rx.recv_timeout(RECV_TIMEOUT).expect("token callback should run");
        assert_eq!(error_code, AWS_OP_SUCCESS);
        assert_ne!(thread, std::thread::current().id(), "callback must be asynchronous");
        assert!(!token.0.is_null());
        token.0
    }

    #[test]
    fn no_retry_issues_tokens_and_rejects_retries() {
        let allocator = Allocator::default();
        let event_loop_group = EventLoopGroup::new_default(&allocator, Some(1), || {}).unwrap();
        let strategy = RetryStrategy::no_retry(&allocator, &event_loop_group);
        // SAFETY: `strategy.inner` is valid while `strategy` is alive.
        let strategy_ref_count = unsafe { &raw const (*strategy.inner.as_ptr()).ref_count };

        let token = acquire_token(&strategy);
        assert_eq!(ref_count(strategy_ref_count), 2, "token must hold a strategy reference");

        for error_type in [
            aws_retry_error_type::AWS_RETRY_ERROR_TYPE_TRANSIENT,
            aws_retry_error_type::AWS_RETRY_ERROR_TYPE_THROTTLING,
            aws_retry_error_type::AWS_RETRY_ERROR_TYPE_SERVER_ERROR,
            aws_retry_error_type::AWS_RETRY_ERROR_TYPE_CLIENT_ERROR,
        ] {
            // SAFETY: `token` is a live token from the strategy.
            let (result, last_error) = unsafe {
                let result =
                    aws_retry_strategy_schedule_retry(token, error_type, Some(on_retry_ready), std::ptr::null_mut());
                (result, aws_last_error())
            };
            assert_ne!(result, AWS_OP_SUCCESS, "retry must be rejected for {error_type:?}");
            assert_eq!(last_error, aws_io_errors::AWS_IO_MAX_RETRIES_EXCEEDED as i32);
        }

        // SAFETY: `token` is a live token; releasing its only reference frees it.
        unsafe {
            assert_eq!(aws_retry_token_record_success(token), AWS_OP_SUCCESS);
            aws_retry_token_release(token);
        }
        assert_eq!(
            ref_count(strategy_ref_count),
            1,
            "releasing the token must release the strategy"
        );

        // A second token works the same way after the first was released.
        let token = acquire_token(&strategy);
        // SAFETY: as above.
        unsafe { aws_retry_token_release(token) };
    }

    #[test]
    fn no_retry_strategy_outlives_its_handle_while_tokens_exist() {
        let allocator = Allocator::default();
        let event_loop_group = EventLoopGroup::new_default(&allocator, Some(1), || {}).unwrap();
        let strategy = RetryStrategy::no_retry(&allocator, &event_loop_group);
        let token = acquire_token(&strategy);
        drop(strategy);

        // SAFETY: the token keeps the strategy alive, so it can still be used and then released.
        unsafe {
            let result = aws_retry_strategy_schedule_retry(
                token,
                aws_retry_error_type::AWS_RETRY_ERROR_TYPE_SERVER_ERROR,
                Some(on_retry_ready),
                std::ptr::null_mut(),
            );
            assert_ne!(result, AWS_OP_SUCCESS);
            aws_retry_token_release(token);
        }
    }
}
