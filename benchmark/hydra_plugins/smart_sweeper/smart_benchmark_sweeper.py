from dataclasses import dataclass
import itertools
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional, Sequence

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

ConfigStore.instance().store(
    group="hydra/sweeper", name="smart_benchmark", node=SmartBenchmarkSweeperConf
)

class SmartBenchmarkSweeper(Sweeper):
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
        assert self.config is not None
        assert self.launcher is not None
        
        # Extract benchmark types from arguments
        benchmark_types = self._extract_benchmark_types(arguments)
        log.info(f"SmartBenchmarkSweeper: Running benchmark types: {benchmark_types}")

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

    def _generate_combinations_for_type(self, benchmark_type: str, parsed_overrides) -> List[List[str]]:
        # Separate parameters by category
        common_params = []
        type_specific_params = []
        other_type_nulls = []

        for override in parsed_overrides:
            key = override.get_key_element()
            
            if key == "benchmark_type":
                continue 
            elif key.startswith("benchmarks."):
                param_type = key.split(".")[1]  
                if param_type == benchmark_type:
                    type_specific_params.append(override)
                else:
                    # Set other benchmark types' params to null
                    other_type_nulls.append(f"{key}=null")
            else:
                common_params.append(override)

        param_lists = []

        param_lists.append([f"benchmark_type={benchmark_type}"])

        for override in common_params:
            if override.is_sweep_override():
                key = override.get_key_element()
                sweep = [f"{key}={val}" for val in override.sweep_string_iterator()]
                param_lists.append(sweep)
            else:
                key = override.get_key_element()
                value = override.get_value_element_as_str()
                param_lists.append([f"{key}={value}"])

        for override in type_specific_params:
            if override.is_sweep_override():
                key = override.get_key_element()
                sweep = [f"{key}={val}" for val in override.sweep_string_iterator()]
                param_lists.append(sweep)
            else:
                key = override.get_key_element()
                value = override.get_value_element_as_str()
                param_lists.append([f"{key}={value}"])

        if param_lists:
            combinations = list(itertools.product(*param_lists))
            result = []
            for combo in combinations:
                # Add the null values for other benchmark types
                combo_list = list(combo) + other_type_nulls
                result.append(combo_list)
            return result
        else:
            return [[f"benchmark_type={benchmark_type}"] + other_type_nulls]