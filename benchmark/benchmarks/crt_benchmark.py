import json
import logging
import os
import re
import subprocess
import tempfile
from typing import Dict, Any

from benchmarks.base_benchmark import BaseBenchmark
from omegaconf import DictConfig

from benchmarks.benchmark_config_parser import BenchmarkConfigParser

log = logging.getLogger(__name__)


class CrtBenchmark(BaseBenchmark):
    def __init__(self, cfg: DictConfig, metadata: Dict[str, Any]):
        self.metadata = metadata
        self.config_parser = BenchmarkConfigParser(cfg)
        self.common_config = self.config_parser.get_common_config()
        self.crt_config = self.config_parser.get_crt_config()

        self.crt_benchmarks_path = self.crt_config.get('crt_benchmarks_path')
        if self.crt_benchmarks_path is None:
            raise ValueError("crt_benchmarks_path is required")

        self.crt_benchmark_runner = f"{self.crt_benchmarks_path}/build/c/install/bin/s3-benchrunner-c"

    def _generate_benchmark_config(self, objects, object_size_in_gib, run_time) -> dict[str, Any]:
        config = {
            "version": 2,
            "filesOnDisk": False,
            "checksum": None,
            "maxRepeatCount": 1,
            "maxRepeatSecs": run_time,
            "tasks": [],
        }

        # Loop through objects and create tasks
        for object_key in objects:
            task = {
                "action": "download",
                "key": object_key,
                "size": object_size_in_gib * (1024 * 1024 * 1024),  # Convert GiB to bytes
            }
            config["tasks"].append(task)

        return config

    def setup(self) -> Dict[str, Any]:
        # Setup the the benchmark configuration files
        object_size_in_gib = self.common_config['object_size_in_gib']
        app_workers = self.common_config['application_workers']
        run_time = self.common_config['run_time']
        s3_keys = self.common_config.get('s3_keys')

        # If no objects specified, use default object keys
        if not s3_keys:
            s3_keys = self.config_parser.default_object_keys(app_workers, object_size_in_gib)

        config = self._generate_benchmark_config(s3_keys, object_size_in_gib, run_time)

        # create a tmp folder and write the file as /download-100GiB-1x-ram.run.json
        self.crt_cfg_file = tempfile.mktemp(suffix=f".download-{object_size_in_gib}-{app_workers}x-ram.run.json")

        # save the json output
        with open(self.crt_cfg_file, 'w') as f:
            json.dump(config, f, indent=4)

        # Build crt - scripts/build-runner.py --lang c --build-dir build
        subprocess_args = [
            f"{self.crt_benchmarks_path}/scripts/build-runner.py",
            "--lang",
            "c",
            "--build-dir",
            f"{self.crt_benchmarks_path}/build",
        ]

        if not os.path.exists(self.crt_benchmark_runner):
            try:
                subprocess.run(subprocess_args, check=True, capture_output=True, text=True)
                assert os.path.exists(self.crt_benchmark_runner)
                log.info("CRT build completed successfully.")
            except subprocess.CalledProcessError as e:
                raise RuntimeError("CRT build failed") from e

    def run_benchmark(self) -> Dict[str, Any]:
        region = self.common_config.get('region')

        subprocess_args = [
            self.crt_benchmark_runner,
            "crt-c",
            self.crt_cfg_file,
            self.common_config['s3_bucket'],
            region,
        ]

        if (max_throughput := self.common_config['max_throughput_gbps']) is not None:
            subprocess_args.append(str(max_throughput))

        if network_interfaces := self.common_config['network_interfaces']:
            subprocess_args.extend(["--nic", ",".join(network_interfaces)])

        try:
            result = subprocess.run(subprocess_args, check=True, capture_output=True, text=True)
            log.info("CRT benchmark completed successfully")
        except Exception as e:
            log.error(f"Error running CRT benchmark: {e}")
            raise RuntimeError("CRT benchmark failed") from e

        metrics = self.parse_benchmark_output(result.stdout)
        return {"success": True, "metrics": metrics}

    def parse_benchmark_output(self, output):
        try:
            # Parse the output and extract the results
            # Parse single run result
            # Run:1 Secs:56.572429 Gb/s:60.735838
            # FIXME: patch CRT benchmarks to emit a json file with results
            run_pattern = r"Run:(\d+)\s+Secs:(\d+\.\d+)\s+Gb/s:(\d+\.\d+)"
            match = re.search(run_pattern, output)
            if match:
                duration_secs = float(match.group(2))
                throughput_gbps = float(match.group(3))
                metrics = {"duration_secs": duration_secs, "throughput_gbps": throughput_gbps}

                # Write metrics to file
                with open(f"{os.getcwd()}/crt_output.json", 'w') as f:
                    json.dump(metrics, f, indent=4)

                return metrics
            return {}
        except Exception as e:
            log.error(f"Error parsing CRT benchmark output: {e}")
            raise RuntimeError("CRT benchmark failed") from e

    def post_process(self) -> Dict[str, Any]:
        try:
            os.remove(self.crt_cfg_file)
        except Exception:
            pass
        return {}
