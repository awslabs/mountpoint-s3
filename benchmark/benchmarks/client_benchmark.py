import logging
import subprocess
from typing import Dict, Any

from benchmarks.base_benchmark import BaseBenchmark
from benchmarks.command import Command, CommandResult
from benchmarks.cargo_helper import build_example
from benchmarks.config_utils import parse_comma_separated_string_to_array, default_object_keys
from omegaconf import DictConfig

log = logging.getLogger(__name__)


class ClientBenchmark(BaseBenchmark):
    def __init__(self, cfg: DictConfig, metadata: Dict[str, Any], backpressure=False):
        self.cfg = cfg
        self.metadata = metadata
        self.backpressure = backpressure

    def setup(self, with_flamegraph: bool = False) -> Dict[str, Any]:
        # Compile the client_benchmark example
        features = None
        if self.backpressure:
            # Add any specific features needed for backpressure if required
            features = []

        log.info("Compiling client_benchmark example...")
        self.executable_path = build_example("client_benchmark", features, with_flamegraph=with_flamegraph)
        log.info(f"Client benchmark executable ready at: {self.executable_path}")

        return self.metadata

    def get_command(self) -> Command:
        subprocess_args = [self.executable_path]

        if self.backpressure:
            subprocess_args.append("--enable-backpressure")
            if (initial_window_size := self.cfg.benchmarks.client.read_window_size) is not None:
                subprocess_args.extend(["--initial-window-size", str(initial_window_size)])

        if (run_time := self.cfg.run_time) is not None:
            subprocess_args.extend(["--max-duration", f"{run_time}"])

        if (max_throughput := getattr(self.cfg.network, 'maximum_throughput_gbps', None)) is not None:
            subprocess_args.extend(["--throughput-target-gbps", str(max_throughput)])

        if (read_part_size := self.cfg.read_part_size) is not None:
            subprocess_args.extend(["--part-size", read_part_size])

        subprocess_args.extend(["--output-file", "client-output.json"])
        subprocess_args.append("real")
        region = self.cfg.region
        subprocess_args.extend(["--region", region])

        for interface in self.cfg.network.interface_names:
            subprocess_args.extend(["--bind", interface])

        subprocess_args.append(self.cfg.s3_bucket)

        objects = parse_comma_separated_string_to_array(self.cfg.s3_keys or "")
        app_workers = self.cfg.application_workers
        object_size_in_gib = self.cfg.object_size_in_gib
        if not objects:
            objects = default_object_keys(app_workers, object_size_in_gib)

        if len(objects) >= app_workers:
            for obj in objects:
                subprocess_args.append(obj)
        else:
            raise ValueError("Seeing fewer objects than app workers. So cannot proceed with the run.")

        client_env = {}
        if not self.cfg.download_checksums:
            client_env["EXPERIMENTAL_MOUNTPOINT_NO_DOWNLOAD_INTEGRITY_VALIDATION"] = "ON"
        if (crt_eventloop_threads := self.cfg.crt_eventloop_threads) is not None:
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
