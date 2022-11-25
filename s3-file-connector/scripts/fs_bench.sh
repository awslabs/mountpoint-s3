#!/bin/bash

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

results_dir=results
jobs_dir=s3-file-connector/scripts/fio
target_gbps=100
thread_count=4

rm -rf ${results_dir}
mkdir -p ${results_dir}

for job_file in "${jobs_dir}"/*.fio; do
  temp_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)
  job_name=$(basename "${job_file}")
  job_name="${job_name%.*}"
  
  # mount file system
  nohup s3-file-connector ${S3_BUCKET_NAME} ${temp_dir} \
    --prefix=${S3_BUCKET_TEST_PREFIX} \
    --throughput-target-gbps=100 \
    --thread-count=4 > nohup.out 2>&1 &

  # wait for file system to be ready
  sleep 5

  # set bench file
  bench_file=${S3_BUCKET_BENCH_FILE}
  # run against small file if the job file ends with small.fio
  if [[ $job_file == *small.fio ]]; then
    bench_file=${S3_BUCKET_SMALL_BENCH_FILE}
  fi

  # run benchmark
  fio --thread \
    --output=${results_dir}/${job_name}.json \
    --output-format=json \
    --directory=${temp_dir} \
    --filename=${bench_file} \
    ${job_file}

  # unmount file system
  sudo umount ${temp_dir}

  # cleanup
  rm -rf ${temp_dir}
done

# parse result
jq -n '[inputs.jobs[] | if (."job options".rw == "read") 
  then {name: .jobname, value: (.read.bw / 1024), unit: "MiB/s"} 
  elif (."job options".rw == "randread") then {name: .jobname, value: (.read.bw / 1024), unit: "MiB/s"} 
  elif (."job options".rw == "randwrite") then {name: .jobname, value: (.write.bw / 1024), unit: "MiB/s"} 
  else {name: .jobname, value: (.write.bw / 1024), unit: "MiB/s"} end]' results/*.json | tee ${results_dir}/output.json
