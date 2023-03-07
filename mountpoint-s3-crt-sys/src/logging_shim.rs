//! A small shim that the `aws-crt-s3` crate uses to connect to a logging implementation. The CRT's
//! logging implementation uses varargs, but Rust hasn't stablized those, so we need a small C
//! trampoline to translate varargs to Rust strings.

use std::sync::atomic::{AtomicBool, Ordering};

use crate::{aws_log_level, aws_log_subject_t, aws_logger, aws_string, AWS_OP_SUCCESS};

pub type LogFn = unsafe extern "C" fn(
    logger: *mut aws_logger,
    log_level: aws_log_level::Type,
    subject: aws_log_subject_t,
    body: *mut aws_string,
    body_length: usize,
) -> libc::c_int;

static LOGGER_LOG_FN_INIT: AtomicBool = AtomicBool::new(false);
static mut LOGGER_LOG_FN: Option<LogFn> = None;

pub fn try_init(f: LogFn) -> Result<(), LoggerInitError> {
    if LOGGER_LOG_FN_INIT
        .compare_exchange(false, true, Ordering::SeqCst, Ordering::SeqCst)
        .is_ok()
    {
        // Safety: mutation is protected by the atomic
        unsafe {
            LOGGER_LOG_FN = Some(f);
        }
        Ok(())
    } else {
        Err(LoggerInitError::AlreadyInitialized)
    }
}

#[derive(Debug, Clone, Copy)]
pub enum LoggerInitError {
    AlreadyInitialized,
}

#[link(name = "logging_shim", kind = "static")]
extern "C" {
    /// This is the function invoked by the CRT's logging macros to emit a log entry. It takes a
    /// `printf`-style format string and variadic arguments. Unfortunately, variadic functions
    /// aren't stable Rust. But we're in luck: we don't actually need the arguments, as we're just
    /// going to end up passing them to `vsnprintf` anyway. So rather than figure out the ABI
    /// implications of passing a `va_list` around the place, we use a little C trampoline (this
    /// function) that receive the arguments, `vsprintf`s them into an `aws_string`, and then calls
    /// the Rust function `logger_vtable_log_fn` with that body.
    pub fn aws_crt_s3_rs_logging_shim_log_fn_trampoline(
        logger: *mut aws_logger,
        log_level: aws_log_level::Type,
        subject: aws_log_subject_t,
        format: *const libc::c_char,
        ...
    ) -> libc::c_int;
}

#[no_mangle]
unsafe extern "C" fn aws_crt_s3_rs_logging_shim_log_fn(
    logger: *mut aws_logger,
    log_level: aws_log_level::Type,
    subject: aws_log_subject_t,
    body: *mut aws_string,
    body_length: usize,
) -> libc::c_int {
    if let Some(f) = LOGGER_LOG_FN {
        f(logger, log_level, subject, body, body_length)
    } else {
        AWS_OP_SUCCESS
    }
}
