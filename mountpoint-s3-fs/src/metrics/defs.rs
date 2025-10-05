use ::metrics::Unit;

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

macro_rules! define_attributes {
    ($(($name:ident, $namespace:expr, $attr:expr)),* $(,)?) => {
        pub mod attributes {
            $(
                pub const $name: &str = {
                    if $namespace.len() == 0 {
                        $attr
                    } else {
                        const_format::concatcp!($namespace, "_", $attr)
                    }
                };
            )*
        }
    };
}

macro_rules! define_metrics {
    ($(($name:ident, $namespace:expr, $metric:expr)),* $(,)?) => {
        // Ideally, we should also check all generated metric names are unique
        pub mod metrics {
            $(
                pub const $name: &str = const_format::concatcp!($namespace, ".", $metric);
            )*
        }
    };
}

define_attributes! {
    (FUSE_REQUEST, "fuse", "request"),
    (S3_ERROR, "s3", "error"),
    (S3_REQUEST, "s3", "request"),
    (PROCESS_METRIC, "process", "metric"),
    (SEEK_DIRECTION, "", "seek_dir"),
}

define_metrics! {
    (FUSE_IDLE_THREADS, "fuse", "idle_threads"),
    (FUSE_IO_SIZE, "fuse", "io_size"),
    (FUSE_REQUEST_FAILURE, "fuse", "request_failure"),
    (FUSE_REQUEST_LATENCY, "fuse", "request_latency"),

    (S3_REQUEST_COUNT, "s3", "request_count"),
    (S3_REQUEST_FAILURE, "s3", "request_failure"),
    (S3_REQUEST_FIRST_BYTE_LATENCY, "s3", "first_byte_latency"),
    (S3_REQUEST_TOTAL_LATENCY, "s3", "request_total_latency"),

    (PROCESS_MEMORY_USAGE, "process", "memory_usage"),
}

pub fn lookup_config(name: &str) -> MetricConfig {
    match name {
        metrics::FUSE_REQUEST_LATENCY => MetricConfig {
            unit: Unit::Milliseconds,
            stability: MetricStability::Stable,
            otlp_attributes: &[attributes::FUSE_REQUEST],
        },
        metrics::FUSE_IO_SIZE => MetricConfig {
            unit: Unit::Bytes,
            stability: MetricStability::Stable,
            otlp_attributes: &[attributes::FUSE_REQUEST],
        },
        metrics::FUSE_REQUEST_FAILURE => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Stable,
            otlp_attributes: &[attributes::FUSE_REQUEST],
        },
        metrics::FUSE_IDLE_THREADS => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Stable,
            otlp_attributes: &[],
        },
        metrics::S3_REQUEST_COUNT => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Stable,
            otlp_attributes: &[attributes::S3_REQUEST],
        },
        metrics::S3_REQUEST_FAILURE => MetricConfig {
            unit: Unit::Count,
            stability: MetricStability::Stable,
            otlp_attributes: &[attributes::S3_REQUEST, attributes::S3_ERROR],
        },
        metrics::S3_REQUEST_TOTAL_LATENCY => MetricConfig {
            unit: Unit::Milliseconds,
            stability: MetricStability::Stable,
            otlp_attributes: &[attributes::S3_REQUEST],
        },
        metrics::S3_REQUEST_FIRST_BYTE_LATENCY => MetricConfig {
            unit: Unit::Milliseconds,
            stability: MetricStability::Stable,
            otlp_attributes: &[attributes::S3_REQUEST],
        },
        metrics::PROCESS_MEMORY_USAGE => MetricConfig {
            unit: Unit::Bytes,
            stability: MetricStability::Stable,
            otlp_attributes: &[],
        },

        // Default to Internal metrics. Unless metrics have units or attributes,
        // this is a safe default.
        _ => MetricConfig {
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
