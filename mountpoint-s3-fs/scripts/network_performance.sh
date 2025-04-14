#!/bin/bash

set -euo pipefail

output_file="instance_throughput.rs"
timestamp="$(date --utc +%FT%TZ)"
region=us-east-1
version_number=0.0.3

# Network throughput query
query_ec2_instance_network_throughput="aws ec2 describe-instance-types \
--filters \"Name=instance-type,Values=*\" \
--query \"InstanceTypes[].[InstanceType, NetworkInfo.NetworkPerformance]\" \
--region ${region} \
--output json"

# Special case handling
declare -r -A THROUGHPUT_OVERRIDE=(
    ["dl1.24xlarge"]=400
    ["p4d.24xlarge"]=400
    ["p4de.24xlarge"]=400
    ["trn1.32xlarge"]=800
    ["trn1n.32xlarge"]=1600
)

# Start generating Rust code
{
    echo "// Generated from AWS EC2 API"
    echo "// Region: ${region}"
    echo "// Timestamp: ${timestamp}"
    echo "// Version: ${version_number}"
    echo ""
    echo "pub fn get_instance_throughput(instance_type: &str) -> Option<f64> {"
    echo "    match instance_type {"
} > "${output_file}"

# Process EC2 instance types
eval $query_ec2_instance_network_throughput | \
    jq -c 'sort_by(.[0]) | .[]' | \
    while read line; do
        instance_type=$(echo $line | cut -d ',' -f1 | sed 's/\[//' | sed 's/\"//g')
        
        if [ -v THROUGHPUT_OVERRIDE[$instance_type] ]; then
            throughput=${THROUGHPUT_OVERRIDE[$instance_type]}
            printf "        \"%s\" => Some(%.2f),\n" "${instance_type}" "${throughput}" >> "${output_file}"
        else
            throughput=$(echo $line | cut -d ',' -f2 | sed 's/\s*[a-zA-Z]\s*//g' | sed 's/\]//' | sed 's/\"//g')
            if [[ -z "$throughput" ]]; then
                printf "        \"%s\" => None,\n" "${instance_type}" >> "${output_file}"
            else
                printf "        \"%s\" => Some(%.2f),\n" "${instance_type}" "${throughput}" >> "${output_file}"
            fi
        fi
    done

# Close the Rust code
{
    echo "        _ => None,"
    echo "    }"
    echo "}"
} >> "${output_file}"

echo "Generated ${output_file}"
