import json
import logging
import os
import re
import subprocess
import tempfile
from typing import Dict, Any

from benchmarks.base_benchmark import BaseBenchmark
from benchmarks.command import Command, CommandResult
from benchmarks.config_utils import get_s3_keys
from omegaconf import DictConfig

log = logging.getLogger(__name__)


class CrtBenchmark(BaseBenchmark):
    def __init__(self, cfg: DictConfig, metadata: Dict[str, Any]):
        self.cfg = cfg
        self.metadata = metadata

        self.crt_benchmarks_path = cfg.benchmarks.crt.crt_benchmarks_path
        if self.crt_benchmarks_path is None:
            raise ValueError("crt_benchmarks_path is required. Please populate benchmarks.crt.crt_benchmarks_path")

        self.crt_benchmark_runner = f"{self.crt_benchmarks_path}/build/c/install/bin/s3-benchrunner-c"
        self.crt_cfg_file = None

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

    def setup(self, with_flamegraph: bool = False) -> Dict[str, Any]:
        # Setup the benchmark configuration files
        object_size_in_gib = self.cfg.object_size_in_gib
        app_workers = self.cfg.application_workers
        run_time = self.cfg.run_time
        s3_keys = get_s3_keys(self.cfg.s3_keys, app_workers, object_size_in_gib)

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

        log.info(f"Running CRT build with args: {subprocess_args}")
        try:
            subprocess.run(subprocess_args, check=True, capture_output=True, text=True)
            log.info("CRT build completed successfully.")
        except subprocess.CalledProcessError as e:
            raise RuntimeError("CRT build failed") from e

        return self.metadata

    def get_command(self) -> Command:
        region = self.cfg.region

        subprocess_args = [
            self.crt_benchmark_runner,
            "crt-c",
            self.crt_cfg_file,
            self.cfg.s3_bucket,
            region,
        ]

        if (max_throughput := self.cfg.network.maximum_throughput_gbps) is not None:
            subprocess_args.append(str(max_throughput))

        if network_interfaces := self.cfg.network.interface_names:
            subprocess_args.extend(["--nic", ",".join(network_interfaces)])

        log.info(f"CRT benchmark command prepared with args: {subprocess_args}")
        return Command(args=subprocess_args)

    def parse_benchmark_output(self, output):
        """Parse the CRT benchmark output and extract metrics."""
        # FIXME: Ideally, we should patch CRT benchmarks to emit bytes downloads
        # and a json file with results
        run_pattern = r"Run:(\d+)\s+Secs:(\d+\.\d+)\s+Gb/s:(\d+\.\d+)"
        match = re.search(run_pattern, output)
        if match:
            duration_secs = float(match.group(2))
            throughput_gbps = float(match.group(3))
            metrics = {"duration_secs": duration_secs, "throughput_gbps": throughput_gbps}
            return metrics
        return {}

    def post_process(self, result: CommandResult) -> Dict[str, Any]:
        if result.returncode != 0:
            log.error(f"CRT benchmark failed with exit code {result.returncode}")
            if result.stderr:
                log.error(f"Error output: {result.stderr}")
            raise subprocess.CalledProcessError(result.returncode, ["s3-benchrunner-c"])

        log.info("CRT benchmark completed successfully")

        metrics = self.parse_benchmark_output(result.stdout)

        with open(f"{os.getcwd()}/crt_output.json", 'w') as f:
            json.dump(metrics, f, indent=4)

        self.metadata["crt_metrics"] = metrics
        self.metadata["crt_output_file"] = "crt_output.json"

        try:
            if self.crt_cfg_file and os.path.exists(self.crt_cfg_file):
                log.info(f"Remove CRT benchmark configuration: {self.crt_cfg_file}")
                os.remove(self.crt_cfg_file)
        except Exception as e:
            log.warning(f"Failed to clean up CRT config file: {e}")
        return self.metadata
