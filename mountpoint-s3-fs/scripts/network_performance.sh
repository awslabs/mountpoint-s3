#!/bin/bash

# Please ensure 'jq' and AWS CLI v2 are installed before executing this script.
# The purpose of this script is to generate a json file contains network throughput numbers of each EC2 instance types.

set -euo pipefail

result_file=network_performance.json
temp_file=/tmp/temporary
timestamp="$(date --utc +%FT%TZ)"
region=us-east-1
version_number=0.0.2

# Network throughput query
query_ec2_instance_network_throughput="aws ec2 describe-instance-types
--filters \"Name=instance-type,Values=*\"
--query \"InstanceTypes[].[InstanceType, NetworkInfo.NetworkPerformance]\"
--region ${region}
--output json"

# Special case handling:
# The results for the following three instances are:
#    dll.24xlarge  --> 4x 100 Gbps
#    p4d.24xlarge  --> 4x 100 Gbps
#    trn1.32xlarge --> 8x 100 Gbps
# Convert them to numbers when write to json entries.
declare -r -A THROUGHPUT_OVERRIDE=(
    ["dl1.24xlarge"]=400
    ["p4d.24xlarge"]=400
    ["p4de.24xlarge"]=400
    ["trn1.32xlarge"]=800
    ["trn1n.32xlarge"]=1600
)

(> ${temp_file})

generate_json_entry() {
    echo "{"
    echo "\"version\":{\"region\":\"${region}\",\"timestamp\":\"${timestamp}\",\"version_number\":\"${version_number}\"},"
    echo "\"instance_throughput\": {"
    eval $query_ec2_instance_network_throughput | \
        jq -c 'sort_by(.[0]) | .[]' | \
        while read line;do
            # extract instance type as a string. eg: "m5dn.12xlarge"
            instance_type=`echo $line | cut -d ',' -f1 | sed 's/\[//' | sed 's/\"//g'`

            # special cases handling
            if [ -v THROUGHPUT_OVERRIDE[$instance_type] ]; then
                instance_throughput=`echo ${THROUGHPUT_OVERRIDE[$instance_type]}`
            else
                # extract instance throughput as a number. eg: 50
                instance_throughput=`echo $line | cut -d ',' -f2 | sed 's/\s*[a-zA-Z]\s*//g' | sed 's/\]//' | sed 's/\"//g'`
            fi

            # concatenate both as a key:value pair. eg: "m5dn.12xlarge":50
            type_throughput_pair="\"$instance_type\":$instance_throughput"

            # some instance types is missing throughput numbers, appending null to make it a legal json element.
            [[ $type_throughput_pair =~ .*:$ ]] && echo $type_throughput_pair'null,' >> ${temp_file} || echo $type_throughput_pair',' >> ${temp_file}
        done;

    # bind string in temp_file to a variable.
    result=$(cat ${temp_file})

    # remove last comma otherwise result invalid json format
    result=${result%*,}

    echo $result
    echo "}}"
}

# validate json format and write to a file.
generate_json_entry | jq -c . > >(tee ${result_file}) 2>&1

if [ $? -eq 0 ]
then
    echo "generate ${result_file} succeeded"
else
    echo "generate ${result_file} failed"
    rm ${result_file}
fi

rm ${temp_file}
