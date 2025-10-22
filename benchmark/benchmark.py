import json
import logging
import os
import subprocess
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Dict, Any, Optional

import hydra
from hydra.core.hydra_config import HydraConfig
from hydra.types import RunMode
from omegaconf import DictConfig, OmegaConf
import urllib.request

from benchmarks.client_benchmark import ClientBenchmark
from benchmarks.command import CommandResult
from benchmarks.crt_benchmark import CrtBenchmark
from benchmarks.fio_benchmark import FioBenchmark
from benchmarks.prefetch_benchmark import PrefetchBenchmark

from monitoring import ResourceMonitoring
from monitoring.tools import MonitoringTool, MpstatTool, BwmNgTool, PerfStatTool, FlamegraphTool

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


def upload_results_to_s3(bucket_name: str, region: str) -> None:
    """
    Upload benchmark results to S3 bucket using the AWS CLI.
    Only uploads results from multirun directories.
    """

    hydra_config = HydraConfig.get()

    if hydra_config.mode == RunMode.MULTIRUN:
        source_path = Path(hydra_config.runtime.output_dir).parent

        assert len(source_path.parts) >= 2, "Source path must have at least 2 parts for date/time extraction"
        date_part, time_part = source_path.parts[-2:]

        s3_target_path = f"s3://{bucket_name}/results/{date_part}/{time_part}"

        aws_cmd = [
            "aws",
            "s3",
            "sync",
            str(source_path),
            s3_target_path,
            "--region",
            region,
        ]
        result = subprocess.run(aws_cmd, capture_output=True, text=True)
        if result.returncode == 0:
            log.info("Successfully uploaded benchmark results to S3")
        else:
            log.error(f"S3 upload failed: {result.stderr.strip()}")
    else:
        log.info("Skipping benchmark upload for non-multirun")


@hydra.main(version_base=None, config_path="conf", config_name="config")
def run_experiment(cfg: DictConfig) -> None:
    """
    Run the benchmark experiment with the given configuration.

    Args:
        cfg: Configuration object containing benchmark parameters
    """
    log.debug("Experiment starting")

    benchmark_type = cfg.benchmark_type
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
    elif benchmark_type == "client_bp":
        benchmark = ClientBenchmark(cfg, metadata, backpressure=True)
    else:
        raise ValueError(f"Unsupported benchmark type: {benchmark_type}")

    result = None
    try:
        with_flamegraph = cfg.monitoring.with_flamegraph
        benchmark.setup(with_flamegraph=with_flamegraph)
        command = benchmark.get_command()

        process = subprocess.Popen(
            command.args,
            env=command.env,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
        )

        target_pid = metadata.get("target_pid", process.pid)
        metadata["target_pid"] = target_pid

        # Construct monitoring tools
        tools: List[MonitoringTool] = [MpstatTool()]
        if cfg.monitoring.with_bwm:
            tools.append(BwmNgTool())
        if cfg.monitoring.with_perf_stat:
            tools.append(PerfStatTool(target_pid))
        if cfg.monitoring.with_flamegraph:
            tools.append(FlamegraphTool(target_pid, cfg.monitoring.flamegraph_scripts_path))

        with ResourceMonitoring.managed(tools):
            stdout, stderr = process.communicate()

            if stdout is not None and isinstance(stdout, bytes):
                stdout = stdout.decode('utf-8')
            if stderr is not None and isinstance(stderr, bytes):
                stderr = stderr.decode('utf-8')

            result = CommandResult(returncode=process.returncode, stdout=stdout, stderr=stderr)

        metadata["success"] = True

    except Exception:
        log.error("Benchmark execution failed:", exc_info=True)
        raise
    finally:
        try:
            if result is not None:
                benchmark.post_process(result)
        except Exception:
            log.error("Post-processing failed:", exc_info=True)
        finally:
            result_bucket_name = cfg.s3_result_bucket
            region = cfg.region
            if result_bucket_name:
                log.info(f"Uploading benchmark results to S3 bucket '{result_bucket_name}'")
                upload_results_to_s3(result_bucket_name, region)
            else:
                log.info("No results bucket specified (s3_result_bucket), skipping upload")

            write_metadata(metadata)
            metadata["end_time"] = datetime.now(tz=timezone.utc)


if __name__ == "__main__":
    run_experiment()
