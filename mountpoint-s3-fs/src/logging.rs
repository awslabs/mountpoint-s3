use std::backtrace::Backtrace;
use std::fs::{DirBuilder, OpenOptions};
use std::os::unix::fs::DirBuilderExt;
use std::os::unix::prelude::OpenOptionsExt;
use std::panic::{self, PanicHookInfo};
use std::path::{Path, PathBuf};
use std::sync::atomic::{AtomicU8, Ordering};
use std::thread::{self, JoinHandle};

use crate::metrics::metrics_tracing_span_layer;
use anyhow::Context;
use mountpoint_s3_client::config::{RustLogAdapter, AWSCRT_LOG_TARGET};
use rand::Rng;
use signal_hook::consts::SIGUSR2;
use signal_hook::iterator::{Handle as SignalsHandle, Signals};
use time::format_description::FormatItem;
use time::macros;
use time::OffsetDateTime;
use tracing::{warn, Span, Subscriber};
use tracing_subscriber::filter::{EnvFilter, Filtered, LevelFilter};
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::{reload, Layer, Registry};

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
pub struct LoggingHandle {
    _reloadable_filter_handle: Option<ReloadableFilterHandle>,
}

/// Set up all our logging infrastructure.
///
/// This method:
/// - initializes the `tracing` subscriber for capturing log output
/// - sets up the logging adapters for the CRT and for metrics
/// - installs a panic hook to capture panics and log them with `tracing`
pub fn init_logging(config: LoggingConfig) -> anyhow::Result<LoggingHandle> {
    let handle = init_tracing_subscriber(config)?;
    install_panic_hook();
    Ok(handle)
}

/// For a given log directory, prepare a file name for this Mountpoint.
///
/// This may include a randomly generated component and return different results between invocations.
pub fn prepare_log_file_name(log_directory: &Path) -> PathBuf {
    let timestamp = {
        const TIMESTAMP_FORMAT: &[FormatItem<'static>] =
            macros::format_description!("[year]-[month]-[day]T[hour]-[minute]-[second]Z");
        OffsetDateTime::now_utc()
            .format(TIMESTAMP_FORMAT)
            .expect("couldn't format timestamp for log file name")
    };

    let random_suffix: String = rand::thread_rng()
        .sample_iter(&rand::distributions::Alphanumeric)
        .take(6)
        .map(char::from)
        .collect();
    let file_name = format!("mountpoint-s3-{timestamp}.{random_suffix}.log");

    log_directory.join(file_name)
}

fn tracing_panic_hook(panic_info: &PanicHookInfo) {
    let location = panic_info
        .location()
        .map(|l| format!("{}", l))
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
    /// Create the logging config from the MOUNTPOINT_LOG environment variable or the default config
    /// if that variable is unset. We do this in a function because [EnvFilter] isn't [Clone] and we
    /// need a copy of the filter for each [Layer].
    fn create_env_filter(filter: &str) -> EnvFilter {
        EnvFilter::try_from_env("MOUNTPOINT_LOG").unwrap_or_else(|_| EnvFilter::new(filter))
    }

    let env_filter = create_env_filter(&config.default_filter);
    // Don't create the files or subscribers if we'll never emit any logs
    if env_filter.max_level_hint() == Some(LevelFilter::OFF) {
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
            .with_writer(file)
            .with_filter(env_filter);
        Some(file_layer)
    } else {
        None
    };

    let mut reloadable_filter_handle = None;

    let syslog_layer: Option<Filtered<_, _, Registry>> = if config.log_file.is_none() {
        // TODO decide how to configure the filter for syslog
        let env_filter = create_env_filter(&config.default_filter);
        let (env_filter, handle) = setup_reloadable_filter(env_filter, config.default_filter.to_string())?;
        reloadable_filter_handle = Some(handle);

        // Don't fail if syslog isn't available on the system, since it's a default
        let syslog_layer = SyslogLayer::new().ok();
        syslog_layer.map(|l| l.with_filter(env_filter))
    } else {
        None
    };

    let console_layer = if config.log_to_stdout {
        let fmt_layer = tracing_subscriber::fmt::layer()
            .with_ansi(supports_color::on(supports_color::Stream::Stdout).is_some())
            .with_filter(create_env_filter(&config.default_filter));
        Some(fmt_layer)
    } else {
        None
    };

    let registry = tracing_subscriber::registry()
        .with(syslog_layer)
        .with(file_layer)
        .with(console_layer)
        .with(metrics_tracing_span_layer());

    registry.init();

    Ok(LoggingHandle {
        _reloadable_filter_handle: reloadable_filter_handle,
    })
}

pub fn record_name(name: &str) {
    Span::current().record("name", name);
}

struct ReloadableFilterHandle {
    signals_handle: SignalsHandle,
    thread_handle: Option<JoinHandle<()>>,
}

impl Drop for ReloadableFilterHandle {
    fn drop(&mut self) {
        if !self.signals_handle.is_closed() {
            self.signals_handle.close();
        }
        if let Some(handle) = self.thread_handle.take() {
            _ = handle.join();
        }
    }
}

fn setup_reloadable_filter<S: Subscriber>(
    inner: EnvFilter,
    default_filter: String,
) -> anyhow::Result<(reload::Layer<EnvFilter, S>, ReloadableFilterHandle)> {
    let (filter, reload_handle) = reload::Layer::new(inner);

    // Log levels.
    const DEFAULT: u8 = 0;
    const DEBUG: u8 = 1;
    const DEBUG_CRT: u8 = 2;
    const TRACE: u8 = 3;
    const TRACE_CRT: u8 = 4;
    let current_level = AtomicU8::new(DEFAULT);

    fn create_filter(level: LevelFilter, crt_level: LevelFilter) -> EnvFilter {
        EnvFilter::new(format!("{level},{AWSCRT_LOG_TARGET}={crt_level}"))
    }

    let mut signals = Signals::new([SIGUSR2])?;
    let signals_handle = signals.handle();

    let thread_handle = thread::spawn(move || {
        for signal in &mut signals.forever() {
            match signal {
                SIGUSR2 => {
                    let current = current_level.fetch_add(1, Ordering::SeqCst) + 1;
                    match current % 5 {
                        DEFAULT => {
                            warn!("Changing log verbosity to default level: {}", &default_filter);
                            _ = reload_handle.modify(|layer| *layer = EnvFilter::new(&default_filter));
                        }
                        DEBUG => {
                            warn!("Changing log verbosity to debug level");
                            _ = reload_handle
                                .modify(|layer| *layer = create_filter(LevelFilter::DEBUG, LevelFilter::OFF));
                        }
                        DEBUG_CRT => {
                            warn!("Changing log verbosity to debug level including CRT");
                            _ = reload_handle
                                .modify(|layer| *layer = create_filter(LevelFilter::DEBUG, LevelFilter::DEBUG));
                        }
                        TRACE => {
                            warn!("Changing log verbosity to trace level");
                            _ = reload_handle
                                .modify(|layer| *layer = create_filter(LevelFilter::TRACE, LevelFilter::OFF));
                        }
                        TRACE_CRT => {
                            warn!("Changing log verbosity to trace level including CRT");
                            _ = reload_handle.modify(|layer| {
                                *layer = create_filter(LevelFilter::TRACE, LevelFilter::TRACE);
                            });
                        }
                        level => {
                            warn!("Ignoring incorrect level: {}", level);
                        }
                    };
                }
                signal => warn!("Ignoring unexpected signal: {}", signal),
            }
        }
    });

    Ok((
        filter,
        ReloadableFilterHandle {
            signals_handle,
            thread_handle: Some(thread_handle),
        },
    ))
}
