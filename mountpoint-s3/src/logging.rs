use std::backtrace::Backtrace;
use std::fs::{DirBuilder, OpenOptions};
use std::os::unix::fs::DirBuilderExt;
use std::os::unix::prelude::OpenOptionsExt;
use std::panic::{self, PanicInfo};
use std::path::Path;
use std::thread;

use crate::metrics::metrics_tracing_span_layer;
use anyhow::Context;
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use time::format_description::FormatItem;
use time::macros;
use time::OffsetDateTime;
use tracing_subscriber::{
    filter::EnvFilter, filter::LevelFilter, layer::SubscriberExt, util::SubscriberInitExt, Layer,
};

/// Set up all our logging infrastructure.
///
/// This method:
/// - initializes the `tracing` subscriber for capturing log output
/// - sets up the logging adapters for the CRT and for metrics
/// - installs a panic hook to capture panics and log them with `tracing`
pub fn init_logging(is_foreground: bool, log_directory: Option<&Path>) -> anyhow::Result<()> {
    init_tracing_subscriber(is_foreground, log_directory)?;
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

fn init_tracing_subscriber(is_foreground: bool, log_directory: Option<&Path>) -> anyhow::Result<()> {
    /// Create the logging config from the RUST_LOG environment variable or the default config if
    /// that variable is unset. We do this in a function because [EnvFilter] isn't [Clone] and we
    /// need a second copy of it in the foreground case to replicate logs to stdout.
    fn create_env_filter() -> EnvFilter {
        EnvFilter::try_from_default_env().unwrap_or_else(|_| EnvFilter::new("info,awscrt=off,fuser=error"))
    }
    let env_filter = create_env_filter();

    // Don't create the files or subscribers if we'll never emit any logs
    if env_filter.max_level_hint() == Some(LevelFilter::OFF) {
        return Ok(());
    }

    RustLogAdapter::try_init().context("failed to initialize CRT logger")?;

    let file_layer = if let Some(path) = log_directory {
        const LOG_FILE_NAME_FORMAT: &[FormatItem<'static>] =
            macros::format_description!("mountpoint-s3-[year]-[month]-[day]T[hour]-[minute]-[second]Z.log");
        let filename = OffsetDateTime::now_utc()
            .format(LOG_FILE_NAME_FORMAT)
            .context("couldn't format log file name")?;

        // log directories and files created by Mountpoint should not be accessible by other users
        let mut dir_builder = DirBuilder::new();
        dir_builder.recursive(true).mode(0o750);
        let mut file_options = OpenOptions::new();
        file_options.mode(0o640).write(true).create(true);

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

    let console_layer = if is_foreground {
        let fmt_layer = tracing_subscriber::fmt::layer()
            .with_ansi(supports_color::on(supports_color::Stream::Stdout).is_some())
            .with_filter(create_env_filter());
        Some(fmt_layer)
    } else {
        None
    };

    let registry = tracing_subscriber::registry()
        .with(console_layer)
        .with(file_layer)
        .with(metrics_tracing_span_layer());

    registry.init();

    Ok(())
}
