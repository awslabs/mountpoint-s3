//! Credentials parity suite.
//!
//! Each scenario sets up an environment (variables, shared files, `--profile`, and stubs for IMDS,
//! container credentials, STS and the IAM Identity Center portal), signs S3 requests with a
//! credentials chain, and checks what the chain did: the credentials that signed each request, or
//! the error, and the requests the stubs received. The expected outcome of every scenario is the
//! CRT chain's behaviour, which Mountpoint uses today.
//!
//! The suite prints a Markdown table with one row per scenario and one column per chain, and fails
//! if any outcome differs from its expectation. In GitHub Actions, the table goes to the job summary.
//! It needs `unshare` and `mount` (from util-linux) and `ip` (from iproute2), and runs as root or
//! with unprivileged user namespaces (see [netns]).
//!
//! Run it with `cargo test -p mountpoint-s3-fs --features credentials_parity_tests --test
//! credentials_parity`, optionally followed by `-- <text>` to run only the scenarios whose name
//! contains `<text>`. Slow scenarios, which wait for the credentials cache to refresh, run only
//! with `-- --include-slow`.

mod model;
mod netns;
mod report;
mod run;
mod scenarios;
mod stubs;

use std::process::ExitCode;

use model::Chain;
use report::{Cell, Row};
use run::Run;

fn main() -> ExitCode {
    let args = std::env::args().skip(1).collect::<Vec<_>>();
    if let [flag, name, chain] = args.as_slice()
        && flag == "--child"
    {
        let scenario = scenarios::all()
            .into_iter()
            .find(|scenario| scenario.name == name)
            .expect("scenario");
        return run::child(&scenario, Chain::from_name(chain).expect("chain"));
    }
    if !netns::inside() {
        return netns::reexec();
    }

    let dir = tempfile::tempdir().expect("temporary directory");
    netns::configure(dir.path());
    stubs::write_pki(dir.path());

    let filter = args.iter().find(|arg| !arg.starts_with('-'));
    let include_slow = args.iter().any(|arg| arg == "--include-slow");
    let mut rows = Vec::new();
    for scenario in scenarios::all() {
        if filter.is_some_and(|filter| !scenario.name.contains(filter.as_str())) {
            continue;
        }
        if scenario.slow && !include_slow {
            rows.push(Row {
                scenario: scenario.name,
                crt: Cell::Skipped,
                sdk: Cell::Skipped,
            });
            continue;
        }
        eprintln!("running {}", scenario.name);
        let crt = match run::spawn(&scenario, Chain::Crt, dir.path()) {
            Run::Done(outcome, _) if outcome == scenario.expect => Cell::Pass(outcome),
            actual => Cell::Mismatch {
                expected: scenario.expect.clone(),
                actual,
            },
        };
        rows.push(Row {
            scenario: scenario.name,
            crt,
            sdk: Cell::NotRun,
        });
    }

    let report = report::render(&rows);
    println!("{report}");
    if let Some(summary) = std::env::var_os("GITHUB_STEP_SUMMARY") {
        let contents = format!("## Credentials parity\n\n{report}\n");
        let mut file = std::fs::OpenOptions::new()
            .append(true)
            .create(true)
            .open(summary)
            .expect("open job summary");
        std::io::Write::write_all(&mut file, contents.as_bytes()).expect("write job summary");
    }
    if rows.iter().any(|row| row.crt.failed() || row.sdk.failed()) {
        ExitCode::FAILURE
    } else {
        ExitCode::SUCCESS
    }
}
