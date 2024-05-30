use std::backtrace::Backtrace;
use std::fs::{DirBuilder, OpenOptions};
use std::os::unix::fs::DirBuilderExt;
use std::os::unix::prelude::OpenOptionsExt;
use std::panic::{self, PanicInfo};
use std::path::PathBuf;
use std::thread;

use crate::metrics::metrics_tracing_span_layer;
use anyhow::Context;
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use time::format_description::FormatItem;
use time::macros;
use time::OffsetDateTime;
use tracing::Span;
use tracing_subscriber::filter::{EnvFilter, Filtered, LevelFilter};
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::{Layer, Registry};

pub mod event_log;
mod syslog;
use self::syslog::SyslogLayer;

/// Configuration for Mountpoint logging
#[derive(Debug)]
pub struct LoggingConfig {
    /// A directory to create log files in. If unspecified, logs will be routed to syslog.
    pub log_directory: Option<PathBuf>,
    /// Whether to duplicate logs to stdout in addition to syslog or the log directory.
    pub log_to_stdout: bool,
    /// The default filter directive (in the sense of [tracing_subscriber::filter::EnvFilter]) to
    /// use for logs. Will be overridden by the `MOUNTPOINT_LOG` environment variable if set.
    pub default_filter: String,
}

/// Set up all our logging infrastructure.
///
/// This method:
/// - initializes the `tracing` subscriber for capturing log output
/// - sets up the logging adapters for the CRT and for metrics
/// - installs a panic hook to capture panics and log them with `tracing`
pub fn init_logging(config: LoggingConfig) -> anyhow::Result<()> {
    init_tracing_subscriber(config)?;
    install_panic_hook();
    Ok(())
}

fn tracing_panic_hook(panic_info: &PanicInfo) {
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

fn init_tracing_subscriber(config: LoggingConfig) -> anyhow::Result<()> {
    /// Create the logging config from the MOUNTPOINT_LOG environment variable or the default config
    /// if that variable is unset. We do this in a function because [EnvFilter] isn't [Clone] and we
    /// need a copy of the filter for each [Layer].
    fn create_env_filter(filter: &str) -> EnvFilter {
        EnvFilter::try_from_env("MOUNTPOINT_LOG").unwrap_or_else(|_| EnvFilter::new(filter))
    }

    let env_filter = create_env_filter(&config.default_filter);
    // Don't create the files or subscribers if we'll never emit any logs
    if env_filter.max_level_hint() == Some(LevelFilter::OFF) {
        return Ok(());
    }

    RustLogAdapter::try_init().context("failed to initialize CRT logger")?;

    let file_layer = if let Some(path) = &config.log_directory {
        const LOG_FILE_NAME_FORMAT: &[FormatItem<'static>] =
            macros::format_description!("mountpoint-s3-[year]-[month]-[day]T[hour]-[minute]-[second]Z.log");
        let filename = OffsetDateTime::now_utc()
            .format(LOG_FILE_NAME_FORMAT)
            .context("couldn't format log file name")?;

        // log directories and files created by Mountpoint should not be accessible by other users
        let mut dir_builder = DirBuilder::new();
        dir_builder.recursive(true).mode(0o750);
        let mut file_options = OpenOptions::new();
        file_options.mode(0o640).append(true).create(true);

        dir_builder.create(path).context("failed to create log folder")?;
        let file = file_options
            .open(path.join(filename))
            .context("failed to create log file")?;

        let file_layer = tracing_subscriber::fmt::layer()
            .with_ansi(false)
            .with_writer(file)
            .with_filter(env_filter);
        Some(file_layer)
    } else {
        None
    };

    let syslog_layer: Option<Filtered<_, _, Registry>> = if config.log_directory.is_none() {
        // TODO decide how to configure the filter for syslog
        let env_filter = create_env_filter(&config.default_filter);
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
        .with(console_layer)
        .with(file_layer)
        .with(metrics_tracing_span_layer());

    registry.init();

    Ok(())
}

pub fn record_name(name: &str) -> Span {
    Span::current().record("name", name).clone()
}
