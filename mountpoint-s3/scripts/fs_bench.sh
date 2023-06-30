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
thread_count=4

rm -rf ${results_dir}
mkdir -p ${results_dir}

read_bechmark () {
  jobs_dir=mountpoint-s3/scripts/fio/read

  for job_file in "${jobs_dir}"/*.fio; do
    mount_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)
    job_name=$(basename "${job_file}")
    job_name="${job_name%.*}"

    echo "Running ${job_name}"

    # mount file system
    cargo run --release --features delete ${S3_BUCKET_NAME} ${mount_dir} \
      --prefix=${S3_BUCKET_TEST_PREFIX} \
      --thread-count=${thread_count}
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

    # run benchmark
    fio --thread \
      --output=${results_dir}/${job_name}.json \
      --output-format=json \
      --directory=${mount_dir} \
      --filename=${bench_file} \
      ${job_file}

    # unmount file system
    sudo umount ${mount_dir}

    # cleanup mount directory
    rm -rf ${mount_dir}

    # parse result
    jq -n 'inputs.jobs[] | if (."job options".rw == "read")
      then {name: .jobname, value: (.read.bw / 1024), unit: "MiB/s"}
      elif (."job options".rw == "randread") then {name: .jobname, value: (.read.bw / 1024), unit: "MiB/s"}
      elif (."job options".rw == "randwrite") then {name: .jobname, value: (.write.bw / 1024), unit: "MiB/s"}
      else {name: .jobname, value: (.write.bw / 1024), unit: "MiB/s"} end' ${results_dir}/${job_name}.json | tee ${results_dir}/${job_name}_parsed.json

    # delete the raw output file
    rm ${results_dir}/${job_name}.json
  done
}

write_benchmark () {
  # mount file system
  mount_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)
  cargo run --release --features delete ${S3_BUCKET_NAME} ${mount_dir} \
      --prefix=${S3_BUCKET_TEST_PREFIX} \
      --thread-count=${thread_count}
  mount_status=$?
  if [ $mount_status -ne 0 ]; then
      echo "Failed to mount file system"
      exit 1
  fi
  sleep $startdelay_seconds
  
  ## sequential write
  job_name="sequential_write"
  bench_file=${mount_dir}/${job_name}_${RANDOM}.dat
  dd if=/dev/zero of=$bench_file bs=256k conv=fsync > ${results_dir}/${job_name}.txt 2>&1 &
  # get the process ID
  dd_pid=$!

  sleep $runtime_seconds
  # send USR1 signal to print the result
  kill -USR1 ${dd_pid}
  sleep 0.1
  kill ${dd_pid}

  throughput_value=$(awk '/copied/ {print $10}' ${results_dir}/${job_name}.txt)
  unit=$(awk '/copied/ {print $11}' ${results_dir}/${job_name}.txt)
  # convert unit to MiB/s
  case "$unit" in
    GB/s)
      throughput_value=$(awk "BEGIN {print $throughput_value*1000*1000*1000/1024/1024}")
      ;;
    MB/s)
      throughput_value=$(awk "BEGIN {print $throughput_value*1000*1000/1024/1024}")
      ;;
    kB/s)
      throughput_value=$(awk "BEGIN {print $throughput_value*1000/1024/1024}")
      ;;
  esac

  json_data="{\"name\":\"$job_name\",\"value\":$throughput_value,\"unit\":\"MiB/s\"}"
  echo $json_data | jq '.' | tee ${results_dir}/${job_name}.json

  # clean up the data file and the raw output file
  sleep 10
  rm $bench_file ${results_dir}/${job_name}.txt


  ## sequential write with direct IO
  job_name="sequential_write_direct_io"
  bench_file=${mount_dir}/${job_name}_${RANDOM}.dat
  dd if=/dev/zero of=$bench_file bs=256k oflag=direct conv=fsync > ${results_dir}/${job_name}.txt 2>&1 &
  # get the process ID
  dd_pid=$!

  sleep $runtime_seconds
  # send USR1 signal to print the result
  kill -USR1 ${dd_pid}
  sleep 0.1
  kill ${dd_pid}

  throughput_value=$(awk '/copied/ {print $10}' ${results_dir}/${job_name}.txt)
  unit=$(awk '/copied/ {print $11}' ${results_dir}/${job_name}.txt)
  # convert unit to MiB/s
  case "$unit" in
    GB/s)
      throughput_value=$(awk "BEGIN {print $throughput_value*1000*1000*1000/1024/1024}")
      ;;
    MB/s)
      throughput_value=$(awk "BEGIN {print $throughput_value*1000*1000/1024/1024}")
      ;;
    kB/s)
      throughput_value=$(awk "BEGIN {print $throughput_value*1000/1024/1024}")
      ;;
  esac

  json_data="{\"name\":\"$job_name\",\"value\":$throughput_value,\"unit\":\"MiB/s\"}"
  echo $json_data | jq '.' | tee ${results_dir}/${job_name}.json

  # clean up the data file and the raw output file
  sleep 10
  rm $bench_file ${results_dir}/${job_name}.txt

  # unmount file system
  sudo umount ${mount_dir}

  # cleanup mount directory
  rm -rf ${mount_dir}
}

read_bechmark
write_benchmark

# combine all bench results into one json file
jq -n '[inputs]' ${results_dir}/*.json | tee ${results_dir}/output.json
