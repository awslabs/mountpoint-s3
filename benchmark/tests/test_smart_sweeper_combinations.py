from hydra.core.override_parser.overrides_parser import OverridesParser
from hydra_plugins.smart_sweeper.smart_benchmark_sweeper import SmartBenchmarkSweeper

"""
Unit tests for SmartBenchmarkSweeper combination generation logic.

Tests the _generate_combinations_for_type method which is responsible for:
- Parameter classification (common, type-specific, cross-type nulling)
- Benchmark type mapping (e.g., client-bp -> client_backpressure)
- Cartesian product generation of parameter combinations
- Null assignment for non-matching benchmark types
- Edge case handling and fallback behavior

This module ensures the sweeper correctly generates all parameter combinations for different benchmark types while maintaining proper isolation between benchmark-specific parameters.
"""


class TestSmartSweeperCombinations:
    """
    Test suite for SmartBenchmarkSweeper combination generation functionality.

    Validates the core logic that transforms Hydra override parameters into complete parameter combinations for benchmark execution.
    """

    def setup_method(self):
        self.sweeper = SmartBenchmarkSweeper()
        self.parser = OverridesParser.create()

    def test_benchmark_type_mapping_resolution(self):
        test_overrides = self.parser.parse_overrides(
            [
                'benchmarks.client_backpressure.read_window_size=2GB,8GB',
                'benchmarks.fio.direct_io=false,true',
                'network.interface_names=[ens32]',
                'application_workers=1,4',
            ]
        )

        # Test with benchmark_type="client-bp" - this triggers the mapping logic
        result = self.sweeper._generate_combinations_for_type("client-bp", test_overrides)

        assert len(result) > 0, "Should generate combinations"

        for combo in result:
            assert any("benchmark_type=client-bp" in param for param in combo)
            assert any(
                "benchmarks.client_backpressure.read_window_size=" in param and "=null" not in param for param in combo
            )
            assert any("benchmarks.fio.direct_io=null" in param for param in combo)

        print(f"Client-bp mapping test passed - {len(result)} combinations")

    def test_parameter_classification_edge_cases(self):
        """Verify parameters are correctly classified into appropriate buckets."""
        test_overrides = self.parser.parse_overrides(
            [
                'benchmarks.fio.direct_io=false,true',
                'benchmarks.fio.fuse_threads=1,16',
                'benchmarks.prefetch.max_memory_target=null,1GB',
                'benchmarks.client_backpressure.read_window_size=2GB',
                'network.interface_names=[ens32]',
                'application_workers=1,4',
                'benchmark_type=fio',
            ]
        )

        result = self.sweeper._generate_combinations_for_type("fio", test_overrides)

        for combo in result:
            fio_params = [p for p in combo if "benchmarks.fio." in p and "=null" not in p]
            assert len(fio_params) >= 2, f"Should have FIO params in {combo}"

            null_params = [p for p in combo if "=null" in p]
            assert any("benchmarks.prefetch." in p for p in null_params)
            assert any("benchmarks.client_backpressure." in p for p in null_params)

        print(f"Parameter classification passed - {len(result)} combinations")

    def test_cartesian_product_correctness(self):
        """Test Cartesian product mathematical correctness."""
        test_overrides = self.parser.parse_overrides(
            [
                'benchmarks.fio.direct_io=false,true',  # 2 values
                'application_workers=1,4',  # 2 values
                'network.interface_names=[ens32]',  # 1 value
            ]
        )

        result = self.sweeper._generate_combinations_for_type("fio", test_overrides)

        # Expected: 2 × 2 × 1 = 4 combinations
        assert len(result) == 4, f"Expected 4 combinations, got {len(result)}"

        # Verify all combinations are unique
        combo_strings = [str(sorted(combo)) for combo in result]
        assert len(set(combo_strings)) == len(combo_strings), "All combinations should be unique"

        print(f"Cartesian product correctness passed - {len(result)} combinations")

    def test_null_parameter_assignment(self):
        """Verify null assignments maintain consistent ordering."""
        test_overrides = self.parser.parse_overrides(
            [
                'benchmarks.fio.direct_io=false',
                'benchmarks.prefetch.max_memory_target=1GB',
                'benchmarks.client_backpressure.read_window_size=2GB',
                'application_workers=1',
            ]
        )

        result = self.sweeper._generate_combinations_for_type("fio", test_overrides)

        assert len(result) == 1, "Should generate exactly 1 combination"
        combo = result[0]

        null_params = [p for p in combo if "=null" in p]
        null_params_sorted = sorted(null_params)
        assert null_params == null_params_sorted, f"Null params should be sorted: {null_params}"

        print(f"Null assignment ordering passed - {len(null_params)} nulls")

    def test_empty_combination_fallback(self):
        """Test fallback case when no combinations generated."""
        test_overrides = self.parser.parse_overrides(
            ['benchmarks.fio.direct_io=false', 'benchmarks.prefetch.max_memory_target=1GB']
        )

        result = self.sweeper._generate_combinations_for_type("crt", test_overrides)

        assert len(result) >= 1, "Should generate at least 1 combination via fallback"

        combo = result[0]
        assert any("benchmark_type=crt" in param for param in combo)
        assert any("benchmarks.fio.direct_io=null" in param for param in combo)

        print(f"Fallback case passed - {len(result)} combinations")


def run_all_tests():
    """Execute all SmartBenchmarkSweeper combination generation tests."""
    test_instance = TestSmartSweeperCombinations()

    print("Testing SmartBenchmarkSweeper combination generation functionality:\n")

    test_methods = [
        'test_benchmark_type_mapping_resolution',
        'test_parameter_classification_logic',
        'test_cartesian_product_generation',
        'test_null_parameter_assignment',
        'test_empty_combination_fallback',
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

    print("\n✓ All combination generation tests completed successfully!")


if __name__ == "__main__":
    run_all_tests()
