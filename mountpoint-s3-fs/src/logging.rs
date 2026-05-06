use std::backtrace::Backtrace;
use std::fs::{DirBuilder, OpenOptions};
use std::os::unix::fs::DirBuilderExt;
use std::os::unix::prelude::OpenOptionsExt;
use std::panic::{self, PanicHookInfo};
use std::path::{Path, PathBuf};
use std::thread;

use anyhow::Context;
use rand::RngExt;
use signal_hook::consts::SIGUSR2;
use signal_hook::iterator::{Handle as SignalsHandle, Signals};
use time::OffsetDateTime;
use time::format_description::FormatItem;
use time::macros;
use tracing::Span;
use tracing_log::log::warn;
use tracing_subscriber::filter::{EnvFilter, LevelFilter};
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;

use mountpoint_s3_client::config::{AWSCRT_LOG_TARGET, RustLogAdapter};

use crate::metrics::metrics_tracing_span_layer;

#[cfg(test)]
mod testing;

mod envfilter;
use envfilter::{ToggleableHandle, toggleable};

#[cfg(feature = "event_log")]
pub mod error_logger;
mod syslog;
use self::syslog::SyslogLayer;

/// Configuration for Mountpoint logging.
///
/// This configuration struct is safe to use across forks.
#[derive(Debug)]
pub struct LoggingConfig {
    /// File to write logs into. If unspecified, logs will be routed to syslog.
    pub log_file: Option<PathBuf>,
    /// Whether to duplicate logs to stdout in addition to syslog or the log directory.
    pub log_to_stdout: bool,
    /// The default filter directive (in the sense of [tracing_subscriber::filter::EnvFilter]) to
    /// use for logs. Will be overridden by the `MOUNTPOINT_LOG` environment variable if set.
    pub default_filter: String,
}

#[derive(Default)]
/// A handle for logging that cleans up all allocated resources on drop.
pub struct LoggingHandle {
    _toggle_signal_handle: Option<ToggleSignalHandle>,
}

/// Set up all our logging infrastructure.
///
/// This method:
/// - initializes the `tracing` subscriber for capturing log output
/// - sets up the logging adapters for the CRT and for metrics
/// - installs a panic hook to capture panics and log them with `tracing`
/// - sets up a signal listener and toggles the logging verbosity each time it receives a `USR2` signal
pub fn init_logging(config: LoggingConfig) -> anyhow::Result<LoggingHandle> {
    let handle = init_tracing_subscriber(config)?;
    install_panic_hook();
    Ok(handle)
}

/// Record the object name in the current [Span].
pub fn record_name(name: &str) {
    Span::current().record("name", name);
}

/// For a given log directory, prepare a file name for this Mountpoint.
///
/// This may include a randomly generated component and return different results between invocations.
pub fn prepare_log_file_name(log_directory: &Path) -> PathBuf {
    let timestamp = log_file_name_time_suffix();

    let random_suffix: String = rand::rng()
        .sample_iter(&rand::distr::Alphanumeric)
        .take(6)
        .map(char::from)
        .collect();
    let file_name = format!("mountpoint-s3-{timestamp}.{random_suffix}.log");

    log_directory.join(file_name)
}

fn log_file_name_time_suffix() -> String {
    const TIMESTAMP_FORMAT: &[FormatItem<'static>] =
        macros::format_description!("[year]-[month]-[day]T[hour]-[minute]-[second]Z");
    OffsetDateTime::now_utc()
        .format(TIMESTAMP_FORMAT)
        .expect("couldn't format timestamp for log file name")
}

fn tracing_panic_hook(panic_info: &PanicHookInfo) {
    let location = panic_info
        .location()
        .map(|l| format!("{l}"))
        .unwrap_or_else(|| String::from("<unknown>"));

    let payload = panic_info.payload();
    let payload = if let Some(s) = payload.downcast_ref::<&'static str>() {
        *s
    } else if let Some(s) = payload.downcast_ref::<String>() {
        s.as_str()
    } else {
        "<unknown payload>"
    };

    let thd = thread::current();

    let backtrace = Backtrace::force_capture();

    tracing::error!("panic on {thd:?} at {location}: {payload}");
    tracing::error!("backtrace:\n{backtrace}");
}

fn install_panic_hook() {
    let old_hook = panic::take_hook();
    panic::set_hook(Box::new(move |panic_info| {
        tracing_panic_hook(panic_info);
        old_hook(panic_info);
    }))
}

fn init_tracing_subscriber(config: LoggingConfig) -> anyhow::Result<LoggingHandle> {
    // Don't create the files or subscribers if we'll never emit any logs
    let default_filter = make_default_filter(config.default_filter.clone())();
    if default_filter.max_level_hint() == Some(LevelFilter::OFF) {
        return Ok(LoggingHandle::default());
    }

    RustLogAdapter::try_init().context("failed to initialize CRT logger")?;

    let file_layer = if let Some(log_file_path) = &config.log_file {
        // log directories and files created by Mountpoint should not be writable by other users
        let mut dir_builder = DirBuilder::new();
        dir_builder.recursive(true).mode(0o750);
        let mut file_options = OpenOptions::new();
        file_options.mode(0o640).append(true).create(true);

        if let Some(parent_dir) = log_file_path.parent() {
            dir_builder.create(parent_dir).context("failed to create log folder")?;
        }
        let file = file_options.open(log_file_path).context("failed to create log file")?;

        let file_layer = tracing_subscriber::fmt::layer()
            .with_ansi(false)
            .with_thread_ids(true)
            .with_writer(file);
        Some(file_layer)
    } else {
        None
    };

    let syslog_layer: Option<SyslogLayer> = if config.log_file.is_none() {
        // Don't fail if syslog isn't available on the system, since it's a default
        SyslogLayer::new().ok()
    } else {
        None
    };

    let console_layer = if config.log_to_stdout {
        Some(
            tracing_subscriber::fmt::layer()
                .with_ansi(supports_color::on(supports_color::Stream::Stdout).is_some())
                .with_thread_ids(true),
        )
    } else {
        None
    };

    let (filter, filter_handle) = toggleable(vec![
        // Default logging verbosity (i.e., the one configured using `--debug`, `--debug-crt`, or `MOUNTPOINT_LOG` environment variable)
        make_default_filter(config.default_filter),
        // Debug logging for all except CRT (i.e., `debug,awscrt=off`)
        make_filter(LevelFilter::DEBUG, LevelFilter::OFF),
        // Debug logging for all (i.e., `debug,awscrt=debug`)
        make_filter(LevelFilter::DEBUG, LevelFilter::DEBUG),
        // Trace logging for all except CRT (i.e., `trace,awscrt=off`)
        make_filter(LevelFilter::TRACE, LevelFilter::OFF),
        // Trace logging for all (i.e., `trace,awscrt=trace`)
        make_filter(LevelFilter::TRACE, LevelFilter::TRACE),
    ]);

    let toggle_signal_handle = toggle_filter_on_signals(vec![SIGUSR2], filter_handle)?;

    tracing_subscriber::registry()
        .with(filter)
        .with(syslog_layer)
        .with(file_layer)
        .with(console_layer)
        .with(metrics_tracing_span_layer())
        .init();

    Ok(LoggingHandle {
        _toggle_signal_handle: Some(toggle_signal_handle),
    })
}

/// Create a default logging filter from the `MOUNTPOINT_LOG` environment variable or the default config
/// if that variable is unset.
fn make_default_filter(default_directives: String) -> Box<dyn FnMut() -> EnvFilter + Send> {
    Box::new(move || {
        EnvFilter::try_from_env("MOUNTPOINT_LOG").unwrap_or_else(|_| EnvFilter::new(default_directives.clone()))
    })
}

/// Create a logging filter using provided global and CRT [level](LevelFilter)s.
fn make_filter(level: LevelFilter, crt_level: LevelFilter) -> Box<dyn FnMut() -> EnvFilter + Send> {
    Box::new(move || EnvFilter::new(format!("{level},{AWSCRT_LOG_TARGET}={crt_level}")))
}

/// Creates a new thread to listen specified Unix signals, and toggles the log filter each time it receives a signal.
/// Returns a [handle](ToggleSignalHandle), and cleans up signal listener and the created thread once the handle is dropped.
fn toggle_filter_on_signals<S: 'static>(
    signals: Vec<Signal>,
    mut toggle_handle: ToggleableHandle<S>,
) -> anyhow::Result<ToggleSignalHandle> {
    let mut signals = Signals::new(signals)?;
    let signals_handle = signals.handle();

    let thread_handle = thread::spawn(move || {
        for _ in &mut signals.forever() {
            match toggle_handle.next() {
                Ok(desc) => {
                    warn!("Changed log verbosity to {desc}");
                }
                Err(err) => {
                    warn!("Failed to change log verbosity: {err}");
                }
            }
        }
    });

    Ok(ToggleSignalHandle {
        signals_handle,
        thread_handle: Some(thread_handle),
    })
}

/// An Unix signal.
type Signal = libc::c_int;

/// A handle returned by [toggle_filter_on_signals] which cleans up all allocated resources on [drop](ToggleSignalHandle::drop).
struct ToggleSignalHandle {
    signals_handle: SignalsHandle,
    thread_handle: Option<thread::JoinHandle<()>>,
}

impl Drop for ToggleSignalHandle {
    fn drop(&mut self) {
        if !self.signals_handle.is_closed() {
            self.signals_handle.close();
        }
        if let Some(handle) = self.thread_handle.take() {
            _ = handle.join();
        }
    }
}
