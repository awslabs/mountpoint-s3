use std::io::{BufRead, BufReader, Read};
use std::path::Path;
use std::process::Command;
use std::process::{Child, ExitStatus, Stdio};
use std::time::{Duration, Instant};

const MAX_WAIT_DURATION: std::time::Duration = std::time::Duration::from_secs(10);

pub fn wait_for_mount(source: &str, mount_point: &str) {
    let st = Instant::now();

    loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for mount timeout")
        }
        if mount_exists(source, mount_point) {
            return;
        }
        std::thread::sleep(Duration::from_millis(100));
    }
}

pub fn wait_for_exit(mut child: Child) -> ExitStatus {
    let st = Instant::now();

    loop {
        if st.elapsed() > MAX_WAIT_DURATION {
            panic!("wait for result timeout")
        }
        match child.try_wait().expect("unable to wait for result") {
            Some(result) => break result,
            None => std::thread::sleep(Duration::from_millis(100)),
        }
    }
}

pub fn mount_exists(source: &str, mount_point: &str) -> bool {
    get_mount_from_source_and_mountpoint(source, mount_point).is_some()
}

pub fn unmount(mount_point: &Path) {
    fn run_fusermount(bin: &str, mount_point: &Path) -> Result<bool, Box<dyn std::error::Error>> {
        let mut child = Command::new(bin).arg("-u").arg(mount_point).spawn()?;
        let result = child.wait()?;
        Ok(result.success())
    }

    // Loop a bit to give any slow/async FUSE requests time to finish
    for i in 1..4 {
        // Try both FUSE 2 and FUSE 3 versions, since we don't know where we're running
        for bin in ["fusermount", "fusermount3"] {
            if matches!(run_fusermount(bin, mount_point), Ok(true)) {
                return;
            }
        }
        std::thread::sleep(i * Duration::from_secs(1));
    }

    panic!("failed to unmount");
}

pub fn unmount_and_check_log(mut process: Child, mount_path: &Path, expected_log_line: &regex::Regex) {
    unmount(mount_path);
    let mut stdout = process
        .stdout
        .take()
        .expect("stdout shouldn't be consumed at this point");
    wait_for_exit(process);
    let mut buf = Vec::new();
    stdout
        .read_to_end(&mut buf)
        .expect("failed to read mountpoint log from pipe");
    let log = String::from_utf8(buf).expect("mountpoint log is not a valid UTF-8");
    for line in log.lines() {
        if expected_log_line.is_match(line) {
            return;
        }
    }
    panic!("can not find a matching line in log: [{log}]");
}

/// Read all mount records in the system and return the line that matches given arguments.
/// # Arguments
///
/// * `source` - name of the file system.
/// * `mount_point` - path to the mount point.
pub fn get_mount_from_source_and_mountpoint(source: &str, mount_point: &str) -> Option<String> {
    // macOS wrap its temp directory under /private but it's not visible to users
    #[cfg(target_os = "macos")]
    let mount_point = format!("/private{}", mount_point);

    let mut cmd = Command::new("mount");
    #[cfg(target_os = "linux")]
    cmd.arg("-l");
    let mut cmd = cmd.stdout(Stdio::piped()).spawn().expect("Unable to spawn mount tool");

    let stdout = cmd.stdout.as_mut().unwrap();
    let stdout_reader = BufReader::new(stdout);
    let stdout_lines = stdout_reader.lines();

    for line in stdout_lines.map_while(Result::ok) {
        let str: Vec<&str> = line.split_whitespace().collect();
        let source_rec = str[0];
        let mount_point_rec = str[2];
        if source_rec == source && mount_point_rec == mount_point {
            return Some(line);
        }
    }
    None
}
