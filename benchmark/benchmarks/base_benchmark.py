from abc import ABC, abstractmethod
import logging
from typing import Dict, Any

from omegaconf import DictConfig

log = logging.getLogger(__name__)


class BaseBenchmark(ABC):
    """
    Abstract base class for all benchmarks.
    - setup: Prepare the environment for the benchmark
    - run_benchmark: Execute the actual benchmark workload
    - post_process: Process results, collect logs, and clean up
    """

    def __init__(self, cfg: DictConfig):
        """
        Initialize the benchmark with configuration.

        Args:
            cfg: The benchmark configuration
        """
        self.cfg = cfg

    @abstractmethod
    def setup(self) -> Dict[str, Any]:
        """
        Set up the environment for the benchmark.

        Returns:
            Dict containing setup metadata
        """
        pass

    @abstractmethod
    def run_benchmark(self) -> Dict[str, Any]:
        """
        Run the actual benchmark workload.

        Returns:
            Dict containing benchmark results metadata
        """
        pass

    @abstractmethod
    def post_process(self) -> Dict[str, Any]:
        """
        Process results, collect logs, and clean up resources.

        Returns:
            Dict containing post-processing metadata
        """
        pass
