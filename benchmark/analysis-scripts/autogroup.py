#!/usr/bin/env python3
import os
import json
import argparse
import glob
import yaml
from tabulate import tabulate
import numpy as np
from collections import defaultdict


def parse_hydra_config(iteration_dir):
    """Parse Hydra config and overrides for an iteration."""
    config = {}
    hydra_dir = os.path.join(iteration_dir, '.hydra')

    # Read base config
    config_path = os.path.join(hydra_dir, 'config.yaml')
    if os.path.exists(config_path):
        with open(config_path, 'r') as f:
            config.update(yaml.safe_load(f))

    # Apply overrides
    override_path = os.path.join(hydra_dir, 'overrides.yaml')
    if os.path.exists(override_path):
        with open(override_path, 'r') as f:
            overrides = yaml.safe_load(f)
            if overrides:
                for override in overrides:
                    if '=' in override:
                        key, value = override.split('=', 1)
                        # Handle nested keys
                        if '.' in key:
                            parts = key.split('.')
                            current = config
                            for part in parts[:-1]:
                                current = current.setdefault(part, {})
                            current[parts[-1]] = value
                        else:
                            config[key] = value

    return flatten_config(config)


def flatten_config(config, parent_key='', sep='.'):
    """Flatten nested configuration dictionary."""
    items = []
    for k, v in config.items():
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            items.extend(flatten_config(v, new_key, sep=sep).items())
        else:
            items.append((new_key, v))
    return dict(items)


def parse_benchmark_file(file_path):
    """Parse benchmark output file and return throughput."""
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)

        if 'throughput_gbps' in data:  # CRT format
            return data['throughput_gbps']

        elif 'summary' in data:  # Client/Prefetch format
            summary = data['summary']
            total_bytes = summary.get('total_bytes', 0)
            total_seconds = summary.get('total_elapsed_seconds', 1)
            return (total_bytes * 8) / (1024 * 1024 * 1024 * total_seconds)

        elif 'jobs' in data:  # FIO format
            job = data['jobs'][0]
            read_data = job.get('read', {})
            io_bytes = read_data.get('io_bytes', 0)
            runtime_ms = read_data.get('runtime', 1000)
            return (io_bytes * 8) / (1024 * 1024 * 1024 * (runtime_ms / 1000))

    except Exception as e:
        print(f"Error parsing {file_path}: {e}")
        return None


def process_iteration(iteration_dir):
    """Process a single iteration directory."""
    config = parse_hydra_config(iteration_dir)

    throughput = None
    for file_pattern in ['crt_output.json', 'client-output.json', 'prefetch-output.json', 'fio.*.json']:
        files = glob.glob(os.path.join(iteration_dir, file_pattern))
        if files:
            throughput = parse_benchmark_file(files[0])
            if throughput is not None:
                break

    return config, throughput


def find_varying_parameters(all_configs):
    """Identify parameters that vary across configurations, ignoring run-specific parameters."""
    if not all_configs:
        return set()

    varying = set()
    reference = all_configs[0]

    # Get all keys from all configs
    all_keys = set()
    for config in all_configs:
        all_keys.update(config.keys())

    # Parameters to ignore
    ignore_params = {'hydra.job.num', 'hydra.run.dir', 'hydra.job.id', 'hydra.job.name', 'iteration'}

    # Check which parameters vary
    for key in all_keys:
        if key not in ignore_params:
            values = set()
            for config in all_configs:
                values.add(str(config.get(key, 'N/A')))
            if len(values) > 1:
                varying.add(key)

    # Always include benchmark_type if it exists in any config
    if 'benchmark_type' in all_keys:
        varying.add('benchmark_type')

    return varying


def main():
    parser = argparse.ArgumentParser(description='Print benchmark throughput data automatically grouped')
    parser.add_argument('--base-dir', required=True, help='Base directory containing benchmark results')
    args = parser.parse_args()

    # List to store all results
    all_results = []

    # Process all iteration directories
    for root, dirs, files in os.walk(args.base_dir):
        for dir_name in dirs:
            if dir_name.isdigit():
                iteration_path = os.path.join(root, dir_name)
                config, throughput = process_iteration(iteration_path)
                if throughput is not None:
                    all_results.append((config, throughput, dir_name))

    # Sort results by iteration number
    all_results.sort(key=lambda x: int(x[2]))

    # Find parameters that vary between iterations
    varying_params = find_varying_parameters([config for config, _, _ in all_results])

    # Print varying parameters
    print("\nVarying parameters between iterations:")
    print(", ".join(sorted(varying_params)))

    # Group by varying parameters
    grouped_results = defaultdict(list)
    for config, throughput, iter_num in all_results:
        key = tuple((param, str(config.get(param, 'N/A'))) for param in sorted(varying_params))
        grouped_results[key].append(throughput)

    # Aggregated results table
    aggregated_headers = list(sorted(varying_params)) + ["Count", "Avg (Gbps)", "Std Dev (Gbps)"]
    aggregated_rows = []
    for config_key, throughputs in grouped_results.items():
        row = []
        for _, value in config_key:
            row.append(value)
        row.append(len(throughputs))
        row.append(f"{np.mean(throughputs):.2f}")
        row.append(f"{np.std(throughputs):.2f}")
        aggregated_rows.append(row)

    # Sort rows by average throughput (descending)
    aggregated_rows.sort(key=lambda x: float(x[-2]), reverse=True)

    print("\nResults Summary:")
    print(tabulate(aggregated_rows, headers=aggregated_headers, tablefmt="grid"))


if __name__ == "__main__":
    main()
