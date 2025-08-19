import logging
import subprocess
from typing import Dict, Any

from benchmarks.base_benchmark import BaseBenchmark
from benchmarks.command import Command, CommandResult
from benchmarks.cargo_helper import build_example
from omegaconf import DictConfig

from benchmarks.benchmark_config_parser import BenchmarkConfigParser

log = logging.getLogger(__name__)


class ClientBenchmark(BaseBenchmark):
    def __init__(self, cfg: DictConfig, metadata: Dict[str, Any], backpressure=False):
        self.metadata = metadata
        self.backpressure = backpressure
        self.config_parser = BenchmarkConfigParser(cfg)
        self.common_config = self.config_parser.get_common_config()
        self.client_config = self.config_parser.get_client_config()

    def setup(self) -> Dict[str, Any]:
        # Compile the client_benchmark example
        features = None
        if self.backpressure:
            # Add any specific features needed for backpressure if required
            features = []

        log.info("Compiling client_benchmark example...")
        self.executable_path = build_example("client_benchmark", features)
        log.info(f"Client benchmark executable ready at: {self.executable_path}")

        return self.metadata

    def get_command(self) -> Command:
        subprocess_args = [self.executable_path]

        if self.backpressure:
            subprocess_args.append("--enable-backpressure")
            if (initial_window_size := self.client_config['read_window_size']) is not None:
                subprocess_args.extend(["--initial-window-size", str(initial_window_size)])

        if (run_time := self.common_config['run_time']) is not None:
            subprocess_args.extend(["--max-duration", f"{run_time}"])

        if (max_throughput := self.common_config.get('max_throughput_gbps')) is not None:
            subprocess_args.extend(["--throughput-target-gbps", str(max_throughput)])

        if (read_part_size := self.common_config['read_part_size']) is not None:
            subprocess_args.extend(["--part-size", read_part_size])

        if (crt_mem_limit_gib := self.common_config.get('crt_mem_limit_gib')) is not None:
            subprocess_args.extend(["--crt-memory-limit-gb", crt_mem_limit_gib])

        subprocess_args.extend(["--output-file", "client-output.json"])
        subprocess_args.append("real")
        region = self.common_config['region']
        subprocess_args.extend(["--region", region])

        for interface in self.common_config['network_interfaces']:
            subprocess_args.extend(["--bind", interface])

        subprocess_args.append(self.common_config['s3_bucket'])

        objects = self.common_config['s3_keys']
        app_workers = self.common_config['application_workers']
        object_size_in_gib = self.common_config['object_size_in_gib']
        if not objects:
            objects = self.config_parser.default_object_keys(app_workers, object_size_in_gib)

        if len(objects) >= app_workers:
            for obj in objects:
                subprocess_args.append(obj)
        else:
            raise ValueError("Seeing fewer objects than app workers. So cannot proceed with the run.")

        client_env = {}
        if not self.common_config['download_checksums']:
            client_env["EXPERIMENTAL_MOUNTPOINT_NO_DOWNLOAD_INTEGRITY_VALIDATION"] = "ON"
        if (crt_eventloop_threads := self.common_config['crt_eventloop_threads']) is not None:
            client_env["UNSTABLE_CRT_EVENTLOOP_THREADS"] = str(crt_eventloop_threads)

        log.info("Client benchmark command prepared with args: %s", subprocess_args)

        return Command(args=subprocess_args, env=client_env)

    def post_process(self, result: CommandResult) -> Dict[str, Any]:
        if result.returncode != 0:
            log.error(f"Client benchmark failed with exit code {result.returncode}")
            if result.stderr:
                log.error(f"Error output: {result.stderr}")
            raise subprocess.CalledProcessError(result.returncode, ["client_benchmark"])

        log.info("Client benchmark completed successfully.")
        self.metadata["client_output_file"] = "client-output.json"
        return self.metadata
