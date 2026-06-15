//! A helper binary for parsing Mountpoint logs and collecting metrics.
//!
//! Extracts peak memory usage (RSS) from `process.memory_usage` log lines.
//! Optionally, when both `--mem-limit-mib` and `--extra-metrics-out` are provided, also
//! extracts peak values for labeled metrics `mem.bytes_reserved[area=...]` and
//! `pool.reserved_bytes[kind=...]` and writes them to the given path.
//!
//! The extra-metrics file is consumed only by the memory-limited CI jobs'
//! `render-mem-summary.sh` step to populate the GitHub Actions step summary table and
//! is not fed into the gh-pages benchmark charts.
//!
//! This binary is intended only for use in testing and development of Mountpoint.

use std::{
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
        help = "Memory limit (MiB) to compare peak RSS against",
        value_name = "MiB",
        requires = "extra_metrics_out"
    )]
    mem_limit_mib: Option<u64>,

    #[clap(
        long,
        help = "Output path for the JSON file with mem-related metrics",
        value_name = "FILE",
        requires = "mem_limit_mib"
    )]
    extra_metrics_out: Option<PathBuf>,
}

/// Extra memory metrics we track from Mountpoint metric log lines. Each entry is the
/// JSON field name for the peak (in MiB) and the regex matching lines ending in that
/// metric's value (bytes). Absent entries are omitted from `_extra_metrics.json` and
/// rendered as "N/A" in the GH step summary table.
fn mem_metric_patterns() -> Vec<(&'static str, Regex)> {
    vec![
        (
            "peak_prefetch_reserved_mib",
            Regex::new(r"mem\.bytes_reserved\[area=prefetch\]:\s(\d+)$").unwrap(),
        ),
        (
            "peak_upload_reserved_mib",
            Regex::new(r"mem\.bytes_reserved\[area=upload\]:\s(\d+)$").unwrap(),
        ),
        (
            "peak_pool_get_object_mib",
            Regex::new(r"pool\.reserved_bytes\[kind=get_object\]:\s(\d+)$").unwrap(),
        ),
        (
            "peak_pool_put_object_mib",
            Regex::new(r"pool\.reserved_bytes\[kind=put_object\]:\s(\d+)$").unwrap(),
        ),
        (
            "peak_pool_append_mib",
            Regex::new(r"pool\.reserved_bytes\[kind=append\]:\s(\d+)$").unwrap(),
        ),
    ]
}

fn main() -> anyhow::Result<()> {
    const MEM_USAGE_LOG_PATTERN: &str = r"process\.memory_usage.*:\s\d+$";

    let args = CliArgs::parse();
    let paths = fs::read_dir(&args.log_dir)?;
    let log_pattern = Regex::new(MEM_USAGE_LOG_PATTERN)?;
    let mem_metrics = mem_metric_patterns();

    let mut metric_values: Vec<u64> = Vec::new();
    // Peak value (bytes) per mem-metric field; None until first observation.
    let mut mem_metric_peaks: Vec<Option<u64>> = vec![None; mem_metrics.len()];

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

            if log_pattern.is_match(&line) {
                let iter = line.split_whitespace();
                if let Some(parsed_result) = iter.last().map(|last| last.parse::<u64>()) {
                    let Ok(value) = parsed_result else {
                        return Err(anyhow!("Unable to parse metric value: {}", parsed_result.unwrap_err()));
                    };
                    metric_values.push(value);
                }
            } else if args.mem_limit_mib.is_some() {
                for (i, (_, re)) in mem_metrics.iter().enumerate() {
                    if let Some(cap) = re.captures(&line) {
                        let value: u64 = cap[1]
                            .parse()
                            .map_err(|e| anyhow!("Unable to parse metric value: {}", e))?;
                        mem_metric_peaks[i] = mem_metric_peaks[i].max(Some(value));
                        break;
                    }
                }
            }
        }
    }

    let peak_rss_mib = if let Some(value) = metric_values.iter().max() {
        *value as f64 / (1024 * 1024) as f64
    } else {
        0.0
    };
    let contents = json!({
        "name": args.test_name,
        "value": peak_rss_mib,
        "unit": "MiB",
    });
    let file = File::create(&args.out_file)?;
    let mut writer = BufWriter::new(file);
    serde_json::to_writer(&mut writer, &contents)?;
    writer.flush()?;

    if let (Some(limit_mib), Some(extra_path)) = (args.mem_limit_mib, args.extra_metrics_out) {
        let mut extra = serde_json::Map::new();
        extra.insert("test".into(), json!(args.test_name));
        extra.insert("peak_rss_mib".into(), json!(peak_rss_mib));
        extra.insert("mem_limit_mib".into(), json!(limit_mib));
        extra.insert("breached".into(), json!(peak_rss_mib > limit_mib as f64));
        for (i, (field, _)) in mem_metrics.iter().enumerate() {
            if let Some(bytes) = mem_metric_peaks[i] {
                extra.insert((*field).into(), json!(bytes as f64 / (1024 * 1024) as f64));
            }
        }
        let file = File::create(&extra_path)?;
        let mut writer = BufWriter::new(file);
        serde_json::to_writer(&mut writer, &serde_json::Value::Object(extra))?;
        writer.flush()?;
    }

    Ok(())
}
