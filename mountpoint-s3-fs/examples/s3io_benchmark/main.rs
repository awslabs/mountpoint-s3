mod config;
mod executor;
mod results;

use anyhow::{Context, Result};
use clap::Parser;
use std::path::PathBuf;
use std::process;
use std::sync::Arc;
use std::time::Instant;

use config::{WorkloadType, parse_config_file, prepare_jobs, validate_config};
use executor::{create_shared_resources, execute_read_job, execute_write_job};
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
        eprintln!("Error: {}", e);
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

    eprintln!("Validating configuration...");
    validate_config(&config).context("Configuration validation failed")?;

    eprintln!("Preparing jobs...");
    let resolved_jobs = prepare_jobs(config.clone()).context("Failed to prepare jobs")?;

    eprintln!("Found {} job(s) to execute", resolved_jobs.len());

    // Fail if no jobs are defined
    if resolved_jobs.is_empty() {
        anyhow::bail!("No jobs defined in configuration file");
    }

    eprintln!("Creating shared resources...");
    let shared_resources =
        Arc::new(create_shared_resources(&resolved_jobs[0]).context("Failed to create shared resources")?);

    eprintln!("Executing jobs...");
    let mut handles = Vec::new();
    for job in resolved_jobs {
        let resources = Arc::clone(&shared_resources);
        let job_config = job.clone();

        let handle = tokio::spawn(async move {
            let job_name = job_config.name.clone();
            let start = Instant::now();

            // Execute the job based on workload type
            let result = match job_config.workload_type {
                WorkloadType::Read => execute_read_job(&job_config, &resources).await,
                WorkloadType::Write => execute_write_job(&job_config, &resources).await,
            };

            let duration = start.elapsed();

            // Print per-job result
            match &result {
                Ok(job_result) => {
                    eprintln!(
                        "Job '{}' completed: {} iterations, {:.2} GB, {:.2}s",
                        job_name,
                        job_result.iterations_completed,
                        job_result.total_bytes as f64 / 1_000_000_000.0,
                        duration.as_secs_f64()
                    );
                }
                Err(e) => {
                    eprintln!("Job '{}' failed: {}", job_name, e);
                }
            }

            result
        });

        handles.push(handle);
    }

    // Collect results from all tasks
    let mut job_results = Vec::new();
    for handle in handles {
        match handle.await {
            Ok(Ok(result)) => {
                job_results.push(result);
            }
            Ok(Err(e)) => {
                eprintln!("Job execution error: {}", e);
            }
            Err(e) => {
                eprintln!("Task panic: {}", e);
            }
        }
    }

    eprintln!("Completed {} job(s)", job_results.len());
    eprintln!();
    eprintln!("Aggregating results...");
    let benchmark_results = BenchmarkResults::aggregate(job_results);
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
    eprintln!("  Duration: {:.2}s", benchmark_results.summary.total_elapsed_seconds);
    eprintln!("  Total errors: {}", benchmark_results.summary.total_errors);

    Ok(())
}
