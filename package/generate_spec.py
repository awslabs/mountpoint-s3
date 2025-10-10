#!/usr/bin/env python3

"""
This RPM spec generator creates distribution-specific .spec files using template inheritance.
It extracts versions from Cargo.toml/rust-toolchain.toml, scans git submodules for bundled library declarations,
and uses a base template with distribution-specific overrides.

The script takes a target distribution (like amzn2023), loads the corresponding template,
and outputs a complete RPM spec file ready for rpmbuild.
"""

import argparse
import subprocess
from pathlib import Path
import sys
from datetime import datetime
from jinja2 import Environment, FileSystemLoader
import tomllib

script_dir = Path(__file__).parent
project_root = script_dir.parent
templates_dir = script_dir / "templates"


def get_version():
    cargo_path = project_root / "mountpoint-s3" / "Cargo.toml"
    with open(cargo_path, "rb") as f:
        data = tomllib.load(f)
        return data["package"]["version"]


def get_rust_version():
    rust_path = project_root / "rust-toolchain.toml"
    with open(rust_path, "rb") as f:
        data = tomllib.load(f)
        return data["toolchain"]["channel"]


def get_submodule_versions():
    result = subprocess.run(
        'git submodule foreach -q \'echo $name `git describe --tags`\'', capture_output=True, text=True, shell=True
    )
    versions = {}
    for line in result.stdout.strip().split('\n'):
        if line.strip():
            match line.strip().split(' ', 1):
                case [name, version]:
                    versions[name] = version.lstrip('v')
    return versions


def generate_bundled_provides(submodule_versions):
    return "\n".join(
        [f"Provides: bundled({lib_name}) = {lib_version}" for lib_name, lib_version in submodule_versions.items()]
    )


def main():
    parser = argparse.ArgumentParser(description="Generate RPM spec files for different distributions")
    parser.add_argument("build_target", help="Target distribution (e.g., amzn2023)")

    args = parser.parse_args()
    build_target = args.build_target
    template_file = f"{build_target}.spec.template"

    # Checking if template exists
    template_path = templates_dir / template_file
    if not template_path.exists():
        print(f"Error: Template file {template_path} not found")
        sys.exit(1)

    version = get_version()
    rust_version = get_rust_version()
    submodule_versions = get_submodule_versions()
    current_date = datetime.now().strftime("%a %b %d %Y")

    template_data = {
        'version': version,
        'rust_version': rust_version,
        'build_target': build_target,
        'current_date': current_date,
        'submodule_versions': submodule_versions,
    }

    # Setting up template env
    env = Environment(loader=FileSystemLoader(templates_dir), trim_blocks=True, lstrip_blocks=True)

    template = env.get_template(template_file)

    spec_content = template.render(**template_data)

    output_file = f"{build_target}.spec"
    with open(output_file, "w") as f:
        f.write(spec_content)

    print(f"Generated {output_file}")


if __name__ == "__main__":
    main()
