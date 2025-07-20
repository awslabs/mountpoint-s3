from contextlib import contextmanager
import json
import logging
import os
import signal
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple

import hydra
from hydra.core.hydra_config import HydraConfig
from omegaconf import DictConfig, OmegaConf
import urllib.request

from benchmarks.benchmark_config_parser import BenchmarkConfigParser
from benchmarks.client_benchmark import ClientBenchmark
from benchmarks.crt_benchmark import CrtBenchmark
from benchmarks.fio_benchmark import FioBenchmark
from benchmarks.prefetch_benchmark import PrefetchBenchmark

logging.basicConfig(level=os.environ.get('LOGLEVEL', 'INFO').upper())

log = logging.getLogger(__name__)

OmegaConf.register_new_resolver(
    "join",
    lambda separator, elements: separator.join(elements),
)


def get_ec2_instance_id() -> Optional[str]:
    """Get the EC2 instance ID if running on EC2."""
    if os.getenv("AWS_EC2_METADATA_DISABLED") == "true":
        return None

    try:
        token_url = "http://169.254.169.254/latest/api/token"
        token_request = urllib.request.Request(token_url, method='PUT')
        token_request.add_header("X-aws-ec2-metadata-token-ttl-seconds", "21600")
        with urllib.request.urlopen(token_request) as token_response:
            token = token_response.read().decode()

        metadata_url = "http://169.254.169.254/latest/meta-data/instance-id"
        metadata_request = urllib.request.Request(metadata_url, headers={"X-aws-ec2-metadata-token": token})
        with urllib.request.urlopen(metadata_request) as metadata_response:
            instance_id = metadata_response.read().decode()

        return instance_id
    except Exception:
        log.warning("Failed to retrieve EC2 instance ID", exc_info=True)
        return None


def write_metadata(metadata: Dict[str, Any]) -> None:
    """Write metadata to a file."""
    try:
        with open("metadata.json", "w") as f:
            json.dump(metadata, f, default=str)
        log.debug("Metadata written to metadata.json")
    except Exception:
        log.error("Failed to write metadata", exc_info=True)


def detect_result_folder() -> Tuple[str, str]:
    """
    Detect the result folder path and source path for benchmark results using Hydra's internal API.
    """
    local_path = HydraConfig.get().runtime.output_dir
    path = Path(local_path)

    if "multirun" in str(path):
        parts = str(path).split("multirun")
        date_time_path = parts[1].lstrip("/\\")
        
        path_parts = date_time_path.split("/")
        if path_parts and path_parts[-1].isdigit():
            # use parent to include multirun.yaml
            local_path = str(Path(local_path).parent)
            date_time_path = "/".join(path_parts[:-1])
        
        s3_path = os.path.join("multirun", date_time_path)
    elif "outputs" in str(path):
        parts = str(path).split("outputs")
        date_time_path = parts[1].lstrip("/\\")
        s3_path = os.path.join("outputs", date_time_path)
    else:
        s3_path = os.path.basename(local_path)
    
    return s3_path, local_path


def upload_results_to_s3(bucket_name: str, region: str = "us-east-1") -> None:
    """
    Upload benchmark results to S3 bucket using the AWS CLI.
    """
    try:
        s3_path, source_path = detect_result_folder()
        
        s3_target_path = os.path.join("results", s3_path)
        
        aws_cmd = [
            "aws", "s3", "sync", 
            source_path,
            f"s3://{bucket_name}/{s3_target_path}", 
            "--region", region
        ]
        
        result = subprocess.run(aws_cmd, capture_output=True, text=True)
        
        if result.returncode == 0:
            log.info(f"Successfully uploaded benchmark results to S3")
        else:
            log.error(f"Failed to upload benchmark results to S3. Return code: {result.returncode}")
            if result.stderr:
                log.error(f"AWS CLI error: {result.stderr}")
            if result.stdout:
                log.error(f"AWS CLI output: {result.stdout}")
                
    except Exception as e:
        log.error(f"Error uploading results to S3: {str(e)}", exc_info=True)

class ResourceMonitoring:
    def __init__(self, target_pid, with_bwm: bool, with_perf_stat: bool):
        """Resource monitoring setup.

        target_pid: Process pid to monitor where applicable
        with_bwm: Whether to start bandwidth monitor tool `bwm-ng`.  Optional because it's not available
        in the default AL2023 distro so you have to install it first.
        with_perf_stat: Whether to gather performance counter statistics."""

        self.target_pid = target_pid
        self.mpstat_process = None
        self.bwm_ng_process = None
        self.perf_stat_process = None
        self.with_bwm = with_bwm
        self.with_perf_stat = with_perf_stat
        self.output_files = []

    def _start(self) -> None:
        log.debug("Starting resource monitors...")
        self.mpstat_process = self._start_mpstat()
        if self.with_bwm:
            self.bwm_ng_process = self._start_bwm_ng()
        if self.with_perf_stat:
            self.perf_stat_process = self._start_perf_stat()

    def _close(self) -> None:
        log.debug("Shutting down resource monitors...")
        for process in [self.mpstat_process, self.bwm_ng_process, self.perf_stat_process]:
            self._stop_resource_monitor(process)

        for output_file in self.output_files:
            try:
                output_file.close()
            except Exception:
                log.error("Error closing {output_file}:", exc_info=True)

    def _stop_resource_monitor(self, process):
        try:
            if process:
                process.send_signal(signal.SIGINT)
                process.wait()
        except Exception:
            log.error("Error shutting down monitoring:", exc_info=True)

    def _start_monitor_with_builtin_repeat(self, process_args: List[str], output_file) -> any:
        """Start process_args with output to output_file.

        Used for starting processes in the background to do monitoring; good for tools that repeat the
        measurement themselves so only need to be started once, and that can write their output to stdout.
        """
        f = open(output_file, 'w')
        self.output_files.append(f)
        log.debug(f"Starting monitoring tool {' '.join(process_args)}")
        return subprocess.Popen(process_args, stdout=f)

    def _start_mpstat(self) -> any:
        # fmt: off
        return self._start_monitor_with_builtin_repeat([
                "/usr/bin/mpstat",
                "-P", "ALL", # cores
                "-o", "JSON",
                "1", # interval
            ], 'mpstat.json')
        # fmt: on

    def _start_bwm_ng(self) -> any:
        """Starts bwm-ng, which probably needs to be installed.

        https://www.gropp.org/?id=projects&sub=bwm-ng"""
        return self._start_monitor_with_builtin_repeat(['/usr/local/bin/bwm-ng', '-o', 'csv'], 'bwm-ng.csv')

    def _start_perf_stat(self) -> any:
        """Gather perf count statistics"""
        perf_events = ["cycles", "instructions", "cache-references", "cache-misses", "bus-cycles"]

        # fmt: off
        perf_args = [
            "perf", "stat",
            "-I", "500",              # 500ms interval
            "-e", ",".join(perf_events),
            "-j",                     # JSON output format
            "-p", str(self.target_pid),
            "-o", "perfstat.json"
        ]
        # fmt: on

        log.info("Starting perf stat with args: %s", " ".join(perf_args))
        return subprocess.Popen(perf_args)

    @contextmanager
    def managed(target_pid, with_bwm=False, with_perf_stat=False):
        resource = ResourceMonitoring(target_pid, with_bwm, with_perf_stat)
        try:
            resource._start()
            yield resource
        finally:
            resource._close()


@hydra.main(version_base=None, config_path="conf", config_name="config")
def run_experiment(cfg: DictConfig) -> None:
    """
    Run the benchmark experiment with the given configuration.

    Args:
        cfg: Configuration object containing benchmark parameters
    """
    log.debug("Experiment starting")

    config_parser = BenchmarkConfigParser(cfg)
    common_config = config_parser.get_common_config()
    benchmark_type = common_config['benchmark_type']
    metadata = {
        "ec2_instance_id": get_ec2_instance_id(),
        "start_time": datetime.now(tz=timezone.utc),
        "success": False,
    }

    if benchmark_type == "fio":
        benchmark = FioBenchmark(cfg, metadata)
    elif benchmark_type == "prefetch":
        benchmark = PrefetchBenchmark(cfg, metadata)
    elif benchmark_type == "crt":
        benchmark = CrtBenchmark(cfg, metadata)
    elif benchmark_type == "client":
        benchmark = ClientBenchmark(cfg, metadata)
    elif benchmark_type == "client-bp":
        benchmark = ClientBenchmark(cfg, metadata, backpressure=True)
    else:
        raise ValueError(f"Unsupported benchmark type: {benchmark_type}")

    try:
        benchmark.setup()
        target_pid = metadata.get("target_pid")

        with ResourceMonitoring.managed(target_pid, cfg.monitoring.with_bwm, cfg.monitoring.with_perf_stat):
            benchmark.run_benchmark()

        # Mark success if we get here without exceptions
        metadata["success"] = True
    except Exception as e:
        log.error(f"Benchmark execution failed: {str(e)}")
        raise
    finally:
        try:
            benchmark.post_process()
        except Exception as e:
            log.error(f"Post-processing failed: {str(e)}")
        finally:
            write_metadata(metadata)
            metadata["end_time"] = datetime.now(tz=timezone.utc)
            
            bucket_name = common_config.get('s3_bucket')
            region = common_config.get('region', 'us-east-1')
            
            if bucket_name:
                log.info(f"Uploading benchmark results to S3 bucket '{bucket_name}'")
                upload_results_to_s3(bucket_name, region)
            else:
                log.warning("No S3 bucket specified in config, skipping upload of benchmark results")


if __name__ == "__main__":
    run_experiment()
