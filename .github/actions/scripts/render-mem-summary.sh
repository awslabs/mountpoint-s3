#!/bin/bash
# Render a Markdown table summarising memory-limited FIO benchmarks results.
#
# Reads all results/*_extra_metrics.json files produced by mount-s3-log-analyzer
# (invoked with --mem-limit-mib) and appends a single Markdown table to
# $GITHUB_STEP_SUMMARY (or prints to stdout if that variable is unset).
#
# Always exits 0; never fails the job even if a run breached the memory limit.
set -u

shopt -s nullglob
files=(results/*_extra_metrics.json)
if [ ${#files[@]} -eq 0 ]; then
  exit 0
fi

out="## Memory Breach Detection

| Test | Peak RSS (MiB) | Memory Limit (MiB) | Status | Peak Prefetch Reserved (MiB) | Peak Upload Reserved (MiB) | Peak Pool GetObject (MiB) | Peak Pool PutObject (MiB) | Peak Pool Append (MiB) |
|---|---|---|---|---|---|---|---|---|
"
for f in "${files[@]}"; do
  row=$(jq -r '
    (if .breached then "❌ BREACHED" else "✅ OK" end) as $status
    | "| \(.test) | \(.peak_rss_mib) | \(.mem_limit_mib) | \($status) | \(.peak_prefetch_reserved_mib // "N/A") | \(.peak_upload_reserved_mib // "N/A") | \(.peak_pool_get_object_mib // "N/A") | \(.peak_pool_put_object_mib // "N/A") | \(.peak_pool_append_mib // "N/A") |"
  ' "$f")
  out+="${row}
"
done

if [ -n "${GITHUB_STEP_SUMMARY:-}" ]; then
  printf '%s' "$out" >> "$GITHUB_STEP_SUMMARY"
else
  printf '%s' "$out"
fi

exit 0
