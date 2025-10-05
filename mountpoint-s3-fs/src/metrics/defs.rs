use ::metrics::Unit;
use std::str::FromStr;
use strum::{AsRefStr, EnumIter, EnumString};

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

#[derive(Debug, Clone, Copy, AsRefStr, EnumIter, EnumString)]
#[strum(serialize_all = "snake_case")]
#[strum(prefix = "fuse.")]
pub enum FuseMetric {
    IdleThreads,
    IoSize,
    RequestFailure,
    RequestLatency,
}

#[derive(Debug, Clone, Copy, AsRefStr, EnumIter, EnumString)]
#[strum(serialize_all = "snake_case")]
#[strum(prefix = "s3.")]
pub enum S3Metric {
    RequestCanceled,
    RequestCount,
    RequestFailure,
    RequestFirstByteLatency,
    RequestTotalLatency,
}

#[derive(Debug, Clone, Copy, AsRefStr, EnumIter, EnumString)]
#[strum(serialize_all = "snake_case")]
#[strum(prefix = "process.")]
pub enum ProcessMetric {
    MemoryUsage,
}

#[derive(Debug, Clone, Copy, AsRefStr, EnumIter, EnumString)]
#[strum(serialize_all = "snake_case")]
pub enum Attribute {
    FuseRequest,
    S3Error,
    S3Request,
    SeekDirection,
}

pub const FUSE_REQUEST: &str = "fuse.request";
pub const S3_REQUEST: &str = "s3.request";
pub const S3_ERROR: &str = "s3.error";

#[derive(Debug, Clone, Copy)]
pub enum MetricGroup {
    Fuse(FuseMetric),
    S3(S3Metric),
    Process(ProcessMetric),
}

impl MetricGroup {
    pub fn parse(s: &str) -> Result<Self, strum::ParseError> {
        if let Ok(metric) = FuseMetric::from_str(s) {
            return Ok(MetricGroup::Fuse(metric));
        }
        if let Ok(metric) = S3Metric::from_str(s) {
            return Ok(MetricGroup::S3(metric));
        }
        if let Ok(metric) = ProcessMetric::from_str(s) {
            return Ok(MetricGroup::Process(metric));
        }
        Err(strum::ParseError::VariantNotFound)
    }
}

pub fn lookup_config(metric_str: &str) -> MetricConfig {
    use MetricStability::*;
    use Unit::*;

    match MetricGroup::parse(metric_str) {
        Ok(group) => match group {
            MetricGroup::Fuse(metric) => match metric {
                FuseMetric::RequestLatency => MetricConfig {
                    unit: Microseconds,
                    stability: Stable,
                    otlp_attributes: &[FUSE_REQUEST],
                },
                FuseMetric::IoSize => MetricConfig {
                    unit: Bytes,
                    stability: Stable,
                    otlp_attributes: &[FUSE_REQUEST],
                },
                FuseMetric::RequestFailure => MetricConfig {
                    unit: Count,
                    stability: Stable,
                    otlp_attributes: &[FUSE_REQUEST],
                },
                FuseMetric::IdleThreads => MetricConfig {
                    unit: Count,
                    stability: Experimental,
                    otlp_attributes: &[FUSE_REQUEST],
                },
            },
            MetricGroup::S3(metric) => match metric {
                S3Metric::RequestCount => MetricConfig {
                    unit: Count,
                    stability: Stable,
                    otlp_attributes: &[S3_REQUEST],
                },
                S3Metric::RequestFailure => MetricConfig {
                    unit: Count,
                    stability: Stable,
                    otlp_attributes: &[S3_REQUEST, S3_ERROR],
                },
                S3Metric::RequestCanceled => MetricConfig {
                    unit: Count,
                    stability: Experimental,
                    otlp_attributes: &[S3_REQUEST],
                },
                S3Metric::RequestFirstByteLatency => MetricConfig {
                    unit: Microseconds,
                    stability: Experimental,
                    otlp_attributes: &[S3_REQUEST],
                },
                S3Metric::RequestTotalLatency => MetricConfig {
                    unit: Microseconds,
                    stability: Stable,
                    otlp_attributes: &[S3_REQUEST],
                },
            },
            MetricGroup::Process(metric) => match metric {
                ProcessMetric::MemoryUsage => MetricConfig {
                    unit: Bytes,
                    stability: Stable,
                    otlp_attributes: &[],
                },
            },
        },
        Err(_) => MetricConfig {
            unit: Count,
            stability: Internal,
            otlp_attributes: &[],
        },
    }
}

pub fn to_ucum(unit: Unit) -> &'static str {
    match unit {
        Unit::Nanoseconds => "ns",
        Unit::Microseconds => "us",
        Unit::Milliseconds => "ms",
        Unit::Seconds => "s",
        Unit::Bytes => "By",
        Unit::Count => "1",
        _ => "1",
    }
}
