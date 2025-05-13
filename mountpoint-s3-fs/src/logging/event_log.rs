use std::fs::File;
use std::io::BufWriter;
use std::path::Path;

/// Provides callback ([EventLogger::log_error_callback]) for logging events in a structured format to a file.
///
/// The output format is `\n`-separated `json`'s, where each `json` describes a single event. Currently,
/// only errors occurring on fuse operations are logged as events. For some failed fuse operations an event
/// will be present in the log. On contrary, errors occurring before the mount won't be logged (yet).
///
/// Fields `error_code`, `s3_error_http_status` and `s3_error_code` may be used to detect specific
/// failure conditions, for instance, errors caused by throttling or a lack of permissions. Fields
/// `s3_object_key` and `s3_error_message` may be used to provide further diagnostics to the user.
///
/// Note that most of the fields are optional and may not be present in the event. Only `operation`,
/// `error_code`, `timestamp` amd `version` will be present in all events. The field `error_code`
/// is assigned to errors by Mountpoint itself and may be used for a rough classification of those.
/// See [mountpoint_s3_fs::fs::error_metadata] for the list of possible values.
///
/// As an example, the following rule may be used to detect permission errors:
/// `s3_error_http_status == 403 || (s3_error_http_status == 400 && s3_error_code in {"AccessDenied"})`
///
/// And the following rule for throttling errors:
/// `s3_error_http_status == 503`
use crate::fs::error_metadata::{MOUNTPOINT_ERROR_INTERNAL, MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT};
use crate::fs::Error;
use crate::sync::mpsc::{self, Receiver, SyncSender};
use serde::Serialize;
use std::thread::{self, JoinHandle};
use time::{serde::rfc3339, OffsetDateTime};

pub struct EventLogger {
    events_sender: Option<SyncSender<Event>>,
    writer_thread: Option<JoinHandle<()>>,
}

impl EventLogger {
    pub fn new<P: AsRef<Path>>(log_directory: P) -> anyhow::Result<Self> {
        let max_inflight_events = 1000;
        let (tx, rx) = mpsc::sync_channel(max_inflight_events);
        let file = File::create(log_directory.as_ref().join("event_log"))?;
        let writer_thread = thread::spawn(|| Self::write_to_file(rx, file));
        Ok(Self {
            events_sender: Some(tx),
            writer_thread: Some(writer_thread),
        })
    }

    pub fn log_error_callback(&self) -> crate::fuse::ErrorCallback {
        // todo: overhead of [SyncSender::clone]?
        let sender = self.events_sender.clone().expect("sender must be set");
        Box::new(move |error, fuse_operation, fuse_request_id| {
            Self::log_error(&sender, error, fuse_operation, fuse_request_id);
        })
    }

    /// Logs a failed fuse operation. The field `error_code` is set to `MOUNTPOINT_ERROR_INTERNAL` if it
    /// is missing in the input `fs::Error`.
    fn log_error(sender: &SyncSender<Event>, error: &Error, fuse_operation: &str, fuse_request_id: u64) {
        let error_code = match &error.meta().error_code {
            Some(error_code) => error_code,
            None => MOUNTPOINT_ERROR_INTERNAL,
        };
        if error_code == MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT {
            return;
        }
        let event = Event {
            timestamp: OffsetDateTime::now_utc(),
            operation: fuse_operation.to_string(),
            fuse_request_id,
            error_code: error_code.to_string(),
            errno: error.errno,
            internal_message: format!("{:#}", error),
            s3_object_key: error.meta().s3_object_key.clone(),
            s3_bucket_name: error.meta().s3_bucket_name.clone(),
            s3_error_http_status: error.meta().client_error_meta.http_code,
            s3_error_code: error.meta().client_error_meta.error_code.clone(),
            s3_error_message: error.meta().client_error_meta.error_message.clone(),
            version: "1".to_string(),
        };
        sender.send(event).expect("must be able to send an event");
    }

    fn write_to_file(events_receiver: Receiver<Event>, file: File) {
        // todo: what to do on errors?
        // todo: overhead of flush?
        let mut writer = BufWriter::new(file);
        for event in events_receiver {
            if let Err(err) = event.write(&mut writer) {
                tracing::warn!("failed to write to the event log: {}, event: {:?}", err, event);
            }
        }
    }
}

impl Drop for EventLogger {
    /// [Self::writer_thread] terminates when there are no [SyncSender]-s left. We assume that no [ErrorCallback] will be alive
    /// when [EventLogger] is dropped so, last [SyncSender] is dropped just before joining the thread.
    fn drop(&mut self) {
        self.events_sender.take();
        self.writer_thread
            .take()
            .expect("writer must be set")
            .join()
            .expect("must wait for writer thread");
        tracing::warn!("writer done");
    }
}

impl std::fmt::Debug for EventLogger {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "EventLogger")
    }
}

#[derive(Serialize, Debug)]
struct Event {
    #[serde(with = "rfc3339")]
    timestamp: OffsetDateTime,
    operation: String,
    fuse_request_id: u64,
    error_code: String,
    errno: i32,
    internal_message: String,
    s3_object_key: Option<String>,
    s3_bucket_name: Option<String>,
    s3_error_http_status: Option<i32>,
    s3_error_code: Option<String>,
    s3_error_message: Option<String>,
    version: String,
}

impl Event {
    fn write<W: std::io::Write>(&self, mut writer: W) -> std::io::Result<()> {
        serde_json::to_writer(&mut writer, &self)?;
        writer.write_all(b"\n")?;
        writer.flush()
    }
}
