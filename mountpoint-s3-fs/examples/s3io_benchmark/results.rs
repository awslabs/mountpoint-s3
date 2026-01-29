use serde::Serialize;
use serde_with::{DurationSecondsWithFrac, serde_as};
use std::time::Duration;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum AggregationError {
    #[error("JSON serialization failed: {0}")]
    SerializationError(#[from] serde_json::Error),

    #[error("I/O error: {0}")]
    IoError(#[from] std::io::Error),
}

#[serde_as]
#[derive(Debug, Clone, Serialize)]
pub struct JobResult {
    pub job_name: String,
    pub workload_type: String,
    pub iterations_completed: usize,
    pub total_bytes: u64,
    #[serde_as(as = "DurationSecondsWithFrac<f64>")]
    pub elapsed_seconds: Duration,
    pub errors: Vec<ErrorInfo>,
}

#[derive(Debug, Clone, Serialize)]
pub struct ErrorInfo {
    pub error_type: String,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct BenchmarkResults {
    pub jobs: Vec<JobResult>,
    pub summary: SummaryResult,
}

#[serde_as]
#[derive(Debug, Clone, Serialize)]
pub struct SummaryResult {
    pub total_bytes: u64,
    #[serde_as(as = "DurationSecondsWithFrac<f64>")]
    pub total_elapsed_seconds: Duration,
    pub total_errors: usize,
}

impl BenchmarkResults {
    pub fn aggregate(results: Vec<JobResult>) -> Self {
        let total_bytes: u64 = results.iter().map(|r| r.total_bytes).sum();
        let total_elapsed_seconds = results
            .iter()
            .map(|r| r.elapsed_seconds)
            .max()
            .unwrap_or(Duration::ZERO);
        let total_errors: usize = results.iter().flat_map(|r| &r.errors).count();

        BenchmarkResults {
            jobs: results,
            summary: SummaryResult {
                total_bytes,
                total_elapsed_seconds: total_elapsed_seconds,
                total_errors,
            },
        }
    }

    pub fn write_json(&self, output_file: Option<&str>) -> Result<(), AggregationError> {
        let json = serde_json::to_string_pretty(self)?;

        if let Some(path) = output_file {
            std::fs::write(path, json)?;
        } else {
            println!("{}", json);
        }

        Ok(())
    }
}
