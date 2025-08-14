import json
import logging
import subprocess
from typing import List, Optional, Dict
import os

log = logging.getLogger(__name__)


def build_example(name: str, features: Optional[List[str]] = None, build_env: Optional[Dict[str, str]] = None) -> str:
    """
    Compile a Rust example and return the path to the executable.

    Args:
        name: Name of the example
        features: Optional list of features to enable

    Returns:
        Path to the compiled executable
    """
    return _build_and_get_executable(example_name=name, features=features, build_env=build_env)


def build_binary(name: str, features: Optional[List[str]] = None, build_env: Optional[Dict[str, str]] = None) -> str:
    """
    Compile a Rust binary and return the path to the executable.

    Args:
        name: Name of the binary
        features: Optional list of features to enable

    Returns:
        Path to the compiled executable
    """
    return _build_and_get_executable(binary_name=name, features=features, build_env=build_env)


def _build_and_get_executable(
    binary_name: Optional[str] = None,
    example_name: Optional[str] = None,
    features: Optional[List[str]] = None,
    build_env: Optional[Dict[str, str]] = None,
) -> str:
    """Build and get executable path."""

    # Build the cargo command
    cargo_args = ["cargo", "build", "--release", "--message-format=json-render-diagnostics"]

    if binary_name:
        cargo_args.extend(["--bin", binary_name])
    elif example_name:
        cargo_args.extend(["--example", example_name])
    else:
        raise ValueError("Must specify either binary_name or example_name")

    if features:
        cargo_args.extend(["--features", ",".join(features)])

    # Prepare environment for compilation
    env = os.environ.copy()
    if build_env:
        env.update(build_env)
        log.info(f"Build environment: {build_env}")

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

    # Return the last executable (most recent)
    return executables[-1]
