#!/bin/bash

set -e

aws --version || (curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && sudo ./aws/install)

echo "{\"commit\": {\"id\": \"${COMMIT_ID}\"}, \"benches\": $(cat results/output.json)}" > results/s3_output.json
DATE=$(date +%s)
echo "Storing benchmark results as ${S3_BENCH_RESULTS_PREFIX}/${DATE}.json"
aws s3 cp \
    --region ${S3_BENCH_REGION} \
    results/s3_output.json \
    s3://${S3_BENCH_BUCKET_NAME}/${S3_BENCH_RESULTS_PREFIX}/${DATE}.json
