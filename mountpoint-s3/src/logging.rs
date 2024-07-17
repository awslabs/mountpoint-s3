use std::backtrace::Backtrace;
use std::fs::{DirBuilder, File, OpenOptions};
use std::io;
use std::os::unix::fs::DirBuilderExt;
use std::os::unix::prelude::OpenOptionsExt;
use std::panic::{self, PanicInfo};
use std::path::{Path, PathBuf};
use std::thread;

use crate::metrics::metrics_tracing_span_layer;
use crate::sync::{Arc, RwLock, RwLockReadGuard};
use anyhow::{anyhow, Context};
use mountpoint_s3_crt::common::rust_log_adapter::RustLogAdapter;
use time::format_description::FormatItem;
use time::macros;
use time::OffsetDateTime;
use tracing::Span;
use tracing_subscriber::filter::{EnvFilter, Filtered, LevelFilter};
use tracing_subscriber::layer::SubscriberExt;
use tracing_subscriber::util::SubscriberInitExt;
use tracing_subscriber::{fmt::MakeWriter, Layer, Registry};

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

/// Provides an ability to re-open the log file at the initial path, updating the file handle used for logging.
pub struct LogFileReopener {
    log_file_path: PathBuf,
    current_file: Arc<RwLock<File>>,
}

/// Used by `tracing-subscriber::fmt` layer to obtain a log writer (any type implementing `io::Write`).
/// Holds a file handle, which may be updated by `LogFileReopener`.
///
/// One notable detail from the `tracing-subscriber`` internals, is that `LogWriterFactory` will be used
/// to obtain a log writer **each time** when a new log line is emitted, thus nothing time-consuming may
/// reside in `make_writer` implementation.
struct LogWriterFactory {
    current_file: Arc<RwLock<File>>,
}

pub struct LogWriter<'a>(Option<RwLockReadGuard<'a, File>>);

/// Set up all our logging infrastructure.
///
/// This method:
/// - initializes the `tracing` subscriber for capturing log output
/// - sets up the logging adapters for the CRT and for metrics
/// - installs a panic hook to capture panics and log them with `tracing`
pub fn init_logging(config: LoggingConfig) -> anyhow::Result<Option<LogFileReopener>> {
    let log_file_reopener = init_tracing_subscriber(config)?;
    install_panic_hook();
    Ok(log_file_reopener)
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

fn init_tracing_subscriber(config: LoggingConfig) -> anyhow::Result<Option<LogFileReopener>> {
    /// Create the logging config from the MOUNTPOINT_LOG environment variable or the default config
    /// if that variable is unset. We do this in a function because [EnvFilter] isn't [Clone] and we
    /// need a copy of the filter for each [Layer].
    fn create_env_filter(filter: &str) -> EnvFilter {
        EnvFilter::try_from_env("MOUNTPOINT_LOG").unwrap_or_else(|_| EnvFilter::new(filter))
    }

    let env_filter = create_env_filter(&config.default_filter);
    // Don't create the files or subscribers if we'll never emit any logs
    if env_filter.max_level_hint() == Some(LevelFilter::OFF) {
        return Ok(None);
    }

    RustLogAdapter::try_init().context("failed to initialize CRT logger")?;

    let (file_layer, log_file_reopener) = if let Some(path) = &config.log_directory {
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

        let (log_writer_factory, log_file_reopener) = make_log_writer_factory(&path.join(filename))?;
        let file_layer = tracing_subscriber::fmt::layer()
            .with_ansi(false)
            .with_writer(log_writer_factory)
            .with_filter(env_filter);
        (Some(file_layer), Some(log_file_reopener))
    } else {
        (None, None)
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

    Ok(log_file_reopener)
}

pub fn record_name(name: &str) -> Span {
    Span::current().record("name", name).clone()
}

fn open_file(filepath: &Path) -> anyhow::Result<File> {
    let mut file_options = OpenOptions::new();
    file_options.mode(0o640).append(true).create(true);
    file_options.open(filepath).context("failed to create log file")
}

fn make_log_writer_factory(filepath: &Path) -> anyhow::Result<(LogWriterFactory, LogFileReopener)> {
    let file = Arc::new(RwLock::new(open_file(filepath)?));
    let log_writer_factory = LogWriterFactory {
        current_file: file.clone(),
    };
    let log_file_reopener = LogFileReopener {
        log_file_path: filepath.to_owned(),
        current_file: file,
    };
    Ok((log_writer_factory, log_file_reopener))
}

impl LogFileReopener {
    /// Re-opens the log file at the initial path, updating the file handle used for logging.
    pub fn reopen(&self) -> anyhow::Result<()> {
        let mut rw_lock_write_guard = self
            .current_file
            .write()
            .map_err(|_| anyhow!("log file handle lock is poisoned"))?;
        // CWAgent may not export any logs written to an older file after the new one was created.
        // Thus we need to hold the write lock while creating the file, to ensure that no writes
        // to an old file will happen after this.
        //
        // Note that we write to `std::fs::File` via a shared reference to it, acquired with read lock.
        *rw_lock_write_guard = open_file(&self.log_file_path)?;
        Ok(())
    }
}

impl io::Write for LogWriter<'_> {
    fn write(&mut self, buf: &[u8]) -> io::Result<usize> {
        match &self.0 {
            Some(rw_lock_read_guard) => (&**rw_lock_read_guard).write(buf),
            None => Err(io::Error::from(io::ErrorKind::Other)), // unreachable
        }
    }

    fn flush(&mut self) -> io::Result<()> {
        match &self.0 {
            Some(rw_lock_read_guard) => (&**rw_lock_read_guard).flush(),
            None => Err(io::Error::from(io::ErrorKind::Other)), // unreachable
        }
    }
}

impl<'a> MakeWriter<'a> for LogWriterFactory {
    type Writer = LogWriter<'a>;

    fn make_writer(&'a self) -> Self::Writer {
        // `RwLock::read()` will only return an error if a thread holding the write lock **panicked**.
        // Implementation of `LogFileReopener::reopen` does not allow a panic while the lock is held.
        // Thus this will always return a file handle.
        LogWriter(self.current_file.read().ok())
    }
}
