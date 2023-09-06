#!/bin/bash

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
iteration=10

rm -rf ${results_dir}
mkdir -p ${results_dir}

run_fio_job() {
  job_file=$1
  bench_file=$2
  mount_dir=$3

  job_name=$(basename "${job_file}")
  job_name="${job_name%.*}"

  for i in $(seq 1 $iteration);
  do
    fio --thread \
      --output=${results_dir}/${job_name}_${i}.json \
      --output-format=json \
      --directory=${mount_dir} \
      --filename=${bench_file} \
      ${job_file}
  done

  # combine the results and find an average value
  jq -n 'reduce inputs.jobs[] as $job (null; .name = $job.jobname | .len += 1 | .value += (if ($job."job options".rw == "read")
      then $job.read.bw / 1024
      elif ($job."job options".rw == "randread") then $job.read.bw / 1024
      elif ($job."job options".rw == "randwrite") then $job.write.bw / 1024
      else $job.write.bw / 1024 end)) | {name: .name, value: (.value / .len), unit: "MiB/s"}' ${results_dir}/${job_name}_*.json | tee ${results_dir}/${job_name}_parsed.json

  # delete the raw output files
  for i in $(seq 1 $iteration);
  do
    rm ${results_dir}/${job_name}_${i}.json
  done
}

read_bechmark () {
  jobs_dir=mountpoint-s3/scripts/fio/read

  for job_file in "${jobs_dir}"/*.fio; do
    mount_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)

    echo "Running ${job_name}"

    # mount file system
    cargo run --release ${S3_BUCKET_NAME} ${mount_dir} \
      --allow-delete \
      --prefix=${S3_BUCKET_TEST_PREFIX}
    mount_status=$?
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
    run_fio_job $job_file $bench_file $mount_dir

    # unmount file system
    sudo umount ${mount_dir}

    # cleanup mount directory
    rm -rf ${mount_dir}
  done
}

write_benchmark () {
  jobs_dir=mountpoint-s3/scripts/fio/write

  for job_file in "${jobs_dir}"/*.fio; do
    # mount file system
    mount_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)
    cargo run --release ${S3_BUCKET_NAME} ${mount_dir} \
        --allow-delete \
        --prefix=${S3_BUCKET_TEST_PREFIX}
    mount_status=$?
    if [ $mount_status -ne 0 ]; then
        echo "Failed to mount file system"
        exit 1
    fi

    # set bench file
    bench_file=${mount_dir}/${job_name}_${RANDOM}.dat

    # run the benchmark
    run_fio_job $job_file $bench_file $mount_dir

    # unmount file system
    sudo umount ${mount_dir}

    # cleanup mount directory
    rm -rf ${mount_dir}
  done
}

read_bechmark
write_benchmark

# combine all bench results into one json file
jq -n '[inputs]' ${results_dir}/*.json | tee ${results_dir}/output.json
