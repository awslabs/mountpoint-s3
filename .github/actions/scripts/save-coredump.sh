#!/bin/bash

bucket_name=$S3_BUCKET_NAME
bucket_prefix=$S3_BUCKET_TEST_PREFIX
coredump_path=/var/lib/systemd/coredump/
coredump_pattern=core.*

# list core dump records
coredumpctl list

# upload core dump files to S3
aws s3 cp ${coredump_path} s3://${bucket_name}/${bucket_prefix}coredump/ --recursive --exclude "*" --include "${coredump_pattern}"

# get all core dump records to find their associated binary files
coredump_records=`coredumpctl --no-legend | awk '{print $5,$10}'`

while IFS= read -r line; do
    # get the pid to help matching it with the core dump
    pid=`echo $line | awk '{print $1}'`
    binary_path=`echo $line | awk '{print $2}'`
    binary_name=$(basename $binary_path)
    # upload each binary to S3
    aws s3 cp ${binary_path} s3://${bucket_name}/${bucket_prefix}binary/${pid}_${binary_name}
done <<< "$coredump_records"
