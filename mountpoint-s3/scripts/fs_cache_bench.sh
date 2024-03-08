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

if [[ -n "${S3_JOB_NAME_FILTER}" ]]; then
  echo "Will only run fio jobs which match $S3_JOB_NAME_FILTER"
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
  jq -n 'reduce inputs.jobs[] as $job (null; .name = $job.jobname | .len += 1 | .value += (if ($job."job options".rw == "read")
      then $job.read.bw / 1024
      elif ($job."job options".rw == "randread") then $job.read.bw / 1024
      elif ($job."job options".rw == "randwrite") then $job.write.bw / 1024
      else $job.write.bw / 1024 end)) | {name: .name, value: (.value / .len), unit: "MiB/s"}' ${results_dir}/${job_name}_iter*.json | tee ${results_dir}/${job_name}_parsed.json
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

should_setup_storage() {
    if [[ -z "${S3_MOUNT_LOCAL_STORAGE}" ]]; then
      echo "Skipping storage setup"
      return 1
    else
      echo "Setting up storage"
      return 0
    fi
}

cache_benchmark () {
  jobs_dir=mountpoint-s3/scripts/fio/read

  if should_setup_storage; then
    local_storage=/localstorage
    sudo mkfs -t ext4 /dev/nvme1n1 #/dev/nvme0n1 is used by root EBS vol
    sudo mkdir $local_storage
    current_user_id=$(id -u)
    sudo mount /dev/nvme1n1 $local_storage
    sudo chown -R $current_user_id $local_storage
    echo "mounted local file system at $local_storage"
  else
    local_storage=/tmp
  fi

  for job_file in "${jobs_dir}"/*.fio; do

    if ! should_run_job "${job_file}"; then
      echo "Skipping job ${job_file} because it does not match ${S3_JOB_NAME_FILTER}"
      continue
    fi

    mount_dir=$(mktemp -d /tmp/fio-XXXXXXXXXXXX)
    # creates a cache directoy with the suffix of the mount directory
    cache_dir=$(mktemp -d -p $local_storage -t `basename "${mount_dir}"`-cache-XXXXXXXXXXXX)

    job_name=$(basename "${job_file}")
    job_name="${job_name%.*}"
    log_dir=logs/${job_name}

    # cleanup mount directory and log directory
    cleanup() {
      echo "cache_benchmark:cleanup"
      # unmount file system only if it is mounted
      ! mountpoint -q ${mount_dir} || sudo umount ${mount_dir}
      rm -rf ${mount_dir}
      rm -rf ${log_dir}
    }

    # trap cleanup on exit
    trap 'cleanup' EXIT

    rm -rf ${log_dir}
    mkdir -p ${log_dir}

    # mount file system
    set +e
    cargo run --quiet --release -- \
      ${S3_BUCKET_NAME} ${mount_dir} \
      --debug \
      --allow-delete \
      --cache=${cache_dir} \
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

    echo "caching data in ${cache_dir} for ${job_file}"
    cat $mount_dir/${bench_file} > /dev/null
    if [ -z "$(ls -A ${cache_dir}/mountpoint-cache/)" ]; then
      echo "cache directory ${cache_dir} is empty, exiting..."
      exit 1
    fi
    # report disk usage
    df -hT
    # run the benchmark
    run_fio_job $job_file $bench_file $mount_dir $log_dir

    cleanup
  done
}

cache_benchmark

# combine all bench results into one json file
jq -n '[inputs]' ${results_dir}/*_parsed.json | tee ${results_dir}/output.json
