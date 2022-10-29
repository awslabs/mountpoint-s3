//! Strategies for scheduling retries of failed requests

use std::ptr::NonNull;
use std::time::Duration;

use aws_crt_s3_sys::{
    aws_exponential_backoff_jitter_mode, aws_exponential_backoff_retry_options, aws_retry_strategy,
    aws_retry_strategy_new_standard, aws_retry_strategy_release, aws_standard_retry_options,
};

use crate::common::allocator::Allocator;
use crate::common::error::Error;
use crate::io::event_loop::EventLoopGroup;
use crate::CrtError as _;

/// A strategy for scheduling retries of failed requests
#[derive(Debug)]
pub struct RetryStrategy {
    pub(crate) inner: NonNull<aws_retry_strategy>,
}

impl RetryStrategy {
    /// Create a new standard retry strategy that uses exponential backoff and jittering to schedule
    /// retries, and separates failing endpoints into partitions.
    pub fn standard(allocator: &mut Allocator, options: &StandardRetryOptions<'_>) -> Result<Self, Error> {
        let options = options.to_inner();

        // Safety: `options.backoff_retry_options.event_loop_group` is a reference counted object,
        // so will survive even when the Rust reference is dropped
        let inner = unsafe { aws_retry_strategy_new_standard(allocator.inner.as_ptr(), &options).ok_or_last_error()? };

        Ok(Self { inner })
    }
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
