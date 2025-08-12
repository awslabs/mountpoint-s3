from dataclasses import dataclass
import itertools
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional
import re
from hydra.types import HydraContext
from hydra.core.config_store import ConfigStore
from hydra.core.override_parser.overrides_parser import OverridesParser
from hydra.core.plugins import Plugins
from hydra.plugins.launcher import Launcher
from hydra.plugins.sweeper import Sweeper
from hydra.types import TaskFunction
from omegaconf import DictConfig, OmegaConf

log = logging.getLogger(__name__)


@dataclass
class SmartBenchmarkSweeperConf:
    _target_: str = "hydra_plugins.smart_sweeper.smart_benchmark_sweeper.SmartBenchmarkSweeper"
    max_batch_size: Optional[int] = None
    params: Optional[Dict[str, str]] = None


ConfigStore.instance().store(group="hydra/sweeper", name="smart_benchmark", node=SmartBenchmarkSweeperConf)


class SmartBenchmarkSweeper(Sweeper):
    BENCHMARK_TYPE_REGEX = re.compile(r'^benchmarks\.([^.]+)\.')

    def __init__(self, max_batch_size: Optional[int] = None, params: Optional[Dict[str, str]] = None):
        self.max_batch_size = max_batch_size
        self.params = params or {}
        self.config: Optional[DictConfig] = None
        self.launcher: Optional[Launcher] = None
        self.hydra_context: Optional[HydraContext] = None

    def setup(self, *, hydra_context: HydraContext, task_function: TaskFunction, config: DictConfig) -> None:
        self.config = config
        self.launcher = Plugins.instance().instantiate_launcher(
            hydra_context=hydra_context, task_function=task_function, config=config
        )
        self.hydra_context = hydra_context

    def sweep(self, arguments: List[str]) -> Any:
        benchmark_types = self._extract_benchmark_types(arguments)
        log.info(f"Running benchmark types: {benchmark_types}")

        # Save sweep config
        sweep_dir = Path(self.config.hydra.sweep.dir)
        sweep_dir.mkdir(parents=True, exist_ok=True)
        OmegaConf.save(self.config, sweep_dir / "multirun.yaml")

        params_conf = []
        for k, v in self.params.items():
            params_conf.append(f"{k}={v}")
        params_conf.extend(arguments)

        parser = OverridesParser.create()
        parsed = parser.parse_overrides(params_conf)

        all_combinations = []
        for benchmark_type in benchmark_types:
            type_combinations = self._generate_combinations_for_type(benchmark_type, parsed)
            all_combinations.extend(type_combinations)

        log.info(f"Generated {len(all_combinations)} total combinations")

        returns = []
        initial_job_idx = 0
        if all_combinations:
            self.validate_batch_is_legal(all_combinations)
            results = self.launcher.launch(all_combinations, initial_job_idx=initial_job_idx)
            returns.append(results)

        return returns

    def _extract_benchmark_types(self, arguments: List[str]) -> List[str]:
        for arg in arguments:
            if arg.startswith("benchmark_type="):
                benchmark_type_str = arg.split("=", 1)[1]
                return [bt.strip() for bt in benchmark_type_str.split(",")]
        return ["fio"]

    def _generate_combinations_for_type(self, benchmark_type: str, parsed_overrides: List[Any]) -> List[List[str]]:
        """
        Generate all parameter combinations for a specific benchmark type.

        Args:
            benchmark_type: The benchmark to generate combinations for (e.g., "fio", "prefetch", "client-bp")
            parsed_overrides: List of Override objects from Hydra parser
                Example: [Override("benchmarks.fio.direct_io", ["false", "true"]),
                         Override("network.interface_names", ["[ens32]", "[ens32,ens129]"])]

        Returns:
            List of parameter combination lists, each representing one complete job configuration
            Example: [['benchmark_type=fio', 'network.interface_names=[ens32]', 'benchmarks.fio.direct_io=false', 'benchmarks.prefetch.max_memory_target=null'],
                     ['benchmark_type=fio', 'network.interface_names=[ens32]', 'benchmarks.fio.direct_io=true', 'benchmarks.prefetch.max_memory_target=null']]
        """
        common = []
        type_specific = []
        other_type_nulls = set()

        # This regex is essentially to extract benchmark type from parameter keys like "benchmarks.fio.direct_io"
        # The pattern matches: "benchmarks." + (capture group: benchmark type) + "."

        benchmark_type_mapping = {'client-bp': 'client_backpressure'}

        for param_override in parsed_overrides:
            param_key = param_override.get_key_element()  # Get parameter key like "benchmarks.fio.direct_io"
            # Skip the benchmark_type parameter as we handle it separately below
            if param_key == "benchmark_type":
                continue

            # match the parameter against the benchmarks.TYPE.PARAM pattern
            benchmark_match = self.BENCHMARK_TYPE_REGEX.match(param_key)
            if benchmark_match:
                # we extract the benchmark type from the parameter key, example "benchmarks.fio.direct_io" → extracted_type = "fio"
                extracted_type = benchmark_match.group(1)
                mapped_benchmark_type = benchmark_type_mapping.get(benchmark_type, benchmark_type)
                if extracted_type == mapped_benchmark_type:
                    # In this case, this parameter belongs to the current benchmark type eg: For benchmark_type="fio", "benchmarks.fio.direct_io" goes here
                    type_specific.append(param_override)
                else:
                    # While this one belongs to a different benchmark type - mark for nulling eg,For benchmark_type="fio", "benchmarks.prefetch.max_memory_target" goes here
                    other_type_nulls.add(param_key)
            else:
                common.append(param_override)

        def expand(override):
            param_name = override.get_key_element()  # we extract parameter name (e.g., "application_workers")
            if override.is_sweep_override():
                # For sweep parameters: create one string per value. For examaple ... override.sweep_string_iterator() returns ["1", "4", "16", "64"]
                # Result: ["application_workers=1", "application_workers=4", "application_workers=16", "application_workers=64"]
                return [f"{param_name}={value}" for value in override.sweep_string_iterator()]
            else:
                # For single parameters: create one string
                # override.get_value_element_as_str() returns "fio" and thus the result: ["benchmark_type=fio"]
                return [f"{param_name}={override.get_value_element_as_str()}"]

        # Each inner list contains all possible values for one parameter
        param_lists = [[f"benchmark_type={benchmark_type}"]]
        # We add common parameters (apply to all benchmark types) ... common = [Override("network.interface_names", [...]), Override("application_workers", [...])]
        param_lists += [expand(override) for override in common]
        # Add type-specific parameters (only for current benchmark type)
        param_lists += [expand(override) for override in type_specific]

        combinations = itertools.product(*param_lists)
        # Create null assignments for other benchmark types
        null_assignments = [f"{param_key}=null" for param_key in sorted(other_type_nulls)]
        # Combine each parameter combination with the null assignments
        result = [list(combination) + null_assignments for combination in combinations]
        return result or [[f"benchmark_type={benchmark_type}"] + null_assignments]
