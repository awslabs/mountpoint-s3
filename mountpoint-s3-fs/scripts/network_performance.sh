#!/bin/bash

set -euo pipefail

output_file="instance_throughput.rs"
timestamp="$(date --utc +%FT%TZ)"
version_number=0.0.3

# Fetch all enabled regions
echo "Fetching available AWS regions..."
regions=($(aws ec2 describe-regions \
    --query 'Regions[].RegionName' \
    --output text \
    --filters "Name=opt-in-status,Values=opted-in,opt-in-not-required"))

echo "Found ${#regions[@]} regions: ${regions[*]}"

# Special case handling
declare -r -A THROUGHPUT_OVERRIDE=(
    ["dl1.24xlarge"]=400
    ["p4d.24xlarge"]=400
    ["p4de.24xlarge"]=400
    ["trn1.32xlarge"]=800
    ["trn1n.32xlarge"]=1600
    ["trn2.48xlarge"]=32000
)

# Create temporary directory for region results
temp_dir=$(mktemp -d)
trap 'rm -rf "$temp_dir"' EXIT

# Function to query a single region
query_region() {
    local region=$1
    local temp_file="${temp_dir}/${region}.json"

    echo "Querying region: ${region}"
    aws ec2 describe-instance-types \
        --filters "Name=instance-type,Values=*" \
        --query "InstanceTypes[].[InstanceType, NetworkInfo.NetworkPerformance]" \
        --region "${region}" \
        --output json > "${temp_file}" 2>/dev/null || {
            echo "Failed to query region ${region}"
            return 1
        }

    echo "Completed query for ${region}"
    echo "${temp_file}"
}

echo "Querying regions..."
for region in "${regions[@]}"; do
    query_region "${region}"
done

# Check if we have any results
if [ ! "$(ls -A ${temp_dir})" ]; then
    echo "Error: No data was retrieved from any region"
    exit 1
fi

# Merge results from all regions
echo "Merging results..."
merged_json=$(jq -s 'add | unique_by(.[0])' "${temp_dir}"/*.json)

# Start generating Rust code
{
    echo "// Generated from AWS EC2 API"
    echo "// Regions: ${regions[*]}"
    echo "// Timestamp: ${timestamp}"
    echo "// Version: ${version_number}"
    echo ""
    echo "pub fn get_instance_throughput(instance_type: &str) -> Option<f64> {"
    echo "    match instance_type {"
} > "${output_file}"

# Process merged results
echo "${merged_json}" | \
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
