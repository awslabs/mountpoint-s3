//! Log-output formatting for scenario summaries.

use crate::common::stress_recorder;
use crate::common::test_recorder::stress::HdrMetric;

use super::latency::{FileOp, FileOpLatencies};

/// Format a microsecond value as milliseconds with one decimal place.
pub(super) fn us_to_ms_str(us: u64) -> String {
    format!("{:.1}", us as f64 / 1000.0)
}

/// Format a byte count as `<value> MiB` with one decimal place, for readable log output.
pub(super) fn format_mib(bytes: u64) -> String {
    format!("{:.1} MiB", bytes as f64 / (1024.0 * 1024.0))
}

/// Print a per-op worker latency table followed by the global HdrRecorder snapshot.
pub(super) fn dump_summary(scenario_name: &str, aggregate: &FileOpLatencies) {
    tracing::info!("=== STRESS [{scenario_name}] FILE OP LATENCIES ===");
    for op in FileOp::ALL {
        let h = aggregate.histogram(op);
        let count = h.len();
        if count == 0 {
            tracing::info!("op={} count=0", op.name());
            continue;
        }
        tracing::info!(
            "op={} count={} p50={}ms p90={}ms p99={}ms p100={}ms",
            op.name(),
            count,
            us_to_ms_str(h.value_at_quantile(0.50)),
            us_to_ms_str(h.value_at_quantile(0.90)),
            us_to_ms_str(h.value_at_quantile(0.99)),
            us_to_ms_str(h.max()),
        );
    }

    tracing::info!("");
    tracing::info!("=== STRESS [{scenario_name}] AGGREGATED MOUNTPOINT METRICS ===");
    let Some(recorder) = stress_recorder::recorder() else {
        tracing::info!("(no stress recorder installed)");
        return;
    };
    let mut lines: Vec<(String, String)> = Vec::new();
    recorder.for_each(|key, metric| {
        let key_str = format!("{key}");
        let line = match metric.as_ref() {
            HdrMetric::Histogram(_) => {
                let h = metric.histogram_clone();
                let count = h.len();
                if count == 0 {
                    format!("hist {key}: count=0")
                } else {
                    // Raw HDR values: unit varies per metric (bytes, µs, MiB, count, etc.) —
                    // the caller interprets from the metric name. Formatting a single unit
                    // here would be wrong for anything that isn't latency.
                    format!(
                        "hist {key}: count={} p50={} p90={} p99={} p100={}",
                        count,
                        h.value_at_quantile(0.50),
                        h.value_at_quantile(0.90),
                        h.value_at_quantile(0.99),
                        h.max(),
                    )
                }
            }
            HdrMetric::Counter(_) => format!("counter {key}: {}", metric.counter()),
            HdrMetric::Gauge(_) => {
                let current = metric.gauge();
                let history = metric.gauge_history();
                format!(
                    "gauge {key}: current={current} peak={} samples={} (p50={} p90={} p99={})",
                    history.max(),
                    history.len(),
                    history.value_at_quantile(0.50),
                    history.value_at_quantile(0.90),
                    history.value_at_quantile(0.99),
                )
            }
        };
        lines.push((key_str, line));
    });
    lines.sort_by(|a, b| a.0.cmp(&b.0));
    for (_, line) in lines {
        tracing::info!("{}", line);
    }
}
