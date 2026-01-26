use serde::Serialize;
use thiserror::Error;

#[derive(Debug, Error)]
pub enum AggregationError {
    #[error("JSON serialization failed: {0}")]
    SerializationError(#[from] serde_json::Error),

    #[error("I/O error: {0}")]
    IoError(#[from] std::io::Error),
}

#[derive(Debug, Clone, Serialize)]
pub struct JobResult {
    pub job_name: String,
    pub workload_type: String,
    pub iterations_completed: usize,
    pub total_bytes: u64,
    pub elapsed_seconds: f64,
    pub errors: Vec<ErrorInfo>,
}

#[derive(Debug, Clone, Serialize)]
pub struct ErrorInfo {
    pub error_type: String,
    pub count: usize,
    pub message: String,
}

#[derive(Debug, Clone, Serialize)]
pub struct BenchmarkResults {
    pub jobs: Vec<JobResult>,
    pub summary: SummaryResult,
}

#[derive(Debug, Clone, Serialize)]
pub struct SummaryResult {
    pub total_bytes: u64,
    pub total_elapsed_seconds: f64,
    pub total_errors: usize,
}

impl BenchmarkResults {
    pub fn aggregate(results: Vec<JobResult>) -> Self {
        let total_bytes: u64 = results.iter().map(|r| r.total_bytes).sum();
        let max_duration = results
            .iter()
            .map(|r| r.elapsed_seconds)
            .max_by(|a, b| a.partial_cmp(b).unwrap())
            .unwrap_or(0.0);
        let total_errors: usize = results
            .iter()
            .flat_map(|r| &r.errors)
            .map(|e| e.count)
            .sum();

        BenchmarkResults {
            jobs: results,
            summary: SummaryResult {
                total_bytes,
                total_elapsed_seconds: max_duration,
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
