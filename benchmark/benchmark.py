from datetime import datetime, timezone
import json
import logging
import os
from os import path
import subprocess
import tempfile
from typing import Optional
import urllib.request

import hydra
from omegaconf import DictConfig

logging.basicConfig(
    level=os.environ.get('LOGLEVEL', 'INFO').upper()
)

log = logging.getLogger(__name__)

MOUNT_DIRECTORY = "s3"
MP_LOGS_DIRECTORY = "mp_logs/"

def _mount_mp(cfg: DictConfig, metadata: dict[str, any], mount_dir :str) -> str:
    """
    Mount an S3 bucket using Mountpoint, using the configuration to apply Mountpoint arguments.

    Returns Mountpoint version string.
    """
    mountpoint_binary = os.path.join(
        hydra.utils.get_original_cwd(),
        cfg['mountpoint_binary'],
    )

    os.makedirs(MP_LOGS_DIRECTORY, exist_ok=True)

    bucket = cfg['s3_bucket']

    mountpoint_version_output = subprocess.check_output([mountpoint_binary, "--version"]).decode("utf-8")
    log.info("Mountpoint version: %s", mountpoint_version_output.strip())

    subprocess_args = [
        mountpoint_binary,
        bucket,
        mount_dir,
        f"--metadata-ttl={cfg['metadata_ttl']}",
        "--log-metrics",
        "--allow-overwrite",
        "--allow-delete",
        f"--log-directory={MP_LOGS_DIRECTORY}",
        "--write-part-size=16777216", # 16MiB, to allow upload of 100GiB
    ]
    if cfg['s3_prefix'] is not None:
        subprocess_args.append(f"--prefix={cfg['s3_prefix']}")
    if cfg['mountpoint_debug']:
        subprocess_args.append("--debug")
    if cfg['mountpoint_debug_crt']:
        subprocess_args.append("--debug-crt")
    if cfg['upload_checksums'] is not None:
        subprocess_args.append(f"--upload-checksums={cfg['upload_checksums']}")
    if cfg['fuse_threads'] is not None:
        subprocess_args.append(f"--max-threads={cfg['fuse_threads']}")
    if cfg['network'] is not None:
        network = cfg['network']
        for network_interface in network['interface_names']:
            subprocess_args.append(f"--bind={network_interface}")
        if network['maximum_throughput_gbps'] is not None:
            subprocess_args.append(f"--maximum-throughput-gbps={network['maximum_throughput_gbps']}")
    subprocess_env = {
        "PID_FILE": "mount-s3.pid",
        "STUB_CRC32C": str(cfg['stub_crc32c']),
        "USE_MOCK_S3_CLIENT": str(cfg['use_mock_s3_client']),
    }
    if cfg['stub_fuse_read']:
        subprocess_env["STUB_FUSE_READ"] = "1"
    if cfg['mp_prefetcher_window_size'] is not None:
        subprocess_env["UNSTABLE_MOUNTPOINT_MAX_PREFETCH_WINDOW_SIZE"] = cfg['mp_prefetcher_window_size']

    log.info(f"Mounting S3 bucket {bucket} with args: %s; env: %s", subprocess_args, subprocess_env)
    metadata["mount_s3_command"] = " ".join(subprocess_args)
    metadata["mount_s3_env"] = subprocess_env
    output = subprocess.check_output(subprocess_args, env=subprocess_env)

    log.info("From Mountpoint: %s", output.decode("utf-8").strip())

    with open("mount-s3.pid") as pid_file:
        pid = pid_file.read().rstrip()
    log.debug("Mountpoint PID: %s", pid)

    if cfg['wait_for_profiler_attach']:
        input("Press Enter once profiler is attached...")

    return mountpoint_version_output

def _run_fio(cfg: DictConfig, mount_dir: str) -> None:
    """
    Run the FIO workload against the file system.
    """
    FIO_BINARY = "/usr/bin/fio"
    job_names = cfg["fio_benchmarks"]
    for job_name in job_names:
        job_out_dir = f"fio_out/{job_name}/"
        os.makedirs(job_out_dir, exist_ok=True)

        for iteration in range(cfg["iterations"]):
            fio_output = path.join(job_out_dir, f"{iteration}.json")
            subprocess_args = [
                FIO_BINARY,
                f"--output={fio_output}",
                "--output-format=json",
                "--eta=never",
                f"--directory={mount_dir}",
                hydra.utils.to_absolute_path(f"fio/{job_name}.fio"),
            ]
            subprocess_env = {
                "NUMJOBS": str(cfg['application_workers']),
                "SIZE_GIB": str(100),
                "DIRECT": str(1 if cfg['direct_io'] else 0),
                "UNIQUE_DIR": datetime.now(tz=timezone.utc).isoformat(),
                "IO_ENGINE": str("libaio" if cfg['direct_io'] else "psync"),
            }
            log.info(f"Running FIO with args: %s; env: %s", subprocess_args, subprocess_env)
            subprocess.check_output(subprocess_args, env=subprocess_env)

def _unmount_mp(mount_dir: str) -> None:
    """
    Attempts to unmount Mountpoint
    """
    subprocess.check_output(["/usr/bin/umount", mount_dir])
    log.info(f"{mount_dir} unmounted")

def _collect_logs() -> None:
    """
    Collect all logs and move them to the output directory. Drop the old directory.

    Fails if more than one log file is found.
    """
    logs_directory = os.path.join(os.getcwd(), MP_LOGS_DIRECTORY)
    dir_entries = os.listdir(logs_directory)

    if not dir_entries:
        return

    assert len(dir_entries) <= 1, f"Expected no more than one log file in {logs_directory}"

    old_log_dir = os.path.join(logs_directory, dir_entries[0])
    new_log_path = "mountpoint-s3.log"
    log.debug(f"Renaming {old_log_dir} to {new_log_path}")
    os.rename(old_log_dir, new_log_path)
    os.rmdir(logs_directory)

def _write_metadata(metadata: dict[str, any]) -> None:
    with open("metadata.json", "w") as f:
        json_str = json.dumps(metadata, default=str)
        f.write(json_str)

def _postprocessing(metadata: dict[str, any]) -> None:
    _collect_logs()
    _write_metadata(metadata)

def _get_ec2_instance_id() -> Optional[str]:
    if os.getenv("AWS_EC2_METADATA_DISABLED") == "true":
        return None

    token_url = "http://169.254.169.254/latest/api/token"
    token_request = urllib.request.Request(token_url, method='PUT')
    token_request.add_header("X-aws-ec2-metadata-token-ttl-seconds", "21600")
    token_response = urllib.request.urlopen(token_request)
    token = token_response.read().decode()

    metadata_url = "http://169.254.169.254/latest/meta-data/instance-id"
    metadata_request = urllib.request.Request(metadata_url, headers={"X-aws-ec2-metadata-token": token})
    metadata_response = urllib.request.urlopen(metadata_request)
    instance_id = metadata_response.read().decode()

    return instance_id


@hydra.main(version_base=None, config_path="conf", config_name="config")
def run_experiment(cfg: DictConfig) -> None:
    """
    At a high level, we want to mount the S3 bucket using Mountpoint,
    run a synthetic workload against Mountpoint while capturing metrics, end the load and unmount the bucket.

    We should collect all of the logs and metric and dump them in the output directory.
    """
    log.info("Experiment starting")
    success = False
    start_time = datetime.now(tz=timezone.utc)
    metadata = {
        "start_time": start_time,
    }

    mount_dir = tempfile.mkdtemp(suffix=".mountpoint-s3")
    try:
        mp_version = _mount_mp(cfg, metadata, mount_dir)
        metadata["mp_version"] = mp_version
        _run_fio(cfg, mount_dir)
        success = True
    except subprocess.SubprocessError as e:
        log.error(f"Error running experiment: {e}")

    metadata["end_time"] = datetime.now(tz=timezone.utc)
    metadata["ec2_instance_id"] = _get_ec2_instance_id()
    metadata["success"] = success

    try:
        _unmount_mp(mount_dir)
        os.rmdir(mount_dir)
    except Exception as e:
        log.error(f"Error cleaning up Mountpoint at {mount_dir}: {e}")

    _postprocessing(metadata)
    log.info("Experiment complete")

if __name__ == "__main__":
    run_experiment()
