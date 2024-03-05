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

if [[ -z "${S3_BUCKET_BENCH_FILE}" ]]; then
  echo "Set S3_BUCKET_BENCH_FILE to run this benchmark"
  exit 1
fi

if [[ -z "${S3_BUCKET_SMALL_BENCH_FILE}" ]]; then
  echo "Set S3_BUCKET_SMALL_BENCH_FILE to run this benchmark"
  exit 1
fi

base_dir=$(dirname "$0")
project_dir="${base_dir}/../.."
cd ${project_dir}

results_dir=results
runtime_seconds=30
startdelay_seconds=30
iterations=10

rm -rf ${results_dir}
mkdir -p ${results_dir}

run_fio_job() {
  job_file=$1
  bench_file=$2
  mount_dir=$3
  log_dir=$4

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
      --filename=${bench_file} \
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

  # combine the results and find an average value
  # TODO: requires testing
  jq -n 'reduce inputs.jobs[] as $job (null; .name = $job.jobname | .len += 1 | .value += (if ($job."job options".rw | startswith("read"))
      then $job.read.bw / 1024
      elif ($job."job options".rw == "randread") then $job.read.bw / 1024
      elif ($job."job options".rw == "randwrite") then $job.write.bw / 1024
      else $job.write.bw / 1024 end)) | {name: .name, value: (.value / .len), unit: "MiB/s"}' ${results_dir}/${job_name}_iter*.json | tee ${results_dir}/${job_name}_parsed.json
}

read_benchmark () {
  jobs_dir=mountpoint-s3/scripts/fio/read

  for job_file in "${jobs_dir}"/*.fio; do
    mount_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)

    job_name=$(basename "${job_file}")
    job_name="${job_name%.*}"
    log_dir=logs/${job_name}
    rm -rf ${log_dir}
    mkdir -p ${log_dir}

    # mount file system
    set +e
    cargo run --quiet --release -- \
      ${S3_BUCKET_NAME} ${mount_dir} \
      --debug \
      --allow-delete \
      --log-directory=${log_dir} \
      --prefix=${S3_BUCKET_TEST_PREFIX} \
      --part-size=16777216
    mount_status=$?
    set -e
    if [ $mount_status -ne 0 ]; then
      echo "Failed to mount file system"
      exit 1
    fi

    # set bench file
    bench_file=${S3_BUCKET_BENCH_FILE}
    # run against small file if the job file ends with small.fio
    if [[ $job_file == *small.fio ]]; then
      bench_file=${S3_BUCKET_SMALL_BENCH_FILE}
    fi

    # run the benchmark
    run_fio_job $job_file $bench_file $mount_dir $log_dir

    # unmount file system
    sudo umount ${mount_dir}

    # cleanup mount directory and log directory
    rm -rf ${mount_dir}
    rm -rf ${log_dir}
  done
}

write_benchmark () {
  jobs_dir=mountpoint-s3/scripts/fio/write

  for job_file in "${jobs_dir}"/*.fio; do
    job_name=$(basename "${job_file}")
    job_name="${job_name%.*}"
    log_dir=logs/${job_name}
    rm -rf ${log_dir}
    mkdir -p ${log_dir}

    # mount file system
    mount_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)
    set +e
    cargo run --quiet --release -- \
      ${S3_BUCKET_NAME} ${mount_dir} \
      --debug \
      --allow-delete \
      --log-directory=${log_dir} \
      --prefix=${S3_BUCKET_TEST_PREFIX}
    mount_status=$?
    set -e
    if [ $mount_status -ne 0 ]; then
      echo "Failed to mount file system"
      exit 1
    fi

    # set bench file
    bench_file=${job_name}_${RANDOM}.dat

    # run the benchmark
    run_fio_job $job_file $bench_file $mount_dir $log_dir

    # unmount file system
    sudo umount ${mount_dir}

    # cleanup mount directory and log directory
    rm -rf ${mount_dir}
    rm -rf ${log_dir}
  done
}

read_benchmark
write_benchmark

# combine all bench results into one json file
jq -n '[inputs]' ${results_dir}/*_parsed.json | tee ${results_dir}/output.json
