//! Logging infrastructure

use std::fmt::Debug;
use std::pin::Pin;
use std::sync::atomic::{AtomicBool, Ordering};

use aws_crt_s3_sys::{
    aws_log_level, aws_log_subject_name, aws_log_subject_t, aws_logger, aws_logger_set, aws_logger_vtable, aws_string,
    logging_shim, AWS_OP_ERR, AWS_OP_SUCCESS,
};

use crate::common::allocator::Allocator;
use crate::common::common_library_init;

static LOGGER_INIT: AtomicBool = AtomicBool::new(false);

/// A logger that supports log levels and subjects
pub struct Logger {
    inner: Pin<Box<aws_logger>>,
    _vtable: Pin<Box<aws_logger_vtable>>,
    // Double indirection allows us to pass `dyn LoggerImpl` across the FFI boundary.
    _impl: Pin<Box<Box<dyn LoggerImpl>>>,
}

impl Debug for Logger {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Logger").field("inner", &self.inner).finish()
    }
}

impl Logger {
    /// Create a new Logger that will dispatch log messages to the given implementation
    pub fn new(allocator: &mut Allocator, impl_: impl LoggerImpl + 'static) -> Self {
        common_library_init(allocator);

        let mut impl_: Pin<Box<Box<dyn LoggerImpl>>> = Box::pin(Box::new(impl_));
        let mut vtable = Box::pin(aws_logger_vtable {
            log: Some(logging_shim::aws_crt_s3_rs_logging_shim_log_fn_trampoline),
            get_log_level: Some(logger_vtable_get_log_level_fn),
            clean_up: Some(logger_vtable_clean_up_fn),
            set_log_level: Some(logger_vtable_set_log_level_fn),
        });
        let logger = Box::pin(aws_logger {
            vtable: &mut *vtable.as_mut() as *mut _,
            // SAFETY: `allocator.inner` is a valid `aws_allocator`.
            allocator: unsafe { allocator.inner.as_mut() },
            p_impl: &mut *impl_.as_mut() as *mut Box<dyn LoggerImpl> as *mut _,
        });

        Self {
            inner: logger,
            _vtable: vtable,
            _impl: impl_,
        }
    }

    /// Try to install this Logger as the global logger for the CRT. Only one logger can ever be
    /// installed for the lifetime of the program, so returns Err if a logger has already been
    /// installed.
    pub fn try_init(mut self) -> Result<(), LoggerInitError> {
        if LOGGER_INIT
            .compare_exchange(false, true, Ordering::SeqCst, Ordering::SeqCst)
            .is_ok()
        {
            logging_shim::try_init(logger_vtable_log_fn)
                .expect("logging shim should not be initialized if logger isn't");

            let ptr = &mut *self.inner.as_mut() as *mut _;
            // SAFETY: The global logger lives for the lifetime of the program (the CRT requires
            // that `aws_logger_set` is only ever called once), so we can leak it rather than
            // holding onto it in some global static. `ptr` is guaranteed to be a valid
            // `aws_logger`.
            unsafe {
                std::mem::forget(self);
                aws_logger_set(ptr)
            };
            Ok(())
        } else {
            Err(LoggerInitError::AlreadyInitialized)
        }
    }
}

/// Errors returned by methods that install [`Logger`]s
#[derive(Debug)]
pub enum LoggerInitError {
    /// A logger has already been initialized. Only one logger can be initialized for the lifetime
    /// of the program.
    AlreadyInitialized,
}

/// Methods that a [`Logger`] can implement to filter and receive log messages
pub trait LoggerImpl {
    /// Log a new message at the given level for a subject
    fn log(&self, _log_level: Level, _subject: Subject, _message: &str) {}
    /// Get the maximum log level that this logger is currently interested in. This method allows
    /// the CRT to avoid the cost of formatting log messages that won't be emitted.
    fn get_log_level(&self, _subject: Subject) -> Level {
        Level::None
    }
    /// Set the maximum log level that this logger should be interested in.
    fn set_log_level(&self, _level: Level) -> Result<(), Box<dyn std::error::Error>> {
        Ok(())
    }
    /// Clean up this logger. Called when the logger is being uninstalled. It will not receive any
    /// further calls after this one.
    fn clean_up(&self) {}
}

#[allow(clippy::borrowed_box)]
unsafe fn logger_impl<'a>(logger: *mut aws_logger) -> &'a Box<dyn LoggerImpl> {
    let logger = logger.as_ref().unwrap();
    (logger.p_impl as *mut Box<dyn LoggerImpl>).as_ref().unwrap()
}

#[no_mangle]
unsafe extern "C" fn logger_vtable_log_fn(
    logger: *mut aws_logger,
    log_level: aws_log_level::Type,
    subject: aws_log_subject_t,
    body: *mut aws_string,
    body_length: usize,
) -> libc::c_int {
    let impl_ = logger_impl(logger);
    let message = {
        let body = body.as_ref().expect("body cannot be null");
        let bytes = std::slice::from_raw_parts(&body.bytes as *const u8, body_length);
        // We assume log messages are valid ASCII
        std::str::from_utf8(bytes).expect("log messages should be valid UTF-8")
    };
    impl_.log(log_level.into(), subject.into(), message);
    AWS_OP_SUCCESS
}

unsafe extern "C" fn logger_vtable_get_log_level_fn(
    logger: *mut aws_logger,
    subject: aws_log_subject_t,
) -> aws_log_level::Type {
    let impl_ = logger_impl(logger);
    impl_.get_log_level(subject.into()).into()
}

unsafe extern "C" fn logger_vtable_set_log_level_fn(
    logger: *mut aws_logger,
    level: aws_log_level::Type,
) -> libc::c_int {
    let impl_ = logger_impl(logger);
    impl_
        .set_log_level(level.into())
        .map(|_| AWS_OP_SUCCESS)
        .unwrap_or(AWS_OP_ERR)
}

unsafe extern "C" fn logger_vtable_clean_up_fn(logger: *mut aws_logger) {
    let impl_ = logger_impl(logger);
    impl_.clean_up();
}

/// The log level associated with a message
#[derive(Debug, Clone, Copy, PartialEq, Eq, PartialOrd, Ord)]
pub enum Level {
    /// No log level set
    None,
    /// The "trace" level for very verbose logging
    Trace,
    /// The "debug" level for lower priority information
    Debug,
    /// The "info" level for useful information
    Info,
    /// The "warn" level for hazardous situations
    Warn,
    /// The "error" level for serious errors
    Error,
    /// The "fatal" level for errors that cannot be recovered from
    Fatal,
}

impl From<aws_log_level::Type> for Level {
    fn from(level: aws_log_level::Type) -> Self {
        match level {
            aws_log_level::AWS_LL_NONE => Level::None,
            aws_log_level::AWS_LL_TRACE => Level::Trace,
            aws_log_level::AWS_LL_DEBUG => Level::Debug,
            aws_log_level::AWS_LL_INFO => Level::Info,
            aws_log_level::AWS_LL_WARN => Level::Warn,
            aws_log_level::AWS_LL_ERROR => Level::Error,
            aws_log_level::AWS_LL_FATAL => Level::Fatal,
            _ => unreachable!("unknown aws_log_level"),
        }
    }
}

impl From<Level> for aws_log_level::Type {
    fn from(level: Level) -> Self {
        match level {
            Level::None => aws_log_level::AWS_LL_NONE,
            Level::Trace => aws_log_level::AWS_LL_TRACE,
            Level::Debug => aws_log_level::AWS_LL_DEBUG,
            Level::Info => aws_log_level::AWS_LL_INFO,
            Level::Warn => aws_log_level::AWS_LL_WARN,
            Level::Error => aws_log_level::AWS_LL_ERROR,
            Level::Fatal => aws_log_level::AWS_LL_FATAL,
        }
    }
}

/// The subject of a log message. Subjects are the component of the CRT that a message is generated
/// by.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct Subject(u32);

impl Subject {
    /// Generate a string representation of the subject
    pub fn name(&self) -> &str {
        // Safety: `aws_log_subject_name` always returns a valid C string. Technically it's possible
        // for someone to call `aws_unregister_log_subject_info_list` to unregister a subject name
        // and then free the pointer, but the CRT only does that at tear down time, and we don't
        // otherwise expose that function.
        unsafe {
            let s = aws_log_subject_name(self.0);
            let len = libc::strnlen(s, 4096);
            let bytes = std::slice::from_raw_parts(s as *const u8, len);
            // Valid ASCII is valid UTF-8
            std::str::from_utf8_unchecked(bytes)
        }
    }
}

impl From<aws_log_subject_t> for Subject {
    fn from(subject: aws_log_subject_t) -> Self {
        Self(subject)
    }
}
