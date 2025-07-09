"""
Mountpoint setup for testing fio benchmarks.
"""

from contextlib import contextmanager
import logging
import os
import subprocess
import tempfile
from typing import Dict, Any

from omegaconf import DictConfig

from benchmarks.benchmark_config_parser import BenchmarkConfigParser

logging.basicConfig(level=os.environ.get('LOGLEVEL', 'INFO').upper())
log = logging.getLogger(__name__)

MOUNT_DIRECTORY = "s3"
MP_LOGS_DIRECTORY = "mp_logs/"


class MountError(Exception):
    """Exception raised when mounting an S3 bucket fails."""

    pass


@contextmanager
def mounted_bucket(cfg: DictConfig):
    """
    Mounts the S3 bucket, providing metadata about the successful mount.

    Context manager allows use of `with` clause, automatically unmounting the bucket.
    """
    mount_dir = tempfile.mkdtemp(suffix=".mountpoint-s3")
    mount_metadata = mount_mp(cfg, mount_dir)
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


def mount_mp(
    cfg: DictConfig,
    mount_dir: str,
) -> Dict[str, Any]:
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
    stub_mode = mp_config['stub_mode']

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
            bucket = f"sthree-{bucket}"

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

    read_part_size = common_config['read_part_size']
    if read_part_size:
        subprocess_args.append(f"--read-part-size={read_part_size}")

    write_part_size = common_config['write_part_size']
    if write_part_size:
        subprocess_args.append(f"--write-part-size={write_part_size}")

    if mp_config['metadata_ttl'] is not None:
        subprocess_args.append(f"--metadata-ttl={mp_config['metadata_ttl']}")

    # Get fuse_threads from benchmark-specific config
    fuse_threads = fio_config['fuse_threads']
    if fuse_threads is not None:
        subprocess_args.append(f"--max-threads={fuse_threads}")

    for network_interface in common_config['network_interfaces']:
        subprocess_args.append(f"--bind={network_interface}")

    max_throughput = common_config['max_throughput_gbps']
    if max_throughput is not None:
        if stub_mode == "s3_client":
            raise ValueError(
                "should not use `stub_mode=s3_client` with `maximum_throughput_gbps`, throughput will be limited"
            )
        subprocess_args.append(f"--maximum-throughput-gbps={max_throughput}")

    subprocess_env["UNSTABLE_MOUNTPOINT_PID_FILE"] = f"{mount_dir}.pid"

    log.info(f"Mounting S3 bucket {bucket} with args: %s; env: %s", subprocess_args, subprocess_env)
    try:
        output = subprocess.check_output(subprocess_args, env=subprocess_env)
    except subprocess.CalledProcessError as e:
        log.error(f"Error during mounting: {e}")
        raise MountError() from e

    mountpoint_pid = get_mount_s3_pid(subprocess_env["UNSTABLE_MOUNTPOINT_PID_FILE"])
    log.info("Mountpoint pid: %d, output: %s", mountpoint_pid, output.decode("utf-8").strip())

    return {
        "mount_dir": mount_dir,
        "mount_s3_command": " ".join(subprocess_args),
        "mount_s3_env": subprocess_env,
        "mp_version": mountpoint_version_output.strip(),
        "mp_pid": mountpoint_pid,
    }


def get_mount_s3_pid(pid_file: str) -> int:
    """
    Get the process ID of the mount-s3 process from the PID file.
    """
    try:
        with open(pid_file, 'r') as f:
            pid = int(f.read().strip())

        log.debug(f"Read mount-s3 pid: {pid} from file: {pid_file}")

        return pid

    except FileNotFoundError:
        raise RuntimeError(f"Mountpoint pid file not found: {pid_file}")
    except Exception as e:
        raise RuntimeError("Could not determine mountpoint pid") from e
