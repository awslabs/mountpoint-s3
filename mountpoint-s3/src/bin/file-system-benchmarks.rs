use anyhow::{anyhow, Result};
use clap::{Parser, ValueEnum};
use serde::Serialize;
use serde_json::json;
use statistical::mean;
use std::{
    fs::{self, File, OpenOptions},
    io::{BufWriter, Write},
    path::PathBuf,
    time::Instant,
};

#[derive(Parser, Debug, Clone, ValueEnum)]
enum BenchmarkType {
    OneByteFile,
    All,
}

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
    unit: String,
}

fn one_byte_file_creation_benchmark(
    mount_dir_str: &str,
    num_files: u32,
    include_breakdown: bool,
) -> Result<Vec<BenchmarkResult>> {
    file_creation_benchmark(mount_dir_str, num_files, include_breakdown, "One Byte File Creation", 1)
}

fn file_creation_benchmark(
    mount_dir_str: &str,
    num_files: u32,
    include_breakdown: bool,
    benchmark_name: &str,
    file_size: u64, // In bytes
) -> Result<Vec<BenchmarkResult>> {
    const NANOS_PER_MILLI: f64 = 1_000_000.0;

    let mut lookup_latency_samples = vec![];
    let mut open_latency_samples = vec![];
    let mut write_latency_samples = vec![];
    let mut flush_latency_samples = vec![];
    let mut total_latency_samples = vec![];

    for file_number in 1..=num_files {
        let mut elapsed_total_ms: f64 = 0.0;
        let path = format!("{mount_dir_str}/bench_file_{file_number}");

        // Perform and time the lookup operation
        let start = Instant::now();
        let _ = fs::metadata(path.clone());
        let elapsed_ms = start.elapsed().as_nanos() as f64 / NANOS_PER_MILLI;
        lookup_latency_samples.push(elapsed_ms);
        elapsed_total_ms += elapsed_ms;

        // Perform and time the open operation
        let mut open = OpenOptions::new();
        open.create(true);
        open.truncate(true);
        open.write(true);
        open.read(true);
        let start = Instant::now();
        let mut file = open
            .open(path.clone())
            .map_err(|e| anyhow::anyhow!("Failed to open file {}: {}", path, e))?;
        let elapsed_ms = start.elapsed().as_nanos() as f64 / NANOS_PER_MILLI;
        open_latency_samples.push(elapsed_ms);
        elapsed_total_ms += elapsed_ms;

        // Perform and time the writing operation
        let start = Instant::now();
        file.write_all(&vec![0u8; file_size as usize])
            .map_err(|e| anyhow::anyhow!("Failed to write to file {}: {}", path, e))?;
        let elapsed_ms = start.elapsed().as_nanos() as f64 / NANOS_PER_MILLI;
        write_latency_samples.push(elapsed_ms);
        elapsed_total_ms += elapsed_ms;

        // Perform and time the flush operation
        let start = Instant::now();
        drop(file);
        let elapsed_ms = start.elapsed().as_nanos() as f64 / NANOS_PER_MILLI;
        flush_latency_samples.push(elapsed_ms);
        elapsed_total_ms += elapsed_ms;

        total_latency_samples.push(elapsed_total_ms);

        fs::remove_file(path.clone()).map_err(|e| anyhow::anyhow!("Failed to remove file {}: {}", path, e))?;
    }

    let total_latency_result = BenchmarkResult {
        name: format!("{benchmark_name} - Average Total Latency"),
        value: mean(&total_latency_samples),
        unit: "milliseconds".to_string(),
    };

    if !include_breakdown {
        Ok(vec![total_latency_result])
    } else {
        Ok(vec![
            total_latency_result,
            BenchmarkResult {
                name: format!("{benchmark_name} - Average Lookup Latency"),
                value: mean(&lookup_latency_samples),
                unit: "milliseconds".to_string(),
            },
            BenchmarkResult {
                name: format!("{benchmark_name} - Average Open Latency"),
                value: mean(&open_latency_samples),
                unit: "milliseconds".to_string(),
            },
            BenchmarkResult {
                name: format!("{benchmark_name} - Average Write Latency"),
                value: mean(&write_latency_samples),
                unit: "milliseconds".to_string(),
            },
            BenchmarkResult {
                name: format!("{benchmark_name} - Average Flush Latency"),
                value: mean(&flush_latency_samples),
                unit: "milliseconds".to_string(),
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
    let mount_dir_os_str = mount_dir.into_os_string();
    let mount_dir_str = mount_dir_os_str
        .to_str()
        .ok_or_else(|| anyhow!("Invalid UTF-8 in mount directory path"))?;

    const NUM_FILES: u32 = 100;
    let benchmark_results = match benchmark_type {
        BenchmarkType::OneByteFile => one_byte_file_creation_benchmark(mount_dir_str, NUM_FILES, detailed)?,
        BenchmarkType::All => vec![one_byte_file_creation_benchmark(mount_dir_str, NUM_FILES, detailed)?]
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
