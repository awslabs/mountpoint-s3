#!/bin/bash
# Render a Markdown table summarising memory-limited FIO benchmarks results.
#
# Reads all results/*_extra_metrics.json files produced by mount-s3-log-analyzer
# (invoked with --mem-limit-mib) and appends a single Markdown table to
# $GITHUB_STEP_SUMMARY (or prints to stdout if that variable is unset).
#
# Also reports whether any run breached its limit as the `breached` step output, which
# the workflow uses to fail the job after the results have been saved and published.
#
# Always exits 0, so the table is rendered even when a run breached the memory limit.
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
breached=false
for f in "${files[@]}"; do
  row=$(jq -r '
    (if .breached then "❌ BREACHED" else "✅ OK" end) as $status
    | "| \(.test) | \(.peak_rss_mib) | \(.mem_limit_mib) | \($status) | \(.peak_prefetch_reserved_mib // "N/A") | \(.peak_upload_reserved_mib // "N/A") | \(.peak_pool_get_object_mib // "N/A") | \(.peak_pool_put_object_mib // "N/A") | \(.peak_pool_append_mib // "N/A") |"
  ' "$f")
  out+="${row}
"
  if [ "$(jq -r '.breached' "$f")" = "true" ]; then
    echo "::error title=Memory limit breached::$(jq -r '"\(.test) peaked at \(.peak_rss_mib) MiB, above the \(.mem_limit_mib) MiB limit"' "$f")"
    breached=true
  fi
done

if [ -n "${GITHUB_STEP_SUMMARY:-}" ]; then
  printf '%s' "$out" >> "$GITHUB_STEP_SUMMARY"
else
  printf '%s' "$out"
fi

if [ -n "${GITHUB_OUTPUT:-}" ]; then
  echo "breached=${breached}" >> "$GITHUB_OUTPUT"
fi

exit 0
