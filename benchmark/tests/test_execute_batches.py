import pytest
from unittest.mock import Mock
from hydra.core.utils import JobReturn, JobStatus
from hydra_plugins.smart_sweeper.smart_benchmark_sweeper import SmartBenchmarkSweeper


class TestExecuteBatches:
    """Unit tests for _execute_batches - the core fail_fast logic"""

    INVALID_COMBINATIONS = [
        ["benchmark_type=fio", "mountpoint.stub_mode=off", "network.maximum_throughput_gbps=100"],
        [
            "benchmark_type=fio",
            "mountpoint.stub_mode=s3_client",
            "network.maximum_throughput_gbps=100",
        ],  # Invalid config
        ["benchmark_type=fio", "mountpoint.stub_mode=off", "network.maximum_throughput_gbps=100"],
    ]

    def test_fail_fast_true_stops_on_first_failure(self):
        sweeper = SmartBenchmarkSweeper(fail_fast=True)

        # We create Mock launcher that returns JobReturn objects to simulate a set of benchmarking jobs
        mock_launcher = Mock()
        sweeper.launcher = mock_launcher

        # side_effect makes mock return different values on each call: 1st call gets 1st item, 2nd call gets 2nd item, etc.
        mock_launcher.launch.side_effect = [
            [JobReturn(status=JobStatus.COMPLETED, _return_value="success")],
            [
                JobReturn(
                    status=JobStatus.FAILED,
                    _return_value=ValueError(
                        "should not use `stub_mode=s3_client` with `maximum_throughput_gbps`, throughput will be limited"
                    ),
                )
            ],
            [JobReturn(status=JobStatus.COMPLETED, _return_value="success")],
        ]

        # Test 1: Should raise error in failed job
        with pytest.raises(ValueError, match="should not use `stub_mode=s3_client` with `maximum_throughput_gbps`"):
            sweeper._execute_batches(self.INVALID_COMBINATIONS, initial_job_idx=0)

        # Test 2: Verify it stopped after 2nd job (didn't run 3rd)
        assert mock_launcher.launch.call_count == 2

    def test_fail_fast_false_continues_through_failures(self):
        sweeper = SmartBenchmarkSweeper(fail_fast=False)

        mock_launcher = Mock()
        sweeper.launcher = mock_launcher

        # Return all results in ONE batch (fail_fast=False batches everything)
        mock_launcher.launch.return_value = [
            JobReturn(status=JobStatus.COMPLETED, _return_value="success"),
            JobReturn(
                status=JobStatus.FAILED,
                _return_value=ValueError(
                    "should not use `stub_mode=s3_client` with `maximum_throughput_gbps`, throughput will be limited"
                ),
            ),
            JobReturn(status=JobStatus.COMPLETED, _return_value="success"),
        ]

        # Test 1: Should not raise any exception
        results = sweeper._execute_batches(self.INVALID_COMBINATIONS, initial_job_idx=0)

        # Test 2: Should call launcher ONCE with all 3 jobs
        assert mock_launcher.launch.call_count == 1
        assert len(results) == 1
        assert len(results[0]) == 3
        assert results[0][1].status == JobStatus.FAILED  # Verify failure is captured
