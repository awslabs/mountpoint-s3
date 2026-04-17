//! A helper binary for parsing Mountpoint logs and collecting metrics.
//!
//! Extracts the following peak metrics from Mountpoint log files:
//! - `process.memory_usage` (bytes) — total RSS of the Mountpoint process
//! - `mem.bytes_reserved[area=prefetch]` — memory reserved by the prefetcher (read buffers)
//! - `mem.bytes_reserved[area=upload]` — memory reserved by the uploader (write buffers)
//!
//! The primary output file contains peak RSS (for benchmark charts).
//! An optional `--extra-metrics-dir` writes per-metric JSON files for CI summaries.
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

    #[clap(help = "Output JSON file name for peak memory usage", value_name = "OUTPUT_FILE")]
    out_file: PathBuf,

    #[clap(help = "Test name to be reported in JSON file")]
    test_name: String,

    #[clap(
        long,
        help = "Directory to write extra per-metric JSON files (prefetch_reserved, upload_reserved)",
        value_name = "EXTRA_METRICS_DIR"
    )]
    extra_metrics_dir: Option<PathBuf>,
}

/// Tracks peak values for each metric we care about.
struct MetricCollector {
    /// Peak values for process.memory_usage (in bytes)
    peak_mem_usage: Vec<u64>,
    /// Peak value for mem.bytes_reserved[area=prefetch] (gauge, unitless in logs)
    peak_prefetch_reserved: f64,
    /// Peak value for mem.bytes_reserved[area=upload] (gauge, unitless in logs)
    peak_upload_reserved: f64,
}

impl MetricCollector {
    fn new() -> Self {
        Self {
            peak_mem_usage: Vec::new(),
            peak_prefetch_reserved: 0.0,
            peak_upload_reserved: 0.0,
        }
    }
}

fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();

    // Pattern for process.memory_usage — value is in bytes, logged as an integer
    // Example: process.memory_usage(bytes): 1234567
    let mem_usage_pattern = Regex::new(r"process\.memory_usage.*:\s(\d+)$")?;

    // Pattern for mem.bytes_reserved[area=prefetch] — gauge value, logged as a float
    // Example: mem.bytes_reserved[area=prefetch]: 1234567
    let prefetch_reserved_pattern = Regex::new(r"mem\.bytes_reserved\[area=prefetch\]:\s([\d.]+(?:e[+-]?\d+)?)$")?;

    // Pattern for mem.bytes_reserved[area=upload] — gauge value, logged as a float
    // Example: mem.bytes_reserved[area=upload]: 1234567
    let upload_reserved_pattern = Regex::new(r"mem\.bytes_reserved\[area=upload\]:\s([\d.]+(?:e[+-]?\d+)?)$")?;

    let paths = fs::read_dir(&args.log_dir)?;
    let mut collector = MetricCollector::new();

    // Collect metrics from all log files in the given directory
    for path in paths {
        let path = path?;
        let file_type = path.file_type()?;
        if file_type.is_file() {
            let file = File::open(path.path())?;
            let reader = BufReader::new(file);

            for line in reader.lines() {
                let Ok(line) = line else {
                    continue;
                };

                // Check for process.memory_usage
                if let Some(caps) = mem_usage_pattern.captures(&line) {
                    if let Some(value_str) = caps.get(1) {
                        let value: u64 = value_str.as_str().parse().map_err(|e| {
                            anyhow!("Unable to parse process.memory_usage value '{}': {}", value_str.as_str(), e)
                        })?;
                        collector.peak_mem_usage.push(value);
                    }
                }

                // Check for mem.bytes_reserved[area=prefetch]
                if let Some(caps) = prefetch_reserved_pattern.captures(&line) {
                    if let Some(value_str) = caps.get(1) {
                        let value: f64 = value_str.as_str().parse().map_err(|e| {
                            anyhow!(
                                "Unable to parse prefetch reserved value '{}': {}",
                                value_str.as_str(),
                                e
                            )
                        })?;
                        if value > collector.peak_prefetch_reserved {
                            collector.peak_prefetch_reserved = value;
                        }
                    }
                }

                // Check for mem.bytes_reserved[area=upload]
                if let Some(caps) = upload_reserved_pattern.captures(&line) {
                    if let Some(value_str) = caps.get(1) {
                        let value: f64 = value_str.as_str().parse().map_err(|e| {
                            anyhow!("Unable to parse upload reserved value '{}': {}", value_str.as_str(), e)
                        })?;
                        if value > collector.peak_upload_reserved {
                            collector.peak_upload_reserved = value;
                        }
                    }
                }
            }
        }
    }

    // Write peak memory usage (primary output, used by benchmark charts)
    let peak_mem_mib = if let Some(value) = collector.peak_mem_usage.iter().max() {
        *value as f64 / (1024 * 1024) as f64
    } else {
        0.0
    };
    let contents = json!({
        "name": args.test_name,
        "value": peak_mem_mib,
        "unit": "MiB",
    });
    let file = File::create(&args.out_file)?;
    let mut writer = BufWriter::new(file);
    serde_json::to_writer(&mut writer, &contents)?;
    writer.flush()?;

    // Write extra per-metric files if requested (for CI summary tables)
    if let Some(extra_dir) = &args.extra_metrics_dir {
        fs::create_dir_all(extra_dir)?;

        let peak_prefetch_mib = collector.peak_prefetch_reserved / (1024.0 * 1024.0);
        let peak_upload_mib = collector.peak_upload_reserved / (1024.0 * 1024.0);

        let extra_metrics: HashMap<&str, f64> = HashMap::from([
            ("prefetch_reserved", peak_prefetch_mib),
            ("upload_reserved", peak_upload_mib),
        ]);

        for (metric_name, value) in &extra_metrics {
            let contents = json!({
                "name": args.test_name,
                "value": value,
                "unit": "MiB",
            });
            let file_path = extra_dir.join(format!("{}_{}.json", args.test_name, metric_name));
            let file = File::create(&file_path)?;
            let mut writer = BufWriter::new(file);
            serde_json::to_writer(&mut writer, &contents)?;
            writer.flush()?;
        }
    }

    Ok(())
}
