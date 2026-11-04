#!/usr/bin/env bash

# `-E` makes the ERR trap below fire inside functions too.
set -eE -o pipefail

# Report the command that failed: without this, a failure in one of the file
# operations below gives no indication of where it happened.
trap 'echo "FAILED (exit $?) in ${FUNCNAME[0]:-main}: ${BASH_COMMAND}" >&2' ERR

OTEL_COLLECTOR_CONFIG="otel-config.yaml"
# Unique per run: /tmp is shared between the runner processes of a self-hosted runner,
# and cleanup deletes this file.
OTEL_COLLECTOR_METRICS="/tmp/otel-collector-metrics-$$"
OTLP_ENDPOINT="http://127.0.0.1:4318"
# Directory to copy the Mountpoint logs of a failed test to, so that CI can keep them
# after the temporary directory holding them is deleted. Logs are only printed if unset.
FAILED_LOGS_DIR="${FAILED_LOGS_DIR:-}"
FAILURE_LOG_LINES=200
EXPECTED_METRICS=(
  "experimental.cache.evict_latency"
  "experimental.cache.get_latency"
  "experimental.cache.put_latency"
  "experimental.fuse.cache_hit"
  "experimental.fuse.idle_threads"
  "experimental.fuse.total_threads"
  "experimental.prefetch.reset_state"
  "fuse.io_size"
  "fuse.request_errors"
  "fuse.request_latency"
  "process.memory_usage"
  "s3.request_count"
  "s3.request_errors"
  "s3.request_first_byte_latency"
  "s3.request_total_latency"
)

if [[ -z "${S3_BUCKET_NAME}" ]]; then
  echo "ERROR: Set S3_BUCKET_NAME to run this benchmark"
  exit 1
fi

if [[ -z "${S3_BUCKET_TEST_PREFIX}" ]]; then
  echo "ERROR: Set S3_BUCKET_TEST_PREFIX to run this benchmark"
  exit 1
fi

# Prefix for this run of the script. Runs on different hosts must not share one, or
# they would overwrite each other's objects: in CI, S3_BUCKET_TEST_PREFIX is one prefix
# per workflow run and the tests run on more than one runner at a time. RUNNER_NAME
# identifies the runner, which only runs one job at a time, and the PID keeps runs on
# the same host apart. Overlapping runs on one host still compete for the collector's
# OTLP port, which fails the later one at start-up.
RUN_LABEL="${RUNNER_NAME:-local}"
TEST_PREFIX="${S3_BUCKET_TEST_PREFIX%/}/metrics-${RUN_LABEL// /-}-$$/"

if ! command -v otelcol &> /dev/null; then
  echo "ERROR: OTel collector not found in PATH"
  exit 1
fi

if ! command -v jq &> /dev/null; then
  echo "ERROR: jq must be installed to run this test"
  exit 1
fi

# Print the tail of the Mountpoint logs of the failed test and, if FAILED_LOGS_DIR is
# set, copy them there, since the log directory itself is about to be deleted.
save_mountpoint_logs() {
  echo "Last ${FAILURE_LOG_LINES} lines of the Mountpoint logs:"
  tail -n "${FAILURE_LOG_LINES}" "${MOUNTPOINT_LOGS}"/*.log || true

  if [[ -n "${FAILED_LOGS_DIR}" ]]; then
    local archive_dir="${FAILED_LOGS_DIR}/${TEST_MODE:-unknown}"
    if mkdir -p "${archive_dir}" && cp "${MOUNTPOINT_LOGS}"/*.log "${archive_dir}/"; then
      echo "Copied Mountpoint logs to ${archive_dir}"
    else
      echo "Failed to copy Mountpoint logs to ${archive_dir}"
    fi
  fi
}

cleanup() {
  local exit_code=$?

  if [[ ${exit_code} -ne 0 ]]; then
    echo "Cleaning up after failure (exit code ${exit_code})"
  fi

  if [[ -n "${TMP_DIR}" ]]; then
    # Best-effort unmount.
    ! mountpoint -q "${MOUNT_DIR}" || sudo umount "${MOUNT_DIR}" || true

    # Save the logs after the unmount and a moment for Mountpoint to write what it
    # logs while shutting down, but before the directory holding them is deleted
    # below. Mountpoint may still be running: the unmount doesn't wait for it, and may
    # itself have failed.
    if [[ ${exit_code} -ne 0 && -d "${MOUNTPOINT_LOGS:-}" ]]; then
      sleep 1
      save_mountpoint_logs
    fi

    # Stay on this file system: if the unmount above failed, recursing into the mount
    # would delete the test's objects from S3, and would block on a wedged file system.
    rm -rf --one-file-system "${TMP_DIR}" || true
    TMP_DIR=""
  fi

  if [[ -n "${OTEL_COLLECTOR_PID}" ]]; then
    echo "Stopping OTel Collector with PID ${OTEL_COLLECTOR_PID}"
    kill -TERM "${OTEL_COLLECTOR_PID}" 2>/dev/null || true

    # Give it up to 5s to exit gracefully, then force-kill so cleanup can't hang.
    for _ in $(seq 50); do
      kill -0 "${OTEL_COLLECTOR_PID}" 2>/dev/null || break
      sleep 0.1
    done
    kill -KILL "${OTEL_COLLECTOR_PID}" 2>/dev/null || true

    # Reap the terminated job so the OTLP port is fully released before the next run.
    wait "${OTEL_COLLECTOR_PID}" 2>/dev/null || true
    OTEL_COLLECTOR_PID=""
  fi
  rm -f "${OTEL_COLLECTOR_CONFIG}" "${OTEL_COLLECTOR_METRICS}"
}

trap cleanup EXIT

start_collector() {
  cat > "${OTEL_COLLECTOR_CONFIG}" << EOF
receivers:
  otlp:
    protocols:
      http:
        endpoint: 127.0.0.1:4318
exporters:
  file:
    path: ${OTEL_COLLECTOR_METRICS}
service:
  pipelines:
    metrics:
      receivers: [otlp]
      exporters: [file]
EOF

  otelcol --config="${OTEL_COLLECTOR_CONFIG}" >/dev/null 2>&1 &
  OTEL_COLLECTOR_PID=$!
  echo "Started OTel Collector with PID ${OTEL_COLLECTOR_PID}"
  sleep 1

  if ! ps -p "${OTEL_COLLECTOR_PID}" > /dev/null; then
    echo "OTel Collector failed to start"
    exit 1
  fi
}

trigger_metrics() {
  echo "Starting file operations."
  
  test_file="${MOUNT_DIR}/test_file.txt"
  # `status=none` suppresses the transfer summary but keeps error messages, which we
  # need to diagnose failures in these operations.
  dd if=/dev/urandom of="${test_file}" bs=128k count=500 status=none
  sync

  # Read from the file. Ensure that:
  # - Some data is cached to disk for the next step
  # - At least one "skip" is large enough to reset the internal prefetcher
  {
    for skip in {0..5} 300; do
      dd bs=128k skip=$skip count=1 iflag=direct status=none
    done
  } < "${test_file}" > /dev/null

  # Re-read some data to trigger cache hits
  {
    for skip in {1..5}; do
      dd bs=128k skip=$skip count=1 status=none
    done
  } < "${test_file}" > /dev/null

  # Create multiple large files
  for i in {1..10}; do
    dd if=/dev/urandom of="${MOUNT_DIR}/evict_file_${i}.txt" bs=128k count=100 status=none
  done
  sync

  # Try reading all files to force cache eviction metrics
  for i in {1..10}; do
    dd if="${MOUNT_DIR}/evict_file_${i}.txt" bs=128k count=10 status=none > /dev/null
  done

  cat "${MOUNT_DIR}/nonexistent_file.txt" 2>/dev/null || true

  echo "Completed file operations."
}

setup_mount() {
  local mode=$1

  # Set up temp directory tree. To be deleted in cleanup.
  TMP_DIR=$(mktemp -d /tmp/mountpoint-XXXXXXXXXXXX)
  MOUNT_DIR="$TMP_DIR/mnt"
  MOUNTPOINT_LOGS="$TMP_DIR/logs"
  MOUNTPOINT_CACHE="$TMP_DIR/cache"
  
  # Each test also gets its own prefix, so that it writes new objects rather than
  # overwriting the ones left behind by the test before it.
  local prefix="${TEST_PREFIX}${mode}/"

  echo "Mount ${S3_BUCKET_NAME}, prefix: ${prefix} ($mode)"
  mkdir -p "${MOUNT_DIR}" "${MOUNTPOINT_LOGS}" "${MOUNTPOINT_CACHE}"

  local args=(
    "${S3_BUCKET_NAME}" "${MOUNT_DIR}"
    --allow-overwrite
    --log-directory="${MOUNTPOINT_LOGS}"
    --prefix="${prefix}"
    --cache="${MOUNTPOINT_CACHE}"
    --max-cache-size=100
  )

  case $mode in
    "with_logs")
      args+=(--log-metrics)
      ;;
    "with_otlp")
      args+=(--otlp-endpoint="${OTLP_ENDPOINT}" --otlp-export-interval=5)
      ;;
    "with_both")
      args+=(--log-metrics --otlp-endpoint="${OTLP_ENDPOINT}" --otlp-export-interval=5)
      ;;
  esac

  if ! cargo run --quiet --release -- "${args[@]}"; then
    echo "Failed to mount file system"
    exit 1
  fi

  echo "Mounted ${MOUNT_DIR} (logs: ${MOUNTPOINT_LOGS}, cache: ${MOUNTPOINT_CACHE})."
}

verify_otel_metrics() {
  local mode=$1
  # The collector writes nothing when OTLP export is disabled, so an empty or missing
  # file just means no metrics were exported. It is also still running and may be
  # part-way through a write, so report what we can parse and let the checks below
  # decide, rather than failing on a torn last line.
  local found_metrics=""
  if [[ -s "${OTEL_COLLECTOR_METRICS}" ]]; then
    found_metrics=$( { jq -r '.resourceMetrics[].scopeMetrics[].metrics[].name' "${OTEL_COLLECTOR_METRICS}" || true; } | sort -u)
  fi

  if [[ "${mode}" == "with_logs" ]]; then
    if [[ -n "${found_metrics}" ]]; then
      echo "Found OTel metrics when none expected"
      exit 1
    fi
    echo "Found no OTel metrics"
  else
    for expected in "${EXPECTED_METRICS[@]}"; do
      # Match the whole line, literally: metric names contain dots.
      if ! grep -qxF -- "${expected}" <<< "${found_metrics}"; then
        echo "${expected} metric not found"
        exit 1
      fi
    done
    echo "Found expected OTel metrics"
  fi
}

verify_log_metrics() {
  local mode=$1
  local modules=("fuse" "s3" "process" "prefetch")
  local found_modules=()
  
  for module in "${modules[@]}"; do
    if grep -q "metrics: ${module}" "${MOUNTPOINT_LOGS}"/*.log 2>/dev/null; then
      found_modules+=("$module")
    fi
  done
  
  if [[ "${mode}" == "with_otlp" && ${#found_modules[@]} -gt 0 ]]; then
    echo "Found log metrics when none expected: ${found_modules[*]}"
    exit 1
  elif [[ "${mode}" != "with_otlp" ]]; then
    if [[ ${#found_modules[@]} -ne ${#modules[@]} ]]; then
      echo "Expected ${#modules[@]} modules but found ${#found_modules[@]}: ${found_modules[*]}"
      exit 1
    fi
    echo "Found expected log metrics: ${found_modules[*]}"
  fi
}

run_test() {
  local mode=$1

  # Used by cleanup to label the logs it saves on failure.
  TEST_MODE="${mode}"

  echo "Running test ${mode}"
  
  start_collector
  setup_mount "${mode}"
  trigger_metrics
  
  # Not ideal but we have to wait for periodic metrics to be generated and exported.
  sleep 10 

  echo "Verify metrics"
  verify_otel_metrics "${mode}"
  verify_log_metrics "${mode}"

  echo "Completed test ${mode}"

  cleanup
}

for i in "with_otlp" "with_both" "with_logs"; do 
  run_test "$i"
done
echo "All tests passed!"
