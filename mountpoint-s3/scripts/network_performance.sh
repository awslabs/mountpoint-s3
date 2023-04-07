#!/bin/bash

# Please ensure 'jq' and AWS CLI v2 are installed before executing this script.
# The purpose of this script is to generate a json file contains network throughput numbers of each EC2 instance types.

version=v0.0.1 # release version
result_file=network_performance.json
temp_file=/tmp/temporary
timestamp="$(date '+%Y-%m-%d')"
region=us-east-1
version_number=0.0.1

# query
query_ec2_instance_network_throughput="aws ec2 describe-instance-types
--filters \"Name=instance-type,Values=*\"
--query \"InstanceTypes[].[InstanceType, NetworkInfo.NetworkPerformance]\"
--region ${region}
--output json"

(> ${temp_file})

generate_json_entry() {
    echo "{"
    echo "\"version\":{\"region\":\"${region}\",\"timestamp\":\"${timestamp}\",\"version_number\":\"${version_number}\"},"
    eval $query_ec2_instance_network_throughput | \
        jq -c '.[]' | \
        while read line;do
            # extract instance type as a string. eg: "m5dn.12xlarge"
            instance_type=`echo $line | cut -d ',' -f1 | sed 's/\[//'`

            # extract instance throughput as float number. eg: 50
            instance_throughput=`echo $line | cut -d ',' -f2 | sed 's/\s*[a-zA-Z]\s*//g' | sed 's/\]//' | sed 's/\"//g'`

            # concatenate both as a key:value pair. eg: "m5dn.12xlarge":50
            type_throughput_pair="$instance_type:$instance_throughput"

            # some instance types is missing throughput numbers, appending null to make it a legal json element.
            [[ $type_throughput_pair =~ .*:$ ]] && echo $type_throughput_pair'null,' >> ${temp_file} || echo $type_throughput_pair',' >> ${temp_file}
        done;

    # bind string in temp_file to a variable.
    result=$(cat ${temp_file})

    # remove last comma otherwise result invalid json format
    result=${result%*,}

    echo $result
    echo "}"
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
