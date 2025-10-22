import logging
import os
import signal
import subprocess
from typing import Optional

import psutil

from .base import MonitoringTool

log = logging.getLogger(__name__)


class MpstatTool(MonitoringTool):
    def __init__(self):
        self.process = None
        self.output_file = None

    def start(self) -> None:
        self.output_file = open('mpstat.json', 'w')
        log.info("Starting mpstat monitoring")
        # fmt: off
        self.process = subprocess.Popen([
            "/usr/bin/mpstat",
            "-P", "ALL",
            "-o", "JSON",
            "1"
        ], stdout=self.output_file)
        # fmt: on

    def stop(self) -> None:
        if self.process:
            try:
                self.process.send_signal(signal.SIGINT)
                self.process.wait()
            except Exception:
                log.error("Error shutting down mpstat:", exc_info=True)
        if self.output_file:
            try:
                self.output_file.close()
            except Exception:
                log.error("Error closing mpstat output file:", exc_info=True)


class BwmNgTool(MonitoringTool):
    def __init__(self):
        self.process = None
        self.output_file = None

    def start(self) -> None:
        self.output_file = open('bwm-ng.csv', 'w')
        log.info("Starting bwm-ng monitoring")
        # fmt: off
        self.process = subprocess.Popen([
            '/usr/local/bin/bwm-ng', '-o', 'csv'
        ], stdout=self.output_file)
        # fmt: on

    def stop(self) -> None:
        if self.process:
            try:
                self.process.send_signal(signal.SIGINT)
                self.process.wait()
            except Exception:
                log.error("Error shutting down bwm-ng:", exc_info=True)
        if self.output_file:
            try:
                self.output_file.close()
            except Exception:
                log.error("Error closing bwm-ng output file:", exc_info=True)


class PerfStatTool(MonitoringTool):
    def __init__(self, target_pid: int):
        self.target_pid = target_pid
        self.process = None

    def start(self) -> None:
        perf_events = ["cycles", "instructions", "cache-references", "cache-misses", "bus-cycles"]
        # fmt: off
        perf_args = [
            "perf", "stat",
            "-I", "500",
            "-e", ",".join(perf_events),
            "-j",
            "-p", str(self.target_pid),
            "-o", "perfstat.json"
        ]
        # fmt: on
        log.info("Starting perf stat with args: %s", " ".join(perf_args))
        self.process = subprocess.Popen(perf_args)

    def stop(self) -> None:
        if self.process:
            try:
                self.process.send_signal(signal.SIGINT)
                self.process.wait()
            except Exception:
                log.error("Error shutting down perf stat:", exc_info=True)


class FlamegraphTool(MonitoringTool):
    def __init__(self, target_pid: int, flamegraph_scripts_path: Optional[str] = None):
        self.target_pid = target_pid
        self.flamegraph_scripts_path = flamegraph_scripts_path
        self.process = None

    def start(self) -> None:
        self._check_kernel_settings()
        flamegraph_args = ["flamegraph", "--pid", str(self.target_pid), "-o", "flamegraph.svg"]
        log.info("Starting flamegraph with args %s", " ".join(flamegraph_args))
        self.process = subprocess.Popen(flamegraph_args)

    def stop(self) -> None:
        if self.process:
            try:
                parent = psutil.Process(self.process.pid)
                children = parent.children(recursive=True)
                for child in children:
                    if 'perf' in child.name():
                        child.send_signal(signal.SIGINT)
                        child.wait()
                self.process.send_signal(signal.SIGINT)
                self.process.wait()
            except psutil.NoSuchProcess:
                log.warning(f"Process {self.process.pid} no longer exists")
            except Exception:
                log.error("Error shutting down flamegraph:", exc_info=True)

            if self.flamegraph_scripts_path and os.path.exists("perf.data"):
                self._generate_inverted_flamegraph()

            try:
                if os.path.exists("perf.data"):
                    os.remove("perf.data")
                    log.debug("Cleaned up perf.data file")
            except Exception:
                log.warning("Failed to clean up perf.data file", exc_info=True)

    def _check_kernel_settings(self):
        try:
            with open('/proc/sys/kernel/kptr_restrict', 'r') as f:
                kptr_restrict_value = f.read().strip()
            if kptr_restrict_value != '0':
                log.warning(
                    f"kernel.kptr_restrict is set to {kptr_restrict_value}, not 0. "
                    f"For comprehensive flamegraphs, consider running: sudo sysctl kernel.kptr_restrict=0"
                )
            else:
                log.info("verified that kernel.kptr_restrict=0 (for flamegraphing)")
        except (OSError, IOError) as e:
            log.warning(f"Could not check kernel.kptr_restrict: {e}")

        try:
            with open('/proc/sys/kernel/perf_event_paranoid', 'r') as f:
                paranoid_value = f.read().strip()
            if paranoid_value not in ['-1', '0']:
                log.warning(
                    f"kernel.perf_event_paranoid is set to {paranoid_value}. "
                    f"For comprehensive kernel tracing, consider running: sudo sysctl kernel.perf_event_paranoid=-1"
                )
            else:
                log.info(f"verified that kernel.perf_event_paranoid={paranoid_value} for flamegraphing")
        except (OSError, IOError) as e:
            log.warning(f"Could not check kernel.perf_event_paranoid: {e}")

    def _generate_inverted_flamegraph(self):
        try:
            assert self.flamegraph_scripts_path
            stackcollapse_script = os.path.join(self.flamegraph_scripts_path, "stackcollapse-perf.pl")
            flamegraph_script = os.path.join(self.flamegraph_scripts_path, "flamegraph.pl")

            if not os.path.exists(stackcollapse_script) or not os.path.exists(flamegraph_script):
                log.warning(f"Flamegraph scripts not found in {self.flamegraph_scripts_path}")
                return

            log.info("Generating inverted flamegraph...")

            with open("perf.txt", "w") as perf_txt:
                result = subprocess.run(
                    ["perf", "script", "-i", "perf.data"], stdout=perf_txt, stderr=subprocess.PIPE, text=True
                )
                if result.returncode != 0:
                    log.warning(f"perf script failed: {result.stderr}")
                    return

            with open("perf.txt", "r") as perf_txt, open("stacks.txt", "w") as stacks_txt:
                result = subprocess.run(
                    [stackcollapse_script], stdin=perf_txt, stdout=stacks_txt, stderr=subprocess.PIPE, text=True
                )
                if result.returncode != 0:
                    log.warning(f"stackcollapse-perf.pl failed: {result.stderr}")
                    return

            with open("stacks.txt", "r") as stacks_txt, open("inverted-flamegraph.svg", "w") as flamegraph_svg:
                result = subprocess.run(
                    [flamegraph_script, "--inverted", "--reverse", "--colors", "blue"],
                    stdin=stacks_txt,
                    stdout=flamegraph_svg,
                    stderr=subprocess.PIPE,
                    text=True,
                )
                if result.returncode != 0:
                    log.warning(f"flamegraph.pl failed: {result.stderr}")
                    return

            log.info("Successfully generated inverted flamegraph: inverted-flamegraph.svg")

            for temp_file in ["perf.txt", "stacks.txt"]:
                try:
                    if os.path.exists(temp_file):
                        os.remove(temp_file)
                except Exception as e:
                    log.debug(f"Failed to remove temporary file {temp_file}: {e}")

        except Exception:
            log.error("Error generating inverted flamegraph:", exc_info=True)
