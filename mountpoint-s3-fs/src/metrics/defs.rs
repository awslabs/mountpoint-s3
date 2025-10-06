use ::metrics::Unit;
use std::str::FromStr;
use strum::{AsRefStr, Display, EnumIter, EnumString};

#[derive(Debug, Clone, Copy, PartialEq, Eq, AsRefStr)]
#[strum(serialize_all = "snake_case")]
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

#[derive(Debug, Clone, Copy, Display, AsRefStr, EnumIter, EnumString, PartialEq)]
#[strum(serialize_all = "snake_case")]
pub enum MetricAttribute {
    FuseRequest,
    S3Request,
    S3Error,
}

impl MetricAttribute {
    pub fn get_attributes(&self) -> &'static [&'static str] {
        match self {
            Self::FuseRequest => &["fuse_request"],
            Self::S3Request => &["s3_request"],
            Self::S3Error => &["s3_request", "s3_error"],
        }
    }
}

#[derive(Debug, Clone, Copy, Display, AsRefStr, EnumIter, EnumString, PartialEq)]
#[strum(serialize_all = "snake_case")]
#[strum(prefix = "fuse.")]
pub enum FuseMetric {
    IdleThreads,
    IoSize,
    RequestFailure,
    RequestLatency,
}

impl FuseMetric {
    fn get_config(&self) -> MetricConfig {
        match self {
            Self::IdleThreads => MetricConfig {
                stability: MetricStability::Experimental,
                unit: Unit::Count,
                otlp_attributes: &["fuse_request"],
            },
            Self::IoSize => MetricConfig {
                stability: MetricStability::Stable,
                unit: Unit::Bytes,
                otlp_attributes: &["fuse_request"],
            },
            Self::RequestFailure => MetricConfig {
                stability: MetricStability::Stable,
                unit: Unit::Count,
                otlp_attributes: &["fuse_request"],
            },
            Self::RequestLatency => MetricConfig {
                stability: MetricStability::Stable,
                unit: Unit::Microseconds,
                otlp_attributes: &["fuse_request"],
            },
        }
    }
}

#[derive(Debug, Clone, Copy, Display, AsRefStr, EnumIter, EnumString, PartialEq)]
#[strum(serialize_all = "snake_case")]
#[strum(prefix = "s3.")]
pub enum S3Metric {
    RequestCanceled,
    RequestCount,
    RequestFailure,
    RequestFirstByteLatency,
    RequestTotalLatency,
}

impl S3Metric {
    fn get_config(&self) -> MetricConfig {
        match self {
            Self::RequestCanceled => MetricConfig {
                stability: MetricStability::Experimental,
                unit: Unit::Count,
                otlp_attributes: &["s3_request"],
            },
            Self::RequestCount => MetricConfig {
                stability: MetricStability::Stable,
                unit: Unit::Count,
                otlp_attributes: &["s3_request"],
            },
            Self::RequestFailure => MetricConfig {
                stability: MetricStability::Stable,
                unit: Unit::Count,
                otlp_attributes: &["s3_request", "s3_error"],
            },
            Self::RequestFirstByteLatency => MetricConfig {
                stability: MetricStability::Experimental,
                unit: Unit::Microseconds,
                otlp_attributes: &["s3_request"],
            },
            Self::RequestTotalLatency => MetricConfig {
                stability: MetricStability::Stable,
                unit: Unit::Microseconds,
                otlp_attributes: &["s3_request"],
            },
        }
    }
}

#[derive(Debug, Clone, Copy, Display, AsRefStr, EnumIter, EnumString, PartialEq)]
#[strum(serialize_all = "snake_case")]
#[strum(prefix = "process.")]
pub enum ProcessMetric {
    MemoryUsage,
}

impl ProcessMetric {
    fn get_config(&self) -> MetricConfig {
        match self {
            Self::MemoryUsage => MetricConfig {
                stability: MetricStability::Stable,
                unit: Unit::Bytes,
                otlp_attributes: &[],
            },
        }
    }
}

#[derive(Debug, Display, Clone, Copy, PartialEq)]
pub enum MetricGroup {
    Fuse(FuseMetric),
    S3(S3Metric),
    Process(ProcessMetric),
}

impl MetricGroup {
    pub fn parse(s: &str) -> Result<Self, strum::ParseError> {
        match s {
            s if s.starts_with("fuse.") => {
                let without_prefix = s.strip_prefix("fuse.").unwrap();
                FuseMetric::from_str(without_prefix).map(MetricGroup::Fuse)
            }
            s if s.starts_with("s3.") => {
                let without_prefix = s.strip_prefix("s3.").unwrap();
                S3Metric::from_str(without_prefix).map(MetricGroup::S3)
            }
            s if s.starts_with("process.") => {
                let without_prefix = s.strip_prefix("process.").unwrap();
                ProcessMetric::from_str(without_prefix).map(MetricGroup::Process)
            }
            _ => Err(strum::ParseError::VariantNotFound),
        }
    }
}

pub fn lookup_config(metric_str: &str) -> MetricConfig {
    match MetricGroup::parse(metric_str) {
        Ok(group) => match group {
            MetricGroup::Fuse(metric) => metric.get_config(),
            MetricGroup::S3(metric) => metric.get_config(),
            MetricGroup::Process(metric) => metric.get_config(),
        },
        Err(_) => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Internal,
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_strum_strings() {
        let metric = S3Metric::RequestCount;
        assert_eq!(metric.to_string(), "s3.request_count");
        
        let parsed = MetricGroup::parse("s3.request_count");
        assert!(parsed.is_ok());
        if let Ok(MetricGroup::S3(metric)) = parsed {
            assert_eq!(metric, S3Metric::RequestCount);
        }
    }

    #[test]
    fn test_metric_properties() {
        let config = S3Metric::RequestCount.get_config();
        assert_eq!(config.stability, MetricStability::Stable);
        assert_eq!(config.unit, Unit::Count);
        assert_eq!(config.otlp_attributes, &["s3_request"]);

        let config = FuseMetric::RequestLatency.get_config();
        assert_eq!(config.stability, MetricStability::Stable);
        assert_eq!(config.unit, Unit::Microseconds);
        assert_eq!(config.otlp_attributes, &["fuse_request"]);

        let config = ProcessMetric::MemoryUsage.get_config();
        assert_eq!(config.stability, MetricStability::Stable);
        assert_eq!(config.unit, Unit::Bytes);
        assert_eq!(config.otlp_attributes, &[] as &[&str]);
    }

    #[test]
    fn test_lookup_config() {
        let config = lookup_config("s3.request_count");
        assert_eq!(config.stability, MetricStability::Stable);
        assert_eq!(config.unit, Unit::Count);
        assert_eq!(config.otlp_attributes, &["s3_request"]);

        let config = lookup_config("invalid.metric");
        assert_eq!(config.stability, MetricStability::Internal);
        assert_eq!(config.unit, Unit::Count);
        assert_eq!(config.otlp_attributes, &[] as &[&str]);
    }
}
