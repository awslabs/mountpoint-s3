use metrics::Unit;
pub use mountpoint_s3_client::metrics::{
    ATTR_HTTP_STATUS, ATTR_S3_REQUEST, S3_REQUEST_COUNT, S3_REQUEST_ERRORS, S3_REQUEST_FIRST_BYTE_LATENCY,
    S3_REQUEST_TOTAL_LATENCY,
};

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum MetricStability {
    Stable,
    Experimental,
    Internal,
}

#[derive(Debug, Clone, Copy)]
pub struct MetricConfig {
    pub unit: Unit,
    pub stability: MetricStability,
    pub otlp_attributes: &'static [&'static str],
}

// Metric name constants
pub const FUSE_REQUEST_LATENCY: &str = "fuse.request_latency";
pub const FUSE_IO_SIZE: &str = "fuse.io_size";
pub const FUSE_REQUEST_ERRORS: &str = "fuse.request_errors";
pub const FUSE_IDLE_THREADS: &str = "fuse.idle_threads";
pub const FUSE_TOTAL_THREADS: &str = "fuse.total_threads";

pub const PROCESS_MEMORY_USAGE: &str = "process.memory_usage";

pub const PREFETCH_RESET_STATE: &str = "prefetch.reset_state";

// Cache metric constants
pub const CACHE_GET_IO_SIZE: &str = "cache.get_io_size";
pub const CACHE_PUT_IO_SIZE: &str = "cache.put_io_size";
pub const CACHE_GET_LATENCY: &str = "cache.get_latency";
pub const CACHE_PUT_LATENCY: &str = "cache.put_latency";
pub const CACHE_GET_ERRORS: &str = "cache.get_errors";
pub const CACHE_PUT_ERRORS: &str = "cache.put_errors";
pub const CACHE_TOTAL_SIZE: &str = "cache.total_size";
pub const CACHE_EVICT_LATENCY: &str = "cache.evict_latency";
pub const CACHE_BLOCK_HIT: &str = "cache.block_hit";
pub const CACHE_OVERSIZED_OBJECTS: &str = "cache.oversized_objects";

// Attribute constants
pub const ATTR_FUSE_REQUEST: &str = "fuse_request";
pub const ATTR_CACHE: &str = "cache";

// Cache type constants
pub const CACHE_DISK: &str = "disk";
pub const CACHE_EXPRESS: &str = "express";

pub fn lookup_config(name: &str) -> MetricConfig {
    match name {
        FUSE_REQUEST_LATENCY => MetricConfig {
            unit: Unit::Microseconds,
            stability: MetricStability::Stable,
            otlp_attributes: &[ATTR_FUSE_REQUEST],
        },
        FUSE_IO_SIZE => MetricConfig {
            unit: Unit::Bytes,
            stability: MetricStability::Stable,
            otlp_attributes: &[ATTR_FUSE_REQUEST],
        },
        FUSE_REQUEST_ERRORS => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Stable,
            otlp_attributes: &[ATTR_FUSE_REQUEST],
        },
        FUSE_IDLE_THREADS => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Experimental,
            otlp_attributes: &[],
        },
        FUSE_TOTAL_THREADS => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Experimental,
            otlp_attributes: &[],
        },
        S3_REQUEST_COUNT => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Stable,
            otlp_attributes: &[ATTR_S3_REQUEST],
        },
        S3_REQUEST_ERRORS => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Stable,
            otlp_attributes: &[ATTR_S3_REQUEST, ATTR_HTTP_STATUS],
        },
        S3_REQUEST_TOTAL_LATENCY => MetricConfig {
            unit: Unit::Microseconds,
            stability: MetricStability::Stable,
            otlp_attributes: &[ATTR_S3_REQUEST],
        },
        S3_REQUEST_FIRST_BYTE_LATENCY => MetricConfig {
            unit: Unit::Microseconds,
            stability: MetricStability::Stable,
            otlp_attributes: &[ATTR_S3_REQUEST],
        },
        PROCESS_MEMORY_USAGE => MetricConfig {
            unit: Unit::Bytes,
            stability: MetricStability::Stable,
            otlp_attributes: &[],
        },
        PREFETCH_RESET_STATE => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Experimental,
            otlp_attributes: &[],
        },
        // Treat everything else as count metrics
        _ => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Internal,
            otlp_attributes: &[],
        },
    }
}

// UCUM units for OTel integration
// https://opentelemetry.io/docs/specs/semconv/general/metrics/#instrument-units
pub fn to_ucum(unit: Unit) -> &'static str {
    match unit {
        Unit::Microseconds => "us",
        Unit::Bytes => "By",
        Unit::Count => "1",
        // Default everything else to Count
        _ => "1",
    }
}
