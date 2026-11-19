//! The suite's own network and mount namespaces.
//!
//! The CRT looks for IMDS at 169.254.169.254 and for container credentials at 169.254.170.2, and
//! STS is reached by its public host names. In a network namespace of its own, the suite can serve
//! all of them locally: the loopback interface gets the two link-local addresses, and a bind-mounted
//! `/etc/hosts` resolves the STS and SSO host names to 127.0.0.1. Nothing outside the namespace is
//! reachable, so a chain that contacts an unexpected endpoint fails instead of leaving the host.
//!
//! Run as root (as in CI), the suite creates the namespaces directly. Run as another user, it also
//! creates a user namespace in which it is root, which needs unprivileged user namespaces.

use std::path::Path;
use std::process::{Command, ExitCode};

use crate::stubs::TLS_HOSTS;

/// Set in the suite's environment once it runs inside its namespaces.
const IN_NAMESPACE: &str = "CREDENTIALS_PARITY_NAMESPACE";

pub fn inside() -> bool {
    std::env::var_os(IN_NAMESPACE).is_some()
}

/// Run this executable again, with the same arguments, in new network and mount namespaces.
pub fn reexec() -> ExitCode {
    let exe = std::env::current_exe().expect("current executable");
    let mut unshare = Command::new("unshare");
    if !nix::unistd::geteuid().is_root() {
        unshare.args(["--user", "--map-root-user"]);
    }
    let status = unshare
        .args(["--net", "--mount", "--"])
        .arg(exe)
        .args(std::env::args_os().skip(1))
        .env(IN_NAMESPACE, "1")
        .status();
    match status {
        Ok(status) if status.success() => ExitCode::SUCCESS,
        Ok(status) => {
            eprintln!("credentials parity suite failed: {status}");
            ExitCode::FAILURE
        }
        Err(e) => {
            eprintln!("can't run `unshare` (from util-linux): {e}");
            ExitCode::FAILURE
        }
    }
}

/// Bring up the loopback interface with the IMDS and ECS addresses, and resolve the host names in
/// [TLS_HOSTS] to it. `dir` holds the replacement `/etc/hosts` for as long as the suite runs.
pub fn configure(dir: &Path) {
    run("ip", &["link", "set", "lo", "up"]);
    for address in ["169.254.169.254/32", "169.254.170.2/32"] {
        run("ip", &["addr", "add", address, "dev", "lo"]);
    }
    let hosts = dir.join("hosts");
    let mut contents = String::from("127.0.0.1 localhost\n");
    for host in TLS_HOSTS {
        contents.push_str(&format!("127.0.0.1 {host}\n"));
    }
    std::fs::write(&hosts, contents).expect("write hosts file");
    run("mount", &["--bind", hosts.to_str().unwrap(), "/etc/hosts"]);
}

fn run(program: &str, args: &[&str]) {
    let status = Command::new(program)
        .args(args)
        .status()
        .unwrap_or_else(|e| panic!("{program}: {e}"));
    assert!(status.success(), "{program} {args:?}: {status}");
}
