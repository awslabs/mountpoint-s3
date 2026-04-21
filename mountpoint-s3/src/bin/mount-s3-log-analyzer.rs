//! A helper binary for parsing Mountpoint logs and collecting metrics.
//!
//! Extracts peak memory usage (RSS) from `process.memory_usage` log lines.
//! Optionally, when `--mem-limit-mib` is provided, also extracts peak values for labeled
//! metrics `mem.bytes_reserved[area=...]` and `pool.reserved_bytes[kind=...]` and writes
//! an additional `<out_file_dir>/<test_name>_extra_metrics.json` file.
//!
//! The `_extra_metrics.json` files are consumed only by the memory-limited CI jobs'
//! `render-mem-summary.sh` step to populate the GitHub Actions step summary table and
//! are not fed into the gh-pages benchmark charts.
//!
//! This binary is intended only for use in testing and development of Mountpoint.

use std::{
    collections::HashMap,
    fs::{self, File},
    io::{BufRead, BufReader, BufWriter, Write},
    path::PathBuf,
};

use anyhow::anyhow;
use clap::Parser;
use regex::Regex;
use serde_json::json;

#[derive(Parser, Debug)]
struct CliArgs {
    #[clap(help = "Log directory to analyze", value_name = "LOG_DIRECTORY")]
    log_dir: PathBuf,

    #[clap(help = "Output JSON file name", value_name = "OUTPUT_FILE")]
    out_file: PathBuf,

    #[clap(help = "Test name to be reported in JSON file")]
    test_name: String,

    #[clap(
        long,
        help = "If set, also write <out_file_dir>/<test_name>_extra_metrics.json with reserved memory peaks and breach flag",
        value_name = "MiB"
    )]
    mem_limit_mib: Option<u64>,
}

fn main() -> anyhow::Result<()> {
    // Matches log lines ending in `process.memory_usage...: <number>`. The log lines are
    // prefixed with a tracing-subscriber timestamp/level/target, so the pattern is not
    // anchored at the start of line.
    const RSS_LOG_PATTERN: &str = r"process\.memory_usage.*:\s\d+$";
    // Matches log lines ending in `<name>(unit)?[labels]: <number>` for the labeled
    // metrics we care about. Captures the metric name and the labels content.
    const LABELED_LOG_PATTERN: &str =
        r"(mem\.bytes_reserved|pool\.reserved_bytes)(?:\([^)]*\))?\[([^\]]*)\]:\s(\d+)$";

    let args = CliArgs::parse();
    let paths = fs::read_dir(&args.log_dir)?;
    let rss_re = Regex::new(RSS_LOG_PATTERN)?;
    let labeled_re = Regex::new(LABELED_LOG_PATTERN)?;

    let mut rss_values: Vec<u64> = Vec::new();
    // Peak value (bytes) per (metric_name, labels) pair.
    let mut labeled_peaks: HashMap<(String, String), u64> = HashMap::new();

    // collect metrics from all log files in the given directory
    for path in paths {
        let path = path?;
        let file_type = path.file_type()?;
        if !file_type.is_file() {
            continue;
        }
        let file = File::open(path.path())?;
        let reader = BufReader::new(file);

        for line in reader.lines() {
            let Ok(line) = line else { continue };

            if rss_re.is_match(&line) {
                let iter = line.split_whitespace();
                if let Some(parsed_result) = iter.last().map(|last| last.parse::<u64>()) {
                    let Ok(value) = parsed_result else {
                        return Err(anyhow!("Unable to parse metric value: {}", parsed_result.unwrap_err()));
                    };
                    rss_values.push(value);
                }
            } else if args.mem_limit_mib.is_some()
                && let Some(cap) = labeled_re.captures(&line)
            {
                let name = cap[1].to_string();
                let labels = cap[2].to_string();
                let value: u64 = cap[3]
                    .parse()
                    .map_err(|e| anyhow!("Unable to parse metric value: {}", e))?;
                let entry = labeled_peaks.entry((name, labels)).or_insert(0);
                if value > *entry {
                    *entry = value;
                }
            }
        }
    }

    let peak_rss_bytes = rss_values.iter().max().copied().unwrap_or(0);
    let peak_rss_mib = peak_rss_bytes as f64 / (1024 * 1024) as f64;
    let contents = json!({
        "name": args.test_name,
        "value": peak_rss_mib,
        "unit": "MiB",
    });
    let file = File::create(&args.out_file)?;
    let mut writer = BufWriter::new(file);
    serde_json::to_writer(&mut writer, &contents)?;
    writer.flush()?;

    if let Some(limit_mib) = args.mem_limit_mib {
        let lookup = |name: &str, labels: &str| -> f64 {
            labeled_peaks
                .get(&(name.to_string(), labels.to_string()))
                .copied()
                .map(|v| v as f64 / (1024 * 1024) as f64)
                .unwrap_or(0.0)
        };
        let extra = json!({
            "test": args.test_name,
            "peak_rss_mib": peak_rss_mib,
            "mem_limit_mib": limit_mib,
            "breached": peak_rss_mib > limit_mib as f64,
            "peak_prefetch_reserved_mib": lookup("mem.bytes_reserved", "area=prefetch"),
            "peak_upload_reserved_mib": lookup("mem.bytes_reserved", "area=upload"),
            "peak_pool_get_object_mib": lookup("pool.reserved_bytes", "kind=get_object"),
            "peak_pool_put_object_mib": lookup("pool.reserved_bytes", "kind=put_object"),
        });
        let dir = args.out_file.parent().unwrap_or_else(|| std::path::Path::new("."));
        let extra_path = dir.join(format!("{}_extra_metrics.json", args.test_name));
        let file = File::create(&extra_path)?;
        let mut writer = BufWriter::new(file);
        serde_json::to_writer(&mut writer, &extra)?;
        writer.flush()?;
    }

    Ok(())
}
