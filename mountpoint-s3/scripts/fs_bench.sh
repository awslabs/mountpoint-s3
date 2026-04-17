#!/bin/bash
set -e

if ! command -v fio &> /dev/null; then
  echo "fio must be installed to run this benchmark"
  exit 1
fi

if [[ -z "${S3_BUCKET_NAME}" ]]; then
  echo "Set S3_BUCKET_NAME to run this benchmark"
  exit 1
fi

if [[ -z "${S3_BUCKET_TEST_PREFIX}" ]]; then
  echo "Set S3_BUCKET_TEST_PREFIX to run this benchmark"
  exit 1
fi

if [[ -n "${S3_JOB_NAME_FILTER}" ]]; then
  echo "Will only run fio jobs which match $S3_JOB_NAME_FILTER"
fi

optional_args=""

if [[ -n "${S3_ENDPOINT_URL}" ]]; then
  optional_args+="--endpoint-url=${S3_ENDPOINT_URL} --force-path-style"
fi

if [[ -n "${S3_DEBUG}" ]]; then
  optional_args+=" --debug"
fi

if [[ -n "${S3_INCREMENTAL_UPLOAD}" ]]; then
  optional_args+=" --incremental-upload"
fi

base_dir=$(dirname "$0")
project_dir="${base_dir}/../.."
cd ${project_dir}

results_dir=results
runtime_seconds=30
startdelay_seconds=30
: ${iterations:=1}  # TEMPORARY: reduced from 10 for faster dev iteration

rm -rf ${results_dir}
mkdir -p ${results_dir}

# Accept FIO category names as positional arguments, defaulting to
# "read write mix" when no args provided. Detect memory-limited mode by checking
# if any category contains "_mem_limited".
if [[ $# -gt 0 ]]; then
  categories=("$@")
else
  categories=(read write mix)
fi
is_mem_limited=false
for cat in "${categories[@]}"; do
  if [[ "$cat" == *_mem_limited* ]]; then
    is_mem_limited=true
    break
  fi
done

# Extract the memory target from the _mem{N} suffix in a FIO job name.
# Returns the extracted value if the suffix is present.
# Exits with an error if the suffix is missing and is_mem_limited is true.
get_memory_target_for_job() {
  local basename=$1
  if [[ "${basename}" =~ _mem([0-9]+)$ ]]; then
    echo "${BASH_REMATCH[1]}"
  else
    echo "ERROR: FIO job '${basename}' is missing the required _mem{N} suffix in a memory-limited category"
    exit 1
  fi
}

run_fio_job() {
  job_file=$1
  mount_dir=$2
  log_dir=$3

  job_name=$(basename "${job_file}")
  job_name="${job_name%.*}"

  echo -n "Running job ${job_name} for ${iterations} iterations... "

  for i in $(seq 1 $iterations);
  do
    echo -n "${i};"
    # we know each fio job will be running for exactly 1 minute from the job definitions.
    # there must be something wrong if it takes longer than that.
    set +e
    timeout 300s fio --thread \
      --output=${results_dir}/${job_name}_iter${i}.json \
      --output-format=json \
      --directory=${mount_dir} \
      --eta=never \
      ${job_file}
    job_status=$?
    set -e
    if [ $job_status -ne 0 ]; then
      tail -1000 ${log_dir}/mountpoint-s3-*
      echo "Job ${job_name} failed with exit code ${job_status}"
      exit 1
    fi
  done
  echo "done"

  # combine the results and find an average value.  If the test was a single job, take the
  # average across all iterations.  If it was multiple jobs, take the average across all
  # iterations of each job, then sum the averages to get the final results.  For example,
  # for a mixed read/write test, this would average all read jobs, all write jobs, and
  # combine the two averages into a throughput.
  # For memory-limited runs, append _mem{N} to FIO's .jobname (e.g. sequential_read -> sequential_read_mem512)
  # so the memory target is visible in the chart label while keeping the human-readable FIO name.
  if [[ "${is_mem_limited}" == true ]]; then
    mem_suffix="_mem$(get_memory_target_for_job "${job_name}")"
  else
    mem_suffix=""
  fi
  jq -s --arg mem_suffix "${mem_suffix}" '[
      [.[].jobs] | add | group_by(.jobname)[] |
          {
              name: (.[0].jobname + $mem_suffix),
              value: ((map(
                  if .["job options"].rw | test("^(rand)?read")
                  then .read.bw
                  else .write.bw
                  end
              ) | add) / (length * 1024))
          }
      ] | {
          name: (map(.name) | unique | join(",")),
          value: map(.value) | add,
          unit: "MiB/s"
      }' \
      ${results_dir}/${job_name}_iter*.json | tee ${results_dir}/${job_name}_parsed.json
}

should_run_job() {
    job_file=$1
    if [[ -n "${S3_JOB_NAME_FILTER}" ]]; then
      if [[ "${job_file}" == *"${S3_JOB_NAME_FILTER}"* ]]; then
        # job name matches filter
        return 0
      else
        # job name does not match filter
        return 1
      fi
    fi
}

# Run all benchmarks within a category.  Fio job definitions should exist under a directory
# with the category name, passed as first argument, inside mountpoint-s3/scripts/fio.
#
# Params:
# $1: benchmark category.
run_benchmarks() {
  category=$1
  jobs_dir=mountpoint-s3/scripts/fio/$category

  for job_file in "${jobs_dir}"/*.fio; do

    if ! should_run_job "${job_file}"; then
      echo "Skipping job ${job_file} because it does not match ${S3_JOB_NAME_FILTER}"
      continue
    fi

    mount_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)

    job_name=$(basename "${job_file}")
    job_name="${job_name%.*}"
    log_dir=logs/${job_name}

    # cleanup mount directory and log directory
    cleanup() {
      echo "${category}_benchmark:cleanup"
      # unmount file system only if it is mounted
      ! mountpoint -q ${mount_dir} || sudo umount ${mount_dir}
      rm -rf ${mount_dir}
      rm -rf ${log_dir}
    }

    # trap cleanup on exit
    trap 'cleanup' EXIT

    rm -rf ${log_dir}
    mkdir -p ${log_dir}

    # Mount file system first with a large part size if needed
    if [[ $job_file != *small.fio ]]; then
      part_size_option="--part-size=16777216"
    else
      unset part_size_option
    fi

    # Resolve memory target for this job from filename when in memory-limited mode
    if [[ "${is_mem_limited}" == true ]]; then
      job_memory_target=$(get_memory_target_for_job "${job_name}")
      memory_target_option="--max-memory-target=${job_memory_target}"
      features_option="--features mem_limiter"
    else
      unset memory_target_option
      unset features_option
    fi

    set +e
    cargo run --quiet --release $features_option -- \
      ${S3_BUCKET_NAME} ${mount_dir} \
      --allow-delete \
      --allow-overwrite \
      --log-directory=${log_dir} \
      --prefix=${S3_BUCKET_TEST_PREFIX} \
      --log-metrics \
      $part_size_option \
      $memory_target_option \
      ${optional_args}
    mount_status=$?
    set -e
    if [ $mount_status -ne 0 ]; then
      echo "Failed to mount file system"
      exit 1
    fi

    # Lay out files for the test:
    echo >&2 Laying out files for $job_file
    fio --thread \
      --directory=${mount_dir} \
      --create_only=1 \
      --eta=never \
      ${job_file}

    # run the benchmark
    echo >&2 Running $job_file
    run_fio_job $job_file $mount_dir $log_dir

    # collect resource utilization metrics (peak memory usage + extra metrics for mem-limited runs)
    extra_metrics_args=""
    if [[ "${is_mem_limited}" == true ]]; then
      extra_metrics_args="--extra-metrics-dir ${results_dir}/extra_metrics"
    fi
    cargo run --bin mount-s3-log-analyzer ${log_dir} ${results_dir}/${job_name}_peak_mem.json ${job_name} ${extra_metrics_args}

    cleanup
    trap - EXIT

  done
}

# Run benchmarks for each specified category
for category in "${categories[@]}"; do
  run_benchmarks "$category"
done

# combine all bench results into one json file
echo "Throughput:"
jq -n '[inputs]' ${results_dir}/*_parsed.json | tee ${results_dir}/output.json
echo "Peak memory usage:"
jq -n '[inputs]' ${results_dir}/*_peak_mem.json | tee ${results_dir}/peak_mem_usage.json

# Breach detection summary for memory-limited runs
if [[ "${is_mem_limited}" == true ]]; then
  echo ""
  echo "=== Memory Breach Detection ==="

  summary_table="| Test | Peak RSS (MiB) | Peak Prefetch Reserved (MiB) | Peak Upload Reserved (MiB) | Peak Pool GetObject (MiB) | Peak Pool PutObject (MiB) | Memory Limit (MiB) | Status |\n"
  summary_table+="|---|---|---|---|---|---|---|---|\n"

  for peak_mem_file in ${results_dir}/*_peak_mem.json; do
    test_name=$(jq -r '.name' "${peak_mem_file}")
    peak_value=$(jq -r '.value' "${peak_mem_file}")
    mem_target=$(get_memory_target_for_job "${test_name}")

    # Read extra metrics if available
    read_extra_metric() {
      local file="${results_dir}/extra_metrics/${test_name}_${1}.json"
      if [[ -f "${file}" ]]; then
        jq -r '.value' "${file}"
      else
        echo "N/A"
      fi
    }
    prefetch_value=$(read_extra_metric "prefetch_reserved")
    upload_value=$(read_extra_metric "upload_reserved")
    pool_get_value=$(read_extra_metric "pool_get_object")
    pool_put_value=$(read_extra_metric "pool_put_object")

    if (( $(echo "${peak_value} > ${mem_target}" | bc -l) )); then
      status="❌ BREACHED"
    else
      status="✅ OK"
    fi
    summary_table+="| ${test_name} | ${peak_value} | ${prefetch_value} | ${upload_value} | ${pool_get_value} | ${pool_put_value} | ${mem_target} | ${status} |\n"
  done

  echo -e "${summary_table}"

  if [[ -n "${GITHUB_STEP_SUMMARY}" ]]; then
    echo "## Memory Breach Detection" >> "${GITHUB_STEP_SUMMARY}"
    echo "" >> "${GITHUB_STEP_SUMMARY}"
    echo -e "${summary_table}" >> "${GITHUB_STEP_SUMMARY}"
  fi
fi
