use ::metrics::Unit;
use std::str::FromStr;
use strum::{AsRefStr, Display, EnumIter, EnumProperty, EnumString};

pub mod metric_defs {
    // UCUM units for OTel integration
    //(https://opentelemetry.io/docs/specs/semconv/general/metrics/#instrument-units) 
    pub const UNIT_COUNT: &str = "1";
    pub const UNIT_MICROSECONDS: &str = "us";
    pub const UNIT_BYTES: &str = "By";

    // Stability levels
    pub const STABILITY_STABLE: &str = "stable";
    pub const STABILITY_EXPERIMENTAL: &str = "experimental";
    pub const STABILITY_INTERNAL: &str = "internal";

    // Attribute keys allowed for OTel export
    pub const ATTR_S3_REQUEST: &str = "s3_request";
    pub const ATTR_S3_ERROR: &str = "s3_error";
    pub const ATTR_FUSE_REQUEST: &str = "fuse_request";

    // Property names
    pub const PROP_METRIC_ATTR: &str = "metric_attr";
    pub const PROP_STABILITY: &str = "stability";
    pub const PROP_UNIT: &str = "unit";
}

// Stability levels for metrics
#[derive(Debug, Clone, Copy, PartialEq, Eq, AsRefStr)]
#[strum(serialize_all = "snake_case")]
pub enum MetricStability {
    Stable,
    Experimental,
    Internal,
}

// Configuration for each metric
#[derive(Debug, Clone)]
pub struct MetricConfig {
    pub unit: &'static str,
    pub stability: MetricStability,
    pub otlp_attributes: Vec<&'static str>,
}

// Common properties for all metrics
trait MetricProperties: strum::EnumProperty {
    fn get_config(&self) -> MetricConfig {
        use metric_defs::*;
        MetricConfig {
            stability: match self.get_str(PROP_STABILITY) {
                Some(STABILITY_STABLE) => MetricStability::Stable,
                Some(STABILITY_EXPERIMENTAL) => MetricStability::Experimental,
                _ => MetricStability::Internal,
            },
            unit: self.get_str(PROP_UNIT)
                .unwrap_or(UNIT_COUNT),
            otlp_attributes: self.get_str(PROP_METRIC_ATTR)
                .map(|attrs| attrs.split(',').map(str::trim).collect())
                .unwrap_or_default()
        }
    }
}

// FUSE-related metrics
#[derive(Debug, Clone, Copy, Display, AsRefStr, EnumIter, EnumString, EnumProperty, PartialEq)]
#[strum(serialize_all = "snake_case")]
#[strum(prefix = "fuse.")]
pub enum FuseMetric {
    #[strum(props(
        metric_attr = "fuse_request",
        stability = "experimental",
        unit = "1"
    ))]
    IdleThreads,
    #[strum(props(
        metric_attr = "fuse_request",
        stability = "stable",
        unit = "By"
    ))]
    IoSize,
    #[strum(props(
        metric_attr = "fuse_request",
        stability = "stable",
        unit = "1"
    ))]
    RequestFailure,
    #[strum(props(
        metric_attr = "fuse_request",
        stability = "stable",
        unit = "us"
    ))]
    RequestLatency,
}

// S3-related metrics
#[derive(Debug, Clone, Copy, Display, AsRefStr, EnumIter, EnumProperty, EnumString, PartialEq)]
#[strum(serialize_all = "snake_case")]
#[strum(prefix = "s3.")]
pub enum S3Metric {
    #[strum(props(
        metric_attr = "s3_request",
        stability = "experimental",
        unit = "1"
    ))]
    RequestCanceled,
    #[strum(props(
        metric_attr = "s3_request",
        stability = "stable",
        unit = "1"
    ))]
    RequestCount,
    #[strum(props(
        metric_attr = "s3_request,s3_error",
        stability = "stable",
        unit = "1"
    ))]
    RequestFailure,
    #[strum(props(
        metric_attr = "s3_request",
        stability = "experimental",
        unit = "us"
    ))]
    RequestFirstByteLatency,
    #[strum(props(
        metric_attr = "s3_request",
        stability = "stable",
        unit = "us"
    ))]
    RequestTotalLatency,
}

// Process-related metrics
#[derive(Debug, Clone, Copy, Display, AsRefStr, EnumIter, EnumString, EnumProperty, PartialEq)]
#[strum(serialize_all = "snake_case")]
#[strum(prefix = "process.")]
pub enum ProcessMetric {
    #[strum(props(
        stability = "stable",
        unit = "By"
    ))]
    MemoryUsage,
}

impl MetricProperties for FuseMetric {}
impl MetricProperties for S3Metric {}
impl MetricProperties for ProcessMetric {}

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
                FuseMetric::from_str(s.strip_prefix("fuse.").unwrap())
                    .map(MetricGroup::Fuse)
            }
            s if s.starts_with("s3.") => {
                S3Metric::from_str(s.strip_prefix("s3.").unwrap())
                    .map(MetricGroup::S3)
            }
            s if s.starts_with("process.") => {
                ProcessMetric::from_str(s.strip_prefix("process.").unwrap())
                    .map(MetricGroup::Process)
            }
            _ => Err(strum::ParseError::VariantNotFound),
        }
    }
}

// Helper function to look up metric configuration
pub fn lookup_config(metric_str: &str) -> MetricConfig {
    match MetricGroup::parse(metric_str) {
        Ok(group) => match group {
            MetricGroup::Fuse(metric) => metric.get_config(),
            MetricGroup::S3(metric) => metric.get_config(),
            MetricGroup::Process(metric) => metric.get_config(),
        },
        Err(_) => MetricConfig {
            unit: metric_defs::UNIT_COUNT,
            stability: MetricStability::Internal,
            otlp_attributes: Vec::new(),
        },
    }
}

pub fn to_rust_unit(ucum: &str) -> Unit {
    match ucum {
        metric_defs::UNIT_MICROSECONDS => Unit::Microseconds,
        metric_defs::UNIT_BYTES => Unit::Bytes,
        metric_defs::UNIT_COUNT => Unit::Count,
        _ => Unit::Count,
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::metrics::defs::metric_defs::*;

    #[test]
    fn test_to_rust_unit() {
        assert_eq!(to_rust_unit(metric_defs::UNIT_COUNT), Unit::Count);
        assert_eq!(to_rust_unit(metric_defs::UNIT_MICROSECONDS), Unit::Microseconds);
        assert_eq!(to_rust_unit(metric_defs::UNIT_BYTES), Unit::Bytes);
        assert_eq!(to_rust_unit("invalid"), Unit::Count);
    }

    #[test]
    fn test_metric_group_parse() {
        assert!(matches!(
            MetricGroup::parse("fuse.io_size").unwrap(),
            MetricGroup::Fuse(FuseMetric::IoSize)
        ));
        assert!(matches!(
            MetricGroup::parse("s3.request_count").unwrap(),
            MetricGroup::S3(S3Metric::RequestCount)
        ));
        assert!(matches!(
            MetricGroup::parse("process.memory_usage").unwrap(),
            MetricGroup::Process(ProcessMetric::MemoryUsage)
        ));
        assert!(MetricGroup::parse("invalid").is_err());
    }

    #[test]
    fn test_lookup_config() {
        let config = lookup_config("fuse.io_size");
        assert_eq!(config.unit, metric_defs::UNIT_BYTES);
        assert_eq!(config.stability, MetricStability::Stable);
        assert_eq!(config.otlp_attributes, vec![metric_defs::ATTR_FUSE_REQUEST]);

        let config = lookup_config("s3.request_failure");
        assert_eq!(config.unit, metric_defs::UNIT_COUNT);
        assert_eq!(config.stability, MetricStability::Stable);
        assert_eq!(
            config.otlp_attributes,
            vec![metric_defs::ATTR_S3_REQUEST, metric_defs::ATTR_S3_ERROR]
        );

        let config = lookup_config("invalid");
        assert_eq!(config.unit, metric_defs::UNIT_COUNT);
        assert_eq!(config.stability, MetricStability::Internal);
        assert!(config.otlp_attributes.is_empty());
    }

    #[test]
    fn test_metric_stability_as_ref() {
        assert_eq!(MetricStability::Stable.as_ref(), STABILITY_STABLE);
        assert_eq!(MetricStability::Experimental.as_ref(), STABILITY_EXPERIMENTAL);
        assert_eq!(MetricStability::Internal.as_ref(), STABILITY_INTERNAL);
    }
}