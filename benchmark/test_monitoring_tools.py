from unittest.mock import Mock, patch, MagicMock

from monitoring import ResourceMonitoring
from monitoring.base import MonitoringTool
from monitoring.tools import MpstatTool, BwmNgTool, PerfStatTool, FlamegraphTool


class TestMpstatTool:
    """Test cases for MpstatTool monitoring functionality."""

    @patch('subprocess.Popen')
    @patch('builtins.open')
    def test_mpstat_tool_lifecycle(self, mock_open, mock_popen):
        """
        Test that MpstatTool correctly starts and stops CPU monitoring.

        Verifies that the tool opens an output file, starts the mpstat process,
        and properly cleans up resources when stopped.
        """
        # Given: Mock file and process objects
        mock_file = MagicMock()
        mock_open.return_value = mock_file
        mock_process = Mock()
        mock_popen.return_value = mock_process
        tool = MpstatTool()

        # When: Starting the tool
        tool.start()

        # Then: File is opened and process is started
        mock_open.assert_called_once_with('mpstat.json', 'w')
        mock_popen.assert_called_once()

        # When: Stopping the tool
        tool.stop()

        # Then: Process is terminated and file is closed
        mock_process.send_signal.assert_called_once()
        mock_process.wait.assert_called_once()
        mock_file.close.assert_called_once()


class TestBwmNgTool:
    """Test cases for BwmNgTool bandwidth monitoring functionality."""

    @patch('subprocess.Popen')
    @patch('builtins.open')
    def test_bwm_ng_tool_lifecycle(self, mock_open, mock_popen):
        """
        Test that BwmNgTool correctly starts and stops bandwidth monitoring.

        Verifies that the tool opens an output file, starts the bwm-ng process,
        and properly cleans up resources when stopped.
        """
        # Given: Mock file and process objects
        mock_file = MagicMock()
        mock_open.return_value = mock_file
        mock_process = Mock()
        mock_popen.return_value = mock_process
        tool = BwmNgTool()

        # When: Starting the tool
        tool.start()

        # Then: File is opened and process is started
        mock_open.assert_called_once_with('bwm-ng.csv', 'w')
        mock_popen.assert_called_once()

        # When: Stopping the tool
        tool.stop()

        # Then: Process is terminated and file is closed
        mock_process.send_signal.assert_called_once()
        mock_process.wait.assert_called_once()
        mock_file.close.assert_called_once()


class TestPerfStatTool:
    """Test cases for PerfStatTool performance monitoring functionality."""

    @patch('subprocess.Popen')
    def test_perf_stat_tool_uses_target_pid(self, mock_popen):
        """
        Test that PerfStatTool correctly monitors a specific process ID.

        Verifies that the tool starts perf stat with the correct target PID
        and includes the expected perf command arguments.
        """
        # Given: Mock process and a target PID
        mock_process = Mock()
        mock_popen.return_value = mock_process
        target_pid = 12345
        tool = PerfStatTool(target_pid)

        # When: Starting the tool
        tool.start()

        # Then: Process is started with correct PID and perf command
        mock_popen.assert_called_once()
        args = mock_popen.call_args[0][0]
        assert str(target_pid) in args
        assert "perf" in args


class TestFlamegraphTool:
    """Test cases for FlamegraphTool profiling functionality."""

    @patch('subprocess.Popen')
    def test_flamegraph_tool_uses_target_pid(self, mock_popen):
        """
        Test that FlamegraphTool correctly profiles a specific process ID.

        Verifies that the tool starts flamegraph with the correct target PID
        and includes the expected flamegraph command arguments.
        """
        # Given: Mock process and a target PID
        mock_process = Mock()
        mock_popen.return_value = mock_process
        target_pid = 12345
        tool = FlamegraphTool(target_pid)

        # When: Starting the tool
        tool.start()

        # Then: Process is started with correct PID and flamegraph command
        mock_popen.assert_called_once()
        args = mock_popen.call_args[0][0]
        assert str(target_pid) in args
        assert "flamegraph" in args


class TestResourceMonitoring:
    """Test cases for ResourceMonitoring coordination functionality."""

    def test_resource_monitoring_starts_all_tools(self):
        """
        Test that ResourceMonitoring starts all provided monitoring tools.

        Verifies that when _start() is called, the start() method is invoked
        on each tool in the tools list exactly once.
        """
        # Given: Mock monitoring tools
        tool1 = Mock(spec=MonitoringTool)
        tool2 = Mock(spec=MonitoringTool)
        resource = ResourceMonitoring([tool1, tool2])

        # When: Starting resource monitoring
        resource._start()

        # Then: All tools are started
        tool1.start.assert_called_once()
        tool2.start.assert_called_once()

    def test_resource_monitoring_stops_all_tools(self):
        """
        Test that ResourceMonitoring stops all provided monitoring tools.

        Verifies that when _close() is called, the stop() method is invoked
        on each tool in the tools list exactly once for proper cleanup.
        """
        # Given: Mock monitoring tools
        tool1 = Mock(spec=MonitoringTool)
        tool2 = Mock(spec=MonitoringTool)
        resource = ResourceMonitoring([tool1, tool2])

        # When: Stopping resource monitoring
        resource._close()

        # Then: All tools are stopped
        tool1.stop.assert_called_once()
        tool2.stop.assert_called_once()
