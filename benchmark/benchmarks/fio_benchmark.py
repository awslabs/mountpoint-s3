import logging
import subprocess
import tempfile
from typing import Dict, Any
from datetime import datetime, timezone

from benchmarks.base_benchmark import BaseBenchmark
from benchmarks.command import Command, CommandResult
import hydra
from omegaconf import DictConfig

from benchmarks.benchmark_config_parser import BenchmarkConfigParser
from benchmarks.mountpoint import mount_mp, cleanup_mp

log = logging.getLogger(__name__)


class FioBenchmark(BaseBenchmark):
    def __init__(self, cfg: DictConfig, metadata: Dict[str, Any]):
        self.cfg = cfg
        self.metadata = metadata  # Use the metadata passed from benchmark.py
        self.config_parser = BenchmarkConfigParser(cfg)
        self.common_config = self.config_parser.get_common_config()
        self.fio_config = self.config_parser.get_fio_config()
        self.mount_dir = None
        self.fio_output_filepath = None

    def _get_dev_id(self):
        with open('/proc/self/mountinfo', 'r') as f:
            for line in f:
                fields = line.split()
                # Use mounted dir to extract the dev id
                if fields[4] == self.mount_dir:
                    dev_id = fields[2]
                    return dev_id
        raise RuntimeError(f"Could not find device ID for mount point {self.mount_dir}")

    def _set_read_ahead(self, bytes):
        dev_id = self._get_dev_id()
        read_ahead_path = f"/sys/class/bdi/{dev_id}/read_ahead_kb"
        bytes_in_kb = bytes // 1024
        cmd = f'echo {bytes_in_kb} > {read_ahead_path}'
        subprocess.run(['sudo', 'sh', '-c', cmd], check=True, capture_output=True)
        log.info(f"Set read_ahead_kb to {bytes} for device {dev_id}")

    def setup(self, build_with_flamegraphs: bool = False) -> Dict[str, Any]:
        self.mount_dir = tempfile.mkdtemp(suffix=".mountpoint-s3")
        mount_metadata = mount_mp(self.cfg, self.mount_dir, build_with_flamegraphs)
        self.metadata.update(mount_metadata)
        return self.metadata

    def get_command(self) -> Command:
        FIO_BINARY = "fio"
        fio_job_name = self.fio_config['fio_benchmark']
        fio_job_filepath = hydra.utils.to_absolute_path(f"fio/{fio_job_name}.fio")
        self.fio_output_filepath = f"fio.{fio_job_name}.json"

        subprocess_args = [
            FIO_BINARY,
            "--eta=never",
            "--output-format=json",
            f"--output={self.fio_output_filepath}",
            f"--directory={self.mount_dir}",
            fio_job_filepath,
        ]

        fio_env = {}
        fio_env["APP_WORKERS"] = str(self.common_config['application_workers'])
        fio_env["SIZE_GIB"] = str(self.common_config['object_size_in_gib'])
        fio_env["DIRECT"] = "1" if self.fio_config['direct_io'] else "0"
        fio_env["UNIQUE_DIR"] = datetime.now(tz=timezone.utc).isoformat()
        fio_env["IO_ENGINE"] = self.fio_config['fio_io_engine']
        fio_env["RUN_TIME"] = str(self.common_config['run_time'])
        fio_env["BLOCK_SIZE"] = str(self.common_config['read_size'])

        # Increase the read_ahead_kb limit to allow reads higher than 256K.
        # The script needs sudo permissions to overwrite this limit
        if not self.fio_config['direct_io'] and self.common_config['read_size'] > 256 * 1024:
            self._set_read_ahead(self.common_config['read_size'])

        log.info("FIO command prepared with args: %s; env: %s", subprocess_args, fio_env)

        return Command(args=subprocess_args, env=fio_env)

    def post_process(self, result: CommandResult) -> Dict[str, Any]:
        cleanup_mp(self.mount_dir)
        if result.returncode != 0:
            log.error(f"FIO process failed with exit code {result.returncode}")
            raise subprocess.CalledProcessError(result.returncode, ["fio"])

        self.metadata["fio_output_file"] = self.fio_output_filepath
        return self.metadata
