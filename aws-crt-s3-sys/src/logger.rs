use std::fmt::Write as _;
use std::mem::MaybeUninit;
use std::sync::atomic::{AtomicU32, Ordering};
use std::sync::Once;
use std::{slice, str};

use smallstr::SmallString;

use crate::generated::{
    aws_allocator, aws_log_level, aws_log_subject_name, aws_log_subject_t, aws_logger, aws_logger_set,
    aws_logger_vtable, aws_string, AWS_OP_SUCCESS,
};

/// Safety: initialized by `CRT_INIT`. `MaybeUninit::zeroed` isn't const stable :(
static mut LOGGER: MaybeUninit<AwsLoggerAdapter> = MaybeUninit::uninit();

static INIT_LOGGER_ADAPTER: Once = Once::new();

/// Install a logger for the CRT that just forwards log messages as events to the Rust `log`
/// ecosystem. The adapter makes an effort to map between `log` log levels and CRT log levels,
/// but it's not perfect, so this might be spammier than intended.
pub fn init_logger_adapter(allocator: *mut aws_allocator) {
    INIT_LOGGER_ADAPTER.call_once(|| {
        let logger = AwsLoggerAdapter::new(allocator).expect("failed to initialize logger");
        // Safety: the Once cell ensures we can't race any readers of this `LOGGER`.
        unsafe {
            LOGGER.write(logger);
            aws_logger_set(&*LOGGER.assume_init_ref().logger as *const _ as *mut _);
        }
    })
}

#[link(name = "log_adapter", kind = "static")]
extern "C" {
    /// This is the function invoked by the CRT's logging macros to emit a log entry. It takes a
    /// `printf`-style format string and variadic arguments. Unfortunately, variadic functions
    /// aren't stable Rust. But we're in luck: we don't actually need the arguments, as we're just
    /// going to end up passing them to `vsnprintf` anyway. So rather than figure out the ABI
    /// implications of passing a `va_list` around the place, we use a little C trampoline (this
    /// function) that receive the arguments, `vsprintf`s them into an `aws_string`, and then calls
    /// the Rust function `aws_logger_adapter_log_fn` with that body.
    fn aws_logger_adapter_log_fn_trampoline(
        logger: *mut aws_logger,
        log_level: aws_log_level::Type,
        subject: aws_log_subject_t,
        format: *const libc::c_char,
        ...
    ) -> libc::c_int;
}

/// This is the target of the `aws_logger_adapter_log_fn_trampoline` trampoline function above. It
/// gets called with the `aws_string` version of the message body rather than variadic arguments.
#[no_mangle]
pub extern "C" fn aws_logger_adapter_log_fn(
    _logger: *mut aws_logger,
    log_level: aws_log_level::Type,
    subject: aws_log_subject_t,
    body: *mut aws_string,
    body_length: usize,
) -> libc::c_int {
    let message = unsafe {
        let body = body.as_ref().expect("body cannot be null");
        let bytes = slice::from_raw_parts(&body.bytes as *const _, body_length);
        str::from_utf8_unchecked(bytes)
    };

    let mut target: SmallString<[u8; 32]> = SmallString::from_str("awscrt");
    unsafe {
        let subject_name = aws_log_subject_name(subject);
        if !subject_name.is_null() {
            let subject_name_len = libc::strlen(subject_name);
            let bytes = slice::from_raw_parts(subject_name as *const u8, subject_name_len);
            let subject = str::from_utf8_unchecked(bytes);
            // Don't care about failures here
            let _ = write!(target, "::{}", subject);
        }
    }

    let log_level = from_aws_log_level(log_level);

    log::log!(target: target.as_str(), log_level, "{}", message);

    AWS_OP_SUCCESS
}

extern "C" fn aws_logger_adapter_get_log_level_fn(
    logger: *mut aws_logger,
    _subject: aws_log_subject_t,
) -> aws_log_level::Type {
    let logger = unsafe { logger.as_ref().unwrap() };
    let impl_ = unsafe { (logger.p_impl as *const AwsLoggerAdapterImpl).as_ref().unwrap() };
    impl_.log_level.load(Ordering::Relaxed)
}

extern "C" fn aws_logger_adapter_set_log_level_fn(
    logger: *mut aws_logger,
    log_level: aws_log_level::Type,
) -> libc::c_int {
    let logger = unsafe { logger.as_ref().unwrap() };
    let impl_ = unsafe { (logger.p_impl as *const AwsLoggerAdapterImpl).as_ref().unwrap() };
    impl_.log_level.store(log_level, Ordering::Relaxed);
    AWS_OP_SUCCESS
}

/// No cleanup to do; we'll drop the static `AwsLoggerAdapter` when we exit
extern "C" fn aws_logger_adapter_clean_up_fn(_logger: *mut aws_logger) {}

static AWS_LOGGER_ADAPTER_VTABLE: aws_logger_vtable = aws_logger_vtable {
    log: Some(aws_logger_adapter_log_fn_trampoline),
    get_log_level: Some(aws_logger_adapter_get_log_level_fn),
    clean_up: Some(aws_logger_adapter_clean_up_fn),
    set_log_level: Some(aws_logger_adapter_set_log_level_fn),
};

struct AwsLoggerAdapter {
    logger: Box<aws_logger>,
    // Box so that we can store it in the `aws_logger.p_impl` pointer
    _impl: Box<AwsLoggerAdapterImpl>,
}

struct AwsLoggerAdapterImpl {
    log_level: AtomicU32,
}

impl AwsLoggerAdapter {
    fn new(allocator: *mut aws_allocator) -> Result<Self, String> {
        let initial_level = log::max_level().to_level().map(to_aws_log_level).unwrap_or(0);

        let _impl = Box::new(AwsLoggerAdapterImpl {
            log_level: AtomicU32::new(initial_level),
        });

        let logger = Box::new(aws_logger {
            allocator,
            vtable: &AWS_LOGGER_ADAPTER_VTABLE as *const _ as *mut _,
            p_impl: &*_impl as *const _ as *mut _,
        });

        Ok(AwsLoggerAdapter { logger, _impl })
    }
}

fn to_aws_log_level(level: log::Level) -> aws_log_level::Type {
    match level {
        // Weird special case: the CRT emits some scary looking stuff at `ERROR` level that isn't
        // actually an error, because it has a separate `FATAL` level for that. `log` doesn't have
        // `FATAL`. By default most log subscribers will print `ERROR`s, and so would end up
        // printing those not-really-errors. So let's map `log`'s `ERROR` onto `FATAL` so that we
        // don't print threatening-looking messages by default.
        log::Level::Error => aws_log_level::AWS_LL_FATAL,
        log::Level::Warn => aws_log_level::AWS_LL_WARN,
        log::Level::Info => aws_log_level::AWS_LL_INFO,
        log::Level::Debug => aws_log_level::AWS_LL_DEBUG,
        log::Level::Trace => aws_log_level::AWS_LL_TRACE,
    }
}

fn from_aws_log_level(level: aws_log_level::Type) -> log::Level {
    match level {
        aws_log_level::AWS_LL_NONE | aws_log_level::AWS_LL_FATAL | aws_log_level::AWS_LL_ERROR => log::Level::Error,
        aws_log_level::AWS_LL_WARN => log::Level::Warn,
        aws_log_level::AWS_LL_INFO => log::Level::Info,
        aws_log_level::AWS_LL_DEBUG => log::Level::Debug,
        aws_log_level::AWS_LL_TRACE | aws_log_level::AWS_LL_COUNT => log::Level::Trace,
        // If we don't recognize the level, just make it error
        _ => log::Level::Error,
    }
}
