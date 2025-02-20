from contextlib import contextmanager
from datetime import datetime, timezone
import json
import logging
import os
from os import path
import signal
import subprocess
from subprocess import Popen
import tempfile
from typing import List, Optional
import urllib.request

import hydra
from omegaconf import DictConfig, OmegaConf

logging.basicConfig(level=os.environ.get('LOGLEVEL', 'INFO').upper())

log = logging.getLogger(__name__)

OmegaConf.register_new_resolver(
    "join",
    lambda separator, elements: separator.join(elements),
)

MOUNT_DIRECTORY = "s3"
MP_LOGS_DIRECTORY = "mp_logs/"


@contextmanager
def _mounted_bucket(
    cfg: DictConfig,
):
    """
    Mounts the S3 bucket, providing metadata about the successful mount.

    Context manager allows use of `with` clause, automatically unmounting the bucket.
    """
    mount_dir = tempfile.mkdtemp(suffix=".mountpoint-s3")
    mount_metadata = _mount_mp(cfg, mount_dir)
    try:
        yield mount_metadata
    finally:
        try:
            subprocess.check_output(["umount", mount_dir])
            log.debug(f"{mount_dir} unmounted")
            os.rmdir(mount_dir)
        except Exception:
            log.error(f"Error cleaning up Mountpoint at {mount_dir}:", exc_info=True)


class MountError(Exception):
    pass


def _mount_mp(
    cfg: DictConfig,
    mount_dir: str,
) -> dict[str, any] | MountError | subprocess.CalledProcessError:
    """
    Mount an S3 bucket using Mountpoint,
    using the configuration to apply Mountpoint arguments.

    Returns Mountpoint version string.
    """

    if cfg['mountpoint_binary'] is None:
        mountpoint_args = [
            "cargo",
            "run",
            "--quiet",
            "--release",
            "--",
        ]
    else:
        mountpoint_args = [cfg['mountpoint_binary']]

    os.makedirs(MP_LOGS_DIRECTORY, exist_ok=True)

    bucket = cfg['s3_bucket']

    mountpoint_version_output = subprocess.check_output([*mountpoint_args, "--version"]).decode("utf-8")
    log.info("Mountpoint version: %s", mountpoint_version_output.strip())

    subprocess_args = [
        *mountpoint_args,
        bucket,
        mount_dir,
        "--log-metrics",
        "--allow-overwrite",
        "--allow-delete",
        f"--log-directory={MP_LOGS_DIRECTORY}",
    ]
    subprocess_env = {
        "PATH": os.environ["PATH"],
    }

    if cfg['s3_prefix'] is not None:
        subprocess_args.append(f"--prefix={cfg['s3_prefix']}")

    if cfg['mountpoint_debug']:
        subprocess_args.append("--debug")
    if cfg['mountpoint_debug_crt']:
        subprocess_args.append("--debug-crt")

    if cfg["read_part_size"]:
        subprocess_args.append(f"--read-part-size={cfg['read_part_size']}")
    if cfg["write_part_size"]:
        subprocess_args.append(f"--write-part-size={cfg['write_part_size']}")

    if cfg['metadata_ttl'] is not None:
        subprocess_args.append(f"--metadata-ttl={cfg['metadata_ttl']}")

    if cfg['upload_checksums'] is not None:
        subprocess_args.append(f"--upload-checksums={cfg['upload_checksums']}")

    if cfg['fuse_threads'] is not None:
        subprocess_args.append(f"--max-threads={cfg['fuse_threads']}")

    for network_interface in cfg['network']['interface_names']:
        subprocess_args.append(f"--bind={network_interface}")
    if (max_throughput := cfg['network']['maximum_throughput_gbps']) is not None:
        subprocess_args.append(f"--maximum-throughput-gbps={max_throughput}")

    if cfg['mountpoint_max_background'] is not None:
        subprocess_env["UNSTABLE_MOUNTPOINT_MAX_BACKGROUND"] = str(cfg['mountpoint_max_background'])

    if cfg['mountpoint_congestion_threshold'] is not None:
        subprocess_env["UNSTABLE_MOUNTPOINT_CONGESTION_THRESHOLD"] = str(cfg["mountpoint_congestion_threshold"])

    stub_mode = str(cfg["stub_mode"]).lower()
    if stub_mode != "off" and cfg["mountpoint_binary"] is not None:
        raise ValueError("Cannot use `stub_mode` with `mountpoint_binary`, `stub_mode` requires recompilation")
    match stub_mode:
        case "off":
            pass
        case "fs_handler":
            subprocess_env["MOUNTPOINT_BUILD_STUB_FS_HANDLER"] = "1"
        case _:
            raise ValueError(f"Unknown stub_mode: {stub_mode}")

    log.info(f"Mounting S3 bucket {bucket} with args: %s; env: %s", subprocess_args, subprocess_env)
    try:
        output = subprocess.check_output(subprocess_args, env=subprocess_env)
    except subprocess.CalledProcessError as e:
        log.error(f"Error during mounting: {e}")
        raise MountError() from e

    log.info("Mountpoint output: %s", output.decode("utf-8").strip())

    return {
        "mount_dir": mount_dir,
        "mount_s3_command": " ".join(subprocess_args),
        "mount_s3_env": subprocess_env,
        "mp_version": mountpoint_version_output.strip(),
    }


def _run_fio(cfg: DictConfig, mount_dir: str) -> None:
    """
    Run the FIO workload against the file system.
    """
    FIO_BINARY = "fio"
    fio_job_name = cfg["fio_benchmark"]
    fio_output_filepath = f"fio.{fio_job_name}.json"

    # TODO: Avoid duplicating/diverging the FIO jobs between `benchmark/fio/` and `mountpoint-s3/scripts/fio/`
    fio_job_filepath = hydra.utils.to_absolute_path(f"fio/{fio_job_name}.fio")
    subprocess_args = [
        FIO_BINARY,
        "--eta=never",
        "--output-format=json",
        f"--output={fio_output_filepath}",
        f"--directory={mount_dir}",
        fio_job_filepath,
    ]
    subprocess_env = {
        "PATH": os.environ["PATH"],
        "APP_WORKERS": str(cfg['application_workers']),
        "SIZE_GIB": "100",
        "DIRECT": "1" if cfg['direct_io'] else "0",
        "UNIQUE_DIR": datetime.now(tz=timezone.utc).isoformat(),
        # TODO: Confirm assumption that `libaio` should make direct IO go faster.
        # TODO: Review if we should use sync or psync. We use `sync` in other benchmarks.
        "IO_ENGINE": "libaio" if cfg['direct_io'] else "psync",
    }
    log.info("Running FIO with args: %s; env: %s", subprocess_args, subprocess_env)

    # Use Popen instead of check_output, as we had some issues when trying to attach perf
    with Popen(subprocess_args, env=subprocess_env) as process:
        exit_code = process.wait()
        if exit_code != 0:
            log.error(f"FIO process failed with exit code {exit_code}")
            raise subprocess.CalledProcessError(exit_code, subprocess_args)
        else:
            log.info("FIO process completed successfully")


def _collect_logs() -> None:
    """
    Collect the Mountpoint log if it exists and move to the output directory.
    Mountpoint log filename will be normalized removing the date, etc..
    The old log directory is removed.

    Fails if more than one log file is found.
    """
    logs_directory = path.join(os.getcwd(), MP_LOGS_DIRECTORY)
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


def _write_metadata(metadata: dict[str, any]) -> None:
    with open("metadata.json", "w") as f:
        json.dump(metadata, f, default=str)


def _postprocessing(metadata: dict[str, any]) -> None:
    _collect_logs()
    _write_metadata(metadata)


def _get_ec2_instance_id() -> Optional[str]:
    if os.getenv("AWS_EC2_METADATA_DISABLED") == "true":
        return None

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


class ResourceMonitoring:
    def __init__(self, with_bwm: bool):
        """Resource monitoring setup.

        with_bwm: Whether to start bandwidth monitor tool `bwm-ng`.  Optional because it's not available
        in the default AL2023 distro so you have to install it first."""
        self.mpstat_process = None
        self.bwm_ng_process = None
        self.with_bwm = with_bwm
        self.output_files = []

    def _start(self) -> None:
        log.debug("Starting resource monitors...")
        self.mpstat_process = self._start_mpstat()
        if self.with_bwm:
            self.bwm_ng_process = self._start_bwm_ng()

    def _close(self) -> None:
        log.debug("Shutting down resource monitors...")
        for process in [self.mpstat_process, self.bwm_ng_process]:
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

    @contextmanager
    def managed(with_bwm=False):
        resource = ResourceMonitoring(with_bwm)
        try:
            resource._start()
            yield resource
        finally:
            resource._close()


@hydra.main(version_base=None, config_path="conf", config_name="config")
def run_experiment(cfg: DictConfig) -> None:
    """
    At a high level, we want to mount the S3 bucket using Mountpoint,
    run a synthetic workload against Mountpoint while capturing metrics and logs,
    then end the load and unmount the bucket.

    We should collect all of the logs and metric and dump them in the output directory.
    """
    log.debug("Experiment starting")
    metadata = {
        "ec2_instance_id": _get_ec2_instance_id(),
        "start_time": datetime.now(tz=timezone.utc),
        "success": False,
    }

    with _mounted_bucket(cfg) as mount_metadata:
        metadata.update(mount_metadata)
        mount_dir = mount_metadata["mount_dir"]
        try:
            with ResourceMonitoring.managed(cfg['with_bwm']):
                _run_fio(cfg, mount_dir)
            metadata["success"] = True
        except Exception as e:
            log.error(f"Error running experiment: {e}")

    metadata["end_time"] = datetime.now(tz=timezone.utc)

    _postprocessing(metadata)
    log.info("Experiment ended")


if __name__ == "__main__":
    run_experiment()
