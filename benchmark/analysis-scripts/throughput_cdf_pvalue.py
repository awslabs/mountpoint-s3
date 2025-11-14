#!/usr/bin/env python3

import json
import matplotlib.pyplot as plt
import numpy as np
from scipy import stats
import os
import glob
import argparse
import yaml


def get_config_value(config, param_name):
    """Extract nested parameter value from config"""
    if '.' not in param_name:
        return config.get(param_name)

    value = config
    for key in param_name.split('.'):
        if isinstance(value, dict) and key in value:
            value = value[key]
        else:
            return None
    return value


def load_data(data_path, param_name):
    """Load throughput data grouped by parameter values"""
    results = {}

    for run_dir in os.listdir(data_path):
        if not run_dir.isdigit():
            continue

        run_path = os.path.join(data_path, run_dir)
        config_file = os.path.join(run_path, '.hydra', 'config.yaml')

        if not os.path.exists(config_file):
            continue

        try:
            with open(config_file) as f:
                config = yaml.safe_load(f)
            param_value = str(get_config_value(config, param_name))

            if param_value == 'None':
                continue

            if param_value not in results:
                results[param_value] = []

            for fio_file in glob.glob(os.path.join(run_path, 'fio.*.json')):
                with open(fio_file) as f:
                    data = json.load(f)
                for job in data.get('jobs', []):
                    # FIXME: Works only for read jobs for now
                    if 'read' in job and 'bw_bytes' in job['read']:
                        gbps = (job['read']['bw_bytes'] * 8) / (1024**3)
                        results[param_value].append(gbps)
        except Exception as e:
            print(f"Warning: Skipping run {run_dir}: {e}")
            continue

    return results


def analyze(data, param_name):
    """Analyze and plot data"""
    values = list(data.keys())

    if len(values) != 2:
        print(f"Error: Found {len(values)} values, need exactly 2")
        print(f"Available: {values}")
        return

    datasets = [np.array(data[v]) for v in values]

    if any(len(d) == 0 for d in datasets):
        print("No data found")
        return

    # Check sample sizes and warn if small
    for i, value in enumerate(values):
        if len(datasets[i]) < 100:
            print(f"Warning: {param_name}={value} has only {len(datasets[i])} samples (recommended: ≥100)")

    # Statistical test
    _, p_value = stats.ttest_ind(datasets[0], datasets[1])

    # Plot CDF
    plt.switch_backend('Agg')
    plt.figure(figsize=(10, 6))

    for i, value in enumerate(values):
        dataset = datasets[i]
        sorted_data = np.sort(dataset)
        cdf = np.arange(1, len(sorted_data) + 1) / len(sorted_data)
        plt.plot(sorted_data, cdf, label=f'{param_name}={value} (n={len(dataset)})', linewidth=2)

    plt.xlabel('Throughput (Gbps)')
    plt.ylabel('Cumulative Probability')
    plt.title(f'Throughput CDF by {param_name}')
    plt.legend()
    plt.grid(True, alpha=0.3)

    # Plot p-value
    sig = 'Significant' if p_value < 0.05 else 'Not Significant'
    plt.text(
        0.02,
        0.98,
        f'p-value: {p_value:.6f} ({sig})',
        transform=plt.gca().transAxes,
        verticalalignment='top',
        bbox=dict(boxstyle='round', facecolor='wheat', alpha=0.8),
    )

    plt.tight_layout()
    filename = f'throughput_cdf_{param_name.replace(".", "_")}.png'
    plt.savefig(filename, dpi=300, bbox_inches='tight')
    print(f"Plot saved: {filename}")

    # Print statistics for both datasets
    stats_data = []
    for dataset in datasets:
        stats_data.append(
            {
                'samples': len(dataset),
                'mean': np.mean(dataset),
                'std': np.std(dataset),
                'percentiles': np.percentile(dataset, [0, 50, 99, 100]),
            }
        )

    print(f"\nThroughput Analysis: {param_name}")
    print("-" * 40)
    print(f"{'Statistic':<12}{values[0]:>12}{values[1]:>12}")
    print("-" * 40)
    print(f"{'Samples':<12}{stats_data[0]['samples']:>12}{stats_data[1]['samples']:>12}")
    print(f"{'Mean':<12}{stats_data[0]['mean']:>12.3f}{stats_data[1]['mean']:>12.3f}")
    print(f"{'Std':<12}{stats_data[0]['std']:>12.3f}{stats_data[1]['std']:>12.3f}")

    for i, label in enumerate(['P0', 'P50', 'P99', 'P100']):
        print(f"{label:<12}{stats_data[0]['percentiles'][i]:>12.3f}{stats_data[1]['percentiles'][i]:>12.3f}")

    print("-" * 40)
    print(f"P-value: {p_value:.6f} ({sig})")
    print("-" * 40)


def main():
    parser = argparse.ArgumentParser(
        description='Plot throughput CDF and calculate p-value for different values of a parameter',
        epilog='Example: python %(prog)s --base-dir multirun/2025-10-23/15-44-53/ --config-key mountpoint.otlp_metrics',
    )
    parser.add_argument('--base-dir', required=True, help='Path to multirun folder')
    parser.add_argument('--config-key', required=True, help='Configuration key to analyze')

    args = parser.parse_args()

    print(f"Loading data for {args.config_key}...")
    data = load_data(args.base_dir, args.config_key)

    print(f"Found values: {list(data.keys())}")

    if not data:
        print("No data found!")
        return

    analyze(data, args.config_key)


if __name__ == "__main__":
    main()
