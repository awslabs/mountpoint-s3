//! An adapter between the CRT's [Logger] and the Rust `log` facade

use std::fmt::Write as _;

use smallstr::SmallString;

use crate::common::allocator::Allocator;
use crate::common::logging::{Level, Logger, LoggerImpl, LoggerInitError, Subject};

/// The log target name for metrics emitted by the CRT
pub const AWSCRT_LOG_TARGET: &str = "awscrt";

/// This is an implementation of `LoggerImpl` that can be used to pipe CRT log messages into the
/// Rust `log` facade. To install it, call `RustLogAdapter::try_init()`, and then CRT log messages
/// will be sent to the `log` facade. These messages will follow that facade's logic for when to
/// emit log messages. All CRT log messages will have a target that starts with the value of
/// [AWSCRT_LOG_TARGET].
#[derive(Debug)]
#[non_exhaustive]
pub struct RustLogAdapter;

impl RustLogAdapter {
    /// Try to install the `log` adapter as the current CRT logger. Only one CRT logger can be
    /// installed for the lifetime of the program, so this returns Err if a logger has already been
    /// installed.
    pub fn try_init() -> Result<(), LoggerInitError> {
        let logger = Logger::new(&Allocator::default(), Self);
        logger.try_init()
    }
}

impl LoggerImpl for RustLogAdapter {
    fn log(&self, log_level: Level, subject: Subject, message: &str) {
        let mut target = SmallString::<[u8; 64]>::new();
        let _ = write!(target, "{}::{}", AWSCRT_LOG_TARGET, subject.name());
        log::log!(target: target.as_str(), log_level.into(), "{}", message);
    }
    fn get_log_level(&self, _subject: Subject) -> Level {
        log::max_level().to_level().map(|l| l.into()).unwrap_or(Level::None)
    }
}

impl From<Level> for log::Level {
    fn from(level: Level) -> Self {
        match level {
            Level::None | Level::Fatal | Level::Error => log::Level::Error,
            Level::Warn => log::Level::Warn,
            Level::Info => log::Level::Info,
            Level::Debug => log::Level::Debug,
            Level::Trace => log::Level::Trace,
        }
    }
}

impl From<log::Level> for Level {
    fn from(level: log::Level) -> Self {
        match level {
            // Weird special case: the CRT emits some scary looking stuff at `ERROR` level that isn't
            // actually an error, because it has a separate `FATAL` level for that. `log` doesn't have
            // `FATAL`. By default most log subscribers will print `ERROR`s, and so would end up
            // printing those not-really-errors. So let's map `log`'s `ERROR` onto `FATAL` so that we
            // don't print threatening-looking messages by default.
            log::Level::Error => Level::Fatal,
            log::Level::Warn => Level::Warn,
            log::Level::Info => Level::Info,
            log::Level::Debug => Level::Debug,
            log::Level::Trace => Level::Trace,
        }
    }
}
