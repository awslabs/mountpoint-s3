//! A helper binary for parsing Mountpoint logs and collecting metrics.
//!
//! Extracts the following peak metrics from Mountpoint log files:
//! - `process.memory_usage` (bytes) — total RSS of the Mountpoint process
//! - `mem.bytes_reserved[area=prefetch]` — memory reserved by the MemoryLimiter for read buffers
//! - `mem.bytes_reserved[area=upload]` — memory reserved by the MemoryLimiter for write buffers (incremental uploads)
//! - `pool.reserved_bytes[kind=get_object]` — pool memory reserved for download (GetObject) buffers
//! - `pool.reserved_bytes[kind=put_object]` — pool memory reserved for upload (PutObject/MPU) buffers
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
        help = "Directory to write extra per-metric JSON files for CI summaries",
        value_name = "EXTRA_METRICS_DIR"
    )]
    extra_metrics_dir: Option<PathBuf>,
}

/// Tracks peak values for each metric we care about.
struct MetricCollector {
    /// Peak values for process.memory_usage (in bytes)
    peak_mem_usage: Vec<u64>,
    /// Peak value for mem.bytes_reserved[area=prefetch] (bytes, gauge)
    peak_prefetch_reserved: f64,
    /// Peak value for mem.bytes_reserved[area=upload] (bytes, gauge)
    peak_upload_reserved: f64,
    /// Peak value for pool.reserved_bytes[kind=get_object] (bytes, gauge)
    peak_pool_get_object: f64,
    /// Peak value for pool.reserved_bytes[kind=put_object] (bytes, gauge)
    peak_pool_put_object: f64,
}

impl MetricCollector {
    fn new() -> Self {
        Self {
            peak_mem_usage: Vec::new(),
            peak_prefetch_reserved: 0.0,
            peak_upload_reserved: 0.0,
            peak_pool_get_object: 0.0,
            peak_pool_put_object: 0.0,
        }
    }

    /// Update a peak value if the new value is larger.
    fn update_peak(current: &mut f64, new_value: f64) {
        if new_value > *current {
            *current = new_value;
        }
    }
}

/// Parse a float value from a regex capture group.
fn parse_f64_capture(caps: &regex::Captures, group: usize, metric_name: &str) -> anyhow::Result<Option<f64>> {
    match caps.get(group) {
        Some(value_str) => {
            let value: f64 = value_str
                .as_str()
                .parse()
                .map_err(|e| anyhow!("Unable to parse {} value '{}': {}", metric_name, value_str.as_str(), e))?;
            Ok(Some(value))
        }
        None => Ok(None),
    }
}

fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();

    // Pattern for process.memory_usage — value is in bytes, logged as an integer
    // Example: process.memory_usage(bytes): 1234567
    let mem_usage_pattern = Regex::new(r"process\.memory_usage.*:\s(\d+)$")?;

    // Pattern for mem.bytes_reserved[area=prefetch] — gauge value
    // Example: mem.bytes_reserved[area=prefetch]: 1234567
    let prefetch_reserved_pattern = Regex::new(r"mem\.bytes_reserved\[area=prefetch\]:\s([\d.]+(?:e[+-]?\d+)?)$")?;

    // Pattern for mem.bytes_reserved[area=upload] — gauge value
    // Example: mem.bytes_reserved[area=upload]: 1234567
    let upload_reserved_pattern = Regex::new(r"mem\.bytes_reserved\[area=upload\]:\s([\d.]+(?:e[+-]?\d+)?)$")?;

    // Pattern for pool.reserved_bytes[kind=get_object] — gauge value
    // Example: pool.reserved_bytes[kind=get_object]: 1234567
    let pool_get_object_pattern = Regex::new(r"pool\.reserved_bytes\[kind=get_object\]:\s([\d.]+(?:e[+-]?\d+)?)$")?;

    // Pattern for pool.reserved_bytes[kind=put_object] — gauge value
    // Example: pool.reserved_bytes[kind=put_object]: 1234567
    let pool_put_object_pattern = Regex::new(r"pool\.reserved_bytes\[kind=put_object\]:\s([\d.]+(?:e[+-]?\d+)?)$")?;

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
                    if let Some(value) = parse_f64_capture(&caps, 1, "prefetch_reserved")? {
                        MetricCollector::update_peak(&mut collector.peak_prefetch_reserved, value);
                    }
                }

                // Check for mem.bytes_reserved[area=upload]
                if let Some(caps) = upload_reserved_pattern.captures(&line) {
                    if let Some(value) = parse_f64_capture(&caps, 1, "upload_reserved")? {
                        MetricCollector::update_peak(&mut collector.peak_upload_reserved, value);
                    }
                }

                // Check for pool.reserved_bytes[kind=get_object]
                if let Some(caps) = pool_get_object_pattern.captures(&line) {
                    if let Some(value) = parse_f64_capture(&caps, 1, "pool_get_object")? {
                        MetricCollector::update_peak(&mut collector.peak_pool_get_object, value);
                    }
                }

                // Check for pool.reserved_bytes[kind=put_object]
                if let Some(caps) = pool_put_object_pattern.captures(&line) {
                    if let Some(value) = parse_f64_capture(&caps, 1, "pool_put_object")? {
                        MetricCollector::update_peak(&mut collector.peak_pool_put_object, value);
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

        let to_mib = |bytes: f64| bytes / (1024.0 * 1024.0);

        let extra_metrics: HashMap<&str, f64> = HashMap::from([
            ("prefetch_reserved", to_mib(collector.peak_prefetch_reserved)),
            ("upload_reserved", to_mib(collector.peak_upload_reserved)),
            ("pool_get_object", to_mib(collector.peak_pool_get_object)),
            ("pool_put_object", to_mib(collector.peak_pool_put_object)),
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
