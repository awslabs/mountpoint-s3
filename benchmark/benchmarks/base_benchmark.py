from abc import ABC, abstractmethod
from typing import Any

from .command import Command, CommandResult


class BaseBenchmark(ABC):
    """
    Abstract base class for all benchmarks.
    - setup: Prepare the environment for the benchmark
    - get_command: Return the command to execute for this benchmark
    - post_process: Process results, collect logs, and clean up
    """

    @abstractmethod
    def setup(self, with_flamegraph: bool = False) -> dict[str, Any]:
        """
        Set up the environment for the benchmark.

        Args:
            with_flamegraph: Whether to build with flamegraph-optimized compilation flags

        Returns:
            Dict containing setup metadata
        """

    @abstractmethod
    def get_command(self) -> Command:
        """
        Return the command to execute for this benchmark.

        Returns:
            Command object containing the subprocess arguments and environment.
        """

    @abstractmethod
    def post_process(self, result: CommandResult) -> dict[str, Any]:
        """
        Process results and output, collect logs, and clean up resources.

        Args:
            result: The result of command execution

        Returns:
            Dict containing post-processing metadata
        """
