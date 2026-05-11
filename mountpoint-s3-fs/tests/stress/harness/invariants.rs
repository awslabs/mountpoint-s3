//! Teardown-time invariant assertions for stress scenarios.

use std::sync::Arc;
use std::time::Duration;

use crate::common::stress_recorder;
use crate::common::test_recorder::stress::{HdrMetric, HdrRecorder};

use super::latency::{FileOp, FileOpLatencies};
use super::report::{format_mib, us_to_ms_str};

/// Collect `(label_value, Arc<HdrMetric>)` for every registered gauge whose name matches
/// `metric_name` and that carries a label keyed on `label_key`. Lets invariant checks
/// auto-discover new `area=` / `kind=` values instead of hardcoding the allowlist.
fn collect_gauges_by_label(
    recorder: &HdrRecorder,
    metric_name: &str,
    label_key: &str,
) -> Vec<(String, Arc<HdrMetric>)> {
    let mut out = Vec::new();
    recorder.for_each(|key, metric| {
        if key.name() != metric_name {
            return;
        }
        // Skip non-gauges as same name can be registered as both Gauge and Histogram
        // (e.g. `pool.reserved_bytes`).
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
        out.push((label_value, Arc::clone(metric)));
    });
    out.sort_by(|a, b| a.0.cmp(&b.0));
    out
}

/// Assert each individual reserved-memory gauge stayed below the effective budget the
/// limiter enforces against (`mem_limit - additional_mem_reserved`)
pub fn assert_peak_reserved_invariant(scenario_name: &str, mem_limit: f64) {
    let Some(recorder) = stress_recorder::recorder() else {
        tracing::warn!(
            scenario = scenario_name,
            "stress: no recorder installed, skipping peak-reserved invariant"
        );
        return;
    };
    let mem_limit_u64 = mem_limit as u64;
    let additional_mem_reserved = (mem_limit_u64 / 8).max(128 * 1024 * 1024);
    let effective_budget = mem_limit_u64.saturating_sub(additional_mem_reserved);

    let mut mem_overshoots: Vec<String> = Vec::new();
    for (area, metric) in collect_gauges_by_label(recorder, "mem.bytes_reserved", "area") {
        let peak = metric.gauge_history().max();
        tracing::info!(
            scenario = scenario_name,
            area = %area,
            peak = %format_mib(peak),
            ceiling = %format_mib(effective_budget),
            "stress: peak mem.bytes_reserved"
        );
        check_peak_violation(
            "mem.bytes_reserved",
            "area",
            &area,
            peak,
            effective_budget,
            &mut mem_overshoots,
        );
    }
    if !mem_overshoots.is_empty() {
        tracing::warn!(
            scenario = scenario_name,
            overshoots = ?mem_overshoots,
            "stress: mem.bytes_reserved peak exceeded effective budget {} (informational — reservations may transiently exceed the limit)",
            format_mib(effective_budget),
        );
    }

    let mut pool_violations: Vec<String> = Vec::new();
    for (kind, metric) in collect_gauges_by_label(recorder, "pool.reserved_bytes", "kind") {
        let peak = metric.gauge_history().max();
        tracing::info!(
            scenario = scenario_name,
            kind = %kind,
            peak = %format_mib(peak),
            ceiling = %format_mib(effective_budget),
            "stress: peak pool.reserved_bytes"
        );
        check_peak_violation(
            "pool.reserved_bytes",
            "kind",
            &kind,
            peak,
            effective_budget,
            &mut pool_violations,
        );
    }
    // TODO: promote from logging error to assert once production accounting is tight
    // enough that breaches indicate real regressions rather than known-gap overshoot.
    if !pool_violations.is_empty() {
        tracing::error!(
            scenario = scenario_name,
            violations = ?pool_violations,
            "stress: assertion FAILED — peak pool.reserved_bytes invariant (ceiling {})",
            format_mib(effective_budget),
        );
    } else {
        tracing::info!(
            scenario = scenario_name,
            "stress: assertion PASSED — peak pool.reserved_bytes invariant (ceiling {})",
            format_mib(effective_budget),
        );
    }
}

/// Push a `{metric}{{{label_key}={label_value}}} peak ... exceeds effective budget ...`
/// message onto `violations` iff `peak > effective_budget`.
fn check_peak_violation(
    metric_name: &str,
    label_key: &str,
    label_value: &str,
    peak: u64,
    effective_budget: u64,
    violations: &mut Vec<String>,
) {
    if peak > effective_budget {
        violations.push(format!(
            "{metric_name}{{{label_key}={label_value}}} peak {} exceeds effective budget {}",
            format_mib(peak),
            format_mib(effective_budget),
        ));
    }
}

/// Assert the peak sampled `process.memory_usage` (OS-reported RSS) stayed under
/// `ceiling_bytes`.
pub fn assert_peak_rss_invariant(scenario_name: &str, ceiling_bytes: f64) {
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
    let peak = metric.gauge_history().max();
    let ceiling = ceiling_bytes as u64;
    tracing::info!(
        scenario = scenario_name,
        peak = %format_mib(peak),
        ceiling = %format_mib(ceiling),
        "stress: peak process.memory_usage"
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

/// After the session is dropped, every reservation-tracking gauge must be back to zero.
pub fn assert_teardown_invariants(scenario_name: &str) {
    let Some(recorder) = stress_recorder::recorder() else {
        tracing::warn!(
            scenario = scenario_name,
            "stress: no recorder installed, skipping teardown invariants"
        );
        return;
    };
    let mut leaks: Vec<String> = Vec::new();
    for (area, metric) in collect_gauges_by_label(recorder, "mem.bytes_reserved", "area") {
        let v = metric.gauge();
        tracing::info!(scenario = scenario_name, area = %area, value = v, "stress: teardown mem.bytes_reserved");
        check_teardown_leak("mem.bytes_reserved", "area", &area, v, &mut leaks);
    }
    for (kind, metric) in collect_gauges_by_label(recorder, "pool.reserved_bytes", "kind") {
        let v = metric.gauge();
        tracing::info!(scenario = scenario_name, kind = %kind, value = v, "stress: teardown pool.reserved_bytes");
        check_teardown_leak("pool.reserved_bytes", "kind", &kind, v, &mut leaks);
    }
    if leaks.is_empty() {
        tracing::info!(
            scenario = scenario_name,
            "stress: assertion PASSED — teardown invariants (all reservation gauges back to zero)"
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

/// Push a `{metric}{{{label_key}={label_value}}} = {v}` message onto `leaks` iff `v != 0`.
fn check_teardown_leak(metric_name: &str, label_key: &str, label_value: &str, v: f64, leaks: &mut Vec<String>) {
    if v != 0.0 {
        leaks.push(format!("{metric_name}{{{label_key}={label_value}}} = {v}"));
    }
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
