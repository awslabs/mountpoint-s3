import logging
import os
import subprocess
from typing import Dict, Any

from omegaconf import DictConfig

from benchmarks.benchmark_config_parser import BenchmarkConfigParser
from benchmarks.cargo_helper import build_binary

logging.basicConfig(level=os.environ.get('LOGLEVEL', 'INFO').upper())
log = logging.getLogger(__name__)

MOUNT_DIRECTORY = "s3"
MP_LOGS_DIRECTORY = "mp_logs/"


def cleanup_mp(mount_dir):
    if mount_dir is not None:
        log.info(f"Cleaning up {mount_dir}")
        subprocess.check_output(["umount", mount_dir])
        os.rmdir(mount_dir)
        os.remove(f"{mount_dir}.pid")


def mount_mp(cfg: DictConfig, mount_dir: str, flamegraph_enhancement: bool = False) -> Dict[str, Any]:
    """
    Mount an S3 bucket using Mountpoint,
    using the configuration to apply Mountpoint arguments.
    """
    config_parser = BenchmarkConfigParser(cfg)
    common_config = config_parser.get_common_config()
    mp_config = config_parser.get_mountpoint_config()

    bucket = common_config['s3_bucket']
    stub_mode = mp_config['stub_mode']

    if mp_config['mountpoint_binary'] is None:
        # Compile the binary instead of using cargo run
        features = ["mock", "mem_limiter"]
        build_env = {}

        if stub_mode == "s3_client":
            # `mock-mount-s3` requires bucket to be prefixed with `sthree-` to verify we're not actually reaching S3
            logging.debug("using mock-mount-s3 due to `stub_mode`, bucket will be prefixed with \"sthree-\"")
            bucket = f"sthree-{bucket}"
            binary_name = "mock-mount-s3"
        elif stub_mode == "fs_handler":
            binary_name = "mount-s3"
            build_env["MOUNTPOINT_BUILD_STUB_FS_HANDLER"] = "1"
        else:
            binary_name = "mount-s3"

        log.info(f"Compiling {binary_name} with features: {features}")
        mountpoint_binary = build_binary(binary_name, features, build_env, flamegraph_enhancement)
        mountpoint_args = [mountpoint_binary]
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

    if mp_config['prefix'] is not None:
        subprocess_args.append(f"--prefix={mp_config['prefix']}")

    if mp_config['mountpoint_debug']:
        subprocess_args.append("--debug")

    if mp_config['mountpoint_debug_crt']:
        subprocess_args.append("--debug-crt")

    if read_part_size := common_config['read_part_size']:
        subprocess_args.append(f"--read-part-size={read_part_size}")

    if write_part_size := common_config['write_part_size']:
        subprocess_args.append(f"--write-part-size={write_part_size}")

    if mp_config['metadata_ttl'] is not None:
        subprocess_args.append(f"--metadata-ttl={mp_config['metadata_ttl']}")

    if mp_config['upload_checksums'] is not None:
        subprocess_args.append(f"--upload-checksums={mp_config['upload_checksums']}")

    if (max_memory_target := mp_config['max_memory_target']) is not None:
        subprocess_args.append(f"--max-memory-target={max_memory_target}")

    if (fuse_threads := mp_config['fuse_threads']) is not None:
        subprocess_args.append(f"--max-threads={fuse_threads}")

    for network_interface in common_config['network_interfaces']:
        subprocess_args.append(f"--bind={network_interface}")

    if (max_throughput := common_config['max_throughput_gbps']) is not None:
        if stub_mode == "s3_client":
            raise ValueError(
                "should not use `stub_mode=s3_client` with `maximum_throughput_gbps`, throughput will be limited"
            )
        subprocess_args.append(f"--maximum-throughput-gbps={max_throughput}")

    mp_env = {}
    if mp_config['mountpoint_max_background'] is not None:
        mp_env["UNSTABLE_MOUNTPOINT_MAX_BACKGROUND"] = str(mp_config['mountpoint_max_background'])

    if mp_config['mountpoint_congestion_threshold'] is not None:
        mp_env["UNSTABLE_MOUNTPOINT_CONGESTION_THRESHOLD"] = str(mp_config["mountpoint_congestion_threshold"])

    mp_env["UNSTABLE_MOUNTPOINT_PID_FILE"] = f"{mount_dir}.pid"
    if not common_config['download_checksums']:
        mp_env["EXPERIMENTAL_MOUNTPOINT_NO_DOWNLOAD_INTEGRITY_VALIDATION"] = "ON"

    if stub_mode != "off" and mp_config["mountpoint_binary"] is not None:
        raise ValueError("Cannot use `stub_mode` with `mountpoint_binary`, `stub_mode` requires recompilation")

    match stub_mode:
        case "off":
            pass
        case "fs_handler":
            mp_env["MOUNTPOINT_BUILD_STUB_FS_HANDLER"] = "1"
        case "s3_client":
            # Already handled when building cargo command
            pass
        case _:
            raise ValueError(f"Unknown stub_mode: {stub_mode}")

    log.info(f"Mounting S3 bucket {bucket} with args: %s; env: %s", subprocess_args, mp_env)
    subprocess_env = os.environ.copy()
    subprocess_env.update(mp_env)
    log.debug("Subprocess env: %s", subprocess_env)

    output = subprocess.check_output(subprocess_args, env=subprocess_env)
    mountpoint_pid = get_mount_s3_pid(subprocess_env["UNSTABLE_MOUNTPOINT_PID_FILE"])
    log.info("Mountpoint pid: %d, output: %s", mountpoint_pid, output.decode("utf-8").strip())

    return {
        "mount_dir": mount_dir,
        "mount_s3_command": " ".join(subprocess_args),
        "mount_s3_env": subprocess_env,
        "mp_version": mountpoint_version_output.strip(),
        "target_pid": mountpoint_pid,
    }


def get_mount_s3_pid(pid_file: str) -> int:
    with open(pid_file, 'r') as f:
        pid = int(f.read().strip())

    log.debug(f"Read mount-s3 pid: {pid} from file: {pid_file}")
    return pid
