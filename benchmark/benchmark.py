from datetime import datetime, timezone
import json
import logging
import os
from os import path
import subprocess
from subprocess import Popen
import tempfile

import hydra
from omegaconf import DictConfig

logging.basicConfig(
    level=os.environ.get('LOGLEVEL', 'INFO').upper()
)

log = logging.getLogger(__name__)

MOUNT_DIRECTORY = "s3"
MP_LOGS_DIRECTORY = "mp_logs/"


def _mount_mp(
        cfg: DictConfig,
        metadata: dict[str, any],
        mount_dir: str,
        ) -> str:
    """
    Mount an S3 bucket using Mountpoint,
    using the configuration to apply Mountpoint arguments.

    Returns Mountpoint version string.
    """
    mountpoint_binary = path.join(
        hydra.utils.get_original_cwd(),
        cfg['mountpoint_binary'],
    )

    os.makedirs(MP_LOGS_DIRECTORY, exist_ok=True)

    bucket = cfg['s3_bucket']

    mountpoint_version_output = subprocess \
        .check_output([mountpoint_binary, "--version"]) \
        .decode("utf-8")
    log.info("Mountpoint version: %s", mountpoint_version_output.strip())

    subprocess_args = [
        mountpoint_binary,
        bucket,
        mount_dir,
        "--log-metrics",
        "--allow-overwrite",
        "--allow-delete",
        f"--log-directory={MP_LOGS_DIRECTORY}",
    ]
    subprocess_env = {}

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

    log.info(f"Mounting S3 bucket {bucket} with args: %s; env: %s", subprocess_args, subprocess_env)
    metadata["mount_s3_command"] = " ".join(subprocess_args)
    metadata["mount_s3_env"] = subprocess_env
    output = subprocess.check_output(subprocess_args, env=subprocess_env)

    log.info("Mountpoint output: %s", output.decode("utf-8").strip())

    return mountpoint_version_output


def _run_fio(cfg: DictConfig, mount_dir: str) -> None:
    """
    Run the FIO workload against the file system.
    """
    FIO_BINARY = "/usr/bin/fio"
    fio_job_name = cfg["fio_benchmark"]
    fio_output_filepath = f"fio.{fio_job_name}.json"

    subprocess_args = []

    # TODO: Avoid duplicating/diverging the FIO jobs between `benchmark/fio/` and `mountpoint-s3/scripts/fio/`
    fio_job_filepath = hydra.utils.to_absolute_path(f"fio/{fio_job_name}.fio")
    subprocess_args.extend([
        FIO_BINARY,
        "--eta=never",
        "--output-format=json",
        f"--output={fio_output_filepath}",
        f"--directory={mount_dir}",
        fio_job_filepath,
    ])
    subprocess_env = {
        "APP_WORKERS": str(cfg['application_workers']),
        "SIZE_GIB": str(100),
        "DIRECT": str(1 if cfg['direct_io'] else 0),
        "UNIQUE_DIR": datetime.now(tz=timezone.utc).isoformat(),
        # TODO: Confirm assumption that `libaio` should make direct IO go faster.
        # TODO: Review if we should use sync or psync. We use `sync` in other benchmarks.
        "IO_ENGINE": str("libaio" if cfg['direct_io'] else "psync"),
    }
    log.info(f"Running FIO with args: %s; env: %s", subprocess_args, subprocess_env)

    # Use Popen instead of check_output, as we had some issues when trying to attach perf
    with Popen(subprocess_args, env=subprocess_env) as process:
        exit_code = process.wait()
        if exit_code != 0:
            log.error(f"FIO process failed with exit code {exit_code}")
            raise subprocess.CalledProcessError(exit_code, subprocess_args)
        else:
            log.info("FIO process completed successfully")


def _unmount_mp(mount_dir: str) -> None:
    """
    Attempts to unmount Mountpoint
    """
    subprocess.check_output(["/usr/bin/umount", mount_dir])
    log.info(f"{mount_dir} unmounted")


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
        json_str = json.dumps(metadata, default=str)
        f.write(json_str)


def _postprocessing(metadata: dict[str, any]) -> None:
    _collect_logs()
    _write_metadata(metadata)


@hydra.main(version_base=None, config_path="conf", config_name="config")
def run_experiment(cfg: DictConfig) -> None:
    """
    At a high level, we want to mount the S3 bucket using Mountpoint,
    run a synthetic workload against Mountpoint while capturing metrics and logs,
    then end the load and unmount the bucket.

    We should collect all of the logs and metric and dump them in the output directory.
    """
    log.info("Experiment starting")
    success = False
    mounted = False
    start_time = datetime.now(tz=timezone.utc)
    metadata = {
        "start_time": start_time,
    }

    try:
        mount_dir = tempfile.mkdtemp(suffix=".mountpoint-s3")
        mp_version = _mount_mp(cfg, metadata, mount_dir)
        mounted = True
        metadata["mp_version"] = mp_version
    except subprocess.SubprocessError as e:
        log.error(f"Error during mounting: {e}")

    if mounted:
        try:
            # TODO: Add resource monitoring during FIO job
            _run_fio(cfg, mount_dir)
            success = True
        except subprocess.SubprocessError as e:
            log.error(f"Error running experiment: {e}")

    metadata["end_time"] = datetime.now(tz=timezone.utc)
    metadata["success"] = success

    if mounted:
        try:
            _unmount_mp(mount_dir)
            os.rmdir(mount_dir)
        except Exception as e:
            log.error(f"Error cleaning up Mountpoint at {mount_dir}: {e}")

    _postprocessing(metadata)
    log.info("Experiment ended")


if __name__ == "__main__":
    run_experiment()
