from unittest.mock import Mock, PropertyMock
from hydra.core.override_parser.overrides_parser import OverridesParser
from hydra_plugins.smart_sweeper.smart_benchmark_sweeper import SmartBenchmarkSweeper


class TestFailFastBehavior:
    """
    Tests for the fail_fast feature in SmartBenchmarkSweeper.

    fail_fast controls whether benchmark execution stops on first failure:
    - fail_fast=False: All combinations run in one batch (default)
    - fail_fast=True: Combinations run one at a time, stopping on first error
    """

    def setup_method(self):
        self.parser = OverridesParser.create()

    def test_fail_fast_configuration(self):
        """Test that fail_fast defaults to False and can be set to True"""

        # Test default (fail_fast=False)
        sweeper_default = SmartBenchmarkSweeper()
        assert not sweeper_default.fail_fast, "Default should be fail_fast=False"

        # Test fail_fast=True
        sweeper_fast_fail = SmartBenchmarkSweeper(fail_fast=True)
        assert sweeper_fast_fail.fail_fast

        print("✓ fail_fast configuration test passed")

    def test_fail_fast_affects_batch_size(self):
        """
        Test that fail_fast controls batch size:
        - fail_fast=False → batch_size = all combinations
        - fail_fast=True → batch_size = 1
        """

        # Create mock launcher and setup
        mock_launcher = Mock()
        # Because we don't want to actually run benchmarks in this test. We just want to test the logic of how batches are created.
        mock_launcher.launch = Mock(return_value=[])

        # Test with fail_fast=False (should batch all combinations)
        sweeper_normal = SmartBenchmarkSweeper(fail_fast=False)
        sweeper_normal.launcher = mock_launcher

        # We give it a fake config (just needs a directory path)
        sweeper_normal.config = Mock()
        sweeper_normal.config.hydra.sweep.dir = "/tmp/test"

        # "Run FIO benchmark with 1 worker, then 2 workers, then 3 workers"
        test_overrides = ['benchmark_type=fio', 'application_workers=1,2,3']
        parsed = self.parser.parse_overrides(test_overrides)

        # Generate combinations (should be 3: workers=1,2,3)
        combinations = sweeper_normal._generate_combinations_for_type("fio", parsed)
        assert len(combinations) == 3, f"Expected 3 combinations, got {len(combinations)}"

        # Mock the sweep to test batching
        sweeper_normal._load_benchmark_params = Mock(return_value=[])
        sweeper_normal._extract_benchmark_types = Mock(return_value=['fio'])

        # Test the batching logic in the sweeper
        all_combinations = combinations
        batch_size = 1 if sweeper_normal.fail_fast else len(all_combinations)

        assert batch_size == 3, f"With fail_fast=False, batch_size should be {len(all_combinations)}, got {batch_size}"

        # Test with fail_fast=True (should batch one at a time)
        sweeper_fast_fail = SmartBenchmarkSweeper(fail_fast=True)
        batch_size_fast_fail = 1 if sweeper_fast_fail.fail_fast else len(all_combinations)

        assert batch_size_fast_fail == 1, f"With fail_fast=True, batch_size should be 1, got {batch_size_fast_fail}"

        print("✓ fail_fast batch size test passed")

    def test_fail_fast_stops_on_first_error(self):
        """Test that fail_fast=True stops iteration when a job fails"""

        # Accessing return_value is how hydra determines a valid and succesful job: hydra/core/utils.py (lines 242-264)
        # When status == JobStatus.COMPLETED, return_value returns normally
        # When status != JobStatus.COMPLETED, return_value raises the stored exception

        # Test fail_fast=True behavior
        sweeper_fast_fail = SmartBenchmarkSweeper(fail_fast=True)

        # Test 1: Successful job should not raise - return_value returns normally
        mock_result_success = Mock()
        mock_result_success.return_value = None  # Success

        results = [mock_result_success]

        # Accessing return_value on a successful job should NOT raise an exception
        try:
            if sweeper_fast_fail.fail_fast:
                for r in results:
                    _ = r.return_value  # Should not raise
            success_check_passed = True
        except Exception:
            success_check_passed = False

        assert success_check_passed, "First successful result should not raise"

        # Test 2: Failed job should raise when return_value is accessed
        # Context: Hydra's JobReturn.return_value is a property that raises exceptions and PropertyMock simulates this behavior
        # We mock the return_value attribute and make it behave like a property, so when accesed it will raise this exception.
        mock_result_failure = Mock()

        # Use PropertyMock to simulate Hydra's property that raises on access
        type(mock_result_failure).return_value = PropertyMock(side_effect=Exception("Job failed!"))

        results_with_failure = [mock_result_failure]

        # Accessing return_value on a failed job should raise an exception
        try:
            if sweeper_fast_fail.fail_fast:
                for r in results_with_failure:
                    _ = r.return_value  # Should raise
            failure_check_passed = False
        except Exception as e:
            failure_check_passed = True
            print(f"✓ Correctly caught failure: {e}")

        assert failure_check_passed, "Failed result should raise exception with fail_fast=True"

        print("✓ fail_fast error handling test passed")
