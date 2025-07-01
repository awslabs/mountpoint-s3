use std::fs::File;
use std::io::BufWriter;
use std::path::Path;

use serde::{Deserialize, Serialize};
use std::thread::{self, JoinHandle};
use time::{OffsetDateTime, serde::rfc3339};

use crate::fs::Error;
use crate::fs::error_metadata::{MOUNTPOINT_ERROR_INTERNAL, MOUNTPOINT_ERROR_LOOKUP_NONEXISTENT};
use crate::fuse::ErrorLogger;
use crate::logging::log_file_name_time_suffix;
use crate::sync::mpsc::{self, Receiver, SyncSender};

const VERSION: &str = "1";

/// [FileErrorLogger] provides a callback for logging errors in a structured format to a file. Logging
/// is done in a separate thread which is launched in [FileErrorLogger::new],
///
/// The output format is `\n`-separated `json`'s, where each `json` describes a single error. Namely,
/// errors occurring on fuse operations are logged to the file.
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
pub struct FileErrorLogger {
    event_sender: Option<SyncSender<Event>>,
    writer_thread: Option<JoinHandle<()>>,
}

impl ErrorLogger for FileErrorLogger {
    fn error(&self, err: &crate::fs::Error, fuse_operation: &str, fuse_request_id: u64) {
        self.log_error(err, fuse_operation, fuse_request_id);
    }
}

impl FileErrorLogger {
    /// Spawns a new thread writing events to a file and return a callback which may be used to send events to this thread
    /// in a non blocking manner.
    pub fn new<P: AsRef<Path>>(log_directory: P, on_write_failure: impl Fn() + Send + 'static) -> anyhow::Result<Self> {
        let max_inflight_events = 1000;
        let (event_sender, receiver) = mpsc::sync_channel(max_inflight_events);
        let event_log_file_name = format!("mountpoint-s3-event-log-{}.log", log_file_name_time_suffix());
        let file = File::create(log_directory.as_ref().join(event_log_file_name))?;
        let writer_thread = thread::spawn(|| Self::write_to_file(receiver, file, on_write_failure));
        Ok(Self {
            event_sender: Some(event_sender),
            writer_thread: Some(writer_thread),
        })
    }

    /// Logs a failed fuse operation. The field `error_code` is set to `MOUNTPOINT_ERROR_INTERNAL` if it
    /// is missing in the input `fs::Error`.
    fn log_error(&self, error: &Error, fuse_operation: &str, fuse_request_id: u64) {
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
            fuse_request_id: Some(fuse_request_id),
            error_code: error_code.to_string(),
            errno: Some(error.errno),
            internal_message: Some(format!("{error:#}")),
            s3_object_key: error.meta().s3_object_key.clone(),
            s3_bucket_name: error.meta().s3_bucket_name.clone(),
            s3_error_http_status: error.meta().client_error_meta.http_code,
            s3_error_code: error.meta().client_error_meta.error_code.clone(),
            s3_error_message: error.meta().client_error_meta.error_message.clone(),
            version: VERSION.to_string(),
        };
        self.event_sender
            .as_ref()
            .unwrap()
            .send(event)
            .expect("must be able to send an event");
    }

    fn write_to_file(events_receiver: Receiver<Event>, file: File, on_write_failure: impl Fn() + Send + 'static) {
        let mut writer = BufWriter::new(file);
        for event in events_receiver {
            if let Err(err) = event.write(&mut writer) {
                tracing::error!("failed to write to the event log: {}, event: {:?}", err, event);
                on_write_failure();
            }
        }
    }
}

impl Drop for FileErrorLogger {
    fn drop(&mut self) {
        // Signal the [Self::writer_thread] to shutdown by dropping [Self::event_sender] and wait for the thread to
        // actually shutdown to ensure all events were processed.
        self.event_sender.take().expect("must be set");
        self.writer_thread
            .take()
            .expect("writer must be set")
            .join()
            .expect("must wait for writer thread");
        tracing::debug!("writer done");
    }
}

impl std::fmt::Debug for FileErrorLogger {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "FileErrorLogger")
    }
}

#[derive(Debug, Deserialize, Serialize, PartialEq)]
pub struct Event {
    #[serde(with = "rfc3339")]
    pub timestamp: OffsetDateTime,
    pub operation: String,
    pub fuse_request_id: Option<u64>,
    pub error_code: String,
    pub errno: Option<i32>,
    pub internal_message: Option<String>,
    pub s3_object_key: Option<String>,
    pub s3_bucket_name: Option<String>,
    pub s3_error_http_status: Option<i32>,
    pub s3_error_code: Option<String>,
    pub s3_error_message: Option<String>,
    pub version: String,
}

impl Event {
    fn write<W: std::io::Write>(&self, mut writer: W) -> std::io::Result<()> {
        serde_json::to_writer(&mut writer, &self)?;
        writer.write_all(b"\n")?;
        writer.flush()
    }
}

#[cfg(test)]
mod tests {
    use std::{fs, path::PathBuf};

    use crate::{
        fs::error_metadata::{ErrorMetadata, MOUNTPOINT_ERROR_CLIENT},
        prefetch::PrefetchReadError,
    };

    use super::*;
    use mountpoint_s3_client::{
        error::{GetObjectError, ObjectClientError},
        error_metadata::ClientErrorMetadata,
    };
    use tempfile::tempdir;

    #[test]
    fn test_log_event() {
        // define input and the expected output
        let fs_errors = [Error {
            errno: 6,
            message: "fs error".to_string(),
            source: Some(anyhow::anyhow!(PrefetchReadError::GetRequestFailed {
                source: ObjectClientError::ClientError(GetObjectError::NoSuchKey(Default::default())),
                metadata: Box::default(),
            })),
            level: tracing::Level::WARN,
            metadata: ErrorMetadata {
                client_error_meta: ClientErrorMetadata {
                    http_code: Some(404),
                    error_code: Some("NoSuchKey".to_string()),
                    error_message: Some("The specified key does not exist.".to_string()),
                },
                error_code: Some(MOUNTPOINT_ERROR_CLIENT.to_string()),
                s3_bucket_name: Some("amzn-s3-demo-bucket".to_string()),
                s3_object_key: Some("key".to_string()),
            },
        }];
        let mut expected_events = [Event {
            timestamp: OffsetDateTime::now_utc(),
            operation: "read".to_string(),
            fuse_request_id: Some(10),
            error_code: MOUNTPOINT_ERROR_CLIENT.to_string(),
            errno: Some(6),
            internal_message: Some(
                "fs error: get object request failed: Client error: The key does not exist".to_string(),
            ),
            s3_bucket_name: Some("amzn-s3-demo-bucket".to_string()),
            s3_object_key: Some("key".to_string()),
            s3_error_http_status: Some(404),
            s3_error_code: Some("NoSuchKey".to_string()),
            s3_error_message: Some("The specified key does not exist.".to_string()),
            version: VERSION.to_string(),
        }];

        let log_dir = tempdir().expect("must create a log dir");

        {
            // log errors and drop the logger to ensure data was written to the disk
            let error_logger = FileErrorLogger::new(log_dir.path(), || ()).expect("must create the event logger");

            for error in fs_errors.iter() {
                error_logger.error(error, "read", 10);
            }
        }

        // check output
        let event_log = fs::read_to_string(find_event_log_file_path(log_dir.path())).expect("must read the event log");
        let written_events: Vec<Event> = event_log
            .split("\n")
            .filter(|line| !line.is_empty())
            .map(|line| serde_json::from_str(line).expect("must be a valid event"))
            .collect();
        assert_eq!(written_events.len(), expected_events.len());
        for (i, written_event) in written_events.iter().enumerate() {
            expected_events[i].timestamp = written_event.timestamp; // do not validate the value of timestamp
        }
        assert_eq!(&written_events, &expected_events);
    }

    fn find_event_log_file_path<P: AsRef<Path>>(dir: P) -> PathBuf {
        fs::read_dir(dir)
            .expect("readdir must succeed")
            .map(|entry| entry.expect("readdir must succeed"))
            .find(|e| e.path().is_file())
            .expect("expected an event log file in the directory")
            .path()
    }
}
