import logging
from typing import Any, Dict

from omegaconf import DictConfig

log = logging.getLogger(__name__)

class BenchmarkConfigParser:
    def __init__(self, cfg: DictConfig):
        self.cfg = cfg

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
            's3_bucket': self.cfg.s3_bucket,
            'with_bwm': getattr(self.cfg.monitoring, 'with_bwm', False),
            'write_part_size': getattr(self.cfg, 'write_part_size', 16777216), # 16 MiB
            'with_perf_stat': getattr(self.cfg.monitoring, 'with_perf_stat', False),
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
        }

    def get_fio_config(self) -> Dict[str, Any]:
        fio_cfg = self.cfg.benchmarks.fio
        return {
            'direct_io': getattr(fio_cfg, 'direct_io', False),
            'fio_benchmark': getattr(fio_cfg, 'fio_benchmark', 'sequential_read'),
            'fio_io_engine': getattr(fio_cfg, 'fio_io_engine', 'psync'),
        }
