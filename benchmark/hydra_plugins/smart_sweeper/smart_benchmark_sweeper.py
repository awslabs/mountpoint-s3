from dataclasses import dataclass
import itertools
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional
import re
from hydra.types import HydraContext
from hydra.core.config_store import ConfigStore
from hydra.core.override_parser.overrides_parser import OverridesParser
from hydra.core.override_parser.types import Glob, Override
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

    def _glob_match_parameter(
        self, param_key: str, benchmark_type: str, exclude_patterns: Optional[List[str]] = None
    ) -> bool:
        """
        Check if a parameter belongs to a specific benchmark type using Hydra's GLOB.
        Only matches exact benchmark types: fio, prefetch, client, crt.
        """
        pattern = f"benchmarks.{benchmark_type}.*"
        glob_filter = Glob(include=[pattern], exclude=exclude_patterns or [])
        return len(glob_filter.filter([param_key])) > 0

    def _process_overrides_to_sweep_lists(self, overrides: List[Override]) -> List[List[str]]:
        lists = []
        for override in overrides:
            if override.is_sweep_override():
                key = override.get_key_element()
                sweep = [f"{key}={val}" for val in override.sweep_string_iterator()]
                lists.append(sweep)
            else:
                key = override.get_key_element()
                value = override.get_value_element_as_str()
                lists.append([f"{key}={value}"])
        return lists

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

    def _generate_combinations_for_type(self, benchmark_type: str, parsed_overrides: List[Override]) -> List[List[str]]:
        common_overrides = []
        type_specific_overrides = []
        other_type_nulls = set()

        for param_override in parsed_overrides:
            param_key = param_override.get_key_element()
            # Skip benchmark_type parameter - we handle it separately
            if param_key == "benchmark_type":
                continue

            if param_key.startswith("benchmarks."):
                if self._glob_match_parameter(param_key, benchmark_type):
                    type_specific_overrides.append(param_override)
                else:
                    other_type_nulls.add(param_key)
            else:
                common_overrides.append(param_override)

        param_lists = [[f"benchmark_type={benchmark_type}"]]

        if common_overrides:
            param_lists.extend(self._process_overrides_to_sweep_lists(common_overrides))

        if type_specific_overrides:
            param_lists.extend(self._process_overrides_to_sweep_lists(type_specific_overrides))

        combinations = list(itertools.product(*param_lists))

        null_assignments = [f"{param_key}=null" for param_key in sorted(other_type_nulls)]

        result = [list(combination) + null_assignments for combination in combinations]
        return result or [[f"benchmark_type={benchmark_type}"] + null_assignments]
