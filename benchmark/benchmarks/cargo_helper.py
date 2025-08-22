import json
import logging
import subprocess
from typing import List, Optional, Dict
import os

log = logging.getLogger(__name__)


def build_example(
    name: str,
    features: Optional[List[str]] = None,
    build_env: Optional[Dict[str, str]] = None,
    flamegraph_enhancement: bool = False,
) -> str:
    """
    Compile a Rust example and return the path to the executable.

    Args:
        name: Name of the example
        features: Optional list of features to enable
        build_env: Optional environment variables for build
        flamegraph_enhancement: Whether to build with flamegraph-optimized compilation flags

    Returns:
        Path to the compiled executable
    """
    return _build_and_get_executable(
        example_name=name, features=features, build_env=build_env, flamegraph_enhancement=flamegraph_enhancement
    )


def build_binary(
    name: str,
    features: Optional[List[str]] = None,
    build_env: Optional[Dict[str, str]] = None,
    flamegraph_enhancement: bool = False,
) -> str:
    """
    Compile a Rust binary and return the path to the executable.

    Args:
        name: Name of the binary
        features: Optional list of features to enable
        build_env: Optional environment variables for build
        flamegraph_enhancement: Whether to build with flamegraph-optimized compilation flags

    Returns:
        Path to the compiled executable
    """
    return _build_and_get_executable(
        binary_name=name, features=features, build_env=build_env, flamegraph_enhancement=flamegraph_enhancement
    )


def _build_and_get_executable(
    binary_name: Optional[str] = None,
    example_name: Optional[str] = None,
    features: Optional[List[str]] = None,
    build_env: Optional[Dict[str, str]] = None,
    flamegraph_enhancement: bool = False,
) -> str:
    """Build and get executable path."""

    cargo_args = ["cargo", "build", "--release", "--message-format=json-render-diagnostics"]

    if binary_name:
        cargo_args.extend(["--bin", binary_name])
    elif example_name:
        cargo_args.extend(["--example", example_name])
    else:
        raise ValueError("Must specify either binary_name or example_name")

    if features:
        cargo_args.extend(["--features", ",".join(features)])

    env = os.environ.copy()
    if build_env:
        env.update(build_env)

    if flamegraph_enhancement:
        log.info("Building with flamegraph-optimized compilation flags for comprehensive profiling")

        flamegraph_cflags = "-fno-omit-frame-pointer"
        flamegraph_rustflags = "-C force-frame-pointers=yes"

        if "CFLAGS" in env:
            env["CFLAGS"] = f"{env['CFLAGS']} {flamegraph_cflags}"
        else:
            env["CFLAGS"] = flamegraph_cflags

        if "RUSTFLAGS" in env:
            env["RUSTFLAGS"] = f"{env['RUSTFLAGS']} {flamegraph_rustflags}"
        else:
            env["RUSTFLAGS"] = flamegraph_rustflags

    if build_env or flamegraph_enhancement:
        log.info(f"Build environment: CFLAGS='{env.get('CFLAGS', '')}' RUSTFLAGS='{env.get('RUSTFLAGS', '')}'")

    log.info(f"Compiling: {' '.join(cargo_args)}")

    try:
        result = subprocess.run(cargo_args, capture_output=True, text=True, check=True, env=env)
        return _extract_executable_path(result.stdout)
    except subprocess.CalledProcessError as e:
        log.error(f"Cargo build failed: {e.stderr}")
        raise RuntimeError(f"Compilation failed: {e.stderr}")


def _extract_executable_path(cargo_output: str) -> str:
    """Extract executable path from cargo JSON output."""

    executables = []

    for line in cargo_output.strip().split('\n'):
        if not line.strip():
            continue

        try:
            data = json.loads(line)
            if data.get("reason") == "compiler-artifact" and data.get("executable") is not None:
                executables.append(data["executable"])
        except json.JSONDecodeError:
            continue

    if not executables:
        raise RuntimeError("No executable found in cargo build output")

    return executables[-1]
