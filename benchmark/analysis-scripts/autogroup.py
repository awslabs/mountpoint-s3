# /// script
# requires-python = ">=3.13"
# dependencies = [
#     "omegaconf",
#     "tabulate",
# ]
# ///

import os
import json
import argparse
import glob
import csv
import warnings
import statistics

from tabulate import tabulate
from collections import defaultdict
from typing import Dict, Any, Optional, Tuple, List, Set, Union
from omegaconf import OmegaConf


def parse_hydra_config(iteration_dir: str) -> Dict[str, Any]:
    """Parse Hydra config and overrides for an iteration using OmegaConf and flattens the result"""
    hydra_dir = os.path.join(iteration_dir, '.hydra')

    # Read base config
    config_path = os.path.join(hydra_dir, 'config.yaml')
    if not os.path.exists(config_path):
        return {}

    # Load base config with OmegaConf
    config = OmegaConf.load(config_path)

    # Apply overrides
    override_path = os.path.join(hydra_dir, 'overrides.yaml')
    if os.path.exists(override_path):
        overrides = OmegaConf.load(override_path)
        if overrides:
            # Convert overrides list to OmegaConf and merge
            override_list = OmegaConf.to_container(overrides, resolve=True)
            if isinstance(override_list, list):
                config = OmegaConf.merge(config, OmegaConf.from_dotlist(override_list))
            else:
                warnings.warn("Unable to merge overrides, as they are not a list")

    # Convert to regular dict and flatten
    config_dict = OmegaConf.to_container(config, resolve=True)
    return flatten_config(config_dict)


def to_gigabits_per_second(
    bytes: Union[int, float],
    seconds: Union[int, float],
) -> float:
    """
    Converts bytes to gigabits per second
    """
    bits = bytes * 8
    gigabits = bits / 1_000_000_000
    return gigabits / float(seconds)


def flatten_config(config: Dict[str, Any], parent_key: str = '', sep: str = '.') -> Dict[str, Any]:
    """Flatten nested configuration dictionary."""
    result = {}
    for k, v in config.items():
        new_key = f"{parent_key}{sep}{k}" if parent_key else k
        if isinstance(v, dict):
            result.update(flatten_config(v, new_key, sep=sep))
        else:
            result[new_key] = v
    return result


def parse_benchmark_file(file_path: str) -> Optional[float]:
    """Parse benchmark output file and return throughput."""
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)

        match data:
            # CRT format
            case {'throughput_gbps': throughput}:
                return throughput

            # Client/Prefetch format
            case {'summary': {'total_bytes': total_bytes, 'total_elapsed_seconds': total_seconds}}:
                return to_gigabits_per_second(bytes=total_bytes, seconds=total_seconds)

            # Client/Prefetch format with missing fields
            case {'summary': summary}:
                total_bytes = summary.get('total_bytes', 0)
                total_seconds = summary.get('total_elapsed_seconds', 1)
                return to_gigabits_per_second(bytes=total_bytes, seconds=total_seconds)

            # FIO format
            case {'jobs': [{'read': {'io_bytes': io_bytes, 'runtime': runtime_ms}}, *_]}:
                return to_gigabits_per_second(bytes=io_bytes, seconds=runtime_ms / 1000)

            # Unknown format
            case _:
                warnings.warn(f"Unknown format in {file_path}")
                return None

    except Exception as e:
        warnings.warn(f"Warning: Error parsing {file_path}: {e}")
        return None


def process_iteration(iteration_dir: str) -> Tuple[Dict[str, Any], Optional[float]]:
    """Process a single iteration directory."""
    config = parse_hydra_config(iteration_dir)

    throughput = None
    # FIXME: Do not use this glob hack for fio throughput
    for file_pattern in ['crt_output.json', 'client-output.json', 'prefetch-output.json', 'fio.*.json']:
        files = glob.glob(os.path.join(iteration_dir, file_pattern))
        if files:
            throughput = parse_benchmark_file(files[0])
            if throughput is not None:
                break

    if throughput is None:
        warnings.warn(f"Warning: No valid throughput data found in {iteration_dir}")

    return config, throughput


def find_varying_parameters(all_configs: List[Dict[str, Any]]) -> Set[str]:
    """Identify parameters that vary across configurations, ignoring run-specific parameters."""
    if not all_configs:
        return set()

    # Get all keys from all configs
    all_keys = set()
    for config in all_configs:
        all_keys.update(config.keys())

    # Parameters to ignore
    ignore_params = {'hydra.job.num', 'hydra.run.dir', 'hydra.job.id', 'hydra.job.name', 'iteration'}

    # Check which parameters vary
    varying = {key for key in all_keys if len({str(config.get(key, 'N/A')) for config in all_configs}) > 1}

    varying -= ignore_params

    # Always include benchmark_type if it exists in any config
    if 'benchmark_type' in all_keys:
        varying.add('benchmark_type')

    return varying


def find_multirun_dir(index: int = 0, sort_by_date: bool = True) -> str:
    """Find the Nth latest directory in multirun (0=most recent, 1=previous, etc.)"""
    multirun_path = 'multirun'
    if not os.path.exists(multirun_path):
        raise FileNotFoundError("multirun directory not found")

    # Get all subdirectories and their sort keys
    all_subdirs = []
    for item in os.listdir(multirun_path):
        item_path = os.path.join(multirun_path, item)
        if os.path.isdir(item_path):
            # Find all subdirectories within this date directory
            for subitem in os.listdir(item_path):
                subitem_path = os.path.join(item_path, subitem)
                if os.path.isdir(subitem_path):
                    if sort_by_date:
                        # Parse the date and time from the path structure
                        # Expected format: multirun/YYYY-MM-DD/HH-MM-SS
                        try:
                            date_str = item  # e.g., "2025-08-27"
                            time_str = subitem  # e.g., "16-49-08"
                            datetime_str = f"{date_str} {time_str.replace('-', ':')}"
                            all_subdirs.append((datetime_str, subitem_path))
                        except Exception:
                            # Fall back to mtime if parsing fails
                            mtime = os.path.getmtime(subitem_path)
                            all_subdirs.append((mtime, subitem_path))
                    else:
                        # Use modification time
                        mtime = os.path.getmtime(subitem_path)
                        all_subdirs.append((mtime, subitem_path))

    if not all_subdirs:
        raise FileNotFoundError("No experiment directories found in multirun")

    # Sort by key (most recent first) and return the requested index
    sorted_subdirs = sorted(all_subdirs, key=lambda x: x[0], reverse=True)

    if index >= len(sorted_subdirs):
        raise IndexError(f"Index {index} out of range, only {len(sorted_subdirs)} directories found")

    return sorted_subdirs[index][1]


def main() -> None:
    parser = argparse.ArgumentParser(description='Print benchmark throughput data automatically grouped')

    # Positional argument for base directory (optional)
    parser.add_argument('base_dir', nargs='?', help='Base directory containing benchmark results')

    # Options for automatic latest directory selection
    parser.add_argument(
        '--latest',
        type=int,
        nargs='?',
        const=0,
        metavar='N',
        help='Use the Nth latest multirun directory (0=most recent, 1=previous, etc.)',
    )
    parser.add_argument(
        '--latest-order',
        choices=['date', 'mod_time'],
        default='date',
        help='Sort latest directories by date in path or modification time',
    )

    parser.add_argument('--csv-output', help='Optional CSV file to write the results to')
    parser.add_argument(
        '--runs', choices=['tri', 'all'], help='Show run numbers in results (tri=min/median/max, all=all runs)'
    )
    args = parser.parse_args()

    # Validate conflicting arguments
    if args.base_dir and args.latest is not None:
        parser.error("Cannot specify both a base directory and --latest option")

    # Determine the base directory to use
    # Priority: positional arg > --latest > default to latest=0
    if args.base_dir:
        base_dir = args.base_dir
    else:
        latest_index = args.latest if args.latest is not None else 0
        try:
            base_dir = find_multirun_dir(index=latest_index, sort_by_date=(args.latest_order == 'date'))
            ordinal = ["latest", "2nd latest", "3rd latest"]
            index_desc = ordinal[latest_index] if latest_index < len(ordinal) else f"{latest_index + 1}th latest"
            print(f"Using {index_desc} multirun directory (sorted by {args.latest_order}): {base_dir}")
        except (FileNotFoundError, IndexError) as e:
            print(f"Error: {e}")
            return

    # List to store all results
    all_results = []

    # Process all iteration directories
    for root, dirs, files in os.walk(base_dir):
        for dir_name in dirs:
            if dir_name.isdigit():
                iteration_path = os.path.join(root, dir_name)
                config, throughput = process_iteration(iteration_path)
                if throughput is not None:
                    all_results.append((config, throughput, dir_name))

    # Sort results by iteration number
    all_results.sort(key=lambda x: int(x[2]))

    # Find parameters that vary between iterations
    varying_params = sorted(find_varying_parameters([config for config, _, _ in all_results]))

    # Print varying parameters
    print("\nVarying parameters between iterations:")
    print(", ".join(varying_params))

    # Group by varying parameters
    grouped_results = defaultdict(list)
    for config, throughput, iter_num in all_results:
        key = tuple((param, str(config.get(param, 'N/A'))) for param in sorted(varying_params))
        grouped_results[key].append((throughput, iter_num))

    # Generate aggregated results table with optional Run Numbers column
    if args.runs:
        results_headers = varying_params + [
            "Run Numbers",
            "Count",
            "Max (Gbps)",
            "Median (Gbps)",
            "Min (Gbps)",
            "Std Dev (Gbps)",
        ]
    else:
        results_headers = varying_params + [
            "Count",
            "Max (Gbps)",
            "Median (Gbps)",
            "Min (Gbps)",
            "Std Dev (Gbps)",
        ]

    results_rows = []
    for config_key, throughput_data in grouped_results.items():
        throughputs = [t for t, _ in throughput_data]
        run_numbers = [r for _, r in throughput_data]

        row = []
        for _, value in config_key:
            row.append(value)

        # Add run numbers column if requested
        if args.runs:
            if args.runs == "tri":
                # Find min, max, and median run numbers based on throughput
                sorted_by_throughput = sorted(zip(throughputs, run_numbers))
                min_run = sorted_by_throughput[0][1]
                max_run = sorted_by_throughput[-1][1]
                median_idx = len(sorted_by_throughput) // 2
                median_run = sorted_by_throughput[median_idx][1]

                selected_runs = [max_run, median_run, min_run]
                # Remove duplicates while preserving order
                unique_runs = []
                for run in selected_runs:
                    if run not in unique_runs:
                        unique_runs.append(run)

                row.append(",".join(unique_runs))
            else:
                sorted_by_throughput = sorted(zip(throughputs, run_numbers), reverse=True)
                all_runs = [r for _, r in sorted_by_throughput]
                row.append(",".join(all_runs))

        row.append(len(throughputs))
        row.append(f"{max(throughputs):.2f}")
        row.append(f"{statistics.median(throughputs):.2f}")
        row.append(f"{min(throughputs):.2f}")
        if len(throughputs) > 1:
            row.append(f"{statistics.stdev(throughputs):.2f}")
        else:
            row.append("N/A")
        results_rows.append(row)

    # Custom sorting function for benchmark types
    def benchmark_type_sort_key(value: str) -> int:
        benchmark_order = {'crt': 0, 'client': 1, 'client-bp': 2, 'prefetch': 3, 'fio': 4}
        return benchmark_order.get(value, 999)  # Unknown types go to end

    # Sort rows by all columns
    def sort_key(row: List[str]) -> List[Union[int, float, str]]:
        key_parts = []
        for value, header in zip(row, results_headers):
            if header == 'benchmark_type':
                # Use custom ordering for benchmark type
                key_parts.append(benchmark_type_sort_key(value))
            else:
                # For other columns, sort alphabetically/numerically
                try:
                    # Try to convert to float for numeric sorting
                    key_parts.append(float(value))
                except (ValueError, TypeError):
                    # If not numeric, sort as string
                    key_parts.append(str(value))
        return key_parts

    results_rows.sort(key=sort_key)

    # Display results
    if args.runs == "all":
        print("\nResults Summary (with all run numbers):")
    elif args.runs == "tri":
        print("\nResults Summary (with representative run numbers):")
    else:
        print("\nResults Summary:")

    print(tabulate(results_rows, headers=results_headers, tablefmt="grid"))

    # Write to CSV if requested
    if args.csv_output:
        with open(args.csv_output, 'w', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(results_headers)
            writer.writerows(results_rows)
        print(f"\nResults written to CSV: {args.csv_output}")


if __name__ == "__main__":
    main()
