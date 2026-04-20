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

fn bytes_to_mib(bytes: u64) -> f64 {
    bytes as f64 / (1024.0 * 1024.0)
}

fn analyze(log_dir: &PathBuf) -> anyhow::Result<(u64, HashMap<(String, String), u64>)> {
    // Matches: `process.memory_usage: 12345`
    let rss_re = Regex::new(r"^process\.memory_usage(?:\([^)]*\))?:\s+(\d+)$")?;
    // Matches: `<name>(unit)?[labels]?: 12345` for the labeled metrics we care about.
    let labeled_re =
        Regex::new(r"^(mem\.bytes_reserved|pool\.reserved_bytes)(?:\([^)]*\))?\[([^\]]*)\]:\s+(\d+)$")?;

    let mut peak_rss: u64 = 0;
    let mut peaks: HashMap<(String, String), u64> = HashMap::new();

    for path in fs::read_dir(log_dir)? {
        let path = path?;
        if !path.file_type()?.is_file() {
            continue;
        }
        let file = File::open(path.path())?;
        let reader = BufReader::new(file);
        for line in reader.lines() {
            let Ok(line) = line else { continue };
            let line = line.trim_end();
            if let Some(cap) = rss_re.captures(line) {
                let v: u64 = cap[1]
                    .parse()
                    .map_err(|e| anyhow!("Unable to parse RSS value: {}", e))?;
                if v > peak_rss {
                    peak_rss = v;
                }
            } else if let Some(cap) = labeled_re.captures(line) {
                let name = cap[1].to_string();
                let labels = cap[2].to_string();
                let v: u64 = cap[3]
                    .parse()
                    .map_err(|e| anyhow!("Unable to parse metric value: {}", e))?;
                let entry = peaks.entry((name, labels)).or_insert(0);
                if v > *entry {
                    *entry = v;
                }
            }
        }
    }

    Ok((peak_rss, peaks))
}

fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();
    let (peak_rss, peaks) = analyze(&args.log_dir)?;

    // Existing output: peak RSS in MiB.
    let peak_rss_mib = bytes_to_mib(peak_rss);
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
            peaks
                .get(&(name.to_string(), labels.to_string()))
                .copied()
                .map(bytes_to_mib)
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

