from dataclasses import dataclass
import itertools
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional
from hydra.types import HydraContext
from hydra.core.config_store import ConfigStore
from hydra.core.override_parser.overrides_parser import OverridesParser
from hydra.core.override_parser.types import Override
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

    def _load_benchmark_params(self, benchmark_type: str) -> List[str]:
        try:
            config_path = Path("conf") / "hydra" / "sweeper" / f"{benchmark_type}.yaml"
            if config_path.exists():
                benchmark_config = OmegaConf.load(config_path)
                params = benchmark_config.get("params", {})
                return [f"{key}={value}" for key, value in params.items()]
            return []
        except Exception as e:
            log.error(f"Failed to load config for {benchmark_type}: {e}")
            return []

    def sweep(self, arguments: List[str]) -> Any:
        benchmark_types = self._extract_benchmark_types(arguments)
        log.info(f"Running benchmark types: {benchmark_types}")

        # Save sweep config
        sweep_dir = Path(self.config.hydra.sweep.dir)
        sweep_dir.mkdir(parents=True, exist_ok=True)
        OmegaConf.save(self.config, sweep_dir / "multirun.yaml")

        base_params_conf = []
        for k, v in self.params.items():
            base_params_conf.append(f"{k}={v}")
        base_params_conf.extend(arguments)

        all_combinations = []
        # For a given benchmark type, this will load parameters defined in
        # only the base and benchmark_type config files.
        for benchmark_type in benchmark_types:
            benchmark_params = self._load_benchmark_params(benchmark_type)
            params_conf = base_params_conf + benchmark_params

            parser = OverridesParser.create()
            parsed = parser.parse_overrides(params_conf)

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
        param_lists = [[f"benchmark_type={benchmark_type}"]]

        for param_override in parsed_overrides:
            param_key = param_override.get_key_element()
            if param_key == "benchmark_type":
                continue

            if param_override.is_sweep_override():
                sweep = [f"{param_key}={val}" for val in param_override.sweep_string_iterator()]
                param_lists.append(sweep)
            else:
                value = param_override.get_value_element_as_str()
                param_lists.append([f"{param_key}={value}"])

        combinations = list(itertools.product(*param_lists))
        return [list(combination) for combination in combinations]
