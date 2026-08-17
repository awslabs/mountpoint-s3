//! An adapter between the CRT's [Logger] and the Rust `log` facade

use std::fmt::Write as _;

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
        let mut target = LogTarget::new();
        log::log!(target: { let _ = write!(target, "{}::{}", AWSCRT_LOG_TARGET, subject.name()); target.as_str() }, log_level.into(), "{message}");
    }
    fn get_log_level(&self, _subject: Subject) -> Level {
        log::max_level().to_level().map(|l| l.into()).unwrap_or(Level::None)
    }
}

/// Buffer for building the log target `{AWSCRT_LOG_TARGET}::{subject}`. Holds the common case
/// inline on the stack; spills to the heap if the target exceeds [`INLINE_CAPACITY`].
struct LogTarget {
    buffer: smallvec::SmallVec<[u8; INLINE_CAPACITY]>,
}

const INLINE_CAPACITY: usize = 64;

impl LogTarget {
    fn new() -> Self {
        Self {
            buffer: Default::default(),
        }
    }

    fn as_str(&self) -> &str {
        // SAFETY: `self.buffer` is only extended with valid UTF-8 slices.
        unsafe { std::str::from_utf8_unchecked(&self.buffer) }
    }
}

impl std::fmt::Write for LogTarget {
    fn write_str(&mut self, s: &str) -> std::fmt::Result {
        self.buffer.extend_from_slice(s.as_bytes());
        Ok(())
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn log_target_boundary() {
        let mut exact = LogTarget::new();
        write!(exact, "{}", "a".repeat(INLINE_CAPACITY)).unwrap();
        assert!(!exact.buffer.spilled());
        assert_eq!(exact.as_str(), "a".repeat(INLINE_CAPACITY));

        let mut over = LogTarget::new();
        write!(over, "{}", "a".repeat(INLINE_CAPACITY + 1)).unwrap();
        assert!(over.buffer.spilled());
        assert_eq!(over.as_str(), "a".repeat(INLINE_CAPACITY + 1));
    }

    #[test]
    fn log_target_spills_across_multiple_writes() {
        let mut target = LogTarget::new();
        let head = "h".repeat(INLINE_CAPACITY - 1);
        write!(target, "{head}").unwrap();
        assert!(!target.buffer.spilled());
        write!(target, "tail").unwrap();
        assert!(target.buffer.spilled());
        assert_eq!(target.as_str(), format!("{head}tail"));
    }
}
