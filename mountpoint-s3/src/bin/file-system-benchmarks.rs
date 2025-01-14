use anyhow::Result;
use clap::{Parser, ValueEnum};
use serde::{Serialize, Serializer};
use serde_json::json;

use std::fs::{self, File, OpenOptions};
use std::io::{BufWriter, Write};
use std::path::{Path, PathBuf};
use std::time::Duration;
use std::time::Instant;

#[derive(Parser, Debug, Clone, ValueEnum)]
enum BenchmarkType {
    OneByteFile,
    All,
}

/// Benchmark tool for measuring the time of Linux file system operations.
#[derive(Parser, Debug)]
struct CliArgs {
    #[clap(help = "Directory of mounted S3 bucket", value_name = "MOUNT_DIRECTORY")]
    mount_dir: PathBuf,

    #[clap(help = "Output JSON file name", value_name = "OUTPUT_FILE")]
    out_file: PathBuf,

    #[clap(value_enum, short, long, help = "Type of benchmark to run", default_value = "all")]
    benchmark_type: BenchmarkType,

    #[clap(long, help = "Include detailed breakdown of operations", default_value = "false")]
    detailed: bool,
}

#[derive(Serialize)]
struct BenchmarkResult {
    name: String,
    value: f64,
    unit: Unit,
}

enum Unit {
    Milliseconds,
}

impl Serialize for Unit {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        match *self {
            Unit::Milliseconds => serializer.serialize_str("milliseconds"),
        }
    }
}

trait DurationExt {
    // This is a temporary alternative to 'as_millis' to avoid loss of precision and should be removed when 'as_millis_f64_temp' is no longer a nightly-only experimental API.
    fn as_millis_f64_temp(&self) -> f64;
}

impl DurationExt for Duration {
    fn as_millis_f64_temp(&self) -> f64 {
        const NANOS_PER_MILLI: f64 = 1_000_000.0;
        self.as_nanos() as f64 / NANOS_PER_MILLI
    }
}

fn mean(v: &[f64]) -> f64 {
    let len = v.len() as f64;
    v.iter().fold(0.0, |acc: f64, elem| acc + *elem) / len
}

fn one_byte_file_creation_benchmark(
    mount_dir: &Path,
    num_files: u32,
    include_breakdown: bool,
) -> Result<Vec<BenchmarkResult>> {
    file_creation_benchmark("One Byte File Creation", mount_dir, num_files, 1, include_breakdown)
}

/// Benchmarks file creation operations by measuring the latency of opening, writing, and flushing files.
///
/// # Arguments
///
/// * `benchmark_name` - A string slice containing the name of the benchmark for result labeling
/// * `mount_dir_str` - A string slice containing the path to the directory where benchmark files will be created
/// * `num_files` - The number of files to create during the benchmark (the creation of these files is done in serial)
/// * `file_len_bytes` - The size of each file to create in bytes
/// * `include_breakdown` - Whether to include detailed timing breakdown in the results
///
/// # Returns
///
/// Returns a `Result<Vec<BenchmarkResult>>` where:
/// * On success: Vector of `BenchmarkResult` containing timing measurements
/// * On error: An `anyhow::Error` describing what went wrong
///
/// # Measurements
///
/// The function measures three distinct operations for each file:
/// * Open latency: Time taken to create and open a new file
/// * Write latency: Time taken to write the specified number of bytes
/// * Flush latency: Time taken to flush and close the file
fn file_creation_benchmark(
    benchmark_name: &str,
    mount_dir: &Path,
    num_files: u32,
    file_size_bytes: u64,
    include_breakdown: bool,
) -> Result<Vec<BenchmarkResult>> {
    let mut open_latency_samples = vec![];
    let mut write_latency_samples = vec![];
    let mut flush_latency_samples = vec![];
    let mut total_latency_samples = vec![];

    for file_number in 1..=num_files {
        let mut elapsed_total_ms: f64 = 0.0;
        let path = mount_dir.join(format!("bench_file_{file_number}"));

        // Perform and time the open operation
        let mut file = {
            let mut open = OpenOptions::new();
            open.create(true);
            open.truncate(true);
            open.write(true);
            open.read(true);

            let start = Instant::now();
            let file = open
                .open(path.clone())
                .map_err(|e| anyhow::anyhow!("Failed to open file {}: {}", path.display(), e))?;
            let elapsed_ms = start.elapsed().as_millis_f64_temp();
            open_latency_samples.push(elapsed_ms);
            elapsed_total_ms += elapsed_ms;
            file
        };

        // Perform and time the writing operation
        {
            let start = Instant::now();
            file.write_all(&vec![0u8; file_size_bytes as usize])
                .map_err(|e| anyhow::anyhow!("Failed to write to file {}: {}", path.display(), e))?;
            let elapsed_ms = start.elapsed().as_millis_f64_temp();
            write_latency_samples.push(elapsed_ms);
            elapsed_total_ms += elapsed_ms;
        };

        // Perform and time the flush operation
        {
            let start = Instant::now();
            drop(file);
            let elapsed_ms = start.elapsed().as_millis_f64_temp();
            flush_latency_samples.push(elapsed_ms);
            elapsed_total_ms += elapsed_ms;
        };

        total_latency_samples.push(elapsed_total_ms);

        fs::remove_file(path.clone())
            .map_err(|e| anyhow::anyhow!("Failed to remove file {}: {}", path.display(), e))?;
    }

    let total_latency_result = BenchmarkResult {
        name: format!("{benchmark_name} - Average Total Latency"),
        value: mean(&total_latency_samples),
        unit: Unit::Milliseconds,
    };

    if !include_breakdown {
        Ok(vec![total_latency_result])
    } else {
        Ok(vec![
            total_latency_result,
            BenchmarkResult {
                name: format!("{benchmark_name} - Average Open Latency"),
                value: mean(&open_latency_samples),
                unit: Unit::Milliseconds,
            },
            BenchmarkResult {
                name: format!("{benchmark_name} - Average Write Latency"),
                value: mean(&write_latency_samples),
                unit: Unit::Milliseconds,
            },
            BenchmarkResult {
                name: format!("{benchmark_name} - Average Flush Latency"),
                value: mean(&flush_latency_samples),
                unit: Unit::Milliseconds,
            },
        ])
    }
}

fn main() -> Result<()> {
    let CliArgs {
        mount_dir,
        out_file,
        benchmark_type,
        detailed,
    } = CliArgs::parse();
    const NUM_FILES: u32 = 100;
    let benchmark_results = match benchmark_type {
        BenchmarkType::OneByteFile => one_byte_file_creation_benchmark(&mount_dir, NUM_FILES, detailed)?,
        BenchmarkType::All => vec![one_byte_file_creation_benchmark(&mount_dir, NUM_FILES, detailed)?]
            .into_iter()
            .flatten()
            .collect(),
    };

    let contents = json!(benchmark_results);
    let file = File::create(out_file)?;
    let mut writer = BufWriter::new(file);
    serde_json::to_writer_pretty(&mut writer, &contents)?;
    writer.flush()?;

    Ok(())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_mean_empty_vector() {
        let numbers: Vec<f64> = vec![];
        assert!((mean(&numbers)).is_nan());
    }

    #[test]
    fn test_mean_single_number() {
        let numbers = vec![42.0];
        assert_eq!(mean(&numbers), 42.0);
    }

    #[test]
    fn test_mean_mixed_numbers() {
        let numbers = vec![-2.0, -1.5, 0.0, 1.0, 2.5];
        assert_eq!(mean(&numbers), 0.0);
    }

    #[test]
    fn test_mean_large_numbers() {
        let numbers = vec![1e7, 2e7, 3e7];
        assert_eq!(mean(&numbers), 2e7);
    }

    #[test]
    fn test_mean_precision() {
        let numbers = vec![1.0 / 3.0, 1.0 / 3.0, 1.0 / 3.0];
        assert!((mean(&numbers) - 1.0 / 3.0).abs() < f64::EPSILON);
    }
}
