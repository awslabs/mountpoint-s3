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

base_dir=$(dirname "$0")
project_dir="${base_dir}/../.."
cd ${project_dir}

results_dir=results
runtime_seconds=30
startdelay_seconds=30
: ${iterations:=10}

rm -rf ${results_dir}
mkdir -p ${results_dir}

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
  jq -s '[
      [.[].jobs] | add | group_by(.jobname)[] |
          {
              name: .[0].jobname,
              value: ((map(
                  if .["job options"].rw | test("^(rand)?read")
                  then .read.bw
                  else .write.bw
                  end
              ) | add) / (length * 1024))
          }
      ] | {
          name: map(.name) | unique | join(","),
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
    set +e
    cargo run --quiet --release -- \
      ${S3_BUCKET_NAME} ${mount_dir} \
      --allow-delete \
      --allow-overwrite \
      --log-directory=${log_dir} \
      --prefix=${S3_BUCKET_TEST_PREFIX} \
      --log-metrics \
      $part_size_option \
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

    # collect resource utilization metrics (peak memory usage)
    cargo run --bin mount-s3-log-analyzer ${log_dir} ${results_dir}/${job_name}_peak_mem.json ${job_name}

    cleanup
    trap - EXIT

  done
}

run_benchmarks read
run_benchmarks write
run_benchmarks mix

# combine all bench results into one json file
echo "Throughput:"
jq -n '[inputs]' ${results_dir}/*_parsed.json | tee ${results_dir}/output.json
echo "Peak memory usage:"
jq -n '[inputs]' ${results_dir}/*_peak_mem.json | tee ${results_dir}/peak_mem_usage.json
