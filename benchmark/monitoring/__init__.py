import logging
from contextlib import contextmanager

from .base import MonitoringTool

log = logging.getLogger(__name__)


class ResourceMonitoring:
    """Manages lifecycle of multiple monitoring tools during benchmark execution.

    Coordinates starting and stopping of monitoring tools like mpstat, bwm-ng,
    perf stat, and flamegraph. Provides a context manager interface for automatic
    cleanup of monitoring resources.

    Example:
        tools = [MpstatTool(), PerfStatTool(pid)]
        with ResourceMonitoring.managed(tools):
            # Run benchmark while monitoring
            pass
    """

    def __init__(self, tools: list[MonitoringTool]):
        """Resource monitoring setup.

        tools: List of MonitoringTool instances to manage
        """
        self.tools = tools

    def _start(self) -> None:
        log.debug("Starting resource monitors...")
        for tool in self.tools:
            tool.start()

    def _close(self) -> None:
        log.debug("Shutting down resource monitors...")
        for tool in self.tools:
            tool.stop()

    @staticmethod
    @contextmanager
    def managed(tools: list[MonitoringTool]):
        resource = ResourceMonitoring(tools)
        try:
            resource._start()
            yield resource
        finally:
            resource._close()
