//! Teardown-time invariant assertions for stress scenarios.

use std::sync::Arc;
use std::time::{Duration, Instant};

use mountpoint_s3_fs::memory::data_buffer_budget_for;

use crate::common::stress_recorder;
use crate::common::test_recorder::stress::{HdrMetric, HdrRecorder};

use super::latency::{FileOp, FileOpLatencies};
use super::report::{format_mib, us_to_ms_str};

const RESERVED_MEMORY_METRIC: &str = "mem.bytes_reserved";
const ALLOCATED_MEMORY_METRIC: &str = "pool.allocated_bytes";
const IN_USE_MEMORY_METRIC: &str = "pool.bytes_in_use";

/// A gauge handle carrying its identity for logging and violation messages.
struct NamedGauge {
    metric_name: &'static str,
    /// `(label_key, label_value)`, or `None` for an unlabeled gauge.
    label: Option<(&'static str, String)>,
    metric: Arc<HdrMetric>,
}

impl NamedGauge {
    /// Render the gauge's identity, e.g. `mem.bytes_reserved{area=prefetch}` for a labeled
    /// gauge or `pool.allocated_bytes` for an unlabeled one.
    fn id(&self) -> String {
        match &self.label {
            Some((key, value)) => format!("{}{{{key}={value}}}", self.metric_name),
            None => self.metric_name.to_string(),
        }
    }

    /// Current gauge value
    fn value(&self) -> f64 {
        self.metric.gauge()
    }

    /// Log the gauge's peak against the budget and, iff `peak > effective_budget`, push a
    /// `{gauge_id} peak ... exceeds effective budget ...` message onto `violations`.
    fn check_peak_violation(&self, scenario_name: &str, effective_budget: u64, violations: &mut Vec<String>) {
        let peak = self.metric.gauge_peak();
        tracing::info!(
            scenario = scenario_name,
            metric = %self.id(),
            peak = %format_mib(peak),
            ceiling = %format_mib(effective_budget),
            "stress: peak memory gauge"
        );
        if peak > effective_budget {
            violations.push(format!(
                "{} peak {} exceeds effective budget {}",
                self.id(),
                format_mib(peak),
                format_mib(effective_budget),
            ));
        }
    }
}

/// Collect a [`NamedGauge`] for every registered gauge whose name matches `metric_name` and that
/// carries a label keyed on `label_key`. Lets invariant checks auto-discover new `area=` / `kind=`
/// values instead of hardcoding the allowlist.
fn collect_gauges_by_label(
    recorder: &HdrRecorder,
    metric_name: &'static str,
    label_key: &'static str,
) -> Vec<NamedGauge> {
    let mut out = Vec::new();
    recorder.for_each(|key, metric| {
        if key.name() != metric_name {
            return;
        }
        // Skip non-gauges as same name can be registered as both Gauge and Histogram.
        if !matches!(metric.as_ref(), HdrMetric::Gauge(_)) {
            return;
        }
        let Some(label_value) = key
            .labels()
            .find(|l| l.key() == label_key)
            .map(|l| l.value().to_string())
        else {
            return;
        };
        out.push(NamedGauge {
            metric_name,
            label: Some((label_key, label_value)),
            metric: Arc::clone(metric),
        });
    });
    out.sort_by(|a, b| a.label.cmp(&b.label));
    out
}

/// Assert each memory gauge's peak stayed within the effective budget the limiter enforces
/// against (`mem_limit - additional_mem_reserved`). Reservations may transiently overshoot, so
/// `mem.bytes_reserved` is only logged; the pool's committed memory is a hard bound, so
/// `pool.allocated_bytes` and `pool.bytes_in_use` breaches fail the assertion.
pub fn assert_peak_reserved_invariant(scenario_name: &str, mem_limit: f64) {
    let Some(recorder) = stress_recorder::recorder() else {
        tracing::warn!(
            scenario = scenario_name,
            "stress: no recorder installed, skipping peak-reserved invariant"
        );
        return;
    };
    let effective_budget = data_buffer_budget_for(mem_limit as usize) as u64;

    let mut reserved_overshoots: Vec<String> = Vec::new();
    for gauge in collect_gauges_by_label(recorder, RESERVED_MEMORY_METRIC, "area") {
        gauge.check_peak_violation(scenario_name, effective_budget, &mut reserved_overshoots);
    }
    if !reserved_overshoots.is_empty() {
        tracing::warn!(
            scenario = scenario_name,
            overshoots = ?reserved_overshoots,
            "stress: {} peak exceeded effective budget {} (informational — reservations may transiently exceed the limit)",
            RESERVED_MEMORY_METRIC,
            format_mib(effective_budget),
        );
    }

    // The limiter enforces `allocated_bytes + additional_mem_reserved <= mem_limit`, so the
    // allocated gauge is a hard bound (unlike reservations, which may transiently overshoot).
    let mut allocated_violations: Vec<String> = Vec::new();
    if let Some(metric) = recorder.get(ALLOCATED_MEMORY_METRIC, &[]) {
        let gauge = NamedGauge {
            metric_name: ALLOCATED_MEMORY_METRIC,
            label: None,
            metric,
        };
        gauge.check_peak_violation(scenario_name, effective_budget, &mut allocated_violations);
    }
    if allocated_violations.is_empty() {
        tracing::info!(
            scenario = scenario_name,
            "stress: assertion PASSED — peak {} invariant (ceiling {})",
            ALLOCATED_MEMORY_METRIC,
            format_mib(effective_budget),
        );
    } else {
        tracing::error!(
            scenario = scenario_name,
            violations = ?allocated_violations,
            "stress: assertion FAILED — peak {} invariant (ceiling {})",
            ALLOCATED_MEMORY_METRIC,
            format_mib(effective_budget),
        );
    }
    assert!(
        allocated_violations.is_empty(),
        "peak {} invariant violated (ceiling {}):\n  {}",
        ALLOCATED_MEMORY_METRIC,
        format_mib(effective_budget),
        allocated_violations.join("\n  "),
    );

    let mut in_use_violations: Vec<String> = Vec::new();
    for gauge in collect_gauges_by_label(recorder, IN_USE_MEMORY_METRIC, "kind") {
        gauge.check_peak_violation(scenario_name, effective_budget, &mut in_use_violations);
    }
    if in_use_violations.is_empty() {
        tracing::info!(
            scenario = scenario_name,
            "stress: assertion PASSED — peak {} invariant (ceiling {})",
            IN_USE_MEMORY_METRIC,
            format_mib(effective_budget),
        );
    } else {
        tracing::error!(
            scenario = scenario_name,
            violations = ?in_use_violations,
            "stress: assertion FAILED — peak {} invariant (ceiling {})",
            IN_USE_MEMORY_METRIC,
            format_mib(effective_budget),
        );
    }
    assert!(
        in_use_violations.is_empty(),
        "peak {} invariant violated (ceiling {}):\n  {}",
        IN_USE_MEMORY_METRIC,
        format_mib(effective_budget),
        in_use_violations.join("\n  "),
    );
}

/// Assert the peak sampled `process.memory_usage` (OS-reported RSS), minus
/// `worker_io_buffer_bytes` of in-process worker I/O buffers, stayed under `ceiling_bytes`.
pub fn assert_peak_rss_invariant(scenario_name: &str, ceiling_bytes: f64, worker_io_buffer_bytes: usize) {
    let Some(recorder) = stress_recorder::recorder() else {
        tracing::warn!(
            scenario = scenario_name,
            "stress: no recorder installed, skipping peak-rss invariant"
        );
        return;
    };
    let Some(metric) = recorder.get("process.memory_usage", &[]) else {
        tracing::warn!(
            scenario = scenario_name,
            "stress: process.memory_usage not recorded, skipping peak-rss invariant"
        );
        return;
    };
    let peak = metric.gauge_peak().saturating_sub(worker_io_buffer_bytes as u64);
    let ceiling = ceiling_bytes as u64;
    tracing::info!(
        scenario = scenario_name,
        peak = %format_mib(peak),
        ceiling = %format_mib(ceiling),
        "stress: peak process.memory_usage (worker buffers subtracted)"
    );
    let mut violations: Vec<String> = Vec::new();
    if peak > ceiling {
        violations.push(format!(
            "process.memory_usage peak {} exceeds mem_limit {}",
            format_mib(peak),
            format_mib(ceiling),
        ));
    }
    // TODO: promote from error to assert once production accounting is tight
    // enough that breaches indicate real regressions rather than known-gap overshoot.
    if !violations.is_empty() {
        tracing::error!(
            scenario = scenario_name,
            ?violations,
            "stress: assertion FAILED — peak-rss invariant (ceiling {})",
            format_mib(ceiling),
        );
    } else {
        tracing::info!(
            scenario = scenario_name,
            "stress: assertion PASSED — peak-rss invariant (ceiling {})",
            format_mib(ceiling),
        );
    }
}

/// How long to wait for the tracked gauges to settle to zero after the session is dropped.
///
/// The CRT releases its pool references asynchronously on its own threads, so the gauges reach
/// zero shortly after `drop(session)` returns. With no deterministic signal to await, we poll.
const TEARDOWN_SETTLE_TIMEOUT: Duration = Duration::from_secs(2);

/// After the session is dropped, every tracked gauge must be back to zero.
/// Polls until the gauges settle or [`TEARDOWN_SETTLE_TIMEOUT`] elapses.
pub fn assert_teardown_invariants(scenario_name: &str) {
    let Some(recorder) = stress_recorder::recorder() else {
        tracing::warn!(
            scenario = scenario_name,
            "stress: no recorder installed, skipping teardown invariants"
        );
        return;
    };

    // Each handle holds a live value that CRT teardown decrements, so we poll them in place.
    let mut gauges = collect_gauges_by_label(recorder, RESERVED_MEMORY_METRIC, "area");
    if let Some(metric) = recorder.get(ALLOCATED_MEMORY_METRIC, &[]) {
        gauges.push(NamedGauge {
            metric_name: ALLOCATED_MEMORY_METRIC,
            label: None,
            metric,
        });
    }
    gauges.extend(collect_gauges_by_label(recorder, IN_USE_MEMORY_METRIC, "kind"));

    let start = Instant::now();
    while gauges.iter().any(|g| g.value() != 0.0) && start.elapsed() < TEARDOWN_SETTLE_TIMEOUT {
        std::thread::sleep(Duration::from_millis(50));
    }

    // Log each gauge's resting value and record any that did not return to zero.
    let mut leaks: Vec<String> = Vec::new();
    for gauge in &gauges {
        let value = gauge.value();
        tracing::info!(
            scenario = scenario_name,
            metric = %gauge.id(),
            value,
            "stress: teardown gauge"
        );
        if value != 0.0 {
            leaks.push(format!("{} = {value}", gauge.id()));
        }
    }

    if leaks.is_empty() {
        tracing::info!(
            scenario = scenario_name,
            "stress: assertion PASSED — teardown invariants (all tracked gauges back to zero)"
        );
    } else {
        tracing::error!(
            scenario = scenario_name,
            ?leaks,
            "stress: assertion FAILED — teardown invariants"
        );
    }
    assert!(
        leaks.is_empty(),
        "teardown invariant violated:\n  {}",
        leaks.join("\n  ")
    );
}

/// Assert that the merged per-op p100 latency is within `max_latency(op)`.
pub fn assert_p100_latency(scenario_name: &str, aggregate: &FileOpLatencies, max_latency: impl Fn(FileOp) -> Duration) {
    let mut violations: Vec<String> = Vec::new();
    for op in FileOp::ALL {
        let h = aggregate.histogram(op);
        if h.is_empty() {
            continue;
        }
        let max_us = max_latency(op).as_micros().min(u64::MAX as u128) as u64;
        let max_observed = h.max();
        if max_observed > max_us {
            violations.push(format!(
                "op={} p100={}ms exceeds max_latency={}ms (count={})",
                op.name(),
                us_to_ms_str(max_observed),
                us_to_ms_str(max_us),
                h.len(),
            ));
        }
    }
    if !violations.is_empty() {
        tracing::error!(
            scenario = scenario_name,
            ?violations,
            "stress: assertion FAILED — p100 latency invariant (per-op ceilings)",
        );
        panic!(
            "stress: scenario {:?} violated p100 latency ceiling:\n  {}",
            scenario_name,
            violations.join("\n  "),
        );
    }
    tracing::info!(
        scenario = scenario_name,
        "stress: assertion PASSED — p100 latency invariant (per-op ceilings)",
    );
}
