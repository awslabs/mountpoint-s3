from abc import ABC, abstractmethod
from typing import Dict, Any

from .command import Command, CommandResult


class BaseBenchmark(ABC):
    """
    Abstract base class for all benchmarks.
    - setup: Prepare the environment for the benchmark
    - get_command: Return the command to execute for this benchmark
    - post_process: Process results, collect logs, and clean up
    """

    @abstractmethod
    def setup(self, build_with_flamegraphs: bool = False) -> Dict[str, Any]:
        """
        Set up the environment for the benchmark.

        Args:
            build_with_flamegraphs: Whether to build with flamegraph-optimized compilation flags

        Returns:
            Dict containing setup metadata
        """
        pass

    @abstractmethod
    def get_command(self) -> Command:
        """
        Return the command to execute for this benchmark.

        Returns:
            Command object containing the subprocess arguments and environment.
        """
        pass

    @abstractmethod
    def post_process(self, result: CommandResult) -> Dict[str, Any]:
        """
        Process results and output, collect logs, and clean up resources.

        Args:
            result: The result of command execution

        Returns:
            Dict containing post-processing metadata
        """
        pass
