from hydra.core.override_parser.overrides_parser import OverridesParser
from hydra_plugins.smart_sweeper.smart_benchmark_sweeper import SmartBenchmarkSweeper


class TestSmartSweeperCombinations:
    def setup_method(self):
        self.sweeper = SmartBenchmarkSweeper()
        self.parser = OverridesParser.create()

    def test_glob_parameter_matching(self):
        """Test GLOB-based parameter matching for different benchmark types."""

        # Test exact matching
        assert self.sweeper._glob_match_parameter("benchmarks.fio.direct_io", "fio")
        assert self.sweeper._glob_match_parameter("benchmarks.prefetch.max_memory", "prefetch")
        assert self.sweeper._glob_match_parameter("benchmarks.client.read_window_size", "client")

        # Test non-matching
        assert not self.sweeper._glob_match_parameter("benchmarks.fio.direct_io", "prefetch")
        assert not self.sweeper._glob_match_parameter("benchmarks.prefetch.max_memory", "fio")

        # Test client-bp mapping to client
        assert self.sweeper._glob_match_parameter("benchmarks.client.read_window_size", "client-bp")

        print("GLOB parameter matching test passed")

    def test_parameter_isolation_by_type(self):
        """Test that parameters are properly isolated by benchmark type."""
        test_overrides = self.parser.parse_overrides(
            [
                'benchmarks.fio.direct_io=false,true',
                'benchmarks.client.read_window_size=2GB,8GB',
                'application_workers=1,4',
            ]
        )

        fio_result = self.sweeper._generate_combinations_for_type("fio", test_overrides)

        for combo in fio_result:
            # Should have FIO parameters
            assert any("benchmarks.fio.direct_io=" in param and "=null" not in param for param in combo)
            # Should null client parameters
            assert any("benchmarks.client.read_window_size=null" in param for param in combo)

        client_result = self.sweeper._generate_combinations_for_type("client-bp", test_overrides)

        for combo in client_result:
            # Should have client parameters (mapped from client-bp)
            assert any("benchmarks.client.read_window_size=" in param and "=null" not in param for param in combo)
            # Should null FIO parameters
            assert any("benchmarks.fio.direct_io=null" in param for param in combo)

        print("Parameter isolation test passed")


def run_all_tests():
    test_instance = TestSmartSweeperCombinations()

    print("Testing SmartBenchmarkSweeper GLOB parameter matching:\n")

    test_methods = [
        'test_glob_parameter_matching',
        'test_parameter_isolation_by_type',
    ]

    for method_name in test_methods:
        print(f"\n--- Executing {method_name} ---")
        test_instance.setup_method()
        method = getattr(test_instance, method_name)
        try:
            method()
            print(f"✓ {method_name} PASSED")
        except Exception as e:
            print(f"✗ {method_name} FAILED: {e}")
            raise

    print("\n✓ All GLOB functionality tests completed successfully!")


if __name__ == "__main__":
    run_all_tests()
