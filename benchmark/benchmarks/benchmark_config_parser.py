import logging
from typing import Any, Dict

from omegaconf import DictConfig

log = logging.getLogger(__name__)


class BenchmarkConfigParser:
    def __init__(self, cfg: DictConfig):
        self.cfg = cfg

    def _parse_comma_separated_string_to_array(self, comma_separated_string: str) -> list:
        if not comma_separated_string:
            return []
        keys = [key.strip() for key in comma_separated_string.split(',')]

        # Filter out any empty keys
        keys = [key for key in keys if key]
        return keys

    def default_object_keys(self, app_workers, object_size_in_gib) -> list:
        keys = []
        for i in range(app_workers):
            keys.append(f"j{i}_{object_size_in_gib}GiB.bin")
        return keys

    def get_common_config(self) -> Dict[str, Any]:
        return {
            'application_workers': getattr(self.cfg, 'application_workers', 1),
            'benchmark_type': getattr(self.cfg, 'benchmark_type', 'fio'),
            'max_throughput_gbps': getattr(self.cfg.network, 'maximum_throughput_gbps', 100),
            'network_interfaces': getattr(self.cfg.network, 'interface_names', []),
            'object_size_in_gib': getattr(self.cfg, 'object_size_in_gib', 100),
            'read_part_size': getattr(self.cfg, 'read_part_size', None),
            'read_size': getattr(self.cfg, 'read_size', 262144),  # 256 KiB
            'region': getattr(self.cfg, 'region', "us-east-1"),
            'run_time': getattr(self.cfg, 'run_time', 30),
            's3_bucket': getattr(self.cfg, 's3_bucket', None),
            's3_result_bucket': getattr(self.cfg, 's3_result_bucket', None),
            's3_keys': self._parse_comma_separated_string_to_array(getattr(self.cfg, 's3_keys', None)),
            'with_bwm': getattr(self.cfg.monitoring, 'with_bwm', False),
            'write_part_size': getattr(self.cfg, 'write_part_size', 16777216),  # 16 MiB
            'with_perf_stat': getattr(self.cfg.monitoring, 'with_perf_stat', False),
            'with_flamegraph': getattr(self.cfg.monitoring, 'with_flamegraph', False),
            'download_checksums': getattr(self.cfg, 'download_checksums', True),
            'crt_eventloop_threads': getattr(self.cfg, 'crt_eventloop_threads', None),
        }

    def get_mountpoint_config(self) -> Dict[str, Any]:
        mp_cfg = self.cfg.mountpoint
        return {
            'fuse_threads': getattr(mp_cfg, 'fuse_threads', None),
            'metadata_ttl': getattr(mp_cfg, 'metadata_ttl', 'indefinite'),
            'mountpoint_binary': getattr(mp_cfg, 'mountpoint_binary', None),
            'mountpoint_congestion_threshold': getattr(mp_cfg, 'mountpoint_congestion_threshold', None),
            'mountpoint_debug': getattr(mp_cfg, 'mountpoint_debug', False),
            'mountpoint_debug_crt': getattr(mp_cfg, 'mountpoint_debug_crt', False),
            'mountpoint_max_background': getattr(mp_cfg, 'mountpoint_max_background', None),
            'prefix': getattr(mp_cfg, 'prefix', None),
            'stub_mode': getattr(mp_cfg, 'stub_mode', 'off'),
            'upload_checksums': getattr(mp_cfg, 'upload_checksums', None),
            'max_memory_target': getattr(mp_cfg, 'max_memory_target', None),
        }

    def get_fio_config(self) -> Dict[str, Any]:
        fio_cfg = self.cfg.benchmarks.fio
        return {
            'direct_io': getattr(fio_cfg, 'direct_io', False),
            'fio_benchmark': getattr(fio_cfg, 'fio_benchmark', 'sequential_read'),
            'fio_io_engine': getattr(fio_cfg, 'fio_io_engine', 'psync'),
        }

    def get_prefetch_config(self) -> Dict[str, Any]:
        prefetch_cfg = self.cfg.benchmarks.prefetch
        return {
            'max_memory_target': getattr(prefetch_cfg, 'max_memory_target', None),
        }

    def get_crt_config(self) -> Dict[str, Any]:
        crt_cfg = self.cfg.benchmarks.crt
        return {
            'crt_benchmarks_path': getattr(crt_cfg, 'crt_benchmarks_path', None),
        }

    def get_client_config(self) -> Dict[str, Any]:
        client_cfg = self.cfg.benchmarks.client
        return {
            'read_window_size': getattr(client_cfg, 'read_window_size', 2147483648),  # Reaslitic default value 8M/2G?
        }
