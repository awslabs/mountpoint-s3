#!/usr/bin/env bash

set -e

OTEL_COLLECTOR_CONFIG="otel-config.yaml"
OTEL_COLLECTOR_METRICS="/tmp/otel-collector-metrics"
OTLP_ENDPOINT="http://127.0.0.1:4318"
MOUNT_DIR="/tmp/mount-dir"
MOUNTPOINT_LOGS="/tmp/mountpoint-logs"
EXPECTED_METRICS=(
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

if ! command -v otelcol &> /dev/null; then
  echo "ERROR: OTel collector not found in PATH"
  exit 1
fi

if ! command -v jq &> /dev/null; then
  echo "ERROR: jq must be installed to run this test"
  exit 1
fi

cleanup() {
  ! mountpoint -q "${MOUNT_DIR}" || sudo umount "${MOUNT_DIR}"
  rm -rf "${MOUNT_DIR}" "${MOUNTPOINT_LOGS}"
  
  if [[ -n "${OTEL_COLLECTOR_PID}" ]]; then
    echo "Stopping OTel Collector with PID ${OTEL_COLLECTOR_PID}"
    kill "${OTEL_COLLECTOR_PID}" 2>/dev/null || true
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
  dd if=/dev/urandom of="${test_file}" bs=128k count=500 2>/dev/null
  sync
  {
    for skip in {1..8} {490..500}; do
      dd bs=128k skip=$skip count=1 iflag=direct 2>/dev/null || true
    done
  } < "${test_file}" > /dev/null

  cat "${MOUNT_DIR}/nonexistent_file.txt" 2>/dev/null || true
}

setup_mount() {
  local mode=$1
  
  echo "Mount ${S3_BUCKET_NAME}, prefix: ${S3_BUCKET_TEST_PREFIX} ($mode)"
  mkdir -p "${MOUNT_DIR}" "${MOUNTPOINT_LOGS}"
  
  local args=(
    "${S3_BUCKET_NAME}" "${MOUNT_DIR}"
    --allow-overwrite
    --log-directory="${MOUNTPOINT_LOGS}"
    --prefix="${S3_BUCKET_TEST_PREFIX}"
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
  
  cargo run --quiet --release -- "${args[@]}"
  if [ $? -ne 0 ]; then
    echo "Failed to mount file system"
    exit 1
  fi

  echo "Mounted ${MOUNT_DIR}."
}

verify_otel_metrics() {
  local mode=$1
  local found_metrics=$(jq -r '.resourceMetrics[].scopeMetrics[].metrics[].name' "${OTEL_COLLECTOR_METRICS}" 2>/dev/null | sort -u)
  
  if [[ "${mode}" == "with_logs" ]]; then
    if [[ -n "${found_metrics}" ]]; then
      echo "Found OTel metrics when none expected"
      exit 1
    fi
    echo "Found no OTel metrics"
  else
    for expected in "${EXPECTED_METRICS[@]}"; do
      if ! echo "${found_metrics}" | grep -q "^${expected}$"; then
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
  
  start_collector
  setup_mount "${mode}"
  trigger_metrics
  
  # Not ideal but we have to wait for periodic metrics to be generated and exported.
  sleep 10 
  
  verify_otel_metrics "${mode}"
  verify_log_metrics "${mode}"
  cleanup
}

for i in "with_otlp" "with_both" "with_logs"; do 
  echo "Running test $i"
  run_test "$i"
done
echo "All tests passed!"
