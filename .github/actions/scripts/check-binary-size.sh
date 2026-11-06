#!/bin/bash
# Compare the stripped size of `mount-s3` in a package archive against a baseline package archive,
# append a Markdown table to $GITHUB_STEP_SUMMARY (or print it to stdout if that variable is unset),
# and fail if the binary grew by more than SIZE_BUDGET_BYTES.
#
# Usage: check-binary-size.sh <baseline .tar.gz> <current .tar.gz>
set -euo pipefail
# Also exit on errors inside command substitutions, such as a failed measurement.
shopt -s inherit_errexit

if [ $# -ne 2 ]; then
  echo "Usage: $0 <baseline .tar.gz> <current .tar.gz>" >&2
  exit 2
fi

: "${SIZE_BUDGET_BYTES:?must be set to the allowed growth in bytes}"

work_dir=$(mktemp -d "${RUNNER_TEMP:-/tmp}/binary-size.XXXXXX")
trap 'rm -rf "$work_dir"' EXIT

# Print the version and the stripped binary size, in bytes, of the package archive $1.
measure() {
  local dir
  dir=$(mktemp -d "$work_dir/package.XXXXXX")
  tar -xzf "$1" -C "$dir"
  strip -o "$dir/mount-s3.stripped" "$dir/bin/mount-s3"
  echo "$(cat "$dir/VERSION") $(stat -c %s "$dir/mount-s3.stripped")"
}

baseline=$(measure "$1")
current=$(measure "$2")
read -r base_version base_size <<< "$baseline"
read -r version size <<< "$current"

# Print a size in bytes as MiB; with "+" as the second argument, always print the sign.
mib() {
  awk -v b="$1" -v fmt="%${2:-}.2f" 'BEGIN { printf fmt, b / 1048576 }'
}

growth=$((size - base_size))
percent=$(awk -v new="$size" -v old="$base_size" 'BEGIN { printf "%+.1f%%", (new - old) * 100 / old }')
if [ "$growth" -le "$SIZE_BUDGET_BYTES" ]; then
  status="✅ within budget"
  over=false
else
  status="❌ over budget"
  over=true
fi

out="## Binary size

| | Baseline (\`${base_version}\`) | This build (\`${version}\`) | Change | Budget |
|---|---|---|---|---|
| Stripped \`mount-s3\` (MiB) | $(mib "$base_size") | $(mib "$size") | $(mib "$growth" +) (${percent}) | +$(mib "$SIZE_BUDGET_BYTES"): ${status} |
"

if [ -n "${GITHUB_STEP_SUMMARY:-}" ]; then
  printf '%s' "$out" >> "$GITHUB_STEP_SUMMARY"
fi
printf '%s' "$out"

if [ "$over" = true ]; then
  echo "::error title=Binary size over budget::stripped mount-s3 grew by $(mib "$growth") MiB over ${base_version}, more than the $(mib "$SIZE_BUDGET_BYTES") MiB budget"
  exit 1
fi
