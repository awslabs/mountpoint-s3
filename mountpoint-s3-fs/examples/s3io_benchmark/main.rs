mod config;
mod executor;
mod monitoring;
mod results;
mod test_object_generator;

use anyhow::{Context, Result};
use clap::Parser;
use std::path::PathBuf;
use std::process;
use std::sync::Arc;
use std::time::Instant;

use config::{WorkloadType, parse_config_file, prepare_jobs};
use executor::Executor;
use monitoring::MemoryMonitor;
use results::BenchmarkResults;

#[derive(Parser, Debug)]
#[command(name = "s3io_benchmark")]
#[command(about = "Mountpoint S3 I/O benchmark tool. Runs workloads against the prefetcher/uploader component of Mountpoint. Fetched data is discarded.", long_about = None)]
#[command(version)]
struct Cli {
    /// Path to TOML configuration file
    #[arg(value_name = "CONFIG")]
    config_file: PathBuf,
}

#[tokio::main]
async fn main() {
    // Run the benchmark and handle errors
    if let Err(e) = run_benchmark().await {
        eprintln!("Error: {:?}", e);
        process::exit(1);
    }
}

async fn run_benchmark() -> Result<()> {
    let cli = Cli::parse();

    eprintln!("S3 I/O Benchmark");
    eprintln!("Config file: {:?}", cli.config_file);
    eprintln!();

    eprintln!("Loading configuration...");
    let config = parse_config_file(&cli.config_file).context("Failed to load configuration file")?;

    eprintln!("Preparing and validating jobs...");
    let resolved_jobs = prepare_jobs(config.clone()).await.context("Failed to prepare jobs")?;

    eprintln!("Found {} job(s) to execute", resolved_jobs.len());

    // Fail if no jobs are defined
    if resolved_jobs.is_empty() {
        anyhow::bail!("No jobs defined in configuration file");
    }

    eprintln!("Creating shared resources...");
    let executor = Arc::new(Executor::new(&config.global).context("Failed to create executor")?);

    // Start memory monitoring
    let mut memory_monitor = MemoryMonitor::default();
    memory_monitor.start(config.global.memory_monitor_interval);

    eprintln!("Executing jobs...");
    let mut handles = Vec::new();
    for job in resolved_jobs {
        let executor = Arc::clone(&executor);
        let job_config = job.clone();

        let handle = tokio::spawn(async move {
            let job_name = job_config.name.clone();
            let start = Instant::now();

            // Execute the job based on workload type
            let result = match job_config.workload_type {
                WorkloadType::Read => executor.execute_read_job(&job_config).await,
                WorkloadType::Write => executor.execute_write_job(&job_config).await,
            };

            let duration = start.elapsed();

            (job_name, result, duration)
        });

        handles.push(handle);
    }

    // Collect results from all tasks
    let mut job_results = Vec::new();
    for handle in handles {
        match handle.await {
            Ok((job_name, Ok(result), duration)) => {
                // Print per-job result
                eprintln!(
                    "Job '{}' completed: {} iterations, {:.2} GB, {:.2}s",
                    job_name,
                    result.iterations_completed,
                    result.total_bytes as f64 / 1_000_000_000.0,
                    duration.as_secs_f64()
                );
                job_results.push(result);
            }
            Ok((job_name, Err(e), _duration)) => {
                eprintln!("Job '{}' failed: {}", job_name, e);
            }
            Err(e) => {
                eprintln!("Task panic: {}", e);
            }
        }
    }

    // Stop memory monitoring and get peak memory
    memory_monitor.stop();
    let peak_memory_mib = memory_monitor.peak_memory_mib();

    eprintln!("Completed {} job(s)", job_results.len());
    eprintln!();
    eprintln!("Aggregating results...");
    let benchmark_results = BenchmarkResults::aggregate(job_results, peak_memory_mib);
    let output_file = config.global.output_file.as_deref();
    if let Some(path) = output_file {
        eprintln!("Writing results to: {}", path);
    } else {
        eprintln!("Writing results to stdout");
        eprintln!();
    }

    benchmark_results
        .write_json(output_file)
        .context("Failed to write results")?;

    eprintln!();
    eprintln!("Benchmark complete!");
    eprintln!("  Total bytes: {}", benchmark_results.summary.total_bytes);
    eprintln!(
        "  Duration: {:.2}s",
        benchmark_results.summary.total_elapsed_seconds.as_secs_f64()
    );
    eprintln!("  Total errors: {}", benchmark_results.summary.total_errors);
    eprintln!("  Peak memory: {:.2} MiB", benchmark_results.summary.peak_memory_mib);

    Ok(())
}
