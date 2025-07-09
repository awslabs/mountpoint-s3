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

from benchmarks.benchmark_config_parser import BenchmarkConfigParser

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
            os.remove(mount_metadata["mount_s3_env"]["UNSTABLE_MOUNTPOINT_PID_FILE"])
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
    config_parser = BenchmarkConfigParser(cfg)
    common_config = config_parser.get_common_config()
    mp_config = config_parser.get_mountpoint_config()
    fio_config = config_parser.get_fio_config()

    bucket = common_config['s3_bucket']
    stub_mode = str(mp_config["stub_mode"]).lower()

    if mp_config['mountpoint_binary'] is None:
        mountpoint_args = [
            "cargo",
            "run",
            "--quiet",
            "--release",
            "--features=mock",
        ]

        if stub_mode == "s3_client":
            # `mock-mount-s3` requires bucket to be prefixed with `sthree-` to verify we're not actually reaching S3
            logging.debug("using mock-mount-s3 due to `stub_mode`, bucket will be prefixed with \"sthree-\"")
            bucket = f"sthree-{common_config['s3_bucket']}"

            mountpoint_args.append("--bin=mock-mount-s3")

        # End Cargo command, begin passing arguments to Mountpoint
        mountpoint_args.append("--")
    else:
        mountpoint_args = [mp_config['mountpoint_binary']]

    os.makedirs(MP_LOGS_DIRECTORY, exist_ok=True)

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
    subprocess_env = os.environ.copy()

    if mp_config['prefix'] is not None:
        subprocess_args.append(f"--prefix={mp_config['prefix']}")

    if mp_config['mountpoint_debug']:
        subprocess_args.append("--debug")
    if mp_config['mountpoint_debug_crt']:
        subprocess_args.append("--debug-crt")

    if common_config["read_part_size"]:
        subprocess_args.append(f"--read-part-size={common_config['read_part_size']}")
    if common_config["write_part_size"]:
        subprocess_args.append(f"--write-part-size={common_config['write_part_size']}")

    if mp_config['metadata_ttl'] is not None:
        subprocess_args.append(f"--metadata-ttl={mp_config['metadata_ttl']}")

    if mp_config['upload_checksums'] is not None:
        subprocess_args.append(f"--upload-checksums={mp_config['upload_checksums']}")

    if fio_config['fuse_threads'] is not None:
        subprocess_args.append(f"--max-threads={fio_config['fuse_threads']}")

    for network_interface in common_config['network_interfaces']:
        subprocess_args.append(f"--bind={network_interface}")
    if (max_throughput := common_config['max_throughput_gbps']) is not None:
        if stub_mode == "s3_client":
            raise ValueError(
                "should not use `stub_mode=s3_client` with `maximum_throughput_gbps`, throughput will be limited"
            )
        subprocess_args.append(f"--maximum-throughput-gbps={max_throughput}")

    if mp_config['mountpoint_max_background'] is not None:
        subprocess_env["UNSTABLE_MOUNTPOINT_MAX_BACKGROUND"] = str(mp_config['mountpoint_max_background'])

    if mp_config['mountpoint_congestion_threshold'] is not None:
        subprocess_env["UNSTABLE_MOUNTPOINT_CONGESTION_THRESHOLD"] = str(mp_config["mountpoint_congestion_threshold"])

    subprocess_env["UNSTABLE_MOUNTPOINT_PID_FILE"] = f"{mount_dir}.pid"

    if stub_mode != "off" and mp_config["mountpoint_binary"] is not None:
        raise ValueError("Cannot use `stub_mode` with `mountpoint_binary`, `stub_mode` requires recompilation")
    match stub_mode:
        case "off":
            pass
        case "fs_handler":
            subprocess_env["MOUNTPOINT_BUILD_STUB_FS_HANDLER"] = "1"
        case "s3_client":
            # Already handled when building cargo command
            pass
        case _:
            raise ValueError(f"Unknown stub_mode: {stub_mode}")

    log.info(f"Mounting S3 bucket {bucket} with args: %s; env: %s", subprocess_args, subprocess_env)
    try:
        output = subprocess.check_output(subprocess_args, env=subprocess_env)
    except subprocess.CalledProcessError as e:
        log.error(f"Error during mounting: {e}")
        raise MountError() from e

    mountpoint_pid = _get_mount_s3_pid(subprocess_env["UNSTABLE_MOUNTPOINT_PID_FILE"])
    log.info("Mountpoint pid: %d, output: %s", mountpoint_pid, output.decode("utf-8").strip())

    return {
        "mount_dir": mount_dir,
        "mount_s3_command": " ".join(subprocess_args),
        "mount_s3_env": subprocess_env,
        "mp_version": mountpoint_version_output.strip(),
        "mp_pid": mountpoint_pid,
    }


def _run_fio(cfg: DictConfig, mount_dir: str) -> None:
    """
    Run the FIO workload against the file system.
    """
    config_parser = BenchmarkConfigParser(cfg)
    common_config = config_parser.get_common_config()
    fio_config = config_parser.get_fio_config()

    FIO_BINARY = "fio"
    fio_job_name = fio_config["fio_benchmark"]
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
    subprocess_env = os.environ.copy()
    subprocess_env["APP_WORKERS"] = str(common_config['application_workers'])
    subprocess_env["SIZE_GIB"] = str(common_config['object_size_in_gib'])
    subprocess_env["DIRECT"] = "1" if fio_config['direct_io'] else "0"
    subprocess_env["UNIQUE_DIR"] = datetime.now(tz=timezone.utc).isoformat()
    subprocess_env["IO_ENGINE"] = fio_config['fio_io_engine']
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


def _get_mount_s3_pid(pid_file: str) -> int:
    try:
        with open(pid_file, 'r') as f:
            pid = int(f.read().strip())

        log.debug(f"Read mount-s3 pid: {pid} from file: {pid_file}")

        return pid

    except FileNotFoundError:
        raise RuntimeError(f"Mountpoint pid file not found: {pid_file}")
    except Exception as e:
        raise RuntimeError("Could not determine mountpoint pid") from e


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

    config_parser = BenchmarkConfigParser(cfg)
    common_config = config_parser.get_common_config()

    with _mounted_bucket(cfg) as mount_metadata:
        metadata.update(mount_metadata)
        mount_dir = mount_metadata["mount_dir"]
        mountpoint_pid = mount_metadata["mp_pid"]
        try:
            with ResourceMonitoring.managed(mountpoint_pid, common_config['with_bwm'], common_config['with_perf_stat']):
                _run_fio(cfg, mount_dir)
            metadata["success"] = True
        except Exception as e:
            log.error(f"Error running experiment: {e}")

    metadata["end_time"] = datetime.now(tz=timezone.utc)

    _postprocessing(metadata)
    log.info("Experiment ended")


if __name__ == "__main__":
    run_experiment()
