//! Status reporting over the pipe from the forked mount process (the child) to the process that
//! started it (the parent), when Mountpoint runs in the background.
//!
//! The child sends a single status byte once the mount is set up: [SUCCESS_BYTE] or
//! [FAILURE_BYTE]. Before mounting, the child removes any cache directory left over from a previous
//! run, which can take minutes for a large cache. While that removal runs, it also sends a
//! [HEARTBEAT_BYTE] every [HEARTBEAT_INTERVAL].
//!
//! The parent gives up if it receives nothing for [MOUNT_PROGRESS_TIMEOUT], and each heartbeat
//! restarts that timeout. So a long cache cleanup no longer fails the mount, while a child that hangs
//! at any other step, or exits without reporting, is still detected.

use std::fs::File;
use std::io::{self, Read, Write};
use std::os::fd::{AsFd, OwnedFd};
use std::sync::Arc;
use std::sync::mpsc::{self, RecvTimeoutError};
use std::thread::{self, JoinHandle};
use std::time::{Duration, Instant};

use anyhow::anyhow;
use nix::errno::Errno;
use nix::poll::{PollFd, PollFlags, PollTimeout, poll};
use owo_colors::{OwoColorize, Stream::Stderr, Style};

/// Sent periodically by the child while it cleans up the cache directory.
const HEARTBEAT_BYTE: u8 = b'.';
/// Sent by the child when the mount succeeded.
const SUCCESS_BYTE: u8 = b'0';
/// Sent by the child when the mount failed.
const FAILURE_BYTE: u8 = b'1';

/// How often the child sends a heartbeat while cleaning up the cache directory.
const HEARTBEAT_INTERVAL: Duration = Duration::from_secs(1);

/// How long the parent waits for any message from the child before considering it stuck.
pub const MOUNT_PROGRESS_TIMEOUT: Duration = Duration::from_secs(30);

/// How long the cache cleanup can run before the parent warns that it's taking longer than expected.
const SLOW_CLEANUP_WARNING_AFTER: Duration = Duration::from_secs(30);

/// Reports the progress and outcome of the mount from the child process to the parent.
pub struct MountProgressReporter {
    pipe: Arc<File>,
}

impl MountProgressReporter {
    /// Create a reporter that writes to the write end of the status pipe.
    pub fn new(write_fd: OwnedFd) -> Self {
        Self {
            pipe: Arc::new(File::from(write_fd)),
        }
    }

    /// Start sending heartbeats to the parent from a separate thread, until the returned
    /// [Heartbeat] is dropped.
    pub fn start_heartbeat(&self) -> Heartbeat {
        Heartbeat::start(self.pipe.clone(), HEARTBEAT_INTERVAL)
    }

    /// Report that the mount succeeded, and close the pipe.
    pub fn report_success(self) -> io::Result<()> {
        self.report(SUCCESS_BYTE)
    }

    /// Report that the mount failed, and close the pipe.
    pub fn report_failure(self) -> io::Result<()> {
        self.report(FAILURE_BYTE)
    }

    fn report(self, status: u8) -> io::Result<()> {
        (&*self.pipe).write_all(&[status])
    }
}

/// Sends heartbeats to the parent from a separate thread until dropped.
///
/// Dropping it waits for the thread to exit, so no heartbeat is sent after the drop returns.
pub struct Heartbeat {
    stop: Option<mpsc::Sender<()>>,
    thread: Option<JoinHandle<()>>,
}

impl Heartbeat {
    fn start(pipe: Arc<File>, interval: Duration) -> Self {
        let (stop, stopped) = mpsc::channel::<()>();
        let spawned = thread::Builder::new()
            .name("mount-heartbeat".to_owned())
            .spawn(move || {
                // Dropping the sender ends the wait with `Disconnected`, which stops the loop.
                while let Err(RecvTimeoutError::Timeout) = stopped.recv_timeout(interval) {
                    if let Err(e) = (&*pipe).write_all(&[HEARTBEAT_BYTE]) {
                        // The parent has most likely exited. There is nobody left to report to.
                        tracing::debug!("failed to send heartbeat to parent process: {e}");
                        break;
                    }
                }
            });
        let thread = match spawned {
            Ok(thread) => Some(thread),
            Err(e) => {
                tracing::warn!("failed to start heartbeat thread, the mount may time out during cache cleanup: {e}");
                None
            }
        };
        Self {
            stop: Some(stop),
            thread,
        }
    }
}

impl Drop for Heartbeat {
    fn drop(&mut self) {
        drop(self.stop.take());
        if let Some(thread) = self.thread.take()
            && thread.join().is_err()
        {
            tracing::warn!("heartbeat thread panicked");
        }
    }
}

/// The outcome of the mount, as reported by the child process.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MountStatus {
    /// The child reported that the mount succeeded.
    Success,
    /// The child reported that the mount failed, or exited without reporting a status.
    Failed,
    /// The child sent nothing for the timeout, so it's considered stuck.
    TimedOut,
}

/// Waits in the parent process for the child to report the outcome of the mount.
pub struct MountProgressReader {
    pipe: File,
    timeout: Duration,
}

impl MountProgressReader {
    /// Create a reader over the read end of the status pipe, using [MOUNT_PROGRESS_TIMEOUT].
    pub fn new(read_fd: OwnedFd) -> Self {
        Self::with_timeout(read_fd, MOUNT_PROGRESS_TIMEOUT)
    }

    fn with_timeout(read_fd: OwnedFd, timeout: Duration) -> Self {
        Self {
            pipe: File::from(read_fd),
            timeout,
        }
    }

    /// Wait until the child reports a status, closes the pipe, or sends nothing for the timeout.
    ///
    /// Each heartbeat restarts the timeout.
    ///
    /// # Errors
    ///
    /// Returns an error if the pipe can't be polled or read, or the child sends an unexpected byte.
    /// The child may still be running in that case, so the caller shouldn't wait for it to exit.
    pub fn wait_for_status(mut self) -> anyhow::Result<MountStatus> {
        tracing::debug!(
            "waiting for child process to be ready, allowing up to {} seconds between messages",
            self.timeout.as_secs(),
        );

        let mut cleanup_started: Option<Instant> = None;
        let mut warned_slow_cleanup = false;
        // Only a heartbeat moves the deadline, so signals interrupting `poll` can't extend the wait.
        let mut deadline = Instant::now()
            .checked_add(self.timeout)
            .ok_or_else(|| anyhow!("timeout {:?} is too large", self.timeout))?;
        loop {
            let remaining = deadline.saturating_duration_since(Instant::now());
            let poll_timeout = PollTimeout::try_from(remaining)
                .map_err(|e| anyhow!("timeout {remaining:?} is not a valid poll timeout: {e}"))?;
            let mut poll_fds = [PollFd::new(self.pipe.as_fd(), PollFlags::POLLIN)];
            match poll(&mut poll_fds, poll_timeout) {
                // Interrupted by a signal before the timeout. Not an error, so wait for the rest of it.
                Err(Errno::EINTR) => continue,
                Err(e) => return Err(anyhow!("failed to poll the pipe for child process status: {e}")),
                Ok(0) => return Ok(MountStatus::TimedOut),
                // Data is available, or the child closed the pipe. The read below tells which.
                Ok(_) => {}
            }

            let mut buf = [0u8; 1];
            match self.pipe.read_exact(&mut buf) {
                Ok(()) => {}
                // The child exited without reporting a status.
                Err(e) if e.kind() == io::ErrorKind::UnexpectedEof => return Ok(MountStatus::Failed),
                Err(e) => return Err(anyhow!("failed to read child process status from the pipe: {e}")),
            }

            match buf[0] {
                HEARTBEAT_BYTE => {
                    deadline = Instant::now() + self.timeout;
                    let started = *cleanup_started.get_or_insert_with(Instant::now);
                    if !warned_slow_cleanup && started.elapsed() >= SLOW_CLEANUP_WARNING_AFTER {
                        let message = format!(
                            "cleaning up the cache directory is taking longer than expected (over {} seconds)",
                            SLOW_CLEANUP_WARNING_AFTER.as_secs(),
                        );
                        tracing::warn!("{message}");
                        // In background mode the parent's logs don't reach the terminal.
                        eprintln!(
                            "{}: {message}",
                            "warning".if_supports_color(Stderr, |text| text.style(Style::new().yellow().bold())),
                        );
                        warned_slow_cleanup = true;
                    }
                }
                SUCCESS_BYTE => return Ok(MountStatus::Success),
                FAILURE_BYTE => return Ok(MountStatus::Failed),
                // The child's state is unknown, so the caller shouldn't wait for it to exit.
                other => return Err(anyhow!("unexpected status byte {other:#04x} from child process")),
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    /// Create a pipe, and return a reader over its read end and its write end as a [File].
    fn reader_and_writer(timeout: Duration) -> (MountProgressReader, File) {
        let (read_fd, write_fd) = nix::unistd::pipe().expect("failed to create pipe");
        let reader = MountProgressReader::with_timeout(read_fd, timeout);
        (reader, File::from(write_fd))
    }

    #[test]
    fn success_byte_reports_success() {
        let (reader, mut writer) = reader_and_writer(Duration::from_secs(5));
        writer.write_all(&[SUCCESS_BYTE]).unwrap();
        assert_eq!(
            reader.wait_for_status().map_err(|e| e.to_string()),
            Ok(MountStatus::Success)
        );
    }

    #[test]
    fn failure_byte_reports_failure() {
        let (reader, mut writer) = reader_and_writer(Duration::from_secs(5));
        writer.write_all(&[FAILURE_BYTE]).unwrap();
        assert_eq!(
            reader.wait_for_status().map_err(|e| e.to_string()),
            Ok(MountStatus::Failed)
        );
    }

    #[test]
    fn unexpected_byte_is_an_error() {
        let (reader, mut writer) = reader_and_writer(Duration::from_secs(5));
        writer.write_all(b"x").unwrap();
        assert!(reader.wait_for_status().is_err());
    }

    /// The child exited without reporting a status.
    #[test]
    fn closed_pipe_reports_failure() {
        let (reader, writer) = reader_and_writer(Duration::from_secs(5));
        drop(writer);
        assert_eq!(
            reader.wait_for_status().map_err(|e| e.to_string()),
            Ok(MountStatus::Failed)
        );
    }

    #[test]
    fn closed_pipe_after_heartbeats_reports_failure() {
        let (reader, mut writer) = reader_and_writer(Duration::from_secs(5));
        writer.write_all(&[HEARTBEAT_BYTE, HEARTBEAT_BYTE]).unwrap();
        drop(writer);
        assert_eq!(
            reader.wait_for_status().map_err(|e| e.to_string()),
            Ok(MountStatus::Failed)
        );
    }

    #[test]
    fn no_message_reports_timed_out() {
        // Keep the write end open, so the reader sees no end of file and has to time out.
        let (reader, _writer) = reader_and_writer(Duration::from_millis(200));
        assert_eq!(
            reader.wait_for_status().map_err(|e| e.to_string()),
            Ok(MountStatus::TimedOut)
        );
    }

    #[test]
    fn heartbeats_are_skipped_until_status() {
        let (reader, mut writer) = reader_and_writer(Duration::from_secs(5));
        writer
            .write_all(&[HEARTBEAT_BYTE, HEARTBEAT_BYTE, HEARTBEAT_BYTE, SUCCESS_BYTE])
            .unwrap();
        assert_eq!(
            reader.wait_for_status().map_err(|e| e.to_string()),
            Ok(MountStatus::Success)
        );
    }

    /// The timeout still applies once heartbeats stop, for example if the mount hangs after the
    /// cache cleanup.
    #[test]
    fn timeout_applies_after_heartbeats_stop() {
        let (reader, mut writer) = reader_and_writer(Duration::from_millis(200));
        writer.write_all(&[HEARTBEAT_BYTE, HEARTBEAT_BYTE]).unwrap();
        assert_eq!(
            reader.wait_for_status().map_err(|e| e.to_string()),
            Ok(MountStatus::TimedOut)
        );
        drop(writer);
    }

    #[test]
    fn heartbeat_sends_until_dropped() {
        let (read_fd, write_fd) = nix::unistd::pipe().expect("failed to create pipe");
        let mut read_end = File::from(read_fd);
        let reporter = MountProgressReporter::new(write_fd);

        let heartbeat = Heartbeat::start(reporter.pipe.clone(), Duration::from_millis(1));
        // Blocks until the heartbeat thread has sent a few heartbeats.
        let mut first_heartbeats = [0u8; 3];
        read_end.read_exact(&mut first_heartbeats).unwrap();
        assert_eq!(first_heartbeats, [HEARTBEAT_BYTE; 3]);
        drop(heartbeat);
        reporter.report_success().unwrap();

        // The reporter and the heartbeat thread were the only holders of the write end, so this
        // reads until the end of file.
        let mut bytes = Vec::new();
        read_end.read_to_end(&mut bytes).unwrap();
        let (status, heartbeats) = bytes.split_last().expect("should have received the status");
        assert_eq!(*status, SUCCESS_BYTE, "status should be the last byte");
        assert!(
            heartbeats.iter().all(|&b| b == HEARTBEAT_BYTE),
            "only heartbeats should come before the status",
        );
    }

    #[test]
    fn heartbeat_dropped_before_first_interval_sends_nothing() {
        let (read_fd, write_fd) = nix::unistd::pipe().expect("failed to create pipe");
        let reporter = MountProgressReporter::new(write_fd);

        drop(reporter.start_heartbeat());
        reporter.report_failure().unwrap();

        let mut bytes = Vec::new();
        File::from(read_fd).read_to_end(&mut bytes).unwrap();
        assert_eq!(bytes, [FAILURE_BYTE]);
    }
}
