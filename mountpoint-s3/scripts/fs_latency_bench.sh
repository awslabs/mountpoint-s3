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

rm -rf ${results_dir}
mkdir -p ${results_dir}

# start readdir benchmarking
dir_size=100
jobs_dir=mountpoint-s3/scripts/fio/create

while [ $dir_size -le 100000 ]
do
    sum=0
    job_name="readdir_${dir_size}"
    job_file="${jobs_dir}/create_files_${dir_size}.fio"
    mount_dir=$(mktemp -d /tmp/mount-s3-XXXXXXXXXXXX)
    target_dir="${mount_dir}/bench_dir_${dir_size}"
    startdelay=30

    log_dir=logs/${job_name}
    mkdir -p $log_dir

    echo "Running ${job_name}"

    # mount file system
    cargo run --release ${S3_BUCKET_NAME} ${mount_dir} \
        --debug \
        --allow-delete \
        --log-directory=$log_dir \
        --prefix=${S3_BUCKET_TEST_PREFIX} \
        --log-metrics \
        ${optional_args}
    mount_status=$?
    if [ $mount_status -ne 0 ]; then
        echo "Failed to mount file system"
        exit 1
    fi

    # create the target directory if it does not exist before running the benchmark
    mkdir -p ${target_dir}
    # create the files in target directory if they do not exist
    file_count=$(ls $target_dir | wc -l)
    if [ $file_count -ne $dir_size ]; then
      fio --thread --directory=${target_dir} ${job_file}
    fi

    sleep $startdelay
    # run each case for 10 iterations
    iteration=10
    for i in $(seq 1 $iteration);
    do
        # we don't know for sure how long does it take, but 5 minutes should be enough
        timeout 300s /usr/bin/time -o ${results_dir}/time_output.txt -v ls -f "${target_dir}" >/dev/null 2>&1
        job_status=$?
        if [ $job_status -ne 0 ]; then
          tail -1000 ${log_dir}/mountpoint-s3-*
          echo "Job ${job_name} failed with exit code ${job_status}"
          exit 1
        fi

        elapsed_time=$(awk '/Elapsed/ {print $8}' ${results_dir}/time_output.txt)

        # the result has m:ss format so we will split it into two parts and convert them to seconds
        IFS=':'; splitted_time=($elapsed_time); unset IFS;
        minutes=${splitted_time[0]}
        seconds=${splitted_time[1]}
        elapsed_time=$(awk "BEGIN {print ($minutes*60)+$seconds}")

        sum=$(awk "BEGIN {print $sum+$elapsed_time}")

        # pause for a while before running next iteration
        sleep 1
    done
    average=$(awk "BEGIN {print $sum/$iteration}")
    # now convert it to json
    json_data="{\"name\":\"$job_name\",\"value\":$average,\"unit\":\"seconds\"}"
    echo $json_data | jq '.' | tee ${results_dir}/${job_name}.json

    # unmount file system
    sudo umount ${mount_dir}

    # cleanup mount directory
    rm -rf ${mount_dir}

    # increase directory size
    dir_size=$(awk "BEGIN {print $dir_size*10}")
done

# Run benchmarks which measure the latencies of real-world usage patterns of Mountpoint. These include file system operations instead of focusing solely on IO data transfer.
run_file_system_benchmarks() {
  mount_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)
  log_dir=logs/file_system_benchmarks

  # mount file system
  cargo run --release ${S3_BUCKET_NAME} ${mount_dir} \
    --allow-delete \
    --allow-overwrite \
    --log-directory=$log_dir \
    --prefix=${S3_BUCKET_TEST_PREFIX} \
    --log-metrics \
    ${optional_args}
  mount_status=$?
  if [ $mount_status -ne 0 ]; then
    echo "Failed to mount file system"
    exit 1
  fi

  # run file system benchmarks binary
  file_system_benchmarks_out_file_path=${results_dir}/file_system_benchmarks_parsed.json
  cargo run --release --bin file-system-benchmarks ${mount_dir} ${file_system_benchmarks_out_file_path}  # This generates a *_parsed.json file which will be included in the resulting output json
}

run_file_io_benchmarks() {
  category=$1
  jobs_dir=mountpoint-s3/scripts/fio/${category}_latency
  
  for job_file in "${jobs_dir}"/*.fio; do
    mount_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)
    job_name=$(basename "${job_file}")
    job_name="${job_name%.*}"

    log_dir=logs/${job_name}
    mkdir -p $log_dir

    echo "Running ${job_name}"

    # mount file system
    cargo run --release ${S3_BUCKET_NAME} ${mount_dir} \
      --allow-delete \
      --allow-overwrite \
      --log-directory=$log_dir \
      --prefix=${S3_BUCKET_TEST_PREFIX} \
      --log-metrics \
      ${optional_args}
    mount_status=$?
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
    timeout 300s fio --thread \
      --output=${results_dir}/${job_name}.json \
      --output-format=json \
      --directory=${mount_dir} \
      ${job_file}
    job_status=$?
    if [ $job_status -ne 0 ]; then
      tail -1000 ${log_dir}/mountpoint-s3-*
      echo "Job ${job_name} failed with exit code ${job_status}"
      exit 1
    fi

    jq -n 'inputs.jobs[] | if (."job options".rw == "read") 
      then {name: .jobname, value: (.read.lat_ns.mean / 1000000), unit: "milliseconds"} 
      elif (."job options".rw == "randread") then {name: .jobname, value: (.read.lat_ns.mean / 1000000), unit: "milliseconds"} 
      elif (."job options".rw == "randwrite") then {name: .jobname, value: (.write.lat_ns.mean / 1000000), unit: "milliseconds"} 
      else {name: .jobname, value: (.write.lat_ns.mean / 1000000), unit: "milliseconds"} end' ${results_dir}/${job_name}.json | tee ${results_dir}/${job_name}_parsed.json

    # delete the raw output file from fio
    rm ${results_dir}/${job_name}.json

  done
}

run_file_system_benchmarks
run_file_io_benchmarks read
run_file_io_benchmarks write

# combine all bench results into one json file
jq -n '[inputs] | flatten' ${results_dir}/*.json | tee ${results_dir}/output.json
