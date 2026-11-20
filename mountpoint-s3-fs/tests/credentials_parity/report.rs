//! The suite's report: a Markdown table with one row per scenario and one column per chain.

use std::fmt::Write;

use crate::model::{Chain, Fetch, FetchResult, Outcome, Request, Scenario, Sdk};
use crate::run::Run;

/// The cell of one chain in one scenario.
pub enum Cell {
    /// The outcome matches the scenario's expectation.
    Pass(Outcome),
    /// The outcome matches a difference adopted and documented at `doc`.
    Adopted { doc: &'static str, outcome: Outcome },
    /// The outcome doesn't match what the chain is expected to do.
    Mismatch { expected: Outcome, actual: Run },
    /// The scenario is slow, and runs only with `--include-slow`.
    Skipped,
}

impl Cell {
    /// The cell of `chain` in `scenario`, which did `run`.
    pub fn new(scenario: &Scenario, chain: Chain, run: Run) -> Self {
        let expected = scenario.expected(chain);
        match run {
            Run::Done(outcome, _) if &outcome == expected => match (chain, &scenario.sdk) {
                (Chain::Sdk, Sdk::Adopted { doc, .. }) => Cell::Adopted { doc, outcome },
                _ => Cell::Pass(outcome),
            },
            actual => Cell::Mismatch {
                expected: expected.clone(),
                actual,
            },
        }
    }

    pub fn failed(&self) -> bool {
        matches!(self, Cell::Mismatch { .. })
    }

    fn symbol(&self) -> &'static str {
        match self {
            Cell::Pass(_) => "✅",
            Cell::Adopted { .. } => "📝",
            Cell::Mismatch { .. } => "🚨",
            Cell::Skipped => "⏭",
        }
    }

    fn render(&self) -> String {
        let symbol = self.symbol();
        match self {
            Cell::Pass(outcome) => format!("{symbol} {}", summary(outcome)),
            Cell::Adopted { doc, outcome } => format!("{symbol} {} · see `{doc}`", summary(outcome)),
            Cell::Mismatch {
                actual: Run::Done(outcome, _),
                ..
            } => format!("{symbol} {}", summary(outcome)),
            Cell::Mismatch {
                actual: Run::Crashed(_),
                ..
            } => format!("{symbol} crashed"),
            Cell::Skipped => format!("{symbol} slow, not run"),
        }
    }
}

pub struct Row {
    pub scenario: &'static str,
    pub crt: Cell,
    pub sdk: Cell,
}

/// The report's Markdown: the table, a summary, then the details of every mismatch.
pub fn render(rows: &[Row]) -> String {
    let mut out = String::from("| Scenario | CRT | SDK |\n|---|---|---|\n");
    for row in rows {
        writeln!(
            out,
            "| {} | {} | {} |",
            row.scenario,
            row.crt.render(),
            row.sdk.render()
        )
        .unwrap();
    }
    let column = |name: &str, cells: Vec<&Cell>| {
        let mut parts = vec![];
        for symbol in ["✅", "📝", "🚨", "⏭"] {
            let n = cells.iter().filter(|cell| cell.symbol() == symbol).count();
            if n > 0 {
                parts.push(format!("{n} {symbol}"));
            }
        }
        format!("{name}: {}", parts.join(", "))
    };
    writeln!(
        out,
        "\n{} scenarios. {}. {}.",
        rows.len(),
        column("CRT", rows.iter().map(|row| &row.crt).collect()),
        column("SDK", rows.iter().map(|row| &row.sdk).collect())
    )
    .unwrap();
    writeln!(
        out,
        "\n✅ as expected (today's CRT behaviour) · 📝 adopted and documented difference · 🚨 unexpected outcome · ⏭ slow, run with `--include-slow`"
    )
    .unwrap();
    for row in rows {
        for (chain, cell) in [("CRT", &row.crt), ("SDK", &row.sdk)] {
            if let Cell::Mismatch { expected, actual } = cell {
                writeln!(
                    out,
                    "\n### 🚨 {} ({chain})\n\nExpected:\n```\n{}```",
                    row.scenario,
                    details(expected)
                )
                .unwrap();
                match actual {
                    Run::Done(outcome, stderr) => {
                        writeln!(out, "Actual:\n```\n{}```", details(outcome)).unwrap();
                        if !stderr.is_empty() {
                            writeln!(out, "Output:\n```\n{}\n```", tail(stderr)).unwrap();
                        }
                    }
                    Run::Crashed(output) => writeln!(out, "Crashed:\n```\n{output}\n```").unwrap(),
                }
            }
        }
    }
    out
}

/// A short form of an outcome for a table cell: the result of each fetch, and what the scenario's
/// requests show (IMDSv1, the STS host).
fn summary(outcome: &Outcome) -> String {
    outcome
        .fetches
        .iter()
        .map(fetch_summary)
        .collect::<Vec<_>>()
        .join(" → ")
}

fn fetch_summary(fetch: &Fetch) -> String {
    let mut text = match &fetch.result {
        FetchResult::Signed { key, token: false } => format!("`{key}`"),
        FetchResult::Signed { key, token: true } => format!("`{key}`+token"),
        FetchResult::InvalidConfig => "invalid config".to_string(),
        FetchResult::NoCredentials => "no credentials".to_string(),
        FetchResult::Error => "error".to_string(),
    };
    if fetch
        .requests
        .iter()
        .any(|request| matches!(request, Request::ImdsGet { v2: false, .. }))
    {
        text.push_str(" via IMDSv1");
    }
    let mut sts_hosts = fetch.requests.iter().filter_map(|request| match request {
        Request::Sts { host, .. } => Some(host.as_str()),
        _ => None,
    });
    if let Some(host) = sts_hosts.next() {
        text.push_str(&format!(" · {host}"));
    }
    text
}

/// The last lines of a child's output.
fn tail(output: &str) -> String {
    let lines = output.lines().collect::<Vec<_>>();
    lines[lines.len().saturating_sub(40)..].join("\n")
}

fn details(outcome: &Outcome) -> String {
    let mut out = String::new();
    for (i, fetch) in outcome.fetches.iter().enumerate() {
        writeln!(out, "fetch {}: {:?}", i + 1, fetch.result).unwrap();
        for request in &fetch.requests {
            writeln!(out, "  {request}").unwrap();
        }
    }
    out
}
