//! Tests of the Tokio runtime's lifecycle in the mount process, with and without `--foreground`.
//!
//! They run `mock-mount-s3`. In the background, the runtime must run in the forked process that
//! serves the mount, as threads don't survive `fork()`.
#![cfg(all(feature = "mock", feature = "fuse_tests", target_os = "linux"))]

use std::fs;
use std::path::{Path, PathBuf};
use std::process::{Child, Command, ExitStatus};
use std::time::{Duration, Instant};

use assert_cmd::cargo;
use nix::sys::signal::{Signal, kill};
use nix::unistd::Pid;
use test_case::test_case;

/// Longer than the 30 seconds the parent waits for the forked process to mount.
const TIMEOUT: Duration = Duration::from_secs(60);

/// A `mock-mount-s3` mount.
struct Mount {
    foreground: bool,
    mount_point: assert_fs::TempDir,
    pid_file: PathBuf,
    /// The `mock-mount-s3` process started by the test: the mount process itself in the foreground,
    /// the parent that forks it in the background.
    process: Child,
    _files: tempfile::TempDir,
}

impl Mount {
    fn start(foreground: bool) -> Self {
        let mount_point = assert_fs::TempDir::new().unwrap();
        let files = tempfile::tempdir().unwrap();
        let pid_file = files.path().join("pid");

        let mut cmd = Command::new(cargo::cargo_bin!("mock-mount-s3"));
        cmd.arg("sthree-tokio-runtime-test")
            .arg(mount_point.path())
            .env("UNSTABLE_MOUNTPOINT_PID_FILE", &pid_file);
        if foreground {
            cmd.arg("--foreground");
        }
        let process = cmd.spawn().expect("unable to spawn mock-mount-s3");

        let mut mount = Self {
            foreground,
            mount_point,
            pid_file,
            process,
            _files: files,
        };
        if !foreground {
            // The parent exits once the forked process reports that it has mounted.
            let status = wait_for_exit(&mut mount.process);
            assert!(
                status.success(),
                "mock-mount-s3 failed to mount in the background: {status}"
            );
        }
        wait_until("the file system is mounted", || {
            fs::read_to_string(mount.mount_point.join("hello.txt")).is_ok_and(|content| content == "hello world")
        });
        mount
    }

    /// The PID of the process serving the mount.
    fn mount_pid(&self) -> u32 {
        let pid = fs::read_to_string(&self.pid_file).expect("mock-mount-s3 should write its PID file");
        pid.trim().parse().expect("PID file should contain a PID")
    }

    fn unmount(&self) {
        // Retry a bit to let any slow FUSE requests finish.
        for attempt in 1..4 {
            if fusermount(&["-u"], self.mount_point.path()) {
                return;
            }
            std::thread::sleep(attempt * Duration::from_secs(1));
        }
        panic!("failed to unmount {}", self.mount_point.path().display());
    }

    /// End the mount and wait for the mount process to exit, checking its exit status when it is the
    /// test's child (in the foreground).
    fn end_and_wait_for_exit(mut self, end: End) {
        let pid = self.mount_pid();
        match end {
            End::Unmount => self.unmount(),
            End::Signal(signal) => kill(Pid::from_raw(pid as i32), signal).expect("unable to signal the mount process"),
        }
        if self.foreground {
            let status = wait_for_exit(&mut self.process);
            assert!(status.success(), "mock-mount-s3 should exit cleanly: {status}");
        } else {
            wait_until("the mount process exits", || has_exited(pid));
        }
    }
}

/// Run `fusermount` (FUSE 2) or `fusermount3` (FUSE 3), and return whether it succeeded.
fn fusermount(args: &[&str], mount_point: &Path) -> bool {
    ["fusermount", "fusermount3"].into_iter().any(|bin| {
        Command::new(bin)
            .args(args)
            .arg(mount_point)
            .status()
            .is_ok_and(|status| status.success())
    })
}

fn wait_until(what: &str, mut condition: impl FnMut() -> bool) {
    let start = Instant::now();
    while !condition() {
        assert!(start.elapsed() < TIMEOUT, "timed out waiting until {what}");
        std::thread::sleep(Duration::from_millis(100));
    }
}

fn wait_for_exit(process: &mut Child) -> ExitStatus {
    let mut status = None;
    wait_until("mock-mount-s3 exits", || {
        status = process.try_wait().expect("unable to wait for mock-mount-s3");
        status.is_some()
    });
    status.unwrap()
}

/// Whether process `pid` has exited (it may be a zombie until its new parent reaps it).
fn has_exited(pid: u32) -> bool {
    match fs::read_to_string(format!("/proc/{pid}/stat")) {
        // The state follows the command name, which is in parentheses.
        Ok(stat) => stat
            .rsplit_once(')')
            .is_some_and(|(_, rest)| rest.trim_start().starts_with('Z')),
        Err(_) => true,
    }
}

fn thread_names(pid: u32) -> Vec<String> {
    fs::read_dir(format!("/proc/{pid}/task"))
        .expect("the mount process should be running")
        .filter_map(|entry| fs::read_to_string(entry.ok()?.path().join("comm")).ok())
        .map(|name| name.trim_end().to_owned())
        .collect()
}

/// How a test ends the mount.
#[derive(Debug, Clone, Copy)]
enum End {
    Unmount,
    Signal(Signal),
}

#[test_case(true, End::Unmount; "foreground unmount")]
#[test_case(false, End::Unmount; "background unmount")]
#[test_case(true, End::Signal(Signal::SIGINT); "foreground SIGINT")]
#[test_case(true, End::Signal(Signal::SIGTERM); "foreground SIGTERM")]
#[test_case(false, End::Signal(Signal::SIGTERM); "background SIGTERM")]
fn tokio_runtime_runs_in_mount_process(foreground: bool, end: End) {
    let mount = Mount::start(foreground);
    let pid = mount.mount_pid();
    if foreground {
        assert_eq!(pid, mount.process.id());
    } else {
        assert_ne!(
            pid,
            mount.process.id(),
            "the mount should be served by the forked process"
        );
    }

    let threads = thread_names(pid);
    assert!(
        threads.iter().any(|name| name.starts_with("mp-tokio-")),
        "the mount process should run the Tokio runtime's threads: {threads:?}"
    );

    // The process exits once the mount ends.
    mount.end_and_wait_for_exit(end);
}
