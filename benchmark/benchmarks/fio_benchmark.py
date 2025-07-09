"""
FIO benchmark implementation for Mountpoint-S3 using the modular structure.
"""

from datetime import datetime, timezone
import logging
import os
from os import path
import subprocess
from subprocess import Popen, CalledProcessError
import tempfile
from typing import Dict, Any

import hydra
from omegaconf import DictConfig

from benchmarks.base_benchmark import BaseBenchmark
from benchmarks.mountpoint import mount_mp
from benchmarks.benchmark_config_parser import BenchmarkConfigParser

log = logging.getLogger(__name__)

MP_LOGS_DIRECTORY = "mp_logs/"


class FioBenchmark(BaseBenchmark):
    def __init__(self, cfg: DictConfig):
        super().__init__(cfg)
        self.config_parser = BenchmarkConfigParser(cfg)
        self.common_config = self.config_parser.get_common_config()
        self.fio_config = self.config_parser.get_fio_config()
        self.mount_dir = None
        self.mount_metadata = None
        self.fio_output_filepath = None

    def setup(self) -> Dict[str, Any]:
        self.mount_dir = tempfile.mkdtemp(suffix=".mountpoint-s3")
        self.mount_metadata = mount_mp(self.cfg, self.mount_dir)

        fio_job_name = self.fio_config['fio_benchmark']
        self.fio_output_filepath = f"fio.{fio_job_name}.json"

        return self.mount_metadata

    def run_benchmark(self) -> Dict[str, Any]:
        FIO_BINARY = "fio"
        fio_job_name = self.fio_config['fio_benchmark']

        fio_job_filepath = hydra.utils.to_absolute_path(f"fio/{fio_job_name}.fio")

        subprocess_args = [
            FIO_BINARY,
            "--eta=never",
            "--output-format=json",
            f"--output={self.fio_output_filepath}",
            f"--directory={self.mount_dir}",
            fio_job_filepath,
        ]

        subprocess_env = os.environ.copy()
        subprocess_env["APP_WORKERS"] = str(self.common_config['application_workers'])
        subprocess_env["SIZE_GIB"] = str(self.common_config['object_size_in_gib'])
        subprocess_env["DIRECT"] = "1" if self.fio_config['direct_io'] else "0"
        subprocess_env["UNIQUE_DIR"] = datetime.now(tz=timezone.utc).isoformat()
        subprocess_env["IO_ENGINE"] = self.fio_config['fio_io_engine']
        subprocess_env["RUN_TIME"] = str(self.common_config['run_time'])

        log.info("Running FIO with args: %s; env: %s", subprocess_args, subprocess_env)

        try:
            with Popen(subprocess_args, env=subprocess_env) as process:
                exit_code = process.wait()
                if exit_code != 0:
                    log.error(f"FIO process failed with exit code {exit_code}")
                    raise CalledProcessError(exit_code, subprocess_args)
            return {"success": True}
        except Exception as e:
            log.error(f"Benchmark failed: {e}")
            return {"success": False}

    def post_process(self) -> Dict[str, Any]:
        self.collect_logs()

        try:
            try:
                # FIXME: Check if mountpoint started or not
                subprocess.check_output(["umount", self.mount_dir])
            except subprocess.CalledProcessError:
                log.warning(f"Failed to unmount {self.mount_dir}")

            log.debug(f"{self.mount_dir} unmounted")
            os.rmdir(self.mount_dir)
            os.remove(self.mount_metadata["mount_s3_env"]["UNSTABLE_MOUNTPOINT_PID_FILE"])
        except Exception as e:
            log.error(f"Error cleaning up Mountpoint at {self.mount_dir}: {e}")

        return {}

    def collect_logs(self) -> None:
        logs_directory = path.join(os.getcwd(), MP_LOGS_DIRECTORY)
        if not path.exists(logs_directory):
            log.debug(f"Mountpoint logs directory {logs_directory} does not exist")
            return

        dir_entries = os.listdir(logs_directory)

        if not dir_entries:
            log.debug(f"No Mountpoint log files in directory {logs_directory}")
            return

        assert len(dir_entries) <= 1, f"Expected no more than one log file in {logs_directory}"

        old_log_dir = path.join(logs_directory, dir_entries[0])
        new_log_path = "mountpoint-s3.log"
        log.debug(f"Renaming {old_log_dir} to {new_log_path}")
        os.rename(old_log_dir, new_log_path)
        os.rmdir(logs_directory)
