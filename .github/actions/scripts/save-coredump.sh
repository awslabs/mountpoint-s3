#!/bin/bash

bucket_name=$S3_BUCKET_NAME
bucket_prefix=$S3_BUCKET_TEST_PREFIX

# list coredump records
coredumpctl list

# get all coredump records to find their associated binary files
coredump_records=`coredumpctl --no-legend | awk '{print $5,$10}'`

if [ -z "${coredump_records}" ]; then
    # no coredump found so we can stop
    exit 0
fi

while IFS= read -r line; do
    # get the pid to help matching it with the coredump
    pid=`echo $line | awk '{print $1}'`
    binary_path=`echo $line | awk '{print $2}'`
    binary_name=$(basename $binary_path)
    # upload each binary to S3
    aws s3 cp ${binary_path} s3://${bucket_name}/${bucket_prefix}binary/${pid}_${binary_name}

    coredump_filename=core_${pid}_${binary_name}
    coredump_path=${HOME}/${coredump_filename}
    coredumpctl dump ${pid} --output=${coredump_path}
    # upload each coredump file to S3
    aws s3 cp ${coredump_path} s3://${bucket_name}/${bucket_prefix}coredump/${coredump_filename}
done <<< "$coredump_records"
