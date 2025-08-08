from dataclasses import dataclass
import itertools
import logging
from pathlib import Path
from typing import Any, Dict, List, Optional
import itertools
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


    def _generate_combinations_for_type(self, benchmark_type: str, parsed_overrides) -> List[List[str]]:
        common, type_specific, other_type_nulls = [], [], set()
        type_re = re.compile(r'^benchmarks\.([^.]+)\.')

        for ov in parsed_overrides:
            k = ov.get_key_element()
            if k == "benchmark_type":
                continue

            m = type_re.match(k)
            if m:
                if m.group(1) == benchmark_type:
                    type_specific.append(ov)
                else:
                    other_type_nulls.add(k)
            else:
                common.append(ov)

        def expand(ov):
            key = ov.get_key_element()
            if ov.is_sweep_override():
                return [f"{key}={v}" for v in ov.sweep_string_iterator()]
            else:
                return [f"{key}={ov.get_value_element_as_str()}"]

        param_lists = [[f"benchmark_type={benchmark_type}"]]
        param_lists += [expand(ov) for ov in common]
        param_lists += [expand(ov) for ov in type_specific]

        combos = itertools.product(*param_lists)
        nulls = [f"{k}=null" for k in sorted(other_type_nulls)]

        result = [list(c) + nulls for c in combos]
        return result or [[f"benchmark_type={benchmark_type}"] + nulls]
