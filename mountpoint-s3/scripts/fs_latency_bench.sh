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

base_dir=$(dirname "$0")
project_dir="${base_dir}/../.."
cd ${project_dir}

results_dir=results
jobs_dir=mountpoint-s3/scripts/fio
target_gbps=100
thread_count=4

rm -rf ${results_dir}
mkdir -p ${results_dir}

# start readdir benchmarking
dir_size=100
while [ $dir_size -le 100000 ]
do
    sum=0
    job_name="readdir_${dir_size}"
    mount_dir=$(mktemp -d /tmp/mount-s3-XXXXXXXXXXXX)
    target_dir="${mount_dir}/bench_dir_${dir_size}"
    startdelay=30

    echo "Running ${job_name}"

    # mount file system
    cargo run --release ${S3_BUCKET_NAME} ${mount_dir} \
        --prefix=${S3_BUCKET_TEST_PREFIX} \
        --throughput-target-gbps=${target_gbps} \
        --thread-count=${thread_count}
    mount_status=$?
    if [ $mount_status -ne 0 ]; then
        echo "Failed to mount file system"
        exit 1
    fi

	# verify that the target directory exists before running the benchmark
	if [ ! -d "${target_dir}" ]; then
		echo "Target directory ${target_dir} does not exist."
		exit 1
	fi

    sleep $startdelay
    # run each case for 10 iterations
    for i in {1..10};
    do
        /usr/bin/time -o ${results_dir}/time_output.txt -v ls -f "${target_dir}" >/dev/null 2>&1

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
    average=$(awk "BEGIN {print $sum/10}")
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

# combine all bench results into one json file
jq -n '[inputs]' ${results_dir}/*.json | tee ${results_dir}/output.json
