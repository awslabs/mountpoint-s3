#!/usr/bin/env bash

name=""
time=""
thrpt=""
unit=""

function as_list {
  out=$(echo $@ | sed "s/ /\", \"/g")
  echo "[\"$out\"]"
}

results=[]
index=0

while IFS= read line; do
  if [[ "$line" =~ fs/ ]]; then
    name=`echo "$line" | awk '{ print $1 }'`
  fi
  if [[ "$line" =~ time: ]]; then
    if [[ -z $time ]]; then
      time=$(echo "$line" | cut -d'[' -f2 | cut -d']' -f1 | awk '{ print $3 }')
      unit=$(echo "$line" | cut -d'[' -f2 | cut -d']' -f1 | awk '{ print $4 }')
    fi
  fi
  if [[ "$line" =~ thrpt: ]]; then
    if [[ -z $thrpt ]]; then
      thrpt=$(echo "$line" | cut -d'[' -f2 | cut -d']' -f1 | awk '{ print $3 }')
      unit=$(echo "$line" | cut -d'[' -f2 | cut -d']' -f1 | awk '{ print $4 }')
    fi
  fi
  if [[ "$line" =~ ^median ]]; then # last line for each bench
    if [[ -z $thrpt ]]; then
      results[index]="  {
    \"name\": "\"$name\"",
    \"value\": $time,
    \"unit\": "\"$unit\""
  }"
    else
      # convert throughput to MiB/s
      if [[ $unit == "KiB/s" ]]; then
        thrpt=$(echo "scale=2;$thrpt/1024" | bc | awk '{printf "%f", $0}')
        unit="MiB/s"
      elif [[ $unit == "GiB/s" ]]; then
        thrpt=$(echo "scale=2;$thrpt*1024" | bc)
        unit="MiB/s"
      fi

      results[index]="  {
    \"name\": "\"$name\"",
    \"value\": $thrpt,
    \"unit\": "\"$unit\""
  }"
    fi
    name=""
    time=""
    thrpt=""
    index=$((index+1))
  fi
done

count=$((index-1))

if [ "$count" -ge "1" ]; then
  echo "["
  for n in ${!results[@]}; do
    printf "${results[$n]}"
    if [ "$n" -ne "$count" ]; then
      echo ", "
    else
      echo
    fi
  done
  echo "]"
fi