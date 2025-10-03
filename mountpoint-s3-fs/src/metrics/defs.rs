#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MetricStability {
    Stable,
    Experimental,
    Internal,
}

#[derive(Debug, Clone, Copy)]
pub struct MetricConfig {
    pub unit: &'static str,
    pub stability: MetricStability,
    pub otlp_attributes: &'static [&'static str],
}

// Metric name constants
pub const FUSE_REQUEST_LATENCY: &str = "fuse.request_latency";
pub const FUSE_IO_SIZE: &str = "fuse.io_size";
pub const FUSE_REQUEST_FAILURE: &str = "fuse.request_failure";
pub const FUSE_IDLE_THREADS: &str = "fuse.idle_threads";

pub const S3_REQUEST_COUNT: &str = "s3.request_count";
pub const S3_REQUEST_FAILURE: &str = "s3.request_failure";
pub const S3_REQUEST_TOTAL_LATENCY: &str = "s3.request_total_latency";
pub const S3_REQUEST_FIRST_BYTE_LATENCY: &str = "s3.request_first_byte_latency";

pub const PROCESS_MEMORY_USAGE: &str = "process.memory_usage";

// Attribute constants
pub const FUSE_REQUEST: &str = "fuse.request";
pub const S3_REQUEST: &str = "s3.request";
pub const S3_ERROR: &str = "s3.error";

pub fn lookup_config(name: &str) -> MetricConfig {
    match name {
        FUSE_REQUEST_LATENCY => MetricConfig {
            unit: "us",
            stability: MetricStability::Stable,
            otlp_attributes: &[FUSE_REQUEST],
        },
        FUSE_IO_SIZE => MetricConfig {
            unit: "By",
            stability: MetricStability::Stable,
            otlp_attributes: &[FUSE_REQUEST],
        },
        FUSE_REQUEST_FAILURE => MetricConfig {
            unit: "",
            stability: MetricStability::Stable,
            otlp_attributes: &[FUSE_REQUEST],
        },
        FUSE_IDLE_THREADS => MetricConfig {
            unit: "",
            stability: MetricStability::Stable,
            otlp_attributes: &[],
        },
        S3_REQUEST_COUNT => MetricConfig {
            unit: "",
            stability: MetricStability::Stable,
            otlp_attributes: &[S3_REQUEST],
        },
        S3_REQUEST_FAILURE => MetricConfig {
            unit: "",
            stability: MetricStability::Stable,
            otlp_attributes: &[S3_REQUEST, S3_ERROR],
        },
        S3_REQUEST_TOTAL_LATENCY => MetricConfig {
            unit: "us",
            stability: MetricStability::Stable,
            otlp_attributes: &[S3_REQUEST],
        },
        S3_REQUEST_FIRST_BYTE_LATENCY => MetricConfig {
            unit: "us",
            stability: MetricStability::Stable,
            otlp_attributes: &[S3_REQUEST],
        },
        PROCESS_MEMORY_USAGE => MetricConfig {
            unit: "By",
            stability: MetricStability::Stable,
            otlp_attributes: &[],
        },
        _ => MetricConfig {
            unit: "",
            stability: MetricStability::Internal,
            otlp_attributes: &[],
        },
    }
}
