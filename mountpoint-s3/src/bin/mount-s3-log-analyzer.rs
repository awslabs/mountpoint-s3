//! A helper binary for parsing Mountpoint logs and collecting metrics.
//! Currently, we are only interested in peak memory usage from `process.memory_usage`.
//!
//! This binary is intended only for use in testing and development of Mountpoint.

use std::{
    fs::{self, File},
    io::{BufRead, BufReader, BufWriter, Write},
    path::PathBuf,
};

use clap::Parser;
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
        help = "Log filter string [default: process.memory_usage]",
        default_value = "process.memory_usage"
    )]
    log_filter_str: String,
}

fn main() -> anyhow::Result<()> {
    let args = CliArgs::parse();
    let paths = fs::read_dir(args.log_dir)?;

    let mut metric_values: Vec<u64> = Vec::new();

    // collect metrics from all log files in the given directory
    for path in paths {
        let path = path?;
        let file_type = path.file_type()?;
        if file_type.is_file() {
            let file = File::open(path.path())?;
            let reader = BufReader::new(file);

            for line in reader.lines() {
                if line.is_err() {
                    continue;
                }
                let line = line.unwrap();
                if line.contains(&args.log_filter_str) {
                    let iter = line.split_whitespace();
                    if let Some(Ok(value)) = iter.last().map(|last| last.parse::<u64>()) {
                        metric_values.push(value);
                    }
                }
            }
        }
    }

    let max = if let Some(value) = metric_values.iter().max() {
        *value as f64 / (1024 * 1024) as f64
    } else {
        0.0
    };
    let contents = json!({
        "name": args.test_name,
        "value": max,
        "unit": "MiB",
    });
    let file = File::create(args.out_file)?;
    let mut writer = BufWriter::new(file);
    serde_json::to_writer(&mut writer, &contents)?;
    writer.flush()?;
    Ok(())
}
