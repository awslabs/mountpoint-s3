#!/usr/bin/env bash

# Exit on errors
set -e

echo "Testing OTLP metrics export using OTel collector..."

# Build mountpoint with otlp_integration feature
build_out=$(cargo build --bin mount-s3 --release --features otlp_integration --message-format=json-render-diagnostics)
MOUNTPOINT_PATH=$(printf "%s" "$build_out" | jq -js '[.[] | select(.reason == "compiler-artifact") | select(.executable != null)] | last | .executable')
echo "Mountpoint path: $MOUNTPOINT_PATH"

# Create mount directory
sudo mkdir -p /mnt/metrics_test

# Clean up previous test files
rm -f /tmp/otlp-metrics.log

# Create OTLP collector config with file export
cat > /tmp/otel-config.yaml << EOF
receivers:
  otlp:
    protocols:
      http:
        endpoint: 0.0.0.0:4318

processors:
  batch:

exporters:
  file:
    path: /tmp/otlp-metrics.log
  logging:
    loglevel: info

service:
  pipelines:
    metrics:
      receivers: [otlp]
      processors: [batch]
      exporters: [file, logging]
EOF

# Verify OTLP collector is available
if [[ ! -f /tmp/otelcol ]]; then
  echo "Error: OTLP collector not found at /tmp/otelcol"
  exit 1
fi

# Start OTLP collector
/tmp/otelcol --config=/tmp/otel-config.yaml > /tmp/collector.log 2>&1 &
COLLECTOR_PID=$!

# Check if collector started successfully
sleep 1
if ! kill -0 $COLLECTOR_PID 2>/dev/null; then
  echo "OTLP collector failed to start"
  exit 1
fi

# Run mountpoint with OTLP endpoint configured
"$MOUNTPOINT_PATH" --otlp-endpoint "http://localhost:4318" \
  --otlp-export-interval 2 \
  "${S3_BUCKET_NAME}" /mnt/metrics_test &
MOUNT_PID=$!

sleep 1
if ! kill -0 $MOUNT_PID 2>/dev/null; then
  echo "Mountpoint failed to start"
  exit 1
fi

# File operations to export metrics to OTLP
dd if=/dev/zero of=/mnt/metrics_test/metrics_test.txt bs=1M count=64 2>/dev/null || true

# Random reads to force prefetch reset state
echo "Performing random reads..."
SKIP_OFFSETS=(0 48 32 8)
for skip in "${SKIP_OFFSETS[@]}"; do
  dd if=/mnt/metrics_test/metrics_test.txt of=/dev/null bs=1M skip=$skip count=1 iflag=direct 2>/dev/null || true
done

# Non existent file access to test S3 and FUSE request errors
cat /mnt/metrics_test/nonexistent_file.txt 2>/dev/null || true

# Wait for periodic metrics to be exported
sleep 10

# Unmount the filesystem (mountpoint will exit gracefully)
fusermount -u /mnt/metrics_test 2>/dev/null || fusermount3 -u /mnt/metrics_test 2>/dev/null || true

# Check for module-level metrics (relaxed validation)
MODULES=("process." "fuse." "s3." "prefetch.")
FOUND_MODULES=()

for module in "${MODULES[@]}"; do
  if grep -q "$module" /tmp/otlp-metrics.log 2>/dev/null; then
    FOUND_MODULES+=("$module")
  fi
done

if [[ ${#FOUND_MODULES[@]} -gt 0 ]]; then
  echo "✓ OTLP metrics found for modules: ${FOUND_MODULES[*]}"
  echo "Available metrics:"
  grep -E "process\.|fuse\.|s3\.|prefetch\.|experimental\." /tmp/otlp-metrics.log | head -10
else
  echo "✗ No expected module metrics found"
  [[ -f /tmp/otlp-metrics.log ]] && echo "Available metrics:" && cat /tmp/otlp-metrics.log || echo "No metrics found in file"
  exit 1
fi

# Cleanup collector
kill $COLLECTOR_PID 2>/dev/null || true

# Cleanup
sudo rmdir /mnt/metrics_test 2>/dev/null || true
rm -f /tmp/otel-config.yaml /tmp/otlp-metrics.log /tmp/collector.log

echo "OTLP metrics test passed"